__d(
  "adsCampaignSelector_LEGACY",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAccountStore",
    "AdsAdgroupCombinedStore",
    "AdsAdgroupDraftFragmentStore",
    "AdsBiddingOptimizationUtils",
    "AdsCampaignCombinedStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupCombinedStore",
    "AdsDMLQueryHandler_DerivedDataBase",
    "AdsDataAtom",
    "AdsFrequencyControlEditorUtils",
    "AdsLoadObjectUtils",
    "AdsLocationBreakdownStore",
    "AdsPlacePageSetInfoStore",
    "AdsPredictionObjectStore",
    "AdsReachFrequencyDeliveryOptions",
    "AdsReachFrequencyUISelector",
    "LoadObject",
    "adsCampaignGetAllowedStatusTransitions",
    "adsCampaignGetBudgetAndType",
    "adsCampaignGetTimeCompletePercent",
    "adsCreateKeyedStoreSelector",
    "adsGetDateFromAdObject",
    "adsOriginalCampaignSelector",
    "adsPELockedAndPublishingSelectors",
    "adsTargetingLocationGetTargetedCountryFromCampaign",
    "areEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("LoadObject").withValue([], { creatorModuleID: i.id });
    function c(e) {
      return r("adsCampaignGetBudgetAndType")(
        e.daily_budget,
        e.lifetime_budget,
      );
    }
    function d(e, t) {
      var n = c(e);
      if (r("AdsCampaignDraftFragmentStore").isNew(e.id)) return n.budget;
      var o = c(t);
      if (o.mode !== n.mode) return e.lifetime_budget;
      var a, i, l;
      return (
        Number((a = e.budget_remaining) != null ? a : 0) +
        ((i = e.lifetime_budget) != null ? i : 0) -
        ((l = t.lifetime_budget) != null ? l : 0)
      );
    }
    function m(e, t) {
      var n = e.creative_sequence;
      return !!(
        (n && n.length > 0) ||
        t ===
          o("AdsReachFrequencyDeliveryOptions").AdsReachFrequencyDeliveryOptions
            .SEQUENCING
      );
    }
    function p(e, t) {
      var n = e.time_based_ad_rotation_intervals;
      return (
        (n && n.length > 0) ||
        t ===
          o("AdsReachFrequencyDeliveryOptions").AdsReachFrequencyDeliveryOptions
            .TIME_BASED
      );
    }
    var _ = r("adsCreateKeyedStoreSelector")(
        function () {
          return [
            r("AdsAdgroupDraftFragmentStore"),
            r("AdsCampaignDraftFragmentStore"),
            r("AdsCampaignGroupCombinedStore"),
          ]
            .concat(
              r("adsOriginalCampaignSelector").getStores(),
              [r("AdsLocationBreakdownStore"), r("AdsPredictionObjectStore")],
              o(
                "AdsReachFrequencyUISelector",
              ).getReachFrequencyAdDeliveryMethod.getStores(),
              [
                r("AdsAdgroupCombinedStore"),
                r("AdsCampaignCombinedStore"),
                r("AdsPlacePageSetInfoStore"),
                r("AdsAccountStore"),
              ],
              o(
                "adsPELockedAndPublishingSelectors",
              ).adsPELockedAndPublishingSelector.getStores(),
              o(
                "adsPELockedAndPublishingSelectors",
              ).adsPELockedIDsSelector.getStores(),
              o(
                "adsPELockedAndPublishingSelectors",
              ).adsPEPublishingIDsSelector.getStores(),
            )
            .filter(Boolean);
        },
        {
          getKey: function (t) {
            return t;
          },
          getInputData: function (n) {
            (e || (e = r("AdsDataAtom"))).isDispatching() &&
              (e || (e = r("AdsDataAtom"))).waitFor([
                r("AdsCampaignCombinedStore").getDispatchToken(),
                r("AdsAccountStore").getDispatchToken(),
              ]);
            var t = r("AdsCampaignCombinedStore").getObject(n),
              a = r("adsOriginalCampaignSelector")(n),
              i = r("AdsAccountStore").getSelectedAccount(),
              l = t.map(function (e) {
                var t = e.campaign_id;
                return r("AdsCampaignGroupCombinedStore").getObject(t);
              }),
              s = o(
                "AdsReachFrequencyUISelector",
              ).getReachFrequencyAdDeliveryMethod(n),
              u = t.getValue(),
              c = u == null ? void 0 : u.rf_prediction_id,
              d = null,
              m = !1;
            if (c != null) {
              var p = r("AdsPredictionObjectStore").get(c);
              (p.hasValue() && (d = p.getValueEnforcing()),
                p.isLoading() && (m = !0));
            }
            var _ = o(
                "adsPELockedAndPublishingSelectors",
              ).adsPEPublishingIDsSelector(),
              f = o(
                "adsPELockedAndPublishingSelectors",
              ).adsPELockedIDsSelector();
            return {
              accountLoadObject: i,
              campaignGroupLoadObject: l,
              campaignLoadObject: t,
              deliveryMethodInUI: s,
              isPredictionLoading: m,
              lockedIDs: f,
              originalCampaignLoadObject: a,
              prediction: d,
              publishingIDs: _,
            };
          },
          computeResult: function (t, n) {
            var e = n.accountLoadObject,
              a = n.campaignGroupLoadObject,
              i = n.campaignLoadObject,
              l = n.deliveryMethodInUI,
              s = n.isPredictionLoading,
              _ = n.originalCampaignLoadObject,
              f = n.prediction;
            return o("AdsLoadObjectUtils")
              .all([e, a, i, _])
              .map(function (e) {
                var t,
                  n,
                  a = e[0],
                  i = e[1],
                  _ = e[2],
                  g = e[3],
                  h = a.timezone_id,
                  y = c(_),
                  C = d(_, g),
                  b = r("adsCampaignGetTimeCompletePercent")(g, h),
                  v = i.buying_type,
                  S = i.objective,
                  R = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    S,
                    _,
                  );
                return {
                  attributionSpecs: _.attribution_spec || [],
                  allowedStatuses: r("adsCampaignGetAllowedStatusTransitions")(
                    r("AdsCampaignDraftFragmentStore").isNew(_.id),
                    _.status,
                  ),
                  availableBiddingOptions: o(
                    "AdsBiddingOptimizationUtils",
                  ).getAvailableBiddingOptions(
                    a.capabilities,
                    S,
                    R,
                    i.buying_type,
                    _.optimization_goal,
                    _.billing_event,
                    a,
                    _,
                    o("AdsAPICampaignGroupRecordUtils").hasBudget_LEGACY(i),
                  ),
                  availableBiddingStrategyAndConstraints: o(
                    "AdsBiddingOptimizationUtils",
                  ).getBiddingStrategyAndBiddingConstraints(
                    _.optimization_goal,
                    o("AdsAPICampaignGroupRecordUtils").hasBudget_LEGACY(i),
                  ),
                  boostedComponentProduct: i.boosted_component_product,
                  budget: y.budget,
                  budget_mode: y.mode,
                  budgetRemaining: C,
                  buyingType: v,
                  completePercent: b,
                  createdTimeString: _.created_time || "",
                  creativeSequenceEnabled: m(_, l),
                  endDate: r("adsGetDateFromAdObject")(_.end_time, h),
                  endTimeString: _.end_time,
                  frequencyInterval: o(
                    "AdsFrequencyControlEditorUtils",
                  ).getUniformFrequencyInterval(_.frequency_control_specs),
                  id: _.id,
                  ineligibleOptimizations: u,
                  isLocked: o("adsPELockedAndPublishingSelectors")
                    .adsPELockedAndPublishingSelector()
                    .has(_.id),
                  isPredictionLoading: s,
                  maxFrequency: o(
                    "AdsFrequencyControlEditorUtils",
                  ).getUniformMaxFrequency(_.frequency_control_specs),
                  objective: S,
                  optimizationEvent:
                    (t = _.promoted_object) == null
                      ? void 0
                      : t.custom_event_type,
                  optimizationGoal: _.optimization_goal,
                  optimizationGoalBidControl: o(
                    "AdsBiddingOptimizationUtils",
                  ).getBidControlType(
                    a.capabilities,
                    S,
                    R,
                    i.buying_type,
                    _.optimization_goal,
                    _.billing_event,
                    _,
                  ),
                  pageID: (n = _.promoted_object) == null ? void 0 : n.page_id,
                  pausePeriods: f ? f.parsed_pause_periods : null,
                  startDate: r("adsGetDateFromAdObject")(_.start_time, h),
                  startTimeString: _.start_time,
                  targetedCountry: r(
                    "adsTargetingLocationGetTargetedCountryFromCampaign",
                  )(_),
                  timeBasedAdRotationEnabled: p(_, l),
                  timezoneID: h,
                  updatedTimeString: _.updated_time,
                };
              });
          },
          areInputsEqual: function (t, n) {
            return (s || (s = r("areEqual")))(t, n);
          },
        },
      ),
      f = o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(function (e) {
        return _.getStores(e);
      }, _);
    ((l.adsCampaignSelector_LEGACY = _), (l.dmlAdsCampaignSelector_LEGACY = f));
  },
  98,
);
