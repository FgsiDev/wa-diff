__d(
  "AdsUEditorAdgroupPCAUnifiedCampaignCatalogChangedReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsCanvasConstants",
    "AdsCollectionsAdUtils",
    "AdsMutators",
    "AdsUEditorAdgroupPCAUnifiedCampaignCatalogChangedActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "PERelevanceUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e,
                a = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.associated_product_set_id.get(
                  n,
                );
              if (a != null) {
                var i;
                n =
                  (i = r("AdsAdgroupRecordAccessors").creative) == null ||
                  (i = i.creative_sourcing_spec) == null
                    ? void 0
                    : i.associated_product_set_id.set(t.productSetID, n);
              }
              o("PERelevanceUtils").hasSelectedRelevancyStrategyIgnoringGK(n) &&
                ((n =
                  o(
                    "PERelevanceUtils",
                  ).mayBeDeleteAdExtensionsRelevancySpecFromAdgroup(n)),
                a == null &&
                  t.productSetID != null &&
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.associated_product_set_id.set(
                    t.productSetID,
                    n,
                  )));
              var l = r(
                "AdsAdgroupRecordAccessors",
              ).creative.product_set_id.get(n);
              return (
                l != null &&
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.product_set_id.set(t.productSetID, n)),
                o("AdsCollectionsAdUtils").isCollectionsAd(n.creative) &&
                  ((n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.link_data.link.set(
                    o("AdsCanvasConstants").EMPTY_CANVAS_LINK,
                    n,
                  )),
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.link_data.picture.delete(n))),
                n
              );
            });
          },
          r("AdsUEditorAdgroupPCAUnifiedCampaignCatalogChangedActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
