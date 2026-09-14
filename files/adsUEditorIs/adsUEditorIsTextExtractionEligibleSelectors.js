__d(
  "adsUEditorIsTextExtractionEligibleSelectors",
  [
    "AdsAPlusCDynamicDescriptionUtils",
    "AdsAPlusCTextExtractionAccessUtils",
    "AdsDynamicAdsUtils",
    "AdsRegulatedCategory",
    "AdsUEditorCampaignGroupSelectors",
    "PromoAdsAdsManagerGatingAndExperimentUtils",
    "adsCreateSelector",
    "adsUEditorAdgroupPromoAdEligibilitySelector",
    "adsUEditorCreativeFeaturesEligibilitySelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "areEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("AdsUEditorCampaignGroupSelectors").campaignGroups.every(
        function (t) {
          var n,
            o = (n = t.special_ad_categories) == null ? void 0 : n.toArray();
          return (
            !(e || (e = r("areEqual")))(o, []) &&
            !(e || (e = r("areEqual")))(o, [r("AdsRegulatedCategory").NONE])
          );
        },
      ),
      u = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
          s,
          r("adsUEditorCreativeFeaturesEligibilitySelector"),
          o(
            "adsUEditorAdgroupPromoAdEligibilitySelector",
          ).getIsPromoAdsEligible(!1),
        ],
        function (t, n, r, a) {
          var e;
          if (
            !o(
              "AdsAPlusCTextExtractionAccessUtils",
            ).isAccountEligibleForTextExtraction()
          )
            return !1;
          var i = r.getValue(),
            l =
              (e =
                i == null
                  ? void 0
                  : i.features_eligibility_map.is_luxury_vertical) != null
                ? e
                : !1;
          if (l || n) return !1;
          var s = t[0];
          return !(
            (o("AdsDynamicAdsUtils").isDynamicAd(s) &&
              !o(
                "AdsAPlusCDynamicDescriptionUtils",
              ).hasDynamicDescriptionTextExtractionAccess()) ||
            (a &&
              o(
                "PromoAdsAdsManagerGatingAndExperimentUtils",
              ).isPromoAdsIgStoriesCTAPreClickExperienceEnabled())
          );
        },
        { name: i.id + ".adsUEditorIsTextExtractionEligibleSelector" },
      );
    l.adsUEditorIsTextExtractionEligibleSelector = u;
  },
  98,
);
