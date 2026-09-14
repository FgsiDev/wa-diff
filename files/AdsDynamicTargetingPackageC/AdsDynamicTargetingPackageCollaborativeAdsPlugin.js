__d(
  "AdsDynamicTargetingPackageCollaborativeAdsPlugin",
  [
    "AdsAudienceBehaviorUtils",
    "AdsDynamicTargetingCategories",
    "AdsDynamicTargetingCollaborativeAdsStatusWithTooltip.react",
    "AdsDynamicTargetingTypes",
    "AdsUniformValue",
    "CometPlaceholder.react",
    "DateConsts",
    "GeoSpinner.react",
    "JSResource",
    "gkx",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("lazyLoadComponent")(
        r("JSResource")("AdsDynamicTargetingCard.react").__setRef(
          "AdsDynamicTargetingPackageCollaborativeAdsPlugin",
        ),
      ),
      c = function () {
        var e,
          t = (e = r("gkx")("13933")) != null ? e : !1;
        return t
          ? []
          : [
              {
                retention_seconds:
                  o("AdsAudienceBehaviorUtils")
                    .DEFAULT_RETENTION_DAYS_COLLABORATIVE_ADS *
                  o("DateConsts").SEC_PER_DAY,
                rule: { event: { eq: "Purchase" } },
              },
            ];
      },
      d = {
        type: "dynamic_ads/targeting_package",
        key: "COLLABORATIVE_ADS",
        targetingCategory: r("AdsDynamicTargetingCategories").RETARGETING,
        isDisabled: function (t) {
          var e, n;
          return (
            ((e = t.cpasCategoryTargetingOptions) == null
              ? void 0
              : e.enabled) !== !0 ||
            ((n = t.cpasCategoryTargetingOptions) == null
              ? void 0
              : n.eligible) !== !0
          );
        },
        shouldRender: function (t) {
          var e, n;
          return (
            (((e = t.cpasCategoryTargetingOptions) == null
              ? void 0
              : e.shouldRenderOverride) === !0 ||
              ((n = t.cpasCategoryTargetingOptions) == null
                ? void 0
                : n.enabled) === !0) &&
            t.bulkPromotedProductSet instanceof r("AdsUniformValue")
          );
        },
        renderCard: function (t) {
          var e = s.jsx(
            r("AdsDynamicTargetingCollaborativeAdsStatusWithTooltip.react"),
            { cpasCategoryTargetingOptions: t.cpasCategoryTargetingOptions },
          );
          return (
            t.targetingType ===
              r("AdsDynamicTargetingTypes").COLLABORATIVE_ADS &&
              r("gkx")("13934"),
            s.jsx(r("CometPlaceholder.react"), {
              fallback: s.jsx(r("GeoSpinner.react"), {
                center: !0,
                loggingName: i.id,
              }),
              name: i.id,
              children: s.jsx("div", {
                "data-testid": void 0,
                children: s.jsx(u, {
                  active:
                    t.targetingType ===
                    r("AdsDynamicTargetingTypes").COLLABORATIVE_ADS,
                  bulkPromotedProductSet: t.bulkPromotedProductSet,
                  content: null,
                  hasMarketingMessagesPlacement:
                    t.hasMarketingMessagesPlacement,
                  id: r("AdsDynamicTargetingTypes").COLLABORATIVE_ADS,
                  onChange: t.onProductAudienceFieldsChange,
                  productAudienceSpecs: t.productAudienceSpecs,
                  titlePopover: e,
                }),
              }),
            })
          );
        },
        defaultFields: [
          {
            inclusions: [
              {
                retention_seconds:
                  o("AdsAudienceBehaviorUtils")
                    .DEFAULT_RETENTION_DAYS_COLLABORATIVE_ADS *
                  o("DateConsts").SEC_PER_DAY,
                rule: { event: { eq: "ViewContent" } },
              },
              {
                retention_seconds:
                  o("AdsAudienceBehaviorUtils")
                    .DEFAULT_RETENTION_DAYS_COLLABORATIVE_ADS *
                  o("DateConsts").SEC_PER_DAY,
                rule: { event: { eq: "AddToCart" } },
              },
            ],
            exclusions: c(),
          },
        ],
        shouldMatchPromotedProductSet: !1,
        allowEmptyDefaultTargetProductSetID: !1,
        shouldMatchCpasCategoryProductSet: !0,
      },
      m = d;
    l.default = m;
  },
  98,
);
