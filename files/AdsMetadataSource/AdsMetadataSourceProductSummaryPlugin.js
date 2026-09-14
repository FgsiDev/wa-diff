__d(
  "AdsMetadataSourceProductSummaryPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsCreativeGenAIIntentStringConstants",
    "AdsMetadataSummarySellingPointsEnums",
    "JSResource",
    "adsCreateStructuredSelector",
    "adsUEditorAdgroupSummarySellingpointsExtensionEligibilitySelector",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataSummarySellingPointsContainer.react",
        ).__setRef("AdsMetadataSourceProductSummaryPlugin"),
      ),
      c = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataSummarySellingPointsSelectedItems.react",
        ).__setRef("AdsMetadataSourceProductSummaryPlugin"),
      ),
      d = {
        key: "product_summary",
        type: "metadata/source_extension",
        preloadableJSResources: [
          r("JSResource")(
            "AdsMetadataSummarySellingPointsContainer.react",
          ).__setRef("AdsMetadataSourceProductSummaryPlugin"),
          r("JSResource")(
            "AdsMetadataSummarySellingPointsSelectedItems.react",
          ).__setRef("AdsMetadataSourceProductSummaryPlugin"),
        ],
        getHeading: function () {
          return o(
            "AdsCreativeGenAIIntentStringConstants",
          ).getProductSummaryHeader();
        },
        getSubheading: function () {
          return "";
        },
        SelectedItemsComponent: function () {
          return s.jsx(c, {
            entryPoint: o("AdsMetadataSummarySellingPointsEnums")
              .SummarySellingPointsEntryPoint.PRODUCT_SUMMARY,
          });
        },
        MainComponent: function () {
          return s.jsx(u, {
            entryPoint: o("AdsMetadataSummarySellingPointsEnums")
              .SummarySellingPointsEntryPoint.PRODUCT_SUMMARY,
          });
        },
        mutateAdgroup: function (t, n) {
          var e = t,
            o = n == null ? void 0 : n.websiteSummarySpec,
            a = o == null ? void 0 : o.summaryText;
          a != null
            ? (e = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.summary_text.set(
                a,
              )(e))
            : (e = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.summary_text.delete(
                e,
              ));
          var i = o == null ? void 0 : o.is_summary_text_available;
          return (
            i != null &&
              (e = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.is_summary_text_available.set(
                i,
              )(e)),
            e
          );
        },
        visibilityDataSelector: r("adsCreateStructuredSelector")(
          {
            isEligible: o(
              "adsUEditorAdgroupSummarySellingpointsExtensionEligibilitySelector",
            ).adsUEditorAdgroupSummarySellingpointsExtensionEligibilitySelector,
          },
          i.id + ".visibilityDataSelector",
        ),
        isVisible: function (t) {
          var e = t.isEligible;
          return e;
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
