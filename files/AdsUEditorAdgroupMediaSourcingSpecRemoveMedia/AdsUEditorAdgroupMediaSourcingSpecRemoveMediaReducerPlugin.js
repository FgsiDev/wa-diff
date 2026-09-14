__d(
  "AdsUEditorAdgroupMediaSourcingSpecRemoveMediaReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupMediaSourcingSpecRemoveMediaActionFlux",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adgroupIDs,
              r = t.mediaToRemove,
              a = t.sourceKey;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var t = o(
                "AdsUEditorAdgroupMultiMediaSpecMutators",
              ).mayDeleteMediaFromMediaSourcingSpec(e, r, a);
              return o(
                "AdsUEditorAdgroupMultiMediaSpecMutators",
              ).mayDeleteTextAndDestinationCustomizationsForPrimaryMedia(t);
            });
          },
          o("AdsUEditorAdgroupMediaSourcingSpecRemoveMediaActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
