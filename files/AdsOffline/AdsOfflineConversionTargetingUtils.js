__d(
  "AdsOfflineConversionTargetingUtils",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "adsCommonTargetingGetDefaultCountryByBusinessCountryCode",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return o("AdsMutators").chain(
        (n = r("AdsCampaignRecordAccessors")).targeting.place_page_set_ids
          .delete,
        n.targeting.geo_locations.set(void 0),
        n.targeting.geo_locations.location_types.set(
          r("immutable").List(["home", "recent"]),
        ),
        n.targeting.geo_locations.countries.set(
          r("immutable").List.of(
            r("adsCommonTargetingGetDefaultCountryByBusinessCountryCode")(
              t.business_country_code,
            ),
          ),
        ),
      )(e);
    }
    function s(e, t) {
      return r("AdsCampaignRecordAccessors").targeting.custom_audiences.set(
        r("immutable").fromJS([
          { id: t.id, name: t.name, data_source: t.data_source },
        ]),
        e,
      );
    }
    ((l.setDefaultGeoTargeting = e), (l.setCustomAudience = s));
  },
  98,
);
