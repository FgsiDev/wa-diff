__d(
  "AdsUEditorAdgroupSelectPixelPromotedObjectTypeReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupConnectedSourcesMutators",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsCanvasConstants",
    "AdsCollectionsAdUtils",
    "AdsEditingAdgroupEditorContext",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
    "AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils",
    "AdsUEditorAdgroupCallAddOnDefaultingMutator",
    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
    "AdsUEditorAdgroupOfferMutators",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetPageDefaultingPostMutator",
    "AdsUEditorAdgroupSetThreadsAccountSpecMutators",
    "AdsUEditorAdgroupShopAdsBundle",
    "AdsUEditorAdgroupShopAdsBundleMutators",
    "AdsUEditorAdgroupWebToWhatsappDefaultedAction",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignSelectPixelPromotedObjectTypeDataActionFlux",
    "AdsUEditorHostIDs",
    "AdsUEditorInstagramMutators",
    "AdsUEditorMessengerMutators",
    "AdsUEditorMultiDestinationAdgroupMutators",
    "AdsUEditorWebsiteAndAppMutators",
    "AdsUEditorWebsiteMutators",
    "AdsUEditorWebsiteUtils",
    "Promise",
    "PromoAdsEmailCaptureUnificationGatingUtils",
    "WebToWhatsappUtils",
    "WebToXDefaultingUtils",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsCallToActionGetDefaultCallToActionType",
    "adsCampaignPromotedObjectSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupBizAISectionSelector",
    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsUEditorCreativeSiteLinksNoticeDataSelector",
    "adsUEditorDynamicAdsRemoveSingleMediaIfUnsupported",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "gkx",
    "isFalsey",
    "isTruthy",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            bizAIEligibility: o("adsUEditorAdgroupBizAISectionSelector")
              .adsUEditorBizAIAdsSectionEligibilitySelector,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
            defaultInstagramID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDWithBusiness,
            promoAdDefaultOptinStatus: r(
              "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
            ),
            getPage: r("AdsPageStore").getSelector,
          },
          function (t, a, l) {
            var s = l.account,
              u = l.bizAIEligibility,
              c = l.defaultInstagramID,
              d = l.getPage,
              m = l.getShouldEnableAutomaticFlowByDefault,
              p = l.parentData,
              _ = l.promoAdDefaultOptinStatus;
            return o("AdsMutators").mutateEach(
              t,
              a.adgroupIDs,
              function (t, l) {
                var f,
                  g,
                  h = t,
                  y = r("nullthrows")(p.get(l)),
                  C = y.campaign,
                  b = y.campaignGroup,
                  v = y.specPlugin,
                  S = r(
                    "AdsAdgroupSemanticFields",
                  ).multiShareEndCard.isSupported(v, t),
                  R = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: C, campaignGroup: b }),
                  L = o("AdsODAXUtils").maybeTranslateObjective(
                    b.objective,
                    R,
                    C.optimization_goal,
                  ),
                  E = r("adsCallToActionGetDefaultCallToActionType")(L, R),
                  k = o("AdsCollectionsAdUtils").isCollectionsAd(t.creative),
                  I = o(
                    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                  ).createExistingPostRetentionOriginalData(t, v),
                  T = o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).shouldRetainCreativeData(C.campaign_creation_source)
                    ? t
                    : null;
                if (
                  ((h = o("AdsMutators").chain(
                    r("AdsAdgroupRecordAccessors").creative.shop_spec.delete,
                    r("AdsAdgroupRecordAccessors").creative.dynamic_ad_voice
                      .delete,
                    function (e) {
                      return r(
                        "adsUEditorDynamicAdsRemoveSingleMediaIfUnsupported",
                      )(e, { campaign: C, campaignGroup: b });
                    },
                    function (e) {
                      return o(
                        "AdsUEditorMultiDestinationAdgroupMutators",
                      ).cleanMultiDestAdSpecOnConversionLocationChange(e);
                    },
                    function (e) {
                      return o(
                        "AdsUEditorWebsiteAndAppMutators",
                      ).deleteAdgroupFields(
                        e,
                        v,
                        r("AdsPromotedObjectTypes").PIXEL,
                      );
                    },
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupOfferMutators",
                      ).removeOfferIDState(e, v, L);
                    },
                    function (e) {
                      var t;
                      return o(
                        "AdsUEditorCallToActionMutators",
                      ).setCallToAction({
                        callToActionType: E,
                        pages: null,
                        cachedCallToActionLink: null,
                        adgroup: e,
                        campaignGroupPromotedPageID:
                          (t = b.promoted_object) == null ? void 0 : t.page_id,
                        objective: L,
                        promotedObjectType: r("AdsPromotedObjectTypes").PIXEL,
                        specPlugin: v,
                      });
                    },
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupOnsiteDestinationsMutators",
                      ).cleanOnsiteDestinationsForSelectPixelPromotedObjectType(
                        e,
                        C,
                      );
                    },
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupShopAdsBundleMutators",
                      ).processShopAdsBundleEditorState(
                        e,
                        o("AdsUEditorAdgroupShopAdsBundle")
                          .SHOP_ADS_BUNDLE_DISBLED_EDITOR_STATE,
                      );
                    },
                    function (e) {
                      return o(
                        "adsAutomaticFlowMutationSetDoFSpec",
                      ).adsAutomaticFlowLiteSpecMutator(
                        s,
                        { campaign: C, campaignGroup: b, adgroup: e },
                        m,
                      );
                    },
                    function (e) {
                      return o(
                        "AdsUEditorInstagramMutators",
                      ).maybeSetAdgroupCreativeInstagramAccountID(e, v, c);
                    },
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupSetThreadsAccountSpecMutators",
                      ).maybeSetAdgroupCreativeThreadsUserID(e, v, c);
                    },
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupLeadNurtureChannelsMutator",
                      ).cleanLeadNurtureChannelsField(e);
                    },
                  )(h)),
                  r("isFalsey")(a.previousTypeIsWebsiteAndShop))
                ) {
                  var D;
                  h = o("AdsUEditorWebsiteMutators").setWebsiteURL({
                    adgroup: h,
                    campaignGroupPromotedPageID:
                      (D = b.promoted_object) == null ? void 0 : D.page_id,
                    objective: L,
                    promotedObjectType: r("AdsPromotedObjectTypes").PIXEL,
                    specPlugin: v,
                    websiteURL: k
                      ? o("AdsCanvasConstants").EMPTY_CANVAS_LINK
                      : "",
                  });
                }
                ((h = o(
                  "AdsUEditorMessengerMutators",
                ).deleteMessengerDestinationFields({
                  adgroup: h,
                  specPlugin: v,
                  supportPageEndCard: S,
                  removeLinkURL: r("isFalsey")(a.previousTypeIsWebsiteAndShop),
                })),
                  o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(
                    h,
                  ) &&
                    (h = o(
                      "AdsUEditorAdgroupAssetFeedMutators",
                    ).removeMissingAdlabelsFromCustomizationRules(h)),
                  o(
                    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
                  ).isPromoAdOptedInWithProductCatalogForAdgroup(h)
                    ? (h = o(
                        "AdsUEditorAdgroupPromoAdMutators",
                      ).refreshPromotionalMetadataOnCatalogChange(
                        { adgroup: h, campaign: C, campaignGroup: b },
                        s,
                        v,
                        !1,
                      ))
                    : _ != null &&
                      (h = o(
                        "AdsUEditorAdgroupPromoAdMutators",
                      ).updatePromoAdForDefaultOptIn(
                        { adgroup: h, campaign: C, campaignGroup: b },
                        s,
                        v,
                        _,
                        o("AdsUEditorAdgroupPromoAdMutatorUtils")
                          .PromoAdDefaultOptInCallSite
                          .SELECT_PIXEL_PROMOTED_OBJECT,
                      )),
                  o(
                    "PromoAdsEmailCaptureUnificationGatingUtils",
                  ).isEmailCaptureOfferUnificationEnabled() &&
                  o(
                    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
                  ).isEmailCaptureOptedInForAdgroup(h, C, b)
                    ? (h = o(
                        "AdsUEditorAdgroupEmailCaptureMutators",
                      ).refreshEmailCaptureMetadataOnCatalogChange(
                        { adgroup: h, campaign: C, campaignGroup: b },
                        s,
                        !1,
                      ))
                    : _ != null &&
                      (h = o(
                        "AdsUEditorAdgroupEmailCaptureMutators",
                      ).updateEmailCaptureForDefaultOptIn(
                        { adgroup: h, campaign: C, campaignGroup: b },
                        s,
                        _,
                        o("AdsUEditorAdgroupPromoAdMutatorUtils")
                          .PromoAdDefaultOptInCallSite
                          .SELECT_PIXEL_PROMOTED_OBJECT,
                      )),
                  (h = o(
                    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
                  ).updateBizAIDefaultOptIn(
                    h,
                    u,
                    o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
                      .BizAIDefaultOptInCallSite.SELECT_PIXEL_PROMOTED_OBJECT,
                  )));
                var x = o(
                  "WebToWhatsappUtils",
                ).isWebToXEligibleForSingleCreative(
                  { campaign: C, campaignGroup: b, adgroup: h },
                  v,
                );
                if (x) {
                  var $,
                    P,
                    N = o("AdsAPIAdgroupRecordUtils").getPageID(t, v),
                    M =
                      N != null
                        ? r("AdsPageStore").getLoadObject(N).getValue()
                        : null,
                    w =
                      r("isTruthy")(
                        M == null ? void 0 : M.most_frequent_website_link,
                      ) ||
                      r("isTruthy")(M == null ? void 0 : M.last_website_link) ||
                      r("isTruthy")(M == null ? void 0 : M.link_in_bio),
                    A = w
                      ? o(
                          "WebToWhatsappUtils",
                        ).isInAdsManagerLeadsObjectiveWeblinkPrefillV2QE(
                          b.objective,
                        )
                      : !1,
                    F = w
                      ? o(
                          "WebToWhatsappUtils",
                        ).isInAdsManagerEngagementObjectiveWeblinkPrefillV2QE(
                          b.objective,
                        )
                      : !1,
                    O =
                      A || F
                        ? o(
                            "WebToWhatsappUtils",
                          ).getAdsManagerWeblinkPrefillV2UrlSourceQE(
                            b.objective,
                          )
                        : null,
                    B =
                      ($ = M == null ? void 0 : M.most_frequent_website_link) !=
                      null
                        ? $
                        : null,
                    W = o("AdsUEditorWebsiteUtils").getDefaultWebsiteUrl(
                      b.objective,
                      M,
                      O,
                      B,
                      A || F,
                    );
                  if (
                    M &&
                    r("isTruthy")(W) &&
                    (A ||
                      F ||
                      o(
                        "WebToWhatsappUtils",
                      ).isInAdsManagerSalesObjectiveWeblinkPrefillQE(
                        b.objective,
                        s == null ? void 0 : s.account_id,
                      )) &&
                    ((h = o(
                      "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                    ).setStickyWeblinkPrefill(h, W, M, b.objective)),
                    o(
                      "AdsAdgroupConnectedSourcesMutators",
                    ).isSiteLinksTriggerOnWeblinkPrefillEnabled(
                      h,
                      C,
                      s == null ? void 0 : s.account_id,
                      "AdsUEditorAdgroupSelectPixelPromotedObjectTypeReducerPlugin",
                    ))
                  ) {
                    var q, U, V;
                    o(
                      "AdsAdgroupConnectedSourcesMutators",
                    ).triggerSiteLinksIfEligible(
                      h,
                      W,
                      C,
                      s == null ? void 0 : s.account_id,
                      r("adsCampaignPromotedObjectSelector")(C.id),
                      (q = C.targeting) == null ||
                        (q = q.geo_locations) == null ||
                        (q = q.countries) == null
                        ? void 0
                        : q.toArray(),
                      (U = h.creative) == null ||
                        (U = U.object_story_spec) == null
                        ? void 0
                        : U.page_id,
                      ((V = r("adsUEditorCreativeSiteLinksNoticeDataSelector")(
                        r("AdsEditingAdgroupEditorContext"),
                      ).getValue()) == null
                        ? void 0
                        : V.defaultOnType) != null,
                      "AdsUEditorAdgroupSelectPixelPromotedObjectTypeReducerPlugin",
                    );
                  }
                  var H = o(
                      "WebToXDefaultingUtils",
                    ).enableBrowserAddOnDefaultingType(
                      s,
                      [t.id],
                      b,
                      C,
                      t,
                      r("AdsUEditorHostIDs").EDITING,
                      M,
                      "conversion_switch_L2",
                      C == null ||
                        (P = C.toJS()) == null ||
                        (P = P.targeting) == null ||
                        (P = P.geo_locations) == null
                        ? void 0
                        : P.countries,
                      C == null ? void 0 : C.optimization_goal,
                    ),
                    G = H.type;
                  switch (G) {
                    case "whatsapp":
                      ((h = o(
                        "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                      ).setWhatsAppWebsiteExtensionType(h)),
                        r("promiseDone")(
                          (e || (e = n("Promise"))).resolve({}),
                          function () {
                            r(
                              "AdsUEditorAdgroupWebToWhatsappDefaultedAction",
                            ).dispatch(
                              {
                                adgroupIDs: [t.id],
                                hostID: r("AdsUEditorHostIDs").EDITING,
                              },
                              {
                                line: "431",
                                module:
                                  "AdsUEditorAdgroupSelectPixelPromotedObjectTypeReducerPlugin.js",
                                moduleID: i.id,
                              },
                            );
                          },
                        ));
                      break;
                    case "instagram_direct":
                      h = o(
                        "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                      ).setInstagramDirectWebsiteExtensionType(h);
                      break;
                    case "messenger":
                      h = o(
                        "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                      ).setMessengerWebsiteExtensionType(h);
                      break;
                    case "messaging_apps":
                      h = o(
                        "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                      ).setMessagingAppsWebsiteExtensionType(
                        h,
                        [].concat(
                          (f = H.multiDestinationType) != null ? f : [],
                        ),
                        void 0,
                        b.objective,
                      );
                      break;
                    case "phone_call":
                      h = o(
                        "AdsUEditorAdgroupCallAddOnDefaultingMutator",
                      ).applyCallAddOnDefaultBrowserAddOn(
                        h,
                        M == null ? void 0 : M.phone_number_prefill,
                        N,
                      );
                      break;
                    case "instant_form":
                    case "none":
                      h = o(
                        "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                      ).cleanWebsiteExtensionFields(h);
                      break;
                  }
                  h = o(
                    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                  ).setPageWelcomeMessageOnWebsiteExtensionTypeSelection(
                    h,
                    N,
                    G,
                    b.objective,
                  );
                }
                return (
                  o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(h) &&
                    (h = o(
                      "AdsAdgroupLinkPostFormatMutators",
                    ).removeCreativeAssetGroupsSpecField(h)),
                  !r("gkx")("21571") &&
                    !o(
                      "AdsPCAUnifiedFormatEligibilityUtils",
                    ).isEligiblePCAUnifiedAdgroup(h) &&
                    o(
                      "WebToWhatsappUtils",
                    ).isSalesFlexibleFormatDefaultingEnabled(
                      s,
                      b.objective,
                      r("AdsPromotedObjectTypes").PIXEL,
                    ) &&
                    (h = o(
                      "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                    ).setFlexibleFormatFields(
                      h,
                      C,
                      b,
                      b.objective,
                      r("AdsPromotedObjectTypes").PIXEL,
                      "conversion_switch_l2",
                    )),
                  (h =
                    (g = o(
                      "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                    ).tryRetainExistingPost({
                      account: s,
                      adgroup: h,
                      campaign: C,
                      campaignGroup: b,
                      specPathPlugin: v,
                      getPage: d,
                      originalData: I,
                    })) != null
                      ? g
                      : o(
                          "AdsUEditorAdgroupSetPageDefaultingPostMutator",
                        ).setUseLiveVideoPostDefaulting(
                          h,
                          v,
                          o("AdsAPIAdgroupRecordUtils").getPageID(t, v),
                          s,
                          C,
                          b,
                        )),
                  (h = o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).retainCreativeData({ adgroup: h, oldAdgroup: T })),
                  h
                );
              },
            );
          },
          [
            o("AdsUEditorCampaignSelectPixelPromotedObjectTypeDataActionFlux")
              .actionType,
          ],
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
