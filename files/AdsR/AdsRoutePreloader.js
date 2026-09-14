__d(
  "AdsRoutePreloader",
  [
    "AdFLEXPerfConfig",
    "AdsAccountStore",
    "AdsInsightsField",
    "AdsInsightsFilter",
    "AdsInsightsObjectStatsStore",
    "AdsInsightsTimeRange",
    "AdsManagerEntryPointRunner",
    "AdsManagerInteractionScenarioResources",
    "AdsManagerRelayEnvironment",
    "AdsObjectTypes",
    "AdsPERouteName",
    "AdsPERouterHelper",
    "BillingWizardNameUtils",
    "JSResource",
    "SYDPreloading",
    "cr:1173",
    "gkx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("AdsAccountStore").getSelectedAccountID();
      e != null &&
        r("promiseDone")(
          o("BillingWizardNameUtils").fetchWizardNameQuery(
            r("AdsManagerRelayEnvironment"),
            e,
            void 0,
            void 0,
            void 0,
            r("gkx")("23330") ? "POWER_EDITOR" : "AMA",
          ),
        );
    }
    function s() {
      m(270230590, n("cr:1173"));
    }
    function u() {
      var e,
        t,
        n =
          (e =
            r("AdFLEXPerfConfig") == null ||
            (t = r("AdFLEXPerfConfig").get()) == null ||
            (t =
              t.getAdsManagerInteractionQuickLogModuleDuplicationLoadDialogEvent) ==
              null
              ? void 0
              : t.call()) != null
            ? e
            : 270210235;
      m(n);
    }
    function c() {
      m(270209052);
    }
    function d() {
      m(270209003);
    }
    function m(e, t) {
      t === void 0 && (t = null);
      var n = o("AdsManagerInteractionScenarioResources").getStaticResources(
        e,
        t,
      );
      (r("JSResource").loadAll(n, function () {}),
        n.forEach(function (e) {
          return r("AdsManagerEntryPointRunner").loadedResources.add(
            e.getModuleId(),
          );
        }));
    }
    function p() {
      r("AdsPERouterHelper")
        .getRouter()
        .preloadRoute(r("AdsPERouteName").ACCOUNTS);
      var e = r("AdsAccountStore").getSelectedAccountID();
      e != null &&
        (o("SYDPreloading").preloadGuidanceHub(
          r("AdsManagerRelayEnvironment"),
          e,
        ),
        o("SYDPreloading").preloadNewFeatures(
          r("AdsManagerRelayEnvironment"),
          e,
        ),
        _(e));
    }
    function _(e) {
      r("gkx")("4981") &&
        r("AdsInsightsObjectStatsStore").get(
          o("AdsInsightsFilter").idIn(r("AdsObjectTypes").ACCOUNT, [e]),
          r("AdsInsightsTimeRange").preset("last_7d"),
          [r("AdsInsightsField").SPEND],
          { accountID: e, timezoneID: 0 },
          ["AdsRoutePreloader.preloadSYDAccountInfoInsights"],
          { useAccountInsightsPreloader: !0 },
        );
    }
    ((l.preloadBillingWizardName = e),
      (l.preloadEditors = s),
      (l.preloadDuplicationDialog = u),
      (l.preloadCreateDraft = c),
      (l.preloadDuplicationProcessingDuplication = d),
      (l.preloadSYD = p),
      (l.preloadSYDAccountInfoInsights = _));
  },
  98,
);
