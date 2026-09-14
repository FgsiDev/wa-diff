__d(
  "AdsConvergenceBrandAwarenessAdgroupPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsConvergenceAdgroupUtils",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "adsConvergenceDefaultAdgroupImage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "Default Link";
    function s(e, t, n) {
      return r("AdsAdgroupSemanticFields").pageID.set(t, e, n.pageID);
    }
    function u(t, n) {
      var a = r(
        "AdsAdgroupRecordAccessors",
      ).creative.object_story_spec.link_data.link.set(
        e,
        o("AdsConvergenceAdgroupUtils").EMPTY_SHARE_ADGROUP_RECORD,
      );
      return o("AdsConvergenceAdgroupUtils").appendCarouselChildAttachments(
        t,
        n.account,
        s(a, t, n),
        null,
        null,
        null,
        null,
        null,
      );
    }
    var c = {
        type: "convergenceAdgroup",
        key: "adgroup/brand-awareness",
        pivots: { objective: r("AdsAPIObjectives").BRAND_AWARENESS },
        generateDefaultAdgroupSpec: function (t, n, a) {
          var e,
            i,
            l,
            c,
            d = n.getSupportedMediaFormats({
              account: t.account,
              adgroup: o("AdsConvergenceAdgroupUtils")
                .EMPTY_ADGROUP_WITH_OBJECT_STORY_SPEC,
              campaign: t.campaign,
            }),
            m;
          return (
            d.has("CAROUSEL") &&
            o("AdsConvergenceAdgroupUtils").isCarouselLastUsedFormat()
              ? (m = u(a, t))
              : (m = r("adsConvergenceDefaultAdgroupImage")(
                  s(
                    o("AdsConvergenceAdgroupUtils").EMPTY_PHOTO_ADGROUP_RECORD,
                    a,
                    t,
                  ),
                  a,
                  t.pageDestination,
                )),
            (m = o(
              "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
            ).updateContextualDiscoveryAdsEligibilitySpec(m, {
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
                (c = t.contextualDiscoveryAdsEligibilityState) == null
                  ? void 0
                  : c.actionMetadataType,
            })),
            o("AdsConvergenceAdgroupUtils").maySetPoliticalAd(
              m,
              t.specialAdCategories,
            )
          );
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
