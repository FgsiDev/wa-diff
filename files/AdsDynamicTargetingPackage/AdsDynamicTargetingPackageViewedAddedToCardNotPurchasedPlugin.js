__d(
  "AdsDynamicTargetingPackageViewedAddedToCardNotPurchasedPlugin",
  [
    "AdsAudienceBehaviorUtils",
    "AdsDynamicTargetingCategories",
    "CometPlaceholder.react",
    "DATargetingConsolidationUtils",
    "DateConsts",
    "GeoSpinner.react",
    "JSResource",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("lazyLoadComponent")(
        r("JSResource")("AdsDynamicTargetingCard.react").__setRef(
          "AdsDynamicTargetingPackageViewedAddedToCardNotPurchasedPlugin",
        ),
      ),
      c = {
        type: "dynamic_ads/targeting_package",
        key: "VIEWED_ADDED_TO_CART_NOT_PURCHASED",
        targetingCategory: r("AdsDynamicTargetingCategories").RETARGETING,
        shouldRender: function () {
          return !0;
        },
        renderCard: function (t) {
          var e = t.bulkPromotedProductSet,
            n = t.daTargetingConsolidationCampaignType,
            a = t.hasMarketingMessagesPlacement,
            l = t.onProductAudienceFieldsChange,
            c = t.productAudienceSpecs,
            d = t.targetingType;
          return s.jsx(r("CometPlaceholder.react"), {
            fallback: s.jsx(r("GeoSpinner.react"), {
              center: !0,
              loggingName: i.id,
            }),
            name: i.id,
            children: s.jsx(u, {
              active:
                d === "VIEWED_ADDED_TO_CART_NOT_PURCHASED" &&
                !o(
                  "DATargetingConsolidationUtils",
                ).getShouldDisableDATargetingOldUI(n),
              bulkPromotedProductSet: e,
              daTargetingConsolidationCampaignType: n,
              hasMarketingMessagesPlacement: a,
              id: "VIEWED_ADDED_TO_CART_NOT_PURCHASED",
              onChange: l,
              productAudienceSpecs: c,
            }),
          });
        },
        defaultFields: [
          {
            inclusions: [
              {
                retention_seconds:
                  o("AdsAudienceBehaviorUtils")
                    .DEFAULT_RETENTION_DAYS_VIEWED_ADDED_TO_CART_NOT_PURCHASED *
                  o("DateConsts").SEC_PER_DAY,
                rule: { event: { eq: "ViewContent" } },
              },
              {
                retention_seconds:
                  o("AdsAudienceBehaviorUtils")
                    .DEFAULT_RETENTION_DAYS_VIEWED_ADDED_TO_CART_NOT_PURCHASED *
                  o("DateConsts").SEC_PER_DAY,
                rule: { event: { eq: "AddToCart" } },
              },
            ],
            exclusions: [
              {
                retention_seconds:
                  o("AdsAudienceBehaviorUtils")
                    .DEFAULT_RETENTION_DAYS_VIEWED_ADDED_TO_CART_NOT_PURCHASED *
                  o("DateConsts").SEC_PER_DAY,
                rule: { event: { eq: "Purchase" } },
              },
            ],
          },
        ],
        shouldMatchPromotedProductSet: !0,
      },
      d = c;
    l.default = d;
  },
  98,
);
