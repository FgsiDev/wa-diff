__d(
  "AdsUEditorCampaignWhatsAppMutators",
  [
    "AdCampaignDestination",
    "AdsAPIBillingEvents",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignMutatorUtils",
    "AdsCampaignRecordAccessors",
    "AdsInterfacesLogger",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignLeadAdsCLOMutators",
    "AdsUEditorCampaignMutators",
    "AdsUEditorMessagingDestinationUtils",
    "AdsWhatsAppFeatureGating",
    "AdsWhatsAppUtils",
    "CTWAAdsOptimizationStoreUtils",
    "CTXDefaultingStoreUtils",
    "ClickToMessageAdoptionPerformanceLongTermHoldout",
    "ClickToMessageCTXMDFeatureGating",
    "DayPartingUtils",
    "adsCampaignIsCampaignGroupBudget",
    "adsTargetingLocationEpdAreLocationsEU",
    "gkx",
    "immutable",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (t == null || t === e) return e;
      var a = o("AdsWhatsAppUtils").getIsSelectedPageMultiNumberBusiness(e, n),
        i = o("AdsWhatsAppUtils").getIsSelectedPageMultiNumberBusiness(t, n);
      if (i !== a) {
        var l = r("qex")._("4614") === !0;
        if (l) return t;
      }
      return e;
    }
    function s(t, n, a, i, l) {
      var s,
        c,
        d,
        m = u(a, i);
      m === null &&
        r("AdsInterfacesLogger").log({
          eventName: "ctwa_null_page_sales_outcome",
        });
      var p =
          (s = a.promoted_object) == null ? void 0 : s.page_whatsapp_number_id,
        _ = e(p, l, m),
        f = o("AdsWhatsAppUtils").getIsSelectedPageMultiNumberBusiness(
          _,
          m,
          (c = a.promoted_object) == null
            ? void 0
            : c.whats_app_business_phone_number_id,
        ),
        g = o(
          "CTXDefaultingStoreUtils",
        ).getDefaultOptimizationGoalByObjectiveAndPageID(
          n,
          r("AdCampaignDestination").WHATSAPP,
          m == null ? void 0 : m.id,
          a.bid_strategy,
        );
      switch (n) {
        case r("AdsAPIObjectives").LINK_CLICKS:
          d =
            o(
              "AdsWhatsAppFeatureGating",
            ).isConversationEnabledForTrafficObjectiveWhatsappForNonEU(
              t,
              n,
              f,
            ) && f
              ? r("AdsAPIOptimizationGoals").CONVERSATIONS
              : r("AdsAPIOptimizationGoals").LINK_CLICKS;
          break;
        case r("AdsAPIObjectives").CONVERSIONS:
        case r("AdsAPIObjectives").OUTCOME_SALES:
          if (g != null) {
            var h = g[0],
              y = g[1];
            (o("CTWAAdsOptimizationStoreUtils").logCTWADFODefaultingEvent(
              m == null ? void 0 : m.id,
              t,
              n,
              h,
              y,
            ),
              (d = h));
          } else d = r("AdsAPIOptimizationGoals").CONVERSATIONS;
          break;
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          o("ClickToMessageCTXMDFeatureGating").isCtxmdLeadsObjectiveEnabled(
            !1,
          ) &&
          o(
            "AdsUEditorMessagingDestinationUtils",
          ).isMultiDestinationWithWhatsApp(a.destination_type)
            ? (d = r("AdsAPIOptimizationGoals").CONVERSATIONS)
            : g != null
              ? (d = g[0])
              : a.optimization_goal ===
                  r("AdsAPIOptimizationGoals").LEAD_GENERATION
                ? (o("CTWAAdsOptimizationStoreUtils").logCTWADFODefaultingEvent(
                    m == null ? void 0 : m.id,
                    t,
                    n,
                    r("AdsAPIOptimizationGoals").LEAD_GENERATION,
                    "ctwa_lo_reverted_no_default_config",
                  ),
                  (d = r("gkx")("16385")
                    ? r("AdsAPIOptimizationGoals").LEAD_GENERATION
                    : r("AdsAPIOptimizationGoals").CONVERSATIONS))
                : (d = r("AdsAPIOptimizationGoals").CONVERSATIONS);
          break;
        default: {
          var C, b;
          o(
            "ClickToMessageAdoptionPerformanceLongTermHoldout",
          ).isAccountInEpdJurisdiction() ||
          o(
            "AdsWhatsAppFeatureGating",
          ).isWhatsappDestinationRestrictedToLinkClicks(t) ||
          o(
            "adsTargetingLocationEpdAreLocationsEU",
          ).adsTargetingLocationEpdOrTba(
            (C = a.targeting) == null || (C = C.geo_locations) == null
              ? void 0
              : C.toJS(),
          ) ||
          ((m == null ? void 0 : m.id) != null &&
            ((b = i(m == null ? void 0 : m.id)) == null
              ? void 0
              : b.is_messaging_light_switch_enabled) === !0)
            ? (d = o(
                "AdsWhatsAppFeatureGating",
              ).isEPDAdvertiserInConversationsExperiment(a.destination_type)
                ? r("AdsAPIOptimizationGoals").CONVERSATIONS
                : r("AdsAPIOptimizationGoals").LINK_CLICKS)
            : (n === r("AdsAPIObjectives").MESSAGES ||
                  n === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) &&
                o("AdsWhatsAppFeatureGating").isWaBusinessUpsellEligible(
                  t,
                  n,
                ) &&
                (m == null ? void 0 : m.has_whatsapp_number) === !0
              ? f
                ? g != null
                  ? (d = g[0])
                  : (d = r("AdsAPIOptimizationGoals").CONVERSATIONS)
                : (d = r("AdsAPIOptimizationGoals").LINK_CLICKS)
              : (d = o(
                  "AdsWhatsAppFeatureGating",
                ).shouldDisableConversationsForNonWASMBAdvertisers(n, f)
                  ? r("AdsAPIOptimizationGoals").LINK_CLICKS
                  : r("AdsAPIOptimizationGoals").CONVERSATIONS);
        }
      }
      if (
        r("adsCampaignIsCampaignGroupBudget")(a.daily_budget, a.lifetime_budget)
      ) {
        var v;
        return o("AdsMutators").chain(
          (v = r("AdsCampaignRecordAccessors")).billing_event.set(
            r("AdsAPIBillingEvents").IMPRESSIONS,
          ),
          v.optimization_goal.set(d),
          v.bid_amount.delete,
          v.cost_bidding_mode.delete,
        )(a);
      }
      return o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").is_autobid.set(!0),
        r("AdsCampaignRecordAccessors").billing_event.set(
          r("AdsAPIBillingEvents").IMPRESSIONS,
        ),
        r("AdsCampaignRecordAccessors").optimization_goal.set(d),
        r("AdsCampaignRecordAccessors").bid_amount.delete,
        r("AdsCampaignRecordAccessors").cost_bidding_mode.delete,
      )(a);
    }
    function u(e, t) {
      var n = r("AdsCampaignRecordAccessors").promoted_object.page_id.get(e);
      return n == null ? null : t(n);
    }
    function c(e, t) {
      if (
        r("adsCampaignIsCampaignGroupBudget")(t.daily_budget, t.lifetime_budget)
      )
        return t;
      var n = t.pacing_type,
        a = !1;
      return r("AdsCampaignRecordAccessors").pacing_type.set(
        r("immutable").List(
          o("DayPartingUtils").setPacingType(
            Array.isArray(n) ? n.slice() : [],
            e,
            a,
          ),
        ),
        t,
      );
    }
    function d(e, t, n, a, i, l, u, d, m) {
      return (
        u === void 0 && (u = !0),
        d === void 0 && (d = r("AdCampaignDestination").WHATSAPP),
        o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").destination_type.set(d),
          function (e) {
            return i !== !0 && n !== r("AdsAPIObjectives").OUTCOME_LEADS
              ? r("AdsCampaignRecordAccessors").promoted_object.delete(e)
              : o(
                  "AdsUEditorCampaignLeadAdsCLOMutators",
                ).clearLeadAdsCLOConversionFields(e);
          },
          r("AdsCampaignRecordAccessors").targeting.is_whatsapp_destination_ad
            .delete,
          function (e) {
            return s(t, n, e, l, m);
          },
          function (e) {
            return o("AdsCampaignMutatorUtils").setDefaultBudgetForCampaign(
              t,
              e,
              n === r("AdsAPIObjectives").OUTCOME_LEADS
                ? r("AdsAPIObjectives").LEAD_GENERATION
                : r("AdsAPIObjectives").MESSAGES,
              r("AdsPromotedObjectTypes").WHATSAPP,
              n,
            );
          },
          function (e) {
            return u === !0
              ? o(
                  "AdsCampaignMutatorUtils",
                ).setCountryForMessagingPromotedObjects(e, t)
              : e;
          },
          function (e) {
            return c(!1, e);
          },
          function (e) {
            return o("AdsPlacementReducerUtils").resetPlacement(e, a);
          },
          function (e) {
            return o("AdsUEditorCampaignMutators").updateConversionWindowLength(
              e,
              n,
              r("AdsPromotedObjectTypes").WHATSAPP,
            );
          },
        )(e)
      );
    }
    ((l.setOptimizationForWhatsAppPromotedObject = s),
      (l.resetPacing = c),
      (l.setWhatsAppPromotedObjectTypeForMessages = d));
  },
  98,
);
