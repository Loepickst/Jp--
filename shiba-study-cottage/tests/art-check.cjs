// Pixel-asset integration QA. Uses isolated browser storage and deterministic art plates.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const path=require('node:path');
(async()=>{
  const out=process.env.COTTAGE_ARTIFACTS||path.join(__dirname,'artifacts');await fs.mkdir(out,{recursive:true});
  const browser=await chromium.launch({channel:'chrome',headless:true}),results=[],errors=[];
  const check=(name,value)=>{assert.ok(value,name);results.push(name);};
  const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
  try{
    await page.goto(process.env.COTTAGE_URL||'http://127.0.0.1:8873/');await page.waitForFunction(()=>window.Cottage?.App);
    const stats=await page.evaluate(()=>{
      const A=Cottage.Art,meta=A.animationMetadata,frames=Object.values(meta.animations).flatMap(a=>a.frames);
      const palette=new Set(Object.values(A.P).map(hex=>hex.slice(1))),badColors=new Set();let semi=0,padding=0,empty=0;
      for(const c of [A.atlas,A.background]){
        const d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;
        for(let y=0;y<c.height;y++)for(let x=0;x<c.width;x++){
          const i=(y*c.width+x)*4;if(!d[i+3])continue;
          if(d[i+3]!==255)semi++;
          const col=[d[i],d[i+1],d[i+2]].map(n=>n.toString(16).padStart(2,'0')).join('');if(!palette.has(col))badColors.add(col);
          if(c===A.atlas&&!frames.some(f=>x>=f.x&&x<f.x+32&&y>=f.y&&y<f.y+32))padding++;
        }
      }
      for(const f of frames){const d=A.atlas.getContext('2d').getImageData(f.x,f.y,32,32).data;if(!d.some((v,i)=>i%4===3&&v))empty++;}
      const iconColors=new Set();
      for(const id of Object.keys(Cottage.Data.furniture)){
        const c=document.createElement('canvas');c.width=80;c.height=64;A.icon(c,id);const data=c.getContext('2d').getImageData(0,0,80,64).data;
        for(let i=0;i<data.length;i+=4)if(data[i+3]){const col=[data[i],data[i+1],data[i+2]].map(n=>n.toString(16).padStart(2,'0')).join('');if(!palette.has(col)||data[i+3]!==255)iconColors.add(col);}
      }
      return {colors:palette.size,badColors:[...badColors],semi,padding,empty,frames:frames.length,groups:Object.keys(meta.animations).length,iconColors:[...iconColors],width:A.background.width,height:A.background.height};
    });
    check('scene retains its native 384×288 pixel grid',stats.width===384&&stats.height===288);
    check('room and character use only the shared 32-color palette',stats.colors===32&&stats.badColors.length===0);
    check('all scene and character pixels have hard, opaque edges',stats.semi===0);
    check('all 94 animation frames in 22 groups are populated',stats.frames===94&&stats.groups===22&&stats.empty===0);
    check('ear tips, tails and action effects never bleed into frame padding',stats.padding===0);
    check('all 12 furniture icons retain exact palette pixels',stats.iconColors.length===0);
    const metadata=await page.evaluate(()=>Cottage.Art.animationMetadata);
    await fs.writeFile(path.join(out,'shiba-atlas.json'),JSON.stringify(metadata,null,2)+'\n');
    const exportPNG=async(name,data)=>fs.writeFile(path.join(out,name),Buffer.from(data.split(',')[1],'base64'));
    await exportPNG('shiba-atlas.png',await page.evaluate(()=>Cottage.Art.atlas.toDataURL()));
    await page.screenshot({path:path.join(out,'refined-initial.png')});
    const fixture=await page.evaluate(()=>{
      const M=Cottage.Model;let s=M.newState();for(let i=0;i<3;i++)s=M.recordStudy(s,{id:`art-${i}`,title:'美术检查专用记录',minutes:120},`2026-09-0${i+1}T08:00:00Z`).state;
      for(const id of Object.keys(Cottage.Data.furniture).filter(id=>Cottage.Data.furniture[id].price))s=M.buy(s,id);
      for(const[id,x,y]of[['plant',15,6],['books',8,6],['mug',9,6],['pawRug',17,12],['lamp',20,6],['shelf',4,11],['sofa',8,13],['record',20,10]])s=M.place(s,id,{x,y});return s;
    });
    await page.evaluate(s=>localStorage.setItem('shibaStudyCottage.v1',JSON.stringify(s)),fixture);await page.reload();await page.waitForFunction(()=>window.Cottage?.App);
    check('refined assets fit a valid complete furniture layout',await page.evaluate(()=>Cottage.Model.validateLayout(Cottage.App.store.state.placements).ok));
    await page.evaluate(()=>{const g=Cottage.App.game;g.player={x:230,y:210,direction:'down'};g.time=0;g.render();});
    const plates=await page.evaluate(()=>{
      const A=Cottage.Art,make=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').imageSmoothingEnabled=false;return c;};
      const game=document.getElementById('game'),scene=make(1152,864);scene.getContext('2d').drawImage(game,0,0,1152,864);
      const labels=['正面 · 待机','正面 · 走路','左侧 · 待机','左侧 · 走路','右侧 · 待机','右侧 · 走路','背面 · 待机','背面 · 走路','读书翻页','喝水','趴卧呼吸','开心庆祝','窗边坐坐','摸摸回应','正面 · 小跑','左侧 · 小跑','右侧 · 小跑','背面 · 小跑','伸懒腰','打哈欠','挠耳朵','闻闻地板'];
      const sprites=make(1480,1584),sc=sprites.getContext('2d');sc.fillStyle=A.P.wallLight;sc.fillRect(0,0,1480,1584);
      Object.entries(A.animationMetadata.animations).forEach(([key,anim],i)=>{
        const x=(i%2)*740,y=Math.floor(i/2)*144;sc.fillStyle=A.P.ink;sc.font='14px sans-serif';sc.fillText(labels[i],x+20,y+24);
        anim.frames.forEach((f,j)=>{sc.fillStyle=A.P.wall;sc.fillRect(x+18+j*120,y+34,104,104);sc.drawImage(A.atlas,f.x,f.y,32,32,x+22+j*120,y+38,96,96);});
      });
      const manners=make(740,576),mc=manners.getContext('2d');mc.fillStyle=A.P.wallLight;mc.fillRect(0,0,740,576);
      ['stretch','yawn','scratch','sniff'].forEach((key,i)=>{const a=A.animationMetadata.animations[key];mc.fillStyle=A.P.ink;mc.font='14px sans-serif';mc.fillText(labels[18+i],20,i*144+24);a.frames.forEach((f,j)=>{mc.fillStyle=A.P.wall;mc.fillRect(18+j*120,i*144+34,104,104);mc.drawImage(A.atlas,f.x,f.y,32,32,22+j*120,i*144+38,96,96);});});
      const furnishings=make(768,576),fc=furnishings.getContext('2d');fc.fillStyle=A.P.wallLight;fc.fillRect(0,0,768,576);
      Object.entries(Cottage.Data.furniture).forEach(([id,f],i)=>{
        const x=(i%4)*192,y=Math.floor(i/4)*192,tile=make(80,64);A.icon(tile,id);
        fc.fillStyle=A.P.wall;fc.fillRect(x+8,y+8,176,176);fc.drawImage(tile,x+16,y+30,160,128);fc.fillStyle=A.P.ink;fc.font='14px sans-serif';fc.fillText(f.name,x+16,y+173);
      });
      return {scene:scene.toDataURL(),sprites:sprites.toDataURL(),furnishings:furnishings.toDataURL(),manners:manners.toDataURL()};
    });
    await exportPNG('refined-room.png',plates.scene);await exportPNG('refined-animations.png',plates.sprites);await exportPNG('refined-furniture.png',plates.furnishings);
    await exportPNG('shiba-mannerisms.png',plates.manners);
    await page.screenshot({path:path.join(out,'refined-desktop.png')});
    // A lamp may share its footprint with a rug. Its light must not paint over the weave.
    const lights=await page.evaluate(()=>{
      const A=Cottage.Art,c=document.createElement('canvas');c.width=384;c.height=288;const ctx=c.getContext('2d');ctx.drawImage(A.background,0,0);
      A.lampGlow(ctx,32,96);const corner=ctx.getImageData(0,0,32,288).data,original=A.background.getContext('2d').getImageData(0,0,32,288).data;
      const outside=corner.every((n,i)=>n===original[i]);
      const game=Cottage.App.game;game.store.state.placements.push({id:'pawRug',x:19,y:6});game.store.state.placements=game.store.state.placements.filter(p=>p.id!=='pawRug'||p.y===6);
      game.store.state.lampOn=false;game.render();const off=game.ctx.getImageData(305,105,12,7).data;
      game.store.state.lampOn=true;game.render();const on=game.ctx.getImageData(305,105,12,7).data;
      return {outside,rug:off.every((n,i)=>n===on[i])};
    });
    check('lamp light stays inside the room at edge placements',lights.outside);
    check('lamp light preserves the rug texture underneath furniture',lights.rug);
    const motion=await page.evaluate(()=>{
      const A=Cottage.Art,make=()=>{const c=document.createElement('canvas');c.width=384;c.height=288;return c;};
      const at=(t,reduced)=>{const c=make(),g=c.getContext('2d');g.drawImage(A.background,0,0);A.ambience(g,t,reduced);return c.toDataURL();};
      const manners=['stretch','yawn','scratch','sniff'].map(key=>{const a=A.animationMetadata.animations[key],frames=a.frames.map(f=>{const c=document.createElement('canvas');c.width=32;c.height=32;c.getContext('2d').drawImage(A.atlas,f.x,f.y,32,32,0,0,32,32);return c.toDataURL();});return {key,poses:new Set(frames).size,loop:a.loop};});
      const holds=manners.every(({key})=>{const c=make(),ctx=c.getContext('2d');A.dog(ctx,32,32,'down',key,9);const before=c.toDataURL();ctx.clearRect(0,0,384,288);A.dog(ctx,32,32,'down',key,10);return before===c.toDataURL();});
      const fx=(t,reduced,music)=>{const c=make(),g=c.getContext('2d');for(const p of [{id:'mug',x:5,y:7},{id:'water',x:7,y:7},{id:'record',x:9,y:7}])A.furnitureLife(g,p,t,reduced,music);return c.toDataURL();};
      return {living:at(0,false)!==at(3.6,false),still:at(0,true)===at(10,true),early:at(-.01,false)===at(0,false),manners,holds,fxLiving:fx(0,false,true)!==fx(1,false,true),fxStill:fx(0,true,true)===fx(10,true,true)};
    });
    check('window and leaf shadows have distinct breeze poses',motion.living);
    check('early browser frame timestamps cannot select an invalid scene frame',motion.early);
    check('reduced-motion mode keeps scene and furniture decoration still',motion.still&&motion.fxStill);
    check('all new mannerisms have at least three distinct readable poses',motion.manners.every(a=>a.poses>=3&&!a.loop));
    check('one-shot mannerisms hold their final pose instead of wrapping',motion.holds);
    check('water, steam and the playing record have animated detail',motion.fxLiving);
    check('art and lighting render without browser errors',errors.length===0);
    await fs.writeFile(path.join(out,'art-report.json'),JSON.stringify({results,stats,errors},null,2)+'\n');
    console.log(JSON.stringify({passed:results.length,stats,artifacts:out,errors},null,2));
  }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
