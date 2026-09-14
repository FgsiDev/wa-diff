__d(
  "AdsMgmtTableObjectDataBatchErrorLoggerPlugin",
  [
    "AdsDataAtom",
    "AdsInsightsTableEventStoreUtil",
    "adsMgmtGetErrorDataForLogger",
    "adsMgmtLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        log: function (n) {
          var t = n.data;
          if (t != null) {
            var o = Object.values(t).find(function (e) {
              return e instanceof Error;
            });
            o instanceof Error &&
              ((e || (e = r("AdsDataAtom"))).waitFor(
                r(
                  "AdsInsightsTableEventStoreUtil",
                ).getCurrentNavigationEventData.stores.map(function (e) {
                  return e.getDispatchToken();
                }),
              ),
              r("adsMgmtLogger")(
                "ads_pe_table.object_data.batch_failure",
                babelHelpers.extends(
                  {},
                  r(
                    "AdsInsightsTableEventStoreUtil",
                  ).getCurrentNavigationEventData(),
                  r("adsMgmtGetErrorDataForLogger")(o),
                  { action_type: n.actionType },
                ),
              ));
          }
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
