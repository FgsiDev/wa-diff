__d(
  "AdsConvergenceLeadGenerationAdgroupPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "AdsConvergenceAdgroupUtils",
    "AdsCreativeFormatMutatorUtils",
    "AdsMutators",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "adsConvergenceDefaultAdgroupImage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "SIGN_UP";
    function s(t, n) {
      return o("AdsMutators").chain(
        function (n) {
          return r("AdsAdgroupSemanticFields").callToActionType.set(t, n, e);
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").linkURL.set(
            t,
            e,
            "http://fb.me",
          );
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").pageID.set(t, e, n.pageID);
        },
        function (e) {
          var t, r, a, i;
          return o(
            "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
          ).updateContextualDiscoveryAdsEligibilitySpec(e, {
            shouldOptIn:
              ((t = n.contextualDiscoveryAdsEligibilityState) == null
                ? void 0
                : t.shouldOptIn) === !0,
            shouldRenderCheckbox:
              n == null ||
              (r = n.contextualDiscoveryAdsEligibilityState) == null
                ? void 0
                : r.shouldRenderCheckbox,
            isExplicitOptOut:
              n == null ||
              (a = n.contextualDiscoveryAdsEligibilityState) == null
                ? void 0
                : a.isExplicitOptOut,
            actionMetadataType:
              (i = n.contextualDiscoveryAdsEligibilityState) == null
                ? void 0
                : i.actionMetadataType,
          });
        },
        function (e) {
          return o("AdsCreativeFormatMutatorUtils").mutateCreativeFormat(
            e,
            "SingleLink",
          );
        },
      )(o("AdsConvergenceAdgroupUtils").EMPTY_SHARE_ADGROUP_RECORD);
    }
    function u(t, n) {
      return o("AdsConvergenceAdgroupUtils").appendCarouselChildAttachments(
        t,
        n.account,
        s(t, n),
        "http://fb.me",
        null,
        null,
        e,
        null,
      );
    }
    function c(e, t) {
      var n = s(e, t);
      return r("adsConvergenceDefaultAdgroupImage")(n, e, t.pageDestination);
    }
    var d = {
        type: "convergenceAdgroup",
        key: "adgroup/leadgen",
        pivots: { objective: r("AdsAPIObjectives").LEAD_GENERATION },
        generateDefaultAdgroupSpec: function (t, n, r) {
          var e = n.getSupportedMediaFormats({
              account: t.account,
              adgroup: o("AdsConvergenceAdgroupUtils")
                .EMPTY_ADGROUP_WITH_OBJECT_STORY_SPEC,
              campaign: t.campaign,
            }),
            a;
          return (
            e.has("CAROUSEL") &&
            o("AdsConvergenceAdgroupUtils").isCarouselLastUsedFormat()
              ? (a = u(r, t))
              : (a = c(r, t)),
            (a = o("AdsConvergenceAdgroupUtils").maybeEnableAutoflow(a, t)),
            o("AdsConvergenceAdgroupUtils").maySetPoliticalAd(
              a,
              t.specialAdCategories,
            )
          );
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
