__d(
  "AdsInstantPublishUIStore",
  [
    "AdsAdgroupBulkEditInstantPublishApplyChangesDataActionFlux",
    "AdsAdgroupInstantPublishNameFieldActionFlux",
    "AdsCampaignGroupBidStrategyInstantPublishApplyChangesDataActionFlux",
    "AdsCampaignGroupBudgetToggleOnInstantPublishApplyChangesDataActionFlux",
    "AdsCampaignGroupBulkEditInstantPublishApplyChangesDataActionFlux",
    "AdsDataAtom",
    "AdsDraftDraftPublishDataActionFlux",
    "AdsDraftDraftPublishWillCompleteDataActionFlux",
    "AdsPEAdgroupLiveStatusChangeActionFlux",
    "AdsPEBatchInstantPublishActionFlux",
    "AdsPECampaignGroupLiveStatusChangeActionFlux",
    "AdsPECloseConfirmPublishDialogActionFlux",
    "AdsPEInstantDeleteActionFlux",
    "AdsPEShowConfirmPublishDialogActionFlux",
    "AdsUEditorCampaignBulkEditInstantPublishApplyChangesActionFlux",
    "AdsUEditorCampaignGroupInstantPublishBidStrategyAmountBudgetAmountActionFlux",
    "AdsUEditorCampaignGroupInstantPublishBudgetFieldActionFlux",
    "AdsUEditorCampaignGroupInstantPublishNameFieldActionFlux",
    "AdsUEditorCampaignGroupSetBidStrategyInDraftActionFlux",
    "AdsUEditorCampaignInstantPublishBidConstraintsActionFlux",
    "AdsUEditorCampaignInstantPublishBidConstraintsBudgetAmountActionFlux",
    "AdsUEditorCampaignInstantPublishBidFieldActionFlux",
    "AdsUEditorCampaignInstantPublishBidStrategyAmountBudgetAmountActionFlux",
    "AdsUEditorCampaignInstantPublishBudgetFieldActionFlux",
    "AdsUEditorCampaignInstantPublishMinSpendTargetFieldActionFlux",
    "AdsUEditorCampaignInstantPublishNameFieldActionFlux",
    "AdsUEditorCampaignInstantPublishOptimalOptimizationActionFlux",
    "AdsUEditorCampaignInstantPublishScheduleFieldActionFlux",
    "AdsUEditorPECampaignLiveStatusChangeActionFlux",
    "FluxReduceStore",
    "adsDraftGetAdObjectIDsFromPublishResponse",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s = r("immutable")).Record({
        changedAdgroupIDs: s.Set(),
        changedCampaignIDs: s.Set(),
        changedCampaignGroupIDs: s.Set(),
        publishingAdgroupIDs: s.Set(),
        publishingCampaignIDs: s.Set(),
        publishingCampaignGroupIDs: s.Set(),
        publishingMixChangesAdObjectIDs: s.Set(),
        mixChangesAdObjectIDs: s.Set(),
      }),
      c = u(),
      d = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.isChangedAdgroupID = function (e) {
              var t =
                n.getState().changedAdgroupIDs.has(e) ||
                n.getState().publishingAdgroupIDs.has(e);
              return t && !n.getHasMixedChanges(e);
            }),
            (n.isChangedCampaignID = function (e) {
              var t =
                n.getState().changedCampaignIDs.has(e) ||
                n.getState().publishingCampaignIDs.has(e);
              return t && !n.getHasMixedChanges(e);
            }),
            (n.isChangedCampaignGroupID = function (e) {
              var t =
                n.getState().changedCampaignGroupIDs.has(e) ||
                n.getState().publishingCampaignGroupIDs.has(e);
              return t && !n.getHasMixedChanges(e);
            }),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getInitialState = function () {
            return c;
          }),
          (a.__getActionTypes = function () {
            return [
              o("AdsPECampaignGroupLiveStatusChangeActionFlux").actionType,
              o("AdsUEditorCampaignGroupInstantPublishBudgetFieldActionFlux")
                .actionType,
              o("AdsUEditorCampaignGroupInstantPublishNameFieldActionFlux")
                .actionType,
              o(
                "AdsCampaignGroupBulkEditInstantPublishApplyChangesDataActionFlux",
              ).actionType,
              o(
                "AdsCampaignGroupBudgetToggleOnInstantPublishApplyChangesDataActionFlux",
              ).actionType,
              o("AdsUEditorPECampaignLiveStatusChangeActionFlux").actionType,
              o("AdsUEditorCampaignInstantPublishNameFieldActionFlux")
                .actionType,
              o("AdsUEditorCampaignInstantPublishBudgetFieldActionFlux")
                .actionType,
              o("AdsUEditorCampaignInstantPublishMinSpendTargetFieldActionFlux")
                .actionType,
              o("AdsUEditorCampaignInstantPublishBidFieldActionFlux")
                .actionType,
              o("AdsUEditorCampaignInstantPublishBidConstraintsActionFlux")
                .actionType,
              o(
                "AdsUEditorCampaignInstantPublishBidConstraintsBudgetAmountActionFlux",
              ).actionType,
              r(
                "AdsUEditorCampaignInstantPublishBidStrategyAmountBudgetAmountActionFlux",
              ).actionType,
              o("AdsUEditorCampaignInstantPublishOptimalOptimizationActionFlux")
                .actionType,
              o("AdsUEditorCampaignInstantPublishScheduleFieldActionFlux")
                .actionType,
              o(
                "AdsUEditorCampaignBulkEditInstantPublishApplyChangesActionFlux",
              ).actionType,
              o("AdsPEAdgroupLiveStatusChangeActionFlux").actionType,
              o("AdsAdgroupInstantPublishNameFieldActionFlux").actionType,
              o("AdsAdgroupBulkEditInstantPublishApplyChangesDataActionFlux")
                .actionType,
              o("AdsPEInstantDeleteActionFlux").actionType,
              o("AdsPEBatchInstantPublishActionFlux").actionType,
              o("AdsPECloseConfirmPublishDialogActionFlux").actionType,
              o("AdsDraftDraftPublishWillCompleteDataActionFlux").actionType,
              o("AdsPEShowConfirmPublishDialogActionFlux").actionType,
              o("AdsDraftDraftPublishDataActionFlux").actionType,
              o(
                "AdsCampaignGroupBidStrategyInstantPublishApplyChangesDataActionFlux",
              ).actionType,
              o("AdsUEditorCampaignGroupSetBidStrategyInDraftActionFlux")
                .actionType,
              o(
                "AdsUEditorCampaignGroupInstantPublishBidStrategyAmountBudgetAmountActionFlux",
              ).actionType,
            ];
          }),
          (a.getHasMixedChanges = function (t) {
            return (
              this.getState().mixChangesAdObjectIDs.has(t) ||
              this.getState().publishingMixChangesAdObjectIDs.has(t)
            );
          }),
          (a.reduce = function (t, n) {
            var e = n.action;
            switch (e.type) {
              case o("AdsPECampaignGroupLiveStatusChangeActionFlux").actionType:
              case o(
                "AdsCampaignGroupBulkEditInstantPublishApplyChangesDataActionFlux",
              ).actionType:
              case o(
                "AdsCampaignGroupBudgetToggleOnInstantPublishApplyChangesDataActionFlux",
              ).actionType:
                return this.$AdsInstantPublishUIStore$p_1(t, "campaign", e.ids);
              case o(
                "AdsUEditorCampaignBulkEditInstantPublishApplyChangesActionFlux",
              ).actionType:
              case o("AdsUEditorCampaignInstantPublishNameFieldActionFlux")
                .actionType:
              case o("AdsUEditorCampaignInstantPublishBidFieldActionFlux")
                .actionType:
              case r(
                "AdsUEditorCampaignInstantPublishBidStrategyAmountBudgetAmountActionFlux",
              ).actionType:
              case o("AdsUEditorCampaignInstantPublishBidConstraintsActionFlux")
                .actionType:
              case o(
                "AdsUEditorCampaignInstantPublishBidConstraintsBudgetAmountActionFlux",
              ).actionType:
              case o("AdsUEditorCampaignInstantPublishBudgetFieldActionFlux")
                .actionType:
              case o(
                "AdsUEditorCampaignInstantPublishMinSpendTargetFieldActionFlux",
              ).actionType:
              case o(
                "AdsUEditorCampaignInstantPublishOptimalOptimizationActionFlux",
              ).actionType:
              case o("AdsUEditorCampaignInstantPublishScheduleFieldActionFlux")
                .actionType:
              case o("AdsUEditorPECampaignLiveStatusChangeActionFlux")
                .actionType:
                return this.$AdsInstantPublishUIStore$p_1(
                  t,
                  "ad_set",
                  e.campaignIDs,
                );
              case o("AdsPEAdgroupLiveStatusChangeActionFlux").actionType:
              case o("AdsAdgroupInstantPublishNameFieldActionFlux").actionType:
              case o(
                "AdsAdgroupBulkEditInstantPublishApplyChangesDataActionFlux",
              ).actionType:
                return this.$AdsInstantPublishUIStore$p_1(t, "ad", e.ids);
              case o("AdsPEInstantDeleteActionFlux").actionType:
              case o("AdsPEBatchInstantPublishActionFlux").actionType:
                return this.$AdsInstantPublishUIStore$p_2(
                  t,
                  e.campaignGroupIDs,
                  e.campaignIDs,
                  e.adgroupIDs,
                );
              case o(
                "AdsCampaignGroupBidStrategyInstantPublishApplyChangesDataActionFlux",
              ).actionType:
              case o(
                "AdsUEditorCampaignGroupInstantPublishBidStrategyAmountBudgetAmountActionFlux",
              ).actionType:
                return this.$AdsInstantPublishUIStore$p_2(
                  t,
                  e.campaignGroupIDs,
                  e.campaignIDs,
                  [],
                );
              case o("AdsUEditorCampaignGroupSetBidStrategyInDraftActionFlux")
                .actionType:
                return e.isInstantPublish
                  ? this.$AdsInstantPublishUIStore$p_2(
                      t,
                      e.campaignGroupIDs,
                      e.campaignIDs,
                      [],
                    )
                  : t;
              case o("AdsUEditorCampaignGroupInstantPublishNameFieldActionFlux")
                .actionType:
              case o(
                "AdsUEditorCampaignGroupInstantPublishBudgetFieldActionFlux",
              ).actionType:
                return this.$AdsInstantPublishUIStore$p_1(
                  t,
                  "campaign",
                  e.campaignGroupIDs,
                );
              case o("AdsPECloseConfirmPublishDialogActionFlux").actionType: {
                var a = t.mixChangesAdObjectIDs,
                  i = t.publishingMixChangesAdObjectIDs;
                return (
                  e.confirm && (i = i.add(e.id)),
                  (a = a.delete(e.id)),
                  t.merge({
                    mixChangesAdObjectIDs: a,
                    publishingMixChangesAdObjectIDs: i,
                  })
                );
              }
              case o("AdsDraftDraftPublishWillCompleteDataActionFlux")
                .actionType: {
                var l = e.response || {};
                return this.$AdsInstantPublishUIStore$p_3(t, l);
              }
              case o("AdsPEShowConfirmPublishDialogActionFlux").actionType:
                return t.merge({
                  mixChangesAdObjectIDs: t.mixChangesAdObjectIDs.add(
                    e.publishConfirmDialogShown.ids[0],
                  ),
                });
              case o("AdsDraftDraftPublishDataActionFlux").actionType: {
                var s = e.selection,
                  u = (s == null ? void 0 : s.get("ad")) || new Set([]),
                  c = (s == null ? void 0 : s.get("ad_set")) || new Set([]),
                  d = (s == null ? void 0 : s.get("campaign")) || new Set([]);
                return t.merge({
                  changedAdgroupIDs: t.changedAdgroupIDs.subtract(u),
                  changedCampaignIDs: t.changedCampaignIDs.subtract(c),
                  changedCampaignGroupIDs:
                    t.changedCampaignGroupIDs.subtract(d),
                  publishingAdgroupIDs: t.publishingAdgroupIDs.concat(u),
                  publishingCampaignIDs: t.publishingCampaignIDs.concat(c),
                  publishingCampaignGroupIDs:
                    t.publishingCampaignGroupIDs.concat(d),
                });
              }
              default:
                return t;
            }
          }),
          (a.$AdsInstantPublishUIStore$p_3 = function (t, n) {
            var e = r("adsDraftGetAdObjectIDsFromPublishResponse")(n),
              o = this.$AdsInstantPublishUIStore$p_4(
                t.publishingMixChangesAdObjectIDs,
                e,
              ),
              a = this.$AdsInstantPublishUIStore$p_4(t.publishingAdgroupIDs, e),
              i = this.$AdsInstantPublishUIStore$p_4(
                t.publishingCampaignIDs,
                e,
              ),
              l = this.$AdsInstantPublishUIStore$p_4(
                t.publishingCampaignGroupIDs,
                e,
              );
            return t.merge({
              publishingAdgroupIDs: a,
              publishingCampaignIDs: i,
              publishingCampaignGroupIDs: l,
              publishingMixChangesAdObjectIDs: o,
            });
          }),
          (a.$AdsInstantPublishUIStore$p_4 = function (t, n) {
            return t.filter(function (e) {
              return !n.includes(e);
            });
          }),
          (a.$AdsInstantPublishUIStore$p_1 = function (t, n, r) {
            var e = [],
              o = [],
              a = [];
            switch (n) {
              case "campaign":
                e = r;
                break;
              case "ad_set":
                o = r;
                break;
              case "ad":
                a = r;
                break;
            }
            return this.$AdsInstantPublishUIStore$p_2(t, e, o, a);
          }),
          (a.$AdsInstantPublishUIStore$p_2 = function (t, n, r, o) {
            var e = t.changedAdgroupIDs.concat(o || []),
              a = t.changedCampaignGroupIDs.concat(n || []),
              i = t.changedCampaignIDs.concat(r || []);
            return t.merge({
              changedAdgroupIDs: e,
              changedCampaignIDs: i,
              changedCampaignGroupIDs: a,
            });
          }),
          n
        );
      })(r("FluxReduceStore"));
    d.__moduleID = i.id;
    var m = new d();
    l.default = m;
  },
  98,
);
