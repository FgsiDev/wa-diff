__d(
  "setMessageMarketingAudiencesCampaignMutator",
  [
    "AdsAudienceMode",
    "AdsCampaignRecordAccessors",
    "getOnlyAdsCustomAudiences",
    "immutable",
    "isMessageMarketingCustomAudience",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i,
        l,
        s =
          (i = o("getOnlyAdsCustomAudiences").getOnlyAdsCustomAudiences(
            e,
            n,
          )) != null
            ? i
            : [],
        u =
          (l =
            t == null
              ? void 0
              : t.filter(function (e) {
                  return r("isMessageMarketingCustomAudience")(e, a);
                })) != null
            ? l
            : [],
        c = a === !0 ? u : s.concat(u),
        d =
          n === r("AdsAudienceMode").INCLUDE
            ? r("AdsCampaignRecordAccessors").targeting.custom_audiences
            : r("AdsCampaignRecordAccessors").targeting
                .excluded_custom_audiences;
      return c.length > 0 ? d.set(r("immutable").fromJS(c), e) : d.delete(e);
    }
    l.default = e;
  },
  98,
);
