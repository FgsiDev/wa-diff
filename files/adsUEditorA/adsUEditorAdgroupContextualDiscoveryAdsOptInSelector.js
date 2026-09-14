__d(
  "adsUEditorAdgroupContextualDiscoveryAdsOptInSelector",
  [
    "AdsContextualDiscoveryAdsUtils",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
    "adsUEditorCampaignMMOnlyPlacementSelector",
    "adsUEditorisAccountEligibleForContextualDiscoveryAdsExperienceSelector",
    "getIsReelsTrendingAdsEnabledFromCampaignGroupRecord",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          r(
            "adsUEditorisAccountEligibleForContextualDiscoveryAdsExperienceSelector",
          ),
          r("adsUEditorAdObjectsForSelectedAdgroupsSelector"),
          o("adsUEditorCampaignMMOnlyPlacementSelector")
            .areAnySelectedCampaignsMarketingMessagesOnlySelector,
        ],
        function (t, n, a, i) {
          return i
            ? !1
            : a.every(function (e) {
                var a = e.adgroup,
                  i = e.campaign,
                  l = e.campaignGroup,
                  s = { campaign: i, campaignGroup: l, adgroup: a },
                  u = { account: t, adObjects: s },
                  c = n().getValue(),
                  d = r("getIsReelsTrendingAdsEnabledFromCampaignGroupRecord")(
                    l,
                  );
                return (
                  c === !0 &&
                  o(
                    "AdsContextualDiscoveryAdsUtils",
                  ).shouldRenderContextualDiscoveryAdsComponent(u) &&
                  !d
                );
              });
        },
        {
          name: i.id + ".adsUEditorAdgroupContextualDiscoveryAdsOptInSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
