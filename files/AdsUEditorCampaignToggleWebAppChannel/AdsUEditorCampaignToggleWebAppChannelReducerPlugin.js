__d(
  "AdsUEditorCampaignToggleWebAppChannelReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignToggleWebAppChannelDataActionFlux",
    "AdsUEditorWebsiteAndAppMutators",
    "adsUEditorAccountSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignGroupMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
          },
          function (e, t, n) {
            var a = n.account,
              i = n.campaignGroupMap,
              l = n.eligibilityInformation,
              s = t.campaignIDs,
              u = t.conversionLocationType;
            return o("AdsMutators").mutateEach(e, s, function (e, t) {
              var n = r("nullthrows")(i.get(t)),
                s = r("AdsCampaignRecordAccessors").conversion_locations.set(
                  u,
                  e,
                );
              return o(
                "AdsUEditorWebsiteAndAppMutators",
              ).selectWebsiteAndAppPromotedObjectTypeForCampaign(s, n, a, l);
            });
          },
          r("AdsUEditorCampaignToggleWebAppChannelDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
