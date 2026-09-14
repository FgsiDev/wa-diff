__d(
  "AdsUEditorCampaignPrioritizedProductsToggleReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignPrioritizedProductsToggleDataActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = e;
              return (
                t.toggleValue === !1
                  ? ((n = r(
                      "AdsCampaignRecordAccessors",
                    ).product_delivery_preference.product_priority.delete(n)),
                    (n = r(
                      "AdsCampaignRecordAccessors",
                    ).product_delivery_preference.product_priority_category.delete(
                      n,
                    )))
                  : (n = r(
                      "AdsCampaignRecordAccessors",
                    ).product_delivery_preference.product_priority.set(
                      t.defaultProductPriority,
                      n,
                    )),
                n
              );
            });
          },
          r("AdsUEditorCampaignPrioritizedProductsToggleDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
