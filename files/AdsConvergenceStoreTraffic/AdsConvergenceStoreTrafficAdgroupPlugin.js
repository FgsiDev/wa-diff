__d(
  "AdsConvergenceStoreTrafficAdgroupPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsConvergenceAdgroupUtils",
    "AdsMutators",
    "AdsPlaceDataUtils",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "adsCallToActionGetDefaultCallToActionType",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCallToActionGetDefaultCallToActionType")(
      r("AdsAPIObjectives").STORE_VISITS,
    );
    function s(t, n) {
      var a,
        i,
        l = o("AdsConvergenceAdgroupUtils").EMPTY_SHARE_ADGROUP_RECORD,
        s =
          (a = (i = n.locationPage) == null ? void 0 : i.id) != null
            ? a
            : n.pageID;
      return o("AdsMutators").chain(
        function (n) {
          return r("AdsAdgroupSemanticFields").callToActionType.set(t, n, e);
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").pageID.set(
            t,
            e,
            s != null ? s : "",
          );
        },
        r("AdsAdgroupRecordAccessors").creative.dynamic_ad_voice.set(
          "STORY_OWNER",
        ),
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
      )(l);
    }
    function u(e, t) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.object_story_spec.template_data.force_single_link.set(
        !0,
        s(e, t),
      );
    }
    function c(t, n) {
      var a = u(t, n);
      a = r(
        "AdsAdgroupRecordAccessors",
      ).creative.object_story_spec.template_data.force_single_link.delete(a);
      var i = n.locationPage;
      if (i != null) {
        a = o("AdsConvergenceAdgroupUtils").appendCarouselChildAttachments(
          t,
          n.account,
          a,
          null,
          null,
          null,
          e,
          null,
          !0,
          null,
          1,
        );
        var l = o("AdsPlaceDataUtils").initDefaultPlaceData(i, "DYNAMIC");
        if (l == null) return a;
        var s = r("nullthrows")(
          r("AdsAdgroupSemanticFields").childAttachments.get(t, a),
        ).push(l);
        return r("AdsAdgroupSemanticFields").childAttachments.set(t, a, s);
      }
      return o("AdsConvergenceAdgroupUtils").appendCarouselChildAttachments(
        t,
        n.account,
        a,
        null,
        null,
        null,
        e,
        null,
        !0,
        null,
        o("AdsConvergenceAdgroupUtils").AdsCarouselConstants
          .MIN_CAROUSEL_ADS_CHILD_NUM,
      );
    }
    var d = {
        type: "convergenceAdgroup",
        key: "adgroup/store-traffic",
        pivots: { objective: r("AdsAPIObjectives").STORE_VISITS },
        generateDefaultAdgroupSpec: function (t, n, r) {
          var e = n.getSupportedMediaFormats({
              account: t.account,
              adgroup: o("AdsConvergenceAdgroupUtils")
                .EMPTY_SHARE_ADGROUP_RECORD,
              campaign: t.campaign,
            }),
            a;
          return (
            e.has("CAROUSEL") &&
            o("AdsConvergenceAdgroupUtils").isCarouselLastUsedFormat()
              ? (a = c(r, t))
              : (a = u(r, t)),
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
