__d(
  "adsUEditorProductAudienceBulkTargetingTypeSelector",
  [
    "AdsBulkValueUtils",
    "AdsDynamicTargetingPackageDataProvider",
    "AdsUEditorCampaignGroupAndCampaignGetTargetingTypeUtil",
    "ProductSetDataProvider",
    "adsCreateSelector",
    "adsUEditorSelectedCampaignsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("ProductSetDataProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [
          r("AdsDynamicTargetingPackageDataProvider").toFluxSelector(),
          r("adsUEditorSelectedCampaignsSelector"),
          e,
        ],
        function (t, n, a) {
          return o("AdsBulkValueUtils").aggregate(
            n.map(function (e) {
              return r(
                "AdsUEditorCampaignGroupAndCampaignGetTargetingTypeUtil",
              )(t, e, a);
            }),
          );
        },
        { name: i.id + ".adsUEditorProductAudienceBulkTargetingTypeSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
