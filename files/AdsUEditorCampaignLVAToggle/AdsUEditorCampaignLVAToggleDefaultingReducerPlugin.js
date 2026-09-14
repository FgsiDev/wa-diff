__d(
  "AdsUEditorCampaignLVAToggleDefaultingReducerPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsLiveVideoAdUtils",
    "AdsMutators",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorCampaignLVAToggleSelectActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignBudgetPluginSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            plugin: r("adsUEditorCampaignBudgetPluginSelector"),
            isCBOEnabled: o(
              "AdsUEditorCampaignGroupSelectors",
            ).campaignGroups.everyPlainObject(
              o("AdsAPICampaignGroupRecordUtils").hasBudget,
            ),
          },
          function (e, t, n) {
            var r = t.campaignIDs,
              a = t.hostID,
              i = t.isLVAToggleOn,
              l = n.account,
              s = n.isCBOEnabled,
              u = n.plugin;
            return o("AdsMutators").mutateEach(e, r, function (e, t) {
              return o("AdsMutators").chain(function (e) {
                return o("AdsLiveVideoAdUtils").updateLiveVideoCampaignConfig({
                  account: l,
                  campaign: e,
                  hostID: a,
                  liveVideoAdType: "NONE",
                  updateAction: i
                    ? o("AdsLiveVideoAdUtils").LiveVideoAdConfigUpdateAction
                        .OPT_IN
                    : o("AdsLiveVideoAdUtils").LiveVideoAdConfigUpdateAction
                        .OPT_OUT,
                  isIGLiveVideoAd: !1,
                  budgetPlugin: u,
                  isCBOEnabled: s,
                });
              })(e);
            });
          },
          r("AdsUEditorCampaignLVAToggleSelectActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
