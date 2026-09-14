__d(
  "BizAIStickySignalsUtils",
  [
    "AdsUserSettingsProvider",
    "BizAIAdsDefaultOptInUtils",
    "BizAIStickySettingStoreSource",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r = null;
      ((t = e.stickySettingValue) == null ? void 0 : t.turn_off_prompts) === !0
        ? (r = !1)
        : ((n = e.stickySettingValue) == null ? void 0 : n.turn_off_prompts) ===
            !1 && (r = !0);
      var o = null;
      return (
        e.aPlusCActionType === "STICKY" &&
          (e.aPlusCEnrollStatus === "OPT_IN"
            ? (o = !0)
            : e.aPlusCEnrollStatus === "OPT_OUT" && (o = !1)),
        o == null &&
          e.accountLevelAPlusCOptIn != null &&
          (o = e.accountLevelAPlusCOptIn),
        { isStickyOptInEligible: r, isAPlusCStickyOptInEligible: o }
      );
    }
    function s(t, n, a, i) {
      var l =
          n &&
          o("BizAIAdsDefaultOptInUtils").shouldEnableBizAIToggleByDefault(i),
        s = null,
        u = null;
      if (n && a != null) {
        var c,
          d,
          m,
          p = o("BizAIStickySettingStoreSource")
            .bizAIStickySettingStore.get(a)
            .getValue(),
          _ =
            (c = r("AdsUserSettingsProvider")().getData().first()) == null
              ? void 0
              : c.getValue(),
          f = _ == null ? void 0 : _.aplusc_ai_agent_opt_in_status,
          g = e({
            stickySettingValue: p,
            aPlusCActionType:
              (d = t.creative) == null ||
              (d = d.degrees_of_freedom_spec) == null ||
              (d = d.creative_features_spec) == null ||
              (d = d.biz_ai) == null ||
              (d = d.action_metadata) == null
                ? void 0
                : d.type,
            aPlusCEnrollStatus:
              (m = t.creative) == null ||
              (m = m.degrees_of_freedom_spec) == null ||
              (m = m.creative_features_spec) == null ||
              (m = m.biz_ai) == null
                ? void 0
                : m.enroll_status,
            accountLevelAPlusCOptIn:
              f === "OPTED_IN" ? !0 : f === "OPTED_OUT" ? !1 : null,
          });
        ((s = g.isStickyOptInEligible), (u = g.isAPlusCStickyOptInEligible));
      }
      return {
        isEligibleForDefaultOptIn: l,
        isL1SectionVisible: n,
        isStickyOptInEligible: s,
        isAPlusCStickyOptInEligible: u,
      };
    }
    ((l.computeBizAIStickySignals = e),
      (l.computeBizAIDefaultOptInEligibility = s));
  },
  98,
);
