__d(
  "AdsUEditorAdgroupPACRemoveCarouselCustomizationsReducerPlugin",
  [
    "AdsMutators",
    "AdsPlacementAssetUtils",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupPACRemoveCarouselCustomizationsActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "adsPlacementAssetMutationRemoveCustomizationCarousel",
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
              var n,
                i = t.label,
                l = e,
                s = e,
                u = r("nullthrows")(
                  a.get(e.id),
                  "Expected specPathPlugin to exist for adgroup",
                ),
                c =
                  (n = e.creative) == null || (n = n.asset_feed_spec) == null
                    ? void 0
                    : n.carousels;
              if (c == null) return e;
              var d = c.findIndex(function (e) {
                return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === i;
              });
              return (
                (s = r("adsPlacementAssetMutationRemoveCustomizationCarousel")(
                  e,
                  u,
                  d,
                  i,
                  !0,
                )),
                (s = o("AdsUEditorAdgroupAudiosAdsMutators").maybeResetAudios(
                  l,
                  s,
                )),
                s
              );
            });
          },
          o("AdsUEditorAdgroupPACRemoveCarouselCustomizationsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
