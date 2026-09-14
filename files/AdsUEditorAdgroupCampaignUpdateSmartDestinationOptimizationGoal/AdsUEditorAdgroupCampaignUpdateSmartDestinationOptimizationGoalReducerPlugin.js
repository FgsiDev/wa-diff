__d(
  "AdsUEditorAdgroupCampaignUpdateSmartDestinationOptimizationGoalReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCampaignUpdateSmartDestinationOptimizationGoalActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t) {
            var n = t.adgroupIDs;
            return n == null
              ? e
              : o("AdsMutators").mutateEach(e, n, function (e) {
                  var t;
                  return e.creative == null ||
                    ((t = e.creative) == null
                      ? void 0
                      : t.applink_treatment) !== "automatic"
                    ? e
                    : r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.applink_treatment.set(
                        "deeplink_with_web_fallback",
                        e,
                      );
                });
          },
          o(
            "AdsUEditorAdgroupCampaignUpdateSmartDestinationOptimizationGoalActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
