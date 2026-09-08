const test = require('node:test');
const assert = require('node:assert/strict');
require('../data.js');
require('../model.js');
const { Model: M, Data: D } = globalThis.Cottage;
const beforeMidnight = '2026-09-08T15:59:59.000Z';
const afterMidnight = '2026-09-08T16:00:00.000Z';
const study = (state, minutes = 25, id = 'study-1', time = beforeMidnight) => M.recordStudy(state, { id, title: '复习日语单词', minutes }, time);
function memoryStorage() {
  const values = new Map();
  return { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: key => values.delete(key) };
}

test('new cottage has no currency, four gifts and reachable interactions', () => {
  const state = M.newState();
  assert.equal(state.coins, 0); assert.equal(state.owned.length, 4);
  assert.equal(M.validateLayout(state.placements).ok, true);
  assert.equal(M.validateSave(state).version, 1);
  assert.equal(M.canStand(D.spawn.x, D.spawn.y, state.placements), true);
});
test('learning awards one coin per minute and preserves the original state', () => {
  const initial = M.newState(), result = study(initial);
  assert.equal(result.reward, 25); assert.equal(result.state.coins, 25);
  assert.equal(initial.coins, 0); assert.equal(initial.records.length, 0);
});
test('double submission of an existing record never gives currency', () => {
  const state = study(M.newState()).state;
  assert.throws(() => study(state), /没有重复/); assert.equal(state.coins, 25);
});
test('daily cap truncates rewards while preserving full minutes', () => {
  let state = study(M.newState(), 110).state;
  state = study(state, 25, 'second').state;
  state = study(state, 180, 'third').state;
  assert.equal(state.coins, 120); assert.deepEqual(state.records.map(r => r.reward), [110, 10, 0]);
  assert.equal(M.stats(state, beforeMidnight).todayMinutes, 315);
});
test('Beijing midnight, rather than UTC midnight, resets rewards', () => {
  let state = study(M.newState(), 180).state;
  assert.equal(M.dayKey(beforeMidnight), '2026-09-08'); assert.equal(M.dayKey(afterMidnight), '2026-09-09');
  state = study(state, 25, 'tomorrow', afterMidnight).state;
  assert.equal(state.coins, 145); assert.equal(M.stats(state, afterMidnight).todayCoins, 25);
  assert.equal(M.stats(state, afterMidnight).days, 2);
});
for (const minutes of [0, 4, 181, 5.5, NaN, Infinity, '', 'abc']) test(`invalid learning duration ${String(minutes)} is rejected`, () => assert.throws(() => study(M.newState(), minutes), /整数/));
test('duration endpoints are accepted', () => { assert.equal(study(M.newState(), 5).reward, 5); assert.equal(study(M.newState(), 180).reward, 120); });
test('learning title and record identifier are validated', () => {
  for (const title of ['', '  ', '字'.repeat(121)]) assert.throws(() => M.recordStudy(M.newState(), { id: 'id', title, minutes: 25 }), /学习内容/);
  assert.throws(() => M.recordStudy(M.newState(), { title: '阅读', minutes: 25 }), /编号/);
});
test('insufficient balance, unknown products and duplicate purchases cannot spend currency', () => {
  assert.throws(() => M.buy(M.newState(), 'plant'), /不够/);
  assert.throws(() => M.buy(M.newState(), 'missing'), /不在商店/);
  const state = M.buy(study(M.newState()).state, 'plant');
  assert.equal(state.coins, 10); assert.equal(state.owned.filter(id => id === 'plant').length, 1);
  assert.throws(() => M.buy(state, 'plant'), /已经拥有/);
});
test('purchased items begin in inventory; placement, movement and storage are free', () => {
  let state = M.buy(study(M.newState()).state, 'plant');
  assert.equal(state.placements.some(p => p.id === 'plant'), false);
  state = M.place(state, 'plant', { x: 15, y: 6 });
  state = M.place(state, 'plant', { x: 14, y: 6 });
  state = M.place(state, 'plant', null);
  assert.equal(state.coins, 10); assert.equal(state.owned.includes('plant'), true);
  assert.equal(state.placements.some(p => p.id === 'plant'), false);
});
test('unowned items cannot be placed', () => assert.throws(() => M.place(M.newState(), 'sofa', { x: 12, y: 12 }), /先拥有/));
test('out-of-bounds positions are rejected', () => assert.equal(M.validateLayout([...M.newState().placements, { id: 'plant', x: 22, y: 6 }]).ok, false));
test('solid furniture cannot overlap other furniture or the fixed mailbox', () => {
  assert.match(M.validateLayout([...M.newState().placements, { id: 'plant', x: 4, y: 6 }]).reason, /已经有家具/);
  assert.match(M.validateLayout([...M.newState().placements, { id: 'plant', x: 3, y: 14 }]).reason, /已经有家具/);
});
test('rugs can underlay furniture and remain walkable', () => {
  const ps = M.newState().placements.filter(p => p.id !== 'welcomeRug').concat({ id: 'welcomeRug', x: 4, y: 6 });
  assert.equal(M.validateLayout(ps).ok, true);
  assert.equal(M.canStand(168, 184, M.newState().placements), true);
});
test('door tiles, desk front and window front must remain accessible', () => {
  const ps = M.newState().placements;
  for (const pos of [{ x: 11, y: 15 }, { x: 12, y: 15 }, { x: 6, y: 8 }, { x: 13, y: 6 }]) assert.equal(M.validateLayout([...ps, { id: 'plant', ...pos }]).ok, false);
});
test('a wall of otherwise separated furniture cannot cut off interactions', () => {
  const ps = [{ id: 'desk', x: 2, y: 12 }, { id: 'sofa', x: 6, y: 12 }, { id: 'bed', x: 10, y: 12 }, { id: 'shelf', x: 13, y: 12 }, { id: 'record', x: 16, y: 12 }, { id: 'water', x: 18, y: 12 }, { id: 'plant', x: 19, y: 12 }, { id: 'books', x: 20, y: 12 }, { id: 'mug', x: 21, y: 12 }];
  assert.equal(M.validateLayout(ps).ok, false);
});
test('furniture cannot be dropped on the player', () => assert.match(M.validateLayout([...M.newState().placements, { id: 'plant', x: 14, y: 12 }], { x: 232, y: 200 }).reason, /正站在这里/));
test('foot collider blocks walls and desks, not visual sprite head space', () => {
  const ps = M.newState().placements;
  assert.equal(M.canStand(36, 180, ps), false); assert.equal(M.canStand(37, 180, ps), true);
  assert.equal(M.canStand(96, 130, ps), false); assert.equal(M.canStand(96, 132, ps), true);
});
test('save reload restores learning, purchases, placements and settings', () => {
  const storage = memoryStorage(), store = new M.Store(() => storage, () => {});
  let next = M.buy(study(store.state).state, 'plant'); next = M.place(next, 'plant', { x: 15, y: 6 }); next.name = '小橘'; next.settings.sound = false;
  store.commit(next);
  const reloaded = new M.Store(() => storage, () => {});
  assert.deepEqual(reloaded.state, store.state); assert.equal(reloaded.state.revision, 1);
  assert.throws(() => study(reloaded.state), /没有重复/);
});
test('failed persistence does not award currency or change the live state', () => {
  const storage = memoryStorage(), errors = [], store = new M.Store(() => storage, m => errors.push(m));
  storage.setItem = () => { throw new Error('QuotaExceededError'); };
  assert.throws(() => store.commit(study(store.state).state), /尚未生效/);
  assert.equal(store.state.coins, 0); assert.equal(store.state.records.length, 0); assert.equal(errors.length, 1);
});
test('permission-denied storage is explicit and read-only', () => {
  const errors = [], store = new M.Store(() => { throw new Error('SecurityError'); }, m => errors.push(m));
  assert.equal(store.readOnly, true); assert.equal(errors.length, 1); assert.throws(() => store.commit(M.newState()), /不可用/);
});
test('corrupt saves are preserved instead of silently overwritten', () => {
  const storage = memoryStorage(); storage.setItem(D.storageKey, '{broken');
  const store = new M.Store(() => storage, () => {});
  assert.equal(store.readOnly, true); assert.equal(storage.getItem(D.storageKey), '{broken');
});
test('stale windows synchronize without overwriting newer progress', () => {
  const storage = memoryStorage(), first = new M.Store(() => storage, () => {}), second = new M.Store(() => storage, () => {});
  first.commit(study(first.state).state);
  assert.throws(() => second.commit(study(second.state, 5, 'second').state), /另一个/);
  assert.equal(second.state.coins, 25);
  second.commit(study(second.state, 5, 'second').state);
  first.synchronize(); assert.equal(first.state.coins, 30);
});
test('save validation rejects inconsistent balances and daily reward totals', () => {
  const state = study(M.newState()).state; state.coins = 50;
  assert.throws(() => M.validateSave(state), /余额/);
  const over = study(M.newState(), 180).state; over.records.push({ ...over.records[0], id: 'second' }); over.coins = 240;
  assert.throws(() => M.validateSave(over), /奖励/);
});

