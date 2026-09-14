__d(
  "AdsUEditorAdgroupSetPlayableAssetIdReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSetPlayableAssetIdDataActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t, n) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e;
              return (
                t.playableAssetIDs !== void 0 &&
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.media_sourcing_spec.playables.set(
                    r("immutable").List(
                      t.playableAssetIDs.map(function (e) {
                        return r("immutable").Map({
                          playable_asset_id: e,
                          source: "multi_media",
                        });
                      }),
                    ),
                    n,
                  )),
                Object.hasOwn(t, "playableAssetID") &&
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.playable_asset_id.set(t.playableAssetID, n)),
                n
              );
            });
          },
          o("AdsAdgroupSetPlayableAssetIdDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
