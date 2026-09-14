__d(
  "findAppInfoInAppSearchResults",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (e == null) return null;
      var n = Array.from(t.getData().values())
          .map(function (e) {
            return e.getValue();
          })
          .filter(function (e) {
            return e != null;
          }),
        r = n.flat(),
        o = r.map(function (e) {
          return e.getAuxiliaryData();
        }),
        a = o.find(function (t) {
          return t.app_id === e;
        });
      return a;
    }
    i.default = e;
  },
  66,
);
