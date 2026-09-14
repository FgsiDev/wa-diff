__d(
  "adsUEditorAdgroupPlacementResetMutator",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsInstagramApplicabilityUtils",
    "AdsUEditorInstagramMutators",
    "adsAutomaticFlowMutationSetDoFSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a = e.account,
        i = e.adgroup,
        l = e.campaign,
        s = e.campaignGroup,
        u = e.eligibilityInformation,
        c = e.getShouldEnableAutomaticFlowByDefault,
        d = i,
        m = !1;
      o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(d) &&
        ((d = o("AdsUEditorInstagramMutators").setAdFormatForDCO(d)), (m = !0));
      var p = r(
        "AdsInstagramApplicabilityUtils",
      ).placementSpecHasInstagramStoryPlacementOnly(u.spec);
      return (
        ((t = d.creative) == null || (t = t.interactive_components_spec) == null
          ? void 0
          : t.components) != null &&
          p &&
          ((d = r(
            "AdsAdgroupRecordAccessors",
          ).creative.interactive_components_spec.delete(d)),
          (m = !0)),
        ((n = d.creative) == null || (n = n.portrait_customizations) == null
          ? void 0
          : n.carousel_delivery_mode) === "fixed_num_cards" &&
          ((d = r(
            "AdsAdgroupRecordAccessors",
          ).creative.portrait_customizations.carousel_delivery_mode.set(
            "optimal_num_cards",
            d,
          )),
          (m = !0)),
        (d = o(
          "adsAutomaticFlowMutationSetDoFSpec",
        ).adsAutomaticFlowLiteSpecMutator(
          a,
          { campaign: l, campaignGroup: s, adgroup: d },
          c,
        )),
        { mutatedAdgroup: d, isMutated: m }
      );
    }
    l.default = e;
  },
  98,
);
