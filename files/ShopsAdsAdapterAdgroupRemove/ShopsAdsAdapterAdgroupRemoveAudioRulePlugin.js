__d(
  "ShopsAdsAdapterAdgroupRemoveAudioRulePlugin",
  ["AdsUEditorAdgroupAudiosAdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_adgroup_rule",
        key: "shops_ads_remove_audios_rule",
        isCompatible: function (t) {
          return null;
        },
        pivots: { ruleType: "shops_ads_remove_audios_rule" },
        transform: function (t, n) {
          return o("AdsUEditorAdgroupAudiosAdsMutators").removeAudiosField(t);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
