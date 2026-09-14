__d(
  "AdsSetAdExtensionsRelevancySpecReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsInterfacesLogger",
    "AdsMutators",
    "AdsSetAdExtensionsRelevancySpecActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "PERelevanceUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.ad_extensions_relevancy_spec.set(
                  r("immutable").fromJS({
                    ai_relevancy_ent_id: t.aiRelevancyEntId,
                  }),
                ),
              )(e);
              if (
                t.extensionSpecs.length > 0 &&
                ((n = o("AdsMutators").chain(
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.ad_extensions_relevancy_spec.set(
                    r("immutable").fromJS({
                      ai_relevancy_ent_id: t.aiRelevancyEntId,
                      extension_specs: t.extensionSpecs,
                    }),
                  ),
                )(n)),
                o("PERelevanceUtils").hasVirtualProductSetId(n))
              ) {
                var a, i, l;
                n = o("AdsMutators").chain(
                  r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
                    .associated_product_set_id.delete,
                )(n);
                var s = t.catalogActionType;
                n = o("PERelevanceUtils").applyVirtualPsetCatalogAndFormatOptIn(
                  n,
                  s != null ? s : "MANUAL",
                );
                var u = t.extensionSpecs.find(function (e) {
                  return e.extension_type === "product_extensions";
                });
                r("AdsInterfacesLogger").log({
                  eventName: "ai_relevancy_virtual_pset_opt_in_applied",
                  data: {
                    adgroup_id: (a = t.adgroupIDs[0]) != null ? a : null,
                    subsequent_data: JSON.stringify({
                      source: "relevancy_spec_reducer",
                      ai_relevancy_ent_id: t.aiRelevancyEntId,
                      catalog_action_type: s != null ? s : null,
                      selected_strategy_id:
                        (i = u == null ? void 0 : u.selected_strategy_id) !=
                        null
                          ? i
                          : null,
                      virtual_pset_id:
                        (l = u == null ? void 0 : u.virtual_pset_id) != null
                          ? l
                          : null,
                    }),
                  },
                });
              }
              return n;
            });
          },
          [r("AdsSetAdExtensionsRelevancySpecActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
