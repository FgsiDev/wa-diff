__d(
  "AdsMetadataSourceSellingPointsPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsCreativeGenAIIntentStringConstants",
    "AdsMetadataSummarySellingPointsEnums",
    "JSResource",
    "adsCreateStructuredSelector",
    "adsUEditorAdgroupSummarySellingpointsExtensionEligibilitySelector",
    "immutable",
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
        ).__setRef("AdsMetadataSourceSellingPointsPlugin"),
      ),
      c = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataSummarySellingPointsSelectedItems.react",
        ).__setRef("AdsMetadataSourceSellingPointsPlugin"),
      ),
      d = {
        key: "selling_points",
        type: "metadata/source_extension",
        preloadableJSResources: [
          r("JSResource")(
            "AdsMetadataSummarySellingPointsContainer.react",
          ).__setRef("AdsMetadataSourceSellingPointsPlugin"),
          r("JSResource")(
            "AdsMetadataSummarySellingPointsSelectedItems.react",
          ).__setRef("AdsMetadataSourceSellingPointsPlugin"),
        ],
        getHeading: function () {
          return o(
            "AdsCreativeGenAIIntentStringConstants",
          ).getSellingPointHeader();
        },
        getSubheading: function () {
          return "";
        },
        SelectedItemsComponent: function () {
          return s.jsx(c, {
            entryPoint: o("AdsMetadataSummarySellingPointsEnums")
              .SummarySellingPointsEntryPoint.SELLING_POINTS,
          });
        },
        MainComponent: function () {
          return s.jsx(u, {
            entryPoint: o("AdsMetadataSummarySellingPointsEnums")
              .SummarySellingPointsEntryPoint.SELLING_POINTS,
          });
        },
        mutateAdgroup: function (t, n) {
          var e = t,
            o = n == null ? void 0 : n.websiteSummarySpec,
            a = o == null ? void 0 : o.sellingPoints;
          if (a != null && a.size > 0) {
            var i = r("immutable").List(
              a.map(function (e) {
                return r("immutable").Map({
                  text: e.text,
                  text_format: e.text_format,
                  anchor_text: e.anchor_text,
                  category: e.category,
                  is_verbatim: e.is_verbatim,
                  metadata:
                    e.metadata != null ? r("immutable").Map(e.metadata) : null,
                });
              }),
            );
            e = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.website_summary_spec.selling_points.set(
              i,
            )(e);
            var l = o == null ? void 0 : o.pageTextSignalsAssetId;
            l != null
              ? (e = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.website_summary_spec.page_text_signals_asset_id.set(
                  l,
                )(e))
              : (e = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.website_summary_spec.page_text_signals_asset_id.delete(
                  e,
                ));
            var s = o == null ? void 0 : o.mgenaiWebsiteEntityId;
            s != null
              ? (e = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.website_summary_spec.mgenai_website_entity_id.set(
                  s,
                )(e))
              : (e = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.website_summary_spec.mgenai_website_entity_id.delete(
                  e,
                ));
          } else
            ((e = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.website_summary_spec.selling_points.delete(
              e,
            )),
              (e = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.page_text_signals_asset_id.delete(
                e,
              )),
              (e = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.mgenai_website_entity_id.delete(
                e,
              )));
          var u = o == null ? void 0 : o.is_selling_points_available;
          return (
            u != null &&
              (e = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.is_selling_points_available.set(
                u,
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
