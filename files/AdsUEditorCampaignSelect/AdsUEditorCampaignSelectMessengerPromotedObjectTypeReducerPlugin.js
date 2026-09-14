__d(
  "AdsUEditorCampaignSelectMessengerPromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsBulkValueUtils",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsCampaignMutatorUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsManagerIGLoginUtils",
    "AdsMutators",
    "AdsODAXCampaignReducerUtils",
    "AdsODAXStoreUtils",
    "AdsODAXUtils",
    "AdsOptimizationMutationUtils",
    "AdsPlacementReducerUtils",
    "AdsProfileVisitSABRBudgetRestoreUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignLeadAdsCLOMutators",
    "AdsUEditorCampaignMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectMessengerPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorSelectors",
    "ClickToMessageCTXMDFeatureGating",
    "PagelessCTXAdsUtils",
    "adsCampaignGroupBudgetGetDefaultOptimizationGoalParams",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignMessagesUnifiedCreationDefaultPageSelector",
    "igAccessAdsManagerUtils",
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
            eligibilityInformationByCampaignID: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationMap,
            bulkIsODAXCampaignGroup: o(
              "AdsUEditorSelectors",
            ).campaignGroup.bulkByAccessorToJS(function (e) {
              return e.is_odax_campaign_group;
            }),
            defaultPageID: r(
              "adsUEditorCampaignMessagesUnifiedCreationDefaultPageSelector",
            ),
            instagramAccountWithIABPLoadObject: o(
              "AdsUEditorCampaignInstagramSelectors",
            ).businessInstagramAccountsWithIABP,
          },
          function (e, t, n) {
            var a = t.campaignIDs,
              i = n.account,
              l = n.bulkIsODAXCampaignGroup,
              s = n.campaignGroupsByCampaignID,
              c = n.defaultPageID,
              d = n.eligibilityInformationByCampaignID,
              m = n.instagramAccountWithIABPLoadObject,
              p = o("AdsBulkValueUtils").getUniformValueOrDefault(l, !1),
              _ = o("AdsMutators").mutateEach(e, a, function (e, n) {
                var a = e,
                  l = r("nullthrows")(s.get(n)),
                  _ = l.objective,
                  f = o("AdsODAXUtils").isODAXTrafficCampaignGroup(p, _),
                  g = r("nullthrows")(d.get(n)),
                  h = r("AdsCampaignRecordAccessors").promoted_object.get(a),
                  y = o("AdsManagerIGLoginUtils").getIsIGLogin(i);
                a = o("AdsMutators").chain(
                  function (e) {
                    var t;
                    return o(
                      "AdsCampaignLiveVideoAdsUtils",
                    ).maybeSetLiveVideoAdType(
                      e,
                      l == null || (t = l.promoted_object) == null
                        ? void 0
                        : t.live_video_destination,
                    );
                  },
                  function (e) {
                    return r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.is_whatsapp_destination_ad.delete(e);
                  },
                  function (e) {
                    return r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.app_install_state.delete(e);
                  },
                  function (e) {
                    return r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.user_os.delete(e);
                  },
                  function (e) {
                    return o(
                      "AdsODAXCampaignReducerUtils",
                    ).maybeSetTargetingExpansion(
                      e,
                      t.isODAXMessagingAppsSelected === !0,
                      "none",
                    );
                  },
                  function (e) {
                    return r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.user_device.delete(e);
                  },
                  function (e) {
                    return r(
                      "AdsCampaignRecordAccessors",
                    ).conversion_value_expression_spec.delete(e);
                  },
                  _ !== r("AdsAPIObjectives").OUTCOME_LEADS
                    ? r("AdsCampaignRecordAccessors").promoted_object.set(
                        void 0,
                      )
                    : function (e) {
                        return o("AdsMutators").chain(
                          r("AdsCampaignRecordAccessors").promoted_object.set(
                            h,
                          ),
                          o("AdsUEditorCampaignLeadAdsCLOMutators")
                            .clearLeadAdsCLOConversionFields,
                        )(e);
                      },
                  r("AdsCampaignRecordAccessors").destination_type.set(
                    u(y, _, f, i, c, a),
                  ),
                )(a);
                var C = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                  _,
                  a,
                );
                ((a = o(
                  "AdsCampaignMutatorUtils",
                ).setOptimizationForMessengerandInstagramPromotedObject(
                  a,
                  g.objective,
                  i,
                )),
                  (a = o(
                    "AdsCampaignMutatorUtils",
                  ).setCountryForMessagingPromotedObjects(a, i)),
                  (a = o(
                    "AdsUEditorCampaignMutators",
                  ).updateConversionWindowLength(a, _, C)));
                var b = r("AdsCampaignOptimizationPluginResolver").resolve({
                    objective: _,
                    promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
                    destinationType: o(
                      "AdsAPICampaignRecordUtils",
                    ).getDestinationType(a),
                  }),
                  v = babelHelpers.extends(
                    {},
                    r("adsCampaignGroupBudgetGetDefaultOptimizationGoalParams")(
                      i,
                      l,
                      a,
                      p,
                    ),
                    {
                      objective: _,
                      promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
                    },
                  );
                if (
                  ((a = o(
                    "AdsCampaignMutatorUtils",
                  ).setDefaultBudgetForCampaign(
                    i,
                    a,
                    r("AdsAPIObjectives").MESSAGES,
                    r("AdsPromotedObjectTypes").MESSENGER,
                    _,
                  )),
                  (a = o(
                    "AdsOptimizationMutationUtils",
                  ).resetOptimizationRelatedFields(i, a, b, _, v, void 0)),
                  (a = o("AdsPlacementReducerUtils").resetPlacement(
                    a,
                    _ === r("AdsAPIObjectives").OUTCOME_LEADS
                      ? babelHelpers.extends({}, g, {
                          promotedObjectType: r("AdsPromotedObjectTypes")
                            .MESSENGER,
                          destinationType: r("AdCampaignDestination").MESSENGER,
                        })
                      : g,
                  )),
                  _ === r("AdsAPIObjectives").OUTCOME_LEADS)
                ) {
                  var S = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.page_id.get(a);
                  a = o("AdsODAXStoreUtils").maybeRetainOrDefaultPageID(
                    C != null ? C : r("AdsPromotedObjectTypes").NONE,
                    a,
                    S,
                  );
                }
                if (f) {
                  var R,
                    L,
                    E = r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.page_id.get(a),
                    k =
                      m && m.hasValue()
                        ? o(
                            "PagelessCTXAdsUtils",
                          ).getInstagramAccountBackedPageID(
                            (R = m.getValueEnforcing()) == null
                              ? void 0
                              : R.data,
                          )
                        : null;
                  a = o("AdsODAXStoreUtils").maybeRetainOrDefaultPageID(
                    y
                      ? r("AdsPromotedObjectTypes").MESSENGER
                      : C != null
                        ? C
                        : r("AdsPromotedObjectTypes").NONE,
                    a,
                    (L = E != null ? E : c) != null ? L : k,
                  );
                }
                return a;
              });
            return o(
              "AdsProfileVisitSABRBudgetRestoreUtils",
            ).restoreSABRDefaultedBudgets(_, a);
          },
          o("AdsUEditorCampaignSelectMessengerPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      };
    function u(e, t, n, a, i, l) {
      if (e)
        return o("igAccessAdsManagerUtils").isIGAccessParityEnabled() &&
          t === r("AdsAPIObjectives").OUTCOME_LEADS
          ? r("AdCampaignDestination").MESSENGER
          : r("AdCampaignDestination").INSTAGRAM_DIRECT;
      var s =
        n &&
        o(
          "ClickToMessageCTXMDFeatureGating",
        ).shouldSkipTrafficObjectiveDestinationTypeSetting();
      if (s) {
        var u = l.campaign_creation_source === "CREATION_PACKAGE";
        return o("AdsODAXStoreUtils").getMessagesMultiDestination(
          a,
          t,
          r("AdsPromotedObjectTypes").MESSENGER,
          i,
          l.optimization_goal,
          u,
        );
      }
      return r("AdCampaignDestination").MESSENGER;
    }
    var c = s;
    l.default = c;
  },
  98,
);
