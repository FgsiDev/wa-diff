__d(
  "AdsUEditorCampaignPromotedObjectDeletePlacePageSetIDReducerPlugin",
  [
    "AdsBulkValueUtils",
    "AdsCampaignRecordAccessors",
    "AdsFrequencyControlSpecsCacheProvider",
    "AdsFrequencyControlSpecsStateKey",
    "AdsMutators",
    "AdsNewLocationTargetingEditorGeoLocationsCacheProvider",
    "AdsNewLocationTargetingEditorStateKey",
    "AdsOfflineConversionTargetingUtils",
    "AdsUEditorCampaignPromotedObjectDeletePlacePageSetIDDataActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            cachedGeoLocationsMap: r(
              "AdsNewLocationTargetingEditorGeoLocationsCacheProvider",
            ).toFluxSelector(),
            cachedFrequencyControlSpecsMap: r(
              "AdsFrequencyControlSpecsCacheProvider",
            ).toFluxSelector(),
          },
          function (e, t, n) {
            var a = t.account,
              i = t.campaignIDs,
              l = t.pageID,
              s = n.cachedFrequencyControlSpecsMap,
              u = n.cachedGeoLocationsMap,
              c = u.get(
                new (r("AdsNewLocationTargetingEditorStateKey"))({
                  bulkCampaignID: o("AdsBulkValueUtils").aggregate(i),
                  pageID: l,
                }),
              ),
              d = s.get(
                new (r("AdsFrequencyControlSpecsStateKey"))({
                  bulkCampaignID: o("AdsBulkValueUtils").aggregate(i),
                  pageID: l,
                }),
              );
            return o("AdsMutators").mutateEach(e, i, function (e) {
              var t = o("AdsMutators").chain(
                r("AdsCampaignRecordAccessors").targeting.place_page_set_ids
                  .delete,
                r("AdsCampaignRecordAccessors").promoted_object
                  .place_page_set_id.delete,
                function (e) {
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.page_id.set(l, e);
                },
              )(e);
              return (
                d != null &&
                  (t = r(
                    "AdsCampaignRecordAccessors",
                  ).frequency_control_specs.set(d, t)),
                c != null
                  ? r("AdsCampaignRecordAccessors").targeting.geo_locations.set(
                      c,
                      t,
                    )
                  : o(
                      "AdsOfflineConversionTargetingUtils",
                    ).setDefaultGeoTargeting(t, a)
              );
            });
          },
          o(
            "AdsUEditorCampaignPromotedObjectDeletePlacePageSetIDDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
