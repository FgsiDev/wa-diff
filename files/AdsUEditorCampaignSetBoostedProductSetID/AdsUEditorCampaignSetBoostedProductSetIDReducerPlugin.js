__d(
  "AdsUEditorCampaignSetBoostedProductSetIDReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetBoostedProductSetIDDataActionFlux",
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
                var n = t.turningOn,
                  o = e;
                return (
                  (o = n
                    ? r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.boosted_product_set_id.set(
                        t.selectedProductSetID,
                        o,
                      )
                    : r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.boosted_product_set_id.delete(o)),
                  (o = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.product_set_id.set(
                    n ? t.allProductsProductSetID : t.selectedProductSetID,
                    o,
                  )),
                  t.turningOnSmartPSE === !0
                    ? (o = r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.smart_pse_setting.set("ENABLED", o))
                    : t.turningOnSmartPSE === !1 &&
                      (o = r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.smart_pse_setting.delete(o)),
                  o
                );
              },
            );
          },
          r("AdsUEditorCampaignSetBoostedProductSetIDDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
