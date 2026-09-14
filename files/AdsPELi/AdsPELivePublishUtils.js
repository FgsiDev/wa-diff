__d(
  "AdsPELivePublishUtils",
  [
    "AdsAdgroupBulkEditInstantPublishApplyChangesDataActionFlux",
    "AdsAdgroupInstantPublishNameFieldAction",
    "AdsAdgroupInstantPublishNameFieldActionFlux",
    "AdsCampaignGroupBudgetToggleOnInstantPublishApplyChangesDataActionFlux",
    "AdsCampaignGroupBulkEditInstantPublishApplyChangesDataActionFlux",
    "AdsEditSource",
    "AdsObjectTypes",
    "AdsPEAdgroupLiveStatusChangeActionFlux",
    "AdsPECampaignGroupLiveStatusChangeActionFlux",
    "AdsUEditorCampaignBulkEditInstantPublishApplyChangesActionFlux",
    "AdsUEditorCampaignGroupInstantPublishBudgetFieldActionFlux",
    "AdsUEditorCampaignGroupInstantPublishNameFieldAction",
    "AdsUEditorCampaignGroupInstantPublishNameFieldActionFlux",
    "AdsUEditorCampaignGroupSetNameAction",
    "AdsUEditorCampaignInstantPublishBidFieldActionFlux",
    "AdsUEditorCampaignInstantPublishBudgetFieldActionFlux",
    "AdsUEditorCampaignInstantPublishMinSpendTargetFieldActionFlux",
    "AdsUEditorCampaignInstantPublishNameFieldAction",
    "AdsUEditorCampaignInstantPublishNameFieldActionFlux",
    "AdsUEditorCampaignInstantPublishOptimalOptimizationActionFlux",
    "AdsUEditorCampaignInstantPublishScheduleFieldActionFlux",
    "AdsUEditorCampaignSetNameAction",
    "AdsUEditorHostIDs",
    "AdsUEditorPECampaignLiveStatusChangeActionFlux",
    "cr:37565",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("immutable").Map(
        ((e = {}),
        (e[(u = r("AdsObjectTypes")).CAMPAIGN_GROUP] = function (e, t, n) {
          r("AdsUEditorCampaignGroupInstantPublishNameFieldAction").dispatch(
            {
              campaignGroupIDs: e,
              hostID: r("AdsUEditorHostIDs").EDITING,
              name: t,
              oldName: n,
            },
            { line: "60", module: "AdsPELivePublishUtils.js", moduleID: i.id },
          );
        }),
        (e[u.CAMPAIGN] = function (e, t, n) {
          r("AdsUEditorCampaignInstantPublishNameFieldAction").dispatch(
            {
              campaignIDs: e,
              hostID: r("AdsUEditorHostIDs").EDITING,
              name: t,
              oldName: n,
            },
            { line: "72", module: "AdsPELivePublishUtils.js", moduleID: i.id },
          );
        }),
        (e[u.ADGROUP] = function (e, t, n) {
          r("AdsAdgroupInstantPublishNameFieldAction").dispatch(
            { ids: e, name: t, oldName: n },
            { line: "84", module: "AdsPELivePublishUtils.js", moduleID: i.id },
          );
        }),
        e),
      ),
      d = r("immutable").Map(
        ((s = {}),
        (s[u.CAMPAIGN_GROUP] = function (e, t) {
          r("AdsUEditorCampaignGroupSetNameAction").dispatch(
            {
              campaignGroupIDs: e,
              hostID: r("AdsUEditorHostIDs").EDITING,
              name: t,
              source: r("AdsEditSource").inline,
            },
            { line: "97", module: "AdsPELivePublishUtils.js", moduleID: i.id },
          );
        }),
        (s[u.CAMPAIGN] = function (e, t) {
          r("AdsUEditorCampaignSetNameAction").dispatch(
            {
              campaignIDs: e,
              hostID: r("AdsUEditorHostIDs").EDITING,
              name: t,
              source: r("AdsEditSource").inline,
            },
            { line: "105", module: "AdsPELivePublishUtils.js", moduleID: i.id },
          );
        }),
        (s[u.ADGROUP] = function (e, t) {
          n("cr:37565").dispatch(
            {
              adgroupIDs: e,
              hostID: r("AdsUEditorHostIDs").EDITING,
              name: t,
              source: r("AdsEditSource").inline,
            },
            { line: "113", module: "AdsPELivePublishUtils.js", moduleID: i.id },
          );
        }),
        s),
      );
    function m(e) {
      return e ===
        o("AdsPECampaignGroupLiveStatusChangeActionFlux").actionType ||
        e ===
          o("AdsUEditorCampaignGroupInstantPublishBudgetFieldActionFlux")
            .actionType ||
        e ===
          o("AdsUEditorCampaignGroupInstantPublishNameFieldActionFlux")
            .actionType ||
        e ===
          o("AdsCampaignGroupBulkEditInstantPublishApplyChangesDataActionFlux")
            .actionType ||
        e ===
          o(
            "AdsCampaignGroupBudgetToggleOnInstantPublishApplyChangesDataActionFlux",
          ).actionType
        ? "campaign"
        : e ===
              o("AdsUEditorPECampaignLiveStatusChangeActionFlux").actionType ||
            e ===
              o("AdsUEditorCampaignInstantPublishNameFieldActionFlux")
                .actionType ||
            e ===
              o("AdsUEditorCampaignInstantPublishBudgetFieldActionFlux")
                .actionType ||
            e ===
              o("AdsUEditorCampaignInstantPublishMinSpendTargetFieldActionFlux")
                .actionType ||
            e ===
              o("AdsUEditorCampaignInstantPublishBidFieldActionFlux")
                .actionType ||
            e ===
              o("AdsUEditorCampaignInstantPublishOptimalOptimizationActionFlux")
                .actionType ||
            e ===
              o("AdsUEditorCampaignInstantPublishScheduleFieldActionFlux")
                .actionType ||
            e ===
              o(
                "AdsUEditorCampaignBulkEditInstantPublishApplyChangesActionFlux",
              ).actionType
          ? "ad_set"
          : e === o("AdsPEAdgroupLiveStatusChangeActionFlux").actionType ||
              e ===
                o("AdsAdgroupInstantPublishNameFieldActionFlux").actionType ||
              e ===
                o("AdsAdgroupBulkEditInstantPublishApplyChangesDataActionFlux")
                  .actionType
            ? "ad"
            : null;
    }
    function p(e, t) {
      return (
        e.size === 1 &&
        t.some(function (t) {
          return e.includes(t);
        })
      );
    }
    function _(e, t) {
      return (
        e.size === t.length &&
        t.every(function (t) {
          return e.includes(t);
        })
      );
    }
    function f(e) {
      return e.size === 0;
    }
    ((l.AdsObjectTypesToPublishNameActionsMap = c),
      (l.AdsObjectTypesToSetNameActionsMap = d),
      (l.getAdObjectLevelFromInstantPublishAction = m),
      (l.isTheSameFieldChanged = p),
      (l.areChangesMadeOnTheSameSubFields = _),
      (l.noChangesMadeBefore = f));
  },
  98,
);
