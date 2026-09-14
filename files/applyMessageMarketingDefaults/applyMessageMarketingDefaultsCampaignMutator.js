__d(
  "applyMessageMarketingDefaultsCampaignMutator",
  [
    "AdsAPICampaignRecordUtilsShared",
    "AdsAPITargetFields",
    "AdsAutomaticPlacementMutationBehavior",
    "AdsCampaignRecordAccessors",
    "AdsInterfacesLogger",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementReducerUtils",
    "MarketingMessagesGKUtils",
    "gkx",
    "setMarketingMessageWhatsappChannelMutator",
    "setMarketingMessageWhatsappSubscriberUniverseMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = n == null ? void 0 : n.getValue();
      return o("AdsMutators").chain(
        r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.whats_app_business_phone_number_id.set(i),
        function (e) {
          return a && i != null
            ? r("setMarketingMessageWhatsappChannelMutator")(e, i)
            : e;
        },
        function (e) {
          return a
            ? o("AdsPlacementReducerUtils").updatePlacementSpec(
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
              )
            : e;
        },
      )(e);
    }
    function s(e, t, n, a, i) {
      return a
        ? o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").promoted_object
              .whats_app_business_phone_number_id.delete,
            r("AdsCampaignRecordAccessors").targeting.subscriber_universe
              .whatsapp_subscriber_source.delete,
            function (e) {
              return r("setMarketingMessageWhatsappSubscriberUniverseMutator")(
                e,
                n,
              );
            },
            function (e) {
              return o("AdsPlacementReducerUtils").updatePlacementSpec(
                o("AdsPlacementAPISpecWriterUtils").addGroup(
                  e,
                  "whatsapp/marketing_messages",
                  babelHelpers.extends(
                    {},
                    t,
                    i === !0
                      ? {
                          messageMarketingActivationStatus: !0,
                          isWhatsAppMarketingMessageEnabled: !0,
                          isWhatsAppMarketingMessageTOSAccepted: !0,
                        }
                      : {},
                    {
                      isWhatsAppMarketingMessagesActiveByDefault: o(
                        "AdsAPICampaignRecordUtilsShared",
                      ).getIsWhatsAppMarketingMessagesActiveByDefault(e),
                    },
                  ),
                  r("AdsAPITargetFields").WHATSAPP_POSITIONS,
                  "whatsapp",
                  r("AdsAutomaticPlacementMutationBehavior").KEEP_AUTOMATIC,
                ),
              );
            },
          )(e)
        : e;
    }
    function u(t, n, a, i, l, u) {
      var c;
      i === void 0 && (i = !1);
      var d = a == null ? void 0 : a.messageMarketingDefaultWACSLO,
        m = a == null ? void 0 : a.messageMarketingDefaultSubscriberPoolIDLO,
        p = (c = m == null ? void 0 : m.getValue()) != null ? c : l,
        _ = d == null ? void 0 : d.getValue();
      if (r("gkx")("11469")) {
        r("AdsInterfacesLogger").log({
          eventName: "message_marketing_campaign_defaulting",
          data: {
            ad_account_id: t.account_id,
            campaign_id: t.id,
            subsequent_data: JSON.stringify({
              default_wacs: _,
              default_subscriber_pool: p,
              is_bulk_edit: i,
            }),
          },
        });
        var f = d != null || m != null;
        if (!f || (_ == null && u !== !0) || p == null) return t;
        var g = !(
          i &&
          !o("MarketingMessagesGKUtils").isMarketingMessagesBulkEditingEnabled()
        );
        return s(t, n, p, g, u);
      } else {
        var h = !(
          i &&
          !o("MarketingMessagesGKUtils").isMarketingMessagesBulkEditingEnabled()
        );
        return (
          r("AdsInterfacesLogger").log({
            eventName: "message_marketing_campaign_defaulting",
            data: {
              ad_account_id: t.account_id,
              campaign_id: t.id,
              subsequent_data: JSON.stringify({
                is_mm_enabled: h,
                is_mm_compatible: !0,
                is_mm_partially_compatible: !0,
                has_phone_number:
                  (d == null ? void 0 : d.hasValue()) === !0
                    ? (d == null ? void 0 : d.getValue()) != null
                    : null,
                default_wacs: _,
                default_subscriber_pool: p,
                is_bulk_edit: i,
              }),
            },
          }),
          _ == null ? t : e(t, n, d, h)
        );
      }
    }
    l.default = u;
  },
  98,
);
