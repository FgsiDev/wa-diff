__d(
  "AdsConvergenceAppInstallsAdgroupPlugin",
  [
    "AdsAPIObjectives",
    "AdsConvergenceAdgroupUtils",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "convergenceAdgroup",
        key: "adgroup/app-installs",
        pivots: { objective: r("AdsAPIObjectives").APP_INSTALLS },
        generateDefaultAdgroupSpec: function (t, n, r) {
          var e,
            a,
            i,
            l,
            s = o("AdsConvergenceAdgroupUtils").EMPTY_SHARE_ADGROUP_RECORD;
          return (
            (s = o(
              "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
            ).updateContextualDiscoveryAdsEligibilitySpec(s, {
              shouldOptIn:
                ((e = t.contextualDiscoveryAdsEligibilityState) == null
                  ? void 0
                  : e.shouldOptIn) === !0,
              shouldRenderCheckbox:
                t == null ||
                (a = t.contextualDiscoveryAdsEligibilityState) == null
                  ? void 0
                  : a.shouldRenderCheckbox,
              isExplicitOptOut:
                t == null ||
                (i = t.contextualDiscoveryAdsEligibilityState) == null
                  ? void 0
                  : i.isExplicitOptOut,
              actionMetadataType:
                (l = t.contextualDiscoveryAdsEligibilityState) == null
                  ? void 0
                  : l.actionMetadataType,
            })),
            (s = o(
              "AdsConvergenceAdgroupUtils",
            ).maybeEnableAutoflowAfterEligibilityExpansion(s, t)),
            o("AdsConvergenceAdgroupUtils").maySetPoliticalAd(
              s,
              t.specialAdCategories,
            )
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
