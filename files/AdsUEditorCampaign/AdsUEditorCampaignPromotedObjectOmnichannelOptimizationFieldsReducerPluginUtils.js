__d(
  "AdsUEditorCampaignPromotedObjectOmnichannelOptimizationFieldsReducerPluginUtils",
  [
    "AdsAPIOptimizationGoals",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsOptimizationMutationUtils",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignAdObjectsUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s) {
      var u = r("immutable")
          .Map()
          .set("pixel_id", l != null ? l : "")
          .set("custom_event_type", "PURCHASE"),
        c = r("immutable")
          .Map()
          .set("offline_conversion_data_set_id", s != null ? s : "")
          .set("custom_event_type", "PURCHASE"),
        d = o("AdsODAXUtils").maybeTranslateObjective(
          t.objective,
          o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
            campaign: e,
            campaignGroup: t,
          }),
          r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
        ),
        m = r("AdsCampaignOptimizationPluginResolver").resolve({
          objective: d,
          promotedObjectType: i,
        }),
        p =
          m.getSupportedOptimizationGoals == null
            ? void 0
            : m.getSupportedOptimizationGoals({
                objective: d,
                promotedObjectType: i,
              }),
        _ =
          p != null && p.includes(e.optimization_goal)
            ? e.optimization_goal
            : m.getDefaultOptimizationGoal({
                campaign: e,
                campaignGroup: t,
                hasBackingApplication: !1,
              }),
        f = {
          campaign: e,
          campaignGroup: t,
          hasBackingApplication: !1,
          prefilledOptimizationGoal: _,
          promotedObjectType: i,
        };
      return o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").targeting.user_os.delete,
        r("AdsCampaignRecordAccessors").targeting.user_device.delete,
        r("AdsCampaignRecordAccessors").targeting.is_whatsapp_destination_ad
          .delete,
        r("AdsCampaignRecordAccessors").targeting.app_install_state.delete,
        r("AdsCampaignRecordAccessors").destination_type.delete,
        r("AdsCampaignRecordAccessors").promoted_object.delete,
        r("AdsCampaignRecordAccessors").is_dynamic_creative.delete,
        r("AdsCampaignRecordAccessors").is_dynamic_creative_optimization.delete,
        r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.omnichannel_object.pixel.set(
          r("immutable").List([u]),
        ),
        r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.omnichannel_object.offline.set(
          r("immutable").List([c]),
        ),
        function (e) {
          return o(
            "AdsOptimizationMutationUtils",
          ).resetOptimizationRelatedFields(n, e, m, d, f, void 0);
        },
        function (e) {
          return o("AdsPlacementReducerUtils").resetPlacement(
            e,
            babelHelpers.extends({}, a, {
              promotedObjectType: i,
              objectStoreURL: null,
              containsOffer: !1,
            }),
          );
        },
      )(e);
    }
    l.setPromotedObjectForOmniConversionOptimization = e;
  },
  98,
);
