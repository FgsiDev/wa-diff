__d(
  "AdFLEXBusinessTierMessageMarketingConfigPlugin",
  ["AdsBulkValueUtils", "AdsLoadObjectUtils", "LoadObject", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getBusinessTierForCampaignGroups: function (t, n) {
          var e = n.map(function (e) {
              return t.get(e);
            }),
            a = o("AdsLoadObjectUtils").all(e);
          return a.mapValue(function (e) {
            var t = o("AdsBulkValueUtils").aggregate(e),
              n = r("LoadObject")
                .withValue(null, { creatorModuleID: i.id })
                .setError(
                  r("err")("No uniform value for selected campaign groups"),
                );
            return o("AdsBulkValueUtils").getUniformValueOrDefault(t, n);
          });
        },
        type: "flexBusinessTierConfig",
        key: "marketingMessages",
        tool: "MANAGE_MESSAGES",
      },
      s = e;
    l.default = s;
  },
  98,
);
