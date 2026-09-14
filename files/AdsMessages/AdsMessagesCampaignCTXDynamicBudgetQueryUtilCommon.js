__d(
  "AdsMessagesCampaignCTXDynamicBudgetQueryUtilCommon",
  [
    "AdsEditorCtxDynamicBudgetUtils",
    "AdsManagerRelayEnvironment",
    "AdsMessagesCampaignCTXDynamicBudgetQueryUtilCommonQuery.graphql",
    "AdsUEditorSelectors",
    "CTXDynamicBudgetNonCBOUtils",
    "ClickToMessageCTMAdoptionFeatureGating",
    "RelayHooks",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "asyncToGeneratorRuntime",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("adsCreateSelector")(
        [
          (u = r("adsGetUniformValueSelector"))(
            (s = o("AdsUEditorSelectors")).campaignGroup.bulkByAccessorToJS(
              function (e) {
                return e.bid_strategy;
              },
            ),
          ),
          u(
            s.campaign.bulkByAccessorToJS(function (e) {
              return e.attribution_spec;
            }),
          ),
          u(
            s.campaign.bulkByAccessorToJS(function (e) {
              return e.targeting;
            }),
          ),
          u(
            s.campaign.bulkByAccessorToJS(function (e) {
              return e.placement;
            }),
          ),
          u(
            s.campaign.bulkByAccessorToJS(function (e) {
              return e.promoted_object;
            }),
          ),
        ],
        function (t, n, r, o, a) {
          return {
            attribution_spec: JSON.stringify(n != null ? n : "[]"),
            bidStrategy: t,
            placement: JSON.stringify(o != null ? o : "[]"),
            promoted_object: JSON.stringify(a != null ? a : "[]"),
            target_spec: JSON.stringify(r != null ? r : "[]"),
          };
        },
        { name: i.id + ".ctxDynamicBudgetSelector" },
      ),
      d =
        e !== void 0
          ? e
          : (e = n(
              "AdsMessagesCampaignCTXDynamicBudgetQueryUtilCommonQuery.graphql",
            )),
      m = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i,
              l = yield o("RelayHooks")
                .fetchQuery(r("AdsManagerRelayEnvironment"), d, {
                  inputParams: e,
                  skipQuery: t,
                  adAccountId: n,
                  pageId: a,
                })
                .toPromise();
            return l == null || (i = l.page) == null
              ? void 0
              : i.ctx_dynamic_zo_budget_recommendation;
          },
        );
        return function (n, r, o, a) {
          return e.apply(this, arguments);
        };
      })();
    function p(e, t, n, r, o, a, i, l, s, u, c) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s, u, c, d, p) {
            var _;
            n === void 0 && (n = !1);
            var f = o("AdsEditorCtxDynamicBudgetUtils").isCTXEligibleCampaign(
                a,
                i,
              ),
              g = {
                account_id: (_ = t.account_id) != null ? _ : "",
                attribution_spec: s != null ? s : "[]",
                bid_strategy: u != null ? u : "NONE",
                destination_type: a != null ? a : "UNDEFINED",
                is_cbo_enabled: n,
                objective: l != null ? l : "NONE",
                optimization_goal: i != null ? i : "NONE",
                placement: c != null ? c : "[]",
                promoted_object: d != null ? d : "",
                target_spec: p != null ? p : "[]",
              },
              h = n
                ? o(
                    "ClickToMessageCTMAdoptionFeatureGating",
                  ).isInExperimentCTXDynamicBudgetRecommendationCBO()
                : o(
                    "CTXDynamicBudgetNonCBOUtils",
                  ).isInExperimentCTXDynamicBudgetRecommendationNonCBO(),
              y = r("isFalsey")(e) || r("isFalsey")(t.account_id) || !f || !h,
              C = m(g, y, t.account_id, e);
            return yield C;
          },
        )),
        _.apply(this, arguments)
      );
    }
    ((l.ctxDynamicBudgetSelector = c),
      (l.ctxDynamicBudgetDataQuery = m),
      (l.fetchCTXDynamicBudgetRecommendation = p));
  },
  98,
);
