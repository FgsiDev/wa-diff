__d(
  "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProviderPlugin",
  [
    "AdsUEditorAdgroupOnsiteShopsDestinationsLoadedDataAction",
    "AdsUEditorCrossChannelShopsAdsCommon",
    "AdsUEditorHostIDs",
    "LoadObjectMap",
    "ShopAdsOnsiteSmartDestinationDetectionCommon",
    "adsUEditorAccountIDSelector",
    "first",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").createKeyed(
            function (e) {
              e.forEach(function (e) {
                var n = r("adsUEditorAccountIDSelector")();
                o(
                  "ShopAdsOnsiteSmartDestinationDetectionCommon",
                ).getShopAdsOnsiteSmartDestinationDetectionPrediction(
                  n,
                  e,
                  t,
                  function (e, t) {
                    var n = e.adgroup_ids,
                      o = e.source,
                      a = e.website_url;
                    r(
                      "AdsUEditorAdgroupOnsiteShopsDestinationsLoadedDataAction",
                    ).dispatch(
                      {
                        hostID: r("AdsUEditorHostIDs").EDITING,
                        adgroupIDs: Array.from(n),
                        websiteURL: a,
                        onsiteDestination: r("first")(t),
                        shopsAdsOnsiteDestinationsSuggestedBySDD: t,
                        source: o,
                      },
                      {
                        line: "51",
                        module:
                          "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProviderPlugin.js",
                        moduleID: i.id,
                      },
                    );
                  },
                );
              });
            },
            function (e) {
              return o(
                "AdsUEditorCrossChannelShopsAdsCommon",
              ).WebsiteDestinationWithCMSFactory(e);
            },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
