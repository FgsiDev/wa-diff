__d(
  "AdsUEditorAdgroupSetAIGenIcebreakersReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAIGenIcebreakersValidationUtils",
    "AdsAdgroupSemanticFields",
    "AdsAiGenIcebreakersCTWAUtils",
    "AdsGetDefaultIceBreakers",
    "AdsMessengerConstants",
    "AdsMessengerVisualEditorCustomerActionType",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetAIGenIcebreakersDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "ClickToMessageCTMPerformanceFeatureGating",
    "adsMessengerDataModelSetActionType",
    "adsMessengerDataModelSetAutofillMessage",
    "adsMessengerDataModelSetIceBreakers",
    "adsUeditorMessagesAIGenIcebreakersParamSelectors",
    "isTruthy",
    "nullthrows",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l) {
      var s = o(
        "ClickToMessageCTMPerformanceFeatureGating",
      ).isEligibleForLeveragingInboxFAQsInAM(e, a, i, l);
      n.is_eligible_for_leveraging_inbox_faqs = r("isTruthy")(s);
      var u = o(
        "ClickToMessageCTMPerformanceFeatureGating",
      ).isEligibleForLeveragingInboxFAQsInAM(e, a, i, l);
      r("isTruthy")(u) &&
        r("adsMessengerDataModelSetActionType")(
          n,
          r("AdsMessengerVisualEditorCustomerActionType").INBOX_FAQS,
        );
      var c = o("AdsGetDefaultIceBreakers").getDefaultIceBreakers(
          a,
          e,
          void 0,
          i,
          l,
        ),
        d = c.map(function (e) {
          var t;
          return r("isTruthy")(u)
            ? {
                title: e.title.toString(),
                response: (t = e.response) == null ? void 0 : t.toString(),
              }
            : { title: e.title.toString() };
        }),
        m = JSON.stringify(r("adsMessengerDataModelSetIceBreakers")(n, d));
      if (
        t === r("AdsMessengerVisualEditorCustomerActionType").AUTOFILL_MESSAGE
      ) {
        var p = JSON.parse(m),
          _ = {
            content: o(
              "AdsMessengerConstants",
            ).DEFAULT_AUTOFILL_MESSAGE.toString(),
          };
        m = JSON.stringify(r("adsMessengerDataModelSetAutofillMessage")(p, _));
      }
      return m;
    }
    function s(e, t, n, a, i) {
      var l = JSON.stringify(n);
      if (
        o("AdsAiGenIcebreakersCTWAUtils").shouldDefaultToGenAIAutofillMessage(
          e,
          t,
          i,
        )
      ) {
        r("adsMessengerDataModelSetActionType")(
          n,
          r("AdsMessengerVisualEditorCustomerActionType").AUTOFILL_MESSAGE,
        );
        var s = o(
          "AdsAiGenIcebreakersCTWAUtils",
        ).getAutofillMessageFromGenAIIcebreakers(a);
        l = JSON.stringify(r("adsMessengerDataModelSetAutofillMessage")(n, s));
      } else if (e === r("AdCampaignDestination").WHATSAPP) {
        var u = o(
          "AdsAiGenIcebreakersCTWAUtils",
        ).getWhatsAppIcebreakerFromCaptionIcebreakers(a);
        ((l = JSON.stringify(r("adsMessengerDataModelSetIceBreakers")(n, u))),
          r("adsMessengerDataModelSetActionType")(
            JSON.parse(l),
            r("AdsMessengerVisualEditorCustomerActionType").ICE_BREAKERS,
          ));
      } else
        (r("adsMessengerDataModelSetActionType")(
          n,
          r("AdsMessengerVisualEditorCustomerActionType").ICE_BREAKERS,
        ),
          (n.is_eligible_for_leveraging_inbox_faqs = !1),
          (l = JSON.stringify(r("adsMessengerDataModelSetIceBreakers")(n, a))));
      return l;
    }
    function u(e, t, n) {
      var o = JSON.parse(e);
      return (
        r("setByPath")(
          o,
          ["ai_gen_conversation_model_version"],
          n ? t : "UNDEFINED",
        ),
        JSON.stringify(o)
      );
    }
    var c = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            adCaption: o("adsUeditorMessagesAIGenIcebreakersParamSelectors")
              .adsUEditorAdgroupBodyTextSelector,
            postID: o("adsUeditorMessagesAIGenIcebreakersParamSelectors")
              .adsUEditorAdgroupPostIDSelector,
          },
          function (t, n, a) {
            var i = a.adCaption,
              l = a.plugins,
              c = a.postID;
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t) {
              var a,
                d,
                m = r("nullthrows")(l.get(t.id)),
                p = r("AdsAdgroupSemanticFields").pageWelcomeMessage.get(m, t),
                _;
              try {
                if (p == null) return t;
                _ = JSON.parse(p);
              } catch (e) {
                return t;
              }
              var f =
                  (a = _) == null
                    ? void 0
                    : a.ai_generated_icebreaker_toggle_enabled,
                g =
                  (d = _) == null || (d = d.text_format) == null
                    ? void 0
                    : d.customer_action_type;
              if (
                n.overwriteExistingTemplate !== !0 &&
                o(
                  "AdsAIGenIcebreakersValidationUtils",
                ).didAIGenIBEligiblityChangeDuringAIGenIBFetch(
                  p,
                  c,
                  i,
                  n.destination,
                  f,
                  n.isAIGenIcebreakersEnabled,
                  n.objective,
                  _.template_id,
                  n.adsWebsiteExtensionType,
                )
              )
                return t;
              var h = JSON.stringify(_);
              return (
                n.isAIGenIcebreakersEnabled === !0 &&
                g !==
                  r("AdsMessengerVisualEditorCustomerActionType").WHATSAPP_FLOW
                  ? (h = s(
                      n.destination,
                      g,
                      _,
                      n.icebreakers,
                      n.adsWebsiteExtensionType,
                    ))
                  : n.isAIGenIcebreakersEnabled === !1 &&
                    (h = e(
                      n.destination,
                      g,
                      _,
                      n.pageID,
                      n.adsWebsiteExtensionType,
                      n.objective,
                    )),
                (h = u(h, n.modelVersion, n.isAIGenIcebreakersEnabled)),
                r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(
                  r("nullthrows")(l.get(t.id)),
                  t,
                  h,
                )
              );
            });
          },
          o("AdsUEditorAdgroupSetAIGenIcebreakersDataActionFlux").actionType,
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
