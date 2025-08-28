const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': "menu",
  'react': '🗿',
  'alias': ["panel", "commands"],
  'desc': "බොට් විධාන ලැයිස්තුව ලබා ගන්න",
  'category': "main",
  'use': '.menu',
  'filename': __filename
}, async (_0x4db7a9, _0x244b29, _0x1971c0, {
  from: _0x56a5b6,
  quoted: _0x349360,
  pushname: _0x4e8933,
  reply: _0x561add
}) => {
  try {
    const _0x44e890 = await _0x4db7a9.sendMessage(_0x56a5b6, {
      'image': {
        'url': 'https://i.ibb.co/1tKRfWQB/1af47eb53d341e34.jpg'
      },
      'caption': "\n*_ASHEN-MD COMMAND LIST ⚡_*\n\n> *🕊️ NAME BOT : ASHEN-MD*\n> *🕊️ VERSION : 1.0*\n> *🕊️ PREFIX : [.]*\n> *🕊️ OWNER : HASHIYA TECH*\n> *🕊️ RAM : 128GB / 2453MB*\n\n\n┌────────────────···▸*\n*│╭─────────────···▸*\n*┴│▸* \n*◈│▸* *1. DOWNLOAD MENU📥*\n*◈│▸* *2. SEARCH MENU👀* \n*◈│▸* *3. AI MENU🤖*\n*◈│▸* *4. OWNER MENU👤*\n*◈│▸* *5. GROUP MENU👥*\n*◈│▸* *6. INFO MENU🎭*\n*◈│▸* *7. CONVERTER MENU🧬*\n*◈│▸* *8. RANDOM MENU⚡*\n*◈│▸* *9. WALLPAPERS MENU🖼️*\n*◈│▸* *10. OTHER MENU*\n*┬│▸*\n*│╰────────────···▸▸*\n*└────────────────···▸*\n\n> ©POWERD BY ASHEN-MD\n",
      'contextInfo': {
        'forwardingScore': 0x3e7,
        'isForwarded': true
      }
    }, {
      'quoted': _0x244b29
    });
    _0x4db7a9.ev.on("messages.upsert", async _0x97c1c5 => {
      const _0x200203 = _0x97c1c5.messages[0x0];
      if (!_0x200203.message || !_0x200203.message.extendedTextMessage) {
        return;
      }
      const _0x5dc837 = _0x200203.message.extendedTextMessage.text.trim();
      if (_0x200203.message.extendedTextMessage.contextInfo && _0x200203.message.extendedTextMessage.contextInfo.stanzaId === _0x44e890.key.id) {
        let _0xae7cc6;
        switch (_0x5dc837) {
          case '1':
            _0xae7cc6 = "\n*╭────❒⁠⁠⁠⁠* *📥 DOWNLOADER-MENU 📥* *❒⁠⁠⁠⁠* \n*┋* *.FB*\n*┋* *.SONG*\n*┋* *.VIDEO*\n*┋* *.LOGO*\n*┋* *.ANIME*\n*┋* *.ANIMEGIRL1*\n*┋* *.ANIMEGIRL2*\n*┋* *.ANIMEGIRL3*\n*┋* *.ANIMEGIRL4*\n*╰───────────────────❒*\n\n> ©POWERED BY ASHEN-MD\n";
            break;
          case '2':
            _0xae7cc6 = "\n*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-MENU 🔍* *❒⁠⁠⁠⁠* \n*┋* *.ANIME*\n*┋* *.COUPLEPP*\n*┋* *.IMG*\n*┋* *.ANIMEGIRL1*\n*┋* *.AMIMEGIRL2*\n*┋* *.ANIMEGIRL3*\n*┋* *.ANIMEGIRL4*\n*╰───────────────────❒*\n\n> ©POWERED BY ASHEN-MD\n";
            break;
          case '3':
            _0xae7cc6 = "\n*╭────❒⁠⁠⁠⁠* *🧠 AI-MENU 🧠* *❒⁠⁠⁠⁠* \n*┋* *.AI*\n*┋* *.DEEPSEEK*\n*┋* *.OPENAI*\n*┋* *.AIIMG*\n*┋* *.GPT*\n*╰───────────────────❒*\n\n> ©POWERED BY ASHEN-MD\n";
            break;
          case '4':
            _0xae7cc6 = "\n*╭────❒⁠⁠⁠⁠* *👨‍💻 OWNER-MENU 👨‍💻* *❒⁠⁠⁠⁠* \n*┋* *.SETTINGS*\n*┋* *.OWNER*\n*┋* *.SYSTEM*\n*┋* *.UNBLOCK*\n*┋* *.SETPP*\n*┋* *.RESTART*\n*┋* *.BROADCAST*\n*┋* *.SHUTDOWN*\n*┋* *.VV*\n*┋* *.ENV*\n*╰───────────────────❒*\n\n> ©POWERED BY ASHEN-MD\n";
            break;
          case '5':
            _0xae7cc6 = "\n*╭────❒⁠⁠⁠⁠* *👥 GROUP-MENU 👥* *❒⁠⁠⁠⁠* \n*┋* *.REMOVE*\n*┋* *.DELETE*\n*┋* *.ADD*\n*┋* *.KICK*\n*┋* *.MUTE*\n*┋* *.UNMUTE*\n*╰───────────────────❒*\n\n> ©POWERED BY ASHEN-MD\n";
            break;
          case '6':
            _0xae7cc6 = "\n*╭────❒⁠⁠⁠⁠* *📃 INFO-MENU 📃* *❒⁠⁠⁠⁠* \n*┋* *.MENU*\n*┋* *.ALIVE*\n*┋* *.SYSTEM*\n*┋* *.PING*\n*┋* *.ANIME*\n*┋* *.PING1*\n*┋* *.PING2*\n*┋* *.PING3*\n*┋* *.PING4*\n*┋* *.ALIVE2*\n*╰───────────────────❒*\n\n> ©POWERED BY ASHEN-MD\n";
            break;
          case '7':
            _0xae7cc6 = "\n*╭────❒⁠⁠⁠⁠* *🎡 CONVERTER-MENU 🎡* *❒⁠⁠⁠⁠* \n*┋* *.STICKER*\n*┋* *.LOGO*\n*╰───────────────────❒*\n\n> ©POWERED BY ASHEN-MD\n";
            break;
          case '8':
            _0xae7cc6 = "\n*╭────❒⁠⁠⁠⁠* *⛱️ RANDOM-MENU ⛱️* *❒⁠⁠⁠⁠* \n*┋* *.ᴀɴɪᴍᴇ*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ1*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ2*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ3*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ4*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ5*\n*╰───────────────────❒*\n\n> ©POWERED BY ASHEN-MD\n";
            break;
          case '9':
            _0xae7cc6 = "\n*╭────❒⁠⁠⁠⁠* *🏜️ WALLPAPERS-MENU 🏜️* *❒⁠⁠⁠⁠* \n*┋* *.ɪᴍɢ*\n*╰───────────────────❒*\n\n> ©POWERED BY ASHEN-MD\n";
            break;
          case '10':
            _0xae7cc6 = "\n*╭────❒⁠⁠⁠⁠* *🌐 OTHER-MENU 🌐* *❒⁠⁠⁠⁠* \n*┋* *.HACK*\n*╰───────────────────❒*\n\n> ©POWERED BY ASHEN-MD\n";
            break;
          default:
            _0xae7cc6 = "*❌ Invalid option. Please enter a valid number (1-10)*";
        }
        await _0x4db7a9.sendMessage(_0x56a5b6, {
          'text': _0xae7cc6
        }, {
          'quoted': _0x244b29
        });
      }
    });
  } catch (_0x288300) {
    console.error(_0x288300);
    _0x561add("*⚠ An error occurred: " + _0x288300.message + '*');
  }
});
