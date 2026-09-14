__d(
  "getCustomAudiences",
  ["AdsAudienceMode", "AdsCampaignRecordAccessors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      t === void 0 && (t = r("AdsAudienceMode").INCLUDE);
      var o =
        t === r("AdsAudienceMode").INCLUDE
          ? r("AdsCampaignRecordAccessors").targeting.custom_audiences
          : r("AdsCampaignRecordAccessors").targeting.excluded_custom_audiences;
      return (n = o.get(e)) == null ||
        (n = n.map(function (e) {
          return e.toJS();
        })) == null
        ? void 0
        : n.toArray();
    }
    l.getCustomAudiences = e;
  },
  98,
);
