__d(
  "AdsConvergenceMessagesAdgroupPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupLinkDataRecord",
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "AdsConvergenceAdgroupUtils",
    "AdsCreativeFormatMutatorUtils",
    "AdsGetStandardTemplateDefaultJSONForWhatsAppFlows",
    "AdsMessengerConstants",
    "AdsMessengerVisualEditorLandingScreenType",
    "AdsMessengerVisualEditorUtils",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsUEditorAdgroupAutomatedChatDefaultTemplateIdSelector",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "CTWAChatBuilderFlowsUtils",
    "CallPromptFeatureGating",
    "ClickToMessageLeadGenFeatureGating",
    "ClickToWhatsAppFeatureGating",
    "logCTXAutomatedChatEvent",
    "maybeDefaultCallPromptInStartConversationsTemplate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsAPIAdgroupLinkDataRecord")
        .getSpec()
        .call_to_action.getSpec().value,
      s = "MESSAGE_PAGE",
      u = new e({ app_destination: "MESSENGER" }),
      c = {
        type: "convergenceAdgroup",
        key: "adgroup/messages",
        pivots: { objective: r("AdsAPIObjectives").MESSAGES },
        generateDefaultAdgroupSpec: function (t, n, a) {
          var e,
            i,
            l,
            c = o("AdsConvergenceAdgroupUtils").EMPTY_SHARE_ADGROUP_RECORD,
            d = t.campaign,
            m = t.campaignGroupObjective,
            p = t.page,
            _ = t.pageID,
            f = o(
              "AdsPlacementAPISpecReaderUtils",
            ).convertCampaignToPlacementSpec_LEGACY(d),
            g = o(
              "AdsMessengerVisualEditorUtils",
            ).getStandardTemplateDefaultJSON(_),
            h =
              (e = d.promoted_object) == null
                ? void 0
                : e.page_whatsapp_number_id,
            y =
              (i = d.promoted_object) == null
                ? void 0
                : i.whats_app_business_phone_number_id,
            C = o(
              "CTWAChatBuilderFlowsUtils",
            ).getWABAIDForWhatsAppBusinessPhoneNumberID(
              y,
              t.businessWhatsAppBusinessAccountsLoadObject,
            ),
            b =
              (l = o(
                "CTWAChatBuilderFlowsUtils",
              ).getDefaultWABAIDFromBusinessAccounts(
                t.businessWhatsAppBusinessAccountsLoadObject,
              )) != null
                ? l
                : C,
            v = o("ClickToWhatsAppFeatureGating").shouldDefaultToWAFlows(
              h,
              p,
              d.destination_type,
              m,
              y,
              C,
              d.optimization_goal,
              _,
              !1,
              b,
            );
          (o("CallPromptFeatureGating").eligibleForCallPromptForCTXAdsAM(
            m,
            r("AdCampaignDestination").MESSENGER,
            [f],
            p,
          ) &&
            (g = r("maybeDefaultCallPromptInStartConversationsTemplate")(
              g,
              p,
              d.optimization_goal,
            )),
            v &&
              d.destination_type === r("AdCampaignDestination").WHATSAPP &&
              (g = r("AdsGetStandardTemplateDefaultJSONForWhatsAppFlows")(
                h,
                p,
                _,
                d.destination_type,
                m,
                d.optimization_goal,
                y,
                C,
                b,
              )));
          var S = JSON.stringify(g);
          if ((p == null ? void 0 : p.id) != null) {
            var R = o(
                "AdsUEditorAdgroupAutomatedChatDefaultTemplateIdSelector",
              ).AdsUEditorAdgroupAutomatedChatDefaultTemplateIdSelector(),
              L = R(p == null ? void 0 : p.id);
            if (
              L.defaultTemplateId != null &&
              o(
                "ClickToMessageLeadGenFeatureGating",
              ).enableAutomatedChatDefaulting(
                p,
                m,
                r("AdCampaignDestination").MESSENGER,
                d.optimization_goal,
              )
            ) {
              var E;
              ((g.landing_screen_type = r(
                "AdsMessengerVisualEditorLandingScreenType",
              ).LITE_WEIGHT_AUTOMATED_CHAT),
                (g.ctm_lead_gen_template_id = L.defaultTemplateId),
                (S = JSON.stringify(g)),
                r("logCTXAutomatedChatEvent")(
                  "ctx_automated_chat_defaulting",
                  "conversion_location_change",
                  (E = c) == null ? void 0 : E.source_ad_id,
                ));
            }
          }
          var k = o("CallPromptFeatureGating").eligibleForCallPromptUpdateCTA(
            s,
            p,
            m,
            g,
            "AdsConvergenceMessagesAdgroupPlugin.generateDefaultAdgroupSpec",
          );
          return (
            (c = o("AdsMutators").chain(
              function (e) {
                return r("AdsAdgroupSemanticFields").callToActionType.set(
                  a,
                  e,
                  s,
                );
              },
              function (e) {
                return k
                  ? r("AdsAdgroupSemanticFields").callToActionType.set(
                      a,
                      e,
                      "CONTACT_US",
                    )
                  : r("AdsAdgroupSemanticFields").callToActionType.set(a, e, s);
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").callToActionValue.set(
                  a,
                  e,
                  u,
                );
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").linkURL.set(
                  a,
                  e,
                  o("AdsMessengerConstants").EMPTY_MESSENGER_LINK,
                );
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").headline.set(
                  a,
                  e,
                  o("AdsMessengerConstants").DEFAULT_HEADLINE.toString(),
                );
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").pageID.set(a, e, _);
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(
                  a,
                  e,
                  S,
                );
              },
              function (e) {
                return o("AdsCreativeFormatMutatorUtils").mutateCreativeFormat(
                  e,
                  "SingleLink",
                );
              },
              function (e) {
                return o("AdsConvergenceAdgroupUtils").maybeEnableAutoflow(
                  e,
                  t,
                );
              },
              function (e) {
                var n, r, a, i;
                return o(
                  "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
                ).updateContextualDiscoveryAdsEligibilitySpec(e, {
                  shouldOptIn:
                    ((n = t.contextualDiscoveryAdsEligibilityState) == null
                      ? void 0
                      : n.shouldOptIn) === !0,
                  shouldRenderCheckbox:
                    t == null ||
                    (r = t.contextualDiscoveryAdsEligibilityState) == null
                      ? void 0
                      : r.shouldRenderCheckbox,
                  isExplicitOptOut:
                    t == null ||
                    (a = t.contextualDiscoveryAdsEligibilityState) == null
                      ? void 0
                      : a.isExplicitOptOut,
                  actionMetadataType:
                    (i = t.contextualDiscoveryAdsEligibilityState) == null
                      ? void 0
                      : i.actionMetadataType,
                });
              },
            )(c)),
            o("AdsConvergenceAdgroupUtils").maySetPoliticalAd(
              c,
              t.specialAdCategories,
            )
          );
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
