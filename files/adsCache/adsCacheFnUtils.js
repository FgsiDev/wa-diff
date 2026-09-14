__d(
  "adsCacheFnUtils",
  ["AdsDataAtom", "isEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (n, o) {
        var t = new Map(),
          a = function () {
            t = new Map();
          };
        return (
          (e || (e = r("isEmpty")))(o)
            ? (s || (s = r("AdsDataAtom"))).register(a)
            : o.map(function (e) {
                return e.addListener(a);
              }),
          function (e) {
            if (!(s || (s = r("AdsDataAtom"))).isDispatching()) {
              var o = t.get(e);
              if (o != null) return o.value;
            }
            var a = { value: n(e) };
            return (t.set(e, a), a.value);
          }
        );
      },
      c = u;
    l.adsCreateMultiCachedFn = c;
  },
  98,
);
