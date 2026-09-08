// Additional browser regressions for pointer navigation, drafting and reversible placement.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const path=require('node:path');
(async()=>{
  const output=process.env.COTTAGE_ARTIFACTS||path.join(__dirname,'artifacts');await fs.mkdir(output,{recursive:true});
  const browser=await chromium.launch({channel:'chrome',headless:true});
  const context=await browser.newContext({viewport:{width:1440,height:1000}}),page=await context.newPage(),errors=[],results=[];
  page.on('pageerror',e=>errors.push(e.message));
  const check=(name,value)=>{assert.ok(value,name);results.push(name);};
  const position=()=>page.evaluate(()=>({...Cottage.App.game.player}));
  const state=()=>page.evaluate(()=>JSON.parse(JSON.stringify(Cottage.App.store.state)));
  const scene=async(x,y)=>{const b=await page.locator('#game').boundingBox();await page.mouse.click(b.x+x*b.width/384,b.y+y*b.height/288);};
  const hold=async(keys,ms)=>{for(const k of keys)await page.keyboard.down(k);await page.waitForTimeout(ms);for(const k of keys)await page.keyboard.up(k);await page.waitForTimeout(40);};
  const arrived=()=>page.waitForFunction(()=>!Cottage.App.game.destination,{},{timeout:8000});
  try{
    await page.goto(process.env.COTTAGE_URL||'http://127.0.0.1:8873/');await page.waitForFunction(()=>window.Cottage?.App);
    await scene(96,92);await page.locator('#study-form').waitFor({state:'visible',timeout:8000});
    check('clicking a desk walks there and opens the real study form',Math.hypot((await position()).x-96,(await position()).y-136)<1);
    await page.locator('#study-title').fill('读了三页书，还整理了笔记。');await page.locator('[data-minutes="45"]').click();
    check('quick durations update both the field and reward preview',await page.locator('#study-minutes').inputValue()==='45'&&(await page.locator('#reward-preview').innerText()).includes('+45'));
    await page.keyboard.press('Escape');await page.waitForTimeout(100);await scene(96,92);await page.locator('#study-form').waitFor({state:'visible'});
    check('closing and reopening preserves the unsubmitted draft',await page.locator('#study-title').inputValue()==='读了三页书，还整理了笔记。'&&await page.locator('#study-minutes').inputValue()==='45');
    check('an unsubmitted draft never gives currency', (await state()).coins===0&&(await state()).records.length===0);
    await page.screenshot({path:path.join(output,'polished-study-form.png')});
    await page.locator('[data-minutes="15"]').click();await page.locator('#study-title').press('Control+Enter');await page.waitForTimeout(100);
    check('keyboard submission commits one complete record', (await state()).coins===15&&(await state()).records.length===1);
    await page.keyboard.press('Escape');await page.waitForTimeout(100);const p=await position();await scene(p.x,p.y-15);await page.waitForTimeout(140);
    check('petting triggers a dedicated response with no currency reward',await page.evaluate(()=>Cottage.App.game.action==='pet')&&(await state()).coins===15);
    await page.screenshot({path:path.join(output,'petting-shiba.png')});
    await scene(300,232);await page.waitForTimeout(100);await hold(['a'],130);
    check('keyboard movement cancels an automatic route',await page.evaluate(()=>!Cottage.App.game.destination));
    await scene(192,216);await arrived();
    const straightStart=await position();await hold(['a'],350);const straightEnd=await position();
    await scene(192,216);await arrived();
    const fastStart=await position();await hold(['Shift','a'],350);const fastEnd=await position();
    check('Shift provides a distinct fast walk',fastStart.x-fastEnd.x>(straightStart.x-straightEnd.x)*1.3);
    await scene(320,216);await page.waitForTimeout(80);await page.keyboard.press('Escape');
    check('Escape cancels a destination',await page.evaluate(()=>!Cottage.App.game.destination));
    await page.keyboard.press('b');
    const layout=JSON.stringify((await state()).placements);
    await scene(168,182);await page.keyboard.press('ArrowRight');
    check('keyboard nudging edits the preview only',JSON.stringify((await state()).placements)===layout&&await page.evaluate(()=>Cottage.App.game.build.candidate.x===10));
    await page.keyboard.press('Enter');
    check('Enter places the selected furniture', (await state()).placements.find(p=>p.id==='welcomeRug').x===10);
    check('placement enables Undo',await page.locator('#undo-placement').isEnabled());
    await page.keyboard.press('z');
    check('Undo restores the exact arrangement without changing currency',JSON.stringify((await state()).placements)===layout&&(await state()).coins===15);
    await scene(168,182);await page.locator('#store-button').click();
    check('storing furniture can be undone',!(await state()).placements.some(p=>p.id==='welcomeRug'));
    await page.locator('#undo-placement').click();
    check('Undo restores a stored furniture item',(await state()).placements.some(p=>p.id==='welcomeRug'));
    for(const [width,height]of[[1280,720],[1440,900]]){
      await page.setViewportSize({width,height});await scene(168,182);
      const fit=await page.evaluate(()=>{const room=document.querySelector('#game').getBoundingClientRect(),bar=document.querySelector('#build-bar').getBoundingClientRect();return bar.top>=room.bottom&&bar.bottom<=innerHeight;});
      check(`${width}×${height} placement controls remain outside the room`,fit);await page.keyboard.press('Escape');
    }
    await page.setViewportSize({width:1440,height:1000});await page.locator('#finish-build').click();
    await page.locator('#journal-button').click();await page.locator('#go-study').click();await page.locator('#study-form').waitFor({state:'visible',timeout:8000});
    check('journal can guide the dog back to its actual desk',await page.locator('#study-form').isVisible());
    check('successful submission clears the old draft',await page.locator('#study-title').inputValue()==='');await page.keyboard.press('Escape');await page.waitForTimeout(100);
    await scene(54,232);await page.getByRole('heading',{name:'家具商店'}).waitFor({state:'visible',timeout:8000});
    check('clicking the mailbox opens the shop after walking',await page.locator('[data-buy="plant"]').isVisible());
    await page.locator('[data-buy="plant"]').click();await page.keyboard.press('Escape');await page.locator('#finish-build').click();
    await scene(54,232);await page.getByRole('heading',{name:'家具商店'}).waitFor({state:'visible'});
    check('owned shop items have a direct placement action',await page.locator('[data-place="plant"]').isVisible());await page.keyboard.press('Escape');
    // Navigation after adding obstacles must use the saved current layout.
    await page.locator('#journal-button').click();await page.locator('#go-study').click();await page.locator('#study-form').waitFor({state:'visible',timeout:8000});await page.keyboard.press('Escape');
    check('existing save format stays at version 1',(await state()).version===1);
    check('new controls have no runtime errors',errors.length===0);
    const metadata=await page.evaluate(()=>Cottage.Art.animationMetadata);
    await fs.writeFile(path.join(output,'shiba-atlas.json'),JSON.stringify(metadata,null,2));
    await fs.writeFile(path.join(output,'polish-report.json'),JSON.stringify({passed:results.length,results,errors},null,2));
    console.log(JSON.stringify({passed:results.length,errors,output},null,2));
  }catch(error){await page.screenshot({path:path.join(output,'polish-failure.png')});console.error(JSON.stringify({passed:results,errors,position:await position(),failure:error.message},null,2));process.exitCode=1;}
  finally{await browser.close();}
})();
