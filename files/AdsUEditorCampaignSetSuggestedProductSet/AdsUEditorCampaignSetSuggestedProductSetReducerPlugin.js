__d(
  "AdsUEditorCampaignSetSuggestedProductSetReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetSuggestedProductSetActionFlux",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n;
            return o("AdsMutators").mutateEach(
              e,
              (n = t.campaignIDs) != null ? n : [],
              function (e) {
                return r("isTruthy")(t.turningOn)
                  ? o("AdsMutators").chain(
                      function (e) {
                        return r(
                          "AdsCampaignRecordAccessors",
                        ).promoted_object.boosted_product_set_id.set(
                          t.selectedProductSetID,
                          e,
                        );
                      },
                      function (e) {
                        return r(
                          "AdsCampaignRecordAccessors",
                        ).promoted_object.product_set_id.set(
                          t.allProductsProductSetID,
                          e,
                        );
                      },
                      function (e) {
                        return r(
                          "AdsCampaignRecordAccessors",
                        ).promoted_object.product_suggestion_settings.enabled.set(
                          t.turningOn,
                          e,
                        );
                      },
                    )(e)
                  : o("AdsMutators").chain(
                      function (e) {
                        return r(
                          "AdsCampaignRecordAccessors",
                        ).promoted_object.boosted_product_set_id.delete(e);
                      },
                      function (e) {
                        return r(
                          "AdsCampaignRecordAccessors",
                        ).promoted_object.product_suggestion_settings.delete(e);
                      },
                    )(e);
              },
            );
          },
          r("AdsUEditorCampaignSetSuggestedProductSetActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
