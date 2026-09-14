__d(
  "adsCampaignMessageMarketingLiquidityDynamicDefaultsBootloadedSelector",
  [
    "AdsSelectorBootloadedStore",
    "JSResource",
    "LoadObject",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsSelectorBootloadedStore").create(
        r("JSResource")(
          "adsCampaignMessageMarketingLiquidityDynamicDefaultsSelector",
        ).__setRef(
          "adsCampaignMessageMarketingLiquidityDynamicDefaultsBootloadedSelector",
        ),
      ),
      s = r("adsCreateStoreSelector")(
        [e],
        function (n) {
          return e.onLoadedSelector({
            messageMarketingDefaultWACSLO: r("LoadObject").withValue(null, {
              creatorModuleID: i.id,
            }),
            messageMarketingDefaultSubscriberPoolIDLO: r(
              "LoadObject",
            ).withValue(null, { creatorModuleID: i.id }),
          });
        },
        { name: i.id + ".selector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
