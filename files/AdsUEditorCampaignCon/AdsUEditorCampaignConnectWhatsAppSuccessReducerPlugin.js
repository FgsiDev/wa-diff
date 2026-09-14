__d(
  "AdsUEditorCampaignConnectWhatsAppSuccessReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsWhatsAppConnectAccountDialogVerifyCodeSuccessActionFlux",
    "AdsWhatsAppFeatureGating",
    "adsGetUniformValueSelector",
    "adsUEditorAccountSelector",
    "adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            objective: r("adsGetUniformValueSelector")(
              r(
                "adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector",
              ),
              o("AdsAPIObjectives").NONE,
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.objective,
              l = [1, 3],
              s = l.includes(t.whatsAppNumberType);
            return !o("AdsWhatsAppFeatureGating").isWaBusinessUpsellEligible(
              a,
              i,
            ) &&
              !o(
                "AdsWhatsAppFeatureGating",
              ).isConversationEnabledForTrafficObjectiveWhatsappForNonEU(
                a,
                i,
                s,
              )
              ? e
              : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e, t) {
                  var n = r("AdsCampaignRecordAccessors").destination_type.get(
                    e,
                  );
                  if (n !== r("AdCampaignDestination").WHATSAPP) return e;
                  var o = s
                    ? r("AdsAPIOptimizationGoals").CONVERSATIONS
                    : r("AdsAPIOptimizationGoals").LINK_CLICKS;
                  return r("AdsCampaignRecordAccessors").optimization_goal.set(
                    o,
                    e,
                  );
                });
          },
          r("AdsWhatsAppConnectAccountDialogVerifyCodeSuccessActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
