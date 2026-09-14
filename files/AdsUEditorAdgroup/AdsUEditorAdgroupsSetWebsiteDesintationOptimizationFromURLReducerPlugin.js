__d(
  "AdsUEditorAdgroupsSetWebsiteDesintationOptimizationFromURLReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetWebsiteDestinationOptimizationFromURLDataActionFlux",
    "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
    "DestinationOptimizationUtils.react",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          { userSettings: r("userSettingsSelector") },
          function (e, t, n) {
            var r = n.userSettings;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              if (
                o(
                  "DestinationOptimizationUtils.react",
                ).destinationOptimizationEnableAdgroupInfo(e)
              ) {
                var n;
                return o(
                  "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
                ).setWebsiteDestinationOptimizationStatus(
                  e,
                  o("DestinationOptimizationUtils.react").isHomePageURL(
                    t.websiteURL,
                  ),
                  !0,
                  !1,
                  t.editSource,
                  (n = r == null ? void 0 : r.getValue()) != null ? n : null,
                  t.websiteURL === null ? "" : t.websiteURL,
                );
              }
              return e;
            });
          },
          r(
            "AdsUEditorAdgroupSetWebsiteDestinationOptimizationFromURLDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
