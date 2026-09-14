__d(
  "AdsUEditorCampaignSetIncludedExcludedGeoLocationReducerPlugin",
  [
    "AdsAPICampaignRecord",
    "AdsCampaignRecordAccessors",
    "AdsCommonTargetingApiTransformer",
    "AdsMutators",
    "AdsUEditorCampaignSetIncludedExcludedGeoLocationActionFlux",
    "AdsUEditorCampaignTargetingReducerUtils",
    "adsDSABeneficiaryAndPayorAutofillValuesSelector",
    "immutable",
    "isEmpty",
    "maybeUpdateCampaignDSASpec",
    "trimObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsAPICampaignRecord").getSpec().targeting.getSpec().geo_locations,
      u = r("AdsAPICampaignRecord")
        .getSpec()
        .targeting.getSpec().excluded_geo_locations;
    function c() {
      return r("immutable").List(["home", "recent"]);
    }
    function d() {
      return r("immutable").List(["home"]);
    }
    var m = {
        reduce: o("AdsUEditorCampaignTargetingReducerUtils").createReducer(
          {
            autofillValues: o("adsDSABeneficiaryAndPayorAutofillValuesSelector")
              .adsDSABeneficiaryAndPayorAutofillValuesSelector,
          },
          function (t, n, a) {
            var i = a.autofillValues;
            return n.campaignIDs == null || n.hostID == null
              ? t
              : o("AdsMutators").mutateEach(t, n.campaignIDs, function (t) {
                  var a,
                    l = r("trimObject")(
                      o(
                        "AdsCommonTargetingApiTransformer",
                      ).getGeoLocationApiSpec(n.geoLocations, !1),
                    ),
                    m = r("trimObject")(
                      o(
                        "AdsCommonTargetingApiTransformer",
                      ).getGeoLocationApiSpec(n.excludedGeoLocations, !0),
                    ),
                    p = o("AdsMutators").chain(
                      (e || (e = r("isEmpty")))(l)
                        ? r("AdsCampaignRecordAccessors").targeting
                            .geo_locations.delete
                        : r(
                            "AdsCampaignRecordAccessors",
                          ).targeting.geo_locations.set(new s(l)),
                      (e || (e = r("isEmpty")))(m)
                        ? r("AdsCampaignRecordAccessors").targeting
                            .excluded_geo_locations.delete
                        : r(
                            "AdsCampaignRecordAccessors",
                          ).targeting.excluded_geo_locations.set(new u(m)),
                      r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.geo_locations.location_types.set(c()),
                      r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.excluded_geo_locations.location_types.set(
                        d(),
                      ),
                    )(t);
                  return (
                    (p = r("maybeUpdateCampaignDSASpec")(p, {
                      defaultDSABeneficiary: i.beneficiary,
                      defaultDSAPayor: i.payor,
                      locationApiSpec:
                        (a = p.targeting) == null ||
                        (a = a.geo_locations) == null
                          ? void 0
                          : a.toJS(),
                    })),
                    p
                  );
                });
          },
          o("AdsUEditorCampaignSetIncludedExcludedGeoLocationActionFlux")
            .actionType,
        ),
      },
      p = m;
    l.default = p;
  },
  98,
);
