__d(
  "AdsMetadataSourcePromotionPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMetadataWebsiteSourceItemTypes",
    "JSResource",
    "adsCreateStructuredSelector",
    "adsUEditorAdgroupConnectedSourcesPromoEligibilitySelector",
    "immutable",
    "isTruthy",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataWebsitePromotionContainer.react").__setRef(
          "AdsMetadataSourcePromotionPlugin",
        ),
      ),
      c = {
        key: "promotions",
        type: "metadata/source_extension",
        getHeading: function () {
          return "";
        },
        getSubheading: function () {
          return "";
        },
        visibilityDataSelector: r("adsCreateStructuredSelector")(
          {
            isEligible: o(
              "adsUEditorAdgroupConnectedSourcesPromoEligibilitySelector",
            ).adsUEditorAdgroupConnectedSourcesPromoEligibilitySelector,
          },
          i.id + ".visibilityDataSelector",
        ),
        isVisible: function (t) {
          var e = t.isEligible;
          return e;
        },
        MainComponent: function () {
          return s.jsx(u, {});
        },
        mutateAdgroup: function (t, n) {
          var e = t,
            a = n == null ? void 0 : n.promotions;
          if (a != null) {
            var i = o("immutable").List(
              Array.from(a.values()).map(function (e) {
                return o("immutable").Map({
                  promotion_value: e.promotion_value,
                  promotion_type: e.promotion_type,
                  required_code: e.required_code,
                  id: e.id,
                  start_date: r("isTruthy")(e.start_date) ? e.start_date : null,
                  end_date: r("isTruthy")(e.end_date) ? e.end_date : null,
                  promotion_source: e.promotion_source,
                });
              }),
            );
            e = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.promotion_metadata_spec.set(i)(t);
          } else
            e = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.promotion_metadata_spec.delete(e);
          return e;
        },
        getInitialStateFromAdgroup: function (t) {
          var e,
            n =
              (e = t.creative) == null || (e = e.creative_sourcing_spec) == null
                ? void 0
                : e.promotion_metadata_spec;
          if (n == null) return { promotions: null };
          var r = new Map(
            n.map(function (e) {
              return [
                o("AdsMetadataWebsiteSourceItemTypes").getPromotionItemKey(e),
                e,
              ];
            }),
          );
          return { promotions: r };
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
