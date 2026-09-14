__d(
  "AdsUEditorAdgroupOnPartnershipAdContentSearchSaveReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsBrandedContentModalMutators",
    "AdsEditorPostEditMode",
    "AdsExistingPostCTAUtils",
    "AdsInstagramUsernameStore",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutators",
    "AdsPagePostUtils",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupOnPartnershipAdContentSearchSaveActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignShopAdsUtils",
    "AdsUEditorSetPostEditModeMutators",
    "BrandedContentAdsUtils",
    "ClickToMessageCTDFeatureGating",
    "DAFlexibleFormatUtils",
    "PECatalogStickyOptOutInputs",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupHasInstagramPlacementsSelector",
    "adsUEditorAdgroupIsPVPartnershipAdsEligibleSelector",
    "adsUEditorAdgroupSetPageReducerExtraDataSelector",
    "adsUEditorGetShouldEnableAPlusCUseExistingPostByDefaultGetValueSelector",
    "immutable",
    "isFalsey",
    "isTruthy",
    "nullthrows",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a) {
        var e,
          i,
          l,
          s = n.fbPostID;
        if (!r("isTruthy")(s)) return t;
        var u =
            (e =
              a == null || (i = a.campaign) == null
                ? void 0
                : i.destination_type) != null
              ? e
              : r("AdCampaignDestination").UNDEFINED,
          c =
            o("AdsPagePostUtils").isSesameEligible(n.fbPostOrIGMedia, u, !0) ||
            o("AdsPagePostUtils").isLvaAppInstallSesameEligible(
              n.fbPostOrIGMedia,
              u,
              a == null || (l = a.campaignGroup) == null ? void 0 : l.objective,
            );
        if (c) {
          var d, m;
          return o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.object_story_id.delete,
            r("AdsAdgroupRecordAccessors").creative.object_id.set(
              n.primaryPageID,
            ),
            r("AdsAdgroupRecordAccessors").creative.source_facebook_post_id.set(
              (d = (m = n.fbPostOrIGMedia) == null ? void 0 : m.id) != null
                ? d
                : o("AdsExistingPostCTAUtils").maybeGetPostIDFromObjectStoryID(
                    s,
                  ),
            ),
          )(t);
        }
        if (r("isTruthy")(n.isDynamicAdsFlow)) {
          var p = o("AdsPagePostUtils").maybeGetPostIdFromPagePostId(s);
          return o(
            "AdsBrandedContentModalMutators",
          ).updateAdgroupWithParentSourceFacebookPostId(t, r("nullthrows")(p));
        }
        return o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.object_id.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_id.set(s),
        )(t);
      },
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            setPageExtraData: r(
              "adsUEditorAdgroupSetPageReducerExtraDataSelector",
            ),
            hasInstagramPlacements: r(
              "adsUEditorAdgroupHasInstagramPlacementsSelector",
            ),
            getShouldEnableAPlusCExistingPostDefault: r(
              "adsUEditorGetShouldEnableAPlusCUseExistingPostByDefaultGetValueSelector",
            ),
            account: r("adsUEditorAccountSelector"),
            isPVPartnershipAdsEligible: r(
              "adsUEditorAdgroupIsPVPartnershipAdsEligibleSelector",
            ),
            getPage: r("AdsPageStore").getSelector,
            getInstagramAccount: r("AdsInstagramUsernameStore")
              .getForAdgroupSelector,
            userSettings: r("userSettingsSelector"),
          },
          function (t, n, a) {
            var i,
              l,
              s = a.account,
              u = a.getInstagramAccount,
              c = a.getPage,
              d = a.getShouldEnableAPlusCExistingPostDefault,
              m = a.hasInstagramPlacements,
              p = a.isPVPartnershipAdsEligible,
              _ = a.parentData,
              f = a.setPageExtraData,
              g = a.userSettings,
              h = {},
              y = n.adgroupIDs[0],
              C = y != null ? _.get(y) : null,
              b =
                y != null
                  ? (i = t.get(y)) == null
                    ? void 0
                    : i.getValue()
                  : null,
              v = o(
                "PECatalogStickyOptOutInputs",
              ).resolveGranularStickyOptOutInputs(
                C == null || (l = C.campaignGroup) == null
                  ? void 0
                  : l.objective,
                b != null && C != null
                  ? o("PECatalogStickyOptOutInputs").resolveStickyOptOutPageID(
                      b,
                      C.specPlugin,
                    )
                  : null,
                null,
              ),
              S = v.objective,
              R = v.pageId,
              L = v.urlType,
              E = o(
                "AdsMetadataConnectedSourcesUtils",
              ).getExistingPostStickyOptOut(
                s.account_id,
                g == null ? void 0 : g.getValue(),
                S,
                R,
                L,
                n.adgroupIDs[0],
              );
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              function (t, a) {
                var i,
                  l,
                  g,
                  y,
                  C,
                  b,
                  v,
                  S = t;
                if (
                  r("isFalsey")(n.isDynamicAdsFlow) &&
                  r("isTruthy")(n.isAudioSwapped)
                ) {
                  var R = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.audios.get(t);
                  S = o("AdsMutators").chain(
                    r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
                      .delete,
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.audios.set(
                      r("immutable").fromJS(R),
                    ),
                  )(S);
                } else
                  r("isFalsey")(n.isDynamicAdsFlow) &&
                    (S = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.delete(S));
                (r("isFalsey")(n.isDynamicAdsFlow) &&
                  (S = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.delete(S)),
                  r("isTruthy")(n.isDynamicAdsFlow) &&
                    (S = o("AdsMutators").chain(
                      r("AdsAdgroupRecordAccessors").creative.branded_content
                        .parent_source_instagram_media_id.delete,
                      r("AdsAdgroupRecordAccessors").creative.branded_content
                        .parent_source_facebook_post_id.delete,
                    )(S)),
                  (S = o("AdsMutators").chain(
                    r("AdsAdgroupRecordAccessors").creative.object_story_id
                      .delete,
                    r("AdsAdgroupRecordAccessors").creative
                      .facebook_branded_content.sponsor_page_id.delete,
                    r("AdsAdgroupRecordAccessors").creative
                      .instagram_branded_content.delete,
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .content_search_input.delete,
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .promoted_page_id.delete,
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .ui_version.delete,
                    r("AdsAdgroupRecordAccessors").creative
                      .source_instagram_media_id.delete,
                    r("AdsAdgroupRecordAccessors").creative.object_id.delete,
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .instagram_boost_post_access_token.delete,
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .facebook_boost_post_access_token.delete,
                  )(S)),
                  (S = o("AdsMutators").chain(
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.ui_version.set(1),
                  )(S)),
                  (S = o(
                    "AdsBrandedContentModalMutators",
                  ).setPartnershipAdsIdentitiesInSpec(
                    {
                      boostingType:
                        n.hasCreateAdsOnPrimary && !n.isAdCodeEntry
                          ? "CREATOR_BOOST"
                          : "SPONSOR_BOOST",
                      primaryInstagramActorID: n.primaryIGActorID,
                      primaryInstagramUserID: n.primaryIGUserID,
                      primaryPageID: n.primaryPageID,
                      secondaryIgV2ID: n.secondaryIGFBID,
                      secondaryPageID: n.secondaryPageID,
                      adFormat: o(
                        "BrandedContentAdsUtils",
                      ).getDefaultPartnershipAdFormat(),
                    },
                    S,
                    a,
                    n.adgroupIDs,
                    n.hostID,
                    h,
                    f,
                    m,
                  )),
                  r("isTruthy")(n.shouldUpdateContentSearchInput) &&
                    (S = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.content_search_input.set(
                      n.contentSearchInput,
                      S,
                    )));
                var L = n.adFormat;
                ((S = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.branded_content.ad_format.set(
                  L != null
                    ? L
                    : o(
                        "BrandedContentAdsUtils",
                      ).getDefaultPartnershipAdFormat(),
                  S,
                )),
                  r("isFalsey")(n.isMultiDestinationAd) &&
                    r("isFalsey")(n.isAudioSwapped) &&
                    r("isFalsey")(n.isDynamicAdsFlow) &&
                    (S = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.delete(S)));
                var k = _.get(a),
                  I =
                    k != null &&
                    o(
                      "AdsUEditorCampaignShopAdsUtils",
                    ).isOmnichannelShopAutomaticCampaign(k.campaign);
                I &&
                  (S = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.call_to_action.type.set("SHOP_NOW", S));
                var T = o("AdsExistingPostCTAUtils").getProductTagCTALink(
                    (i = n.fbPostOrIGMedia) == null ||
                      (i = i.product_tags) == null
                      ? void 0
                      : i.data,
                    (l = n.fbPostOrIGMedia) == null ||
                      (l = l.tagged_products) == null
                      ? void 0
                      : l.data,
                    (g = n.fbPostOrIGMedia) == null
                      ? void 0
                      : g.product_tag_creator_offsite_url,
                  ),
                  D =
                    (k == null || (y = k.campaignGroup) == null
                      ? void 0
                      : y.collaborative_ads_partner_info) != null
                      ? (C = n.fbPostOrIGMedia) == null
                        ? void 0
                        : C.fb_affiliate_shortened_url
                      : null;
                (T != null
                  ? (S = o("AdsMutators").chain(
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.call_to_action.type.set("SHOP_NOW"),
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.call_to_action.value.link.set(T),
                    )(S))
                  : r("isTruthy")(D) &&
                    (S = o("AdsMutators").chain(
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.call_to_action.type.set("SHOP_NOW"),
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.call_to_action.value.link.set(D),
                    )(S)),
                  r("isTruthy")(n.isCarouselPost) &&
                    (S = o(
                      "adsAutomaticFlowMutationSetDoFSpec",
                    ).adsDeleteDoFSpecMutator(S)));
                var x =
                    (b = n.advertiserIdentityInfo) == null
                      ? void 0
                      : b.pa_permission_capabilities,
                  $ =
                    Array.isArray(x) &&
                    x.includes("CAN_USE_CREATIVE_OPTIMIZATION");
                if (k != null && r("isFalsey")(n.isDynamicAdsFlow)) {
                  var P = {
                    campaign: k.campaign,
                    campaignGroup: k.campaignGroup,
                    adgroup: S,
                  };
                  S = o(
                    "adsAutomaticFlowMutationSetDoFSpec",
                  ).adsStandardEnhancementsExistingPostSpecMutator(
                    s,
                    P,
                    d,
                    n.fbPostOrIGMedia,
                    $,
                  );
                }
                if (
                  (n.isAdCodeEntry &&
                    r("isTruthy")(n.igMediaID) &&
                    (S = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.instagram_boost_post_access_token.set(
                      n.contentSearchInput,
                      S,
                    )),
                  n.isAdCodeEntry && r("isTruthy")(n.fbPostID))
                ) {
                  var N;
                  S = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.branded_content.facebook_boost_post_access_token.set(
                    (N = n == null ? void 0 : n.facebookBoostPostAccessToken) !=
                      null
                      ? N
                      : n.contentSearchInput,
                    S,
                  );
                }
                if (((S = e(S, n, k)), r("isTruthy")(n.igMediaID)))
                  if (r("isTruthy")(n.isDynamicAdsFlow))
                    S = o(
                      "AdsBrandedContentModalMutators",
                    ).updateAdgroupWithParentSourceInstagramMediaId(
                      S,
                      r("nullthrows")(n.igMediaID),
                      n.isAdCodeEntry ? n.contentSearchInput : void 0,
                    );
                  else {
                    var M;
                    ((S = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.source_instagram_media_id.set(n.igMediaID, S)),
                      (S = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_id.set(
                        (M = n.primaryPageID) != null ? M : n.secondaryPageID,
                        S,
                      )));
                  }
                r("isTruthy")(n.isDynamicAdsFlow) &&
                  r("isTruthy")(n.shouldUpdateContentSearchInput) &&
                  (r("isTruthy")(n.igMediaID) || r("isTruthy")(n.fbPostID)) &&
                  !o("DAFlexibleFormatUtils").hasDAIntroCard(S) &&
                  ((v = S.creative) == null || (v = v.object_story_spec) == null
                    ? void 0
                    : v.template_data) != null &&
                  (S = o(
                    "AdsUEditorAdgroupChildAttachmentsMutators",
                  ).addLeadingStaticCard(S, !1));
                var w = r("nullthrows")(_.get(a)),
                  A = w.campaign,
                  F = w.campaignGroup,
                  O = w.specPlugin;
                if (
                  ((S = o(
                    "adsAutomaticFlowMutationSetDoFSpec",
                  ).adsSetProductExtensionsExistingPostMutator(
                    S,
                    !0,
                    o(
                      "AdsMetadataConnectedSourcesUtils",
                    ).isCTWADestinationByCampaign(A),
                    o(
                      "AdsMetadataConnectedSourcesUtils",
                    ).isEligibleForCtdPeByCampaign(A) &&
                      o(
                        "ClickToMessageCTDFeatureGating",
                      ).enableCTDProductExtensionsIGPlacement(!0),
                    E,
                  )),
                  p)
                ) {
                  var W,
                    q = o("AdsAPIAdgroupRecordUtils").getPageID(t, O),
                    U = new Map();
                  q != null && U.set(q, c(q));
                  var V = r("AdsAdgroupSemanticFields").instagramActorID.get(
                      O,
                      t,
                    ),
                    H = V != null ? u(V, a) : null;
                  S = o(
                    "AdsUEditorSetPostEditModeMutators",
                  ).setMultiDestinationSpecs({
                    adgroup: S,
                    campaign: A,
                    campaignGroupPromotedPageID:
                      F == null || (W = F.promoted_object) == null
                        ? void 0
                        : W.page_id,
                    instagramAccount: H,
                    objective: F == null ? void 0 : F.objective,
                    pages: U,
                    postEditMode: r("AdsEditorPostEditMode").EXISTING,
                    specPlugin: O,
                    pageID: q,
                  });
                } else {
                  var B;
                  S = o(
                    "AdsUEditorSetPostEditModeMutators",
                  ).setMultiDestinationSpecs({
                    adgroup: S,
                    campaign: A,
                    campaignGroupPromotedPageID:
                      F == null || (B = F.promoted_object) == null
                        ? void 0
                        : B.page_id,
                    instagramAccount: null,
                    objective: F == null ? void 0 : F.objective,
                    pages: null,
                    postEditMode: r("AdsEditorPostEditMode").EXISTING,
                    specPlugin: O,
                    pageID: null,
                  });
                }
                return S;
              },
            );
          },
          r("AdsUEditorAdgroupOnPartnershipAdContentSearchSaveActionFlux")
            .actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
