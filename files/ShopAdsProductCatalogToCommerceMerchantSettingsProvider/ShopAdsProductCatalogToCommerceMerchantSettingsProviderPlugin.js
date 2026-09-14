__d(
  "ShopAdsProductCatalogToCommerceMerchantSettingsProviderPlugin",
  [
    "AdsGraphAPI",
    "AdsUEditorCrossChannelShopsAdsCommon",
    "LoadObjectMap",
    "QuickPerformanceLogger",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("qpl")._(390730007, "2411"),
      u = {
        initialState: function (n) {
          return r("LoadObjectMap").create(function (t) {
            (n(function (e) {
              return e.setLoading(t);
            }),
              (e || (e = r("QuickPerformanceLogger"))).markerStart(s),
              c(t, n));
          });
        },
      };
    function c(t, n) {
      r("promiseDone")(
        r("promiseLoadObjectsFromKeys")(t, function (e) {
          return o("AdsGraphAPI")
            .get(i.id)
            .object("product_catalog", e)
            .get({
              fields: o("AdsUEditorCrossChannelShopsAdsCommon")
                .PRODUCT_CATALOG_FIELDS,
            });
        }),
        function (t) {
          return (
            (e || (e = r("QuickPerformanceLogger"))).markerEnd(s, 2),
            n(function (e) {
              return e.merge(t);
            })
          );
        },
        function (t) {
          return (
            (e || (e = r("QuickPerformanceLogger"))).markerEnd(s, 87),
            n(function (e) {
              return e.merge(t);
            })
          );
        },
      );
    }
    var d = u;
    l.default = d;
  },
  98,
);
