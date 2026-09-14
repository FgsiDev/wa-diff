__d(
  "MessageMarketingBusinessTierInfraDataProviderPlugin",
  [
    "AdsManagerRelayEnvironment",
    "MessageMarketingBusinessTierInfraDataProviderPluginQuery.graphql",
    "RelayHooks",
    "loadObjectMapProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "MessageMarketingBusinessTierInfraDataProviderPluginQuery.graphql",
            ));
    function u(e) {
      return o("RelayHooks")
        .fetchQuery(r("AdsManagerRelayEnvironment"), s, { campaignGroupID: e })
        .toPromise()
        .then(function (e) {
          return e == null
            ? void 0
            : e.xfb_message_marketing_business_tier_infra;
        });
    }
    var c = {
        initialState: r("loadObjectMapProvider").keyed(
          function (e) {
            return u(e);
          },
          function (e) {
            return e;
          },
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
