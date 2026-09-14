__d(
  "AdsUEditorCTXAdvantagePlusCatalogUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedUtils",
    "AdsGetStandardTemplateDefaultJSONWithDestination",
    "AdsODAXUtils",
    "AdsPageUtils",
    "AdsUEditorUnifiedCreationUtils",
    "ClickToWhatsAppFeatureGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t == null) {
        var n;
        return (n = o(
          "AdsUEditorUnifiedCreationUtils",
        ).getMessagingCTAFromDestinationType(e)) != null
          ? n
          : "MESSAGE_PAGE";
      }
      switch (t) {
        case "INSTAGRAM_DIRECT":
          return "INSTAGRAM_MESSAGE";
        case "WHATSAPP":
          return "WHATSAPP_MESSAGE";
        default:
          return "MESSAGE_PAGE";
      }
    }
    function s(e, t, n) {
      var a = null,
        i = o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t),
        l = o("AdsAdgroupTypeUtils").isVideoAd(t),
        s = o("AdsPageUtils").getPageID(t);
      if (i) {
        var u;
        a =
          (u = t.creative) == null ||
          (u = u.asset_feed_spec) == null ||
          (u = u.additional_data) == null
            ? void 0
            : u.page_welcome_message;
      } else if (l) {
        var c;
        a =
          (c = t.creative) == null ||
          (c = c.object_story_spec) == null ||
          (c = c.video_data) == null
            ? void 0
            : c.page_welcome_message;
      } else {
        var d;
        a =
          (d = t.creative) == null ||
          (d = d.object_story_spec) == null ||
          (d = d.link_data) == null
            ? void 0
            : d.page_welcome_message;
      }
      return a != null
        ? a
        : JSON.stringify(
            r("AdsGetStandardTemplateDefaultJSONWithDestination")(s, e, n),
          );
    }
    function u(e) {
      var t = e.campaign,
        n = e.campaignGroup,
        a = t.destination_type,
        i = n.objective,
        l =
          i === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
          i === r("AdsAPIObjectives").OUTCOME_SALES;
      return (
        l &&
        o("ClickToWhatsAppFeatureGating").isEligibleForCTXAdvantageCatalog(
          a,
          !1,
        )
      );
    }
    function c(e) {
      var t = e.adObjects,
        n = t.campaign,
        r = t.campaignGroup;
      return o("AdsAPICampaignRecordUtils").getPromotedObjectType(
        r == null ? void 0 : r.objective,
        n,
      );
    }
    function d(e) {
      var t = e.adObjects,
        n = t.campaign,
        r = t.campaignGroup,
        a = c(e);
      return o("AdsODAXUtils").maybeTranslateObjective(
        r == null ? void 0 : r.objective,
        a,
        n == null ? void 0 : n.optimization_goal,
      );
    }
    ((l.getCTXCallToActionFromDestinationAndAppDestination = e),
      (l.getSingleMediaPageWelcomeMessageForDestination = s),
      (l.maybeInCTXAdvantagePlusCatalogFlow = u),
      (l.getEffectiveObjectiveFromSelectionData = d));
  },
  98,
);
