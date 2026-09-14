__d(
  "AdsUEditorCampaignCampaignGroupSetPromotedCatalogReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsDataAtom",
    "AdsMutators",
    "AdsUEditorCampaignChangeCatalogActionFlux",
    "AdsUEditorCampaignGroupSetPromotedCatalogActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignWAMOStatusFromUpstreamChangeAction",
    "adsDeleteProductAudienceSpecsFromCampaignRecord",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (t, n) {
            var a = n.dynamicTargetingPlugin,
              l = o("AdsMutators").mutateEach(t, n.campaignIDs, function (e) {
                var t,
                  i = o("AdsMutators").chain(
                    (t = r("AdsCampaignRecordAccessors")).catalog_vertical
                      .delete,
                    t.promoted_object.product_set_id.delete,
                    t.promoted_object.boosted_product_set_id.delete,
                    t.promoted_object.product_suggestion_settings.delete,
                    t.promoted_object.smart_pse_setting.delete,
                    t.product_delivery_preference.delete,
                  )(e);
                return (
                  n.catalogID != null &&
                    (i = o("AdsMutators").chain(
                      r(
                        "AdsCampaignRecordAccessors",
                      ).is_dynamic_creative_optimization.set(!1),
                      r("AdsCampaignRecordAccessors").is_dynamic_creative.set(
                        !1,
                      ),
                    )(i)),
                  a != null &&
                    (a.usesProductAudiences
                      ? (i = o("AdsMutators").chain(
                          r("AdsCampaignRecordAccessors").targeting
                            .dynamic_audience_ids.delete,
                          r("AdsCampaignRecordAccessors").targeting
                            .excluded_dynamic_audience_ids.delete,
                        )(i))
                      : (i = o("AdsMutators").chain(
                          r("adsDeleteProductAudienceSpecsFromCampaignRecord"),
                          r("AdsCampaignRecordAccessors").targeting
                            .excluded_product_audience_specs.delete,
                        )(i))),
                  i
                );
              });
            return (
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  r(
                    "AdsUEditorCampaignWAMOStatusFromUpstreamChangeAction",
                  ).dispatch(
                    { campaignIDs: n.campaignIDs, hostID: n.hostID },
                    {
                      line: "82",
                      module:
                        "AdsUEditorCampaignCampaignGroupSetPromotedCatalogReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
              ),
              l
            );
          },
          [
            o("AdsUEditorCampaignGroupSetPromotedCatalogActionFlux").actionType,
            o("AdsUEditorCampaignChangeCatalogActionFlux").actionType,
          ],
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
