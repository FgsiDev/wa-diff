__d(
  "AdsUEditorAdgroupClearMultiMediaDestinationCustomizationsReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupClearMultiMediaDestinationCustomizationsActionFlux",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adgroupIDs;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              return o(
                "AdsUEditorAdgroupMultiMediaSpecMutators",
              ).mayDeleteDestinationCustomizationsFromMediaSourcingSpec(e);
            });
          },
          r(
            "AdsUEditorAdgroupClearMultiMediaDestinationCustomizationsActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
