(function(C){
  'use strict';
  const D=C.Data,M=C.Model,A=C.Art,F=D.furniture;
  class Game {
    constructor(canvas,store,audio){
      this.canvas=canvas;this.ctx=canvas.getContext('2d');this.ctx.imageSmoothingEnabled=false;this.store=store;this.audio=audio;
      this.player={...D.spawn};this.keys=new Set();this.blocked=false;this.build=null;this.target=null;this.action='idle';this.actionTime=0;this.time=0;this.lastStep=0;this.pointer=null;this.renderPosition=null;this.onInteract=()=>{};this.onBuildChange=()=>{};this.onToast=()=>{};this.onSave=()=>{};
      this.route=[];this.destination=null;this.arrivalTarget=null;this.history=[];this.hover=null;this.lastHint='';this.hint=document.getElementById('interaction');this.hintText=this.hint.querySelector('span');this.hintKey=this.hint.querySelector('kbd');
      this.suspended=false;this.onActivity=()=>{};this.idleLife=new C.IdleLife(this);
      this.motionQuery=window.matchMedia('(prefers-reduced-motion: reduce)');this.reducedMotion=this.motionQuery.matches;
      this.motionQuery.addEventListener?.('change',e=>{this.reducedMotion=e.matches;});this.refreshWorld();
      this.bind();let previous=performance.now();const loop=now=>{const dt=Math.max(0,Math.min((now-previous)/1000,.04));previous=now;if(!document.hidden){this.update(dt);this.render();}requestAnimationFrame(loop);};requestAnimationFrame(loop);
    }
    get placements(){return this.store.state.placements;}
    refreshWorld(){
      if(this.worldReference===this.placements)return;
      this.worldReference=this.placements;const signature=JSON.stringify(this.placements);
      if(signature!==this.layoutSignature){this.idleLife.reset();this.stopRoute();}
      this.layoutSignature=signature;this.targets=M.anchors(this.placements);
    }
    stopRoute(){this.route=[];this.destination=null;this.arrivalTarget=null;}
    takeControl(){this.idleLife.reset();}
    bind(){
      document.addEventListener('keydown',e=>{
        this.takeControl();
        if(this.blocked||e.ctrlKey||e.metaKey||e.altKey||e.isComposing)return;
        const tag=document.activeElement?.tagName;if(['INPUT','TEXTAREA','SELECT'].includes(tag))return;
        if(this.build?.id){
          const direction={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[e.code];
          if(direction){e.preventDefault();const p=this.build.candidate;this.pointer={x:(p.x+direction[0])*16+this.build.grab.x,y:(p.y+direction[1])*16+this.build.grab.y};this.updateCandidate();this.onBuildChange();return;}
          if(e.code==='Enter'){e.preventDefault();if(!e.repeat)this.confirmPlacement();return;}
        }
        if(this.build&&e.code==='KeyZ'){e.preventDefault();if(!e.repeat)this.undoPlacement();return;}
        if(['ShiftLeft','ShiftRight'].includes(e.code)){this.keys.add(e.code);return;}
        if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)){
          e.preventDefault();this.stopRoute();if(!this.build)this.clearAction();this.keys.add(e.code);this.audio.activate();
        }
        if(e.repeat)return;
        if(e.code==='KeyE'&&!this.build){e.preventDefault();this.interact();}
        if(e.code==='KeyB'){e.preventDefault();this.build?this.endBuild():this.beginBuild();}
        if(e.code==='Escape'){e.preventDefault();if(this.build?.id)this.cancelPlacement();else if(this.build)this.endBuild();else {this.stopRoute();this.clearAction();}}
      });
      document.addEventListener('keyup',e=>this.keys.delete(e.code));
      document.addEventListener('pointerdown',e=>{if(e.target!==this.canvas)this.takeControl();});
      window.addEventListener('blur',()=>{this.suspended=true;this.takeControl();this.keys.clear();this.stopRoute();});
      window.addEventListener('focus',()=>{this.suspended=false;this.takeControl();});
      document.addEventListener('visibilitychange',()=>{this.takeControl();this.keys.clear();if(document.hidden)this.stopRoute();this.audio.syncMusic();});
      this.canvas.addEventListener('pointermove',e=>{
        const b=this.canvas.getBoundingClientRect();this.pointer={x:(e.clientX-b.left)*384/b.width,y:(e.clientY-b.top)*288/b.height};
        if(this.build?.id&&!this.blocked){this.updateCandidate();this.onBuildChange();}
        this.updateHover();
      });
      this.canvas.addEventListener('pointerleave',()=>{this.pointer=null;this.hover=null;});
      this.canvas.addEventListener('contextmenu',e=>{e.preventDefault();this.takeControl();if(this.build?.id)this.cancelPlacement();else this.stopRoute();});
      this.canvas.addEventListener('pointerdown',e=>{
        if(e.button!==0||this.blocked)return;this.canvas.focus();this.audio.activate();
        const b=this.canvas.getBoundingClientRect();this.pointer={x:(e.clientX-b.left)*384/b.width,y:(e.clientY-b.top)*288/b.height};
        if(!this.build){
          const hit=this.hitTarget(this.pointer);
          // Hit-test before waking a resting dog: its displayed position can be on a bed.
          this.takeControl();
          if(hit?.id==='pet'){this.pet();return;}
          if(hit){this.goToTarget(hit.id);return;}
          const point={x:Math.max(37,Math.min(347,this.pointer.x)),y:Math.max(100,Math.min(252,this.pointer.y))};
          if(this.pointer.x<32||this.pointer.x>352||this.pointer.y<96||this.pointer.y>256){this.onToast('点木地板走动，也可以直接点书桌或信箱。');return;}
          if(!this.walkTo(point))this.onToast('这里走不过去，换一块空地试试。');return;
        }
        if(this.build.id){this.updateCandidate();this.confirmPlacement();return;}
        const ordered=this.placements.slice().sort((a,b)=>(F[a.id].rug?-100:0)+(a.y+F[a.id].h)*16-((F[b.id].rug?-100:0)+(b.y+F[b.id].h)*16));
        const hit=ordered.reverse().find(p=>{const f=F[p.id],x=p.x*16,y=p.y*16-f.lift;return this.pointer.x>=x&&this.pointer.x<x+f.w*16&&this.pointer.y>=y&&this.pointer.y<(p.y+f.h)*16;});
        if(hit)this.selectFurniture(hit.id,this.pointer);
      });
    }
    hitTarget(point){
      if(!point)return null;const p=this.renderPosition||this.player;
      if(point.x>=p.x-14&&point.x<=p.x+14&&point.y>=p.y-29&&point.y<=p.y+2)return {id:'pet',name:`摸摸${this.store.state.name}`};
      return this.targets.slice().sort((a,b)=>b.anchor.y-a.anchor.y).find(t=>{
        const p=this.placements.find(p=>p.id===t.id),f=p&&F[p.id];
        const r=t.visual||(p?{x:p.x*16,y:p.y*16-f.lift,w:f.w*16,h:f.h*16+f.lift}:null);
        return r&&point.x>=r.x&&point.x<r.x+r.w&&point.y>=r.y&&point.y<r.y+r.h;
      })||null;
    }
    updateHover(){
      this.hover=this.blocked||this.build?null:this.hitTarget(this.pointer);
      const cursor=this.build?'crosshair':this.hover?'pointer':'default';if(this.canvas.style.cursor!==cursor)this.canvas.style.cursor=cursor;
    }
    walkTo(point,targetId=null,automatic=false){
      if(!automatic)this.takeControl();
      this.refreshWorld();if(this.blocked||this.build)return false;
      const path=M.findPath(this.placements,this.player,point);if(!path)return false;
      this.clearAction();this.keys.clear();this.route=path;this.destination={...point};this.arrivalTarget=targetId;return true;
    }
    goToTarget(id){
      this.takeControl();
      this.refreshWorld();const target=this.targets.find(t=>t.id===id);
      if(!target){this.onToast('这件家具在收纳箱里，先把它摆出来吧。');return false;}
      if(!this.walkTo(target.anchor,id)){this.onToast('暂时走不到那里，调整一下附近的家具吧。');return false;}return true;
    }
    pet(){
      this.takeControl();
      this.stopRoute();this.clearAction();this.action='pet';this.player.direction='down';this.audio.effect('pet');
      this.onToast(`${this.store.state.name}蹭蹭你的手。今天也很喜欢你。`,3000);
    }
    clearAction(){this.action='idle';this.actionTime=0;this.renderPosition=null;this.actionTarget=null;}
    pause(value){this.takeControl();this.blocked=value;this.keys.clear();if(value)this.stopRoute();this.updateHover();}
    normalizePlayer(){
      this.refreshWorld();
      if(!M.canStand(this.player.x,this.player.y,this.placements)){this.player={...D.spawn};this.clearAction();}
    }
    update(dt){
      this.time+=dt;this.refreshWorld();this.updateHover();
      if(this.blocked||this.suspended){this.idleLife.reset();this.target=null;return;}
      this.actionTime+=dt;
      if(this.build){this.idleLife.reset();this.target=null;return;}
      let dx=Number(this.keys.has('KeyD')||this.keys.has('ArrowRight'))-Number(this.keys.has('KeyA')||this.keys.has('ArrowLeft'));
      let dy=Number(this.keys.has('KeyS')||this.keys.has('ArrowDown'))-Number(this.keys.has('KeyW')||this.keys.has('ArrowUp'));
      const speed=D.speed*(this.idleLife.active ? 0.68 : (this.keys.has('ShiftLeft')||this.keys.has('ShiftRight'))?1.5:1);
      if(!dx&&!dy&&this.destination){
        let budget=speed*dt;
        this.clearAction();
        while(this.route.length&&budget>0){
          const goal=this.route[0],vx=goal.x-this.player.x,vy=goal.y-this.player.y,length=Math.hypot(vx,vy);
          if(length<.05){this.route.shift();continue;}
          const step=Math.min(budget,length),next={x:this.player.x+vx/length*step,y:this.player.y+vy/length*step};
          if(!M.clearSegment(this.player,next,this.placements)){this.stopRoute();break;}
          this.player.direction=Math.abs(vx)>Math.abs(vy)?(vx>0?'right':'left'):(vy>0?'down':'up');
          this.player.x=next.x;this.player.y=next.y;this.action='walk';budget-=step;
          if(step>=length-.001)this.route.shift();
        }
        if(this.action==='walk'&&this.time-this.lastStep>.26){this.audio.effect('step');this.lastStep=this.time;}
        if(this.destination&&!this.route.length){
          const id=this.arrivalTarget,automatic=this.idleLife.active;this.stopRoute();this.clearAction();
          if(automatic)this.idleLife.arrive();
          else{const target=this.targets.find(t=>t.id===id);if(target&&Math.hypot(target.anchor.x-this.player.x,target.anchor.y-this.player.y)<19){this.target=target;this.onInteract(target);return;}}
        }
      }
      if(dx||dy){
        this.clearAction();this.player.direction=dx?(dx>0?'right':'left'):(dy>0?'down':'up');
        const length=Math.hypot(dx,dy);dx=dx/length*speed*dt;dy=dy/length*speed*dt;
        const px=this.player.x,py=this.player.y;
        if(M.canStand(px+dx,py,this.placements))this.player.x+=dx;
        if(M.canStand(this.player.x,py+dy,this.placements))this.player.y+=dy;
        if(Math.abs(this.player.x-px)+Math.abs(this.player.y-py)>.01){this.action='walk';if(this.time-this.lastStep>.26){this.audio.effect('step');this.lastStep=this.time;}}
      }else if(this.action==='walk'&&!this.destination)this.clearAction();
      if(this.action==='settle'&&this.actionTime>.65){this.action='sleep';this.actionTime=0;}
      if(this.action==='read'&&this.actionTime>1.3){this.action='celebrate';this.actionTime=0;this.audio.effect('buy');}
      if((this.action==='celebrate'&&this.actionTime>2)||(this.action==='drink'&&this.actionTime>2.2)||(this.action==='pet'&&this.actionTime>2.3))this.clearAction();
      if(['stretch','yawn','scratch','sniff'].includes(this.action)&&this.actionTime>=A.animationMetadata.animations[this.action].durations.reduce((sum,n)=>sum+n,0)/1000)this.clearAction();
      this.target=this.targets.map(t=>({...t,distance:Math.hypot(t.anchor.x-this.player.x,t.anchor.y-this.player.y)})).filter(t=>t.distance<=19).sort((a,b)=>a.distance-b.distance||a.id.localeCompare(b.id))[0]||null;
      this.idleLife.update(dt);
    }
    interact(){
      this.takeControl();
      if(this.blocked||this.build||!this.target)return;this.audio.activate();this.keys.clear();this.stopRoute();this.onInteract(this.target);
    }
    perform(action,target,automatic=false){
      if(!automatic)this.takeControl();
      this.clearAction();this.actionTarget=target;this.player.direction='up';
      if(action==='sleep'){
        const p=this.placements.find(p=>p.id===target?.id),f=p&&F[p.id];if(!p||!f){this.clearAction();return false;}
        this.action='settle';this.renderPosition={x:(p.x+f.w/2)*16,y:(p.y+f.h/2)*16+6-(p.id==='sofa'?5:0)};
      }else if(action==='window'){this.action='sit';this.player.direction='up';}
      else if(action==='drink'){this.action='drink';this.player.direction='right';this.audio.effect('water');}
      else if(action==='read'){this.action='read';this.player.direction='down';this.audio.effect('page');}
      else if(['stretch','yawn','scratch','sniff'].includes(action)){this.action=action;this.player.direction=['stretch','sniff'].includes(action)?'right':'down';}
      return true;
    }
    beginBuild(){if(this.blocked)return;this.takeControl();this.stopRoute();this.clearAction();this.keys.clear();this.history=[];this.build={id:null,candidate:null,check:null};this.onBuildChange();this.canvas.focus();}
    endBuild(){this.takeControl();this.build=null;this.onBuildChange();this.canvas.focus();}
    selectFurniture(id,grabPoint){
      if(!this.build)this.beginBuild();if(!this.build||!this.store.state.owned.includes(id))return;
      this.build.id=id;const old=this.placements.find(p=>p.id===id);
      this.build.grab=old&&grabPoint?{x:grabPoint.x-old.x*16,y:grabPoint.y-old.y*16}:{x:8,y:8};
      this.pointer=old?{x:old.x*16+this.build.grab.x,y:old.y*16+this.build.grab.y}:{x:8*16+8,y:9*16+8};this.updateCandidate();this.onBuildChange();
    }
    updateCandidate(){
      if(!this.build?.id||!this.pointer)return;
      const p={id:this.build.id,x:Math.round((this.pointer.x-this.build.grab.x)/16),y:Math.round((this.pointer.y-this.build.grab.y)/16)};
      if(this.build.candidate?.x===p.x&&this.build.candidate?.y===p.y&&this.build.checkedLayout===this.layoutSignature)return;
      this.build.candidate=p;this.build.check=M.validateLayout(this.placements.filter(a=>a.id!==p.id).concat(p),this.player);
      this.build.checkedLayout=this.layoutSignature;
    }
    cancelPlacement(){if(!this.build)return;this.build={id:null,candidate:null,check:null};this.onBuildChange();}
    confirmPlacement(){
      if(!this.build?.candidate)return;
      if(!this.build.check.ok){this.onToast(this.build.check.reason);return;}
      try{const p=this.build.candidate,before=M.clone(this.placements);this.store.commit(M.place(this.store.state,p.id,p,this.player));this.rememberLayout(before);this.onSave();this.audio.effect('click');this.onToast(`${F[p.id].name}，就放在这里。`);this.cancelPlacement();}catch(error){this.onToast(error.message);this.onSave(false);}
    }
    storeSelected(){
      if(!this.build?.id)return;
      try{const id=this.build.id,before=M.clone(this.placements);this.store.commit(M.place(this.store.state,id,null,this.player));this.rememberLayout(before);this.onSave();this.onToast(`${F[id].name}已放回收纳箱。`);this.cancelPlacement();}catch(error){this.onToast(error.message);this.onSave(false);}
    }
    rememberLayout(before){
      if(JSON.stringify(before)===JSON.stringify(this.placements))return;
      this.history.push({before,after:JSON.stringify(this.placements)});if(this.history.length>20)this.history.shift();
    }
    get canUndo(){return !!this.history.length&&this.history[this.history.length-1].after===JSON.stringify(this.placements);}
    undoPlacement(){
      if(!this.build||!this.canUndo)return;
      try{const next=M.clone(this.store.state),entry=this.history[this.history.length-1],valid=M.validateLayout(entry.before,this.player);if(!valid.ok)throw new Error(valid.reason);next.placements=M.clone(entry.before);this.store.commit(next);this.history.pop();this.onSave();this.cancelPlacement();this.onToast('已恢复上一步的布局。');}catch(error){this.onToast(error.message);this.onSave(false);}
    }
    render(){
      const c=this.ctx;c.imageSmoothingEnabled=false;c.clearRect(0,0,384,288);c.drawImage(A.background,0,0);
      A.ambience(c,this.time,this.reducedMotion);
      const hidden=this.build?.id,items=this.placements.filter(p=>p.id!==hidden);
      if(this.store.state.lampOn){for(const p of items.filter(p=>p.id==='lamp'))A.lampGlow(c,p.x*16,p.y*16);}
      for(const p of items.filter(p=>F[p.id].rug))A.drawFurniture(c,p);
      if(this.destination&&!this.build&&!this.idleLife.active){
        const x=Math.round(this.destination.x),y=Math.round(this.destination.y),pulse=this.reducedMotion?0:Math.floor(this.time*3)%2;
        for(const [dx,dy]of[[-6,-4],[4,-4],[-6,3],[4,3]]){A.rect(c,x+dx-pulse,y+dy,3,1,'cream');}
        A.paw(c,x-6,y-4,'honey');
      }
      const focus=this.hover?.anchor?this.hover:this.target;
      if(focus&&!this.blocked&&!this.build&&!this.destination&&['idle','walk'].includes(this.action)){
        const x=Math.round(focus.anchor.x),y=Math.round(focus.anchor.y);
        A.rect(c,x-6,y-3,3,1,'cream');A.rect(c,x+4,y-3,3,1,'cream');A.rect(c,x-6,y+3,3,1,'cream');A.rect(c,x+4,y+3,3,1,'cream');
      }
      if(this.build){
        for(let x=32;x<=352;x+=16)A.rect(c,x,96,1,160,'#7a8c6350');
        for(let y=96;y<=256;y+=16)A.rect(c,32,y,320,1,'#7a8c6350');
        for(const t of M.anchors(items)){A.rect(c,t.anchor.x-3,t.anchor.y-3,6,6,'#7a8c6399');}
      }
      const p=this.renderPosition||this.player;
      const layers=items.filter(i=>!F[i.id].rug).map(i=>({y:(i.y+F[i.id].h)*16,draw:()=>{A.drawFurniture(c,i,this.store.state.lampOn);A.furnitureLife(c,i,this.time,this.reducedMotion,!!this.audio.timer);}}));
      layers.push({y:256,draw:()=>A.mailbox(c)});
      layers.push({y:this.renderPosition&&this.actionTarget?((this.placements.find(i=>i.id===this.actionTarget.id)?.y||0)+(F[this.actionTarget.id]?.h||0))*16+1:p.y,draw:()=>{
        if(!this.renderPosition)A.oval(c,Math.round(p.x)-10,Math.round(p.y)-2,21,6,'shadow');
        let action=this.action,direction=this.player.direction;
        if(action==='settle'){direction=['left','up','right','down'][Math.floor(this.actionTime/.16)%4];action='idle';}
        if(action==='sit'){direction='up';action='sit';}
        if(action==='walk'&&!this.idleLife.active&&(this.keys.has('ShiftLeft')||this.keys.has('ShiftRight')))action='run';
        A.dog(c,p.x,p.y,direction,action,['walk','idle','run'].includes(action)?this.time:this.actionTime);
        if(this.action==='pet'){const rise=this.reducedMotion?0:Math.floor(this.actionTime*4)%5;A.heart(c,Math.round(p.x)+10,Math.round(p.y)-36-rise,'redLight');if(this.actionTime>.8)A.heart(c,Math.round(p.x)-15,Math.round(p.y)-32-rise,'pink');}
        if(this.action==='sleep'){const y=Math.round(p.y)-26-Math.floor(this.time%2);A.rect(c,p.x+13,y,5,1,'cream');A.rect(c,p.x+16,y+1,1,1,'cream');A.rect(c,p.x+15,y+2,1,1,'cream');A.rect(c,p.x+14,y+3,1,1,'cream');A.rect(c,p.x+13,y+4,5,1,'cream');}
      }});
      layers.sort((a,b)=>a.y-b.y).forEach(l=>l.draw());
      A.front(c);
      if(this.build?.candidate){
        const q=this.build.candidate,f=F[q.id],ok=this.build.check.ok,color=ok?'greenDark':'red',x=q.x*16,y=q.y*16;
        c.globalAlpha=.72;A.drawFurniture(c,q,this.store.state.lampOn);c.globalAlpha=1;
        for(let i=0;i<f.w*16;i+=4){A.rect(c,x+i,y,2,1,color);A.rect(c,x+i,y+f.h*16-1,2,1,color);}
        for(let i=0;i<f.h*16;i+=4){A.rect(c,x,y+i,1,2,color);A.rect(c,x+f.w*16-1,y+i,1,2,color);}
        A.rect(c,x+2,y+2,8,8,ok?'green':'red');
        if(ok){A.rect(c,x+4,y+6,2,2,'white');A.rect(c,x+6,y+4,2,3,'white');}else{A.rect(c,x+5,y+3,2,4,'white');A.rect(c,x+5,y+8,2,1,'white');}
      }
      // A few slow dust motes in the sunbeam; reduced-motion users see a still room.
      for(let i=0;i<4;i++){const x=179+(i*19)%62,y=104+Math.floor((i*11+(this.reducedMotion?0:this.time*2))%37);A.rect(c,x,y,1,1,'cream');}
      const shown=this.hover||this.target,visible=!!shown&&!this.blocked&&!this.build&&['idle','walk'].includes(this.action);
      const actions={study:'记录学习',shop:'选购家具',sleep:'休息一会儿',drink:'喝口水',window:'看看窗外',lamp:'开关暖灯',music:'播放 / 暂停'};
      const label=visible?`${shown.name}${actions[shown.action]?' · '+actions[shown.action]:''}`:'';
      const key=visible?`${this.hover?'点':'E'}:${label}`:'';
      if(key!==this.lastHint){this.hint.hidden=!visible;this.hintText.textContent=label;this.hintKey.textContent=this.hover?'点':'E';this.lastHint=key;}
      if(visible){const scale=this.canvas.clientWidth/384,anchor=this.hover&&this.pointer?{x:this.pointer.x,y:this.pointer.y-9}:{x:this.player.x,y:this.player.y-34};this.hint.style.left=`${Math.max(76,Math.min(308,anchor.x))*scale}px`;this.hint.style.top=`${Math.max(24,anchor.y)*scale}px`;}
      const statusKey=[this.action,this.idleLife.phase,this.blocked,!!this.build].join(':');
      if(statusKey!==this.lastStatusKey){this.lastStatusKey=statusKey;this.onStatusChange?.();}
    }
  }
  C.Game=Game;
})(globalThis.Cottage);
