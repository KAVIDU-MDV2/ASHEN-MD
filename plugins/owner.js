const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': "owner",
  'desc': "owner the bot",
  'category': 'main',
  'react': "👨‍💻",
  'filename': __filename
}, async (_0x5d1c46, _0x2ac286, _0x247aa9, {
  from: _0x4f1471,
  quoted: _0x2ca7e7,
  body: _0x16e07a,
  isCmd: _0x7faedc,
  command: _0x43d564,
  args: _0x17b82a,
  q: _0x559130,
  isGroup: _0x1df3c5,
  sender: _0x49733c,
  senderNumber: _0x168f7e,
  botNumber2: _0x54d7b4,
  botNumber: _0x2f305e,
  pushname: _0x8136e5,
  isMe: _0x54f7eb,
  isOwner: _0x294cca,
  groupMetadata: _0x41442d,
  groupName: _0x32f00b,
  participants: _0x916c2e,
  groupAdmins: _0x3b06d4,
  isBotAdmins: _0x257a0b,
  isAdmins: _0xff763b,
  reply: _0xae96f7
}) => {
  try {
    await _0x5d1c46.sendMessage(_0x4f1471, {
      'image': {
        'url': "https://files.catbox.moe/sn20tl.jpg"
      },
      'caption': "*HASHAN-MD BOT OWNER📍*\n\n*_HASHAN-MD-OWNER : 94706042889_*\n\n> ©POWERD BY HASHAN-MD\n"
    }, {
      'quoted': _0x2ac286
    });
    await _0x5d1c46.sendMessage(_0x4f1471, {
      'contacts': {
        'displayName': "Bot Owners",
        'contacts': [{
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:Mr. Hashiya\nORG:Mr. Hashiya\nTEL;type=CELL;type=VOICE;waid=94713457207:+94713457207\nEMAIL:hacker@gmail.com\nEND:VCARD"
        }, {
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:Mr. Hashiya\nORG:Mr. Hashiya\nTEL;type=CELL;type=VOICE;waid=94706042889:+94706042889\nEMAIL:hashiyacoder@gmail.com\nEND:VCARD"
        }]
      }
    });
  } catch (_0xa4caab) {
    console.log(_0xa4caab);
    _0xae96f7('' + _0xa4caab);
  }
});
