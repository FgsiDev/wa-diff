__d(
  "AdsUEditorCampaignTargetingSetBroadGeoTargetingAutomationReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignTargetingReducerUtils",
    "AdsUEditorCampaignTargetingSetBroadGeoTargetingAutomationActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignTargetingReducerUtils").createReducer(
          {},
          function (e, t) {
            var n, a;
            if (t.campaignIDs == null || t.hostID == null) return e;
            var i =
              (n =
                (a = t.targetingAutomation) == null ||
                (a = a.individual_setting) == null
                  ? void 0
                  : a.geo) != null
                ? n
                : 0;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, t) {
                return i === 1
                  ? r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.targeting_automation.individual_setting.geo.set(
                      1,
                      e,
                    )
                  : r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.targeting_automation.individual_setting.geo.set(
                      0,
                      e,
                    );
              },
            );
          },
          r(
            "AdsUEditorCampaignTargetingSetBroadGeoTargetingAutomationActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
