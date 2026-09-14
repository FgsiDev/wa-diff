__d(
  "AdsAdPreviewClientSideConsistencyUtils",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return 0;
      var t = e.map(function (e) {
          var t = e.text;
          return t;
        }),
        n = t.toSorted();
      return n.indexOf(t[t.length - 1]);
    }
    function s(t) {
      var n = t == null ? void 0 : t.asset_feed_spec,
        o = [];
      if (n != null) {
        var a = n.bodies,
          i = n.descriptions,
          l = n.titles;
        (a != null && o.push(["body", e(a)]),
          i != null && o.push(["description", e(i)]),
          l != null && o.push(["title", e(l)]));
      }
      return r("immutable").Map(o);
    }
    l.getDOFPreviewSpec = s;
  },
  98,
);
