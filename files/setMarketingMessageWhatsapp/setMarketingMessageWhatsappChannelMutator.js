__d(
  "setMarketingMessageWhatsappChannelMutator",
  ["AdsCampaignRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsMutators").chain(
        r(
          "AdsCampaignRecordAccessors",
        ).targeting.subscriber_universe.whatsapp_subscriber_source.id.set(t),
        r(
          "AdsCampaignRecordAccessors",
        ).targeting.subscriber_universe.whatsapp_subscriber_source.name.set(
          "WhatsApp",
        ),
      )(e);
    }
    l.default = e;
  },
  98,
);
