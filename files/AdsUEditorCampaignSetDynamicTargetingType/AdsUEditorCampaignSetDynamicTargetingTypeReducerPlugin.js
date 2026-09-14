__d(
  "AdsUEditorCampaignSetDynamicTargetingTypeReducerPlugin",
  [
    "AdsAdvantageAudienceReducerUtils",
    "AdsAdvantageAudienceUtils",
    "AdsCampaignRecordAccessors",
    "AdsDynamicTargetingCategories",
    "AdsDynamicTargetingPackagePlugins",
    "AdsDynamicTargetingTypes",
    "AdsMutators",
    "AdsTargetingPGDIndividualSettingUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetDynamicTargetingTypeActionFlux",
    "adsCampaignSetProductAudienceSpecs",
    "adsDeleteCustomAudienceFromFlexibleSpec",
    "adsDeleteProductAudienceSpecsFromCampaignRecord",
    "adsGetProductAudienceSpecsFromCampaignRecord",
    "adsProductAudienceSpecsGetNewTargetingProductSetID",
    "adsUEditorAccountSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            passesAdvantageAudienceQE: o("AdsAdvantageAudienceUtils")
              .passesAdvantageAudienceSelector,
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
          },
          function (e, t, n) {
            var a = n.account,
              i = n.campaignIDToObjectivesMap,
              l = n.campaignIDToRegulatedCategoriesMap,
              s = n.passesAdvantageAudienceQE;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n, u, c;
              switch (t.targetingType) {
                case r("AdsDynamicTargetingTypes").NO_EXCLUSION:
                  return o("AdsMutators").chain(
                    r("adsDeleteProductAudienceSpecsFromCampaignRecord"),
                    r("AdsCampaignRecordAccessors").targeting
                      .excluded_product_audience_specs.delete,
                    function (e) {
                      return t.isSwitchingTargetingCategory === !0
                        ? o(
                            "AdsAdvantageAudienceReducerUtils",
                          ).maybeEnableAdvantageAudience(s)(e)
                        : e;
                    },
                    function (e) {
                      var n;
                      return t.isSwitchingTargetingCategory === !0
                        ? o(
                            "AdsTargetingPGDIndividualSettingUtils",
                          ).maybeApplyTargetingAutomationIndividualSetting(
                            a,
                            e,
                            i.get(e.id),
                            (n = l.get(e.id)) == null ? void 0 : n.toArray(),
                          )
                        : e;
                    },
                  )(e);
                case r("AdsDynamicTargetingTypes").CUSTOM_COMBINATION:
                case r("AdsDynamicTargetingTypes").EXCLUDE_CUSTOM:
                  return e;
              }
              var d = r("AdsDynamicTargetingPackagePlugins").get(
                  t.targetingType,
                ),
                m =
                  (n = t.defaultTargetProductSetID) != null
                    ? n
                    : r("adsProductAudienceSpecsGetNewTargetingProductSetID")(
                        t.targetingType,
                        (u = e.promoted_object) == null
                          ? void 0
                          : u.product_set_id,
                        r("adsGetProductAudienceSpecsFromCampaignRecord")(e),
                        (c = e.targeting) == null
                          ? void 0
                          : c.excluded_product_audience_specs,
                      ),
                p = r("immutable").fromJS(
                  d.defaultFields.map(function (e) {
                    return babelHelpers.extends({}, e, { product_set_id: m });
                  }),
                );
              switch (d.targetingCategory) {
                case r("AdsDynamicTargetingCategories").RETARGETING:
                  return o("AdsMutators").chain(
                    r("adsCampaignSetProductAudienceSpecs")(p),
                    r("AdsCampaignRecordAccessors").targeting
                      .excluded_product_audience_specs.delete,
                    function (e) {
                      return r("adsDeleteCustomAudienceFromFlexibleSpec")(
                        e,
                        t.autoLALAudience,
                      );
                    },
                    o("AdsAdvantageAudienceReducerUtils")
                      .maybeDisableAdvantageAudience,
                    function (e) {
                      var t;
                      return o(
                        "AdsTargetingPGDIndividualSettingUtils",
                      ).maybeApplyTargetingAutomationIndividualSetting(
                        a,
                        e,
                        i.get(e.id),
                        (t = l.get(e.id)) == null ? void 0 : t.toArray(),
                        !0,
                      );
                    },
                  )(e);
                case r("AdsDynamicTargetingCategories").PROSPECTING:
                  return o("AdsMutators").chain(
                    r("adsDeleteProductAudienceSpecsFromCampaignRecord"),
                    r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.excluded_product_audience_specs.set(p),
                  )(e);
              }
              return e;
            });
          },
          o("AdsUEditorCampaignSetDynamicTargetingTypeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