test('mouse routes reach every initial interaction using safe foot segments', () => {
  const ps=M.newState().placements;
  for(const t of M.anchors(ps)){
    const route=M.findPath(ps,D.spawn,t.anchor);assert.ok(route,t.id);let last=D.spawn;
    for(const p of route){assert.equal(M.clearSegment(last,p,ps),true,t.id);last=p;}
    assert.deepEqual(last,t.anchor);
  }
});
test('navigation takes an actual detour around the desk', () => {
  const ps=M.newState().placements,start={x:40,y:104},end={x:144,y:104};
  assert.equal(M.clearSegment(start,end,ps),false);
  const route=M.findPath(ps,start,end);assert.ok(route.length>1);assert.ok(route.some(p=>p.y>=132));
});
test('solid and out-of-bounds destinations are rejected', () => {
  for(const point of [{x:96,y:104},{x:0,y:0},{x:Infinity,y:100},{x:200,y:270}])assert.equal(M.findPath(M.newState().placements,D.spawn,point),null);
});
test('rug navigation remains direct and reaches exact off-center clicks', () => {
  const start={x:192,y:232},end={x:183.5,y:180.5},ps=M.newState().placements;
  assert.deepEqual(M.findPath(ps,start,end),[end]);
});
test('swept collision catches narrow corner crossings while allowing tangency', () => {
  const ps=[{id:'plant',x:5,y:8}];
  assert.equal(M.clearSegment({x:73,y:123.5},{x:77,y:124.5},ps),false);
  assert.equal(M.clearSegment({x:73,y:124},{x:100,y:124},ps),true);
});
