// Run with PLAYWRIGHT_MODULE pointing to an existing Playwright package.
// Test contexts are isolated: this never changes a user's browser profile.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const URL = process.env.COTTAGE_URL || 'http://127.0.0.1:8873/';
const artifacts = process.env.COTTAGE_ARTIFACTS || path.join(__dirname, 'artifacts');

(async () => {
  await fs.mkdir(artifacts, { recursive: true });
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage(), errors = [], results = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  const check = (name, value) => { assert.ok(value, name); results.push(name); };
  const state = () => page.evaluate(() => JSON.parse(JSON.stringify(Cottage.App.store.state)));
  const position = () => page.evaluate(() => ({ ...Cottage.App.game.player }));
  const pressFor = async (keys, ms) => { for (const k of keys) await page.keyboard.down(k); await page.waitForTimeout(ms); for (const k of keys) await page.keyboard.up(k); await page.waitForTimeout(35); };
  const moveTo = async (x, y) => {
    // Use actual keyboard movement with feedback, along known obstacle-free legs.
    for (const [axis, goal] of [['x', x], ['y', y]]) {
      for (let i = 0; i < 10; i++) {
        const p = await position(), delta = goal - p[axis];
        if (Math.abs(delta) < 3) break;
        await pressFor([axis === 'x' ? (delta > 0 ? 'd' : 'a') : (delta > 0 ? 's' : 'w')], Math.max(22, Math.min(1200, Math.abs(delta) / 64 * 1000)));
      }
    }
  };
  const interact = async () => { await page.keyboard.press('e'); await page.waitForTimeout(80); };
  const fit = async name => {
    const bounds = await page.evaluate(() => {
      const selectors = ['.topbar', '#game', '.toolbar'];
      return { width: innerWidth, height: innerHeight, scrollW: document.documentElement.scrollWidth, rects: selectors.map(s => { const r = document.querySelector(s).getBoundingClientRect(); return { selector: s, top: r.top, bottom: r.bottom, left: r.left, right: r.right }; }), scale: getComputedStyle(document.documentElement).getPropertyValue('--scale').trim() };
    });
    check(name, bounds.rects.every(r => r.top >= 0 && r.bottom <= bounds.height && r.left >= 0 && r.right <= bounds.width));
    check(`${name}: integer scale`, ['1', '2', '3'].includes(bounds.scale));
    return bounds;
  };
  try {
    await page.goto(URL); await page.waitForFunction(() => window.Cottage?.App?.game); await page.waitForTimeout(150);
    check('fresh session starts at zero', (await state()).coins === 0);
    await fit('1440×1000 viewport fits');
    await page.screenshot({ path: path.join(artifacts, 'initial-desktop.png') });
    for (const [width, height] of [[1280, 720], [1366, 768], [1440, 900], [1920, 1200]]) { await page.setViewportSize({ width, height }); await fit(`${width}×${height} viewport fits`); }
    await page.setViewportSize({ width: 1440, height: 1000 });
    const p0 = await position(); await pressFor(['a'], 500); const p1 = await position();
    check('keyboard moves character', p0.x - p1.x > 26);
    await pressFor(['d'], 500);
    await moveTo(192, 216);
    const startStraight = await position(); await pressFor(['w'], 400); const endStraight = await position();
    await moveTo(192, 216);
    const startDiagonal = await position(); await pressFor(['w', 'a'], 400); const endDiagonal = await position();
    const straight = Math.hypot(endStraight.x-startStraight.x, endStraight.y-startStraight.y), diagonal = Math.hypot(endDiagonal.x-startDiagonal.x, endDiagonal.y-startDiagonal.y);
    check('diagonal speed is normalized', Math.abs(diagonal-straight) < 5);
    await moveTo(96, 136); await interact();
    check('desk opens learning form through E', await page.locator('#study-form').isVisible());
    const stopped = await position(); await page.locator('#study-title').fill('浏览器验收：复习了日语单词');
    await pressFor(['a'], 150); const still = await position();
    check('typing in a modal does not move the dog', stopped.x === still.x && stopped.y === still.y);
    await page.locator('#study-title').fill('复习了 20 个日语单词'); await page.locator('#study-minutes').fill('25');
    await page.screenshot({ path: path.join(artifacts, 'study-form.png') });
    await page.getByRole('button', { name: '确认记录' }).dblclick(); await page.waitForTimeout(100);
    check('double click records learning exactly once', (await state()).records.length === 1 && (await state()).coins === 25);
    await page.keyboard.press('Escape');
    await moveTo(96, 232); await moveTo(72, 232); await interact();
    check('mailbox opens shop', await page.getByRole('heading', { name: '家具商店' }).isVisible());
    check('all eight catalog products render', await page.locator('[data-buy]').count() === 8);
    check('expensive items are disabled', !(await page.locator('[data-buy="sofa"]').isEnabled()));
    await page.screenshot({ path: path.join(artifacts, 'shop.png') });
    await page.locator('[data-buy="plant"]').click(); await page.waitForTimeout(100);
    check('buy deducts once and enters placement mode', (await state()).coins === 10 && await page.locator('#build-bar').isVisible());
    for (const [width,height] of [[1280,720],[1440,900]]) {
      await page.setViewportSize({width,height});
      const buildFit=await page.evaluate(()=>{const room=document.querySelector('#game').getBoundingClientRect(),bar=document.querySelector('#build-bar').getBoundingClientRect();return {roomBottom:room.bottom,barTop:bar.top,barBottom:bar.bottom,height:innerHeight};});
      check(`${width}×${height}: build controls do not cover the floor`,buildFit.barTop>=buildFit.roomBottom&&buildFit.barBottom<=buildFit.height);
    }
    await page.setViewportSize({width:1440,height:1000});
    const gameBox = await page.locator('#game').boundingBox(), sx=gameBox.width/384, sy=gameBox.height/288;
    await page.mouse.move(gameBox.x+248*sx, gameBox.y+104*sy); await page.mouse.click(gameBox.x+248*sx, gameBox.y+104*sy);
    check('click confirms a valid grid placement', (await state()).placements.some(p=>p.id==='plant'&&p.x===15&&p.y===6));
    // Select the placed plant, attempt an overlap, then cancel.
    await page.mouse.click(gameBox.x+248*sx,gameBox.y+91*sy);
    await page.mouse.move(gameBox.x+72*sx,gameBox.y+104*sy); await page.mouse.click(gameBox.x+72*sx,gameBox.y+104*sy);
    check('invalid placement cannot overwrite the saved arrangement', (await state()).placements.some(p=>p.id==='plant'&&p.x===15&&p.y===6));
    check('invalid placement gives a visible explanation', (await page.locator('#build-help').textContent()).includes('家具'));
    await page.screenshot({ path:path.join(artifacts,'placement-validation.png') });
    await page.keyboard.press('Escape');
    check('cancel restores original placement', (await state()).placements.some(p=>p.id==='plant'&&p.x===15));
    await page.mouse.click(gameBox.x+248*sx,gameBox.y+91*sy); await page.locator('#store-button').click();
    check('storage is free and preserves ownership', !(await state()).placements.some(p=>p.id==='plant')&&(await state()).owned.includes('plant')&&(await state()).coins===10);
    await page.locator('#inventory-button').click(); await page.locator('[data-place="plant"]').click();
    await page.mouse.move(gameBox.x+248*sx,gameBox.y+104*sy); await page.mouse.click(gameBox.x+248*sx,gameBox.y+104*sy);
    await page.locator('#finish-build').click();
    await page.locator('#journal-button').click();
    check('journal shows the user-created learning text', (await page.locator('#journal-records').textContent()).includes('复习了 20 个日语单词'));
    await page.screenshot({path:path.join(artifacts,'journal.png')});await page.keyboard.press('Escape');
    await page.locator('#settings-button').click(); await page.locator('#name-input').fill('小橘'); await page.locator('#sound-input').uncheck(); await page.locator('#music-input').check(); await page.getByRole('button',{name:'保存设置'}).click();
    check('sound and music settings persist independently', !(await state()).settings.sound&&(await state()).settings.music);
    await page.reload(); await page.waitForFunction(()=>window.Cottage?.App);
    check('reload restores currency, layout, journal and name', (await state()).coins===10&&(await state()).name==='小橘'&&(await state()).records.length===1&&(await state()).placements.some(p=>p.id==='plant'));
    check('music never starts before a gesture on reload', await page.evaluate(()=>!Cottage.App.audio.enabled&&!Cottage.App.audio.timer));
    // Test foot collisions and rest cancellation using keyboard, not direct position writes.
    await moveTo(96,136); await pressFor(['w'],800);
    check('desk collision prevents walking through', (await position()).y>=132);
    await moveTo(144,152); await moveTo(296,152); await interact(); await page.waitForTimeout(750);
    check('bed interaction settles into sleep', await page.evaluate(()=>Cottage.App.game.action==='sleep'));
    await pressFor(['s'],100);
    check('movement exits sleeping', await page.evaluate(()=>['idle','walk'].includes(Cottage.App.game.action)&&!Cottage.App.game.renderPosition));
    await moveTo(296,184); await moveTo(280,184); await interact();
    check('water bowl plays drinking animation', await page.evaluate(()=>Cottage.App.game.action==='drink'));
    await page.keyboard.press('Escape'); await moveTo(208,184); await moveTo(208,104); await interact();
    check('window interaction sits facing the view',await page.evaluate(()=>Cottage.App.game.action==='sit'));
    await page.keyboard.press('Escape');
    // Export generated atlas and metadata, not hand-maintained duplicate assets.
    const metadata=await page.evaluate(()=>Cottage.Art.animationMetadata);
    const atlas=await page.evaluate(()=>Cottage.Art.atlas.toDataURL('image/png').split(',')[1]);
    await fs.writeFile(path.join(artifacts,'shiba-atlas.png'),Buffer.from(atlas,'base64'));
    await fs.writeFile(path.join(artifacts,'shiba-atlas.json'),JSON.stringify(metadata,null,2));
    check('four walk directions, idle and all interaction animations exist',['idle-down','idle-up','idle-left','idle-right','walk-down','walk-up','walk-left','walk-right','read','drink','sleep','celebrate','sit','pet'].every(key=>metadata.animations[key]));
    const catalogFixture=await page.evaluate(()=>{
      const M=Cottage.Model;let s=M.newState();
      for(let i=0;i<3;i++)s=M.recordStudy(s,{id:`fixture-${i}`,title:'既往学习记录',minutes:120},`2026-09-0${i+1}T08:00:00.000Z`).state;
      for(const id of Object.keys(Cottage.Data.furniture).filter(id=>Cottage.Data.furniture[id].price))s=M.buy(s,id);
      for(const [id,x,y] of [['plant',15,6],['books',8,6],['mug',9,6],['pawRug',17,12],['lamp',20,6],['shelf',4,11],['sofa',8,13],['record',20,10]])s=M.place(s,id,{x,y});
      return s;
    });
    const catalogContext=await browser.newContext({viewport:{width:1440,height:1000}});
    await catalogContext.addInitScript(s=>localStorage.setItem('shibaStudyCottage.v1',JSON.stringify(s)),catalogFixture);
    const furnished=await catalogContext.newPage();await furnished.goto(URL);await furnished.waitForFunction(()=>window.Cottage?.App);
    check('complete furniture catalog can coexist in a reachable room',await furnished.evaluate(()=>Cottage.Model.validateLayout(Cottage.App.store.state.placements).ok));
    await furnished.screenshot({path:path.join(artifacts,'furnished-room.png')});
    // These static fixture coordinates keep movement out of obstacles.
    const walkAxis=async(key,ms)=>{await furnished.keyboard.down(key);await furnished.waitForTimeout(ms);await furnished.keyboard.up(key);};
    await walkAxis('d',2110);await walkAxis('w',995);await furnished.keyboard.press('e');await furnished.waitForTimeout(100);
    check('record cabinet starts music on interaction',await furnished.evaluate(()=>Cottage.App.store.state.settings.music&&!!Cottage.App.audio.timer));
    await furnished.keyboard.press('e');await furnished.waitForTimeout(60);
    check('record cabinet stops music on interaction',await furnished.evaluate(()=>!Cottage.App.store.state.settings.music&&!Cottage.App.audio.timer));
    await walkAxis('a',250);await walkAxis('w',500);await walkAxis('d',250);await walkAxis('w',500);await furnished.keyboard.press('e');await furnished.waitForTimeout(60);
    check('floor lamp toggles and saves its light',await furnished.evaluate(()=>!Cottage.App.store.state.lampOn));
    await catalogContext.close();
    const restricted=await browser.newContext({viewport:{width:1280,height:720}});
    await restricted.addInitScript(()=>{Storage.prototype.setItem=function(){throw new DOMException('Quota exceeded','QuotaExceededError');};});
    const failed=await restricted.newPage();await failed.goto(URL);await failed.waitForFunction(()=>window.Cottage?.App);
    // The injected condition is storage failure only; exercise the real settings form.
    await failed.locator('#settings-button').click();await failed.locator('#name-input').fill('不应保存');await failed.getByRole('button',{name:'保存设置'}).click();
    check('storage failure remains visibly actionable',await failed.locator('#storage-error').isVisible()&&(await failed.locator('#settings-error').textContent()).includes('尚未生效'));
    check('failed write keeps the previous state',await failed.evaluate(()=>Cottage.App.store.state.name==='木木'));
    await restricted.close();
    const filePage=await context.newPage();await filePage.goto(require('node:url').pathToFileURL(path.resolve(__dirname,'../index.html')).href);await filePage.waitForFunction(()=>window.Cottage?.App);
    check('standalone file opens without a server',await filePage.locator('#game').isVisible()&&await filePage.evaluate(()=>!Cottage.App.store.readOnly));
    await filePage.close();
    check('no runtime or console errors',errors.length===0);
    await fs.writeFile(path.join(artifacts,'browser-report.json'),JSON.stringify({browser:'Google Chrome',results,errors},null,2));
    console.log(JSON.stringify({passed:results.length,artifacts,errors},null,2));
  } catch(error) {
    await page.screenshot({path:path.join(artifacts,'failure.png')});
    console.error(JSON.stringify({passed:results,errors,position:await position(),failure:error.message},null,2));
    process.exitCode=1;
  } finally {await browser.close();}
})();
