const axios = require("axios");
const {
  cmd
} = require("../command");
cmd({
  'pattern': "fancy",
  'alias': ["font", "style"],
  'react': '✍️',
  'desc': "Convert text into various fonts.",
  'category': "tools",
  'filename': __filename
}, async (_0x41ea6d, _0x367337, _0x6f7ba5, {
  from: _0x2cf566,
  quoted: _0x23ad20,
  args: _0x207ffa,
  q: _0x1ad941,
  reply: _0x457bbb
}) => {
  try {
    if (!_0x1ad941) {
      return _0x457bbb("❎ Please provide text to convert into fancy fonts.\n\n*Example:* .fancy Hello");
    }
    const _0x3d1a3c = "https://www.dark-yasiya-api.site/other/font?text=" + encodeURIComponent(_0x1ad941);
    const _0x1ed7c4 = await axios.get(_0x3d1a3c);
    if (!_0x1ed7c4.data.status) {
      return _0x457bbb("❌ Error fetching fonts. Please try again later.");
    }
    const _0x44e988 = _0x1ed7c4.data.result.map(_0x5f0083 => '*' + _0x5f0083.name + ":*\n" + _0x5f0083.result).join("\n\n");
    const _0x2d3cce = "✨ *Fancy Fonts Converter* ✨\n\n" + _0x44e988 + "\n\n> *POWERED BY HASHAN-MD*";
    await _0x41ea6d.sendMessage(_0x2cf566, {
      'text': _0x2d3cce
    }, {
      'quoted': _0x367337
    });
  } catch (_0x18b55a) {
    console.error("❌ Error in fancy command:", _0x18b55a);
    _0x457bbb("⚠️ An error occurred while fetching fonts.");
  }
});
