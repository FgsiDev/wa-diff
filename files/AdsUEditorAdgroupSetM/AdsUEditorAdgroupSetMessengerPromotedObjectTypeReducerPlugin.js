__d(
  "AdsUEditorAdgroupSetMessengerPromotedObjectTypeReducerPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSpecPathPluginResolver",
    "AdsAssetFeedUtils",
    "AdsExistingPostCTXDefaultingUtils",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignSetMessengerPromotedObjectTypeDataAction",
    "AdsUEditorMessengerMutators",
    "AdsUEditorWhatsAppMutators",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsUEditorAccountSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.getShouldEnableAutomaticFlowByDefault,
              l = n.parentData,
              s = t.eligibilityInformation.capabilities;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n = r("nullthrows")(l.get(t)),
                  u = n.campaign,
                  c = n.campaignGroup,
                  d = n.specPlugin,
                  m = c.objective,
                  p = o(
                    "AdsAPICampaignGroupRecordUtils",
                  ).getPromotedObjectPageID(c),
                  _ = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: u, campaignGroup: c }),
                  f = r(
                    "AdsAdgroupSemanticFields",
                  ).multiShareEndCard.isSupported(d, e);
                return o("AdsMutators").chain(
                  function (e) {
                    return o(
                      "AdsUEditorWhatsAppMutators",
                    ).deleteWhatsAppDestinationFields({
                      adgroup: e,
                      specPlugin: r("AdsAdgroupSpecPathPluginResolver").resolve(
                        {
                          accountType: "REGULAR",
                          objective: r("AdsAPIObjectives").MESSAGES,
                          promotedObjectType: r("AdsPromotedObjectTypes")
                            .WHATSAPP,
                        },
                      ),
                      supportPageEndCard: f,
                      removeWebsiteURL: !(
                        o("AdsAssetFeedUtils").isClickToMultiDestAds(e) &&
                        o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
                      ),
                    });
                  },
                  function (e) {
                    return o(
                      "AdsUEditorMessengerMutators",
                    ).setMessengerDestinationFields({
                      adgroup: e,
                      campaignGroupPromotedPageID: p,
                      objective: m,
                      promotedObjectType: _,
                      specPlugin: d,
                      supportPageEndCard: f,
                      capabilities: s,
                      optimizationGoal: u.optimization_goal,
                    });
                  },
                  function (e) {
                    return o(
                      "AdsExistingPostCTXDefaultingUtils",
                    ).isExistingPostAdForCTX(e, m, u.destination_type)
                      ? e
                      : r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.object_id.delete(e);
                  },
                  function (e) {
                    return o(
                      "adsAutomaticFlowMutationSetDoFSpec",
                    ).adsAutomaticFlowLiteSpecMutator(
                      a,
                      { campaign: u, campaignGroup: c, adgroup: e },
                      i,
                    );
                  },
                )(e);
              },
            );
          },
          r("AdsUEditorCampaignSetMessengerPromotedObjectTypeDataAction")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
