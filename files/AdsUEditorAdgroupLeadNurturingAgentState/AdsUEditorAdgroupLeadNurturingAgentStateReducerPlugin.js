__d(
  "AdsUEditorAdgroupLeadNurturingAgentStateReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
    "AdsUEditorAdgroupLeadNurturingAgentStateUpdateActionFlux",
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
                "AdsUEditorAdgroupLeadNurtureChannelsMutator",
              ).setLeadNurturingAgentStateField(e, t.isOptIn);
            });
          },
          r("AdsUEditorAdgroupLeadNurturingAgentStateUpdateActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
