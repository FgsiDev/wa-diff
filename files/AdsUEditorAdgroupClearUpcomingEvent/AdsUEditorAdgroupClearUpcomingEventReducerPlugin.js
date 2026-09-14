__d(
  "AdsUEditorAdgroupClearUpcomingEventReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupClearUpcomingEventDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupUpcomingEventsMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsUEditorAdgroupUpcomingEventsMutator",
              ).resetUpcomingEventAndUpdateUpcomingEventMetadataForIncompatibility(
                e,
                t.reason,
              );
            });
          },
          r("AdsUEditorAdgroupClearUpcomingEventDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
