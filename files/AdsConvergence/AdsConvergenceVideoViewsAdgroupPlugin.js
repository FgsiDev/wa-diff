__d(
  "AdsConvergenceVideoViewsAdgroupPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsConvergenceAdgroupUtils",
    "AdsMutators",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "convergenceAdgroup",
        key: "adgroup/video-views",
        pivots: { objective: r("AdsAPIObjectives").VIDEO_VIEWS },
        generateDefaultAdgroupSpec: function (t, n, a) {
          var e = o("AdsMutators").chain(
            function (e) {
              return r("AdsAdgroupSemanticFields").pageID.set(a, e, t.pageID);
            },
            function (e) {
              return r("AdsAdgroupSemanticFields").message.set(a, e, "");
            },
            function (e) {
              return r("AdsAdgroupRecordAccessors").display_sequence.set(0, e);
            },
            function (e) {
              return o(
                "AdsConvergenceAdgroupUtils",
              ).maybeEnableAutoflowAfterEligibilityExpansion(e, t);
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
            function (e) {
              return o("AdsConvergenceAdgroupUtils").maySetPoliticalAd(
                e,
                t.specialAdCategories,
              );
            },
          )(o("AdsConvergenceAdgroupUtils").EMPTY_VIDEO_ADGROUP_RECORD);
          return e;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
