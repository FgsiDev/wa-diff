__d(
  "AdsUEditorAdgroupSetLightweightSplitTestReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetLightweightSplitTestActionFlux",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = t.lightweightSplitTest;
              if (
                e.lightweight_split_test === n ||
                (r("isFalsey")(n) && r("isFalsey")(e.lightweight_split_test))
              )
                return e;
              if (r("isFalsey")(n)) {
                var o = r(
                  "AdsAdgroupRecordAccessors",
                ).lightweight_split_test.delete(e);
                return (
                  r("isFalsey")(o.lightweight_split_test_options) ||
                    (o = r(
                      "AdsAdgroupRecordAccessors",
                    ).lightweight_split_test_options.delete(o)),
                  o
                );
              } else
                return r(
                  "AdsAdgroupRecordAccessors",
                ).lightweight_split_test.set(n, e);
            });
          },
          o("AdsUEditorAdgroupSetLightweightSplitTestActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
