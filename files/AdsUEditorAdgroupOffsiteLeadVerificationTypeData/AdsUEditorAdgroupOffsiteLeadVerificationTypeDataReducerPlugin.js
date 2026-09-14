__d(
  "AdsUEditorAdgroupOffsiteLeadVerificationTypeDataReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupOffsiteLeadVerificationTypeDataActionFlux",
    "AdsUEditorAdgroupOffsiteLeadVerificationTypeMutators",
    "AdsUEditorAdgroupReducerUtils",
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
                  "AdsUEditorAdgroupOffsiteLeadVerificationTypeMutators",
                ).setOffsiteLeadVerificationType(e, t.offsiteVerificationType);
              },
            );
          },
          r("AdsUEditorAdgroupOffsiteLeadVerificationTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
