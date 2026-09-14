__d(
  "AdsPERevertLoggerHelper",
  ["invariant", "AdsPELoggerUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [];
    function u(t) {
      var n = t.campaignGroupIDs || e,
        r = t.campaignIDs || e,
        o = t.adgroupIDs || e;
      if (n.length > 0)
        return ["campaign_group_revert_changes", "campaigngroup_edit"];
      if (r.length > 0) return ["campaign_revert", "campaign_edit"];
      if (o.length > 0) return ["ad_revert_changes", "ad_edit"];
      s(0, 5753);
    }
    function c(t) {
      var n = t.campaignGroupIDs || e,
        r = t.campaignIDs || e,
        a = t.adgroupIDs || e,
        i = o("AdsPELoggerUtils").getObjectCountsFromAction({
          campaignGroupIDs: t.campaignGroupIDs,
          campaignIDs: t.campaignIDs,
          adgroupIDs: t.adgroupIDs,
        });
      if (n.length > 0)
        return babelHelpers.extends({}, i, {
          current_action_items_count: n.length,
        });
      if (r.length > 0)
        return babelHelpers.extends({}, i, {
          current_action_items_count: r.length,
        });
      if (a.length > 0)
        return babelHelpers.extends({}, i, {
          current_action_items_count: a.length,
        });
      s(0, 5754);
    }
    ((l.getRevertEvent = u), (l.getRevertData = c));
  },
  98,
);
