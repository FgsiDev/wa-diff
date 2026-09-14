__d(
  "adsUEditorCampaignIsCollaborativeAdsSelector",
  [
    "AdsUEditorCampaignPartnerEventSourcesSelector",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsUEditorCampaignIsCollaborativeAdsSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
            function (e) {
              return e.collaborative_ads_partner_info;
            },
          ),
          o("AdsUEditorCampaignPartnerEventSourcesSelector")
            .checkIfCPASCatalogSelector,
        ],
        function (t, n) {
          return o(
            "adsUEditorCampaignIsCollaborativeAdsSelectorUtils",
          ).adsUEditorCampaignIsCollaborativeAds(t, n);
        },
        { name: i.id + ".adsUEditorCampaignIsCollaborativeAdsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
