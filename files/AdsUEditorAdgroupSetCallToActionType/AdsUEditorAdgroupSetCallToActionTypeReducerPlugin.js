__d(
  "AdsUEditorAdgroupSetCallToActionTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsACOImageUtils",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIChildAttachmentPaths",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsCreativeGenAIEligibilityUtils",
    "AdsDCOImageCropDoFUtils",
    "AdsInstagramBrandedContentUtils",
    "AdsLinkTypeUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPACSupportedLinkCTAs",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupImageVariationMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCallToActionTypeDataActionFlux",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUEditorAdgroupUpcomingEventsMutator",
    "AdsUEditorAdgroupUrlMutators",
    "AdsUEditorCTXFlexibleFormatUtils",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignSelectors",
    "AdsWebAndApp3COUtils",
    "AdsWebsiteExtensionTypeUtils",
    "AdsWhatsAppConstants",
    "AdsWhatsAppDestinationUtils",
    "ApiAdObjectTypes",
    "ClickToMessageCTMAdoptionFeatureGating",
    "adsCallToActionFilterTypesForReminderAds",
    "adsConvertAdObjectRecordToPlainJS",
    "adsStoreToSelector",
    "adsUEditorAccountSelector",
    "adsUEditorGetAdsCreativeMGenAIBackendTestValueSelector",
    "gkx",
    "immutable",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "DONATE",
      u = "DONATE_NOW",
      c = "MESSAGE_PAGE",
      d = [
        (e = o("AdsCreativeGenAIEligibilityUtils")).GenAIBackendTestPurpose
          .TEST_WITH_DELIVERY,
        e.GenAIBackendTestPurpose.TEST_WITHOUT_DELIVERY,
        e.GenAIBackendTestPurpose.TEST_MULTI_ASSETS_WITHOUT_DELIVERY,
        e.GenAIBackendTestPurpose.EMPLOYEE_TEST,
      ];
    function m(e, t, n) {
      var a,
        i,
        l = o("AdsUEditorAdgroupAssetFeedMutators").convertFromAssetFeedSpec(
          o("AdsAdgroupTypeUtils").isVideoAd(e)
            ? r("ApiAdObjectTypes").VIDEO
            : o("AdsAPIAdgroupRecordUtils").getObjectType(e),
          e,
          t,
        ),
        s =
          (a = l.creative) == null || (a = a.object_story_spec) == null
            ? void 0
            : a.link_data,
        u = s == null ? void 0 : s.child_attachments;
      if (
        s &&
        ((i = s.call_to_action) == null ? void 0 : i.value) == null &&
        u != null &&
        r("AdsPACSupportedLinkCTAs").includes(n)
      ) {
        var c = u.map(function (e) {
          var t,
            n,
            o,
            a = e.toJS(),
            i = (t = a.call_to_action) == null ? void 0 : t.type;
          return e.setIn(
            r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.path,
            r("immutable").Map(
              ((o = {}),
              (o.type = i),
              (o.value = r("immutable").Map(((n = {}), (n.link = ""), n))),
              o),
            ),
          );
        });
        l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.child_attachments.set(c, l);
      }
      return l;
    }
    var p = {
      reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
        {
          parentData: o(
            "AdsUEditorAdgroupSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
          ),
          cachedStoreState: r("adsStoreToSelector")(
            r("AdsUEditorAdgroupCachedUIStore"),
          ),
          account: r("adsUEditorAccountSelector"),
          eligibilityInformation: o("AdsUEditorCampaignSelectors")
            .eligibilityInformationSelector,
          getGenAIBackendTestEligibilityStatus: r(
            "adsUEditorGetAdsCreativeMGenAIBackendTestValueSelector",
          ),
        },
        function (e, t, n) {
          var a = n.account,
            i = n.cachedStoreState,
            l = n.eligibilityInformation,
            p = n.getGenAIBackendTestEligibilityStatus,
            h = n.parentData;
          return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, n) {
            var y,
              C,
              b,
              v = r("nullthrows")(h.get(n)),
              S = v.campaign,
              R = v.campaignGroup,
              L = v.specPlugin,
              E = R.objective,
              k = o("AdsAPICampaignGroupRecordUtils").getPromotedObjectPageID(
                R,
              ),
              I = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
                campaign: S,
                campaignGroup: R,
              }),
              T = o("AdsODAXUtils").maybeTranslateObjective(
                E,
                I,
                S.optimization_goal,
              ),
              D = o("AdsUEditorAdgroupCachedUtils").getCachedCallToActionLink(
                i,
                n,
                t.callToActionType,
              ),
              x = e;
            if (
              (E === r("AdsAPIObjectives").STORE_VISITS &&
                t.callToActionType !== c &&
                (x = r("AdsAdgroupSemanticFields").pageWelcomeMessage.delete(
                  L,
                  e,
                )),
              T === r("AdsAPIObjectives").STORE_VISITS &&
                t.callToActionType !== c &&
                r("gkx")("15429") &&
                (x = _(e, L)),
              t.disablePAC === !0 &&
                o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e) &&
                (x = m(e, T, t.callToActionType)),
              o("AdsDCOImageCropDoFUtils").isAdgroupOptInImageCropDof(x) &&
                (t.callToActionType === s || t.callToActionType === u) &&
                (x = o("AdsDCOImageCropDoFUtils").setAdgroupOptOutImageCropDoF(
                  e,
                  L,
                )),
              T === r("AdsAPIObjectives").VIDEO_VIEWS &&
                o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) &&
                !o("AdsLinkTypeUtils").isWhatsAppLinkTypeSelected(e, L))
            ) {
              var $,
                P =
                  ($ = x.creative) == null || ($ = $.asset_feed_spec) == null
                    ? void 0
                    : $.link_urls;
              (t.callToActionType !== "WHATSAPP_MESSAGE" &&
                P != null &&
                P.some(function (e) {
                  return (
                    e.get("website_url") ===
                    o("AdsWhatsAppConstants").WHATSAPP_API_LINK
                  );
                }) &&
                (x = o("AdsUEditorAdgroupUrlMutators").updateWebsiteUrl(x, "")),
                t.callToActionType === "WHATSAPP_MESSAGE" &&
                  (x = o("AdsUEditorAdgroupUrlMutators").updateWebsiteUrl(
                    x,
                    o("AdsWhatsAppConstants").WHATSAPP_API_LINK,
                  )));
            }
            (f(e, L, T) &&
              (x = o(
                "AdsUEditorCallToActionMutators",
              ).deleteCallToActionValuePage(e, L)),
              o("AdsACOImageUtils").isCTASupported(t.callToActionType) ||
                (x = o(
                  "AdsUEditorAdgroupImageVariationMutators",
                ).removeImageOptimizationFields(
                  x,
                  r("immutable").List(["ENHANCEMENT"]),
                )),
              o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) &&
                g({
                  campaign: S,
                  campaignGroup: R,
                  adgroup: e,
                  specPlugin: L,
                  account: a,
                }) &&
                (o("AdsWebAndApp3COUtils").is3COPACAllowed(
                  R == null ? void 0 : R.objective,
                  r("adsConvertAdObjectRecordToPlainJS")(S),
                ) ||
                  (x = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.call_to_actions.delete(x))));
            var N = typeof p == "function" ? p() : null;
            N != null &&
              r("isTruthy")(N.shouldInTest) &&
              d.includes(N.testPurpose) &&
              (x = N.updatedAdgroupSpec);
            var M =
              t.callToActionType === "INSTAGRAM_MESSAGE" ||
              t.callToActionType === "MESSAGE_PAGE" ||
              t.callToActionType === "WHATSAPP_MESSAGE" ||
              o("AdsLinkTypeUtils").isMessagingAppsLinkTypeSelected(x, L) ||
              o("AdsWebsiteExtensionTypeUtils").isWhatsAppExtensionTypeSelected(
                x,
              );
            return (
              M &&
              ((y = x.creative) == null ? void 0 : y.branded_content) != null &&
              ((C = x.creative) == null || (C = C.branded_content) == null
                ? void 0
                : C.promoted_page_id) == null
                ? (x = o(
                    "AdsInstagramBrandedContentUtils",
                  ).setPromotedPageIDforL1Ads(x))
                : !M &&
                  ((b = x.creative) == null || (b = b.branded_content) == null
                    ? void 0
                    : b.promoted_page_id) != null &&
                  (x = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.branded_content.promoted_page_id.delete(x)),
              o(
                "adsCallToActionFilterTypesForReminderAds",
              ).isCTATypeCompatibleWithUpcomingEvent(t.callToActionType)
                ? (x = o(
                    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
                  ).removeUpcomingEventMetadataDisabledReason(
                    x,
                    "INCOMPATIBLE_CTA_TYPE",
                  ))
                : (x = o(
                    "AdsUEditorAdgroupUpcomingEventsMutator",
                  ).resetUpcomingEventAndUpdateUpcomingEventMetadataForIncompatibility(
                    x,
                    o("AdsUEditorAdgroupUpcomingEventsMutator")
                      .ResetUpcomingEventSpecReason.INCOMPATIBLE_CALL_TO_ACTION,
                  )),
              o("AdsUEditorCallToActionMutators").setCallToAction({
                callToActionType: t.callToActionType,
                pages: t.pages,
                cachedCallToActionLink: D,
                adgroup: x,
                campaignGroupPromotedPageID: k,
                campaignObjective: E,
                objective: T,
                promotedObjectType: I,
                specPlugin: L,
                eligibilityInformation: l,
                destination: S.destination_type,
              })
            );
          });
        },
        o("AdsUEditorAdgroupSetCallToActionTypeDataActionFlux").actionType,
      ),
    };
    function _(e, t) {
      var n,
        a = e;
      (r("AdsAdgroupSemanticFields").pageWelcomeMessage.get(t, a) != null &&
        (a = r("AdsAdgroupSemanticFields").pageWelcomeMessage.delete(t, a)),
        ((n = a.creative) == null ||
        (n = n.destination_spec) == null ||
        (n = n.message_destination) == null
          ? void 0
          : n.template_id) != null &&
          (a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.message_destination.delete(a)));
      var i = r("AdsAdgroupSemanticFields").callToActionValue.get(t, a),
        l = i == null ? void 0 : i.get("app_destination");
      return (
        o("AdsUEditorCTXFlexibleFormatUtils").isClickToMessageAppDestination(
          typeof l == "string" ? l : null,
        ) &&
          (a = o(
            "AdsUEditorCallToActionMutators",
          ).deleteCallToActionValueAppDestination(a, t)),
        a
      );
    }
    function f(e, t, n) {
      var o = r("AdsAdgroupSemanticFields").callToActionValue.get(t, e),
        a = o != null && o.get("page") != null;
      return a && n !== r("AdsAPIObjectives").PAGE_LIKES;
    }
    function g(e) {
      var t,
        n = e.adgroup,
        a = e.campaign,
        i = e.campaignGroup,
        l = e.specPlugin,
        s = a.destination_type,
        u = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
          campaign: a,
          campaignGroup: i,
        });
      return !(
        s === r("AdCampaignDestination").MESSENGER ||
        s === r("AdCampaignDestination").WHATSAPP ||
        s === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
        (n != null &&
          o("AdsLinkTypeUtils").isMessagingAppsLinkTypeSelected(n, l) &&
          ((o("AdsBrandAwarenessUtils").isBrandObjective(i.objective) &&
            i.is_odax_campaign_group === !0) ||
            o(
              "ClickToMessageCTMAdoptionFeatureGating",
            ).isEligibleForCTXL1EngagementVideoViews(u, i.objective))) ||
        ((o("AdsWhatsAppDestinationUtils").isEligibleForL1WhatsAppDestination(
          l == null || (t = l.pivots) == null ? void 0 : t.objective,
          l,
        ) ||
          i.objective === r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY) &&
          n != null &&
          o("AdsLinkTypeUtils").isWhatsAppLinkTypeSelected(n, l)) ||
        s === r("AdCampaignDestination").ON_AD ||
        (i.objective === r("AdsAPIObjectives").LEAD_GENERATION && !s)
      );
    }
    var h = p;
    l.default = h;
  },
  98,
);
