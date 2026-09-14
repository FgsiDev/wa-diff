__d(
  "AdsDynamicTargetingPackageCrossSellPlugin",
  [
    "fbt",
    "AdsAudienceBehaviorUtils",
    "AdsBulkValueUtils",
    "AdsDynamicTargetingCategories",
    "AdsDynamicTargetingTypes",
    "AdsUniformValue",
    "CometPlaceholder.react",
    "DATargetingConsolidationUtils",
    "DateConsts",
    "GeoSpinner.react",
    "JSResource",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = r("lazyLoadComponent")(
        r("JSResource")("AdsDynamicTargetingCard.react").__setRef(
          "AdsDynamicTargetingPackageCrossSellPlugin",
        ),
      ),
      d = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsDynamicTargetingUpsellCrosssellPopover.react",
        ).__setRef("AdsDynamicTargetingPackageCrossSellPlugin"),
      ),
      m = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsProductSetSelectorWithUpsellCrosssellValidationContainer.react",
        ).__setRef("AdsDynamicTargetingPackageCrossSellPlugin"),
      );
    function p(e) {
      return u.jsxs(r("CometPlaceholder.react"), {
        fallback: u.jsx(r("GeoSpinner.react"), {
          size: "small",
          loggingName: i.id,
        }),
        name: i.id,
        children: [
          u.jsxs("div", {
            className: "x7ts22v xat24cr x1xmf6yo",
            children: [
              s._(/*BTDS*/ "Purchased products from:"),
              u.jsx(d, {
                productCatalogID: e.productCatalogID,
                targetingType: r("AdsDynamicTargetingTypes").CROSS_SELL,
              }),
            ],
          }),
          u.jsx(m, {
            onProductSetChange: e.onProductSetChange,
            productAudienceSpecs: e.productAudienceSpecs,
            productCatalogID: e.productCatalogID,
            promotedProductSet: o("AdsBulkValueUtils").getUniformValue(
              e.bulkPromotedProductSet,
              null,
            ),
            targetingType: e.targetingType,
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = {
        type: "dynamic_ads/targeting_package",
        key: "CROSS_SELL",
        targetingCategory: r("AdsDynamicTargetingCategories").RETARGETING,
        shouldRender: function (t) {
          var e = t.bulkPromotedProductSet;
          return e instanceof r("AdsUniformValue");
        },
        renderCard: function (t) {
          return u.jsx(r("CometPlaceholder.react"), {
            fallback: u.jsx(r("GeoSpinner.react"), {
              center: !0,
              loggingName: i.id,
            }),
            name: i.id,
            children: u.jsx(c, {
              active:
                t.targetingType === "CROSS_SELL" &&
                !o(
                  "DATargetingConsolidationUtils",
                ).getShouldDisableDATargetingOldUI(
                  t.daTargetingConsolidationCampaignType,
                ),
              bulkPromotedProductSet: t.bulkPromotedProductSet,
              content: u.jsx(p, babelHelpers.extends({}, t)),
              daTargetingConsolidationCampaignType:
                t.daTargetingConsolidationCampaignType,
              hasMarketingMessagesPlacement: t.hasMarketingMessagesPlacement,
              id: "CROSS_SELL",
              onChange: t.onProductAudienceFieldsChange,
              productAudienceSpecs: t.productAudienceSpecs,
            }),
          });
        },
        defaultFields: [
          {
            inclusions: [
              {
                retention_seconds:
                  o("AdsAudienceBehaviorUtils")
                    .DEFAULT_RETENTION_DAYS_CROSS_SELL *
                  o("DateConsts").SEC_PER_DAY,
                rule: { event: { eq: "Purchase" } },
              },
            ],
            exclusions: [],
          },
        ],
        shouldMatchPromotedProductSet: !1,
        allowEmptyDefaultTargetProductSetID: !0,
      },
      f = _;
    l.default = f;
  },
  226,
);
