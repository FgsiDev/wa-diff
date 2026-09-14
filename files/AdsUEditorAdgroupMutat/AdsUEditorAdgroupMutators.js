__d(
  "AdsUEditorAdgroupMutators",
  [
    "AdCampaignDestination",
    "AdCreativeDestinationGuidancesApplied",
    "AdsAPIAdgroupCallToActionValueRecord",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIChildAttachmentPaths",
    "AdsAPIObjectives",
    "AdsAdgroupCreation",
    "AdsAdgroupDraftFragmentStore",
    "AdsAdgroupPostTypeMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSpecUtils",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsBulkValueUtils",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsChildAttachmentsUtils",
    "AdsConvergenceAdgroupUtils",
    "AdsCreativeFormatMutatorUtils",
    "AdsDAAdaptImagesMutators",
    "AdsDLOLanguageUtils",
    "AdsDynamicAdsUtils",
    "AdsIGIDv2SemanticFields",
    "AdsInstagramUserIdMigrationUtils",
    "AdsInterfacesLogger",
    "AdsLocalUtils",
    "AdsMediaTypeAutomationMutators",
    "AdsMultiProductConstants",
    "AdsMutators",
    "AdsPageLikeUtils",
    "AdsPageStore",
    "AdsPartnershipAdsPlacementsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupArAdsMutator",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupDynamicCallAdsUtils",
    "AdsUEditorAdgroupDynamicLocalAdsUtils",
    "AdsUEditorAdgroupImageMutators",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorAdgroupTurnoffPromoAdMutator",
    "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCTXDestinationUtils",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCrossChannelShopsAdsCommon",
    "AdsUEditorMessengerMutators",
    "AdsUEditorSetPostEditModeMutators",
    "AdsUEditorShopAdsLoggerUtils",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
    "AdsUnifiedCreativeAPIFields",
    "AdsWebsiteExtensionTypeUtils",
    "AgenticCheckoutAdsUtils",
    "ApiAdObjectTypes",
    "ClickToWhatsAppFeatureGating",
    "DestinationOptimizationUtils.react",
    "NativeCommerceExperienceLoggingUtils",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "adsAssetFeedSpecRemoveAssetFieldAtIndex",
    "adsAuthorizationCategoryMutate",
    "adsCallToActionGetDefaultCallToActionType",
    "adsIsNewVideoThumbnailDataModel",
    "adsPlacementAssetMutationUpdateCustomizationVideo",
    "adsPromotablePagesForAccountSelector",
    "immutable",
    "isFalsey",
    "isNullish",
    "isTruthy",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.adgroup,
        n = e.preferredThumbnail,
        a = e.specPathPlugin,
        i = e.videoID;
      if (o("AdsAssetFeedUtils").usesAssetFeedVideoWritePath(t))
        return s(t, a, i, n);
      var l = r("AdsAdgroupSemanticFields").imageHash.delete(a, t);
      if (r("isFalsey")(i)) {
        var u;
        return (
          (l = (u = r("AdsAdgroupSemanticFields")).videoID.delete(a, l)),
          (l = u.videoThumbnailURL.delete(a, l)),
          (l = u.videoThumbnailSource.delete(a, l)),
          (l = u.videoThumbnailID.delete(a, l)),
          r("AdsAdgroupRecordAccessors").creative.thumbnail_url.delete(l)
        );
      }
      return (
        (l = o("AdsMutators").chain(
          function (e) {
            return r("AdsAdgroupSemanticFields").videoID.isSupported(a, e)
              ? r("AdsAdgroupSemanticFields").videoID.set(a, e, i)
              : e;
          },
          function (e) {
            return r("AdsAdgroupSemanticFields").videoThumbnailURL.isSupported(
              a,
              e,
            )
              ? r("AdsAdgroupSemanticFields").videoThumbnailURL.set(
                  a,
                  e,
                  n == null ? void 0 : n.uri,
                )
              : e;
          },
          function (e) {
            return r("adsIsNewVideoThumbnailDataModel")() &&
              r("AdsAdgroupSemanticFields").videoThumbnailID.isSupported(a, e)
              ? r("AdsAdgroupSemanticFields").videoThumbnailID.set(a, e, "0")
              : e;
          },
          function (e) {
            return r(
              "AdsAdgroupSemanticFields",
            ).videoThumbnailSource.isSupported(a, e)
              ? r("AdsAdgroupSemanticFields").videoThumbnailSource.set(
                  a,
                  e,
                  "generated_default",
                )
              : e;
          },
          r("AdsAdgroupRecordAccessors").creative.thumbnail_url.set(
            n == null ? void 0 : n.uri,
          ),
          r("AdsAdgroupRecordAccessors").creative.video_id.delete,
          r("AdsAdgroupRecordAccessors").creative.image_hash.delete,
          r("AdsAdgroupRecordAccessors").creative.image_url.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.video_data
            .image_hash.delete,
        )(l)),
        r("AdsAdgroupSemanticFields").captionIDs.isSupported(a, l) &&
          (l = r("AdsAdgroupSemanticFields").captionIDs.set(a, l, null)),
        l
      );
    }
    function s(e, t, n, a) {
      if (r("isTruthy")(n)) {
        var i,
          l = a == null ? void 0 : a.uri;
        if (
          ((i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            e,
            t,
            r("AdsUnifiedCreativeAPIFields").videoID,
            0,
            "video_id",
            n,
          )),
          (i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            i,
            t,
            r("AdsUnifiedCreativeAPIFields").videoThumbnailURL,
            0,
            "thumbnail_url",
            l,
          )),
          r("adsIsNewVideoThumbnailDataModel")() &&
            (i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
              i,
              t,
              r("AdsUnifiedCreativeAPIFields").videoThumbnailID,
              0,
              "thumbnail_id",
              "0",
            )),
          o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(i))
        ) {
          var s = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(i);
          i = o("AdsDLOLanguageUtils").setLanguageLabelForUnlabeledMediaAsset(
            i,
            s,
          );
        }
        return i;
      } else
        return r("AdsAdgroupRecordAccessors")
          .creative.asset_feed_spec.videos.at(0)
          .delete(e);
    }
    function u(e, t, n) {
      return o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(e) &&
        !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(e) &&
        !o(
          "AdsAssetFeedUtils",
        ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(e)
        ? y(n, e)
        : r("AdsAdgroupSemanticFields").captionIDs.set(t, e, n);
    }
    function c(e, t) {
      return t === null
        ? r("AdsAdgroupRecordAccessors").metadata.adgroup_media_source.delete(e)
        : r("AdsAdgroupRecordAccessors").metadata.adgroup_media_source.set(
            t,
            e,
          );
    }
    function d(e) {
      return c(e, null);
    }
    function m(e, t, n, o, a) {
      if (
        (o === void 0 && (o = null),
        a === void 0 && (a = null),
        t === "SHOPS_MESSAGING" || t === "SHOPS_MESSAGING_OPT_OUT")
      )
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.destination_spec.destination_type.set(t, e);
      var i = r(
        "AdsAdgroupRecordAccessors",
      ).creative.destination_spec.destination_type.set(t, e);
      if (n != null) {
        var l,
          s =
            (l = r(
              "AdsAdgroupRecordAccessors",
            ).creative.destination_spec.guidance_metadata.guidances_applied.get(
              i,
            )) != null
              ? l
              : r("immutable").List(),
          u = new Set(
            Object.values(r("AdCreativeDestinationGuidancesApplied")),
          ),
          c = s.filter(function (e) {
            return !u.has(e);
          }),
          d = c.push(n);
        i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.destination_spec.guidance_metadata.guidances_applied.set(
          d,
          i,
        );
      }
      return (
        o != null &&
          (i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.native_commerce_experience.shop.enroll_status.set(
            o,
            i,
          )),
        a != null &&
          (i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.native_commerce_experience.shop.action_metadata.type.set(
            a,
            i,
          )),
        i
      );
    }
    function p(e) {
      var t, n;
      if (
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.destination_spec.destination_type.get(e) !==
        "WEBSITE_AND_SHOP"
      )
        return e;
      var a = r(
        "AdsAdgroupRecordAccessors",
      ).creative.destination_spec.destination_type.delete(e);
      if (
        ((t = a.creative) == null || (t = t.destination_spec) == null
          ? void 0
          : t.guidance_metadata) != null
      ) {
        var i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.destination_spec.guidance_metadata.guidances_applied.get(a);
        if (i != null) {
          var l = new Set(
              Object.values(r("AdCreativeDestinationGuidancesApplied")),
            ),
            s = i.filter(function (e) {
              return !l.has(e);
            });
          a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.guidance_metadata.guidances_applied.set(
            s,
            a,
          );
        }
      }
      return (
        (a = o("AgenticCheckoutAdsUtils").clearAgenticCheckoutIfIneligible(a)),
        (n = a.creative) != null &&
        (n = n.destination_spec) != null &&
        n.isEmpty()
          ? r("AdsAdgroupRecordAccessors").creative.destination_spec.delete(a)
          : a
      );
    }
    function _(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.degrees_of_freedom_spec.creative_features_spec.biz_ai.enroll_status.get(
        e,
      ) === "OPT_IN"
        ? o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.biz_ai.enroll_status.set(
              "OPT_OUT",
            ),
          )(e)
        : e;
    }
    function f(e, t, n, a, i) {
      var l = r("isNullish")(a)
          ? null
          : o("AdsBulkValueUtils").getUniformValue(a, null),
        s = l == null ? void 0 : l.facebookStorefront,
        u = l == null ? void 0 : l.instagramStorefront,
        c = n.pageID != null ? (t == null ? void 0 : t.get(n.pageID)) : null,
        d =
          n.instagramActorID != null
            ? t == null
              ? void 0
              : t.get(n.instagramActorID)
            : null;
      if (!r("isNullish")(s) && r("isNullish")(c)) {
        var m;
        r("AdsInterfacesLogger").logOnce({
          eventName:
            "shops_ads_saoff_default_opt_in_opt_out_optimized_selector",
          data:
            ((m = { caller: i }),
            (m.sub_event =
              "new FB shop selector is non-null while old one is null"),
            (m.adgroup_id = e.id),
            m),
        });
      }
      if (!r("isNullish")(u) && r("isNullish")(d)) {
        var p;
        r("AdsInterfacesLogger").logOnce({
          eventName:
            "shops_ads_saoff_default_opt_in_opt_out_optimized_selector",
          data:
            ((p = { caller: i }),
            (p.sub_event =
              "new IG shop selector is non-null while old one is null"),
            (p.adgroup_id = e.id),
            p),
        });
      }
      return {
        facebookStorefront: s != null ? s : c,
        instagramStorefront: u != null ? u : d,
      };
    }
    function g(e, t, n, r, a, i, l, s) {
      var u,
        c,
        d = o(
          "ShopsAdsOffsiteCheckoutAdsUtils",
        ).isEligibleForOffsiteCheckoutShopsAds({
          adgroup: e,
          campaign: n,
          campaignGroup: r,
        });
      if (!d.isEligible) return [!0, "L2_not_config_as_saoff"];
      var m = f(e, a, i, l, s),
        p = m.facebookStorefront,
        _ = m.instagramStorefront;
      if (p == null && _ == null) return [!0, "FB_and_IG_storefront_null"];
      if (
        !o(
          "AdsUEditorCrossChannelShopsAdsCommon",
        ).hasAnyOffsiteIABCheckoutStorefront({
          facebookStorefront: p,
          instagramStorefront: _,
        })
      )
        return [!0, "not_only_has_saoff_storefront"];
      var g = o("AdsUEditorCrossChannelShopsAdsCommon").areCatalogsMatching(
        p,
        _,
      );
      if (!g) return [!0, "fb_and_ig_not_matching_catalog"];
      if (t == null) return [!1, "static_ads"];
      var h =
          p != null
            ? (u = p.commerce_merchant_settings) == null ||
              (u = u.shop_catalog) == null
              ? void 0
              : u.id
            : _ == null ||
                (c = _.commerce_merchant_settings) == null ||
                (c = c.shop_catalog) == null
              ? void 0
              : c.id,
        y = h !== t;
      return y
        ? [!0, "dynamic_ads_catalog_mismatch"]
        : [!1, "eligible_for_saoff_defaulting"];
    }
    function h(e, t, n, a, i, l, s, u, c, d) {
      var _,
        f,
        h,
        y =
          (_ = e.creative) == null ||
          (_ = _.destination_spec) == null ||
          (_ = _.native_commerce_experience) == null
            ? void 0
            : _.shop,
        C =
          (y == null ? void 0 : y.enroll_status) === "OPT_OUT" &&
          (y == null || (f = y.action_metadata) == null ? void 0 : f.type) ===
            "MANUAL",
        b = g(e, a, t, n, i, { pageID: l, instagramActorID: s }, c, u),
        v = b[0],
        S = b[1],
        R = !v && C,
        L = R ? "manual_opt_out_respected" : S;
      if (
        (o("NativeCommerceExperienceLoggingUtils").logNCEEligibilityCheck(
          {
            adgroupId: e.id,
            campaignGroupId: n.id,
            campaignId: t.id,
            entrypoint: null,
            funnelStep: o("NativeCommerceExperienceLoggingUtils")
              .NativeCommerceExperienceFunnelStep.ELIGIBILITY_CHECK,
            isAdPublished: !r("AdsAdgroupDraftFragmentStore").isNew(e.id),
            isOptin: !v,
            isToggleDisabled: null,
            nceAdsType: o("AdsDynamicAdsUtils").isDynamicAd(e)
              ? o("NativeCommerceExperienceLoggingUtils")
                  .NativeCommerceExperienceShopsAdsType.DYNAMIC_ADS
              : o("NativeCommerceExperienceLoggingUtils")
                  .NativeCommerceExperienceShopsAdsType.STATIC_ADS,
            experienceType: o("NativeCommerceExperienceLoggingUtils")
              .NativeCommerceExperienceType.COMMON,
            checkingSource: "sa_off_defaulting_".concat(u),
          },
          !v,
          L,
        ),
        R)
      )
        return (
          o("AdsUEditorShopAdsLoggerUtils").logSAOffDefaultOptInOptOuts(
            u,
            !1,
            e.id,
            "manual_opt_out_respected: ".concat(S),
          ),
          e
        );
      if (v) {
        var E;
        return ((E = e.creative) == null || (E = E.destination_spec) == null
          ? void 0
          : E.destination_type) === "WEBSITE_AND_SHOP"
          ? (o("AdsUEditorShopAdsLoggerUtils").logSAOffDefaultOptInOptOuts(
              u,
              !1,
              e.id,
              S,
            ),
            o("AdsMutators").chain(
              p,
              o("AdsUEditorAdgroupShopAdsUtils")
                .deleteAssetFeedSpecOnsiteDestination,
              function (e) {
                return o("ShopsAdsOffsiteCheckoutAdsUtils").updateShopAdSpec(
                  e,
                  "OPT_OUT",
                  "DEFAULT_OFF",
                );
              },
            )(e))
          : (o("AdsUEditorShopAdsLoggerUtils").logSAOffDefaultOptInOptOuts(
              u,
              !1,
              e.id,
              "already_opted_out: ".concat(S),
            ),
            o("ShopsAdsOffsiteCheckoutAdsUtils").updateShopAdSpec(
              e,
              "OPT_OUT",
              "DEFAULT_OFF",
            ));
      }
      ((h = e.creative) == null || (h = h.destination_spec) == null
        ? void 0
        : h.destination_type) === "WEBSITE_AND_SHOP"
        ? o("AdsUEditorShopAdsLoggerUtils").logSAOffDefaultOptInOptOuts(
            u,
            !0,
            e.id,
            "already_opted_in_: ".concat(S),
          )
        : o("AdsUEditorShopAdsLoggerUtils").logSAOffDefaultOptInOptOuts(
            u,
            !0,
            e.id,
            S,
          );
      var k = e;
      return o("AdsMutators").chain(
        function (e) {
          return m(e, "WEBSITE_AND_SHOP", d, "OPT_IN", "DEFAULT");
        },
        function (e) {
          return o(
            "AdsUEditorAdgroupTurnoffPromoAdMutator",
          ).maybeTurnOffPromoWhenIncompatibleWithPromoAd(
            { adgroup: e, campaign: t, campaignGroup: n },
            o("AdsUEditorAdgroupTurnoffPromoAdMutator")
              .PromoAdDefaultOptOutCallsite.ENABLE_SA_OFF,
          );
        },
      )(k);
    }
    function y(e, t) {
      var n = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(t, "videos");
      return o("AdsAssetFeedMutationUtils").setVideoCaptionAtIndex(t, n, e);
    }
    function C(e, t, n) {
      return o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(e) &&
        !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(e) &&
        !o(
          "AdsAssetFeedUtils",
        ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(e)
        ? S(e, t, n)
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.video_thumbnail_id.set(n, e);
    }
    function b(e, t, n, a) {
      if (
        o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(e) &&
        !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(e) &&
        !o(
          "AdsAssetFeedUtils",
        ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(e)
      )
        return v(e, t, n);
      var i = o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.video_data.image_url.set(n),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.video_data.video_thumbnail_source.set(a),
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.video_data
          .image_hash.delete,
      )(e);
      return R(i, n);
    }
    function v(e, t, n, a) {
      var i = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(e, "videos");
      return r("isTruthy")(n)
        ? o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            e,
            t,
            r("AdsUnifiedCreativeAPIFields").videoThumbnailURL,
            i,
            "thumbnail_url",
            n,
          )
        : o(
            "adsAssetFeedSpecRemoveAssetFieldAtIndex",
          ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
            e,
            "videos",
            i,
            "thumbnail_url",
          );
    }
    function S(e, t, n) {
      var a = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(e, "videos");
      return r("isTruthy")(n)
        ? o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            e,
            t,
            r("AdsUnifiedCreativeAPIFields").videoThumbnailID,
            a,
            "thumbnail_id",
            n,
          )
        : o(
            "adsAssetFeedSpecRemoveAssetFieldAtIndex",
          ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
            e,
            "videos",
            a,
            "thumbnail_id",
          );
    }
    function R(e, t) {
      return r("AdsAdgroupRecordAccessors").creative.thumbnail_url.set(t, e);
    }
    function L(e, t) {
      return o(
        "AdsIGIDv2SemanticFields",
      ).IGIDV2SemanticFields.instagramUserID.isSupported(t, e)
        ? o("AdsMutators").chain(
            o("AdsInstagramUserIdMigrationUtils").IGIDV2MigrationAccessors
              .creative.object_story_spec.instagram_user_id.delete,
            o("AdsInstagramUserIdMigrationUtils").IGIDV2MigrationAccessors
              .creative.instagram_user_id.delete,
          )(e)
        : e;
    }
    function E(e, t) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .threads_user_id.delete,
        r("AdsAdgroupRecordAccessors").creative.threads_user_id.delete,
      )(e);
    }
    function k(e, t, n, a, i, l, s, u, c, d, m) {
      (s === void 0 && (s = null), c === void 0 && (c = []));
      var p = e;
      if (
        ((p = o("AdsUEditorAdgroupArAdsMutator").clearArAdsLink(p, n)),
        (p = r(
          "AdsAdgroupRecordAccessors",
        ).creative.facebook_branded_content.sponsor_page_id.delete(p)),
        (p = r(
          "AdsAdgroupRecordAccessors",
        ).creative.branded_content_boosting_type.delete(p)),
        (p = r(
          "AdsAdgroupRecordAccessors",
        ).creative.instagram_branded_content.delete(p)),
        o("AdsChildAttachmentsUtils").getPlaceDataIndex(p, n) !== -1 &&
          (p = o("AdsUEditorAdgroupChildAttachmentsMutators").removePlaceData(
            p,
            n,
            a,
          )),
        (p = o(
          "AdsUEditorAdgroupDynamicLocalAdsUtils",
        ).removeDynamicLocalAdFields(p, n, a)),
        i === r("AdsPromotedObjectTypes").MESSENGER)
      ) {
        var _ = p;
        p = o("AdsUEditorMessengerMutators").resetPageWelcomeMessage({
          adgroup: _,
          specPlugin: n,
          pageID: t,
          objective: a,
          destination: l,
          account: s,
          page: u,
          placementSpecs: c,
          campaignGroupObjective: d,
          optimizationGoal: m,
        });
      }
      return p;
    }
    function I(e, t, n, a, i, l, s, u, c, d, m, p, _, f, g) {
      var h;
      (c === void 0 && (c = null),
        d === void 0 && (d = null),
        m === void 0 && (m = null),
        p === void 0 && (p = null),
        f === void 0 && (f = []),
        g === void 0 && (g = !1));
      var y = t;
      if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(y) || g) {
        (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t) &&
          (y = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(
            t,
          )),
          o(
            "AdsCampaignLiveVideoAdsUtils",
          ).getIsInLiveVideoAdPostDefaultingExperiment() || (y = T(y, e)),
          c != null &&
            (y = o("AdsUEditorSetPostEditModeMutators").setToUsingExistingPost({
              adgroup: y,
              cachedCreative: null,
              cachedPageID: null,
              defaultPagePost: c,
              specPathPlugin: u,
              account: d,
            })));
        var C = o(
          "AdsWebsiteExtensionTypeUtils",
        ).getSelectedMessageExtensiontype(y);
        c == null &&
          C != null &&
          ((y = o(
            "AdsUEditorUnifiedCreationAdgroupMutators",
          ).clearPageWelcomeMessage(y)),
          (y = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).cleanWebsiteExtensionFields(y)));
      } else {
        var b, v, S;
        y = r("AdsAdgroupSemanticFields").pageID.set(u, y, e);
        var R = (b = p) == null ? void 0 : b.destination_type;
        y = k(
          y,
          e,
          u,
          l,
          i,
          R,
          d,
          _,
          f,
          (v = m) == null ? void 0 : v.objective,
          (S = p) == null ? void 0 : S.optimization_goal,
        );
      }
      if (
        ((y = r("adsAuthorizationCategoryMutate")(y, n, e, a, s)),
        m != null &&
          p != null &&
          d != null &&
          ((h = p) == null ? void 0 : h.destination_type) !==
            r("AdCampaignDestination").WEBSITE_AND_LEAD_FORM &&
          (y = o(
            "AdsConvergenceAdgroupUtils",
          ).maybeEnableContextualDiscoveryAdsExperience(y)),
        l === r("AdsAPIObjectives").PAGE_LIKES &&
          !o("AdsPageLikeUtils").isPageLikeVideo(y, l))
      ) {
        var L =
            r("adsPromotablePagesForAccountSelector") != null
              ? r("adsPromotablePagesForAccountSelector")().getValue()
              : null,
          E =
            L != null
              ? L.find(function (t) {
                  return t.id === e;
                })
              : null,
          I = E != null ? E : r("AdsPageStore").getLoadObject(e).getValue();
        if (!I) return y;
        if (r("AdsAdgroupSemanticFields").callToActionValue.isSupported(u, y)) {
          var D =
            r("AdsAdgroupSemanticFields").callToActionValue.get(u, y) ||
            o(
              "AdsAPIAdgroupCallToActionValueRecord",
            ).createEmptyCallToActionValueFromAdgroup(y);
          y = r("AdsAdgroupSemanticFields").callToActionValue.set(
            u,
            y,
            D.set("page", e),
          );
        }
        y = r("AdsAdgroupSemanticFields").linkURL.isSupported(u, y)
          ? r("AdsAdgroupSemanticFields").linkURL.set(u, y, I.link)
          : y;
      } else
        o("AdsPageLikeUtils").isPageLikeVideo(y, l) &&
          (y = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.call_to_action.value.page.set(
            e,
            y,
          ));
      if (i === r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE && !g) {
        var x, $;
        y = o(
          "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
        ).updateUnifiedProfileVisitCTAsOnPageIDChange({
          adgroup: y,
          pageID: e,
          destinationType: (x = p) == null ? void 0 : x.destination_type,
          specPlugin: u,
          instagramAccount: null,
          objective: l,
          campaignGroupPromotedPageID:
            ($ = m) == null || ($ = $.promoted_object) == null
              ? void 0
              : $.page_id,
        });
      }
      return y;
    }
    function T(e, t) {
      var n = D(e);
      return r("AdsAdgroupRecordAccessors").creative.object_id.set(t, n);
    }
    function D(e) {
      var t,
        n = o("AdsMutators").chain(
          (t = r("AdsAdgroupRecordAccessors")).creative.object_story_id.delete,
          t.creative.source_instagram_media_id.delete,
          t.creative.body.delete,
          t.creative.title.delete,
          t.creative.branded_content_boosting_type.delete,
          t.creative.instagram_branded_content.delete,
          t.creative.facebook_branded_content.sponsor_page_id.delete,
          t.creative.branded_content.content_search_input.delete,
          t.creative.branded_content.instagram_boost_post_access_token.delete,
          t.creative.branded_content.facebook_boost_post_access_token.delete,
        )(e);
      return o(
        "AdsPartnershipAdsPlacementsMutators",
      ).maySyncPartnershipAdsOrganicPosts(e, n);
    }
    function x(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.biz_ai.capabilities.prompts.enroll_status.get(e);
      return t === "OPT_IN"
        ? r("AdsAdgroupRecordAccessors").creative.biz_ai.delete(e)
        : e;
    }
    function $(t, n, a, i) {
      if (
        !o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(n) &&
        !o("AdsAssetFeedUtils").hasLanguageCustomizationFromRecord(n) &&
        !o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(n)
      ) {
        var l;
        return (
          o("AdsAdgroupTypeUtils").isVideoAd(n)
            ? ((l = e({
                adgroup: n,
                specPathPlugin: a,
                videoID: null,
                preferredThumbnail: null,
              })),
              (l = o("AdsMutators").chain(
                r("AdsAdgroupRecordAccessors").creative.object_story_spec
                  .video_data.custom_overlay_spec.delete,
                r("AdsAdgroupRecordAccessors").creative.object_story_spec
                  .video_data.image_hash.delete,
                r("AdsAdgroupRecordAccessors").creative
                  .interactive_components_spec.delete,
              )(l)))
            : (l = o("AdsUEditorAdgroupImageMutators").setImage(
                t,
                null,
                null,
                null,
                null,
                null,
                null,
                n,
                a,
                i,
              )),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.platform_customizations.delete(l)
        );
      }
      return o("AdsAdgroupTypeUtils").isVideoAd(n)
        ? R(n, null)
        : o("AdsUEditorAdgroupImageMutators").setImageThumbnail(
            null,
            null,
            null,
            n,
          );
    }
    function P(e, t, n, a, i, l) {
      var s,
        u,
        c,
        d = r("AdsAdgroupRecordAccessors").creative.object_id.delete(n),
        m =
          (s = d) == null || (s = s.creative) == null
            ? void 0
            : s.object_story_id,
        p =
          (u = d) == null || (u = u.creative) == null
            ? void 0
            : u.object_story_spec,
        _ =
          (c = d) == null || (c = c.creative) == null ? void 0 : c.object_type,
        f =
          _ === r("ApiAdObjectTypes").PAGE ||
          o("AdsAPIAdgroupRecordUtils").isExistingPostAd(d),
        g = f && !l;
      (g && (d = r("AdsAdgroupRecordAccessors").creative.object_id.set(e, d)),
        p &&
          (d = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.page_id.set(e, d)));
      var h = r("isTruthy")(m) && !l;
      return (
        h &&
          (d = r("AdsAdgroupRecordAccessors").creative.object_story_id.delete(
            d,
          )),
        o("AdsPageLikeUtils").isPageLikeVideo(d, i) &&
          (d = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.call_to_action.value.page.set(
            e,
            d,
          )),
        o("AdsLocalUtils").isLocalObjective(i) && (d = N(d, a, t)),
        d
      );
    }
    function N(e, t, n) {
      if ((r("vulture")("6L-ZbsU86bosh592OGxvOW6RsUM="), !n)) return e;
      var a = e;
      if (!o("AdsAdgroupTypeUtils").isVideoAd(a)) {
        var i = r("isTruthy")(t),
          l = n.link;
        a = i
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.link.set(l, a)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.link.set(l, a);
        var s = o("AdsAdgroupSpecUtils").getLinkDescription(a);
        if (r("isFalsey")(s)) {
          var u = " ";
          a = i
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.description.set(u, a)
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.description.set(u, a);
        }
      }
      return a;
    }
    function M(e) {
      if (o("AdsAPIAdgroupRecordUtils").isTemplateCreative(e))
        return o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.format_option.set(
            "collection_video",
          ),
          r("AdsAdgroupRecordAccessors").creative.object_story_spec
            .template_data.force_single_link.delete,
        )(e);
      var t;
      return (
        o("AdsAdgroupTypeUtils").isVideoAd(e)
          ? (t = o(
              "AdsAdgroupPostTypeMutators",
            ).convertVideoPostToTemplateVideoPost(e))
          : (t = o(
              "AdsAdgroupPostTypeMutators",
            ).convertLinkPostToTemplateVideoPost(e)),
        o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.format_option.set(
            "collection_video",
          ),
          r("AdsAdgroupRecordAccessors").creative.object_story_spec
            .template_data.picture.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec
            .template_data.image_hash.delete,
        )(t)
      );
    }
    function w(e, t) {
      var n;
      if (!o("AdsAPIAdgroupRecordUtils").isTemplateCreative(e)) return e;
      var a = (n = e.creative) == null ? void 0 : n.dynamic_ad_voice;
      if (a != null) {
        var i = o("AdsAdgroupPostTypeMutators").convertLinkPostToTemplatePost(
          e,
        );
        return o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.object_story_spec
            .template_data.format_option.delete,
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.force_single_link.set(!0),
        )(i);
      }
      return o("AdsAdgroupPostTypeMutators").convertTemplatePostToLinkPost(
        e,
        t,
      );
    }
    function A(e, t, n, a, i, l) {
      var s, u, c, d, m;
      l === void 0 && (l = !1);
      var p = t,
        _ = r("AdsAdgroupSemanticFields").linkURL.get(i, p),
        f = a !== r("AdsPromotedObjectTypes").MESSENGER ? _ : null,
        g =
          (s = p.creative) == null ||
          (s = s.object_story_spec) == null ||
          (s = s.template_data) == null ||
          (s = s.call_to_action) == null ||
          (s = s.value) == null
            ? void 0
            : s.app_destination,
        h =
          (u = p.creative) == null ||
          (u = u.object_story_spec) == null ||
          (u = u.template_data) == null
            ? void 0
            : u.page_welcome_message,
        y =
          (c = p.creative) == null ||
          (c = c.object_story_spec) == null ||
          (c = c.template_data) == null
            ? void 0
            : c.phone_data_id,
        C =
          (d = p.creative) == null || (d = d.asset_feed_spec) == null
            ? void 0
            : d.call_ads_configuration;
      ((p = o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.categorization_criteria.delete,
        r("AdsAdgroupRecordAccessors").creative.category_media_source.delete,
        function (e) {
          return o("AdsCreativeFormatMutatorUtils").mutateCreativeTextType(
            e,
            "RAW_TEXT",
          );
        },
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.template_data
          .delete,
        r("AdsAdgroupRecordAccessors").creative.product_set_id.delete,
        r("AdsAdgroupRecordAccessors").creative.recommender_settings
          .product_sales_channel.delete,
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.link.set(
          (m = p.creative) == null ||
            (m = m.object_story_spec) == null ||
            (m = m.template_data) == null
            ? void 0
            : m.link,
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.call_to_action.type.set(
          r("adsCallToActionGetDefaultCallToActionType")(n, a),
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.call_to_action.value.link.set(f),
        r("AdsAdgroupRecordAccessors").metadata.carousel_style.set(
          "static_carousel",
        ),
        r("AdsAdgroupRecordAccessors").creative.template_url_spec.web.url
          .delete,
        r("AdsAdgroupRecordAccessors").creative.applink_treatment.delete,
      )(p)),
        g !== null &&
          (p = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.app_destination.set(
            g,
            p,
          )),
        h != null &&
          (p = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.page_welcome_message.set(
            h,
            p,
          )),
        l &&
          (p = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.image_hash.delete(p)));
      var b = r("AdsAdgroupSemanticFields").callToActionType.get(i, p);
      p = r("AdsAdgroupRecordAccessors").metadata.carousel_style.set(
        "static_carousel",
        p,
      );
      var v = o("AdsChildAttachmentsUtils").getDefaultChildAttachments(
        o("AdsMultiProductConstants").CAROUSEL_DEFAULT_CARDS,
      );
      ((v = v.map(function (t) {
        var n = t,
          i = n.getIn(r("AdsAPIChildAttachmentPaths").LINK) || _;
        if (
          (i
            ? (n = n.setIn(r("AdsAPIChildAttachmentPaths").LINK, i))
            : (n = n.deleteIn(r("AdsAPIChildAttachmentPaths").LINK)),
          b == null)
        )
          return (
            (n = n.deleteIn(
              r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.path,
            )),
            n
          );
        if (
          ((n = n.setIn(
            r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.TYPE,
            b,
          )),
          a === r("AdsPromotedObjectTypes").MESSENGER ||
            a === r("AdsPromotedObjectTypes").WHATSAPP)
        ) {
          ((n = n.delete(
            r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE.LINK,
          )),
            (n = n.setIn(
              r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE
                .APP_DESTINATION,
              g,
            )));
          var l = o(
            "AdsUEditorCTXDestinationUtils",
          ).getDefaultHeadlineForMessagingDestinations(e.destination_type);
          l != null &&
            o("ClickToWhatsAppFeatureGating").isEligibleForCTXAdvantageCatalog(
              e.destination_type,
              !1,
            ) &&
            (n = n.setIn(r("AdsAPIChildAttachmentPaths").NAME, l));
        }
        return n;
      })),
        (p = r("AdsAdgroupSemanticFields").childAttachments.isSupported(i, p)
          ? o("AdsMutators").chain(
              function (e) {
                return o(
                  "AdsCreativeFormatMutatorUtils",
                ).mutateCreativeMediaType(e, "CAROUSEL");
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").childAttachments.set(
                  i,
                  e,
                  v,
                );
              },
            )(p)
          : p));
      var S = o("AdsAPIAdgroupRecordUtils").getCallToActionLink(p, i);
      p = o("AdsUEditorCallToActionMutators").setCallToActionLink({
        adgroup: p,
        link: S,
        promotedObjectType: a,
        specPlugin: i,
      });
      var R = r("AdsAdgroupSemanticFields").multiShareOptimized.get(i, p);
      R !== !1 &&
        (p = r("AdsAdgroupSemanticFields").multiShareOptimized.set(i, p, !0));
      var L = r("AdsAdgroupSemanticFields").multiShareEndCard.get(i, p);
      return (
        L !== !1 &&
          (p = r("AdsAdgroupSemanticFields").multiShareEndCard.set(i, p, !0)),
        o("ClickToWhatsAppFeatureGating").isEligibleForCTXAdvantageCatalog(
          e.destination_type,
          !1,
        ) &&
          (p = r("AdsAdgroupSemanticFields").multiShareEndCard.set(i, p, !1)),
        y != null &&
          (p = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.phone_data_id.set(y, p)),
        C != null &&
          (p = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.call_ads_configuration.set(C, p)),
        (p = o(
          "AdsUEditorAdgroupDynamicCallAdsUtils",
        ).maybePersistCallAdsConfigurationForCallAds(n, a, t, p)),
        p
      );
    }
    function F(e, t, n, a) {
      var i,
        l,
        s =
          (i = e.creative) == null ||
          (i = i.object_story_spec) == null ||
          (i = i.template_data) == null
            ? void 0
            : i.phone_data_id,
        u =
          (l = e.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.call_ads_configuration,
        c = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.categorization_criteria
            .delete,
          r("AdsAdgroupRecordAccessors").creative.category_media_source.delete,
          r("AdsAdgroupRecordAccessors").creative.product_set_id.delete,
          r("AdsAdgroupRecordAccessors").creative.recommender_settings
            .product_sales_channel.delete,
          function (e) {
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.name.delete(e);
          },
          function (e) {
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.description.delete(e);
          },
          function (e) {
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.message.set(
              n === r("AdsAPIObjectives").STORE_VISITS
                ? o("AdsAdgroupCreation").getDefaultSVOMessage()
                : "",
              e,
            );
          },
          r("AdsAdgroupRecordAccessors").metadata.carousel_style.set(
            "static_carousel",
          ),
          function (e) {
            return o(
              "AdsMediaTypeAutomationMutators",
            ).removeMediaTypeAutomationFieldsMutator(e);
          },
          function (e) {
            return o(
              "AdsDAAdaptImagesMutators",
            ).daAdaptImagesRemoveOptInMutator(e);
          },
        )(e),
        d = r("AdsAdgroupSemanticFields").callToActionType.get(t, c),
        m = o("AdsChildAttachmentsUtils").getDefaultChildAttachments(
          o("AdsMultiProductConstants").MIN_PRODUCTS,
        );
      return (
        (m = m.map(function (e) {
          return d == null
            ? e.deleteIn(r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.path)
            : e.setIn(r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.TYPE, d);
        })),
        (c = r("AdsAdgroupSemanticFields").childAttachments.isSupported(t, c)
          ? o("AdsMutators").chain(
              function (e) {
                return o(
                  "AdsCreativeFormatMutatorUtils",
                ).mutateCreativeMediaType(e, "CAROUSEL");
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").childAttachments.set(
                  t,
                  e,
                  m,
                );
              },
            )(c)
          : c),
        a === r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL &&
          (s != null &&
            (c = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.phone_data_id.set(s, c)),
          u != null &&
            (c = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.call_ads_configuration.set(u, c))),
        c
      );
    }
    function O(t) {
      var n = t.actionThumbnailID,
        a = t.actionThumbnailURL,
        i = t.adgroup,
        l = t.isBaseAsset,
        s = t.label,
        u = t.preferredThumbnail,
        c = t.specPathPlugin,
        d = t.thumbnailSource,
        m = t.videoID;
      if (
        !o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(i) &&
        !o("AdsAssetFeedUtils").hasLanguageCustomizationFromRecord(i)
      ) {
        if (m != null)
          return e({
            adgroup: i,
            specPathPlugin: c,
            videoID: m,
            preferredThumbnail: u,
          });
        if (a != null) return b(i, c, a, d);
      }
      var p = a != null ? a : u == null ? void 0 : u.uri,
        _ =
          d === "generated_default" ||
          d === "smart_selected" ||
          d === "assumed_generated_default"
            ? "0"
            : n,
        f = l != null ? l : !1;
      return r("adsPlacementAssetMutationUpdateCustomizationVideo")(
        i,
        f,
        s,
        c,
        p,
        _,
        d,
        m,
      );
    }
    function B(e, t, n, a) {
      return o(
        "DestinationOptimizationUtils.react",
      ).destinationOptimizationExistingPostGK()
        ? (n === r("AdsAPIObjectives").OUTCOME_SALES ||
            n === r("AdsAPIObjectives").CONVERSIONS) &&
          o(
            "DestinationOptimizationUtils.react",
          ).destinationOptimizationEnableAdgroupInfo(e) &&
          o(
            "DestinationOptimizationUtils.react",
          ).destinationOptimizationEnableCampaignApiInfo(t)
          ? o(
              "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
            ).setWebsiteDestinationOptimizationStatus(
              e,
              !0,
              !1,
              !1,
              o("DestinationOptimizationUtils.react")
                .DestinationOptimizationEditSource.PRE_CONDITION_DEFAULTING,
              a,
            )
          : o(
              "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
            ).clearWebsiteDestinationOptimization(e)
        : e;
    }
    ((l.setVideoID = e),
      (l.setVideoCaptionIDs = u),
      (l.setMediaSource = c),
      (l.unsetMediaSource = d),
      (l.setAdsCreativeDestinationSpec = m),
      (l.setSAOffOptOut = p),
      (l.setBizAIOff = _),
      (l.maybeUpdateSAOffDestinationSpec = h),
      (l.setVideoThumbnailID = C),
      (l.setVideoImageURL = b),
      (l.setThumbnailURL = R),
      (l.removeInstagramActorID = L),
      (l.removeThreadsUserID = E),
      (l.adgroupProcessing = I),
      (l.setPageForExistingPostAd = T),
      (l.clearIdentityAndPartnershipAdFields = D),
      (l.clearBizAISpecIfOptedIn = x),
      (l.removeImagesAndVideos = $),
      (l.setPageID = P),
      (l.templateVideoMediaTypeSelected = M),
      (l.transformTemplateVideoMediaToImageMedia = w),
      (l.transformAdgroupFromTemplateToLinkData = A),
      (l.transformAdgroupTemplateDataFromDynamicToStatic = F),
      (l.setCustomizationVideo = O),
      (l.maybeUpdateDestinationOptimizationFields = B));
  },
  98,
);
