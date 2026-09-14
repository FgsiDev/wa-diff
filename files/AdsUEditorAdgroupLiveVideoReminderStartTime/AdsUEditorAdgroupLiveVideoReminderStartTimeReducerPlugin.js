__d(
  "AdsUEditorAdgroupLiveVideoReminderStartTimeReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupLiveVideoReminderStartTimeActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n;
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.live_video_reminder.start_time.set(
                (n = t.startTime) != null ? n : void 0,
                e,
              );
            });
          },
          r("AdsUEditorAdgroupLiveVideoReminderStartTimeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
