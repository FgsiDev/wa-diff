__d(
  "AdsUEditorCampaignSelectLiveVideoPromotedObjectTypeReducerPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsCampaignSelectInstagramLiveVideoAdUtils",
    "AdsMutators",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectLiveVideoPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectors",
    "adsSignalSourceContainersSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignBudgetPluginSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsUEditorCampaignSelectors").adObjectsList.mapTransform(
        function (e) {
          var t = e.campaignGroup;
          return t;
        },
      ),
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            campaignGroupsByCampaignID: e,
            account: r("adsUEditorAccountSelector"),
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
            plugin: r("adsUEditorCampaignBudgetPluginSelector"),
            pixelList: o(
              "adsSignalSourceContainersSelector",
            ).createSignalContainersSelector("website"),
            isCBOEnabled: o(
              "AdsUEditorCampaignGroupSelectors",
            ).campaignGroups.everyPlainObject(
              o("AdsAPICampaignGroupRecordUtils").hasBudget,
            ),
          },
          function (e, t, n) {
            var r = n.account,
              a = n.campaignGroupsByCampaignID,
              i = n.eligibilityInformation,
              l = n.isCBOEnabled,
              s = n.pixelList,
              u = n.plugin,
              c = t.adgroups,
              d = t.campaignIDs,
              m = o(
                "AdsCampaignSelectInstagramLiveVideoAdUtils",
              ).getLiveVideoFallbackPageID(c);
            return o("AdsMutators").mutateEach(e, d, function (e, t) {
              var n = a.get(t);
              return o(
                "AdsCampaignSelectInstagramLiveVideoAdUtils",
              ).updateCampaignForInstagramLiveDestination(
                r,
                n,
                e,
                m,
                s,
                i,
                l,
                u,
              );
            });
          },
          r("AdsUEditorCampaignSelectLiveVideoPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
