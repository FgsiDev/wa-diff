__d(
  "AdsUEditorAdgroupTransformDynamicToStaticCreativeSourceReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAccountStore",
    "AdsAdgroupCtxAdvtantagePlusMutators",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsBlendedAdsConstant",
    "AdsBlendedAdsStatusTrackerDataUpdateAction",
    "AdsDASingleMediaFormatLiquidityUtils",
    "AdsDeliveryOmnichannelUtils",
    "AdsDynamicAdsUtils",
    "AdsFlexibleFormatAdexUtils",
    "AdsLinkPostFormat",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsUEditorAdgroupACOMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
    "AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils",
    "AdsUEditorAdgroupDynamicCarouselMutators",
    "AdsUEditorAdgroupDynamicMutators",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupTransformDynamicToStaticCreativeSourceActionFlux",
    "AdsUEditorAdgroupWebToWhatsappDefaultedAction",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCampaignAdObjectsUtils",
    "BlendedAdsGuidanceUtils",
    "CatalogVertical",
    "ClickToWhatsAppFeatureGating",
    "FBLogger",
    "PartnershipDynamicAdsGatingUtils",
    "ProductBrowsingAdsUtils",
    "Promise",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "WebToWhatsappUtils",
    "WebToXAdsUnifiedFalcoEvent",
    "WebToXDefaultingUtils",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupBizAISectionSelector",
    "adsUEditorCampaignDCOToggleForDeprecationSelector",
    "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorPreloadedIdentityToStorefrontSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "isTruthy",
    "justknobx",
    "nullthrows",
    "promiseDone",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, a, l, s, u) {
      var c,
        d = t,
        m = a.type;
      switch (m) {
        case "whatsapp":
          ((d = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).setWhatsAppWebsiteExtensionType(d)),
            r("promiseDone")(
              (e || (e = n("Promise"))).resolve({}),
              function () {
                r("AdsUEditorAdgroupWebToWhatsappDefaultedAction").dispatch(
                  { adgroupIDs: [d.id], hostID: s.hostID },
                  {
                    line: "143",
                    module:
                      "AdsUEditorAdgroupTransformDynamicToStaticCreativeSourceReducerPlugin.js",
                    moduleID: i.id,
                  },
                );
              },
            ));
          break;
        case "messenger":
          d = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).setMessengerWebsiteExtensionType(d);
          break;
        case "messaging_apps":
          d = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).setMessagingAppsWebsiteExtensionType(
            d,
            [].concat((c = a.multiDestinationType) != null ? c : []),
            u,
            l.objective,
          );
          break;
        default:
          d = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).cleanWebsiteExtensionFields(d);
      }
      return { adgroup: d };
    }
    var u = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            bizAIEligibility: o("adsUEditorAdgroupBizAISectionSelector")
              .adsUEditorBizAIAdsSectionEligibilitySelector,
            linkTypeMap: o("adsUeditorBulkSelectedLinkTypeSelector")
              .adsUEditorAdsAdObjectLinkTypeMapSelector,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            getPage: r("AdsPageStore").getSelector,
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
            promoAdDefaultOptinStatus: r(
              "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
            ),
            remindersAdsDefaultOptIn: r(
              "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
            ),
            isDCOToggleOn: r(
              "adsUEditorCampaignDCOToggleForDeprecationSelector",
            ),
            identitiesToStorefrontLO: o(
              "adsUEditorPreloadedIdentityToStorefrontSelector",
            ).preloadedIdentityToStorefrontSelector,
            userSettings: r("userSettingsSelector"),
          },
          function (t, a, l) {
            var u = l.account,
              c = l.bizAIEligibility,
              d = l.getPage,
              m = l.getShouldEnableAutomaticFlowByDefault,
              p = l.identitiesToStorefrontLO,
              _ = l.isDCOToggleOn,
              f = l.linkTypeMap,
              g = l.parentData,
              h = l.promoAdDefaultOptinStatus,
              y = l.remindersAdsDefaultOptIn,
              C = l.userSettings;
            return o("AdsMutators").mutateEach(
              t,
              a.adgroupIDs,
              function (t, l) {
                var b, v, S, R;
                if (!o("AdsDynamicAdsUtils").isDynamicAd(t)) return t;
                var L = r("nullthrows")(g.get(l)),
                  E = L.campaign,
                  k = L.campaignGroup,
                  I = L.specPlugin;
                if (k == null)
                  return (
                    r("FBLogger")("dpa").mustfix(
                      "Parent campaign group in reducer should not have been null",
                    ),
                    t
                  );
                o("BlendedAdsGuidanceUtils").shouldShowGuidanceForSource(
                  (b = t.metadata) == null ? void 0 : b.adgroup_creation_source,
                ) &&
                  t.created_time == null &&
                  r("promiseDone")(
                    (e || (e = n("Promise"))).resolve({}),
                    function () {
                      r("AdsBlendedAdsStatusTrackerDataUpdateAction").dispatch(
                        {
                          adgroupID: t.id,
                          campaignID: E.id,
                          status: o("AdsBlendedAdsConstant").AdsBlendedAdsStatus
                            .DRAFT_FORMAT_CHANGED,
                        },
                        {
                          line: "237",
                          module:
                            "AdsUEditorAdgroupTransformDynamicToStaticCreativeSourceReducerPlugin.js",
                          moduleID: i.id,
                        },
                      );
                    },
                  );
                var T = o(
                    "AdsDASingleMediaFormatLiquidityUtils",
                  ).isEligibleForDASingleMediaFormatLiquidity({
                    adgroup: t,
                    campaign: E,
                    campaignGroup: k,
                  }),
                  D = o("AdsAPIAdgroupRecordUtils").getLinkPostFormat(t, I),
                  x =
                    (v = t.creative) == null || (v = v.asset_feed_spec) == null
                      ? void 0
                      : v.call_ads_configuration,
                  $ = o(
                    "AdsUEditorAdgroupACOMutators",
                  ).transformFromACOTemplateData(
                    t,
                    a.isShopAdsBundleAvailable,
                    a.autotaggingDefaultValue,
                  );
                (($ = o(
                  "AdsUEditorAdgroupMediaSourcingSpecMutators",
                ).mayRemoveCAGandMSSpecForDARelatedMediaAndIntroCard($)),
                  x != null &&
                    E.destination_type ===
                      r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL &&
                    ($ = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.call_ads_configuration.set(
                      x,
                      $,
                    )),
                  T &&
                    ($ = o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsAdgroupFormatTransformationDASingleMediaAsCollectionDefaultOptInAndOutMutator(
                      $,
                      !1,
                    )));
                var P = o(
                  "ClickToWhatsAppFeatureGating",
                ).isEligibleForCTXAdvantageCatalog(
                  E == null ? void 0 : E.destination_type,
                  !1,
                );
                if (
                  (E.destination_type ===
                    r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP &&
                    P &&
                    ($ = o(
                      "AdsAdgroupCtxAdvtantagePlusMutators",
                    ).restoreCTXMDAssetFeedSpecForAdgroup($)),
                  (o(
                    "PartnershipDynamicAdsGatingUtils",
                  ).shouldEnablePartnershipAdsDynamicAdsWithExistingPost() ||
                    o(
                      "PartnershipDynamicAdsGatingUtils",
                    ).shouldEnableContentSearchForPartnershipAdsDynamicAds()) &&
                    ((S = t.creative) == null
                      ? void 0
                      : S.branded_content_boosting_type) != null &&
                    ((R = t.creative) == null ? void 0 : R.product_set_id) !=
                      null &&
                    (($ = o("AdsMutators").chain(
                      r("AdsAdgroupRecordAccessors").creative.branded_content
                        .parent_source_instagram_media_id.delete,
                      r("AdsAdgroupRecordAccessors").creative.branded_content
                        .instagram_boost_post_access_token.delete,
                      r("AdsAdgroupRecordAccessors").creative.branded_content
                        .parent_source_facebook_post_id.delete,
                    )($)),
                    o(
                      "PartnershipDynamicAdsGatingUtils",
                    ).shouldEnableContentSearchForPartnershipAdsDynamicAds() &&
                      ($ = o("AdsMutators").chain(
                        r("AdsAdgroupRecordAccessors").creative.branded_content
                          .content_search_input.delete,
                        r("AdsAdgroupRecordAccessors").creative.branded_content
                          .facebook_boost_post_access_token.delete,
                      )($))),
                  r("isTruthy")(_))
                ) {
                  var N = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: E, campaignGroup: k });
                  return o(
                    "AdsAdgroupLinkPostFormatMutators",
                  ).changeToCreativeAssetGroups(u, $, E, k, k.objective, N);
                }
                var M = p.getValue(),
                  w = r("AdsAdgroupSemanticFields").instagramActorID.get(I, t),
                  A = r("AdsAdgroupSemanticFields").pageID.get(I, t),
                  F = o(
                    "AdsDeliveryOmnichannelUtils",
                  ).canUseOmnichannelForWebsiteAndApp(E.toJS()),
                  O =
                    !F &&
                    D === r("AdsLinkPostFormat").MULTIPLE &&
                    !r("justknobx")._("2088");
                if (!F && !O) {
                  if (
                    (D === r("AdsLinkPostFormat").MULTIPLE
                      ? ($ = o(
                          "AdsUEditorAdgroupDynamicCarouselMutators",
                        ).transformDynamicToStaticCarouselMedia(
                          $,
                          a.account,
                          { campaignGroup: k, campaign: E },
                          a.isRFStoriesCarouselFormatSelected,
                          I,
                          d,
                          h,
                          c,
                        ))
                      : D === r("AdsLinkPostFormat").COLLECTIONS &&
                        ($ = o(
                          "AdsUEditorAdgroupDynamicMutators",
                        ).transformAdgroupFromDynamicToStaticCollectionMedia(
                          $,
                        )),
                    D === r("AdsLinkPostFormat").MULTIPLE ||
                      D === r("AdsLinkPostFormat").COLLECTIONS)
                  )
                    return (
                      D === r("AdsLinkPostFormat").COLLECTIONS &&
                        o(
                          "AdsFlexibleFormatAdexUtils",
                        ).passFormatSelectorMergeSAPhase1() &&
                        ($ = o(
                          "AdsAdgroupLinkPostFormatMutators",
                        ).setLinkPostFormat_UNPURE(
                          r("AdsLinkPostFormat").SINGLE,
                          f == null ? void 0 : f[t.id],
                          y,
                          $,
                          E,
                          k,
                          a.hostID,
                          r("CatalogVertical").NONE,
                          a.account,
                          C == null ? void 0 : C.getValue(),
                        )),
                      ($ = o(
                        "AdsUEditorAdgroupMutators",
                      ).maybeUpdateSAOffDestinationSpec(
                        $,
                        E,
                        k,
                        null,
                        M,
                        A,
                        w,
                        o("ShopsAdsOffsiteCheckoutAdsUtils")
                          .SAOffDefaultingTrigger
                          .DYNAMIC_TO_STATIC_FORMAT_CHANGE,
                      )),
                      o(
                        "ProductBrowsingAdsUtils",
                      ).maybeUpdateProductBrowsingSpec(
                        $,
                        !1,
                        void 0,
                        k,
                        E,
                        "dynamic_to_static_format_change",
                      )
                    );
                } else
                  (D === r("AdsLinkPostFormat").MULTIPLE ||
                    D === r("AdsLinkPostFormat").COLLECTIONS) &&
                    ($ = o(
                      "AdsAdgroupLinkPostFormatMutators",
                    ).setLinkPostFormat_UNPURE(
                      r("AdsLinkPostFormat").SINGLE,
                      f == null ? void 0 : f[t.id],
                      y,
                      $,
                      E,
                      k,
                      a.hostID,
                      r("CatalogVertical").NONE,
                      a.account,
                      C == null ? void 0 : C.getValue(),
                    ));
                var B = o("AdsODAXUtils").maybeTranslateObjective(
                  k.objective,
                  o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    k.objective,
                    E,
                  ),
                  E.optimization_goal,
                );
                if (
                  (($ = o(
                    "AdsUEditorAdgroupDynamicMutators",
                  ).transformAdgroupFromTemplateToSingleMediaLinkData(
                    $,
                    E,
                    k,
                    B,
                  )),
                  O)
                ) {
                  var W = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.format_transformation_spec.get($);
                  if (W != null) {
                    var q = W.filter(function (e) {
                      return e.get("format") !== "da_collection";
                    });
                    $ = q.isEmpty()
                      ? r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.format_transformation_spec.delete($)
                      : r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.format_transformation_spec.set(q)($);
                  }
                }
                if (
                  (($ = o(
                    "adsAutomaticFlowMutationSetDoFSpec",
                  ).adsAutomaticFlowLiteSpecMutator(
                    u,
                    { campaign: E, campaignGroup: k, adgroup: $ },
                    m,
                  )),
                  D === r("AdsLinkPostFormat").SINGLE)
                ) {
                  var U;
                  $ = o(
                    "AdsUEditorAdgroupMutators",
                  ).maybeUpdateDestinationOptimizationFields(
                    $,
                    E,
                    B,
                    (U = C == null ? void 0 : C.getValue()) != null ? U : null,
                  );
                }
                (($ = o(
                  "AdsUEditorAdgroupMutators",
                ).maybeUpdateSAOffDestinationSpec(
                  $,
                  E,
                  k,
                  null,
                  M,
                  A,
                  w,
                  o("ShopsAdsOffsiteCheckoutAdsUtils").SAOffDefaultingTrigger
                    .DYNAMIC_TO_STATIC_FORMAT_CHANGE,
                )),
                  ($ = o(
                    "ProductBrowsingAdsUtils",
                  ).maybeUpdateProductBrowsingSpec(
                    $,
                    !1,
                    void 0,
                    k,
                    E,
                    "dynamic_to_static_format_change",
                  )));
                var V = o(
                  "WebToWhatsappUtils",
                ).isWebToXEligibleForSingleCreative(
                  { campaign: E, campaignGroup: k, adgroup: $ },
                  I,
                );
                if (V) {
                  var H = o(
                    "WebToXDefaultingUtils",
                  ).isWTXDefaultingFixesEnabled(!0);
                  if (H) {
                    var G,
                      z = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.page_id.get($),
                      j = z
                        ? r("AdsPageStore").getLoadObject(z).getValue()
                        : null,
                      K = r("AdsAccountStore").getSelectedAccount().getValue(),
                      Q = o(
                        "WebToXDefaultingUtils",
                      ).enableBrowserAddOnDefaultingType(
                        K,
                        [$.id],
                        k,
                        E,
                        $,
                        a.hostID,
                        j,
                        "media_setup_catalog_to_manual_L1",
                        E == null ||
                          (G = E.toJS()) == null ||
                          (G = G.targeting) == null ||
                          (G = G.geo_locations) == null
                          ? void 0
                          : G.countries,
                        E == null ? void 0 : E.optimization_goal,
                      ),
                      X = Q.type;
                    r("WebToXAdsUnifiedFalcoEvent").log(function () {
                      return {
                        event: "wtx_defaulting_debug",
                        ad_account_id: K == null ? void 0 : K.account_id,
                        ad_page_id: z,
                        ad_group_id: $.id,
                        objective: k.objective,
                        optimization_goal:
                          E == null ? void 0 : E.optimization_goal,
                        event_info: [
                          "source:media_setup_catalog_to_manual_L1",
                          "defaulted_extension:" + X,
                        ].join(","),
                      };
                    });
                    var Y = s($, Q, k, a, I);
                    $ = Y.adgroup;
                  }
                }
                return (
                  h != null &&
                    (($ = o(
                      "AdsUEditorAdgroupPromoAdMutators",
                    ).updatePromoAdForDefaultOptIn(
                      { adgroup: $, campaign: E, campaignGroup: k },
                      u,
                      I,
                      h,
                      o("AdsUEditorAdgroupPromoAdMutatorUtils")
                        .PromoAdDefaultOptInCallSite.DA_TO_SA_TRANSFORMATION,
                      null,
                      !0,
                    )),
                    ($ = o(
                      "AdsUEditorAdgroupEmailCaptureMutators",
                    ).updateEmailCaptureForDefaultOptIn(
                      { adgroup: $, campaign: E, campaignGroup: k },
                      u,
                      h,
                      o("AdsUEditorAdgroupPromoAdMutatorUtils")
                        .PromoAdDefaultOptInCallSite.DA_TO_SA_TRANSFORMATION,
                    ))),
                  c != null &&
                    r("justknobx")._("4622") &&
                    ($ = o(
                      "AdsUEditorAdgroupBizAIDefaultOptInMutator",
                    ).updateBizAIDefaultOptIn(
                      $,
                      c,
                      o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
                        .BizAIDefaultOptInCallSite.DA_TO_SA_SINGLE_MEDIA,
                    )),
                  $
                );
              },
            );
          },
          o("AdsUEditorAdgroupTransformDynamicToStaticCreativeSourceActionFlux")
            .actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
