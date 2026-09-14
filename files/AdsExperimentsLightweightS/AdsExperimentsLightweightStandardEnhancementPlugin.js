__d(
  "AdsExperimentsLightweightStandardEnhancementPlugin",
  [
    "fbt",
    "AdsAdObjectsSelectors",
    "AdsAutomaticFlowUtils",
    "AutomationRenamingConstants$FbtEnum",
    "adsExperimentsLightweightTestStandardEnhancementsMutator",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
      getAdObjectLevel: function () {
        return "ad";
      },
      eligibilityConfig: r("immutable").Map({
        one_of_the_ads_ineligible_for_se: {
          errorMessage: m,
          getIneligibleData: u,
          isRecoverable: !0,
          isPublishOnlyCheck: !1,
        },
        not_have_same_se_status: {
          errorMessage: p,
          getIneligibleData: c,
          isRecoverable: !0,
          isPublishOnlyCheck: !1,
        },
        ad_object_inactive: {
          errorMessage: _,
          getIneligibleData: d,
          isRecoverable: !0,
          isPublishOnlyCheck: !1,
        },
      }),
      getLoggingEntryPoint: function (t) {
        return t === "AM_LIGHTWEIGHT_CHECKBOX_CLICK"
          ? "LightweightCheckboxStandardEnhancements"
          : "LightweightGuidanceStandardEnhancements";
      },
      hasOptInUXSupportForAdObjectTestRecovery: !0,
      isVisibleForAdvertiser: function () {
        return !1;
      },
      key: "STANDARD_ENHANCEMENT",
      mutationConfig: {
        getAdgroupMutator: function (t, n) {
          return r("adsExperimentsLightweightTestStandardEnhancementsMutator")(
            t,
            n,
          );
        },
        hasClientSideMutation: function () {
          return !0;
        },
      },
      getName: function () {
        return s._(/*BTDS*/ "{featureName}", [
          s._param(
            "featureName",
            r("AutomationRenamingConstants$FbtEnum").StandardEnhancements,
          ),
        ]);
      },
      type: "lightweightABTest",
    };
    function u(e, t) {
      var n = e.campaign,
        r = e.campaignGroup;
      if ((n == null ? void 0 : n.id) == null || t == null) return null;
      var a = t.adAccount,
        i = new Set();
      return o("AdsAdObjectsSelectors")
        .getChildAdgroupsLoadObjectSelector({
          accountID: a.account_id,
          campaignIDs: [n == null ? void 0 : n.id],
        })
        .mapValue(function (e) {
          if (
            (e.forEach(function (e) {
              r != null &&
                !o("AdsAutomaticFlowUtils").isEligibleForAutomaticFlowLite(a, {
                  campaignGroup: r,
                  campaign: n,
                  adgroup: e,
                }) &&
                i.add(e.id);
            }),
            i.size > 0)
          )
            return { adgroupIDs: i };
        })
        .getValue();
    }
    function c(e, t) {
      var n = e.campaign;
      if ((n == null ? void 0 : n.id) == null || t == null) return null;
      var r = t.adAccount;
      return o("AdsAdObjectsSelectors")
        .getChildAdgroupsLoadObjectSelector({
          accountID: r.account_id,
          campaignIDs: [n == null ? void 0 : n.id],
        })
        .mapValue(function (e) {
          var t = e.size,
            n = 0,
            r = 0;
          if (
            (e.forEach(function (e) {
              var t;
              ((t = e.creative) == null ||
              (t = t.degrees_of_freedom_spec) == null ||
              (t = t.creative_features_spec) == null ||
              (t = t.standard_enhancements) == null
                ? void 0
                : t.enroll_status) !== "OPT_IN"
                ? n++
                : r++;
            }),
            !(n === t || r === t))
          )
            return {};
        })
        .getValue();
    }
    function d(e, t) {
      var n = e.campaign;
      if ((n == null ? void 0 : n.id) == null || t == null) return null;
      var r = t.adAccount;
      return o("AdsAdObjectsSelectors")
        .getChildAdgroupsLoadObjectSelector({
          accountID: r.account_id,
          campaignIDs: [n == null ? void 0 : n.id],
        })
        .mapValue(function (e) {
          var t = new Set();
          if (
            (e.forEach(function (e) {
              e.status !== "ACTIVE" && t.add(e.id);
            }),
            t.size > 0)
          )
            return { adgroupIDs: t };
        })
        .getValue();
    }
    function m() {
      return s._(
        /*BTDS*/ "Make sure all ads in your ad set use a single image or video so they're eligible for standard enhancements.",
      );
    }
    function p() {
      return s._(
        /*BTDS*/ "Make sure all ads in your ad set have {lightweight test name} either turned on or off.",
        [s._param("lightweight test name", e.getName())],
      );
    }
    function _() {
      return s._(
        /*BTDS*/ "Ensure all ads in your ad set are published and turned on to run this A\/B test.",
      );
    }
    var f = e;
    l.default = f;
  },
  226,
);
