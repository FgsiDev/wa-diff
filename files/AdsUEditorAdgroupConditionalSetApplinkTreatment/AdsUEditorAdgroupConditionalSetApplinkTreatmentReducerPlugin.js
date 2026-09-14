__d(
  "AdsUEditorAdgroupConditionalSetApplinkTreatmentReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupConditionalSetApplinkTreatmentDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return t.targetApplinkTreatment === t.toApplinkTreatment
              ? e
              : o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                  var n;
                  if (
                    ((n = e.creative) == null
                      ? void 0
                      : n.applink_treatment) !== t.targetApplinkTreatment
                  )
                    return e;
                  var a = o("AdsMutators").chain(
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.applink_treatment.set(t.toApplinkTreatment),
                  )(e);
                  return a;
                });
          },
          o("AdsUEditorAdgroupConditionalSetApplinkTreatmentDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
