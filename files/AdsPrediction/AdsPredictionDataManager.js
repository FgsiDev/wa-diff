__d(
  "AdsPredictionDataManager",
  [
    "fbt",
    "AdsBaseDataManager",
    "AdsGraphAPI",
    "AdsPredictionBatchLoadErrorDataAction",
    "AdsPredictionBatchLoadedDataAction",
    "AdsReachFrequencyPredictionFields",
    "GraphAPIRetry",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "U",
      u = [{ start_minute: 0, end_minute: 1440, days: [0, 1, 2, 3, 4, 5, 6] }],
      c = 16,
      d = (function (t) {
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
            n == null ||
              n === "" ||
              n === "0" ||
              r("promiseDone")(
                o("GraphAPIRetry").getWithCustomRetries(
                  o("AdsGraphAPI").get(i.id).object("prediction", n).batched(),
                  {
                    date_format: e,
                    fields: r("AdsReachFrequencyPredictionFields"),
                  },
                  c,
                  1e3,
                  1.5,
                ),
                function (e) {
                  return t.__handleSuccess(["load"], n, null, e);
                },
                function (e) {
                  return t.__handleError(["load"], n, null, e);
                },
              );
          }),
          (a.__onBatchLoaded = function (t) {
            var e = new Map(t);
            (e.forEach(function (e) {
              ((e.parsed_target_spec = e.target_spec),
                (e.parsed_pause_periods = e.pause_periods
                  ? e.pause_periods
                  : null),
                (e.curve_budget_reach = e.curve_budget_reach || null),
                (e.schedule = e.day_parting_schedule || u));
            }),
              r("AdsPredictionBatchLoadedDataAction").dispatch(
                { predictions: e },
                {
                  line: "75",
                  module: "AdsPredictionDataManager.js",
                  moduleID: i.id,
                },
              ));
          }),
          (a.__onBatchLoadError = function (t) {
            r("AdsPredictionBatchLoadErrorDataAction").dispatch(
              { errors: t },
              {
                line: "81",
                module: "AdsPredictionDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__getObjectTypeLabel = function () {
            return s._(/*BTDS*/ "Prediction");
          }),
          n
        );
      })(r("AdsBaseDataManager")),
      m = new d(),
      p = m;
    l.default = p;
  },
  226,
);
