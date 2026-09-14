__d(
  "ExternalEventSourceListStore",
  [
    "AdsDataAtom",
    "ExternalEventSourceListDataManager",
    "FluxLoadObjectStore",
    "ProductsActionTypes",
    "adsCreateStoreThunkSelector",
    "err",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.__loadAll = function (e) {
              Array.from(e).forEach(function (e) {
                return t.__load(e);
              });
            }),
            (t.getSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              function (e) {
                return t.get(e);
              },
            )),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getActionTypes = function () {
            return [
              this.getActionTypeStartLoad(),
              r("ProductsActionTypes").CATALOG
                .EXTERNAL_EVENT_SOURCE_LIST_UPDATED,
              r("ProductsActionTypes").EXTERNAL_EVENT_SOURCE.LIST.LOADED,
              r("ProductsActionTypes").EXTERNAL_EVENT_SOURCE.LIST.LOAD_ERROR,
            ];
          }),
          (n.reduce = function (t, n) {
            var e = n.action;
            switch (e.type) {
              case r("ProductsActionTypes").EXTERNAL_EVENT_SOURCE.LIST.LOADED:
                return this.__handleOne(
                  t,
                  e.productCatalogID,
                  r("immutable").List(e.externalEventSources),
                );
              case r("ProductsActionTypes").EXTERNAL_EVENT_SOURCE.LIST
                .LOAD_ERROR:
                return this.__handleOne(
                  t,
                  e.productCatalogID,
                  r("err")("Error retrieving external event sources"),
                );
              case r("ProductsActionTypes").CATALOG
                .EXTERNAL_EVENT_SOURCE_LIST_UPDATED:
                return (
                  this.__load(e.productCatalogID),
                  this.__setEmptyAndLoading(t, [e.productCatalogID])
                );
              default:
                return t;
            }
          }),
          (n.__load = function (t) {
            r("ExternalEventSourceListDataManager").loadFor(t);
          }),
          t
        );
      })(r("FluxLoadObjectStore"));
    s.__moduleID = i.id;
    var u = new s(e || (e = r("AdsDataAtom")));
    l.default = u;
  },
  98,
);
