__d(
  "AdsUEditorCampaignSetInstagramPromotedObjectTypeForMessagesReducerPlugin",
  [
    "AdsBulkValueUtils",
    "AdsCampaignMutatorUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetInstagramPromotedObjectTypeDataActionFlux",
    "AdsUEditorInstagramMutators",
    "AdsUEditorSelectors",
    "AdsUEditorUnifiedCreationUtils",
    "adsUEditorAccountSelector",
    "immutable",
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
            bulkIsODAXCampaignGroup: o(
              "AdsUEditorSelectors",
            ).campaignGroup.bulkByAccessorToJS(function (e) {
              return e.is_odax_campaign_group;
            }),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.bulkIsODAXCampaignGroup,
              l = n.eligibilityInformation,
              s = n.objectives,
              u = babelHelpers.extends({}, l, {
                promotedObjectType: r("AdsPromotedObjectTypes").INSTAGRAM,
              }),
              c = o("AdsBulkValueUtils").getUniformValueOrDefault(i, !1);
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, t) {
                return o("AdsMutators").chain(
                  r(
                    "AdsCampaignRecordAccessors",
                  ).targeting.instagram_positions.set(r("immutable").List()),
                  function (e) {
                    return o(
                      "AdsUEditorUnifiedCreationUtils",
                    ).adsUEditorCampaignMessagesUnifiedCreationWithoutLog(
                      s.get(t),
                      c,
                    )
                      ? e
                      : o("AdsCampaignMutatorUtils").removePromotedObjectPageID(
                          e,
                        );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorInstagramMutators",
                    ).setInstagramPromotedObjectTypeForMessages(a, e, u);
                  },
                )(e);
              },
            );
          },
          o("AdsUEditorCampaignSetInstagramPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
