__d(
  "applyWhatsAppPhoneNumberAndClearAssetIDMutator",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "setAdgroupWhatsAppPhoneNumberIDMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("AdsAdgroupRecordAccessors").creative.object_story_spec.get(e);
      return t != null;
    }
    function s(t) {
      return e(t)
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.whats_app_business_asset_id.delete(t)
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.whats_app_business_asset_id.delete(t);
    }
    function u(e, t) {
      return o("AdsMutators").chain(
        function (e) {
          return o(
            "setAdgroupWhatsAppPhoneNumberIDMutator",
          ).setAdgroupWhatsAppPhoneNumberIDMutator(e, t);
        },
        function (e) {
          return s(e);
        },
      )(e);
    }
    l.default = u;
  },
  98,
);
