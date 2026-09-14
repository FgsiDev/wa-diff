__d(
  "AdsUEditorAdgroupRemoveCategorizationCriteriaReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveCategorizationCriteriaDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCategorizationCriteriaUtils",
    "FBLogger",
    "adsUEditorAreSomeCampaignGroupsBwISelector",
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
            isBwPCampaignGroup: r("adsUEditorAreSomeCampaignGroupsBwISelector"),
          },
          function (e, t, n) {
            var a = n.isBwPCampaignGroup,
              i = n.plugins;
            return a
              ? e
              : o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, n) {
                  var a = o("AdsMutators").chain(
                    r("AdsAdgroupRecordAccessors").creative
                      .categorization_criteria.delete,
                    r("AdsAdgroupRecordAccessors").creative
                      .category_media_source.delete,
                  )(e);
                  return (
                    t.formatOption &&
                      (i.get(n) == null
                        ? r("FBLogger")("ads").warn(
                            "Catalog fomrmat option failed as plugin is null",
                          )
                        : (a = o("AdsMutators").chain(
                            function (e) {
                              return r(
                                "AdsAdgroupSemanticFields",
                              ).catalogAssetFormatOption.set(
                                i.get(n),
                                e,
                                t.formatOption,
                              );
                            },
                            function (e) {
                              return r(
                                "AdsAdgroupSemanticFields",
                              ).multiShareEndCard.set(
                                i.get(n),
                                e,
                                t.formatOption !==
                                  "carousel_images_single_item",
                              );
                            },
                          )(a))),
                    o(
                      "AdsUEditorCategorizationCriteriaUtils",
                    ).removeTokenizedHeadlineAndDescription(
                      a,
                      r("nullthrows")(i.get(n)),
                    )
                  );
                });
          },
          o("AdsUEditorAdgroupRemoveCategorizationCriteriaDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
