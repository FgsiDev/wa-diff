__d(
  "AdsUEditorAdgroupSetPushMetadataIdsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetPushMetadataIdsActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adgroupIDs,
              a = t.pushMetadataIds;
            return n == null || n.length === 0
              ? e
              : o("AdsMutators").mutateEach(e, n, function (e) {
                  return r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.media_sourcing_spec.push_metadata_ids.set(
                    r("immutable").List(a),
                    e,
                  );
                });
          },
          r("AdsUEditorAdgroupSetPushMetadataIdsActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
