__d(
  "AdsSAFRUtils",
  [
    "fbt",
    "AdsCountries",
    "AdsLearnMoreStrings",
    "AdsReelsTrendingAdsConstants",
    "AdsRegulatedCategory",
    "LocationConstants",
    "adsRegulatedCategoryGetCountriesFromCountryGroup",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "298000447747885";
    function u() {
      var t = r("gkx")("6831");
      return {
        cmsID: e,
        label: t
          ? s._(
              /*BTDS*/ "About Special Ad Categories and your responsibilities",
            )
          : o("AdsLearnMoreStrings").INLINE_ABOUT_SPECIAL_AD_CATEGORIES,
      };
    }
    function c(e, t, n) {
      var a;
      if (t) {
        a = new Set();
        var i = t.location_types;
        o("LocationConstants").locationTypes.forEach(function (e) {
          i.includes(e) || a.add(e);
        });
        var l = r("gkx")("3217");
        l && a.delete(o("LocationConstants").ZIPS);
      } else if ((n == null ? void 0 : n.isReelsTrendingAdsCampaign) === !0) {
        if (!e.disallowDMA) {
          var s = new Set(
            o("AdsReelsTrendingAdsConstants").DISALLOWED_LOCATION_TYPES,
          );
          return (s.delete("geo_markets"), s);
        }
        return o("AdsReelsTrendingAdsConstants").DISALLOWED_LOCATION_TYPES;
      } else {
        var u;
        a = new Set();
        var c = {
          disallowCountries: (u = o("LocationConstants")).COUNTRIES,
          disallowRegions: u.REGIONS,
          disallowDMA: u.GEO_MARKETS,
          disallowCities: u.CITIES,
          disallowElectoralDistricts: u.ELECTORAL_DISTRICTS,
          disallowPoliticalDistricts: u.POLITICAL_DISTRICTS,
          disallowLargeGeoAreas: u.LARGE_GEO_AREAS,
          disallowMediumGeoAreas: u.MEDIUM_GEO_AREAS,
          disallowSmallGeoAreas: u.SMALL_GEO_AREAS,
          disallowMetroAreas: u.METRO_AREAS,
          disallowSubcities: u.SUBCITIES,
          disallowNeighborhoods: u.NEIGHBORHOODS,
          disallowSubneighborhoods: u.SUBNEIGHBORHOODS,
          disallowZips: u.ZIPS,
          disallowLocationClusterIds: u.LOCATION_CLUSTER_IDS,
          disallowPlaces: u.PLACES,
          disallowAddress: u.CUSTOM_LOCATIONS,
        };
        Object.keys(c).forEach(function (t) {
          e[t] && a.add(c[t]);
        });
      }
      return a;
    }
    function d(e, t) {
      var n = e.radius;
      if (t == null || n == null) return !0;
      var r = [
        o("LocationConstants").CITIES,
        o("LocationConstants").CUSTOM_LOCATIONS,
      ].includes(e.type);
      return r ? n >= t(e.type) : !0;
    }
    function m(e, t, n) {
      var a = t == null ? void 0 : t.location_types;
      return (
        e.included || (a = n == null ? void 0 : n.location_types),
        a == null ||
        (e.type === o("LocationConstants").ZIPS && r("gkx")("3217"))
          ? !0
          : a.includes(e.type)
      );
    }
    function p(e, t) {
      if (t == null) return !0;
      var n = t
        .map(function (e) {
          return o("AdsCountries").getTerritoriesByCountry(e).concat(e);
        })
        .flat();
      if (e.type === o("LocationConstants").COUNTRY_GROUPS) {
        var r,
          a =
            (r = e.country_codes) != null
              ? r
              : o(
                  "adsRegulatedCategoryGetCountriesFromCountryGroup",
                ).adsRegulatedCategoryGetCountriesFromCountryGroup(e.key),
          i = a.every(function (e) {
            return n.includes(e);
          });
        return i;
      }
      var l = e.type === o("LocationConstants").COUNTRIES ? e.key : e.country;
      return n.includes(l);
    }
    function _(e, t, n, r, o) {
      var a = d(e, t),
        i = m(e, n, r),
        l = p(e, o);
      return !a || !i || !l;
    }
    function f(e, t, n, r) {
      if (n != null) {
        if (n === "INCLUDE_ANY") {
          var o, a;
          if (
            ((o = r.detailed_targeting_inclusion) == null
              ? void 0
              : o.is_enabled) === !1
          )
            return !1;
          var i =
            (a = r.detailed_targeting_inclusion) == null
              ? void 0
              : a.detailed_targeting_types;
          if (i != null) {
            var l = i.includes(e);
            if (l === !1) return !1;
          }
        } else if (n === "EXCLUDE_ANY") {
          var s, u;
          if (
            ((s = r.detailed_targeting_exclusion) == null
              ? void 0
              : s.is_enabled) === !1
          )
            return !1;
          var c =
            (u = r.detailed_targeting_exclusion) == null
              ? void 0
              : u.detailed_targeting_types;
          if (c != null) {
            var d = c.includes(e);
            if (d === !1) return !1;
          }
        }
      }
      if (e === "interests") {
        var m,
          p =
            (m = r.interest_expansion) == null ? void 0 : m.interests_whitelist;
        if (p != null) return t != null && p.includes(Number(t));
      } else if (e === "behaviors") {
        var _,
          f =
            (_ = r.interest_expansion) == null
              ? void 0
              : _.b2b_behaviors_allowlist;
        if (f != null) return f.includes(Number(t));
      } else if (e === "industries") {
        var g,
          h =
            (g = r.interest_expansion) == null
              ? void 0
              : g.b2b_industries_allowlist;
        if (h != null) return h.includes(Number(t));
      } else if (e === "user_adclusters") {
        var y,
          C =
            (y = r.interest_expansion) == null ? void 0 : y.adcluster_allowlist;
        if (C != null) return C.includes(Number(t));
      }
      return !0;
    }
    function g(e, t) {
      var n = e.message;
      return n == null ? void 0 : n.includes(t.toString());
    }
    function h(e) {
      switch (e) {
        case "2909034":
          return s._(
            /*BTDS*/ "You've chosen audience locations that are outside of the countries you selected for your Special Ad Categories. Update your Special Ad Category countries or remove the additional locations from your audience.",
          );
        case "2909039":
        case "2446184":
          return s._(
            /*BTDS*/ "The location radius you selected is unavailable when running ads in this Special Ad Category. You must include a radius of at least 15 miles (or 25 kilometers) from any selected city, address or dropped pin.",
          );
        case "2446830":
          return s._(
            /*BTDS*/ "The location radius you selected is unavailable when running ads in this Special Ad Category. You must include a radius of at least 15 kilometers (or 9 miles) from any selected city, address or dropped pin.",
          );
        case "2446183":
        case "2909042":
          return s._(
            /*BTDS*/ "Some of your location selections are unavailable when running ads in this Special Ad Category. Update your locations to include at least a 15-mile (or 25-kilometer) radius from any selected city, address or dropped pin.",
          );
        case "2909073":
          return s._(
            /*BTDS*/ "Some of your location selections are unavailable when running ads in this Special Ad Category. Update your ZIP codes to form one contiguous area",
          );
        case "2909074":
          return s._(
            /*BTDS*/ "Some of your location selections are unavailable when running ads in this Special Ad Category. Update your ZIP code selection to cover an area equivalent to at least a 15-mile radius",
          );
        case "2446831":
          return s._(
            /*BTDS*/ "Some of your location selections are unavailable when running ads in this Special Ad Category. Update your locations to include at least a 15-kilometer (or 9-mile) radius from any selected city, address or dropped pin.",
          );
        case "2446189":
        case "2909036":
        case "2446188":
        case "2909049":
          return s._(
            /*BTDS*/ "Some of the detailed targeting options you selected aren\u2019t available when running ads in this Special Ad Category. You must remove them from your audience.",
          );
        case "2909047":
        case "2446190":
          return s._(
            /*BTDS*/ "Excluding behaviors, demographics or interests is unavailable when running ads in this Special Ad Category. You must remove all detailed targeting exclusions.",
          );
        case "2446177":
        case "2909037":
          return s._(
            /*BTDS*/ "Custom age selection is unavailable when running ads in this Special Ad Category. You must select the age range 18-65+ for your audience.",
          );
        case "2909045":
        case "2446207":
          return s._(
            /*BTDS*/ "You can't exclude lookalike audiences when running ads in this Special Ad Category. Remove all lookalike audience exclusions.",
          );
        case "2446201":
        case "2909044":
          return s._(
            /*BTDS*/ "Using lookalike audiences is unavailable when running ads in this Special Ad Category. You must remove all selected lookalike audiences.",
          );
        case "2446195":
        case "2909041":
          return s._(
            /*BTDS*/ "Using Saved Audiences is unavailable when running ads in this Special Ad Category. You must remove all selected Saved Audiences.",
          );
        case "2446463":
          return s._(
            /*BTDS*/ "Ads about social issues, elections or politics can only appear in some placements. To resolve this issue and finish creating your campaign, please select a valid placement.",
          );
        case "2909046":
        case "2446186":
          return s._(
            /*BTDS*/ "Excluding specific locations is unavailable when running ads in this Special Ad Category. You must remove all location exclusions.",
          );
        case "3858437":
          return s._(
            /*BTDS*/ "Some customer list custom audiences are unavailable when running ads in this Special Ad Category. You must remove all unavailable customer lists.",
          );
        case "2909070":
          return s._(
            /*BTDS*/ "Marketing messages are not available when a Special Ad Category is selected.",
          );
        case "2909071":
          return s._(
            /*BTDS*/ "Marketing messages are not available once a Special Ad Category is selected.",
          );
        case "2909040":
          return s._(
            /*BTDS*/ "Custom gender selection is unavailable when running ads in this Special Ad Category. Your audience must include all genders.",
          );
        default:
          return null;
      }
    }
    function y(e) {
      return (
        (e == null ? void 0 : e.includes(r("AdsRegulatedCategory").CREDIT)) ||
        (e == null
          ? void 0
          : e.includes(r("AdsRegulatedCategory").FINANCIAL_PRODUCTS_SERVICES))
      );
    }
    ((l.getL3SACCardLearnMoreLink = u),
      (l.getDisallowedLocationTypes = c),
      (l.getIsMinRadiusValid = d),
      (l.getIsLocationTypeValid = m),
      (l.getShouldHighlightLocationItemForSAFR = _),
      (l.getIsDetailedTargetingInputValid = f),
      (l.getIsSAFRValidationErrorExistsInCombinedError = g),
      (l.getSAFRValidationInlineMessageContentMap = h),
      (l.getHasFPSOrCreditCategory = y));
  },
  226,
);
