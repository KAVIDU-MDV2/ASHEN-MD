const axios = require("axios");
const {
  cmd
} = require("../command");
const config = require("../config");
cmd({
  'pattern': "movieinfo",
  'desc': "Fetch detailed information about a movie.",
  'category': "utility",
  'react': '🎬',
  'filename': __filename
}, async (_0x2f741c, _0x2bf349, _0x3204be, {
  from: _0x40f2c5,
  quoted: _0x5f1aa6,
  body: _0x4d556c,
  isCmd: _0x4537a6,
  command: _0x5943dd,
  args: _0x5ab1e6,
  q: _0x149aa8,
  isGroup: _0x582163,
  sender: _0x315615,
  senderNumber: _0x53c948,
  botNumber2: _0x3eb4b2,
  botNumber: _0x305297,
  pushname: _0x4ee8cf,
  isMe: _0x1b156c,
  isOwner: _0x398dbd,
  groupMetadata: _0x18ab0f,
  groupName: _0x32b87c,
  participants: _0x1a89b4,
  groupAdmins: _0x224110,
  isBotAdmins: _0x5d6ee2,
  isAdmins: _0x3c567c,
  reply: _0x2bc349
}) => {
  try {
    const _0x8f37b2 = _0x5ab1e6.join(" ");
    if (!_0x8f37b2) {
      return _0x2bc349("📽️ Please provide the name of the movie.");
    }
    const _0x45c8fa = "http://www.omdbapi.com/?t=" + encodeURIComponent(_0x8f37b2) + '&apikey=' + config.OMDB_API_KEY;
    const _0x5b8987 = await axios.get(_0x45c8fa);
    const _0x2d5b50 = _0x5b8987.data;
    if (_0x2d5b50.Response === "False") {
      return _0x2bc349("🚫 Movie not found.");
    }
    const _0x20f1e6 = "\n🎬 *HASHAN-MD Movie Information* 🎬\n\n🎥 *Title:* " + _0x2d5b50.Title + "\n📅 *Year:* " + _0x2d5b50.Year + "\n🌟 *Rated:* " + _0x2d5b50.Rated + "\n📆 *Released:* " + _0x2d5b50.Released + "\n⏳ *Runtime:* " + _0x2d5b50.Runtime + "\n🎭 *Genre:* " + _0x2d5b50.Genre + "\n🎬 *Director:* " + _0x2d5b50.Director + "\n✍️ *Writer:* " + _0x2d5b50.Writer + "\n🎭 *Actors:* " + _0x2d5b50.Actors + "\n📝 *Plot:* " + _0x2d5b50.Plot + "\n🌍 *Language:* " + _0x2d5b50.Language + "\n🇺🇸 *Country:* " + _0x2d5b50.Country + "\n🏆 *Awards:* " + _0x2d5b50.Awards + "\n⭐ *IMDB Rating:* " + _0x2d5b50.imdbRating + "\n🗳️ *IMDB Votes:* " + _0x2d5b50.imdbVotes + "\n";
    const _0x56da1f = _0x2d5b50.Poster && _0x2d5b50.Poster !== 'N/A' ? _0x2d5b50.Poster : config.ALIVE_IMG;
    await _0x2f741c.sendMessage(_0x40f2c5, {
      'image': {
        'url': _0x56da1f
      },
      'caption': _0x20f1e6 + "\n> 🄿🄾🅆🄴🅁ED BY HASHAN-MD 😈"
    }, {
      'quoted': _0x2bf349
    });
  } catch (_0x21c40d) {
    console.log(_0x21c40d);
    _0x2bc349("❌ Error: " + _0x21c40d.message);
  }
});
