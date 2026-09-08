(function(C){
  'use strict';
  const M=C.Model,D=C.Data;
  const activities={
    window:{weight:3,duration:[8,14],cooldown:30,going:'想去窗边看看云。',doing:'正坐在窗边，慢慢看云飘过。'},
    drink:{weight:2,duration:[2.3,2.8],cooldown:60,going:'想喝一小口水。',doing:'正在咕嘟咕嘟喝水。'},
    sleep:{weight:3,duration:[12,20],cooldown:45,going:'想找个软软的地方歇一会儿。',doing:'缩成一小团，安心打着盹。'},
    wander:{weight:5,duration:[3,5],cooldown:0,going:'正在小屋里慢悠悠地散步。',doing:'停下来，好奇地看看四周。'},
    look:{weight:2,duration:[3,5],cooldown:12,doing:'竖起小耳朵，听听小屋里的声音。'},
    stretch:{weight:2,duration:[2.3,3.2],cooldown:38,doing:'前爪伸远远，舒舒服服伸个懒腰。'},
    yawn:{weight:1.5,duration:[2.2,3],cooldown:45,doing:'眯起眼睛，打了一个圆圆的哈欠。'},
    scratch:{weight:1.5,duration:[1.4,2],cooldown:35,doing:'歪歪脑袋，挠一挠小耳朵。'},
    sniff:{weight:2,duration:[1.8,2.5],cooldown:24,doing:'低下小鼻子，闻闻木地板的味道。'}
  };
  class IdleLife {
    constructor(game,random=Math.random){
      this.game=game;this.random=random;this.clock=0;this.idleFor=0;this.delay=8;
      this.phase='waiting';this.activity=null;this.elapsed=0;this.message='';this.lastChoice=null;this.lastKind=null;this.cooldowns=new Map();
    }
    get active(){return this.activity!==null;}
    between(a,b){return a+this.random()*(b-a);}
    say(message){if(this.message===message)return;this.message=message;this.game.onActivity?.();}
    reset(){
      const active=this.active;this.activity=null;this.phase='waiting';this.idleFor=0;this.delay=8;this.elapsed=0;
      if(active){this.game.stopRoute();this.game.clearAction();}this.say('');
    }
    finish(){
      if(this.activity)this.cooldowns.set(this.activity.kind,this.clock+activities[this.activity.kind].cooldown);
      this.reset();this.delay=this.between(4,8);
    }
    candidates(){
      const g=this.game,result=[];
      for(const target of g.targets){
        // Only restful actions are allowed. Never dispatch the UI's onInteract callback.
        const kind=target.action;if(!['window','drink','sleep'].includes(kind))continue;
        if((this.cooldowns.get(kind)||0)>this.clock)continue;
        if(M.findPath(g.placements,g.player,target.anchor))result.push({id:target.id,kind,target,point:{...target.anchor},weight:activities[kind].weight});
      }
      const points=[];
      for(let y=D.bounds.top;y<D.bounds.bottom;y++)for(let x=D.bounds.left;x<D.bounds.right;x++){
        const point={x:x*16+8,y:y*16+8},distance=Math.hypot(point.x-g.player.x,point.y-g.player.y);
        if(distance>=32&&distance<=112&&!(y>=14&&x>=11&&x<=12)&&M.canStand(point.x,point.y,g.placements))points.push(point);
      }
      // Bound path searches even in a crowded room, and never retry every animation frame.
      for(let i=0;i<12&&points.length;i++){
        const point=points.splice(Math.floor(this.random()*points.length),1)[0];
        if(M.findPath(g.placements,g.player,point)){result.push({id:'wander',kind:'wander',point,weight:activities.wander.weight});break;}
      }
      for(const kind of ['look','stretch','yawn','scratch','sniff'])if((this.cooldowns.get(kind)||0)<=this.clock)result.push({id:kind,kind,weight:activities[kind].weight});
      return result;
    }
    choose(){
      let options=this.candidates();
      if(!this.lastChoice){const walk=options.find(o=>o.kind==='wander');if(walk)return walk;}
      const different=options.filter(o=>o.kind!==this.lastKind);if(different.length)options=different;
      let pick=this.random()*options.reduce((sum,o)=>sum+o.weight,0);
      for(const option of options){pick-=option.weight;if(pick<0)return option;}
      return options[options.length-1]||null;
    }
    start(option){
      const g=this.game;if(!option)return false;
      if(option.point&&!g.walkTo(option.point,option.target?.id||null,true))return false;
      this.activity=option;this.lastChoice=option.id;this.lastKind=option.kind;this.idleFor=0;this.elapsed=0;
      this.duration=this.between(...activities[option.kind].duration);this.lookStep=-1;
      this.phase=option.point?'walking':'acting';this.say(activities[option.kind][option.point?'going':'doing']);
      if(['stretch','yawn','scratch','sniff'].includes(option.kind)&&!g.perform(option.kind,null,true)){this.finish();return false;}
      return true;
    }
    arrive(){
      if(!this.active||this.phase!=='walking')return;
      const g=this.game,a=this.activity;
      if(a.target){
        const target=g.targets.find(t=>t.id===a.id&&t.action===a.kind);
        if(!target||Math.hypot(g.player.x-target.anchor.x,g.player.y-target.anchor.y)>.5){this.finish();return;}
        if(!g.perform(a.kind,target,true)){this.finish();return;}
      }else g.clearAction();
      this.phase='acting';this.elapsed=0;this.say(activities[a.kind].doing);
    }
    update(dt){
      const g=this.game;
      if(g.blocked||g.build||g.suspended||g.store.state.settings.roam===false){this.reset();return;}
      this.clock+=dt;
      if(this.active){
        this.elapsed+=dt;
        if(this.phase==='walking'){
          if(!g.destination||this.elapsed>16)this.finish();
          return;
        }
        if(['look','wander'].includes(this.activity.kind)){
          const step=Math.floor(this.elapsed/1.3);
          if(step!==this.lookStep){this.lookStep=step;g.player.direction=['down','left','down','right'][step%4];}
        }
        if(this.elapsed>=this.duration)this.finish();
        return;
      }
      // Respect player-requested routes, rest and learning celebrations to their end.
      if(g.destination||g.keys.size||g.action!=='idle'){this.idleFor=0;return;}
      this.idleFor+=dt;
      if(this.idleFor>=this.delay){this.idleFor=0;if(!this.start(this.choose()))this.delay=8;}
    }
  }
  C.IdleLife=IdleLife;
})(globalThis.Cottage);
