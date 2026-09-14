__d(
  "AdsUEditorCampaignMutationForLightweightBestPracticesReducerPlugin",
  [
    "AdsAdObjectLevelToPESelectors",
    "AdsCampaignRecordAccessors",
    "AdsExperimentsASCLightweightTestScheduleUtils",
    "AdsExperimentsLightweightTestBudgetUtils",
    "AdsMutators",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorCampaignMutationForLightweightBestPracticesActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "FBLogger",
    "adsUEditorAccountSelector",
    "filterNulls",
    "first",
    "getLightweightABTestDuplicatedDefaultName",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2,
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            hasCampaignGroupDraft: r("nullthrows")(
              o("AdsAdObjectLevelToPESelectors").getHasDraftSelectorMap.get(
                "campaign",
              ),
            ),
            campaignGroupsMap: o(
              "AdsUEditorCampaignGroupSelectors",
            ).campaignGroups.mapTransform(function (e) {
              return e;
            }),
            campaignMap: o(
              "AdsUEditorCampaignSelectors",
            ).campaigns.mapTransform(function (e) {
              return e;
            }),
            adAccount: r("adsUEditorAccountSelector"),
          },
          function (e, t, n) {
            var a = n.adAccount,
              i = n.campaignGroupsMap,
              l = n.campaignMap,
              s = n.hasCampaignGroupDraft;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = t.originalData.campaignIDs.includes(e.id),
                u;
              if (n) u = e;
              else {
                var m = r("first")(t.originalData.campaignIDs),
                  p = m != null ? l.get(m) : null;
                (p == null &&
                  r("FBLogger")("ads_experiments").warn(
                    "null originalCampaignFromMap. inputCampaignIDs: %s, originalCampaignIDs: %s, ",
                    t.campaignIDs.join(","),
                    t.originalData.campaignIDs.join(","),
                  ),
                  (u = p != null ? p : e));
              }
              var _ = c(t, u, e, n, i, s),
                f = _.campaignGroup,
                g = _.isCBO,
                h = _.isOriginalCBO,
                y = _.isSplittingBudget,
                C = d({
                  action: t,
                  campaignMap: l,
                  campaign: e,
                  originalCampaign: u,
                  originalCampaignGroup: f,
                  isOriginalCampaign: n,
                  isCBO: g,
                  isOriginalCBO: h,
                  isSplittingBudget: y,
                  adAccount: a,
                });
              if (t.studyLevel === "campaign") {
                var b = o(
                  "AdsExperimentsASCLightweightTestScheduleUtils",
                ).getASCScheduleMutator({
                  lightweightType: t.lightweightType,
                  originalCampaigns: t.originalData.campaignIDs
                    .map(function (e) {
                      return l.get(e);
                    })
                    .filter(Boolean),
                  isOriginalCampaign: n,
                  campaign: e,
                  adAccount: a,
                });
                return C != null || b != null
                  ? o("AdsMutators").chain.apply(
                      o("AdsMutators"),
                      r("filterNulls")([C, b]),
                    )(e)
                  : e;
              }
              return n
                ? o("AdsMutators").chain.apply(
                    o("AdsMutators"),
                    r("filterNulls")([C]),
                  )(e)
                : o("AdsMutators").chain.apply(
                    o("AdsMutators"),
                    r("filterNulls")([
                      C,
                      r(
                        "AdsCampaignRecordAccessors",
                      ).include_in_ad_study_id.set(t.studyID),
                      r(
                        "AdsCampaignRecordAccessors",
                      ).include_in_ad_study_cell_id.set(t.studyCellID),
                      r("AdsCampaignRecordAccessors").name.set(
                        r("getLightweightABTestDuplicatedDefaultName")(
                          e.name,
                        ).toString(),
                      ),
                    ]),
                  )(e);
            });
          },
          r("AdsUEditorCampaignMutationForLightweightBestPracticesActionFlux")
            .actionType,
        ),
      };
    function u(e, t, n, r) {
      if (e.lightweightType !== "ADVANTAGE_SHOPPING_CAMPAIGN" || n || r)
        return null;
      var o = e.originalData.campaignIDs,
        a = o
          .map(function (e) {
            return t.get(e);
          })
          .filter(Boolean),
        i = a.every(function (e) {
          return (
            (e == null ? void 0 : e.daily_budget) != null &&
            (e == null ? void 0 : e.daily_budget) > 0
          );
        }),
        l = a.every(function (e) {
          return (
            (e == null ? void 0 : e.lifetime_budget) != null &&
            (e == null ? void 0 : e.lifetime_budget) > 0
          );
        });
      if (!i && !l) return null;
      var s = 0;
      return { isDailyBudget: i, newBudgetPerCell: Math.floor(s) };
    }
    function c(e, t, n, o, a, i) {
      var l = t.lifetime_budget == null && t.daily_budget == null,
        s = n.lifetime_budget == null && n.daily_budget == null;
      if (!o && l && e.lightweightType === "ADVANTAGE_SHOPPING_CAMPAIGN") {
        var u = r("first")(e.originalData.campaignGroupIDs);
        if (u != null) {
          var c = a.get(u);
          if (c != null)
            return {
              campaignGroup: c,
              isSplittingBudget: i(u) !== !0,
              isCBO: s,
              isOriginalCBO: l,
            };
        }
      }
      return {
        campaignGroup: null,
        isSplittingBudget: !0,
        isCBO: s,
        isOriginalCBO: l,
      };
    }
    function d(t) {
      var n,
        a = t.action,
        i = t.campaignMap,
        l = t.isCBO,
        s = t.isOriginalCampaign,
        c = t.isOriginalCBO,
        d = t.isSplittingBudget,
        m = t.originalCampaign,
        p = t.originalCampaignGroup;
      if (l) return null;
      var _ =
          (n = u(a, i, s, c)) != null
            ? n
            : o(
                "AdsExperimentsLightweightTestBudgetUtils",
              ).getSplitBudgetMutatorValues({
                campaign: m,
                campaignGroup: p,
                isForExisting: s,
                numberOfCells: e,
              }),
        f = _.isDailyBudget,
        g = _.newBudgetPerCell,
        h = Math.floor(d ? g : g * e);
      return f
        ? r("AdsCampaignRecordAccessors").daily_budget.set(h)
        : r("AdsCampaignRecordAccessors").lifetime_budget.set(h);
    }
    var m = s;
    l.default = m;
  },
  98,
);
