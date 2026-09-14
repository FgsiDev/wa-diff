__d(
  "AdsUEditorAdgroupMessageMarketingSetTrackingSpecForAppReducerPlugin",
  [
    "AdsAPIOptimizationGoals",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorCampaignMessageMarketingChangeOptimizationGoalActionFlux",
    "adsUEditorAdgroupTrackingSpecsSelector",
    "adsUEditorSelectedAdgroupMessageMarketingButtonsSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, o) {
        if (
          t == null ||
          n !== r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
        ) {
          var e = o != null ? o : [];
          return e.filter(function (e) {
            return e != null && e["action.type"] !== "app_custom_event";
          });
        }
        var a = o != null ? o : [];
        return a.concat([
          { application: t, "action.type": "app_custom_event" },
        ]);
      },
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            buttons: r(
              "adsUEditorSelectedAdgroupMessageMarketingButtonsSelector",
            ),
            trackingSpecs: r("adsUEditorAdgroupTrackingSpecsSelector"),
          },
          function (t, n, a) {
            var i = a.buttons,
              l = a.trackingSpecs;
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t) {
              var o =
                  i == null
                    ? void 0
                    : i.find(function (e) {
                        return e.type === "APP";
                      }),
                a = o == null ? void 0 : o.app_id,
                s = l.valueSeq().toArray().flat(),
                u = e(a, n.optimizationGoal, s),
                c = u != null ? r("immutable").fromJS(u) : null;
              return r("AdsAdgroupRecordAccessors").tracking_specs.set(c, t);
            });
          },
          r(
            "AdsUEditorCampaignMessageMarketingChangeOptimizationGoalActionFlux",
          ).actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
