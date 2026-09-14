__d(
  "AdsUEditorCampaignSetPageIdReducerPlugin",
  [
    "AccountAttributionEvent",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsConversionWindowUtils",
    "AdsDataAtom",
    "AdsLeadGenLeadNurturingCLOUtil",
    "AdsLiveVideoAdUtils",
    "AdsMutators",
    "AdsPageStore",
    "AdsPlacementAPISpecReaderUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetPageIdDataActionFlux",
    "AdsUnifiedProfileVisitUtils",
    "AdsWhatsAppFeatureGating",
    "CallOptimizationGoalGating",
    "adsGetUniformValueSelector",
    "adsUEditorAccountSelector",
    "adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector",
    "immutable",
    "isUPVBPScopedPickersEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e
        ? function (e) {
            return r(
              "AdsCampaignRecordAccessors",
            ).promoted_object.instagram_actor_id.set(null, e);
          }
        : function (e) {
            return e;
          };
    }
    var u = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            getPage: r("AdsPageStore").getSelector,
            objectives: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
            translatedObjective: r("adsGetUniformValueSelector")(
              r(
                "adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector",
              ),
              o("AdsAPIObjectives").NONE,
            ),
          },
          function (t, n, a) {
            var i = n.campaignIDs.some(function (e) {
                var n,
                  a = (n = t.get(e)) == null ? void 0 : n.getValue();
                return (
                  a != null &&
                  o(
                    "AdsUnifiedProfileVisitUtils",
                  ).getIsUnifiedProfileVisitsDestination(
                    r("AdsCampaignRecordAccessors").destination_type.get(a),
                  )
                );
              }),
              l = i && r("isUPVBPScopedPickersEnabled")();
            return o("AdsMutators").mutateEach(t, n.campaignIDs, function (t) {
              var i = o(
                  "AdsUnifiedProfileVisitUtils",
                ).getIsUnifiedProfileVisitsDestination(
                  r("AdsCampaignRecordAccessors").destination_type.get(t),
                ),
                u = s(!i || !l);
              return o("AdsMutators").chain(
                function (e) {
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.page_id.set(n.pageID, e);
                },
                r("AdsCampaignRecordAccessors").promoted_object
                  .place_page_set_id.delete,
                u,
                function (e) {
                  return (r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.page_whatsapp_number_id.get(e) != null ||
                    r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.whats_app_business_phone_number_id.get(
                      e,
                    ) != null) &&
                    o("AdsWhatsAppFeatureGating").shouldClearPWANOnPageSwitch()
                    ? o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").promoted_object
                          .page_whatsapp_number_id.delete,
                        r("AdsCampaignRecordAccessors").promoted_object
                          .whats_app_business_phone_number_id.delete,
                      )(e)
                    : e;
                },
                function (e) {
                  var t = a.getPage(n.pageID),
                    i = r("AdsCampaignRecordAccessors").destination_type.get(e);
                  if (
                    i !== r("AdCampaignDestination").WHATSAPP ||
                    a.objectives.get(e.id) ===
                      o("AdsAPIObjectives").OUTCOME_LEADS
                  )
                    return e;
                  var l = e.attribution_spec,
                    s =
                      (t == null ? void 0 : t.has_whatsapp_business_number) ===
                        !0 &&
                      a.translatedObjective ===
                        o("AdsAPIObjectives").CONVERSIONS &&
                      o(
                        "AdsWhatsAppFeatureGating",
                      ).shouldSalesObjectiveWhatsAppDefaultConversations();
                  if (
                    !o("AdsWhatsAppFeatureGating").isWaBusinessUpsellEligible(
                      a.account,
                      a.translatedObjective,
                    ) &&
                    !o(
                      "AdsWhatsAppFeatureGating",
                    ).isConversationEnabledForTrafficObjectiveWhatsappForNonEU(
                      a.account,
                      a.translatedObjective,
                      t != null ? t.has_whatsapp_business_number : null,
                    ) &&
                    !s
                  )
                    return o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").attribution_spec.set(
                        r("immutable").fromJS(
                          o("AdsConversionWindowUtils").updateSingleAttrWindow(
                            l ? l.toJS() : [],
                            r("AccountAttributionEvent").CLICK_THROUGH,
                            1,
                          ),
                        ),
                      ),
                      r("AdsCampaignRecordAccessors").optimization_goal.set(
                        r("AdsAPIOptimizationGoals").LINK_CLICKS,
                      ),
                    )(e);
                  if (t != null) {
                    if (t.has_whatsapp_business_number === !0)
                      return r(
                        "AdsCampaignRecordAccessors",
                      ).optimization_goal.set(
                        r("AdsAPIOptimizationGoals").CONVERSATIONS,
                        e,
                      );
                    if (t.has_whatsapp_number === !0)
                      return o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").attribution_spec.set(
                          r("immutable").fromJS(
                            o(
                              "AdsConversionWindowUtils",
                            ).updateSingleAttrWindow(
                              l ? l.toJS() : [],
                              r("AccountAttributionEvent").CLICK_THROUGH,
                              1,
                            ),
                          ),
                        ),
                        r("AdsCampaignRecordAccessors").optimization_goal.set(
                          r("AdsAPIOptimizationGoals").LINK_CLICKS,
                        ),
                      )(e);
                  }
                  return e;
                },
                function (e) {
                  var t = r("AdsCampaignRecordAccessors").destination_type.get(
                      e,
                    ),
                    n = a.objectives.get(e.id),
                    i = e.promoted_object,
                    l = r("AdsCampaignRecordAccessors").optimization_goal.get(
                      e,
                    );
                  return o(
                    "AdsLeadGenLeadNurturingCLOUtil",
                  ).isLeadgenPlusWhatsAppOptimization(
                    n,
                    t,
                    l,
                    i == null ? void 0 : i.lead_ads_follow_up_event,
                    i == null ? void 0 : i.lead_ads_form_event_source_type,
                  )
                    ? o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").promoted_object
                          .page_whatsapp_number_id.delete,
                        r("AdsCampaignRecordAccessors").promoted_object
                          .whats_app_business_phone_number_id.delete,
                      )(e)
                    : e;
                },
                function (e) {
                  var t = a.account,
                    i = a.getPage(n.pageID),
                    l = r("AdsCampaignRecordAccessors").destination_type.get(e),
                    s = a.objectives.get(e.id),
                    u = o(
                      "AdsPlacementAPISpecReaderUtils",
                    ).convertCampaignToPlacementSpec(e);
                  return o(
                    "CallOptimizationGoalGating",
                  ).shouldDefaultForCallOptimization(t, i, s, l, [u])
                    ? o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").optimization_goal.set(
                          r("AdsAPIOptimizationGoals").MEANINGFUL_CALL_ATTEMPT,
                        ),
                      )(e)
                    : e;
                },
                function (t) {
                  var a;
                  return (
                    ((a = t.live_video_ad_campaign_config) == null
                      ? void 0
                      : a.live_video_ad_type) === "CURRENT_LIVE" &&
                      (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                        function () {
                          o("AdsLiveVideoAdUtils").updateFBLiveVideoDefault(
                            t,
                            n.hostID,
                            "CURRENT_LIVE",
                            "CURRENT_LIVE",
                          );
                        },
                      ),
                    t
                  );
                },
              )(t);
            });
          },
          o("AdsUEditorCampaignSetPageIdDataActionFlux").actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
