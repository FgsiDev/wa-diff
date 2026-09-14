__d(
  "setMessageMarketingPlacementMutator",
  [
    "AdsAPICampaignRecordUtilsShared",
    "AdsAPITargetFields",
    "AdsAutomaticPlacementMutationBehavior",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a,
        i =
          ((n = e.targeting.subscriber_universe) == null ||
          (n = n.whatsapp_subscriber_pool) == null
            ? void 0
            : n.id) != null,
        l =
          (a = e.promoted_object) == null
            ? void 0
            : a.whats_app_business_phone_number_id;
      return !i && l == null
        ? e
        : o("AdsPlacementReducerUtils").updatePlacementSpec(
            o("AdsPlacementAPISpecWriterUtils").addGroup(
              e,
              "whatsapp/marketing_messages",
              babelHelpers.extends({}, t, {
                isWhatsAppMarketingMessagesActiveByDefault: o(
                  "AdsAPICampaignRecordUtilsShared",
                ).getIsWhatsAppMarketingMessagesActiveByDefault(e),
              }),
              r("AdsAPITargetFields").WHATSAPP_POSITIONS,
              "whatsapp",
              r("AdsAutomaticPlacementMutationBehavior").KEEP_AUTOMATIC,
            ),
          );
    }
    l.default = e;
  },
  98,
);
