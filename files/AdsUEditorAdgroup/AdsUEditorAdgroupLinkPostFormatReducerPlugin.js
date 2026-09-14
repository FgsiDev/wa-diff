__d(
  "AdsUEditorAdgroupLinkPostFormatReducerPlugin",
  [
    "AdsAPlusCDAExperimentUtils",
    "AdsAPlusCDefaultOnceUtils",
    "AdsAdGroupLocalStoreExtensionMutators",
    "AdsAdgroupDynamicPartnerContentDefaultOnMutator",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSetLinkPostFormatDataActionFlux",
    "AdsAssetFeedUtils",
    "AdsBlendedAdsConstant",
    "AdsBlendedAdsStatusTrackerDataUpdateAction",
    "AdsBrandAwarenessUtils",
    "AdsBulkValueUtils",
    "AdsChildAttachmentsUtils",
    "AdsCreativeFeaturesUtils",
    "AdsDAAplusCImageBackgroundGenerationDefaultOnMutator",
    "AdsEditingAdgroupEditorContext",
    "AdsLinkPostFormat",
    "AdsLinkTypeUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupShopAdsBundle",
    "AdsUEditorAdgroupShopAdsBundleCreativeEditorSelectors",
    "AdsUEditorAdgroupShopAdsBundleMutators",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AppAdsPlayablesUtils",
    "BlendedAdsGuidanceUtils",
    "DAFlexibleFormatUtils",
    "PartnershipDynamicAdsGatingUtils",
    "ProductBrowsingAdsUtils",
    "Promise",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupProductCatalogIDSelector",
    "adsUEditorAdgroupSetPageReducerExtraDataSelector",
    "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableDACreativeFlexByDefaultSelector",
    "adsUEditorPreloadedIdentityToStorefrontSelector",
    "adsUEditorReactiveControlStickySettingSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "cr:9793",
    "justknobx",
    "nullthrows",
    "promiseDone",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
            linkTypeMap: o("adsUeditorBulkSelectedLinkTypeSelector")
              .adsUEditorAdsAdObjectLinkTypeMapSelector,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            isShopAdsBundleAvailable: o(
              "AdsUEditorAdgroupShopAdsBundleCreativeEditorSelectors",
            ).adsUEditorShopAdsBundleCreativeEditorSelector,
            promoAdDefaultOptinStatus: r(
              "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
            ),
            setPageExtraData: r(
              "adsUEditorAdgroupSetPageReducerExtraDataSelector",
            ),
            identitiesToStorefrontLO: o(
              "adsUEditorPreloadedIdentityToStorefrontSelector",
            ).preloadedIdentityToStorefrontSelector,
            adgroupProductCatalogIDLoadObject: r(
              "adsUEditorAdgroupProductCatalogIDSelector",
            ),
            remindersAdsDefaultEnabled: r(
              "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
            ),
            isCreativeFlexDefaultOn: r(
              "adsUEditorGetShouldEnableDACreativeFlexByDefaultSelector",
            ),
            userSettings: r("userSettingsSelector"),
          },
          function (e, t, a) {
            var i = a.account,
              l = a.adgroupProductCatalogIDLoadObject,
              s = a.getShouldEnableAutomaticFlowByDefault,
              d = a.identitiesToStorefrontLO,
              m = a.isCreativeFlexDefaultOn,
              p = a.isShopAdsBundleAvailable,
              _ = a.linkTypeMap,
              f = a.parentData,
              g = a.plugins,
              h = a.promoAdDefaultOptinStatus,
              y = a.remindersAdsDefaultEnabled,
              C = a.setPageExtraData,
              b = a.userSettings,
              v = C.getPage;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var a,
                C,
                S,
                R,
                L,
                E,
                k,
                I,
                T,
                D,
                x,
                $ = e,
                P = r("nullthrows")(f.get(e.id)),
                N = P.campaign,
                M = P.campaignGroup,
                w =
                  (a = N.promoted_object) == null
                    ? void 0
                    : a.full_funnel_objective,
                A = w || (M == null ? void 0 : M.objective),
                F = r("nullthrows")(g.get(e.id));
              (r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.standard_enhancements_catalog.enroll_status.get(
                e,
              ) === "OPT_IN" && o("AdsAPlusCDefaultOnceUtils").reset(),
                u(e, N, t),
                t.linkPostFormat === r("AdsLinkPostFormat").COLLECTIONS &&
                  o("AdsLinkTypeUtils").isMessagingAppsLinkTypeSelected($, F) &&
                  o("AdsBrandAwarenessUtils").isBrandObjective(A) &&
                  (M == null ? void 0 : M.is_odax_campaign_group) === !0 &&
                  ($ = o(
                    "AdsUEditorUnifiedCreationAdgroupMutators",
                  ).clearMessagingAppsFields(
                    $,
                    F,
                    o("AdsChildAttachmentsUtils").isCarouselAd($),
                    (M == null ? void 0 : M.is_odax_campaign_group) === !0,
                    A,
                  )),
                ((C = e.creative) == null
                  ? void 0
                  : C.branded_content_boosting_type) != null &&
                  ((S = e.creative) == null ? void 0 : S.product_set_id) !=
                    null &&
                  (o(
                    "PartnershipDynamicAdsGatingUtils",
                  ).shouldEnablePartnershipAdsDynamicAdsWithExistingPost() ||
                    o(
                      "PartnershipDynamicAdsGatingUtils",
                    ).shouldEnableContentSearchForPartnershipAdsDynamicAds()) &&
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
                    )($))));
              var O =
                  (R = $.creative) == null ||
                  (R = R.degrees_of_freedom_spec) == null ||
                  (R = R.creative_features_spec) == null
                    ? void 0
                    : R.image_touchups,
                B =
                  (L = $.creative) == null ||
                  (L = L.degrees_of_freedom_spec) == null ||
                  (L = L.creative_features_spec) == null
                    ? void 0
                    : L.image_uncrop;
              if (
                ((o("AdsAssetFeedUtils").isAutomaticFlowLiteAdgroup($) ||
                  o("AdsAssetFeedUtils").hasCreativeFeaturesAdgroup($) ||
                  o(
                    "AdsCreativeFeaturesUtils",
                  ).isCarouselToVideoOptedInFromAdgroup($) !== null) &&
                  ($ = o(
                    "adsAutomaticFlowMutationSetDoFSpec",
                  ).adsDeleteDoFSpecMutator($)),
                t.linkPostFormat !== r("AdsLinkPostFormat").MULTIPLE &&
                  ($ = o(
                    "AdsUEditorAdgroupShopAdsBundleMutators",
                  ).processShopAdsBundleEditorState(
                    $,
                    o("AdsUEditorAdgroupShopAdsBundle")
                      .SHOP_ADS_BUNDLE_DISBLED_EDITOR_STATE,
                  )),
                ($ = o(
                  "AdsAdgroupLinkPostFormatMutators",
                ).setLinkPostFormat_UNPURE(
                  t.linkPostFormat,
                  _ == null ? void 0 : _[e.id],
                  y,
                  $,
                  N,
                  M,
                  t.hostID,
                  t.vertical,
                  i,
                  b == null ? void 0 : b.getValue(),
                  t.catalogItemType,
                )),
                t.linkPostFormat !== r("AdsLinkPostFormat").SINGLE &&
                  ((E = $.creative) == null ? void 0 : E.playable_asset_id) !=
                    null &&
                  o(
                    "AppAdsPlayablesUtils",
                  ).isNewPlayableCreativeExperienceEnabled(A) &&
                  ($ = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.playable_asset_id.delete($)),
                t.linkPostFormat === r("AdsLinkPostFormat").MULTIPLE &&
                  ((k = e.creative) == null ? void 0 : k.product_set_id) !=
                    null &&
                  p &&
                  ($ = o(
                    "AdsUEditorAdgroupShopAdsBundleMutators",
                  ).processShopAdsBundleEditorState(
                    $,
                    o("AdsUEditorAdgroupShopAdsBundle")
                      .SHOP_ADS_BUNDLE_DEFAULT_EDITOR_STATE,
                  )),
                t.linkPostFormat === r("AdsLinkPostFormat").MULTIPLE &&
                  n("cr:9793") != null)
              ) {
                var W,
                  q,
                  U,
                  V,
                  H,
                  G,
                  z,
                  j,
                  K = (W = $.creative) == null ? void 0 : W.product_set_id,
                  Q = (q = $.creative) == null ? void 0 : q.object_story_spec,
                  X =
                    (U =
                      (V =
                        (H =
                          Q == null || (G = Q.link_data) == null
                            ? void 0
                            : G.link) != null
                          ? H
                          : Q == null ||
                              (z = Q.video_data) == null ||
                              (z = z.call_to_action) == null ||
                              (z = z.value) == null
                            ? void 0
                            : z.link) != null
                        ? V
                        : (j = $.creative) == null
                          ? void 0
                          : j.link_url) != null
                      ? U
                      : null;
                n("cr:9793")(
                  $,
                  K,
                  N == null ? void 0 : N.id,
                  X,
                  i,
                  m,
                  t.hostID,
                  c,
                );
              }
              var Y = r("adsUEditorReactiveControlStickySettingSelector")(
                  r("AdsEditingAdgroupEditorContext"),
                ),
                J =
                  t.linkPostFormat === r("AdsLinkPostFormat").MULTIPLE &&
                  o("AdsAPlusCDAExperimentUtils").isEligibleForAPlusCDA({
                    campaign: N,
                    campaignGroup: M,
                    adgroup: $,
                  }) &&
                  o(
                    "DAFlexibleFormatUtils",
                  ).isAdAccountEligibleForDAFormatControlDefaultOn() &&
                  o(
                    "DAFlexibleFormatUtils",
                  ).isUserEligibleForDAFormatControlDefaultOn(
                    Y,
                    "da_collection",
                    "catalog",
                  );
              if (J) {
                var Z;
                $ = o("AdsAPlusCDefaultOnceUtils").defaultOnceToAPlusC(
                  $,
                  A,
                  F,
                  (Z = e.creative) == null ? void 0 : Z.product_set_id,
                  t.vertical,
                  p,
                  t.catalogItemType,
                );
              }
              var ee =
                (t.linkPostFormat === r("AdsLinkPostFormat").MULTIPLE ||
                  t.linkPostFormat === r("AdsLinkPostFormat").SINGLE) &&
                o(
                  "AdsDAAplusCImageBackgroundGenerationDefaultOnMutator",
                ).isAdFormatEligibleForDAImageBackgroundGenDefaultOn({
                  campaign: N,
                  campaignGroup: M,
                  adgroup: $,
                });
              (ee &&
                ($ = o(
                  "AdsDAAplusCImageBackgroundGenerationDefaultOnMutator",
                ).adsDAAplusCImageBackgroundGenerationDefaultOnMutator($)),
                ((I = $.creative) == null || (I = I.asset_feed_spec) == null
                  ? void 0
                  : I.audios) != null &&
                  ((t.linkPostFormat !== r("AdsLinkPostFormat").MULTIPLE &&
                    t.linkPostFormat !== r("AdsLinkPostFormat").SINGLE) ||
                    (((T = $.creative) == null ? void 0 : T.product_set_id) !=
                      null &&
                      t.linkPostFormat === r("AdsLinkPostFormat").SINGLE)) &&
                  ($ = o(
                    "AdsUEditorAdgroupAudiosAdsMutators",
                  ).removeAudiosField($)),
                ($ = o(
                  "adsAutomaticFlowMutationSetDoFSpec",
                ).adsAutomaticFlowLiteSpecMutator(
                  i,
                  { campaign: N, campaignGroup: M, adgroup: $ },
                  s,
                )),
                r("justknobx")._("1418") &&
                  (O != null &&
                    ($ = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.degrees_of_freedom_spec.creative_features_spec.image_touchups.set(
                      O,
                      $,
                    )),
                  B != null &&
                    ($ = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.degrees_of_freedom_spec.creative_features_spec.image_uncrop.set(
                      B,
                      $,
                    ))));
              var te =
                (D = $) == null ||
                (D = D.creative) == null ||
                (D = D.object_story_spec) == null
                  ? void 0
                  : D.page_id;
              te != null
                ? ($ = o(
                    "AdsAdGroupLocalStoreExtensionMutators",
                  ).onAdgroupLinkPostFormatChangedLocalStoreExtensionMutator(
                    N,
                    M,
                    $,
                    v(te),
                  ))
                : ($ = o(
                    "AdsAdGroupLocalStoreExtensionMutators",
                  ).adsDeleteLocalStoreExtensionMutator($));
              var ne = d.getValue(),
                re = r("AdsAdgroupSemanticFields").instagramActorID.get(F, e);
              (($ = o(
                "AdsAdgroupDynamicPartnerContentDefaultOnMutator",
              ).AdsDeleteDynamicPartnerContentSpecMutator($)),
                ($ = o(
                  "AdsUEditorAdgroupMutators",
                ).maybeUpdateDestinationOptimizationFields(
                  $,
                  N,
                  A,
                  (x = b == null ? void 0 : b.getValue()) != null ? x : null,
                )));
              var oe =
                t.linkPostFormat === r("AdsLinkPostFormat").SINGLE
                  ? o("ShopsAdsOffsiteCheckoutAdsUtils").SAOffDefaultingTrigger
                      .LINK_POST_FORMAT_SINGLE_MEDIA_CHANGE
                  : t.linkPostFormat === r("AdsLinkPostFormat").MULTIPLE
                    ? o("ShopsAdsOffsiteCheckoutAdsUtils")
                        .SAOffDefaultingTrigger.LINK_POST_FORMAT_CAROUSEL_CHANGE
                    : t.linkPostFormat === r("AdsLinkPostFormat").COLLECTIONS
                      ? o("ShopsAdsOffsiteCheckoutAdsUtils")
                          .SAOffDefaultingTrigger
                          .LINK_POST_FORMAT_COLLECTION_CHANGE
                      : t.linkPostFormat === r("AdsLinkPostFormat").FLEXIBLE
                        ? o("ShopsAdsOffsiteCheckoutAdsUtils")
                            .SAOffDefaultingTrigger
                            .LINK_POST_FORMAT_FLEXIBLE_CHANGE
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                t.linkPostFormat,
                            );
                          })();
              return (
                ($ = o(
                  "AdsUEditorAdgroupMutators",
                ).maybeUpdateSAOffDestinationSpec(
                  $,
                  N,
                  M,
                  o("AdsBulkValueUtils").getUniformValueOrDefault(
                    l.getValue(),
                    null,
                  ),
                  ne,
                  te,
                  re,
                  oe,
                )),
                ($ = o(
                  "ProductBrowsingAdsUtils",
                ).maybeUpdateProductBrowsingSpec(
                  $,
                  !1,
                  void 0,
                  M,
                  N,
                  "link_post_format_change",
                )),
                h != null &&
                  (($ = o(
                    "AdsUEditorAdgroupPromoAdMutators",
                  ).updatePromoAdForDefaultOptIn(
                    { adgroup: $, campaign: N, campaignGroup: M },
                    i,
                    F,
                    h,
                    o("AdsUEditorAdgroupPromoAdMutatorUtils")
                      .PromoAdDefaultOptInCallSite.LINK_POST_FORMAT,
                  )),
                  ($ = o(
                    "AdsUEditorAdgroupEmailCaptureMutators",
                  ).updateEmailCaptureForDefaultOptIn(
                    { adgroup: $, campaign: N, campaignGroup: M },
                    i,
                    h,
                    o("AdsUEditorAdgroupPromoAdMutatorUtils")
                      .PromoAdDefaultOptInCallSite.LINK_POST_FORMAT,
                  ))),
                $
              );
            });
          },
          o("AdsAdgroupSetLinkPostFormatDataActionFlux").actionType,
        ),
      };
    function u(t, a, l) {
      var s;
      l.linkPostFormat !== r("AdsLinkPostFormat").MULTIPLE &&
        o("BlendedAdsGuidanceUtils").shouldShowGuidanceForSource(
          (s = t.metadata) == null ? void 0 : s.adgroup_creation_source,
        ) &&
        t.created_time == null &&
        r("promiseDone")((e || (e = n("Promise"))).resolve({}), function () {
          r("AdsBlendedAdsStatusTrackerDataUpdateAction").dispatch(
            {
              adgroupID: t.id,
              campaignID: a.id,
              status: o("AdsBlendedAdsConstant").AdsBlendedAdsStatus
                .DRAFT_FORMAT_CHANGED,
            },
            {
              line: "540",
              module: "AdsUEditorAdgroupLinkPostFormatReducerPlugin.js",
              moduleID: i.id,
            },
          );
        });
    }
    var c = "link_post_format_reducer",
      d = s;
    l.default = d;
  },
  98,
);
