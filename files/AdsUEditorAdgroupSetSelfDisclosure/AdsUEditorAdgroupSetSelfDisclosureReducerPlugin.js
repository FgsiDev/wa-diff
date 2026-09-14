__d(
  "AdsUEditorAdgroupSetSelfDisclosureReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetSelfDisclosureDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e;
              return (
                (n = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.generative_asset_spec.transparency_metadata.self_disclosure.enroll_status.set(
                  t.enrollStatus,
                )(e)),
                n
              );
            });
          },
          r("AdsUEditorAdgroupSetSelfDisclosureDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
