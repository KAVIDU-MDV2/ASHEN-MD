const {
  cmd,
  commands
} = require("../command");
const {
  fetchJson
} = require("../lib/functions");
cmd({
  'pattern': "logo",
  'desc': "Create logos",
  'category': "convert",
  'filename': __filename
}, async (_0x5d0ec3, _0x14033e, _0x4f4c63, {
  from: _0x4f6e1a,
  quoted: _0x5ae2bc,
  body: _0x2aa465,
  isCmd: _0x43635a,
  command: _0x16992a,
  args: _0x428e0d,
  q: _0x260cdf,
  isGroup: _0x4d3146,
  sender: _0x2ce4ae,
  senderNumber: _0x340df4,
  botNumber2: _0x26f442,
  botNumber: _0x2ca9e2,
  pushname: _0x5dce13,
  isMe: _0x2bd0f4,
  isOwner: _0x34e6dc,
  groupMetadata: _0x558766,
  groupName: _0x2aa1cf,
  participants: _0x29edae,
  groupAdmins: _0x2e9786,
  isBotAdmins: _0x1cd90a,
  isAdmins: _0x41f60b,
  reply: _0x1be6c7
}) => {
  try {
    if (!_0x260cdf) {
      return _0x1be6c7("*_Please give me a text._*");
    }
    let _0x56b3e5 = "*HASHAN-MD 𝐋𝐎𝐆𝐎 EDIT*\n\n*Text :* " + _0x260cdf + "\n\n*🔢 Reply Below Number :*\n\n 1 || Black Pink\n 2 || Black Pink 2\n 3 || Black Pink 3\n 4 || Naruto\n 5 || Digital Glitch\n 6 || Pixel Glitch\n 7 || Comic Style\n 8 || Neon Light\n 9 || Free Bear\n10 || Devil Wings\n11 || Futuristic Technology\n12 || Silver 3D\n13 || 3D Paper Cut\n14 || Pubg 1\n15 || Pubg 2\n16 || Free Fire Cover\n17 || Text On Wet Glass\n18 || Typography\n19 || Modern Gold\n20 || Matrix\n\n\n> 🄿🄾🅆🄴🅁🄳 BY HASHAN-MD 😈";
    const _0x77e47 = {
      'newsletterJid': "120363395674230271@newsletter",
      'newsletterName': "HASHAN-MD-V1",
      'serverMessageId': 0x3e7
    };
    const _0xcc162e = {
      'mentionedJid': [_0x4f4c63.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x77e47
    };
    const _0x4df122 = {
      'image': {
        'url': "https://files.catbox.moe/sn20tl.jpg"
      },
      'caption': _0x56b3e5,
      'contextInfo': _0xcc162e
    };
    let _0x36c580 = await _0x5d0ec3.sendMessage(_0x4f6e1a, _0x4df122, {
      'quoted': _0x14033e
    });
    _0x5d0ec3.ev.on("messages.upsert", async _0x3e64d0 => {
      const _0x9adf93 = _0x3e64d0.messages[0x0];
      if (!_0x9adf93.message || !_0x9adf93.message.extendedTextMessage) {
        return;
      }
      const _0x3eecdd = _0x9adf93.message.extendedTextMessage.text.trim();
      if (_0x9adf93.message.extendedTextMessage.contextInfo && _0x9adf93.message.extendedTextMessage.contextInfo.stanzaId === _0x36c580.key.id) {
        switch (_0x3eecdd) {
          case '1':
            let _0x444fe7 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x444fe7.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '2':
            let _0x197933 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x197933.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '3':
            let _0x5d26ad = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x5d26ad.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '4':
            let _0x44fe9e = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x44fe9e.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '5':
            let _0x4aece7 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x4aece7.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '6':
            let _0x30733e = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x30733e.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '7':
            let _0x2b7bab = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x2b7bab.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '8':
            let _0x26b457 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x26b457.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '9':
            let _0x150afe = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-bear-logo-maker-online-673.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x150afe.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '10':
            let _0x1bf4a8 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x1bf4a8.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '11':
            let _0x4b2489 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x4b2489.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '12':
            let _0x4ba0f4 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x4ba0f4.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '13':
            let _0x55e02d = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x55e02d.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '14':
            let _0x393323 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-pubg-logo-maker-online-609.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x393323.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '15':
            let _0x4a46fe = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/pubg-logo-maker-cute-character-online-617.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x4a46fe.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '16':
            let _0x566c67 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-free-fire-facebook-cover-online-567.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x566c67.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '17':
            let _0x1291da = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-text-on-wet-glass-online-589.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x1291da.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '18':
            let _0x9c815e = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-typography-art-effects-with-multiple-layers-811.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x9c815e.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '19':
            let _0x2095b8 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/modern-gold-5-215.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x2095b8.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          case '20':
            let _0x3490f5 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/matrix-text-effect-154.html&name=" + _0x260cdf);
            await _0x5d0ec3.sendMessage(_0x4f6e1a, {
              'image': {
                'url': '' + _0x3490f5.result.download_url
              },
              'caption': "> 🄿🄾🅆🄴🅁E🄳 BY HASHAN-MD 😈"
            }, {
              'quoted': _0x14033e
            });
            break;
          default:
            _0x1be6c7("*_Invalid number.Please reply a valid number._*");
        }
      }
    });
  } catch (_0x2487e0) {
    console.log(_0x2487e0);
    _0x1be6c7('' + _0x2487e0);
  }
});
