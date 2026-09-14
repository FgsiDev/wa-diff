__d(
  "adsUEditorSelectedPageSelector",
  [
    "AdsLoadStateUtils_LEGACY",
    "AdsPageStore",
    "AdsUEditorAdgroupBulkSelectors",
    "LoadObject",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(
            o("AdsUEditorAdgroupBulkSelectors").pageID,
            null,
          ),
          r("AdsPageStore").getSelector,
        ],
        function (t, n) {
          return t != null
            ? o("AdsLoadStateUtils_LEGACY").toLoadObject(n(t))
            : r("LoadObject").withValue(null, { creatorModuleID: i.id });
        },
        { name: i.id + ".adsUEditorSelectedPageSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
