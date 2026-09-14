__d(
  "AdsUEditorCampaignPromotedObjectSetLocalInventoryProductSalesChannelReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignPromotedObjectSetLocalInventoryProductSalesChannelActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return t.clear === !0 || t.product_sales_channel == null
                ? r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.product_sales_channel.delete(e)
                : r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.product_sales_channel.set(
                    t.product_sales_channel,
                    e,
                  );
            });
          },
          o(
            "AdsUEditorCampaignPromotedObjectSetLocalInventoryProductSalesChannelActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
