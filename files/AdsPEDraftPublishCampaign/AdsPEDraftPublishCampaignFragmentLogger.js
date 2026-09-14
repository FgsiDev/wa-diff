__d(
  "AdsPEDraftPublishCampaignFragmentLogger",
  [
    "AccountAttributionEvent",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAccountStore",
    "AdsAdAccountPublisherBlockListsProvider",
    "AdsBuyingTypes",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupCreationSourceForPlacement",
    "AdsCampaignRawSpecUtils",
    "AdsCrepePublishingLogger",
    "AdsDraftProvider",
    "AdsLoadStateUtils_LEGACY",
    "AdsMessageCampaignTargetingLoggingUtils",
    "AdsOffsiteCLOUtil",
    "AdsOnsiteCRMSingleEventOptimizationUtil",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignRawCombinedTableStore",
    "AdsPECampaignSelectors",
    "AdsPELoggerLogDraftPublishWillCompleteStoreUtils",
    "AdsPEUploadStore",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementEligibilityInfoUtils",
    "AdsPlacementLoggerUtils",
    "AdsSmartPromotionTypeUtils",
    "LeadNurturingFeatureGating",
    "adsDraftGetErrorsByIDFromFragmentStatusData",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a, l, s) {
      var e,
        u = s != null ? s : null,
        c =
          (e = r("AdsPEUploadStore").getState().recommendationData) == null
            ? void 0
            : e.resolutionSubtype,
        d = c != null ? { resolution_type: c } : {};
      return (
        t.forEach(function (e) {
          var t = e.ad_object_id,
            s = e.id,
            c = e.source,
            m = r("AdsCampaignDraftFragmentStore").isNew(t),
            p = o(
              "AdsPELoggerLogDraftPublishWillCompleteStoreUtils",
            ).getDeliveryStatus(t, m, "ad_set"),
            _ = r("getByPath")(
              n,
              ["response", "fragment_statuses", "data"],
              [],
            ),
            f = r("adsDraftGetErrorsByIDFromFragmentStatusData")(_),
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
            I,
            T,
            D,
            x = !f.has(t),
            $ = e.ad_creation_package_config;
          $ != null &&
            (u = o("AdsCrepePublishingLogger").updatePackagePublishStats(
              u,
              $.id,
              "ad_set",
              t,
              c,
              m,
              x,
            ));
          var P = o("AdsPECampaignSelectors").getCachedSelector()(t).getValue();
          ((C = P == null ? void 0 : P.destination_type),
            (R = P == null ? void 0 : P.daily_budget));
          var N = P == null ? void 0 : P.campaign_id,
            M = null;
          if (N != null) {
            var w;
            M =
              (w = o("AdsPECampaignGroupSelectors")
                .getCachedByFieldsSelector()(
                  N,
                  { smart_promotion_type: null },
                  i.id,
                )
                .getValue()) == null
                ? void 0
                : w.smart_promotion_type;
          }
          var A = r("AdsSmartPromotionTypeUtils")(M),
            F = n.draftID,
            O = o("AdsLoadStateUtils_LEGACY").fromLoadObjectTreatEmptyAsLoading(
              r("AdsDraftProvider")().get(F),
            ),
            B = O.account_id,
            W = r("AdsAccountStore").get(B).getValue(),
            q = P == null ? void 0 : P.bid_strategy,
            U = P == null ? void 0 : P.optimization_goal,
            V = {},
            H = o(
              "AdsPELoggerLogDraftPublishWillCompleteStoreUtils",
            ).getMessageMarketingDataForLogging(P),
            G = o(
              "AdsAPICampaignRecordUtils",
            ).getDerivedPromotedObjectTypeWithVariation(P);
          if (x) {
            var z = null,
              j = o(
                "AdsMessageCampaignTargetingLoggingUtils",
              ).getIncludedCustomAudienceIDs(P),
              K = o(
                "AdsMessageCampaignTargetingLoggingUtils",
              ).getExcludedCustomAudienceIDs(P),
              Q = r("AdsPECampaignRawCombinedTableStore").getCachedObject(t);
            if (P != null) {
              var X,
                Y,
                J = Q.getValueEnforcing(),
                Z = o("AdsPlacementLoggerUtils").getPlacementsForLogging(
                  P.targeting,
                );
              ((C = P.destination_type),
                (R = P.daily_budget),
                (L = P.targeting.publisher_platforms),
                (E = P.targeting.facebook_positions),
                (I = P.targeting.messenger_positions),
                (T = P.targeting.whatsapp_positions),
                (k = P.targeting.instagram_positions));
              var ee = P.attribution_spec,
                te = new Map();
              (ee == null ||
                ee.forEach(function (e) {
                  te.set(e.event_type, e.window_days);
                }),
                (v = te.get(r("AccountAttributionEvent").CLICK_THROUGH)),
                (S = te.get(r("AccountAttributionEvent").VIEW_THROUGH)),
                (y = P.metrics_metadata),
                (g = Z));
              var ne = P.campaign_id,
                re = o("AdsPECampaignGroupSelectors")
                  .getCachedByFieldsSelector()(
                    ne,
                    {
                      buying_type: null,
                      objective: null,
                      promoted_object: null,
                      bid_strategy: null,
                    },
                    i.id,
                  )
                  .getValue();
              if (
                ((h = re == null ? void 0 : re.objective),
                (b = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                  h != null ? h : r("AdsAPIObjectives").NONE,
                  P,
                )),
                (z = re == null ? void 0 : re.buying_type),
                q == null && (q = re == null ? void 0 : re.bid_strategy),
                o("AdsCampaignRawSpecUtils").isAutomaticPlacements(J))
              )
                D = !0;
              else {
                var oe,
                  ae,
                  ie,
                  le,
                  se =
                    r("AdsAdAccountPublisherBlockListsProvider")()
                      .get(B)
                      .getValue() || [],
                  ue =
                    (oe = P.promoted_object) == null
                      ? void 0
                      : oe.object_store_url,
                  ce =
                    (ae =
                      (ie = P.promoted_object) == null ? void 0 : ie.page_id) !=
                    null
                      ? ae
                      : re == null || (le = re.promoted_object) == null
                        ? void 0
                        : le.page_id,
                  de = o(
                    "AdsPlacementEligibilityInfoUtils",
                  ).buildEligibilityInformationFromCampaignSpec(
                    P,
                    z != null ? z : r("AdsBuyingTypes").MIXED,
                    W != null ? W.capabilities : [],
                    h != null ? h : r("AdsAPIObjectives").NONE,
                    se,
                    ue,
                    ce,
                  );
                D = o("AdsPlacementAPISpecReaderUtils").isDefaultPlacements(de);
              }
              if (
                o("AdsOffsiteCLOUtil").isOffsiteCLOEligible(
                  re == null ? void 0 : re.objective,
                  P.optimization_goal,
                  b,
                )
              ) {
                var me, pe, _e, fe, ge;
                o("AdsOffsiteCLOUtil").logOffsiteCampaignPublished(
                  ne,
                  P.id,
                  m,
                  (me = P.promoted_object) == null ? void 0 : me.pixel_id,
                  (pe = P.promoted_object) == null
                    ? void 0
                    : pe.custom_event_type,
                  (_e = P.promoted_object) == null
                    ? void 0
                    : _e.lead_ads_custom_event_type,
                  B,
                  (fe = P.promoted_object) == null
                    ? void 0
                    : fe.lead_ads_offsite_conversion_type,
                  (ge = P.promoted_object) == null
                    ? void 0
                    : ge.lead_ads_form_event_source_type,
                );
              }
              if (
                o("LeadNurturingFeatureGating").shouldShowQualityVolumeDesign(
                  re == null ? void 0 : re.objective,
                  C,
                  m,
                  ((X = P.promoted_object) == null
                    ? void 0
                    : X.lead_ads_quality_volume_setting) != null,
                )
              ) {
                var he;
                o("AdsOffsiteCLOUtil").logLeadAdsQualityVolumeSettingPublished(
                  ne,
                  P.id,
                  m,
                  B,
                  (he = P.promoted_object) == null
                    ? void 0
                    : he.lead_ads_quality_volume_setting,
                );
              }
              if (
                o(
                  "AdsOnsiteCRMSingleEventOptimizationUtil",
                ).isSEOPublishLoggingEligible(
                  re == null ? void 0 : re.objective,
                  P == null ? void 0 : P.optimization_goal,
                  P == null || (Y = P.promoted_object) == null
                    ? void 0
                    : Y.lead_ads_form_event_source_type,
                )
              ) {
                var ye,
                  Ce,
                  be,
                  ve,
                  Se = o(
                    "AdsOnsiteCRMSingleEventOptimizationUtil",
                  ).getCRMEventName(
                    (ye = P.promoted_object) == null
                      ? void 0
                      : ye.custom_event_type,
                    (Ce = P.promoted_object) == null
                      ? void 0
                      : Ce.custom_event_str,
                  );
                o(
                  "AdsOnsiteCRMSingleEventOptimizationUtil",
                ).logSEOCampaignPublished(
                  ne,
                  P.id,
                  m,
                  (be = P.promoted_object) == null ? void 0 : be.pixel_id,
                  Se,
                  B,
                  (ve = P.promoted_object) == null
                    ? void 0
                    : ve.lead_ads_form_event_source_type,
                  null,
                );
              }
            }
            m
              ? o("AdsPELoggerLogDraftPublishWillCompleteStoreUtils").log(
                  "campaign_create_succeed",
                  babelHelpers.extends(
                    {
                      action_session_id: r("AdsPEUploadStore").getSessionID(),
                      ad_account_id_explicit: B,
                      buying_type: z,
                      campaign_destination_type: C,
                      campaign_group_id: N,
                      campaign_id: t,
                      event_source: r("AdsPEUploadStore").getPreviewSource(),
                      fragment_id: s,
                      immediate: l,
                      is_default_placements: D,
                      new_value: b,
                      meta_message: y,
                      optimization_goal: U,
                      object_creation_source: c,
                      objective: h,
                      page_types: g,
                      attribution_windows: [v, S],
                      rf_budget_value: R,
                      publisher_platforms: L,
                      facebook_positions: E,
                      messenger_positions: I,
                      whatsapp_positions: T,
                      instagram_positions: k,
                    },
                    p,
                    {
                      smart_promotion_type: A,
                      campaign_bid_strategy: q,
                      promoted_object_type_variation: G,
                      subsequent_data: JSON.stringify(
                        babelHelpers.extends(
                          {
                            includedCustomAudienceIDs: j,
                            excludedCustomAudienceIDs: K,
                          },
                          V,
                          H,
                          d,
                        ),
                      ),
                    },
                  ),
                  "campaign_create",
                )
              : o("AdsPELoggerLogDraftPublishWillCompleteStoreUtils").log(
                  "campaign_edit_succeed",
                  babelHelpers.extends(
                    {
                      action_session_id: r("AdsPEUploadStore").getSessionID(),
                      ad_account_id_explicit: B,
                      campaign_destination_type: C,
                      campaign_group_id: N,
                      campaign_id: t,
                      event_source: r("AdsPEUploadStore").getPreviewSource(),
                      fragment_id: s,
                      is_default_placements: D,
                      meta_message: y,
                      optimization_goal: U,
                      object_creation_source: c,
                    },
                    p,
                    {
                      smart_promotion_type: A,
                      campaign_bid_strategy: q,
                      publisher_platforms: L,
                      messenger_positions: I,
                      whatsapp_positions: T,
                      promoted_object_type_variation: G,
                      subsequent_data: JSON.stringify(
                        babelHelpers.extends(
                          {
                            includedCustomAudienceIDs: j,
                            excludedCustomAudienceIDs: K,
                          },
                          V,
                          H,
                          d,
                        ),
                      ),
                    },
                  ),
                  "campaign_edit",
                );
          } else {
            var Re = f.get(t);
            if (P != null) {
              var Le,
                Ee = P.campaign_id,
                ke = o("AdsPECampaignGroupSelectors")
                  .getCachedByFieldsSelector()(
                    Ee,
                    {
                      buying_type: null,
                      objective: null,
                      promoted_object: null,
                      bid_strategy: null,
                    },
                    i.id,
                  )
                  .getValue();
              if (
                ((h = ke == null ? void 0 : ke.objective),
                (b = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                  h != null ? h : r("AdsAPIObjectives").NONE,
                  P,
                )),
                ke &&
                  o("AdsOffsiteCLOUtil").isOffsiteCLOEligible(
                    h,
                    P.optimization_goal,
                    b,
                  ))
              ) {
                var Ie, Te, De, xe, $e;
                o("AdsOffsiteCLOUtil").logOffsiteCampaignPublished(
                  Ee,
                  P.id,
                  m,
                  (Ie = P.promoted_object) == null ? void 0 : Ie.pixel_id,
                  (Te = P.promoted_object) == null
                    ? void 0
                    : Te.custom_event_type,
                  (De = P.promoted_object) == null
                    ? void 0
                    : De.lead_ads_custom_event_type,
                  B,
                  (xe = P.promoted_object) == null
                    ? void 0
                    : xe.lead_ads_offsite_conversion_type,
                  ($e = P.promoted_object) == null
                    ? void 0
                    : $e.lead_ads_form_event_source_type,
                  Re == null ? void 0 : Re.errorMessage,
                );
              }
              if (
                ke &&
                o(
                  "AdsOnsiteCRMSingleEventOptimizationUtil",
                ).isSEOPublishLoggingEligible(
                  ke == null ? void 0 : ke.objective,
                  P == null ? void 0 : P.optimization_goal,
                  P == null || (Le = P.promoted_object) == null
                    ? void 0
                    : Le.lead_ads_form_event_source_type,
                )
              ) {
                var Pe,
                  Ne,
                  Me,
                  we,
                  Ae = o(
                    "AdsOnsiteCRMSingleEventOptimizationUtil",
                  ).getCRMEventName(
                    (Pe = P.promoted_object) == null
                      ? void 0
                      : Pe.custom_event_type,
                    (Ne = P.promoted_object) == null
                      ? void 0
                      : Ne.custom_event_str,
                  );
                o(
                  "AdsOnsiteCRMSingleEventOptimizationUtil",
                ).logSEOCampaignPublished(
                  Ee,
                  P.id,
                  m,
                  (Me = P.promoted_object) == null ? void 0 : Me.pixel_id,
                  Ae,
                  B,
                  (we = P.promoted_object) == null
                    ? void 0
                    : we.lead_ads_form_event_source_type,
                  Re == null ? void 0 : Re.errorMessage,
                );
              }
            }
            var Fe = o(
              "AdsPELoggerLogDraftPublishWillCompleteStoreUtils",
            ).getCampaignFailureDataForLogging(
              B,
              o(
                "AdsCampaignGroupCreationSourceForPlacement",
              ).normalizeCampaignGroupCreationSourceForPlacement(a),
              C,
              Re,
              s,
              t,
              N,
              l,
              D,
              y,
              h,
              g,
            );
            m
              ? o("AdsPELoggerLogDraftPublishWillCompleteStoreUtils").log(
                  "campaign_create_failed",
                  babelHelpers.extends({}, Fe, p, {
                    smart_promotion_type: A,
                    optimization_goal: U,
                    campaign_bid_strategy: q,
                    subsequent_data: JSON.stringify(
                      babelHelpers.extends({}, V, H, d),
                    ),
                    publisher_platforms: L,
                    messenger_positions: I,
                    whatsapp_positions: T,
                    promoted_object_type_variation: G,
                  }),
                  "campaign_create",
                )
              : o("AdsPELoggerLogDraftPublishWillCompleteStoreUtils").log(
                  "campaign_edit_failed",
                  babelHelpers.extends({}, Fe, p, {
                    smart_promotion_type: A,
                    optimization_goal: U,
                    campaign_bid_strategy: q,
                    subsequent_data: JSON.stringify(
                      babelHelpers.extends({}, V, H, d),
                    ),
                    publisher_platforms: L,
                    messenger_positions: I,
                    whatsapp_positions: T,
                    promoted_object_type_variation: G,
                  }),
                  "campaign_edit",
                );
          }
        }),
        u
      );
    };
    l.processCampaignFragments = e;
  },
  98,
);
