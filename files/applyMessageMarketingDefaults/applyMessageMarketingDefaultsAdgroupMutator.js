__d(
  "applyMessageMarketingDefaultsAdgroupMutator",
  [
    "AdUEditorAdGroupMessageMarketingAutoReplyComponentFbt",
    "AdsAdgroupRecordAccessors",
    "AdsInterfacesLogger",
    "AdsMutators",
    "gkx",
    "setAdgroupWhatsAppPhoneNumberIDMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = "en_US",
        i = o(
          "AdUEditorAdGroupMessageMarketingAutoReplyComponentFbt",
        ).DEFAULT_AUTO_REPLY_MESSAGE.toString(),
        l = r("gkx")("13496");
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.marketing_message_structured_spec.language.set(a),
        function (e) {
          return l && !t
            ? e.withMutations(
                o("AdsMutators").chain(
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.marketing_message_structured_spec.autoreply.text.set(
                    i,
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.marketing_message_structured_spec.autoreply.is_optimized_auto_reply.set(
                    !1,
                  ),
                ),
              )
            : e;
        },
        function (e) {
          return o(
            "setAdgroupWhatsAppPhoneNumberIDMutator",
          ).setAdgroupWhatsAppPhoneNumberIDMutator(e, n);
        },
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.marketing_message_structured_spec.is_optimized_text.set(!1),
      )(e);
    }
    function s(t, n) {
      var o,
        a =
          (o = n == null ? void 0 : n.isReusedWABAOnAdsManager) != null
            ? o
            : !1;
      return (
        r("AdsInterfacesLogger").log({
          eventName: "message_marketing_adgroup_defaulting",
          data: {
            ad_account_id: t.account_id,
            adgroup_id: t.id,
            subsequent_data: JSON.stringify({
              waba_id: n == null ? void 0 : n.whatsAppBusinessAccountID,
              is_waba_reused: a,
            }),
          },
        }),
        e(t, a, n == null ? void 0 : n.whatsAppNumberID)
      );
    }
    l.default = s;
  },
  98,
);
