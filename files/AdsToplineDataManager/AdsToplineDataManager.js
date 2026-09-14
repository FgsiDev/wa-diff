__d(
  "AdsToplineDataManager",
  [
    "fbt",
    "AdsBaseDataManager",
    "AdsGraphAPI",
    "AdsToplineBatchLoadedDataAction",
    "AdsToplineDataManagerFields",
    "logVultureJSDeadCodeUsage",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.loadAll = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.load(t);
            });
          }),
          (n.load = function (t) {
            var e = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("topline", t)
                .batched()
                .get({
                  date_format: "U",
                  fields: r("AdsToplineDataManagerFields"),
                }),
              function (n) {
                return e.__handleSuccess(["load"], t, null, n);
              },
              function (n) {
                return e.__handleError(["load"], t, null, n);
              },
            );
          }),
          (n.__onBatchLoaded = function (t) {
            r("AdsToplineBatchLoadedDataAction").dispatch(
              { specs: t },
              {
                line: "41",
                module: "AdsToplineDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (n.__onBatchLoadError = function (t) {
            r("logVultureJSDeadCodeUsage")(
              "AdsToplineDataManager.__onBatchLoadError",
            );
          }),
          (n.__getObjectTypeLabel = function () {
            return s._(/*BTDS*/ "Topline");
          }),
          t
        );
      })(r("AdsBaseDataManager")),
      u = new e();
    l.default = u;
  },
  226,
);
