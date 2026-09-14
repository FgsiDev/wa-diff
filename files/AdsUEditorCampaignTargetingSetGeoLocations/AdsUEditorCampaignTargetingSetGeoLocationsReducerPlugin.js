__d(
  "AdsUEditorCampaignTargetingSetGeoLocationsReducerPlugin",
  [
    "AdsAPICampaignRecord",
    "AdsCampaignRecordAccessors",
    "AdsCommonTargetingApiTransformer",
    "AdsMutators",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignTargetingReducerUtils",
    "AdsUEditorCampaignTargetingSetGeoLocationsActionFlux",
    "AdsUEditorMessagingDestinationUtils",
    "adsDSABeneficiaryAndPayorAutofillValuesSelector",
    "isEmpty",
    "maybeUpdateCampaignDSASpec",
    "maybeUpdateCampaignRegulationsSpec",
    "trimObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsAPICampaignRecord").getSpec().targeting.getSpec().geo_locations,
      u = r("AdsAPICampaignRecord")
        .getSpec()
        .targeting.getSpec().excluded_geo_locations,
      c = {
        reduce: o("AdsUEditorCampaignTargetingReducerUtils").createReducer(
          {
            autofillValues: o("adsDSABeneficiaryAndPayorAutofillValuesSelector")
              .adsDSABeneficiaryAndPayorAutofillValuesSelector,
            objectiveMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
          },
          function (t, n, a) {
            var i = a.autofillValues,
              l = a.objectiveMap;
            return n.campaignIDs == null || n.hostID == null
              ? t
              : o("AdsMutators").mutateEach(t, n.campaignIDs, function (t, a) {
                  var c,
                    d,
                    m,
                    p = t,
                    _ = r("trimObject")(
                      o(
                        "AdsCommonTargetingApiTransformer",
                      ).getGeoLocationApiSpec(n.geoLocations, !1),
                    ),
                    f = r("trimObject")(
                      o(
                        "AdsCommonTargetingApiTransformer",
                      ).getGeoLocationApiSpec(n.excludedGeoLocations, !0),
                    );
                  (n.applyToGeoInclusionOnly === !0
                    ? (p = o("AdsMutators").chain(
                        (e || (e = r("isEmpty")))(_)
                          ? r("AdsCampaignRecordAccessors").targeting
                              .geo_locations.delete
                          : r(
                              "AdsCampaignRecordAccessors",
                            ).targeting.geo_locations.set(new s(_)),
                      )(t))
                    : (p = o("AdsMutators").chain(
                        (e || (e = r("isEmpty")))(_)
                          ? r("AdsCampaignRecordAccessors").targeting
                              .geo_locations.delete
                          : r(
                              "AdsCampaignRecordAccessors",
                            ).targeting.geo_locations.set(new s(_)),
                        (e || (e = r("isEmpty")))(f)
                          ? r("AdsCampaignRecordAccessors").targeting
                              .excluded_geo_locations.delete
                          : r(
                              "AdsCampaignRecordAccessors",
                            ).targeting.excluded_geo_locations.set(new u(f)),
                      )(t)),
                    (p = r("maybeUpdateCampaignRegulationsSpec")(p, {
                      excludedLocations: f,
                      includedLocations: _,
                    })),
                    (p = r("maybeUpdateCampaignDSASpec")(p, {
                      defaultDSABeneficiary: i.beneficiary,
                      defaultDSAPayor: i.payor,
                      locationApiSpec:
                        (c = p.targeting) == null ||
                        (c = c.geo_locations) == null
                          ? void 0
                          : c.toJS(),
                    })));
                  var g =
                      (d = p.targeting) == null || (d = d.geo_locations) == null
                        ? void 0
                        : d.toJS(),
                    h =
                      (m = t.targeting) == null || (m = m.geo_locations) == null
                        ? void 0
                        : m.toJS();
                  return (
                    (p = o(
                      "AdsUEditorMessagingDestinationUtils",
                    ).mayBeUpdateCampaignOptimizationGoalForCTXTargetingEPD(p, {
                      campaignID: a,
                      objectiveMap: l,
                      previouslySelectedLocations: h,
                      selectedLocations: g,
                    })),
                    p
                  );
                });
          },
          o("AdsUEditorCampaignTargetingSetGeoLocationsActionFlux").actionType,
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
