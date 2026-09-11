__d(
  "getUpgradedCometUFIEmoticonsComposerHandler",
  ["CometLexicalEmojiNode", "EmoticonsList", "FBEmojiResource", "Lexical"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e.isSimpleText()) {
        var n = o("Lexical").$getSelection(),
          a = e.getTextContent();
        o("Lexical").$isRangeSelection(n) &&
          n.isCollapsed() &&
          n.anchor.type === "text" &&
          n.anchor.key === e.getKey() &&
          (a = a.slice(0, n.anchor.offset));
        for (
          var i, l, s = e;
          (i = a.match(o("EmoticonsList").noncapturingRegexp)) && s !== void 0;
        ) {
          var u = i[1],
            c = i[0][0] === " " ? i.index + 1 : i.index,
            d = u.length,
            m = c + d,
            p = o("EmoticonsList").emotes[u];
          if (p !== void 0) {
            var _ = o("EmoticonsList").emoji[p],
              f = s.getNextSibling(),
              g =
                m === a.length
                  ? o("Lexical").$isLineBreakNode(f)
                  : a[m] === " ";
            if (_ !== void 0 && g) {
              var h = void 0;
              if (c === 0) {
                var y = s.splitText(d);
                ((h = y[0]), (s = y[1]));
              } else {
                var C = s.splitText(c, m);
                ((h = C[1]), (s = C[2]));
              }
              var b = _.length === 5 && _.slice(0, 2) === "1f",
                v = b ? String.fromCodePoint(parseInt(_, 16)) : u,
                S = u,
                R = new (r("FBEmojiResource"))(_),
                L = R.getImageURL(t);
              L != null &&
                ((l = o("CometLexicalEmojiNode").$createEmojiNode(v, S, L, t)),
                h.replace(l));
            }
          }
          a = a.slice(m);
        }
      }
    }
    function s(t, n) {
      var r = n != null ? n : o("CometLexicalEmojiNode").UFI_EMOJI_SIZE;
      return t.registerNodeTransform(o("Lexical").TextNode, function (t) {
        return e(t, r);
      });
    }
    l.default = s;
  },
  98,
);
