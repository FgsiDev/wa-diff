__d(
  "AdsDynamicTargetingPackageExcludeCustomPlugin",
  [
    "AdsDynamicTargetingCategories",
    "AdsUniformValue",
    "CometPlaceholder.react",
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
        r("JSResource")(
          "AdsDynamicProspectingCustomExclusionsCard.react",
        ).__setRef("AdsDynamicTargetingPackageExcludeCustomPlugin"),
      ),
      c = {
        type: "dynamic_ads/targeting_package",
        key: "EXCLUDE_CUSTOM",
        targetingCategory: r("AdsDynamicTargetingCategories").PROSPECTING,
        shouldRender: function (t) {
          var e = t.bulkPromotedProductSet;
          return e instanceof r("AdsUniformValue");
        },
        renderCard: function (t) {
          return s.jsx(r("CometPlaceholder.react"), {
            fallback: s.jsx(r("GeoSpinner.react"), {
              center: !0,
              loggingName: i.id,
            }),
            name: i.id,
            children: s.jsx(u, babelHelpers.extends({}, t)),
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
