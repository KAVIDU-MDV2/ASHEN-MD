const {
  cmd
} = require("../command");
const {
  ytsearch
} = require("@dark-yasiya/yt-dl.js");
cmd({
  'pattern': "mp4",
  'alias': ['video'],
  'react': '🎦',
  'desc': "Download YouTube video",
  'category': "main",
  'use': ".mp4 < Yt url or Name >",
  'filename': __filename
}, async (_0x4ba1ed, _0x3e6360, _0x47ff74, {
  from: _0x4effa0,
  prefix: _0x2e540d,
  quoted: _0x60f554,
  q: _0x50c1fb,
  reply: _0x585bba
}) => {
  try {
    if (!_0x50c1fb) {
      return await _0x585bba("Please provide a YouTube URL or song name.");
    }
    const _0x889d3a = await ytsearch(_0x50c1fb);
    if (_0x889d3a.results.length < 0x1) {
      return _0x585bba("No results found!");
    }
    let _0x48e768 = _0x889d3a.results[0x0];
    let _0x18d1ec = 'https://apis.davidcyriltech.my.id/download/ytmp4?url=' + encodeURIComponent(_0x48e768.url);
    let _0x17db9e = await fetch(_0x18d1ec);
    let _0x1e0f95 = await _0x17db9e.json();
    if (_0x1e0f95.status !== 0xc8 || !_0x1e0f95.success || !_0x1e0f95.result.download_url) {
      return _0x585bba("Failed to fetch the video. Please try again later.");
    }
    let _0x1bc981 = "*HASHAN-𝗠𝗗 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ✨️*\n\n┃ 🎶 *Title:* " + _0x48e768.title + "\n┃ ⏳ *Duration:* " + _0x48e768.timestamp + "\n┃ 👀 *Views:* " + _0x48e768.views + "\n┃ 👤 *Author:* " + _0x48e768.author.name + "\n┃ 🔗 *Link:* " + _0x48e768.url + "\n\n*Choose download format:*\n\n1️ | . 📄 Document (no preview)\n2️ | . ▶️ Normal Video (with preview)\n\n_Reply with 1, 2 to this message to download the format you prefer._\n\n> *© 𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 HASHAN-𝗠𝗗*";
    let _0x1796b1 = {
      'mentionedJid': [_0x47ff74.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': {
        'newsletterJid': '120363395674230271@newsletter',
        'newsletterName': "HASHAN-𝗠𝗗-V1",
        'serverMessageId': 0x8f
      }
    };
    const _0x4c9fda = await _0x4ba1ed.sendMessage(_0x4effa0, {
      'image': {
        'url': _0x48e768.thumbnail
      },
      'caption': _0x1bc981,
      'contextInfo': _0x1796b1
    }, {
      'quoted': _0x3e6360
    });
    _0x4ba1ed.ev.on('messages.upsert', async _0x4bfc60 => {
      const _0x52d87b = _0x4bfc60.messages[0x0];
      if (!_0x52d87b.message || !_0x52d87b.message.extendedTextMessage) {
        return;
      }
      const _0x229c86 = _0x52d87b.message.extendedTextMessage.text.trim();
      if (_0x52d87b.message.extendedTextMessage.contextInfo && _0x52d87b.message.extendedTextMessage.contextInfo.stanzaId === _0x4c9fda.key.id) {
        await _0x4ba1ed.sendMessage(_0x4effa0, {
          'react': {
            'text': '⬇️',
            'key': _0x52d87b.key
          }
        });
        switch (_0x229c86) {
          case '1':
            await _0x4ba1ed.sendMessage(_0x4effa0, {
              'document': {
                'url': _0x1e0f95.result.download_url
              },
              'mimetype': "video/mp4",
              'fileName': _0x48e768.title + ".mp4",
              'contextInfo': _0x1796b1
            }, {
              'quoted': _0x52d87b
            });
            break;
          case '2':
            await _0x4ba1ed.sendMessage(_0x4effa0, {
              'video': {
                'url': _0x1e0f95.result.download_url
              },
              'mimetype': "video/mp4",
              'contextInfo': _0x1796b1
            }, {
              'quoted': _0x52d87b
            });
            break;
          default:
            await _0x4ba1ed.sendMessage(_0x4effa0, {
              'text': "*Please Reply with ( 1 , 2 ) ❤️"
            }, {
              'quoted': _0x52d87b
            });
            break;
        }
      }
    });
  } catch (_0x23d2de) {
    console.log(_0x23d2de);
    _0x585bba("An error occurred. Please try again later.");
  }
});
cmd({
  'pattern': "song",
  'react': '🎶',
  'desc': "Download YouTube song",
  'category': 'main',
  'use': ".song < Yt url or Name >",
  'filename': __filename
}, async (_0x4d3170, _0x785b47, _0x392835, {
  from: _0x484d3c,
  prefix: _0x4fec15,
  quoted: _0x2b6985,
  q: _0x5dc949,
  reply: _0x2e8892
}) => {
  try {
    if (!_0x5dc949) {
      return await _0x2e8892("Please provide a YouTube URL or song name.");
    }
    const _0x1dc027 = await ytsearch(_0x5dc949);
    if (_0x1dc027.results.length < 0x1) {
      return _0x2e8892("No results found!");
    }
    let _0x555c56 = _0x1dc027.results[0x0];
    let _0x162dea = "https://apis.davidcyriltech.my.id/youtube/mp3?url=" + encodeURIComponent(_0x555c56.url);
    let _0xbf88 = await fetch(_0x162dea);
    let _0x464cf7 = await _0xbf88.json();
    if (_0x464cf7.status !== 0xc8 || !_0x464cf7.success || !_0x464cf7.result.downloadUrl) {
      return _0x2e8892("Failed to fetch the audio. Please try again later.");
    }
    let _0x3703cc = "*HASHAN-𝗠𝗗 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ✨️*\n\n┃ 🎶 *Title:* " + _0x555c56.title + "\n┃ ⏳ *Duration:* " + _0x555c56.timestamp + "\n┃ 👀 *Views:* " + _0x555c56.views + "\n┃ 👤 *Author:* " + _0x555c56.author.name + "\n┃ 🔗 *Link:* " + _0x555c56.url + "\n\n*Choose download format:*\n\n| 1️ | . 📄 MP3 as Document\n| 2️ | . 🎧 MP3 as Audio (Play)\n| 3️ | . 🎙️ MP3 as Voice Note (PTT)\n\n_Reply with 1, 2 or 3 to this message to download the format you prefer._\n\n> *©  𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 HASHAN-𝗠𝗗*";
    let _0x2f6c46 = {
      'mentionedJid': [_0x392835.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': {
        'newsletterJid': "120363395674230271@newsletter",
        'newsletterName': 'HASHAN-𝗠𝗗-V1',
        'serverMessageId': 0x8f
      }
    };
    const _0x869dca = await _0x4d3170.sendMessage(_0x484d3c, {
      'image': {
        'url': _0x555c56.thumbnail
      },
      'caption': _0x3703cc,
      'contextInfo': _0x2f6c46
    }, {
      'quoted': _0x785b47
    });
    _0x4d3170.ev.on('messages.upsert', async _0xe9d504 => {
      const _0x4bc204 = _0xe9d504.messages[0x0];
      if (!_0x4bc204.message || !_0x4bc204.message.extendedTextMessage) {
        return;
      }
      const _0x3726ba = _0x4bc204.message.extendedTextMessage.text.trim();
      if (_0x4bc204.message.extendedTextMessage.contextInfo && _0x4bc204.message.extendedTextMessage.contextInfo.stanzaId === _0x869dca.key.id) {
        await _0x4d3170.sendMessage(_0x484d3c, {
          'react': {
            'text': '⬇️',
            'key': _0x4bc204.key
          }
        });
        switch (_0x3726ba) {
          case '1':
            await _0x4d3170.sendMessage(_0x484d3c, {
              'document': {
                'url': _0x464cf7.result.downloadUrl
              },
              'mimetype': "audio/mpeg",
              'fileName': _0x555c56.title + ".mp3",
              'contextInfo': _0x2f6c46
            }, {
              'quoted': _0x4bc204
            });
            break;
          case '2':
            await _0x4d3170.sendMessage(_0x484d3c, {
              'audio': {
                'url': _0x464cf7.result.downloadUrl
              },
              'mimetype': "audio/mpeg",
              'contextInfo': _0x2f6c46
            }, {
              'quoted': _0x4bc204
            });
            break;
          case '3':
            await _0x4d3170.sendMessage(_0x484d3c, {
              'audio': {
                'url': _0x464cf7.result.downloadUrl
              },
              'mimetype': 'audio/mpeg',
              'ptt': true,
              'contextInfo': _0x2f6c46
            }, {
              'quoted': _0x4bc204
            });
            break;
          default:
            await _0x4d3170.sendMessage(_0x484d3c, {
              'text': "*invalid selection please select between ( 1 or 2 or 3) 🔴*"
            }, {
              'quoted': _0x4bc204
            });
        }
      }
    });
  } catch (_0x8a2764) {
    console.log(_0x8a2764);
    _0x2e8892("An error occurred. Please try again later.");
  }
});
