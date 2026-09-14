__d(
  "adsUEditorCampaignMultiAdsCheckboxEligibilitySelector",
  [
    "AdsContextualDiscoveryAdsUtils",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdObjectsForSelectedCampaignsSelector",
    "adsUEditorisAccountEligibleForContextualDiscoveryAdsExperienceSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          r(
            "adsUEditorisAccountEligibleForContextualDiscoveryAdsExperienceSelector",
          ),
          r("adsUEditorAdObjectsForSelectedCampaignsSelector"),
        ],
        function (t, n, r) {
          return r.every(function (e) {
            var r = e.campaign,
              a = e.campaignGroup,
              i = { campaign: r, campaignGroup: a },
              l = { account: t, adObjects: i },
              s = n().getValue();
            return (
              s === !0 &&
              o(
                "AdsContextualDiscoveryAdsUtils",
              ).shouldRenderL2MultiAdsComponent(l)
            );
          });
        },
        {
          name: i.id + ".adsUEditorCampaignMultiAdsCheckboxEligibilitySelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
