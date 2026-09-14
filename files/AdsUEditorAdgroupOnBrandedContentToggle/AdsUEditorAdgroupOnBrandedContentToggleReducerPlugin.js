__d(
  "AdsUEditorAdgroupOnBrandedContentToggleReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAccountStore",
    "AdsAdgroupDynamicPartnerContentDefaultOnMutator",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsBrandedContentModalMutators",
    "AdsCampaignRecordAccessors",
    "AdsCreativeFeaturesPlatformMutators",
    "AdsCreativeFormatMutatorUtils",
    "AdsIGIDv2SemanticFields",
    "AdsInstagramBrandedContentUtils",
    "AdsMutators",
    "AdsPageInstagramAccountStore_RELAY",
    "AdsPartnershipAdsPlacementsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
    "AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupOnBrandedContentToggleDataActionFlux",
    "AdsUEditorAdgroupPartnershipAdIdentityUtils",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetPageUtils",
    "AdsUEditorSelectors",
    "BrandedContentAdsUtils",
    "adsGetUniformValueSelector",
    "adsStoreToSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupBizAISectionSelector",
    "adsUEditorAdgroupHasInstagramPlacementsSelector",
    "adsUEditorAdgroupIsSlvaPaScheduledLiveVideoAdSelector",
    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
    "adsUEditorAdgroupSetPageReducerExtraDataSelector",
    "adsUEditorDefaultPageValuesSelector",
    "adsUEditorGetShouldEnableImageAnimationByDefaultGetValueSelector",
    "gkx",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a = o("AdsMutators").chain(
          function (e) {
            return r("AdsAdgroupSemanticFields").pageID.delete(t, e);
          },
          function (e) {
            return o(
              "AdsIGIDv2SemanticFields",
            ).IGIDV2SemanticFields.instagramUserID.delete(t, e);
          },
          (n = r("AdsAdgroupRecordAccessors")).creative.object_id.delete,
          n.creative.object_story_id.delete,
          n.creative.instagram_story_id.delete,
          n.creative.source_instagram_media_id.delete,
          n.creative.facebook_branded_content.sponsor_page_id.delete,
          n.creative.instagram_branded_content.delete,
          n.creative.branded_content_boosting_type.delete,
          n.creative.branded_content.delete,
        )(e);
      return o(
        "AdsPartnershipAdsPlacementsMutators",
      ).maySyncPartnershipAdsOrganicPosts(e, a);
    }
    function s(e, t, n) {
      return e.partnershipAdIdentities != null
        ? {
            primaryPageID: e.partnershipAdIdentities.primaryPageID,
            primaryInstagramActorID:
              e.partnershipAdIdentities.primaryInstagramAccountID,
            primaryInstagramUserID:
              e.partnershipAdIdentities.primaryInstagramUserID,
            secondaryIgV2ID:
              e.partnershipAdIdentities.secondaryInstagramAccountID,
            secondaryPageID: e.partnershipAdIdentities.secondaryPageID,
            boostingType: e.partnershipAdIdentities.boostingType,
            adFormat: o(
              "BrandedContentAdsUtils",
            ).getDefaultPartnershipAdFormat(),
          }
        : o("AdsUEditorAdgroupCachedUtils").getBrandedContentIdentities(
            n,
            t,
            e.isBrandedContentToggleOn,
          );
    }
    function u(e, t, n, a, i, l, u, d, m, p, _) {
      a === void 0 && (a = {});
      var f = e,
        g = s(n, t, u),
        h =
          (g == null ? void 0 : g.primaryPageID) != null ||
          (r("gkx")("15865")
            ? (g == null ? void 0 : g.primaryInstagramUserID) != null
            : (g == null ? void 0 : g.primaryInstagramActorID) != null);
      return (
        g != null &&
          h &&
          (f = o(
            "AdsBrandedContentModalMutators",
          ).setPartnershipAdsIdentitiesInSpec(
            g,
            f,
            t,
            n.adgroupIDs,
            n.hostID,
            a,
            i,
            l,
          )),
        (g == null ? void 0 : g.instagram_boost_post_access_token) != null &&
          (g == null ? void 0 : g.instagram_boost_post_access_token_post_id) !=
            null &&
          (f = o("AdsMutators").chain(
            function (e) {
              return o("AdsCreativeFormatMutatorUtils").mutateCreativeTextType(
                e,
                "RAW_TEXT",
              );
            },
            function (e) {
              return o("AdsCreativeFormatMutatorUtils").mutateCreativeMediaType(
                e,
                "EXISTING_INSTAGRAM_POST",
              );
            },
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.source_instagram_media_id.set(
              g.instagram_boost_post_access_token_post_id,
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.branded_content.instagram_boost_post_access_token.set(
              g.instagram_boost_post_access_token,
            ),
          )(f)),
        (f = c(f, t, n, a, i, l, u, d, m, p, _, g)),
        f
      );
    }
    function c(e, t, n, r, a, i, l, s, u, c, m, p) {
      r === void 0 && (r = {});
      var _ = e,
        f = o(
          "AdsUEditorAdgroupPartnershipAdIdentityUtils",
        ).getPartnershipAdDefaultPageID(
          t,
          l,
          s,
          n.isBrandedContentToggleOn,
          p,
          u,
          c,
          a.isCTXBrandedContentEligible,
          a.isPVPartnershipAdsEligible,
        );
      if (f != null) {
        var g = o(
            "AdsInstagramBrandedContentUtils",
          ).getInstagramAccountIDFromPage(f, m),
          h = o("AdsInstagramBrandedContentUtils").getInstagramUserIDFromPage(
            f,
            m,
          ),
          y = d(
            f,
            g,
            p == null ? void 0 : p.secondaryPageID,
            p == null ? void 0 : p.secondaryIgV2ID,
          );
        _ = o(
          "AdsBrandedContentModalMutators",
        ).setPartnershipAdsIdentitiesInSpec(
          babelHelpers.extends(
            {
              adFormat: 1,
              boostingType: "CREATOR_INLINE",
              primaryInstagramActorID: g,
              primaryInstagramUserID: h,
              primaryPageID: f != null ? f : null,
            },
            y,
          ),
          _,
          t,
          n.adgroupIDs,
          n.hostID,
          r,
          a,
          i,
        );
      }
      return _;
    }
    function d(e, t, n, r) {
      return e === n || (t != null && t === r)
        ? null
        : { secondaryIgV2ID: r, secondaryPageID: n };
    }
    var m = {
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
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
            setPageExtraData: r(
              "adsUEditorAdgroupSetPageReducerExtraDataSelector",
            ),
            defaultPage: o("adsUEditorDefaultPageValuesSelector")
              .adsUEditorDefaultPageValuesSelector,
            defaultPageIDFromL2: r("adsGetUniformValueSelector")(
              o("AdsUEditorSelectors").campaign.bulkByAccessor(
                r("AdsCampaignRecordAccessors").promoted_object.page_id.get,
              ),
            ),
            campaignObjective: r("adsGetUniformValueSelector")(
              o("AdsUEditorSelectors").campaign.bulkByAccessor(
                r("AdsCampaignRecordAccessors").optimization_goal.get,
              ),
            ),
            getPageInstagramAccount: r(
              "AdsPageInstagramAccountStore_RELAY",
            ).fluxGetSelector(),
            getShouldEnableImageAnimationByDefault: r(
              "adsUEditorGetShouldEnableImageAnimationByDefaultGetValueSelector",
            ),
            hasInstagramPlacements: r(
              "adsUEditorAdgroupHasInstagramPlacementsSelector",
            ),
            isSlvaPaScheduledLiveVideoAd: o(
              "adsUEditorAdgroupIsSlvaPaScheduledLiveVideoAdSelector",
            ).isSlvaPaScheduledLiveVideoAdSelector,
            businessID: r("AdsAccountStore").getSelectedBusinessID,
          },
          function (t, n, a) {
            var i = a.account,
              l = a.bizAIEligibility,
              s = a.businessID,
              c = a.cachedStoreState,
              d = a.campaignObjective,
              m = a.defaultPage,
              p = a.defaultPageIDFromL2,
              _ = a.getPageInstagramAccount,
              f = a.getShouldEnableImageAnimationByDefault,
              g = a.hasInstagramPlacements,
              h = a.isSlvaPaScheduledLiveVideoAd,
              y = a.parentData,
              C = a.setPageExtraData,
              b = {};
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              function (t, a) {
                var v = t,
                  S = r("nullthrows")(y.get(a)),
                  R = S.campaign,
                  L = S.campaignGroup,
                  E = S.specPlugin,
                  k =
                    o(
                      "AdsAssetFeedUtils",
                    ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(v) &&
                    o("AdsAPIAdgroupRecordUtils").isExistingPostAd(v);
                v = e(v, E);
                var I = o(
                  "AdsUEditorAdgroupCachedUtils",
                ).getBrandedContentIdentities(c, a, n.isBrandedContentToggleOn);
                if (n.isBrandedContentToggleOn) {
                  ((v = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.use_page_actor_override.set(!0, t)),
                    h
                      ? (v = o("AdsMutators").chain(
                          r("AdsAdgroupRecordAccessors").creative
                            .facebook_branded_content.sponsor_page_id.delete,
                          r("AdsAdgroupRecordAccessors").creative
                            .instagram_branded_content.delete,
                          r("AdsAdgroupRecordAccessors").creative
                            .branded_content_boosting_type.delete,
                        )(v))
                      : ((v = u(t, a, n, b, C, g, c, m, p, d, _)),
                        r("isTruthy")(
                          I == null ? void 0 : I.parentSourceFacebookPostID,
                        ) &&
                          (v = r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.branded_content.parent_source_facebook_post_id.set(
                            I == null ? void 0 : I.parentSourceFacebookPostID,
                            v,
                          )),
                        r("isTruthy")(
                          I == null ? void 0 : I.parentSourceInstagramMediaID,
                        ) &&
                          (v = r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.branded_content.parent_source_instagram_media_id.set(
                            I == null ? void 0 : I.parentSourceInstagramMediaID,
                            v,
                          ))),
                    (v = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.ui_version.set(1, v)));
                  var T = null;
                  (r("isTruthy")(n.isAutoToggleFromSuspectedPartnershipAd)
                    ? (T = 2)
                    : (T =
                        (I == null ? void 0 : I.adFormat) != null
                          ? I == null
                            ? void 0
                            : I.adFormat
                          : o(
                              "BrandedContentAdsUtils",
                            ).getDefaultPartnershipAdFormat()),
                    (v = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.ad_format.set(T, v)),
                    (v = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.acting_business_id.set(s, v)),
                    (v = o(
                      "AdsAdgroupDynamicPartnerContentDefaultOnMutator",
                    ).AdsDeleteDynamicPartnerContentSpecMutator(v)),
                    (v = o("AdsUEditorAdgroupMutators").clearBizAISpecIfOptedIn(
                      v,
                    )));
                  var D = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.degrees_of_freedom_spec.creative_features_spec.enable_ncs_testimonials.enroll_status.get(
                    t,
                  );
                  (D === "OPT_IN" &&
                    (v = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.degrees_of_freedom_spec.creative_features_spec.enable_ncs_testimonials.enroll_status.set(
                      "OPT_OUT",
                      v,
                    )),
                    r("gkx")("952") &&
                      (v = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.creative_sourcing_spec.ncs_testimonial.delete(
                        v,
                      )),
                    (v = o(
                      "AdsCreativeFeaturesPlatformMutators",
                    ).maybeDisableDefaultOnImageAnimationForPartnershipAd(v)));
                } else {
                  var x = d === r("AdsAPIObjectives").LEAD_GENERATION,
                    $ = C.isCTXBrandedContentEligible,
                    P = C.isPVPartnershipAdsEligible,
                    N =
                      r("isTruthy")(p) && (x || $ || P)
                        ? p
                        : o(
                            "AdsUEditorAdgroupPartnershipAdIdentityUtils",
                          ).getBAUPageID(I),
                    M =
                      N != null
                        ? N
                        : h
                          ? p != null
                            ? p
                            : m == null
                              ? void 0
                              : m.pageID
                          : null;
                  if (
                    (M != null &&
                      (v = o("AdsUEditorAdgroupSetPageUtils").setAdgroupPage(
                        v,
                        a,
                        n.adgroupIDs,
                        n.hostID,
                        M,
                        null,
                        b,
                        C,
                        !1,
                        null,
                        null,
                        k,
                      )),
                    (v = o(
                      "AdsIGIDv2SemanticFields",
                    ).IGIDV2SemanticFields.instagramUserID.set(
                      E,
                      v,
                      I == null ? void 0 : I.primaryInstagramActorID,
                      I == null ? void 0 : I.primaryInstagramUserID,
                    )),
                    (v = o(
                      "AdsAdgroupDynamicPartnerContentDefaultOnMutator",
                    ).AdsDeleteDynamicPartnerContentSpecMutator(v)),
                    (v = o(
                      "AdsCreativeFeaturesPlatformMutators",
                    ).maybeRestoreDefaultOnImageAnimationForPartnershipAd(
                      v,
                      f,
                    )),
                    l != null &&
                      (v = o(
                        "AdsUEditorAdgroupBizAIDefaultOptInMutator",
                      ).updateBizAIDefaultOptIn(
                        v,
                        l,
                        o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
                          .BizAIDefaultOptInCallSite.TOGGLE_BRANDED_CONTENT,
                      )),
                    h)
                  ) {
                    var w;
                    v = o("AdsMutators").chain(
                      (w = r("AdsAdgroupRecordAccessors")).creative
                        .facebook_branded_content.sponsor_page_id.delete,
                      w.creative.instagram_branded_content.delete,
                      w.creative.branded_content_boosting_type.delete,
                      w.creative.branded_content.delete,
                    )(v);
                  }
                }
                return (
                  o(
                    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
                  ).isPromoAdOptedInWithProductCatalogForAdgroup(v) &&
                    (n.isBrandedContentToggleOn
                      ? (v = o(
                          "AdsUEditorAdgroupPromoAdMutators",
                        ).refreshPromotionalMetadataOnCatalogChange(
                          { adgroup: v, campaign: R, campaignGroup: L },
                          i,
                          E,
                          !1,
                          null,
                        ))
                      : (v = o(
                          "AdsUEditorAdgroupPromoAdMutators",
                        ).refreshPromotionalMetadataOnCatalogChange(
                          { adgroup: v, campaign: R, campaignGroup: L },
                          i,
                          E,
                        ))),
                  v
                );
              },
            );
          },
          r("AdsUEditorAdgroupOnBrandedContentToggleDataActionFlux").actionType,
        ),
      },
      p = m;
    l.default = p;
  },
  98,
);
