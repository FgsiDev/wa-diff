__d(
  "AdsConvergencePostEngagementAdgroupPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsConvergenceAdgroupUtils",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "convergenceAdgroup",
        key: "adgroup/post-engagement",
        pivots: { objective: r("AdsAPIObjectives").POST_ENGAGEMENT },
        generateDefaultAdgroupSpec: function (t, n, a) {
          var e,
            i,
            l,
            s,
            u = r("AdsAdgroupRecordAccessors").creative.object_id.set(
              t.pageID,
              o("AdsConvergenceAdgroupUtils")
                .EMPTY_PHOTO_ADGROUP_RECORD_FOR_EXISTING_POST,
            );
          return (
            (u = r("AdsAdgroupRecordAccessors").creative.uca_draft_version.set(
              1,
              u,
            )),
            (u = o("AdsConvergenceAdgroupUtils").maySetPoliticalAd(
              u,
              t.specialAdCategories,
            )),
            (u = o(
              "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
            ).updateContextualDiscoveryAdsEligibilitySpec(u, {
              shouldOptIn:
                ((e = t.contextualDiscoveryAdsEligibilityState) == null
                  ? void 0
                  : e.shouldOptIn) === !0,
              shouldRenderCheckbox:
                t == null ||
                (i = t.contextualDiscoveryAdsEligibilityState) == null
                  ? void 0
                  : i.shouldRenderCheckbox,
              isExplicitOptOut:
                t == null ||
                (l = t.contextualDiscoveryAdsEligibilityState) == null
                  ? void 0
                  : l.isExplicitOptOut,
              actionMetadataType:
                (s = t.contextualDiscoveryAdsEligibilityState) == null
                  ? void 0
                  : s.actionMetadataType,
            })),
            u
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
