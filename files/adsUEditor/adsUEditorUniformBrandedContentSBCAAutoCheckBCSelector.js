__d(
  "adsUEditorUniformBrandedContentSBCAAutoCheckBCSelector",
  [
    "AdsUEditorAdgroupIdentityBrandedContentCheckedDataProvider",
    "adsCreateSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r(
            "AdsUEditorAdgroupIdentityBrandedContentCheckedDataProvider",
          ).toFluxSelector(),
          r("adsUEditorSelectedAdgroupIDsSelector"),
        ],
        function (t, n) {
          var e = t.adgroupIdsWithCheckboxCheckedFromServer;
          return n.every(function (t) {
            return e.has(t);
          });
        },
        { name: i.id + ".didSBCAAutoCheckBCSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
