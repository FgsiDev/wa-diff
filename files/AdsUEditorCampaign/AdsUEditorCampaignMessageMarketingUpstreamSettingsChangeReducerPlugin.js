__d(
  "AdsUEditorCampaignMessageMarketingUpstreamSettingsChangeReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsAdgroupStoreUtils",
    "AdsCampaignPlacementAddToCustomizationDataAction",
    "AdsCampaignRecordAccessors",
    "AdsDataAtom",
    "AdsMessageMarketingCompatibleSettingsPluginType",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingClearSettingsAction",
    "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignMessageMarketingSetOrClearSettingsFromUpstreamChangeActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "adsAdvertiserProfileMessageMarketingActivationStatusSelector",
    "adsCampaignMessageMarketingLiquidityDynamicDefaultsBootloadedSelector",
    "adsUEditorMessageMarketingDeliveryDataSelector",
    "adsUEditorSelectedCampaignsAreEligibleForMarketingMessagesSelector",
    "applyMessageMarketingDefaultsCampaignMutator",
    "areUpstreamSettingsMessageMarketingCompatible",
    "clearMessageMarketingCampaignMutator",
    "cr:38060",
    "gkx",
    "hasMessageMarketingPhoneNumberSelected",
    "immutable",
    "isMarketingMessagesBlockedByTrafficLpvTrust",
    "isMessageMarketingEnabledFromCampaign",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            activationStatus: r(
              "adsAdvertiserProfileMessageMarketingActivationStatusSelector",
            ),
            campaignGroupMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
            messageMarketingDefaultData: r(
              "adsCampaignMessageMarketingLiquidityDynamicDefaultsBootloadedSelector",
            ),
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
            upstreamSettingsForSelectedCampaignIDs: r(
              "adsUEditorSelectedCampaignsAreEligibleForMarketingMessagesSelector",
            ),
            deliveryDataMap: r(
              "adsUEditorMessageMarketingDeliveryDataSelector",
            ),
          },
          function (e, t, n) {
            var a,
              i,
              l,
              s,
              d = n.activationStatus,
              m = n.campaignGroupMap,
              p = n.deliveryDataMap,
              _ = n.eligibilityInformation,
              f = n.messageMarketingDefaultData,
              g = n.upstreamSettingsForSelectedCampaignIDs,
              h = u(g, t.changedSettings),
              y =
                (a =
                  (i = t.overrideActivationStatus) != null
                    ? i
                    : d.getValue()) != null
                  ? a
                  : !1,
              C = c(e, t, _, f, y, h, p),
              b = (l = t.changedSettings) == null ? void 0 : l.optimizationGoal,
              v = b != null && b !== r("AdsAPIOptimizationGoals").CONVERSATIONS,
              S = b != null && b !== r("AdsAPIOptimizationGoals").QUALITY_CALL,
              R =
                ((s = t.changedSettings) == null
                  ? void 0
                  : s.promotedObjectType) != null;
            return (
              (v || S || R) &&
                (C = o("AdsMutators").mutateEach(
                  C,
                  t.campaignIDs,
                  function (e, t) {
                    var n = r("AdsCampaignRecordAccessors").daily_budget.get(e),
                      a = m.get(t),
                      i = a == null ? void 0 : a.daily_budget,
                      l =
                        (n != null && Number(n) > 0) ||
                        (i != null && Number(i) > 0);
                    if (!l) {
                      var s =
                        (a == null ? void 0 : a.budget_strategy) ===
                        "CAMPAIGN_FLEX_BUDGET";
                      if (s) {
                        var u = r(
                          "AdsCampaignRecordAccessors",
                        ).adset_schedule.get(e);
                        if (u != null && u.size > 0) {
                          var c,
                            d =
                              o(
                                "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
                              ).enableCTXAMBusinessHourDaypartingOrganicHours(
                                !1,
                              ) &&
                              o(
                                "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
                              ).eligibleForCTXAMBusinessHourDaypartingForL2(
                                a == null ? void 0 : a.objective,
                                !1,
                                "lifetime",
                                o(
                                  "AdsAPICampaignRecordUtils",
                                ).getDestinationType(e),
                                (c = e.promoted_object) == null
                                  ? void 0
                                  : c.page_id,
                                b,
                              );
                          if (!d)
                            return o("AdsMutators").chain(
                              r(
                                "AdsCampaignRecordAccessors",
                              ).adset_schedule.set(r("immutable").List()),
                              r("AdsCampaignRecordAccessors").pacing_type.set(
                                r("immutable").List(["standard"]),
                              ),
                            )(e);
                        }
                      }
                      return e;
                    }
                    var p = r("AdsCampaignRecordAccessors").adset_schedule.get(
                      e,
                    );
                    return p != null && p.size > 0
                      ? o("AdsMutators").chain(
                          r("AdsCampaignRecordAccessors").adset_schedule.set(
                            r("immutable").List(),
                          ),
                          r("AdsCampaignRecordAccessors").pacing_type.set(
                            r("immutable").List(["standard"]),
                          ),
                        )(e)
                      : e;
                  },
                )),
              C
            );
          },
          [
            r(
              "AdsUEditorCampaignMessageMarketingSetOrClearSettingsFromUpstreamChangeActionFlux",
            ).actionType,
          ],
        ),
      };
    function u(e, t) {
      return new Map(
        Array.from(e, function (e) {
          var n = e[0],
            r = e[1];
          return r == null ? [n, null] : [n, babelHelpers.extends({}, r, t)];
        }),
      );
    }
    function c(e, t, n, a, i, l, s) {
      var u = t.campaignIDs.length > 1;
      return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
        var c = l.get(e.id);
        return o(
          "areUpstreamSettingsMessageMarketingCompatible",
        ).areUpstreamSettingsMessageMarketingCompatible(
          c,
          o("AdsMessageMarketingCompatibleSettingsPluginType")
            .AdsMessageMarketingCompatibleSettingsChannelType.WHATSAPP,
        ) &&
          i &&
          !o(
            "isMarketingMessagesBlockedByTrafficLpvTrust",
          ).isMarketingMessagesBlockedByTrafficLpvTrust(
            c == null ? void 0 : c.optimizationGoal,
            n.isBusinessHighTrustForMM,
          )
          ? p(t, e, n, a, u, s)
          : m(e) && r("gkx")("22351")
            ? e
            : (f(e, t.hostID, u),
              r("clearMessageMarketingCampaignMutator")(e, n));
      });
    }
    function d(e) {
      var t,
        n =
          ((t = e.targeting.subscriber_universe) == null ||
          (t = t.whatsapp_subscriber_pool) == null
            ? void 0
            : t.id) != null;
      return (
        o(
          "isMessageMarketingEnabledFromCampaign",
        ).isMessageMarketingEnabledFromCampaign(e) &&
        (n ||
          o(
            "hasMessageMarketingPhoneNumberSelected",
          ).hasMessageMarketingPhoneNumberSelected(e))
      );
    }
    function m(e) {
      var t,
        n =
          ((t = e.targeting.subscriber_universe) == null ||
          (t = t.whatsapp_subscriber_pool) == null
            ? void 0
            : t.id) != null;
      return (
        !o(
          "isMessageMarketingEnabledFromCampaign",
        ).isMessageMarketingEnabledFromCampaign(e) &&
        !n &&
        !o(
          "hasMessageMarketingPhoneNumberSelected",
        ).hasMessageMarketingPhoneNumberSelected(e)
      );
    }
    function p(e, t, n, a, i, l) {
      if (d(t)) return t;
      var s = r("applyMessageMarketingDefaultsCampaignMutator")(
        t,
        n,
        a,
        i,
        e.selectedSubscriberPoolID,
        e.overrideActivationStatus,
      );
      return (
        o(
          "isMessageMarketingEnabledFromCampaign",
        ).isMessageMarketingEnabledFromCampaign(s) && _(s, e.hostID, l, n),
        s
      );
    }
    function _(t, a, l, s) {
      var u = l == null ? void 0 : l.get(t.id);
      (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
        r("promiseDone")(
          o("AdsAdgroupStoreUtils").loadAdgroupIDsInCampaigns([t.id]),
          function (o) {
            (n("cr:38060").dispatch(
              {
                adgroupIDs: o,
                hostID: a,
                deliveryWhatsAppNumberID:
                  u == null ? void 0 : u.phone_number_id,
              },
              {
                line: "366",
                module:
                  "AdsUEditorCampaignMessageMarketingUpstreamSettingsChangeReducerPlugin.js",
                moduleID: i.id,
              },
            ),
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  r(
                    "AdsCampaignPlacementAddToCustomizationDataAction",
                  ).dispatch(
                    {
                      adgroupIDs: o,
                      campaignIDs: [t.id],
                      eligibilityInformation: s,
                      positionKey: "whatsapp/marketing_messages",
                      platformKey: "whatsapp",
                    },
                    {
                      line: "374",
                      module:
                        "AdsUEditorCampaignMessageMarketingUpstreamSettingsChangeReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
              ));
          },
        );
      });
    }
    function f(t, n, a) {
      (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
        r("promiseDone")(
          o("AdsAdgroupStoreUtils").loadAdgroupIDsInCampaigns([t.id]),
          function (e) {
            r("AdsUEditorAdgroupMessageMarketingClearSettingsAction").dispatch(
              { adgroupIDs: e, hostID: n, isBulkEdit: a },
              {
                line: "396",
                module:
                  "AdsUEditorCampaignMessageMarketingUpstreamSettingsChangeReducerPlugin.js",
                moduleID: i.id,
              },
            );
          },
        );
      });
    }
    var g = s;
    l.default = g;
  },
  98,
);
