__d(
  "AdsPlacementCustomizationDataUtils",
  [
    "AdsAssetFeedFieldUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementCustomizationConstants",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).getDefaultRuleOrRuleWithMostPlacements(e);
      return n == null
        ? null
        : o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).getLabelNameFromTargetingRuleNullable(n, t);
    }
    function s(e, t, n) {
      var r = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(e, t).index,
        a = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(e, n).index;
      return typeof r != "number" || typeof a != "number" ? !1 : a !== r;
    }
    function u(e, t, n) {
      var r;
      if (o("AdsPlacementAssetTargetingRuleUtils").hasLabelFieldInRule(e, n)) {
        var a = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getLabelNameFromTargetingRule(e, n);
        return ((r = t.get(a)), r);
      }
    }
    function c(e) {
      return babelHelpers.extends({}, e, { adlabel: null });
    }
    function d(e, t) {
      var n =
        u(e, t, "post_label") ||
        u(e, t, "image_label") ||
        u(e, t, "video_label") ||
        u(e, t, "carousel_label") ||
        t.get(o("AdsPlacementCustomizationConstants").NO_ADLABEL);
      return (n == null ? void 0 : n.adlabel) ===
        o("AdsPlacementCustomizationConstants").NO_ADLABEL
        ? c(n)
        : n;
    }
    function m(e, t, n) {
      var r;
      if (o("AdsPlacementAssetTargetingRuleUtils").hasLabelFieldInRule(e, n)) {
        var a = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getLabelNameFromTargetingRule(e, n);
        return ((r = t.get(a)), r);
      }
      return t.get(o("AdsPlacementCustomizationConstants").NO_ADLABEL);
    }
    function p(e, t, n) {
      var r;
      if (o("AdsPlacementAssetTargetingRuleUtils").hasLabelFieldInRule(e, n)) {
        var a = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getLabelNameFromTargetingRule(e, n);
        return ((r = t.get(a)), r);
      }
      return t.get(o("AdsPlacementCustomizationConstants").NO_ADLABEL);
    }
    ((l.getDefaultAssetAdlabel = e),
      (l.isAssetCustomized = s),
      (l.getMediaAssetFromTargetingRule = d),
      (l.getAssetFromTargetingRule = m),
      (l.getAssetlistFromTargetingRule = p));
  },
  98,
);
