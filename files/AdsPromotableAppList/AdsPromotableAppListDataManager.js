__d(
  "AdsPromotableAppListDataManager",
  [
    "AdsBaseListDataManager",
    "AdsGraphAPI",
    "AdsPromotableApplicationListBatchLoadErrorDataAction",
    "AdsPromotableApplicationListBatchLoadedDataAction",
    "AdsPromotableApplicationListPartialLoadDataAction",
    "AdsPromotableApplicationLoadErrorDataAction",
    "AdsPromotableApplicationLoadedDataAction",
    "GraphAPIPaging",
    "PromotableAppFields",
    "cr:379",
    "err",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.loadFor = function (t) {
            var e = this;
            r("promiseDone")(
              n("cr:379")
                .loadPromotableApps(t)
                .then(
                  o("GraphAPIPaging").eachPage(function (e) {
                    return r(
                      "AdsPromotableApplicationListPartialLoadDataAction",
                    ).dispatch(
                      { accountID: t, promotableApplications: e.data },
                      {
                        line: "49",
                        module: "AdsPromotableAppListDataManager.js",
                        moduleID: i.id,
                      },
                    );
                  }),
                ),
              function (n) {
                return e.__handleSuccess(["load"], t, null, n);
              },
              function (n) {
                return e.__handleError(["load"], t, null, n);
              },
            );
          }),
          (a.loadIDsFor = function (t, n) {
            var e = this;
            n.forEach(function (n) {
              r("promiseDone")(
                o("AdsGraphAPI")
                  .get(i.id)
                  .adaccount(t)
                  .edge("advertisable_applications")
                  .batched()
                  .get({
                    app_id: n,
                    fields: o("PromotableAppFields").PROMOTABLE_APP_FIELDS,
                  }),
                function (o) {
                  return !o.data || !o.data[0]
                    ? e.__onObjectLoadError(
                        t,
                        n,
                        r("err")("App is currently unavailable for viewer"),
                      )
                    : e.__onObjectLoaded(t, o.data[0]);
                },
                function (r) {
                  return e.__onObjectLoadError(t, n, r);
                },
              );
            });
          }),
          (a.__onObjectLoaded = function (t, n) {
            r("AdsPromotableApplicationLoadedDataAction").dispatch(
              { accountID: t, promotableApplication: n },
              {
                line: "87",
                module: "AdsPromotableAppListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onObjectLoadError = function (t, n, o) {
            r("AdsPromotableApplicationLoadErrorDataAction").dispatch(
              { accountID: t, id: n, error: o },
              {
                line: "94",
                module: "AdsPromotableAppListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoaded = function (t) {
            r("AdsPromotableApplicationListBatchLoadedDataAction").dispatch(
              { responses: t },
              {
                line: "105",
                module: "AdsPromotableAppListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoadError = function (t) {
            r("AdsPromotableApplicationListBatchLoadErrorDataAction").dispatch(
              { responses: t },
              {
                line: "109",
                module: "AdsPromotableAppListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          t
        );
      })(r("AdsBaseListDataManager")),
      s = new e();
    l.default = s;
  },
  98,
);
