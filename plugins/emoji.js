const {
  cmd
} = require("../command");
cmd({
  'pattern': 'happy',
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '😂',
  'filename': __filename
}, async (_0x205c9a, _0x20bacf, _0x475e93, {
  from: _0x1133ec,
  reply: _0x2c24b2
}) => {
  try {
    const _0x4f933d = await _0x205c9a.sendMessage(_0x1133ec, {
      'text': '😂'
    });
    const _0x562869 = ['😃', '😄', '😁', '😊', '😎', '🥳', '😸', '😹', '🌞', '🌈', '😃', '😄', '😁', '😊', '😎', '🥳', '😸', '😹', '🌞', '🌈', '😃', '😄', '😁', '😊'];
    for (const _0x516339 of _0x562869) {
      await new Promise(_0x1f76b6 => setTimeout(_0x1f76b6, 0x3e8));
      await _0x205c9a.relayMessage(_0x1133ec, {
        'protocolMessage': {
          'key': _0x4f933d.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x516339
          }
        }
      }, {});
    }
  } catch (_0x44247f) {
    console.log(_0x44247f);
    _0x2c24b2("❌ *Error!* " + _0x44247f.message);
  }
});
cmd({
  'pattern': 'heart',
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '❤️',
  'filename': __filename
}, async (_0x2b569a, _0x148294, _0xb0e1de, {
  from: _0x112b49,
  reply: _0x3438c3
}) => {
  try {
    const _0x24e1a7 = await _0x2b569a.sendMessage(_0x112b49, {
      'text': '🖤'
    });
    const _0x1d48eb = ['💖', '💗', '💕', '🩷', '💛', '💚', '🩵', '💙', '💜', '🖤', '🩶', '🤍', '🤎', "❤️‍🔥", '💞', '💓', '💘', '💝', '♥️', '💟', '❤️‍🩹', '❤️'];
    for (const _0x1d309d of _0x1d48eb) {
      await new Promise(_0x1bdbd3 => setTimeout(_0x1bdbd3, 0x3e8));
      await _0x2b569a.relayMessage(_0x112b49, {
        'protocolMessage': {
          'key': _0x24e1a7.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x1d309d
          }
        }
      }, {});
    }
  } catch (_0x37cb90) {
    console.log(_0x37cb90);
    _0x3438c3("❌ *Error!* " + _0x37cb90.message);
  }
});
cmd({
  'pattern': "angry",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '🤡',
  'filename': __filename
}, async (_0x47eff7, _0x59ee48, _0x4345f3, {
  from: _0x316da0,
  reply: _0x40c36c
}) => {
  try {
    const _0x2a6298 = await _0x47eff7.sendMessage(_0x316da0, {
      'text': '👽'
    });
    const _0x160121 = ['😡', '😠', '🤬', '😤', '😾', '😡', '😠', '🤬', '😤', '😾'];
    for (const _0x14d282 of _0x160121) {
      await new Promise(_0x83b67a => setTimeout(_0x83b67a, 0x3e8));
      await _0x47eff7.relayMessage(_0x316da0, {
        'protocolMessage': {
          'key': _0x2a6298.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x14d282
          }
        }
      }, {});
    }
  } catch (_0x17f9a6) {
    console.log(_0x17f9a6);
    _0x40c36c("❌ *Error!* " + _0x17f9a6.message);
  }
});
cmd({
  'pattern': "sad",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': 'tools',
  'react': '😶',
  'filename': __filename
}, async (_0x213f92, _0x70447b, _0x2c7fc7, {
  from: _0x13d2e0,
  reply: _0x57cab0
}) => {
  try {
    const _0x2e6a55 = await _0x213f92.sendMessage(_0x13d2e0, {
      'text': '😔'
    });
    const _0x8058bb = ['🥺', '😟', '😕', '😖', '😫', '🙁', '😩', '😥', '😓', '😪', '😢', '😔', '😞', '😭', '💔', '😭', '😿'];
    for (const _0x384bb6 of _0x8058bb) {
      await new Promise(_0x47bf31 => setTimeout(_0x47bf31, 0x3e8));
      await _0x213f92.relayMessage(_0x13d2e0, {
        'protocolMessage': {
          'key': _0x2e6a55.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x384bb6
          }
        }
      }, {});
    }
  } catch (_0x1964a2) {
    console.log(_0x1964a2);
    _0x57cab0("❌ *Error!* " + _0x1964a2.message);
  }
});
cmd({
  'pattern': "shy",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '🧐',
  'filename': __filename
}, async (_0xfb0ab6, _0x377177, _0x2b3f7b, {
  from: _0x51e7a1,
  reply: _0x13b7b4
}) => {
  try {
    const _0x139a0b = await _0xfb0ab6.sendMessage(_0x51e7a1, {
      'text': '🧐'
    });
    const _0x322576 = ['😳', '😊', '😶', '🙈', '🙊', '😳', '😊', '😶', '🙈', '🙊'];
    for (const _0x5950fd of _0x322576) {
      await new Promise(_0x4446dd => setTimeout(_0x4446dd, 0x3e8));
      await _0xfb0ab6.relayMessage(_0x51e7a1, {
        'protocolMessage': {
          'key': _0x139a0b.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x5950fd
          }
        }
      }, {});
    }
  } catch (_0x2e53c7) {
    console.log(_0x2e53c7);
    _0x13b7b4("❌ *Error!* " + _0x2e53c7.message);
  }
});
cmd({
  'pattern': "moon",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '🌚',
  'filename': __filename
}, async (_0x77f1b7, _0x2a5a92, _0xcac65, {
  from: _0x53b3c0,
  reply: _0x92a72a
}) => {
  try {
    const _0x5f38f3 = await _0x77f1b7.sendMessage(_0x53b3c0, {
      'text': '🌝'
    });
    const _0x1d8114 = ['🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', "🌝🌚"];
    for (const _0x1eb467 of _0x1d8114) {
      await new Promise(_0x3707e2 => setTimeout(_0x3707e2, 0x3e8));
      await _0x77f1b7.relayMessage(_0x53b3c0, {
        'protocolMessage': {
          'key': _0x5f38f3.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x1eb467
          }
        }
      }, {});
    }
  } catch (_0xa645bf) {
    console.log(_0xa645bf);
    _0x92a72a("❌ *Error!* " + _0xa645bf.message);
  }
});
cmd({
  'pattern': "confused",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': 'tools',
  'react': '🤔',
  'filename': __filename
}, async (_0x19bfc7, _0x15cc0d, _0x4f718d, {
  from: _0x5ba136,
  reply: _0x5616c7
}) => {
  try {
    const _0x2b06f7 = await _0x19bfc7.sendMessage(_0x5ba136, {
      'text': '🤔'
    });
    const _0x345c96 = ['😕', '😟', '😵', '🤔', '😖', '😲', '😦', '🤷', "🤷‍♂️", "🤷‍♀️"];
    for (const _0x51839e of _0x345c96) {
      await new Promise(_0x385e14 => setTimeout(_0x385e14, 0x3e8));
      await _0x19bfc7.relayMessage(_0x5ba136, {
        'protocolMessage': {
          'key': _0x2b06f7.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x51839e
          }
        }
      }, {});
    }
  } catch (_0x36e81b) {
    console.log(_0x36e81b);
    _0x5616c7("❌ *Error!* " + _0x36e81b.message);
  }
});
cmd({
  'pattern': "hot",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '💋',
  'filename': __filename
}, async (_0x491e86, _0x17c22c, _0x17563b, {
  from: _0x41646a,
  reply: _0x25449e
}) => {
  try {
    const _0x567c7f = await _0x491e86.sendMessage(_0x41646a, {
      'text': '💋'
    });
    const _0x3992d0 = ['🥵', '❤️', '💋', '😫', '🤤', '😋', '🥵', '🥶', '🙊', '😻', '🙈', '💋', '🫂', '🫀', '👅', '👄', '💋'];
    for (const _0x51a083 of _0x3992d0) {
      await new Promise(_0x4f69b1 => setTimeout(_0x4f69b1, 0x3e8));
      await _0x491e86.relayMessage(_0x41646a, {
        'protocolMessage': {
          'key': _0x567c7f.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x51a083
          }
        }
      }, {});
    }
  } catch (_0xedcd0d) {
    console.log(_0xedcd0d);
    _0x25449e("❌ *Error!* " + _0xedcd0d.message);
  }
});
cmd({
  'pattern': "nikal",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '🗿',
  'filename': __filename
}, async (_0x3ab810, _0x30a319, _0x143235, {
  from: _0x2664ea,
  reply: _0x206e88
}) => {
  try {
    const _0x8ac546 = await _0x3ab810.sendMessage(_0x2664ea, {
      'text': "HASHAN-MD🗿"
    });
    const _0x358b30 = ["⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀     ⢳⡀⠀⡏⠀⠀⠀   ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀  ⠀    ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Nikal   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀      ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀⠀__⠀   ⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀  ⠀  ⢳⡀⠀⡏⠀⠀⠀   ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀       ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Lavde   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀      ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀|__|⠀⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀     ⠀   ⢳⡀⠀⡏⠀⠀    ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀⠀      ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸   Pehli   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀     ⣿  ⢹⠀           ⡇\n  ⠙⢿⣯⠄⠀⠀(P)⠀⠀     ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀     ⠀   ⢳⡀⠀⡏⠀⠀    ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀   ⠀     ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸  Fursat  ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀        ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀⠀__ ⠀  ⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀      ⢳⡀⠀⡏⠀⠀    ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀ ⠀      ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸  Meeee   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀       ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀|__| ⠀    ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀   ⠀  ⠀⢳⡀⠀⡏⠀⠀       ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀  ⠀       ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲   ⣿  ⣸   Nikal   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀       ⣿  ⢹⠀           ⡇\n  ⠙⢿⣯⠄⠀⠀lodu⠀⠀   ⡿ ⠀⡇⠀⠀⠀⠀   ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀  ⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀"];
    for (const _0x3ff80d of _0x358b30) {
      await new Promise(_0xbc7559 => setTimeout(_0xbc7559, 0x1f4));
      await _0x3ab810.relayMessage(_0x2664ea, {
        'protocolMessage': {
          'key': _0x8ac546.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x3ff80d
          }
        }
      }, {});
    }
  } catch (_0x18d22a) {
    console.log(_0x18d22a);
    _0x206e88("❌ *Error!* " + _0x18d22a.message);
  }
});
