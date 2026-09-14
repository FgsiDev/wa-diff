__d(
  "AdsUEditorAdgroupLiveVideoReminderReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupLiveVideoReminderActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.live_video_reminder.enroll_status.set(
                t.shouldEnroll ? "OPT_IN" : "OPT_OUT",
                e,
              );
            });
          },
          r("AdsUEditorAdgroupLiveVideoReminderActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
