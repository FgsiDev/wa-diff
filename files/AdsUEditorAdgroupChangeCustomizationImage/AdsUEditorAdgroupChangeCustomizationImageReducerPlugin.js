__d(
  "AdsUEditorAdgroupChangeCustomizationImageReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsPageStore",
    "AdsUEditorAdgroupChangeCustomizationImageDataActionFlux",
    "AdsUEditorAdgroupChangeCustomizationImageMutatorsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "adsUEditorAccountSelector",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            getPage: r("AdsPageStore").getSelector,
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.getPage,
              l = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var s = t.hash,
                  u = t.url,
                  c = r("nullthrows")(l.get(n)),
                  d = r("AdsAdgroupSemanticFields").pageID.get(c, e),
                  m = r("isTruthy")(d) ? i(d) : null;
                return o(
                  "AdsUEditorAdgroupChangeCustomizationImageMutatorsUtils",
                ).setCustomizationImage({
                  account: a,
                  adgroup: e,
                  specPathPlugin: c,
                  hash: s,
                  url: u,
                  page: m,
                  assetFeedLabel: t.label,
                });
              },
            );
          },
          o("AdsUEditorAdgroupChangeCustomizationImageDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
