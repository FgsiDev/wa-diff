__d(
  "AdsUEditorAdgroupPlacementUpdatedReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupConnectedSourcesMutators",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupUtils",
    "AdsAssetFeedUtils",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsCanvasAdUtils",
    "AdsChildAttachmentsUtils",
    "AdsDCOImageCropDoFUtils",
    "AdsDynamicAdsUtils",
    "AdsEditorPostEditMode",
    "AdsGetStandardTemplateDefaultJSONWithDestination",
    "AdsInstagramApplicabilityUtils",
    "AdsInteractivePollUtils",
    "AdsLinkPostFormat",
    "AdsMediaFormatMutators",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPartnershipAdsPlacementsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementsCreativeQualityTypes",
    "AdsPlacementsCreativeQualityUtils",
    "AdsPostClickUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupArAdsMutator",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupDynamicMutators",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetLinkTypeMutator",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorInstagramMutators",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorSetPostEditModeMutators",
    "ApiAdObjectTypes",
    "WAMOStatusAdsManagerUtils",
    "adsACOIsACOAdgroup",
    "adsACOIsValidDeviceAndPlacement",
    "adsACORemoveACOSpec",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsStoreToSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsUEditorCampaignMMOnlyPlacementSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "gkx",
    "immutable",
    "justknobx",
    "nullthrows",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
        r("AdsAPIObjectives").LINK_CLICKS,
        r("AdsAPIObjectives").CONVERSIONS,
        r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
      ]),
      s = new Set([
        "feed",
        "facebook/feed",
        "facebook",
        "story",
        "instagram/story",
        "instagram/stream",
        "instagram",
      ]);
    function u(e) {
      var t = o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.branded_content.delete,
        r("AdsAdgroupRecordAccessors").creative.branded_content_boosting_type
          .delete,
        r("AdsAdgroupRecordAccessors").creative.branded_content_sponsor_page_id
          .delete,
      )(e);
      return o(
        "AdsPartnershipAdsPlacementsMutators",
      ).maySyncPartnershipAdsOrganicPosts(e, t);
    }
    function c(e, t, n, a, i, l, s) {
      var c = e;
      if (
        !o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForWAMOStatus() ||
        !r("justknobx")._("2640")
      )
        return c;
      if (o("WAMOStatusAdsManagerUtils").isOnlyWAMOStatusSelectedFromSpec(t)) {
        var d;
        ((c = o("AdsMutators").chain(
          (d = r(
            "AdsAdgroupRecordAccessors",
          )).creative.contextual_multi_ads.enroll_status.set("OPT_OUT"),
          d.creative.degrees_of_freedom_spec.text_transformation_types.delete,
          d.creative.template_url_spec.delete,
          d.creative.interactive_components_spec.delete,
        )(c)),
          o("AdsDynamicAdsUtils").isDynamicAd(c) &&
            ((c = o(
              "AdsUEditorAdgroupDynamicMutators",
            ).transformAdgroupFromTemplateToSingleMediaLinkData(c, a, i, s)),
            (c = r("AdsAdgroupRecordAccessors").creative.product_set_id.delete(
              c,
            ))),
          (c = o(
            "AdsAdgroupConnectedSourcesMutators",
          ).setConnectedSourcesCatalogEnrollStatusMutator(
            c,
            null,
            !1,
            "MANUAL",
            null,
            null,
          )),
          o("AdsCanvasAdUtils").isCanvasDestinationEnabled(c) &&
            (c = r("AdsAdgroupSemanticFields").linkURL.set(l, c, "")));
        var m = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
          campaign: a,
          campaignGroup: i,
        });
        if (
          (o(
            "WAMOStatusAdsManagerUtils",
          ).isAdAccountEligibleForCarouselExpansion() ||
            (c = o(
              "AdsAdgroupLinkPostFormatMutators",
            ).changeToSingleLinkPostFormat(s, c, m, a, i, n)),
          !o(
            "AdsUEditorMessagingDestinationUtils",
          ).isClickToMessageAdDestination(a.destination_type))
        ) {
          var p,
            _ = o("AdsPostClickUtils").isEligibleForPostClickExperience(
              n,
              s,
              c,
              a,
            );
          ((c = o("AdsUEditorAdgroupSetLinkTypeMutator").setExternalLinkType(
            c,
            n,
            i,
            a,
            _,
            o("AdsChildAttachmentsUtils").isCarouselAd(c),
            l,
            s,
            (p = i.is_odax_campaign_group) != null ? p : !1,
            !1,
            m,
            null,
          )),
            (c = o(
              "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
            ).cleanWebsiteExtensionFields(c, l)));
        }
      }
      return (
        o("WAMOStatusAdsManagerUtils").isWAMOStatusSelectedFromSpec(t) &&
          ((c = u(c)),
          r("gkx")("8501") &&
            (c = o(
              "AdsUEditorAdgroupMultiMediaSpecMutators",
            ).mayClearMediaSourcingSpec(c))),
        c
      );
    }
    function d(e, t, n) {
      if (
        !o(
          "AdsPlacementsCreativeQualityUtils",
        ).isAdsPlacementCreativeQualityQELaunchEnabled() ||
        n.pluginType !== "placements/platform"
      )
        return e;
      var a = t,
        i = o(
          "AdsPlacementsCreativeQualityUtils",
        ).getPlacementPlatformPluginKey(n.pluginKey),
        l = o(
          "AdsPlacementsCreativeQualityUtils",
        ).getAllEligiblePlacementPositionsForPlatform(
          n.eligibilityInformation,
          i,
        );
      return (
        n.eventType ===
        o("AdsPlacementsCreativeQualityTypes").AdsAdgroupPlacementControlsAction
          .EXCLUDE
          ? Array.from(l).forEach(function (e) {
              (r("vulture")("xaMPWcgAl-T5DBaFbT6FRRHkx2s="),
                (a = o("AdsPlacementsCreativeQualityUtils").excludeL1Placement(
                  a != null ? a : {},
                  o(
                    "AdsPlacementsCreativeQualityUtils",
                  ).convertPlatformPluginKeyToAPIPublisherPlatform(i),
                  e,
                )));
            })
          : n.eventType ===
              o("AdsPlacementsCreativeQualityTypes")
                .AdsAdgroupPlacementControlsAction.INCLUDE &&
            Array.from(l).forEach(function (e) {
              (r("vulture")("WhSdfoC9k4w5nRN0RTJ92EKBZpg="),
                (a = o("AdsPlacementsCreativeQualityUtils").includeL1Placement(
                  a != null ? a : {},
                  o(
                    "AdsPlacementsCreativeQualityUtils",
                  ).convertPlatformPluginKeyToAPIPublisherPlatform(i),
                  e,
                )));
            }),
        r("AdsAdgroupRecordAccessors").placement.set(
          r("immutable").fromJS(a),
          e,
        )
      );
    }
    var m = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            placementSpecs: o("AdsUEditorAdgroupSelectors").placementSpecsMap,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
            promoAdDefaultOptinStatus: r(
              "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
            ),
            isMarketingMessagesOnlyPlacementCampaign: o(
              "adsUEditorCampaignMMOnlyPlacementSelector",
            ).areAnySelectedCampaignsMarketingMessagesOnlySelector,
          },
          function (t, n, a) {
            var i = a.account,
              l = a.cachedStoreState,
              m = a.getShouldEnableAutomaticFlowByDefault,
              p = a.isMarketingMessagesOnlyPlacementCampaign,
              _ = a.parentData,
              f = a.placementSpecs,
              g = a.promoAdDefaultOptinStatus;
            return n.adgroupIDs == null
              ? t
              : o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t, a) {
                  var h,
                    y,
                    C,
                    b,
                    v = r("nullthrows")(f.get(a)),
                    S = r(
                      "AdsInstagramApplicabilityUtils",
                    ).placementSpecHasInstagramStoryPlacementOnly(v),
                    R = r(
                      "AdsInstagramApplicabilityUtils",
                    ).placementSpecHasStreamPlacement(v),
                    L = r(
                      "AdsInstagramApplicabilityUtils",
                    ).placementSpecHasExplorePlacement(v),
                    E = o(
                      "AdsPlacementAPISpecReaderUtils",
                    ).isOnlyActiveFacebookInstreamVideosPlacement(v),
                    k = r("nullthrows")(_.get(a)),
                    I = k.campaign,
                    T = k.campaignGroup,
                    D = k.specPlugin,
                    x = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                      T.objective,
                      I,
                    ),
                    $ = o("AdsODAXUtils").maybeTranslateObjective(
                      T.objective,
                      x,
                      I.optimization_goal,
                    ),
                    P = I.destination_type,
                    N = o("AdsAPIAdgroupRecordUtils").getPageID(t, D),
                    M = JSON.stringify(
                      r("AdsGetStandardTemplateDefaultJSONWithDestination")(
                        N,
                        P,
                        T.objective,
                      ),
                    ),
                    w = t;
                  (s.has(n.pluginKey) &&
                    (w = o(
                      "adsAutomaticFlowMutationSetDoFSpec",
                    ).adsAutomaticFlowLiteSpecMutator(
                      i,
                      { campaign: I, campaignGroup: T, adgroup: w },
                      m,
                    )),
                    o("AdsUEditorAdgroupAudiosAdsMutators").isEligibleForAudios(
                      w,
                      I,
                    ) ||
                      (w = o(
                        "AdsUEditorAdgroupAudiosAdsMutators",
                      ).removeAudiosField(w)),
                    (w = o("AdsUEditorAdgroupArAdsMutator").clearArAdsLink(
                      w,
                      D,
                    )),
                    o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(w) &&
                      $ !== r("AdsAPIObjectives").VIDEO_VIEWS &&
                      (w = o("AdsUEditorInstagramMutators").setAdFormatForDCO(
                        w,
                      )),
                    !o(
                      "AdsPlacementAPISpecReaderUtils",
                    ).isActiveFacebookFeedPosition(v) &&
                      o("AdsAdgroupUtils").isCarouselToVideoAdgroup(t) &&
                      (w = o(
                        "adsAutomaticFlowMutationSetDoFSpec",
                      ).adsDeleteDoFSpecMutator(w)));
                  var A =
                      o(
                        "AdsPlacementAPISpecReaderUtils",
                      ).isActiveFacebookFeedPosition(v) ||
                      o(
                        "AdsPlacementAPISpecReaderUtils",
                      ).isActiveFacebookStoryPosition(v) ||
                      o(
                        "AdsPlacementAPISpecReaderUtils",
                      ).isActiveInstagramPosition(v, "stream"),
                    F =
                      e.has($) &&
                      ((h = T.promoted_object) == null
                        ? void 0
                        : h.product_catalog_id) != null &&
                      r("adsACOIsValidDeviceAndPlacement")(v);
                  (A
                    ? $ === r("AdsAPIObjectives").MESSAGES &&
                      T.objective !== r("AdsAPIObjectives").OUTCOME_LEADS &&
                      r(
                        "AdsAdgroupSemanticFields",
                      ).pageWelcomeMessage.isSupported(D, w) &&
                      r("AdsAdgroupSemanticFields").pageWelcomeMessage.get(
                        D,
                        w,
                      ) == null &&
                      (w = r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(
                        D,
                        w,
                        M,
                      ))
                    : (r("adsACOIsACOAdgroup")(w) && !F
                        ? (w = r("adsACORemoveACOSpec")(w))
                        : o(
                            "AdsDCOImageCropDoFUtils",
                          ).isAdgroupOptInImageCropDof(w) &&
                          (w = o(
                            "AdsDCOImageCropDoFUtils",
                          ).setAdgroupOptOutImageCropDoF(w, D)),
                      $ === r("AdsAPIObjectives").MESSAGES &&
                        P === r("AdCampaignDestination").WHATSAPP &&
                        (w = r(
                          "AdsAdgroupSemanticFields",
                        ).pageWelcomeMessage.delete(D, w))),
                    $ === r("AdsAPIObjectives").MESSAGES &&
                      P === r("AdCampaignDestination").INSTAGRAM_DIRECT &&
                      r(
                        "AdsAdgroupSemanticFields",
                      ).pageWelcomeMessage.isSupported(D, w) &&
                      r("AdsAdgroupSemanticFields").pageWelcomeMessage.get(
                        D,
                        w,
                      ) == null &&
                      (w = r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(
                        D,
                        w,
                        M,
                      )));
                  var O = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.template_data.automated_product_tags.get(
                    w,
                  );
                  O === !0 &&
                    !R &&
                    !L &&
                    (w = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.template_data.automated_product_tags.delete(
                      w,
                    ));
                  var B = r("gkx")("21798");
                  if (B && E) {
                    var W;
                    w = o(
                      "AdsAdgroupLinkPostFormatMutators",
                    ).setLinkPostFormatWithExtraData_UNPURE(
                      r("AdsLinkPostFormat").SINGLE,
                      w,
                      null,
                      {
                        objective: $,
                        campaignGroupPromotedPageID:
                          (W = T.promoted_object) == null ? void 0 : W.page_id,
                        promotedObjectType: x,
                        campaign: I,
                        campaignGroup: T,
                        hostID: null,
                      },
                    );
                  }
                  E &&
                    $ !== r("AdsAPIObjectives").POST_ENGAGEMENT &&
                    o("AdsMediaFormatMutators").setMediaFormat(
                      "VIDEO",
                      w,
                      D,
                      $,
                    );
                  var q =
                      (y = w) == null || (y = y.creative) == null
                        ? void 0
                        : y.object_type,
                    U = o("AdsInteractivePollUtils").passPollGK(i);
                  if (
                    !S &&
                    (!U ||
                      !o(
                        "AdsPlacementAPISpecReaderUtils",
                      ).isActiveFacebookFeedPosition(v) ||
                      (q != null && q !== r("ApiAdObjectTypes").VIDEO))
                  ) {
                    var V;
                    ((V = w.creative) == null ||
                    (V = V.interactive_components_spec) == null
                      ? void 0
                      : V.components) != null &&
                      (w = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.interactive_components_spec.delete(w));
                  }
                  if (
                    (((C = w.creative) == null ||
                    (C = C.portrait_customizations) == null
                      ? void 0
                      : C.carousel_delivery_mode) === "fixed_num_cards" &&
                      (w = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.portrait_customizations.carousel_delivery_mode.set(
                        "optimal_num_cards",
                        w,
                      )),
                    g != null &&
                      ((w = o(
                        "AdsUEditorAdgroupPromoAdMutators",
                      ).updatePromoAdForDefaultOptIn(
                        { adgroup: w, campaign: I, campaignGroup: T },
                        i,
                        D,
                        g,
                        o("AdsUEditorAdgroupPromoAdMutatorUtils")
                          .PromoAdDefaultOptInCallSite.UPDATE_PLACEMENT,
                      )),
                      (w = o(
                        "AdsUEditorAdgroupEmailCaptureMutators",
                      ).updateEmailCaptureForDefaultOptIn(
                        { adgroup: w, campaign: I, campaignGroup: T },
                        i,
                        g,
                        o("AdsUEditorAdgroupPromoAdMutatorUtils")
                          .PromoAdDefaultOptInCallSite.UPDATE_PLACEMENT,
                      ))),
                    (w = c(w, v, i, I, T, D, $)),
                    p && (w = u(w)),
                    (w = d(
                      w,
                      (b = t.placement) == null ? void 0 : b.toJS(),
                      n,
                    )),
                    $ !== r("AdsAPIObjectives").POST_ENGAGEMENT || !S)
                  )
                    return w;
                  var H = o("AdsUEditorAdgroupCachedUtils").getCreative(
                      l,
                      a,
                      r("AdsEditorPostEditMode").INLINE,
                    ),
                    G = o("AdsUEditorAdgroupCachedUtils").getMetadata(l, a);
                  return o(
                    "AdsUEditorSetPostEditModeMutators",
                  ).setToUsingInlineCreation({
                    adgroup: w,
                    campaign: I,
                    campaignGroup: T,
                    cachedCreative: H,
                    cachedMetadata: G,
                    objective: $,
                    specPathPlugin: D,
                  });
                });
          },
          [
            o("AdsCampaignPlacementAddDataActionFlux").actionType,
            o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType,
          ],
        ),
      },
      p = m;
    l.default = p;
  },
  98,
);
