__d(
  "AdsUEditorCampaignSetWhatsAppPromotedObjectTypeForMessagesReducerPlugin",
  [
    "AdsBulkValueUtils",
    "AdsMutators",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetWhatsAppPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignWhatsAppMutators",
    "AdsUEditorSelectors",
    "AdsUEditorUnifiedCreationUtils",
    "adsUEditorAccountSelector",
    "adsUEditorLocalPagesCTWASelector",
    "nullthrows",
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
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
            getPage: r("AdsPageStore").getSelector,
            bulkIsODAXCampaignGroup: o(
              "AdsUEditorSelectors",
            ).campaignGroup.bulkByAccessorToJS(function (e) {
              return e.is_odax_campaign_group;
            }),
            isLocalPagesCTWA: o("adsUEditorLocalPagesCTWASelector")
              .isLocalPagesCTWASelector,
          },
          function (e, t, n) {
            var a = n.account,
              i = n.bulkIsODAXCampaignGroup,
              l = n.eligibilityInformation,
              s = n.getPage,
              u = n.isLocalPagesCTWA,
              c = n.objectives,
              d = babelHelpers.extends({}, l, {
                promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
              }),
              m = o("AdsBulkValueUtils").getUniformValueOrDefault(i, !1);
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var i = r("nullthrows")(c.get(n)),
                  l = o(
                    "AdsUEditorUnifiedCreationUtils",
                  ).adsUEditorCampaignMessagesUnifiedCreationWithoutLog(i, m),
                  p = !u;
                return o(
                  "AdsUEditorCampaignWhatsAppMutators",
                ).setWhatsAppPromotedObjectTypeForMessages(
                  e,
                  a,
                  i,
                  d,
                  l,
                  s,
                  p,
                  t.newDestinationType,
                  t.pageWhatsAppNumberID,
                );
              },
            );
          },
          o("AdsUEditorCampaignSetWhatsAppPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
