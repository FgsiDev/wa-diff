__d(
  "findRangesImmutable",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      if (e.size) {
        var o = 0;
        (e.reduce(function (e, a, i) {
          return (t(e, a) || (n(e) && r(o, i), (o = i)), a);
        }),
          n(e.last()) && r(o, e.count()));
      }
    }
    a.exports = e;
  },
  null,
);
