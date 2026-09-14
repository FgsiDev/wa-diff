__d(
  "AdsUEditorOverrideAdgroupsDataReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorOverrideAdgroupsDataActionFlux",
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
                var r = t.updatedAdgroups.find(function (e) {
                  return e.id === n;
                });
                return r == null || r.equals(e) ? e : r;
              },
            );
          },
          r("AdsUEditorOverrideAdgroupsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
