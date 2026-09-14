__d(
  "clearMessageMarketingAdgroupMutator",
  [
    "AdsAdgroupRecordAccessors",
    "AdsInterfacesLogger",
    "AdsMutators",
    "adsPlacementAssetMutationRemovePlacementFromCustomization",
    "removeAdgroupWhatsAppPhoneNumberIDMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (n == null) {
        var a = Object.freeze({
          eventName: "message_marketing_adgroup_clearing_null_spec_plugin",
          data: {
            ad_account_id: e == null ? void 0 : e.account_id,
            adgroup_id: e == null ? void 0 : e.id,
            campaign_id: e == null ? void 0 : e.adset_id,
            subsequent_data: JSON.stringify({ is_bulk_edit: t }),
          },
        });
        return (r("AdsInterfacesLogger").log(a), e);
      }
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative
          .marketing_message_structured_spec.delete,
        function (e) {
          return r("adsPlacementAssetMutationRemovePlacementFromCustomization")(
            e,
            n,
            { platform: "whatsapp", position: "marketing_messages" },
          );
        },
        function (e) {
          return r("removeAdgroupWhatsAppPhoneNumberIDMutator")(e);
        },
      )(e);
    }
    l.default = e;
  },
  98,
);
