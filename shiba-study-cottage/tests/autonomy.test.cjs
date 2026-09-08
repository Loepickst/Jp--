const test=require('node:test'),assert=require('node:assert/strict');
require('../data.js');require('../model.js');require('../autonomy.js');
const {Data:D,Model:M,IdleLife}=globalThis.Cottage;
function fixture(random=()=>.5){
  const state=M.newState(),g={store:{state},player:{...D.spawn},keys:new Set(),action:'idle',blocked:false,build:null,suspended:false,destination:null,route:[],performed:[]};
  Object.defineProperty(g,'placements',{get:()=>g.store.state.placements});
  Object.defineProperty(g,'targets',{get:()=>M.anchors(g.placements)});
  g.stopRoute=()=>{g.route=[];g.destination=null;};g.clearAction=()=>{g.action='idle';};
  g.walkTo=(point,id,automatic)=>{assert.equal(automatic,true);const path=M.findPath(g.placements,g.player,point);if(!path)return false;g.destination={...point};g.route=path;return true;};
  g.perform=(kind,target,automatic)=>{assert.equal(automatic,true);g.performed.push({kind,id:target?.id});g.action=kind;return true;};
  g.onInteract=()=>{throw Error('Autonomy must never dispatch player UI interactions');};
  const life=new IdleLife(g,random);g.idleLife=life;
  return {g,life};
}
test('autonomy waits eight idle seconds, then picks a reachable short stroll',()=>{
  const {g,life}=fixture();life.update(7.9);assert.equal(life.active,false);life.update(.11);
  assert.equal(life.activity.kind,'wander');assert.equal(life.phase,'walking');
  let from=g.player;for(const point of g.route){assert.equal(M.clearSegment(from,point,g.placements),true);from=point;}
  assert.ok(Math.hypot(g.destination.x-g.player.x,g.destination.y-g.player.y)<=112);
});
test('player input reset interrupts only autonomous actions and restarts the full grace period',()=>{
  const {g,life}=fixture();life.update(8);life.reset();assert.equal(g.destination,null);assert.equal(life.active,false);
  life.update(7.9);assert.equal(life.active,false);g.action='read';life.reset();assert.equal(g.action,'read');
});
for(const scenario of ['blocked','build','suspended','disabled','manual walk','manual sleep','manual read','held key'])test(`no new autonomy during ${scenario}`,()=>{
  const {g,life}=fixture();
  if(scenario==='disabled')g.store.state.settings.roam=false;
  else if(scenario==='manual walk')g.destination={x:100,y:180};
  else if(scenario==='manual sleep')g.action='sleep';
  else if(scenario==='manual read')g.action='read';
  else if(scenario==='held key')g.keys.add('KeyW');
  else g[scenario]=true;
  life.update(60);assert.equal(life.active,false);assert.equal(life.idleFor,0);
});
test('only reachable, placed restful furnishings are candidates',()=>{
  const {g,life}=fixture();let candidates=life.candidates();
  assert.ok(candidates.some(c=>c.id==='bed'));assert.ok(candidates.some(c=>c.id==='window'));
  assert.ok(!candidates.some(c=>['desk','mailbox','lamp','record'].includes(c.id)));
  g.store.state.placements=g.placements.filter(p=>p.id!=='water'&&p.id!=='bed');
  candidates=life.candidates();assert.ok(!candidates.some(c=>c.id==='water'||c.id==='bed'));
});
test('rest arrives through the permitted action API and never changes saved progress',()=>{
  const {g,life}=fixture(),before=JSON.stringify(g.store.state),option=life.candidates().find(c=>c.id==='water');
  assert.equal(life.start(option),true);g.player={...option.point};g.stopRoute();life.arrive();
  assert.deepEqual(g.performed,[{kind:'drink',id:'water'}]);assert.equal(life.phase,'acting');
  life.update(4);assert.equal(life.active,false);assert.equal(JSON.stringify(g.store.state),before);
});
test('sleep cooldown applies to beds and sofas together and activities do not immediately repeat',()=>{
  const {g,life}=fixture();g.store.state.placements.push({id:'sofa',x:8,y:13});
  const bed=life.candidates().find(c=>c.id==='bed');life.start(bed);life.finish();
  assert.ok(!life.candidates().some(c=>c.kind==='sleep'));assert.notEqual(life.choose().kind,'sleep');
  life.clock+=46;assert.ok(life.candidates().some(c=>c.kind==='sleep'));
});
test('missing targets and stopped or timed-out travel safely abandon the activity',()=>{
  const {g,life}=fixture(),bed=life.candidates().find(c=>c.id==='bed');life.start(bed);g.player={...bed.point};
  g.store.state.placements=g.placements.filter(p=>p.id!=='bed');g.stopRoute();life.arrive();assert.equal(life.active,false);assert.equal(g.performed.length,0);
  life.start(life.candidates().find(c=>c.kind==='wander'));life.update(17);assert.equal(life.active,false);assert.equal(g.destination,null);
});
test('a room without reachable options backs off instead of planning every frame',()=>{
  const {life}=fixture();let calls=0;life.candidates=()=>{calls++;return [];};life.update(8);for(let i=0;i<100;i++)life.update(.04);assert.equal(calls,1);
});
test('version-1 settings keep both legacy defaults and a saved disable choice',()=>{
  const legacy=M.newState();delete legacy.settings.roam;assert.equal(M.validateSave(legacy).version,1);
  const {g,life}=fixture();g.store.state=legacy;life.update(8);assert.equal(life.active,true);
  const state=M.newState();state.settings.roam=false;assert.equal(M.validateSave(state).settings.roam,false);
  state.settings.roam='false';assert.throws(()=>M.validateSave(state),/自在活动/);
});
for(const kind of ['stretch','yawn','scratch','sniff'])test(`${kind} starts a safe in-place action, can be interrupted and has a cooldown`,()=>{
  const {g,life}=fixture(),before=JSON.stringify(g.store.state),position={...g.player};
  const option=life.candidates().find(c=>c.kind===kind);assert.ok(option);assert.equal(life.start(option),true);
  assert.equal(g.action,kind);assert.equal(life.phase,'acting');assert.equal(g.destination,null);assert.deepEqual(g.player,position);
  life.finish();assert.ok(!life.candidates().some(c=>c.kind===kind));assert.equal(g.action,'idle');assert.equal(before,JSON.stringify(g.store.state));
  life.clock+=61;assert.ok(life.candidates().some(c=>c.kind===kind));life.start(option);life.reset();assert.equal(life.active,false);assert.equal(g.action,'idle');
});
