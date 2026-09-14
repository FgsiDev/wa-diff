__d(
  "adsUEditorAdgroupIdentityIsBrandedContentDisabledSelector",
  [
    "AdsAPIObjectives",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorSelectors",
    "ApiDynamicCreativeOptimizationTypes",
    "PartnershipDynamicAdsGatingUtils",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupFormatPluginsSelector",
    "adsUEditorAdgroupIsCatalogSelectedSelector",
    "adsUEditorAssetFeedOptimizationTypeSelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
    "adsUEditorCampaignIGLiveVideoSelector",
    "isBrandedContentFieldEligibleBasedOnAdgroup",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return t.some(function (e) {
            return !r("isBrandedContentFieldEligibleBasedOnAdgroup")(e);
          });
        },
        { name: i.id + ".isCreativeIncompatibleWithBCSelector" },
      ),
      s = r("adsCreateSelector")(
        [
          e,
          r("adsUEditorAssetFeedOptimizationTypeSelector"),
          r("adsUEditorAdgroupFormatPluginsSelector"),
          r("adsUEditorAdgroupIsCatalogSelectedSelector"),
          r("adsUEditorCampaignIGLiveVideoSelector"),
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
              function (e) {
                return e.objective;
              },
            ),
            r("AdsAPIObjectives").NONE,
          ),
          r("adsGetUniformValueSelector")(
            r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"),
            r("AdsPromotedObjectTypes").NONE,
          ),
        ],
        function (t, n, a, i, l, s, u) {
          return s === r("AdsAPIObjectives").OUTCOME_LEADS &&
            u === r("AdsPromotedObjectTypes").LEAD_FROM_IG_DIRECT
            ? !0
            : t ||
                n === r("ApiDynamicCreativeOptimizationTypes").MULTI_CREATOR ||
                (!o(
                  "PartnershipDynamicAdsGatingUtils",
                ).shouldEnablePartnershipAdsDynamicAdsWithExistingPost() &&
                  i &&
                  a.every(function (e) {
                    return e.key !== "collection";
                  })) ||
                (l &&
                  !o(
                    "AdsCampaignLiveVideoAdsUtils",
                  ).getIsInstagramLiveVideoPartnershipAdsEnabled());
        },
        {
          name:
            i.id + ".adsUEditorAdgroupIdentityIsBrandedContentDisabledSelector",
        },
      ),
      u = s;
    l.default = u;
  },
  98,
);
