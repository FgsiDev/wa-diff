__d(
  "AdsUEditorAdgroupTransformStaticToDynamicSingleMediaReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupDynamicMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupTransformStaticToDynamicSingleMediaActionFlux",
    "FBLogger",
    "PERelevanceUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = a.get(n),
                  l = i.campaign,
                  s = i.campaignGroup,
                  u = i.specPlugin;
                if (s == null)
                  return (
                    r("FBLogger")("dpa").mustfix(
                      "Parent campaign group in reducer should not have been null",
                    ),
                    e
                  );
                var c =
                  o(
                    "PERelevanceUtils",
                  ).mayBeDeleteAdExtensionsRelevancySpecFromAdgroup(e);
                return o(
                  "AdsUEditorAdgroupDynamicMutators",
                ).transformAdgroupFromStaticToDynamicSingleMedia(
                  c,
                  { campaignGroup: s, campaign: l },
                  t.defaultProductSetID,
                  t.defaultProductSetVertical,
                  u,
                  void 0,
                  void 0,
                  t.defaultProductSetCatalogItemType,
                );
              },
            );
          },
          o("AdsUEditorAdgroupTransformStaticToDynamicSingleMediaActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
