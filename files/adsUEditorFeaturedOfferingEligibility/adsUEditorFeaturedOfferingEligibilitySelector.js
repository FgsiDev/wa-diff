__d(
  "adsUEditorFeaturedOfferingEligibilitySelector",
  [
    "AdsAutomaticFlowUtils",
    "AdsMetadataConnectedSourcesUtils",
    "AdsSensitiveVerticalUtils",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
      function (t) {
        if (t.length === 0) return !1;
        var e = t[0],
          n = e.adgroup,
          r = e.campaign,
          a = e.campaignGroup;
        return !(
          o(
            "AdsSensitiveVerticalUtils",
          ).isAdAccountInPharmaOrSensitiveVertical() ||
          o("AdsSensitiveVerticalUtils").isAdAccountLuxuryVertical() ||
          !o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(n) ||
          !o(
            "AdsMetadataConnectedSourcesUtils",
          ).isEligibleForFeaturedOfferingByCampaignAndAdgroup(r, a, n)
        );
      },
      { name: i.id + ".adsUEditorFeaturedOfferingEligibilitySelector" },
    );
    l.adsUEditorFeaturedOfferingEligibilitySelector = e;
  },
  98,
);
