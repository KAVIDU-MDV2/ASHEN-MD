const axios = require("axios");
const {
  cmd,
  commands
} = require('../command');
cmd({
  'pattern': 'anime',
  'desc': "anime the bot",
  'category': 'main',
  'react': '⛱️',
  'filename': __filename
}, async (_0x3ed155, _0x1456b0, _0x2d4169, {
  from: _0x388530,
  quoted: _0x2549b1,
  body: _0x4033f8,
  isCmd: _0x1813d1,
  command: _0x5db59e,
  args: _0x4e985c,
  q: _0x186085,
  isGroup: _0x3047c2,
  sender: _0x33cda3,
  senderNumber: _0x4595e1,
  botNumber2: _0x20b6ae,
  botNumber: _0x35d152,
  pushname: _0x597e62,
  isMe: _0x278636,
  isOwner: _0x12f2aa,
  groupMetadata: _0x3382c8,
  groupName: _0x5b441f,
  participants: _0x486d37,
  groupAdmins: _0x53a14a,
  isBotAdmins: _0x33d050,
  isAdmins: _0x141972,
  reply: _0x366843
}) => {
  try {
    await _0x3ed155.sendMessage(_0x388530, {
      'image': {
        'url': "https://telegra.ph/file/b26f27aa5daaada031b90.jpg"
      },
      'caption': "❮❮❮ *HASHAN-MD ANIME PHOTOS* ❯❯❯"
    }, {
      'quoted': _0x1456b0
    });
    await _0x3ed155.sendMessage(_0x388530, {
      'image': {
        'url': "https://telegra.ph/file/51b44e4b086667361061b.jpg"
      },
      'caption': "❮❮❮ *HASHAN-MD ANIME PHOTOS* ❯❯❯"
    }, {
      'quoted': _0x1456b0
    });
    await _0x3ed155.sendMessage(_0x388530, {
      'image': {
        'url': "https://telegra.ph/file/7d165d73f914985542537.jpg"
      },
      'caption': "❮❮❮ *HASHAN-MD ANIME PHOTOS* ❯❯❯"
    }, {
      'quoted': _0x1456b0
    });
    await _0x3ed155.sendMessage(_0x388530, {
      'image': {
        'url': "https://telegra.ph/file/3d9732d2657d2d72dc102.jpg"
      },
      'caption': "❮❮❮ *HASHAN-MD ANIME PHOTOS* ❯❯❯"
    }, {
      'quoted': _0x1456b0
    });
    await _0x3ed155.sendMessage(_0x388530, {
      'image': {
        'url': "https://telegra.ph/file/8daf7e432a646f3ebe7eb.jpg"
      },
      'caption': "❮❮❮ *HASHAN-MD ANIME PHOTOS* ❯❯❯"
    }, {
      'quoted': _0x1456b0
    });
    await _0x3ed155.sendMessage(_0x388530, {
      'image': {
        'url': "https://telegra.ph/file/7514b18ea89da924e7496.jpg"
      },
      'caption': "❮❮❮ *HASHAN-MD ANIME PHOTOS* ❯❯❯"
    }, {
      'quoted': _0x1456b0
    });
    await _0x3ed155.sendMessage(_0x388530, {
      'image': {
        'url': "https://telegra.ph/file/ce9cb5acd2cec7693d76b.jpg"
      },
      'caption': "❮❮❮ *HASHAN-MD ANIME PHOTOS* ❯❯❯"
    }, {
      'quoted': _0x1456b0
    });
  } catch (_0x5f1e53) {
    console.log(_0x5f1e53);
    _0x366843('' + _0x5f1e53);
  }
});
cmd({
  'pattern': 'animegirl',
  'desc': "Fetch a random anime girl image.",
  'category': 'fun',
  'react': '👧',
  'filename': __filename
}, async (_0x36b294, _0x614a5d, _0x2a0aed, {
  from: _0x46a05f,
  quoted: _0x12f9e3,
  body: _0x5977ef,
  isCmd: _0x3f6bc7,
  command: _0x16379b,
  args: _0x568f7d,
  q: _0x48fb79,
  isGroup: _0x26c4ca,
  sender: _0x1de4db,
  senderNumber: _0x1d6887,
  botNumber2: _0x4e0672,
  botNumber: _0x2fa3fc,
  pushname: _0x41423d,
  isMe: _0x11bb6e,
  isOwner: _0x2429cc,
  groupMetadata: _0x259ccf,
  groupName: _0x59215d,
  participants: _0x4f43c6,
  groupAdmins: _0x3aa969,
  isBotAdmins: _0x323803,
  isAdmins: _0x51d5a2,
  reply: _0x31b1a2
}) => {
  try {
    const _0xf8698f = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x13d0b4 = _0xf8698f.data;
    await _0x36b294.sendMessage(_0x46a05f, {
      'image': {
        'url': _0x13d0b4.url
      },
      'caption': "👸 *HASHAN-MD RANDOM ANIME GIRL IMAGES* 👸\n\n\n *🧬©POWERED BY HASHAN-MD*"
    }, {
      'quoted': _0x614a5d
    });
  } catch (_0x5c2519) {
    console.log(_0x5c2519);
    _0x31b1a2("*Error Fetching Anime Girl image*: " + _0x5c2519.message);
  }
});
cmd({
  'pattern': "animegirl1",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '👧',
  'filename': __filename
}, async (_0x300ac8, _0x254e50, _0x2e6cee, {
  from: _0x52e06a,
  quoted: _0x13fb1b,
  body: _0x149b16,
  isCmd: _0x257511,
  command: _0x16ffe1,
  args: _0x5a191c,
  q: _0x54430f,
  isGroup: _0x78e68b,
  sender: _0x2a88d0,
  senderNumber: _0x13458b,
  botNumber2: _0x42468d,
  botNumber: _0x197d33,
  pushname: _0x48c960,
  isMe: _0x4f1f72,
  isOwner: _0x3fc31e,
  groupMetadata: _0x4cdabe,
  groupName: _0x9ae033,
  participants: _0xff7b75,
  groupAdmins: _0x490af1,
  isBotAdmins: _0x289ebe,
  isAdmins: _0x30def5,
  reply: _0x1abed0
}) => {
  try {
    const _0x34662a = await axios.get('https://api.waifu.pics/sfw/waifu');
    const _0x2db881 = _0x34662a.data;
    await _0x300ac8.sendMessage(_0x52e06a, {
      'image': {
        'url': _0x2db881.url
      },
      'caption': "👸 *HASHAN-MD RANDOM ANIME GIRL IMAGES* 👸\n\n\n *POWERED BY HASHAN-MD*"
    }, {
      'quoted': _0x254e50
    });
  } catch (_0x4e0c32) {
    console.log(_0x4e0c32);
    _0x1abed0("*Error Fetching Anime Girl image*: " + _0x4e0c32.message);
  }
});
cmd({
  'pattern': 'animegirl2',
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '👧',
  'filename': __filename
}, async (_0x14872e, _0x552d14, _0x4e2f93, {
  from: _0x5cb824,
  quoted: _0x22a8cf,
  body: _0x5d63a6,
  isCmd: _0x5b1274,
  command: _0x29aa47,
  args: _0xd954f6,
  q: _0x4e61f5,
  isGroup: _0x2fd87a,
  sender: _0x151b26,
  senderNumber: _0x135b03,
  botNumber2: _0x30d111,
  botNumber: _0xe49d8a,
  pushname: _0x34eb84,
  isMe: _0x3286fe,
  isOwner: _0x116d7f,
  groupMetadata: _0x588938,
  groupName: _0x5ad6bd,
  participants: _0x5af41d,
  groupAdmins: _0x2bb3d4,
  isBotAdmins: _0xbf4ff,
  isAdmins: _0x59d2e1,
  reply: _0x51cac6
}) => {
  try {
    const _0xb4a4a = await axios.get('https://api.waifu.pics/sfw/waifu');
    const _0x5f2488 = _0xb4a4a.data;
    await _0x14872e.sendMessage(_0x5cb824, {
      'image': {
        'url': _0x5f2488.url
      },
      'caption': "👸 *HASHAN-MD RANDOM ANIME GIRL IMAGES* 👸\n\n\n *🧬©POWERED BY HASHAN-MD*"
    }, {
      'quoted': _0x552d14
    });
  } catch (_0x45c6f0) {
    console.log(_0x45c6f0);
    _0x51cac6("*Error Fetching Anime Girl image*: " + _0x45c6f0.message);
  }
});
cmd({
  'pattern': "animegirl3",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '👧',
  'filename': __filename
}, async (_0xcdbb04, _0x19c4e4, _0x989d8a, {
  from: _0x4e4b8f,
  quoted: _0x283548,
  body: _0x4737e9,
  isCmd: _0x470c5d,
  command: _0x15fee7,
  args: _0x57d310,
  q: _0x59526b,
  isGroup: _0x3dc686,
  sender: _0x20ec40,
  senderNumber: _0x190f76,
  botNumber2: _0x4e5bf7,
  botNumber: _0x131a41,
  pushname: _0xf93ace,
  isMe: _0x4b12b3,
  isOwner: _0x3c36de,
  groupMetadata: _0x2a2db2,
  groupName: _0x326e95,
  participants: _0x26cb6d,
  groupAdmins: _0x5293c1,
  isBotAdmins: _0x1c58b9,
  isAdmins: _0x3ac419,
  reply: _0x14ac8e
}) => {
  try {
    const _0x4a145b = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x36fc33 = _0x4a145b.data;
    await _0xcdbb04.sendMessage(_0x4e4b8f, {
      'image': {
        'url': _0x36fc33.url
      },
      'caption': "👸 *HASHAN-MD RANDOM ANIME GIRL IMAGES* 👸\n\n\n *🧬©POWERED BY HASHAN-MD*"
    }, {
      'quoted': _0x19c4e4
    });
  } catch (_0x5d15f5) {
    console.log(_0x5d15f5);
    _0x14ac8e("*Error Fetching Anime Girl image*: " + _0x5d15f5.message);
  }
});
cmd({
  'pattern': "animegirl4",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '👧',
  'filename': __filename
}, async (_0xea0fed, _0x3aeb7d, _0x36e005, {
  from: _0x119434,
  quoted: _0x5b3365,
  body: _0x344dd5,
  isCmd: _0x356a66,
  command: _0x207f71,
  args: _0x42f59b,
  q: _0x2274f5,
  isGroup: _0x5317be,
  sender: _0x2b3fd7,
  senderNumber: _0x32bf85,
  botNumber2: _0x37820b,
  botNumber: _0x5b7ca8,
  pushname: _0x3ab405,
  isMe: _0x1092e3,
  isOwner: _0x478cf1,
  groupMetadata: _0x4817e3,
  groupName: _0x254039,
  participants: _0x5cb6ea,
  groupAdmins: _0x516f69,
  isBotAdmins: _0x1aa716,
  isAdmins: _0x3803ef,
  reply: _0x3bb9ba
}) => {
  try {
    const _0x5e8eb4 = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x227988 = _0x5e8eb4.data;
    await _0xea0fed.sendMessage(_0x119434, {
      'image': {
        'url': _0x227988.url
      },
      'caption': "👸 *HASHAN-MD RANDOM ANIME GIRL IMAGES* 👸\n\n\n *🧬©POWERED BY HASHAN-MD*"
    }, {
      'quoted': _0x3aeb7d
    });
  } catch (_0x2d3cce) {
    console.log(_0x2d3cce);
    _0x3bb9ba("*Error Fetching Anime Girl image*: " + _0x2d3cce.message);
  }
});
cmd({
  'pattern': "animegirl5",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '👧',
  'filename': __filename
}, async (_0x579af8, _0x224186, _0x4bc443, {
  from: _0x1003f6,
  quoted: _0x277971,
  body: _0x466365,
  isCmd: _0x55f1f6,
  command: _0x5bdf60,
  args: _0x906ba4,
  q: _0x54ebb8,
  isGroup: _0x32c335,
  sender: _0x4d902f,
  senderNumber: _0x3e4007,
  botNumber2: _0x2bb361,
  botNumber: _0x1b225d,
  pushname: _0x206969,
  isMe: _0x2e0c90,
  isOwner: _0x54ca40,
  groupMetadata: _0x378d7e,
  groupName: _0x4a6e44,
  participants: _0x55ab42,
  groupAdmins: _0x174d30,
  isBotAdmins: _0x1b7a3d,
  isAdmins: _0x545113,
  reply: _0xa4ae63
}) => {
  try {
    const _0x76a93f = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x4338ee = _0x76a93f.data;
    await _0x579af8.sendMessage(_0x1003f6, {
      'image': {
        'url': _0x4338ee.url
      },
      'caption': "👸 *HASHAN-MD RANDOM ANIME GIRL IMAGES* 👸\n\n\n *🧬©POWERED BY HASHAN-MD*"
    }, {
      'quoted': _0x224186
    });
  } catch (_0x5aa5bb) {
    console.log(_0x5aa5bb);
    _0xa4ae63("*Error Fetching Anime Girl image*: " + _0x5aa5bb.message);
  }
});
cmd({
  'pattern': "loli",
  'alias': ["lolii"],
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🐱',
  'filename': __filename
}, async (_0x4704c8, _0x4b2eda, _0x121794, {
  from: _0x3ad745,
  quoted: _0x470afb,
  body: _0x410347,
  isCmd: _0x246ee3,
  command: _0x39d53c,
  args: _0x10cd0a,
  q: _0x574613,
  isGroup: _0x5b99f7,
  sender: _0x5b23c9,
  senderNumber: _0x1aa98c,
  botNumber2: _0x529809,
  botNumber: _0x219a79,
  pushname: _0x482641,
  isMe: _0x5952bb,
  isOwner: _0x2c1c47,
  groupMetadata: _0x1d277f,
  groupName: _0x34e29c,
  participants: _0x53a832,
  groupAdmins: _0x4d3bff,
  isBotAdmins: _0x52d01c,
  isAdmins: _0x441d3e,
  reply: _0x5bb5ac
}) => {
  try {
    const _0xc7f884 = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x2c8e6e = _0xc7f884.data;
    await _0x4704c8.sendMessage(_0x3ad745, {
      'image': {
        'url': _0x2c8e6e.url
      },
      'caption': "👸 *HASHAN-MD RANDOM ANIME GIRL IMAGES* 👸\n\n\n *🧬©POWERED BY HASHAN-MD*"
    }, {
      'quoted': _0x4b2eda
    });
  } catch (_0x113917) {
    console.log(_0x113917);
    _0x5bb5ac("*Error Fetching Anime Girl image*: " + _0x113917.message);
  }
});
