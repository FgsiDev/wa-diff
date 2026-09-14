__d(
  "ProductCatalogAPIClient",
  [
    "AdsCatalogSelectorOptimisationUtils",
    "AdsGraphAPI",
    "AdsUniqueCatalogPreloadingUtils",
    "CatalogBusinessEventsLoggerHelper",
    "CatalogDataManagerPreloader",
    "CatalogUnreadableIDCache",
    "ProductCatalogAPIReadOnlyClient",
    "ProductFeedLatestUploadFields",
    "ProductSetAPIClient",
    "Promise",
    "first",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 100;
    function u(e) {
      var t = e.availability,
        n = e.inventory;
      return typeof n == "number"
        ? null
        : t === "in stock"
          ? s
          : t === "out of stock"
            ? 0
            : null;
    }
    function c() {
      o("AdsGraphAPI").getVersion() === "14.0" &&
        r("CatalogBusinessEventsLoggerHelper")
          .getLogger()
          .setEvent("commerce_manager_using_outdated_version")
          .log();
    }
    function d(e) {
      var t = e.get("inventory"),
        n = e.get("availability"),
        r = u({
          availability: n && typeof n == "string" ? n : null,
          inventory: t ? parseInt(t, 10) : null,
        });
      return (r == null || e.set("inventory", "" + r), e);
    }
    var m = function (t, n) {
      var e = window.location.href,
        r = e.includes("/catalogs/" + t);
      return o("ProductCatalogAPIReadOnlyClient").loadWithFields(
        t,
        n,
        function (e) {
          return r
            ? e.preloadedBy(
                o("CatalogDataManagerPreloader").preloader,
                o("AdsUniqueCatalogPreloadingUtils").defaultConfig,
              )
            : e;
        },
      );
    };
    function p(e) {
      var n = new t.FormData();
      return (
        Object.entries(e).forEach(function (e) {
          var t = e[0],
            r = e[1];
          r &&
            (r instanceof File
              ? n.append(t, r)
              : r instanceof Object
                ? n.append(t, JSON.stringify(r))
                : n.append(t, r));
        }),
        c(),
        o("AdsGraphAPI").get(i.id).me().edge("product_catalogs").post(n)
      );
    }
    function _(e, t) {
      return (
        c(),
        o("AdsGraphAPI")
          .get(i.id)
          .object("product_catalog", e)
          .edge("product_sets")
          .post(t)
      );
    }
    function f(e, t) {
      return (
        c(),
        o("AdsGraphAPI")
          .get(i.id)
          .object("product_set", e)
          .edge("augmented_reality")
          .post({ enable: t })
      );
    }
    function g(e) {
      return (
        c(),
        o("CatalogUnreadableIDCache").guardCatalogRead(e, function () {
          return o("AdsGraphAPI")
            .get(i.id)
            .object("product_catalog", e)
            .batched()
            .get({ fields: "product_count", limit: 1 })
            .then(function (e) {
              return e.product_count;
            });
        })
      );
    }
    function h(t, r, o, a) {
      var i = r
        ? [{ field: "product_count", operator: "GREATER_THAN", value: 0 }]
        : [];
      o === !0
        ? a === "AMAZON"
          ? i.push({
              field: "amazon_buy_with_prime_eligibility",
              operator: "EQUAL",
              value: "ELIGIBLE",
            })
          : i.push({
              field: "integrated_checkout_eligibility",
              operator: "EQUAL",
              value: "ELIGIBLE",
            })
        : (i.push({
            field: "amazon_buy_with_prime_eligibility",
            operator: "NOT_EQUAL",
            value: "ELIGIBLE",
          }),
          i.push({
            field: "integrated_checkout_eligibility",
            operator: "NOT_EQUAL",
            value: "ELIGIBLE",
          }));
      var l = C(t, i);
      return (e || (e = n("Promise"))).resolve(l).then(function (e) {
        return e != null ? e : C(t, []);
      });
    }
    function y(e) {
      return (
        c(),
        g(e).then(
          function (t) {
            var n = [
              {
                field: "product_count",
                operator: "GREATER_THAN",
                value: t - 1,
              },
            ];
            return o("CatalogUnreadableIDCache").guardCatalogRead(
              e,
              function () {
                return o("AdsGraphAPI")
                  .get(i.id)
                  .object("product_catalog", e)
                  .edge("product_sets")
                  .batched()
                  .get({
                    fields: r("ProductSetAPIClient").getProductSetFields(),
                    filtering: n,
                    limit: 1,
                    sort: "creation_time_ascending",
                  })
                  .then(function (e) {
                    var t = r("first")(e.data);
                    return t != null
                      ? r("ProductSetAPIClient").createProductSetFromResponse(t)
                      : null;
                  });
              },
            );
          },
          function (e) {
            return null;
          },
        )
      );
    }
    function C(e, t) {
      return (
        c(),
        o("CatalogUnreadableIDCache").guardCatalogRead(e, function () {
          var n = o("AdsGraphAPI")
            .get(i.id)
            .object("product_catalog", e)
            .edge("product_sets");
          return (
            o(
              "AdsCatalogSelectorOptimisationUtils",
            ).isCatalogPreloadOptimisationEnabled() || (n = n.batched()),
            n
              .get({
                fields: r("ProductSetAPIClient").getProductSetFields(),
                filtering: t,
                limit: 1,
                sort: "creation_time_ascending",
              })
              .then(function (e) {
                var t = r("first")(e.data);
                return t != null
                  ? r("ProductSetAPIClient").createProductSetFromResponse(t)
                  : null;
              })
          );
        })
      );
    }
    function b(e, t) {
      return (
        c(),
        o("AdsGraphAPI")
          .get(i.id)
          .object("product_feed", e)
          .edge("uploads")
          .post(
            babelHelpers.extends({}, t, {
              fields: r("ProductFeedLatestUploadFields"),
            }),
          )
      );
    }
    function v(t) {
      return (
        c(),
        (e || (e = n("Promise"))).all(
          t.map(function (e) {
            return o("AdsGraphAPI")
              .get(i.id)
              .object("product_catalog", e)
              .post({ postpone_stale_deletion: !0 });
          }),
        )
      );
    }
    function S(e, t) {
      return (
        c(),
        o("AdsGraphAPI")
          .get(i.id)
          .object("product_catalog", e)
          .edge("products")
          .post(d(t))
      );
    }
    function R(e, t) {
      return (
        c(),
        o("AdsGraphAPI")
          .get(i.id)
          .object("product_catalog", e)
          .edge("product_groups")
          .post(t)
      );
    }
    var L = {
        DEFAULT_INVENTORY: s,
        createCatalog: p,
        createDynamicItemFromFormData: S,
        createProductGroup: R,
        createProductSet: _,
        enableProductSetARUsage: f,
        fetchAllProductsProductSetWithEdge: y,
        fetchOldestProductSet: h,
        getInventoryOverride: u,
        loadWithFields: m,
        preventDeleteOfMultipleStaleCatalogs: v,
        uploadFeed: b,
      },
      E = L;
    l.default = E;
  },
  98,
);
