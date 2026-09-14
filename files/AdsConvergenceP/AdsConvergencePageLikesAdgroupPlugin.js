__d(
  "AdsConvergencePageLikesAdgroupPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "AdsConvergenceAdgroupUtils",
    "AdsMutators",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "convergenceAdgroup",
        key: "adgroup/page-likes",
        pivots: { objective: r("AdsAPIObjectives").PAGE_LIKES },
        generateDefaultAdgroupSpec: function (t, n, a) {
          return o("AdsMutators").chain(
            function (e) {
              return r("AdsAdgroupSemanticFields").callToActionType.set(
                a,
                e,
                "LIKE_PAGE",
              );
            },
            function (e) {
              return t.pageID != null
                ? r("AdsAdgroupSemanticFields").pageID.set(a, e, t.pageID)
                : e;
            },
            function (e) {
              return o("AdsConvergenceAdgroupUtils").maySetPoliticalAd(
                e,
                t.specialAdCategories,
              );
            },
            function (e) {
              var n, r, a, i;
              return o(
                "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
              ).updateContextualDiscoveryAdsEligibilitySpec(e, {
                shouldOptIn:
                  ((n = t.contextualDiscoveryAdsEligibilityState) == null
                    ? void 0
                    : n.shouldOptIn) === !0,
                shouldRenderCheckbox:
                  t == null ||
                  (r = t.contextualDiscoveryAdsEligibilityState) == null
                    ? void 0
                    : r.shouldRenderCheckbox,
                isExplicitOptOut:
                  t == null ||
                  (a = t.contextualDiscoveryAdsEligibilityState) == null
                    ? void 0
                    : a.isExplicitOptOut,
                actionMetadataType:
                  (i = t.contextualDiscoveryAdsEligibilityState) == null
                    ? void 0
                    : i.actionMetadataType,
              });
            },
          )(o("AdsConvergenceAdgroupUtils").EMPTY_SHARE_ADGROUP_RECORD);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
