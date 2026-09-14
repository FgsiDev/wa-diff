__d(
  "AdsUEditorAdgroupDynamicCarouselMutators",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAPlusCDAExperimentUtils",
    "AdsAPlusCDefaultOnceUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsDAAdaptImagesMutators",
    "AdsDAAddTextOverlayDefaultOnMutator",
    "AdsDAAplusCImageBackgroundGenerationDefaultOnMutator",
    "AdsEditingAdgroupEditorContext",
    "AdsFlexibleFormatDAUtils",
    "AdsMediaTypeAutomationMutators",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlaceDataUtils",
    "AdsPortraitCustomizationsUtils",
    "AdsPromotedObjectUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
    "AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils",
    "AdsUEditorAdgroupCreativePluginAdObjectsUtils",
    "AdsUEditorAdgroupDynamicLocalAdsUtils",
    "AdsUEditorAdgroupDynamicMutators",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupShopAdsBundle",
    "AdsUEditorAdgroupShopAdsBundleMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "DAFlexibleFormatUtils",
    "adsAPlusCCarouselDescriptionAutomationSpecMutators",
    "adsAPlusCCarouselImageTouchupSpecMutators",
    "adsAPlusCCarouselInlineCommentSpecMutators",
    "adsAPlusCEnhanceCTASpecMutator",
    "adsAdgroupIsDynamicProductCarouselAd",
    "adsUEditorGetShouldEnableAPlusCCarouselCDAByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableAPlusCCarouselInlineCommentByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableImageTouchupsByDefaultGetValueSelector",
    "adsUEditorReactiveControlStickySettingSelector",
    "adsUEditorRemoveDynamicAdsSpecificCreativeFields",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s) {
      var u,
        c = r("AdsAdgroupSemanticFields").pageID.get(i, e);
      if (!s || c == null) return e;
      var d = c ? l(c) : null;
      if (!d) return e;
      var m = o("AdsPlaceDataUtils").getSupportedPlaceDataType(
        t,
        n,
        a,
        [d],
        r("adsAdgroupIsDynamicProductCarouselAd")(e, i, n),
        !!((u = e.creative) != null && u.dynamic_ad_voice),
      );
      return o("AdsPlaceDataUtils").addPlaceData({
        adgroup: e,
        specPlugin: i,
        objective: n,
        page: d,
        placeDataType: m,
      });
    }
    function s(t, n, a, i, l, s, u, c) {
      var d,
        m = o("AdsPlaceDataUtils").getPlaceDataPosition(t) !== -1,
        p = a.campaign,
        _ = a.campaignGroup,
        f = (d = p.promoted_object) == null ? void 0 : d.full_funnel_objective,
        g = f || _.objective,
        h = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
          campaign: p,
          campaignGroup: _,
        }),
        y = o("AdsODAXUtils").maybeTranslateObjective(
          g,
          h,
          p.optimization_goal,
        ),
        C = o("AdsMutators").chain(
          r("adsUEditorRemoveDynamicAdsSpecificCreativeFields"),
          o("AdsUEditorAdgroupMutators").setSAOffOptOut,
          r("AdsAdgroupRecordAccessors").creative
            .marketing_message_structured_spec.dynamic_product_message_spec
            .delete,
          function (e) {
            var t,
              n =
                (t = e.creative) == null ||
                (t = t.marketing_message_structured_spec) == null
                  ? void 0
                  : t.is_optimized_text;
            return n != null
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.is_optimized_text.set(
                  !1,
                  e,
                )
              : e;
          },
        )(t),
        b = o(
          "AdsUEditorAdgroupCreativePluginAdObjectsUtils",
        ).getAdgroupCreativePlugin({ campaignGroup: _, campaign: p });
      return b.usesTemplateDataForStaticCarousel()
        ? o("AdsMutators").chain(
            function (e) {
              return o(
                "AdsUEditorAdgroupMutators",
              ).transformAdgroupTemplateDataFromDynamicToStatic(
                e,
                l,
                y,
                p.destination_type,
              );
            },
            function (t) {
              return e(t, n, y, h, l, s, m);
            },
          )(C)
        : o("AdsMutators").chain(
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
                "AdsUEditorAdgroupMutators",
              ).transformAdgroupFromTemplateToLinkData(p, e, y, h, l);
            },
            function (e) {
              return y === o("AdsAPIObjectives").CONVERSIONS &&
                o(
                  "AdsPromotedObjectUtils",
                ).shouldDisableMultiShareEndCardForCollaborativeAdsPixelConversion(
                  p,
                )
                ? r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.link_data.multi_share_end_card.set(
                    !1,
                    e,
                  )
                : e;
            },
            function (e) {
              return o(
                "AdsPortraitCustomizationsUtils",
              ).shouldMutateCarouselDeliveryMode(p, e)
                ? i
                  ? r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.portrait_customizations.carousel_delivery_mode.set(
                      "fixed_num_cards",
                      e,
                    )
                  : r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.portrait_customizations.carousel_delivery_mode.set(
                      "optimal_num_cards",
                      e,
                    )
                : e;
            },
            function (t) {
              return e(t, n, y, h, l, s, m);
            },
            function (e) {
              return u != null
                ? o(
                    "AdsUEditorAdgroupPromoAdMutators",
                  ).updatePromoAdForDefaultOptIn(
                    { adgroup: e, campaign: p, campaignGroup: _ },
                    n,
                    l,
                    u,
                    o("AdsUEditorAdgroupPromoAdMutatorUtils")
                      .PromoAdDefaultOptInCallSite.DA_TO_SA_TRANSFORMATION,
                    null,
                    !0,
                  )
                : e;
            },
            function (e) {
              return c != null && r("justknobx")._("4541")
                ? o(
                    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
                  ).updateBizAIDefaultOptIn(
                    e,
                    c,
                    o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
                      .BizAIDefaultOptInCallSite.DA_TO_SA_CAROUSEL,
                  )
                : e;
            },
            function (e) {
              return u != null
                ? o(
                    "AdsUEditorAdgroupEmailCaptureMutators",
                  ).updateEmailCaptureForDefaultOptIn(
                    { adgroup: e, campaign: p, campaignGroup: _ },
                    n,
                    u,
                    o("AdsUEditorAdgroupPromoAdMutatorUtils")
                      .PromoAdDefaultOptInCallSite.DA_TO_SA_TRANSFORMATION,
                  )
                : e;
            },
            function (e) {
              return o(
                "adsAPlusCCarouselInlineCommentSpecMutators",
              ).adsCarouselInlineCommentSpecMutator(
                n,
                { campaignGroup: _, campaign: p, adgroup: e },
                r(
                  "adsUEditorGetShouldEnableAPlusCCarouselInlineCommentByDefaultGetValueSelector",
                )(),
              );
            },
            function (e) {
              return o(
                "adsAPlusCCarouselDescriptionAutomationSpecMutators",
              ).adsCarouselDescriptionAutomationSpecMutator(
                n,
                { campaignGroup: _, campaign: p, adgroup: e },
                r(
                  "adsUEditorGetShouldEnableAPlusCCarouselCDAByDefaultGetValueSelector",
                )(),
              );
            },
            function (e) {
              return o(
                "adsAPlusCCarouselImageTouchupSpecMutators",
              ).adsCarouselImageTouchupSpecMutator(
                n,
                { campaignGroup: _, campaign: p, adgroup: e },
                r(
                  "adsUEditorGetShouldEnableImageTouchupsByDefaultGetValueSelector",
                )(),
              );
            },
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
            function (e) {
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.interactive_components_spec.delete(e);
            },
            function (e) {
              return o(
                "adsAPlusCEnhanceCTASpecMutator",
              ).adsDeleteEnhanceCTASpecMutator(e);
            },
            function (e) {
              return o(
                "AdsDAAddTextOverlayDefaultOnMutator",
              ).adsDeleteDAAddTextOverlayDefaultOnMutator(e);
            },
          )(C);
    }
    function u(e, t) {
      return o("AdsUEditorAdgroupAssetFeedMutators").convertFromAssetFeedSpec(
        o("AdsAPIAdgroupRecordUtils").getObjectType(e),
        e,
        t,
      );
    }
    function c(e, t, n, a, i, l, s, c, d, m, p, _) {
      var f = t.campaign,
        g = t.campaignGroup,
        h = g.objective,
        y = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
          campaign: f,
          campaignGroup: g,
        }),
        C = o("AdsODAXUtils").maybeTranslateObjective(
          h,
          y,
          f.optimization_goal,
        ),
        b = o(
          "AdsUEditorAdgroupCreativePluginAdObjectsUtils",
        ).getAdgroupCreativePlugin({ campaignGroup: g, campaign: f }),
        v = r("AdsAdgroupSemanticFields").pageID.get(n, e),
        S = "REALTIME",
        R = o("AdsPlaceDataUtils").getPlaceDataPosition(e) !== -1;
      return o("AdsMutators").chain(
        function (e) {
          return o("AdsUEditorAdgroupAudiosAdsMutators").removeAudiosField(e);
        },
        function (e) {
          return a === !0 &&
            o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e)
            ? u(e, C)
            : e;
        },
        function (e) {
          return b.usesTemplateDataForStaticCarousel()
            ? o(
                "AdsUEditorAdgroupDynamicMutators",
              ).transformAdgroupTemplateDataFromStaticToDynamicWithLeadingStaticCard(
                e,
                C,
                i,
                l,
                o(
                  "AdsUEditorAdgroupDynamicLocalAdsUtils",
                ).getDefaultProductSalesChannel(e),
                f,
                p,
              )
            : o(
                "AdsUEditorAdgroupDynamicMutators",
              ).transformAdgroupFromLinkToCarouselTemplateData(
                e,
                C,
                y,
                i,
                l,
                o(
                  "AdsUEditorAdgroupDynamicLocalAdsUtils",
                ).getDefaultProductSalesChannel(e),
                f,
                void 0,
                p,
              );
        },
        o("AdsUEditorAdgroupDynamicMutators")
          .syncTemplateDataMessageFromAFSFirstBody,
        function (e) {
          if (!R || v == null) return e;
          var t = v ? c(v) : null;
          return o("AdsPlaceDataUtils").addPlaceData({
            adgroup: e,
            specPlugin: n,
            objective: C,
            page: t,
            placeDataType: S,
          });
        },
        function (e) {
          var t = e,
            a = r("adsUEditorReactiveControlStickySettingSelector")(
              r("AdsEditingAdgroupEditorContext"),
            );
          return (
            m != null &&
              o("AdsAPlusCDAExperimentUtils").isEligibleForAPlusCDA({
                campaign: f,
                campaignGroup: g,
                adgroup: e,
              }) &&
              o(
                "DAFlexibleFormatUtils",
              ).isAdAccountEligibleForDAFormatControlDefaultOn() &&
              o(
                "DAFlexibleFormatUtils",
              ).isUserEligibleForDAFormatControlDefaultOn(
                a,
                "da_collection",
                "catalog",
              ) &&
              ((t = o("AdsAPlusCDefaultOnceUtils").defaultOnceToAPlusC(
                t,
                g.objective,
                n,
                i,
                l,
                s,
                p,
                { campaign: f, campaignGroup: g },
              )),
              (t = o("adsAPlusCEnhanceCTASpecMutator").adsEnhanceCTASpecMutator(
                f,
                t,
              )),
              (t = o(
                "AdsDAAddTextOverlayDefaultOnMutator",
              ).adsDAAddTextOverlayDefaultOnMutator(t))),
            t
          );
        },
        function (e) {
          return o(
            "AdsDAAplusCImageBackgroundGenerationDefaultOnMutator",
          ).isAdFormatEligibleForDAImageBackgroundGenDefaultOn({
            campaign: f,
            campaignGroup: g,
            adgroup: e,
          })
            ? o(
                "AdsDAAplusCImageBackgroundGenerationDefaultOnMutator",
              ).adsDAAplusCImageBackgroundGenerationDefaultOnMutator(e)
            : e;
        },
        function (e) {
          return s === !0
            ? o(
                "AdsUEditorAdgroupShopAdsBundleMutators",
              ).processShopAdsBundleEditorState(
                e,
                o("AdsUEditorAdgroupShopAdsBundle")
                  .SHOP_ADS_BUNDLE_DEFAULT_EDITOR_STATE,
              )
            : e;
        },
        function (e) {
          return d != null
            ? o(
                "AdsUEditorAdgroupPromoAdMutators",
              ).updatePromoAdForDefaultOptIn(
                { adgroup: e, campaign: f, campaignGroup: g },
                m,
                n,
                d,
                o("AdsUEditorAdgroupPromoAdMutatorUtils")
                  .PromoAdDefaultOptInCallSite.SA_TO_DA_TRANSFORMATION,
                null,
                !0,
              )
            : e;
        },
        function (e) {
          return _ != null && r("justknobx")._("4558")
            ? o(
                "AdsUEditorAdgroupBizAIDefaultOptInMutator",
              ).updateBizAIDefaultOptIn(
                e,
                _,
                o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
                  .BizAIDefaultOptInCallSite.SA_TO_DA_CAROUSEL,
              )
            : e;
        },
        function (e) {
          return d != null
            ? o(
                "AdsUEditorAdgroupEmailCaptureMutators",
              ).updateEmailCaptureForDefaultOptIn(
                { adgroup: e, campaign: f, campaignGroup: g },
                m,
                d,
                o("AdsUEditorAdgroupPromoAdMutatorUtils")
                  .PromoAdDefaultOptInCallSite.SA_TO_DA_TRANSFORMATION,
              )
            : e;
        },
        function (e) {
          return o(
            "adsAPlusCCarouselInlineCommentSpecMutators",
          ).adsDeleteCarouselInlineCommentSpecMutator(e);
        },
        function (e) {
          return o(
            "adsAPlusCCarouselDescriptionAutomationSpecMutators",
          ).adsDeleteCarouselDescriptionAutomationSpecMutator(e);
        },
        function (e) {
          return o(
            "adsAPlusCCarouselImageTouchupSpecMutators",
          ).adsDeleteCarouselImageTouchupSpecMutator(e);
        },
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.media_order.delete(
            e,
          );
        },
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.profile_card.delete(
            e,
          );
        },
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.interactive_components_spec.delete(e);
        },
        function (e) {
          return o(
            "AdsFlexibleFormatDAUtils",
          ).isReactiveControlCardVisibleForDA(e)
            ? e
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.format_transformation_spec.delete(e);
        },
      )(e);
    }
    ((l.transformDynamicToStaticCarouselMedia = s),
      (l.transformStaticToDynamicCarouselMedia = c));
  },
  98,
);
