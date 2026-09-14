__d(
  "AdsUEditorCampaignSetInDestinationDataReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetInDestinationDataActionFlux",
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
                (t = r(
                  "AdsCampaignRecordAccessors",
                )).targeting.catalog_based_targeting.geo_targeting_type.set(
                  o("CatalogBasedLocationConstants").getDefaultLocationType(),
                ),
                t.targeting.geo_locations.delete,
                t.targeting.geo_locations.country_groups.set(
                  o(
                    "CatalogBasedLocationConstants",
                  ).getInDestinationGeoLocationCountryGroups(),
                ),
                t.targeting.geo_locations.location_types.set(
                  o(
                    "CatalogBasedLocationConstants",
                  ).getInDestinationGeoLocationTypes(),
                ),
              )(e);
            });
          },
          o("AdsUEditorCampaignSetInDestinationDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
