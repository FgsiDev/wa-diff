__d(
  "AdsUEditorCampaignNewLocationTargetingEditorDisableReducerPlugin",
  [
    "AdsBulkValueUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsNewLocationTargetingEditorGeoLocationsCacheProvider",
    "AdsNewLocationTargetingEditorStateKey",
    "AdsOfflineConversionTargetingUtils",
    "AdsUEditorCampaignNewLocationTargetingEditorDisableActionFlux",
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
          },
          function (e, t, n) {
            var a = n.cachedGeoLocationsMap,
              i = a.get(
                new (r("AdsNewLocationTargetingEditorStateKey"))({
                  bulkCampaignID: o("AdsBulkValueUtils").aggregate(
                    t.campaignIDs,
                  ),
                  pageID: t.pageID,
                }),
              );
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = o("AdsMutators").chain(
                r("AdsCampaignRecordAccessors").targeting.place_page_set_ids
                  .delete,
                r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.place_page_set_id.set(t.flatPageSetID),
              )(e);
              return i != null
                ? r("AdsCampaignRecordAccessors").targeting.geo_locations.set(
                    i,
                    n,
                  )
                : o(
                    "AdsOfflineConversionTargetingUtils",
                  ).setDefaultGeoTargeting(n, t.account);
            });
          },
          o("AdsUEditorCampaignNewLocationTargetingEditorDisableActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
