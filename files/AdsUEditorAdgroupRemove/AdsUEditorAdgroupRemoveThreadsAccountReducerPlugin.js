__d(
  "AdsUEditorAdgroupRemoveThreadsAccountReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsIGIDv2SemanticFields",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveThreadsAccountDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
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
                var n = a.get(t);
                return n != null &&
                  o(
                    "AdsIGIDv2SemanticFields",
                  ).IGIDV2SemanticFields.instagramUserID.isSupported(n, e)
                  ? o("AdsMutators").chain(function (e) {
                      return r("AdsAdgroupSemanticFields").threadsUserID.delete(
                        n,
                        e,
                      );
                    }, r("AdsAdgroupRecordAccessors").creative.threads_user_id.delete)(
                      e,
                    )
                  : r("AdsAdgroupRecordAccessors").creative.object_story_spec
                        .threads_user_id
                    ? r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.threads_user_id.delete(e)
                    : e;
              },
            );
          },
          o("AdsUEditorAdgroupRemoveThreadsAccountDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
