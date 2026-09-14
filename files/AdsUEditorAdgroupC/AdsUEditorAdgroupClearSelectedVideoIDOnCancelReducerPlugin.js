__d(
  "AdsUEditorAdgroupClearSelectedVideoIDOnCancelReducerPlugin",
  [
    "AdsUEditorAdgroupCancelVideoUploadActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectedVideoIDMutator",
    "AdsVideoTrimmingGating",
    "AdsVideoTrimmingKickoffRegistry",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (o("AdsVideoTrimmingGating").isVideoTrimmingEnabledForAdAccount(!0))
        for (var t of e.adgroupIDs)
          o(
            "AdsVideoTrimmingKickoffRegistry",
          ).clearVideoTrimmingKickoffDeferred(String(t));
    }
    var s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (t, n) {
            return (
              e(n),
              o("AdsUEditorAdgroupSelectedVideoIDMutator").clearSelectedVideoID(
                t,
                n.adgroupIDs,
              )
            );
          },
          o("AdsUEditorAdgroupCancelVideoUploadActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
