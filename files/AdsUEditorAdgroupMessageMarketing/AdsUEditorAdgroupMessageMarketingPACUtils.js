__d(
  "AdsUEditorAdgroupMessageMarketingPACUtils",
  ["AdsPlacementAssetTargetingRuleUtils", "immutable"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.map(function (e) {
        return r("immutable").fromJS(e);
      });
      if (t == null) return null;
      var n = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).getTargetingRuleContainingPlacementList(
        r("immutable").List(t),
        r("immutable").List([
          { platform: "whatsapp", position: "marketing_messages" },
        ]),
      );
      return n == null ? void 0 : n.rule;
    }
    l.getTargetingRuleForMarketingMessage = e;
  },
  98,
);
