__d(
  "getVideoPlayerChapterSegments",
  ["DateConsts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t * o("DateConsts").MS_PER_SEC,
        r = e
          .map(function (e) {
            var t = e.start_time;
            return { left: n > 0 ? (t != null ? t : 0) / n : 0, right: -1 };
          })
          .sort(function (e, t) {
            return e.left - t.left;
          });
      if (r.length === 0) return r;
      r[0].left !== 0 && r.unshift({ left: 0, right: -1 });
      for (var a = 0; a < r.length - 1; a++) r[a].right = r[a + 1].left;
      return ((r[r.length - 1].right = 1), r);
    }
    l.default = e;
  },
  98,
);
