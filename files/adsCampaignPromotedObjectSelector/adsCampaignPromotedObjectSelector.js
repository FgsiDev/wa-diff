__d(
  "adsCampaignPromotedObjectSelector",
  [
    "AdsPECampaignSelectors",
    "adsCampaignPromotedObjectSelectorUtils",
    "adsCreateSelector",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsCreateStoreSelector")(
            [],
            function (t) {
              return t;
            },
            { name: i.id },
          ),
          o("AdsPECampaignSelectors").getCachedByFieldsSelector,
        ],
        function (t, n) {
          return o(
            "adsCampaignPromotedObjectSelectorUtils",
          ).adsCampaignPromotedObject(t, n);
        },
        { name: i.id + ".adsCampaignPromotedObjectSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
