__d(
  "AdsUEditorAdgroupSetReplaceMediaTextImagesReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetReplaceMediaTextImagesDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = o(
                "AdsUEditorAdgroupMultiMediaSpecMutators",
              ).removeReplaceMediaTextImagesFromMSS(e);
              return o(
                "AdsUEditorAdgroupMultiMediaSpecMutators",
              ).addReplaceMediaTextImagesToMSS(n, t.hashes);
            });
          },
          o("AdsUEditorAdgroupSetReplaceMediaTextImagesDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
