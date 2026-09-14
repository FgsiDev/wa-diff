__d(
  "adsUEditorAdgroupIsCatalogSelectedSelector",
  [
    "AdsDynamicAdsUtils",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").adgroup.bulkByAccessor(function (e) {
              return o("AdsDynamicAdsUtils").isDynamicAd(e);
            }),
            !1,
          ),
        ],
        function (t) {
          return t;
        },
        { name: i.id + ".adsUEditorAdgroupIsCatalogSelectedSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
