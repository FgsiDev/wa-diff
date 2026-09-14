__d(
  "AdsCampaignBulkEditSetPixelIDActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignRecordAccessors",
    "AdsUEditorPromotedObjectSetWebsiteOptimizationFieldsDataActionFlux",
    "AdsUEditorPromotedObjectSetWebsiteOptimizationFieldsReducerPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o(
          "AdsUEditorPromotedObjectSetWebsiteOptimizationFieldsDataActionFlux",
        ).actionType,
        fluxInputs: {},
        mutate: function (t, n, a) {
          var e = r(
            "AdsUEditorPromotedObjectSetWebsiteOptimizationFieldsReducerPlugin",
          ).reduce.reduceFn(
            o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
              n,
              t.campaignIDs,
            ),
            t,
          );
          return o("AdsBulkEditActionHandlerUtils").mergeState(
            r("AdsCampaignBulkEditColumnKeys").CAMPAIGN_PIXEL_ID,
            t.campaignIDs,
            n,
            e,
            r("AdsCampaignRecordAccessors").promoted_object.get,
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
