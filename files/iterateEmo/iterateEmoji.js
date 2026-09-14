__d(
  "iterateEmoji",
  ["EmojiRenderer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = 0,
        a = o("EmojiRenderer").parse(e);
      (a.forEach(function (o) {
        var a = o.offset;
        (a > r && n(e.substr(r, a - r)), t(o.emoji), (r = a + o.length));
      }),
        n(e.substr(r, e.length - r)));
    }
    l.default = e;
  },
  98,
);
