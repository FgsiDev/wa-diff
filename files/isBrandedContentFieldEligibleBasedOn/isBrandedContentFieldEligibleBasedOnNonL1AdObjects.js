__d(
  "isBrandedContentFieldEligibleBasedOnNonL1AdObjects",
  [
    "AdCampaignDestination",
    "AdDraftFragmentSource",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsODAXUtils",
    "AdsOfferState",
    "AdsSmartPromotion",
    "AdsUnifiedProfileVisitUtils",
    "adsCampaignGetOfferStateType",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e.campaign,
        a = e.campaignGroup,
        i = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
          a.objective,
          n,
        ),
        l = o("AdsODAXUtils").maybeTranslateObjective(
          a.objective,
          i,
          n.optimization_goal,
        );
      if (
        a.campaign_group_creation_source ===
          r("AdDraftFragmentSource").AD_BUILDER_STANDALONE ||
        l === r("AdsAPIObjectives").PAGE_LIKES
      )
        return !1;
      if (
        l === r("AdsAPIObjectives").APP_INSTALLS &&
        a.smart_promotion_type === r("AdsSmartPromotion").SMART_APP_PROMOTION
      ) {
        var s;
        return (s = r("qex")._("1169")) != null ? s : !1;
      }
      var u = n.destination_type;
      if (u === r("AdCampaignDestination").BROADCAST_CHANNEL) return !1;
      var c = o("AdsUnifiedProfileVisitUtils").getIsProfileVisitsConversion(
          l,
          i,
        ),
        d = o(
          "AdsUnifiedProfileVisitUtils",
        ).getIsUnifiedProfileVisitsConversionAndPAEligible(
          a.objective,
          i,
          u,
          n.optimization_goal,
        );
      if (c && !d) return !1;
      var m =
        r("adsCampaignGetOfferStateType")(n) === r("AdsOfferState").HAS_OFFER;
      if (m) return !1;
      if (
        ((t = n.promoted_object) == null ? void 0 : t.omnichannel_object) !=
        null
      ) {
        var p;
        return (p = r("qex")._("1169")) != null ? p : !1;
      }
      return !0;
    }
    l.default = e;
  },
  98,
);
