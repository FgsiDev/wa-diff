__d(
  "getUpgradedCometEmojiComposerHandler",
  ["CometLexicalEmojiNode", "EmojiRenderer", "FBEmojiResource", "Lexical"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.registerNodeTransform(o("Lexical").TextNode, function (e) {
        if (e.isSimpleText()) {
          var n = e.getTextContent(),
            a = e,
            i = void 0,
            l = 0;
          o("EmojiRenderer")
            .parse(n)
            .forEach(function (e) {
              var n = e.emoji,
                s = e.length,
                u = e.offset,
                c = n.join(""),
                d = r("FBEmojiResource").fromCodepoints(n);
              if (d != null) {
                var m = d.getImageURL(t);
                if (m != null) {
                  var p = c,
                    _ = o("CometLexicalEmojiNode").$createEmojiNode(c, p, m, t),
                    f = u - l,
                    g = f + s;
                  if (f === 0) {
                    var h = a.splitText(g);
                    ((i = h[0]), (a = h[1]));
                  } else {
                    var y = a.splitText(f, g);
                    ((i = y[1]), (a = y[2]));
                  }
                  ((l += g), i.replace(_), (i = _));
                }
              }
            });
        }
      });
      return function () {
        n();
      };
    }
    l.default = e;
  },
  98,
);
