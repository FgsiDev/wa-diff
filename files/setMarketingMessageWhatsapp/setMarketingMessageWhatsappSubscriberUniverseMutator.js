__d(
  "setMarketingMessageWhatsappSubscriberUniverseMutator",
  ["AdsCampaignRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return o("AdsMutators").chain(
        r(
          "AdsCampaignRecordAccessors",
        ).targeting.subscriber_universe.whatsapp_subscriber_pool.id.set(t),
        r(
          "AdsCampaignRecordAccessors",
        ).targeting.subscriber_universe.whatsapp_subscriber_pool.name.set(
          n != null ? n : "WhatsApp Subscriber Pool",
        ),
      )(e);
    }
    l.default = e;
  },
  98,
);
