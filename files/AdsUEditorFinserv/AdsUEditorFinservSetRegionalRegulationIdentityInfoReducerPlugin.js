__d(
  "AdsUEditorFinservSetRegionalRegulationIdentityInfoReducerPlugin",
  [
    "AdsCAAPAUUAVConsolidationUtils",
    "AdsCampaignRecordAccessors",
    "AdsFinservSetRegionalRegulationIdentityInfoActionFlux",
    "AdsMutators",
    "AdsRegionalRegulatedCategory",
    "AdsUEditorCampaignReducerUtils",
    "FBLogger",
    "enumUtils",
    "immutable",
    "maybeUpdateTaiwanCategoriesAndIdentitiesMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
        {},
        function (e, t) {
          return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
            var n,
              a,
              i = t.beneficiaryID,
              l = t.isAUUAVInPrepOrEnforcement,
              u = l === void 0 ? !1 : l,
              c = t.payerID,
              d = t.regionalCategoryID,
              m = s({
                beneficiaryID: i,
                excludedGeoLocations:
                  (n = e.targeting) == null ||
                  (n = n.excluded_geo_locations) == null
                    ? void 0
                    : n.toJS(),
                geoLocations:
                  (a = e.targeting) == null || (a = a.geo_locations) == null
                    ? void 0
                    : a.toJS(),
                isAUUAVInPrepOrEnforcement: u,
                payerID: c,
                regionalCategoryID: d,
              });
            if (m == null) return e;
            var p = e.regional_regulation_identities,
              _ =
                p == null || p.isEmpty()
                  ? r("immutable").fromJS(m)
                  : p.merge(m);
            return o("AdsMutators").chain(
              function (e) {
                return r(
                  "AdsCampaignRecordAccessors",
                ).regional_regulation_identities.set(_, e);
              },
              function (e) {
                return o(
                  "maybeUpdateTaiwanCategoriesAndIdentitiesMutator",
                ).maybeUpdateTaiwanCategoriesAndIdentitiesMutator(
                  e,
                  t.regionalCategoryID,
                );
              },
            )(e);
          });
        },
        o("AdsFinservSetRegionalRegulationIdentityInfoActionFlux").actionType,
      ),
    };
    function s(e) {
      var t = e.beneficiaryID,
        n = e.excludedGeoLocations,
        a = e.geoLocations,
        i = e.isAUUAVInPrepOrEnforcement,
        l = e.payerID,
        s = e.regionalCategoryID;
      if (t == null || l == null) return null;
      if (s === r("AdsRegionalRegulatedCategory").TAIWAN_FINSERV) {
        var u;
        return (
          (u = {}),
          (u.taiwan_finserv_beneficiary = t),
          (u.taiwan_finserv_payer = l),
          (u.taiwan_universal_beneficiary = t),
          (u.taiwan_universal_payer = l),
          u
        );
      } else if (s === r("AdsRegionalRegulatedCategory").TAIWAN_UNIVERSAL) {
        var c;
        return (
          (c = {}),
          (c.taiwan_universal_beneficiary = t),
          (c.taiwan_universal_payer = l),
          c
        );
      } else {
        if (s === r("AdsRegionalRegulatedCategory").AUSTRALIA_FINSERV)
          return o(
            "AdsCAAPAUUAVConsolidationUtils",
          ).getAUFinservFanoutIdentityInfo({
            beneficiaryID: t,
            excludedGeoLocations: n,
            geoLocations: a,
            isAUUAVInPrepOrEnforcement: i,
            payerID: l,
          });
        if (s === r("AdsRegionalRegulatedCategory").SINGAPORE_UNIVERSAL) {
          var d;
          return (
            (d = {}),
            (d.singapore_universal_beneficiary = t),
            (d.singapore_universal_payer = l),
            d
          );
        } else if (s === r("AdsRegionalRegulatedCategory").INDIA_FINSERV) {
          var m;
          return (
            (m = {}),
            (m.india_finserv_beneficiary = t),
            (m.india_finserv_payer = l),
            m
          );
        } else if (
          s === r("AdsRegionalRegulatedCategory").GLOBAL_FINSERV ||
          s === r("AdsRegionalRegulatedCategory").AUSTRALIA_UNIVERSAL ||
          s === r("AdsRegionalRegulatedCategory").BRAZIL_REGULATION ||
          s === r("AdsRegionalRegulatedCategory").THAILAND_UNIVERSAL ||
          s === r("AdsRegionalRegulatedCategory").MALAYSIA_UNIVERSAL ||
          s === r("AdsRegionalRegulatedCategory").VOLUNTARY_VERIFICATION ||
          s === r("AdsRegionalRegulatedCategory").US_FINANCIAL_SECURITIES ||
          s === r("AdsRegionalRegulatedCategory").HONGKONG_FINSERV ||
          s === r("AdsRegionalRegulatedCategory").THAILAND_FINSERV ||
          s === r("AdsRegionalRegulatedCategory").IRELAND_FINSERV ||
          s === r("AdsRegionalRegulatedCategory").ISRAEL_FINSERV ||
          s === r("AdsRegionalRegulatedCategory").SPAIN_FINSERV ||
          s === r("AdsRegionalRegulatedCategory").NZ_FINANCIAL_SERVICES
        ) {
          var p;
          return (
            (p = {}),
            (p.universal_beneficiary = t),
            (p.universal_payer = l),
            p
          );
        }
      }
      return (
        r("FBLogger")("am_finserv_ads").warn(
          "Attempt to set regulations identity information to unsupported regional category: %s. Please update the reducer to support this category.",
          o("enumUtils").enumValueToKey(s, r("AdsRegionalRegulatedCategory")),
        ),
        null
      );
    }
    var u = e;
    l.default = u;
  },
  98,
);
