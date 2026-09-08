(function (C) {
  'use strict';
  // Warm Cottage 32: 32 shared colors, 16×16 tiles, 32×32 character frames.
  // Material highlights face upper left; all silhouettes use whole-pixel steps.
  const P = {
    ink:'#493b32', darkWood:'#6c4938', woodShadow:'#926247', wood:'#b78151', woodLight:'#d3a16b', honey:'#e4b982',
    floor:'#c99b68', floorLight:'#d4ad7b', seam:'#b68b5b', wall:'#e8dbb9', wallLight:'#f4e9cc', wallShade:'#cebc96',
    cream:'#fff1d3', white:'#fff9e9', orange:'#d88b45', orangeLight:'#edac60', orangeDark:'#ad663d', pink:'#d9917c',
    greenDark:'#4e6250', green:'#7a8c63', greenLight:'#a7b57c', sage:'#b6bea0', moss:'#cdd0ab', backdrop:'#dedac1',
    blue:'#90b8bc', blueLight:'#c4d8cd', blueDark:'#668d91', red:'#b45f4d', redLight:'#d58a65', yellow:'#efcf85',
    paper:'#e4d9b8', shadow:'#a0835e'
  };
  const D = C.Data;
  function canvas(w,h) { const c=document.createElement('canvas'); c.width=w;c.height=h;c.getContext('2d').imageSmoothingEnabled=false;return c; }
  function rect(ctx,x,y,w,h,color) { ctx.fillStyle=P[color]||color;ctx.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h)); }
  function box(ctx,x,y,w,h,fill,edge='darkWood') {rect(ctx,x,y,w,h,edge);rect(ctx,x+1,y+1,w-2,h-2,fill);}
  function oval(ctx,x,y,w,h,color) {
    for(let j=0;j<h;j++){const dy=(j+.5-h/2)/(h/2), span=Math.sqrt(Math.max(0,1-dy*dy))*w/2;const left=Math.ceil(w/2-span);rect(ctx,x+left,y+j,w-2*left,1,color);}
  }
  function bevel(ctx,x,y,w,h,fill,edge='darkWood') {
    rect(ctx,x+2,y,w-4,h,edge);rect(ctx,x,y+2,w,h-4,edge);
    rect(ctx,x+1,y+1,w-2,h-2,fill);
  }
  function grain(ctx,x,y,w,seed,light='honey',shade='wood') {
    const n=Math.min(w-4,9+seed%13);
    rect(ctx,x+2,y,n,1,light);rect(ctx,x+n+2,y+1,Math.min(4,w-n-3),1,light);
    rect(ctx,x+4+(seed%5),y+5,Math.min(w-10,8+seed%11),1,shade);
    if(w>30){rect(ctx,x+w-16,y+7,10,1,light);rect(ctx,x+w-19,y+8,5,1,light);}
  }
  function spine(ctx,x,y,w,h,color){
    box(ctx,x,y,w,h,color);rect(ctx,x+1,y+1,w-2,1,'paper');
    if(w>4)rect(ctx,x+1,y+2,1,h-3,'honey');
    rect(ctx,x+1,y+4,w-2,1,'paper');rect(ctx,x+1,y+h-3,w-2,1,'wallShade');
  }
  function leaf(ctx,x,y,flip=false,color='green') { const dx=flip?-1:1;for(let i=0;i<4;i++)rect(ctx,x+(dx<0?-i-3:i),y+i,5-i,2,color); }
  function plant(ctx,x,y){
    rect(ctx,x+7,y+5,2,20,'greenDark');rect(ctx,x+8,y+9,1,14,'green');
    for(const [lx,ly,w,h] of [[2,8,7,5],[8,3,6,6],[8,12,8,5],[0,15,7,5],[5,1,5,6]]){
      oval(ctx,x+lx,y+ly,w,h,'greenDark');oval(ctx,x+lx,y+ly,w-1,h-1,'green');
      rect(ctx,x+lx+1,y+ly+1,Math.max(2,w-4),1,'greenLight');
    }
    oval(ctx,x+3,y+27,11,5,'darkWood');rect(ctx,x+4,y+24,9,6,'orangeDark');
    rect(ctx,x+5,y+24,6,6,'redLight');rect(ctx,x+5,y+25,2,4,'honey');
    oval(ctx,x+2,y+21,13,6,'darkWood');oval(ctx,x+3,y+21,11,4,'orangeLight');
    oval(ctx,x+4,y+22,9,2,'woodShadow');rect(ctx,x+6,y+22,2,1,'ink');
    rect(ctx,x+3,y+25,11,1,'orangeDark');rect(ctx,x+4,y+25,8,1,'orangeLight');
  }
  function book(ctx,x,y,w,h,color){box(ctx,x,y,w,h,color);rect(ctx,x+2,y+2,w-4,h-4,'paper');rect(ctx,x+2,y+h-2,w-4,1,'wallShade');rect(ctx,x+1,y,2,h,color);}
  function paw(ctx,x,y,color,size=1){oval(ctx,x+3*size,y+5*size,8*size,6*size,color);oval(ctx,x,y+3*size,3*size,4*size,color);oval(ctx,x+3*size,y,3*size,4*size,color);oval(ctx,x+7*size,y,3*size,4*size,color);oval(ctx,x+10*size,y+3*size,3*size,4*size,color);}
  function heart(ctx,x,y,color='pink'){rect(ctx,x,y+1,3,3,color);rect(ctx,x+4,y+1,3,3,color);rect(ctx,x+1,y+3,5,2,color);rect(ctx,x+2,y+5,3,1,color);rect(ctx,x+3,y+6,1,1,color);rect(ctx,x+1,y+1,1,1,'cream');}
  function ambience(ctx,time,reduced){
    time=Math.max(0,time);
    const frame=reduced?0:Math.floor(time/1.8)%4;
    ctx.drawImage(windowFrames[frame],151,35);ctx.drawImage(dappleFrames[frame],158,96);
    // An occasional bird passes inside the left window pane, behind the wooden frame.
    if(reduced)return;const phase=time%28;if(phase<8||phase>13)return;
    const x=172+Math.floor((phase-8)*5),y=52+Math.floor(Math.sin(phase*2));
    rect(ctx,x,y,3,1,'greenDark');const wing=Math.floor(time*5)%2;
    rect(ctx,x-2,y-(wing?1:0),2,1,'greenDark');rect(ctx,x+3,y-(wing?1:0),2,1,'greenDark');
  }
  const background=canvas(384,288), bg=background.getContext('2d');bg.imageSmoothingEnabled=false;
  const windowUnderlay=canvas(116,58);
  function sunlitFloor(ctx){
    // Palette remapping keeps plank joints and grain visible inside the light.
    const image=ctx.getImageData(158,96,92,69), bytes=image.data;
    const rgb=hex=>[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16));
    const lifts={floor:'floorLight',floorLight:'honey',seam:'woodLight',woodLight:'honey',wood:'seam'};
    const colors=new Map(Object.entries(lifts).map(([a,b])=>[rgb(P[a]).join(','),rgb(P[b])]));
    for(let y=0;y<69;y++)for(let x=0;x<92;x++){
      const u=x+Math.floor(y/3),pane=(u>=26&&u<52)||(u>=56&&u<84);
      if(!pane||y===28||y===29||y>62+(u%3))continue;
      const i=(y*92+x)*4,next=colors.get(`${bytes[i]},${bytes[i+1]},${bytes[i+2]}`);
      if(next){bytes[i]=next[0];bytes[i+1]=next[1];bytes[i+2]=next[2];}
    }
    ctx.putImageData(image,158,96);
  }
  function windowView(ctx,frame=0){
    const breeze=[0,1,0,-1][frame],cloud=[0,2,4,2][frame];
    // The view is painted at native resolution, then enclosed by the sash.
    box(ctx,163,38,94,51,'woodShadow');rect(ctx,168,43,84,40,'blueLight');
    rect(ctx,169,44,82,8,'blue');rect(ctx,169,51,82,2,'blueLight');
    for(const [x,y,w] of [[178,48,15],[221,49,20]]){
      rect(ctx,x+cloud,y,w,2,'cream');rect(ctx,x+3+cloud,y-2,w-6,2,'white');rect(ctx,x+6+cloud,y-3,4,1,'white');
    }
    for(let i=0;i<84;i++){
      const y=65+Math.floor(Math.sin(i/16)*3);rect(ctx,168+i,y,1,83-y,'sage');
      const z=72+Math.floor(Math.sin(i/11+1)*2);rect(ctx,168+i,z,1,83-z,'greenLight');
    }
    // A tiny winding path, hedgerow and distant fence.
    for(let y=72;y<83;y++){const x=211-Math.floor((y-72)/2);rect(ctx,x,y,2+Math.floor((y-72)/4),1,'paper');}
    rect(ctx,171,76,24,1,'paper');for(let x=173;x<196;x+=6)rect(ctx,x,74,1,5,'paper');
    for(const [x,y,w,h] of [[170,65,10,11],[239,62,11,14],[231,72,9,9]]){
      rect(ctx,x+Math.floor(w/2),y+6,2,h,'woodShadow');
      oval(ctx,x+breeze,y,w,h-3,'green');oval(ctx,x+breeze,y,w-2,h-5,'greenLight');
      rect(ctx,x+2+breeze,y+2,3,1,'moss');rect(ctx,x+w-3+breeze,y+4,2,3,'greenDark');
    }
    for(let i=0;i<15;i++){const x=169+(i*17)%80,y=79+(i%3);rect(ctx,x,y,2,1,i%3?'green':'yellow');}
    // Sparse glass reflections do not obscure the miniature landscape.
    for(let i=0;i<7;i++){rect(ctx,201-i,47+i,2,1,'cream');rect(ctx,246-i,54+i,1,1,'blueLight');}
    rect(ctx,165,40,90,3,'woodLight');rect(ctx,165,43,3,41,'darkWood');
    rect(ctx,252,43,3,41,'wood');rect(ctx,208,42,4,43,'darkWood');rect(ctx,208,42,1,41,'honey');rect(ctx,209,43,1,40,'woodLight');
    rect(ctx,168,61,84,3,'darkWood');rect(ctx,168,61,84,1,'woodLight');
    rect(ctx,166,83,88,4,'wood');rect(ctx,166,83,88,1,'honey');
    rect(ctx,160,89,101,3,'wallShade');bevel(ctx,160,86,100,5,'woodLight','woodShadow');
    rect(ctx,162,86,96,1,'honey');rect(ctx,162,90,96,1,'woodShadow');rect(ctx,212,65,2,3,'honey');
    // A little posy on the sill adds a foreground layer to the view.
    rect(ctx,230,87,13,2,'wood');oval(ctx,233,83,7,5,'orangeDark');rect(ctx,234,83,4,4,'redLight');rect(ctx,234,83,1,3,'honey');
    rect(ctx,236,76,1,8,'greenDark');leaf(ctx,234,79,true,'green');
    rect(ctx,234,74,5,3,'cream');rect(ctx,235,73,3,5,'cream');rect(ctx,236,75,1,1,'yellow');
    // Gathered linen: lit folds, darker valleys and stitched hems.
    rect(ctx,151,36,116,2,'darkWood');rect(ctx,153,35,112,1,'woodLight');
    for(const right of [false,true]){
      const x=right?255:153;
      for(let j=0;j<48;j++){
        const width=j<8?10:j<32?10-Math.floor((j-8)/6):6+Math.floor((j-32)/5);
        const sway=j>32?breeze:0,px=(right?x+10-width:x)+sway;
        rect(ctx,px,39+j,width,1,'paper');rect(ctx,px+1,39+j,2,1,'cream');
        rect(ctx,px+width-2,39+j,2,1,'wallShade');
        if(width>7)rect(ctx,px+5,39+j,1,1,'wallLight');
      }
      rect(ctx,right?259:153,70,6,2,'woodLight');rect(ctx,right?260:154,70,4,1,'honey');
      for(let i=0;i<3;i++)rect(ctx,x+1+i*3+breeze,86+(i%2),2,1,'cream');
    }
  }
  function wallKeepsakes(ctx){
    rect(ctx,51,52,69,29,'wallShade');box(ctx,49,49,68,29,'wood');
    rect(ctx,52,52,62,21,'woodShadow');rect(ctx,53,52,59,3,'darkWood');
    const colors=['green','red','blueDark','orangeDark','greenDark','redLight'];
    for(let i=0;i<8;i++)spine(ctx,54+i*6,57+(i%3),5,16-(i%3),colors[i%6]);
    book(ctx,103,67,9,6,'green');book(ctx,102,62,10,5,'redLight');
    rect(ctx,49,49,68,2,'woodLight');rect(ctx,51,50,64,1,'honey');
    box(ctx,47,74,72,5,'woodLight');rect(ctx,48,75,70,1,'honey');
    rect(ctx,53,79,4,4,'woodShadow');rect(ctx,108,79,4,4,'woodShadow');grain(ctx,54,76,54,5);
    // Bound calendar with printed dates and one folded page corner.
    rect(ctx,134,49,17,24,'wallShade');box(ctx,132,47,17,24,'paper','woodShadow');
    rect(ctx,133,48,15,20,'cream');rect(ctx,134,50,13,4,'green');
    for(let row=0;row<3;row++)for(let col=0;col<3;col++)rect(ctx,135+col*4,57+row*3,2,1,row===1&&col===1?'red':'wallShade');
    rect(ctx,137,45,1,6,'darkWood');rect(ctx,143,45,1,6,'darkWood');rect(ctx,145,67,3,1,'wallShade');rect(ctx,145,68,2,2,'white');
    // Small framed Shiba print with a linen mat and brass hanger.
    rect(ctx,297,41,2,2,'woodShadow');rect(ctx,292,43,12,1,'wallShade');
    rect(ctx,285,48,30,32,'wallShade');box(ctx,283,46,30,32,'woodLight');
    rect(ctx,284,47,28,1,'honey');rect(ctx,284,48,1,27,'honey');box(ctx,286,49,24,26,'paper','woodShadow');
    rect(ctx,288,51,20,22,'cream');rect(ctx,292,54,2,5,'orangeDark');rect(ctx,291,56,4,5,'orange');
    rect(ctx,302,54,2,5,'orangeDark');rect(ctx,301,56,4,5,'orange');
    oval(ctx,291,58,14,12,'orange');rect(ctx,295,58,5,1,'orangeLight');
    oval(ctx,291,63,14,7,'white');rect(ctx,297,62,3,5,'cream');rect(ctx,294,61,2,2,'ink');rect(ctx,301,61,2,2,'ink');rect(ctx,298,65,2,1,'ink');
    rect(ctx,294,72,8,1,'wallShade');
    // Macramé cords and leaves use different shapes from the floor plant.
    rect(ctx,333,35,1,9,'woodShadow');for(let i=0;i<6;i++){rect(ctx,332-i,41+i*2,1,2,'paper');rect(ctx,334+i,41+i*2,1,2,'cream');}
    oval(ctx,326,51,15,5,'woodShadow');rect(ctx,328,54,11,6,'woodLight');rect(ctx,330,60,7,2,'woodShadow');
    for(let i=0;i<4;i++)rect(ctx,329+i*2,55,1,4,i%2?'honey':'wood');
    for(const [x,y,flip,col] of [[330,49,true,'greenDark'],[336,47,false,'green'],[331,55,true,'green'],[336,61,false,'greenDark'],[331,68,true,'green'],[334,74,false,'green']]){
      leaf(ctx,x,y,flip,col);rect(ctx,x+(flip?-2:1),y+1,2,1,'greenLight');
    }
    rect(ctx,333,52,1,25,'greenDark');
  }
  function buildRoom(){
    rect(bg,0,0,384,288,'backdrop');
    for(let i=0;i<70;i++){
      const x=(i*97+13)%384,y=(i*43+11)%288;
      if(x<21||x>362||y<25||y>268){rect(bg,x,y,3,1,i%3?'sage':'wallLight');if(i%4===0)rect(bg,x+1,y-2,1,2,'sage');}
    }
    rect(bg,30,37,335,230,'sage');rect(bg,34,265,323,3,'sage');rect(bg,24,28,336,236,'darkWood');
    rect(bg,30,34,324,62,'wall');rect(bg,32,36,320,55,'wallLight');
    rect(bg,32,36,320,3,'wallShade');rect(bg,32,39,320,2,'wall');
    for(let x=40;x<350;x+=8){rect(bg,x,42,1,44,'wall');if(x%24===16){rect(bg,x+3,46,1,2,'paper');rect(bg,x+3,77,1,2,'paper');}}
    // Quiet linen stipple and an inset rail distinguish plaster from the wood below.
    for(let i=0;i<45;i++){const x=35+(i*47)%312,y=43+(i*13)%43;rect(bg,x,y,1,1,'paper');}
    rect(bg,32,85,320,1,'paper');rect(bg,32,86,320,1,'wallShade');
    rect(bg,32,88,320,8,'wood');rect(bg,32,88,320,2,'woodLight');rect(bg,32,90,320,1,'honey');rect(bg,32,95,320,1,'darkWood');
    rect(bg,32,96,320,160,'floor');
    // Staggered boards have restrained, non-repeating grain clusters and knots.
    for(let row=0;row<10;row++){
      const y=96+row*16;
      for(let i=-1;i<6;i++){
        const x=32+(row%2)*32+i*64,seed=row*13+(i+1)*7;
        bg.save();bg.beginPath();bg.rect(32,y,320,16);bg.clip();
        rect(bg,x,y,64,15,seed%7===0?'floorLight':'floor');rect(bg,x,y+15,64,1,'seam');
        rect(bg,x,y,1,15,'seam');rect(bg,x+1,y+1,1,13,'floorLight');rect(bg,x+2,y,61,1,'floorLight');
        grain(bg,x+3,y+3,55,seed,'floorLight','seam');
        if(seed%5===1){const k=x+28+(seed%9);rect(bg,k,y+8,7,1,'seam');rect(bg,k-2,y+9,2,1,'seam');rect(bg,k+7,y+9,2,1,'seam');rect(bg,k,y+10,7,1,'seam');rect(bg,k+2,y+9,3,1,'wood');rect(bg,k-1,y+11,8,1,'floorLight');}
        if(seed%3===0){rect(bg,x+3,y+3,1,1,'seam');rect(bg,x+60,y+12,1,1,'seam');}
        if(seed%4===0){rect(bg,x+19,y+6,18,1,'floorLight');rect(bg,x+37,y+7,6,1,'floorLight');rect(bg,x+12,y+12,12,1,'seam');}
        bg.restore();
      }
    }
    sunlitFloor(bg);
    rect(bg,32,96,320,1,'woodShadow');rect(bg,33,97,318,1,'seam');
    for(let i=0;i<12;i++){rect(bg,34,101+i*13,1,7,'seam');rect(bg,350,106+i*12,2,6,'seam');}
    // Architectural frame, cut end grain and mortise details.
    rect(bg,24,28,336,7,'woodShadow');rect(bg,26,29,332,2,'woodLight');rect(bg,29,30,327,1,'honey');
    rect(bg,25,35,5,220,'wood');rect(bg,26,35,1,219,'woodLight');rect(bg,29,35,1,219,'woodShadow');
    rect(bg,354,35,5,220,'woodShadow');rect(bg,355,35,1,219,'woodLight');rect(bg,30,96,2,160,'wallShade');rect(bg,352,96,2,160,'woodShadow');
    for(const x of [26,355])for(const y of [38,88,246]){rect(bg,x,y,2,2,'darkWood');rect(bg,x,y,1,1,'honey');}
    windowUnderlay.getContext('2d').drawImage(background,151,35,116,58,0,0,116,58);
    windowView(bg);wallKeepsakes(bg);front(bg);
    bevel(bg,174,266,36,10,'wallShade','shadow');rect(bg,176,267,32,2,'paper');rect(bg,177,269,30,3,'wall');
    rect(bg,180,270,7,1,'wallLight');rect(bg,201,273,5,1,'shadow');rect(bg,176,275,31,1,'shadow');
    for(const [x,y]of [[13,238],[367,219],[342,275],[38,272]]){
      rect(bg,x,y,2,9,'green');leaf(bg,x,y+3,true,'green');rect(bg,x-2,y-2,6,2,'cream');rect(bg,x,y-4,2,6,'cream');rect(bg,x,y-2,2,2,'yellow');rect(bg,x+4,y+3,3,2,'wallLight');
    }
    // Moss islands and small warm stones frame the wooden threshold.
    for(const [x,y,w]of [[8,180,12],[362,153,14],[13,267,15],[318,278,18],[56,278,20]]){
      oval(bg,x,y,w,5,'sage');rect(bg,x+3,y-1,3,2,'moss');rect(bg,x+7,y+1,5,1,'greenLight');
      rect(bg,x+1,y-3,1,3,'green');rect(bg,x+3,y-4,1,4,'green');
    }
    for(const [x,y,w]of [[169,282,8],[201,280,10],[222,273,6],[17,212,6],[361,251,9]]){
      oval(bg,x,y,w,4,'shadow');oval(bg,x,y-1,w,4,'wallShade');rect(bg,x+2,y-1,w-4,1,'paper');
    }
  }
  const windowFrames=[],dappleFrames=[];
  function buildAmbientFrames(){
    // Four cached poses: no image readback, alpha blending or texture repaint in the game loop.
    const rgb=hex=>[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16));
    const shade=new Map(Object.entries({honey:'floorLight',floorLight:'floor',woodLight:'seam',floor:'seam'}).map(([a,b])=>[rgb(P[a]).join(','),rgb(P[b])]));
    for(let frame=0;frame<4;frame++){
      const scene=canvas(384,288),g=scene.getContext('2d');g.drawImage(background,0,0);g.drawImage(windowUnderlay,151,35);windowView(g,frame);
      const pane=canvas(116,58);pane.getContext('2d').drawImage(scene,151,35,116,58,0,0,116,58);windowFrames.push(pane);
      const c=canvas(96,58),s=c.getContext('2d');s.drawImage(background,158,96,96,58,0,0,96,58);
      const im=s.getImageData(0,0,96,58),bytes=im.data,shift=[0,1,0,-1][frame];
      const leaves=[[40,6,9,4],[52,13,10,4],[31,16,8,3],[45,23,12,4],[23,30,8,3],[36,36,8,4],[18,44,6,3]];
      for(let y=0;y<58;y++)for(let x=0;x<96;x++){
        const i=(y*96+x)*4,lit=x+Math.floor(y/3),inBeam=(lit>=26&&lit<52)||(lit>=56&&lit<84);
        const leaf=leaves.some(([lx,ly,w,h])=>((x-lx-shift)/w)**2+((y-ly)/h)**2<1);
        const next=shade.get(`${bytes[i]},${bytes[i+1]},${bytes[i+2]}`);
        if(!leaf||!inBeam||!next||y<3){bytes[i+3]=0;continue;}
        bytes[i]=next[0];bytes[i+1]=next[1];bytes[i+2]=next[2];
      }
      s.putImageData(im,0,0);dappleFrames.push(c);
    }
  }
  function front(ctx){
    for(const [x,w]of[[24,152],[208,152]]){
      rect(ctx,x,256,w,8,'woodShadow');rect(ctx,x,256,w,3,'woodLight');rect(ctx,x+1,256,w-2,1,'honey');
      rect(ctx,x,260,w,1,'wood');rect(ctx,x,263,w,1,'darkWood');
      for(let i=12;i<w-8;i+=39){rect(ctx,x+i,258,16,1,'wood');rect(ctx,x+i+8,261,9,1,'darkWood');}
    }
    rect(ctx,176,256,32,3,'seam');rect(ctx,177,256,30,1,'floorLight');rect(ctx,176,259,32,5,'woodLight');rect(ctx,177,259,30,1,'honey');rect(ctx,178,262,28,1,'wood');
  }
  function rug(ctx,id,x,y,w,h){
    const warm=id==='pawRug',base=warm?'redLight':'green',edge=warm?'honey':'sage',shade=warm?'red':'greenDark';
    rect(ctx,x+3,y+3,w-5,h-4,'shadow');rect(ctx,x+2,y+2,w-4,h-5,shade);
    rect(ctx,x+3,y+2,w-6,h-6,base);
    for(let i=4;i<w-3;i+=3){rect(ctx,x+i,y,1,3,'paper');rect(ctx,x+i,y+h-4,1,4,'paper');rect(ctx,x+i+1,y+h-2,1,1,'wallShade');}
    rect(ctx,x+4,y+3,w-8,1,'paper');rect(ctx,x+4,y+h-6,w-8,1,edge);
    rect(ctx,x+4,y+4,1,h-10,edge);rect(ctx,x+w-5,y+4,1,h-10,edge);
    for(let i=7;i<w-6;i+=5){rect(ctx,x+i,y+5,2,1,edge);rect(ctx,x+i,y+h-8,2,1,edge);}
    rect(ctx,x+7,y+8,w-14,1,shade);rect(ctx,x+7,y+h-10,w-14,1,shade);
    rect(ctx,x+7,y+8,1,h-17,shade);rect(ctx,x+w-8,y+8,1,h-17,shade);
    for(let j=11;j<h-10;j+=6)for(let i=11+(j%4);i<w-10;i+=8){rect(ctx,x+i,y+j,2,1,warm?'honey':'greenLight');rect(ctx,x+i+2,y+j+1,2,1,warm?'red':'greenDark');}
    if(warm){
      paw(ctx,x+18,y+9,'red');paw(ctx,x+17,y+8,'cream');
      for(const px of [11,w-12]){rect(ctx,x+px,y+14,1,3,'honey');rect(ctx,x+px-1,y+15,3,1,'honey');}
    }else{
      for(let i=0;i<3;i++){
        const cx=x+17+i*15,cy=y+23;
        for(let j=-5;j<=5;j++){const width=5-Math.abs(j);rect(ctx,cx-width,cy+j,width*2+1,1,'sage');}
        rect(ctx,cx-2,cy-2,5,5,'greenLight');rect(ctx,cx,cy,1,1,'cream');
      }
      for(let i=11;i<w-9;i+=7){rect(ctx,x+i,y+13,2,1,'greenLight');rect(ctx,x+i+2,y+34,2,1,'greenLight');}
    }
  }
  function furniture(ctx,id,x,y,lit=true){
    const f=D.furniture[id],w=f.w*16,h=f.h*16;
    if(f.rug){rug(ctx,id,x,y,w,h);return;}
    const sy=y-f.lift;
    oval(ctx,x+2,y+h-4,w-3,6,'shadow');
    if(id==='desk'){
      // Legs, apron and dovetailed drawer sit below the solid oak top.
      for(const lx of [4,55]){rect(ctx,x+lx,sy+20,5,22,'darkWood');rect(ctx,x+lx,sy+22,3,18,'wood');rect(ctx,x+lx,sy+22,1,16,'honey');rect(ctx,x+lx,sy+39,5,2,'woodShadow');}
      rect(ctx,x+8,sy+25,48,5,'woodShadow');rect(ctx,x+9,sy+26,46,2,'wood');
      box(ctx,x+44,sy+25,15,7,'woodLight');rect(ctx,x+46,sy+26,11,1,'honey');rect(ctx,x+50,sy+28,4,2,'darkWood');rect(ctx,x+51,sy+28,2,1,'honey');
      bevel(ctx,x,sy+5,64,21,'woodLight');rect(ctx,x+1,sy+7,62,14,'floorLight');
      rect(ctx,x+2,sy+6,59,2,'honey');rect(ctx,x+1,sy+21,62,4,'wood');rect(ctx,x+2,sy+21,60,1,'woodLight');rect(ctx,x+3,sy+24,58,1,'woodShadow');
      grain(ctx,x+3,sy+12,56,9,'honey','woodLight');rect(ctx,x+3,sy+23,2,1,'honey');rect(ctx,x+58,sy+23,2,1,'darkWood');
      // Book: uneven page edges, central binding, writing and a red bookmark.
      rect(ctx,x+23,sy+18,24,2,'wood');book(ctx,x+22,sy+6,24,14,'greenDark');
      rect(ctx,x+24,sy+7,9,10,'white');rect(ctx,x+34,sy+7,10,10,'cream');rect(ctx,x+33,sy+7,1,11,'wallShade');
      rect(ctx,x+25,sy+6,6,1,'cream');rect(ctx,x+36,sy+6,6,1,'white');
      for(let i=0;i<3;i++){rect(ctx,x+26,sy+9+i*3,5-(i%2),1,'wallShade');rect(ctx,x+36,sy+9+i*3,6-(i%2)*2,1,'wallShade');}
      rect(ctx,x+40,sy+16,2,5,'red');rect(ctx,x+41,sy+16,1,3,'redLight');
      rect(ctx,x+48,sy+12,1,8,'orangeDark');rect(ctx,x+49,sy+12,1,7,'yellow');rect(ctx,x+48,sy+11,2,2,'pink');rect(ctx,x+48,sy+20,1,1,'ink');
      oval(ctx,x+5,sy+17,13,4,'woodShadow');oval(ctx,x+5,sy+16,12,3,'greenDark');rect(ctx,x+7,sy+16,7,1,'greenLight');
      rect(ctx,x+10,sy+5,2,11,'greenDark');rect(ctx,x+10,sy+7,1,8,'greenLight');
      bevel(ctx,x+5,sy+1,12,7,'green');rect(ctx,x+6,sy+2,8,2,'greenLight');rect(ctx,x+4,sy+7,14,2,'greenDark');rect(ctx,x+6,sy+9,10,1,'yellow');
      book(ctx,x+49,sy+2,12,5,'red');rect(ctx,x+51,sy+3,8,1,'cream');
      // Spindle chair and woven seat, still within the original footprint.
      rect(ctx,x+24,sy+38,3,10,'darkWood');rect(ctx,x+38,sy+38,3,10,'darkWood');rect(ctx,x+25,sy+39,1,7,'woodLight');rect(ctx,x+39,sy+39,1,7,'wood');
      box(ctx,x+21,sy+29,23,10,'woodLight');rect(ctx,x+23,sy+31,19,5,'woodShadow');
      for(let i=0;i<4;i++)rect(ctx,x+25+i*5,sy+31,2,5,'woodLight');
      bevel(ctx,x+20,sy+37,25,7,'wood');rect(ctx,x+22,sy+37,21,4,'greenDark');rect(ctx,x+23,sy+37,19,3,'green');rect(ctx,x+24,sy+37,16,1,'sage');
    }else if(id==='bed'){
      // Braided wicker rim and a soft, inset cushion.
      oval(ctx,x+1,sy+4,46,27,'darkWood');oval(ctx,x+1,sy+3,45,26,'wood');oval(ctx,x+2,sy+2,44,25,'woodLight');
      oval(ctx,x+4,sy+3,40,23,'honey');oval(ctx,x+6,sy+5,36,19,'woodShadow');
      oval(ctx,x+7,sy+6,34,18,'red');oval(ctx,x+8,sy+6,32,16,'redLight');oval(ctx,x+10,sy+6,27,13,'pink');
      rect(ctx,x+16,sy+8,14,1,'redLight');rect(ctx,x+14,sy+9,2,1,'redLight');rect(ctx,x+12,sy+18,6,1,'redLight');rect(ctx,x+30,sy+18,4,1,'red');
      for(let i=0;i<10;i++){const bx=6+i*4,by=23+Math.floor(Math.sin(i/9*Math.PI)*3);rect(ctx,x+bx,sy+by,2,2,'woodShadow');rect(ctx,x+bx,sy+by-1,1,1,'cream');}
      for(const [bx,by] of [[3,12],[3,16],[5,20],[8,5],[13,3],[36,5],[42,12],[41,18]]){rect(ctx,x+bx,sy+by,2,1,'cream');rect(ctx,x+bx+1,sy+by+1,1,2,'wood');}
      bevel(ctx,x+27,sy+8,12,10,'paper','red');rect(ctx,x+28,sy+9,9,6,'cream');rect(ctx,x+29,sy+9,7,1,'white');rect(ctx,x+29,sy+15,7,1,'wallShade');rect(ctx,x+28,sy+10,1,1,'wallShade');rect(ctx,x+36,sy+14,1,1,'wallShade');
    }else if(id==='water'){
      oval(ctx,x+1,sy+5,14,10,'woodShadow');oval(ctx,x+2,sy+4,12,10,'wallShade');oval(ctx,x+2,sy+2,12,10,'cream');
      oval(ctx,x+3,sy+3,10,7,'blueDark');oval(ctx,x+4,sy+4,8,5,'blue');rect(ctx,x+5,sy+4,5,1,'blueLight');rect(ctx,x+4,sy+5,2,1,'white');rect(ctx,x+9,sy+7,2,1,'blueLight');
      rect(ctx,x+3,sy+10,9,2,'paper');rect(ctx,x+4,sy+10,3,1,'white');rect(ctx,x+9,sy+11,2,1,'blueDark');
    }else if(id==='plant'){plant(ctx,x,sy);
    }else if(id==='books'){
      book(ctx,x+1,sy+10,14,5,'greenDark');rect(ctx,x+4,sy+12,9,1,'cream');book(ctx,x+3,sy+6,12,5,'red');rect(ctx,x+5,sy+8,7,1,'white');
      book(ctx,x+1,sy+2,12,5,'blueDark');rect(ctx,x+2,sy+2,10,1,'blue');rect(ctx,x+5,sy+5,2,3,'redLight');rect(ctx,x+6,sy+5,1,2,'red');
    }else if(id==='mug'){
      oval(ctx,x+1,sy+11,14,5,'wallShade');oval(ctx,x+1,sy+10,14,4,'paper');oval(ctx,x+2,sy+10,12,3,'cream');
      bevel(ctx,x+10,sy+5,6,7,'wallShade');rect(ctx,x+11,sy+5,4,5,'cream');rect(ctx,x+12,sy+6,2,3,'floor');
      bevel(ctx,x+3,sy+3,9,10,'paper','woodShadow');rect(ctx,x+4,sy+5,6,7,'cream');rect(ctx,x+4,sy+6,2,4,'white');
      oval(ctx,x+3,sy+2,9,5,'cream');oval(ctx,x+4,sy+3,7,3,'woodShadow');rect(ctx,x+5,sy+3,3,1,'honey');rect(ctx,x+8,sy+8,2,2,'redLight');
    }else if(id==='lamp'){
      oval(ctx,x+2,sy+41,12,6,'darkWood');oval(ctx,x+2,sy+40,12,5,'woodShadow');oval(ctx,x+3,sy+40,10,3,'woodLight');rect(ctx,x+4,sy+40,5,1,'honey');
      rect(ctx,x+7,sy+13,2,28,'darkWood');rect(ctx,x+7,sy+16,1,24,'honey');rect(ctx,x+6,sy+37,4,4,'woodShadow');rect(ctx,x+7,sy+37,1,3,'woodLight');
      rect(ctx,x+7,sy+1,2,3,'woodShadow');
      for(let j=0;j<14;j++){
        const step=Math.floor(j/4),left=4-step,width=8+step*2;
        rect(ctx,x+left,sy+3+j,width,1,'woodShadow');rect(ctx,x+left+1,sy+3+j,width-2,1,lit?'yellow':'paper');
        if(j>0){rect(ctx,x+left+1,sy+3+j,2,1,lit?'cream':'wallLight');rect(ctx,x+9+Math.floor(j/7),sy+3+j,1,1,lit?'honey':'wallShade');}
      }
      rect(ctx,x+1,sy+16,14,1,'woodShadow');rect(ctx,x+3,sy+17,10,1,lit?'cream':'wallShade');rect(ctx,x+11,sy+18,1,5,'wood');rect(ctx,x+10,sy+23,2,2,'honey');
    }else if(id==='shelf'){
      rect(ctx,x+4,sy+27,4,5,'darkWood');rect(ctx,x+40,sy+27,4,5,'darkWood');
      box(ctx,x+1,sy+4,46,25,'wood');rect(ctx,x+4,sy+7,40,18,'woodShadow');rect(ctx,x+4,sy+7,40,2,'darkWood');
      rect(ctx,x+2,sy+6,2,20,'woodLight');rect(ctx,x+44,sy+6,2,20,'woodShadow');
      bevel(ctx,x,sy+2,48,5,'woodLight');rect(ctx,x+2,sy+3,43,1,'honey');rect(ctx,x+3,sy+25,42,3,'woodLight');rect(ctx,x+4,sy+26,39,1,'honey');
      ['green','red','blueDark','orangeDark','greenDark'].forEach((col,i)=>spine(ctx,x+5+i*5,sy+10+(i%2)*2,4,15-(i%2)*2,col));
      rect(ctx,x+30,sy+8,2,17,'darkWood');rect(ctx,x+30,sy+8,1,17,'woodLight');
      book(ctx,x+33,sy+20,10,5,'redLight');book(ctx,x+34,sy+16,9,4,'green');
      bevel(ctx,x+35,sy+10,7,6,'cream','wallShade');rect(ctx,x+37,sy+11,3,1,'white');rect(ctx,x+37,sy+14,3,1,'sage');
      rect(ctx,x+6,sy+29,1,2,'woodLight');rect(ctx,x+42,sy+29,1,2,'woodLight');
    }else if(id==='sofa'){
      rect(ctx,x+7,sy+40,5,8,'darkWood');rect(ctx,x+53,sy+40,5,8,'darkWood');rect(ctx,x+8,sy+43,2,3,'wood');rect(ctx,x+54,sy+43,2,3,'wood');
      bevel(ctx,x+3,sy+3,58,36,'greenDark');bevel(ctx,x+4,sy+3,55,23,'green');
      rect(ctx,x+7,sy+4,48,2,'greenLight');rect(ctx,x+6,sy+6,2,13,'greenLight');
      rect(ctx,x+31,sy+7,1,16,'greenDark');rect(ctx,x+32,sy+7,1,15,'greenLight');
      for(const cx of [17,45]){rect(ctx,x+cx,sy+12,2,2,'greenDark');rect(ctx,x+cx-1,sy+11,2,1,'greenLight');}
      bevel(ctx,x+6,sy+24,52,18,'greenDark');rect(ctx,x+9,sy+34,45,5,'green');rect(ctx,x+11,sy+35,41,1,'greenLight');rect(ctx,x+9,sy+40,45,2,'woodShadow');
      for(const cx of [8,32]){bevel(ctx,x+cx,sy+23,24,11,'greenLight','greenDark');rect(ctx,x+cx+2,sy+24,20,2,'sage');rect(ctx,x+cx+2,sy+31,20,2,'green');}
      for(const cx of [1,55]){bevel(ctx,x+cx,sy+20,8,22,'green');rect(ctx,x+cx+1,sy+21,5,3,'sage');rect(ctx,x+cx+1,sy+25,1,12,'greenLight');rect(ctx,x+cx+5,sy+27,2,12,'greenDark');}
      // Linen cushion with leaf embroidery and a folded woven throw.
      bevel(ctx,x+11,sy+13,13,13,'paper','greenDark');rect(ctx,x+12,sy+14,10,9,'cream');rect(ctx,x+13,sy+14,8,1,'white');
      rect(ctx,x+17,sy+17,1,5,'green');rect(ctx,x+15,sy+17,2,2,'greenLight');rect(ctx,x+18,sy+19,2,2,'green');rect(ctx,x+13,sy+23,8,1,'wallShade');
      bevel(ctx,x+42,sy+15,11,11,'honey','greenDark');rect(ctx,x+43,sy+16,8,1,'yellow');rect(ctx,x+49,sy+18,2,6,'woodLight');
      rect(ctx,x+40,sy+27,10,12,'paper');rect(ctx,x+41,sy+27,2,11,'cream');rect(ctx,x+46,sy+28,1,11,'wallShade');
      for(let i=0;i<3;i++)rect(ctx,x+40,sy+29+i*3,10,1,'woodLight');for(let i=0;i<4;i++)rect(ctx,x+40+i*3,sy+39,1,2,'cream');
    }else if(id==='record'){
      for(const lx of [3,26]){rect(ctx,x+lx,sy+26,3,6,'darkWood');rect(ctx,x+lx,sy+28,1,3,'woodLight');}
      box(ctx,x+1,sy+8,30,20,'wood');rect(ctx,x+2,sy+9,28,3,'woodLight');rect(ctx,x+3,sy+9,25,1,'honey');
      rect(ctx,x+3,sy+15,26,10,'darkWood');rect(ctx,x+4,sy+16,11,9,'woodShadow');rect(ctx,x+16,sy+15,1,11,'woodLight');
      for(let i=0;i<5;i++){rect(ctx,x+5+i*2,sy+17+(i%2),1,7-(i%2),['paper','green','redLight','blueDark','honey'][i]);}
      rect(ctx,x+19,sy+17,7,7,'woodShadow');for(let j=0;j<3;j++)for(let i=0;i<3;i++)rect(ctx,x+19+i*2+(j%2),sy+17+j*2,1,1,'ink');
      rect(ctx,x+3,sy+26,26,1,'woodLight');
      bevel(ctx,x+3,sy+2,26,10,'woodShadow','darkWood');rect(ctx,x+4,sy+3,23,7,'wood');
      oval(ctx,x+5,sy+3,17,7,'ink');oval(ctx,x+7,sy+4,13,5,'darkWood');oval(ctx,x+9,sy+4,9,5,'ink');oval(ctx,x+11,sy+5,5,3,'red');rect(ctx,x+13,sy+6,1,1,'cream');
      rect(ctx,x+24,sy+4,2,3,'paper');rect(ctx,x+22,sy+6,3,1,'cream');rect(ctx,x+20,sy+7,3,1,'wallShade');rect(ctx,x+20,sy+8,2,1,'ink');rect(ctx,x+26,sy+9,1,1,'yellow');
    }
  }
  function mailbox(ctx){
    const x=48,y=216;oval(ctx,x+1,y+36,15,5,'shadow');rect(ctx,x+6,y+19,4,20,'darkWood');rect(ctx,x+6,y+21,3,17,'wood');rect(ctx,x+6,y+22,1,14,'woodLight');rect(ctx,x+8,y+29,1,4,'woodShadow');
    bevel(ctx,x,y+2,16,22,'red','darkWood');rect(ctx,x+2,y+2,11,3,'redLight');rect(ctx,x+1,y+5,2,16,'redLight');rect(ctx,x+13,y+5,2,17,'red');
    rect(ctx,x+2,y+8,12,1,'pink');rect(ctx,x+3,y+9,10,3,'darkWood');rect(ctx,x+4,y+9,8,1,'ink');rect(ctx,x+3,y+12,10,1,'redLight');
    box(ctx,x+4,y+16,8,5,'cream','woodShadow');rect(ctx,x+5,y+17,2,1,'wallShade');rect(ctx,x+9,y+17,2,1,'wallShade');rect(ctx,x+7,y+18,2,1,'woodLight');
    rect(ctx,x+2,y+20,1,1,'honey');rect(ctx,x+13,y+20,1,1,'woodShadow');rect(ctx,x+15,y+4,2,8,'woodShadow');rect(ctx,x+16,y+3,4,3,'yellow');rect(ctx,x+17,y+3,2,1,'cream');
  }
  const furColors={o:'orange',h:'orangeLight',c:'cream',w:'white'};
  const curlPixels=[
    '...ooooo...',
    '..ohhhhho..',
    '.ohhhhhhho.',
    'ohhccccchho',
    'ohccwwwchho',
    'ohccohcchho',
    'ohhcoocchho',
    '.ohhccchho.',
    '..oohhhho..',
    '...ooooo...'
  ];
  function pixels(ctx,x,y,rows,colors){
    rows.forEach((row,j)=>{for(let i=0;i<row.length;i++)if(colors[row[i]])rect(ctx,x+i,y+j,1,1,colors[row[i]]);});
  }
  function curl(ctx,x,y){pixels(ctx,x,y,curlPixels,furColors);}
  function ears(ctx,x,y,back=false){
    // Small, broad ears sit low in the round head silhouette.
    for(let j=0;j<5;j++){
      const width=2+Math.min(j,3);
      rect(ctx,x+3,y+j,width,1,'orange');rect(ctx,x+23-width,y+j,width,1,'orange');
      if(j>1){rect(ctx,x+4,y+j,width-2,1,back?'orangeLight':'pink');rect(ctx,x+24-width,y+j,width-2,1,back?'orangeLight':'pink');}
    }
    rect(ctx,x+3,y+1,1,3,'orangeLight');rect(ctx,x+21,y+1,1,2,'orangeLight');
  }
  function face(ctx,x,y,back,blink,happy){
    ears(ctx,x,y-3,back);
    // Full cheeks, a high forehead and a small muzzle give the pup softer proportions.
    const outline=[[8,10],[5,16],[3,20],[2,22],[1,24],[1,24],[0,26],[0,26],[0,26],[0,26],[0,26],[0,26],[1,24],[1,24],[2,22],[3,20],[5,16],[7,12],[9,8]];
    outline.forEach(([start,width],j)=>rect(ctx,x+start,y+j,width,1,j>15?'orangeDark':'orange'));
    for(let j=1;j<16;j++){const[start,width]=outline[j];rect(ctx,x+start+1,y+j,width-3,1,'orangeLight');}
    rect(ctx,x+7,y+2,10,1,'honey');rect(ctx,x+4,y+4,3,1,'honey');rect(ctx,x+2,y+6,1,3,'honey');
    rect(ctx,x+22,y+7,2,4,'orange');
    if(back){
      rect(ctx,x+3,y+10,3,3,'honey');rect(ctx,x+5,y+13,5,2,'honey');rect(ctx,x+11,y+14,9,1,'honey');
      rect(ctx,x+6,y+15,14,1,'cream');rect(ctx,x+8,y+16,10,1,'cream');rect(ctx,x+10,y+17,6,1,'paper');
      rect(ctx,x+8,y+14,3,1,'cream');rect(ctx,x+18,y+13,3,1,'orange');return;
    }
    // Cream cheeks join below the eyes; no heavy eyebrow or muzzle outlines.
    rect(ctx,x+1,y+10,5,2,'cream');rect(ctx,x+20,y+10,5,2,'cream');
    rect(ctx,x+1,y+12,24,2,'cream');rect(ctx,x+2,y+14,22,1,'cream');rect(ctx,x+3,y+15,20,1,'cream');
    rect(ctx,x+5,y+16,16,1,'cream');rect(ctx,x+7,y+17,12,1,'paper');
    rect(ctx,x+11,y+10,4,4,'cream');rect(ctx,x+9,y+11,8,4,'cream');
    rect(ctx,x+2,y+11,3,1,'white');rect(ctx,x+21,y+11,3,1,'white');rect(ctx,x+12,y+10,2,1,'white');
    rect(ctx,x+6,y+6,2,1,'cream');rect(ctx,x+18,y+6,2,1,'cream');
    if(blink){
      rect(ctx,x+6,y+9,3,1,'ink');rect(ctx,x+17,y+9,3,1,'ink');
      if(happy){rect(ctx,x+5,y+10,1,1,'ink');rect(ctx,x+20,y+10,1,1,'ink');}
    }else{
      for(const ex of [6,17]){rect(ctx,x+ex,y+8,3,3,'ink');rect(ctx,x+ex,y+8,1,1,'white');rect(ctx,x+ex+2,y+10,1,1,'woodShadow');}
    }
    rect(ctx,x+12,y+12,3,1,'ink');rect(ctx,x+13,y+13,1,1,'ink');
    rect(ctx,x+11,y+15,2,1,'woodShadow');rect(ctx,x+14,y+15,2,1,'woodShadow');
    rect(ctx,x+4,y+13,3,1,'pink');rect(ctx,x+20,y+13,2,1,'pink');
    if(happy){rect(ctx,x+13,y+15,2,2,'pink');rect(ctx,x+13,y+15,1,1,'redLight');}
  }
  function sideFace(ctx,x,y,blink){
    // Round cheek and short muzzle keep the side view puppy-like too.
    rect(ctx,x+13,y-2,2,4,'orange');rect(ctx,x+12,y,4,3,'orangeLight');
    for(let j=0;j<5;j++)rect(ctx,x+4,y-3+j,2+Math.min(j,3),1,'orange');
    rect(ctx,x+5,y,2,3,'pink');rect(ctx,x+4,y-2,1,3,'orangeLight');
    const rows=[[6,9],[4,12],[3,14],[2,16],[1,17],[1,18],[0,19],[0,19],[0,19],[0,19],[0,20],[1,19],[1,19],[2,18],[3,16],[4,13],[6,10],[8,6]];
    rows.forEach(([start,width],j)=>rect(ctx,x+start,y+j,width,1,j>15?'orangeDark':'orange'));
    for(let j=1;j<15;j++){const[start,width]=rows[j];rect(ctx,x+start+1,y+j,width-3,1,'orangeLight');}
    rect(ctx,x+6,y+2,8,1,'honey');rect(ctx,x+3,y+5,2,2,'honey');
    rect(ctx,x+5,y+10,5,2,'cream');rect(ctx,x+4,y+12,14,2,'cream');rect(ctx,x+5,y+14,12,2,'cream');
    rect(ctx,x+8,y+16,7,1,'paper');rect(ctx,x+10,y+10,9,4,'cream');rect(ctx,x+6,y+11,3,1,'white');
    rect(ctx,x+12,y+6,2,1,'cream');rect(ctx,x+12,y+8,3,blink?1:3,'ink');if(!blink)rect(ctx,x+12,y+8,1,1,'white');
    rect(ctx,x+18,y+10,2,2,'ink');rect(ctx,x+16,y+14,2,1,'woodShadow');rect(ctx,x+8,y+13,2,1,'pink');
  }
  function mannerism(ctx,action,frame){
    if(action==='stretch'||action==='sniff'){
      const stretch=action==='stretch',bow=stretch?[0,1,3,4,2,0][frame]:[1,2,3,2][frame];
      curl(ctx,1,stretch?13-bow:17);
      oval(ctx,4,stretch?17-bow:19,20,11,'orange');oval(ctx,5,stretch?17-bow:19,18,9,'orangeLight');
      rect(ctx,9,stretch?18-bow:20,8,1,'honey');oval(ctx,11,22,12,7,'cream');
      rect(ctx,5,24-bow,4,5+bow,'orange');oval(ctx,4,28,7,3,'cream');
      rect(ctx,21,24,4,5,'orangeLight');oval(ctx,21,28,8,3,'cream');rect(ctx,24,29,2,1,'white');
      sideFace(ctx,11,8+bow,stretch&&frame>0&&frame<5);
      if(!stretch&&frame===2){rect(ctx,29,23,2,1,'ink');rect(ctx,27,26,2,1,'pink');}
      return true;
    }
    if(action==='yawn'||action==='scratch'){
      const scratch=action==='scratch',tilt=scratch?[0,0,1,0,1,0][frame]:0;
      curl(ctx,20,20);oval(ctx,8,21,19,10,'orange');oval(ctx,9,21,17,8,'orangeLight');
      oval(ctx,12,22,11,7,'cream');oval(ctx,8,28,7,3,'cream');oval(ctx,20,28,7,3,'cream');
      face(ctx,3+tilt,7,false,frame>0&&frame<5,false);
      if(scratch){
        const lift=[8,3,0,3,0,8][frame];
        oval(ctx,23,23,6,6,'orange');rect(ctx,27,14+lift,3,12-lift,'orangeLight');
        oval(ctx,26,10+lift,5,5,'cream');rect(ctx,27,10+lift,2,1,'white');rect(ctx,28,13+lift,1,1,'pink');
      }else if(frame>0&&frame<5){
        const opening=[0,3,5,5,3,0][frame];oval(ctx,14,22,6,opening,'ink');
        if(opening>3){rect(ctx,16,25,3,2,'pink');rect(ctx,16,25,2,1,'redLight');}
        rect(ctx,13,20,2,1,'cream');rect(ctx,19,20,2,1,'cream');
      }
      return true;
    }
    return false;
  }
  function drawDog(ctx,direction,action,frame){
    if(mannerism(ctx,action,frame))return;
    const running=action==='run',moving=action==='walk'||running,leg=moving?(running?[2,0,-2,0]:[1,0,-1,0])[frame]:0;
    const bob=moving?(running?[0,-2,0,-2]:[0,-1,0,-1])[frame]:action==='celebrate'?[1,-2,-1,1][frame]:action==='pet'?[0,1,1,0][frame]:0;
    ctx.save();ctx.translate(0,bob);
    if(direction==='left'){ctx.translate(32,0);ctx.scale(-1,1);direction='right';}
    const sleeping=action==='sleep',drinking=action==='drink',happy=action==='pet';
    if(sleeping){
      const breath=[0,0,-1,0][frame];
      oval(ctx,8,17+breath,22,13,'orange');oval(ctx,9,17+breath,19,11,'orangeLight');rect(ctx,14,18+breath,9,1,'honey');
      curl(ctx,frame===3?20:21,frame===2?19:20);
      // A round face squishes into two little paws while the back rises with breathing.
      for(let j=0;j<4;j++){rect(ctx,4,14+j,2+Math.min(j,2),1,'orange');rect(ctx,15,15+j,2+Math.min(j,2),1,'orange');}
      oval(ctx,2,17+breath,20,13,'orange');oval(ctx,3,17+breath,18,12,'orangeLight');rect(ctx,7,18+breath,8,1,'honey');
      oval(ctx,3,23,18,6,'cream');rect(ctx,8,22+breath,3,1,'ink');rect(ctx,16,22+breath,3,1,'ink');
      rect(ctx,12,25,2,1,'ink');rect(ctx,13,26,1,1,'woodShadow');rect(ctx,5,25,2,1,'pink');
      const pawShift=frame===3?1:0;oval(ctx,4+pawShift,27,7,4,'paper');oval(ctx,4+pawShift,27,7,3,'cream');oval(ctx,14,28,6,3,'paper');rect(ctx,6+pawShift,27,3,1,'white');ctx.restore();return;
    }
    if(direction==='right'){
      rect(ctx,9-leg,25,4,4,'orange');rect(ctx,20+leg,25,4,4,'orange');
      oval(ctx,5,18,21,12,'orange');oval(ctx,6,18,19,10,'orangeLight');rect(ctx,9,19,9,1,'honey');
      oval(ctx,10,24,13,5,'cream');
      for(const [px,dy] of [[8+leg,-leg],[21-leg,leg]]){rect(ctx,px,26,4,3+dy,'orangeLight');oval(ctx,px,28+dy,5,2,'cream');}
      curl(ctx,1,17+(frame%2));
      const hy=drinking?10+[0,1,2,1][frame]:action==='idle'&&frame===2?6:7;sideFace(ctx,11,hy,action==='idle'&&frame===1);
      if(drinking&&frame===2)rect(ctx,28,27,2,2,'pink');
    }else{
      curl(ctx,20+(frame%2),20);
      oval(ctx,8,20,18,10,'orange');oval(ctx,9,20,16,9,'orangeLight');
      if(direction!=='up'){oval(ctx,12,22,10,6,'cream');rect(ctx,14,21,5,4,'cream');}
      for(const[px,dy]of[[9,leg],[20,-leg]]){rect(ctx,px,26,5,3+dy,'orangeLight');oval(ctx,px,28+dy,5,2,'cream');}
      if(action==='sit'){oval(ctx,7,22,20,9,'orange');oval(ctx,8,22,18,8,'orangeLight');oval(ctx,8,28,6,2,'cream');oval(ctx,20,28,6,2,'cream');}
      face(ctx,3,6+(action==='celebrate'?1:(action==='sit'||action==='idle')&&frame===2?-1:0),direction==='up',(action==='idle'&&frame===1)||happy,happy);
      if(action==='idle'&&frame===3){rect(ctx,7,4,2,2,direction==='up'?'honey':'pink');rect(ctx,25,5,1,2,'orangeLight');}
      if(action==='celebrate'){
        for(const[px,dy]of[[5,frame%2],[24,(frame+1)%2]]){oval(ctx,px,22-dy,4,5,'orange');oval(ctx,px,21-dy,4,4,'cream');rect(ctx,px+1,21-dy,2,1,'white');}
      }
    }
    if(action==='read'){
      rect(ctx,6,25,21,6,'greenDark');rect(ctx,5,26,23,5,'green');rect(ctx,6,31,21,1,'greenDark');
      rect(ctx,7,25,9,5,'cream');rect(ctx,17,25,9,5,'white');rect(ctx,16,25,1,6,'wallShade');rect(ctx,8,27,6,1,'wallShade');rect(ctx,19,27,5,1,'wallShade');
      const page=[0,3,1,0][frame];if(page){rect(ctx,16-page,24,1+page,5,'white');rect(ctx,16-page,24,1,4,'paper');}
      oval(ctx,5,25,5,3,'cream');oval(ctx,24,25,5,3,'cream');rect(ctx,23,29,1,3,'red');
    }
    if(drinking){for(let i=0;i<2;i++){const dx=28+i*2,dy=27-((frame+i)%4)*2;rect(ctx,dx,dy,1,2,'blueLight');rect(ctx,dx,dy,1,1,'white');}}
    if(action==='celebrate'){rect(ctx,1,11+frame,1,5,'yellow');rect(ctx,0,13+frame,3,1,'yellow');rect(ctx,29,7+frame,1,3,'yellow');rect(ctx,28,8+frame,3,1,'cream');}
    ctx.restore();
  }
  // Packed atlas: 32px frames in 36px cells with 2px transparent padding.
  const atlas=canvas(256,1024), ac=atlas.getContext('2d'), animationMetadata={palette:P,frameSize:[32,32],cellSize:[36,36],padding:2,origin:[16,29],imageSize:[256,1024],animations:{}};
  function buildAtlas(){
    let row=0;
    const add=(key,direction,action,durations,loop=true)=>{
      const anim={frames:[],durations,loop};animationMetadata.animations[key]=anim;
      for(let f=0;f<durations.length;f++){const x=f*36+2,y=row*36+2;ac.save();ac.translate(x,y);drawDog(ac,direction,action,f);ac.restore();anim.frames.push({x,y,w:32,h:32});}row++;
    };
    for(const direction of ['down','left','right','up']){
      add(`idle-${direction}`,direction,'idle',[1900,140,1150,180]);
      add(`walk-${direction}`,direction,'walk',[130,90,130,90]);
    }
    for(const action of ['read','drink','sleep','celebrate','sit','pet'])add(action,action==='drink'?'right':action==='sit'?'up':'down',action,['sleep','sit'].includes(action)?[900,650,950,700]:action==='celebrate'?[140,100,180,280]:[240,160,240,200]);
    for(const direction of ['down','left','right','up'])add(`run-${direction}`,direction,'run',[100,70,100,70]);
    add('stretch','right','stretch',[240,220,380,650,280,320],false);
    add('yawn','down','yawn',[280,230,380,600,250,300],false);
    add('scratch','down','scratch',[240,140,160,140,160,300],false);
    add('sniff','right','sniff',[420,320,500,360],false);
  }
  function dog(ctx,x,y,direction,action,time){
    const key=['idle','walk','run'].includes(action)?`${action}-${direction}`:action,anim=animationMetadata.animations[key]||animationMetadata.animations['idle-down'];
    const total=anim.durations.reduce((a,b)=>a+b,0),elapsed=Math.max(0,time*1000);
    let cursor=anim.loop?elapsed%total:Math.min(elapsed,total-1),i=0;while(cursor>=anim.durations[i]&&i<anim.frames.length-1){cursor-=anim.durations[i];i++;}
    const f=anim.frames[i];ctx.drawImage(atlas,f.x,f.y,32,32,Math.round(x)-16,Math.round(y)-29,32,32);
  }
  function furnitureLife(ctx,p,time,reduced,music){
    if(reduced)return;
    time=Math.max(0,time);
    const x=p.x*16,y=p.y*16-D.furniture[p.id].lift,beat=Math.floor(time*2)%4;
    if(p.id==='water'){
      rect(ctx,x+4,y+5,8,3,'blue');
      rect(ctx,x+5+(beat%2),y+5,3,1,'blueLight');rect(ctx,x+9,y+6+(beat>1?1:0),2,1,'blueLight');rect(ctx,x+4,y+5,1,1,'white');
    }
    if(p.id==='mug'){
      for(let i=0;i<2;i++){
        const rise=Math.floor((time*3+i*5)%10),dx=x+6+i*3+(Math.floor(rise/3)%2);
        if(rise<8){rect(ctx,dx,y-1-rise,1,2,'cream');if(rise<4)rect(ctx,dx+1,y-rise,1,1,'paper');}
      }
    }
    if(p.id==='record'&&music){
      const points=[[10,4],[16,5],[16,7],[9,7]],a=points[beat];rect(ctx,x+a[0],y+a[1],2,1,'paper');
      if(time%7<3){const lift=Math.floor(time%7*2);rect(ctx,x+24,y-4-lift,1,5,'greenDark');rect(ctx,x+24,y-4-lift,3,1,'greenDark');oval(ctx,x+21,y-lift,4,2,'greenDark');}
    }
  }
  let glowCache=null;
  function lampGlow(ctx,x,y){
    if(!glowCache||glowCache.x!==x||glowCache.y!==y){
      const c=canvas(40,24),g=c.getContext('2d'),left=x-12,top=y-4;
      g.drawImage(background,left,top,40,24,0,0,40,24);
      const im=g.getImageData(0,0,40,24),data=im.data;
      const toRGB=hex=>[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16));
      const light=new Map(Object.entries({floor:'floorLight',floorLight:'honey',seam:'woodLight',woodLight:'honey',wood:'seam'}).map(([a,b])=>[toRGB(P[a]).join(','),toRGB(P[b])]));
      for(let py=0;py<24;py++)for(let px=0;px<40;px++){
        const i=(py*40+px)*4,inside=((px-19)/19)**2+((py-11)/11)**2<1;
        if(!inside||left+px<32||left+px>=352||top+py<96||top+py>=256){data[i+3]=0;continue;}
        const next=light.get(`${data[i]},${data[i+1]},${data[i+2]}`);
        if(next){data[i]=next[0];data[i+1]=next[1];data[i+2]=next[2];}
      }
      g.putImageData(im,0,0);glowCache={x,y,canvas:c};
    }
    ctx.drawImage(glowCache.canvas,x-12,y-4);
  }
  const cached=new Map();
  function asset(id,lit=true){const key=id+lit;if(cached.has(key))return cached.get(key);const f=D.furniture[id],c=canvas(f.w*16,f.h*16+f.lift+4),ctx=c.getContext('2d');furniture(ctx,id,0,f.lift,lit);cached.set(key,c);return c;}
  function drawFurniture(ctx,p,lit=true){const f=D.furniture[p.id];ctx.drawImage(asset(p.id,lit),p.x*16,p.y*16-f.lift);}
  function icon(target,id){const ctx=target.getContext('2d');ctx.imageSmoothingEnabled=false;ctx.clearRect(0,0,target.width,target.height);const a=asset(id);const scale=Math.max(1,Math.min(2,Math.floor(Math.min(target.width/a.width,target.height/a.height))));ctx.drawImage(a,Math.floor((target.width-a.width*scale)/2),Math.floor((target.height-a.height*scale)/2),a.width*scale,a.height*scale);}
  buildRoom();buildAmbientFrames();buildAtlas();
  C.Art={P,background,atlas,animationMetadata,dog,drawFurniture,front,mailbox,icon,rect,oval,paw,heart,ambience,furnitureLife,lampGlow};
})(globalThis.Cottage);
