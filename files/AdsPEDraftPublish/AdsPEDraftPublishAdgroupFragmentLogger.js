__d(
  "AdsPEDraftPublishAdgroupFragmentLogger",
  [
    "AdAccountProductExtensionsMainProductKey",
    "AdAccountProductExtensionsMainProductSetDataProvider",
    "AdAsyncRequestStatus",
    "AdFLEXConfig",
    "AdToCatalogUtils",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsAccountStore",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupDraftFragmentStore",
    "AdsAdgroupReelsAudiosLoggerUtils",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowLiteLoggerUtils",
    "AdsCAGAssetUtils",
    "AdsCampaignDynamicCreativeToggleProvider",
    "AdsContextualDiscoveryAdsLoggerUtils",
    "AdsContextualDiscoveryAdsUtils",
    "AdsCreativeFeaturesUtils",
    "AdsCrepePublishingLogger",
    "AdsDeliveryUIConstants",
    "AdsDraftProvider",
    "AdsDynamicAdsUtils",
    "AdsEditingAdgroupEditorContext",
    "AdsExistingPostDefaultingGatingUtils",
    "AdsFlexibleFormatLoggerUtils",
    "AdsFormatTransformationUtils",
    "AdsInstagramActorIDUtils",
    "AdsInterfacesLogger",
    "AdsLoadStateUtils_LEGACY",
    "AdsMessengerJSONUtils",
    "AdsMessengerVisualEditorLoggerEvents",
    "AdsMessengerVisualEditorQRResponseType",
    "AdsMessengerVisualEditorUtils",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutateWebsiteAddOnDefaultingOptOutCountAction",
    "AdsPACRelaxationUtils",
    "AdsPCAUnifiedFormatAdSetupUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsPCAUnifiedWS2LoggingUtils",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "AdsPELoggerLogDraftPublishWillCompleteStoreUtils",
    "AdsPEUploadStore",
    "AdsPageUtils",
    "AdsPlacementAssetCustomizationLoggerEvents",
    "AdsPlacementLoggerUtils",
    "AdsPostDefaultingProvider",
    "AdsSmartPromotionTypeUtils",
    "AdsStickyFlowDefaultingSelector",
    "AdsUEditorAdgroupFormExtensionProvider",
    "AdsUEditorAdgroupMultiPostSpecMutators",
    "AdsUserSettingsProvider",
    "AdsWebsiteAddOnAdvertiserSelectNoneOptionDataProvider",
    "AdsWebsiteAddOnDefaultedDataProvider",
    "AdsWebsiteAddonUtils",
    "BizAIFeatureLoggingUtils",
    "ClickToMessageAdsUnifiedDefaultingFalcoEvent",
    "ClickToMessageCTDFeatureGating",
    "ClickToWhatsAppAdsDetails",
    "ClickToWhatsAppAdsLoggerUtils",
    "CreativeAssetGroupsLoggingUtils",
    "FBLogger",
    "IGPrivateReplyLoggerHelper",
    "LeadAdsOtpPhoneVerificationFalcoEvent",
    "LeadAdsQualityFeatureGating",
    "LeadGenWorkEmailFalcoEvent",
    "NativeCommerceExperienceLoggingUtils",
    "PEFunnelLogger",
    "ProductSetDataProvider",
    "Promise",
    "SEFunnelLogger",
    "ShopsAdsEntryPointProvider",
    "adsAdgroupSelector_LEGACY",
    "adsDraftGetErrorsByIDFromFragmentStatusData",
    "adsMessengerDataModelGetQRResponse",
    "adsMessengerDataModelGetQRResponseType",
    "adsMessengerDataModelGetQuickReplies",
    "adsUEditorAdgroupBulkPhoneDataIdSelector",
    "adsUEditorContextualDiscoveryAdsEligibilitySelector",
    "adsUEditorIsAccountEligibleForAdsDefaultOnSelector",
    "adsUEditorIsBulkEditingSelector",
    "adsUEditorShouldAccountGrandfatherForMultiAdsSelector",
    "adsUEditorShouldMapiDefaultOnForMultiAdsSelector",
    "adsUEditorisAccountEligibleForContextualDiscoveryAdsExperienceSelector",
    "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
    "first",
    "getByPath",
    "isTruthy",
    "justknobx",
    "promiseDone",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { hasA2CCatalog: !1, a2cCatalogID: null, a2cProductSetID: null };
    function u(e) {
      var t,
        n = o("AdsPEAdgroupSelectors").getRecordSelector_LEGACY()(e).getValue();
      return {
        optedInFormats: o(
          "AdsFormatTransformationUtils",
        ).getOptedInFlexibleFormats(
          n == null || (t = n.creative) == null
            ? void 0
            : t.format_transformation_spec,
        ),
        hasUploadedMedia: o(
          "AdsFormatTransformationUtils",
        ).getPcaUnificationUploadedMediaPresent(n),
        hasRelatedMedia: o(
          "AdsFormatTransformationUtils",
        ).getPcaUnificationRelatedMediaPresent(n),
        hasGenAIMedia: o(
          "AdsFormatTransformationUtils",
        ).getPcaUnificationGenAIMediaPresent(n),
      };
    }
    function c(e) {
      var t, n, r, o;
      return (t =
        (n =
          e == null ||
          (r = e.creative) == null ||
          (r = r.object_story_spec) == null ||
          (r = r.link_data) == null
            ? void 0
            : r.link) != null
          ? n
          : e == null ||
              (o = e.creative) == null ||
              (o = o.object_story_spec) == null ||
              (o = o.video_data) == null ||
              (o = o.call_to_action) == null ||
              (o = o.value) == null
            ? void 0
            : o.link) != null
        ? t
        : null;
    }
    function d(e) {
      var t = c(e);
      if (t == null) return null;
      try {
        return new URL(t).hostname;
      } catch (e) {
        return null;
      }
    }
    function m(e) {
      if (e == null) return "OTHER";
      try {
        var t,
          n,
          r,
          o =
            (t = e.creative) == null || (t = t.asset_feed_spec) == null
              ? void 0
              : t.ad_formats;
        if (Array.isArray(o) && o.length > 1) return "SA_CAROUSEL";
        if (
          ((n = e.creative) == null || (n = n.object_story_spec) == null
            ? void 0
            : n.video_data) != null
        )
          return "SA_VIDEO";
        if (
          ((r = e.creative) == null || (r = r.object_story_spec) == null
            ? void 0
            : r.link_data) != null
        )
          return "SA_SINGLE_MEDIA";
      } catch (e) {
        return "OTHER";
      }
      return "OTHER";
    }
    function p(e) {
      if (e == null) return "full_create";
      var t = e.toLowerCase();
      return t.includes("duplicate") || t.includes("copy")
        ? "duplication"
        : t.includes("quick_create") ||
            t === "click_contextual_menu" ||
            t === "creation_package" ||
            t === "creation_package_default_opt_in"
          ? "quick_create"
          : t.includes("bulk_import")
            ? "bulk_edit"
            : "full_create";
    }
    function _(e, t, n, r, o, a) {
      return e
        ? t
          ? "BLOCKLISTED"
          : n
            ? "ADEX_BLOCKED"
            : r
              ? "COOLDOWN"
              : o === "OPT_OUT" && a === "DEFAULT"
                ? "DEFAULT_OFF"
                : o === "OPT_OUT" && a === "MANUAL"
                  ? "MANUAL_REJECTED"
                  : o === "OPT_OUT" && a === "STICKY"
                    ? "STICKY_OFF"
                    : o === "OPT_IN"
                      ? null
                      : "UNKNOWN"
        : "NO_A2C_CATALOG";
    }
    function f(e, t, n, a, i, l, u) {
      if (e == null) return s;
      try {
        var d,
          m,
          p = r("getByPath")(
            a,
            ["creative", "creative_sourcing_spec", "catalog", "enroll_status"],
            null,
          );
        if (p != null)
          return {
            hasA2CCatalog: !0,
            a2cCatalogID: null,
            a2cProductSetID: r("getByPath")(
              a,
              [
                "creative",
                "creative_sourcing_spec",
                "associated_product_set_id",
              ],
              null,
            ),
          };
        var _ = o(
            "AdsMetadataConnectedSourcesUtils",
          ).isCTWADestinationByCampaign(
            l != null ? { destination_type: l } : null,
          ),
          f =
            o("AdsMetadataConnectedSourcesUtils").isEligibleForCtdPeByCampaign(
              l != null ? { destination_type: l } : null,
            ) &&
            o(
              "ClickToMessageCTDFeatureGating",
            ).enableCTDProductExtensionsIGPlacement(!0),
          g = o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(!0)
            ? o("AdToCatalogUtils").buildPECatalogMatchKey({
                adAccountID: e,
                adgroupID: n != null ? n : "",
                isCTMAd: u,
                isEligibleForCtdPe: f,
                isEligibleForCtwaPe: _,
                pageID: t,
                pixelID: i,
                url: c(a),
              })
            : new (r("AdAccountProductExtensionsMainProductKey"))({
                adAccountID: e,
                url: u ? null : c(a),
                pageID: t,
                isCTMAd: u,
                isEligibleForCtwaPe: _,
                isEligibleForCtdPe: f,
                pixelID: i,
                adgroupID: n,
                requestSource: "PRODUCT_EXTENSIONS",
              }),
          h = r("AdAccountProductExtensionsMainProductSetDataProvider")
            .toFluxStore()
            .getState()
            .get(g),
          y = h != null && h.hasValueWithoutError(),
          C = y && h != null ? h.getValue() : null;
        return {
          hasA2CCatalog: y,
          a2cCatalogID:
            (d = C == null ? void 0 : C.catalogID) != null ? d : null,
          a2cProductSetID: (m = C == null ? void 0 : C.id) != null ? m : null,
        };
      } catch (e) {
        return s;
      }
    }
    var g = function (t, n, a) {
      var e,
        i,
        l,
        s = o(
          "LeadAdsQualityFeatureGating",
        ).isInOTPL1DefaultingTreatmentWithoutExposure();
      if (
        s &&
        (((e = t.asset_feed_spec) == null ||
        (e = e.lead_gen_configuration) == null
          ? void 0
          : e.verification_type) === "SMS" ||
          ((i = t.asset_feed_spec) == null ||
          (i = i.lead_gen_configuration) == null
            ? void 0
            : i.verification_type) === "NOT_ENABLED")
      ) {
        var u, c, d;
        (r("AdsInterfacesLogger").log({
          eventName: "lead_gen_phone_otp_verification_l1_defaulting_publish",
          data:
            ((c = {}),
            (c.adgroup_id = n),
            (c.ad_account_id = a),
            (c.is_enabled =
              ((u = t.asset_feed_spec) == null ||
              (u = u.lead_gen_configuration) == null
                ? void 0
                : u.verification_type) === "SMS"),
            (c.test_id = s),
            c),
        }),
          ((d = t.asset_feed_spec) == null ||
          (d = d.lead_gen_configuration) == null
            ? void 0
            : d.verification_type) === "SMS" &&
            r("LeadAdsOtpPhoneVerificationFalcoEvent").log(function () {
              return {
                event_name: "publish_sms_verification_ad_l1_defaulting",
                extra_data: {
                  ad_account_id: a != null ? a : "",
                  adgroup_id: n,
                },
              };
            }));
      }
      r("qex")._("73") === !0 &&
        ((l = t.asset_feed_spec) == null ||
        (l = l.lead_gen_configuration) == null
          ? void 0
          : l.is_work_email_enforcement_enabled) === !0 &&
        r("LeadGenWorkEmailFalcoEvent").log(function () {
          return {
            event: "event_publish_work_email_l1_defaulting",
            extra_data: { ad_account_id: a != null ? a : "", adgroup_id: n },
            tracking_codes: [],
          };
        });
    };
    function h(e, t) {
      return (function (n) {
        if (n === r("AdsMessengerVisualEditorQRResponseType").TEXT)
          return r("adsMessengerDataModelGetQRResponse")(e, t) === ""
            ? r("AdsMessengerVisualEditorLoggerEvents")
                .CTM_PUBLISH_QR_NULL_TEXT_RESPONSE
            : r("AdsMessengerVisualEditorLoggerEvents")
                .CTM_PUBLISH_QR_TEXT_RESPONSE;
        if (n === r("AdsMessengerVisualEditorQRResponseType").BOT)
          return r("AdsMessengerVisualEditorLoggerEvents")
            .CTM_PUBLISH_QR_BOT_RESPONSE;
        if (n === r("AdsMessengerVisualEditorQRResponseType").NONE)
          return r("AdsMessengerVisualEditorLoggerEvents")
            .CTM_PUBLISH_QR_NONE_RESPONSE;
        if (n === null) return "";
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      })(r("adsMessengerDataModelGetQRResponseType")(e, t));
    }
    function y(e) {
      try {
        var t, n;
        return (t =
          (n = r("adsAdgroupSelector_LEGACY")(e).getValue()) == null
            ? void 0
            : n.promotedObjectType) != null
          ? t
          : null;
      } catch (e) {
        return null;
      }
    }
    function C(e, t, n) {
      var r,
        a =
          n != null && String(n).includes("_")
            ? String(n).split("_").pop()
            : String(n != null ? n : ""),
        i = n != null && a === String(t.originalDefaultedPostID),
        l = {
          defaulted_post_id: t.originalDefaultedPostID,
          was_default_kept: i,
          cta_selected:
            e == null ||
            (r = e.creative) == null ||
            (r = r.call_to_action) == null
              ? void 0
              : r.type,
          recommendation_source: t.recommendationSource,
          original_default_type: t.originalDefaultType,
          published_with_existing_post:
            e != null
              ? o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
              : null,
        };
      return {
        eventSource: JSON.stringify(l),
        moduleName: i
          ? "published_with_default"
          : "published_with_different_post",
      };
    }
    var b = function (a, l, s, u, c, b) {
      var t,
        v = s.draftID,
        S = o("AdsLoadStateUtils_LEGACY").fromLoadObjectTreatEmptyAsLoading(
          r("AdsDraftProvider")().get(v),
        ),
        R = b != null ? b : null,
        L = S.account_id,
        E = r("AdsAccountStore").get(L).getValue(),
        k = r("getByPath")(s, ["response", "fragment_statuses", "data"], []),
        I = r("adsDraftGetErrorsByIDFromFragmentStatusData")(k),
        T =
          (t = r("AdsPEUploadStore").getState().recommendationData) == null
            ? void 0
            : t.resolutionSubtype,
        D = T != null ? { resolution_type: T } : {};
      return (
        a.forEach(function (t) {
          var a,
            s,
            b,
            v,
            S,
            k,
            T,
            x,
            $,
            P,
            N = t.ad_object_id,
            M = t.source;
          u !== M &&
            r("FBLogger")(
              "power_editor",
              "object_creation_source_mismatch",
            ).info(
              "publish_will_complete source: %s mismatch with fragment source: %s",
              u,
              M,
            );
          var w = r("AdsAdgroupDraftFragmentStore").isNew(N),
            A = l.get(N),
            F = A === r("AdAsyncRequestStatus").SUCCESS,
            O = o(
              "AdsPELoggerLogDraftPublishWillCompleteStoreUtils",
            ).getDeliveryStatus(N, w, "ad"),
            B = !I.has(N) && F,
            W = t.ad_creation_package_config;
          if (W != null) {
            var q = I.get(N),
              U =
                q != null
                  ? String(q.errorSubCode) + ": " + String(q.errorMessage)
                  : null;
            R = o("AdsCrepePublishingLogger").updatePackagePublishStats(
              R,
              W.id,
              "ad",
              N,
              M,
              w,
              B,
              U,
            );
          }
          var V = o("AdsPEAdgroupSelectors")
              .getRecordSelector_LEGACY()(N)
              .getValue(),
            H = V == null ? void 0 : V.campaign_id,
            G = null;
          if (H != null) {
            var z;
            G =
              (z = o("AdsPECampaignGroupSelectors")
                .getCachedByFieldsSelector()(
                  H,
                  { smart_promotion_type: null },
                  i.id,
                )
                .getValue()) == null
                ? void 0
                : z.smart_promotion_type;
          }
          var j = null,
            K = null,
            Q = null,
            X = null;
          if (H != null) {
            var Y, J, Z, ee;
            ((j =
              (Y = o("AdsPECampaignGroupSelectors")
                .getCachedByFieldsSelector()(H, { bid_strategy: null }, i.id)
                .getValue()) == null
                ? void 0
                : Y.bid_strategy),
              (K =
                (J = o("AdsPECampaignGroupSelectors")
                  .getCachedByFieldsSelector()(H, { objective: null }, i.id)
                  .getValue()) == null
                  ? void 0
                  : J.objective),
              (Q =
                (Z = o("AdsPECampaignGroupSelectors")
                  .getCachedByFieldsSelector()(H, { daily_budget: null }, i.id)
                  .getValue()) == null
                  ? void 0
                  : Z.daily_budget),
              (X =
                (ee = o("AdsPECampaignGroupSelectors")
                  .getCachedByFieldsSelector()(
                    H,
                    { lifetime_budget: null },
                    i.id,
                  )
                  .getValue()) == null
                  ? void 0
                  : ee.lifetime_budget));
          }
          var te = Q != null || X != null,
            ne = V == null ? void 0 : V.adset_id;
          if (j == null && ne != null) {
            var re;
            j =
              (re = o("AdsPECampaignSelectors")
                .getCachedByFieldsSelector()(ne, { bid_strategy: null }, i.id)
                .getValue()) == null
                ? void 0
                : re.bid_strategy;
          }
          var oe = null,
            ae = null,
            ie = null,
            le = null;
          if (ne != null) {
            var se, ue, ce, de;
            ((oe =
              (se = o("AdsPECampaignSelectors")
                .getCachedByFieldsSelector()(
                  ne,
                  { destination_type: null },
                  i.id,
                )
                .getValue()) == null
                ? void 0
                : se.destination_type),
              (ae =
                (ue = o("AdsPECampaignSelectors")
                  .getCachedByFieldsSelector()(
                    ne,
                    { optimization_goal: null },
                    i.id,
                  )
                  .getValue()) == null
                  ? void 0
                  : ue.optimization_goal),
              (ie =
                (ce = o("AdsPECampaignSelectors")
                  .getCachedByFieldsSelector()(
                    ne,
                    { adset_schedule: null },
                    i.id,
                  )
                  .getValue()) == null
                  ? void 0
                  : ce.adset_schedule));
            var me =
              (de = o("AdsPECampaignSelectors")
                .getCachedByFieldsSelector()(
                  ne,
                  { lifetime_budget: null },
                  i.id,
                )
                .getValue()) == null
                ? void 0
                : de.lifetime_budget;
            le = me != null ? Number(me) : null;
          }
          var pe = null;
          if (ne != null)
            try {
              var _e, fe;
              pe =
                (_e =
                  (fe = o("AdsPECampaignSelectors")
                    .getCachedByFieldsSelector()(
                      ne,
                      { promoted_object: null },
                      i.id,
                    )
                    .getValue()) == null || (fe = fe.promoted_object) == null
                    ? void 0
                    : fe.pixel_id) != null
                  ? _e
                  : null;
            } catch (e) {
              pe = null;
            }
          var ge = K != null && oe === "MESSENGER",
            he =
              le != null && le > 0
                ? o("AdsDeliveryUIConstants").BulkBudgetMode.LIFETIME
                : o("AdsDeliveryUIConstants").BulkBudgetMode.DAILY,
            ye = r("AdsSmartPromotionTypeUtils")(G),
            Ce = "",
            be =
              V == null ||
              (a = V.creative) == null ||
              (a = a.object_story_spec) == null ||
              (a = a.link_data) == null
                ? void 0
                : a.page_welcome_message,
            ve =
              V == null || (s = V.creative) == null
                ? void 0
                : s.page_welcome_message,
            Se =
              V == null ||
              (b = V.creative) == null ||
              (b = b.asset_feed_spec) == null ||
              (b = b.additional_data) == null
                ? void 0
                : b.page_welcome_message,
            Re = (v = be != null ? be : ve) != null ? v : Se,
            Le = Re != null ? JSON.parse(Re) : null;
          Le != null &&
            (Ce = o("AdsMessengerJSONUtils").getLandingScreenType(Le));
          var Ee = V ? o("AdsPageUtils").getPageID(V) : null,
            ke = V ? V.creative : null,
            Ie = ke == null ? void 0 : ke.product_set_id,
            Te =
              ke == null || (S = ke.creative_sourcing_spec) == null
                ? void 0
                : S.associated_product_set_id,
            De =
              Ie != null &&
              (k =
                (T = r("ProductSetDataProvider")
                  .toFluxStore()
                  .getState()
                  .get(Ie)) == null || (T = T.getValue()) == null
                  ? void 0
                  : T.catalogID) != null
                ? k
                : null,
            xe = V == null ? void 0 : V.source_ad_id,
            $e =
              (x =
                r("AdFLEXConfig") == null ||
                ($ = r("AdFLEXConfig").get()) == null
                  ? void 0
                  : $.shouldLogMessageMarketingData) != null
                ? x
                : !1,
            Pe = $e
              ? o(
                  "AdsPELoggerLogDraftPublishWillCompleteStoreUtils",
                ).getMessageMarketingAdgroupDataForLogging(V, Ee)
              : {},
            Ne =
              (V == null ||
              (P = V.creative) == null ||
              (P = P.destination_spec) == null
                ? void 0
                : P.destination_type) === "WEBSITE_AND_SHOP",
            Me = r("ShopsAdsEntryPointProvider")
              .toFluxStore()
              .getState().entryPoint;
          if (B) {
            var we, Ae;
            if (
              o(
                "AdsExistingPostDefaultingGatingUtils",
              ).isBoostOnAML1IGDefaultingEnabled() ||
              o(
                "AdsExistingPostDefaultingGatingUtils",
              ).isBoostOnAML1FBDefaultingEnabled()
            ) {
              var Fe,
                Oe,
                Be,
                We = r("AdsPostDefaultingProvider").toFluxStore().getState(),
                qe =
                  (Fe =
                    V == null || (Oe = V.creative) == null
                      ? void 0
                      : Oe.source_instagram_media_id) != null
                    ? Fe
                    : V == null || (Be = V.creative) == null
                      ? void 0
                      : Be.object_story_id;
              if (We.wasEverDefaulted) {
                var Ue,
                  Ve = C(V, We, qe),
                  He = Ve.eventSource,
                  Ge = Ve.moduleName;
                r("AdsInterfacesLogger").log({
                  eventName: "post_defaulting_publish",
                  data:
                    ((Ue = {}),
                    (Ue.page_post_id = qe),
                    (Ue.page_id = We.pageID),
                    (Ue.objective = K),
                    (Ue.module_name = Ge),
                    (Ue.event_source = He),
                    Ue),
                });
              } else {
                var ze;
                r("AdsInterfacesLogger").log({
                  eventName: "post_defaulting_publish",
                  data:
                    ((ze = {}),
                    (ze.page_post_id = qe),
                    (ze.objective = K),
                    (ze.module_name = "published_no_default"),
                    ze),
                });
              }
            }
            var je = t.ad_object_id,
              Ke = V
                ? o("AdsInstagramActorIDUtils").getInstagramActorID(V)
                : null,
              Qe =
                ke == null || (we = ke.asset_feed_spec) == null
                  ? void 0
                  : we.ad_formats;
            if (
              (ke && g(ke, je, L),
              V && o("AdsAssetFeedUtils").isPACAdgroupFromRecord(V))
            ) {
              var Xe,
                Ye,
                Je,
                Ze,
                et,
                tt = o("AdsPlacementLoggerUtils").getPlacementsForLogging(
                  (Xe = o("AdsPECampaignSelectors")
                    .getCachedByFieldsSelector()(
                      V.adset_id,
                      { targeting: null },
                      i.id,
                    )
                    .getValue()) == null
                    ? void 0
                    : Xe.targeting,
                ),
                nt =
                  V == null ||
                  (Ye = V.creative) == null ||
                  (Ye = Ye.asset_feed_spec) == null
                    ? void 0
                    : Ye.asset_customization_rules,
                rt =
                  (Je =
                    (Ze = V.creative) == null ||
                    (Ze = Ze.asset_feed_spec) == null
                      ? void 0
                      : Ze.ad_formats) != null
                    ? Je
                    : [],
                ot = r("first")(rt),
                at =
                  V == null || (et = V.creative) == null
                    ? void 0
                    : et.branded_content_boosting_type;
              if (w) {
                var it, lt;
                r("AdsInterfacesLogger").log({
                  data: babelHelpers.extends(
                    ((it = {}),
                    (it.adgroup_id = je),
                    (it.media_format = ot),
                    (it.page_types = tt),
                    (it.new_value = JSON.stringify(nt)),
                    it),
                    O,
                    ((lt = {}), (lt.branded_content_boosting_type = at), lt),
                  ),
                  eventName: r("AdsPlacementAssetCustomizationLoggerEvents")
                    .CREATE_AD,
                });
              } else {
                var st,
                  ut,
                  ct = r("AdsAdgroupDraftFragmentStore").getChangedFields(je),
                  dt = o("AdsPlacementLoggerUtils").getPACAdEditSourceType(ct);
                r("AdsInterfacesLogger").log({
                  data: babelHelpers.extends(
                    ((st = {}),
                    (st.adgroup_id = je),
                    (st.page_types = tt),
                    (st.media_format = ot),
                    (st.new_value = JSON.stringify(nt)),
                    (st.object_creation_source = dt),
                    st),
                    O,
                    ((ut = {}), (ut.branded_content_boosting_type = at), ut),
                  ),
                  eventName: r("AdsPlacementAssetCustomizationLoggerEvents")
                    .EDIT_AD,
                });
              }
            }
            if (V && o("AdsAssetFeedUtils").isAutomaticFlowLiteAdgroup(V)) {
              var mt = t.id;
              o("AdsAutomaticFlowLiteLoggerUtils").logSessionEnd({
                adCreationSource: M,
                adgroupID: je,
                fragmentID: mt,
                isNewFragment: w,
              });
            }
            if (V) {
              var pt = o(
                  "AdsPELoggerLogDraftPublishWillCompleteStoreUtils",
                ).getSelectedAdObjectPlain(V),
                _t = pt.adObject,
                ft = pt.selectedAdgroup,
                gt = pt.selectedCampaign,
                ht = pt.selectedCampaignGroup;
              if (ft != null && gt != null && ht != null && _t != null) {
                var yt;
                if (
                  (yt = r(
                    "adsUEditorisAccountEligibleForContextualDiscoveryAdsExperienceSelector",
                  )()) != null &&
                  yt().getValue()
                ) {
                  var Ct,
                    bt,
                    vt = r(
                      "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
                    )(r("AdsEditingAdgroupEditorContext")),
                    St = r(
                      "adsUEditorIsAccountEligibleForAdsDefaultOnSelector",
                    )(r("AdsEditingAdgroupEditorContext")),
                    Rt = r(
                      "adsUEditorShouldAccountGrandfatherForMultiAdsSelector",
                    )(),
                    Lt = r(
                      "adsUEditorShouldMapiDefaultOnForMultiAdsSelector",
                    )(),
                    Et = r(
                      "adsUEditorContextualDiscoveryAdsEligibilitySelector",
                    )(),
                    kt = o("AdsContextualDiscoveryAdsUtils").isGBGIMAdvertiser(
                      Et.getValue(),
                    ),
                    It = r("adsUEditorIsBulkEditingSelector")(
                      r("AdsEditingAdgroupEditorContext"),
                    ),
                    Tt = o(
                      "AdsContextualDiscoveryAdsUtils",
                    ).shouldRenderContextualDiscoveryAdsComponentCheckboxOn(
                      ft,
                      Rt,
                      Lt,
                    );
                  o(
                    "AdsContextualDiscoveryAdsLoggerUtils",
                  ).logContextualDiscoveryAdsPublish({
                    account: E,
                    adgroupID: je,
                    adObject: _t,
                    contextual_multi_ads_spec:
                      (Ct = ft.creative) == null
                        ? void 0
                        : Ct.contextual_multi_ads,
                    eligibility_state: vt,
                    toggle_status: Tt,
                    fragmentID: t.id,
                    is_account_eligible: !0,
                    is_account_eligible_for_default_opt_in:
                      ((bt = St()) == null ? void 0 : bt.getValue()) === !0,
                    should_grandfather: Rt().getValue(),
                    is_gbg_im_advertiser: kt,
                    is_duplicate: o(
                      "AdsContextualDiscoveryAdsUtils",
                    ).isDuplicateFlow(ft),
                    isBulkEditing: It,
                    should_mapi_default_on: Lt().getValue() === !0,
                    source_app_id: V == null ? void 0 : V.source_app_id,
                  });
                }
                if (r("justknobx")._("3907") && Ee != null) {
                  var Dt = r("AdsUEditorAdgroupFormExtensionProvider")
                      .toFluxStore()
                      .getState(),
                    xt = r("adsUEditorAdgroupBulkPhoneDataIdSelector")(
                      r("AdsEditingAdgroupEditorContext"),
                    ),
                    $t = o(
                      "AdsWebsiteAddonUtils",
                    ).getExtensionTypeForAdgroupAdObjects(V, Dt, xt);
                  $t === "none" &&
                    r("AdsWebsiteAddOnDefaultedDataProvider")().has(je) &&
                    r("AdsWebsiteAddOnDefaultedDataProvider")().get(je) !==
                      "none" &&
                    r(
                      "AdsWebsiteAddOnAdvertiserSelectNoneOptionDataProvider",
                    )().has(je) &&
                    r("promiseDone")(
                      (e || (e = n("Promise"))).resolve({}),
                      function () {
                        r(
                          "AdsMutateWebsiteAddOnDefaultingOptOutCountAction",
                        ).dispatch(
                          { pageID: Ee },
                          {
                            line: "969",
                            module: "AdsPEDraftPublishAdgroupFragmentLogger.js",
                            moduleID: i.id,
                          },
                        );
                      },
                    );
                }
                if (
                  o("AdsAssetFeedUtils").isAdgroupUsingPrivateReplyAutomation(V)
                ) {
                  var Pt,
                    Nt,
                    Mt,
                    wt =
                      (Pt = t.creative) == null ||
                      (Pt = Pt.asset_feed_spec) == null ||
                      (Pt = Pt.additional_data) == null
                        ? void 0
                        : Pt.page_private_reply,
                    At =
                      (Nt = V.creative) == null ||
                      (Nt = Nt.asset_feed_spec) == null ||
                      (Nt = Nt.additional_data) == null
                        ? void 0
                        : Nt.page_private_reply,
                    Ft = JSON.stringify({
                      fragment: wt,
                      adgroup: At,
                      isEqual: wt === At,
                    }),
                    Ot = t.id;
                  r("AdsInterfacesLogger").log({
                    eventName: "private_reply_ad_published",
                    data:
                      ((Mt = {}),
                      (Mt.page_id = Ee),
                      (Mt.adgroup_id = je),
                      (Mt.fragment_id = Ot),
                      (Mt.campaign_destination_type = oe),
                      (Mt.optimization_goal = ae),
                      (Mt.objective = o(
                        "IGPrivateReplyLoggerHelper",
                      ).normalizeObjectiveForLog(K)),
                      (Mt.object_creation_source = M),
                      (Mt.is_duplicated_object = o(
                        "AdsContextualDiscoveryAdsUtils",
                      ).isDuplicateFlow(ft)),
                      (Mt.is_edit = !w),
                      (Mt.metadata = Ft),
                      Mt),
                  });
                }
              }
            }
            if (
              (V == null || (Ae = V.metadata) == null
                ? void 0
                : Ae.is_pca_unified_format_ad) === !0
            ) {
              var Bt,
                Wt = r("qex")._("4926"),
                qt = o(
                  "AdsPCAUnifiedFormatEligibilityUtils",
                ).getPCAUWS2Cohort();
              o("AdsPCAUnifiedWS2LoggingUtils").logFlowEdit(
                "publish_success",
                {
                  adgroupID: je,
                  campaignID: ne,
                  campaignGroupID: H,
                  productSetID: Te,
                  enrollStatus: Wt,
                },
                {
                  isPcaUnifiedFormatAd: !0,
                  treatmentType: Wt,
                  cohort: qt,
                  formatTransformationSpec:
                    (ke == null ? void 0 : ke.format_transformation_spec) !=
                    null
                      ? JSON.stringify(ke.format_transformation_spec)
                      : null,
                  productMediaMetadataSpec:
                    (ke == null || (Bt = ke.creative_sourcing_spec) == null
                      ? void 0
                      : Bt.product_media_metadata_spec) != null
                      ? JSON.stringify(
                          ke.creative_sourcing_spec.product_media_metadata_spec,
                        )
                      : null,
                  mediaSourcingSpec:
                    (ke == null ? void 0 : ke.media_sourcing_spec) != null
                      ? JSON.stringify(ke.media_sourcing_spec)
                      : null,
                  optedInFormats: o(
                    "AdsFormatTransformationUtils",
                  ).getOptedInFlexibleFormats(
                    ke == null ? void 0 : ke.format_transformation_spec,
                  ),
                  hasUploadedMedia: o(
                    "AdsFormatTransformationUtils",
                  ).getPcaUnificationUploadedMediaPresent(V),
                  hasRelatedMedia: o(
                    "AdsFormatTransformationUtils",
                  ).getPcaUnificationRelatedMediaPresent(V),
                  hasGenAIMedia: o(
                    "AdsFormatTransformationUtils",
                  ).getPcaUnificationGenAIMediaPresent(V),
                },
              );
            }
            if (V && o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAd(V)) {
              var Ut;
              o("AdsFlexibleFormatLoggerUtils").logFlexibleFormatPublish(
                [V.id],
                (Ut = r("adsAdgroupSelector_LEGACY")(je).getValue()) == null
                  ? void 0
                  : Ut.objective,
                oe,
              );
            }
            var Vt = r("isTruthy")(
              ne != null &&
                r(
                  "AdsCampaignDynamicCreativeToggleProvider",
                )().CampaignIDDCOMap.get(ne),
            );
            if (
              V &&
              o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(V)
            ) {
              var Ht = o(
                "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
              ).getOrigins(V);
              o("CreativeAssetGroupsLoggingUtils").logCAGFlexibleformatPublish(
                {
                  ad_account_id: L,
                  adgroup_id: V.id,
                  campaign_group_id: V.campaign_id,
                  campaign_id: V.adset_id,
                },
                Vt,
                r("first")(Ht),
                o(
                  "AdsPCAUnifiedFormatAdSetupUtils",
                ).isPCAFullFormatOriginCAGAdgroup(V)
                  ? o(
                      "AdsPCAUnifiedFormatAdSetupUtils",
                    ).getPcaFullFormatOriginExtraDataForLogging(V)
                  : null,
              );
            }
            if (V) {
              var Gt = o(
                  "AdsPELoggerLogDraftPublishWillCompleteStoreUtils",
                ).getSelectedAdObjectPlain(V),
                zt = Gt.adObject;
              (zt &&
                o("AdsPACRelaxationUtils").isPACRelaxationEligibleFromAdAccount(
                  zt,
                ) &&
                o("AdsPACRelaxationUtils").logPACRelaxationPublishAd(V),
                o(
                  "NativeCommerceExperienceLoggingUtils",
                ).logNCEEligibilityCheck(
                  {
                    adgroupId: V.id,
                    campaignGroupId: H,
                    campaignId: ne,
                    entrypoint: Me,
                    funnelStep: o("NativeCommerceExperienceLoggingUtils")
                      .NativeCommerceExperienceFunnelStep.PUBLISH_SUCCESS,
                    isAdPublished: !w,
                    isOptin: Ne,
                    isToggleDisabled: null,
                    nceAdsType: o("AdsDynamicAdsUtils").isDynamicAd(V)
                      ? o("NativeCommerceExperienceLoggingUtils")
                          .NativeCommerceExperienceShopsAdsType.DYNAMIC_ADS
                      : o("NativeCommerceExperienceLoggingUtils")
                          .NativeCommerceExperienceShopsAdsType.STATIC_ADS,
                    experienceType: o("NativeCommerceExperienceLoggingUtils")
                      .NativeCommerceExperienceType.COMMON,
                    checkingSource: "adgroup_publish",
                  },
                  Ne,
                  Ne ? null : "shops_ads_not_opted_in_at_publish_success",
                ));
            }
            if (V) {
              var jt,
                Kt,
                Qt,
                Xt,
                Yt,
                Jt = L != null ? r("AdsUserSettingsProvider")().get(L) : null,
                Zt = Jt != null && Jt.isDone() ? Jt.getValue() : null,
                en =
                  L != null &&
                  (jt =
                    Zt == null ||
                    (Kt = Zt.ads_cs_catalog_opt_out_timestamp) == null
                      ? void 0
                      : Kt.get(L)) != null
                    ? jt
                    : 0,
                tn =
                  en > 0 &&
                  Date.now() - en <
                    o(
                      "AdsMetadataConnectedSourcesUtils",
                    ).getStickyOptOutTimeperiodFromExperiment(),
                nn = f(L, Ee, je, V, pe, oe, ge),
                rn = o("PEFunnelLogger").getPEGKBlocklistFields(),
                on = r("getByPath")(
                  V,
                  [
                    "creative",
                    "creative_sourcing_spec",
                    "catalog",
                    "enroll_status",
                  ],
                  null,
                ),
                an = r("getByPath")(
                  V,
                  [
                    "creative",
                    "creative_sourcing_spec",
                    "catalog",
                    "action_metadata",
                    "type",
                  ],
                  null,
                ),
                ln = r("getByPath")(
                  V,
                  [
                    "creative",
                    "degrees_of_freedom_spec",
                    "creative_features_spec",
                    "product_extensions",
                    "enroll_status",
                  ],
                  null,
                ),
                sn = r("getByPath")(
                  V,
                  [
                    "creative",
                    "degrees_of_freedom_spec",
                    "creative_features_spec",
                    "product_extensions",
                    "action_metadata",
                    "type",
                  ],
                  null,
                );
              o("PEFunnelLogger").logL1PublishConsentSnapshot(
                {
                  adgroup_id: je,
                  campaign_group_id: H,
                  campaign_id: ne,
                  product_set_id: Ie,
                  object_level: "ad_level",
                  ad_account_id: L,
                  object_creation_source: o(
                    "AdsAPIAdgroupRecordUtils",
                  ).isExistingPostAd(V)
                    ? "existing_post"
                    : p(M),
                },
                babelHelpers.extends(
                  {
                    is_publish_success: !0,
                    catalog_id: De,
                    format_type: m(V),
                    is_new_ad: w,
                    is_dynamic_ad: o("AdsDynamicAdsUtils").isDynamicAd(V),
                    is_existing_post: o(
                      "AdsAPIAdgroupRecordUtils",
                    ).isExistingPostAd(V),
                    destination_type: oe,
                    optimization_goal: ae,
                    campaign_objective: K,
                    duplicate_ad_source: xe,
                    has_a2c_catalog: nn.hasA2CCatalog,
                    a2c_catalog_id: nn.a2cCatalogID,
                    a2c_product_set_id: nn.a2cProductSetID,
                    has_catalog_assigned: De != null,
                    sticky_opt_out: tn,
                    is_in_cooldown_period: tn,
                    ad_domain: d(V),
                    promoted_object_type: y(je),
                    sales_segment:
                      (Qt = E == null ? void 0 : E.sales_segment_v2) != null
                        ? Qt
                        : null,
                    not_shown_reason: _(
                      nn.hasA2CCatalog,
                      (Xt = rn.is_default_on_blocklisted) != null ? Xt : !1,
                      (Yt = rn.is_adex_revamp_blocked) != null ? Yt : !1,
                      tn,
                      ln,
                      sn,
                    ),
                    pe_data_consent_enroll_status: ln,
                    pe_data_consent_action_type: sn,
                    has_catalog_sourcing_spec: on != null,
                    catalog_sourcing_enroll_status: on,
                    catalog_sourcing_action_type: an,
                    has_dof_pe_spec: ln != null,
                    pe_carousel_enroll_status: r("getByPath")(
                      V,
                      [
                        "creative",
                        "degrees_of_freedom_spec",
                        "creative_features_spec",
                        "product_extensions",
                        "customizations",
                        "pe_carousel",
                        "enroll_status",
                      ],
                      null,
                    ),
                  },
                  rn,
                ),
              );
              var un = r("getByPath")(
                  V,
                  ["creative", "creative_sourcing_spec", "site_links_spec"],
                  null,
                ),
                cn = r("getByPath")(
                  V,
                  [
                    "creative",
                    "creative_sourcing_spec",
                    "dynamic_site_links_spec",
                    "enroll_status",
                  ],
                  null,
                ),
                dn = r("getByPath")(
                  V,
                  [
                    "creative",
                    "creative_sourcing_spec",
                    "site_links_data_consented",
                  ],
                  null,
                ),
                mn = o("SEFunnelLogger").getSEGKBlocklistFields();
              o("SEFunnelLogger").logL1PublishConsentSnapshot(
                {
                  adgroup_id: je,
                  campaign_group_id: H,
                  campaign_id: ne,
                  object_level: "ad_level",
                  ad_account_id: L,
                  object_creation_source: o(
                    "AdsAPIAdgroupRecordUtils",
                  ).isExistingPostAd(V)
                    ? "existing_post"
                    : p(M),
                },
                babelHelpers.extends(
                  {
                    is_publish_success: !0,
                    format_type: m(V),
                    is_new_ad: w,
                    is_dynamic_ad: o("AdsDynamicAdsUtils").isDynamicAd(V),
                    destination_type: oe,
                    optimization_goal: ae,
                    campaign_objective: K,
                    dynamic_site_links_enroll_status: cn,
                    site_links_data_consented: dn === !0,
                    has_site_links: Array.isArray(un) && un.length > 0,
                    site_links_count: Array.isArray(un) ? un.length : 0,
                    sticky_opt_out: tn,
                    is_in_cooldown_period: tn,
                    promoted_object_type: y(je),
                  },
                  mn,
                ),
              );
            }
            if (
              (V &&
                o(
                  "AdsCreativeFeaturesUtils",
                ).isProductExtensionsOptedInFromAdgroup(V) &&
                o("PEFunnelLogger").logL1PublishSuccess(
                  {
                    adgroup_id: je,
                    campaign_group_id: H,
                    campaign_id: ne,
                    product_set_id: Ie,
                    object_level: "ad_level",
                    ad_account_id: L,
                    object_creation_source: o(
                      "AdsAPIAdgroupRecordUtils",
                    ).isExistingPostAd(V)
                      ? "existing_post"
                      : p(M),
                  },
                  babelHelpers.extends(
                    {
                      catalog_id: De,
                      is_new_ad: w,
                      is_dynamic_ad: o("AdsDynamicAdsUtils").isDynamicAd(V),
                      destination_type: oe,
                      optimization_goal: ae,
                      campaign_objective: K,
                      duplicate_ad_source: xe,
                      opt_in_source: r("getByPath")(
                        V,
                        [
                          "creative",
                          "degrees_of_freedom_spec",
                          "creative_features_spec",
                          "product_extensions",
                          "action_metadata",
                          "type",
                        ],
                        null,
                      ),
                    },
                    o("PEFunnelLogger").getPEGKBlocklistFields(),
                  ),
                ),
              V && o("AdsAssetFeedUtils").getIsAudiosAdgroupEnabled(V))
            ) {
              var pn = t.id;
              o("AdsAdgroupReelsAudiosLoggerUtils").logSessionEnd(je, pn, M, w);
            }
            if (V && r("justknobx")._("2922")) {
              var _n,
                fn,
                gn,
                hn,
                yn = o("AdsCAGAssetUtils").getAllPostSpecs(V),
                Cn = 0,
                bn = 0;
              if (yn.length > 0)
                for (var vn of yn)
                  (vn.post_id != null && Cn++,
                    vn.source_instagram_media_id != null && bn++);
              else {
                var Sn, Rn, Ln;
                ((((Sn = V.creative) == null ? void 0 : Sn.object_story_id) !=
                  null ||
                  ((Rn = V.creative) == null
                    ? void 0
                    : Rn.source_facebook_post_id) != null) &&
                  (Cn = 1),
                  ((Ln = V.creative) == null
                    ? void 0
                    : Ln.source_instagram_media_id) != null && (bn = 1));
              }
              var En = JSON.stringify({
                is_existing_post_ad: o(
                  "AdsAPIAdgroupRecordUtils",
                ).isExistingPostAd(V),
                object_story_id:
                  (_n = V.creative) == null ? void 0 : _n.object_story_id,
                source_instagram_media_id:
                  (fn = V.creative) == null
                    ? void 0
                    : fn.source_instagram_media_id,
                source_facebook_post_id:
                  (gn = V.creative) == null
                    ? void 0
                    : gn.source_facebook_post_id,
                has_multi_post_origin: o(
                  "AdsUEditorAdgroupMultiPostSpecMutators",
                ).hasMultiPostOrigin(V),
                multi_post_count: yn.length,
                num_fb_posts: Cn,
                num_ig_posts: bn,
              });
              r("AdsInterfacesLogger").log({
                adAccountID: L,
                eventName: "multi_post_ad_creation",
                data:
                  ((hn = {}),
                  (hn.fragment_id = t.id),
                  (hn.adgroup_id = je),
                  (hn.page_id = Ee),
                  (hn.objective = K),
                  (hn.optimization_goal = ae),
                  (hn.campaign_group_id = H),
                  (hn.campaign_id = ne),
                  (hn.campaign_destination_type = oe),
                  (hn.object_creation_source = M),
                  (hn.is_edit = !w),
                  (hn.metadata = En),
                  hn),
              });
            }
            var kn = o(
              "AdsPELoggerLogDraftPublishWillCompleteStoreUtils",
            ).getAdgroupSuccessDataForLogging(t, L, oe);
            if (w) {
              var In, Tn, Dn, xn;
              if (
                (o("AdsPELoggerLogDraftPublishWillCompleteStoreUtils").log(
                  "ad_create_succeed",
                  babelHelpers.extends(
                    {},
                    kn,
                    {
                      biz_ai_feature_statuses: Object.fromEntries(
                        o("BizAIFeatureLoggingUtils").getBizAIFeatureStatuses(
                          V,
                        ),
                      ),
                      immediate: c,
                      object_creation_source: M,
                      page_id: Ee,
                      rf_instagram_actor_id: Ke,
                      subsequent_data: JSON.stringify(
                        babelHelpers.extends(
                          {
                            duplicateAdSource: xe,
                            productSetID: Ie,
                            creativeAdFormats: Qe,
                          },
                          Pe,
                          D,
                        ),
                      ),
                    },
                    O,
                    ((xn = {
                      smart_promotion_type: ye,
                      campaign_bid_strategy: j,
                      product_set_id: Ie,
                    }),
                    (xn.creative_landing_screen_type = Ce),
                    (xn.page_post_id =
                      (In =
                        V == null || (Tn = V.creative) == null
                          ? void 0
                          : Tn.object_story_id) != null
                        ? In
                        : V == null || (Dn = V.creative) == null
                          ? void 0
                          : Dn.source_instagram_media_id),
                    xn),
                  ),
                  "ad_create",
                ),
                r("ClickToMessageAdsUnifiedDefaultingFalcoEvent").log(
                  function () {
                    var e, t, n, o, a;
                    return {
                      event: "ad_create_succeed",
                      page_id: Ee,
                      ad_account_id: L,
                      adgroup_id: je,
                      objective:
                        (e = r("adsAdgroupSelector_LEGACY")(je).getValue()) ==
                        null
                          ? void 0
                          : e.objective,
                      extra_data: {
                        destination_type:
                          (t = kn.campaign_destination_type) != null ? t : "",
                        optimization_goal:
                          (n = kn.optimization_goal) != null ? n : "",
                        promoted_object_type:
                          (o =
                            (a = r("adsAdgroupSelector_LEGACY")(
                              je,
                            ).getValue()) == null
                              ? void 0
                              : a.promotedObjectType) != null
                            ? o
                            : "",
                      },
                    };
                  },
                ),
                oe === "WHATSAPP" && r("qex")._("4868") === !0 && Ee != null)
              ) {
                var $n = r("AdsStickyFlowDefaultingSelector").get({
                    pageID: Ee,
                  }),
                  Pn = $n.isDone() ? $n.getValue() : null;
                if (Pn != null) {
                  var Nn =
                      (Le == null ? void 0 : Le.template_id) != null
                        ? String(Le.template_id)
                        : null,
                    Mn = "switched_to_non_flow";
                  (Nn === Pn
                    ? (Mn = "kept")
                    : Nn != null && (Mn = "overridden"),
                    o(
                      "ClickToWhatsAppAdsLoggerUtils",
                    ).logClickToWhatsAppAdsUnifiedEventDetails(
                      new (r("ClickToWhatsAppAdsDetails"))({
                        event: "ctwa_flows_sticky_defaulting_ad_published",
                        eventInfo: Mn,
                        pageID: Ee,
                        adAccountID: L,
                      }),
                    ));
                }
              }
              var wn =
                (te && Q != null && Number(Q) > 0) ||
                (!te &&
                  he === o("AdsDeliveryUIConstants").BulkBudgetMode.DAILY);
              if (wn && ae === r("AdsAPIOptimizationGoals").CONVERSATIONS) {
                var An;
                r("AdsInterfacesLogger").log({
                  adAccountID: L,
                  eventName: r("AdsMessengerVisualEditorLoggerEvents")
                    .CTX_BUSINESS_HOUR_DAYPARTING_AD_PUBLISH,
                  data:
                    ((An = {}),
                    (An.rf_day_parting = JSON.stringify(ie)),
                    (An.campaign_group_id = H),
                    (An.campaign_id = ne),
                    An),
                });
              }
              if (
                r("justknobx")._("1062") &&
                Le != null &&
                o("AdsMessengerVisualEditorUtils").isVisualEditorData(Le)
              ) {
                var Fn = r("adsMessengerDataModelGetQuickReplies")(Le);
                Fn == null ||
                  Fn.forEach(function (e, t) {
                    if (e) {
                      var n = h(Le, t);
                      if (n !== "") {
                        var o;
                        r("AdsInterfacesLogger").log({
                          adAccountID: L,
                          eventName: n,
                          data:
                            ((o = {}),
                            (o.adgroup_id = je),
                            (o.page_id = Ee),
                            (o.objective = K),
                            (o.optimization_goal = ae),
                            (o.campaign_group_id = H),
                            (o.campaign_id = ne),
                            o),
                        });
                      }
                    }
                  });
              }
            } else
              o("AdsPELoggerLogDraftPublishWillCompleteStoreUtils").log(
                "ad_edit_succeed",
                babelHelpers.extends(
                  {},
                  kn,
                  {
                    biz_ai_feature_statuses: Object.fromEntries(
                      o("BizAIFeatureLoggingUtils").getBizAIFeatureStatuses(V),
                    ),
                    object_creation_source: M,
                  },
                  O,
                  {
                    smart_promotion_type: ye,
                    campaign_bid_strategy: j,
                    product_set_id: Ie,
                    subsequent_data: JSON.stringify(
                      babelHelpers.extends({}, Pe, D),
                    ),
                  },
                ),
                "ad_edit",
              );
          } else {
            var On,
              Bn = I.get(N);
            !Bn &&
              !F &&
              (Bn = {
                errorMessage:
                  "Fragment did not not have error but publish failed",
                errorSubCode: 0,
              });
            var Wn = o(
              "AdsPELoggerLogDraftPublishWillCompleteStoreUtils",
            ).getAdgroupFailureDataForLogging(t, Bn, L, oe, ae, ne, H, A);
            if (
              (V == null || (On = V.metadata) == null
                ? void 0
                : On.is_pca_unified_format_ad) === !0
            ) {
              var qn,
                Un,
                Vn,
                Hn,
                Gn,
                zn = r("qex")._("4926"),
                jn = o(
                  "AdsPCAUnifiedFormatEligibilityUtils",
                ).getPCAUWS2Cohort();
              o("AdsPCAUnifiedWS2LoggingUtils").logFlowError(
                "publish_error",
                {
                  adgroupID: N,
                  campaignID: ne,
                  campaignGroupID: H,
                  productSetID: Te,
                  enrollStatus: zn,
                },
                {
                  isPcaUnifiedFormatAd: !0,
                  treatmentType: zn,
                  cohort: jn,
                  errorCode: String(
                    (qn = (Un = Bn) == null ? void 0 : Un.errorSubCode) != null
                      ? qn
                      : "",
                  ),
                  errorMessage: String(
                    (Vn = (Hn = Bn) == null ? void 0 : Hn.errorMessage) != null
                      ? Vn
                      : "",
                  ),
                  formatTransformationSpec:
                    (ke == null ? void 0 : ke.format_transformation_spec) !=
                    null
                      ? JSON.stringify(ke.format_transformation_spec)
                      : null,
                  productMediaMetadataSpec:
                    (ke == null || (Gn = ke.creative_sourcing_spec) == null
                      ? void 0
                      : Gn.product_media_metadata_spec) != null
                      ? JSON.stringify(
                          ke.creative_sourcing_spec.product_media_metadata_spec,
                        )
                      : null,
                  mediaSourcingSpec:
                    (ke == null ? void 0 : ke.media_sourcing_spec) != null
                      ? JSON.stringify(ke.media_sourcing_spec)
                      : null,
                  optedInFormats: o(
                    "AdsFormatTransformationUtils",
                  ).getOptedInFlexibleFormats(
                    ke == null ? void 0 : ke.format_transformation_spec,
                  ),
                  hasUploadedMedia: o(
                    "AdsFormatTransformationUtils",
                  ).getPcaUnificationUploadedMediaPresent(V),
                  hasRelatedMedia: o(
                    "AdsFormatTransformationUtils",
                  ).getPcaUnificationRelatedMediaPresent(V),
                  hasGenAIMedia: o(
                    "AdsFormatTransformationUtils",
                  ).getPcaUnificationGenAIMediaPresent(V),
                },
              );
            }
            if (V && o("AdsAssetFeedUtils").isAutomaticFlowLiteAdgroup(V)) {
              var Kn = t.id;
              o("AdsAutomaticFlowLiteLoggerUtils").logPublishFailed({
                adCreationSource: M,
                adgroupID: N,
                fragmentID: Kn,
                isNewFragment: w,
                error: Bn,
              });
            }
            if (
              (V &&
                o(
                  "NativeCommerceExperienceLoggingUtils",
                ).logNCEEligibilityCheck(
                  {
                    adgroupId: V.id,
                    campaignGroupId: H,
                    campaignId: ne,
                    entrypoint: Me,
                    funnelStep: o("NativeCommerceExperienceLoggingUtils")
                      .NativeCommerceExperienceFunnelStep.PUBLISH_FAILURE,
                    isAdPublished: !w,
                    isOptin: Ne,
                    isToggleDisabled: null,
                    nceAdsType: o("AdsDynamicAdsUtils").isDynamicAd(V)
                      ? o("NativeCommerceExperienceLoggingUtils")
                          .NativeCommerceExperienceShopsAdsType.DYNAMIC_ADS
                      : o("NativeCommerceExperienceLoggingUtils")
                          .NativeCommerceExperienceShopsAdsType.STATIC_ADS,
                    experienceType: o("NativeCommerceExperienceLoggingUtils")
                      .NativeCommerceExperienceType.COMMON,
                    checkingSource: "adgroup_publish",
                  },
                  Ne,
                  Ne ? null : "shops_ads_not_opted_in_at_publish_failure",
                ),
              V)
            ) {
              var Qn,
                Xn,
                Yn,
                Jn,
                Zn,
                er = L != null ? r("AdsUserSettingsProvider")().get(L) : null,
                tr = er != null && er.isDone() ? er.getValue() : null,
                nr =
                  L != null &&
                  (Qn =
                    tr == null ||
                    (Xn = tr.ads_cs_catalog_opt_out_timestamp) == null
                      ? void 0
                      : Xn.get(L)) != null
                    ? Qn
                    : 0,
                rr =
                  nr > 0 &&
                  Date.now() - nr <
                    o(
                      "AdsMetadataConnectedSourcesUtils",
                    ).getStickyOptOutTimeperiodFromExperiment(),
                or = f(L, Ee, N, V, pe, oe, ge),
                ar = o("PEFunnelLogger").getPEGKBlocklistFields(),
                ir = r("getByPath")(
                  V,
                  [
                    "creative",
                    "creative_sourcing_spec",
                    "catalog",
                    "enroll_status",
                  ],
                  null,
                ),
                lr = r("getByPath")(
                  V,
                  [
                    "creative",
                    "creative_sourcing_spec",
                    "catalog",
                    "action_metadata",
                    "type",
                  ],
                  null,
                ),
                sr = r("getByPath")(
                  V,
                  [
                    "creative",
                    "degrees_of_freedom_spec",
                    "creative_features_spec",
                    "product_extensions",
                    "enroll_status",
                  ],
                  null,
                ),
                ur = r("getByPath")(
                  V,
                  [
                    "creative",
                    "degrees_of_freedom_spec",
                    "creative_features_spec",
                    "product_extensions",
                    "action_metadata",
                    "type",
                  ],
                  null,
                );
              o("PEFunnelLogger").logL1PublishConsentSnapshot(
                {
                  adgroup_id: N,
                  campaign_group_id: H,
                  campaign_id: ne,
                  product_set_id: Ie,
                  object_level: "ad_level",
                  ad_account_id: L,
                  object_creation_source: o(
                    "AdsAPIAdgroupRecordUtils",
                  ).isExistingPostAd(V)
                    ? "existing_post"
                    : p(M),
                },
                babelHelpers.extends(
                  {
                    is_publish_success: !1,
                    catalog_id: De,
                    format_type: m(V),
                    is_new_ad: w,
                    is_dynamic_ad: o("AdsDynamicAdsUtils").isDynamicAd(V),
                    is_existing_post: o(
                      "AdsAPIAdgroupRecordUtils",
                    ).isExistingPostAd(V),
                    destination_type: oe,
                    optimization_goal: ae,
                    campaign_objective: K,
                    duplicate_ad_source: xe,
                    has_a2c_catalog: or.hasA2CCatalog,
                    a2c_catalog_id: or.a2cCatalogID,
                    a2c_product_set_id: or.a2cProductSetID,
                    has_catalog_assigned: De != null,
                    sticky_opt_out: rr,
                    is_in_cooldown_period: rr,
                    ad_domain: d(V),
                    promoted_object_type: (function () {
                      try {
                        var e, t;
                        return (e =
                          (t = r("adsAdgroupSelector_LEGACY")(N).getValue()) ==
                          null
                            ? void 0
                            : t.promotedObjectType) != null
                          ? e
                          : null;
                      } catch (e) {
                        return null;
                      }
                    })(),
                    sales_segment:
                      (Yn = E == null ? void 0 : E.sales_segment_v2) != null
                        ? Yn
                        : null,
                    not_shown_reason: _(
                      or.hasA2CCatalog,
                      (Jn = ar.is_default_on_blocklisted) != null ? Jn : !1,
                      (Zn = ar.is_adex_revamp_blocked) != null ? Zn : !1,
                      rr,
                      sr,
                      ur,
                    ),
                    pe_data_consent_enroll_status: sr,
                    pe_data_consent_action_type: ur,
                    has_catalog_sourcing_spec: ir != null,
                    catalog_sourcing_enroll_status: ir,
                    catalog_sourcing_action_type: lr,
                    has_dof_pe_spec: sr != null,
                    pe_carousel_enroll_status: r("getByPath")(
                      V,
                      [
                        "creative",
                        "degrees_of_freedom_spec",
                        "creative_features_spec",
                        "product_extensions",
                        "customizations",
                        "pe_carousel",
                        "enroll_status",
                      ],
                      null,
                    ),
                  },
                  ar,
                ),
              );
              var cr = r("getByPath")(
                  V,
                  ["creative", "creative_sourcing_spec", "site_links_spec"],
                  null,
                ),
                dr = r("getByPath")(
                  V,
                  [
                    "creative",
                    "creative_sourcing_spec",
                    "dynamic_site_links_spec",
                    "enroll_status",
                  ],
                  null,
                ),
                mr = r("getByPath")(
                  V,
                  [
                    "creative",
                    "creative_sourcing_spec",
                    "site_links_data_consented",
                  ],
                  null,
                ),
                pr = o("SEFunnelLogger").getSEGKBlocklistFields();
              o("SEFunnelLogger").logL1PublishConsentSnapshot(
                {
                  adgroup_id: N,
                  campaign_group_id: H,
                  campaign_id: ne,
                  object_level: "ad_level",
                  ad_account_id: L,
                  object_creation_source: o(
                    "AdsAPIAdgroupRecordUtils",
                  ).isExistingPostAd(V)
                    ? "existing_post"
                    : p(M),
                },
                babelHelpers.extends(
                  {
                    is_publish_success: !1,
                    format_type: m(V),
                    is_new_ad: w,
                    is_dynamic_ad: o("AdsDynamicAdsUtils").isDynamicAd(V),
                    destination_type: oe,
                    optimization_goal: ae,
                    campaign_objective: K,
                    dynamic_site_links_enroll_status: dr,
                    site_links_data_consented: mr === !0,
                    has_site_links: Array.isArray(cr) && cr.length > 0,
                    site_links_count: Array.isArray(cr) ? cr.length : 0,
                    sticky_opt_out: rr,
                    is_in_cooldown_period: rr,
                    promoted_object_type: (function () {
                      try {
                        var e, t;
                        return (e =
                          (t = r("adsAdgroupSelector_LEGACY")(N).getValue()) ==
                          null
                            ? void 0
                            : t.promotedObjectType) != null
                          ? e
                          : null;
                      } catch (e) {
                        return null;
                      }
                    })(),
                  },
                  pr,
                ),
              );
            }
            if (
              (V &&
                o(
                  "AdsCreativeFeaturesUtils",
                ).isProductExtensionsOptedInFromAdgroup(V) &&
                o("PEFunnelLogger").logL1PublishFail(
                  {
                    adgroup_id: N,
                    campaign_group_id: H,
                    campaign_id: ne,
                    product_set_id: Ie,
                    object_level: "ad_level",
                    ad_account_id: L,
                    object_creation_source: o(
                      "AdsAPIAdgroupRecordUtils",
                    ).isExistingPostAd(V)
                      ? "existing_post"
                      : p(M),
                  },
                  babelHelpers.extends(
                    {
                      catalog_id: De,
                      is_new_ad: w,
                      is_dynamic_ad: o("AdsDynamicAdsUtils").isDynamicAd(V),
                      destination_type: oe,
                      optimization_goal: ae,
                      campaign_objective: K,
                      duplicate_ad_source: xe,
                      opt_in_source: r("getByPath")(
                        V,
                        [
                          "creative",
                          "degrees_of_freedom_spec",
                          "creative_features_spec",
                          "product_extensions",
                          "action_metadata",
                          "type",
                        ],
                        null,
                      ),
                    },
                    o("PEFunnelLogger").getPEGKBlocklistFields(),
                  ),
                ),
              w)
            ) {
              var _r;
              o("AdsPELoggerLogDraftPublishWillCompleteStoreUtils").log(
                "ad_create_fail",
                babelHelpers.extends(
                  {},
                  Wn,
                  { immediate: c, object_creation_source: M },
                  O,
                  ((_r = {
                    smart_promotion_type: ye,
                    campaign_bid_strategy: j,
                    product_set_id: Ie,
                  }),
                  (_r.creative_landing_screen_type = Ce),
                  (_r.page_id = Ee),
                  (_r.subsequent_data = JSON.stringify(
                    babelHelpers.extends({}, Pe, D),
                  )),
                  _r),
                ),
                "ad_create",
              );
            } else
              o("AdsPELoggerLogDraftPublishWillCompleteStoreUtils").log(
                "ad_edit_fail",
                babelHelpers.extends(
                  {},
                  Wn,
                  { immediate: c, object_creation_source: M },
                  O,
                  {
                    smart_promotion_type: ye,
                    campaign_bid_strategy: j,
                    product_set_id: Ie,
                    subsequent_data: JSON.stringify(
                      babelHelpers.extends({}, Pe, D),
                    ),
                  },
                ),
                "ad_edit",
              );
          }
        }),
        R
      );
    };
    ((l.getPCAUPublishAttemptMediaData = u),
      (l.getAdCreativeLinkUrl = c),
      (l.getAdDomain = d),
      (l.getFormatType = m),
      (l.mapCreationSource = p),
      (l.computeNotShownReason = _),
      (l.getA2CCatalogInfo = f),
      (l.getQRPublishEventName = h),
      (l.processAdgroupFragments = b));
  },
  98,
);
