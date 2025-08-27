const fs = require('fs');
const {
  cmd
} = require('../command');
cmd({
  'pattern': "ban",
  'alias': ["blockuser", "addban"],
  'desc': "Ban a user from using the bot",
  'category': 'owner',
  'react': '⛔',
  'filename': __filename
}, async (_0x4d4f68, _0x3491f2, _0xae7684, {
  from: _0x1ffda1,
  args: _0x28b9f3,
  isCreator: _0x540938,
  reply: _0x87c2d
}) => {
  try {
    if (!_0x540938) {
      return _0x87c2d("_❗Only the bot owner can use this command!_");
    }
    let _0x509efd = _0xae7684.mentionedJid?.[0x0] || (_0xae7684.quoted?.['sender'] ?? null) || _0x28b9f3[0x0]?.['replace'](/[^0-9]/g, '') + '@s.whatsapp.net';
    if (!_0x509efd) {
      return _0x87c2d("❌ Please provide a number or tag/reply a user.");
    }
    let _0x25a6dc = JSON.parse(fs.readFileSync('./lib/ban.json', "utf-8"));
    if (_0x25a6dc.includes(_0x509efd)) {
      return _0x87c2d("❌ This user is already banned.");
    }
    _0x25a6dc.push(_0x509efd);
    fs.writeFileSync('./lib/ban.json', JSON.stringify([...new Set(_0x25a6dc)], null, 0x2));
    await _0x4d4f68.sendMessage(_0x1ffda1, {
      'image': {
        'url': "https://res.cloudinary.com/df2rnoijw/image/upload/v1752404824/shkqo3nbxkhhbyej2lxm.jpg"
      },
      'caption': "⛔ User has been banned from using the bot."
    }, {
      'quoted': _0x3491f2
    });
  } catch (_0xa668b9) {
    console.error(_0xa668b9);
    _0x87c2d("❌ Error: " + _0xa668b9.message);
  }
});
cmd({
  'pattern': "unban",
  'alias': ["removeban"],
  'desc': "Unban a user",
  'category': "owner",
  'react': '✅',
  'filename': __filename
}, async (_0x579672, _0x2be80b, _0x140678, {
  from: _0x17252a,
  args: _0x2f12b9,
  isCreator: _0x51ec53,
  reply: _0x4523e3
}) => {
  try {
    if (!_0x51ec53) {
      return _0x4523e3("_❗Only the bot owner can use this command!_");
    }
    let _0x210cc8 = _0x140678.mentionedJid?.[0x0] || (_0x140678.quoted?.["sender"] ?? null) || _0x2f12b9[0x0]?.["replace"](/[^0-9]/g, '') + "@s.whatsapp.net";
    if (!_0x210cc8) {
      return _0x4523e3("❌ Please provide a number or tag/reply a user.");
    }
    let _0x576958 = JSON.parse(fs.readFileSync("./lib/ban.json", 'utf-8'));
    if (!_0x576958.includes(_0x210cc8)) {
      return _0x4523e3("❌ This user is not banned.");
    }
    const _0x15ad42 = _0x576958.filter(_0xbbfe9d => _0xbbfe9d !== _0x210cc8);
    fs.writeFileSync('./lib/ban.json', JSON.stringify(_0x15ad42, null, 0x2));
    await _0x579672.sendMessage(_0x17252a, {
      'image': {
        'url': "https://res.cloudinary.com/df2rnoijw/image/upload/v1752404824/shkqo3nbxkhhbyej2lxm.jpg"
      },
      'caption': "✅ User has been unbanned."
    }, {
      'quoted': _0x2be80b
    });
  } catch (_0x19c45e) {
    console.error(_0x19c45e);
    _0x4523e3("❌ Error: " + _0x19c45e.message);
  }
});
cmd({
  'pattern': "listban",
  'alias': ["banlist", "bannedusers"],
  'desc': "List all banned users",
  'category': "owner",
  'react': '📋',
  'filename': __filename
}, async (_0x17b03b, _0x263859, _0x1c1d9d, {
  from: _0x2a0447,
  isCreator: _0x1af39a,
  reply: _0x1123e6
}) => {
  try {
    if (!_0x1af39a) {
      return _0x1123e6("_❗Only the bot owner can use this command!_");
    }
    let _0x708f8 = JSON.parse(fs.readFileSync("./lib/ban.json", "utf-8"));
    _0x708f8 = [...new Set(_0x708f8)];
    if (_0x708f8.length === 0x0) {
      return _0x1123e6("✅ No banned users found.");
    }
    let _0x588941 = "`⛔ Banned Users:`\n\n";
    _0x708f8.forEach((_0xe852e7, _0x37b6eb) => {
      _0x588941 += _0x37b6eb + 0x1 + ". " + _0xe852e7.replace("@s.whatsapp.net", '') + "\n";
    });
    await _0x17b03b.sendMessage(_0x2a0447, {
      'image': {
        'url': "https://res.cloudinary.com/df2rnoijw/image/upload/v1752404824/shkqo3nbxkhhbyej2lxm.jpg"
      },
      'caption': _0x588941
    }, {
      'quoted': _0x263859
    });
  } catch (_0x46c54f) {
    console.error(_0x46c54f);
    _0x1123e6("❌ Error: " + _0x46c54f.message);
  }
});
