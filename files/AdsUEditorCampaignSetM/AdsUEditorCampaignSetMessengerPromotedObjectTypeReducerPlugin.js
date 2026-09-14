__d(
  "AdsUEditorCampaignSetMessengerPromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsBulkValueUtils",
    "AdsCampaignMutatorUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsSetMessengerPromotedObjectSource",
    "AdsUEditorAdgroupNavigateMessengerPromotedObjectActionFlux",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetMessengerPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignWhatsAppMutators",
    "AdsUEditorHostIDs",
    "AdsUEditorSelectors",
    "AdsUEditorUnifiedCreationUtils",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
        {
          account: r("adsUEditorAccountSelector"),
          objectives: o(
            "AdsUEditorCampaignSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
          ),
          bulkIsODAXCampaignGroup: o(
            "AdsUEditorSelectors",
          ).campaignGroup.bulkByAccessorToJS(function (e) {
            return e.is_odax_campaign_group;
          }),
        },
        function (e, t, n) {
          var a = n.account,
            i = n.bulkIsODAXCampaignGroup,
            l = n.objectives,
            u = o("AdsBulkValueUtils").getUniformValueOrDefault(i, !1);
          return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e, n) {
            return o("AdsMutators").chain(
              function (e) {
                return o("AdsPlacementReducerUtils").resetPlacement(
                  e,
                  t.eligibilityInformation,
                );
              },
              function (e) {
                return r("AdsCampaignRecordAccessors").destination_type.set(
                  s(e),
                  e,
                );
              },
              function (e) {
                return o(
                  "AdsCampaignMutatorUtils",
                ).setOptimizationForMessengerandInstagramPromotedObject(
                  e,
                  t.eligibilityInformation.objective,
                  a,
                  i,
                );
              },
              function (e) {
                return r(
                  "AdsCampaignRecordAccessors",
                ).targeting.is_whatsapp_destination_ad.delete(e);
              },
              function (e) {
                return o(
                  "AdsUEditorUnifiedCreationUtils",
                ).adsUEditorCampaignMessagesUnifiedCreationWithoutLog(
                  l.get(n),
                  u,
                )
                  ? e
                  : o("AdsCampaignMutatorUtils").removePromotedObjectPageID(e);
              },
              function (e) {
                return o(
                  "AdsCampaignMutatorUtils",
                ).setCountryForMessagingPromotedObjects(e, a);
              },
              function (e) {
                return t.hostID === r("AdsUEditorHostIDs").EDITING &&
                  t.eventSource ===
                    r("AdsSetMessengerPromotedObjectSource")
                      .SELECT_CLICK_TO_MESSENGER_IN_PE
                  ? o("AdsMutators").chain(
                      function (e) {
                        return o(
                          "AdsCampaignMutatorUtils",
                        ).setDefaultBudgetForCampaign(
                          a,
                          e,
                          r("AdsAPIObjectives").MESSAGES,
                          r("AdsPromotedObjectTypes").MESSENGER,
                          l.get(n),
                        );
                      },
                      function (e) {
                        return o(
                          "AdsUEditorCampaignWhatsAppMutators",
                        ).resetPacing(!1, e);
                      },
                    )(e)
                  : e;
              },
            )(e);
          });
        },
        [
          o("AdsUEditorAdgroupNavigateMessengerPromotedObjectActionFlux")
            .actionType,
          o("AdsUEditorCampaignSetMessengerPromotedObjectTypeDataActionFlux")
            .actionType,
        ],
      ),
    };
    function s(e) {
      switch (e.destination_type) {
        case r("AdCampaignDestination").INSTAGRAM_DIRECT:
          return r("AdCampaignDestination")
            .MESSAGING_INSTAGRAM_DIRECT_MESSENGER;
        case r("AdCampaignDestination").WHATSAPP:
          return r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP;
        case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP:
          return r("AdCampaignDestination")
            .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP;
        case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER:
        case r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP:
        case r("AdCampaignDestination")
          .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP:
          return e.destination_type;
        default:
          return r("AdCampaignDestination").MESSENGER;
      }
    }
    var u = e;
    l.default = u;
  },
  98,
);
