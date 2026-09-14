__d(
  "AdsDynamicTargetingPackageNoExclusionPlugin",
  [
    "AdsDynamicTargetingCategories",
    "CometPlaceholder.react",
    "DATargetingConsolidationUtils",
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
          "AdsDynamicTargetingPackageNoExclusionPlugin",
        ),
      ),
      c = {
        type: "dynamic_ads/targeting_package",
        key: "NO_EXCLUSION",
        targetingCategory: r("AdsDynamicTargetingCategories").PROSPECTING,
        shouldRender: function () {
          return !0;
        },
        renderCard: function (t) {
          var e = t.daTargetingConsolidationCampaignType,
            n = t.hasMarketingMessagesPlacement,
            a = t.targetingType;
          return s.jsx(r("CometPlaceholder.react"), {
            fallback: s.jsx(r("GeoSpinner.react"), {
              center: !0,
              loggingName: i.id,
            }),
            name: i.id,
            children: s.jsx(u, {
              active:
                a === "NO_EXCLUSION" &&
                !o(
                  "DATargetingConsolidationUtils",
                ).getShouldDisableDATargetingOldUI(e),
              hasMarketingMessagesPlacement: n,
              id: "NO_EXCLUSION",
              isCustom: !0,
            }),
          });
        },
        defaultFields: [],
        shouldMatchPromotedProductSet: !1,
      },
      d = c;
    l.default = d;
  },
  98,
);
