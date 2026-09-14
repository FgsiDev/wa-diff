__d(
  "AdsUEditorCampaignDeliveryChangeCampaignScheduleTimezoneTypeReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeCampaignScheduleTimezoneTypeActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var o = e.adset_schedule;
                if (o == null || o.size === 0) return e;
                var a = o;
                return (
                  o.forEach(function (e, n) {
                    a = a.set(n, e.set("timezone_type", t.timezoneType));
                  }),
                  r("AdsCampaignRecordAccessors").adset_schedule.set(a, e)
                );
              },
            );
          },
          o(
            "AdsUEditorCampaignDeliveryChangeCampaignScheduleTimezoneTypeActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
