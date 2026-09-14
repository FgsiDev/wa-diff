__d(
  "AdAccountOptimizedCustomEventsDataProviderPlugin",
  [
    "AppOptimizedCustomEventsReportingDataLoader",
    "SignalsLaminarHelpers",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Record({ accountID: null, dataSourceType: null }),
      s = {
        initialState: o("SignalsLaminarHelpers").createLoadObjectMap(
          o("AppOptimizedCustomEventsReportingDataLoader")
            .loadOptimizedCustomEventsByAdAccountID,
          function (t) {
            return e(t);
          },
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
