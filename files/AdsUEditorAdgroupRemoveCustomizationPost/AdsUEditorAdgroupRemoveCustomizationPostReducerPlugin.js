__d(
  "AdsUEditorAdgroupRemoveCustomizationPostReducerPlugin",
  [
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "AdsSelectedPreviewLoadScenarioLogger",
    "AdsUEditorAdgroupPostAssetMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveCustomizationPostDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "FBLogger",
    "adsPlacementAssetMutationRemoveCustomizationPost",
    "adsUEditorAccountSelector",
    "nullthrows",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.account,
              l = n.plugins;
            r("vulture")("kdIRUPRNmn3zQ1lMbhLw-O3c_VY=");
            var s = o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                var n;
                r("vulture")("kmmn0MdSGhS3ugfPAt_ha6Z7Hjw=");
                var i = r("nullthrows")(l.get(e.id)),
                  s = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
                    (n = e.creative) == null || (n = n.asset_feed_spec) == null
                      ? void 0
                      : n.posts,
                    t.label,
                    "post_id",
                  ).index;
                if (s == null)
                  throw r("FBLogger")("am_feature_pac").mustfixThrow(
                    "asset with given label must exist in asset feed",
                  );
                var u = o(
                    "AdsUEditorAdgroupPostAssetMutators",
                  ).isolatePostAssetWithLabel(e, i, s, t.label),
                  c = u.adgroupWithIsolatedPostAsset;
                return r("adsPlacementAssetMutationRemoveCustomizationPost")(
                  c,
                  i,
                  t.label,
                  !0,
                  a,
                );
              }),
              u = s.findKey(function (e, t) {
                return (
                  r("vulture")("oWD5phVZwvoGIi2n6A2VSosJgw8="),
                  e.hasValue() &&
                    o("AdsAssetFeedUtils").isPACAdgroupFromRecord(
                      e.getValueEnforcing(),
                    )
                );
              });
            return (
              u == null &&
                o(
                  "AdsSelectedPreviewLoadScenarioLogger",
                ).shouldStartPreviewLoadScenario(t.hostID) &&
                o("AdsSelectedPreviewLoadScenarioLogger").startScenario(
                  "switch_to_non_pac",
                  i.id,
                  t.adgroupIDs,
                ),
              s
            );
          },
          r("AdsUEditorAdgroupRemoveCustomizationPostDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
