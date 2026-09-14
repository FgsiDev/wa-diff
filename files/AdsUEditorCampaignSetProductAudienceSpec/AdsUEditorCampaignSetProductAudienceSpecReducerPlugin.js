__d(
  "AdsUEditorCampaignSetProductAudienceSpecReducerPlugin",
  [
    "AdsAPICampaignPaths",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetProductAudienceSpecDataActionFlux",
    "adsAddLocationsToTargetingSpec",
    "adsCampaignUpdateInProductAudienceSpecs",
    "adsDeleteCustomAudienceFromFlexibleSpec",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("immutable").fromJS(t);
      if (e != null && e.size > 0) {
        var o = e.first().get("product_set_id");
        n = n.map(function (e) {
          return e.get("product_set_id") == null
            ? e.set("product_set_id", o)
            : e;
        });
      }
      return n;
    }
    var s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (t, n) {
            return o("AdsMutators").mutateEach(t, n.campaignIDs, function (t) {
              return o("AdsMutators").chain(
                function (t) {
                  return r("adsCampaignUpdateInProductAudienceSpecs")(
                    t,
                    function (t) {
                      return n.productAudienceSpecs == null
                        ? null
                        : e(t, n.productAudienceSpecs);
                    },
                  );
                },
                function (t) {
                  return t.updateIn(
                    r("AdsAPICampaignPaths").TARGETING
                      .EXCLUDED_PRODUCT_AUDIENCE_SPECS,
                    function (t) {
                      return n.excludedProductAudienceSpecs == null
                        ? null
                        : e(t, n.excludedProductAudienceSpecs);
                    },
                  );
                },
                function (e) {
                  return r("adsDeleteCustomAudienceFromFlexibleSpec")(
                    e,
                    n.autoLALAudience,
                  );
                },
                function (e) {
                  return r("adsAddLocationsToTargetingSpec")(
                    e,
                    n.geoLocations,
                    n.excludedGeoLocations,
                  );
                },
              )(t);
            });
          },
          o("AdsUEditorCampaignSetProductAudienceSpecDataActionFlux")
            .actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
