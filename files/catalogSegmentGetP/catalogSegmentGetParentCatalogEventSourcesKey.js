__d(
  "catalogSegmentGetParentCatalogEventSourcesKey",
  ["adsMemoizeWithArgs", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Record({
        adAccountID: null,
        catalogSegmentID: null,
      }),
      s = r("adsMemoizeWithArgs")(
        function (t, n) {
          return e({ adAccountID: t, catalogSegmentID: n });
        },
        function (e, t) {
          return e + " " + t;
        },
        i.id + ".catalogSegmentGetParentCatalogEventSourcesKey",
      ),
      u = s;
    l.default = u;
  },
  98,
);
