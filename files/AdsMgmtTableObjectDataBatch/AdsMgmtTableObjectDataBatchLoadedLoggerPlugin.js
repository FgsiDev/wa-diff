__d(
  "AdsMgmtTableObjectDataBatchLoadedLoggerPlugin",
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
            o != null &&
              o instanceof Error &&
              ((e || (e = r("AdsDataAtom"))).waitFor(
                r(
                  "AdsInsightsTableEventStoreUtil",
                ).getCurrentNavigationEventData.stores.map(function (e) {
                  return e.getDispatchToken();
                }),
              ),
              r("adsMgmtLogger")(
                "ads_pe_table.object_data.batch_loaded",
                babelHelpers.extends(
                  {},
                  { action_type: n.actionType },
                  r("adsMgmtGetErrorDataForLogger")(o),
                  r(
                    "AdsInsightsTableEventStoreUtil",
                  ).getCurrentNavigationEventData(),
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
