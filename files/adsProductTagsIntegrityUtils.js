__d(
  "adsProductTagsIntegrityUtils",
  [
    "XCommerceManagerItemsPageControllerRouteBuilder",
    "XCommerceManagerOverviewCatalogHomePageControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["da", "mini_shops"];
    function s(t) {
      var n = t.channels_to_integrity_status;
      return (
        n == null ||
        !n.data.some(function (t) {
          var n = t.channels,
            r = t.integrity_review_status;
          return (
            r === "rejected" &&
            e.some(function (e) {
              return n.includes(e);
            })
          );
        })
      );
    }
    function u(e) {
      return r(
        "XCommerceManagerOverviewCatalogHomePageControllerRouteBuilder",
      ).buildUri({ catalog_or_cms_id: e });
    }
    function c(e, t) {
      var n = [
        { operator: "EQUAL", property: "retailer_id", plainText: "", value: t },
      ];
      return r("XCommerceManagerItemsPageControllerRouteBuilder").buildUri({
        catalog_id: e,
        facets: JSON.stringify(n),
        tab: "all",
      });
    }
    ((l.CAPABILITIES = e),
      (l.eligibleForTagging = s),
      (l.makeCommerceManagerCatalogUri = u),
      (l.makeCommerceManagerProductsUri = c));
  },
  98,
);
