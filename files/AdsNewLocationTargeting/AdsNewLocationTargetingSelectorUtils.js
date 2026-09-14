__d(
  "AdsNewLocationTargetingSelectorUtils",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return Object.prototype.hasOwnProperty.call(e, "adgroupSelector")
        ? t(e)
        : n(e);
    }
    function s(t, n) {
      return r("adsCreateStoreSelector")(
        function (r) {
          return e(r, t.getStores, n.getStores);
        },
        function (o) {
          return e(o, t, n);
        },
        { name: i.id },
      );
    }
    l.createL2L1UniformSelector = s;
  },
  98,
);
