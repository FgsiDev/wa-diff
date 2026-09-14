__d(
  "getInstantPublishScenariosInfo",
  [
    "AdsAdgroupBulkEditInstantPublishApplyChangesDataActionFlux",
    "AdsAdgroupInstantPublishNameFieldActionFlux",
    "AdsCampaignGroupBidStrategyInstantPublishApplyChangesDataActionFlux",
    "AdsCampaignGroupBudgetToggleOnInstantPublishApplyChangesDataActionFlux",
    "AdsCampaignGroupBulkEditInstantPublishApplyChangesDataActionFlux",
    "AdsPEAdgroupLiveStatusChangeActionFlux",
    "AdsPEBatchInstantPublishActionFlux",
    "AdsPECampaignGroupLiveStatusChangeActionFlux",
    "AdsPEInstantDeleteActionFlux",
    "AdsUEditorCampaignBulkEditInstantPublishApplyChangesActionFlux",
    "AdsUEditorCampaignGroupInstantPublishBudgetFieldActionFlux",
    "AdsUEditorCampaignGroupInstantPublishNameFieldActionFlux",
    "AdsUEditorCampaignGroupSetBidStrategyInDraftActionFlux",
    "AdsUEditorCampaignInstantPublishBidFieldActionFlux",
    "AdsUEditorCampaignInstantPublishBudgetFieldActionFlux",
    "AdsUEditorCampaignInstantPublishMinSpendTargetFieldActionFlux",
    "AdsUEditorCampaignInstantPublishNameFieldActionFlux",
    "AdsUEditorCampaignInstantPublishOptimalOptimizationActionFlux",
    "AdsUEditorCampaignInstantPublishScheduleFieldActionFlux",
    "AdsUEditorPECampaignLiveStatusChangeActionFlux",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
        o("AdsUEditorCampaignBulkEditInstantPublishApplyChangesActionFlux")
          .actionType,
        o("AdsAdgroupBulkEditInstantPublishApplyChangesDataActionFlux")
          .actionType,
        o("AdsCampaignGroupBulkEditInstantPublishApplyChangesDataActionFlux")
          .actionType,
        o("AdsUEditorCampaignInstantPublishOptimalOptimizationActionFlux")
          .actionType,
        o("AdsCampaignGroupBidStrategyInstantPublishApplyChangesDataActionFlux")
          .actionType,
        o("AdsUEditorCampaignGroupSetBidStrategyInDraftActionFlux").actionType,
      ]),
      s = new Set([
        o("AdsAdgroupInstantPublishNameFieldActionFlux").actionType,
        o("AdsUEditorCampaignInstantPublishNameFieldActionFlux").actionType,
        o("AdsUEditorCampaignGroupInstantPublishNameFieldActionFlux")
          .actionType,
        o("AdsUEditorCampaignInstantPublishScheduleFieldActionFlux").actionType,
        o("AdsUEditorCampaignInstantPublishBidFieldActionFlux").actionType,
        o("AdsUEditorCampaignGroupInstantPublishBudgetFieldActionFlux")
          .actionType,
        o("AdsUEditorCampaignInstantPublishBudgetFieldActionFlux").actionType,
        o("AdsUEditorCampaignInstantPublishMinSpendTargetFieldActionFlux")
          .actionType,
      ]),
      u = new Set([o("AdsPEBatchInstantPublishActionFlux").actionType]),
      c = new Set([
        o("AdsPEInstantDeleteActionFlux").actionType,
        o("AdsPEAdgroupLiveStatusChangeActionFlux").actionType,
        o("AdsUEditorPECampaignLiveStatusChangeActionFlux").actionType,
        o("AdsPECampaignGroupLiveStatusChangeActionFlux").actionType,
        o(
          "AdsCampaignGroupBudgetToggleOnInstantPublishApplyChangesDataActionFlux",
        ).actionType,
      ]);
    function d(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("AdsUEditorCampaignGroupInstantPublishBudgetFieldActionFlux")
              .actionType &&
          "campaignGroupIDs" in e
        ) {
          var t = e.campaignGroupIDs;
          return t;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("AdsUEditorCampaignGroupInstantPublishNameFieldActionFlux")
              .actionType &&
          "campaignGroupIDs" in e
        ) {
          var n = e.campaignGroupIDs;
          return n;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("AdsUEditorCampaignBulkEditInstantPublishApplyChangesActionFlux")
              .actionType &&
          "campaignIDs" in e
        ) {
          var r = e.campaignIDs;
          return r;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("AdsUEditorCampaignInstantPublishBidFieldActionFlux")
              .actionType &&
          "campaignIDs" in e
        ) {
          var a = e.campaignIDs;
          return a;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("AdsUEditorCampaignInstantPublishBudgetFieldActionFlux")
              .actionType &&
          "campaignIDs" in e
        ) {
          var i = e.campaignIDs;
          return i;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("AdsUEditorCampaignInstantPublishMinSpendTargetFieldActionFlux")
              .actionType &&
          "campaignIDs" in e
        ) {
          var l = e.campaignIDs;
          return l;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("AdsUEditorCampaignInstantPublishNameFieldActionFlux")
              .actionType &&
          "campaignIDs" in e
        ) {
          var s = e.campaignIDs;
          return s;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("AdsUEditorCampaignInstantPublishOptimalOptimizationActionFlux")
              .actionType &&
          "campaignIDs" in e
        ) {
          var u = e.campaignIDs;
          return u;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("AdsUEditorCampaignInstantPublishScheduleFieldActionFlux")
              .actionType &&
          "campaignIDs" in e
        ) {
          var c = e.campaignIDs;
          return c;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("AdsUEditorPECampaignLiveStatusChangeActionFlux").actionType &&
          "campaignIDs" in e
        ) {
          var d = e.campaignIDs;
          return d;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("AdsAdgroupBulkEditInstantPublishApplyChangesDataActionFlux")
              .actionType &&
          "ids" in e
        ) {
          var m = e.ids;
          return m;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("AdsAdgroupInstantPublishNameFieldActionFlux").actionType &&
          "ids" in e
        ) {
          var p = e.ids;
          return p;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o(
              "AdsCampaignGroupBudgetToggleOnInstantPublishApplyChangesDataActionFlux",
            ).actionType &&
          "ids" in e
        ) {
          var _ = e.ids;
          return _;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o(
              "AdsCampaignGroupBulkEditInstantPublishApplyChangesDataActionFlux",
            ).actionType &&
          "ids" in e
        ) {
          var f = e.ids;
          return f;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type === o("AdsPEAdgroupLiveStatusChangeActionFlux").actionType &&
          "ids" in e
        ) {
          var g = e.ids;
          return g;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("AdsPECampaignGroupLiveStatusChangeActionFlux").actionType &&
          "ids" in e
        ) {
          var h = e.ids;
          return h;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o(
              "AdsCampaignGroupBidStrategyInstantPublishApplyChangesDataActionFlux",
            ).actionType &&
          "campaignGroupIDs" in e &&
          "campaignIDs" in e
        ) {
          var y = e.campaignGroupIDs,
            C = e.campaignIDs;
          return y.concat(C);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("AdsUEditorCampaignGroupSetBidStrategyInDraftActionFlux")
              .actionType &&
          "campaignGroupIDs" in e &&
          "campaignIDs" in e
        ) {
          var b = e.campaignGroupIDs,
            v = e.campaignIDs;
          return b.concat(v);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type === o("AdsPEBatchInstantPublishActionFlux").actionType &&
          "campaignGroupIDs" in e &&
          "campaignIDs" in e &&
          "adgroupIDs" in e
        ) {
          var S = e.campaignGroupIDs,
            R = e.campaignIDs,
            L = e.adgroupIDs;
          return S.concat(R, L);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type === o("AdsPEInstantDeleteActionFlux").actionType &&
          "campaignGroupIDs" in e &&
          "campaignIDs" in e &&
          "adgroupIDs" in e
        ) {
          var E = e.campaignGroupIDs,
            k = e.campaignIDs,
            I = e.adgroupIDs;
          return E.concat(k, I);
        }
        return [];
      })(e);
    }
    function m(t) {
      var n = d(t);
      return e.has(t.type)
        ? {
            adObjectIDs: n,
            immediatePublishIfValid: !1,
            interaction: "am.publish_ads.in_bulkedit",
            userFlow: r("qpl")._(270220129, "8408"),
          }
        : s.has(t.type)
          ? {
              adObjectIDs: n,
              immediatePublishIfValid: !0,
              interaction: "am.publish_ads.in_cell_inline",
              userFlow: r("qpl")._(270210707, "2940"),
            }
          : u.has(t.type)
            ? {
                adObjectIDs: n,
                immediatePublishIfValid: !1,
                interaction: "am.publish_ads.in_editor",
                userFlow: r("qpl")._(270218338, "7144"),
              }
            : c.has(t.type)
              ? {
                  adObjectIDs: n,
                  immediatePublishIfValid: !0,
                  interaction: "am.publish_ads.in_rolldown",
                  userFlow: r("qpl")._(270206350, "1675"),
                }
              : null;
    }
    l.default = m;
  },
  98,
);
