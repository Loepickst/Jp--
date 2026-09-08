(function (C) {
  'use strict';
  const D = C.Data, F = D.furniture;
  const clone = value => JSON.parse(JSON.stringify(value));
  const dayKey = (time = Date.now()) => new Date(new Date(time).getTime() + 8 * 3600000).toISOString().slice(0, 10);
  const newState = () => ({ version: 1, revision: 0, name: '木木', coins: 0, records: [], owned: ['desk', 'bed', 'water', 'welcomeRug'], placements: [
    { id: 'desk', x: 4, y: 6 }, { id: 'bed', x: 17, y: 7 }, { id: 'water', x: 17, y: 10 }, { id: 'welcomeRug', x: 9, y: 10 }
  ], settings: { sound: true, music: false, roam: true }, lampOn: true });
  function stats(state, time = Date.now()) {
    const today = dayKey(time), rows = state.records.filter(r => dayKey(r.finishedAt) === today);
    return { todayMinutes: rows.reduce((n, r) => n + r.minutes, 0), todayCoins: rows.reduce((n, r) => n + r.reward, 0), totalMinutes: state.records.reduce((n, r) => n + r.minutes, 0), days: new Set(state.records.map(r => dayKey(r.finishedAt))).size };
  }
  function recordStudy(state, record, time = Date.now()) {
    if (!record.id || typeof record.id !== 'string') throw new Error('这条记录没有编号，请重新打开书桌。');
    if (state.records.some(r => r.id === record.id)) throw new Error('这条学习已经记下了，没有重复发放奖励。');
    const title = String(record.title || '').trim(), minutes = Number(record.minutes);
    if (!title || title.length > 120) throw new Error('请用 1～120 个字记下学习内容。');
    if (!Number.isInteger(minutes) || minutes < 5 || minutes > 180) throw new Error('学习时长需要是 5～180 之间的整数。');
    const reward = Math.max(0, Math.min(minutes, D.dailyCap - stats(state, time).todayCoins));
    const next = clone(state);
    next.records.push({ id: record.id, title, minutes, reward, finishedAt: new Date(time).toISOString() });
    next.coins += reward;
    return { state: next, reward };
  }
  function buy(state, id) {
    const item = F[id];
    if (!item || !item.price) throw new Error('这件家具不在商店里。');
    if (state.owned.includes(id)) throw new Error('你已经拥有这件家具了，去收纳箱看看吧。');
    if (state.coins < item.price) throw new Error('爪印币还不够，慢慢积累就好。');
    const next = clone(state);
    next.coins -= item.price; next.owned.push(id);
    return next;
  }
  const rectFor = p => ({ x: p.x * 16, y: p.y * 16, w: F[p.id].w * 16, h: F[p.id].h * 16 });
  function obstacles(placements) {
    return placements.filter(p => !F[p.id].rug).map(rectFor).concat(D.fixed.filter(f => f.w).map(f => ({ x: f.x * 16, y: f.y * 16, w: f.w * 16, h: f.h * 16 })));
  }
  function canStand(x, y, placements) {
    if (x - 5 < D.bounds.left * 16 || x + 5 > D.bounds.right * 16 || y - 4 < D.bounds.top * 16 || y + 4 > D.bounds.bottom * 16) return false;
    return !obstacles(placements).some(r => x + 5 > r.x && x - 5 < r.x + r.w && y + 4 > r.y && y - 4 < r.y + r.h);
  }
  function anchors(placements) {
    return placements.filter(p => F[p.id].action).map(p => ({ id: p.id, name: F[p.id].name, action: F[p.id].action, anchor: { x: (p.x + F[p.id].w / 2) * 16, y: (p.y + F[p.id].h) * 16 + 8 } })).concat(D.fixed);
  }
  const cellKey = (x, y) => `${x},${y}`;
  function clearSegment(from, to, placements) {
    if (![from.x,from.y,to.x,to.y].every(Number.isFinite) || !canStand(from.x,from.y,placements) || !canStand(to.x,to.y,placements)) return false;
    // Sweep the foot rectangle along the entire segment, including tiny corner crossings.
    for (const r of obstacles(placements)) {
      let enter=0,leave=1,separated=false;
      for(const [origin,delta,min,max] of [[from.x,to.x-from.x,r.x-5,r.x+r.w+5],[from.y,to.y-from.y,r.y-4,r.y+r.h+4]]) {
        if(Math.abs(delta)<1e-9){if(origin<=min||origin>=max){separated=true;break;}}
        else{const a=(min-origin)/delta,b=(max-origin)/delta;enter=Math.max(enter,Math.min(a,b));leave=Math.min(leave,Math.max(a,b));}
      }
      if(!separated&&enter<leave-1e-9)return false;
    }
    return true;
  }
  function findPath(placements, start, destination) {
    if (![start.x,start.y,destination.x,destination.y].every(Number.isFinite) || !canStand(start.x,start.y,placements) || !canStand(destination.x,destination.y,placements)) return null;
    if (clearSegment(start, destination, placements)) return [{ ...destination }];
    const first = { x: Math.floor(start.x / 16), y: Math.floor(start.y / 16) }, last = { x: Math.floor(destination.x / 16), y: Math.floor(destination.y / 16) };
    const firstKey = cellKey(first.x,first.y), lastKey = cellKey(last.x,last.y), queue = [first], parents = new Map([[firstKey, null]]);
    for (let index = 0; index < queue.length; index++) {
      const p = queue[index], key = cellKey(p.x,p.y);
      if (key === lastKey) break;
      const next = [[1,0],[-1,0],[0,1],[0,-1]].map(([dx,dy])=>({x:p.x+dx,y:p.y+dy})).sort((a,b)=>Math.abs(a.x-last.x)+Math.abs(a.y-last.y)-Math.abs(b.x-last.x)-Math.abs(b.y-last.y));
      for (const n of next) {
        const k = cellKey(n.x,n.y);
        if (!parents.has(k) && canStand(n.x*16+8,n.y*16+8,placements)) { parents.set(k,key); queue.push(n); }
      }
    }
    if (!parents.has(lastKey)) return null;
    const points = [{ ...destination }];
    for (let key = lastKey; key !== null; key = parents.get(key)) { const [x,y] = key.split(',').map(Number); points.unshift({x:x*16+8,y:y*16+8}); }
    // Every shortcut is checked with the same foot collider used by live movement.
    const route = []; let from = start, index = 0;
    while (index < points.length) {
      let furthest = index;
      for (let j = index; j < points.length; j++) if (clearSegment(from,points[j],placements)) furthest = j;
      if (!clearSegment(from,points[furthest],placements)) return null;
      if (Math.hypot(from.x-points[furthest].x,from.y-points[furthest].y) > .1) route.push(points[furthest]);
      from = points[furthest]; index = furthest + 1;
    }
    return route;
  }
  function reachable(placements) {
    const start = { x: 12, y: 15 }, seen = new Set(), queue = [start];
    if (!canStand(start.x * 16 + 8, start.y * 16 + 8, placements)) return seen;
    seen.add(cellKey(start.x, start.y));
    for (let i = 0; i < queue.length; i++) {
      const p = queue[i];
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const x = p.x + dx, y = p.y + dy, key = cellKey(x, y);
        if (!seen.has(key) && canStand(x * 16 + 8, y * 16 + 8, placements)) { seen.add(key); queue.push({ x, y }); }
      }
    }
    return seen;
  }
  function validateLayout(placements, player) {
    const ids = new Set();
    for (const p of placements) {
      const f = F[p.id];
      if (!f || ids.has(p.id) || !Number.isInteger(p.x) || !Number.isInteger(p.y)) return { ok: false, reason: '家具位置无效。' };
      ids.add(p.id);
      if (p.x < D.bounds.left || p.y < D.bounds.top || p.x + f.w > D.bounds.right || p.y + f.h > D.bounds.bottom) return { ok: false, reason: '请把家具放在木地板以内。' };
    }
    for (let i = 0; i < placements.length; i++) {
      const a = placements[i], fa = F[a.id];
      if (fa.rug) continue;
      for (const b of placements.slice(i + 1).concat(D.fixed.filter(f => f.w))) {
        const fb = F[b.id] || b;
        if (fb.rug) continue;
        if (a.x < b.x + fb.w && a.x + fa.w > b.x && a.y < b.y + fb.h && a.y + fa.h > b.y) return { ok: false, reason: '这里已经有家具了，换个位置试试。' };
      }
    }
    // Reserve both entrance tiles, including the actual spawn point.
    if (!canStand(184, 248, placements) || !canStand(200, 248, placements) || !canStand(D.spawn.x, D.spawn.y, placements)) return { ok: false, reason: '给门口留一条回家的路吧。' };
    if (player && !canStand(player.x, player.y, placements)) return { ok: false, reason: '柴柴正站在这里，先给它留点空间。' };
    const seen = reachable(placements);
    for (const target of anchors(placements)) {
      const a = target.anchor;
      if (!canStand(a.x, a.y, placements) || !seen.has(cellKey(Math.floor(a.x / 16), Math.floor(a.y / 16)))) return { ok: false, reason: `要给「${target.name}」前面留出能走到的空间。` };
    }
    if (player && !seen.has(cellKey(Math.floor(player.x / 16), Math.floor(player.y / 16)))) return { ok: false, reason: '这个位置会把柴柴困住，留一条通路吧。' };
    return { ok: true, reason: '可以放在这里 · 点击确认' };
  }
  function place(state, id, position, player) {
    if (!state.owned.includes(id)) throw new Error('先拥有这件家具，再把它放进小屋。');
    const next = clone(state);
    next.placements = next.placements.filter(p => p.id !== id);
    if (position) next.placements.push({ id, x: position.x, y: position.y });
    const check = validateLayout(next.placements, player);
    if (!check.ok) throw new Error(check.reason);
    return next;
  }
  function validateSave(value) {
    if (!value || value.version !== 1 || !Number.isSafeInteger(value.revision) || value.revision < 0 || typeof value.name !== 'string' || !value.name.trim() || value.name.length > 12 || !Number.isSafeInteger(value.coins) || value.coins < 0 || !Array.isArray(value.records) || !Array.isArray(value.owned) || !Array.isArray(value.placements)) throw new Error('存档格式无法读取。');
    if (!value.settings || typeof value.settings.sound !== 'boolean' || typeof value.settings.music !== 'boolean' || typeof value.lampOn !== 'boolean') throw new Error('存档设置无法读取。');
    // Older version-1 saves omit roam and use the enabled default without rewriting data.
    if (value.settings.roam !== undefined && typeof value.settings.roam !== 'boolean') throw new Error('自在活动设置无法读取。');
    if (new Set(value.owned).size !== value.owned.length || value.owned.some(id => !F[id]) || newState().owned.some(id => !value.owned.includes(id)) || value.placements.some(p => !value.owned.includes(p.id))) throw new Error('家具记录无法读取。');
    const ids = new Set(), days = new Map();
    let earned = 0;
    for (const r of value.records) {
      if (!r || typeof r.id !== 'string' || !r.id || ids.has(r.id) || typeof r.title !== 'string' || !r.title.trim() || r.title.length > 120 || !Number.isInteger(r.minutes) || r.minutes < 5 || r.minutes > 180 || !Number.isInteger(r.reward) || r.reward < 0 || r.reward > r.minutes || !Number.isFinite(Date.parse(r.finishedAt))) throw new Error('学习记录无法读取。');
      ids.add(r.id); earned += r.reward;
      const day = dayKey(r.finishedAt), total = (days.get(day) || 0) + r.reward;
      if (total > D.dailyCap) throw new Error('奖励记录无法读取。');
      days.set(day, total);
    }
    const spent = value.owned.reduce((n, id) => n + (F[id].price || 0), 0);
    if (earned - spent !== value.coins || !validateLayout(value.placements).ok) throw new Error('存档中的余额或布局无法读取。');
    return clone(value);
  }
  class Store {
    constructor(storageProvider, onError) {
      this.provider = storageProvider; this.onError = onError; this.state = newState(); this.raw = null; this.readOnly = false;
      try {
        const storage = this.provider();
        this.raw = storage.getItem(D.storageKey);
        if (this.raw !== null) this.state = validateSave(JSON.parse(this.raw));
      } catch (error) { this.readOnly = true; onError('暂时无法读取存档。原存档已保留；可以在小屋走动，学习和购买暂不可用。请检查浏览器存储权限后刷新。'); }
    }
    commit(next) {
      if (this.readOnly) throw new Error('存档暂时不可用，请检查浏览器设置后刷新。');
      try {
        const storage = this.provider(), current = storage.getItem(D.storageKey);
        if (current !== this.raw) {
          if (current !== null) this.state = validateSave(JSON.parse(current));
          else this.state = newState();
          this.raw = current;
          throw new Error('另一个小屋窗口更新了进度，已同步。请重新进行这次操作。');
        }
        const candidate = clone(next); candidate.revision = this.state.revision + 1;
        validateSave(candidate);
        const raw = JSON.stringify(candidate);
        storage.setItem(D.storageKey, raw);
        this.state = candidate; this.raw = raw;
        return this.state;
      } catch (error) {
        const message = error.message.includes('另一个') ? error.message : '保存没有成功，这次操作尚未生效。请释放浏览器存储空间或检查权限后重试。';
        this.onError(message); throw new Error(message);
      }
    }
    synchronize() {
      try {
        const raw = this.provider().getItem(D.storageKey);
        if (raw !== this.raw) { this.state = raw === null ? newState() : validateSave(JSON.parse(raw)); this.raw = raw; return true; }
      } catch (error) { this.onError('另一个窗口的存档无法读取，请刷新后再试。'); }
      return false;
    }
  }
  C.Model = { clone, dayKey, newState, stats, recordStudy, buy, canStand, anchors, clearSegment, findPath, reachable, validateLayout, place, validateSave, Store };
})(globalThis.Cottage);
