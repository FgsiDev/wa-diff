__d(
  "AdsUEditorCampaignTuneSavedTargetingSpecAndUpgradeAdvantageAudienceReducerPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdvantageAudienceReducerUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsTuneTargetingClient",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignGroupBulkSelectors",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetSavedAudienceReducerUtils",
    "AdsUEditorCampaignSetTargetingSpecAction",
    "AdsUEditorCampaignTuneSavedAudienceTargetingSpecAndUpgradeAdvantageAudienceActionFlux",
    "adsRegulatedCategoryIsRegulatedCategory",
    "adsTargetingFlatPageSetIDsSelector",
    "adsTargetingRelaxationRolloutSelectors",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignTargetingAudienceDefaultSpecSelector",
    "adsUEditorCampaignTargetingDefaultMinAgeSelector",
    "adsUEditorProductAudienceBulkTargetingTypeIsRetargetingSelector",
    "targetingBulkSpecTransformSpecToAdsBulkValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            bulkPromotedPageID: o(
              "AdsUEditorCampaignGroupBulkSelectors",
            ).selectorByCampaignGroupFn(
              o("AdsAPICampaignGroupRecordUtils").getPromotedObjectPageID,
            ),
            campaignIDToBuyingTypeMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getBuyingType,
            ),
            targetingTypeIsRetargeting: r(
              "adsUEditorProductAudienceBulkTargetingTypeIsRetargetingSelector",
            ),
            flatPageSetIDsLoadObject: r("adsTargetingFlatPageSetIDsSelector"),
            objectiveMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
            defaultMinAge: r(
              "adsUEditorCampaignTargetingDefaultMinAgeSelector",
            ),
            defaultTargetingSpec: r(
              "adsUEditorCampaignTargetingAudienceDefaultSpecSelector",
            ),
          },
          function (e, t, n) {
            var a = n.account,
              l = n.bulkPromotedPageID,
              s = n.campaignIDToBuyingTypeMap,
              u = n.defaultMinAge,
              c = n.defaultTargetingSpec,
              d = n.flatPageSetIDsLoadObject,
              m = n.objectiveMap,
              p = n.targetingTypeIsRetargeting;
            if (
              t.campaignIDs == null ||
              !t.regulatedCategories.some(function (e) {
                return r("adsRegulatedCategoryIsRegulatedCategory")(e);
              })
            )
              return e;
            var _ = t.campaignIDs;
            return o("AdsMutators").mutateEach(e, _, function (e, n) {
              var _ = m.get(n, r("AdsAPIObjectives").NONE),
                f = o("AdsMutators").chain(
                  function (e) {
                    return o(
                      "AdsUEditorCampaignSetSavedAudienceReducerUtils",
                    ).campaignSetTargeting({
                      campaign: e,
                      objective: _,
                      oldTargetingSpec: e.targeting,
                      newTargetingSpec: t.targetingSpec,
                      savedAudienceID: null,
                    });
                  },
                  function (e) {
                    return o(
                      "AdsAdvantageAudienceReducerUtils",
                    ).setAdvantageAudienceAndRelatedEffectsOnSpec({
                      campaign: e,
                      bulkPromotedPageID: l,
                      flatPageSetIDsLoadObject: d,
                      regulatedCategories: t.regulatedCategories,
                      targetingSpec: c,
                      targetingAutomationFromAction: { advantage_audience: 1 },
                      deleteAutomation: !1,
                      targetingTypeIsRetargeting: p,
                      buyingType: s.get(n),
                      canUseAdvantageAudience: !0,
                      accountInfo: a,
                      defaultMinAge: u,
                      enableAutomationForPharmaAdvertiser: o(
                        "adsTargetingRelaxationRolloutSelectors",
                      ).passesEnableAutomationForPharmaAdvertiser(),
                    });
                  },
                )(e),
                g = function (l) {
                  var a,
                    s,
                    u = JSON.parse(l),
                    c =
                      (a =
                        (s = o(
                          "AdsUEditorCampaignSetSavedAudienceReducerUtils",
                        ).replaceTargetingSpecPreservingDeviceState(
                          e,
                          u,
                        ).targeting) == null
                          ? void 0
                          : s.toJS()) != null
                        ? a
                        : {};
                  r("AdsUEditorCampaignSetTargetingSpecAction").dispatch(
                    {
                      campaignIDs: [n],
                      hostID: t.hostID,
                      targetingBulkSpec: r(
                        "targetingBulkSpecTransformSpecToAdsBulkValue",
                      )(c),
                    },
                    {
                      line: "162",
                      module:
                        "AdsUEditorCampaignTuneSavedTargetingSpecAndUpgradeAdvantageAudienceReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                };
              return (
                r("AdsTuneTargetingClient").tuneTargetingString(
                  g,
                  t.regulatedCategories,
                  JSON.stringify(f.targeting),
                  a.account_id,
                  t == null ? void 0 : t.specialAdCategoryCountries,
                ),
                o("AdsMutators").chain(
                  r("AdsCampaignRecordAccessors").saved_audience.set(null),
                  r("AdsCampaignRecordAccessors").saved_audience_id.set(null),
                )(e)
              );
            });
          },
          r(
            "AdsUEditorCampaignTuneSavedAudienceTargetingSpecAndUpgradeAdvantageAudienceActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
