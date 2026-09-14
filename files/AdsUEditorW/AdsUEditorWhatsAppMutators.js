__d(
  "AdsUEditorWhatsAppMutators",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIChildAttachmentPaths",
    "AdsAPIObjectives",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsGetStandardTemplateDefaultJSONForWhatsAppFlows",
    "AdsGetStandardTemplateDefaultJSONWithDestination",
    "AdsMessengerVisualEditorLandingScreenType",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupMultiProductMutators",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorSetPostEditModeMutators",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsUnifiedCreativeAPIFields",
    "AdsWhatsAppConstants",
    "AdsWhatsAppUtils",
    "CTWAAdsOptimizationStoreUtils",
    "ClickToWhatsAppFeatureGating",
    "immutable",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e = t.adgroup,
          n = t.campaignPromotedPageID,
          a = t.objective,
          i = t.specPlugin;
        if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)) return e;
        var l = o("AdsMutators").chain(
          function (e) {
            return r("AdsAdgroupSemanticFields").pageID.set(i, e, n);
          },
          function (e) {
            if (o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e)) {
              var t;
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.link_urls.set(
                r("immutable").fromJS([
                  ((t = {}),
                  (t.website_url = o("AdsWhatsAppUtils").getDefaultCTALink()),
                  t),
                ]),
                e,
              );
            }
            return r("AdsAdgroupSemanticFields").linkURL.set(
              i,
              e,
              o("AdsWhatsAppUtils").getDefaultCTALink(),
            );
          },
          function (e) {
            var t,
              n =
                (e == null ||
                (t = e.creative) == null ||
                (t = t.object_story_spec) == null ||
                (t = t.link_data) == null
                  ? void 0
                  : t.child_attachments) != null;
            return o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e)
              ? n
                ? e
                : o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                    e,
                    i,
                    r("AdsUnifiedCreativeAPIFields").headline,
                    0,
                    "text",
                    o("AdsWhatsAppConstants").DEFAULT_HEADLINE.toString(),
                  )
              : r("AdsAdgroupSemanticFields").headline.set(
                  i,
                  e,
                  o("AdsWhatsAppConstants").DEFAULT_HEADLINE.toString(),
                );
          },
          function (e) {
            return o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e)
              ? o(
                  "AdsUEditorAdgroupAssetFeedMutators",
                ).removeMissingAdlabelsFromCustomizationRules(e)
              : e;
          },
          function (e) {
            return r("AdsAdgroupSemanticFields").pageWelcomeMessage.isSupported(
              i,
              e,
            ) && a === r("AdsAPIObjectives").LINK_CLICKS
              ? r("AdsAdgroupSemanticFields").pageWelcomeMessage.delete(i, e)
              : e;
          },
        );
        return l(e);
      },
      s = function (t) {
        var e,
          n = t.adgroup,
          a = t.campaignGroupObjective,
          i = t.campaignPromotedPageID,
          l = t.destinationType,
          s = t.enableMessageTemplateSection,
          u = t.isMultiDestination,
          c = t.objective,
          m = t.optimizationGoal,
          p = t.page,
          _ = t.pageWhatsAppNumberID,
          f = t.shouldSaveCreative,
          g = t.specPlugin,
          h = t.whatsAppBusinessPhoneNumberID,
          y = t.whatsAppBusinessPhoneNumberWabaID;
        if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(n)) return n;
        var C = o("AdsAPIAdgroupRecordUtils").getPageID(n, g),
          b = o("ClickToWhatsAppFeatureGating").shouldDefaultToWAFlows(
            _,
            p,
            r("AdCampaignDestination").WHATSAPP,
            a,
            h,
            y,
            m,
            C,
            !1,
          ),
          v = d(C, c, _, p, m, h, y, b, l),
          S =
            n == null ||
            (e = n.creative) == null ||
            (e = e.object_story_spec) == null ||
            (e = e.link_data) == null
              ? void 0
              : e.image_hash,
          R = o("AdsMutators").chain(
            function (e) {
              return o(
                "AdsUEditorUnifiedCreationAdgroupMutators",
              ).deleteAppLink(e, g);
            },
            function (e) {
              return o(
                "AdsUEditorUnifiedCreationAdgroupMutators",
              ).deleteAppDestinationPageID(e, c, g);
            },
            function (e) {
              return o("AdsUEditorCallToActionMutators").setCallToAction({
                callToActionType: "WHATSAPP_MESSAGE",
                pages: null,
                cachedCallToActionLink: null,
                adgroup: e,
                campaignGroupPromotedPageID: i != null ? i : C,
                objective: c,
                promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
                specPlugin: g,
              });
            },
            function (e) {
              return r("AdsAdgroupSemanticFields").pageID.set(
                g,
                e,
                i != null ? i : C,
              );
            },
            function (e) {
              var t = o("AdsWhatsAppUtils").getDefaultCTALink();
              if (o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e)) {
                var n;
                return o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
                  ? o(
                      "AdsUEditorUnifiedCreationAdgroupMutators",
                    ).updateAssetFeedSpecLinkURL(e, t)
                  : r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.link_urls.set(
                      r("immutable").fromJS([
                        ((n = {}), (n.website_url = t), n),
                      ]),
                      e,
                    );
              }
              return r("AdsAdgroupSemanticFields").linkURL.set(g, e, t);
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
                    o("AdsWhatsAppUtils").getDefaultCTALink(),
                    "link",
                    g,
                  )),
                  (t = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).setCagCallToActionValueByValueTypeForAllGroups(
                    t,
                    "WHATSAPP",
                    "app_destination",
                    g,
                  ))),
                t
              );
            },
            function (e) {
              return o(
                "AdsUEditorCallToActionMutators",
              ).setCallToActionValueAppDestination(e, g, "WHATSAPP");
            },
            function (e) {
              var t,
                n =
                  (e == null ||
                  (t = e.creative) == null ||
                  (t = t.object_story_spec) == null ||
                  (t = t.link_data) == null
                    ? void 0
                    : t.child_attachments) != null;
              return o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(
                e,
              ) &&
                !o(
                  "AdsAssetFeedUtils",
                ).isDofMessagingDestinationAdgroupFromSpec(e)
                ? n
                  ? e
                  : o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                      e,
                      g,
                      r("AdsUnifiedCreativeAPIFields").headline,
                      0,
                      "text",
                      o("AdsWhatsAppConstants").DEFAULT_HEADLINE.toString(),
                    )
                : r("AdsAdgroupSemanticFields").headline.set(
                    g,
                    e,
                    o("AdsWhatsAppConstants").DEFAULT_HEADLINE.toString(),
                  );
            },
            function (e) {
              if (
                r("AdsAdgroupSemanticFields").pageWelcomeMessage.isSupported(
                  g,
                  e,
                )
              ) {
                var t = o("AdsAPIAdgroupRecordUtils").getPageID(e, g);
                return (s &&
                  ((c === r("AdsAPIObjectives").MESSAGES && u) ||
                    c === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
                    (c === r("AdsAPIObjectives").LINK_CLICKS && !u) ||
                    (c === r("AdsAPIObjectives").OUTCOME_SALES && !u) ||
                    c === r("AdsAPIObjectives").LEAD_GENERATION)) ||
                  (a === r("AdsAPIObjectives").OUTCOME_LEADS && b)
                  ? r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(
                      g,
                      e,
                      v,
                    )
                  : t != null && c === r("AdsAPIObjectives").MESSAGES
                    ? o(
                        "AdsUEditorSetPostEditModeMutators",
                      ).setDefaultPageWelcomeMessageSpecsForWhatsApp(e, t, g)
                    : r("AdsAdgroupSemanticFields").pageWelcomeMessage.delete(
                        g,
                        e,
                      );
              }
              return e;
            },
            function (e) {
              return o(
                "AdsUEditorUnifiedCreationAdgroupMutators",
              ).preserveImageHash(e, S, c, g, f);
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
          );
        return R(n);
      },
      u = function (t) {
        var e = t.adgroup,
          n = t.removeWebsiteURL,
          a = t.specPlugin,
          i = t.supportPageEndCard;
        if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)) return e;
        var l = r("AdsAdgroupSemanticFields").headline.get(a, e),
          s = o("AdsMutators").chain(
            function (e) {
              return o(
                "AdsUEditorAdgroupMultiProductMutators",
              ).deleteInEachChild(r("AdsAPIChildAttachmentPaths").LINK, e);
            },
            function (e) {
              return n ? r("AdsAdgroupSemanticFields").linkURL.delete(a, e) : e;
            },
            function (e) {
              return i
                ? r("AdsAdgroupSemanticFields").multiShareEndCard.set(a, e, !0)
                : e;
            },
            function (e) {
              return l === o("AdsWhatsAppConstants").DEFAULT_HEADLINE.toString()
                ? r("AdsAdgroupSemanticFields").headline.delete(a, e)
                : e;
            },
          );
        return s(e);
      },
      c = function (t, n) {
        var e = o("AdsMutators").chain(function (e) {
          return r("AdsAdgroupSemanticFields").linkURL.set(
            n,
            e,
            o("AdsWhatsAppUtils").getDefaultCTALink(),
          );
        });
        return e(t);
      };
    function d(e, t, n, a, i, l, s, u, c) {
      var d =
          o(
            "AdsUEditorMessagingDestinationUtils",
          ).isMultiDestinationWithWhatsApp(c) && r("qex")._("3490") === !0
            ? c
            : r("AdCampaignDestination").WHATSAPP,
        m =
          u === !0
            ? r("AdsGetStandardTemplateDefaultJSONForWhatsAppFlows")(
                n,
                a,
                e,
                r("AdCampaignDestination").WHATSAPP,
                t,
                i,
                l,
                s,
              )
            : r("AdsGetStandardTemplateDefaultJSONWithDestination")(e, d, t);
      return (
        (m.landing_screen_type =
          t === r("AdsAPIObjectives").LEAD_GENERATION &&
          !o(
            "CTWAAdsOptimizationStoreUtils",
          ).getIsCTWALeadOptimizationGoalEligible(e, !1)
            ? r("AdsMessengerVisualEditorLandingScreenType").CTM_LEAD_GEN_NEW
            : m.landing_screen_type),
        JSON.stringify(m)
      );
    }
    ((l.setFieldsForSelectingPage = e),
      (l.setFieldsForSelectingPromotedObjectType = s),
      (l.deleteWhatsAppDestinationFields = u),
      (l.setWhatsAppDefaultLinkURLToAdgroup = c));
  },
  98,
);
