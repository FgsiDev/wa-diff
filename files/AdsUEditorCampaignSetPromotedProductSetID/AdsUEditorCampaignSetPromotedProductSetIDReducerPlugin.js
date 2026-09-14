__d(
  "AdsUEditorCampaignSetPromotedProductSetIDReducerPlugin",
  [
    "AdsAPICampaignPaths",
    "AdsAPIObjectives",
    "AdsCampaignRecordAccessors",
    "AdsDataAtom",
    "AdsDeliveryCanUseVOForWebsiteConversionWithGraphQLSelector",
    "AdsDeliveryValueOptimizationDefaultEligibilitySelectors",
    "AdsManagerCatalogDataProvider",
    "AdsMutators",
    "AdsSAFRSelectors",
    "AdsSAInDAUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignMessageMarketingSetOrClearSettingsFromUpstreamChangeAction",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetPromotedProductSetIDDataActionFlux",
    "AdsUEditorCampaignWAMOStatusFromUpstreamChangeAction",
    "ProductSetDataProvider",
    "adsCampaignSetProductSetPromotedObjectReducerFn",
    "adsCampaignUpdateInProductAudienceSpecs",
    "adsUEditorAccountSelector",
    "cr:11298",
    "normalizeCatalogVertical",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignGroupsMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
            safrConfig: o("AdsSAFRSelectors").adsSAFRSelector,
            canUseVOForWebsiteConversion: o(
              "AdsDeliveryCanUseVOForWebsiteConversionWithGraphQLSelector",
            ).canUseVOForWebsiteConversionWithGraphQLSelector,
            canUseVOForCatalogSales: o(
              "AdsDeliveryValueOptimizationDefaultEligibilitySelectors",
            ).canUseVOForCatalogSalesSelector,
          },
          function (t, a, l) {
            var s = a.campaignIDs,
              u = a.catalogSalesData,
              c = a.productSetID;
            (e || (e = r("AdsDataAtom"))).waitFor([
              r("ProductSetDataProvider").toFluxStore().getDispatchToken(),
              r("AdsManagerCatalogDataProvider")
                .toFluxStore()
                .getDispatchToken(),
            ]);
            var d = o("AdsMutators").mutateEach(t, s, function (e, t) {
              var i,
                s,
                d,
                m,
                p = (i = e.promoted_object) == null ? void 0 : i.product_set_id,
                _ = r("nullthrows")(l.campaignGroupsMap.get(t)),
                f =
                  ((s = e.promoted_object) == null
                    ? void 0
                    : s.full_funnel_objective) != null &&
                  ((d = e.promoted_object) == null
                    ? void 0
                    : d.full_funnel_objective) !==
                    r("AdsAPIObjectives").OUTCOME_SALES;
              if (f) return e;
              var g =
                _.is_odax_campaign_group === !0 && a.shouldRefreshSpec === !0
                  ? r("adsCampaignSetProductSetPromotedObjectReducerFn")(
                      e,
                      a,
                      l,
                    )
                  : e;
              g =
                c != null
                  ? r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.product_set_id.set(c, g)
                  : r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.product_set_id.delete(g);
              var h = (m = a.catalogVertical) != null ? m : null;
              if (h == null) {
                var y, C;
                h =
                  (y =
                    u == null || (C = u.productSet) == null
                      ? void 0
                      : C.vertical) != null
                    ? y
                    : null;
              }
              if (h == null && c != null) {
                var b = r("ProductSetDataProvider")().get(c);
                if (b.hasValue()) {
                  var v;
                  h = (v = b.getValueEnforcing().vertical) != null ? v : null;
                }
              }
              if (h == null) {
                var S,
                  R =
                    (S = _.promoted_object) == null
                      ? void 0
                      : S.product_catalog_id;
                if (R != null) {
                  var L =
                    n("cr:11298") != null
                      ? n("cr:11298").get(R)
                      : r("AdsManagerCatalogDataProvider")().get(R);
                  if (L.hasValue()) {
                    var E, k;
                    h =
                      (E =
                        (k = L.getValueEnforcing()) == null
                          ? void 0
                          : k.vertical) != null
                        ? E
                        : null;
                  }
                }
              }
              var I = r("normalizeCatalogVertical")(h);
              if (
                ((g =
                  c != null && I != null
                    ? r("AdsCampaignRecordAccessors").catalog_vertical.set(I, g)
                    : r("AdsCampaignRecordAccessors").catalog_vertical.delete(
                        g,
                      )),
                c == null && o("AdsSAInDAUtils").isGKEnableForSAInDA())
              ) {
                var T;
                ((g = (T = r(
                  "AdsCampaignRecordAccessors",
                )).promoted_object.variation.delete(g)),
                  (g = T.promoted_object.pixel_id.delete(g)),
                  T.promoted_object.application_id.delete(g),
                  (g = T.promoted_object.omnichannel_object.delete(g)));
              }
              g =
                c == null && u == null
                  ? r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.custom_event_type.delete(g)
                  : g;
              var D = function (t) {
                return t == null || c == null
                  ? null
                  : t.map(function (e) {
                      return e.get("product_set_id") === p
                        ? e.set("product_set_id", c)
                        : e;
                    });
              };
              return (
                (g = r("adsCampaignUpdateInProductAudienceSpecs")(g, D)),
                (g = g.updateIn(
                  r("AdsAPICampaignPaths").TARGETING
                    .EXCLUDED_PRODUCT_AUDIENCE_SPECS,
                  D,
                )),
                (g = r(
                  "AdsCampaignRecordAccessors",
                ).product_delivery_preference.delete(g)),
                g
              );
            });
            return (
              e.addPostDispatchCallback(function () {
                r(
                  "AdsUEditorCampaignMessageMarketingSetOrClearSettingsFromUpstreamChangeAction",
                ).dispatch(
                  { hostID: a.hostID, campaignIDs: s },
                  {
                    line: "214",
                    module:
                      "AdsUEditorCampaignSetPromotedProductSetIDReducerPlugin.js",
                    moduleID: i.id,
                  },
                );
              }),
              e.addPostDispatchCallback(function () {
                r(
                  "AdsUEditorCampaignWAMOStatusFromUpstreamChangeAction",
                ).dispatch(
                  { campaignIDs: s, hostID: a.hostID },
                  {
                    line: "222",
                    module:
                      "AdsUEditorCampaignSetPromotedProductSetIDReducerPlugin.js",
                    moduleID: i.id,
                  },
                );
              }),
              d
            );
          },
          o("AdsUEditorCampaignSetPromotedProductSetIDDataActionFlux")
            .actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
