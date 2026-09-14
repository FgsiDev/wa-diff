__d(
  "AdsUEditorInstagramMutators",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedUtils",
    "AdsCampaignMutatorUtils",
    "AdsCampaignRecordAccessors",
    "AdsCanvasAdUtils",
    "AdsCollectionsAdUtils",
    "AdsEditorPostEditMode",
    "AdsExistingPostCTXDefaultingUtils",
    "AdsGetStandardTemplateDefaultJSONWithDestination",
    "AdsIGIDv2SemanticFields",
    "AdsMediaFormatMutators",
    "AdsMessengerVisualEditorLandingScreenType",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignMutators",
    "AdsUEditorCampaignWhatsAppMutators",
    "AdsUEditorInstagramAdgroupSpecUtils",
    "AdsUEditorInstagramUtils",
    "AdsUEditorMessengerMutators",
    "AdsUEditorSetPostEditModeMutators",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsUEditorWebsiteMutators",
    "ApiAdObjectTypes",
    "CTXDefaultingStoreUtils",
    "CTXUnstructuredLeadsAdsStoreUtils",
    "ClickToMessageCTDFeatureGating",
    "adsCollectionAdClearCanvasLinkURL",
    "adsCollectionAdRemoveCollectionRetailersItemIDs",
    "gkx",
    "immutable",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e,
        n = t.adgroup,
        a = t.campaign,
        i = t.campaignGroup,
        l = t.campaignPromotedPageID,
        s = t.objective,
        u = t.specPlugin,
        c = t.supportPageEndCard,
        d = o("AdsAPIAdgroupRecordUtils").getPageID(n, u),
        m = JSON.stringify(
          r("AdsGetStandardTemplateDefaultJSONWithDestination")(
            d,
            r("AdCampaignDestination").INSTAGRAM_DIRECT,
          ),
        ),
        p =
          n == null ||
          (e = n.creative) == null ||
          (e = e.object_story_spec) == null ||
          (e = e.link_data) == null
            ? void 0
            : e.image_hash,
        _ = o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(n),
        f = o("AdsExistingPostCTXDefaultingUtils").isExistingPostAdForCTX(
          n,
          i.objective,
          a.destination_type,
        ),
        g =
          (s === r("AdsAPIObjectives").MESSAGES ||
            s === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) &&
          a.destination_type === r("AdCampaignDestination").INSTAGRAM_DIRECT,
        h =
          (s === r("AdsAPIObjectives").OUTCOME_SALES ||
            s === r("AdsAPIObjectives").CONVERSIONS) &&
          a.destination_type === r("AdCampaignDestination").INSTAGRAM_DIRECT,
        y =
          g || h
            ? o(
                "ClickToMessageCTDFeatureGating",
              ).getCTDDefaultCTAFromExperiment(!0)
            : "INSTAGRAM_MESSAGE",
        C = o("AdsMutators").chain(
          function (e) {
            return o(
              "AdsUEditorMessengerMutators",
            ).deleteMessengerDestinationFields({
              adgroup: e,
              specPlugin: u,
              supportPageEndCard: c,
            });
          },
          function (e) {
            return o("AdsUEditorCallToActionMutators").setCallToAction({
              callToActionType: y,
              pages: null,
              cachedCallToActionLink: null,
              adgroup: e,
              campaignGroupPromotedPageID: l != null ? l : d,
              objective: s,
              promotedObjectType: r("AdsPromotedObjectTypes").INSTAGRAM,
              specPlugin: u,
            });
          },
          function (e) {
            var t = e;
            if (o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(t)) {
              var n;
              ((t = (n = o(
                "AdsAdgroupCreativeAssetGroupsSpecMutators",
              )).setSpecsInCagGroup(t, 0, [], "videos")),
                (t = n.setSpecsInCagGroup(t, 0, [], "images")),
                (t = n.cleanUpCagCallToActionValueForAllGroups(t)),
                (t = n.setCagCallToActionValueByValueTypeForAllGroups(
                  t,
                  "INSTAGRAM_DIRECT",
                  "app_destination",
                  u,
                )));
            }
            return t;
          },
          function (e) {
            return o(
              "AdsUEditorCallToActionMutators",
            ).setCallToActionValueAppDestination(e, u, "INSTAGRAM_DIRECT");
          },
          function (e) {
            return r("AdsAdgroupSemanticFields").pageID.set(
              u,
              e,
              l != null ? l : d,
            );
          },
          function (e) {
            return o("AdsUEditorWebsiteMutators").setWebsiteURL({
              websiteURL: o("AdsUEditorInstagramUtils").DEFAULT_INSTAGRAM_LINK,
              adgroup: e,
              campaignGroupPromotedPageID: l,
              objective: s,
              promotedObjectType: r("AdsPromotedObjectTypes").INSTAGRAM,
              specPlugin: u,
              isExistingPostAdCTX: f,
            });
          },
          function (e) {
            return c
              ? r("AdsAdgroupSemanticFields").multiShareEndCard.set(u, e, !1)
              : e;
          },
          function (e) {
            return r("AdsAdgroupSemanticFields").pageWelcomeMessage.isSupported(
              u,
              e,
            )
              ? r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(u, e, m)
              : e;
          },
          function (e) {
            return _
              ? o(
                  "AdsUEditorAdgroupAssetFeedMutators",
                ).removeMissingAdlabelsFromCustomizationRules(e)
              : e;
          },
          function (e) {
            return _
              ? o(
                  "AdsUEditorInstagramAdgroupSpecUtils",
                ).removeInvalidCustomizationSpecs(e, u)
              : e;
          },
          function (e) {
            return o(
              "AdsUEditorUnifiedCreationAdgroupMutators",
            ).preserveImageHash(e, p, s, u);
          },
        ),
        b = C(n);
      return b;
    };
    function s(e, t, n) {
      var a;
      return o("AdsMutators").chain(
        (a = r("AdsCampaignRecordAccessors")).targeting
          .is_whatsapp_destination_ad.delete,
        a.targeting.app_install_state.delete,
        a.targeting.user_os.delete,
        a.targeting.user_device.delete,
        a.destination_type.set(r("AdCampaignDestination").INSTAGRAM_DIRECT),
        function (t) {
          return o("AdsCampaignMutatorUtils").setDefaultBudgetForCampaign(
            e,
            t,
            r("AdsAPIObjectives").MESSAGES,
            r("AdsPromotedObjectTypes").INSTAGRAM,
            n.objective,
          );
        },
        function (t) {
          return o(
            "AdsCampaignMutatorUtils",
          ).setCountryForMessagingPromotedObjects(t, e);
        },
        function (e) {
          return o("AdsPlacementReducerUtils").resetPlacement(e, n);
        },
        function (t) {
          return o(
            "AdsCampaignMutatorUtils",
          ).setOptimizationForMessengerandInstagramPromotedObject(
            t,
            n.objective,
            e,
          );
        },
        function (e) {
          return o("AdsUEditorCampaignWhatsAppMutators").resetPacing(!1, e);
        },
        function (e) {
          return o("AdsUEditorCampaignMutators").updateConversionWindowLength(
            e,
            n.objective,
            r("AdsPromotedObjectTypes").INSTAGRAM,
          );
        },
      )(t);
    }
    function u(e, t, n, a, i, l, s) {
      var u,
        d = e;
      return (
        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(d) &&
          (d = c(d, s, t, n, a, i, l)),
        o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e) &&
          (d = o("AdsUEditorAdgroupAssetFeedMutators").convertFromAssetFeedSpec(
            r("ApiAdObjectTypes").VIDEO,
            e,
            i,
          )),
        o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
          (d = o("AdsMutators").chain(
            function (e) {
              return r("adsCollectionAdClearCanvasLinkURL")(e, a, i, "");
            },
            function (e) {
              return r("adsCollectionAdRemoveCollectionRetailersItemIDs")(
                e,
                a,
                i,
              );
            },
          )(d)),
        o("AdsCanvasAdUtils").isCanvasDestinationEnabled(d) &&
          (d = r("adsCollectionAdClearCanvasLinkURL")(d, a, i, "")),
        (u = d.creative) != null &&
          u.portrait_customizations &&
          (d = r(
            "AdsAdgroupRecordAccessors",
          ).creative.portrait_customizations.delete(d)),
        o("AdsAdgroupTypeUtils").isVideoAd(d) ||
          (d = o("AdsMediaFormatMutators").setMediaFormat("VIDEO", d, a, i, l)),
        d
      );
    }
    function c(e, t, n, a, i, l, s) {
      return o("AdsUEditorSetPostEditModeMutators").setToUsingInlineCreation({
        adgroup: e,
        cachedCreative: o("AdsUEditorAdgroupCachedUtils").getCreative(
          s,
          t,
          r("AdsEditorPostEditMode").INLINE,
        ),
        cachedMetadata: o("AdsUEditorAdgroupCachedUtils").getMetadata(s, t),
        objective: l,
        specPathPlugin: i,
        campaign: n,
        campaignGroup: a,
      });
    }
    function d(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.ad_formats.set(
        r("immutable").List.of("AUTOMATIC_FORMAT"),
        e,
      );
    }
    function m(e, t, n, a) {
      var i,
        l,
        s =
          (i = e.creative) == null || (i = i.object_story_spec) == null
            ? void 0
            : i.instagram_actor_id,
        u =
          (l = e.creative) == null || (l = l.object_story_spec) == null
            ? void 0
            : l.instagram_user_id,
        c = o(
          "AdsIGIDv2SemanticFields",
        ).IGIDV2SemanticFields.instagramUserID.isSupported(t, e);
      return (
        r("gkx")("15865")
          ? u != null || !c || a == null
          : s != null || !c || n == null
      )
        ? e
        : o("AdsIGIDv2SemanticFields").IGIDV2SemanticFields.instagramUserID.set(
            t,
            e,
            n,
            a,
          );
    }
    function p(e, t, n, a, i) {
      var l = e;
      return (
        (l = o("AdsUEditorCallToActionMutators").deleteCallToAction(l, t)),
        (l = o("AdsUEditorCallToActionMutators").setCallToActionType(
          l,
          r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
          t,
        )),
        (l = o(
          "AdsUEditorCallToActionMutators",
        ).setCallToActionValueAppDestination(l, t, "INSTAGRAM_DIRECT")),
        r("isStringNullOrEmpty")(a)
          ? (l = o(
              "AdsUEditorCallToActionMutators",
            ).deleteCallToActionValueAppLink(l, t))
          : (l = o(
              "AdsUEditorCallToActionMutators",
            ).setCallToActionValueAppLink(l, t, a)),
        (l = r("AdsAdgroupSemanticFields").linkURL.set(
          t,
          l,
          o("AdsUEditorInstagramUtils").DEFAULT_INSTAGRAM_LINK,
        )),
        (l = r("AdsAdgroupSemanticFields").multiShareEndCard.set(t, l, !1)),
        (l = r("AdsAdgroupSemanticFields").headline.delete(t, l)),
        (l = o(
          "AdsIGIDv2SemanticFields",
        ).IGIDV2SemanticFields.instagramUserID.set(t, l, n, i)),
        l
      );
    }
    function _(e, t, n, a, i) {
      var l = o(
          "CTXDefaultingStoreUtils",
        ).getDefaultOptimizationGoalByObjectiveAndPageID(a, n, i, null),
        s = o(
          "CTXUnstructuredLeadsAdsStoreUtils",
        ).enableUnstructuredLeadsOptimization(i, a, n);
      if (l === null && s === !1) return e;
      if (
        i != null &&
        n === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT &&
        (a === r("AdsAPIObjectives").OUTCOME_LEADS ||
          a === r("AdsAPIObjectives").LEAD_GENERATION)
      ) {
        var u = r("AdsGetStandardTemplateDefaultJSONWithDestination")(i, n, a),
          c =
            l != null && l[0] === r("AdsAPIOptimizationGoals").LEAD_GENERATION,
          d = o(
            "CTXUnstructuredLeadsAdsStoreUtils",
          ).enableCTDUnstructuredLeadsOptimizationMessageTemplateDefaulting(
            i,
            a,
            n,
          );
        if (c || d)
          return (
            (u.landing_screen_type = r(
              "AdsMessengerVisualEditorLandingScreenType",
            ).WELCOME_MESSAGE),
            r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(
              t,
              e,
              JSON.stringify(u),
            )
          );
        if (s) {
          var m = o(
            "CTXUnstructuredLeadsAdsStoreUtils",
          ).getAutomatedChatDefaultTemplateID(i);
          if (m != null)
            return (
              (u.landing_screen_type = r(
                "AdsMessengerVisualEditorLandingScreenType",
              ).LITE_WEIGHT_AUTOMATED_CHAT),
              (u.ctm_lead_gen_template_id = m),
              r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(
                t,
                e,
                JSON.stringify(u),
              )
            );
        }
      }
      return e;
    }
    ((l.setFieldsForSelectingPromotedObjectType = e),
      (l.setInstagramPromotedObjectTypeForMessages = s),
      (l.setAdgroupForInstagramIGTVplacement = u),
      (l.setAdFormatForDCO = d),
      (l.maybeSetAdgroupCreativeInstagramAccountID = m),
      (l.setAdgroupCreativeForInstagramLeadGen = p),
      (l.maybeSetAdgroupMessageTemplateDefaultingForUnstructuredLead = _));
  },
  98,
);
