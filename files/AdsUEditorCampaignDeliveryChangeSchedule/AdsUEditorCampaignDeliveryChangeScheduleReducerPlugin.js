__d(
  "AdsUEditorCampaignDeliveryChangeScheduleReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeScheduleActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "trimDaypartingScheduleInReducer",
    "unixTimestampFromDate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = o("AdsMutators").mutateEach(
                e,
                t.campaignIDs,
                function (e, n) {
                  return o("AdsMutators").chain(
                    function (e) {
                      return t.startTime != null
                        ? r("AdsCampaignRecordAccessors").start_time.set(
                            t.startTime,
                            e,
                          )
                        : e;
                    },
                    function (e) {
                      return t.clearEndTime || t.endTime != null
                        ? r("AdsCampaignRecordAccessors").end_time.set(
                            t.endTime,
                            e,
                          )
                        : e;
                    },
                    function (e) {
                      return t.source ===
                        o("AdsUEditorCampaignReducerUtils")
                          .FLEX_SCHEDULE_MATCH_CTA_SROUCE
                        ? r(
                            "AdsCampaignRecordAccessors",
                          ).is_lifetime_flex_with_valid_schedule.set(!0, e)
                        : e;
                    },
                  )(e);
                },
              ),
              a = t.timezoneID;
            return (
              a != null &&
                (n = r("trimDaypartingScheduleInReducer")(
                  n,
                  t.campaignIDs,
                  t.startTime != null
                    ? r("unixTimestampFromDate")(t.startTime)
                    : null,
                  t.endTime != null
                    ? r("unixTimestampFromDate")(t.endTime)
                    : null,
                  a,
                )),
              n
            );
          },
          o("AdsUEditorCampaignDeliveryChangeScheduleActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
