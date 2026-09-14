__d(
  "ShopsAdsAdapterAdgroupRemoveBadgeSetRulePlugin",
  ["AdsUEditorAdgroupBadges"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_adgroup_rule",
        key: "shops_ads_remove_badge_set_rule",
        isCompatible: function (t) {
          return null;
        },
        pivots: { ruleType: "shops_ads_remove_badge_set_rule" },
        transform: function (t, n) {
          return o("AdsUEditorAdgroupBadges").removeBadgeSets(t);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
