__d(
  "AdsUEditorCampaignSetDeliveryReducerPlugin",
  [
    "AdsAPICampaignPaths",
    "AdsAPICampaignRecordUtils",
    "AdsBudgetScalingMutationUtils",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsDeliveryPaths",
    "AdsEmptyValue",
    "AdsMixedValue",
    "AdsMutators",
    "AdsPCAConsolidationUtils",
    "AdsUECampaignIncrementalAttributionUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetDeliveryActionFlux",
    "AdsUniformValue",
    "AdsValueGkUtils",
    "areEqual",
    "getByPath",
    "shouldShowVARFieldOnCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "id",
      u = "objective",
      c = "optimization_goal",
      d = "pacing_type",
      m = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            campaignGroups: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
          },
          function (t, n, a) {
            var i = n.campaignIDs,
              l = n.campaignIDsToUpdate,
              m = n.deliverySpec,
              _ = n.oldBulkSpec;
            if (!m || !i || !l || !_) return t;
            var f = m[s].getValues().reduce(function (e, t, n) {
                return e.set(t, m[d] != null ? m[d].getValueForIndex(n) : null);
              }, new Map()),
              g = [],
              h = o("AdsValueGkUtils").isAccountEligibleForVAR();
            h &&
              (g = m[s].getValues().filter(function (e, n) {
                var r = t.get(e);
                if (!r || r.isLoading()) return !1;
                var a = m[u].getValueForIndex(n),
                  i = m[c].getValueForIndex(n),
                  l = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    a,
                    r == null ? void 0 : r.getValue(),
                  ),
                  s = o(
                    "AdsAPICampaignRecordUtils",
                  ).getDerivedPromotedObjectTypeWithVariation(
                    r == null ? void 0 : r.getValue(),
                  );
                return !o(
                  "shouldShowVARFieldOnCampaign",
                ).shouldShowVARFieldOnCampaign(a, l, s, i, !1);
              }));
            var y = m[s].getValues().filter(function (e, t) {
                return !o("AdsPCAConsolidationUtils")
                  .getEligibleOptimizationGoalsForOmnichannel()
                  .includes(m[c].getValueForIndex(t));
              }),
              C = o("AdsMutators").mutateEach(t, l, function (t) {
                var n,
                  i,
                  l,
                  s = t;
                r("AdsDeliveryPaths").forEach(function (t) {
                  var n;
                  if (t !== r("AdsAPICampaignPaths").PACING_TYPE) {
                    var o =
                        r("getByPath")(m, t) || r("AdsEmptyValue").instance(),
                      a = r("getByPath")(_, t) || r("AdsEmptyValue").instance();
                    if (
                      o instanceof r("AdsUniformValue") &&
                      !(
                        !(a instanceof r("AdsMixedValue")) &&
                        (e || (e = r("areEqual")))(a.getValue(), o.getValue())
                      )
                    ) {
                      var i = (n = o.getValue()) != null ? n : null;
                      s = s.setIn(t, i);
                    }
                  }
                });
                var u = m[d];
                if (u instanceof r("AdsUniformValue")) {
                  var c,
                    p = (c = u.getValue()) != null ? c : null;
                  s = r("AdsCampaignRecordAccessors").pacing_type.set(p, s);
                } else
                  u instanceof r("AdsMixedValue") &&
                    (s = r("AdsCampaignRecordAccessors").pacing_type.set(
                      f.get(s.id),
                      s,
                    ));
                (g.includes(s.id) &&
                  ((s = r(
                    "AdsCampaignRecordAccessors",
                  ).value_rule_set_id.delete(s)),
                  (s = r(
                    "AdsCampaignRecordAccessors",
                  ).value_adjustment_rule_collection_id.delete(s)),
                  (s = r(
                    "AdsCampaignRecordAccessors",
                  ).value_rules_entry_point.delete(s))),
                  y.includes(s.id) &&
                    ((n = s.promoted_object) == null
                      ? void 0
                      : n.omnichannel_object) != null &&
                    s.promoted_object.variation ===
                      "PRODUCT_SET_AND_OMNICHANNEL" &&
                    (s = o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").promoted_object
                        .omnichannel_object.delete,
                    )(s)));
                var h = r("AdsCampaignDraftFragmentStore").isNew(s.id);
                if (s.is_incremental_attribution_enabled) {
                  var C,
                    b,
                    v =
                      (C = a.campaignGroups.get(s.id)) == null
                        ? void 0
                        : C.bid_strategy,
                    S = o(
                      "AdsUECampaignIncrementalAttributionUtils",
                    ).isValidBidForIncrementalAttribution(
                      s.bid_amount,
                      (b = s.bid_strategy) != null ? b : v,
                    ),
                    R = o(
                      "AdsUECampaignIncrementalAttributionUtils",
                    ).isValidOptimizationGoalForIncrementalAttribution(
                      s.optimization_goal,
                    );
                  h &&
                    (!S || !R) &&
                    (s = r(
                      "AdsCampaignRecordAccessors",
                    ).is_incremental_attribution_enabled.set(!1, s));
                }
                return (
                  (s = o(
                    "AdsBudgetScalingMutationUtils",
                  ).maybeClearCampaignBudgetScalingForBidStrategy(
                    s,
                    (i = s.bid_strategy) != null
                      ? i
                      : (l = a.campaignGroups.get(s.id)) == null
                        ? void 0
                        : l.bid_strategy,
                  )),
                  s
                );
              });
            return ((C = p(C, a, _, m, i, l)), C);
          },
          [o("AdsUEditorCampaignSetDeliveryActionFlux").actionType],
        ),
      },
      p = function (t, n, a, i, l, s) {
        var e = n.campaignGroups,
          u = i[c],
          d = a[c];
        return l.length === s.length ||
          !(u instanceof r("AdsUniformValue")) ||
          (!(d instanceof r("AdsMixedValue")) && d.getValue() === u.getValue())
          ? t
          : o("AdsMutators").mutateEach(t, l, function (t, n) {
              var r = e.get(n);
              return r == null || t.bid_strategy != null
                ? t
                : o(
                    "AdsCampaignGroupBudgetMutationUtils",
                  ).updateBiddingFieldsWhenCampaignBudgetEnabled(t);
            });
      },
      _ = m;
    l.default = _;
  },
  98,
);
