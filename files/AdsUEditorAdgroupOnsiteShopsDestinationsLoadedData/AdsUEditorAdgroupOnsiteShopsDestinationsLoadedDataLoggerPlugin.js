__d(
  "AdsUEditorAdgroupOnsiteShopsDestinationsLoadedDataLoggerPlugin",
  [
    "AdsBulkValueUtils",
    "AdsUEditorShopAdsLoggerUtils",
    "Laminar",
    "ShopAdsDestinationLoggingUtils",
    "adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector",
    "adsUEditorInjectEditingAdgroupContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          return o("Laminar").withFluxSelectors(
            {
              storefrontsLoadObject: r("adsUEditorInjectEditingAdgroupContext")(
                o(
                  "adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector",
                )
                  .adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector,
              ),
            },
            function (e, t, n) {
              var r = n.storefrontsLoadObject,
                a = t.shopsAdsOnsiteDestinationsSuggestedBySDD;
              if (a != null) {
                var i = r
                    .mapValue(function (e) {
                      return o("AdsBulkValueUtils").getUniformValue(e);
                    })
                    .getValue(),
                  l = o(
                    "ShopAdsDestinationLoggingUtils",
                  ).getFinalOnsiteDestinationSetForLog(a, i),
                  s = l.sddDestinations,
                  u = l.selectedDestination;
                o("AdsUEditorShopAdsLoggerUtils").logStaticShopAdsDestination({
                  action: "website_url_change_selector_redesign",
                  adgroupIDs: t.adgroupIDs,
                  websiteUrl: t.websiteURL,
                  sddDestinations: s,
                  selectedDestination: u,
                });
              }
            },
          )(void 0, t);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
