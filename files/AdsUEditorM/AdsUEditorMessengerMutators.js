__d(
  "AdsUEditorMessengerMutators",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIChildAttachmentPaths",
    "AdsAPIObjectives",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsCollectionsAdUtils",
    "AdsGetStandardTemplateDefaultJSONWithDestination",
    "AdsInterfacesLogger",
    "AdsMessengerConstants",
    "AdsMessengerVisualEditorLandingScreenType",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupAutomatedChatDefaultTemplateIdSelector",
    "AdsUEditorAdgroupMultiProductMutators",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorInstagramUtils",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsUEditorWebsiteMutators",
    "AdsWhatsAppUtils",
    "CTXUnstructuredLeadsAdsStoreUtils",
    "CallPromptFeatureGating",
    "ClickToMessageLeadGenFeatureGating",
    "adsLWIGraduationUtils",
    "isTruthy",
    "logCTXAutomatedChatEvent",
    "maybeDefaultCallPromptInStartConversationsTemplate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e = t.account,
          n = t.adgroup,
          a = t.campaign,
          i = t.campaignGroupPromotedPageID,
          l = t.objective,
          s = t.optimizationGoal,
          c = t.page,
          d = t.placementSpecs,
          m = t.promotedObjectType,
          p = t.specPlugin,
          _ = t.supportPageEndCard;
        if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(n)) return n;
        var f = n,
          g = o("AdsODAXUtils").maybeTranslateObjective(l, m, s),
          h =
            g === r("AdsAPIObjectives").LEAD_GENERATION
              ? "SIGN_UP"
              : "MESSAGE_PAGE",
          y = "MESSENGER",
          C = r("AdsAdgroupSemanticFields").headline.get(p, f),
          b =
            typeof C == "string" && C !== ""
              ? C
              : o("AdsMessengerConstants").DEFAULT_HEADLINE.toString(),
          v = u(
            i,
            l,
            a == null ? void 0 : a.destination_type,
            e,
            c,
            d,
            l,
            s,
            n,
          );
        v != null &&
          o("CallPromptFeatureGating").eligibleForCallPromptUpdateCTA(
            h,
            c,
            l,
            JSON.parse(v),
            "AdsUEditorMessengerMutators.setMessengerDestinationFields",
          ) &&
          (h = "CONTACT_US");
        var S =
            l === r("AdsAPIObjectives").MESSAGES ||
            l === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
            l === r("AdsAPIObjectives").OUTCOME_LEADS ||
            l === r("AdsAPIObjectives").LINK_CLICKS,
          R = o("AdsMutators").chain(
            function (e) {
              return o("AdsUEditorCallToActionMutators").setCallToAction({
                callToActionType: h,
                pages: null,
                cachedCallToActionLink: null,
                adgroup: e,
                campaignGroupPromotedPageID: i,
                objective: g,
                promotedObjectType: m,
                specPlugin: p,
              });
            },
            function (e) {
              var t = e;
              return (
                o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(t) &&
                  ((t = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).cleanUpCagCallToActionValueForAllGroups(t)),
                  (t = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).setCagCallToActionValueByValueTypeForAllGroups(
                    t,
                    o("AdsMessengerConstants").EMPTY_MESSENGER_LINK,
                    "link",
                    p,
                  )),
                  (t = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).setCagCallToActionValueByValueTypeForAllGroups(
                    t,
                    "MESSENGER",
                    "app_destination",
                    p,
                  ))),
                t
              );
            },
            function (e) {
              return o(
                "AdsUEditorCallToActionMutators",
              ).setCallToActionValueAppDestination(e, p, y);
            },
            function (e) {
              return o("AdsUEditorWebsiteMutators").setWebsiteURL({
                websiteURL: o("AdsMessengerConstants").EMPTY_MESSENGER_LINK,
                adgroup: e,
                campaignGroupPromotedPageID: i,
                objective: g,
                promotedObjectType: m,
                specPlugin: p,
              });
            },
            function (e) {
              return o("AdsUEditorWebsiteMutators").setWebsiteURLInChildren({
                websiteURL: o("AdsMessengerConstants").EMPTY_MESSENGER_LINK,
                adgroup: e,
                campaignGroupPromotedPageID: i,
                objective: g,
                promotedObjectType: m,
                specPlugin: p,
              });
            },
            function (e) {
              return _
                ? r("AdsAdgroupSemanticFields").multiShareEndCard.set(p, e, !1)
                : e;
            },
            function (e) {
              return r("AdsAdgroupSemanticFields").headline.set(p, e, b);
            },
            function (e) {
              return o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(
                e,
              )
                ? o(
                    "AdsUEditorAdgroupAssetFeedMutators",
                  ).removeMissingAdlabelsFromCustomizationRules(e)
                : e;
            },
            function (e) {
              return o(
                "AdsUEditorUnifiedCreationAdgroupMutators",
              ).deleteAppLink(e, p);
            },
            function (e) {
              return S
                ? r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(p, e, v)
                : e;
            },
          );
        return R(f);
      },
      s = function (t) {
        var e = t.adgroup,
          n = t.removeLinkURL,
          a = n === void 0 ? !0 : n,
          i = t.specPlugin,
          l = t.supportPageEndCard;
        if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)) {
          var s = r("AdsAdgroupSemanticFields").linkURL.get(i, e);
          if (
            s === o("AdsMessengerConstants").EMPTY_MESSENGER_LINK ||
            s === o("AdsWhatsAppUtils").getDefaultCTALink() ||
            s === o("AdsUEditorInstagramUtils").DEFAULT_INSTAGRAM_LINK
          ) {
            var u;
            r("AdsInterfacesLogger").log(
              {
                eventName: "stale_messaging_link_on_cta_switch",
                data:
                  ((u = {}),
                  (u.message = "EXISTING_POST_SKIPPED_DELETE_MESSENGER_FIELDS"),
                  (u.stale_link = s),
                  u),
              },
              r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
            );
          }
          return e;
        }
        var c = r("AdsAdgroupSemanticFields").headline.get(i, e),
          d = o("AdsMutators").chain(
            function (e) {
              return o(
                "AdsUEditorCallToActionMutators",
              ).deleteCallToActionValueAppDestination(e, i);
            },
            function (e) {
              return o(
                "AdsUEditorAdgroupMultiProductMutators",
              ).deleteInEachChild(r("AdsAPIChildAttachmentPaths").LINK, e);
            },
            function (e) {
              return o(
                "AdsUEditorAdgroupMultiProductMutators",
              ).deleteInEachChild(["link"], e);
            },
            function (e) {
              return o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) ||
                !a ||
                o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
                ? e
                : r("AdsAdgroupSemanticFields").linkURL.delete(i, e);
            },
            function (e) {
              return l
                ? r("AdsAdgroupSemanticFields").multiShareEndCard.set(i, e, !0)
                : e;
            },
            function (e) {
              return c ===
                o("AdsMessengerConstants").DEFAULT_HEADLINE.toString()
                ? r("AdsAdgroupSemanticFields").headline.delete(i, e)
                : e;
            },
            function (e) {
              return r(
                "AdsAdgroupSemanticFields",
              ).pageWelcomeMessage.isSupported(i, e)
                ? r("AdsAdgroupSemanticFields").pageWelcomeMessage.delete(i, e)
                : e;
            },
          );
        return d(e);
      },
      u = function (t, n, a, i, l, s, u, c, d) {
        s === void 0 && (s = []);
        var e = r("AdsGetStandardTemplateDefaultJSONWithDestination")(t, a, n);
        if (
          (l == null ? void 0 : l.id) != null &&
          o(
            "CTXUnstructuredLeadsAdsStoreUtils",
          ).enableCTMUnstructuredLeadsOptimizationMessageTemplateDefaulting(
            l == null ? void 0 : l.id,
            n,
            a,
            u,
          )
        )
          return (
            (e.landing_screen_type = r(
              "AdsMessengerVisualEditorLandingScreenType",
            ).WELCOME_MESSAGE),
            JSON.stringify(e)
          );
        if (
          (o("CallPromptFeatureGating").eligibleForCallPromptForCTXAdsAM(
            u != null ? u : n,
            a,
            s,
            l,
          ) &&
            (e = r("maybeDefaultCallPromptInStartConversationsTemplate")(
              e,
              l,
              c,
            )),
          t != null)
        ) {
          var m = o(
              "AdsUEditorAdgroupAutomatedChatDefaultTemplateIdSelector",
            ).AdsUEditorAdgroupAutomatedChatDefaultTemplateIdSelector(),
            p = m(t);
          p.defaultTemplateId != null &&
            o(
              "ClickToMessageLeadGenFeatureGating",
            ).enableAutomatedChatDefaulting(l, u, a, c) &&
            ((e.landing_screen_type = r(
              "AdsMessengerVisualEditorLandingScreenType",
            ).LITE_WEIGHT_AUTOMATED_CHAT),
            (e.ctm_lead_gen_template_id = p.defaultTemplateId),
            r("logCTXAutomatedChatEvent")(
              "ctx_automated_chat_defaulting",
              "page_change",
              d == null ? void 0 : d.source_ad_id,
            ));
        }
        if (
          n === r("AdsAPIObjectives").OUTCOME_LEADS ||
          (u === r("AdsAPIObjectives").OUTCOME_LEADS &&
            o("adsLWIGraduationUtils").isLWIGraduationCreationPackage())
        ) {
          var _ =
            (l == null ? void 0 : l.id) != null &&
            o(
              "CTXUnstructuredLeadsAdsStoreUtils",
            ).enableCTDUnstructuredLeadsOptimizationMessageTemplateDefaulting(
              l.id,
              n,
              a,
            );
          _
            ? (e.landing_screen_type = r(
                "AdsMessengerVisualEditorLandingScreenType",
              ).WELCOME_MESSAGE)
            : (e.landing_screen_type = r(
                "AdsMessengerVisualEditorLandingScreenType",
              ).CTM_LEAD_GEN_NEW);
        }
        return JSON.stringify(e);
      },
      c = function (t) {
        var e = t.adgroup,
          n = t.message,
          o = t.specPlugin;
        return r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(o, e, n);
      },
      d = function (t) {
        var e = t.adgroup,
          n = t.specPlugin,
          a = t.pageID,
          i = t.objective,
          l = t.destination,
          s = t.account,
          d = t.page,
          m = t.placementSpecs,
          p = m === void 0 ? [] : m,
          _ = t.campaignGroupObjective,
          f = t.optimizationGoal,
          g = u(a, i, l, s, d, p, _, f, e);
        if (r("isTruthy")(g)) {
          var h = e;
          return (
            o("CallPromptFeatureGating").eligibleForCallPromptUpdateCTA(
              "MESSAGE_PAGE",
              d,
              i,
              JSON.parse(g),
              "AdsUEditorMessengerMutators.resetPageWelcomeMessage",
            ) &&
              (h = r("AdsAdgroupSemanticFields").callToActionType.set(
                n,
                e,
                "CONTACT_US",
              )),
            c({ adgroup: h, specPlugin: n, message: g })
          );
        }
        return e;
      };
    ((l.setMessengerDestinationFields = e),
      (l.deleteMessengerDestinationFields = s),
      (l.getDefaultPageWelcomeMessage = u),
      (l.setPageWelcomeMessage = c),
      (l.resetPageWelcomeMessage = d));
  },
  98,
);
