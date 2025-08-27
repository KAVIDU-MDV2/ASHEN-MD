const {
  cmd
} = require("../command");
const axios = require("axios");
cmd({
  'pattern': 'ai',
  'alias': ['bot', "marisel", "gpt", "gpt4", 'bing'],
  'desc': "Chat with an AI model",
  'category': 'ai',
  'react': '🤖',
  'filename': __filename
}, async (_0x599205, _0x2adee3, _0x593b0c, {
  from: _0x1fd7c3,
  args: _0x31149c,
  q: _0x4b2c43,
  reply: _0x1ccef5,
  react: _0x2705ec
}) => {
  try {
    if (!_0x4b2c43) {
      return _0x1ccef5("Please provide a message for the AI.\nExample: `.ai Hello`");
    }
    const _0x51592f = "https://lance-frank-asta.onrender.com/api/gpt?q=" + encodeURIComponent(_0x4b2c43);
    const {
      data: _0x4fc3ed
    } = await axios.get(_0x51592f);
    if (!_0x4fc3ed || !_0x4fc3ed.message) {
      await _0x2705ec('❌');
      return _0x1ccef5("AI failed to respond. Please try again later.");
    }
    await _0x1ccef5("🤖 *HASHAN-MD AI:*\n\n" + _0x4fc3ed.message);
    await _0x2705ec('✅');
  } catch (_0x3a1f87) {
    console.error("Error in AI command:", _0x3a1f87);
    await _0x2705ec('❌');
    _0x1ccef5("An error occurred while communicating with the AI.");
  }
});
cmd({
  'pattern': 'openai',
  'alias': ["chatgpt", "gpt3", "open-gpt"],
  'desc': "Chat with OpenAI",
  'category': 'ai',
  'react': '🧠',
  'filename': __filename
}, async (_0x568b96, _0x426d01, _0x2e2b32, {
  from: _0x479291,
  args: _0x1cd864,
  q: _0x4a508a,
  reply: _0x3eab22,
  react: _0x3ac5b7
}) => {
  try {
    if (!_0x4a508a) {
      return _0x3eab22("Please provide a message for OpenAI.\nExample: `.openai Hello`");
    }
    const _0x2fcb3a = 'https://vapis.my.id/api/openai?q=' + encodeURIComponent(_0x4a508a);
    const {
      data: _0x107e15
    } = await axios.get(_0x2fcb3a);
    if (!_0x107e15 || !_0x107e15.result) {
      await _0x3ac5b7('❌');
      return _0x3eab22("OpenAI failed to respond. Please try again later.");
    }
    await _0x3eab22("🧠 *OpenAI Response:*\n\n" + _0x107e15.result);
    await _0x3ac5b7('✅');
  } catch (_0x55220f) {
    console.error("Error in OpenAI command:", _0x55220f);
    await _0x3ac5b7('❌');
    _0x3eab22("An error occurred while communicating with OpenAI.");
  }
});
cmd({
  'pattern': "deepseek",
  'alias': ["deep", "seekai"],
  'desc': "Chat with DeepSeek AI",
  'category': 'ai',
  'react': '🧠',
  'filename': __filename
}, async (_0x550faf, _0x13bcae, _0x2b8daf, {
  from: _0x2acd22,
  args: _0x12887c,
  q: _0x4c18d5,
  reply: _0x21a355,
  react: _0x8fe5ae
}) => {
  try {
    if (!_0x4c18d5) {
      return _0x21a355("Please provide a message for DeepSeek AI.\nExample: `.deepseek Hello`");
    }
    const _0x222926 = "https://api.ryzendesu.vip/api/ai/deepseek?text=" + encodeURIComponent(_0x4c18d5);
    const {
      data: _0xef1aa
    } = await axios.get(_0x222926);
    if (!_0xef1aa || !_0xef1aa.answer) {
      await _0x8fe5ae('❌');
      return _0x21a355("DeepSeek AI failed to respond. Please try again later.");
    }
    await _0x21a355("🧠 *DeepSeek AI Response:*\n\n" + _0xef1aa.answer);
    await _0x8fe5ae('✅');
  } catch (_0x276854) {
    console.error("Error in DeepSeek AI command:", _0x276854);
    await _0x8fe5ae('❌');
    _0x21a355("An error occurred while communicating with DeepSeek AI.");
  }
});
