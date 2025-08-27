const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': "shutdown",
  'desc': "Shutdown the bot.",
  'category': "owner",
  'react': '🛑',
  'filename': __filename
}, async (_0x263687, _0x599d2b, _0x1baf11, {
  from: _0x1aff29,
  isOwner: _0x4253a7,
  reply: _0x352d85
}) => {
  if (!_0x4253a7) {
    return _0x352d85("❌ You are not the owner!");
  }
  _0x352d85("🛑 Shutting down...").then(() => process.exit());
});
cmd({
  'pattern': "broadcast",
  'desc': "Broadcast a message to all groups.",
  'category': "owner",
  'react': '📢',
  'filename': __filename
}, async (_0x53ed03, _0x18eeb1, _0x2f405c, {
  from: _0x5cbd4e,
  isOwner: _0x57dc98,
  args: _0x3f88ab,
  reply: _0x18c536
}) => {
  if (!_0x57dc98) {
    return _0x18c536("❌ You are not the owner!");
  }
  if (_0x3f88ab.length === 0x0) {
    return _0x18c536("📢 Please provide a message to broadcast.");
  }
  const _0x6c751c = _0x3f88ab.join(" ");
  const _0x1309cb = Object.keys(await _0x53ed03.groupFetchAllParticipating());
  for (const _0x3ef00a of _0x1309cb) {
    await _0x53ed03.sendMessage(_0x3ef00a, {
      'text': _0x6c751c
    }, {
      'quoted': _0x18eeb1
    });
  }
  _0x18c536("📢 Message broadcasted to all groups.");
});
cmd({
  'pattern': "setpp",
  'desc': "Set bot profile picture.",
  'category': "owner",
  'react': "🖼️",
  'filename': __filename
}, async (_0x226029, _0x19fdcc, _0x15f6a5, {
  from: _0x2b44ac,
  isOwner: _0xfa5865,
  quoted: _0x3b6e8a,
  reply: _0x511865
}) => {
  if (!_0xfa5865) {
    return _0x511865("❌ You are not the owner!");
  }
  if (!_0x3b6e8a || !_0x3b6e8a.message.imageMessage) {
    return _0x511865("❌ Please reply to an image.");
  }
  try {
    const _0x5f3d6f = await _0x226029.downloadMediaMessage(_0x3b6e8a);
    await _0x226029.updateProfilePicture(_0x226029.user.jid, {
      'url': _0x5f3d6f
    });
    _0x511865("🖼️ Profile picture updated successfully!");
  } catch (_0x3008ef) {
    _0x511865("❌ Error updating profile picture: " + _0x3008ef.message);
  }
});
cmd({
  'pattern': "clearchats",
  'desc': "Clear all chats from the bot.",
  'category': "owner",
  'react': '🧹',
  'filename': __filename
}, async (_0x16afe9, _0x294bc2, _0x5b2b12, {
  from: _0x3a8b7f,
  isOwner: _0x3a5d85,
  reply: _0x2af30e
}) => {
  if (!_0x3a5d85) {
    return _0x2af30e("❌ You are not the owner!");
  }
  try {
    const _0x12f84c = _0x16afe9.chats.all();
    for (const _0x566f75 of _0x12f84c) {
      await _0x16afe9.modifyChat(_0x566f75.jid, "delete");
    }
    _0x2af30e("🧹 All chats cleared successfully!");
  } catch (_0x48a21e) {
    _0x2af30e("❌ Error clearing chats: " + _0x48a21e.message);
  }
});
cmd({
  'pattern': 'gjid',
  'desc': "Get the list of JIDs for all groups the bot is part of.",
  'category': 'owner',
  'react': '📝',
  'filename': __filename
}, async (_0xc8e178, _0x156b21, _0x562cad, {
  from: _0x200d54,
  isOwner: _0x56a231,
  reply: _0x1c7b92
}) => {
  if (!_0x56a231) {
    return _0x1c7b92("❌ You are not the owner!");
  }
  const _0x253e97 = await _0xc8e178.groupFetchAllParticipating();
  const _0xffeed7 = Object.keys(_0x253e97).join("\n");
  _0x1c7b92("📝 *Group JIDs:*\n\n" + _0xffeed7);
});
cmd({
  'pattern': "delete",
  'react': '❌',
  'alias': ["del"],
  'desc': "delete message",
  'category': "group",
  'use': ".del",
  'filename': __filename
}, async (_0x4ff7d4, _0x388f5c, _0x50ba5b, {
  from: _0x1784d5,
  l: _0x3e4931,
  quoted: _0x1d1ff1,
  body: _0x1f2956,
  isCmd: _0x172f14,
  command: _0x2a85ef,
  args: _0x24925b,
  q: _0xde0ba3,
  isGroup: _0x122455,
  sender: _0x5d1076,
  senderNumber: _0x4c8ae8,
  botNumber2: _0x113ef3,
  botNumber: _0x55b9b3,
  pushname: _0x5f4939,
  isMe: _0x313402,
  isOwner: _0x4a3740,
  groupMetadata: _0x385bcf,
  groupName: _0x48ebf6,
  participants: _0xdc1dc,
  isItzcp: _0x362b9e,
  groupAdmins: _0x21780d,
  isBotAdmins: _0x2bb764,
  isAdmins: _0x23b066,
  reply: _0x3168bd
}) => {
  if (!_0x4a3740 || !_0x23b066) {
    return;
  }
  try {
    if (!_0x50ba5b.quoted) {
      return _0x3168bd(mg.notextfordel);
    }
    const _0x338092 = {
      'remoteJid': _0x50ba5b.chat,
      'fromMe': false,
      'id': _0x50ba5b.quoted.id,
      'participant': _0x50ba5b.quoted.sender
    };
    await _0x4ff7d4.sendMessage(_0x50ba5b.chat, {
      'delete': _0x338092
    });
  } catch (_0x3dcf21) {
    console.log(_0x3dcf21);
    _0x3168bd('successful..👨‍💻✅');
  }
});
