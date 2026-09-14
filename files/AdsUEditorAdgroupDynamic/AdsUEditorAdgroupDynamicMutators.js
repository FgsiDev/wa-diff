__d(
  "AdsUEditorAdgroupDynamicMutators",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIChildAttachmentPaths",
    "AdsAPIObjectives",
    "AdsAdgroupCtxAdvtantagePlusMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedUtils",
    "AdsCanvasConstants",
    "AdsClickToCallDynamicAdsUtils",
    "AdsCreativeFormatMutatorUtils",
    "AdsDAAdaptImagesMutators",
    "AdsDAAddTextOverlayDefaultOnMutator",
    "AdsDAAplusCImageBackgroundGenerationDefaultOnMutator",
    "AdsDeliveryOmnichannelUtils",
    "AdsDynamicAdMultiTextUtils",
    "AdsMediaTypeAutomationMutators",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPCAConsolidationUtils",
    "AdsSAInDAUtils",
    "AdsTemplateDataDefaultsStoreUtils",
    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
    "AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupDynamicCallAdsUtils",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupTurnoffPromoAdMutator",
    "AdsUEditorCTXAdvantagePlusCatalogUtils",
    "AdsUEditorCTXDestinationUtils",
    "ApiAdObjectTypes",
    "ClickToWhatsAppFeatureGating",
    "ConstUriUtils",
    "XVanityURLControllerRouteBuilder",
    "adsAPlusCEnhanceCTASpecMutator",
    "adsUEditorRemoveDynamicAdsSpecificCreativeFields",
    "immutable",
    "isAccountEligibleForThreeCOL2AdEx",
    "isEligibleForAdaptImagesDefaultOptIn",
    "isEligibleForDADynamicMediaWithParams",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = n.campaign,
        l = n.campaignGroup,
        s = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
          l.objective,
          i,
        ),
        u = o("AdsODAXUtils").maybeTranslateObjective(
          l.objective,
          s,
          i.optimization_goal,
        ),
        c = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.product_set_id.set(t),
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .attachment_style.delete,
          function (e) {
            return o("AdsUEditorAdgroupTurnoffPromoAdMutator").turnOffPromo(
              e,
              o("AdsUEditorAdgroupTurnoffPromoAdMutator")
                .PromoAdDefaultOptOutCallsite
                .SA_TO_DA_COLLECTION_TRANSFORMATION,
            );
          },
        )(e);
      return r("isEligibleForDADynamicMediaWithParams")(c, u, s)
        ? o("AdsMediaTypeAutomationMutators").changeMediaTypeAutomationMutator(
            c,
            a,
            "OPT_IN",
            "DEFAULT",
          )
        : c;
    }
    function s(e) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.product_set_id.delete,
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.link.set(
          o("AdsCanvasConstants").EMPTY_CANVAS_LINK,
        ),
        function (e) {
          return o(
            "AdsMediaTypeAutomationMutators",
          ).removeMediaTypeAutomationFieldsMutator(e);
        },
        function (e) {
          return o("AdsUEditorAdgroupTurnoffPromoAdMutator").turnOffPromo(
            e,
            o("AdsUEditorAdgroupTurnoffPromoAdMutator")
              .PromoAdDefaultOptOutCallsite.DA_TO_SA_COLLECTION_TRANSFORMATION,
          );
        },
      )(e);
    }
    function u(e, t, n, a, i, l, s, u, c) {
      var m = t.campaign,
        p = t.campaignGroup,
        f = R(e, m);
      ((f = o("AdsUEditorAdgroupMutators").setSAOffOptOut(f)),
        (f = o("adsAPlusCEnhanceCTASpecMutator").adsEnhanceCTASpecMutator(
          m,
          f,
        )),
        (f = o(
          "AdsDAAddTextOverlayDefaultOnMutator",
        ).adsDAAddTextOverlayDefaultOnMutator(f)));
      var g = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
          p.objective,
          m,
        ),
        h = o("AdsODAXUtils").maybeTranslateObjective(
          p.objective,
          g,
          m.optimization_goal,
        );
      return (
        o("AdsAdgroupTypeUtils").isVideoAd(f)
          ? (f = _(f, h, n, a, u, m, p))
          : (f = d(f, h, n, a, !1, m, p, u)),
        (f = o(
          "AdsUEditorAdgroupDynamicCallAdsUtils",
        ).maybePersistCallAdsConfigurationForCallAds(h, g, e, f)),
        l != null &&
          ((f = o(
            "AdsUEditorAdgroupPromoAdMutators",
          ).updatePromoAdForDefaultOptIn(
            { adgroup: f, campaign: m, campaignGroup: p },
            null,
            i,
            l,
            o("AdsUEditorAdgroupPromoAdMutatorUtils")
              .PromoAdDefaultOptInCallSite.SA_TO_DA_TRANSFORMATION,
            null,
            !0,
          )),
          (f = o(
            "AdsUEditorAdgroupEmailCaptureMutators",
          ).updateEmailCaptureForDefaultOptIn(
            { adgroup: f, campaign: m, campaignGroup: p },
            null,
            l,
            o("AdsUEditorAdgroupPromoAdMutatorUtils")
              .PromoAdDefaultOptInCallSite.SA_TO_DA_TRANSFORMATION,
          ))),
        c != null &&
          r("justknobx")._("4619") &&
          (f = o(
            "AdsUEditorAdgroupBizAIDefaultOptInMutator",
          ).updateBizAIDefaultOptIn(
            f,
            c,
            o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
              .BizAIDefaultOptInCallSite.SA_TO_DA_SINGLE_MEDIA,
          )),
        o(
          "AdsDAAplusCImageBackgroundGenerationDefaultOnMutator",
        ).isAdFormatEligibleForDAImageBackgroundGenDefaultOn({
          campaign: m,
          campaignGroup: p,
          adgroup: f,
        }) &&
          (f = o(
            "AdsDAAplusCImageBackgroundGenerationDefaultOnMutator",
          ).adsDAAplusCImageBackgroundGenerationDefaultOnMutator(f)),
        r("isEligibleForAdaptImagesDefaultOptIn")(f, s) &&
          (f = o("AdsDAAdaptImagesMutators").daAdaptImagesDefaultInMutator(f)),
        i != null && r("isEligibleForDADynamicMediaWithParams")(f, h, g)
          ? o(
              "AdsMediaTypeAutomationMutators",
            ).changeMediaTypeAutomationMutator(f, i, "OPT_IN", "DEFAULT")
          : f
      );
    }
    function c(e, t, n, a, i, l, s, u, c) {
      var d,
        m,
        p,
        _,
        f =
          (d = e.creative) == null ||
          (d = d.object_story_spec) == null ||
          (d = d.link_data) == null ||
          (d = d.call_to_action) == null
            ? void 0
            : d.value,
        C = f == null ? void 0 : f.app_destination,
        b = f == null ? void 0 : f.app_link,
        v =
          (m = e.creative) == null ||
          (m = m.object_story_spec) == null ||
          (m = m.link_data) == null
            ? void 0
            : m.page_welcome_message,
        S =
          (p = e.creative) == null ||
          (p = p.object_story_spec) == null ||
          (p = p.link_data) == null
            ? void 0
            : p.phone_data_id,
        R = o("AdsMutators").chain(
          function (e) {
            return o("AdsCreativeFormatMutatorUtils").mutateCreativeTextType(
              e,
              "TEMPLATE",
            );
          },
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.link.set(
            (_ = e.creative) == null ||
              (_ = _.object_story_spec) == null ||
              (_ = _.link_data) == null
              ? void 0
              : _.link,
          ),
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .delete,
          g,
          h,
          function (e) {
            return y(e, t, a, i, !0, s, c, C);
          },
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.recommender_settings.product_sales_channel.set(l),
        )(e);
      return (
        S != null &&
          (s == null ? void 0 : s.destination_type) ===
            r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL &&
          (R = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.phone_data_id.set(S, R)),
        C !== null &&
          (R = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.call_to_action.value.app_destination.set(
            C,
            R,
          )),
        b !== null &&
          C === "INSTAGRAM_DIRECT" &&
          (R = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.call_to_action.value.app_link.set(
            b,
            R,
          )),
        v != null &&
          (R = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.page_welcome_message.set(
            v,
            R,
          )),
        r("isEligibleForAdaptImagesDefaultOptIn")(R, u) &&
          (R = o("AdsDAAdaptImagesMutators").daAdaptImagesDefaultInMutator(R)),
        r("isEligibleForDADynamicMediaWithParams")(R, t, n)
          ? o(
              "AdsMediaTypeAutomationMutators",
            ).changeMediaTypeAutomationOptinMutator(R, "OPT_IN", "DEFAULT")
          : R
      );
    }
    function d(e, t, n, a, i, l, s, u) {
      var c,
        d,
        m,
        p,
        _,
        f =
          (c = e.creative) == null ||
          (c = c.object_story_spec) == null ||
          (c = c.link_data) == null
            ? void 0
            : c.phone_data_id,
        h =
          (d = e.creative) == null || (d = d.asset_feed_spec) == null
            ? void 0
            : d.call_ads_configuration,
        y = o("AdsAPICampaignRecordUtils").getPromotedObjectType(t, l),
        b = o("ClickToWhatsAppFeatureGating").isEligibleForCTXAdvantageCatalog(
          l == null ? void 0 : l.destination_type,
          !1,
        ),
        v = b
          ? (m = e.creative) != null &&
            (m = m.object_story_spec) != null &&
            (m = m.link_data) != null &&
            (m = m.call_to_action) != null &&
            (m = m.value) != null &&
            m.app_destination
            ? (p = e.creative) == null ||
              (p = p.object_story_spec) == null ||
              (p = p.link_data) == null ||
              (p = p.call_to_action) == null ||
              (p = p.value) == null
              ? void 0
              : p.app_destination
            : o("AdsUEditorCTXDestinationUtils").adPromotedObjectTypeToString(y)
          : null,
        S = o("AdsMutators").chain(
          function (e) {
            return o("AdsCreativeFormatMutatorUtils").mutateCreativeTextType(
              e,
              "TEMPLATE",
            );
          },
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.link.set(
            (_ = e.creative) == null ||
              (_ = _.object_story_spec) == null ||
              (_ = _.link_data) == null
              ? void 0
              : _.link,
          ),
          function (e) {
            return b && v != null
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.template_data.call_to_action.value.app_destination.set(
                  v,
                  e,
                )
              : e;
          },
          function (e) {
            return b
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.template_data.page_welcome_message.set(
                  o(
                    "AdsUEditorCTXAdvantagePlusCatalogUtils",
                  ).getSingleMediaPageWelcomeMessageForDestination(
                    l == null ? void 0 : l.destination_type,
                    e,
                    s.objective,
                  ),
                  e,
                )
              : e;
          },
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete,
          g,
          function (e) {
            return C(e, t, n, a, !0, l, u);
          },
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .delete,
        )(e);
      return (
        l.destination_type ===
          r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL &&
          (f != null &&
            (S = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.phone_data_id.set(f, S)),
          h != null &&
            (S = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.call_ads_configuration.set(h, S))),
        l.destination_type ===
          r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP &&
          b &&
          (S = o(
            "AdsAdgroupCtxAdvtantagePlusMutators",
          ).restoreCTXMDAssetFeedSpecForAdgroup(S)),
        i
          ? o("AdsMutators").chain(
              r("AdsAdgroupRecordAccessors").creative.object_story_spec
                .template_data.force_single_link.delete,
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.format_option.set(
                "single_video",
              ),
            )(S)
          : S
      );
    }
    function m(e) {
      var t, n;
      if (
        !o("AdsDynamicAdMultiTextUtils").isDynamicAdMultiTextEnabled() ||
        !o("AdsAPIAdgroupRecordUtils").isTemplateCreative(e)
      )
        return e;
      var a =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.bodies,
        i;
      a != null &&
        (r("immutable").List.isList(a)
          ? (i = a.first())
          : Array.isArray(a) && (i = a[0]));
      var l;
      i != null && (l = r("immutable").Map.isMap(i) ? i.get("text") : i.text);
      var s =
        (n = e.creative) == null ||
        (n = n.object_story_spec) == null ||
        (n = n.template_data) == null
          ? void 0
          : n.message;
      return typeof l != "string" || l === "" || (s != null && s !== "")
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.message.set(l, e);
    }
    function p(e, t, n, a) {
      var i,
        l,
        s,
        u,
        c = e,
        d = o("AdsAdgroupTypeUtils").isVideoAd(e),
        m = o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e),
        p = o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e),
        _ =
          (i = e.creative) == null ||
          (i = i.object_story_spec) == null ||
          (i = i.template_data) == null
            ? void 0
            : i.phone_data_id,
        f =
          (l = e.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.call_ads_configuration,
        g = o("ClickToWhatsAppFeatureGating").isEligibleForCTXAdvantageCatalog(
          t == null ? void 0 : t.destination_type,
          !1,
        ),
        h =
          (s = e.creative) == null ||
          (s = s.object_story_spec) == null ||
          (s = s.template_data) == null
            ? void 0
            : s.link,
        y = (h == null || h === "") && (u = E(e, t)) != null ? u : h,
        C = o("AdsMutators").chain(
          function (e) {
            return o("AdsCreativeFormatMutatorUtils").mutateCreativeTextType(
              e,
              "RAW_TEXT",
            );
          },
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.link.set(y),
          r("AdsAdgroupRecordAccessors").creative.object_story_spec
            .template_data.delete,
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
          r("AdsAdgroupRecordAccessors").creative.recommender_settings
            .product_sales_channel.delete,
        )(e);
      if (
        (t.destination_type ===
          r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL &&
          (_ != null &&
            (C = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.phone_data_id.set(_, C)),
          f != null &&
            (C = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.call_ads_configuration.set(f, C))),
        g)
      ) {
        var b = o(
          "AdsUEditorCTXDestinationUtils",
        ).getDefaultHeadlineForMessagingDestinations(t.destination_type);
        C = d
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.title.set(b, C)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.name.set(b, C);
      }
      var S = o("AdsAPICampaignRecordUtils").getPromotedObjectType(a, t);
      if (!m && !p) {
        var R,
          k =
            (R = c.creative) == null ||
            (R = R.object_story_spec) == null ||
            (R = R.template_data) == null ||
            (R = R.call_to_action) == null ||
            (R = R.value) == null
              ? void 0
              : R.link,
          I = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.call_to_action.value.app_destination.get(
            c,
          ),
          T = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.page_welcome_message.get(
            c,
          );
        C = d
          ? o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.call_to_action.type.set(
                v(a, t == null ? void 0 : t.destination_type),
              ),
              function (e) {
                return o(
                  "AdsClickToCallDynamicAdsUtils",
                ).isDynamicCallAdEligible(a, S)
                  ? r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.video_data.call_to_action.value.link.set(
                      k,
                      e,
                    )
                  : e;
              },
              function (e) {
                return g
                  ? I != null && I !== ""
                    ? r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.video_data.call_to_action.value.app_destination.set(
                        I,
                        e,
                      )
                    : r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.video_data.call_to_action.value.app_destination.set(
                        o(
                          "AdsUEditorCTXDestinationUtils",
                        ).adPromotedObjectTypeToString(S),
                        e,
                      )
                  : e;
              },
              function (e) {
                return g
                  ? T != null && T !== ""
                    ? r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.video_data.page_welcome_message.set(
                        T,
                        e,
                      )
                    : r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.video_data.page_welcome_message.set(
                        o(
                          "AdsUEditorCTXAdvantagePlusCatalogUtils",
                        ).getSingleMediaPageWelcomeMessageForDestination(
                          t == null ? void 0 : t.destination_type,
                          e,
                          n.objective,
                        ),
                        e,
                      )
                  : e;
              },
            )(C)
          : o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.call_to_action.type.set(
                v(a, t == null ? void 0 : t.destination_type),
              ),
              function (e) {
                return o(
                  "AdsClickToCallDynamicAdsUtils",
                ).isDynamicCallAdEligible(a, S)
                  ? r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.link_data.call_to_action.value.link.set(
                      k,
                      e,
                    )
                  : e;
              },
              function (e) {
                return g
                  ? I != null && I !== ""
                    ? r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.link_data.call_to_action.value.app_destination.set(
                        I,
                        e,
                      )
                    : r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.link_data.call_to_action.value.app_destination.set(
                        o(
                          "AdsUEditorCTXDestinationUtils",
                        ).adPromotedObjectTypeToString(S),
                        e,
                      )
                  : e;
              },
              function (e) {
                return g
                  ? T != null && T !== ""
                    ? r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.link_data.page_welcome_message.set(
                        T,
                        e,
                      )
                    : r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.link_data.page_welcome_message.set(
                        o(
                          "AdsUEditorCTXAdvantagePlusCatalogUtils",
                        ).getSingleMediaPageWelcomeMessageForDestination(
                          t == null ? void 0 : t.destination_type,
                          e,
                          n.objective,
                        ),
                        e,
                      )
                  : e;
              },
            )(C);
      }
      return (
        (C = o(
          "AdsUEditorAdgroupDynamicCallAdsUtils",
        ).maybePersistCallAdsConfigurationForCallAds(a, S, c, C)),
        (C = r("adsUEditorRemoveDynamicAdsSpecificCreativeFields")(C)),
        (C = L(C, t, c)),
        (C = o(
          "AdsMediaTypeAutomationMutators",
        ).removeMediaTypeAutomationFieldsMutator(C)),
        (C = o("AdsDAAdaptImagesMutators").daAdaptImagesRemoveOptInMutator(C)),
        C
      );
    }
    function _(e, t, n, a, i, l, s) {
      var u,
        c,
        d,
        m,
        p,
        _ =
          (u = e.creative) == null ||
          (u = u.object_story_spec) == null ||
          (u = u.video_data) == null
            ? void 0
            : u.phone_data_id,
        f =
          (c = e.creative) == null || (c = c.asset_feed_spec) == null
            ? void 0
            : c.call_ads_configuration,
        h = o("ClickToWhatsAppFeatureGating").isEligibleForCTXAdvantageCatalog(
          l == null ? void 0 : l.destination_type,
          !1,
        ),
        y = o("AdsAPICampaignRecordUtils").getPromotedObjectType(t, l),
        b = h
          ? (d = e.creative) != null &&
            (d = d.object_story_spec) != null &&
            (d = d.video_data) != null &&
            (d = d.call_to_action) != null &&
            (d = d.value) != null &&
            d.app_destination
            ? (m = e.creative) == null ||
              (m = m.object_story_spec) == null ||
              (m = m.video_data) == null ||
              (m = m.call_to_action) == null ||
              (m = m.value) == null
              ? void 0
              : m.app_destination
            : o("AdsUEditorCTXDestinationUtils").adPromotedObjectTypeToString(y)
          : null,
        v = o("AdsMutators").chain(
          function (e) {
            return o("AdsCreativeFormatMutatorUtils").mutateCreativeTextType(
              e,
              "TEMPLATE",
            );
          },
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.link.set(
            (p = e.creative) == null ||
              (p = p.object_story_spec) == null ||
              (p = p.video_data) == null ||
              (p = p.call_to_action) == null ||
              (p = p.value) == null
              ? void 0
              : p.link,
          ),
          function (e) {
            return h && b != null
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.template_data.call_to_action.value.app_destination.set(
                  b,
                  e,
                )
              : e;
          },
          function (e) {
            return h
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.template_data.page_welcome_message.set(
                  o(
                    "AdsUEditorCTXAdvantagePlusCatalogUtils",
                  ).getSingleMediaPageWelcomeMessageForDestination(
                    l == null ? void 0 : l.destination_type,
                    e,
                    s == null ? void 0 : s.objective,
                  ),
                  e,
                )
              : e;
          },
          r("AdsAdgroupRecordAccessors").creative.object_type.set(
            r("ApiAdObjectTypes").SHARE,
          ),
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.video_data
            .delete,
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete,
          g,
          function (e) {
            return C(e, t, n, a, !0, l, i);
          },
        )(e);
      return (
        (l == null ? void 0 : l.destination_type) ===
          r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL &&
          (_ != null &&
            (v = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.phone_data_id.set(_, v)),
          f != null &&
            (v = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.call_ads_configuration.set(f, v))),
        (l == null ? void 0 : l.destination_type) ===
          r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP &&
          h &&
          (v = o(
            "AdsAdgroupCtxAdvtantagePlusMutators",
          ).restoreCTXMDAssetFeedSpecForAdgroup(v)),
        v
      );
    }
    function f(e, t, n, a, i, l, s) {
      var u,
        c =
          ((u = e.creative) == null ||
          (u = u.object_story_spec) == null ||
          (u = u.template_data) == null ||
          (u = u.call_to_action) == null
            ? void 0
            : u.type) != null;
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.recommender_settings.product_sales_channel.set(i),
        g,
        h,
        function (e) {
          return y(e, t, n, a, c, s, l);
        },
      )(e);
    }
    function g(e) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.thumbnail_url.delete,
        r("AdsAdgroupRecordAccessors").creative.thumbnail_height.delete,
        r("AdsAdgroupRecordAccessors").creative.thumbnail_width.delete,
      )(e);
    }
    function h(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.portrait_customizations.delete(e);
    }
    function y(e, t, n, a, i, l, s, u) {
      return o("AdsMutators").chain(
        function (e) {
          return b(e, t, n, a, i, l, s, u);
        },
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.multi_share_end_card.set(!1),
        r("AdsAdgroupRecordAccessors").metadata.carousel_style.set("others"),
      )(e);
    }
    function C(e, t, n, a, i, l, s) {
      var u,
        c,
        d = o("ClickToWhatsAppFeatureGating").isEligibleForCTXAdvantageCatalog(
          l == null ? void 0 : l.destination_type,
          !1,
        ),
        m =
          (u = e.creative) == null ||
          (u = u.object_story_spec) == null ||
          (u = u.link_data) == null ||
          (u = u.call_to_action) == null ||
          (u = u.value) == null
            ? void 0
            : u.app_destination,
        p =
          (c = e.creative) == null ||
          (c = c.object_story_spec) == null ||
          (c = c.video_data) == null ||
          (c = c.call_to_action) == null ||
          (c = c.value) == null
            ? void 0
            : c.app_destination,
        _ = d ? m || p : null;
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.multi_share_end_card.set(!1),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.force_single_link.set(!0),
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.template_data
          .format_option.delete,
      )(b(e, t, n, a, i, l, s, _));
    }
    function b(e, t, n, a, i, l, s, u) {
      var c = o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.product_set_id.set(n),
        function (e) {
          return o("AdsCreativeFormatMutatorUtils").mutateCreativeTextType(
            e,
            "TEMPLATE",
          );
        },
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.name.set(
          o("AdsTemplateDataDefaultsStoreUtils").getStringDefault("name", a, s),
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.description.set(
          o("AdsTemplateDataDefaultsStoreUtils").getStringDefault(
            "description",
            a,
            s,
          ),
        ),
      )(e);
      if (
        l &&
        o("AdsSAInDAUtils").isSAInDAEnabledUsingCampaignAndAdgroup(l, e)
      ) {
        var d, m, p, _, f, g;
        c = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.message.set(
            (d = e.creative) == null ||
              (d = d.object_story_spec) == null ||
              (d = d.link_data) == null ||
              (d = d.message) == null
              ? void 0
              : d.concat(
                  (m =
                    (p = c.creative) == null ||
                    (p = p.object_story_spec) == null ||
                    (p = p.template_data) == null
                      ? void 0
                      : p.message) != null
                    ? m
                    : "",
                ),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.name.set(
            (_ = e.creative) == null ||
              (_ = _.object_story_spec) == null ||
              (_ = _.link_data) == null ||
              (_ = _.name) == null
              ? void 0
              : _.concat(
                  (f =
                    (g = c.creative) == null ||
                    (g = g.object_story_spec) == null ||
                    (g = g.template_data) == null
                      ? void 0
                      : g.name) != null
                    ? f
                    : "",
                ),
          ),
        )(c);
      }
      if (i) {
        var h,
          y = v(t, l == null ? void 0 : l.destination_type, u),
          C =
            (h = e.creative) == null ||
            (h = h.object_story_spec) == null ||
            (h = h.template_data) == null
              ? void 0
              : h.child_attachments,
          b =
            C == null
              ? void 0
              : C.map(function (e) {
                  return e.getIn(
                    r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.TYPE,
                  )
                    ? e.setIn(
                        r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.TYPE,
                        y,
                      )
                    : e;
                }),
          S = o("AdsAPICampaignRecordUtils").getPromotedObjectType(t, l);
        c = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.call_to_action.type.set(y),
          function (e) {
            if (
              o("AdsClickToCallDynamicAdsUtils").isDynamicCallAdEligible(t, S)
            ) {
              var n;
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.call_to_action.value.link.set(
                (n = e.creative) == null ||
                  (n = n.object_story_spec) == null ||
                  (n = n.link_data) == null ||
                  (n = n.call_to_action) == null ||
                  (n = n.value) == null
                  ? void 0
                  : n.link,
                e,
              );
            }
            return e;
          },
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.child_attachments.set(b),
        )(c);
      }
      return c;
    }
    function v(e, t, n) {
      var a = o(
        "ClickToWhatsAppFeatureGating",
      ).isEligibleForCTXAdvantageCatalog(t, !1);
      switch (e) {
        case r("AdsAPIObjectives").LEAD_GENERATION:
          return t === r("AdCampaignDestination").PHONE_CALL
            ? "CALL_NOW"
            : "SIGN_UP";
        case r("AdsAPIObjectives").MESSAGES:
          if (a)
            return o(
              "AdsUEditorCTXAdvantagePlusCatalogUtils",
            ).getCTXCallToActionFromDestinationAndAppDestination(t, n);
          switch (n) {
            case "INSTAGRAM_DIRECT":
              return "INSTAGRAM_MESSAGE";
            case "WHATSAPP":
              return "WHATSAPP_MESSAGE";
            default:
              return "MESSAGE_PAGE";
          }
        case r("AdsAPIObjectives").CONVERSIONS:
          return t === r("AdCampaignDestination").PHONE_CALL
            ? "CALL_NOW"
            : a
              ? o(
                  "AdsUEditorCTXAdvantagePlusCatalogUtils",
                ).getCTXCallToActionFromDestinationAndAppDestination(t, n)
              : "SHOP_NOW";
        case r("AdsAPIObjectives").LINK_CLICKS:
          return t === r("AdCampaignDestination").PHONE_CALL
            ? "CALL_NOW"
            : "SHOP_NOW";
        default:
          return "SHOP_NOW";
      }
    }
    function S(e, t, n, r, a, i, l) {
      return o(
        "AdsUEditorAdgroupChildAttachmentsMutators",
      ).addLeadingStaticCard(f(e, t, n, r, a, l, i), !1);
    }
    function R(e, t) {
      var n, a, i, l, s;
      return o("AdsDeliveryOmnichannelUtils").canUseOmnichannelForWebsiteAndApp(
        t.toJS(),
      )
        ? o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.template_url_spec.config.app_id.set(
              ((n = e.creative) == null ||
              (n = n.omnichannel_link_spec) == null ||
              (n = n.app) == null
                ? void 0
                : n.application_id) || "",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.template_url_spec.android.url.set(
              ((a = e.creative) == null ||
              (a = a.omnichannel_link_spec) == null ||
              (a = a.app) == null ||
              (a = a.platform_specs) == null ||
              (a = a.android) == null
                ? void 0
                : a.url) || "",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.template_url_spec.ios.url.set(
              ((i = e.creative) == null ||
              (i = i.omnichannel_link_spec) == null ||
              (i = i.app) == null ||
              (i = i.platform_specs) == null ||
              (i = i.ios) == null
                ? void 0
                : i.url) || "",
            ),
            r("AdsAdgroupRecordAccessors").creative.applink_treatment.set(
              ((l = e.creative) == null ? void 0 : l.applink_treatment) ===
                "automatic"
                ? "deeplink_with_web_fallback"
                : (s = e.creative) == null
                  ? void 0
                  : s.applink_treatment,
            ),
            r("AdsAdgroupRecordAccessors").creative.omnichannel_link_spec
              .delete,
            r("AdsAdgroupRecordAccessors").creative.call_to_action.delete,
            r("AdsAdgroupRecordAccessors").creative.object_story_id.delete,
          )(e)
        : e;
    }
    function L(e, t, n) {
      var a, i, l, s, u, c, d, m, p, _, f;
      if (
        t == null ||
        !o("AdsDeliveryOmnichannelUtils").canUseOmnichannelForWebsiteAndApp(
          t.toJS(),
        )
      )
        return e;
      var g =
          t == null ||
          (a = t.promoted_object) == null ||
          (a = a.omnichannel_object) == null ||
          (a = a.app) == null ||
          (a = a.get(0)) == null
            ? void 0
            : a.get("object_store_urls"),
        h = g instanceof r("immutable").List ? g : r("immutable").List(),
        y = o("isAccountEligibleForThreeCOL2AdEx").is3coSwitchMediaFix(),
        C = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.omnichannel_link_spec.app.application_id.set(
            ((i = n.creative) == null ||
            (i = i.template_url_spec) == null ||
            (i = i.config) == null
              ? void 0
              : i.app_id) ||
              (y
                ? (l = n.creative) == null ||
                  (l = l.omnichannel_link_spec) == null ||
                  (l = l.app) == null
                  ? void 0
                  : l.application_id
                : "") ||
              "",
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.omnichannel_link_spec.app.platform_specs.android.url.set(
            ((s = n.creative) == null ||
            (s = s.template_url_spec) == null ||
            (s = s.android) == null
              ? void 0
              : s.url) ||
              (y
                ? (u = n.creative) == null ||
                  (u = u.omnichannel_link_spec) == null ||
                  (u = u.app) == null ||
                  (u = u.platform_specs) == null ||
                  (u = u.android) == null
                  ? void 0
                  : u.url
                : "") ||
              "",
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.omnichannel_link_spec.app.platform_specs.ios.url.set(
            ((c = n.creative) == null ||
            (c = c.template_url_spec) == null ||
            (c = c.ios) == null
              ? void 0
              : c.url) ||
              (y
                ? (d = n.creative) == null ||
                  (d = d.omnichannel_link_spec) == null ||
                  (d = d.app) == null ||
                  (d = d.platform_specs) == null ||
                  (d = d.ios) == null
                  ? void 0
                  : d.url
                : "") ||
              "",
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.omnichannel_link_spec.web.url.set(
            ((m = n.creative) == null ||
            (m = m.object_story_spec) == null ||
            (m = m.template_data) == null
              ? void 0
              : m.link) ||
              (y
                ? (p = n.creative) == null ||
                  (p = p.omnichannel_link_spec) == null ||
                  (p = p.web) == null
                  ? void 0
                  : p.url
                : "") ||
              "",
          ),
          r("AdsAdgroupRecordAccessors").creative.applink_treatment.set(
            "deeplink_with_web_fallback",
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.application.set(
            ((_ = n.creative) == null ||
            (_ = _.template_url_spec) == null ||
            (_ = _.config) == null
              ? void 0
              : _.app_id) ||
              (y
                ? (f = n.creative) == null ||
                  (f = f.omnichannel_link_spec) == null ||
                  (f = f.app) == null
                  ? void 0
                  : f.application_id
                : "") ||
              "",
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.object_store_urls.set(
            h,
          ),
        )(e);
      if (
        o("AdsSAInDAUtils").isGKEnableForSAInDA() &&
        o("AdsPCAConsolidationUtils").isPCAVariation(t)
      ) {
        var b,
          v =
            t == null ||
            (b = t.promoted_object) == null ||
            (b = b.omnichannel_object) == null ||
            (b = b.app) == null ||
            (b = b.get(0)) == null
              ? void 0
              : b.toJS().application_id;
        C = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.omnichannel_link_spec.app.application_id.set(v || ""),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.application.set(
            v,
          ),
        )(C);
      }
      return C;
    }
    function E(e, t) {
      var n, a, i, l, s;
      if (
        r("justknobx")._("4042") === !1 ||
        t.destination_type !== r("AdCampaignDestination").PHONE_CALL
      )
        return null;
      var u =
        (n =
          (a =
            (i = e.creative) == null || (i = i.object_story_spec) == null
              ? void 0
              : i.page_id) != null
            ? a
            : e.getIn(["creative", "page_id"])) != null
          ? n
          : e.getIn(["creative", "asset_feed_spec", "page_id"]);
      return u == null || typeof u != "string"
        ? null
        : (l =
              (s = r("XVanityURLControllerRouteBuilder")
                .buildUri({ vanity: u })
                .qualifyDomain(
                  o("ConstUriUtils").getUri("https://facebook.com/"),
                )) == null
                ? void 0
                : s.toString()) != null
          ? l
          : null;
    }
    ((l.transformAdgroupFromStaticToDynamicCollectionMedia = e),
      (l.transformAdgroupFromDynamicToStaticCollectionMedia = s),
      (l.transformAdgroupFromStaticToDynamicSingleMedia = u),
      (l.transformAdgroupFromLinkToCarouselTemplateData = c),
      (l.syncTemplateDataMessageFromAFSFirstBody = m),
      (l.transformAdgroupFromTemplateToSingleMediaLinkData = p),
      (l.transformAdgroupFromVideoToSingleMediaTemplateData = _),
      (l.transformAdgroupTemplateDataFromStaticToDynamic = f),
      (l.removeThumbnail = g),
      (l.addDefaultCarouselTemplateDataFields = y),
      (l.addDefaultCommonTemplateDataFields = b),
      (l.transformAdgroupTemplateDataFromStaticToDynamicWithLeadingStaticCard =
        S));
  },
  98,
);
