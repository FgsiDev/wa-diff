__d(
  "adsUeditorBulkSelectedLinkTypeSelector",
  [
    "AdsAPIObjectives",
    "AdsAdgroupPlayableAssetTypeProvider",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupUtils",
    "AdsArLinkUtils",
    "AdsBrandAwarenessUtils",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsCanvasAdUtils",
    "AdsDynamicAdsUtils",
    "AdsLinkTypeUtils",
    "AdsODAXUtils",
    "AdsPlayableAssetDataStore",
    "AdsPromotedObjectTypeOmnichannelVariationUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsWebToAppUtils",
    "AppAdsPlayablesUtils",
    "ClickToMessageCTMAdoptionFeatureGating",
    "IsReminderAd",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsMessengerValidationIsL1MessengerAd",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupArAdsIsEligibleSelector",
    "adsUEditorAdgroupWebToAppSelector",
    "adsUEditorCampaignPromotedObjectTypeForUISelector",
    "adsUeditorBulkSelectedLinkTypeSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case r("AdsPromotedObjectTypes").MOBILE_APP:
          return "app";
        default:
          return "external";
      }
    }
    var s = r("adsCreateSelector")(
        [
          r("adsUEditorAdObjectsForSelectedAdgroupsSelector"),
          r("adsGetUniformValueSelector")(
            r("adsUEditorCampaignPromotedObjectTypeForUISelector"),
            r("AdsPromotedObjectTypes").NONE,
          ),
          o("adsUEditorAdgroupArAdsIsEligibleSelector")
            .adsUEditorAdgroupArAdsIsEligibleSelector,
          r("AdsAdgroupPlayableAssetTypeProvider").toFluxSelector(),
          r("AdsPlayableAssetDataStore")
            .getCurrentAccountPlayableAssetsSelector,
          o("adsUEditorAdgroupWebToAppSelector")
            .adsUEditorAdgroupWebToAppSelector,
        ],
        function (t, n, r, a, i, l) {
          return o(
            "adsUeditorBulkSelectedLinkTypeSelectorUtils",
          ).adsUEditorAdsAdObjectLinkTypeMap(t, n, r, a, i, l);
        },
        { name: i.id + ".adsUEditorAdsAdObjectLinkTypeMapSelector" },
      ),
      u = r("adsCreateSelector")(
        [s],
        function (t) {
          return o(
            "adsUeditorBulkSelectedLinkTypeSelectorUtils",
          ).adsUEditorBulkSelectedLinkType(t);
        },
        { name: i.id + ".adsUEditorBulkSelectedLinkTypeSelector" },
      );
    function c(t, n, a, i, l, s) {
      var u,
        c,
        d =
          (u = t.campaign.promoted_object) == null
            ? void 0
            : u.full_funnel_objective,
        m = o("AdsODAXUtils").maybeTranslateObjective(
          d || t.campaignGroup.objective,
        ),
        p = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(t),
        _ =
          ((c = t.adgroup.creative) == null ||
          (c = c.object_story_spec) == null ||
          (c = c.video_data) == null ||
          (c = c.call_to_action) == null ||
          (c = c.value) == null
            ? void 0
            : c.movie_id) != null;
      if (_) return "movie";
      var f = o("AdsLinkTypeUtils").isEventLinkTypeSelected(t.adgroup, p);
      if (f) return "event";
      var g = o("AdsLinkTypeUtils").isPhoneCallLinkTypeSelected(t.adgroup, p);
      if (g) return "phone_call";
      var h =
        (o("AdsBrandAwarenessUtils").isBrandObjective(
          d || t.campaignGroup.objective,
        ) &&
          t.campaignGroup.is_odax_campaign_group === !0) ||
        o(
          "ClickToMessageCTMAdoptionFeatureGating",
        ).isEligibleForCTXL1EngagementVideoViews(
          o(
            "AdsPromotedObjectTypeOmnichannelVariationUtils",
          ).getPromotedObjectType(n),
          t.campaignGroup.objective,
        ) ||
        o(
          "ClickToMessageCTMAdoptionFeatureGating",
        ).isEligibleForCTXL1EngagementPostEngagement(
          t.campaign.optimization_goal,
          t.campaignGroup.objective,
        )
          ? o("AdsLinkTypeUtils").isMessagingAppsLinkTypeSelected(t.adgroup, p)
          : !1;
      if (h) return "messaging_apps";
      if (
        o("AdsCampaignLiveVideoAdsUtils").isInstagramLiveVideoAd(
          t.campaign.destination_type,
        ) &&
        o("AdsCampaignLiveVideoAdsUtils").getIsCustomizableCTAIgLvaEnabled() &&
        o("AdsLinkTypeUtils").isInstagramLiveWhatsappLinkTypeSelected(
          t.adgroup,
          p,
        )
      )
        return "whatsapp";
      var y = o("AdsLinkTypeUtils").isWhatsAppLinkTypeSelected(t.adgroup, p);
      if (y) return "whatsapp";
      var C = r("adsMessengerValidationIsL1MessengerAd")(t);
      if (C) return "messenger";
      var b = o("AdsLinkTypeUtils").getPlayableSourceLinkType(t, i, l);
      if (b != null) {
        var v = o(
          "AppAdsPlayablesUtils",
        ).isNewPlayableCreativeExperienceEnabled(m);
        if (!v) return b;
      }
      var S = a && o("AdsArLinkUtils").isArAd(t.adgroup, p);
      if (o("AdsCanvasAdUtils").isCanvasDestinationEnabled(t.adgroup) || S)
        return "instant_experience";
      if (
        s != null &&
        s.isAdWebToAppEligible &&
        o("AdsWebToAppUtils").hasWebDestinationUrlSet(t.adgroup)
      )
        return "web_to_app";
      var R = r("AdsAdgroupSemanticFields").callToActionType.get(p, t.adgroup);
      if (
        (o("IsReminderAd").isReminderAdFromAdObjects(t) &&
          R === "JOIN_LIVE_VIDEO") ||
        (o("AdsLinkTypeUtils").isInstagramLiveVideoDestinationInEffect(
          t.adgroup,
          p,
        ) &&
          o("AdsCampaignLiveVideoAdsUtils").isInstagramLiveVideoAd(
            t.campaign.destination_type,
          ) &&
          o("AdsCampaignLiveVideoAdsUtils").getIsCustomizableCTAIgLvaEnabled())
      )
        return "live_video";
      if (
        o("AdsAdgroupUtils").isMAIAdWithExistingPosts(t, n) ||
        o("AdsAdgroupUtils").isMAEAdWithExistingPosts(t, n) ||
        o("AdsAdgroupUtils").hasAppLink(t.adgroup) ||
        o("AdsAdgroupUtils").hasAppID(t.adgroup) ||
        o("AdsAdgroupUtils").hasAppProductPageID(t.adgroup)
      )
        return "app";
      if (R == null)
        return m === r("AdsAPIObjectives").REACH ||
          m === r("AdsAPIObjectives").BRAND_AWARENESS
          ? "external"
          : o(
                "AdsPromotedObjectTypeOmnichannelVariationUtils",
              ).getPromotedObjectType(n) ===
              r("AdsPromotedObjectTypes").MOBILE_APP
            ? "app"
            : o(
                  "AdsPromotedObjectTypeOmnichannelVariationUtils",
                ).getPromotedObjectType(n) ===
                r("AdsPromotedObjectTypes").WEBSITE_AND_MESSAGES
              ? "external"
              : "none";
      var L = o("AdsDynamicAdsUtils").isDynamicAd(t.adgroup);
      return o(
        "AdsPromotedObjectTypeOmnichannelVariationUtils",
      ).getPromotedObjectType(n) === r("AdsPromotedObjectTypes").MOBILE_APP &&
        (R === "LEARN_MORE" || R === "SEE_DETAILS") &&
        !L &&
        !o("AdsAdgroupUtils").hasTemplateWebUrl(t.adgroup)
        ? e(n)
        : R === "LEARN_MORE" ||
            R === "SEE_DETAILS" ||
            (L && o("AdsAdgroupUtils").hasTemplateWebUrl(t.adgroup))
          ? "external"
          : e(n);
    }
    ((l.adsUEditorAdsAdObjectLinkTypeMapSelector = s),
      (l.adsUEditorBulkSelectedLinkTypeSelector = u),
      (l.getLinkTypeForAdgroupAdObjects = c));
  },
  98,
);
