__d(
  "AdsProductSetListDataManager",
  [
    "fbt",
    "AdsBaseListDataManager",
    "AdsGraphAPI",
    "AdsProductSetListBatchLoadErrorDataAction",
    "AdsProductSetListBatchLoadedDataAction",
    "AdsProductSetListPartialLoadDataAction",
    "GraphAPIPaging",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["created_time", "id"],
      u = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.loadFor = function (n) {
            var t = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("product_catalog", n)
                .edge("product_sets")
                .batched()
                .get({ fields: e, parent_id: 0 })
                .then(
                  o("GraphAPIPaging").eachPage(function (e) {
                    return t.$AdsProductSetListDataManagerClass$p_1(n, e.data);
                  }),
                ),
              function (e) {
                return t.__handleSuccess(["load"], n, null, e);
              },
              function (e) {
                return t.__handleError(["load"], n, null, e);
              },
            );
          }),
          (a.$AdsProductSetListDataManagerClass$p_1 = function (t, n) {
            r("AdsProductSetListPartialLoadDataAction").dispatch(
              { productCatalogID: t, productSets: n },
              {
                line: "64",
                module: "AdsProductSetListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoaded = function (t) {
            r("AdsProductSetListBatchLoadedDataAction").dispatch(
              { responses: t },
              {
                line: "74",
                module: "AdsProductSetListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoadError = function (t) {
            r("AdsProductSetListBatchLoadErrorDataAction").dispatch(
              { responses: t },
              {
                line: "78",
                module: "AdsProductSetListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__getObjectTypeLabel = function () {
            return s._(/*BTDS*/ "Catalog");
          }),
          n
        );
      })(r("AdsBaseListDataManager")),
      c = new u(),
      d = c;
    l.default = d;
  },
  226,
);
