__d(
  "AdsUEditorAdgroupScheduleReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupScheduleActionFlux",
    "AutomatedShoppingAdsConstants",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = [];
            if ("adScheduleStartDateTime" in t) {
              var a, i;
              n.push(
                r("AdsAdgroupRecordAccessors").ad_schedule_start_time.set(
                  (a =
                    (i = t.adScheduleStartDateTime) == null
                      ? void 0
                      : i.toISOString()) != null
                    ? a
                    : o("AutomatedShoppingAdsConstants")
                        .AD_SCHEDULE_DEFAULT_TIME,
                ),
              );
            }
            if ("adScheduleEndDateTime" in t) {
              var l, s;
              n.push(
                r("AdsAdgroupRecordAccessors").ad_schedule_end_time.set(
                  (l =
                    (s = t.adScheduleEndDateTime) == null
                      ? void 0
                      : s.toISOString()) != null
                    ? l
                    : o("AutomatedShoppingAdsConstants")
                        .AD_SCHEDULE_DEFAULT_TIME,
                ),
              );
            }
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o("AdsMutators").chain.apply(o("AdsMutators"), n)(e);
            });
          },
          [r("AdsUEditorAdgroupScheduleActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
