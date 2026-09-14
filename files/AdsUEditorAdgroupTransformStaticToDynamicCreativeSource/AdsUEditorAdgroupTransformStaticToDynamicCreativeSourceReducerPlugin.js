__d(
  "AdsUEditorAdgroupTransformStaticToDynamicCreativeSourceReducerPlugin",
  [
    "AdsAccountSettingsIdProvider",
    "AdsAccountStore",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsDASingleMediaFormatLiquidityUtils",
    "AdsMutators",
    "AdsPageStore",
    "AdsPlacementsCreativeQualityUtils",
    "AdsUEditorASATransformStaticToDynamicCreativeSourceMutator",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupShopAdsBundleCreativeEditorSelectors",
    "AdsUEditorAdgroupTransformStaticToDynamicCreativeSourceActionFlux",
    "AdsUEditorAdgroupWebToWhatsappDefaultedAction",
    "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCampaignSelectors",
    "ODS",
    "PERelevanceUtils",
    "ProductBrowsingAdsUtils",
    "ProductSetDataProvider",
    "Promise",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "WebToWhatsappUtils",
    "WebToXAdsUnifiedFalcoEvent",
    "WebToXDefaultingUtils",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupBizAISectionSelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsUEditorGetShouldEnableDACreativeFlexByDefaultSelector",
    "adsUEditorPreloadedIdentityToStorefrontSelector",
    "adsUserSettingsSelector",
    "cr:9793",
    "immutable",
    "nullthrows",
    "promiseDone",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "transform_static_to_dynamic_reducer",
      c = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            bizAIEligibility: o("adsUEditorAdgroupBizAISectionSelector")
              .adsUEditorBizAIAdsSectionEligibilitySelector,
            isCreativeFlexDefaultOn: r(
              "adsUEditorGetShouldEnableDACreativeFlexByDefaultSelector",
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            getPage: r("AdsPageStore").getSelector,
            isShopAdsBundleAvailable: o(
              "AdsUEditorAdgroupShopAdsBundleCreativeEditorSelectors",
            ).adsUEditorShopAdsBundleCreativeEditorSelector,
            promoAdDefaultOptinStatus: r(
              "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
            ),
            identitiesToStorefrontLO: o(
              "adsUEditorPreloadedIdentityToStorefrontSelector",
            ).preloadedIdentityToStorefrontSelector,
            productSetSelector: r("ProductSetDataProvider").toFluxSelector(),
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
            userSettings: r("userSettingsSelector"),
          },
          function (t, a, l) {
            var c = l.account,
              d = l.bizAIEligibility,
              m = l.eligibilityInformation,
              p = l.getPage,
              _ = l.identitiesToStorefrontLO,
              f = l.isCreativeFlexDefaultOn,
              g = l.isShopAdsBundleAvailable,
              h = l.parentData,
              y = l.productSetSelector,
              C = l.promoAdDefaultOptinStatus,
              b = l.userSettings;
            return o("AdsMutators").mutateEach(
              t,
              a.adgroupIDs,
              function (t, l) {
                var v,
                  S = t;
                S = o(
                  "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
                ).clearWebsiteDestinationOptimization(S);
                var R =
                  a.defaultProductSetID != null
                    ? y == null ||
                      (v = y.get(a.defaultProductSetID)) == null ||
                      (v = v.getValue()) == null
                      ? void 0
                      : v.catalog_item_type
                    : null;
                if (
                  ((S = r(
                    "AdsUEditorASATransformStaticToDynamicCreativeSourceMutator",
                  )({
                    adAccount: a.adAccount,
                    adgroup: S,
                    catalogItemType: R,
                    disablePAC: a.disablePAC,
                    getPage: p,
                    isShopAdsBundleAvailable: g,
                    parentData: h,
                    productSetID: a.defaultProductSetID,
                    productSetVertical: a.defaultProductSetVertical,
                    promoAdDefaultOptinStatus: C,
                    bizAIEligibility: d,
                    userSettings: b == null ? void 0 : b.getValue(),
                  })),
                  o(
                    "AdsPlacementsCreativeQualityUtils",
                  ).isAdsPlacementCreativeQualityQELaunchEnabled() && m)
                ) {
                  var L,
                    E = o(
                      "AdsPlacementsCreativeQualityUtils",
                    ).getAdgroupPlacementSpecForL1Reset(m);
                  S =
                    (L = r("AdsAdgroupRecordAccessors").placement) == null
                      ? void 0
                      : L.set(r("immutable").fromJS(E), S);
                }
                var k = r("nullthrows")(h.get(l)),
                  I = k.campaign,
                  T = k.campaignGroup,
                  D = k.specPlugin,
                  x = _ == null ? void 0 : _.getValue(),
                  $ = r("AdsAdgroupSemanticFields").instagramActorID.get(D, t),
                  P = r("AdsAdgroupSemanticFields").pageID.get(D, t),
                  N =
                    a.defaultProductSetID != null
                      ? y == null
                        ? void 0
                        : y.get(a.defaultProductSetID)
                      : null,
                  M =
                    N != null && N.hasValue()
                      ? N == null
                        ? void 0
                        : N.getValueEnforcing().catalogID
                      : null;
                ((S = o(
                  "AdsUEditorAdgroupMutators",
                ).maybeUpdateSAOffDestinationSpec(
                  S,
                  I,
                  T,
                  M,
                  x,
                  P,
                  $,
                  o("ShopsAdsOffsiteCheckoutAdsUtils").SAOffDefaultingTrigger
                    .STATIC_TO_DYNAMIC_FORMAT_CHANGE,
                )),
                  (S = o(
                    "ProductBrowsingAdsUtils",
                  ).maybeUpdateProductBrowsingSpec(
                    S,
                    !1,
                    void 0,
                    T,
                    I,
                    "static_to_dynamic_format_change",
                  )));
                var w = r("AdsAccountSettingsIdProvider").toFluxSelector()(),
                  A = o("adsUserSettingsSelector").adsUserSettingsSelector(),
                  F = o(
                    "AdsDASingleMediaFormatLiquidityUtils",
                  ).shouldAccountDefaultOptInForDASingleMediaFormatLiquidity(
                    w,
                    A,
                  ),
                  O = o(
                    "AdsDASingleMediaFormatLiquidityUtils",
                  ).isEligibleForDASingleMediaFormatLiquidity({
                    adgroup: S,
                    campaign: I,
                    campaignGroup: T,
                  });
                (F &&
                  O &&
                  ((S = o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).adsAdgroupFormatTransformationDASingleMediaAsCollectionDefaultOptInAndOutMutator(
                    S,
                    !0,
                  )),
                  (s || (s = o("ODS"))).bumpEntityKey(
                    679,
                    "da.single_media_as_collection_ads_manager",
                    "default_opt_in",
                  )),
                  (S =
                    o(
                      "PERelevanceUtils",
                    ).mayBeDeleteAdExtensionsRelevancySpecFromAdgroup(S)));
                var B = o(
                  "WebToWhatsappUtils",
                ).isWebToXEligibleForSingleCreative(
                  { campaign: I, campaignGroup: T, adgroup: S },
                  D,
                );
                if (B) {
                  var W = o(
                    "WebToXDefaultingUtils",
                  ).isWTXDefaultingFixesEnabled(!0);
                  if (W) {
                    var q,
                      U = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.page_id.get(S),
                      V = U
                        ? r("AdsPageStore").getLoadObject(U).getValue()
                        : null,
                      H = r("AdsAccountStore").getSelectedAccount().getValue(),
                      G = o(
                        "WebToXDefaultingUtils",
                      ).enableBrowserAddOnDefaultingType(
                        H,
                        [S.id],
                        T,
                        I,
                        S,
                        a.hostID,
                        V,
                        "media_setup_manual_to_catalog_L1",
                        I == null ||
                          (q = I.toJS()) == null ||
                          (q = q.targeting) == null ||
                          (q = q.geo_locations) == null
                          ? void 0
                          : q.countries,
                        I == null ? void 0 : I.optimization_goal,
                      ),
                      z = G.type;
                    if (
                      (r("WebToXAdsUnifiedFalcoEvent").log(function () {
                        return {
                          event: "wtx_defaulting_debug",
                          ad_account_id: H == null ? void 0 : H.account_id,
                          ad_page_id: U,
                          ad_group_id: S.id,
                          objective: T.objective,
                          optimization_goal:
                            I == null ? void 0 : I.optimization_goal,
                          event_info: [
                            "source:media_setup_manual_to_catalog_L1",
                            "defaulted_extension:" + z,
                          ].join(","),
                        };
                      }),
                      z === "whatsapp")
                    )
                      ((S = o(
                        "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                      ).setWhatsAppWebsiteExtensionType(S)),
                        r("promiseDone")(
                          (e || (e = n("Promise"))).resolve({}),
                          function () {
                            r(
                              "AdsUEditorAdgroupWebToWhatsappDefaultedAction",
                            ).dispatch(
                              { adgroupIDs: [S.id], hostID: a.hostID },
                              {
                                line: "307",
                                module:
                                  "AdsUEditorAdgroupTransformStaticToDynamicCreativeSourceReducerPlugin.js",
                                moduleID: i.id,
                              },
                            );
                          },
                        ));
                    else if (z === "messenger")
                      S = o(
                        "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                      ).setMessengerWebsiteExtensionType(S);
                    else if (z === "messaging_apps") {
                      var j;
                      S = o(
                        "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                      ).setMessagingAppsWebsiteExtensionType(
                        S,
                        [].concat(
                          (j = G.multiDestinationType) != null ? j : [],
                        ),
                        D,
                        T.objective,
                      );
                    } else
                      S = o(
                        "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                      ).cleanWebsiteExtensionFields(S);
                  }
                }
                if (
                  ((S = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).maybeRemoveCagSpec(S)),
                  n("cr:9793") != null)
                ) {
                  var K,
                    Q,
                    X,
                    Y,
                    J,
                    Z,
                    ee,
                    te,
                    ne,
                    re =
                      (K = a.defaultProductSetID) != null
                        ? K
                        : (Q = S.creative) == null
                          ? void 0
                          : Q.product_set_id,
                    oe =
                      (X = S.creative) == null ? void 0 : X.object_story_spec,
                    ae =
                      (Y =
                        (J =
                          (Z =
                            oe == null || (ee = oe.link_data) == null
                              ? void 0
                              : ee.link) != null
                            ? Z
                            : oe == null ||
                                (te = oe.video_data) == null ||
                                (te = te.call_to_action) == null ||
                                (te = te.value) == null
                              ? void 0
                              : te.link) != null
                          ? J
                          : (ne = S.creative) == null
                            ? void 0
                            : ne.link_url) != null
                        ? Y
                        : null;
                  n("cr:9793")(
                    S,
                    re,
                    I == null ? void 0 : I.id,
                    ae,
                    c,
                    f === !0,
                    a.hostID,
                    u,
                  );
                }
                return S;
              },
            );
          },
          r("AdsUEditorAdgroupTransformStaticToDynamicCreativeSourceActionFlux")
            .actionType,
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
