const {
  cmd
} = require("../command");
cmd({
  'pattern': "repo",
  'desc': "get bot repo.",
  'category': "main",
  'filename': __filename
}, async (_0x332ae0, _0x51bc99, _0x3b6dcb, {
  from: _0x17b5e7,
  sender: _0xfc2050,
  pushname: _0x4c8b1d,
  reply: _0x5c4005
}) => {
  try {
    return await _0x332ae0.sendMessage(_0x17b5e7, {
      'image': {
        'url': "https://files.catbox.moe/3sd6up.jpg"
      },
      'caption': "⭕ *HASHAN-MD Github Repository*\n\n   https://github.com/Hashan000-1/WHITE-MD\n\n⭕ *HASHAN-MD DEPLOY HEROKU*\n\ncomming soon !\n\n⭕ *HASHAN-MD WEB 📍*\n\ncomming soon !\n\n⭕ *WHATSAPP CHANNEL :*\n\nhttps://whatsapp.com/channel/0029VazhnLzK0IBdwXG4152o\n\n⭕ *Contact Owner :*\n\n> wa.me/94706042889\n> wa.me/94715865463\n> wa.me/94713126513\n            \n⭕ *HASHAN-MD Talkdrove Diploy*\n \n*ඔය Link එකෙන් ගිහින් Account එකක් හදාගන්න👇*\ncomming soon !\n\n\n> POWERED BY HASHAN-MD 🕊️",
      'contextInfo': {
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363395674230271@newsletter',
          'newsletterName': "HASHAN-MD",
          'serverMessageId': -0x1
        }
      }
    }, {
      'quoted': _0x51bc99
    });
  } catch (_0x344a4b) {
    console.log(_0x344a4b);
    _0x5c4005('' + _0x344a4b);
  }
});
