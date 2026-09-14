__d(
  "AdsConvergenceReachAdgroupPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "AdsConvergenceAdgroupUtils",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "adsConvergenceDefaultAdgroupImage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return r("AdsAdgroupSemanticFields").pageID.set(t, e, n.pageID);
    }
    function s(t, n) {
      return o("AdsConvergenceAdgroupUtils").appendCarouselChildAttachments(
        t,
        n.account,
        e(o("AdsConvergenceAdgroupUtils").EMPTY_SHARE_ADGROUP_RECORD, t, n),
        null,
        null,
        null,
        null,
        null,
      );
    }
    var u = {
        type: "convergenceAdgroup",
        key: "adgroup/reach",
        pivots: { objective: r("AdsAPIObjectives").REACH },
        generateDefaultAdgroupSpec: function (n, a, i) {
          var t,
            l,
            u,
            c,
            d = a.getSupportedMediaFormats({
              account: n.account,
              adgroup: o("AdsConvergenceAdgroupUtils")
                .EMPTY_ADGROUP_WITH_OBJECT_STORY_SPEC,
              campaign: n.campaign,
            }),
            m;
          return (
            d.has("CAROUSEL") &&
            o("AdsConvergenceAdgroupUtils").isCarouselLastUsedFormat()
              ? (m = s(i, n))
              : d.has("IMAGE")
                ? (m = r("adsConvergenceDefaultAdgroupImage")(
                    e(
                      o("AdsConvergenceAdgroupUtils")
                        .EMPTY_PHOTO_ADGROUP_RECORD,
                      i,
                      n,
                    ),
                    i,
                    n.pageDestination,
                  ))
                : (m = e(
                    o("AdsConvergenceAdgroupUtils").EMPTY_VIDEO_ADGROUP_RECORD,
                    i,
                    n,
                  )),
            (m = o(
              "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
            ).updateContextualDiscoveryAdsEligibilitySpec(m, {
              shouldOptIn:
                ((t = n.contextualDiscoveryAdsEligibilityState) == null
                  ? void 0
                  : t.shouldOptIn) === !0,
              shouldRenderCheckbox:
                n == null ||
                (l = n.contextualDiscoveryAdsEligibilityState) == null
                  ? void 0
                  : l.shouldRenderCheckbox,
              isExplicitOptOut:
                n == null ||
                (u = n.contextualDiscoveryAdsEligibilityState) == null
                  ? void 0
                  : u.isExplicitOptOut,
              actionMetadataType:
                (c = n.contextualDiscoveryAdsEligibilityState) == null
                  ? void 0
                  : c.actionMetadataType,
            })),
            o("AdsConvergenceAdgroupUtils").maySetPoliticalAd(
              m,
              n.specialAdCategories,
            )
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
