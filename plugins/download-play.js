const {
  cmd
} = require("../command");
const {
  ytsearch,
  ytmp3,
  ytmp4
} = require('@dark-yasiya/yt-dl.js');
cmd({
  'pattern': 'video',
  'alias': ["ytdl", "mp4"],
  'react': '🎥',
  'desc': "Download Youtube song",
  'category': "main",
  'use': ".song < Yt url or Name >",
  'filename': __filename
}, async (_0x559ccd, _0x4c08cb, _0x5a5ab3, {
  from: _0x18e61c,
  prefix: _0x73a137,
  quoted: _0x4a12fa,
  q: _0x22d220,
  reply: _0x4238af
}) => {
  try {
    if (!_0x22d220) {
      return await _0x4238af("Please provide a YouTube URL or song name.");
    }
    const _0x23281e = await ytsearch(_0x22d220);
    if (_0x23281e.results.length < 0x1) {
      return _0x4238af("No results found!");
    }
    let _0x4c2d54 = _0x23281e.results[0x0];
    let _0x484c85 = 'https://api.giftedtech.web.id/api/download/dlmp4?apikey=gifted&url=' + encodeURIComponent(_0x4c2d54.url);
    let _0x577aa0 = await fetch(_0x484c85);
    let _0x304d14 = await _0x577aa0.json();
    if (_0x304d14.status !== 0xc8 || !_0x304d14.success || !_0x304d14.result.download_url) {
      return _0x4238af("Failed to fetch the video. Please try again later.");
    }
    let _0x269287 = "╭━━━〔 *HASHAN-MD* 〕━━━┈⊷\n┇🎼 *Title* -  " + _0x4c2d54.title + "\n┇🎛️ *Duration* - " + _0x4c2d54.timestamp + "\n┇🎙️ *Views* -  " + _0x4c2d54.views + "\n┇🎸 *Author* -  " + _0x4c2d54.author.name + "\n┇🔎 *Link* -  " + _0x4c2d54.url + "\n╰────────────────┈⊷\n\n> POWERED BY HASHAN-MD 😈";
    await _0x559ccd.sendMessage(_0x18e61c, {
      'image': {
        'url': _0x304d14.result.thumbnail || ''
      },
      'caption': _0x269287
    }, {
      'quoted': _0x4c08cb
    });
    await _0x559ccd.sendMessage(_0x18e61c, {
      'video': {
        'url': _0x304d14.result.download_url
      },
      'mimetype': "video/mp4"
    }, {
      'quoted': _0x4c08cb
    });
    await _0x559ccd.sendMessage(_0x18e61c, {
      'document': {
        'url': _0x304d14.result.download_url
      },
      'mimetype': "video/mp4",
      'fileName': _0x304d14.result.title + '.mp4',
      'caption': "> *" + _0x4c2d54.title + "*\n> POWERED BY HASHAN-MD 😈"
    }, {
      'quoted': _0x4c08cb
    });
  } catch (_0x249c10) {
    console.log(_0x249c10);
    _0x4238af("An error occurred. Please try again later.");
  }
});
cmd({
  'pattern': "song2",
  'alias': ["ytdl1", 'song2'],
  'react': '🎥',
  'desc': "Download Youtube song",
  'category': "main",
  'use': ".song < Yt url or Name >",
  'filename': __filename
}, async (_0x49112b, _0x4e5d7d, _0x2635e0, {
  from: _0x57088e,
  prefix: _0x139341,
  quoted: _0xddf9fd,
  q: _0x526984,
  reply: _0x2faf28
}) => {
  try {
    if (!_0x526984) {
      return await _0x2faf28("Please provide a YouTube URL or song name.");
    }
    const _0x11589c = await ytsearch(_0x526984);
    if (_0x11589c.results.length < 0x1) {
      return _0x2faf28("No results found!");
    }
    let _0x3e2a2b = _0x11589c.results[0x0];
    let _0x468648 = "https://api.giftedtech.web.id/api/download/dlmp4?apikey=gifted&url=" + encodeURIComponent(_0x3e2a2b.url);
    let _0x4418e6 = await fetch(_0x468648);
    let _0x28cb04 = await _0x4418e6.json();
    if (_0x28cb04.status !== 0xc8 || !_0x28cb04.success || !_0x28cb04.result.download_url) {
      return _0x2faf28("Failed to fetch the video. Please try again later.");
    }
    let _0x2e7f33 = "╭━━━〔 *HASHAN-MD* 〕━━━┈⊷\n┇🎤 *Title* -  " + _0x3e2a2b.title + "\n┇💐 *Duration* - " + _0x3e2a2b.timestamp + "\n┇🎈 *Views* -  " + _0x3e2a2b.views + "\n┇🗿 *Author* -  " + _0x3e2a2b.author.name + "\n┇⏳ *Link* -  " + _0x3e2a2b.url + "\n╰────────────────┈⊷\n\n> 🄿🄾🅆🄴RED BY HASHAN-MD 😈";
    await _0x49112b.sendMessage(_0x57088e, {
      'image': {
        'url': _0x28cb04.result.thumbnail || ''
      },
      'caption': _0x2e7f33
    }, {
      'quoted': _0x4e5d7d
    });
    await _0x49112b.sendMessage(_0x57088e, {
      'audio': {
        'url': _0x28cb04.result.download_url
      },
      'mimetype': 'audio/mpeg'
    }, {
      'quoted': _0x4e5d7d
    });
    await _0x49112b.sendMessage(_0x57088e, {
      'document': {
        'url': _0x28cb04.result.download_url
      },
      'mimetype': "audio/mpeg",
      'fileName': _0x3e2a2b.title + '.mp3',
      'caption': "> *" + _0x3e2a2b.title + "*\n> 🄿🄾🅆🄴🅁ED BY HASHAN-MD 🎵"
    }, {
      'quoted': _0x4e5d7d
    });
  } catch (_0x2fa677) {
    console.log(_0x2fa677);
    _0x2faf28("An error occurred. Please try again later.");
  }
});
