__d(
  "AdsUEditorAdgroupRemoveUpcomingEventMetadataDisabledReasonReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveUpcomingEventMetadataDisabledReasonActionFlux",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsUEditorAdgroupUpcomingEventMetadataMutators",
              ).removeUpcomingEventMetadataDisabledReason(e, t.reason);
            });
          },
          r(
            "AdsUEditorAdgroupRemoveUpcomingEventMetadataDisabledReasonActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
