const {
  fetchJson
} = require("../lib/functions");
const {
  cmd,
  commands
} = require("../command");
let baseUrl;
(async () => {
  let _0x235256 = await fetchJson("https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json");
  baseUrl = _0x235256.api;
})();
cmd({
  'pattern': 'fb',
  'desc': "Download fb videos",
  'category': "download",
  'react': '🔎',
  'filename': __filename
}, async (_0x3ee7c5, _0x958c3a, _0x255bed, {
  from: _0x2bcdab,
  quoted: _0x59fdec,
  body: _0x20902d,
  isCmd: _0x288ab1,
  command: _0x3f0a62,
  args: _0x335daa,
  q: _0x7be0d3,
  isGroup: _0x528399,
  sender: _0x14b869,
  senderNumber: _0x2d8934,
  botNumber2: _0x4bbaa6,
  botNumber: _0x165b9b,
  pushname: _0x56b353,
  isMe: _0x5e54a9,
  isOwner: _0x2e8554,
  groupMetadata: _0x2d2d1c,
  groupName: _0x5842d8,
  participants: _0xba59b1,
  groupAdmins: _0x4f6182,
  isBotAdmins: _0x29099c,
  isAdmins: _0x2ad3a3,
  reply: _0x215209
}) => {
  try {
    if (!_0x7be0d3 || !_0x7be0d3.startsWith("https://")) {
      return _0x215209("Please provide a valid Facebook video URL!");
    }
    const _0x558307 = await fetchJson(baseUrl + '/api/fdown?url=' + _0x7be0d3);
    const _0x14b40f = await _0x3ee7c5.sendMessage(_0x2bcdab, {
      'image': {
        'url': "https://files.catbox.moe/sn20tl.jpg"
      },
      'caption': " *HASHAN-MD FB DOWNLOADER...⚙️*\n\n*Reply This Message With Option*\n\n*1 Download FB Video In HD*\n*2 Download FB Video In SD*\n\n> *©POWERED BY HASHAN-MD*"
    }, {
      'quoted': _0x958c3a
    });
    _0x3ee7c5.ev.on("messages.upsert", async _0x14c1bc => {
      const _0x112a8e = _0x14c1bc.messages[0x0];
      if (!_0x112a8e.message || !_0x112a8e.message.extendedTextMessage) {
        return;
      }
      const _0x249bab = _0x112a8e.message.extendedTextMessage.text.trim();
      if (_0x112a8e.message.extendedTextMessage.contextInfo && _0x112a8e.message.extendedTextMessage.contextInfo.stanzaId === _0x14b40f.key.id) {
        switch (_0x249bab) {
          case '1':
            await _0x3ee7c5.sendMessage(_0x2bcdab, {
              'video': {
                'url': _0x558307.data.hd
              },
              'mimetype': "video/mp4",
              'caption': "> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*"
            }, {
              'quoted': _0x958c3a
            });
            break;
          case '2':
            await _0x3ee7c5.sendMessage(_0x2bcdab, {
              'video': {
                'url': _0x558307.data.sd
              },
              'mimetype': "video/mp4",
              'caption': "> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*"
            }, {
              'quoted': _0x958c3a
            });
            break;
          default:
            _0x215209("Invalid option. Please select a valid option🔴");
        }
      }
    });
  } catch (_0x4b6f61) {
    console.error(_0x4b6f61);
    await _0x3ee7c5.sendMessage(_0x2bcdab, {
      'react': {
        'text': '❌',
        'key': _0x958c3a.key
      }
    });
    _0x215209("An error occurred while processing your request.");
  }
});
