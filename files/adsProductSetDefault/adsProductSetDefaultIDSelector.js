__d(
  "adsProductSetDefaultIDSelector",
  [
    "AdAccountFirstEligibleProductSetDataProvider",
    "AdAccountFirstEligibleProductSetKey",
    "AdToCatalogUtils",
    "AdsAccountStore",
    "LoadObject",
    "adsCollaborationMerchantPartnerBusinessIDSelector",
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
          r("adsUEditorInjectEditingCampaignContext")(
            r("adsCollaborationMerchantPartnerBusinessIDSelector"),
          ),
        ],
        function (t, n, a, l) {
          return t != null
            ? n
                .get(
                  o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(
                    !0,
                  )
                    ? o("AdToCatalogUtils").buildDACatalogMatchKey({
                        adAccountID: t,
                        collaborationMerchantPartnerBusinessID: l,
                        isCPASCampaign: a,
                      })
                    : new (r("AdAccountFirstEligibleProductSetKey"))({
                        adAccountID: t,
                        collaborationMerchantPartnerBusinessID:
                          l != null ? l : null,
                        isCPASCampaign: a,
                      }),
                )
                .map(function (e) {
                  return e != null ? e.id : null;
                })
            : r("LoadObject").empty({ creatorModuleID: i.id });
        },
        { name: i.id + ".adsProductSetDefaultIDSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
