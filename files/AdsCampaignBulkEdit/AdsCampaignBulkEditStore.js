__d(
  "AdsCampaignBulkEditStore",
  [
    "invariant",
    "AdsAPICampaignPaths",
    "AdsAPIObjectives",
    "AdsAccountStore",
    "AdsBaseBulkEditStore",
    "AdsBudgetScalingMutationUtils",
    "AdsBulkEditCampaignChangeDeliveryDataActionFlux",
    "AdsBulkEditChangeAllCampaignBidAmountsDataActionFlux",
    "AdsBulkEditChangeAllCampaignBidConstraintsDataActionFlux",
    "AdsBulkEditChangeBroadGeoTargetingAutomationDataActionFlux",
    "AdsBulkEditChangeBudgetDataActionFlux",
    "AdsBulkEditChangeBudgetScalingDataActionFlux",
    "AdsBulkEditChangeCampaignSpendLimitActionFlux",
    "AdsBulkEditChangeDetailedTargetingDataActionFlux",
    "AdsBulkEditChangeDevicePlatformsActionFlux",
    "AdsBulkEditChangeFrequencyControlDataActionFlux",
    "AdsBulkEditChangeGeoLocationDataActionFlux",
    "AdsBulkEditChangeMaxOsVersionActionFlux",
    "AdsBulkEditChangeMinOsVersionActionFlux",
    "AdsBulkEditChangeSavedAudienceDataActionFlux",
    "AdsBulkEditChangeScheduleTimeDataActionFlux",
    "AdsBulkEditChangeTargetingDataActionFlux",
    "AdsBulkEditClearCampaignSpendLimitsActionFlux",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditSetValueAdjustmentRuleCollectionIDActionFlux",
    "AdsBulkEditSources",
    "AdsBulkEditStoreUtils",
    "AdsBulkEditUtils",
    "AdsCBOUpdateCampaignBulkEditPixelIDActionFlux",
    "AdsCampaignBulkEditActionHandlersMutators",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGroupBidStrategyInstantPublishApplyChangesDataActionFlux",
    "AdsCampaignGroupBudgetCrossLevelChangeBidStrategyAndTotalBudgetActionFlux",
    "AdsCampaignRecordAccessors",
    "AdsCommonTargetingApiTransformer",
    "AdsCommonTargetingProperties",
    "AdsDataAtom",
    "AdsDeliveryPaths",
    "AdsEditingCampaignEditorContext",
    "AdsEmptyValue",
    "AdsPECampaignSelectors",
    "AdsRegulatedCategory",
    "AdsSelectorUtils",
    "AdsTargetingAudienceFairnessUtils",
    "AdsUEditorCampaignBulkEditApplyChangesActionFlux",
    "AdsUEditorCampaignBulkEditInstantPublishApplyChangesActionFlux",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetFrequencyControlSpecReducerUtils",
    "AdsUEditorCampaignSetGeneralTargetingReducerUtils",
    "AdsUEditorCampaignSetSavedAudienceReducerUtils",
    "AdsUniformValue",
    "AdsUserOSUtils",
    "AppAdsConfig.experimental",
    "DayPartingUtils",
    "IOS14Utils",
    "IsAppAdUtils",
    "MarketingMessagesGKUtils",
    "adsBudgetScalingGKUtils",
    "adsBulkEditCampaignPublishedStatusSelector",
    "adsCampaignMessageMarketingLiquidityDynamicDefaultsBootloadedSelector",
    "adsDSABeneficiaryAndPayorAutofillValuesSelector",
    "adsUEditorSelectedCampaignGroupsSelector",
    "adsUEditorSelectedCampaignsSelector",
    "applyMessageMarketingDefaultsCampaignMutator",
    "areEqual",
    "clearMessageMarketingCampaignMutator",
    "getByPath",
    "immutable",
    "isFalsey",
    "isTruthy",
    "maybeUpdateCampaignDSASpec",
    "maybeUpdateCampaignRegulationsSpec",
    "whitelistObjectKeys",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = r("immutable").Map({
        BILLING_EVENT: ["billingEvent"],
        OPTIMIZATION_GOAL: ["optimizationGoal"],
        DELIVERY_TYPE: ["deliveryType"],
        BID_STRATEGY: [
          "bidStrategy",
          "bidAmount",
          "bidConstraints",
          "isAutobid",
          "isAveragePricePacing",
        ],
      }),
      p = {
        ageMax: (d = r("AdsAPICampaignPaths")).TARGETING.AGE_MAX,
        ageMin: d.TARGETING.AGE_MIN,
        ageRange: d.TARGETING.AGE_RANGE,
        attributionSpec: d.ATTRIBUTION_SPEC,
        bidAmount: d.BID_AMOUNT,
        bidConstraints: d.BID_CONSTRAINTS,
        bidStrategy: d.BID_STRATEGY,
        billingEvent: d.BILLING_EVENT,
        budgetScalingCostTarget: d.BUDGET_SCALING_COST_TARGET,
        budgetScalingExtraBudget: d.BUDGET_SCALING_EXTRA_BUDGET,
        customAudiences: d.TARGETING.CUSTOM_AUDIENCES,
        dailyBudget: d.DAILY_BUDGET,
        dailyMinSpendTarget: d.DAILY_MIN_SPEND_TARGET,
        dailySpendCap: d.DAILY_SPEND_CAP,
        deliveryType: d.PACING_TYPE,
        devicePlatforms: d.TARGETING.DEVICE_PLATFORMS,
        endTime: d.END_TIME,
        excludedCustomAudiences: d.TARGETING.EXCLUDED_CUSTOM_AUDIENCES,
        frequencyControlSpecs: d.FREQUENCY_CONTROL_SPECS,
        genders: d.TARGETING.GENDERS,
        isAutobid: d.IS_AUTOBID,
        isAveragePricePacing: d.IS_AVERAGE_PRICE_PACING,
        lifetimeBudget: d.LIFETIME_BUDGET,
        lifetimeMinSpendTarget: d.LIFETIME_MIN_SPEND_TARGET,
        lifetimeSpendCap: d.LIFETIME_SPEND_CAP,
        maxBudgetSpendPercentage: d.MAX_BUDGET_SPEND_PERCENTAGE,
        minBudgetSpendPercentage: d.MIN_BUDGET_SPEND_PERCENTAGE,
        name: d.NAME,
        optimizationGoal: d.OPTIMIZATION_GOAL,
        promotedObjectPixelID: d.PROMOTED_OBJECT.PIXEL_ID,
        savedAudience: d.SAVED_AUDIENCE.path,
        savedAudienceID: d.SAVED_AUDIENCE.ID,
        savedAudienceID2: d.SAVED_AUDIENCE_ID,
        savedAudienceName: d.SAVED_AUDIENCE.NAME,
        startTime: d.START_TIME,
        tafeCaMitigationStrategy: d.TARGETING.TAFE_CA_MITIGATION_STRATEGY,
        targeting: d.TARGETING.path,
        userAgeUnknown: d.TARGETING.USER_AGE_UNKNOWN,
        targetingRelaxationTypes: d.TARGETING.TARGETING_RELAXATION,
        targetingAutomationIndividualSettingAge:
          d.TARGETING.TARGETING_AUTOMATION.INDIVIDUAL_SETTING.AGE,
        targetingAutomationIndividualSettingGender:
          d.TARGETING.TARGETING_AUTOMATION.INDIVIDUAL_SETTING.GENDER,
        userOS: d.TARGETING.USER_OS,
        valueAdjustmentRuleCollectionID: d.VALUE_ADJUSTMENT_RULE_COLLECTION_ID,
        valueRuleSetID: d.VALUE_RULE_SET_ID,
      },
      _ = o("AdsUEditorCampaignSelectors").adObjectsList.mapTransform(
        o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
      ),
      f = o("AdsUEditorCampaignSelectors").adObjectsList.mapTransform(
        o("AdsUEditorCampaignGroupAdObjectsUtils").getRegulatedCategories,
      ),
      g = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__getBulkEditLevel = function () {
            return "ad_set";
          }),
          (a.__getPathFromFieldKey = function (t) {
            var e = p[t];
            return (e || s(0, 57059, t), e);
          }),
          (a.__getDefaultDialogType = function () {
            return r("AdsBulkEditDialogTypes").CAMPAIGN_NAME;
          }),
          (a.__getAdObjectsList = function (n) {
            if (
              ((c || (c = r("AdsDataAtom"))).waitFor(
                (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens(
                  [
                    r("adsUEditorSelectedCampaignsSelector"),
                    o("AdsPECampaignSelectors").getAllRecordsSelector,
                  ],
                  r("AdsEditingCampaignEditorContext"),
                ),
              ),
              n != null)
            ) {
              var t = o("AdsPECampaignSelectors")
                .getAllRecordsSelector()(n)
                .toArray()
                .reduce(function (e, t) {
                  var n = t.getValue();
                  return (n != null && e.push(n), e);
                }, []);
              return t;
            }
            return r("adsUEditorSelectedCampaignsSelector")(
              r("AdsEditingCampaignEditorContext"),
            );
          }),
          (a.__getObjective = function (n) {
            var t;
            (c || (c = r("AdsDataAtom"))).waitFor(
              (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens(
                [_],
                r("AdsEditingCampaignEditorContext"),
              ),
            );
            var a = _(r("AdsEditingCampaignEditorContext"));
            return (t = a.get(n)) != null ? t : o("AdsAPIObjectives").NONE;
          }),
          (a.__getRegulatedCategories = function (n) {
            var t, a;
            (c || (c = r("AdsDataAtom"))).waitFor(
              (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens(
                [f],
                r("AdsEditingCampaignEditorContext"),
              ),
            );
            var i = f(r("AdsEditingCampaignEditorContext"));
            return (t = (a = i.get(n)) == null ? void 0 : a.toArray()) != null
              ? t
              : [r("AdsRegulatedCategory").NONE];
          }),
          (a.__getMessageMarketingLiquidityDynamicDefaultsSelector =
            function () {
              return (
                (c || (c = r("AdsDataAtom"))).waitFor(
                  (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens(
                    [
                      r(
                        "adsCampaignMessageMarketingLiquidityDynamicDefaultsBootloadedSelector",
                      ),
                    ],
                    r("AdsEditingCampaignEditorContext"),
                  ),
                ),
                r(
                  "adsCampaignMessageMarketingLiquidityDynamicDefaultsBootloadedSelector",
                )(r("AdsEditingCampaignEditorContext"))
              );
            }),
          (a.__getEligibilityInformationSelector = function () {
            return (
              (c || (c = r("AdsDataAtom"))).waitFor(
                (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens(
                  [
                    o("AdsUEditorCampaignSelectors")
                      .eligibilityInformationSelector,
                  ],
                  r("AdsEditingCampaignEditorContext"),
                ),
              ),
              o("AdsUEditorCampaignSelectors").eligibilityInformationSelector(
                r("AdsEditingCampaignEditorContext"),
              )
            );
          }),
          (a.$AdsCampaignBulkEditStore$p_1 = function () {
            return (
              (c || (c = r("AdsDataAtom"))).waitFor(
                (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens(
                  [r("adsUEditorSelectedCampaignGroupsSelector")],
                  r("AdsEditingCampaignEditorContext"),
                ),
              ),
              r("adsUEditorSelectedCampaignGroupsSelector")(
                r("AdsEditingCampaignEditorContext"),
              ).every(r("IsAppAdUtils").isMAIIOS14CampaignGroup)
            );
          }),
          (a.__getAdObjectsPublishStatus = function () {
            return (
              (c || (c = r("AdsDataAtom"))).waitFor(
                (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens(
                  [r("adsBulkEditCampaignPublishedStatusSelector")],
                  r("AdsEditingCampaignEditorContext"),
                ),
              ),
              r("adsBulkEditCampaignPublishedStatusSelector")(
                r("AdsEditingCampaignEditorContext"),
              )
            );
          }),
          (a.__mutateForBulkAdoption = function (t, n, o, a) {
            if (
              n !== r("AdsBulkEditSources").BULK_ADOPTION_UPSELL ||
              a == null ||
              a.length === 0 ||
              o == null
            )
              return t;
            var e = a.map(function (e) {
                return e.campaignID;
              }),
              i = { optimizationGoal: a[0].optimizationGoal },
              l = a.find(function (e) {
                return e.billingEvent != null;
              }),
              s = l != null ? { billingEvent: l.billingEvent } : {},
              u = a.find(function (e) {
                return e.attributionSpec != null;
              }),
              c = u != null ? { attributionSpec: u.attributionSpec } : {};
            i = babelHelpers.extends({}, i, s, c);
            var d = this.__getUpdatedAdObjects(
                t,
                r("AdsCampaignBulkEditColumnKeys").OPTIMIZATION_GOAL,
                e,
                i,
                this.__getUpdatedValueForSetTo,
                !1,
              ),
              m = d.newChangedColumnsByRowMap,
              p = d.newRows,
              _ = p.map(function (e) {
                var t,
                  n = e.current.metrics_metadata;
                (n == null || !r("immutable").Map.isMap(n)) &&
                  (n = r("immutable").Map());
                var o = n.toJS();
                return (
                  (o = babelHelpers.extends(
                    {},
                    o,
                    ((t = {}), (t.edit_flow_tips = []), t),
                  )),
                  (e.current = e.current.set(
                    "metrics_metadata",
                    r("immutable").fromJS(o),
                  )),
                  e
                );
              });
            return t.merge({
              bulkAdoptTipType: o,
              rows: _,
              changedColumnsByRowMap: m,
            });
          }),
          (a.__mutate = function (t, n) {
            var e = this;
            switch (n.type) {
              case o("AdsBulkEditChangeTargetingDataActionFlux").actionType: {
                var a = r("whitelistObjectKeys")(
                    n,
                    r("AdsCommonTargetingProperties"),
                  ),
                  i = this.__getUpdatedAdObjects(
                    t,
                    n.columnKey,
                    n.adObjectIDs,
                    a,
                    this.__getUpdatedValueForSetTo,
                    n.supportNullValue,
                  ),
                  l = i.newChangedColumnsByRowMap,
                  s = i.newRows;
                return t.merge({ rows: s, changedColumnsByRowMap: l });
              }
              case o("AdsBulkEditChangeDetailedTargetingDataActionFlux")
                .actionType: {
                var u = {
                    targeting: {
                      flexible_spec: o(
                        "AdsCommonTargetingApiTransformer",
                      ).getFlexibleSpec(n.flexibleTargetingSpec),
                      exclusions: o(
                        "AdsCommonTargetingApiTransformer",
                      ).getExclusions(n.flexibleTargetingSpec),
                    },
                  },
                  c = function (t, n, r) {
                    var e = r,
                      a = t.getIn(n).toJS(),
                      i = o(
                        "AdsUEditorCampaignSetGeneralTargetingReducerUtils",
                      ).campaignSetGeneralTargeting({
                        campaign: t,
                        oldTargetingSpec: a,
                        newTargetingSpec: e,
                      });
                    return { updatedAdObject: i, updatedValue: u };
                  },
                  d = this.__getUpdatedAdObjects(
                    t,
                    n.columnKey,
                    n.adObjectIDs,
                    u,
                    c,
                    !0,
                  ),
                  p = d.newChangedColumnsByRowMap,
                  _ = d.newRows;
                return t.merge({ rows: _, changedColumnsByRowMap: p });
              }
              case o("AdsBulkEditChangeGeoLocationDataActionFlux").actionType: {
                var f = {
                    targeting: {
                      geo_locations: n.geoLocations,
                      excluded_geo_locations: n.excludedGeoLocations,
                    },
                  },
                  g = function (n, a, i) {
                    var t,
                      l,
                      s = i,
                      u = n.getIn(a).toJS(),
                      c = o(
                        "AdsUEditorCampaignSetGeneralTargetingReducerUtils",
                      ).campaignSetGeneralTargeting({
                        campaign: n,
                        oldTargetingSpec: u,
                        newTargetingSpec: s,
                      }),
                      d = r("AdsAccountStore").getSelectedAccount(),
                      m = d.getValue(),
                      p = o(
                        "adsDSABeneficiaryAndPayorAutofillValuesSelector",
                      ).adsDSABeneficiaryAndPayorAutofillValuesSelector();
                    if (m != null) {
                      var _;
                      c = r("maybeUpdateCampaignDSASpec")(c, {
                        defaultDSABeneficiary: p.beneficiary,
                        defaultDSAPayor: p.payor,
                        locationApiSpec:
                          (_ = c.targeting) == null ||
                          (_ = _.geo_locations) == null
                            ? void 0
                            : _.toJS(),
                      });
                    }
                    c = r("maybeUpdateCampaignRegulationsSpec")(c, {
                      excludedLocations:
                        (t = c.targeting) == null ||
                        (t = t.excluded_geo_locations) == null
                          ? void 0
                          : t.toJS(),
                      includedLocations:
                        (l = c.targeting) == null ||
                        (l = l.geo_locations) == null
                          ? void 0
                          : l.toJS(),
                    });
                    var g = e.__getRegulatedCategories(n.id);
                    return (
                      (c = o(
                        "AdsTargetingAudienceFairnessUtils",
                      ).maybeUpdateTAFEMitigationStrategyInCampaignRecord(
                        c,
                        g,
                      )),
                      { updatedAdObject: c, updatedValue: f }
                    );
                  },
                  h = this.__getUpdatedAdObjects(
                    t,
                    n.columnKey,
                    n.adObjectIDs,
                    f,
                    g,
                    !0,
                  ),
                  y = h.newChangedColumnsByRowMap,
                  C = h.newRows;
                return t.merge(
                  babelHelpers.extends(
                    { rows: C, changedColumnsByRowMap: y },
                    n.isApplyDisabled != null
                      ? { isApplyDisabled: n.isApplyDisabled }
                      : {},
                  ),
                );
              }
              case o(
                "AdsBulkEditChangeBroadGeoTargetingAutomationDataActionFlux",
              ).actionType: {
                var b = {
                    targeting: { targeting_automation: n.targetingAutomation },
                  },
                  v = function (t, n, r) {
                    var e = r,
                      a = t.getIn(n).toJS(),
                      i = o(
                        "AdsUEditorCampaignSetGeneralTargetingReducerUtils",
                      ).campaignSetGeneralTargeting({
                        campaign: t,
                        oldTargetingSpec: a,
                        newTargetingSpec: e,
                      });
                    return { updatedAdObject: i, updatedValue: b };
                  },
                  S = this.__getUpdatedAdObjects(
                    t,
                    n.columnKey,
                    n.adObjectIDs,
                    b,
                    v,
                    !0,
                  ),
                  R = S.newChangedColumnsByRowMap,
                  L = S.newRows;
                return t.merge({ rows: L, changedColumnsByRowMap: R });
              }
              case o("AdsBulkEditChangeBudgetDataActionFlux").actionType: {
                var E = n.budget,
                  k = n.budgetMode,
                  I = n.budgetOperator,
                  T = n.budgetUnit,
                  D = E,
                  x = E;
                k === "daily" ? (x = 0) : (D = 0);
                var $ = { dailyBudget: D, lifetimeBudget: x },
                  P = I,
                  N = T,
                  M = function (t, n, a) {
                    var e = o("AdsBulkEditStoreUtils").getUpdatedValueOperation(
                        t,
                        r("AdsCampaignBulkEditColumnKeys").BUDGET,
                        P,
                        N,
                        n,
                        a,
                      ),
                      i = e.updatedAdObject,
                      l = e.updatedValue;
                    return { updatedAdObject: i, updatedValue: l };
                  },
                  w = this.__getUpdatedAdObjects(
                    t,
                    n.columnKey,
                    n.adObjectIDs,
                    $,
                    M,
                    n.supportNullValue,
                  ),
                  A = w.newChangedColumnsByRowMap,
                  F = w.newRows,
                  O = F.map(function (e) {
                    var t = +e.current.daily_budget;
                    if (t > 0) {
                      var n,
                        a =
                          (n = e.current.pacing_type) != null
                            ? n
                            : r("immutable").List(),
                        i = o("DayPartingUtils").setDayParting(a.toArray(), !1);
                      ((e.current = r(
                        "AdsCampaignRecordAccessors",
                      ).pacing_type.set(r("immutable").List(i), e.current)),
                        (e.current = r(
                          "AdsCampaignRecordAccessors",
                        ).adset_schedule.set(r("immutable").List(), e.current)),
                        (e.current = r(
                          "AdsCampaignRecordAccessors",
                        ).recurring_budget_semantics.set(!0, e.current)));
                    }
                    return e;
                  });
                return t.merge({ rows: O, changedColumnsByRowMap: A });
              }
              case o("AdsBulkEditChangeBudgetScalingDataActionFlux")
                .actionType: {
                var B = n.columnKey;
                if (B == null) {
                  var W = this.__getUpdatedAdObjects(
                      t,
                      r("AdsCampaignBulkEditColumnKeys")
                        .BUDGET_SCALING_EXTRA_BUDGET,
                      n.adObjectIDs,
                      { budgetScalingExtraBudget: "0" },
                      this.__getUpdatedValueForSetTo,
                      !0,
                    ),
                    q = this.__getUpdatedAdObjects(
                      t.merge({
                        rows: W.newRows,
                        changedColumnsByRowMap: W.newChangedColumnsByRowMap,
                      }),
                      r("AdsCampaignBulkEditColumnKeys")
                        .BUDGET_SCALING_COST_TARGET,
                      n.adObjectIDs,
                      { budgetScalingCostTarget: "0" },
                      this.__getUpdatedValueForSetTo,
                      !0,
                    ),
                    U = q.newChangedColumnsByRowMap,
                    V = q.newRows;
                  return t.merge({ rows: V, changedColumnsByRowMap: U });
                }
                var H =
                    B ===
                    r("AdsCampaignBulkEditColumnKeys")
                      .BUDGET_SCALING_EXTRA_BUDGET,
                  G =
                    B ===
                    r("AdsCampaignBulkEditColumnKeys")
                      .BUDGET_SCALING_COST_TARGET;
                if (!H && !G) return t;
                var z = function (n) {
                    var e,
                      r = (e = t.rows.get(n)) == null ? void 0 : e.current;
                    return (
                      r != null &&
                      o(
                        "adsBudgetScalingGKUtils",
                      ).isBidStrategyEligibleForBudgetScaling(
                        o(
                          "adsBudgetScalingGKUtils",
                        ).getEffectiveBidStrategyForCampaign(
                          r.is_autobid,
                          r.bid_strategy,
                          null,
                        ),
                      )
                    );
                  },
                  j = n.adObjectIDs.filter(z),
                  K = n.value != null ? String(n.value) : "0",
                  Q = H
                    ? { budgetScalingExtraBudget: K }
                    : { budgetScalingCostTarget: K },
                  X = this.__getUpdatedAdObjects(
                    t,
                    B,
                    j,
                    Q,
                    this.__getUpdatedValueForSetTo,
                    !0,
                  ),
                  Y = X.newChangedColumnsByRowMap,
                  J = X.newRows,
                  Z = n.adObjectIDs.reduce(function (e, t) {
                    var n = e.get(t);
                    if (z(t) || n == null || !n.has(B)) return e;
                    var r = n.delete(B);
                    return r.size === 0 ? e.delete(t) : e.set(t, r);
                  }, Y);
                return t.merge({ rows: J, changedColumnsByRowMap: Z });
              }
              case o("AdsBulkEditChangeCampaignSpendLimitActionFlux")
                .actionType: {
                var ee =
                    n.columnKey ===
                    r("AdsCampaignBulkEditColumnKeys").MIN_SPEND_LIMIT,
                  te = n.budgetMode === "daily",
                  ne = n.spendPercentageAndAmountMap;
                if (ne != null && Array.from(ne.entries()).length > 0) {
                  var re = ne.map(function (r, o) {
                      var a = {},
                        i = r.spendLimitAmount,
                        l = r.spendLimitPercentage;
                      return (
                        ee
                          ? ((a = te
                              ? { dailyMinSpendTarget: String(i) }
                              : { lifetimeMinSpendTarget: String(i) }),
                            (a = babelHelpers.extends({}, a, {
                              minBudgetSpendPercentage: l,
                            })))
                          : ((a = te
                              ? { dailySpendCap: String(i) }
                              : { lifetimeSpendCap: String(i) }),
                            (a = babelHelpers.extends({}, a, {
                              maxBudgetSpendPercentage: l,
                            }))),
                        e.__getUpdatedAdObjects(
                          t,
                          n.columnKey,
                          [o],
                          a,
                          e.__getUpdatedValueForSetTo,
                        )
                      );
                    }),
                    oe = new Map(),
                    ae = new Map();
                  return (
                    Array.from(re.entries()).map(function (e) {
                      var t = e[0],
                        n = e[1],
                        r = n.newChangedColumnsByRowMap,
                        o = n.newRows,
                        a = o.get(t),
                        i = r.get(t);
                      a != null && i != null && (oe.set(t, a), ae.set(t, i));
                    }),
                    t.merge({
                      rows: r("immutable").OrderedMap(oe),
                      changedColumnsByRowMap: r("immutable").Map(ae),
                    })
                  );
                }
                var ie = {};
                ee
                  ? ((ie = te
                      ? { dailyMinSpendTarget: String(n.value) }
                      : { lifetimeMinSpendTarget: String(n.value) }),
                    n.minBudgetSpendPercentage != null &&
                      (ie = babelHelpers.extends({}, ie, {
                        minBudgetSpendPercentage: n.minBudgetSpendPercentage,
                      })))
                  : ((ie = te
                      ? { dailySpendCap: String(n.value) }
                      : { lifetimeSpendCap: String(n.value) }),
                    n.maxBudgetSpendPercentage != null &&
                      (ie = babelHelpers.extends({}, ie, {
                        maxBudgetSpendPercentage: n.maxBudgetSpendPercentage,
                      })));
                var le = this.__getUpdatedAdObjects(
                    t,
                    n.columnKey,
                    n.adObjectIDs,
                    ie,
                    this.__getUpdatedValueForSetTo,
                  ),
                  se = le.newChangedColumnsByRowMap,
                  ue = le.newRows;
                return t.merge({ rows: ue, changedColumnsByRowMap: se });
              }
              case o("AdsBulkEditClearCampaignSpendLimitsActionFlux")
                .actionType: {
                var ce = {};
                n.columnKey ===
                r("AdsCampaignBulkEditColumnKeys").MIN_SPEND_LIMIT
                  ? (ce = {
                      dailyMinSpendTarget: 0,
                      lifetimeMinSpendTarget: 0,
                      minBudgetSpendPercentage: 0,
                    })
                  : (ce = {
                      dailySpendCap: 922337203685478,
                      lifetimeSpendCap: 922337203685478,
                      maxBudgetSpendPercentage: 0,
                    });
                var de = this.__getUpdatedAdObjects(
                    t,
                    n.columnKey,
                    n.adObjects.map(function (e) {
                      return e.id;
                    }),
                    ce,
                    this.$AdsCampaignBulkEditStore$p_2(n.adObjects),
                  ),
                  me = de.newChangedColumnsByRowMap,
                  pe = de.newRows;
                return t.merge({ rows: pe, changedColumnsByRowMap: me });
              }
              case o("AdsBulkEditChangeMaxOsVersionActionFlux").actionType: {
                var _e,
                  fe =
                    (_e = t.rows.get(n.adObjectIDs[0])) == null
                      ? void 0
                      : _e.current.targeting.user_os;
                if (!fe || fe.size !== 1) return t;
                var ge = o("AdsUserOSUtils").splitUserOS(fe.toJS()[0]),
                  he = ge.min_version,
                  ye = ge.os,
                  Ce = r("AppAdsConfig.experimental").mobileOsVersionNames[ye];
                if (r("isFalsey")(he) && !Ce) return t;
                var be = this.$AdsCampaignBulkEditStore$p_1(),
                  ve = be
                    ? r("IOS14Utils").getRestrictedIOSVersions(Ce, be)["14.0"]
                    : Object.keys(Ce)[0],
                  Se = {
                    userOS:
                      ye == null
                        ? r("immutable").List([null])
                        : r("immutable").List([
                            o("AdsUserOSUtils").toUserOSString(
                              ye,
                              r("isTruthy")(he) ? he : ve,
                              n.maxVersion,
                            ),
                          ]),
                  },
                  Re = this.__getUpdatedAdObjects(
                    t,
                    n.columnKey,
                    n.adObjectIDs,
                    Se,
                    this.__getUpdatedValueForSetTo,
                    n.supportNullValue,
                  ),
                  Le = Re.newChangedColumnsByRowMap,
                  Ee = Re.newRows;
                return t.merge({ rows: Ee, changedColumnsByRowMap: Le });
              }
              case o("AdsBulkEditChangeMinOsVersionActionFlux").actionType: {
                var ke,
                  Ie =
                    (ke = t.rows.get(n.adObjectIDs[0])) == null
                      ? void 0
                      : ke.current.targeting.user_os;
                if (!Ie || Ie.size !== 1) return t;
                var Te = o("AdsUserOSUtils").splitUserOS(Ie.toJS()[0]),
                  De = Te.max_version,
                  xe = Te.os,
                  $e = {
                    userOS:
                      xe == null
                        ? r("immutable").List([null])
                        : r("immutable").List([
                            o("AdsUserOSUtils").toUserOSString(
                              xe,
                              n.minVersion,
                              De,
                            ),
                          ]),
                  },
                  Pe = this.__getUpdatedAdObjects(
                    t,
                    n.columnKey,
                    n.adObjectIDs,
                    $e,
                    this.__getUpdatedValueForSetTo,
                    n.supportNullValue,
                  ),
                  Ne = Pe.newChangedColumnsByRowMap,
                  Me = Pe.newRows;
                return t.merge({ rows: Me, changedColumnsByRowMap: Ne });
              }
              case o("AdsBulkEditChangeScheduleTimeDataActionFlux")
                .actionType: {
                var we = { startTime: null, endTime: null },
                  Ae = r("whitelistObjectKeys")(n, we),
                  Fe = this.__getUpdatedAdObjects(
                    t,
                    n.columnKey,
                    n.adObjectIDs,
                    Ae,
                    this.__getUpdatedValueForSetTo,
                    n.supportNullValue,
                  ),
                  Oe = Fe.newChangedColumnsByRowMap,
                  Be = Fe.newRows;
                return t.merge({ rows: Be, changedColumnsByRowMap: Oe });
              }
              case o("AdsBulkEditCampaignChangeDeliveryDataActionFlux")
                .actionType: {
                var We = this.$AdsCampaignBulkEditStore$p_3(
                    n.ids,
                    n.deliverySpec,
                    n.oldBulkSpec,
                    t.rows,
                    n.marketingMessageCompatibilityMap,
                  ),
                  qe = m.get(n.columnKey),
                  Ue = qe.map(function (t) {
                    return e.__getPathFromFieldKey(t);
                  }),
                  Ve = o("AdsBulkEditUtils").getNewChangedColumnsByRowMap(
                    Ue,
                    n.ids,
                    n.columnKey,
                    t.changedColumnsByRowMap,
                    We,
                  );
                return t.merge({ rows: We, changedColumnsByRowMap: Ve });
              }
              case o("AdsBulkEditChangeSavedAudienceDataActionFlux")
                .actionType: {
                var He = n.adObjectIDs,
                  Ge = n.columnKey,
                  ze = n.savedAudience,
                  je = {
                    targeting: ze.targeting,
                    savedAudienceName: ze.name,
                    savedAudienceID: ze.id,
                    savedAudienceID2: ze.id,
                  },
                  Ke = function (n, a, i) {
                    var t =
                      a.toString() ===
                      r("AdsAPICampaignPaths").TARGETING.path.toString();
                    if (t) {
                      var l = i,
                        s = e.__getObjective(n.id),
                        u = n.getIn(a),
                        c = ze.id,
                        d = o(
                          "AdsUEditorCampaignSetSavedAudienceReducerUtils",
                        ).campaignSetTargeting({
                          campaign: n,
                          objective: s,
                          oldTargetingSpec: u,
                          newTargetingSpec: l,
                          savedAudienceID: c,
                        });
                      return { updatedAdObject: d, updatedValue: ze };
                    }
                    return e.__getUpdatedValueForSetTo(n, a, i);
                  },
                  Qe = this.__getUpdatedAdObjects(t, Ge, He, je, Ke, !0),
                  Xe = Qe.newChangedColumnsByRowMap,
                  Ye = Qe.newRows;
                return t.merge({ rows: Ye, changedColumnsByRowMap: Xe });
              }
              case o("AdsBulkEditChangeAllCampaignBidConstraintsDataActionFlux")
                .actionType: {
                var Je = n.adObjectIDs,
                  Ze = n.roasAverageFloorValue,
                  et = Je.filter(function (e) {
                    return t.rows.has(e);
                  });
                if (et.length === 0) return t;
                var tt = this.__getUpdatedAdObjects(
                    t,
                    r("AdsCampaignBulkEditColumnKeys")
                      .CAMPAIGN_BID_CONATRAINTS_FROM_CAMPAIGN_GROUP,
                    et,
                    { bidConstraints: { roas_average_floor: Ze } },
                    this.__getUpdatedValueForSetTo,
                    !0,
                  ),
                  nt = tt.newChangedColumnsByRowMap,
                  rt = tt.newRows;
                return t.merge({ rows: rt, changedColumnsByRowMap: nt });
              }
              case o("AdsCBOUpdateCampaignBulkEditPixelIDActionFlux")
                .actionType: {
                var ot = n.campaignID,
                  at = n.selectedPixelID,
                  it = this.__getUpdatedAdObjects(
                    t,
                    r("AdsCampaignBulkEditColumnKeys").CAMPAIGN_PIXEL_ID,
                    [ot],
                    { promotedObjectPixelID: at },
                    this.__getUpdatedValueForSetTo,
                    !0,
                  ),
                  lt = it.newChangedColumnsByRowMap,
                  st = it.newRows;
                return t.merge({ rows: st, changedColumnsByRowMap: lt });
              }
              case o("AdsBulkEditChangeAllCampaignBidAmountsDataActionFlux")
                .actionType: {
                var ut = n.bidAmount,
                  ct = n.bulkEditLevel;
                if (ct === "ad_set") {
                  var dt = this.__getUpdatedAdObjects(
                      t,
                      n.columnKey,
                      n.adObjectIDs,
                      { bidAmount: ut },
                      this.__getUpdatedValueForSetTo,
                      n.supportNullValue,
                    ),
                    mt = dt.newChangedColumnsByRowMap,
                    pt = dt.newRows;
                  return t.merge({ rows: pt, changedColumnsByRowMap: mt });
                }
                break;
              }
              case o("AdsBulkEditSetValueAdjustmentRuleCollectionIDActionFlux")
                .actionType: {
                var _t = n.newValueAdjustmentRuleCollectionID,
                  ft = this.__getUpdatedAdObjects(
                    t,
                    r("AdsCampaignBulkEditColumnKeys").VALUE_ADJUSTMENT_RULE,
                    n.adObjectIDs,
                    { valueAdjustmentRuleCollectionID: _t, valueRuleSetID: _t },
                    this.__getUpdatedValueForSetTo,
                    !0,
                  ),
                  gt = ft.newChangedColumnsByRowMap,
                  ht = ft.newRows;
                return t.merge({ rows: ht, changedColumnsByRowMap: gt });
              }
              case o("AdsBulkEditChangeDevicePlatformsActionFlux").actionType: {
                var yt = this.__getUpdatedAdObjects(
                    t,
                    n.columnKey,
                    n.adObjectIDs,
                    { devicePlatforms: n.devicePlatforms },
                    this.__getUpdatedValueForSetTo,
                  ),
                  Ct = yt.newChangedColumnsByRowMap,
                  bt = yt.newRows;
                return t.merge({ rows: bt, changedColumnsByRowMap: Ct });
              }
              case o("AdsBulkEditChangeFrequencyControlDataActionFlux")
                .actionType: {
                var vt = n.billingEvent,
                  St = n.frequencyCap,
                  Rt = n.frequencyCapResetPeriod,
                  Lt = { event: vt, interval_days: Rt, max_frequency: St },
                  Et = function (t, n, r) {
                    var e = o(
                      "AdsUEditorCampaignSetFrequencyControlSpecReducerUtils",
                    ).campaignSetFrequencyControlSpecs({
                      campaign: t,
                      frequencyControlSpec: r,
                    });
                    return { updatedAdObject: e, updatedValue: Lt };
                  },
                  kt = this.__getUpdatedAdObjects(
                    t,
                    n.columnKey,
                    n.adObjectIDs,
                    { frequencyControlSpecs: Lt },
                    Et,
                  ),
                  It = kt.newChangedColumnsByRowMap,
                  Tt = kt.newRows;
                return t.merge({ rows: Tt, changedColumnsByRowMap: It });
              }
            }
            return o("AdsCampaignBulkEditActionHandlersMutators").reduce(t, {
              action: n,
            });
          }),
          (a.__shouldReset = function (t) {
            return (
              t ===
                o("AdsUEditorCampaignBulkEditApplyChangesActionFlux")
                  .actionType ||
              t ===
                o(
                  "AdsUEditorCampaignBulkEditInstantPublishApplyChangesActionFlux",
                ).actionType ||
              t ===
                o(
                  "AdsCampaignGroupBudgetCrossLevelChangeBidStrategyAndTotalBudgetActionFlux",
                ).actionType ||
              t ===
                o(
                  "AdsCampaignGroupBidStrategyInstantPublishApplyChangesDataActionFlux",
                ).actionType
            );
          }),
          (a.$AdsCampaignBulkEditStore$p_3 = function (t, n, a, i, l) {
            var e = this,
              s = i.withMutations(function (i) {
                return (
                  r("AdsDeliveryPaths").forEach(function (s) {
                    var c =
                        r("getByPath")(n, s) || r("AdsEmptyValue").instance(),
                      d = r("getByPath")(a, s) || r("AdsEmptyValue").instance(),
                      m = c instanceof r("AdsUniformValue");
                    if (
                      m &&
                      !(
                        (d instanceof r("AdsUniformValue") ||
                          d instanceof r("AdsEmptyValue")) &&
                        (u || (u = r("areEqual")))(d.getValue(), c.getValue())
                      )
                    ) {
                      var p = c.getValue();
                      (p === void 0 && (p = null),
                        s === r("AdsAPICampaignPaths").PACING_TYPE &&
                          (p = r("immutable").List(p)),
                        t.forEach(function (t) {
                          var n = i.get(t),
                            a = n.current.setIn(s, p);
                          (o(
                            "MarketingMessagesGKUtils",
                          ).isMarketingMessagesBulkEditingEnabled() &&
                            s === r("AdsAPICampaignPaths").OPTIMIZATION_GOAL &&
                            (a = e.$AdsCampaignBulkEditStore$p_4(a, l)),
                            i.set(t, {
                              original: n.original,
                              current: a,
                              isDraftObject: n.isDraftObject,
                            }));
                        }));
                    }
                  }),
                  t.forEach(function (e) {
                    var t = i.get(e);
                    if (t != null) {
                      var n = o(
                        "AdsBudgetScalingMutationUtils",
                      ).maybeClearCampaignBudgetScalingForBidStrategy(
                        t.current,
                        o(
                          "adsBudgetScalingGKUtils",
                        ).getEffectiveBidStrategyForCampaign(
                          t.current.is_autobid,
                          t.current.bid_strategy,
                          null,
                        ),
                      );
                      n !== t.current &&
                        i.set(e, {
                          original: t.original,
                          current: n,
                          isDraftObject: t.isDraftObject,
                        });
                    }
                  }),
                  i
                );
              });
            return s;
          }),
          (a.$AdsCampaignBulkEditStore$p_4 = function (t, n) {
            var e,
              o = this.__getEligibilityInformationSelector(),
              a = (e = n == null ? void 0 : n.get(t.id)) != null ? e : !1;
            if (a) {
              var i =
                this.__getMessageMarketingLiquidityDynamicDefaultsSelector();
              return r("applyMessageMarketingDefaultsCampaignMutator")(t, o, i);
            } else return r("clearMessageMarketingCampaignMutator")(t, o);
          }),
          (a.$AdsCampaignBulkEditStore$p_2 = function (t) {
            var e = this,
              n = t
                .filter(function (e) {
                  return e.budgetType === "daily";
                })
                .map(function (e) {
                  return e.id;
                }),
              r = t
                .filter(function (e) {
                  return e.budgetType === "lifetime";
                })
                .map(function (e) {
                  return e.id;
                });
            return function (t, o, a) {
              var i = t,
                l = t.getIn(o);
              return (
                ((n.includes(t.id) &&
                  (o === e.__getPathFromFieldKey("dailySpendCap") ||
                    o === e.__getPathFromFieldKey("dailyMinSpendTarget"))) ||
                  (r.includes(t.id) &&
                    (o === e.__getPathFromFieldKey("lifetimeSpendCap") ||
                      o ===
                        e.__getPathFromFieldKey("lifetimeMinSpendTarget"))) ||
                  o === e.__getPathFromFieldKey("minBudgetSpendPercentage") ||
                  o === e.__getPathFromFieldKey("maxBudgetSpendPercentage")) &&
                  ((i = t.setIn(o, a)), (l = a)),
                { updatedAdObject: i, updatedValue: l }
              );
            };
          }),
          n
        );
      })(r("AdsBaseBulkEditStore")),
      h = new g(c || (c = r("AdsDataAtom")));
    l.default = h;
  },
  98,
);
