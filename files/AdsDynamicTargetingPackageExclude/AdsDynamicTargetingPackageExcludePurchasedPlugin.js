__d(
  "AdsDynamicTargetingPackageExcludePurchasedPlugin",
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
          "AdsDynamicTargetingPackageExcludePurchasedPlugin",
        ),
      ),
      c = {
        type: "dynamic_ads/targeting_package",
        key: "EXCLUDE_PURCHASED",
        targetingCategory: r("AdsDynamicTargetingCategories").PROSPECTING,
        shouldRender: function () {
          return !0;
        },
        renderCard: function (t) {
          var e = t.account,
            n = t.bulkPromotedProductSet,
            a = t.daTargetingConsolidationCampaignType,
            l = t.hasMarketingMessagesPlacement,
            c = t.onExcludedProductAudienceFieldsChange,
            d = t.productAudienceSpecs,
            m = t.targetingType;
          return s.jsx(r("CometPlaceholder.react"), {
            fallback: s.jsx(r("GeoSpinner.react"), {
              center: !0,
              loggingName: i.id,
            }),
            name: i.id,
            children: s.jsx(u, {
              account: e,
              active:
                m === "EXCLUDE_PURCHASED" &&
                !o(
                  "DATargetingConsolidationUtils",
                ).getShouldDisableDATargetingOldUI(a),
              bulkPromotedProductSet: n,
              hasMarketingMessagesPlacement: l,
              id: "EXCLUDE_PURCHASED",
              onChange: function (t) {
                return c([t]);
              },
              productAudienceSpecs: d,
            }),
          });
        },
        defaultFields: [
          {
            inclusions: [
              {
                retention_seconds:
                  o("AdsAudienceBehaviorUtils").DEFAULT_RETENTION_DAYS *
                  o("DateConsts").SEC_PER_DAY,
                rule: { event: { eq: "Purchase" } },
              },
            ],
            exclusions: [],
          },
        ],
        shouldMatchPromotedProductSet: !0,
      },
      d = c;
    l.default = d;
  },
  98,
);
