__d(
  "AdsUEditorAdgroupRemoveInstagramAccountReducerPlugin",
  [
    "AdsIGIDv2SemanticFields",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveInstagramAccountDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n = r("nullthrows")(a.get(t));
                return o(
                  "AdsIGIDv2SemanticFields",
                ).IGIDV2SemanticFields.instagramUserID.isSupported(n, e)
                  ? o("AdsMutators").chain(function (e) {
                      return o(
                        "AdsIGIDv2SemanticFields",
                      ).IGIDV2SemanticFields.instagramUserID.delete(n, e);
                    }, o("AdsInstagramUserIdMigrationUtils").IGIDV2MigrationAccessors.creative.instagram_user_id.delete)(
                      e,
                    )
                  : e;
              },
            );
          },
          o("AdsUEditorAdgroupRemoveInstagramAccountDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
