__d(
  "AdsAdgroupLinkPostFormatMutators",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordGetWebsiteURL",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIChildAttachmentPaths",
    "AdsAPIObjectives",
    "AdsAccountSettingsIdProvider",
    "AdsAccountStore",
    "AdsAdgroupCallToActionMutatorsAdapter",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupCreativePluginResolver",
    "AdsAdgroupEditorStore",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupGenerativeAssetSpecMutators",
    "AdsAdgroupPostTypeMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSpecPathPluginResolver",
    "AdsAdgroupSpecUtils",
    "AdsAdgroupWebsiteMutatorsAdapter",
    "AdsArLinkUtils",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "AdsAudienceDirectConfig",
    "AdsCachedLoadState_LEGACY",
    "AdsCallAddonUtils",
    "AdsCallToActionURLUtils",
    "AdsCanvasCollectionsConstants",
    "AdsCanvasCollectionsUtils",
    "AdsCanvasConstants",
    "AdsChildAttachmentDefaultsUtils",
    "AdsChildAttachmentsUtils",
    "AdsCollectionsAdUtils",
    "AdsCollectionsConstants",
    "AdsDAAdaptImagesMutators",
    "AdsDAAddTextOverlayDefaultOnMutator",
    "AdsDASingleMediaFormatLiquidityUtils",
    "AdsDCODegreesOfFreedomUtils",
    "AdsDataAtom",
    "AdsDynamicAdsUtils",
    "AdsEditingAdgroupEditorContext",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatLoggerUtils",
    "AdsInstagramBrandedContentUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsLinkPostFormat",
    "AdsLinkTypeUtils",
    "AdsLocalAwarenessUtils",
    "AdsLocalUtils",
    "AdsMediaTypeAutomationMutators",
    "AdsMessengerConstants",
    "AdsMultiProductConstants",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsObjectTypeUtils",
    "AdsOfferState",
    "AdsPageInstagramAccountStore_RELAY",
    "AdsPageStore",
    "AdsPartnershipAdsPlacementsMutators",
    "AdsPlatformTypes",
    "AdsPortraitCustomizationsUtils",
    "AdsPromotedObjectTypes",
    "AdsSelectorUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupBadges",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupCreativeFormat",
    "AdsUEditorAdgroupDynamicMutators",
    "AdsUEditorAdgroupMediaMutators",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupMultiProductMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorAdgroupTransformationsGKSelector",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCTXDestinationUtils",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUpcomingEventsUtils",
    "AdsWebsiteExtensionTypeUtils",
    "AdsWhatsAppDestinationUtils",
    "ApiAdObjectTypes",
    "CatalogVertical",
    "ClickToMessageCTDFeatureGating",
    "ClickToWhatsAppFeatureGating",
    "CreativeAssetGroupsLoggingUtils",
    "FBLogger",
    "ODS",
    "ReminderAdsGating",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "adsACOIsACOAdgroup",
    "adsACORemoveACOSpec",
    "adsAPlusCCarouselDescriptionAutomationSpecMutators",
    "adsAPlusCCarouselImageTouchupSpecMutators",
    "adsAPlusCCarouselInlineCommentSpecMutators",
    "adsAPlusCEnhanceCTASpecMutator",
    "adsAdgroupDeleteDACreativeFeatureSpecMutator",
    "adsCallToActionGetDefaultCallToActionType",
    "adsPageIDSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupOCRTextSelector",
    "adsUEditorDynamicAdsRemoveSingleMediaIfUnsupportedWithParamsMutator",
    "adsUEditorGetShouldEnableAPlusCCarouselCDAByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableAPlusCCarouselInlineCommentByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableImageTouchupsByDefaultGetValueSelector",
    "adsUserSettingsSelector",
    "gkx",
    "immutable",
    "isAdsCanvasLink",
    "isEligibleForAdaptImagesDefaultOptInWithLinkPostFormat",
    "isEligibleForDADynamicMediaWithParams",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e, t, n, a, i) {
      var l = o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAd(e),
        s = t === r("AdsLinkPostFormat").FLEXIBLE;
      l
        ? o("AdsFlexibleFormatLoggerUtils").logFlexibleFormatToggleOff(
            e.id,
            n,
            a.destination_type,
          )
        : s &&
          o("AdsFlexibleFormatLoggerUtils").logFlexibleFormatToggleOn(
            e.id,
            n,
            a.destination_type,
          );
      var u = o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(e);
      if (u || s) {
        var c;
        o("CreativeAssetGroupsLoggingUtils").logCAGFlexibleFormatSelection(
          (c = i == null ? void 0 : i.account_id) != null ? c : "",
          e.id,
          u,
          s,
        );
      }
    }
    function d(e, t, n, o, a, i) {
      return o === r("AdsAPIObjectives").LINK_CLICKS ||
        n.objective === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
        ? D(o, e, a, t, n, i)
        : x(i, e, t, n, o, a);
    }
    function m(e, t, n) {
      var a = o("AdsAssetFeedUtils").isAdgroupUsingOnlyOnsiteDestinations(e),
        i = o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e) && !a,
        l = o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(e),
        s =
          o(
            "AdsAssetFeedUtils",
          ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(e);
      if (i && !l && !s) {
        var u = e,
          c = o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(u);
        return (
          c ||
            (u = o(
              "AdsUEditorAdgroupAssetFeedMutators",
            ).convertFromAssetFeedSpec(
              o("AdsAPIAdgroupRecordUtils").getObjectType(u),
              u,
              t,
            )),
          n === r("AdsLinkPostFormat").MULTIPLE &&
            (u = r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.degrees_of_freedom_type.set(
              "DISABLED",
              u,
            )),
          u
        );
      }
      return e;
    }
    function p(e, t, n, a, i, l) {
      var s = e;
      if (
        o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(s) &&
        n !== r("AdsLinkPostFormat").FLEXIBLE
      ) {
        ((s = Q(s)),
          (s = o(
            "AdsAdgroupCreativeAssetGroupsSpecMutators",
          ).cleanupCreativeDoubleWrittenFields(s, i, l)));
        var u = N(s, a, i, l);
        (i === r("AdsAPIObjectives").APP_INSTALLS ||
          ((i === r("AdsAPIObjectives").CONVERSIONS ||
            i === r("AdsAPIObjectives").OUTCOME_SALES) &&
            l === r("AdsPromotedObjectTypes").MOBILE_APP)) &&
          (s = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.link.set(u)(s));
      }
      s = X(s);
      var c = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.additional_data.page_private_reply.get(t);
      return (
        r("isTruthy")(c) &&
          (s = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.additional_data.page_private_reply.set(c)(
            s,
          )),
        s
      );
    }
    function _(e, t, n, a, i, l, s, u, _) {
      var f,
        g,
        y = a.campaign,
        C = a.campaignGroup,
        b = a.campaignGroupPromotedPageID,
        v = a.multiShareOptimized,
        S = a.objective,
        R = a.promotedObjectType;
      c(t, e, S, y, l);
      var L = o("AdsDynamicAdsUtils").isDynamicAd(t),
        E = t;
      (((!L && e !== r("AdsLinkPostFormat").SINGLE) ||
        (L && e !== r("AdsLinkPostFormat").MULTIPLE)) &&
        (E = o("AdsUEditorAdgroupMutators").setSAOffOptOut(E)),
        e !== r("AdsLinkPostFormat").SINGLE &&
          (o("AdsAssetFeedUtils").isAdgroupUsingSomeOnsiteDestinations(E) ||
            ((f = E.creative) == null ? void 0 : f.shop_spec) != null) &&
          (E = o(
            "AdsUEditorAdgroupShopAdsUtils",
          ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(E)),
        S === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
          (E = r("AdsAdgroupRecordAccessors").creative.shop_spec.delete(E)),
        e !== r("AdsLinkPostFormat").MULTIPLE &&
          r("adsACOIsACOAdgroup")(E) &&
          ((E = o(
            "adsAdgroupDeleteDACreativeFeatureSpecMutator",
          ).adsAdgroupDeleteDACreativeFeatureSpecMutator(E)),
          (E = r("adsACORemoveACOSpec")(E))),
        (E = m(E, S, e)));
      var k =
        e === r("AdsLinkPostFormat").MULTIPLE ||
        e === r("AdsLinkPostFormat").SINGLE;
      k ||
        (E = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.custom_overlay_spec.delete(E));
      var D =
        o(
          "AdsPortraitCustomizationsUtils",
        ).hasPortraitCustomizationsSpecifications(E) &&
        e !== r("AdsLinkPostFormat").SINGLE;
      D &&
        (E = r(
          "AdsAdgroupRecordAccessors",
        ).creative.portrait_customizations.delete(E));
      var x =
        ((g = E.creative) == null || (g = g.interactive_components_spec) == null
          ? void 0
          : g.components) != null && e !== r("AdsLinkPostFormat").SINGLE;
      if (
        (x &&
          (E = r(
            "AdsAdgroupRecordAccessors",
          ).creative.interactive_components_spec.delete(E)),
        (E = o(
          "AdsAdgroupGenerativeAssetSpecMutators",
        ).adsDeleteGenAIAssetSpecMutator(E)),
        (E = o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).mayRemoveCAGandMSSpecForRelatedMedia(E)),
        (E = o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).mayDeletePushMetadataIdsSpec(E)),
        (E = o(
          "AdsUEditorAdgroupMultiMediaSpecMutators",
        ).mayDeleteMultiMediaContentFromMSS(E)),
        e !== r("AdsLinkPostFormat").SINGLE)
      ) {
        var $,
          P = r("AdsAdgroupSpecPathPluginResolver").resolve({
            accountType: r("AdsAudienceDirectConfig").accountType,
            objective: S,
            promotedObjectType: R,
          });
        (e !== r("AdsLinkPostFormat").FLEXIBLE &&
          (y == null ? void 0 : y.destination_type) !==
            r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL &&
          (E = o("AdsCallAddonUtils").clearCallExtensionFields(E, P)),
          (($ = E.creative) == null ? void 0 : $.instant_checkout_setting) !=
            null &&
            (E = r(
              "AdsAdgroupRecordAccessors",
            ).creative.instant_checkout_setting.delete(E)));
      }
      switch (((E = p(E, t, e, y, S, R)), e)) {
        case r("AdsLinkPostFormat").MULTIPLE:
          return h(S, E, !0, b, i, s, v, R, y, C, l, n, u, _);
        case r("AdsLinkPostFormat").SINGLE:
          return I(S, E, R, y, C, l, u);
        case r("AdsLinkPostFormat").COLLECTIONS:
          return T(S, E, y, C, n, R, u);
        case r("AdsLinkPostFormat").FLEXIBLE:
          return d(E, y, C, S, R, l);
        default:
          return (
            r("FBLogger")("ads").mustfix("Invalid link post fromat: %s", e),
            E
          );
      }
    }
    function f(t, n, a, i, l, s, c, d, m, p, f) {
      var g, h;
      (u || (u = r("AdsDataAtom"))).isDispatching() &&
        (u || (u = r("AdsDataAtom"))).waitFor(
          [
            r("AdsAccountStore").getDispatchToken(),
            r("AdsAdgroupEditorStore").getDispatchToken(),
          ].concat(
            (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens(
              [r("adsUEditorAccountSelector")],
              r("AdsEditingAdgroupEditorContext"),
            ),
          ),
        );
      var y =
          (g = l.promoted_object) == null ? void 0 : g.full_funnel_objective,
        C = y || s.objective,
        b = (h = s.promoted_object) == null ? void 0 : h.page_id,
        v = o("AdsAPICampaignRecordUtils").getPromotedObjectType(C, l);
      return _(
        t,
        i,
        d,
        {
          objective: o("AdsODAXUtils").maybeTranslateObjective(
            C,
            v,
            l == null ? void 0 : l.optimization_goal,
          ),
          campaign: l,
          campaignGroup: s,
          campaignGroupPromotedPageID: b,
          promotedObjectType: v,
          hostID: c,
        },
        n,
        m,
        a,
        p,
        f,
      );
    }
    function g(e, t) {
      var n,
        a,
        i = t,
        l = (n = i.creative) == null ? void 0 : n.object_type;
      switch (l) {
        case r("ApiAdObjectTypes").PHOTO:
          i = o("AdsAdgroupPostTypeMutators").convertPhotoPostToLinkPost(e, i);
          break;
        case r("ApiAdObjectTypes").VIDEO:
          i = o(
            "AdsAdgroupPostTypeMutators",
          ).convertVideoPostToLinkOrTemplatePost(e, i);
          break;
      }
      var s =
        (a = i.creative) == null ||
        (a = a.object_story_spec) == null ||
        (a = a.video_data) == null
          ? void 0
          : a.offer_id;
      return (
        s &&
          (i = o(
            "AdsAdgroupPostTypeMutators",
          ).convertVideoPostToLinkOrTemplatePost(e, i)),
        i
      );
    }
    function h(e, t, n, a, i, l, s, u, c, d, m, p, _, f) {
      var h,
        I,
        T = t,
        D = o(
          "AdsDASingleMediaFormatLiquidityUtils",
        ).isEligibleForDASingleMediaFormatLiquidity({
          adgroup: t,
          campaign: c,
          campaignGroup: d,
        });
      if (
        (D &&
          (T = o(
            "AdsAdgroupFormatTransformationMutators",
          ).adsAdgroupFormatTransformationDASingleMediaAsCollectionDefaultOptInAndOutMutator(
            T,
            !1,
          )),
        o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(T))
      )
        return (
          (T = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.ad_formats.set(
              r("immutable").List.of("CAROUSEL_IMAGE"),
            ),
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.videos
              .delete,
          )(T)),
          T
        );
      ((h = T.creative) != null &&
        h.creative_sourcing_spec &&
        (T = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.delete(T)),
        (T = g(e, T)));
      var x = r("AdsAdgroupSpecPathPluginResolver").resolve({
        accountType: r("AdsAudienceDirectConfig").accountType,
        objective: e,
        promotedObjectType: u,
      });
      T = S(T, e, x);
      var $ = r("AdsAPIAdgroupRecordGetWebsiteURL")(T, x),
        P = o("AdsAdgroupSpecUtils").isTemplateDataEligible(e, a, T);
      T = E(T, $, e, c, u, P);
      var N = r("AdsAdgroupSemanticFields").callToActionValue.get(x, T),
        M =
          N instanceof r("immutable").Map || N == null
            ? void 0
            : N.app_destination_page_id;
      ((T = r("AdsAdgroupSemanticFields").headline.delete(x, T)),
        (T = v(T, $, e, P)),
        (T = k(c, T, e, u)),
        (T = oe(T, e, u)),
        (T = ne(T, r("AdsLinkPostFormat").MULTIPLE, _)),
        (T = te(T, e, u)));
      var w = T.id,
        A = n ? r("AdsAdgroupEditorStore").getCachedChildAttachments(w) : null,
        F = n
          ? r("AdsAdgroupEditorStore").getCachedFormatTransformationSpec(w)
          : null,
        O = r("AdsAdgroupEditorStore").getCachedMultiShareOptimized(w),
        B = r("AdsAdgroupEditorStore").getCachedMultiShareEndCard(w),
        W = r("AdsAdgroupEditorStore").getCachedUpcomingEvent(w),
        q = r("AdsAdgroupEditorStore").getCachedTemplateLink(w),
        U =
          r("AdsAdgroupEditorStore").getCachedCarouselStyle(w) ||
          "static_carousel";
      T = r("AdsAdgroupRecordAccessors").metadata.carousel_style.set(U, T);
      var H,
        K = r("immutable").fromJS(A),
        X = o(
          "AdsChildAttachmentsUtils",
        ).isStaticAndDynamicCarouselChildAttachments(
          K == null ? void 0 : K.toJS(),
        );
      if (
        (K && K.size > 0
          ? ((H = K),
            o("AdsFlexibleFormatAdexUtils").passSACarouselFFQE() &&
              F &&
              (T = r(
                "AdsAdgroupRecordAccessors",
              ).creative.format_transformation_spec.set(F, T)))
          : (H = o("AdsChildAttachmentsUtils").getDefaultChildAttachments(
              o("AdsMultiProductConstants").CAROUSEL_DEFAULT_CARDS,
            )),
        (H = o("AdsChildAttachmentDefaultsUtils").initializeChildAttachments(
          H,
          T,
          c,
          x,
          e,
          u,
        )),
        (I = T.creative) != null &&
          (I = I.object_story_spec) != null &&
          I.template_data &&
          (T = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.caption.set(
            r("AdsAdgroupEditorStore").getCachedDisplayURL(T.id),
            T,
          )),
        (T = J(T)),
        o("AdsAdgroupSpecUtils").isTemplateDataEligible(e, a, T) &&
          !o("AdsLocalUtils").isLocalObjective(e))
      )
        T = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.object_story_spec
            .template_data.force_single_link.delete,
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.format_option.set(
            "carousel_images_multi_items",
          ),
        )(T);
      else {
        var Y = o("AdsChildAttachmentsUtils").getChildAttachmentsPath(T);
        (o("AdsAdgroupSpecUtils").isTemplateDataEligible(e, a, T) &&
          (T = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.force_single_link.delete(
            T,
          )),
          Y && (T = T.setIn(Y, H)));
      }
      var Z = o("AdsAPIAdgroupRecordUtils").isTemplateCreative(T);
      !Z &&
        o("AdsObjectTypeUtils").isDynamicProductAd(T) &&
        (T = o(
          "AdsUEditorAdgroupDynamicMutators",
        ).transformAdgroupFromLinkToCarouselTemplateData(
          T,
          e,
          u,
          r("AdsAdgroupRecordAccessors").creative.product_set_id.get(T),
          p === r("CatalogVertical").COMMERCE ? p : null,
          void 0,
          c,
          _,
          f,
        ));
      var ee = o("AdsAdgroupSpecUtils").getCallToActionValue(T);
      if (
        ((T = y(ee, T, function (e, t) {
          return o("AdsAdgroupCallToActionMutatorsAdapter").setCallToActionLink(
            e,
            t,
          );
        })),
        X)
      ) {
        var re = r("AdsAdgroupEditorStore").getCachedProductSetID(w);
        T = r("AdsAdgroupRecordAccessors").creative.product_set_id.set(
          re,
          o("AdsAdgroupPostTypeMutators").convertLinkPostToTemplatePost(T),
        );
      }
      ((T = V(T, e, u)),
        (T = z(T, x, e, a, O != null ? O : s)),
        (T = G(T, c, x, e, B)),
        (T = y(W, T, function (e, t) {
          return o("AdsUpcomingEventsUtils").upcomingEventAccessor.set(e, t);
        })),
        (T = y(q, T, function (e, t) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.link.set(e, t);
        })));
      var ae = o(
          "ReminderAdsGating",
        ).isEventDetectionSupportedForObjectiveAndOptimization(
          d.objective,
          c.optimization_goal,
        ),
        ie = r("adsUEditorAdgroupOCRTextSelector")(
          r("AdsEditingAdgroupEditorContext"),
        );
      return (
        (T = o(
          "AdsUEditorAdgroupUpcomingEventMetadataMutators",
        ).updateAdForUpcomingEventMetadata(
          T,
          i,
          null,
          null,
          x,
          l != null ? l : !0,
          ae,
          d.objective,
          c.optimization_goal,
          ie,
          c,
          d,
        )),
        (T = C(
          T,
          m,
          c,
          d,
          r(
            "adsUEditorGetShouldEnableAPlusCCarouselInlineCommentByDefaultGetValueSelector",
          ),
          r(
            "adsUEditorGetShouldEnableAPlusCCarouselCDAByDefaultGetValueSelector",
          ),
          r("adsUEditorGetShouldEnableImageTouchupsByDefaultGetValueSelector"),
        )),
        (T = r(
          "AdsAdgroupRecordAccessors",
        ).creative.platform_customizations.delete(T)),
        (T = j(T, c)),
        (T = b(T, e, M, x)),
        (T = Q(T)),
        (T = R(t, T)),
        (T = L(T)),
        T
      );
    }
    function y(e, t, n) {
      return e == null ? t : n(e, t);
    }
    function C(e, t, n, r, a, i, l) {
      if (t == null) return e;
      var s = e;
      return (
        (s = o(
          "adsAPlusCCarouselInlineCommentSpecMutators",
        ).adsCarouselInlineCommentSpecMutator(
          t,
          { campaignGroup: r, campaign: n, adgroup: s },
          a(),
        )),
        (s = o(
          "adsAPlusCCarouselDescriptionAutomationSpecMutators",
        ).adsCarouselDescriptionAutomationSpecMutator(
          t,
          { campaignGroup: r, campaign: n, adgroup: s },
          i(),
        )),
        (s = o(
          "adsAPlusCCarouselImageTouchupSpecMutators",
        ).adsCarouselImageTouchupSpecMutator(
          t,
          { campaignGroup: r, campaign: n, adgroup: s },
          l(),
        )),
        o("AdsDynamicAdsUtils").isDynamicAd(s)
          ? ((s = o("adsAPlusCEnhanceCTASpecMutator").adsEnhanceCTASpecMutator(
              n,
              s,
            )),
            (s = o(
              "AdsDAAddTextOverlayDefaultOnMutator",
            ).adsDAAddTextOverlayDefaultOnMutator(s)))
          : ((s = o(
              "adsAPlusCEnhanceCTASpecMutator",
            ).adsDeleteEnhanceCTASpecMutator(s)),
            (s = o(
              "AdsDAAddTextOverlayDefaultOnMutator",
            ).adsDeleteDAAddTextOverlayDefaultOnMutator(s))),
        s
      );
    }
    function b(e, t, n, a) {
      var i = e;
      (t === r("AdsAPIObjectives").MESSAGES &&
        n != null &&
        (i = o(
          "AdsUEditorCallToActionMutators",
        ).deleteCallToActionValueAppDestinationPageID(i, a)),
        (i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.product_discount_id.delete(i)));
      var l = o(
        "AdsUEditorAdgroupTransformationsGKSelector",
      ).isMusicDefaultStickyOptOut();
      return (
        l && (i = o("AdsUEditorAdgroupAudiosAdsMutators").removeAudiosField(i)),
        i
      );
    }
    function v(e, t, n, o) {
      var a,
        i =
          (a = e.creative) == null ||
          (a = a.object_story_spec) == null ||
          (a = a.link_data) == null ||
          (a = a.call_to_action) == null ||
          (a = a.value) == null
            ? void 0
            : a.lead_gen_form_id;
      if (!i) {
        var l;
        i =
          (l = e.creative) == null ||
          (l = l.object_story_spec) == null ||
          (l = l.video_data) == null ||
          (l = l.call_to_action) == null ||
          (l = l.value) == null
            ? void 0
            : l.lead_gen_form_id;
      }
      return i && n === r("AdsAPIObjectives").LEAD_GENERATION
        ? o
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.link.set(t, e)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.link.set(t, e)
        : e;
    }
    function S(e, t, n) {
      var a = e,
        i = o("AdsAdgroupSpecUtils").getCallToActionType(a);
      return (
        i == null &&
          t !== r("AdsAPIObjectives").VIDEO_VIEWS &&
          ((a = o("AdsUEditorCallToActionMutators").setCallToActionType(
            a,
            "NO_BUTTON",
            n,
          )),
          (i = o("AdsAdgroupSpecUtils").getCallToActionType(a))),
        i === "BUY_TICKETS" &&
          (a = o("AdsMutators").chain(
            function (e) {
              return r("AdsAdgroupSemanticFields").eventID.delete(n, e);
            },
            r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
              .call_to_action.value.event_id.delete,
            function (e) {
              return r("AdsAdgroupSemanticFields").linkURL.delete(n, e);
            },
            r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
              .call_to_action.value.link.delete,
            function (e) {
              return r("AdsAdgroupSemanticFields").callToActionType.set(
                n,
                e,
                r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
              );
            },
          )(a)),
        a
      );
    }
    function R(e, t) {
      var n,
        o,
        a,
        i =
          (n = e.creative) == null || (n = n.object_story_spec) == null
            ? void 0
            : n.page_id;
      return i != null &&
        ((o = t.creative) == null ? void 0 : o.object_story_spec) != null &&
        ((a = t.creative) == null || (a = a.object_story_spec) == null
          ? void 0
          : a.page_id) == null
        ? r("AdsAdgroupRecordAccessors").creative.object_story_spec.page_id.set(
            i,
            t,
          )
        : t;
    }
    function L(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.object_story_spec) == null
            ? void 0
            : t.link_data;
      return n != null && n.multi_share_end_card == null
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.multi_share_end_card.set(!1, e)
        : e;
    }
    function E(e, t, n, a, i, l) {
      if (
        (r("isAdsCanvasLink")(t) &&
          n !== r("AdsAPIObjectives").LEAD_GENERATION) ||
        o("AdsArLinkUtils").isArAdsLink(t)
      ) {
        var s = o("AdsCallToActionURLUtils").getDefaultURL(a, n, i),
          u = l
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.link.set(s, e)
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.link.set(s, e);
        return o("AdsAdgroupCallToActionMutatorsAdapter").setCallToActionLink(
          s,
          u,
        );
      }
      return e;
    }
    function k(e, t, n, a) {
      var i =
        t.creative &&
        o("AdsCollectionsAdUtils").isCollectionsAd(t.creative.toJS());
      if (i !== !0) return t;
      var l = r("AdsAdgroupSpecPathPluginResolver").resolve({
          accountType: r("AdsAudienceDirectConfig").accountType,
          objective: n,
          promotedObjectType: a,
        }),
        s = t;
      s = o("AdsMutators").chain(
        function (e) {
          return r("AdsAdgroupSemanticFields").collectionThumbnails.delete(
            l,
            e,
          );
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").retailerItemIDs.delete(l, e);
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").postClickItemDescription.delete(
            l,
            e,
          );
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").postClickItemHeadline.delete(
            l,
            e,
          );
        },
      )(s);
      var u = r("AdsAdgroupSemanticFields").linkURL.get(l, s);
      if (
        (typeof u == "string" &&
          (r("isAdsCanvasLink")(u) || o("AdsArLinkUtils").isArAdsLink(u)) &&
          (s = r("AdsAdgroupSemanticFields").linkURL.set(
            l,
            s,
            o("AdsCallToActionURLUtils").getDefaultURL(e, n, a),
          )),
        a === r("AdsPromotedObjectTypes").PRODUCT_SET ||
          o("AdsObjectTypeUtils").isDynamicProductAd(s))
      ) {
        var c = o("AdsAPIAdgroupRecordUtils").getObjectType(s);
        (c === r("ApiAdObjectTypes").VIDEO &&
          (s = l.convertVideoToImageSpec(s)),
          (s = o("AdsAdgroupPostTypeMutators").convertLinkPostToTemplatePost(
            s,
          )));
      } else
        s = r("AdsAdgroupRecordAccessors").creative.product_set_id.delete(s);
      return s;
    }
    function I(e, t, n, a, i, l, u) {
      var c = t;
      ((c = K(c)),
        (c = H(c)),
        (c = o("AdsUEditorAdgroupAudiosAdsMutators").removeAudiosField(c)),
        (c = o(
          "adsAPlusCCarouselInlineCommentSpecMutators",
        ).adsDeleteCarouselInlineCommentSpecMutator(c)),
        (c = o(
          "adsAPlusCCarouselDescriptionAutomationSpecMutators",
        ).adsDeleteCarouselDescriptionAutomationSpecMutator(c)),
        (c = o(
          "adsAPlusCCarouselImageTouchupSpecMutators",
        ).adsDeleteCarouselImageTouchupSpecMutator(c)),
        o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(c) &&
          (c = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.ad_formats.set(
            r("immutable").List.of("AUTOMATIC_FORMAT"),
            c,
          )),
        o("AdsChildAttachmentsUtils").isStaticAndDynamicCarouselAd(c) &&
          (c = o(
            "AdsUEditorAdgroupChildAttachmentsMutators",
          ).removeAllStaticCards(c)),
        (c = k(a, c, e, n)),
        (c = J(c)));
      var d = o("AdsODAXUtils").maybeTranslateObjective(
        e,
        n,
        a == null ? void 0 : a.optimization_goal,
      );
      if (
        (e === r("AdsAPIObjectives").STORE_VISITS &&
          (c = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.product_set_id.delete,
            r("AdsAdgroupRecordAccessors").creative.recommender_settings
              .product_sales_channel.delete,
          )(c)),
        o(
          "ShopsAdsOffsiteCheckoutAdsUtils",
        ).adgroupHasWebsiteAndShopDestinationSpec(c))
      ) {
        var m = r("AdsAdgroupSpecPathPluginResolver").resolve({
            accountType: r("AdsAudienceDirectConfig").accountType,
            objective: e,
            promotedObjectType: n,
          }),
          p = r("AdsAdgroupSemanticFields").callToActionType.get(m, c),
          _ = p instanceof o("immutable").Iterable;
        c = _
          ? r("AdsAdgroupSemanticFields").callToActionType.set(
              m,
              c,
              r("immutable").List(["SHOP_NOW"]),
            )
          : r("AdsAdgroupSemanticFields").callToActionType.set(
              m,
              c,
              "SHOP_NOW",
            );
      }
      if (o("AdsChildAttachmentsUtils").isCarouselAd(c)) {
        ((c = o("AdsMutators").chain(
          function (e) {
            return r("AdsAdgroupRecordAccessors").metadata.carousel_style.set(
              "not_carousel",
              e,
            );
          },
          function (e) {
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.product_discount_id.delete(
              e,
            );
          },
          function (e) {
            var t, n;
            return ((t = e.creative) == null ||
            (t = t.object_story_spec) == null ||
            (t = t.link_data) == null ||
            (t = t.call_to_action) == null
              ? void 0
              : t.type) === "MESSAGE_PAGE" &&
              ((n = e.creative) == null ||
              (n = n.object_story_spec) == null ||
              (n = n.link_data) == null
                ? void 0
                : n.link) == null
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.link_data.link.set(
                  o("AdsMessengerConstants").EMPTY_MESSENGER_LINK,
                  e,
                )
              : e;
          },
        )(c)),
          (c = te(c, d, n)),
          (c = ne(c, r("AdsLinkPostFormat").SINGLE, u)),
          o("AdsDynamicAdsUtils").isDynamicAd(c)
            ? ((c = o(
                "adsAPlusCEnhanceCTASpecMutator",
              ).adsEnhanceCTASpecMutator(a, c)),
              (c = o(
                "AdsDAAddTextOverlayDefaultOnMutator",
              ).adsDAAddTextOverlayDefaultOnMutator(c)))
            : ((c = o(
                "adsAPlusCEnhanceCTASpecMutator",
              ).adsDeleteEnhanceCTASpecMutator(c)),
              (c = o(
                "AdsDAAddTextOverlayDefaultOnMutator",
              ).adsDeleteDAAddTextOverlayDefaultOnMutator(c))),
          (c = M(
            e,
            c,
            a,
            i,
            n,
            l,
            i == null ? void 0 : i.buying_type,
            a == null ? void 0 : a.optimization_goal,
          )));
        var f = r("AdsAccountSettingsIdProvider").toFluxSelector()(),
          g = o("adsUserSettingsSelector").adsUserSettingsSelector(),
          h = o(
            "AdsDASingleMediaFormatLiquidityUtils",
          ).shouldAccountDefaultOptInForDASingleMediaFormatLiquidity(f, g),
          y = o(
            "AdsDASingleMediaFormatLiquidityUtils",
          ).isEligibleForDASingleMediaFormatLiquidity({
            adgroup: c,
            campaign: a,
            campaignGroup: i,
          });
        return (
          h &&
            y &&
            ((c = o(
              "AdsAdgroupFormatTransformationMutators",
            ).adsAdgroupFormatTransformationDASingleMediaAsCollectionDefaultOptInAndOutMutator(
              c,
              !0,
            )),
            (s || (s = o("ODS"))).bumpEntityKey(
              679,
              "da.single_media_as_collection_ads_manager",
              "default_opt_in",
            )),
          c
        );
      }
      c = q(c, a, i);
      var C = o("AdsDCODegreesOfFreedomUtils").isEligibleForDegreesOfFreedom(c);
      return (
        C &&
          (c = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.degrees_of_freedom_type.set(
            "USER_ENROLLED",
            c,
          )),
        (c = te(c, d, n)),
        (c = ne(c, r("AdsLinkPostFormat").SINGLE, u)),
        (c = Q(c)),
        (c = X(c)),
        c
      );
    }
    function T(e, t, n, a, i, l, s) {
      var u,
        c = t,
        d = o(
          "AdsDASingleMediaFormatLiquidityUtils",
        ).isEligibleForDASingleMediaFormatLiquidity({
          adgroup: t,
          campaign: n,
          campaignGroup: a,
        });
      (d &&
        (c = o(
          "AdsAdgroupFormatTransformationMutators",
        ).adsAdgroupFormatTransformationDASingleMediaAsCollectionDefaultOptInAndOutMutator(
          c,
          !1,
        )),
        (c = K(c)),
        (c = H(c)),
        (c = o("AdsUEditorAdgroupAudiosAdsMutators").removeAudiosField(c)),
        (c = oe(c, e, l)),
        (c = re(c, r("AdsLinkPostFormat").COLLECTIONS, s)),
        (c = o("AdsUEditorAdgroupMediaMutators").removeAdDisclaimerSpec(c)),
        (c = o(
          "adsAPlusCCarouselInlineCommentSpecMutators",
        ).adsDeleteCarouselInlineCommentSpecMutator(c)),
        (c = o(
          "adsAPlusCCarouselDescriptionAutomationSpecMutators",
        ).adsDeleteCarouselDescriptionAutomationSpecMutator(c)),
        (c = o(
          "adsAPlusCCarouselImageTouchupSpecMutators",
        ).adsDeleteCarouselImageTouchupSpecMutator(c)),
        (c = o("adsAPlusCEnhanceCTASpecMutator").adsDeleteEnhanceCTASpecMutator(
          c,
        )),
        (c = o(
          "AdsDAAddTextOverlayDefaultOnMutator",
        ).adsDeleteDAAddTextOverlayDefaultOnMutator(c)));
      var m = o("AdsCollectionsConstants").EMPTY_COLLECTIONS_RETAIL_ID,
        p = o("AdsCanvasConstants").EMPTY_CANVAS_LINK,
        _ = o("AdsCanvasCollectionsConstants").EMPTY_COLLECTION_THUMBNAILS;
      (o("AdsChildAttachmentsUtils").isStaticAndDynamicCarouselAd(c) &&
        (c = o(
          "AdsUEditorAdgroupChildAttachmentsMutators",
        ).removeAllStaticCards(c)),
        o("AdsWebsiteExtensionTypeUtils").isMessagingAppsExtensionTypeSelected(
          c,
        ) &&
          (c = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).cleanWebsiteExtensionFields(c)));
      var f = r("AdsAudienceDirectConfig").accountType,
        g = r("AdsAdgroupSpecPathPluginResolver").resolve({
          accountType: f,
          objective: e,
          promotedObjectType: l,
        }),
        h = (u = c.creative) == null ? void 0 : u.object_type;
      (h === r("ApiAdObjectTypes").PHOTO &&
        (c = o("AdsAdgroupPostTypeMutators").convertPhotoPostToLinkPost(e, c)),
        o("AdsWhatsAppDestinationUtils").isEligibleForL1WhatsAppDestination(
          e,
          g,
        ) &&
          o("AdsLinkTypeUtils").isWhatsAppLinkTypeSelected(c, g) &&
          (c = o("AdsUEditorCallToActionMutators").deleteCallToActionValueLink(
            c,
            g,
          )),
        (c = o(
          "AdsUEditorCallToActionMutators",
        ).deleteCallToActionValueAppDestination(c, g)));
      var y = r("AdsAdgroupSemanticFields").callToActionType.get(g, c);
      if (
        (y !== "LEARN_MORE" &&
          y !== "SEE_DETAILS" &&
          (c = o("AdsUEditorCallToActionMutators").setCallToActionType(
            c,
            r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
            g,
          )),
        o("AdsChildAttachmentsUtils").isCarouselAd(c) &&
          ((c = r("AdsAdgroupRecordAccessors").metadata.carousel_style.set(
            "not_carousel",
            c,
          )),
          (c = M(e, c, n, a, l))),
        o("AdsAPIAdgroupRecordUtils").isTemplateCreative(c) &&
          e !== r("AdsAPIObjectives").STORE_VISITS &&
          (c = o("AdsAdgroupPostTypeMutators").convertTemplatePostToLinkPost(
            o("AdsMutators").chain(
              function (e) {
                return r("AdsAdgroupSemanticFields").headline.delete(g, e);
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").linkDescription.delete(
                  g,
                  e,
                );
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").message.delete(g, e);
              },
            )(c),
          )),
        o("AdsCanvasCollectionsUtils").isCanvasCollectionOnlyObjective(e))
      )
        c = o("AdsMutators").chain(
          function (e) {
            return r("AdsAdgroupSemanticFields").linkURL.set(g, e, p);
          },
          function (e) {
            return r("AdsAdgroupSemanticFields").collectionThumbnails.set(
              g,
              e,
              _,
            );
          },
        )(c);
      else {
        c = o("AdsMutators").chain(
          function (e) {
            return r("AdsAdgroupSemanticFields").retailerItemIDs.set(g, e, m);
          },
          function (e) {
            return r("AdsAdgroupSemanticFields").postClickItemDescription.set(
              g,
              e,
              o(
                "AdsCollectionsAdUtils",
              ).getPostClickItemDefaultDescriptionTemplate(i),
            );
          },
          function (e) {
            return r("AdsAdgroupSemanticFields").postClickItemHeadline.set(
              g,
              e,
              o(
                "AdsCollectionsAdUtils",
              ).getPostClickItemDefaultHeadlineTemplate(i),
            );
          },
        )(c);
        var C = !!o("AdsAPIAdgroupRecordUtils").getOfferID(c, g),
          b = r("AdsAdgroupCreativePluginResolver").resolve({
            accountType: f,
            objective: e,
            promotedObjectType: l,
            offerStateType: C
              ? r("AdsOfferState").HAS_OFFER
              : r("AdsOfferState").NO_OFFER,
            catalogVertical: r("CatalogVertical").NONE,
          }),
          v = b
            .getSupportedCanvasCheckboxMediaFormats(
              {
                adgroup: c,
                account: r("adsUEditorAccountSelector")(
                  r("AdsEditingAdgroupEditorContext"),
                ),
                campaign: n,
              },
              !1,
            )
            .has(r("AdsUEditorAdgroupCreativeFormat").COLLECTIONS),
          S = v ? p : o("AdsCallToActionURLUtils").getDefaultURL(n, e, l);
        c = r("AdsAdgroupSemanticFields").linkURL.set(g, c, S);
      }
      return ((c = te(c, e, l)), (c = Q(c)), (c = X(c)), c);
    }
    function D(e, t, n, a, i, l) {
      var s,
        u,
        c,
        d,
        m,
        p,
        _,
        f = I(e, t, n, a, i, l),
        g = r("AdsAdgroupSpecPathPluginResolver").resolve({
          accountType: r("AdsAudienceDirectConfig").accountType,
          objective: e,
          promotedObjectType: n,
        }),
        h = r("AdsAPIAdgroupRecordGetWebsiteURL")(f, g);
      (r("isAdsCanvasLink")(h) || o("AdsArLinkUtils").isArAdsLink(h)) &&
        (f = r("AdsAdgroupSemanticFields").linkURL.delete(g, f));
      var y = r("AdsAdgroupSemanticFields").callToActionType.get(g, f);
      (y === "BUY_TICKETS" &&
        (f = o("AdsMutators").chain(
          function (e) {
            return r("AdsAdgroupSemanticFields").eventID.delete(g, e);
          },
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .call_to_action.value.event_id.delete,
          function (e) {
            return r("AdsAdgroupSemanticFields").linkURL.delete(g, e);
          },
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .call_to_action.value.link.delete,
          function (e) {
            return r("AdsAdgroupSemanticFields").callToActionType.set(
              g,
              e,
              r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
            );
          },
        )(f)),
        y === "CALL_NOW" &&
          (f = o("AdsMutators").chain(function (e) {
            return r("AdsAdgroupSemanticFields").callToActionType.set(
              g,
              e,
              "CALL_NOW",
            );
          })(f)));
      var C,
        b,
        v =
          (s =
            (u = t.creative) == null ||
            (u = u.asset_feed_spec) == null ||
            (u = u.toJS()) == null
              ? void 0
              : u.images) != null
            ? s
            : [],
        S =
          (c =
            (d = t.creative) == null ||
            (d = d.asset_feed_spec) == null ||
            (d = d.toJS()) == null
              ? void 0
              : d.videos) != null
            ? c
            : [],
        R =
          (m =
            (p = t.creative) == null ||
            (p = p.object_story_spec) == null ||
            (p = p.link_data) == null ||
            (p = p.child_attachments) == null
              ? void 0
              : p.toJS()) != null
            ? m
            : [],
        L = R.filter(function (e) {
          return (
            (e.picture != null ||
              (e.image_hash != null &&
                e.image_hash !==
                  o("AdsMultiProductConstants")
                    .EMPTY_CHILD_ATTACHMENTS_PLACEHOLDER)) &&
            e.video_id == null
          );
        }),
        E = R.filter(function (e) {
          return e.video_id != null;
        });
      if (v.length > 0 || S.length > 0) {
        var k = A(v, S);
        ((C = k.images_for_cag), (b = k.videos_for_cag));
      } else if (L.length > 0 || E.length > 0) {
        var T = F(L, E);
        ((C = T.images_for_cag), (b = T.videos_for_cag));
      } else {
        var D = O(t);
        ((C = D.images_for_cag), (b = D.videos_for_cag));
      }
      var x = {};
      if (
        (C.length > 0 && (x.images = C),
        b.length > 0 && (x.videos = b),
        r("AdsAdgroupRecordAccessors").creative.branded_content.get(f) !=
          null &&
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.page_id.get(
            f,
          ) !== ((_ = a.promoted_object) == null ? void 0 : _.page_id))
      ) {
        var $, P, N;
        f = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.page_id.set(
            ($ = a.promoted_object) == null ? void 0 : $.page_id,
          ),
          o(
            "AdsInstagramUserIdMigrationUtils",
          ).IGIDV2MigrationAccessors.creative.object_story_spec.instagram_user_id.set(
            o("AdsInstagramBrandedContentUtils").getInstagramAccountIDFromPage(
              (P = a.promoted_object) == null ? void 0 : P.page_id,
              r("AdsPageInstagramAccountStore_RELAY").fluxGetSelector()(),
            ),
            o("AdsInstagramBrandedContentUtils").getInstagramUserIDFromPage(
              (N = a.promoted_object) == null ? void 0 : N.page_id,
              r("AdsPageInstagramAccountStore_RELAY").fluxGetSelector()(),
            ),
          ),
        )(f);
      }
      return o("AdsMutators").chain(
        function (e) {
          return o(
            "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
          ).setOrigins(e, ["flexible_format"]);
        },
        r("AdsAdgroupRecordAccessors").creative_asset_groups_spec.groups.set([
          x,
        ]),
        r("AdsAdgroupRecordAccessors").creative.branded_content.delete,
        r("AdsAdgroupRecordAccessors").creative.branded_content_boosting_type
          .delete,
        r("AdsAdgroupRecordAccessors").creative.facebook_branded_content.delete,
        r("AdsAdgroupRecordAccessors").creative.instagram_branded_content
          .delete,
        r("AdsAdgroupRecordAccessors").creative.branded_content_sponsor_page_id
          .delete,
        function (e) {
          return o(
            "AdsPartnershipAdsPlacementsMutators",
          ).maySyncPartnershipAdsOrganicPosts(f, e);
        },
        o("AdsUEditorAdgroupBadges").removeBadgeSets,
        r("AdsAdgroupRecordAccessors").lightweight_split_test.delete,
        r("AdsAdgroupRecordAccessors").lightweight_split_test_options.delete,
        function (e) {
          return o(
            "AdsAdgroupCreativeAssetGroupsSpecMutators",
          ).setDOFToggleSpecForCag(e, C.length > 0 || b.length === 0, !0);
        },
        function (e) {
          return X(e);
        },
      )(f);
    }
    function x(e, t, n, a, i, l) {
      var s = I(i, t, l, n, a, e),
        u =
          i === r("AdsAPIObjectives").CONVERSIONS ||
          i === r("AdsAPIObjectives").OUTCOME_SALES,
        c = i === r("AdsAPIObjectives").APP_INSTALLS,
        d = u ? P(s, l) : "INSTALL_MOBILE_APP",
        m = N(t, n, i, l),
        p = $(t);
      s = o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative_asset_groups_spec.groups.set(p),
        function (e) {
          return o(
            "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
          ).setOrigins(e, ["creative_asset_groups"]);
        },
      )(s);
      var _ = {};
      if (
        ((_.type = d), c || (u && l === r("AdsPromotedObjectTypes").MOBILE_APP))
      ) {
        var f = {};
        ((f.link = m), (_.value = f));
      } else if (
        u &&
        (l === r("AdsPromotedObjectTypes").WHATSAPP ||
          l === r("AdsPromotedObjectTypes").MESSENGER ||
          l === r("AdsPromotedObjectTypes").INSTAGRAM ||
          l === r("AdsPromotedObjectTypes").PHONE_CALL)
      ) {
        var g = {};
        if (l === r("AdsPromotedObjectTypes").INSTAGRAM) {
          var h;
          g.app_link =
            (h = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.call_to_action.value.app_link.get(
              s,
            )) != null
              ? h
              : r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.video_data.call_to_action.value.app_link.get(
                  s,
                );
        } else
          l === r("AdsPromotedObjectTypes").PHONE_CALL
            ? (g.link = r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.call_to_action.value.link.get(
                s,
              ))
            : (g.link = m);
        (l !== r("AdsPromotedObjectTypes").PHONE_CALL &&
          (g.app_destination = o(
            "AdsUEditorCTXDestinationUtils",
          ).adPromotedObjectTypeToString(l)),
          (_.value = g));
      }
      s = o("AdsAdgroupCreativeAssetGroupsSpecMutators").setSpecsInCagGroup(
        s,
        0,
        _,
        "call_to_action",
      );
      var y = r("AdsAdgroupSpecPathPluginResolver").resolve({
          accountType: r("AdsAudienceDirectConfig").accountType,
          objective: i,
          promotedObjectType: l,
        }),
        C = null;
      if (
        (l === r("AdsPromotedObjectTypes").WHATSAPP ||
          l === r("AdsPromotedObjectTypes").MESSENGER ||
          (l === r("AdsPromotedObjectTypes").INSTAGRAM &&
            o(
              "ClickToMessageCTDFeatureGating",
            ).shouldShowCTDCustomHeadline())) &&
        ((C = o(
          "AdsUEditorCTXDestinationUtils",
        ).getDefaultHeadlineForMessagingDestinations(n.destination_type)),
        C != null)
      ) {
        var b = { text: C, text_type: "headline" };
        s = o(
          "AdsAdgroupCreativeAssetGroupsSpecMutators",
        ).setTextSpecWithTypeAtIndex(s, 0, b, 0, "headline", y);
      }
      return (
        u
          ? l === r("AdsPromotedObjectTypes").MOBILE_APP
            ? (s = o(
                "AdsAdgroupCreativeAssetGroupsSpecMutators",
              ).setDefaultCreativeSettingForASCAndBAU(a, n, s, d, m, y))
            : l === r("AdsPromotedObjectTypes").PIXEL
              ? (s = o(
                  "AdsAdgroupCreativeAssetGroupsSpecMutators",
                ).setDefaultCreativeSettingForASCAndBAU(
                  a,
                  n,
                  s,
                  d,
                  null,
                  y,
                  !0,
                ))
              : (l === r("AdsPromotedObjectTypes").WHATSAPP ||
                  l === r("AdsPromotedObjectTypes").MESSENGER ||
                  l === r("AdsPromotedObjectTypes").INSTAGRAM ||
                  l === r("AdsPromotedObjectTypes").PHONE_CALL) &&
                (s = o(
                  "AdsAdgroupCreativeAssetGroupsSpecMutators",
                ).setDefaultCreativeSettingForCTX(s, d, C, m, y))
          : (s = o(
              "AdsAdgroupCreativeAssetGroupsSpecMutators",
            ).setDefaultCreativeSettingForAppPromotion(s, d, m, y)),
        s
      );
    }
    function $(e) {
      var t = r("AdsAdgroupEditorStore").getCachedCagGroups(e.id);
      return r("isTruthy")(t) && r("gkx")("1226")
        ? t
        : r("immutable").List([{ images: [] }]);
    }
    function P(e, t) {
      if (
        t === r("AdsPromotedObjectTypes").MESSENGER ||
        t === r("AdsPromotedObjectTypes").WHATSAPP ||
        t === r("AdsPromotedObjectTypes").INSTAGRAM ||
        t === r("AdsPromotedObjectTypes").PHONE_CALL
      ) {
        var n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.call_to_action.type.get(e);
        if (r("isTruthy")(n)) return n;
      }
      return r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE";
    }
    function N(e, t, n, a) {
      var i,
        l = r("AdsAdgroupSpecPathPluginResolver").resolve({
          accountType: r("AdsAudienceDirectConfig").accountType,
          objective: n,
          promotedObjectType: a,
        }),
        s = r("AdsAdgroupSemanticFields").linkURL.get(l, e),
        u = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(e, "link_urls"),
        c =
          typeof s == "string"
            ? s
            : s == null || (i = s.get(u)) == null
              ? void 0
              : i.get("website_url"),
        d = typeof c == "string" ? c : null;
      return (
        (d == null ||
          r("isAdsCanvasLink")(d) ||
          o("AdsArLinkUtils").isArAdsLink(d)) &&
          (d = o("AdsCallToActionURLUtils").getDefaultURL(t, n, a)),
        d
      );
    }
    function M(e, t, n, a, i, l, s, u) {
      var c,
        d,
        m,
        p = t;
      if (
        i !== r("AdsPromotedObjectTypes").PRODUCT_SET &&
        e === r("AdsAPIObjectives").MESSAGES &&
        !o("ClickToWhatsAppFeatureGating").isEligibleForCTXAdvantageCatalog(
          n.destination_type,
          !1,
        ) &&
        o("AdsAPIAdgroupRecordUtils").isTemplateCreative(p) &&
        l != null &&
        s != null
      ) {
        var _,
          f,
          g,
          h,
          y =
            (_ = p.creative) == null ||
            (_ = _.object_story_spec) == null ||
            (_ = _.template_data) == null ||
            (_ = _.call_to_action) == null ||
            (_ = _.value) == null
              ? void 0
              : _.app_destination,
          C =
            (f = p.creative) == null ||
            (f = f.object_story_spec) == null ||
            (f = f.template_data) == null
              ? void 0
              : f.page_welcome_message;
        return (
          (p = r(
            "adsUEditorDynamicAdsRemoveSingleMediaIfUnsupportedWithParamsMutator",
          )(p, n, s, e, i, u, r("AdsLinkPostFormat").SINGLE)),
          o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.object_story_spec
              .template_data.delete,
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.link.set(
              (g = p.creative) == null ||
                (g = g.object_story_spec) == null ||
                (g = g.template_data) == null
                ? void 0
                : g.link,
            ),
            function (t) {
              if (e == null) return t;
              var n = r("adsCallToActionGetDefaultCallToActionType")(e, i);
              return n == null
                ? t
                : r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.link_data.call_to_action.type.set(
                    n,
                    t,
                  );
            },
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.call_to_action.value.link.set(
              (h = p.creative) == null ? void 0 : h.link_url,
            ),
            function (e) {
              return y !== null
                ? r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.link_data.call_to_action.value.app_destination.set(
                    y,
                    e,
                  )
                : e;
            },
            function (e) {
              return C != null
                ? r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.link_data.page_welcome_message.set(
                    C,
                    e,
                  )
                : e;
            },
          )(p)
        );
      }
      ((p = Z(p)),
        (p = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.caption.delete(p)));
      var b = r("AdsAdgroupEditorStore").getCachedPlatformCustomizations(p.id);
      (b &&
        b.toSeq().forEach(function (e, t) {
          e.toSeq().forEach(function (e, n) {
            t === r("AdsPlatformTypes").INSTAGRAM &&
              n in
                r("AdsAdgroupRecordAccessors").creative.platform_customizations
                  .instagram &&
              (p = r(
                "AdsAdgroupRecordAccessors",
              ).creative.platform_customizations.instagram[n].set(e, p));
          });
        }),
        (p = ee(p)),
        (c = p.creative) != null &&
          (c = c.object_story_spec) != null &&
          c.template_data &&
          ((p = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.force_single_link.set(
              !0,
            ),
            r("AdsAdgroupRecordAccessors").creative.object_story_spec
              .template_data.format_option.delete,
          )(p)),
          (p = U(p))));
      var v =
        (d = p.creative) == null ||
        (d = d.object_story_spec) == null ||
        (d = d.link_data) == null
          ? void 0
          : d.link;
      ((r("isAdsCanvasLink")(v) &&
        e !== r("AdsAPIObjectives").LEAD_GENERATION) ||
        o("AdsArLinkUtils").isArAdsLink(v)) &&
        (p = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.link.set(
          o("AdsCallToActionURLUtils").getDefaultURL(n, e, i),
          p,
        ));
      var S = (m = p.creative) == null ? void 0 : m.object_type;
      return (
        S != null &&
          o("AdsAdgroupSpecUtils").isVideoObjectType(e, S) &&
          (p = o(
            "AdsAdgroupPostTypeMutators",
          ).convertLinkOrTemplatePostToVideoPost(e, p)),
        (p = w(p, e, i)),
        (p = q(p, n, a)),
        p
      );
    }
    function w(e, t, n) {
      var o = r("AdsAdgroupSpecPathPluginResolver").resolve({
          accountType: r("AdsAudienceDirectConfig").accountType,
          objective: t,
          promotedObjectType: n,
        }),
        a = e;
      return (
        (a = r("AdsAdgroupSemanticFields").linkDescription.delete(o, a)),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.name.delete(a)
      );
    }
    function A(e, t) {
      return {
        images_for_cag: (e != null ? e : [])
          .map(function (e) {
            return e.hash != null
              ? { hash: e.hash }
              : e.url != null
                ? { url: e.url }
                : null;
          })
          .filter(Boolean),
        videos_for_cag: (t != null ? t : [])
          .map(function (e) {
            if (e.video_id == null) return null;
            var t = { video_id: e.video_id };
            return (
              e.thumbnail_url != null && (t.image_url = e.thumbnail_url),
              t
            );
          })
          .filter(Boolean),
      };
    }
    function F(e, t) {
      return {
        images_for_cag: e
          .map(function (e) {
            if (e.picture == null && e.image_hash == null) return null;
            var t = {};
            e.image_hash != null
              ? (t = { hash: e.image_hash })
              : e.picture != null && (t = { url: e.picture });
            var n = e.image_crops;
            return (
              n != null &&
                (t.image_crops = r("immutable").Map(
                  Object.keys(n).map(function (e) {
                    var t,
                      o,
                      a,
                      i = n[e];
                    return [
                      e,
                      (t = r("immutable").List).of.apply(t, [
                        (o = r("immutable").List).of.apply(o, i[0]),
                        (a = r("immutable").List).of.apply(a, i[1]),
                      ]),
                    ];
                  }),
                )),
              t
            );
          })
          .filter(Boolean),
        videos_for_cag: t
          .map(function (e) {
            if (e.video_id == null) return null;
            var t = { video_id: e.video_id };
            return (e.picture != null && (t.image_url = e.picture), t);
          })
          .filter(Boolean),
      };
    }
    function O(e) {
      return { images_for_cag: B(e), videos_for_cag: W(e) };
    }
    function B(e) {
      var t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.image_hash.get(e),
        n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.picture.get(e);
      return t != null ? [{ hash: t }] : n != null ? [{ url: n }] : [];
    }
    function W(e) {
      var t,
        n =
          (t = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.get(e)) == null
            ? void 0
            : t.toJS();
      if (n != null) {
        var o = n.video_id,
          a = n.video_thumbnail_id,
          i = n.image_url,
          l = n.video_thumbnail_source,
          s = { video_id: o };
        return (
          a != null && (s.thumbnail_id = a),
          i != null && (s.image_url = i),
          l != null && (s.thumbnail_source = l),
          [s]
        );
      } else return [];
    }
    function q(e, t, n) {
      return e;
    }
    function U(e) {
      var t,
        n,
        a = e;
      return (
        ((t = a.creative) == null ? void 0 : t.categorization_criteria) !=
          null &&
          ((n = a.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.template_data) == null
            ? void 0
            : n.name) != null &&
          (a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.name.set("", a)),
        o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.categorization_criteria
            .delete,
          r("AdsAdgroupRecordAccessors").creative.category_media_source.delete,
        )(a)
      );
    }
    function V(e, t, n) {
      var a = r("adsPageIDSelector")({ adgroup: e }),
        i = r("isTruthy")(a)
          ? r("AdsPageStore").getCached(a)
          : r("AdsCachedLoadState_LEGACY").NOT_LOADED,
        l = i.website;
      if (l == null || !o("AdsAdgroupSpecUtils").isLinkDataEligible(t, n))
        return e;
      var s = o("AdsChildAttachmentsUtils").getInChild(
          0,
          r("AdsAPIChildAttachmentPaths").LINK,
          e,
        ),
        u = e;
      o("AdsChildAttachmentsUtils").isStaticCarouselAd(u) &&
        s == null &&
        (u = o("AdsUEditorAdgroupMultiProductMutators").setInChild(
          0,
          r("AdsAPIChildAttachmentPaths").LINK,
          l,
          u,
        ));
      var c = o("AdsAdgroupSpecUtils").getLink(u);
      return (
        c == null &&
          (u = o("AdsAdgroupWebsiteMutatorsAdapter").setWebsiteURL(l, u)),
        u
      );
    }
    function H(e) {
      var t = e;
      return (
        (t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.multi_share_end_card.delete(
          t,
        )),
        (t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.multi_share_end_card.delete(t)),
        (t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.profile_card.delete(
          t,
        )),
        t
      );
    }
    function G(e, t, n, a, i) {
      var l = o("AdsAdgroupSpecUtils").getAppDestination(e),
        s = r("AdsAdgroupSemanticFields").multiShareEndCard.isSupported(n, e),
        u = o(
          "AdsUEditorCampaignInstagramSelectors",
        ).allHaveInstagramStoryPlacementOnly(
          r("AdsEditingAdgroupEditorContext"),
        ),
        c = !1;
      if (t) {
        var d = o("AdsAPICampaignRecordUtils").getPromotedObjectType(a, t);
        c = d === r("AdsPromotedObjectTypes").PHONE_CALL;
      }
      if (
        a === r("AdsAPIObjectives").LEAD_GENERATION ||
        l === "MESSENGER" ||
        (a === r("AdsAPIObjectives").VIDEO_VIEWS && u) ||
        a === r("AdsAPIObjectives").STORE_VISITS ||
        a === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES ||
        c
      )
        return s
          ? r("AdsAdgroupSemanticFields").multiShareEndCard.set(n, e, !1)
          : e;
      if (!o("AdsAdgroupSpecUtils").isLinkDataEligible(a)) return e;
      var m = r("AdsAdgroupSemanticFields").multiShareEndCard.get(n, e);
      if (m == null) {
        var p = !o("AdsLocalUtils").isLocalObjective(a) && !u,
          _ = e;
        return (
          u &&
            (_ = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.link.delete(_)),
          (_ = s
            ? r("AdsAdgroupSemanticFields").multiShareEndCard.set(
                n,
                _,
                i != null ? i : p,
              )
            : _),
          _
        );
      }
      return e;
    }
    function z(e, t, n, a, i) {
      if (
        (!o("AdsAdgroupSpecUtils").isLinkDataEligible(n) &&
          !o("AdsAdgroupSpecUtils").isAppLinkDataEligible(n)) ||
        o("AdsAdgroupSpecUtils").isTemplateDataEligible(n, a, e) ||
        o("AdsLocalAwarenessUtils").isDynamicLocalAwareness(n, a)
      )
        return e;
      var l = r("AdsAdgroupSemanticFields").multiShareOptimized.get(t, e);
      if (l == null) {
        var s =
          i != null
            ? i
            : !o(
                "AdsUEditorCampaignInstagramSelectors",
              ).allHaveInstagramStoryPlacementOnly(
                r("AdsEditingAdgroupEditorContext"),
              );
        return r("AdsAdgroupSemanticFields").multiShareOptimized.isSupported(
          t,
          e,
        )
          ? r("AdsAdgroupSemanticFields").multiShareOptimized.set(t, e, s)
          : e;
      }
      return e;
    }
    function j(e, t) {
      return t &&
        o("AdsPortraitCustomizationsUtils").shouldMutateCarouselDeliveryMode(
          t,
          e,
        )
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.portrait_customizations.carousel_delivery_mode.set(
            "optimal_num_cards",
            e,
          )
        : e;
    }
    function K(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.portrait_customizations.carousel_delivery_mode.delete(e);
    }
    function Q(e) {
      return e.creative_asset_groups_spec == null
        ? e
        : o("AdsMutators").chain(
            o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators")
              .deleteAllOrigins,
            r(
              "AdsAdgroupRecordAccessors",
            ).creative_asset_groups_spec.groups.set(r("immutable").List([])),
          )(e);
    }
    function X(e) {
      var t;
      return !o("AdsFlexibleFormatAdexUtils").passSACarouselFFQE() ||
        ((t = e.creative) == null ? void 0 : t.format_transformation_spec) ==
          null
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.delete(e);
    }
    function Y(e) {
      return o("AdsMutators").chain(
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.template_url_spec.windows_phone.delete(e);
        },
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.template_url_spec.ios.delete(e);
        },
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.template_url_spec.android.delete(e);
        },
      )(e);
    }
    function J(e) {
      var t;
      return (t = e.creative) != null &&
        (t = t.object_story_spec) != null &&
        t.template_data
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.customization_rules_spec.set(
            r("AdsAdgroupEditorStore").getCachedCustomizationRulesSpec(e.id),
            e,
          )
        : e;
    }
    function Z(e) {
      var t,
        n,
        o = e;
      o = r(
        "AdsAdgroupRecordAccessors",
      ).creative.degrees_of_freedom_spec.creative_features_spec.media_order.delete(
        o,
      );
      var a =
          ((t = o.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.link_data) == null
            ? void 0
            : t.multi_share_optimized) != null,
        i =
          ((n = o.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.template_data) == null
            ? void 0
            : n.multi_share_optimized) != null;
      return a
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.multi_share_optimized.delete(o)
        : i
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.multi_share_optimized.delete(
              o,
            )
          : o;
    }
    function ee(e) {
      var t,
        n,
        o =
          ((t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.link_data) == null
            ? void 0
            : t.child_attachments) != null,
        a =
          ((n = e.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.template_data) == null
            ? void 0
            : n.child_attachments) != null;
      return o
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.child_attachments.delete(e)
        : a
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.child_attachments.delete(
              e,
            )
          : e;
    }
    function te(e, t, n) {
      if (r("isEligibleForDADynamicMediaWithParams")(e, t, n)) {
        var a = r("AdsAdgroupSpecPathPluginResolver").resolve({
          accountType: r("AdsAudienceDirectConfig").accountType,
          objective: t,
          promotedObjectType: n,
        });
        return o(
          "AdsMediaTypeAutomationMutators",
        ).changeMediaTypeAutomationMutator(e, a, "OPT_IN", "DEFAULT");
      }
      return e;
    }
    function ne(e, t, n) {
      return r("isEligibleForAdaptImagesDefaultOptInWithLinkPostFormat")(
        e,
        t,
        n,
      )
        ? o("AdsDAAdaptImagesMutators").daAdaptImagesDefaultInMutator(e)
        : e;
    }
    function re(e, t, n) {
      return r("isEligibleForAdaptImagesDefaultOptInWithLinkPostFormat")(
        e,
        t,
        n,
      )
        ? e
        : o("AdsDAAdaptImagesMutators").daAdaptImagesRemoveOptInMutator(e);
    }
    function oe(e, t, n) {
      return r("isEligibleForDADynamicMediaWithParams")(e, t, n)
        ? e
        : o(
            "AdsMediaTypeAutomationMutators",
          ).removeMediaTypeAutomationFieldsMutator(e);
    }
    ((l.setLinkPostFormatWithExtraData_UNPURE = _),
      (l.setLinkPostFormat_UNPURE = f),
      (l.changeToSingleLinkPostFormat = I),
      (l.changeToFlexibleFormat = D),
      (l.changeToCreativeAssetGroups = x),
      (l.getImagesAndVideoForCagFromAssetFeedSpec = A),
      (l.getImagesAndVideoForCagFromChildAttachments = F),
      (l.getImagesAndVideosForCagFromOSS = O),
      (l.removeCreativeAssetGroupsSpecField = Q),
      (l.removeFormatTransformationSpecField = X),
      (l.removeAppDeeplinkSpecField = Y),
      (l.removeFirstMultiShareOptimizedSpec = Z),
      (l.removeFirstChildAttachmentsSpec = ee));
  },
  98,
);
