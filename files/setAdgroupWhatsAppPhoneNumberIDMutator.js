__d(
  "setAdgroupWhatsAppPhoneNumberIDMutator",
  ["AdsAdgroupRecordAccessors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.object_story_spec.whats_app_business_phone_number_id.set(t)(e);
    }
    function s(e, t) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.whatsapp_mm_business_phone_number_id.set(t)(e);
    }
    function u(e) {
      var t = r("AdsAdgroupRecordAccessors").creative.object_story_spec.get(e);
      return t != null;
    }
    function c(t, n) {
      return u(t) ? e(t, n) : s(t, n);
    }
    l.setAdgroupWhatsAppPhoneNumberIDMutator = c;
  },
  98,
);
