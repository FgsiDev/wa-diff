__d(
  "AdsUEditorAdgroupSetExistingPostPageWelcomeMessageReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetExistingPostPageWelcomeMessageDataActionFlux",
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
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(
                e,
              )
                ? r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.additional_data.page_welcome_message.set(
                    t.pageWelcomeMessage,
                    e,
                  )
                : r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(
                    r("nullthrows")(a.get(e.id)),
                    e,
                    t.pageWelcomeMessage,
                  );
            });
          },
          o("AdsUEditorAdgroupSetExistingPostPageWelcomeMessageDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
