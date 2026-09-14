__d(
  "adsUEditorCampaignMultiAdsL2MigrationFlowEligibilitySelectorImpl",
  [
    "AdsCampaignDraftFragmentStore",
    "AdsContextualDiscoveryAdsUtils",
    "FBLogger",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorAdgroupsForSelectedCampaignsSelector_SLOW",
    "adsUEditorSelectedCampaignIDsSelector",
    "adsUEditorSelectedCampaignPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignIDsSelector"),
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          r("adsCreateThunkSelector")(
            r("adsUEditorAdgroupsForSelectedCampaignsSelector_SLOW"),
          ),
        ],
        function (t, n, a) {
          if (t == null || t.length < 1) return !0;
          var e = t.length > 1;
          if (e) return !1;
          var i = n[0];
          if (i == null)
            return (
              r("FBLogger")("ads_selectors").warn(
                "adsUEditorCampaignMultiAdsL2MigrationFlowEligibilitySelector firstCampaign is null. selectedCampaignIDs length %d selectedCampaigns length %d",
                t.length,
                n.length,
              ),
              !0
            );
          if (
            r("AdsCampaignDraftFragmentStore").isNew(t[0]) &&
            !o("AdsContextualDiscoveryAdsUtils").isInL2DuplicateFlow(i)
          )
            return !0;
          if (i.multi_ads == null) {
            var l,
              s = (l = a().getValue()) != null ? l : [],
              u = !0;
            for (var c of s) {
              var d;
              if (
                (c == null || (d = c.creative) == null
                  ? void 0
                  : d.contextual_multi_ads) != null
              ) {
                u = !1;
                break;
              }
            }
            return !!u;
          }
          return !0;
        },
        {
          name:
            i.id +
            ".adsUEditorCampaignMultiAdsL2MigrationFlowEligibilitySelectorImpl",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
