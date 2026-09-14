__d(
  "AdsUEditorAdgroupSetSuggestedProductSetReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetSuggestedProductSetActionFlux",
    "isTruthy",
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
          function (e, t) {
            var n = t.adgroupIDs;
            return n == null
              ? e
              : o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                  var n = t.allProductsProductSetID,
                    a = t.selectedProductSetID;
                  return r("isTruthy")(t.enabled) &&
                    r("isTruthy")(t.selectedProductSetID)
                    ? o("AdsMutators").chain(
                        function (e) {
                          return r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.object_story_spec.template_data.boosted_product_set_id.set(
                            a,
                            e,
                          );
                        },
                        function (e) {
                          return r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.product_set_id.set(n, e);
                        },
                        function (e) {
                          return r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.product_suggestion_settings.enabled.set(
                            t.enabled,
                            e,
                          );
                        },
                      )(e)
                    : o("AdsMutators").chain(
                        function (e) {
                          return r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.product_suggestion_settings.delete(e);
                        },
                        function (e) {
                          return r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.object_story_spec.template_data.boosted_product_set_id.delete(
                            e,
                          );
                        },
                        function (e) {
                          return r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.object_story_spec.template_data.smart_pse_enabled.delete(
                            e,
                          );
                        },
                      )(e);
                });
          },
          r("AdsUEditorAdgroupSetSuggestedProductSetActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
