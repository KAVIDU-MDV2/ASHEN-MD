const {
  cmd,
  commands
} = require('../command');
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
cmd({
  'pattern': "ping2",
  'react': '😼',
  'alias': ['speed'],
  'desc': "Check bot's ping",
  'category': "main",
  'use': '.ping2',
  'filename': __filename
}, async (_0x23a0a6, _0x11bbf3, _0x3421de, {
  from: _0x6f0602,
  l: _0x3b3115,
  quoted: _0x284206,
  body: _0x1fed08,
  isCmd: _0x3f6493,
  command: _0xa9abf5,
  args: _0x5005a3,
  q: _0x1c2e4a,
  isGroup: _0x24bca0,
  sender: _0x56f4fd,
  senderNumber: _0x1e3497,
  botNumber2: _0xd18306,
  botNumber: _0x33e652,
  pushname: _0x24a719,
  isMe: _0x362fb9,
  isOwner: _0x9f02e6,
  groupMetadata: _0x5d25c7,
  groupName: _0x3df6ad,
  participants: _0x3972f9,
  groupAdmins: _0x3e7647,
  isBotAdmins: _0x44a07b,
  isAdmins: _0x189caa,
  reply: _0x5597cb
}) => {
  try {
    var _0x5ed273 = new Date().getTime();
    let _0x139078 = await _0x23a0a6.sendMessage(_0x6f0602, {
      'text': "*_ASHEN-MD..._*"
    }, {
      'quoted': _0x11bbf3
    });
    var _0x475d77 = new Date().getTime();
    await _0x23a0a6.sendMessage(_0x6f0602, {
      'delete': _0x139078.key
    });
    return await _0x23a0a6.sendMessage(_0x6f0602, {
      'text': "*☘️📡Pong*\n *" + (_0x475d77 - _0x5ed273) + " ms* "
    }, {
      'quoted': _0x11bbf3
    });
  } catch (_0x7d6033) {
    _0x5597cb("*Error ❗❗🫩*");
    _0x3b3115(_0x7d6033);
  }
});
cmd({
  'pattern': "ping",
  'react': '⚡',
  'alias': ["speed"],
  'desc': "Check bot's ping",
  'category': 'main',
  'use': ".ping",
  'filename': __filename
}, async (_0x491a78, _0x2385f0, _0x15461d, {
  from: _0x4a4eaa,
  quoted: _0x483098,
  body: _0x3cdbda,
  isCmd: _0x2bae79,
  command: _0x7c8a16,
  args: _0x232664,
  q: _0x915cd2,
  isGroup: _0x203ca8,
  sender: _0x1de9d6,
  senderNumber: _0x46419a,
  botNumber2: _0xa9aacf,
  botNumber: _0x317e1f,
  pushname: _0x12327d,
  isMe: _0x1b384f,
  isOwner: _0x3206b1,
  groupMetadata: _0x46ddbb,
  groupName: _0x5f07a7,
  participants: _0x19f460,
  groupAdmins: _0x3ee31e,
  isBotAdmins: _0x2b960d,
  isAdmins: _0x4d9b25,
  reply: _0x370406
}) => {
  try {
    const _0x1182da = Date.now();
    const _0x349883 = await _0x491a78.sendMessage(_0x4a4eaa, {
      'text': "*_🪄Pinging..._*"
    });
    const _0x1a668e = Date.now();
    const _0x58156e = _0x1a668e - _0x1182da;
    await _0x491a78.sendMessage(_0x4a4eaa, {
      'text': "*♻️ Speed... : " + _0x58156e + "ms*"
    }, {
      'quoted': _0x349883
    });
  } catch (_0x1a4713) {
    console.log(_0x1a4713);
    _0x370406('' + _0x1a4713);
  }
});
