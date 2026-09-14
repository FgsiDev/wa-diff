__d(
  "AdsDynamicTargetingPackageUpsellPlugin",
  [
    "fbt",
    "AdsAudienceBehaviorUtils",
    "AdsBulkValueUtils",
    "AdsDynamicTargetingCategories",
    "AdsDynamicTargetingTypes",
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
          "AdsDynamicTargetingPackageUpsellPlugin",
        ),
      ),
      d = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsDynamicTargetingUpsellCrosssellPopover.react",
        ).__setRef("AdsDynamicTargetingPackageUpsellPlugin"),
      ),
      m = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsProductSetSelectorWithUpsellCrosssellValidationContainer.react",
        ).__setRef("AdsDynamicTargetingPackageUpsellPlugin"),
      ),
      p = {
        type: "dynamic_ads/targeting_package",
        key: "UP_SELL",
        targetingCategory: r("AdsDynamicTargetingCategories").RETARGETING,
        shouldRender: function () {
          return !0;
        },
        renderCard: function (t) {
          var e = t.bulkPromotedProductSet,
            n = t.daTargetingConsolidationCampaignType,
            a = t.hasMarketingMessagesPlacement,
            l = t.onProductAudienceFieldsChange,
            p = t.onProductSetChange,
            _ = t.productAudienceSpecs,
            f = t.productCatalogID,
            g = t.targetingType,
            h = s._(/*BTDS*/ "Viewed or added products to cart from:");
          return u.jsx(r("CometPlaceholder.react"), {
            fallback: u.jsx(r("GeoSpinner.react"), {
              center: !0,
              loggingName: i.id,
            }),
            name: i.id,
            children: u.jsx(c, {
              active:
                g === "UP_SELL" &&
                !o(
                  "DATargetingConsolidationUtils",
                ).getShouldDisableDATargetingOldUI(n),
              bulkPromotedProductSet: e,
              content: u.jsxs(r("CometPlaceholder.react"), {
                fallback: u.jsx(r("GeoSpinner.react"), {
                  size: "small",
                  loggingName: i.id,
                }),
                name: i.id,
                children: [
                  u.jsxs("div", {
                    className: "x7ts22v xat24cr x1xmf6yo",
                    children: [
                      h,
                      u.jsx(d, {
                        productCatalogID: f,
                        targetingType: r("AdsDynamicTargetingTypes").UP_SELL,
                      }),
                    ],
                  }),
                  u.jsx(m, {
                    onProductSetChange: p,
                    productAudienceSpecs: _,
                    productCatalogID: f,
                    promotedProductSet: o("AdsBulkValueUtils").getUniformValue(
                      e,
                      null,
                    ),
                    targetingType: g,
                  }),
                ],
              }),
              daTargetingConsolidationCampaignType: n,
              hasMarketingMessagesPlacement: a,
              id: "UP_SELL",
              onChange: l,
              productAudienceSpecs: _,
            }),
          });
        },
        defaultFields: [
          {
            inclusions: [
              {
                retention_seconds:
                  o("AdsAudienceBehaviorUtils").DEFAULT_RETENTION_DAYS_UP_SELL *
                  o("DateConsts").SEC_PER_DAY,
                rule: { event: { eq: "ViewContent" } },
              },
              {
                retention_seconds:
                  o("AdsAudienceBehaviorUtils").DEFAULT_RETENTION_DAYS_UP_SELL *
                  o("DateConsts").SEC_PER_DAY,
                rule: { event: { eq: "AddToCart" } },
              },
            ],
            exclusions: [
              {
                retention_seconds:
                  o("AdsAudienceBehaviorUtils").DEFAULT_RETENTION_DAYS_UP_SELL *
                  o("DateConsts").SEC_PER_DAY,
                rule: { event: { eq: "Purchase" } },
              },
            ],
          },
        ],
        shouldMatchPromotedProductSet: !1,
        allowEmptyDefaultTargetProductSetID: !0,
      },
      _ = p;
    l.default = _;
  },
  226,
);
