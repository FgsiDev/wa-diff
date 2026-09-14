__d(
  "AdsUEditorAdgroupFacebookExistingPostSetCallToActionAppDestinationReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupFacebookExistingPostSetCallToActionAppDestinationDataActionFlux",
    "AdsUEditorAdgroupInstagramExistingPostMutators",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsUEditorAdgroupInstagramExistingPostMutators",
              ).setCTAAppDestination(e, t.appDestination);
            });
          },
          o(
            "AdsUEditorAdgroupFacebookExistingPostSetCallToActionAppDestinationDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
