__d(
  "AdsAdgroupAIRelevancyMutators",
  ["AdsAdgroupRecordAccessors", "PERelevanceUtils", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      if (t.sessionID === "") return e;
      var a =
          t.selectedStrategyID != null
            ? {
                ai_relevancy_ent_id: t.sessionID,
                extension_specs: [
                  {
                    extension_type: "product_extensions",
                    selected_strategy_id: t.selectedStrategyID,
                    virtual_pset_id: (n = t.virtualPsetID) != null ? n : null,
                  },
                ],
              }
            : { ai_relevancy_ent_id: t.sessionID },
        i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.ad_extensions_relevancy_spec.set(
          r("immutable").fromJS(a),
        )(e);
      return (
        o("PERelevanceUtils").hasVirtualProductSetId(i) &&
          (i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.associated_product_set_id.delete(
            i,
          )),
        i
      );
    }
    l.adsAdgroupApplyLLMStrategySelectionMutator = e;
  },
  98,
);
