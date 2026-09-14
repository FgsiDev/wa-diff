__d(
  "adsProductSetDefaultBWPIDSelector",
  [
    "AdAccountFirstEligibleProductSetDataProvider",
    "AdAccountFirstEligibleProductSetKey",
    "AdToCatalogUtils",
    "AdsAccountStore",
    "LoadObject",
    "adsCreateSelector",
    "adsUEditorCampaignIsCollaborativeAdsSelector",
    "adsUEditorInjectEditingCampaignContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccountID,
          r("AdAccountFirstEligibleProductSetDataProvider").toFluxSelector(),
          r("adsUEditorInjectEditingCampaignContext")(
            r("adsUEditorCampaignIsCollaborativeAdsSelector"),
          ),
        ],
        function (t, n, a) {
          return t != null
            ? n
                .get(
                  o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(
                    !0,
                  )
                    ? o("AdToCatalogUtils").buildDACatalogMatchKey({
                        adAccountID: t,
                        isBwPCampaignGroup: !0,
                        isCPASCampaign: a,
                      })
                    : new (r("AdAccountFirstEligibleProductSetKey"))({
                        adAccountID: t,
                        isBwPCampaignGroup: !0,
                        isCPASCampaign: a,
                      }),
                )
                .map(function (e) {
                  return e != null ? e.id : null;
                })
            : r("LoadObject").empty({ creatorModuleID: i.id });
        },
        { name: i.id + ".adsProductSetDefaultBWPIDSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
