__d(
  "getImplicitURLRangesForContentState",
  ["getImplicitURLMatches"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        .getBlockMap()
        .map(function (t) {
          var n = [];
          return (
            r("getImplicitURLMatches")(
              t,
              function (e, t, r) {
                n.push({ start: e, end: t, match: r });
              },
              e,
            ),
            n
          );
        })
        .toArray();
    }
    l.default = e;
  },
  98,
);
