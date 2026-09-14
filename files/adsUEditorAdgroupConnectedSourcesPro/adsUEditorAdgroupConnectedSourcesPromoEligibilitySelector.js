__d(
  "adsUEditorAdgroupConnectedSourcesPromoEligibilitySelector",
  [
    "AdsMetadataConnectedSourcesUtils",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
      function (t) {
        return t.some(function (e) {
          var t = e.adgroup,
            n = e.campaign,
            r = e.campaignGroup;
          return !o(
            "AdsMetadataConnectedSourcesUtils",
          ).isEligibleForPromotionsByCampaignAndAdgroup(n, r, t);
        })
          ? !1
          : o(
              "AdsMetadataConnectedSourcesUtils",
            ).isEligibleForPromotionsByExperiment();
      },
      {
        name:
          i.id + ".adsUEditorAdgroupConnectedSourcesPromoEligibilitySelector",
      },
    );
    l.adsUEditorAdgroupConnectedSourcesPromoEligibilitySelector = e;
  },
  98,
);
