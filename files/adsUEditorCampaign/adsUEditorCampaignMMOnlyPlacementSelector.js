__d(
  "adsUEditorCampaignMMOnlyPlacementSelector",
  [
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecReaderUtilsShared",
    "AdsUEditorAdgroupMarketingMessagesMessageOnlyUtils",
    "AdsUEditorCampaignSelectors",
    "adsChooseSelector",
    "adsCreateSelector",
    "areAnySelectedCampaignsMarketingMessagesOnlySelectorImplLogic",
    "isAccountEligibleForMessengerMarketingMessages",
    "isMarketingMessagesPlacementOnlyFromPlacementSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s = r("adsCreateSelector"))(
        [(e = o("AdsUEditorCampaignSelectors")).placementSpecs],
        function (t) {
          return o(
            "areAnySelectedCampaignsMarketingMessagesOnlySelectorImplLogic",
          ).areAnySelectedCampaignsMarketingMessagesOnlySelectorImplLogic(t);
        },
        {
          name:
            i.id + ".areAnySelectedCampaignsMarketingMessagesOnlySelectorImpl",
        },
      ),
      c = s(
        [e.placementSpecs],
        function (t) {
          return d(t);
        },
        {
          name:
            i.id + ".areAllSelectedCampaignsMarketingMessagesOnlySelectorImpl",
        },
      );
    function d(e) {
      return e.length === 0
        ? !1
        : e.every(
            o("isMarketingMessagesPlacementOnlyFromPlacementSpec")
              .isMarketingMessagesPlacementOnlyFromPlacementSpec,
          );
    }
    var m = r("adsChooseSelector")(
        function () {
          return (
            o(
              "AdsUEditorAdgroupMarketingMessagesMessageOnlyUtils",
            ).isAdAccountEligibleForMarketingMessagesMessageOnly() ||
            o(
              "isAccountEligibleForMessengerMarketingMessages",
            ).isAccountEligibleForMessengerMarketingMessages()
          );
        },
        u,
        s(
          [],
          function () {
            return !1;
          },
          { name: i.id },
        ),
        !0,
        i.id + ".areAnySelectedCampaignsMarketingMessagesOnlySelector",
      ),
      p = r("adsChooseSelector")(
        function () {
          return (
            o(
              "AdsUEditorAdgroupMarketingMessagesMessageOnlyUtils",
            ).isAdAccountEligibleForMarketingMessagesMessageOnly() ||
            o(
              "isAccountEligibleForMessengerMarketingMessages",
            ).isAccountEligibleForMessengerMarketingMessages()
          );
        },
        c,
        s(
          [],
          function () {
            return !1;
          },
          { name: i.id },
        ),
        !0,
        i.id + ".areAllSelectedCampaignsMarketingMessagesOnlySelector",
      ),
      _ = s(
        [e.placementSpecs],
        function (t) {
          return t.every(function (e) {
            return o("AdsPlacementAPISpecReaderUtils").isActiveWhatsAppPosition(
              e,
              "marketing_messages",
            );
          });
        },
        { name: i.id + ".campaignHasWhatsappMMPlacementSelector" },
      ),
      f = s(
        [e.placementSpecs],
        function (t) {
          return t.every(function (e) {
            return o(
              "AdsPlacementAPISpecReaderUtilsShared",
            ).isActiveMessengerPosition(e, "marketing_messages");
          });
        },
        { name: i.id + ".campaignHasMessengerMMPlacementSelector" },
      );
    ((l.areAllSelectedCampaignsMarketingMessagesOnlySelectorImplLogic = d),
      (l.areAnySelectedCampaignsMarketingMessagesOnlySelector = m),
      (l.areAllSelectedCampaignsMarketingMessagesOnlySelector = p),
      (l.campaignHasWhatsappMMPlacementSelector = _),
      (l.campaignHasMessengerMMPlacementSelector = f));
  },
  98,
);
