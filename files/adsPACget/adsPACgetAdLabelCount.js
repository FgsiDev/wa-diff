__d(
  "adsPACgetAdLabelCount",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o, a;
      if (n == null) return 0;
      var i =
          (o = e.creative) == null || (o = o.asset_feed_spec) == null
            ? void 0
            : o.carousels,
        l =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.asset_customization_rules,
        s = 0;
      return (
        i != null &&
          (s += i.reduce(function (e, o) {
            var a = o.get("child_attachments");
            if (!(a instanceof r("immutable").List)) return e;
            var i = a.filter(function (e) {
              return e.getIn([t, "name"]) === n;
            });
            return e + i.size;
          }, 0)),
        l != null &&
          (s += l.filter(function (e) {
            return e.getIn([t, "name"]) === n;
          }).size),
        s
      );
    }
    l.default = e;
  },
  98,
);
