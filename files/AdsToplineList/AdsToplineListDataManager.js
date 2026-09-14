__d(
  "AdsToplineListDataManager",
  [
    "AdsBaseListDataManager",
    "AdsGraphAPI",
    "AdsToplineDataManagerFields",
    "AdsToplineListBatchLoadErrorDataAction",
    "AdsToplineListBatchLoadedDataAction",
    "getOwnObjectValues",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = (function (t) {
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
                .adaccount(n)
                .edge("adtoplines")
                .batched()
                .get({
                  date_format: "U",
                  fields: r("AdsToplineDataManagerFields"),
                  limit: e,
                })
                .then(function (e) {
                  return Array.isArray(e.data)
                    ? e.data
                    : r("getOwnObjectValues")(e.data);
                }),
              function (e) {
                return t.__handleSuccess(["load"], n, null, e);
              },
              function (e) {
                return t.__handleError(["load"], n, null, e);
              },
            );
          }),
          (a.__onBatchLoaded = function (t) {
            r("AdsToplineListBatchLoadedDataAction").dispatch(
              { responses: t },
              {
                line: "61",
                module: "AdsToplineListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoadError = function (t) {
            r("AdsToplineListBatchLoadErrorDataAction").dispatch(
              { responses: t },
              {
                line: "68",
                module: "AdsToplineListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          n
        );
      })(r("AdsBaseListDataManager")),
      u = new s();
    l.default = u;
  },
  98,
);
