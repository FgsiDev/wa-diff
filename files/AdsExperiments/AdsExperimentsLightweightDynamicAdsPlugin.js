__d(
  "AdsExperimentsLightweightDynamicAdsPlugin",
  [
    "fbt",
    "AdsExperimentsLightweightTestEligibilityErrorMessagesUtils",
    "AutomationRenamingConstants$FbtEnum",
    "FBLogger",
    "JSResource",
    "MarketingMessagesCampaignCategoryUtils",
    "adsExperimentsIsCampaignMultiAdgroup",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = r("JSResource")(
        "adsExperimentsLightweightTestDynamicAdsMutator",
      ).__setRef("AdsExperimentsLightweightDynamicAdsPlugin");
    u.preload();
    var c = {
      getAdObjectLevel: function () {
        return "ad";
      },
      eligibilityConfig: r("immutable").Map({
        opt_in_l1_dynamic_ads: {
          errorMessage: (e = o(
            "AdsExperimentsLightweightTestEligibilityErrorMessagesUtils",
          )).getOptInL2TestErrorMessage,
          getIneligibleData: d,
          isRecoverable: !1,
          isPublishOnlyCheck: !1,
        },
        opt_in_l2_dynamic_creative: {
          errorMessage: e.getOptInL2TestErrorMessage,
          getIneligibleData: m,
          isRecoverable: !1,
          isPublishOnlyCheck: !1,
        },
        opt_in_l3_dynamic_ads: {
          errorMessage: e.getOptInL2TestErrorMessage,
          getIneligibleData: p,
          isRecoverable: !1,
          isPublishOnlyCheck: !1,
        },
        non_skinny_ad_set: {
          errorMessage: e.getOptInL2TestErrorMessage,
          getIneligibleData: _,
          isRecoverable: !1,
          isPublishOnlyCheck: !1,
        },
        message_marketing_only: {
          errorMessage: g,
          getIneligibleData: f,
          isRecoverable: !1,
          isPublishOnlyCheck: !1,
        },
      }),
      getEntryDescriptionContent: function () {
        return s._(
          /*BTDS*/ "Run an A\/B test with your existing budget to see how using your catalog can impact performance.",
        );
      },
      getLoggingEntryPoint: function () {
        return "LightweightCheckboxDynamicAds";
      },
      hasOptInUXSupportForAdObjectTestRecovery: !1,
      inputOptionsConfig: {
        getComponent: function () {
          return r("JSResource")(
            "AdsExperimentsLightweightCatalogAdsCustomInputContainer.react",
          ).__setRef("AdsExperimentsLightweightDynamicAdsPlugin");
        },
      },
      isVisibleForAdvertiser: function () {
        return !0;
      },
      key: "DYNAMIC_ADS",
      mutationConfig: {
        getAdgroupMutator: function (t, n, o) {
          var e = o.adAccountLoader,
            a = o.getPage,
            i = o.isShopAdsBundleAvailable,
            l = o.parentData,
            s = u.getModuleIfRequireable();
          return s == null
            ? (r("FBLogger")(
                "ads_experiments",
                "AdsExperimentsLightweightDynamicAdsPlugin",
              ).mustfix(
                "expected adsExperimentsLightweightTestDynamicAdsMutator to be available for mutation but was not",
              ),
              t)
            : s(t, n, {
                adAccountLoader: e,
                parentData: l,
                getPage: a,
                isShopAdsBundleAvailable: i,
              });
        },
        hasClientSideMutation: function () {
          return !0;
        },
      },
      getName: function () {
        return s._(/*BTDS*/ "{featureName}", [
          s._param(
            "featureName",
            r("AutomationRenamingConstants$FbtEnum").DynamicAds,
          ),
        ]);
      },
      shouldShowDetailThumbnails: !0,
      type: "lightweightABTest",
    };
    function d(e) {
      var t,
        n = e.adgroup;
      if (
        (n == null || (t = n.creative) == null ? void 0 : t.product_set_id) !=
        null
      )
        return { adgroupIDs: new Set([n.id]) };
    }
    function m(e) {
      var t = e.campaign;
      if ((t == null ? void 0 : t.is_dynamic_creative) === !0)
        return { campaignIDs: new Set([t.id]) };
    }
    function p(e) {
      var t,
        n = e.campaignGroup;
      if (
        (n == null || (t = n.promoted_object) == null
          ? void 0
          : t.product_catalog_id) != null
      )
        return { campaignGroupID: n.id };
    }
    function _(e, t) {
      var n = e.adgroup,
        o = e.campaign;
      return (o == null ? void 0 : o.id) == null ||
        (t == null ? void 0 : t.adAccount) == null
        ? null
        : r("adsExperimentsIsCampaignMultiAdgroup")(o.id, t.adAccount)
            .mapValue(function (e) {
              if (e && (n == null ? void 0 : n.id) != null)
                return { adgroupIDs: new Set([n == null ? void 0 : n.id]) };
            })
            .getValue();
    }
    function f(e) {
      var t = e.campaign;
      if (t == null) return null;
      if (
        o(
          "MarketingMessagesCampaignCategoryUtils",
        ).isMarketingMessagesOnlyFromCampaignTargeting(t)
      )
        return { campaignIDs: new Set([t.id]) };
    }
    function g() {
      return s._(
        /*BTDS*/ "A\/B testing isn't available when marketing messages is the only placement. If you'd like to use A\/B testing, turn on at least one ad placement.",
      );
    }
    var h = c;
    l.default = h;
  },
  226,
);
