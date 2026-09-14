__d(
  "BlockMapBuilder",
  ["immutable"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("immutable").OrderedMap,
      l = {
        createFromArray: function (n) {
          return e(
            n.map(function (e) {
              return [e.getKey(), e];
            }),
          );
        },
      };
    a.exports = l;
  },
  null,
);
