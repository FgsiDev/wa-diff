__d(
  "AdsUEditorAdgroupExistingPostSyncSpecCallToActionTypeReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutatePostCTADataActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "CallToActionTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = r("CallToActionTypes")[t.cta];
            return typeof n != "string"
              ? e
              : o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                  var t;
                  return ((t = e.creative) == null
                    ? void 0
                    : t.call_to_action) == null
                    ? e
                    : r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.call_to_action.type.set(n, e);
                });
          },
          r("AdsMutatePostCTADataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
