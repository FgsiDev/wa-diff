__d(
  "AdsUEditorAdgroupFacebookExistingPostSetCallToActionAppLinkReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupFacebookExistingPostSetCallToActionAppLinkDataActionFlux",
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
              ).setIGCTAAppLinkMultiCreator(e, t.appLink);
            });
          },
          o(
            "AdsUEditorAdgroupFacebookExistingPostSetCallToActionAppLinkDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
