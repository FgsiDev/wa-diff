__d(
  "createCometMentionsNameMatchStrategy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;",
      l = "\\b[A-Z][^\\s" + e + "]",
      s = "\\b[a-z][^\\s" + e + "]";
    function u(e) {
      var t = e.commonWordsBlocklist,
        n = e.minMatchLength,
        r = e.nameCase,
        o = r === "capitalized" ? l : s,
        a = new RegExp("(^|[^#])((?:" + o + "{1,})$)");
      return {
        findMentionableString: function (r) {
          var e = a.exec(r);
          if (e === null) return null;
          var o = e[1],
            i = e[2];
          return t.includes(i)
            ? null
            : i != null && i.length >= n
              ? {
                  leadOffset: e.index + o.length,
                  matchingString: i,
                  replaceableString: i,
                }
              : null;
        },
        name: "NameMentionStrategy(" + n.toString() + ", " + r + ")",
      };
    }
    i.default = u;
  },
  66,
);
