__d(
  "adsCreateMapSelector",
  ["AdsSelectorUtils", "adsCreateStoreSelector", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a) {
      var i = r("immutable").Map();
      return r("adsCreateStoreSelector")(
        function (r) {
          return (e || (e = o("AdsSelectorUtils"))).getStores([t, n], r);
        },
        function (r) {
          var e = new Set(t(r));
          return (
            (i = i.withMutations(function (t) {
              for (var r of t.keySeq()) e.has(r) || t.delete(r);
              for (var o of e) {
                var a = n(o);
                t.set(o, a);
              }
            })),
            i
          );
        },
        { name: a, isGetStoresPure: t.isGetStoresPure && n.isGetStoresPure },
      );
    }
    l.default = s;
  },
  98,
);
