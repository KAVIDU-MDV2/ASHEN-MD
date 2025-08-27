const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': "ping4",
  'alias': ['speed', "pong"],
  'use': ".ping4",
  'desc': "Check bot's response time.",
  'category': 'main',
  'react': '⚡',
  'filename': __filename
}, async (_0x2876ad, _0x49c0b1, _0xa95bb5, {
  from: _0x32f177,
  quoted: _0x2935cb,
  sender: _0x5c2159,
  reply: _0x16746e
}) => {
  try {
    const _0x5bc171 = new Date().getTime();
    const _0x434ebb = ['🔥', '⚡', '🚀', '💨', '🎯', '🎉', '🌟', '💥', '🕐', '🔹'];
    const _0x508731 = ['💎', '🏆', '⚡️', '🚀', '🎶', '🌠', '🌀', '🔱', '🛡️', '✨'];
    const _0x5aeff3 = _0x434ebb[Math.floor(Math.random() * _0x434ebb.length)];
    let _0x34762f = _0x508731[Math.floor(Math.random() * _0x508731.length)];
    while (_0x34762f === _0x5aeff3) {
      _0x34762f = _0x508731[Math.floor(Math.random() * _0x508731.length)];
    }
    await _0x2876ad.sendMessage(_0x32f177, {
      'react': {
        'text': _0x34762f,
        'key': _0x49c0b1.key
      }
    });
    const _0x58fc21 = new Date().getTime();
    const _0x149c54 = (_0x58fc21 - _0x5bc171) / 0x3e8;
    const _0x389372 = "> *HASHAN-MD SPEED: " + _0x149c54.toFixed(0x2) + "ms " + _0x5aeff3 + '*';
    await _0x2876ad.sendMessage(_0x32f177, {
      'text': _0x389372,
      'contextInfo': {
        'mentionedJid': [_0x5c2159],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363395674230271@newsletter",
          'newsletterName': "HASHAN-MD",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x49c0b1
    });
  } catch (_0x65024a) {
    console.error("Error in ping command:", _0x65024a);
    _0x16746e("An error occurred: " + _0x65024a.message);
  }
});
cmd({
  'pattern': 'ping3',
  'desc': "Check bot's response time.",
  'category': 'main',
  'react': '📟',
  'filename': __filename
}, async (_0x59c450, _0x369eb3, _0x27b013, {
  from: _0x359497,
  quoted: _0x477659,
  body: _0x4209ad,
  isCmd: _0x5ee55a,
  command: _0x100507,
  args: _0x57dcfb,
  q: _0x336a4a,
  isGroup: _0x4eb03d,
  sender: _0x52f4db,
  senderNumber: _0x1f91a3,
  botNumber2: _0x58f674,
  botNumber: _0x176de4,
  pushname: _0x102ff4,
  isMe: _0x41f5b0,
  isOwner: _0x358444,
  groupMetadata: _0x5a3a55,
  groupName: _0x171e35,
  participants: _0x46d372,
  groupAdmins: _0x3f3dd9,
  isBotAdmins: _0x7da154,
  isAdmins: _0x567fd3,
  reply: _0x1ef3e0
}) => {
  try {
    const _0x28d05f = Date.now();
    const {
      key: _0x5b203d
    } = await _0x59c450.sendMessage(_0x359497, {
      'text': "*PINGING...*"
    });
    const _0x4a3881 = Date.now();
    const _0xaf8910 = _0x4a3881 - _0x28d05f;
    const _0x1131cb = ["ʟᴏᴀᴅɪɴɢ 《 ▭▭▭▭▭▭▭▭▭▭ 》0%,", "ʟᴏᴀᴅɪɴɢ 《 ▬▭▭▭▭▭▭▭▭▭ 》10%,", "ʟᴏᴀᴅɪɴɢ 《 ▬▬▭▭▭▭▭▭▭▭ 》20%,", "ʟᴏᴀᴅɪɴɢ 《 ▬▬▬▭▭▭▭▭▭▭ 》30%,", "ʟᴏᴀᴅɪɴɢ 《 ▬▬▬▬▭▭▭▭▭▭ 》40%,", "ʟᴏᴀᴅɪɴɢ 《 ▬▬▬▬▬▭▭▭▭▭ 》50%,", "ʟᴏᴀᴅɪɴɢ 《 ▬▬▬▬▬▬▭▭▭▭ 》60%,", "ʟᴏᴀᴅɪɴɢ 《 ▬▬▬▬▬▬▬▭▭▭ 》70%,", "ʟᴏᴀᴅɪɴɢ 《 ▬▬▬▬▬▬▬▬▭▭ 》80%,", "ʟᴏᴀᴅɪɴɢ 《 ▬▬▬▬▬▬▬▬▬▭ 》90%,", "ʟᴏᴀᴅɪɴɢ 《 ▬▬▬▬▬▬▬▬▬▬ 》100%,", "*HASHAN-MD-SPEED " + _0xaf8910 + " 𝐦𝐬* 📍"];
    for (let _0x5501e9 = 0x0; _0x5501e9 < _0x1131cb.length; _0x5501e9++) {
      await _0x59c450.relayMessage(_0x359497, {
        'protocolMessage': {
          'key': _0x5b203d,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x1131cb[_0x5501e9]
          }
        }
      }, {});
    }
  } catch (_0x6014d0) {
    console.log(_0x6014d0);
    _0x1ef3e0('' + _0x6014d0);
  }
});
