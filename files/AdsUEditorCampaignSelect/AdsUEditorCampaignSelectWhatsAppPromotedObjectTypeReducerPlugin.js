__d(
  "AdsUEditorCampaignSelectWhatsAppPromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsODAXStoreUtils",
    "AdsPageStore",
    "AdsProfileVisitSABRBudgetRestoreUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectWhatsAppPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignWhatsAppMutators",
    "AdsWhatsAppFeatureGating",
    "adsUEditorAccountSelector",
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
          },
          function (e, t, n) {
            var a = n.account,
              i = n.eligibilityInformation,
              l = n.getPage,
              s = n.objectives,
              u = babelHelpers.extends({}, i, {
                promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
                objectStoreURL: null,
                containsOffer: !1,
              }),
              c = o("AdsMutators").mutateEach(
                e,
                t.campaignIDs,
                function (e, n) {
                  var i = r("nullthrows")(s.get(n));
                  return o("AdsMutators").chain(
                    function (e) {
                      return o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").targeting.user_os
                          .delete,
                        r("AdsCampaignRecordAccessors").targeting.user_device
                          .delete,
                        r("AdsCampaignRecordAccessors").targeting
                          .app_install_state.delete,
                      )(e);
                    },
                    function (e) {
                      return o(
                        "AdsUEditorCampaignWhatsAppMutators",
                      ).setWhatsAppPromotedObjectTypeForMessages(
                        e,
                        a,
                        i,
                        u,
                        null,
                        l,
                        !0,
                        r("AdCampaignDestination").WHATSAPP,
                        t.pageWhatsAppNumberID,
                      );
                    },
                    function (e) {
                      if (t.pageID != null)
                        return r(
                          "AdsCampaignRecordAccessors",
                        ).promoted_object.page_id.set(t.pageID, e);
                      if (i === r("AdsAPIObjectives").OUTCOME_LEADS) {
                        var n = r(
                          "AdsCampaignRecordAccessors",
                        ).promoted_object.page_id.get(e);
                        return o(
                          "AdsODAXStoreUtils",
                        ).maybeRetainOrDefaultPageID(
                          r("AdsPromotedObjectTypes").WHATSAPP,
                          e,
                          n,
                        );
                      }
                      return e;
                    },
                    function (e) {
                      var n = r(
                        "AdsCampaignRecordAccessors",
                      ).destination_type.get(e);
                      if (
                        n !== r("AdCampaignDestination").WHATSAPP ||
                        i !== r("AdsAPIObjectives").LINK_CLICKS
                      )
                        return e;
                      if (t.pageID != null) {
                        var s = l(t.pageID);
                        if (
                          (s == null
                            ? void 0
                            : s.has_whatsapp_business_number) === !0 &&
                          o(
                            "AdsWhatsAppFeatureGating",
                          ).isConversationEnabledForTrafficObjectiveWhatsappForNonEU(
                            a,
                            i,
                            !0,
                          )
                        )
                          return r(
                            "AdsCampaignRecordAccessors",
                          ).optimization_goal.set(
                            r("AdsAPIOptimizationGoals").CONVERSATIONS,
                            e,
                          );
                      }
                      return e;
                    },
                    function (e) {
                      return r(
                        "AdsCampaignRecordAccessors",
                      ).frequency_control_specs.delete(e);
                    },
                  )(e);
                },
              );
            return o(
              "AdsProfileVisitSABRBudgetRestoreUtils",
            ).restoreSABRDefaultedBudgets(c, t.campaignIDs);
          },
          o("AdsUEditorCampaignSelectWhatsAppPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
