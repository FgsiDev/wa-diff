__d(
  "AdsUEditorCampaignResetInDestinationDataReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignResetInDestinationDataActionFlux",
    "CatalogBasedLocationConstants",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var t;
              return o("AdsMutators").chain(
                (t = r("AdsCampaignRecordAccessors")).targeting.geo_locations
                  .delete,
                t.targeting.catalog_based_targeting.delete,
                t.targeting.geo_locations.countries.set(
                  o(
                    "CatalogBasedLocationConstants",
                  ).getInDestinationGeoLocationCountries(),
                ),
                t.targeting.geo_locations.location_types.set(
                  o(
                    "CatalogBasedLocationConstants",
                  ).getInDestinationGeoLocationTypes(),
                ),
              )(e);
            });
          },
          o("AdsUEditorCampaignResetInDestinationDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
