__d(
  "AdsProductSetDataManager",
  [
    "fbt",
    "AdsBaseDataManager",
    "AdsGraphAPI",
    "AdsInterfacesLogger",
    "AdsProductSetBatchCreateErrorDataAction",
    "AdsProductSetBatchDeleteErrorDataAction",
    "AdsProductSetBatchDeletedDataAction",
    "AdsProductSetBatchLoadErrorDataAction",
    "AdsProductSetBatchLoadedDataAction",
    "AdsUEditorCampaignProductSetBatchCreatedAction",
    "AdsUEditorHostIDs",
    "ProductCatalogAPIClient",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [
        "filter",
        "name",
        "capability",
        "cpas_category_product_set_id",
        "product_catalog{vertical}",
      ],
      u = e.filter(function (e) {
        return e !== "product_count";
      }),
      c = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.loadAll = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.load(t);
            });
          }),
          (a.load = function (n) {
            var t = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("product_set", n)
                .batched()
                .get({ fields: e }),
              function (e) {
                return t.__handleSuccess(["load"], n, null, e);
              },
              function (e) {
                return t.__reloadWithoutProductSearch(["load"], n, null, e);
              },
            );
          }),
          (a.__reloadWithoutProductSearch = function (t, n, a, l) {
            var e = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("product_set", n)
                .batched()
                .get({ fields: u }),
              function (r) {
                return e.__handleSuccess(t, n, a, r);
              },
              function (r) {
                return e.__handleError(t, n, a, r);
              },
            );
          }),
          (a.createProductSetsForProductCatalog = function (t, n, o) {
            var e = this;
            (r("AdsInterfacesLogger").log({
              eventCategory: "user_action",
              eventName: "product_set_create_started",
            }),
              n.forEach(function (n) {
                r("promiseDone")(
                  r("ProductCatalogAPIClient").createProductSet(t, n),
                  function (r) {
                    return e.__handleSuccess(
                      ["create"],
                      n.tempID,
                      null,
                      babelHelpers.extends({}, r, {
                        productCatalogID: t,
                        source: o,
                        name: n.name,
                        isSuggested: n.isSuggested,
                      }),
                    );
                  },
                  function (r) {
                    ((r.productCatalogID = t),
                      e.__handleError(["create"], n.tempID, null, r));
                  },
                );
              }));
          }),
          (a.deleteProductSetsForProductCatalog = function (t, n) {
            var e = this;
            n.forEach(function (n) {
              r("promiseDone")(
                o("AdsGraphAPI")
                  .get(i.id)
                  .object("product_set", n)
                  .batched()
                  .remove({ allow_live_product_set_deletion: !0 }),
                function (r) {
                  return e.__handleSuccess(
                    ["delete"],
                    n,
                    null,
                    babelHelpers.extends({}, r, { productCatalogID: t }),
                  );
                },
                function (r) {
                  ((r.productCatalogID = t),
                    e.__handleError(["delete"], n, null, r));
                },
              );
            });
          }),
          (a.__onBatchDeleted = function (t) {
            var e = t.values().next().value;
            e &&
              r("AdsProductSetBatchDeletedDataAction").dispatch(
                { productCatalogID: e.productCatalogID },
                {
                  line: "140",
                  module: "AdsProductSetDataManager.js",
                  moduleID: i.id,
                },
              );
          }),
          (a.__onBatchDeleteError = function (t) {
            r("AdsProductSetBatchDeleteErrorDataAction").dispatch(
              { errors: t },
              {
                line: "146",
                module: "AdsProductSetDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoaded = function (t) {
            r("AdsProductSetBatchLoadedDataAction").dispatch(
              { productSets: t },
              {
                line: "152",
                module: "AdsProductSetDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoadError = function (t) {
            r("AdsProductSetBatchLoadErrorDataAction").dispatch(
              { errors: t },
              {
                line: "158",
                module: "AdsProductSetDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchCreated = function (t) {
            r("AdsInterfacesLogger").log({
              eventName: "product_set_create_completed",
            });
            var e = t.values().next().value;
            e &&
              r("AdsUEditorCampaignProductSetBatchCreatedAction").dispatch(
                {
                  hostID: r("AdsUEditorHostIDs").EDITING,
                  productCatalogID: e.productCatalogID,
                  productSetID: e.id,
                  productSetName: e.name,
                  source: e.source,
                  isSuggested: e.isSuggested || !1,
                },
                {
                  line: "169",
                  module: "AdsProductSetDataManager.js",
                  moduleID: i.id,
                },
              );
          }),
          (a.__onBatchCreateError = function (t) {
            (r("AdsInterfacesLogger").log({
              eventCategory: "errors",
              eventName: "product_set_create_failed",
            }),
              r("AdsProductSetBatchCreateErrorDataAction").dispatch(
                { errors: t },
                {
                  line: "184",
                  module: "AdsProductSetDataManager.js",
                  moduleID: i.id,
                },
              ));
          }),
          (a.__getObjectTypeLabel = function () {
            return s._(/*BTDS*/ "Product set");
          }),
          n
        );
      })(r("AdsBaseDataManager")),
      d = new c(),
      m = d;
    l.default = m;
  },
  226,
);
