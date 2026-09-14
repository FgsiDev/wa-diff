__d(
  "adsUEditorCampaignPartnerEventSourcesInformationSelector",
  [
    "AdsAPIObjectives",
    "AdsCPASCampaignPartnerEventSourcesStateDataProvider",
    "AdsCPASDataProvider",
    "AdsCampaignRecordAccessors",
    "AdsPCAUnificationUtils",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdObjectsForSelectedCampaignsSelector",
    "adsUEditorCampaignPartnerEventSourcesInformationSelectorUtils",
    "adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r(
        "AdsCPASCampaignPartnerEventSourcesStateDataProvider",
      ).toFluxSelector(),
      s = r("AdsCPASDataProvider").toFluxSelector(),
      u = r("adsCreateSelector")(
        [r("adsUEditorAdObjectsForSelectedCampaignsSelector")],
        function (t) {
          return (
            t.length > 0 &&
            t.every(function (e) {
              var t = e.campaignGroup;
              return o("AdsPCAUnificationUtils").isPcaUnifiedCollaborativeAd(t);
            })
          );
        },
        { name: i.id + ".isPcaUnifiedCollaborativeAdSelector" },
      ),
      c = r("adsCreateSelector")(
        [
          e,
          r("adsGetUniformValueSelector")(
            r("adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector"),
            r("AdsAPIObjectives").NONE,
          ),
          o("AdsUEditorSelectors").campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").promoted_object.application_id.get,
          ),
          o("AdsUEditorSelectors").campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").promoted_object.pixel_id.get,
          ),
          o("AdsUEditorSelectors").campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").promoted_object.product_set_id.get,
          ),
          s,
          u,
        ],
        function (t, n, r, a, i, l, s) {
          return o(
            "adsUEditorCampaignPartnerEventSourcesInformationSelectorUtils",
          ).adsUEditorCampaignPartnerEventSourcesInformation(
            t,
            n,
            r,
            a,
            i,
            l,
            s,
          );
        },
        {
          name:
            i.id + ".adsUEditorCampaignPartnerEventSourcesInformationSelector",
        },
      ),
      d = c;
    l.default = d;
  },
  98,
);
