(function(C){
  'use strict';
  const $=id=>document.getElementById(id),D=C.Data,M=C.Model,F=D.furniture;
  const icons={paw:'<path d="M7 16c0-5 10-5 10 0 0 4-10 4-10 0Z"/><ellipse cx="5" cy="10" rx="2" ry="2.7"/><ellipse cx="10" cy="5.8" rx="2" ry="2.7"/><ellipse cx="16" cy="6" rx="2" ry="2.7"/><ellipse cx="20" cy="11" rx="2" ry="2.7"/>',book:'<path d="M12 5v15M3 4c4-1 6 0 9 2 3-2 5-3 9-2v14c-4-1-6 0-9 2-3-2-5-3-9-2Z"/><path d="M6 8h3m-3 4h3m6-4h3m-3 4h3"/>',box:'<path d="m3 8 9-5 9 5-9 5Zm0 0v10l9 4 9-4V8M12 13v9M7 5l10 5"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="m9 3-1 3-3 1-2 4 2 2v3l4 3 3-1 3 1 4-3v-3l2-2-2-4-3-1-1-3Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/>'};
  Object.assign(icons,{shop:'<path d="M4 10v10h16V10M3 4h18l1 6c-2 2-4 2-5 0-2 2-4 2-5 0-2 2-4 2-5 0-1 2-3 2-5 0Z"/><path d="M9 20v-6h6v6"/>',camera:'<path d="m8 5 2-2h4l2 2h4v15H4V5Z"/><circle cx="12" cy="12" r="4"/>',heart:'<path d="M12 20 4 12C-2 5 6 0 12 7c6-7 14-2 8 5Z"/>',water:'<path d="M12 3c-2 4-7 8-7 12a7 7 0 0 0 14 0c0-4-5-8-7-12Z"/><path d="M8 15c0 2 1 3 3 3"/>',rest:'<path d="M3 17h18v4M3 13v8M6 13V9h5v4m0 0V7h8v10M3 13h16"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',check:'<path d="m5 12 4 4L19 6"/>'});
  function renderIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${icons[el.dataset.icon]||icons.paw}</svg>`;});}
  const esc=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  icons.storage='<path d="M4 4h16v16H4Z M4 10h16 M10 7h4 M10 14h4"/>';
  renderIcons();
  function storageError(message){$('storage-error').hidden=false;$('storage-error').textContent=message;$('save-state').textContent='存档异常';$('save-state').dataset.state='error';}
  const store=new M.Store(()=>window.localStorage,storageError),audio=new C.CottageAudio(),game=new C.Game($('game'),store,audio),panel=$('panel');
  let toastTimer,currentPanel='',recordId=null,lastFocus=null,studyDraft=null,buildFilter='all',quickSignature='';
  const uid=()=>globalThis.crypto?.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`;
  function toast(message,duration=3500){$('toast').textContent=message;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,duration);}
  function refresh(saved=false){
    const s=store.state,stats=M.stats(s);$('today-minutes').textContent=stats.todayMinutes;$('coin-count').textContent=s.coins;audio.configure(s.settings);
    if(saved){$('storage-error').hidden=true;$('save-state').textContent='已保存';delete $('save-state').dataset.state;}
    game.normalizePlayer();refreshCompanion();refreshControls();
  }
  function restTarget(){return game.targets.filter(t=>t.action==='sleep').sort((a,b)=>Math.hypot(a.anchor.x-game.player.x,a.anchor.y-game.player.y)-Math.hypot(b.anchor.x-game.player.x,b.anchor.y-game.player.y))[0];}
  function refreshCompanion(){
    const s=store.state,labels={idle:'陪着你',walk:'散步中',settle:'找个舒服的位置',sleep:'睡得香香的',drink:'喝水中',sit:'看云中',read:'认真读一读',celebrate:'为你摇尾巴',pet:'享受摸摸',stretch:'伸个懒腰',yawn:'打个哈欠',scratch:'挠挠耳朵',sniff:'低头嗅嗅'};
    const activity=game.idleLife.activity,autonomous=game.idleLife.phase==='walking'?{wander:'散步中',window:'去窗边',drink:'去喝水',sleep:'去休息'}:{wander:'四处看看',look:'四处张望',window:'看云中',drink:'喝水中',sleep:'睡得香香的',stretch:labels.stretch,yawn:labels.yawn,scratch:labels.scratch,sniff:labels.sniff};
    $('companion-name').textContent=s.name;$('companion-status').textContent=game.blocked?'安静等你':game.build?'等你布置':activity?autonomous[activity.kind]||labels[game.action]||labels.idle:labels[game.action]||labels.idle;
    document.querySelectorAll('[data-care]').forEach(b=>{const id=b.dataset.care,available=id==='pet'||(id==='rest'?!!restTarget():game.targets.some(t=>t.id===id)),name={pet:'摸摸',water:'喝水',rest:'休息',window:'看云'}[id];b.disabled=!available||!!game.build;const reason=game.build?'请先完成布置':available?'':id==='rest'?'请先从收纳中摆出小窝或沙发':'请先从收纳中摆出水碗';b.title=reason;b.setAttribute('aria-label',reason?`${name}：${reason}`:name);});
  }
  function refreshControls(){
    const available=store.state.placements.some(p=>p.id==='desk');$('study-button').disabled=!available;$('study-button').title=available?'':'请先从收纳中摆出书桌';$('study-button').setAttribute('aria-label',available?'记录学习':'记录学习：请先从收纳中摆出书桌');renderQuickInventory();
  }
  function renderQuickInventory(){
    const s=store.state,selected=game.build?.id,signature=JSON.stringify([s.owned,s.placements,selected,buildFilter]);
    if(signature===quickSignature)return;quickSignature=signature;
    const ids=s.owned.filter(id=>buildFilter==='all'||(buildFilter==='placed')===s.placements.some(p=>p.id===id));
    $('quick-count').textContent=`${ids.length} 件`;
    $('quick-inventory').innerHTML=ids.length?ids.map(id=>`<button class="quick-item ${selected===id?'selected':''}" data-quick-place="${id}" aria-pressed="${selected===id}"><canvas width="80" height="64" data-furniture="${id}" aria-hidden="true"></canvas><strong>${esc(F[id].name)}</strong><small>${s.placements.some(p=>p.id===id)?'已摆放':'收纳中'} · ${F[id].w}×${F[id].h} 格</small></button>`).join(''):'<p class="catalog-empty">暂无家具</p>';
    document.querySelectorAll('[data-build-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.buildFilter===buildFilter)));
    $('quick-inventory').querySelectorAll('[data-quick-place]').forEach(b=>b.addEventListener('click',()=>{game.selectFurniture(b.dataset.quickPlace);game.canvas.focus();}));paintItems();
  }
  function care(action){
    audio.activate();if(action==='pet')game.pet();else{const target=action==='rest'?restTarget():game.targets.find(t=>t.id===action);if(target)game.goToTarget(target.id);}
  }
  function takePhoto(){
    if(game.build){toast('先完成布置，再给小屋拍张照吧。');return;}
    const button=$('snapshot-button');button.disabled=true;
    try{
      game.render();const photo=document.createElement('canvas');photo.width=1152;photo.height=864;const ctx=photo.getContext('2d');ctx.imageSmoothingEnabled=false;ctx.drawImage(game.canvas,0,0,1152,864);
      photo.toBlob(blob=>{
        try{if(!blob)throw new Error('无法生成照片');const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`${store.state.name.replace(/[\\/:*?"<>|]/g,'')||'柴柴'}的小屋-${M.dayKey()}.png`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);toast('小屋照片已生成，请查看浏览器下载。');}
        catch(error){toast('照片没有生成成功，请再试一次。');}finally{button.disabled=false;}
      },'image/png');
    }catch(error){button.disabled=false;toast('暂时无法拍照，请稍后再试。');}
  }
  function commit(next){try{store.commit(next);refresh(true);return true;}catch(error){refresh();throw error;}}
  function openPanel(type,title,html,wide=false){
    if(!panel.open)lastFocus=document.activeElement;currentPanel=type;game.pause(true);$('panel-title').textContent=title;$('panel-body').innerHTML=html;panel.dataset.panel=type;panel.classList.toggle('wide',wide);renderIcons(panel);if(!panel.open)panel.showModal();audio.activate();audio.effect('page');
  }
  function closePanel(){game.pause(false);panel.close();}
  panel.addEventListener('close',()=>{if(currentPanel==='study'&&recordId&&$('study-title'))studyDraft={id:recordId,title:$('study-title').value,minutes:$('study-minutes').value};currentPanel='';recordId=null;game.pause(false);if(lastFocus?.isConnected)lastFocus.focus();else $('game').focus();});
  panel.addEventListener('click',e=>{if(e.target===panel){const r=panel.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closePanel();}});
  $('close-panel').addEventListener('click',closePanel);
  function openStudy(){
    recordId=studyDraft?.id||uid();
    openPanel('study','记录学习',`<form id="study-form"><label class="form-field">已完成的学习<textarea id="study-title" maxlength="120" required placeholder="今天学了什么？">${esc(studyDraft?.title||'')}</textarea></label><label class="form-field" for="study-minutes">时长<div class="minute-field"><input id="study-minutes" type="number" min="5" max="180" step="1" value="${esc(studyDraft?.minutes??25)}" required><span>分钟</span></div></label><div class="quick-minutes" role="group" aria-label="常用学习时长">${[15,25,45,60].map(n=>`<button type="button" data-minutes="${n}" aria-pressed="false">${n} 分钟</button>`).join('')}</div><p class="form-note">每分钟 1 爪印币，按北京时间每日最多 120 币。<br>记录提交后只读；刷新页面会清除未提交的草稿。</p><div id="reward-preview" class="reward-preview"></div><p id="study-error" class="form-error" role="alert" hidden></p><button class="button primary full" type="submit">确认记录</button></form>`);
    const preview=()=>{const n=Number($('study-minutes').value),remaining=Math.max(0,D.dailyCap-M.stats(store.state).todayCoins);const valid=Number.isInteger(n)&&n>=5&&n<=180;$('reward-preview').innerHTML=valid?`本次奖励 <strong>+${Math.min(n,remaining)} 爪印币</strong>${remaining===0?' · 今日奖励已满，学习照常记录。':''}`:'请填写 5～180 分钟的整数。';document.querySelectorAll('[data-minutes]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.minutes)===n)));};
    $('study-minutes').addEventListener('input',preview);preview();$('study-title').focus();
    document.querySelectorAll('[data-minutes]').forEach(b=>b.addEventListener('click',()=>{$('study-minutes').value=b.dataset.minutes;preview();}));
    $('study-form').addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key==='Enter'&&!e.isComposing){e.preventDefault();$('study-form').requestSubmit();}});
    let submitting=false;
    $('study-form').addEventListener('submit',e=>{
      e.preventDefault();if(submitting)return;submitting=true;const button=e.target.querySelector('[type=submit]');button.disabled=true;
      try{const result=M.recordStudy(store.state,{id:recordId,title:$('study-title').value,minutes:$('study-minutes').value});commit(result.state);studyDraft=null;recordId=null;closePanel();game.perform('read');toast(result.reward?`已记录 · +${result.reward} 爪印币`:'已记录 · 今日奖励已满',4500);}
      catch(error){$('study-error').hidden=false;$('study-error').textContent=error.message;button.disabled=false;submitting=false;preview();}
    });
  }
  function itemCard(id,mode){
    const f=F[id],owned=store.state.owned.includes(id),placed=store.state.placements.some(p=>p.id===id),missing=Math.max(0,(f.price||0)-store.state.coins);
    const behavior={desk:'记录学习',bed:'可休息',water:'可喝水',lamp:'灯光开关',sofa:'可趴卧',record:'音乐开关'}[id]||(f.rug?'可铺在家具下方':'');
    let action;
    if(mode==='shop')action=owned?`<button class="button secondary" data-place="${id}">${placed?'移动':'摆放'}</button>`:`<button class="button ${missing?'secondary':'primary'}" data-buy="${id}" ${missing?'disabled':''}>${missing?`还差 ${missing} 币`:'购买'}</button>`;
    else action=`<button class="button secondary" data-place="${id}">${placed?'移动':'摆放'}</button>`;
    return `<article class="item-card"><div class="item-art"><canvas width="80" height="64" data-furniture="${id}" aria-label="${esc(f.name)}"></canvas></div><div class="item-info"><h3>${esc(f.name)}</h3><span class="item-size">${f.w} × ${f.h} 格${behavior?` · ${behavior}`:''}</span><span class="item-tag">${owned?(placed?'已摆放':'收纳中'):`${f.price} 爪印币`}</span>${action}</div></article>`;
  }
  function paintItems(){document.querySelectorAll('[data-furniture]').forEach(canvas=>C.Art.icon(canvas,canvas.dataset.furniture));}
  function catalogMarkup(mode){
    const filters=mode==='shop'?[['all','全部'],['affordable','可购买'],['owned','已拥有']]:[['all','全部'],['placed','已摆放'],['stored','收纳中']];
    return `<div class="catalog-tabs" role="group" aria-label="${mode==='shop'?'商店':'家具'}筛选">${filters.map(([key,label])=>`<button data-catalog-filter="${key}" aria-pressed="${key==='all'}">${label}</button>`).join('')}</div><p id="catalog-count" class="catalog-count" role="status"></p><div id="catalog-items" class="item-grid"></div>`;
  }
  function renderCatalog(mode,filter='all'){
    const s=store.state,all=mode==='shop'?Object.keys(F).filter(id=>F[id].price):s.owned;
    const ids=all.filter(id=>{
      if(filter==='affordable')return !s.owned.includes(id)&&s.coins>=F[id].price;
      if(filter==='owned')return s.owned.includes(id);
      if(filter==='placed'||filter==='stored')return (filter==='placed')===s.placements.some(p=>p.id===id);
      return true;
    });
    $('catalog-count').textContent=`${ids.length} 件家具`;
    document.querySelectorAll('[data-catalog-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.catalogFilter===filter)));
    $('catalog-items').innerHTML=ids.length?ids.map(id=>itemCard(id,mode)).join(''):`<div class="catalog-empty"><span data-icon="box"></span><h3>${filter==='affordable'?'暂无可购买家具':filter==='owned'?'尚未购买家具':filter==='stored'?'暂无收纳家具':'暂无家具'}</h3><p>${filter==='affordable'?'记录学习可获得爪印币。':filter==='stored'?'在布置模式中选中家具，可免费收起。':'可以切换到「全部」。'}</p></div>`;
    renderIcons($('catalog-items'));paintItems();bindPlacementButtons();
    $('catalog-items').querySelectorAll('[data-buy]').forEach(button=>button.addEventListener('click',()=>{
      button.disabled=true;const id=button.dataset.buy;
      try{commit(M.buy(store.state,id));audio.effect('buy');closePanel();game.beginBuild();game.selectFurniture(id);toast(`已购买${F[id].name}，点击位置摆放。`);}
      catch(error){toast(error.message);renderCatalog(mode,filter);}
    }));
  }
  function openShop(){
    openPanel('shop','家具商店',`<div class="shop-balance"><span>每件限购 1 件</span><strong>${store.state.coins} <small>爪印币</small></strong></div>${catalogMarkup('shop')}`,true);
    renderCatalog('shop');document.querySelectorAll('[data-catalog-filter]').forEach(b=>b.addEventListener('click',()=>renderCatalog('shop',b.dataset.catalogFilter)));
  }
  function openInventory(){
    openPanel('inventory','小屋收纳',catalogMarkup('inventory'),true);
    renderCatalog('inventory');document.querySelectorAll('[data-catalog-filter]').forEach(b=>b.addEventListener('click',()=>renderCatalog('inventory',b.dataset.catalogFilter)));
  }
  function bindPlacementButtons(){
    $('panel-body').querySelectorAll('[data-place]').forEach(button=>button.addEventListener('click',()=>{const id=button.dataset.place;closePanel();if(!game.build)game.beginBuild();game.selectFurniture(id);}));
  }
  const dateLabel=time=>new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Shanghai',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date(time));
  function openJournal(){
    const stats=M.stats(store.state),rows=store.state.records.slice().reverse();
    openPanel('journal','学习手账',`<div class="journal-summary"><div><small>累计学习</small><strong>${stats.totalMinutes} <span>分钟</span></strong></div><div><small>学习天数</small><strong>${stats.days} <span>天</span></strong></div><div><small>今日收获</small><strong>${stats.todayCoins}<span> / 120</span></strong></div></div><div class="journal-tools"><div class="journal-filters" role="group" aria-label="记录日期筛选">${[['all','全部'],['today','今天'],['week','近 7 天']].map(([key,label])=>`<button data-journal-filter="${key}" aria-pressed="${key==='all'}">${label}</button>`).join('')}</div><label class="journal-search"><span class="sr-only">搜索学习记录</span><input id="journal-search" type="search" aria-label="搜索学习记录" placeholder="搜索学习记录" autocomplete="off"></label></div><p id="journal-result-count" class="form-note" role="status"></p><div id="journal-records"></div><p id="journal-empty" class="empty-note" hidden></p><button id="go-study" class="button secondary full">记录学习</button>`);
    let filter='all';
    const render=()=>{
      const query=$('journal-search').value.trim().toLocaleLowerCase(),today=M.dayKey(),week=M.dayKey(Date.now()-6*86400000);
      const selected=rows.filter(r=>{const day=M.dayKey(r.finishedAt);return (!query||r.title.toLocaleLowerCase().includes(query))&&(filter==='all'||(filter==='today'?day===today:day>=week&&day<=today));});
      $('journal-result-count').textContent=`${selected.length} 段学习 · ${selected.reduce((sum,r)=>sum+r.minutes,0)} 分钟`;
      document.querySelectorAll('[data-journal-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.journalFilter===filter)));
      const list=$('journal-records');list.replaceChildren();let day='',group=null;
      for(const r of selected){
        const key=M.dayKey(r.finishedAt);
        if(key!==day){day=key;group=document.createElement('section');group.className='journal-day';const heading=document.createElement('h3');heading.textContent=`${key===today?'今天 · ':''}${key.replaceAll('-',' / ')}`;group.append(heading);list.append(group);}
        const article=document.createElement('article');article.className='journal-record';const text=document.createElement('p');text.textContent=r.title;const footer=document.createElement('footer'),left=document.createElement('span'),right=document.createElement('span');
        left.textContent=`${dateLabel(r.finishedAt)} · ${r.minutes} 分钟`;right.textContent=`+${r.reward} 爪印币`;footer.append(left,right);article.append(text,footer);group.append(article);
      }
      $('journal-empty').hidden=selected.length>0;$('journal-empty').textContent=rows.length?'没有匹配记录':'暂无学习记录';
    };
    document.querySelectorAll('[data-journal-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.journalFilter;render();}));$('journal-search').addEventListener('input',render);render();
    $('go-study').disabled=!store.state.placements.some(p=>p.id==='desk');$('go-study').title=$('go-study').disabled?'先从收纳箱摆出书桌':'';
    $('go-study').addEventListener('click',()=>{closePanel();game.goToTarget('desk');});
  }
  function openSettings(){
    const s=store.state;
    openPanel('settings','小屋设置',`<form id="settings-form"><label class="form-field">柴犬名字<input id="name-input" value="${esc(s.name)}" maxlength="12" required autocomplete="off"></label><div class="setting-row"><label for="roam-input">自在活动<small>停手约 8 秒后，自主散步和休息</small></label><input type="checkbox" id="roam-input" ${s.settings.roam!==false?'checked':''}></div><div class="setting-row"><label for="sound-input">音效</label><input type="checkbox" id="sound-input" ${s.settings.sound?'checked':''}></div><div class="setting-row"><label for="music-input">背景音乐</label><input type="checkbox" id="music-input" ${s.settings.music?'checked':''}></div><p id="settings-error" class="form-error" role="alert" hidden></p><button class="button primary full" type="submit">保存设置</button></form><details class="settings-help"><summary>操作与存档</summary><div><p>点击地板走动，点击家具互动，点击柴犬摸摸。</p><p><kbd>WASD</kbd> / <kbd>方向键</kbd> 移动 · <kbd>Shift</kbd> 快走<br><kbd>E</kbd> 互动 · <kbd>B</kbd> 布置 · <kbd>Esc</kbd> 取消或关闭<br>布置时：<kbd>方向键</kbd> 微调 · <kbd>Enter</kbd> 放下 · <kbd>Z</kbd> 撤销<br>学习记录：<kbd>Ctrl / ⌘ + Enter</kbd> 提交</p><p>记录的是已完成的学习。提交后只读，每分钟获得 1 爪印币，按北京时间每日最多 120 币；超过上限照常记录。装饰不增加奖励。</p><p>关闭学习面板会保留草稿，刷新页面会清除草稿。进度只保存在当前浏览器，清理网站数据会清除进度。</p><p>自主活动可随时用按键或点击接管。背景音乐在主动操作后播放，离开标签页时暂停。</p></div></details>`);
    $('settings-form').addEventListener('submit',e=>{e.preventDefault();try{const name=$('name-input').value.trim();if(!name||name.length>12)throw new Error('给柴柴取一个 1～12 个字的名字吧。');const next=M.clone(store.state);next.name=name;next.settings={...next.settings,sound:$('sound-input').checked,music:$('music-input').checked,roam:$('roam-input').checked};commit(next);audio.activate();closePanel();toast('设置已保存');}catch(error){$('settings-error').hidden=false;$('settings-error').textContent=error.message;}});
  }
  function buildChanged(){
    const b=game.build;$('build-bar').hidden=!b;$('mode-label').hidden=!b;$('build-button').classList.toggle('active',!!b);
    document.body.classList.toggle('building',!!b);
    $('room-notebook').hidden=!!b;$('build-notebook').hidden=!b;refreshCompanion();renderQuickInventory();
    $('undo-placement').disabled=!game.canUndo;
    $('store-button').hidden=!b?.id;$('cancel-place').hidden=!b?.id;$('game').style.cursor=b?'crosshair':'default';
    if(!b)return;
    $('build-title').textContent=b.id?`摆放 ${F[b.id].name}`:'选择家具';
    $('build-help').textContent=b.id?(b.check?.ok?'点击放下 · Esc 取消':b.check?.reason):'点击家具开始摆放';
    $('build-help').classList.toggle('invalid',!!b.id&&!b.check?.ok);
  }
  game.onToast=toast;game.onBuildChange=buildChanged;game.onSave=(saved=true)=>refresh(saved);game.onActivity=refreshCompanion;game.onStatusChange=refreshCompanion;
  game.onInteract=target=>{
    if(target.action==='study')openStudy();
    else if(target.action==='shop')openShop();
    else if(target.action==='sleep')game.perform('sleep',target);
    else if(target.action==='drink')game.perform('drink',target);
    else if(target.action==='window')game.perform('window',target);
    else if(['lamp','music'].includes(target.action)){
      try{const next=M.clone(store.state);if(target.action==='lamp')next.lampOn=!next.lampOn;else next.settings.music=!next.settings.music;commit(next);audio.activate();toast(target.action==='lamp'?(next.lampOn?'灯光已开启':'灯光已关闭'):(next.settings.music?'音乐已开启':'音乐已暂停'));}catch(error){toast(error.message);}
    }
  };
  $('journal-button').addEventListener('click',openJournal);$('settings-button').addEventListener('click',openSettings);
  // Let Enter activate navigation even when furniture placement uses Enter too.
  $('home-link').addEventListener('keydown',e=>e.stopPropagation());
  $('shop-button').addEventListener('click',openShop);$('snapshot-button').addEventListener('click',takePhoto);$('room-inventory-button').addEventListener('click',openInventory);
  $('study-button').addEventListener('click',()=>game.goToTarget('desk'));
  document.querySelectorAll('[data-care]').forEach(b=>b.addEventListener('click',()=>care(b.dataset.care)));
  document.querySelectorAll('[data-build-filter]').forEach(b=>b.addEventListener('click',()=>{buildFilter=b.dataset.buildFilter;renderQuickInventory();}));
  $('build-button').addEventListener('click',()=>game.build?game.endBuild():game.beginBuild());
  $('inventory-button').addEventListener('click',openInventory);$('finish-build').addEventListener('click',()=>game.endBuild());$('cancel-place').addEventListener('click',()=>game.cancelPlacement());$('store-button').addEventListener('click',()=>game.storeSelected());
  $('undo-placement').addEventListener('click',()=>game.undoPlacement());
  function resize(){const compact=window.innerHeight<=800,sidebar=window.innerWidth>=1160?292:0;const roomWidth=Math.min(1520,window.innerWidth-64)-sidebar-12;const scale=Math.max(1,Math.min(3,Math.floor(Math.min(roomWidth/384,(window.innerHeight-(compact?112:136))/288))));document.documentElement.style.setProperty('--scale',scale);document.documentElement.dataset.scale=String(scale);}
  window.addEventListener('resize',resize);resize();
  window.addEventListener('storage',e=>{if(e.key===D.storageKey||e.key===null){if(store.synchronize()){game.clearAction();game.history=[];game.cancelPlacement();refresh();if(panel.open)closePanel();toast('另一扇小屋窗口更新了进度，已经同步。');}}});
  // Recalculate the Beijing-day counters without requiring a reload at midnight.
  setInterval(()=>{refresh();if(currentPanel==='study')$('study-minutes').dispatchEvent(new Event('input'));},15000);
  const brand=$('brand-shiba').getContext('2d');brand.imageSmoothingEnabled=false;C.Art.dog(brand,16,30,'down','idle',0);
  const portrait=$('companion-portrait').getContext('2d');portrait.imageSmoothingEnabled=false;C.Art.dog(portrait,16,30,'down','idle',0);
  refresh();game.canvas.focus({preventScroll:true});
  C.App={store,game,audio};
})(globalThis.Cottage);
