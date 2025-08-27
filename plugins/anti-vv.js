const {
  cmd
} = require("../command");
cmd({
  'pattern': "vv2",
  'alias': ['ay', 'ohh', "oho", '🙂', "nice", 'ok'],
  'desc': "Owner Only - retrieve quoted message back to user",
  'category': "owner",
  'filename': __filename
}, async (_0x217262, _0x26a90b, _0x4d8ce4, {
  from: _0x3419a5,
  isCreator: _0x1205f2
}) => {
  try {
    if (!_0x1205f2) {
      return;
    }
    if (!_0x4d8ce4.quoted) {
      return await _0x217262.sendMessage(_0x3419a5, {
        'text': "*🍁 Please reply to a view once message!*"
      }, {
        'quoted': _0x26a90b
      });
    }
    const _0x213d55 = await _0x4d8ce4.quoted.download();
    const _0x4eb1b5 = _0x4d8ce4.quoted.mtype;
    const _0x3ace6e = {
      'quoted': _0x26a90b
    };
    let _0x2786ec = {};
    switch (_0x4eb1b5) {
      case 'imageMessage':
        _0x2786ec = {
          'image': _0x213d55,
          'caption': _0x4d8ce4.quoted.text || '',
          'mimetype': _0x4d8ce4.quoted.mimetype || "image/jpeg"
        };
        break;
      case 'videoMessage':
        _0x2786ec = {
          'video': _0x213d55,
          'caption': _0x4d8ce4.quoted.text || '',
          'mimetype': _0x4d8ce4.quoted.mimetype || "video/mp4"
        };
        break;
      case "audioMessage":
        _0x2786ec = {
          'audio': _0x213d55,
          'mimetype': 'audio/mp4',
          'ptt': _0x4d8ce4.quoted.ptt || false
        };
        break;
      default:
        return await _0x217262.sendMessage(_0x3419a5, {
          'text': "❌ Only image, video, and audio messages are supported"
        }, {
          'quoted': _0x26a90b
        });
    }
    await _0x217262.sendMessage(_0x26a90b.sender, _0x2786ec, _0x3ace6e);
  } catch (_0x147758) {
    console.error("vv Error:", _0x147758);
    await _0x217262.sendMessage(_0x3419a5, {
      'text': "❌ Error fetching vv message:\n" + _0x147758.message
    }, {
      'quoted': _0x26a90b
    });
  }
});
