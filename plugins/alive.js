const {
  cmd,
  commands
} = require("../command");
const os = require('os');
const {
  runtime
} = require('../lib/functions');
cmd({
  'pattern': "alive",
  'alias': ['status', 'uptime'],
  'desc': "Check uptime and system status",
  'category': "main",
  'react': '👋',
  'filename': __filename
}, async (_0x2cd91f, _0x3493bf, _0x4166d2, {
  from: _0x409dd5,
  quoted: _0x430d73,
  body: _0x10d5b1,
  isCmd: _0x112ccf,
  command: _0x1d85c3,
  args: _0x33c886,
  q: _0x14f94c,
  isGroup: _0x45846e,
  sender: _0x15be79,
  senderNumber: _0x52f942,
  botNumber2: _0x4b6778,
  botNumber: _0x7074fb,
  pushname: _0x5aa996,
  isMe: _0x3c67fa,
  isOwner: _0x4e04de,
  groupMetadata: _0xf40b6c,
  groupName: _0x558a14,
  participants: _0x26ca96,
  groupAdmins: _0x4602b9,
  isBotAdmins: _0x5d8813,
  isAdmins: _0x2ed92f,
  reply: _0x3627ea
}) => {
  try {
    const _0x42f85c = _0x5aa996 || 'මිත්‍රයා';
    const _0x349928 = "> *👋 ʜᴇʟʟᴏ.." + _0x42f85c + ", HASHAN-MD ɪs ᴀʟɪᴠᴇ ɴᴏᴡ !! 🧸*\n\n*ʜᴇʟʟᴏ 👋 , ɪᴍ HASHAN-MD !! ʜᴏᴡ ᴄᴀɴ ɪ ʜᴇʟᴘ ʏᴏᴜ ᴛᴏᴅᴀʏ 😊*\n\n> *💤 ᴠᴇʀsɪᴏɴ  :* 0.0.1 ᴠ \n> *✨ ʜᴏsᴛ    :* " + os.hostname() + "\n> *⏰ ᴜᴘᴛɪᴍᴇ  :* " + runtime(process.uptime()) + "\n> *📶 ᴍᴇᴍᴏʀʏ   :* " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + (os.totalmem() / 0x400 / 0x400).toFixed(0x2) + "MB\n\n\n> *© POWERED BY HASHAN-MD 🤍*";
    await _0x2cd91f.sendMessage(_0x409dd5, {
      'image': {
        'url': "https://i.ibb.co/bM84Dvjr/8db52e2fa48322a6.jpg"
      },
      'caption': _0x349928,
      'contextInfo': {
        'mentionedJid': [_0x4166d2.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363395674230271@newsletter",
          'newsletterName': "HASHAN-MD-V1",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x3493bf
    });
  } catch (_0x5ee230) {
    console.error("Error in alive command:", _0x5ee230);
    _0x3627ea("An error occurred: " + _0x5ee230.message);
  }
});
