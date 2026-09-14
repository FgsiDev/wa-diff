__d(
  "adsChooseSelector",
  ["AdsSelectorNameUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      var i = function () {
        return e() ? t.apply(void 0, arguments) : n.apply(void 0, arguments);
      };
      return (
        (i.isGetStoresStatic = !1),
        (i.isGetStoresPure = r && t.isGetStoresPure && n.isGetStoresPure),
        (i.getStores = function (r) {
          return e() ? t.getStores(r) : n.getStores(r);
        }),
        (i.rawSelectFn = function () {
          return e()
            ? t.rawSelectFn.apply(t, arguments)
            : n.rawSelectFn.apply(n, arguments);
        }),
        o("AdsSelectorNameUtils").nameSelector(i, a),
        i
      );
    }
    l.default = e;
  },
  98,
);
