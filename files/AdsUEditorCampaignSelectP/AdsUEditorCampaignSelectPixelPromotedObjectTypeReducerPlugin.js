__d(
  "AdsUEditorCampaignSelectPixelPromotedObjectTypeReducerPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAppMutationUtils",
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsODAXCampaignReducerUtils",
    "AdsODAXUtils",
    "AdsOptimizationMutationUtils",
    "AdsPCAUnificationUtils",
    "AdsPlacementReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectPixelPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectors",
    "LoadObject",
    "adsCampaignGroupBudgetGetDefaultOptimizationGoalParams",
    "adsGetIGSalesPrefilledOptimizationGoal",
    "adsUEditorAccountSelector",
    "immutable",
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
              l = n.campaignGroupMap,
              u = n.eligibilityInformation,
              c = babelHelpers.extends(
                {},
                u,
                {
                  promotedObjectType: r("AdsPromotedObjectTypes").PIXEL,
                  objectStoreURL: null,
                  containsOffer: !1,
                },
                u.objective === r("AdsAPIObjectives").OUTCOME_LEADS
                  ? { destinationType: null }
                  : {},
              );
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var d = r("nullthrows")(l.get(n)),
                  m = r("LoadObject").withValue(d, { creatorModuleID: i.id }),
                  p = r(
                    "adsCampaignGroupBudgetGetDefaultOptimizationGoalParams",
                  )(a, d, e);
                if (p.prefilledOptimizationGoal == null) {
                  var _ = r("adsGetIGSalesPrefilledOptimizationGoal")(
                    a,
                    d.objective,
                  );
                  _ != null && (p.prefilledOptimizationGoal = _);
                }
                var f = r("AdsCampaignOptimizationPluginResolver").resolve({
                    objective: d.objective,
                    promotedObjectType: r("AdsPromotedObjectTypes").PIXEL,
                    destinationType: e.destination_type,
                  }),
                  g = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    d.objective,
                    e,
                  );
                return o("AdsMutators").chain(
                  r("AdsCampaignRecordAccessors").destination_type.delete,
                  function (e) {
                    var t;
                    return o("AdsMutators").chain(
                      (t = r("AdsCampaignRecordAccessors")).targeting
                        .is_whatsapp_destination_ad.delete,
                      t.targeting.user_os.delete,
                      t.targeting.user_device.delete,
                      t.targeting.app_install_state.delete,
                    )(e);
                  },
                  function (e) {
                    return s(e, d, g, t);
                  },
                  function (e) {
                    return o(
                      "AdsODAXCampaignReducerUtils",
                    ).maybeSetTargetingExpansion(
                      e,
                      t.isUnderODAX === !0,
                      "expansion_all",
                    );
                  },
                  function (e) {
                    return g === r("AdsPromotedObjectTypes").PIXEL
                      ? e
                      : o(
                          "AdsUEditorCampaignMutators",
                        ).updateConversionWindowLength(
                          e,
                          d.objective,
                          r("AdsPromotedObjectTypes").PIXEL,
                        );
                  },
                  function (e) {
                    return g === r("AdsPromotedObjectTypes").PIXEL
                      ? e
                      : o(
                          "AdsOptimizationMutationUtils",
                        ).resetOptimizationRelatedFields(
                          a,
                          e,
                          f,
                          d.objective,
                          p,
                          void 0,
                        );
                  },
                  function (e) {
                    return o("AdsPlacementReducerUtils").resetPlacement(e, c);
                  },
                  function (e) {
                    return o("AdsAPICampaignGroupRecordUtils").hasBudget_LEGACY(
                      d,
                    )
                      ? e
                      : o(
                          "AdsCampaignBudgetMutationUtils",
                        ).resetBudgetToDefault(a, d.objective, void 0, e, m);
                  },
                  function (e) {
                    return o("AdsODAXUtils").isODAXSpecificObjective(
                      u.objective,
                    ) && u.objective === r("AdsAPIObjectives").OUTCOME_LEADS
                      ? o("AdsMutators").chain(
                          r("AdsCampaignRecordAccessors").is_dynamic_creative
                            .delete,
                          r("AdsCampaignRecordAccessors")
                            .is_dynamic_creative_optimization.delete,
                        )(e)
                      : e;
                  },
                  function (e) {
                    return o("AdsAppMutationUtils").maybeRemoveAppInstallState(
                      e,
                      u.objective,
                    );
                  },
                  function (e) {
                    var t;
                    return o(
                      "AdsCampaignLiveVideoAdsUtils",
                    ).maybeSetLiveVideoAdType(
                      e,
                      d == null || (t = d.promoted_object) == null
                        ? void 0
                        : t.live_video_destination,
                    );
                  },
                )(e);
              },
            );
          },
          [
            o("AdsUEditorCampaignSelectPixelPromotedObjectTypeDataActionFlux")
              .actionType,
          ],
        ),
      },
      s = function (t, n, a, i) {
        var e, l, s;
        if (a === r("AdsPromotedObjectTypes").PIXEL) return t;
        var c =
            n.objective === r("AdsAPIObjectives").CONVERSIONS ||
            n.objective === r("AdsAPIObjectives").OUTCOME_SALES
              ? (e = t.promoted_object) == null ||
                (e = e.omnichannel_object) == null ||
                (e = e.pixel) == null
                ? void 0
                : e.get(0)
              : null,
          d = o("AdsPCAUnificationUtils").isPcaUnifiedCollaborativeAd(n),
          m = d
            ? (l = t.promoted_object) == null
              ? void 0
              : l.product_set_id
            : void 0,
          p = u(
            t,
            (s = i.isShopsAdsAutomatedTransformation) != null ? s : !1,
            a,
          ),
          _ = c == null ? void 0 : c.get("pixel_id"),
          f = c == null ? void 0 : c.get("pixel_rule");
        return o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").promoted_object.pixel_id.set(
            _ == null || typeof _ == "string" ? _ : null,
          ),
          r("AdsCampaignRecordAccessors").promoted_object.pixel_rule.set(
            f == null || typeof f == "string" ? f : null,
          ),
          r("AdsCampaignRecordAccessors").promoted_object.custom_event_type.set(
            c == null ? void 0 : c.get("custom_event_type"),
          ),
          function (e) {
            return m != null
              ? r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.product_set_id.set(m, e)
              : e;
          },
        )(p);
      },
      u = function (t, n, o) {
        var e, a;
        if (o === r("AdsPromotedObjectTypes").PIXEL) return t;
        var i =
            (e = t.promoted_object) == null ||
            (e = e.omnichannel_object) == null ||
            (e = e.onsite) == null ||
            (e = e.get(0)) == null
              ? void 0
              : e.get("onboarding_state"),
          l = r("AdsCampaignRecordAccessors").promoted_object.delete(t);
        return i == null || !n
          ? l
          : r(
              "AdsCampaignRecordAccessors",
            ).promoted_object.omnichannel_object.onsite.set(
              r("immutable").List([
                r("immutable").Map(((a = {}), (a.onboarding_state = i), a)),
              ]),
              l,
            );
      },
      c = e;
    l.default = c;
  },
  98,
);
