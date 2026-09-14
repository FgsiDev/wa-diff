__d(
  "AdsUEditorCampaignGroupCollaborativeAdsPartnerInfoChangeReducerPlugin",
  [
    "AdsCFCPASBudgetUtils",
    "AdsCPASPartnerInfoCatalogResetUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsCampaignStoreUtils",
    "AdsDataAtom",
    "AdsMutators",
    "AdsPCAUnificationUtils",
    "AdsUEditorCampaignCPASBudgetDefaultsAction",
    "AdsUEditorCampaignGroupCollaborativeAdsPartnerInfoChangeActionFlux",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignLiveVideoSectionUtils",
    "AdsUEditorCampaignPlacementCpasLVAApplyDefaultsAction",
    "adsUEditorAccountSelector",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, a) {
      (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "AdsCampaignStoreUtils",
          ).loadCampaignIDsInCampaignGroups([t]);
          r("AdsUEditorCampaignPlacementCpasLVAApplyDefaultsAction").dispatch(
            { campaignIDs: e, hostID: a },
            {
              line: "54",
              module:
                "AdsUEditorCampaignGroupCollaborativeAdsPartnerInfoChangeReducerPlugin.js",
              moduleID: i.id,
            },
          );
        }),
      );
    }
    function u(t, a, l, s) {
      (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "AdsCampaignStoreUtils",
          ).loadCampaignIDsInCampaignGroups([t]);
          r("AdsUEditorCampaignCPASBudgetDefaultsAction").dispatch(
            {
              campaignGroupIDs: [t],
              campaignIDs: e,
              cpasDefaultBudget: l,
              cpasDefaultCampaignGroupBudget: s,
              hostID: a,
            },
            {
              line: "72",
              module:
                "AdsUEditorCampaignGroupCollaborativeAdsPartnerInfoChangeReducerPlugin.js",
              moduleID: i.id,
            },
          );
        }),
      );
    }
    var c = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (e, t, n) {
            var a = n.account;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                var n = t.collaborativeAdsPartnerInfo,
                  i = t.hostID,
                  l = e;
                if (
                  (n == null &&
                    o(
                      "AdsPCAUnificationUtils",
                    ).isPcaUnificationEnabledAndL3CatalogSelected(l) &&
                    (l = r(
                      "AdsCampaignGroupRecordAccessors",
                    ).promoted_object.product_catalog_id.set(null, l)),
                  r("justknobx")._("4740") &&
                    (n == null ? void 0 : n.merchant_partner_business_id) ===
                      o("AdsUEditorCampaignLiveVideoSectionUtils")
                        .SHOPEE_LIVE_BUSINESS_ACCOUNT &&
                    s(l.id, i),
                  n != null)
                ) {
                  var c = a == null ? void 0 : a.currency,
                    d = a == null ? void 0 : a.cpas_campaign_default_budget,
                    m =
                      a == null ? void 0 : a.cpas_campaign_group_default_budget,
                    p =
                      d != null
                        ? o(
                            "AdsCFCPASBudgetUtils",
                          ).convertCPASBudgetToLocalCurrency(d, c)
                        : null,
                    _ =
                      m != null
                        ? o(
                            "AdsCFCPASBudgetUtils",
                          ).convertCPASBudgetToLocalCurrency(m, c)
                        : null,
                    f = o("AdsCFCPASBudgetUtils").getAverageAccountBudget(
                      a,
                      !1,
                    ),
                    g = o("AdsCFCPASBudgetUtils").getAverageAccountBudget(
                      a,
                      !0,
                    ),
                    h = a == null ? void 0 : a.min_daily_budget;
                  u(
                    l.id,
                    i,
                    p != null
                      ? o("AdsCFCPASBudgetUtils").roundBudgetUp(
                          o("AdsCFCPASBudgetUtils").capCPASDefaultBudget(p, f),
                          h,
                        )
                      : null,
                    _ != null
                      ? o("AdsCFCPASBudgetUtils").roundBudgetUp(
                          o("AdsCFCPASBudgetUtils").capCPASDefaultBudget(_, g),
                          h,
                        )
                      : null,
                  );
                }
                var y = r(
                    "AdsCampaignGroupRecordAccessors",
                  ).collaborative_ads_partner_info.get(l),
                  C = r(
                    "AdsCampaignGroupRecordAccessors",
                  ).collaborative_ads_partner_info.set(n);
                return o(
                  "AdsCPASPartnerInfoCatalogResetUtils",
                ).shouldResetProductCatalogForPartnerChange(y, n)
                  ? o("AdsMutators").chain(
                      C,
                      r(
                        "AdsCampaignGroupRecordAccessors",
                      ).promoted_object.product_catalog_id.set(null),
                    )(l)
                  : C(l);
              },
            );
          },
          o(
            "AdsUEditorCampaignGroupCollaborativeAdsPartnerInfoChangeActionFlux",
          ).actionType,
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
