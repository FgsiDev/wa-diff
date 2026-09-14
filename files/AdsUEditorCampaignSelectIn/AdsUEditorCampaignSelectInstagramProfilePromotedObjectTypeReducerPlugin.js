__d(
  "AdsUEditorCampaignSelectInstagramProfilePromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPICampaignRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectInstagramProfilePromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectors",
    "adsUEditorAccountSelector",
    "nullthrows",
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
          },
          function (e, t, n) {
            var a = t.campaignIDs,
              i = n.campaignGroupsByCampaignID,
              l = n.eligibilityInformation,
              s = babelHelpers.extends({}, l, {
                promotedObjectType: r("AdsPromotedObjectTypes")
                  .INSTAGRAM_PROFILE,
              });
            return o("AdsMutators").mutateEach(e, a, function (e, t) {
              var n,
                a = e,
                l = r("nullthrows")(i.get(t)),
                u = l.objective;
              a = o("AdsMutators").chain(
                (n = r("AdsCampaignRecordAccessors")).promoted_object.delete,
                n.targeting.user_os.delete,
                n.targeting.user_device.delete,
                n.targeting.is_whatsapp_destination_ad.delete,
                n.targeting.app_install_state.delete,
                n.destination_type.set(
                  r("AdCampaignDestination").INSTAGRAM_PROFILE,
                ),
                n.optimization_goal.set(
                  r("AdsAPIOptimizationGoals").PROFILE_VISIT,
                ),
                n.is_dynamic_creative_optimization.set(!1),
                n.is_dynamic_creative.set(!1),
              )(a);
              var c = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                u,
                a,
              );
              return (
                (a = o(
                  "AdsUEditorCampaignMutators",
                ).updateConversionWindowLength(a, u, c)),
                (a = o("AdsPlacementReducerUtils").resetPlacement(a, s)),
                a
              );
            });
          },
          r(
            "AdsUEditorCampaignSelectInstagramProfilePromotedObjectTypeDataActionFlux",
          ).actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
