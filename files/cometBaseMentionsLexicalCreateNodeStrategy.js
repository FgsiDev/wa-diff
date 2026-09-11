__d(
  "cometBaseMentionsLexicalCreateNodeStrategy",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (t) {
        var n = t.anchorNode,
          o = t.endOffset,
          a = t.selectedEntry,
          i = t.startOffset,
          l;
        if (i === 0) {
          var s = n.splitText(o);
          l = s[0];
        } else {
          var u = n.splitText(i, o);
          l = u[1];
        }
        if (l == null) {
          r("FBLogger")("search").mustfix(
            "createMentionNodeFromSearchResult failed to find correct offsets. Found offsets: " +
              i +
              ", " +
              o +
              ".",
          );
          return;
        }
        var c = e(a);
        (c.setStyle(l.getStyle()), l.replace(c), c.selectNext(0, 0));
      };
    }
    l.default = e;
  },
  98,
);
