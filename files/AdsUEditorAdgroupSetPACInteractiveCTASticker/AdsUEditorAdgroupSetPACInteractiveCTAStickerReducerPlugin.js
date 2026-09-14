__d(
  "AdsUEditorAdgroupSetPACInteractiveCTAStickerReducerPlugin",
  [
    "AdsAssetFeedFieldUtils",
    "AdsMutators",
    "AdsUEditorAdgroupImageMutators",
    "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetPACInteractiveCTAStickerDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCampaignSelectors",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.plugins;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                i,
                l = r("nullthrows")(a.get(e.id)),
                s =
                  (n = e.creative) == null || (n = n.asset_feed_spec) == null
                    ? void 0
                    : n.images,
                u =
                  (i = e.creative) == null || (i = i.asset_feed_spec) == null
                    ? void 0
                    : i.videos,
                c = t.label,
                d = e,
                m = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
                  s,
                  c,
                ).index;
              if (m != null)
                return (
                  (d = o(
                    "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
                  ).applyInteractiveComponentSpecToImageAsset(
                    d,
                    l,
                    m,
                    t.componentsSpec,
                  )),
                  (d = o(
                    "AdsUEditorAdgroupImageMutators",
                  ).removeDuplicateImageAssets(d, l)),
                  d
                );
              var p = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
                u,
                c,
              ).index;
              return (
                u != null &&
                  p != null &&
                  (d = o(
                    "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
                  ).applyInteractiveComponentSpecToVideoAsset(
                    d,
                    l,
                    p,
                    t.componentsSpec,
                  )),
                d
              );
            });
          },
          o("AdsUEditorAdgroupSetPACInteractiveCTAStickerDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
