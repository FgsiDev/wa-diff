__d(
  "AdsAdPreviewUtils",
  [
    "errorCode",
    "errorDesc",
    "fbt",
    "AdCampaignDestination",
    "AdImageSpecs",
    "AdPreview.react",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupMessageMarketingValidationUtils",
    "AdsAdgroupTypeUtils",
    "AdsAdgroupUtils",
    "AdsArLinkUtils",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsCallToActionTypesUtils",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsCanvasAdUtils",
    "AdsChildAttachmentsUtils",
    "AdsCollectionsAdUtils",
    "AdsDLOConstantUtils",
    "AdsDynamicAdsFormatUtils",
    "AdsDynamicAdsUtils",
    "AdsError",
    "AdsInstagramSearchAdsUtils",
    "AdsInstagramSearchGridAdPreviewUtils",
    "AdsInstreamCapabilityUtils",
    "AdsInstreamVideoErrorUtils",
    "AdsInstreamVideoLengthUtil",
    "AdsLanguageDialectConverter",
    "AdsLocalAwarenessUtils",
    "AdsMessengerDynamicAdsUtils",
    "AdsMessengerMarketingMessagesCatalogPreviewUtils",
    "AdsMessengerVisualEditorCustomerActionType",
    "AdsPageLikeUtils",
    "AdsPlacementAssetCustomizationTypes",
    "AdsPlacementAssetEligibilityUtils",
    "AdsPlacementAssetPluginUtils",
    "AdsPlacementAssetUtils",
    "AdsPlacementPluginList",
    "AdsPreviewsPlugins",
    "AdsPromotedObjectTypes",
    "AdsSphericalPhotoErrorUtils",
    "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorUnifiedCreationAwarenessUtils",
    "AdsWebsiteAdUtils",
    "AdsWhatsappDynamicAdsUtils",
    "FacebookReelsOverlayAdsRulesSitevarConfig.experimental",
    "MessageMarketingIntegrityValidationCallsites",
    "ODS",
    "WAMOLabelStrings",
    "WAMOStatusAdsManagerUtils",
    "WAMOStatusMediaValidationUtils",
    "ads-lib-urllib",
    "adsGetCarouselCardFormatsForPreviewFormat",
    "adsGetMediaFormatByAssetGroup",
    "adsInteractivePollHasFbFeedVideoPollSpec",
    "adsPreviewGetPositionFromFormat",
    "getMessageMarketingIntegrityValidationResults",
    "gkx",
    "immutable",
    "isEmpty",
    "isTruthy",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e,
      d,
      m,
      p = m || (m = o("react")),
      _ = new Set([
        "USER_ENROLLED_NON_DCO",
        "DISABLED",
        "USER_ENROLLED_AUTOFLOW",
      ]);
    function f(e, t, n, a, i) {
      var l,
        s = [];
      o("AdsDynamicAdsUtils").isDynamicAd(e) &&
        !o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForDPACreation() &&
        s.push(_t());
      var u = a == null ? void 0 : a.catalogVertical;
      if (
        (((l = e.creative) == null ? void 0 : l.product_set_id) != null &&
          o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForDPACreation() &&
          u != null &&
          !o(
            "WAMOStatusAdsManagerUtils",
          ).isCatalogVerticalSupportedForDPACreation(u) &&
          s.push(ft()),
        o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) && s.push(dt()),
        n != null &&
          !o("AdsUEditorMessagingDestinationUtils").destinationIncludesWhatsApp(
            r("AdCampaignDestination")[n],
          ) &&
          s.push(i === !0 ? St() : vt()),
        Be(e, t))
      ) {
        var c = o("AdsDynamicAdsUtils").isDynamicAd(e);
        if (
          c &&
          (a == null ? void 0 : a.objective) ===
            r("AdsAPIObjectives").OUTCOME_TRAFFIC
        )
          s.push(bt());
        else {
          var d,
            m =
              (d = a == null ? void 0 : a.conversionLocations) != null
                ? d
                : a == null
                  ? void 0
                  : a.promotedObjectType,
            p = !(
              c ||
              ((a == null ? void 0 : a.objective) ===
                r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
                (m === r("AdsPromotedObjectTypes").WEBSITE ||
                  m === r("AdsPromotedObjectTypes").PIXEL))
            );
          s.push(Ct(p));
        }
      }
      return s;
    }
    function g(e, t, n, r, a, i, l, s, u) {
      var c = [];
      if (!o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForWAMOStatus())
        return c;
      var d = o(
        "AdsUEditorUnifiedCreationAwarenessUtils",
      ).getSelectedMessagingType(t);
      return (
        o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, n) &&
          c.push(at(a)),
        Fe(e) &&
          (o(
            "WAMOStatusAdsManagerUtils",
          ).isAdAccountEligibleForCarouselExpansion()
            ? Oe(e) && c.push(ct())
            : c.push(st())),
        o(
          "AdsAPIAdgroupRecordUtils",
        ).isExistingPostMultiPhotoAdsOrPublishedStatus(e) &&
          !o(
            "WAMOStatusAdsManagerUtils",
          ).isAdAccountEligibleForCarouselExpansion() &&
          c.push(ut()),
        o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAdOrCreativeAssetGroup(
          e,
        ) && c.push(mt()),
        o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForCTWEBExpansion() &&
          c.push.apply(c, f(e, t, d, s, u)),
        We(e) && c.push(gt()),
        o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(e) &&
          c.push.apply(c, h(e, r, i, l, s)),
        o("AdsAdgroupUtils").isPartnershipAd(e) &&
          !o(
            "WAMOStatusAdsManagerUtils",
          ).isAdAccountEligibleForPartnershipAdsExpansion() &&
          c.push(yt()),
        c
      );
    }
    function h(e, t, n, r, a) {
      var i = He(e);
      return i === "video" &&
        !o(
          "WAMOStatusMediaValidationUtils",
        ).isSingleVideoValidForStatusFromPlacementAssetSpec(r)
        ? [
            o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForLPVExpansion()
              ? lt()
              : it(),
          ]
        : i === "image" && !Ue(n, t, a)
          ? [ht()]
          : [];
    }
    function y(t, n, a, i, l, s) {
      var u = [],
        c = null,
        d = o(
          "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
        ).isAdAccountEligibleForMessageMarketingLiquidity(),
        m =
          l != null &&
          o(
            "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
          ).isAdAccountEligibleForMessengerMarketingLiquidity(),
        p = d ? n : null,
        _ = d ? a : null,
        f = d ? i : null,
        g = m ? l : null;
      if (
        ((f != null || p != null || g != null) &&
          (c = o(
            "getMessageMarketingIntegrityValidationResults",
          ).getMessageMarketingIntegrityHighestPriorityValidationResult({
            callsite: r("MessageMarketingIntegrityValidationCallsites")
              .AdgroupRHRIntegrityError,
            adgroupIntegrityData: p,
            adgroupWABAIntegrityData: f,
            messengerPageIntegrityData: g,
          })),
        _ != null && c === null)
      ) {
        var h, y;
        ((c = o(
          "getMessageMarketingIntegrityValidationResults",
        ).getMessageMarketingIntegrityHighestPriorityValidationResult({
          callsite: r("MessageMarketingIntegrityValidationCallsites")
            .AdgroupRHRIntegrityError,
          adgroupIntegrityData: _,
        })),
          (c =
            ((h = c) == null ? void 0 : h.errorEnum) ===
              o("getMessageMarketingIntegrityValidationResults")
                .MessageMarketingIntegrityErrorEnum.TEMPLATE_PAUSED ||
            ((y = c) == null ? void 0 : y.errorEnum) ===
              o("getMessageMarketingIntegrityValidationResults")
                .MessageMarketingIntegrityErrorEnum.TEMPLATE_DISABLED
              ? c
              : null));
      }
      var C = s;
      return (
        C == null &&
          (o("AdsDynamicAdsUtils").isDynamicAd(t)
            ? (C = o(
                "AdsAdgroupMessageMarketingValidationUtils",
              ).validateDynamicProductMessage({ adgroup: t }, !0))
            : o("AdsChildAttachmentsUtils").isCarouselAd(t)
              ? (C = o(
                  "AdsAdgroupMessageMarketingValidationUtils",
                ).validateCarouselFormatMessage({ adgroup: t }, !0))
              : (C = o(
                  "AdsAdgroupMessageMarketingValidationUtils",
                ).validateSingleMediaFormatMessage({ adgroup: t }, !0))),
        c != null && c.error.level === r("AdsError").Level.WARN
          ? u.push(c.error)
          : (e || (e = r("isEmpty")))(C)
            ? c != null && u.push(c.error)
            : u.push(C[0]),
        u
      );
    }
    function C(e, t, n, r) {
      return y(e, t, n, r, null);
    }
    function b(e, t) {
      if (
        !o(
          "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
        ).isAdAccountEligibleForMessengerMarketingLiquidity()
      )
        return [];
      var n = o(
        "AdsMessengerMarketingMessagesCatalogPreviewUtils",
      ).getMessengerMarketingMessagesCatalogUnsupportedErrors(e, t);
      return (o("AdsAdgroupUtils").isPartnershipAd(e) && n.push(pt()), n);
    }
    function v(e, t, n, o, a, i) {
      var l,
        s = [];
      if (
        ve(e, {
          format: n,
          hasIGArEffect:
            (l = i == null ? void 0 : i.effectSupportsIG) != null ? l : !1,
        })
      )
        s.push(at(o));
      else if (tt(t, n, "video")) {
        if (n === "INSTAGRAM_REELS") return s;
        s.push(Et(2238167, a));
      } else
        nt(e) &&
          s.push(
            new (r("AdsError"))(
              1443431,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "To enable this template, select a call to action other than No button.",
                );
              }, {}),
            ),
          );
      return s;
    }
    function S(e, t, n, o, a, i, l) {
      var s,
        c = [];
      return (
        we(e, o, (s = l == null ? void 0 : l.effectSupportsFB) != null ? s : !1)
          ? nt(e) &&
            c.push(
              new (r("AdsError"))(
                1443426,
                u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "To enable this template, select a call to action other than No button.",
                  );
                }, {}),
              ),
            )
          : c.push(at(a)),
        c
      );
    }
    function R(e, t, n, a, i, l, s, c) {
      var d = [],
        m =
          a === "INSTREAM_VIDEO_DESKTOP"
            ? n === r("AdsAPIObjectives").VIDEO_VIEWS
            : o("AdsInstreamCapabilityUtils").isEligibleForInstreamLongVideoAds(
                !0,
                n,
              );
      return (
        Te(e, a, i, n)
          ? De(e, i, c)
            ? tt(t, a, "video") && d.push(Et(1699053, s))
            : d.push(
                o("AdsInstreamVideoErrorUtils").getWrongLengthError(
                  r("AdsError").Level.WARN,
                  m,
                  l,
                ),
              )
          : d.push(
              r("AdsError").createError(
                2016145,
                u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "To deliver your ad to Facebook in-stream reels, please change your creative to a video.",
                  );
                }, {}),
                r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
              ),
            ),
        d
      );
    }
    function L(e) {
      return _e(e.adgroup, e.effectiveObjective, e.accountID)
        ? []
        : [at(e.apiFormatLabel)];
    }
    function E(e) {
      var t, n;
      return fe(
        e.adgroup,
        (t = (n = e.arEffectInfo) == null ? void 0 : n.effectSupportsFB) != null
          ? t
          : !0,
      )
        ? []
        : [at(e.apiFormatLabel)];
    }
    function k(e) {
      return ge(e.adgroup, e.accountID) ? [] : [at(e.apiFormatLabel)];
    }
    function I(e) {
      return he(e.adgroup, e.accountID) ? [] : [at(e.apiFormatLabel)];
    }
    function T(e) {
      var t;
      return ye(
        e.format,
        e.adgroup,
        e.effectiveObjective,
        e.accountID,
        (t = e.eligibilityInformation) == null
          ? void 0
          : t.isCTXAdvantageCatalogEnabled,
      )
        ? []
        : [at(e.apiFormatLabel)];
    }
    function D(e) {
      return e.assetType ===
        o("AdsPlacementAssetCustomizationTypes")
          .AdsPlacementCustomizationMediaFormatVideo
        ? [Lt(e.apiFormatLabel)]
        : Ce(e.adgroup, e.previewMedia, e.accountID)
          ? []
          : [at(e.apiFormatLabel)];
    }
    function x(e) {
      var t, n, r;
      return be(
        e.adgroup,
        e.accountID,
        {
          format: e.format,
          hasIGArEffect:
            (t = (n = e.arEffectInfo) == null ? void 0 : n.effectSupportsIG) !=
            null
              ? t
              : !0,
        },
        (r = e.eligibilityInformation) == null
          ? void 0
          : r.isCTXAdvantageCatalogEnabled,
      )
        ? []
        : [at(e.apiFormatLabel)];
    }
    function $(e) {
      var t, n;
      if (
        o(
          "AdsInstagramSearchAdsUtils",
        ).shouldEnableIGSearchFeedAdsInReelsChainCreation()
      ) {
        var r,
          a = Re(
            e.adgroup,
            e.adgroupRecord,
            e.format,
            (r = e.arEffectInfo) != null ? r : void 0,
            e.apiFormatLabel,
            e.positionNameLabel,
          );
        return a != null ? [a] : [];
      }
      return Se(e.adgroup, e.accountID, {
        format: e.format,
        hasIGArEffect:
          (t = (n = e.arEffectInfo) == null ? void 0 : n.effectSupportsIG) !=
          null
            ? t
            : !0,
      })
        ? []
        : [at(e.apiFormatLabel)];
    }
    function P(e) {
      var t, n, r;
      return Se(
        e.adgroup,
        e.accountID,
        {
          format: e.format,
          hasIGArEffect:
            (t = (n = e.arEffectInfo) == null ? void 0 : n.effectSupportsIG) !=
            null
              ? t
              : !0,
        },
        (r = e.eligibilityInformation) == null
          ? void 0
          : r.isCTXAdvantageCatalogEnabled,
      )
        ? []
        : [at(e.apiFormatLabel)];
    }
    function N(e) {
      var t, n;
      return Le(e.adgroup, e.accountID, {
        format: e.format,
        hasIGArEffect:
          (t = (n = e.arEffectInfo) == null ? void 0 : n.effectSupportsIG) !=
          null
            ? t
            : !0,
      })
        ? []
        : [at(e.apiFormatLabel)];
    }
    function M(e) {
      var t,
        n,
        o,
        a,
        i = [];
      return (
        Ee(
          e.adgroup,
          e.accountID,
          {
            format: e.format,
            hasIGArEffect:
              (t =
                (n = e.arEffectInfo) == null ? void 0 : n.effectSupportsIG) !=
              null
                ? t
                : !1,
          },
          (o =
            (a = e.eligibilityInformation) == null
              ? void 0
              : a.isCTXAdvantageCatalogEnabled) != null
            ? o
            : !1,
        )
          ? e.eligibilityInformation != null &&
            r("adsInteractivePollHasFbFeedVideoPollSpec")(
              e.adgroup,
              e.eligibilityInformation.spec,
            ) &&
            !r("gkx")("21492") &&
            i.push(
              r("AdsError").createError(
                2446286,
                u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "This ad will not run in Instagram Stories. Interactive polls can only be used in Instagram Stories ads when Instagram Stories is the only placement.",
                  );
                }, {}),
                r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
              ),
            )
          : i.push(at(e.apiFormatLabel)),
        i
      );
    }
    function w(e) {
      return o("AdsArLinkUtils").isArAdCreative(e.adgroup)
        ? [at(e.apiFormatLabel)]
        : [];
    }
    function A(e) {
      var t = [];
      return (
        e.assetType ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo &&
          !o(
            "AdsInstagramSearchGridAdPreviewUtils",
          ).passSearchGridVideoAdsGK() &&
          t.push(kt()),
        o("AdsArLinkUtils").isArAdCreative(e.adgroup) &&
          t.push(at(e.apiFormatLabel)),
        t
      );
    }
    function F(e) {
      var t = [];
      return (
        e.assetType ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo &&
          t.push(Lt(e.apiFormatLabel)),
        o("AdsArLinkUtils").isArAdCreative(e.adgroup) &&
          t.push(at(e.apiFormatLabel)),
        t
      );
    }
    function O(e) {
      return tt(e.adgroupRecord, e.format, "video")
        ? [
            r("AdsError").createError(
              4588039,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "Video carousel cards are not supported on Threads.",
                );
              }, {}),
            ),
          ]
        : [];
    }
    function B(e) {
      var t;
      return v(
        e.adgroup,
        e.adgroupRecord,
        e.format,
        e.apiFormatLabel,
        e.positionNameLabel,
        (t = e.arEffectInfo) != null ? t : void 0,
      );
    }
    function W(e) {
      return ke(e.adgroup, e.accountID) ? [] : [at(e.apiFormatLabel)];
    }
    function q(e) {
      return Ie(e.adgroup, e.format, e.effectiveObjective)
        ? []
        : [
            r("AdsError").createError(
              2016118,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "Your campaign objective does not currently support this ad format for this in-stream reels placement.",
                );
              }, {}),
              r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
            ),
          ];
    }
    function U(e) {
      return R(
        e.adgroup,
        e.adgroupRecord,
        e.effectiveObjective,
        e.format,
        e.assetType,
        e.apiFormatLabel,
        e.positionNameLabel,
        e.instreamVideoLength,
      );
    }
    function V(e) {
      if (
        e.assetType !==
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo &&
        e.assetType !==
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatCarousel
      ) {
        var t = r("gkx")("8857");
        return t ? [] : [Rt(e.apiFormatLabel)];
      }
      return xe(e.adgroup, e.assetType) ? [] : [at(e.apiFormatLabel)];
    }
    function H(e) {
      return Pe(e.adgroup, e.assetType, e.effectiveObjective)
        ? []
        : [at(e.apiFormatLabel)];
    }
    function G(e) {
      return Ne(e.adgroup, e.assetType, e.effectiveObjective)
        ? []
        : [at(e.apiFormatLabel)];
    }
    function z(e) {
      return Ke(e.adgroup, e.accountID) ? [] : [at(e.apiFormatLabel)];
    }
    function j(e) {
      var t;
      return Qe(
        e.adgroup,
        e.accountID,
        (t = e.eligibilityInformation) == null
          ? void 0
          : t.isCTXAdvantageCatalogEnabled,
      )
        ? []
        : [at(e.apiFormatLabel)];
    }
    function K(e) {
      return Xe(e.adgroup, e.accountID) ? [] : [at(e.apiFormatLabel)];
    }
    function Q(e) {
      return Ye(e.adgroup, e.accountID) ? [] : [at(e.apiFormatLabel)];
    }
    function X(e) {
      var t,
        n,
        o,
        a = [];
      return (
        Me(
          e.adgroup,
          e.accountID,
          (t = (n = e.arEffectInfo) == null ? void 0 : n.effectSupportsFB) !=
            null
            ? t
            : !1,
          (o = e.eligibilityInformation) == null
            ? void 0
            : o.isCTXAdvantageCatalogEnabled,
        )
          ? tt(e.adgroupRecord, e.format, "video") &&
            !r("gkx")("21303") &&
            a.push(Et(2490122, e.positionNameLabel))
          : a.push(at(e.apiFormatLabel)),
        a
      );
    }
    function Y(e) {
      return e.assetType ===
        o("AdsPlacementAssetCustomizationTypes")
          .AdsPlacementCustomizationMediaFormatVideo
        ? [Lt(e.apiFormatLabel)]
        : Ae(e.adgroup, e.accountID)
          ? []
          : [at(e.apiFormatLabel)];
    }
    function J(e) {
      return Je(e.adgroup, e.accountID) ? [] : [at(e.apiFormatLabel)];
    }
    function Z(e) {
      return g(
        e.adgroup,
        e.adgroupRecord,
        e.accountID,
        e.format,
        e.apiFormatLabel,
        e.placementAssetSelectorProps,
        e.videoPlacementAssetInfo,
        e.eligibilityInformation,
        e.hasWhatsAppNumberAvailable,
      );
    }
    function ee(e) {
      var t;
      return Ge(
        e.adgroup,
        (t = e.eligibilityInformation) == null
          ? void 0
          : t.isCTXAdvantageCatalogEnabled,
      )
        ? []
        : [at(e.apiFormatLabel)];
    }
    function te(e) {
      return ze(e.adgroup) ? [] : [at(e.apiFormatLabel)];
    }
    function ne(e) {
      return je(e.adgroup) ? [] : [at(e.apiFormatLabel)];
    }
    function re(e) {
      return $e(e.adgroup) ? [] : [at(e.apiFormatLabel)];
    }
    function oe(e) {
      var t;
      return S(
        e.adgroup,
        e.adgroupRecord,
        e.format,
        e.assetType,
        e.apiFormatLabel,
        e.positionNameLabel,
        (t = e.arEffectInfo) != null ? t : void 0,
      );
    }
    function ae(e) {
      return e.effectiveObjective === r("AdsAPIObjectives").VIDEO_VIEWS ||
        e.effectiveObjective === r("AdsAPIObjectives").REACH ||
        e.effectiveObjective === r("AdsAPIObjectives").BRAND_AWARENESS ||
        e.effectiveObjective === r("AdsAPIObjectives").LEAD_GENERATION ||
        o("AdsArLinkUtils").isArAdCreative(e.adgroup)
        ? [at(e.apiFormatLabel)]
        : [];
    }
    function ie(e) {
      return et(e.effectiveObjective, e.instreamVideoLength) ||
        !Ze(e.adgroup, e.assetType) ||
        o("AdsArLinkUtils").isArAdCreative(e.adgroup)
        ? [at(e.apiFormatLabel)]
        : [];
    }
    function le(e) {
      return o("AdsArLinkUtils").isArAdCreative(e.adgroup)
        ? [at(e.apiFormatLabel)]
        : tt(e.adgroupRecord, e.format, "video")
          ? [Et(1699096, e.positionNameLabel)]
          : [];
    }
    function se(e) {
      return C(
        e.adgroup,
        e.messageMarketingAdgroupIntegrityData,
        e.messageMarketingSourceAdgroupIntegrityData,
        e.messageMarketingAdgroupWABAIntegrityData,
      );
    }
    function ue(e) {
      var t = b(e.adgroup, e.eligibilityInformation);
      return y(
        e.adgroup,
        null,
        null,
        null,
        e.messengerPageIntegrityData,
        t.length > 0 ? t : null,
      );
    }
    var ce = new Map([
      ["DESKTOP_FEED_STANDARD", L],
      ["MOBILE_FEED_STANDARD", E],
      ["FACEBOOK_PROFILE_FEED_MOBILE", k],
      ["FACEBOOK_PROFILE_REELS_MOBILE", I],
      ["MOBILE_BANNER", T],
      ["MOBILE_INTERSTITIAL", T],
      ["MOBILE_MEDIUM_RECTANGLE", T],
      ["MOBILE_NATIVE", T],
      ["AUDIENCE_NETWORK_MEDIUM_RECTANGLE_DESKTOP", T],
      ["RIGHT_COLUMN_STANDARD", D],
      ["INSTAGRAM_STANDARD", x],
      ["INSTAGRAM_SEARCH_CHAIN", $],
      ["INSTAGRAM_PROFILE_FEED", P],
      ["INSTAGRAM_EXPLORE_CONTEXTUAL", P],
      ["INSTAGRAM_EXPLORE_IMMERSIVE", N],
      ["INSTAGRAM_STORY", M],
      ["INSTAGRAM_EXPLORE_GRID_HOME", w],
      ["INSTAGRAM_SEARCH_GRID", A],
      ["INSTAGRAM_SHOP", F],
      ["THREADS_STREAM", O],
      ["INSTAGRAM_REELS", B],
      ["INSTAGRAM_PROFILE_REELS", B],
      ["MESSENGER_MOBILE_INBOX_MEDIA", W],
      ["INSTREAM_BANNER_DESKTOP", q],
      ["INSTREAM_BANNER_MOBILE", q],
      ["INSTREAM_BANNER_FULLSCREEN_MOBILE", q],
      ["INSTREAM_BANNER_FULLSCREEN_IOS", q],
      ["INSTREAM_VIDEO_MOBILE", U],
      ["INSTREAM_VIDEO_FULLSCREEN_IOS", U],
      ["INSTREAM_VIDEO_FULLSCREEN_MOBILE", U],
      ["INSTREAM_VIDEO_IMAGE", U],
      ["INSTREAM_VIDEO_DESKTOP", U],
      ["AUDIENCE_NETWORK_REWARDED_VIDEO", V],
      ["SUGGESTED_VIDEO_MOBILE", H],
      ["SUGGESTED_VIDEO_DESKTOP", H],
      ["WATCH_FEED_MOBILE", G],
      ["MARKETPLACE_SEARCH_ADS_DESKTOP", z],
      ["MARKETPLACE_SEARCH_ADS_MOBILE", j],
      ["SEARCH_SERP_ADS_MOBILE", K],
      ["SEARCH_SERP_ADS_DESKTOP", Q],
      ["FACEBOOK_STORY_MOBILE", X],
      ["FACEBOOK_GROUP_TAB", Y],
      ["MESSENGER_MOBILE_STORY_MEDIA", J],
      ["WHATSAPP_STATUS_MEDIA", Z],
      ["MARKETPLACE_MOBILE", ee],
      ["MARKETPLACE_DESKTOP", te],
      ["MARKETPLACE_MOBILE_PDP", ne],
      ["MARKETPLACE_DESKTOP_PDP", ne],
      ["BIZ_DISCO_FEED_MOBILE", re],
      ["FACEBOOK_REELS_MOBILE", oe],
      ["FACEBOOK_REELS_STICKER", ae],
      ["FACEBOOK_REELS_POSTLOOP", ie],
      ["FACEBOOK_REELS_BANNER", le],
      ["WHATSAPP_MARKETING_MESSAGES_MEDIA", se],
      ["MESSENGER_MARKETING_MESSAGES_MEDIA", ue],
    ]);
    function de(
      e,
      t,
      n,
      a,
      i,
      l,
      s,
      c,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
    ) {
      var I,
        T = [],
        D = r("adsPreviewGetPositionFromFormat")(i),
        x = ot(t, i, l),
        $ = {
          accountCapabilities: e,
          accountID: m,
          adgroup: t,
          adgroupRecord: n,
          apiFormatLabel: s,
          arEffectInfo: y != null ? y : null,
          assetType: x,
          effectiveObjective: a,
          eligibilityInformation: f,
          format: i,
          hasWhatsAppNumberAvailable: E != null ? E : null,
          instreamVideoLength: h,
          messageMarketingAdgroupIntegrityData: b,
          messageMarketingAdgroupWABAIntegrityData: S,
          messageMarketingSourceAdgroupIntegrityData: v,
          messengerPageIntegrityData: k,
          optimizationGoal: L != null ? L : null,
          placementAssetSelectorProps: p,
          positionNameLabel: c,
          previewMedia: l,
          studiesByAdObject: R != null ? R : null,
          videoPlacementAssetInfo: _,
        },
        P = ce.get(i);
      if (
        (P != null && T.push.apply(T, P($)),
        o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t) &&
          D &&
          e &&
          !o(
            "AdsPlacementAssetEligibilityUtils",
          ).isEligiblePlacementForPlacementAssetCustomizationPhase2(
            { platform: D.platform, position: D.position },
            e,
          ) &&
          ((d || (d = o("ODS"))).bumpEntityKey(
            2966,
            "ads_pac_preview_warning",
            "ad_wont_be_delivered_to_placement",
          ),
          T.push(
            r("AdsError").createError(
              2016099,
              u._(
                function (e, t) {
                  return e._(
                    /*BTDS*/ "Creative customizations by placement are not compatible with {placement}.",
                    [e._param("placement", t.placement)],
                  );
                },
                { placement: s },
              ),
              {
                field: r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
                title: "This Ad Won't Be Delivered to This Placement.",
              },
            ),
          )),
        g != null &&
          me(t, g, i) &&
          T.push(
            r("AdsError").createError(
              2016104,
              u._(
                function (e, t) {
                  return e._(
                    /*BTDS*/ "People who speak {language} won't see your ad on {placement}.",
                    [
                      e._param("language", t.language),
                      e._param("placement", t.placement),
                    ],
                  );
                },
                {
                  language: r("AdsLanguageDialectConverter")
                    .localizedNamesForDialects[g],
                  placement: s,
                },
              ),
              {
                field: r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
                title: "Automatic Translations Not Supported",
              },
            ),
          ),
        C === r("AdsPromotedObjectTypes").REMINDER &&
          i !== "INSTAGRAM_STANDARD" &&
          i !== "INSTAGRAM_STORY" &&
          i !== "INSTAGRAM_REELS" &&
          T.push(
            r("AdsError").createError(
              1699100,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "This format is not available for posts with reminders. To use this placement, select a different post.",
                );
              }, {}),
            ),
          ),
        ((I = t.creative) == null ? void 0 : I.media_type) ===
          "SCHEDULED_LIVE_VIDEO" &&
          o("AdsCampaignLiveVideoAdsUtils").isSLVAEligible())
      ) {
        var N = [
          "WATCH_FEED_HOME",
          "WATCH_FEED_MOBILE",
          "MOBILE_FEED_STANDARD",
          "DESKTOP_FEED_STANDARD",
          "FACEBOOK_REELS_MOBILE",
        ];
        N.find(function (e) {
          return e === i;
        }) == null &&
          T.push(
            r("AdsError").createError(
              3858469,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "Ad preview is unavailable for one or more of your ad formats.",
                );
              }, {}),
            ),
          );
      }
      return T;
    }
    function me(e, t, n) {
      var r,
        a =
          (r = e.creative) == null || (r = r.asset_feed_spec) == null
            ? void 0
            : r.autotranslate;
      return (
        a != null &&
        !o("AdsDLOConstantUtils").isSupportedAutotranslatedPreviewFormat(n) &&
        a.includes(t)
      );
    }
    function pe(e, t) {
      var n,
        r =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.autotranslate;
      return r == null ? !1 : t != null && r.includes(t);
    }
    function _e(e, t, n) {
      return (
        !o("AdsLocalAwarenessUtils").isLocalAwarenessAndHasCallNowCallToAction(
          e,
          t,
        ) &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !o("AdsSphericalPhotoErrorUtils").isSphericalPhotoLinkAd(e, n) &&
        !o("AdsArLinkUtils").isArAdCreative(e)
      );
    }
    function fe(e, t) {
      return !o("AdsArLinkUtils").isArAdCreative(e) || t;
    }
    function ge(e, t) {
      return o("AdsCanvasAdUtils").isCanvasAd(e) ||
        o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) ||
        o("AdsAdgroupTypeUtils").isDPA(e)
        ? !0
        : !o("AdsAdgroupUtils").isPoliticalAd(e) &&
            !o("AdsAdgroupUtils").isPartnershipAd(e) &&
            !o("AdsArLinkUtils").isArAdCreative(e) &&
            !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t);
    }
    function he(e, t) {
      return (
        !o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) &&
        !o("AdsChildAttachmentsUtils").isCarouselAd(e) &&
        !o("AdsDynamicAdsUtils").isDynamicAd(e) &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !o("AdsAdgroupUtils").isPoliticalAd(e) &&
        !o("AdsAdgroupUtils").isPartnershipAd(e) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t)
      );
    }
    function ye(e, t, n, a, i) {
      return n === r("AdsAPIObjectives").BRAND_AWARENESS &&
        !o("AdsAdgroupTypeUtils").isVideoAd(t)
        ? !1
        : !o("AdsCanvasAdUtils").isCanvasAd(t) &&
            !o("AdsCollectionsAdUtils").isCollectionsAd(t.creative) &&
            (e === "MOBILE_BANNER"
              ? !o("AdsAdgroupTypeUtils").isVideoAd(t) &&
                !o("AdsChildAttachmentsUtils").isStaticCarouselAd(t)
              : e === "MOBILE_INTERSTITIAL" ||
                !(o("AdsWebsiteAdUtils").getMultiVideoProductCount(t) > 0)) &&
            !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(t, a) &&
            !o("AdsArLinkUtils").isArAdCreative(t) &&
            !(
              o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(t) &&
              i !== !0
            ) &&
            !(
              o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(t) &&
              i !== !0
            );
    }
    function Ce(e, t, n, a) {
      var i =
          r("isTruthy")(a) &&
          o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, a),
        l = ot(e, "RIGHT_COLUMN_STANDARD", t);
      return (
        !o("AdsPageLikeUtils").isPageLikeVideo(e, n) &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        i !== !0 &&
        (l ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage ||
          l ===
            o("AdsPlacementAssetCustomizationTypes")
              .AdsPlacementCustomizationMediaFormatCarousel) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
        !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e)
      );
    }
    function be(e, t, n, a) {
      var i =
          r("isTruthy")(t) &&
          o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t),
        l = ve(e, n);
      return (
        !i &&
        !l &&
        !(o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) && !a)
      );
    }
    function ve(e, t) {
      if (t == null || !o("AdsArLinkUtils").isArAdCreative(e)) return !1;
      if (t.hasIGArEffect === !1) return !0;
      var n =
        t.format !== "INSTAGRAM_STANDARD" &&
        t.format !== "INSTAGRAM_STORY" &&
        t.format !== "INSTAGRAM_REELS";
      return n;
    }
    function Se(e, t, n, r) {
      return be(e, t, n, r);
    }
    function Re(e, t, n, o, a, i) {
      var l;
      return ve(e, {
        format: n,
        hasIGArEffect:
          (l = o == null ? void 0 : o.effectSupportsIG) != null ? l : !1,
      })
        ? at(a)
        : tt(t, n, "video")
          ? Et(2238286, i)
          : nt(e)
            ? new (r("AdsError"))(
                1443478,
                u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "To enable this template, select a call to action other than No button.",
                  );
                }, {}),
              )
            : null;
    }
    function Le(e, t, n) {
      return (
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) && be(e, t, n)
      );
    }
    function Ee(e, t, n, r) {
      var a = o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e);
      return (
        (!o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
          be(e, t, n, r) &&
          !(a && r !== !0)) ||
        o("AdsCollectionsAdUtils").isCollectionsAd(e.creative)
      );
    }
    function ke(e, t) {
      return (
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
        !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e)
      );
    }
    function Ie(e, t, n) {
      return (
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        (!o("AdsChildAttachmentsUtils").isCarouselAd(e) ||
          (t !== "INSTREAM_BANNER_DESKTOP" &&
            o(
              "AdsInstreamCapabilityUtils",
            ).isEligibleForInstreamImageCarouselAds(n))) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        (t === "INSTREAM_BANNER_DESKTOP"
          ? o(
              "AdsInstreamCapabilityUtils",
            ).isEligibleForDesktopInstreamNonInterruptiveAds(n)
          : o(
              "AdsInstreamCapabilityUtils",
            ).isEligibleForMobileInstreamNonInterruptiveAds(n))
      );
    }
    function Te(e, t, n, r) {
      var a = o(
          "AdsInstreamCapabilityUtils",
        ).isEligibleForInstreamCollectionAds(r),
        i = o("AdsCollectionsAdUtils").isCollectionsAd(e.creative);
      return (
        (!o("AdsCanvasAdUtils").isCanvasAd(e) || i) &&
        (!i || (a && t !== "INSTREAM_VIDEO_DESKTOP")) &&
        (t === "INSTREAM_VIDEO_DESKTOP"
          ? o(
              "AdsInstreamCapabilityUtils",
            ).isEligibleForDesktopInstreamInPlayerAds(n, r)
          : o(
              "AdsInstreamCapabilityUtils",
            ).isEligibleForMobileInstreamInPlayerAds(n, r)) &&
        !o("AdsArLinkUtils").isArAdCreative(e)
      );
    }
    function De(e, t, n) {
      if (
        (o("AdsAdgroupTypeUtils").isVideoAd(e) ||
          t ===
            o("AdsPlacementAssetCustomizationTypes")
              .AdsPlacementCustomizationMediaFormatVideo) &&
        n !== null &&
        n !== void 0
      ) {
        var r;
        return o("AdsInstreamVideoLengthUtil").isEligibleInstreamAdsLength(
          n,
          o("AdsInstreamCapabilityUtils").isEligibleForLiveVideoAds(
            (r = e.creative) == null ? void 0 : r.object_story_id,
          ),
        );
      }
      return !0;
    }
    function xe(e, t) {
      return (
        (t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo ||
          t ===
            o("AdsPlacementAssetCustomizationTypes")
              .AdsPlacementCustomizationMediaFormatCarousel) &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
        !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e)
      );
    }
    function $e(e) {
      var t,
        n,
        r = !1,
        a =
          o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) ||
          o("AdsChildAttachmentsUtils").isCarouselAd(e),
        i = o("AdsChildAttachmentsUtils").isStaticCarouselAd(e),
        l = ((t = e.creative) == null ? void 0 : t.object_story_spec) == null,
        s = ["SHARE", "STATUS", "VIDEO"],
        u = o("AdsDynamicAdsUtils").isDynamicAd(e);
      r = r && s.includes((n = e.creative) == null ? void 0 : n.object_type);
      var c = a && !i,
        d = o("AdsAssetFeedUtils").isDynamicCreativeAdgroup(e),
        m =
          d &&
          !o("AdsAssetFeedUtils").doesAdgroupHaveImages(e) &&
          !o("AdsAssetFeedUtils").doesAdgroupHaveVideos(e),
        p = l && !r,
        _ = u,
        f = !m || l || u;
      return (
        !c &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !p &&
        !_ &&
        f
      );
    }
    function Pe(e, t, n) {
      var a = n === r("AdsAPIObjectives").LEAD_GENERATION,
        i =
          t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo,
        l =
          t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage,
        s = o("AdsCollectionsAdUtils").isCollectionsAd(e.creative),
        u =
          o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) ||
          o("AdsChildAttachmentsUtils").isCarouselAd(e),
        c = l || i || a || u,
        d = s;
      return (
        (c &&
          !o("AdsCanvasAdUtils").isCanvasAd(e) &&
          !o("AdsArLinkUtils").isArAdCreative(e) &&
          !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
          !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e)) ||
        (d && o("AdsCanvasAdUtils").isCanvasAd(e))
      );
    }
    function Ne(e, t, n) {
      var a = n === r("AdsAPIObjectives").LEAD_GENERATION,
        i =
          o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) ||
          o("AdsChildAttachmentsUtils").isCarouselAd(e),
        l =
          t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo,
        s = o("AdsCollectionsAdUtils").isCollectionsAd(e.creative),
        u = l || a || i || !s,
        c = s;
      return (
        (u &&
          !o("AdsCanvasAdUtils").isCanvasAd(e) &&
          !o("AdsArLinkUtils").isArAdCreative(e)) ||
        (o("AdsCanvasAdUtils").isCanvasAd(e) && c)
      );
    }
    function Me(e, t, n, r) {
      var a = o("AdsArLinkUtils").isArAdCreative(e) && !n;
      return (
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t) &&
        !a &&
        !(o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) && r !== !0)
      );
    }
    function we(e, t, n) {
      var r =
          t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo,
        a =
          t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage,
        i =
          t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatCarousel,
        l = o("AdsChildAttachmentsUtils").isDynamicAdCarouselMediaFormat(e),
        s = a || (i && !l) || l,
        u = o("AdsArLinkUtils").isArAdCreative(e) && !n;
      return (r || s) && !u;
    }
    function Ae(e, t) {
      return (
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsDynamicAdsUtils").isDynamicAd(e)
      );
    }
    function Fe(e) {
      return (
        o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) ||
        o("AdsChildAttachmentsUtils").isCarouselAd(e)
      );
    }
    function Oe(e) {
      var t = o("AdsChildAttachmentsUtils").getChildAttachments(e);
      return t == null
        ? !1
        : t.some(function (e) {
            return e.video_id != null;
          });
    }
    function Be(e, t) {
      if (o("AdsCanvasAdUtils").isCanvasAd(e)) return !0;
      var n = o("AdsCallToActionTypesUtils").getCTATypeFromAdgroup(t);
      return n === "BUY_TICKETS" || n === "CALL_NOW";
    }
    function We(e) {
      var t = qe(e);
      if (t == null) return !1;
      var n = JSON.parse(t),
        o = n == null ? void 0 : n.text_format;
      if (o == null) return !0;
      var a = o.customer_action_type;
      return (
        a === r("AdsMessengerVisualEditorCustomerActionType").WHATSAPP_FLOW
      );
    }
    function qe(e) {
      var t,
        n = e.creative;
      if (!n) return null;
      if (n.page_welcome_message != null) return n.page_welcome_message;
      var r = n.object_story_spec;
      if (r) {
        var o,
          a,
          i,
          l,
          s = [
            (o = r.template_data) == null ? void 0 : o.page_welcome_message,
            (a = r.link_data) == null ? void 0 : a.page_welcome_message,
            (i = r.photo_data) == null ? void 0 : i.page_welcome_message,
            (l = r.video_data) == null ? void 0 : l.page_welcome_message,
          ];
        for (var u of s) if (u != null) return u;
      }
      return (t = n.asset_feed_spec) == null || (t = t.additional_data) == null
        ? void 0
        : t.page_welcome_message;
    }
    function Ue(e, t, n) {
      if (e == null) return !0;
      var a = e.assetGroupsByAsset,
        i = e.assets,
        l = e.cropsByAsset;
      if (i == null || n == null || a == null) return !0;
      var s = a.map(function (e) {
          return e.flatMap(function (e) {
            return o("AdsPlacementAssetUtils").getPlacementsFromAssetGroup(e);
          });
        }),
        u = o("AdsPlacementPluginList").getPositions(n),
        c = u
          .filter(function (e) {
            var o = e.getPreviews;
            return (
              o &&
              r("AdsPreviewsPlugins")
                .keys(o(n).toArray())
                .getList()
                .some(function (e) {
                  var n = e.apiFormat;
                  return n === t;
                })
            );
          })
          .first();
      if (c == null) return !0;
      var d = o("AdsPlacementAssetPluginUtils").getPlatformKeyFromPositionKey(
          c.key,
        ),
        m = o(
          "AdsPlacementAssetPluginUtils",
        ).getAPIPositionForPlacementPosition(c.key),
        p = s.findEntry(function (e) {
          return (
            e.findIndex(function (e) {
              return e.platform === d && e.position === m;
            }) !== -1
          );
        });
      if (p == null) {
        var _ = s.findEntry(function (e) {
          return e.size === 0;
        });
        if (_ == null) return !0;
        p = _;
      }
      var f = p[0],
        g = i.get(f);
      return g && g.format === "image"
        ? Ve(g, l == null ? void 0 : l.get(f))
        : !0;
    }
    function Ve(e, t) {
      var n = 0,
        o = 0;
      if (t != null) {
        var a = Object.values(t),
          i = a.find(function (e) {
            return (
              e != null &&
              Array.isArray(e) &&
              e.length >= 2 &&
              Array.isArray(e[0]) &&
              Array.isArray(e[1]) &&
              e[0].length >= 2 &&
              e[1].length >= 2
            );
          });
        if (i != null) {
          var l = i;
          ((n = l[1][1] - l[0][1]), (o = l[1][0] - l[0][0]));
        }
      } else e.format === "image" && ((n = e.height || 0), (o = e.width || 0));
      if (n === 0 || o === 0) return !1;
      var s = o / n,
        u = r("AdImageSpecs").WHATSAPP_STATUS.maxWarningAspectRatio,
        c = r("AdImageSpecs").WHATSAPP_STATUS_CROP.aspectRatioTolerance;
      return u == null || c == null ? !0 : s < u + c;
    }
    function He(e) {
      var t,
        n = o("AdsAutomaticFlowUtils").isStaticSingleVideoFormat(e),
        r = o("AdsAutomaticFlowUtils").isSingleImageFormat(e);
      if (!n && !r) return null;
      var a =
        e == null || (t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.asset_customization_rules;
      if (a != null && a.length > 0) {
        var i = a.some(function (e) {
          var t,
            n,
            r = e.customization_spec;
          return (
            (r == null || (t = r.publisher_platforms) == null
              ? void 0
              : t.includes("whatsapp")) &&
            (r == null || (n = r.whatsapp_positions) == null
              ? void 0
              : n.includes("status")) &&
            e.video_label != null
          );
        });
        if (i && n) return "video";
        if (!i && r) return "image";
      }
      return n ? "video" : r ? "image" : null;
    }
    function Ge(e, t) {
      return (
        !o("AdsDynamicAdsUtils").isDynamicAdForRetail(e) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !(o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) && t !== !0)
      );
    }
    function ze(e) {
      return (
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
        !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e)
      );
    }
    function je(e) {
      return !o("AdsArLinkUtils").isArAdCreative(e);
    }
    function Ke(e, t) {
      return (
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t) &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
        !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e)
      );
    }
    function Qe(e, t, n) {
      return (
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !(
          o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) && n !== !0
        ) &&
        !(o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e) && n !== !0)
      );
    }
    function Xe(e, t) {
      return (
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
        !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e)
      );
    }
    function Ye(e, t) {
      return (
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t) &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
        !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e)
      );
    }
    function Je(e, t) {
      return (
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) &&
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t) &&
        !o("AdsChildAttachmentsUtils").isCarouselAd(e) &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
        !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e) &&
        !o("AdsDynamicAdsFormatUtils").getIsDynamicAdSingleMediaFormat(e)
      );
    }
    function Ze(e, t) {
      var n,
        r,
        a =
          o("AdsAssetFeedUtils").isDofAdgroupFromSpec(e) ||
          (!!((n = e.creative) != null && n.degrees_of_freedom_spec) &&
            !_.has(
              (r = e.creative) == null ||
                (r = r.degrees_of_freedom_spec) == null
                ? void 0
                : r.degrees_of_freedom_type,
            ));
      return (
        a ||
        t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo ||
        t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage
      );
    }
    function et(e, t) {
      return (
        e === r("AdsAPIObjectives").VIDEO_VIEWS &&
        t != null &&
        t >
          r("FacebookReelsOverlayAdsRulesSitevarConfig.experimental")
            .videoMaxLengthThruplay
      );
    }
    function tt(e, t) {
      if (!o("AdsChildAttachmentsUtils").isCarouselAd(e)) return !1;
      for (
        var n = r("adsGetCarouselCardFormatsForPreviewFormat")(e, t),
          a = arguments.length,
          i = new Array(a > 2 ? a - 2 : 0),
          l = 2;
        l < a;
        l++
      )
        i[l - 2] = arguments[l];
      return (
        !n.has("dynamic") &&
        i.every(function (e) {
          return n.has(e);
        })
      );
    }
    function nt(e) {
      var t;
      if (!o("AdsDynamicAdsUtils").isDynamicAd(e)) return !1;
      var n =
        e == null ||
        (t = e.creative) == null ||
        (t = t.object_story_spec) == null ||
        (t = t.template_data) == null ||
        (t = t.call_to_action) == null
          ? void 0
          : t.type;
      return n === "NO_BUTTON";
    }
    function rt(e) {
      if (e == null) return null;
      var t = r("ads-lib-urllib").getDomain(e);
      return t != null && t.startsWith("www.") && t.lastIndexOf(".") > 4
        ? t.substring(4)
        : t;
    }
    function ot(e, t, n) {
      if (n != null)
        return n.assetType === "image"
          ? o("AdsPlacementAssetCustomizationTypes")
              .AdsPlacementCustomizationMediaFormatImage
          : n.assetType === "video"
            ? o("AdsPlacementAssetCustomizationTypes")
                .AdsPlacementCustomizationMediaFormatVideo
            : n.assetType === "playable"
              ? o("AdsPlacementAssetCustomizationTypes")
                  .AdsPlacementCustomizationMediaFormatImage
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      n.assetType,
                  );
                })();
      if (o("AdsChildAttachmentsUtils").isCarouselAd(e))
        return o("AdsPlacementAssetCustomizationTypes")
          .AdsPlacementCustomizationMediaFormatCarousel;
      if (o("AdsAdgroupTypeUtils").isAutomaticFormatAd(e)) {
        var a = o("AdsPlacementAssetUtils").getAssetGroupsFromFormats(
          r("immutable").List([t]),
        );
        return a == null || a.first() == null
          ? o("AdsPlacementAssetCustomizationTypes")
              .AdsPlacementCustomizationMediaFormatImage
          : r("adsGetMediaFormatByAssetGroup")(e, a.first());
      }
      return o("AdsAdgroupTypeUtils").isVideoAd(e)
        ? o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo
        : o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage;
    }
    function at(e) {
      return r("AdsError").createError(
        1699032,
        u._(
          function (e, t) {
            return e._(
              /*BTDS*/ "This format is not available for {placement}. To deliver to this placement, select a different format.",
              [e._param("placement", t.placement)],
            );
          },
          { placement: e },
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function it() {
      return r("AdsError").createError(
        4829018,
        c._(
          /*BTDS*/ "To deliver this ad to WhatsApp Status, edit your video to meet the following requirements: {lineBreak1}\u00a0\u2022\u00a0 A maximum length of 90 seconds {lineBreak3}\u00a0\u2022\u00a0 An aspect ratio of 9:16 (recommended), 1.91:1, 16:9, 1:1 or 4:5",
          [
            c._param("lineBreak1", p.jsx("div", { children: p.jsx("br", {}) })),
            c._param("lineBreak3", p.jsx("br", {})),
          ],
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function lt() {
      return r("AdsError").createError(
        4829057,
        c._(
          /*BTDS*/ "To deliver this ad to WhatsApp Status, edit your video to meet the following requirements: {lineBreak1}\u00a0\u2022\u00a0 A maximum length of 60 minutes {lineBreak3}\u00a0\u2022\u00a0 An aspect ratio of 9:16 (recommended), 1.91:1, 16:9, 1:1 or 4:5",
          [
            c._param("lineBreak1", p.jsx("div", { children: p.jsx("br", {}) })),
            c._param("lineBreak3", p.jsx("br", {})),
          ],
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function st() {
      return r("AdsError").createError(
        4829002,
        c._(
          /*BTDS*/ "Carousel format not supported: To deliver this ad to the WhatsApp Status placement, use a {=m1}.",
          [
            c._implicitParam(
              "=m1",
              p.jsx("strong", {
                children: c._(/*BTDS*/ "single image or video"),
              }),
            ),
          ],
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function ut() {
      return r("AdsError").createError(
        4829074,
        c._(
          /*BTDS*/ "Posts with multiple images or videos aren't supported when only the WhatsApp Status placement is included. Select or create a post that uses a single image or video, or include more placements.",
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function ct() {
      return r("AdsError").createError(
        4829060,
        c._(
          /*BTDS*/ "Video in carousel cards not supported: To deliver to the WhatsApp Status placement, select images only.",
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function dt() {
      return r("AdsError").createError(
        4829003,
        c._(
          /*BTDS*/ "Collection format not supported: to deliver this ad to the WhatsApp Status placement, use a {Single image or video} as your format.",
          [
            c._param(
              "Single image or video",
              p.jsx("strong", { children: "Single image or video" }),
            ),
          ],
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function mt() {
      return r("AdsError").createError(
        4829034,
        c._(
          /*BTDS*/ "Flexible format not supported: To deliver this ad to the WhatsApp Status placement, use a {=m1}.",
          [
            c._implicitParam(
              "=m1",
              p.jsx("strong", {
                children: c._(/*BTDS*/ "single image or video"),
              }),
            ),
          ],
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function pt() {
      return r("AdsError").createError(
        4017184,
        c._(
          /*BTDS*/ "Partnership ads aren't supported for this placement. You can publish this ad but it won't appear in Messenger Marketing messages.",
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function _t() {
      return r("AdsError").createError(
        4829010,
        c._(
          /*BTDS*/ "Creative source not supported: To deliver this ad to the WhatsApp Status placement, use {Manual upload} as your creative source.",
          [
            c._param(
              "Manual upload",
              p.jsx("strong", {
                children: o("WAMOLabelStrings").MANUAL_UPLOAD,
              }),
            ),
          ],
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function ft() {
      return r("AdsError").createError(
        4829055,
        c._(
          /*BTDS*/ "Catalog type not supported: The WhatsApp Status placement only supports {supported catalog types} catalogs.",
          [
            c._param(
              "supported catalog types",
              p.jsx("strong", {
                children: o("WAMOLabelStrings").ECOMMERCE_TRAVEL_AND_VEHICLE,
              }),
            ),
          ],
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function gt() {
      return r("AdsError").createError(
        4829021,
        c._(
          /*BTDS*/ "Message template not supported: To deliver this ad to the WhatsApp Status placement, use {whatsapp} as your message template.",
          [
            c._param(
              "whatsapp",
              p.jsx("strong", {
                children: o("WAMOLabelStrings").START_CONVERSATIONS,
              }),
            ),
          ],
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function ht() {
      return r("AdsError").createError(
        4829019,
        c._(
          /*BTDS*/ "To deliver this ad to WhatsApp Status, edit your image to meet the following requirements: {lineBreak1}\u00a0\u2022\u00a0 An aspect ratio of 9:16 (recommended), 1.91:1, 16:9, 1:1 or 4:5 {lineBreak2}\u00a0\u2022\u00a0 A minimum width of 500 pixels",
          [
            c._param("lineBreak1", p.jsx("div", { children: p.jsx("br", {}) })),
            c._param("lineBreak2", p.jsx("br", {})),
          ],
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function yt() {
      return r("AdsError").createError(
        4829022,
        c._(
          /*BTDS*/ "Partnership ad not supported: To deliver this ad to the WhatsApp Status placement, turn off {=m1}.",
          [
            c._implicitParam(
              "=m1",
              p.jsx("strong", { children: c._(/*BTDS*/ "Partnership ad") }),
            ),
          ],
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function Ct(e) {
      return r("AdsError").createError(
        4829051,
        e
          ? c._(
              /*BTDS*/ "Destination not supported: To deliver this ad to the WhatsApp Status placement, use {Website} or {Messaging apps} as your destination.",
              [
                c._param(
                  "Website",
                  p.jsx("strong", { children: o("WAMOLabelStrings").WEBSITE }),
                ),
                c._param(
                  "Messaging apps",
                  p.jsx("strong", {
                    children: o("WAMOLabelStrings").MESSAGING_APPS,
                  }),
                ),
              ],
            )
          : c._(
              /*BTDS*/ "Destination not supported: To deliver this ad to the WhatsApp Status placement, use {Website} as your destination.",
              [
                c._param(
                  "Website",
                  p.jsx("strong", { children: o("WAMOLabelStrings").WEBSITE }),
                ),
              ],
            ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function bt() {
      return r("AdsError").createError(
        4829051,
        c._(
          /*BTDS*/ "Destination not supported: To deliver this ad to the WhatsApp Status placement, deselect {Add an Instant Experience} in the Destination card.",
          [
            c._param(
              "Add an Instant Experience",
              p.jsx("strong", {
                children: o("WAMOLabelStrings").ADD_AN_INSTANT_EXPERIENCE,
              }),
            ),
          ],
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function vt() {
      return r("AdsError").createError(
        4829051,
        c._(
          /*BTDS*/ "Connect WhatsApp account: To deliver this ad to the WhatsApp Status placement, go to {Destination} and click {Connect account} and select WhatsApp as a destination.",
          [
            c._param(
              "Destination",
              p.jsx("strong", { children: o("WAMOLabelStrings").DESTINATION }),
            ),
            c._param(
              "Connect account",
              p.jsx("strong", {
                children: o("WAMOLabelStrings").CONNECT_ACCOUNT,
              }),
            ),
          ],
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function St() {
      return r("AdsError").createError(
        4829051,
        c._(
          /*BTDS*/ "WhatsApp destination required: To deliver this ad to the WhatsApp Status placement, go to {Destination} and select WhatsApp as a destination.",
          [
            c._param(
              "Destination",
              p.jsx("strong", { children: o("WAMOLabelStrings").DESTINATION }),
            ),
          ],
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function Rt(e) {
      return r("AdsError").createError(
        1699043,
        u._(
          function (e, t) {
            return e._(
              /*BTDS*/ "To deliver to {placement}, change the media for this placement to a video.",
              [e._param("placement", t.placement)],
            );
          },
          { placement: e },
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function Lt(e) {
      return r("AdsError").createError(
        1699042,
        u._(
          function (e, t) {
            return e._(
              /*BTDS*/ "To deliver to {placement}, change the media for this placement to an image.",
              [e._param("placement", t.placement)],
            );
          },
          { placement: e },
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function Et(e, t) {
      return r("AdsError").createError(
        e,
        c._(
          /*BTDS*/ "Video carousel cards are not supported on {placement}. Change the media on your {placement} carousel cards to images.",
          [c._param("placement", t)],
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function kt() {
      return r("AdsError").createError(
        1699042,
        u._(function (e, t) {
          return e._(
            /*BTDS*/ "At this time, video ads for this placement will only appear in Instagram search results feed.",
          );
        }, {}),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function It(e) {
      var t = document.createElement("canvas"),
        n = t.getContext("2d");
      if (!n) return 0;
      var r = n.measureText(e);
      return r.width;
    }
    function Tt(e, t) {
      var n,
        r = e != null && e.length > 0 ? e : [null];
      return (n = r.reduce(function (e, n) {
        if (e != null && e.length === 0) return e;
        var r = t(n);
        return e == null || r.length === 0
          ? r
          : e.filter(function (e) {
              return r.some(function (t) {
                var n = t.key;
                return e.key === n;
              });
            });
      }, null)) != null
        ? n
        : [];
    }
    ((l.getErrorsForAdgroup = de),
      (l.shouldRenderAutotranslateInfoCard = pe),
      (l.adgroupSupportsRightColumn = Ce),
      (l.getPageWelcomeMessage = qe),
      (l.sanitiseUrl = rt),
      (l.getAssetTypeForFormat = ot),
      (l.getTextWidth = It),
      (l.getConsistentErrorsForPreviewMediaList = Tt));
  },
  226,
);
