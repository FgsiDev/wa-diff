__d(
  "AdsFBStoryCallToActionEligibility",
  [
    "AdCampaignDestination",
    "AdsPromotedObjectTypes",
    "AdsUEditorMessagingDestinationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a = e.callToActionLink,
        i = e.campaignDestination,
        l = e.defaultCallToActionType,
        s = e.isCTMAd,
        u = e.messagingAppDestination,
        c = e.promotedObjectType,
        d = e.supportedCallToActionTypes,
        m =
          o("AdsUEditorMessagingDestinationUtils").isWebsiteAdDestination(i) ||
          i === r("AdCampaignDestination").ON_VIDEO,
        p =
          c === r("AdsPromotedObjectTypes").NONE ||
          c === r("AdsPromotedObjectTypes").PIXEL ||
          c === r("AdsPromotedObjectTypes").VIDEO ||
          c === r("AdsPromotedObjectTypes").WEBSITE;
      return typeof a != "string" ||
        a.trim() === "" ||
        !m ||
        !p ||
        s ||
        u != null
        ? null
        : (t =
              (n = d.find(function (e) {
                var t = e.name;
                return t === l;
              })) == null
                ? void 0
                : n.name) != null
          ? t
          : null;
    }
    l.getFBStoryCallToActionType = e;
  },
  98,
);
