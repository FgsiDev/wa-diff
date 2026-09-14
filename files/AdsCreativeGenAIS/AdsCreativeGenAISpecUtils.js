__d(
  "AdsCreativeGenAISpecUtils",
  ["AdsCreativeGenAIBaseAssetUtils", "AdsImageIDUtils"],
  function (t, n, r, o, a, i, l) {
    var e = [
      93, 112, 52, 32, 266, 265, 178, 149, 208, 66, 128, 121, 150, 102, 103,
      119, 134, 139, 171, 133,
    ];
    function s(t) {
      return e.includes(t);
    }
    function u(e, t, n) {
      if (e == null || e.type !== "image") return !1;
      var r = o(
          "AdsCreativeGenAIBaseAssetUtils",
        ).getBaseAssetImageSpecFromAdgroup(t),
        a = r.imageHash,
        i = r.imageUrl;
      return e.id === o("AdsImageIDUtils")._getImageID(n, a, i);
    }
    function c(e, t) {
      if (e == null || e.type !== "video") return !1;
      var n = o("AdsImageIDUtils").getFirstVideoID(t);
      return e.id === n;
    }
    function d(e) {
      var t = e.targeting.geo_locations,
        n = t == null ? void 0 : t.get("countries"),
        r = new Set(),
        o = [
          "cities",
          "places",
          "neighborhoods",
          "geo_markets",
          "zips",
          "regions",
        ];
      return (
        n != null &&
          n.forEach(function (e) {
            r.add(e);
          }),
        o.forEach(function (e) {
          var n = t == null ? void 0 : t.get(e);
          n != null &&
            n.forEach(function (e) {
              e.get("country") && r.add(e.get("country"));
            });
        }),
        Array.from(r)
      );
    }
    function m(e) {
      var t = [];
      return (
        (e == null ? void 0 : e.age_min) != null && t.push(e.age_min),
        (e == null ? void 0 : e.age_max) != null && t.push(e.age_max),
        t.length > 0 ? t : null
      );
    }
    function p(e) {
      var t, n;
      return e != null && (t = e.genders) != null && t.includes(1)
        ? "MALE"
        : e != null && (n = e.genders) != null && n.includes(2)
          ? "FEMALE"
          : "ALL";
    }
    function _(e) {
      var t = e.geo_locations,
        n = t == null ? void 0 : t.countries,
        r = new Set();
      n != null &&
        n.forEach(function (e) {
          r.add(e);
        });
      var o = [
        t == null ? void 0 : t.cities,
        t == null ? void 0 : t.places,
        t == null ? void 0 : t.neighborhoods,
        t == null ? void 0 : t.geo_markets,
        t == null ? void 0 : t.zips,
        t == null ? void 0 : t.regions,
      ];
      return (
        o.forEach(function (e) {
          e != null &&
            e.forEach(function (e) {
              e.country != null && r.add(e.country);
            });
        }),
        Array.from(r)
      );
    }
    function f(e) {
      var t,
        n = e.campaign.get("targeting");
      return {
        targetingCountries: d(e.campaign),
        ageMin: n == null ? void 0 : n.age_min,
        ageMax: n == null ? void 0 : n.age_max,
        gender: n == null || (t = n.genders) == null ? void 0 : t[0],
      };
    }
    function g(e) {
      var t = e.campaign.get("targeting");
      return {
        campaignObjective: e.campaignGroup.objective,
        targetingCountries: d(e.campaign),
        targetingAge: m(t),
        targetingGender: p(t),
      };
    }
    function h(e) {
      var t = e.campaign.targeting;
      return {
        campaignObjective: e.campaignGroup.objective,
        targetingCountries: _(t),
        targetingAge: m(t),
        targetingGender: p(t),
      };
    }
    ((l.isACOCompatibleWithGenAI = s),
      (l.isSameAdgroupAssetImageSelectedInMediaPicker = u),
      (l.isSameAdgroupAssetVideoSelectedInMediaPicker = c),
      (l.getRawTargetingInfoFromSpec = f),
      (l.getContextualInfoFromSpec = g),
      (l.getContextualInfoFromPlainSpec = h));
  },
  98,
);
