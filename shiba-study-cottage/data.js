(function (C) {
  'use strict';
  const furniture = {
    desk: { name: '窗边书桌', w: 4, h: 2, lift: 16, action: 'study', starter: true, description: '把今天的收获写下来' },
    bed: { name: '软垫小窝', w: 3, h: 2, lift: 0, action: 'sleep', starter: true, description: '困了，就歇一会儿' },
    water: { name: '水碗', w: 1, h: 1, lift: 0, action: 'drink', starter: true, description: '咕嘟咕嘟，补充水分' },
    welcomeRug: { name: '初见地毯', w: 4, h: 3, lift: 0, rug: true, starter: true, description: '送给你们的第一份礼物' },
    plant: { name: '小盆栽', w: 1, h: 1, lift: 16, price: 15, description: '给窗边添一点绿意' },
    books: { name: '书堆', w: 1, h: 1, lift: 0, price: 15, description: '还没读完的好故事' },
    mug: { name: '马克杯摆件', w: 1, h: 1, lift: 0, price: 15, description: '杯子里装着慢悠悠的下午' },
    pawRug: { name: '柴爪地毯', w: 3, h: 2, lift: 0, rug: true, price: 15, description: '踩一踩，都是软乎乎' },
    lamp: { name: '落地暖灯', w: 1, h: 1, lift: 32, price: 40, action: 'lamp', description: '互动开关，留一盏暖灯' },
    shelf: { name: '矮书柜', w: 3, h: 1, lift: 16, price: 40, description: '给喜欢的书一个家' },
    sofa: { name: '双人小沙发', w: 4, h: 2, lift: 16, price: 80, action: 'sleep', description: '刚好够柴柴伸一个懒腰' },
    record: { name: '唱片柜', w: 2, h: 1, lift: 16, price: 80, action: 'music', description: '互动播放一段午后小调' }
  };
  C.Data = Object.freeze({
    width: 384, height: 288, tile: 16, speed: 64,
    bounds: { left: 2, top: 6, right: 22, bottom: 16 },
    spawn: { x: 192, y: 248, direction: 'up' },
    furniture,
    fixed: [
      { id: 'mailbox', x: 3, y: 14, w: 1, h: 2, name: '门边信箱', action: 'shop', anchor: { x: 72, y: 232 }, visual: { x: 48, y: 217, w: 20, h: 39 } },
      { id: 'window', name: '午后窗边', action: 'window', anchor: { x: 208, y: 104 }, visual: { x: 164, y: 39, w: 92, h: 52 } }
    ],
    storageKey: 'shibaStudyCottage.v1', dailyCap: 120
  });
})(globalThis.Cottage = globalThis.Cottage || {});
