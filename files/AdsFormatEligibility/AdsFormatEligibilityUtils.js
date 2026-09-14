__d(
  "AdsFormatEligibilityUtils",
  [
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsApplicationUtils",
    "AdsBulkValueUtils",
    "AdsCollectionsAdUtils",
    "AdsCollectionsConstants",
    "AdsDynamicAdsUtils",
    "AdsFormatDisableReason",
    "AdsFormatEligibilityConstants",
    "AdsInstagramApplicabilityUtils",
    "AdsInstagramProfileUtils",
    "AdsODAXUtils",
    "AdsOculusApplicabilityUtils",
    "AdsOnsiteDonateAdsUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorHostIDs",
    "AdsUnifiedProfileVisitUtils",
    "AdsWebsiteAdUtils",
    "CagLaunchStatusUtils",
    "ClickToWhatsAppFeatureGating",
    "EngagementUnitificationGating",
    "VerticalsWithLPPOnlyForRetargeting",
    "adsSupportsDynamicAdsSingleImageFormat",
    "gkx",
    "igAccessAdsManagerUtils",
    "isAccountEligibleForThreeCOL2AdEx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      var i = u(e, t, a),
        l = o("CagLaunchStatusUtils").shouldShowFlexibleFormatForCAG(e, n),
        c = s(e, r);
      return i || c || l;
    }
    function s(e, t) {
      if (
        e.objective.getValues().some(function (e) {
          return e !== r("AdsAPIObjectives").OUTCOME_ENGAGEMENT;
        }) ||
        e.isExistingPostAd === !0
      )
        return !1;
      var n = o("AdsDynamicAdsUtils").areAllDynamicAds(
        e.bulkProductSetID,
        e.promotedObjectType,
      );
      if (
        (n &&
          o("ClickToWhatsAppFeatureGating").isEligibleForCTXAdvantageCatalog(
            o("AdsBulkValueUtils").getUniformValueOrDefault(
              e.bulkCampaignDestination,
            ),
            !1,
          )) ||
        e.promotedObjectType.getValues().some(function (e) {
          return !o(
            "AdsFormatEligibilityConstants",
          ).CONVERSION_LOCATIONS_WITH_FLEXIBLE_FORMAT_IN_ENGAGEMENT.includes(e);
        }) ||
        o("EngagementUnitificationGating").getEULaunch1Experiment(!1)
      )
        return !1;
      if (
        e.promotedObjectType
          .getValues()
          .includes(r("AdsPromotedObjectTypes").PHONE_CALL)
      )
        return !0;
      if (t) {
        var a;
        return (a = r("qex")._("3494")) != null ? a : !1;
      } else {
        var i;
        return (i = r("qex")._("3497")) != null ? i : !1;
      }
    }
    function u(e, t, n) {
      if (
        e.isDCOAdgroup ||
        e.objective.getValues().some(function (e) {
          return e !== r("AdsAPIObjectives").LINK_CLICKS;
        }) ||
        e.isExistingPostAd === !0 ||
        (e.bulkProductSetID.getValues().length > 0 &&
          !e.isCollaborativeAdCampaign)
      )
        return !1;
      if (
        e.promotedObjectType.getValues().some(function (e) {
          return e === r("AdsPromotedObjectTypes").WEBSITE;
        })
      )
        if (t) {
          var a;
          return (a = r("qex")._("2033")) != null ? a : !1;
        } else {
          var i;
          return (i = r("qex")._("2034")) != null ? i : !1;
        }
      if (
        e.promotedObjectType.getValues().some(function (e) {
          return o(
            "AdsFormatEligibilityConstants",
          ).CONVERSION_LOCATIONS_WITH_FLEXIBLE_FORMAT_IN_TRAFFIC.includes(e);
        })
      ) {
        if (
          e.promotedObjectType.getValues().some(function (e) {
            return e === r("AdsPromotedObjectTypes").PHONE_CALL;
          })
        )
          return !0;
        if (n) return !1;
      }
      return !1;
    }
    function c(e) {
      var t;
      if (e.isRFStoriesCarouselFormatSelected) return !1;
      var n = e.promotedObjectType,
        a = o("AdsDynamicAdsUtils").areAllDynamicAds(e.bulkProductSetID, n);
      if (a && e.hasOffer) return !1;
      var i = o("AdsBulkValueUtils").getUniformValue(e.full_funnel_objective),
        l =
          i ||
          ((t = o("AdsBulkValueUtils").getUniformValue(
            e.objective,
            r("AdsAPIObjectives").NONE,
          )) != null
            ? t
            : r("AdsAPIObjectives").NONE),
        s = o("AdsBulkValueUtils").getUniformValue(
          e.promotedObjectType,
          r("AdsPromotedObjectTypes").NONE,
        ),
        u = e.optimizationGoals.length > 0 ? e.optimizationGoals[0] : null,
        c = o("AdsODAXUtils").maybeTranslateObjective(l, s, u),
        d = e.promotedObjectType.getValues().some(function (e) {
          return e === r("AdsPromotedObjectTypes").WEB_AND_SHOP;
        });
      if (
        e.catalogVertical != null &&
        (c === r("AdsAPIObjectives").CONVERSIONS ||
          c === r("AdsAPIObjectives").LINK_CLICKS) &&
        !d
      ) {
        var m = o("AdsBulkValueUtils").getUniformValue(e.bulkBuyingType),
          p = o(
            "ClickToWhatsAppFeatureGating",
          ).isEligibleForCTXAdvantageCatalog(
            o("AdsBulkValueUtils").getUniformValueOrDefault(
              e.bulkCampaignDestination,
            ),
            !1,
          );
        if (
          !r("adsSupportsDynamicAdsSingleImageFormat")(
            m,
            l,
            s,
            u,
            e.isASACampaign,
            !1,
            p,
          )
        )
          return !1;
      }
      return !0;
    }
    function d(e) {
      if (e.hostID === r("AdsUEditorHostIDs").CREATION && e.isDCOAdgroup)
        return !1;
      var t = r("AdsOculusApplicabilityUtils").anySpecHasOculusVRAppsPlacement(
        e.placementSpecs,
      );
      return t || f(e.placementSpecs) ? !1 : g(e);
    }
    function m(e) {
      if (
        e.isSBGConversionAcquisitionCreationPackage ||
        e.isWebTrafficCreationPackage ||
        e.isDCOAdgroup
      )
        return !1;
      if (e.isIGLogin)
        return o("igAccessAdsManagerUtils").isIGAccessParityEnabled();
      if (
        e.hasOffer ||
        e.promotedObjectTypeVariation
          .getValues()
          .includes("PRODUCT_SET_AND_PHONE_CALL") ||
        e.promotedObjectTypeVariation
          .getValues()
          .includes("PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL")
      )
        return !1;
      if (e.isAdAndMessageMarketingCampaign) {
        var t = e.promotedObjectType,
          n = o("AdsDynamicAdsUtils").areAllDynamicAds(e.bulkProductSetID, t);
        if (n) return r("gkx")("11222");
      }
      if (o("AdsApplicationUtils").isCreativeStudio()) return !1;
      var a = e.placementSpecs.some(
        o("AdsPlacementAPISpecReaderUtils")
          .isOnlyActiveFacebookInstreamVideosPlacement,
      );
      if (a || f(e.placementSpecs)) return !1;
      var i = o("AdsBulkValueUtils").getUniformValue(e.objective);
      if (i === r("AdsAPIObjectives").APP_INSTALLS) return r("gkx")("8643");
      var l = e.objective.getValues(),
        s = o("AdsBulkValueUtils").getUniformValue(e.full_funnel_objective);
      return l.every(function (t) {
        return e.promotedObjectType.getValues().every(function (n, r) {
          return h(
            e.catalogVertical,
            o("AdsODAXUtils").maybeTranslateObjective(
              s || t,
              n,
              e.optimizationGoals[r],
            ),
            n,
            e.isSAIPAllowAllOptions,
            e.bulkPlacePageSetID.getValueForIndex(r),
            e.optimizationGoals[r],
            e.account,
          );
        });
      });
    }
    function p(e) {
      var t = r(
        "AdsInstagramApplicabilityUtils",
      ).allHaveInstagramStoryPlacementOnly(e.placementSpecs);
      if (b(e.isDCOAdgroup, e.objective, e.promotedObjectType) && !t)
        return e.isDCOAdgroup
          ? r("AdsFormatDisableReason").DISABLE_CAROUSEL_FOR_DC
          : r("AdsFormatDisableReason").DISABLE_CAROUSEL_FOR_VIDEO_VIEW;
      var n = e.optimizationGoals.some(function (e) {
        return (
          e === r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS
        );
      });
      if (t && n)
        return r("AdsFormatDisableReason")
          .DISABLE_CAROUSEL_FOR_MRC_VIDEO_VIEW_FOR_INSTAGRAM_STORY;
      if (f(e.placementSpecs))
        return r("AdsFormatDisableReason").DISABLE_CAROUSEL_FOR_CTV_PLACEMENT;
      var a = o("AdsDynamicAdsUtils").areAllDynamicAds(
          e.bulkProductSetID,
          e.promotedObjectType,
        ),
        i = e.promotedObjectType.getValues().some(function (e) {
          return e === r("AdsPromotedObjectTypes").WEB_AND_APP;
        });
      if (
        i &&
        !o("isAccountEligibleForThreeCOL2AdEx").is3coEnableCarouselFormat() &&
        !a
      )
        return r("AdsFormatDisableReason").DISABLE_CAROUSEL_FOR_OMNICHANNEL;
      var l = e.promotedObjectType.getValues().some(function (e) {
        return e === r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE;
      });
      return l && !a
        ? r("AdsFormatDisableReason")
            .DISABLE_CAROUSEL_FOR_OMNICHANNEL_WEBSITE_APP_AND_IN_STORE_OPTIMIZATION
        : o("AdsBulkValueUtils").getUniformValue(
              e.isReelsTrendingAdsEnabled,
              !1,
            )
          ? r("AdsFormatDisableReason").DISABLE_CAROUSEL_FOR_REELS_TRENDING_ADS
          : null;
    }
    function _(e) {
      var t = e.placementSpecs.some(function (e) {
        return (
          o("AdsPlacementAPISpecReaderUtils").isOnlyActivePublisherPlatform(
            e,
            "facebook",
          ) &&
          o("AdsPlacementAPISpecReaderUtils").isOnlyActiveFacebookPosition(
            e,
            "right_hand_column",
          )
        );
      });
      if (t) return r("AdsFormatDisableReason").DISABLE_FORMAT_FOR_RHS_ONLY;
      var n = e.optimizationGoals.every(function (e) {
          return e === r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS;
        }),
        a = e.placementSpecs.some(
          r("AdsInstagramApplicabilityUtils")
            .placementSpecHasInstagramPlacementOnly,
        );
      if (n && a && !r("gkx")("2967"))
        return r("AdsFormatDisableReason").DISABLE_IG_COLLECTION_FOR_LPV;
      if (f(e.placementSpecs))
        return r("AdsFormatDisableReason").DISABLE_COLLECTION_FOR_CTV_PLACEMENT;
      var i = e.placementSpecs.every(function (t) {
        return o("AdsCollectionsAdUtils").hasCompatiblePlacement(t, e.account);
      });
      if (!i)
        return r("AdsFormatDisableReason")
          .DISABLE_COLLECTION_FOR_UNSUPPORTED_PLACEMENTS_ONLY;
      var l = o("AdsDynamicAdsUtils").areAllDynamicAds(
          e.bulkProductSetID,
          e.promotedObjectType,
        ),
        s = e.promotedObjectType.getValues().some(function (e) {
          return e === r("AdsPromotedObjectTypes").WEB_AND_APP;
        });
      if (s && !l)
        return r("AdsFormatDisableReason")
          .DISABLE_COLLECTION_FOR_OMNICHANNEL_WEBSITE_AND_APP_OPTIMIZATION;
      var u = e.promotedObjectType.getValues().some(function (e) {
        return e === r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE;
      });
      return u && !l
        ? r("AdsFormatDisableReason")
            .DISABLE_COLLECTION_FOR_OMNICHANNEL_WEBSITE_APP_AND_IN_STORE_OPTIMIZATION
        : o("AdsBulkValueUtils").getUniformValue(
              e.isReelsTrendingAdsEnabled,
              !1,
            )
          ? r("AdsFormatDisableReason")
              .DISABLE_COLLECTION_FOR_REELS_TRENDING_ADS
          : null;
    }
    function f(e) {
      return e.some(function (e) {
        return o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
          e,
          r("AdsAPIDevicePlatform").CONNECTED_TV,
        );
      });
    }
    function g(e) {
      var t = o("AdsDynamicAdsUtils").areAllDynamicAds(
          e.bulkProductSetID,
          e.promotedObjectType,
        ),
        n = e.promotedObjectType.getValues().some(function (e) {
          return e === r("AdsPromotedObjectTypes").WEB_AND_APP;
        });
      if (
        !o("isAccountEligibleForThreeCOL2AdEx").is3coEnableCarouselFormat() &&
        n &&
        !t
      )
        return !1;
      var a = e.promotedObjectType.getValues().some(function (e) {
        return e === r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE;
      });
      if (a && !t) return !1;
      var i = e.objective.getValues(),
        l = i.some(function (t, n) {
          var a,
            i =
              (a = e.promotedObjectType) == null
                ? void 0
                : a.getValueForIndex(n);
          return (
            (t === r("AdsAPIObjectives").CONVERSIONS ||
              t === r("AdsAPIObjectives").OUTCOME_SALES) &&
            o("AdsOnsiteDonateAdsUtils").isOnsiteDonateAdPromotedObjectType(
              i,
            ) &&
            r("gkx")("1495")
          );
        });
      if (l) return !1;
      var s = i.some(function (t, n) {
        var o = e.promotedObjectType
          ? e.promotedObjectType.getValueForIndex(n)
          : null;
        return (
          o === r("AdsPromotedObjectTypes").PHONE_CALL &&
          t === r("AdsAPIObjectives").LINK_CLICKS
        );
      });
      if (s) return !0;
      var u =
        Object.values(r("VerticalsWithLPPOnlyForRetargeting")).includes(
          e.catalogVertical,
        ) && e.isRetargeting;
      if (t && u) return !1;
      var c = e.placementSpecs.some(
        o("AdsPlacementAPISpecReaderUtils")
          .isOnlyActiveFacebookInstreamVideosPlacement,
      );
      return !c;
    }
    function h(e, t, n, a, i, l, s) {
      var u =
          o("AdsWebsiteAdUtils").isWebsiteObjective(t, n) ||
          o("AdsWebsiteAdUtils").isAppObjective(t, n) ||
          o("AdsWebsiteAdUtils").isWebsiteConversionsOfflineObjective(t, n) ||
          o("AdsWebsiteAdUtils").isWebsiteAndInStoreObjective(t, n) ||
          o("AdsWebsiteAdUtils").isWebsiteAppAndInStoreObjective(t, n) ||
          o("AdsWebsiteAdUtils").isInStoreObjective(t, n),
        c = n === r("AdsPromotedObjectTypes").REMINDER,
        d =
          t === r("AdsAPIObjectives").BRAND_AWARENESS ||
          t === r("AdsAPIObjectives").REACH,
        m = n === r("AdsPromotedObjectTypes").WEB_AND_SHOP,
        p =
          o(
            "AdsInstagramProfileUtils",
          ).getIsInstagramProfileConversionUnderTrafficObjective(t, n) ||
          o(
            "AdsUnifiedProfileVisitUtils",
          ).getIsUnifiedProfileVisitsConversionUnderODAXObjective(t, n),
        _ =
          (o("AdsODAXUtils").isSTOSalesCampaign(t, l, i) && r("gkx")("3461")) ||
          t === r("AdsAPIObjectives").STORE_VISITS,
        f =
          n === r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM ||
          n === r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL,
        g = n === r("AdsPromotedObjectTypes").LIVE_VIDEO;
      return (
        !f &&
        !p &&
        !c &&
        !g &&
        (u ||
          _ ||
          (y(e, t) &&
            n !== r("AdsPromotedObjectTypes").MESSENGER &&
            n !== r("AdsPromotedObjectTypes").WHATSAPP &&
            n !== r("AdsPromotedObjectTypes").PHONE_CALL) ||
          d ||
          a ||
          m)
      );
    }
    function y(e, t) {
      var n = o("AdsCollectionsConstants").SUPPORTED_VERTICALS.includes(e);
      return (
        o(
          "AdsFormatEligibilityConstants",
        ).OBJECTIVES_WITH_PRODUCT_CATALOG_SUPPORT.includes(t) && n
      );
    }
    function C(e) {
      return e
        ? o("AdsFormatEligibilityConstants")
            .OBJECTIVES_INCOMPATIBLE_WITH_DC_CAROUSEL
        : o("AdsFormatEligibilityConstants")
            .OBJECTIVES_INCOMPATIBLE_WITH_CAROUSEL;
    }
    function b(e, t, n) {
      var r = C(e);
      return t.getValues().every(function (e) {
        return n.getValues().every(function (t) {
          var n = o("AdsODAXUtils").maybeTranslateObjective(e, t);
          return r.includes(n);
        });
      });
    }
    ((l.shouldShowFlexibleFormat = e),
      (l.shouldShowFlexibleFormatForEngagement = s),
      (l.shouldShowFlexibleFormatForTraffic = u),
      (l.shouldShowSingleMediaFormat = c),
      (l.shouldShowCarouselFormat = d),
      (l.shouldShowCollectionFormat = m),
      (l.getDisableReasonForCarousel = p),
      (l.getDisableReasonForCollection = _),
      (l.getObjectivesIncompatiableWithCarousel = C));
  },
  98,
);
