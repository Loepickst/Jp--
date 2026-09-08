// Deterministic frame stepping covers long idle behavior; a second context checks real time.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),fs=require('node:fs/promises'),path=require('node:path');
(async()=>{
  const out=process.env.COTTAGE_ARTIFACTS||path.join(__dirname,'artifacts');await fs.mkdir(out,{recursive:true});
  const browser=await chromium.launch({channel:'chrome',headless:true}),results=[],errors=[];
  const check=(name,value)=>{assert.ok(value,name);results.push(name);};
  const context=await browser.newContext({viewport:{width:1440,height:1000}});
  await context.addInitScript(()=>{window.requestAnimationFrame=()=>1;});
  const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
  const url=process.env.COTTAGE_URL||'http://127.0.0.1:8873/';
  const boot=async()=>{await page.goto(url);await page.waitForFunction(()=>window.Cottage?.App);await page.evaluate(()=>{const g=Cottage.App.game;g.idleLife.random=()=>.5;g.render();});};
  const tick=seconds=>page.evaluate(seconds=>{const g=Cottage.App.game;for(let t=0;t<seconds-.00001;t+=.04)g.update(Math.min(.04,seconds-t));g.render();},seconds);
  const snapshot=()=>page.evaluate(()=>{const g=Cottage.App.game;return {active:g.idleLife.active,phase:g.idleLife.phase,kind:g.idleLife.activity?.kind,action:g.action,player:{...g.player},render:g.renderPosition,destination:g.destination,blocked:g.blocked,build:!!g.build};});
  const start=id=>page.evaluate(id=>{const g=Cottage.App.game;g.idleLife.reset();const option=g.idleLife.candidates().find(o=>o.id===id);if(!option||!g.idleLife.start(option))throw Error(`Cannot start ${id}`);g.render();},id);
  const arrive=()=>page.evaluate(()=>{const g=Cottage.App.game;for(let i=0;i<500&&g.idleLife.phase==='walking';i++)g.update(.04);g.render();if(g.idleLife.phase!=='acting')throw Error('Did not arrive');});
  const clickScene=async(x,y)=>{const b=await page.locator('#game').boundingBox();await page.mouse.click(b.x+x*b.width/384,b.y+y*b.height/288);};
  try{
    await boot();check('new game enables idle activity',await page.evaluate(()=>Cottage.App.store.state.settings.roam===true));
    const untouched=await page.evaluate(()=>JSON.stringify(Cottage.App.store.state));
    await tick(7.9);check('dog waits through the initial idle grace period',!(await snapshot()).active);
    await tick(.2);check('first idle activity is an actual stroll',(await snapshot()).phase==='walking'&&(await snapshot()).kind==='wander');
    const p0=(await snapshot()).player;await tick(.5);const p1=(await snapshot()).player;
    check('self-directed walking moves at a gentle pace',Math.hypot(p1.x-p0.x,p1.y-p0.y)>18&&Math.hypot(p1.x-p0.x,p1.y-p0.y)<24);
    check('self-directed activity does not unlock audio or save progress',await page.evaluate(before=>!Cottage.App.audio.enabled&&JSON.stringify(Cottage.App.store.state)===before&&localStorage.getItem(Cottage.Data.storageKey)===null,untouched));
    await page.keyboard.down('d');const handoff=await snapshot();await tick(.25);await page.keyboard.up('d');
    check('keyboard immediately takes over an autonomous route',!handoff.active&&!handoff.destination&&(await snapshot()).player.x>handoff.player.x+12);
    await tick(7.5);check('releasing controls gives a fresh idle grace period',!(await snapshot()).active);
    await start('wander');await tick(.3);
    const point=await page.evaluate(()=>{const p=Cottage.App.game.player;return [{x:144,y:200},{x:224,y:216},{x:160,y:152}].find(q=>Math.hypot(q.x-p.x,q.y-p.y)>40);});
    await clickScene(point.x,point.y);check('floor clicks replace self-directed travel with the player destination',!(await snapshot()).active&&!!(await snapshot()).destination);
    await page.keyboard.press('Escape');check('Escape cancels the route and resets autonomy',!(await snapshot()).destination&&!(await snapshot()).active);
    await start('bed');await arrive();await tick(.8);check('the dog reaches its bed and settles into autonomous sleep',(await snapshot()).action==='sleep'&&!!(await snapshot()).render);
    await page.screenshot({path:path.join(out,'autonomy-nap.png')});
    const asleep=(await snapshot()).render;await clickScene(asleep.x,asleep.y-12);
    check('clicking the visible sleeping dog wakes it into a petting response',(await snapshot()).action==='pet'&&!(await snapshot()).active&&!(await snapshot()).render);
    await start('window');await arrive();check('autonomous window visits use the sitting animation',(await snapshot()).action==='sit'&&(await snapshot()).kind==='window');
    check('quiet activity text explains what the dog is doing',(await page.locator('#companion-status').innerText()).includes('看云'));
    await page.screenshot({path:path.join(out,'autonomy-window.png')});
    await start('water');await arrive();check('autonomous drinking uses the water animation',(await snapshot()).action==='drink');
    await tick(3);check('drinking ends without repeating or opening a panel',!(await snapshot()).active&&!(await page.locator('#panel').isVisible()));
    for(const kind of ['stretch','yawn','scratch','sniff']){
      const before=(await snapshot()).player;await start(kind);await tick(.5);
      check(`${kind} is an actual in-place animation`,(await snapshot()).action===kind&&(await snapshot()).player.x===before.x&&(await snapshot()).player.y===before.y);
      await page.screenshot({path:path.join(out,`shiba-${kind}.png`)});await page.keyboard.press('ArrowDown');
      check(`${kind} yields immediately to a movement tap`,!(await snapshot()).active&&(await snapshot()).action==='idle');
    }
    await start('stretch');await tick(4);check('a completed mannerism returns to ordinary idle',!(await snapshot()).active&&(await snapshot()).action==='idle');
    const running=await page.evaluate(()=>{const A=Cottage.Art,g=Cottage.App.game,draw=A.dog;let action='';A.dog=(...args)=>{action=args[4];draw(...args);};g.keys.add('ShiftLeft');g.keys.add('KeyD');g.update(.1);g.render();g.keys.clear();A.dog=draw;return action;});
    check('Shift walking selects the new running sprite cycle',running==='run');
    await start('wander');await page.locator('#journal-button').click();const paused=(await snapshot()).player;await tick(40);
    check('opening a journal stops autonomy and freezes position',!(await snapshot()).active&&(await snapshot()).blocked&&JSON.stringify((await snapshot()).player)===JSON.stringify(paused));
    await page.keyboard.press('Escape');await page.waitForTimeout(50);await tick(7);check('closing a panel does not resume old autonomous travel',!(await snapshot()).active);
    await start('wander');await page.keyboard.press('b');const buildPos=(await snapshot()).player;await tick(40);
    check('build mode cancels and suppresses autonomous activity',(await snapshot()).build&&!(await snapshot()).active&&JSON.stringify((await snapshot()).player)===JSON.stringify(buildPos));
    await page.keyboard.press('b');
    await page.evaluate(()=>Cottage.App.game.goToTarget('desk'));await tick(8);await page.locator('#study-form').waitFor();
    await page.locator('#study-title').fill('正在整理笔记，柴柴请等一下');const typing=(await snapshot()).player;await tick(90);
    check('typing a study draft never starts movement or creates records',JSON.stringify((await snapshot()).player)===JSON.stringify(typing)&&await page.evaluate(()=>Cottage.App.store.state.records.length===0));
    await page.keyboard.press('Escape');await page.waitForTimeout(50);
    await start('wander');await page.evaluate(()=>window.dispatchEvent(new Event('blur')));const background=(await snapshot()).player;await tick(30);
    check('window blur cancels autonomous motion',!(await snapshot()).active&&JSON.stringify((await snapshot()).player)===JSON.stringify(background));
    await page.evaluate(()=>window.dispatchEvent(new Event('focus')));await tick(7.9);check('returning to the window starts a fresh grace period',!(await snapshot()).active);
    await start('bed');await tick(.2);
    await page.evaluate(()=>{const {game:g,store}=Cottage.App;store.commit(Cottage.Model.place(store.state,'bed',null));g.refreshWorld();g.render();});
    check('changed furniture cancels stale autonomous destinations',!(await snapshot()).active&&!(await snapshot()).destination);
    await page.evaluate(()=>{const {game:g,store}=Cottage.App;store.commit(Cottage.Model.place(store.state,'bed',{x:17,y:7}));g.refreshWorld();});
    await page.locator('#settings-button').click();check('settings expose a checked autonomous activity control',await page.locator('#roam-input').isChecked());
    await page.locator('#roam-input').uncheck();await page.getByRole('button',{name:'保存设置'}).click();await page.waitForTimeout(50);await page.reload();await page.waitForFunction(()=>window.Cottage?.App);await tick(60);
    check('turning off autonomous activity persists through reload',await page.evaluate(()=>Cottage.App.store.state.settings.roam===false)&&!(await snapshot()).active);
    await page.locator('#settings-button').click();await page.locator('#roam-input').check();await page.getByRole('button',{name:'保存设置'}).click();await page.waitForTimeout(50);
    await page.evaluate(()=>{const g=Cottage.App.game;let seed=123456;g.idleLife.random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};});
    const longRun=await page.evaluate(()=>{
      const {game:g,store}=Cottage.App,before=JSON.stringify(store.state),raw=localStorage.getItem(Cottage.Data.storageKey),seen=new Set();let unsafe=0,dispatch=0;
      const interact=g.onInteract;g.onInteract=()=>dispatch++;
      for(let i=0;i<15000;i++){g.update(.04);if(g.idleLife.activity)seen.add(g.idleLife.activity.kind);if(!Cottage.Model.canStand(g.player.x,g.player.y,g.placements))unsafe++;}
      g.onInteract=interact;g.render();return {seen:[...seen],unsafe,dispatch,same:before===JSON.stringify(store.state)&&raw===localStorage.getItem(Cottage.Data.storageKey),panel:document.getElementById('panel').open};
    });
    check('ten simulated minutes visit all nine kinds of idle activity',['wander','look','window','sleep','drink','stretch','yawn','scratch','sniff'].every(kind=>longRun.seen.includes(kind)));
    check('long autonomous sessions never cross walls or furniture',longRun.unsafe===0);
    check('autonomy never opens forms, spends coins or records fake learning',longRun.dispatch===0&&!longRun.panel&&longRun.same);
    const real=await browser.newContext({viewport:{width:1440,height:1000}}),live=await real.newPage();live.on('pageerror',e=>errors.push(e.message));
    await live.goto(url);await live.waitForFunction(()=>window.Cottage?.App);
    await live.waitForFunction(()=>Cottage.App.game.idleLife.active&&Cottage.App.game.action==='walk',null,{timeout:12000});
    check('the normal animation loop starts autonomous walking without test clock changes',await live.evaluate(()=>Math.hypot(Cottage.App.game.player.x-192,Cottage.App.game.player.y-248)>0));
    await live.keyboard.press('Escape');check('real-time Escape immediately returns control',await live.evaluate(()=>!Cottage.App.game.idleLife.active&&!Cottage.App.game.destination));
    await real.close();check('autonomous activity introduces no browser errors',errors.length===0);
    await fs.writeFile(path.join(out,'autonomy-report.json'),JSON.stringify({passed:results.length,results,errors,longRun},null,2));
    console.log(JSON.stringify({passed:results.length,errors,longRun,out},null,2));
  }catch(error){await page.screenshot({path:path.join(out,'autonomy-failure.png')});console.error(JSON.stringify({failure:error.message,results,errors,snapshot:await snapshot()},null,2));process.exitCode=1;}
  finally{await browser.close();}
})();
