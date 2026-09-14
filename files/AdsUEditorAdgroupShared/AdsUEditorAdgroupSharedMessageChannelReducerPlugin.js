__d(
  "AdsUEditorAdgroupSharedMessageChannelReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSharedMessageChannelUpdateActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                return o(
                  "AdsUEditorAdgroupLeadNurtureChannelsMutator",
                ).updateSharedMessageChannelFields(
                  e,
                  t.greetingMessage,
                  t.callToAction,
                  t.iceBreakers,
                );
              },
            );
          },
          r("AdsUEditorAdgroupSharedMessageChannelUpdateActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
