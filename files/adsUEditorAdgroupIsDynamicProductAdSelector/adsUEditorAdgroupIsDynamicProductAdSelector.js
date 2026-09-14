__d(
  "adsUEditorAdgroupIsDynamicProductAdSelector",
  [
    "adsCreateSelector",
    "adsUEditorAdgroupIsDynamicProductAdSelectorUtils",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorSelectedAdgroupPlainObjectsSelector")],
        function (t) {
          return o(
            "adsUEditorAdgroupIsDynamicProductAdSelectorUtils",
          ).adsUEditorAdgroupIsDynamicProductAd(t);
        },
        { name: i.id + ".adsUEditorAdgroupIsDynamicProductAdSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
