__d(
  "AdsLocationBreakdownDataManager",
  [
    "AdsLocationBreakdownActionsTypeDefaultLoadErrorAction",
    "AdsLocationBreakdownActionsTypeDefaultLoadedAction",
    "AdsLocationBreakdownDataLoader",
    "isTruthy",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
        this.getBreakdown = function (e, t, n, a, l) {
          r("promiseDone")(
            o("AdsLocationBreakdownDataLoader").getBreakdown(
              e,
              t,
              a,
              r("isTruthy")(l) ? [l] : void 0,
            ),
            function (o) {
              r("AdsLocationBreakdownActionsTypeDefaultLoadedAction").dispatch(
                { objectID: e, objectType: t, breakdownKey: n, locations: o },
                {
                  line: "47",
                  module: "AdsLocationBreakdownDataManager.js",
                  moduleID: i.id,
                },
              );
            },
            function (o) {
              r(
                "AdsLocationBreakdownActionsTypeDefaultLoadErrorAction",
              ).dispatch(
                { objectID: e, objectType: t, breakdownKey: n, error: o },
                {
                  line: "55",
                  module: "AdsLocationBreakdownDataManager.js",
                  moduleID: i.id,
                },
              );
            },
          );
        };
      },
      s = new e();
    l.default = s;
  },
  98,
);
