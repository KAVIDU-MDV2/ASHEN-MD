const {
  cmd
} = require("../command");
cmd({
  'pattern': "send",
  'alias': ['sendme', "save"],
  'react': '📤',
  'desc': "Forwards quoted message back to user",
  'category': 'utility',
  'filename': __filename
}, async (_0x3f16c8, _0x38a04, _0x1d19db, {
  from: _0x4efe38
}) => {
  try {
    if (!_0x1d19db.quoted) {
      return await _0x3f16c8.sendMessage(_0x4efe38, {
        'text': "*🍁 Please reply to a message!*"
      }, {
        'quoted': _0x38a04
      });
    }
    const _0x4ecd5e = await _0x1d19db.quoted.download();
    const _0x2b0c71 = _0x1d19db.quoted.mtype;
    const _0x3a8dee = {
      'quoted': _0x38a04
    };
    let _0x58e2e2 = {};
    switch (_0x2b0c71) {
      case "imageMessage":
        _0x58e2e2 = {
          'image': _0x4ecd5e,
          'caption': _0x1d19db.quoted.text || '',
          'mimetype': _0x1d19db.quoted.mimetype || "image/jpeg"
        };
        break;
      case 'videoMessage':
        _0x58e2e2 = {
          'video': _0x4ecd5e,
          'caption': _0x1d19db.quoted.text || '',
          'mimetype': _0x1d19db.quoted.mimetype || "video/mp4"
        };
        break;
      case "audioMessage":
        _0x58e2e2 = {
          'audio': _0x4ecd5e,
          'mimetype': "audio/mp4",
          'ptt': _0x1d19db.quoted.ptt || false
        };
        break;
      default:
        return await _0x3f16c8.sendMessage(_0x4efe38, {
          'text': "❌ Only image, video, and audio messages are supported"
        }, {
          'quoted': _0x38a04
        });
    }
    await _0x3f16c8.sendMessage(_0x4efe38, _0x58e2e2, _0x3a8dee);
  } catch (_0x526585) {
    console.error("Forward Error:", _0x526585);
    await _0x3f16c8.sendMessage(_0x4efe38, {
      'text': "❌ Error forwarding message:\n" + _0x526585.message
    }, {
      'quoted': _0x38a04
    });
  }
});
