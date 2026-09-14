__d(
  "AdsUEditorCampaignSetGeoLocationSpecReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsSmartAppPromotionUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetGeoLocationSpecActionFlux",
    "adsCreateStoreSelector",
    "adsDSABeneficiaryAndPayorAutofillValuesSelector",
    "ifRequired",
    "immutable",
    "maybeUpdateCampaignDSASpec",
    "maybeUpdateCampaignRegulationsSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.selectedCampaignsSelector;
          return t.getStores();
        },
        function (t) {
          return r("ifRequired")(
            "adsUEditorCampaignAdvisoryMinAgeStateSelector",
            function (e) {
              return e(t);
            },
          );
        },
        { name: i.id + ".minAgeStateSelector" },
      ),
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            minAgeState: e,
            campaignGroupMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
            autofillValues: o("adsDSABeneficiaryAndPayorAutofillValuesSelector")
              .adsDSABeneficiaryAndPayorAutofillValuesSelector,
          },
          function (e, t, n) {
            var a = n.autofillValues,
              i = n.campaignGroupMap,
              l = n.minAgeState;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var s,
                  u,
                  c,
                  d,
                  m = e,
                  p =
                    (s = t.locationSpec) == null ||
                    (s = s.geo_locations) == null
                      ? void 0
                      : s.countries;
                p != null &&
                  (m = r(
                    "AdsCampaignRecordAccessors",
                  ).targeting.geo_locations.countries.set(
                    r("immutable").fromJS(p),
                    e,
                  ));
                var _ = i.get(n);
                return (
                  l != null &&
                    _ != null &&
                    (m = o(
                      "AdsSmartAppPromotionUtils",
                    ).setAdvisoryMinAgeTargetingSpec(
                      _,
                      m,
                      l.hasSpecialCategory,
                      l.hasCustomAudienceExclusion,
                      l.appDestinationDataMinAge,
                      l.appSettingsMinAge,
                      l.accountSettingsMinAge,
                      l.aacAccountControlEligible,
                      p != null ? p : [],
                      l.locales,
                    )),
                  (m = r("maybeUpdateCampaignDSASpec")(m, {
                    defaultDSABeneficiary: a.beneficiary,
                    defaultDSAPayor: a.payor,
                    locationApiSpec:
                      (u = m.targeting) == null || (u = u.geo_locations) == null
                        ? void 0
                        : u.toJS(),
                  })),
                  (m = r("maybeUpdateCampaignRegulationsSpec")(m, {
                    excludedLocations:
                      (c = m.targeting) == null ||
                      (c = c.excluded_geo_locations) == null
                        ? void 0
                        : c.toJS(),
                    includedLocations:
                      (d = m.targeting) == null || (d = d.geo_locations) == null
                        ? void 0
                        : d.toJS(),
                  })),
                  m
                );
              },
            );
          },
          o("AdsUEditorCampaignSetGeoLocationSpecActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
