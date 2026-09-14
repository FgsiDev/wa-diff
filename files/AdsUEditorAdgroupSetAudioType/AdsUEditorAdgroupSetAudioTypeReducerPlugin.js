__d(
  "AdsUEditorAdgroupSetAudioTypeReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetAudioTypeSpecDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o("AdsUEditorAdgroupAudiosAdsMutators").maybeUpdateAudios(
                e,
                t.audioType,
                t.selected_audios,
              );
            });
          },
          r("AdsUEditorAdgroupSetAudioTypeSpecDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
