__d(
  "AdsMetadataSourceBrandPlugin",
  [
    "AdsConnectedSourcesFbt",
    "AdsMetadataBrandLoadingState.react",
    "JSResource",
    "adsCreateStructuredSelector",
    "adsUEditorAdgroupConnectedSourcesBrandEligibilitySelector",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataBrandContainer.react").__setRef(
          "AdsMetadataSourceBrandPlugin",
        ),
      ),
      c = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataBrandSelectedItemsContainer.react",
        ).__setRef("AdsMetadataSourceBrandPlugin"),
      ),
      d = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataBrandOptInBadge.react").__setRef(
          "AdsMetadataSourceBrandPlugin",
        ),
      ),
      m = {
        key: "brand",
        type: "metadata/source_extension",
        preloadableJSResources: [
          r("JSResource")("AdsMetadataBrandContainer.react").__setRef(
            "AdsMetadataSourceBrandPlugin",
          ),
          r("JSResource")(
            "AdsMetadataBrandSelectedItemsContainer.react",
          ).__setRef("AdsMetadataSourceBrandPlugin"),
          r("JSResource")("AdsMetadataBrandOptInBadge.react").__setRef(
            "AdsMetadataSourceBrandPlugin",
          ),
        ],
        getHeading: o("AdsConnectedSourcesFbt").getBrandingHeading,
        getSubheading: o("AdsConnectedSourcesFbt").BRANDING_DESCRIPTION,
        getSortOrder: function () {
          return 3;
        },
        iconURI: "/images/ads/ads_manager/metadata/Palette-Icon.svg",
        visibilityDataSelector: r("adsCreateStructuredSelector")(
          {
            isEligible: o(
              "adsUEditorAdgroupConnectedSourcesBrandEligibilitySelector",
            ).adsUEditorAdgroupConnectedSourcesBrandEligibilitySelector,
          },
          i.id + ".visibilityDataSelector",
        ),
        isVisible: function (t) {
          var e = t.isEligible;
          return e;
        },
        MainComponent: function () {
          return s.jsx(u, { source: "creative_wizard" });
        },
        LoadingPlaceholder: function () {
          return s.jsx(r("AdsMetadataBrandLoadingState.react"), {});
        },
        SelectedItemsComponent: function () {
          return s.jsx(c, {});
        },
        OptInComponent: function () {
          return s.jsx(d, {});
        },
      },
      p = m;
    l.default = p;
  },
  98,
);
