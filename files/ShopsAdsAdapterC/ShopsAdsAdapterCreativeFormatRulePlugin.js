__d(
  "ShopsAdsAdapterCreativeFormatRulePlugin",
  [
    "AdsSAIPBlockingAdgroupIncompatibilityValidators",
    "AdsUEditorAdgroupDynamicCarouselMutators",
    "AdsUEditorAdgroupShopsAdsMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_adgroup_rule",
        key: "shops_ads_creative_format_rule",
        isCompatible: function (t) {
          return o(
            "AdsSAIPBlockingAdgroupIncompatibilityValidators",
          ).getL1AdFormatValidationError(t);
        },
        pivots: { ruleType: "shops_ads_creative_format_rule" },
        transform: function (t, n) {
          var e,
            r = n.campaign,
            a = n.campaignGroup,
            i = n.defaultProductSetID,
            l = n.defaultProductSetVertical,
            s = n.effectiveObjective,
            u = n.getPage,
            c = n.hostID,
            d = n.isShopAdsBundleAvailable,
            m = n.isShopsAdsIncentiveProgram,
            p = n.linkPostFormat,
            _ = n.remindersAdsDefaultEnabled,
            f = n.selectedLinkType,
            g = n.specPlugin;
          if (!m) return t;
          var h =
              (e = t.creative) == null || (e = e.asset_feed_spec) == null
                ? void 0
                : e.optimization_type,
            y = o(
              "AdsUEditorAdgroupShopsAdsMutators",
            ).shouldUpdateLinkPostFormatToCarousel(p, s, h),
            C = o(
              "AdsUEditorAdgroupShopsAdsMutators",
            ).maybeTransformFromTemplateToLinkData(t, r, a, s, p);
          return (
            y &&
              ((C = o(
                "AdsUEditorAdgroupShopsAdsMutators",
              ).setLinkPostCarouselFormat(C, c, f, _, r, a)),
              (C = o(
                "AdsUEditorAdgroupDynamicCarouselMutators",
              ).transformStaticToDynamicCarouselMedia(
                C,
                { campaignGroup: a, campaign: r },
                g,
                null,
                i.getValue(),
                l.getValue(),
                d,
                u,
              ))),
            C
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
