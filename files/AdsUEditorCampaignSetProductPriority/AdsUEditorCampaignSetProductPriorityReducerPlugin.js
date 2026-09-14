__d(
  "AdsUEditorCampaignSetProductPriorityReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetProductPriorityDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return t.productPriority == null
                ? r(
                    "AdsCampaignRecordAccessors",
                  ).product_delivery_preference.product_priority.delete(e)
                : r(
                    "AdsCampaignRecordAccessors",
                  ).product_delivery_preference.product_priority.set(
                    t.productPriority,
                    e,
                  );
            });
          },
          r("AdsUEditorCampaignSetProductPriorityDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
