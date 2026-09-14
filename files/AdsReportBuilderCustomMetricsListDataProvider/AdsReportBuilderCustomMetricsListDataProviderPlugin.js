__d(
  "AdsReportBuilderCustomMetricsListDataProviderPlugin",
  [
    "AdsReportBuilderCustomMetricsLoadedAction",
    "AdsReportBuilderManageCustomMetricsDataManager",
    "LoadObject",
    "LoadObjectMap",
    "mapSet",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e(function (e) {
        return e.merge(
          r("mapSet")(t.keys, function (t) {
            return [t, e.get(t).loading()];
          }),
        );
      });
    }
    function s(e, t) {
      e(function (e) {
        return e.merge(
          r("mapSet")(t.keys, function (e) {
            return [
              e,
              r("LoadObject").withError(t.error, { creatorModuleID: i.id }),
            ];
          }),
        );
      });
    }
    var u = {
        initialState: function (n) {
          return r("LoadObjectMap").createKeyed(
            function (t) {
              (e(n, { keys: t }),
                r("promiseDone")(
                  r("promiseLoadObjectsFromKeys")(t, function (e) {
                    return r(
                      "AdsReportBuilderManageCustomMetricsDataManager",
                    ).fetch(e.scopeType, e.scopeID);
                  }),
                  function (e) {
                    r("AdsReportBuilderCustomMetricsLoadedAction").dispatch(
                      { data: e },
                      {
                        line: "69",
                        module:
                          "AdsReportBuilderCustomMetricsListDataProviderPlugin.js",
                        moduleID: i.id,
                      },
                    );
                  },
                  function (e) {
                    s(n, { keys: t, error: e });
                  },
                ));
            },
            function (e) {
              return e.getHash();
            },
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
