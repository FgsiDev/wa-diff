__d(
  "AdsUEditorCampaignSetPrioritizationCategoryReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetPrioritizationCategoryDataActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return t.prioritizationCategory == null ||
                t.prioritizationCategory.length <= 0
                ? r(
                    "AdsCampaignRecordAccessors",
                  ).product_delivery_preference.product_priority_category.delete(
                    e,
                  )
                : r(
                    "AdsCampaignRecordAccessors",
                  ).product_delivery_preference.product_priority_category.set(
                    r("immutable").List(t.prioritizationCategory),
                    e,
                  );
            });
          },
          r("AdsUEditorCampaignSetPrioritizationCategoryDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
