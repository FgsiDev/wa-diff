__d(
  "removeAdgroupWhatsAppPhoneNumberIDMutator",
  ["AdsAdgroupRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .whats_app_business_phone_number_id.delete,
        r("AdsAdgroupRecordAccessors").creative
          .whatsapp_mm_business_phone_number_id.delete,
      )(e);
    }
    l.default = e;
  },
  98,
);
