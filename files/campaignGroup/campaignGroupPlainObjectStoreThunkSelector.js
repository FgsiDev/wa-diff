__d(
  "campaignGroupPlainObjectStoreThunkSelector",
  ["AdsCampaignGroupCombinedStore", "adsCreateStoreThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
      r("AdsCampaignGroupCombinedStore"),
      r("AdsCampaignGroupCombinedStore").get.bind(
        r("AdsCampaignGroupCombinedStore"),
      ),
    );
    l.default = e;
  },
  98,
);
