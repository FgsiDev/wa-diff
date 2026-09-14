__d(
  "AdsUEditorCampaignSetDynamicTargetingCategoryDataReducerPlugin",
  [
    "AdsAdvantageAudienceReducerUtils",
    "AdsCampaignDynamicAudienceIDCacheDataProvider",
    "AdsCampaignRecordAccessors",
    "AdsDataAtom",
    "AdsDynamicTargetingCategories",
    "AdsMutators",
    "AdsTargetingPGDIndividualSettingUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetDynamicTargetingCategoryActionFlux",
    "adsCampaignGetID",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignIDToRegulatedCategoriesMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getRegulatedCategories,
            ),
            campaignIDToObjectivesMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
            campaignIDToCampaignGroupsMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
          },
          function (t, n, a) {
            var i = a.account,
              l = a.campaignIDToCampaignGroupsMap,
              s = a.campaignIDToObjectivesMap,
              u = a.campaignIDToRegulatedCategoriesMap;
            return (
              (e || (e = r("AdsDataAtom"))).isDispatching() &&
                (e || (e = r("AdsDataAtom"))).waitFor([
                  r("AdsCampaignDynamicAudienceIDCacheDataProvider").provider,
                ]),
              n.targetingCategory ===
              r("AdsDynamicTargetingCategories").PROSPECTING
                ? o("AdsMutators").mutateEach(t, n.ids, function (e) {
                    return o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").targeting
                        .dynamic_audience_ids.delete,
                      r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.excluded_dynamic_audience_ids.set(
                        r(
                          "AdsCampaignDynamicAudienceIDCacheDataProvider",
                        )().getIn([
                          r("adsCampaignGetID")(e),
                          "excluded_dynamic_audience_ids",
                        ]),
                      ),
                    )(e);
                  })
                : n.targetingCategory ===
                    r("AdsDynamicTargetingCategories").RETARGETING
                  ? o("AdsMutators").mutateEach(t, n.ids, function (e) {
                      return o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").targeting
                          .excluded_dynamic_audience_ids.delete,
                        r(
                          "AdsCampaignRecordAccessors",
                        ).targeting.dynamic_audience_ids.set(
                          r(
                            "AdsCampaignDynamicAudienceIDCacheDataProvider",
                          )().getIn([
                            r("adsCampaignGetID")(e),
                            "dynamic_audience_ids",
                          ]),
                        ),
                        o("AdsAdvantageAudienceReducerUtils")
                          .maybeDisableAdvantageAudience,
                        function (e) {
                          var t;
                          return o(
                            "AdsTargetingPGDIndividualSettingUtils",
                          ).maybeApplyTargetingAutomationIndividualSetting(
                            i,
                            e,
                            s.get(e.id),
                            (t = u.get(e.id)) == null ? void 0 : t.toArray(),
                            !0,
                          );
                        },
                      )(e);
                    })
                  : t
            );
          },
          o("AdsUEditorCampaignSetDynamicTargetingCategoryActionFlux")
            .actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
