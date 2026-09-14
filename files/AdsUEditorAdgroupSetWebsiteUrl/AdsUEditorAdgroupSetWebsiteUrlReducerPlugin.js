__d(
  "AdsUEditorAdgroupSetWebsiteUrlReducerPlugin",
  [
    "AdAccountProductExtensionsMainProductKey",
    "AdAccountProductExtensionsMainProductSetDataProvider",
    "AdToCatalogUtils",
    "AdsAPIAdgroupRecordGetWebsiteURL",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupCallToActionMutatorsAdapter",
    "AdsAdgroupConnectedSourcesMutators",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsBulkValueUtils",
    "AdsCAGAssetUtils",
    "AdsCallToActionTypesUtils",
    "AdsConnectedSourcesEPACatalogDefaultOn",
    "AdsCreativeSiteLinksAPICallUtils",
    "AdsDynamicAdsUtils",
    "AdsEPAWebsiteUrlPEDefaultOn",
    "AdsEditingAdgroupEditorContext",
    "AdsExistingPostCTAUtils",
    "AdsFlexibleFormatAdexUtils",
    "AdsImageInfoStore",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMetadataWebsiteDestinationUtils",
    "AdsMetadataWebsiteMediaUtils",
    "AdsMutators",
    "AdsPCAConsolidationUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsPromotedObjectTypes",
    "AdsSAInDAUtils",
    "AdsSFMediaPickerDataProvider",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetDestinationScreenshotSpecMutator",
    "AdsUEditorAdgroupSetFeaturedOfferingSpecMutator",
    "AdsUEditorAdgroupSetWebsiteMediaSpecMutator",
    "AdsUEditorAdgroupSetWebsiteSummarySpecMutator",
    "AdsUEditorAdgroupSetWebsiteURLDataActionFlux",
    "AdsUEditorAdgroupWebsiteDestinationOptimizationAlternateURLMutators",
    "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorHostIDs",
    "AdsUEditorWebsiteAndAppMutators",
    "CreativeAssetGroupsFlowSafeUtils",
    "DestinationOptimizationUtils.react",
    "ProductBrowsingAdsUtils",
    "PromoAdsEmailCaptureUnificationGatingUtils",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
    "ShopifyPromoCodesAdsManagerUtils",
    "ads-lib-urllib",
    "adsAdgroupCreativeWizardIsPreSetupSelector",
    "adsCallToActionGetDefaultCallToActionType",
    "adsCampaignPromotedObjectSelector",
    "adsCreateSelector",
    "adsDAShouldPrefillWebsiteURL",
    "adsGetUniformValueSelector",
    "adsPCMLogConversionDomainMutation",
    "adsUEditorAccountIDSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupAPlusCProductExtensionHasEligibileProductSetSelector",
    "adsUEditorAdgroupCreativeAssetGroupsIndexSelector",
    "adsUEditorAdgroupDynamicFlexibleIdentityShopSelectorExtraDataSelector",
    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
    "adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector",
    "adsUEditorAdgroupWebsiteMediaExtensionEligibilitySelector",
    "adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector",
    "adsUEditorCTXSMCCatalogSelector",
    "adsUEditorCreativeSiteLinksNoticeDataSelector",
    "adsUEditorFeaturedOfferingEligibilitySelector",
    "adsUEditorIsAdgroupEligibleForCtdPeSelector",
    "adsUEditorIsAdgroupEligibleForCtwaPeSelector",
    "adsUEditorShouldCallSDDAndUpdateShopDestinationSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "debounce",
    "gkx",
    "ifRequired",
    "isDestinationUsability",
    "isInstagramARURL",
    "isTruthy",
    "justknobx",
    "nullthrows",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n;
      return (
        ((t = e.creative) == null ||
        (t = t.object_story_spec) == null ||
        (t = t.link_data) == null ||
        (t = t.call_to_action) == null ||
        (t = t.value) == null
          ? void 0
          : t.app_link) != null ||
        ((n = e.creative) == null ||
        (n = n.object_story_spec) == null ||
        (n = n.video_data) == null ||
        (n = n.call_to_action) == null ||
        (n = n.value) == null
          ? void 0
          : n.app_link) != null
      );
    }
    function s(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.object_story_spec) == null ||
        (t = t.link_data) == null ||
        (t = t.call_to_action) == null ||
        (t = t.value) == null
          ? void 0
          : t.link) != null
      );
    }
    var u = 1e3,
      c = r("debounce")(function (e, t, n) {
        o(
          "AdsUEditorAdgroupPromoAdMutators",
        ).refreshPromotionalMetadataOnCatalogChange(e, t, n, !0);
      }, u),
      d = 1e3,
      m = r("debounce")(function (e, t) {
        o(
          "AdsUEditorAdgroupEmailCaptureMutators",
        ).refreshEmailCaptureMetadataOnCatalogChange(e, t, !0);
      }, d);
    function p(e, t) {
      return e !== t;
    }
    var _ = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            accountID: r("adsUEditorAccountIDSelector"),
            account: r("adsUEditorAccountSelector"),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            onsiteDestinations: r(
              "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
            ).toFluxSelector(),
            destinationLinkType: o("adsUeditorBulkSelectedLinkTypeSelector")
              .adsUEditorBulkSelectedLinkTypeSelector,
            shouldCallSDDAndUpdateShopDestination: r(
              "adsUEditorShouldCallSDDAndUpdateShopDestinationSelector",
            ),
            selectedGroupIndex: r(
              "adsUEditorAdgroupCreativeAssetGroupsIndexSelector",
            ),
            shopifyShopAdsPromotionsEligibility: o(
              "adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector",
            ).adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector,
            getImage: r("AdsImageInfoStore").getFullSizeSelector,
            siteLinksDefaultOnData: r(
              "adsUEditorCreativeSiteLinksNoticeDataSelector",
            ),
            targetingCountries: o(
              "adsUEditorAdgroupDynamicFlexibleIdentityShopSelectorExtraDataSelector",
            ).targetingCountrySelector,
            mediaPickerData: r("AdsSFMediaPickerDataProvider").toFluxSelector(),
            pageID: r("adsGetUniformValueSelector")(
              o("AdsUEditorAdgroupBulkSelectors").pageID,
              null,
            ),
            isEligibleForCombinedWebsiteHighlights: r("adsCreateSelector")(
              [
                o("adsUEditorAdgroupWebsiteMediaExtensionEligibilitySelector")
                  .adsUEditorAdgroupWebsiteMediaExtensionEligibilitySilentGKSelector,
              ],
              function () {
                return (
                  r("justknobx")._("427") ||
                  o(
                    "AdsMetadataWebsiteMediaUtils",
                  ).isEligibleForCombinedWebsiteHighlightsExperience({
                    exposure: "silent",
                    fromExistingPostFlow: !1,
                  })
                );
              },
              { name: i.id + ".isEligibleForCombinedWebsiteHighlights" },
            ),
            isWebsiteMediaExtensionEligibile: o(
              "adsUEditorAdgroupWebsiteMediaExtensionEligibilitySelector",
            ).adsUEditorAdgroupWebsiteMediaExtensionEligibilitySilentGKSelector,
            isWebsiteSummaryExtensionEligible: o(
              "adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector",
            ).adsUEditorAdgroupWebsiteSummaryStructuralEligibilitySelector,
            isCTMAd: o("adsUEditorCTXSMCCatalogSelector")
              .adsUEditorIsCampaignCTMAdSelector,
            isEligibleForCtdPe: r(
              "adsUEditorIsAdgroupEligibleForCtdPeSelector",
            ),
            isEligibleForCtwaPe: r(
              "adsUEditorIsAdgroupEligibleForCtwaPeSelector",
            ),
            isFeaturedOfferingEligible: o(
              "adsUEditorFeaturedOfferingEligibilitySelector",
            ).adsUEditorFeaturedOfferingEligibilitySelector,
            userSettings: r("userSettingsSelector"),
          },
          function (t, n, a) {
            var i,
              l = a.account,
              u = a.accountID,
              d = a.destinationLinkType,
              _ = a.getImage,
              f = a.isCTMAd,
              g = a.isEligibleForCombinedWebsiteHighlights,
              h = a.isEligibleForCtdPe,
              y = a.isEligibleForCtwaPe,
              C = a.isFeaturedOfferingEligible,
              b = a.isWebsiteMediaExtensionEligibile,
              v = a.isWebsiteSummaryExtensionEligible,
              S = a.mediaPickerData,
              R = a.onsiteDestinations,
              L = a.pageID,
              E = a.parentData,
              k = a.selectedGroupIndex,
              I = a.shopifyShopAdsPromotionsEligibility,
              T = a.shouldCallSDDAndUpdateShopDestination,
              D = a.siteLinksDefaultOnData,
              x = a.targetingCountries,
              $ = a.userSettings,
              P =
                (i = r("ads-lib-urllib").cleanupUrl(n.websiteURL)) != null
                  ? i
                  : "",
              N = g;
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              function (t, a) {
                var i,
                  g,
                  M,
                  w = r("nullthrows")(E.get(a)),
                  A = w.campaign,
                  F = w.campaignGroup,
                  O = w.specPlugin;
                if (
                  r("isTruthy")(n.shouldPrefillWebsiteURL) &&
                  !r("adsDAShouldPrefillWebsiteURL")(t)
                )
                  return t;
                var B = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: A, campaignGroup: F }),
                  W =
                    B === r("AdsPromotedObjectTypes").MOBILE_APP &&
                    F.objective === r("AdsAPIObjectives").LINK_CLICKS,
                  q = "",
                  U =
                    (i = A.promoted_object) == null
                      ? void 0
                      : i.object_store_urls,
                  V =
                    F.objective === r("AdsAPIObjectives").LINK_CLICKS &&
                    U != null &&
                    U.size > 0;
                if (V && U != null) {
                  var H;
                  q = (H = U.first()) != null ? H : "";
                } else {
                  var G, z;
                  q =
                    (G =
                      (z = A.promoted_object) == null
                        ? void 0
                        : z.object_store_url) != null
                      ? G
                      : "";
                }
                var j = P === "" && W && !q ? q : P,
                  K = r("AdsAPIAdgroupRecordGetWebsiteURL")(t, O),
                  Q = o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t),
                  X =
                    (g = o(
                      "AdsEPAWebsiteUrlPEDefaultOn",
                    ).getEPAWebsiteUrlCandidate(t)) != null
                      ? g
                      : "",
                  Y =
                    (M = t.creative) == null ||
                    (M = M.creative_sourcing_spec) == null
                      ? void 0
                      : M.source_url;
                return o("AdsMutators").chain(
                  function (t) {
                    return e(t) && s(t)
                      ? o(
                          "AdsUEditorCallToActionMutators",
                        ).deleteCallToActionAppLinkField(t)
                      : t;
                  },
                  function (e) {
                    var t;
                    return (B === r("AdsPromotedObjectTypes").WEB_AND_APP &&
                      !o("AdsDynamicAdsUtils").isDynamicAd(e)) ||
                      (o("AdsPCAConsolidationUtils").isPCAVariation(A) &&
                        (A == null || (t = A.promoted_object) == null
                          ? void 0
                          : t.variation) === "PRODUCT_SET_AND_OMNICHANNEL" &&
                        o(
                          "AdsSAInDAUtils",
                        ).isSAInDAEnabledUsingCampaignAndAdgroup(A, e) &&
                        o("AdsPCAConsolidationUtils")
                          .getEligibleOptimizationGoalsForOmnichannel()
                          .includes(A.optimization_goal))
                      ? o(
                          "AdsUEditorWebsiteAndAppMutators",
                        ).setOmnichannelLinkSpecWebsiteURL(e, j)
                      : e;
                  },
                  function (e) {
                    var t =
                        Q &&
                        F.objective === r("AdsAPIObjectives").LINK_CLICKS &&
                        B === r("AdsPromotedObjectTypes").MOBILE_APP &&
                        r("gkx")("7662"),
                      n = o(
                        "AdsExistingPostCTAUtils",
                      ).isAwarenessExistingPostWithDLGK(Q, F.objective);
                    if (t || n) {
                      var a,
                        i = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.call_to_action.value.link.set(j)(e);
                      if (
                        ((a = e.creative) == null ||
                        (a = a.call_to_action) == null
                          ? void 0
                          : a.type) == null
                      ) {
                        var l,
                          s =
                            (l = r("adsCallToActionGetDefaultCallToActionType")(
                              F.objective,
                              B,
                            )) != null
                              ? l
                              : "LEARN_MORE";
                        i = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.call_to_action.type.set(s)(i);
                      }
                      return i;
                    }
                    return o(
                      "AdsAdgroupConnectedSourcesMutators",
                    ).setDestinationUrlAndSourceUrlMutator(e, A, F, O, j);
                  },
                  function (e) {
                    if (
                      !Q ||
                      j === X ||
                      !o(
                        "AdsEPAWebsiteUrlPEDefaultOn",
                      ).isEPAWebsiteUrlPEDefaultOnEnabled()
                    )
                      return e;
                    var t = o(
                      "AdsAdgroupConnectedSourcesMutators",
                    ).setSourceUrlMutator(e, j);
                    return o(
                      "AdsConnectedSourcesEPACatalogDefaultOn",
                    ).hasManualCatalogOptOut(e)
                      ? t
                      : o(
                          "AdsConnectedSourcesEPACatalogDefaultOn",
                        ).applyEPACatalogReDefaultOn(t, j);
                  },
                  function (e) {
                    var t = e;
                    if (r("isInstagramARURL")(j))
                      t = o(
                        "AdsAdgroupCallToActionMutatorsAdapter",
                      ).setCallToAction("TRY_IN_CAMERA", t);
                    else if (
                      o("AdsCallToActionTypesUtils").getCTATypeFromAdgroup(
                        e,
                      ) === "TRY_IN_CAMERA"
                    ) {
                      var n = r("adsCallToActionGetDefaultCallToActionType")(
                        F.objective,
                        B,
                      );
                      t = o(
                        "AdsAdgroupCallToActionMutatorsAdapter",
                      ).setCallToAction(
                        n != null
                          ? n
                          : r("gkx")("14839")
                            ? "SEE_DETAILS"
                            : "LEARN_MORE",
                        t,
                      );
                    }
                    return t;
                  },
                  function (e) {
                    if (
                      r("AdsAdgroupRecordAccessors").conversion_domain.get(e) !=
                      null
                    )
                      return e;
                    var t = e;
                    return (
                      r("ifRequired")(
                        "AdsUEditorCampaignSignalsAvailableDomainsSelectors",
                        function (o) {
                          var a,
                            i =
                              o.adsUEditorCampaignSignalsAvailableDomainsSelector;
                          if (n.hostID === r("AdsUEditorHostIDs").EDITING) {
                            var l =
                              (a = i(
                                r("AdsEditingAdgroupEditorContext"),
                              ).getValue()) == null
                                ? void 0
                                : a
                                    .map(function (e) {
                                      var t = e.domain;
                                      return t;
                                    })
                                    .find(function (e) {
                                      return j.includes(e);
                                    });
                            l != null &&
                              (r("adsPCMLogConversionDomainMutation")({
                                adgroupID: e.id,
                                oldDomain: e.conversion_domain,
                                newDomain: l,
                                source: "url",
                              }),
                              (t = r(
                                "AdsAdgroupRecordAccessors",
                              ).conversion_domain.set(l, e)));
                          }
                        },
                      ),
                      t
                    );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupOnsiteDestinationsMutators",
                    ).updateOnsiteDestinationsForWebsiteURLUpdate(
                      e,
                      A,
                      O,
                      T,
                      u,
                      _,
                      R,
                      n.storefronts,
                      n.websiteURL,
                      n.adgroupIDs,
                      o("AdsBulkValueUtils").getUniformValue(d),
                    );
                  },
                  function (e) {
                    if (
                      o(
                        "CreativeAssetGroupsFlowSafeUtils",
                      ).isFormatCreativeAssetGroupsFromAdgroupRecord(e)
                    ) {
                      var t;
                      if (
                        o(
                          "AdsPCAUnifiedFormatEligibilityUtils",
                        ).isGKEnableForUnifiedMediaSetupFlow() &&
                        o(
                          "AdsPCAUnifiedFormatEligibilityUtils",
                        ).isMediaSourcePCAUnifiedFormat(
                          (t = e.metadata) == null
                            ? void 0
                            : t.adgroup_media_source,
                        )
                      ) {
                        for (
                          var n = e,
                            r =
                              o("AdsCAGAssetUtils").getCreativeAssetGroupCount(
                                n,
                              ),
                            a = 0;
                          a < r;
                          a++
                        )
                          n = o(
                            "AdsAdgroupCreativeAssetGroupsSpecMutators",
                          ).setCagCallToActionValueByValueType(
                            n,
                            a,
                            j,
                            "link",
                            O,
                          );
                        return n;
                      }
                      return o(
                        "AdsAdgroupCreativeAssetGroupsSpecMutators",
                      ).setCagCallToActionValueByValueType(e, k, j, "link", O);
                    }
                    return e;
                  },
                  function (e) {
                    var t,
                      a = Q
                        ? Y
                        : (t = e.creative) == null ||
                            (t = t.creative_sourcing_spec) == null
                          ? void 0
                          : t.source_url;
                    if (
                      (a == null ||
                        a === "" ||
                        o(
                          "AdsCreativeSiteLinksAPICallUtils",
                        ).shouldFixInvalidSourceUrl(
                          e,
                          a,
                          e.id,
                          n.websiteURL,
                          "non_pac",
                        )) &&
                      o(
                        "AdsMetadataConnectedSourcesUtils",
                      ).isEligibleForSiteExtensionsByCampaignAndAdgroup(A, F, e)
                    ) {
                      var i,
                        l,
                        s,
                        c = o(
                          "AdsAdgroupConnectedSourcesMutators",
                        ).setSourceUrlMutator(e, j);
                      if (
                        u != null &&
                        (((i = e.creative) == null ||
                        (i = i.creative_sourcing_spec) == null
                          ? void 0
                          : i.site_links_spec) == null ||
                          ((l = e.creative) == null ||
                          (l = l.creative_sourcing_spec) == null
                            ? void 0
                            : l.site_links_spec.size) === 0) &&
                        ((s = D.getValue()) == null
                          ? void 0
                          : s.defaultOnType) == null
                      ) {
                        var d,
                          m = r("adsCampaignPromotedObjectSelector")(A.id),
                          p =
                            (d = e.creative) == null ||
                            (d = d.object_story_spec) == null
                              ? void 0
                              : d.page_id;
                        o("AdsCreativeSiteLinksAPICallUtils")
                          .loadSiteLinksWithMutation(
                            A,
                            j,
                            u,
                            e.id,
                            m,
                            "AdsUEditorAdgroupSetWebsiteUrlReducerPlugin",
                            x,
                            p,
                            o(
                              "AdsMetadataConnectedSourcesUtils",
                            ).getMediaPickerImageHash(S),
                          )
                          .then(function () {})
                          .catch(function () {});
                      }
                      return c;
                    }
                    return e;
                  },
                  function (e) {
                    return b
                      ? o(
                          "AdsUEditorAdgroupSetWebsiteMediaSpecMutator",
                        ).setWebsiteMediaDefaultAdgroupField(e, u, j, p(j, K))
                      : e;
                  },
                  function (e) {
                    return v
                      ? o(
                          "AdsUEditorAdgroupSetWebsiteSummarySpecMutator",
                        ).setWebsiteSummaryDefaultingAdgroupField(
                          e,
                          u,
                          j,
                          p(j, K),
                        )
                      : e;
                  },
                  function (e) {
                    return o(
                      "AdsMetadataWebsiteDestinationUtils",
                    ).isWebsiteDestinationAd(F.objective, B)
                      ? o(
                          "AdsUEditorAdgroupSetDestinationScreenshotSpecMutator",
                        ).setDestinationScreenshotDefaultAdgroupField(
                          e,
                          u,
                          j,
                          p(j, K),
                        )
                      : e;
                  },
                  function (e) {
                    return C &&
                      o(
                        "AdsFlexibleFormatAdexUtils",
                      ).passGKForCombinedFeaturedOfferings(!0)
                      ? o(
                          "AdsUEditorAdgroupSetFeaturedOfferingSpecMutator",
                        ).setFeaturedOfferingDefaultAdgroupField(e, j)
                      : e;
                  },
                  function (e) {
                    var t,
                      n,
                      i,
                      l = r(
                        "adsUEditorAdgroupAPlusCProductExtensionHasEligibileProductSetSelector",
                      )(r("AdsEditingAdgroupEditorContext")),
                      s = o(
                        "adsAdgroupCreativeWizardIsPreSetupSelector",
                      ).adsAdgroupCreativeWizardIsPreSetupSelector(
                        r("AdsEditingAdgroupEditorContext"),
                      ),
                      c =
                        (t =
                          (n = A.promoted_object) == null
                            ? void 0
                            : n.pixel_id) != null
                          ? t
                          : null,
                      d =
                        (i = e.creative) == null ||
                        (i = i.creative_sourcing_spec) == null ||
                        (i = i.catalog) == null ||
                        (i = i.action_metadata) == null
                          ? void 0
                          : i.type;
                    if (
                      !o(
                        "AdToCatalogUtils",
                      ).shouldSkipPECatalogFetchForPartialUrl(j) &&
                      l &&
                      o(
                        "AdsMetadataConnectedSourcesUtils",
                      ).shouldRefetchCatalog(d, s, j)
                    )
                      if (
                        o(
                          "AdToCatalogUtils",
                        ).isPEDefaultingLatencyImprovementEnabled(!0)
                      )
                        var m = o("AdToCatalogUtils").buildPECatalogMatchKey({
                            adAccountID: u,
                            adgroupID: a,
                            isCTMAd: f != null ? f : !1,
                            isEligibleForCtdPe: h != null ? h : !1,
                            isEligibleForCtwaPe: y != null ? y : !1,
                            pageID: L,
                            pixelID: c,
                            url: j,
                          }),
                          p = r(
                            "AdAccountProductExtensionsMainProductSetDataProvider",
                          )().get(m);
                      else
                        var _ = new (r(
                            "AdAccountProductExtensionsMainProductKey",
                          ))({
                            adAccountID: u,
                            url: j,
                            isCTMAd: !1,
                            requestSource: "PRODUCT_EXTENSIONS",
                            pixelID: c,
                            pageID: L,
                          }),
                          g = r(
                            "AdAccountProductExtensionsMainProductSetDataProvider",
                          )().get(_);
                    return e;
                  },
                  function (e) {
                    if (I.shouldUpdatePromotionalMetadataCouponCodes) {
                      var t = n.websiteURL,
                        a = o(
                          "ShopifyPromoCodesAdsManagerUtils",
                        ).extractedCouponCodeFromWebsiteURL(t);
                      return t == null || t === "" || a === ""
                        ? r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.asset_feed_spec.promotional_metadata.coupon_codes.detected_from_merchant_website_url.delete(
                            e,
                          )
                        : e;
                    }
                    return e;
                  },
                  function (e) {
                    var t,
                      n = o(
                        "DestinationOptimizationUtils.react",
                      ).destinationOptimizationEnabled(
                        o("AdsBulkValueUtils").getUniformValue(d),
                        (t = A.promoted_object) == null
                          ? void 0
                          : t.custom_event_type,
                        e,
                        F.objective,
                        B,
                      );
                    if (n) {
                      var r,
                        a = o(
                          "DestinationOptimizationUtils.react",
                        ).isHomePageURL(j);
                      return o(
                        "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
                      ).setWebsiteDestinationOptimizationStatus(
                        e,
                        a,
                        !0,
                        !1,
                        o("DestinationOptimizationUtils.react")
                          .DestinationOptimizationEditSource.DESTINATION_CARD,
                        (r = $ == null ? void 0 : $.getValue()) != null
                          ? r
                          : null,
                        j,
                      );
                    }
                    return e;
                  },
                  function (e) {
                    var t,
                      n = o(
                        "DestinationOptimizationUtils.react",
                      ).destinationOptimizationEnabled(
                        o("AdsBulkValueUtils").getUniformValue(d),
                        (t = A.promoted_object) == null
                          ? void 0
                          : t.custom_event_type,
                        e,
                        F.objective,
                        B,
                      );
                    if (
                      n &&
                      o(
                        "isDestinationUsability",
                      ).isDestinationOptimizationAdexH12026()
                    ) {
                      var r = o(
                        "DestinationOptimizationUtils.react",
                      ).isHomePageURL(j);
                      if (!r || j === "www.noalternative.com")
                        return o(
                          "AdsUEditorAdgroupWebsiteDestinationOptimizationAlternateURLMutators",
                        ).clearWebsiteDestinationOptimizationAlternativeURLStatus(
                          e,
                        );
                      var a = [
                        {
                          default_url: j + "/1",
                          default_value_weight: 0,
                          default_value_weight_direction: "increase",
                        },
                        {
                          default_url: j + "/2",
                          default_value_weight: 0,
                          default_value_weight_direction: "increase",
                        },
                        {
                          default_url: j + "/3",
                          default_value_weight: 0,
                          default_value_weight_direction: "increase",
                        },
                      ];
                      return o(
                        "AdsUEditorAdgroupWebsiteDestinationOptimizationAlternateURLMutators",
                      ).setWebsiteDestinationOptimizationAlternativeURLStatus(
                        e,
                        a,
                      );
                    }
                    return e;
                  },
                  function (e) {
                    return (
                      o(
                        "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
                      ).isPromoAdOptedInWithProductCatalogForAdgroup(e) &&
                        c({ adgroup: e, campaign: A, campaignGroup: F }, l, O),
                      o(
                        "PromoAdsEmailCaptureUnificationGatingUtils",
                      ).isEmailCaptureOfferUnificationEnabled() &&
                        o(
                          "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
                        ).isEmailCaptureOptedInForAdgroup(e, A, F) &&
                        m({ adgroup: e, campaign: A, campaignGroup: F }, l),
                      e
                    );
                  },
                  function (e) {
                    return j !== K && (r("gkx")("21512") || r("gkx")("19111"))
                      ? o(
                          "AdsAdgroupConnectedSourcesMutators",
                        ).clearStaleWebsiteHighlightsMutator(e, N)
                      : e;
                  },
                  function (e) {
                    return p(j, K)
                      ? r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.creative_sourcing_spec.dynamic_data_refresh_spec.delete(
                          e,
                        )
                      : e;
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupMediaSourcingSpecMutators",
                    ).maySetMediaSourcingL1Destination(e);
                  },
                  function (e) {
                    return j !== K
                      ? o(
                          "ProductBrowsingAdsUtils",
                        ).maybeUpdateProductBrowsingSpec(
                          e,
                          !1,
                          null,
                          F,
                          A,
                          "set_website_url",
                        )
                      : e;
                  },
                )(t);
              },
            );
          },
          o("AdsUEditorAdgroupSetWebsiteURLDataActionFlux").actionType,
        ),
      },
      f = _;
    l.default = f;
  },
  98,
);
