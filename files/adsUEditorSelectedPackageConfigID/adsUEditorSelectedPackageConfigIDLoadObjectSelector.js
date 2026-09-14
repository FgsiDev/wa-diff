__d(
  "adsUEditorSelectedPackageConfigIDLoadObjectSelector",
  [
    "AdsBulkValueUtils",
    "AdsUEditorSelectorUtils",
    "adsCreateSelector",
    "adsUEditorSelectedCampaignGroupLoadObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorSelectedCampaignGroupLoadObjectsSelector")],
        function (t) {
          return t
            .map(
              o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
                return e.map(function (e) {
                  var t;
                  return (t = e.ad_creation_package_config) == null
                    ? void 0
                    : t.id;
                });
              }),
            )
            .map(function (e) {
              return o("AdsBulkValueUtils").getUniformValueOrDefault(e, null);
            });
        },
        { name: i.id + ".adsUEditorSelectedPackageConfigIDLoadObjectSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
