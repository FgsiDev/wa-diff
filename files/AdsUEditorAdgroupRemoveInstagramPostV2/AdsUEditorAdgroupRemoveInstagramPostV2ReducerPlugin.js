__d(
  "AdsUEditorAdgroupRemoveInstagramPostV2ReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveInstagramPostV2ActionFlux",
    "ApiAdObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = r("AdsAdgroupRecordAccessors").creative.delete(e);
              return o("AdsMutators").chain(
                r("AdsAdgroupRecordAccessors").creative.object_id.set(t.pageID),
                o(
                  "AdsInstagramUserIdMigrationUtils",
                ).IGIDV2MigrationAccessors.creative.instagram_user_id.set(
                  t.instagramActorID,
                  t.instagramUserID,
                ),
                r("AdsAdgroupRecordAccessors").creative.object_type.set(
                  r("ApiAdObjectTypes").PHOTO,
                ),
              )(n);
            });
          },
          r("AdsUEditorAdgroupRemoveInstagramPostV2ActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
