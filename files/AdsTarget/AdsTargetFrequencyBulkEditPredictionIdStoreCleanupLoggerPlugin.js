__d(
  "AdsTargetFrequencyBulkEditPredictionIdStoreCleanupLoggerPlugin",
  ["AdsTargetFrequencyBulkEditClearPredictionIdsAction", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("setTimeout")(function () {
            r("AdsTargetFrequencyBulkEditClearPredictionIdsAction").dispatch(
              {},
              {
                line: "33",
                module:
                  "AdsTargetFrequencyBulkEditPredictionIdStoreCleanupLoggerPlugin.js",
                moduleID: i.id,
              },
            );
          }, 0);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
