__d(
  "AdsExistingPostCTXDefaultingUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsClickToMessageSABRBudgetDefaultStoreUtils",
    "AdsUEditorMessagingDestinationUtils",
    "CtxAdvertiserQeHbtExposureFalcoEvent",
    "CurrentAdAccount",
    "IGFAFeatureGating",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return (
        e ||
        o("AdsUEditorMessagingDestinationUtils").isClickToMessageAdDestination(
          t,
        )
      );
    }
    function s(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
        e === r("AdsAPIObjectives").LINK_CLICKS
      );
    }
    function u() {
      return r("qex")._("1193") === !0;
    }
    function c() {
      return r("qex")._("1425") === !0;
    }
    function d(e) {
      switch (e) {
        case r("AdsAPIObjectives").LINK_CLICKS:
          return u();
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return c();
        default:
          return !1;
      }
    }
    function m(e) {
      var t = r("gkx")("11102");
      if (t) {
        var n = (e ? r("gkx")("11803") : r("gkx")("11946")) === !0;
        return (
          e &&
            r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
              var e;
              return {
                condition: n ? "test" : "control",
                feature_name: "ctx_default_ig_suggested_post",
                hbt_name: "h2_train_1_am_mid_adacc_w998_hbt",
                unit_id: (e = r("CurrentAdAccount").getID()) != null ? e : "",
                unit_type: "ad_account_id",
              };
            }),
          n
        );
      }
      return (e ? r("qex")._("205") : r("qex")._("298")) === !0;
    }
    function p(e, t) {
      return o(
        "AdsUEditorMessagingDestinationUtils",
      ).isClickToMessageAdDestination(e) &&
        t === "CTX_NEW_MODEL" &&
        m(!1)
        ? "CTX_AM_NEW_MODEL_2026"
        : t;
    }
    function _() {
      return r("qex")._("506") === !0;
    }
    function f(e) {
      return (e ? r("gkx")("22185") : r("gkx")("22193")) === !0;
    }
    function g(e, t) {
      return o(
        "AdsUEditorMessagingDestinationUtils",
      ).isClickToMessageAdDestination(e)
        ? m(t)
        : f(t);
    }
    function h(e, t, n, r) {
      return y(e, t, n, r) && d(r);
    }
    function y(t, n, a, i) {
      return !o("AdsClickToMessageSABRBudgetDefaultStoreUtils").hasCtxAdsInL28(
        t,
      ) && !o("IGFAFeatureGating").passesIgXmaDogfoodingGK()
        ? !1
        : s(i) && e(a, n) && r("gkx")("1115");
    }
    function C(t, n, a) {
      return (
        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t) &&
        s(n) &&
        e(!1, a) &&
        (o("IGFAFeatureGating").passesIgXmaDogfoodingGK() ||
          r("justknobx")._("1295"))
      );
    }
    ((l.isCTXExistingPostDefaultingEnabledByQE = d),
      (l.isCTXDefaultSuggestedPostQEEnabled = m),
      (l.maybeUpgradeToNewCTXModelAudienceType = p),
      (l.isCTXMultiSuggestedPostsQEEnabled = _),
      (l.isNonCTXDefaultSuggestedPostQEEnabled = f),
      (l.isSuggestedPostDefaultingQEEnabled = g),
      (l.shouldDefaultToExistingPostForCTXByQE = h),
      (l.isEligibleForDefaultToExistingPostForCTX = y),
      (l.isExistingPostAdForCTX = C));
  },
  98,
);
