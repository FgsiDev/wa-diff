__d(
  "AdsUEditorLiveVideoAdUpdateCampaignConfigReducerPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsLiveVideoAdUtils",
    "AdsMutators",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorLiveVideoAdUpdateCampaignConfigActionFlux",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignBudgetPluginSelector",
    "adsUEditorCampaignIGLiveVideoSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            isIGLiveVideoAd: r("adsUEditorCampaignIGLiveVideoSelector"),
            budgetPlugin: r("adsUEditorCampaignBudgetPluginSelector"),
            isCBOEnabled: o(
              "AdsUEditorCampaignGroupSelectors",
            ).campaignGroups.everyPlainObject(
              o("AdsAPICampaignGroupRecordUtils").hasBudget,
            ),
          },
          function (e, t, n) {
            var r = n.account,
              a = n.budgetPlugin,
              i = n.isCBOEnabled,
              l = n.isIGLiveVideoAd;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return o("AdsLiveVideoAdUtils").updateLiveVideoCampaignConfig({
                account: r,
                campaign: e,
                hostID: t.hostID,
                isTransitionToFB: t.isTransitionToFB,
                liveVideoAdType: t.liveVideoAdType,
                updateAction: t.updateAction,
                isIGLiveVideoAd: l,
                budgetPlugin: a,
                isCBOEnabled: i,
              });
            });
          },
          r("AdsUEditorLiveVideoAdUpdateCampaignConfigActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
