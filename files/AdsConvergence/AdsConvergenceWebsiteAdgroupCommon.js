__d(
  "AdsConvergenceWebsiteAdgroupCommon",
  [
    "AdsAdgroupSemanticFields",
    "AdsConvergenceAdgroupUtils",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
    "AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE";
      return (
        e.pivots.promotedObjectType === r("AdsPromotedObjectTypes").GROUP &&
          (n = "JOIN_GROUP"),
        o("AdsMutators").chain(
          function (t) {
            return r("AdsAdgroupSemanticFields").callToActionType.set(e, t, n);
          },
          function (n) {
            return r("AdsAdgroupSemanticFields").pageID.set(e, n, t.pageID);
          },
        )(o("AdsConvergenceAdgroupUtils").EMPTY_SHARE_ADGROUP_RECORD)
      );
    }
    function s(t, n) {
      return o("AdsConvergenceAdgroupUtils").appendCarouselChildAttachments(
        t,
        n.account,
        e(t, n),
        null,
        null,
        null,
        r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
        null,
      );
    }
    function u(t, n, r) {
      var a,
        i,
        l,
        u,
        c = n.getSupportedMediaFormats({
          account: t.account,
          adgroup: o("AdsConvergenceAdgroupUtils")
            .EMPTY_ADGROUP_WITH_OBJECT_STORY_SPEC,
          campaign: t.campaign,
        }),
        d;
      return (
        c.has("CAROUSEL") &&
        o("AdsConvergenceAdgroupUtils").isCarouselLastUsedFormat()
          ? (d = s(r, t))
          : c.has("IMAGE")
            ? (d = e(r, t))
            : (d = o("AdsConvergenceAdgroupUtils").maySetPoliticalAd(
                o("AdsConvergenceAdgroupUtils").EMPTY_VIDEO_ADGROUP_RECORD,
                t.specialAdCategories,
              )),
        (d = o("AdsConvergenceAdgroupUtils").maybeEnableAutoflow(d, t)),
        (d = o(
          "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
        ).updateContextualDiscoveryAdsEligibilitySpec(d, {
          shouldOptIn:
            ((a = t.contextualDiscoveryAdsEligibilityState) == null
              ? void 0
              : a.shouldOptIn) === !0,
          shouldRenderCheckbox:
            t == null || (i = t.contextualDiscoveryAdsEligibilityState) == null
              ? void 0
              : i.shouldRenderCheckbox,
          isExplicitOptOut:
            t == null || (l = t.contextualDiscoveryAdsEligibilityState) == null
              ? void 0
              : l.isExplicitOptOut,
          actionMetadataType:
            (u = t.contextualDiscoveryAdsEligibilityState) == null
              ? void 0
              : u.actionMetadataType,
        })),
        t.bizAIEligibility !== void 0 &&
          (d = o(
            "AdsUEditorAdgroupBizAIDefaultOptInMutator",
          ).updateBizAIDefaultOptIn(
            d,
            t.bizAIEligibility,
            o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
              .BizAIDefaultOptInCallSite.CONVERGENCE_WEBSITE_DEFAULTING,
          )),
        o("AdsConvergenceAdgroupUtils").maySetPoliticalAd(
          d,
          t.specialAdCategories,
        )
      );
    }
    var c = { generateDefaultAdgroupSpec: u };
    l.default = c;
  },
  98,
);
