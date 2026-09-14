__d(
  "adsExperimentsGroupDraftFragmentsByLightweightType",
  [
    "FBLogger",
    "adsExperimentsGetDefaultStudyLevelFromLightweightType",
    "adsExperimentsGetLightweightABTestingPlugin",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("immutable").Map();
      return (
        e.forEach(function (e, n) {
          var o,
            a = e.dependentIDs,
            i = e.ineligibleReasons,
            l = e.lightweightType,
            u =
              i == null
                ? void 0
                : i.some(function (e, t) {
                    return s(l).includes(t);
                  });
          if (u !== !0) {
            var c = (o = t.get(l)) != null ? o : r("immutable").Set(),
              d = [],
              m = r("adsExperimentsGetLightweightABTestingPlugin")(l);
            if (m != null) {
              var p = r(
                "adsExperimentsGetDefaultStudyLevelFromLightweightType",
              )(l);
              m.getAdObjectLevel() === p
                ? (d = [n])
                : (d = [].concat(a != null ? a : [], [n]));
            } else
              switch (l) {
                case "STANDARD_ENHANCEMENT":
                case "ADVANTAGE_PLUS_CREATIVE":
                case "DYNAMIC_ADS":
                  d = [].concat(a != null ? a : [], [n]);
                  break;
                case "ADVANTAGE_SHOPPING_CAMPAIGN":
                case "ADVANTAGE_PLUS_AUDIENCE":
                case "AUTOMATIC_PLACEMENT":
                case "GUIDANCE_DUPLICATION":
                  d = [n];
                  break;
                case "CREATIVE_MULTICELL_TESTING":
                  return r("immutable").Map();
                case "CREATIVE_PRIMARY_TEXT_GEN":
                  throw r("FBLogger")("ads_experiments").mustfixThrow(
                    "lightweight test text gen only uses plugin system",
                  );
                case "CREATIVE_IMAGE_GEN":
                  throw r("FBLogger")("ads_experiments").mustfixThrow(
                    "lightweight test image gen only uses plugin system",
                  );
                case "GUIDANCE_MFR":
                  throw r("FBLogger")("ads_experiments").mustfixThrow(
                    "lightweight test guidance mfr only uses plugin system",
                  );
                case "ADVANTAGE_PLUS_CREATIVE_ENHANCEMENTS":
                  throw r("FBLogger")("ads_experiments").mustfixThrow(
                    "lightweight test creative enhancements only uses plugin system",
                  );
                case "CONSOLIDATED_ADVANTAGE_PLUS_AUDIENCE":
                  throw r("FBLogger")("ads_experiments").mustfixThrow(
                    "lightweight test consolidated advantage+ audience only uses plugin system",
                  );
                case "L2_DUPLICATION_UPGRADE":
                  throw r("FBLogger")("ads_experiments").mustfixThrow(
                    "lightweight test L2 duplication upgrade only uses plugin system",
                  );
                case "L3_DUPLICATION_UPGRADE":
                  throw r("FBLogger")("ads_experiments").mustfixThrow(
                    "lightweight test L3 duplication upgrade only uses plugin system",
                  );
                case "VALUE_OPTIMIZATION_GOAL":
                  throw r("FBLogger")("ads_experiments").mustfixThrow(
                    "lightweight test value optimization goal only uses plugin system",
                  );
                case "LEAD_GEN_FORM":
                  throw r("FBLogger")("ads_experiments").mustfixThrow(
                    "lightweight test lead gen form only uses plugin system",
                  );
              }
            t = t.set(l, c.concat(d));
          }
        }),
        t
      );
    }
    function s(e) {
      var t = r("adsExperimentsGetLightweightABTestingPlugin")(e),
        n = [];
      if ((t == null ? void 0 : t.eligibilityConfig) != null)
        for (var o of t == null ? void 0 : t.eligibilityConfig.entries()) {
          var a = o[0],
            i = o[1];
          i.isRecoverable === !1 && n.push(a);
        }
      var l = [
          "cbo_single_only",
          "opt_in_l2_recommendation",
          "mismatched_optimization_goals",
        ],
        s = l.concat(n);
      if (
        ((s = s.filter(function (e, t) {
          return l.indexOf(e) === t;
        })),
        t != null)
      )
        return s;
      switch (e) {
        case "STANDARD_ENHANCEMENT":
        case "ADVANTAGE_PLUS_CREATIVE":
        case "DYNAMIC_ADS":
        case "AUTOMATIC_PLACEMENT":
        case "GUIDANCE_DUPLICATION":
        case "CREATIVE_MULTICELL_TESTING":
        case "ADVANTAGE_PLUS_AUDIENCE":
          return s;
        case "ADVANTAGE_SHOPPING_CAMPAIGN":
          return [
            "ineligibile_optimization_goals",
            "invalid_objective",
            "invalid_conversion_location",
            "mismatched_conversion_location",
            "mixed_budget_types",
          ];
        case "GUIDANCE_MFR":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test guidance mfr only uses plugin system",
          );
        case "CREATIVE_PRIMARY_TEXT_GEN":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test text gen only uses plugin system",
          );
        case "CREATIVE_IMAGE_GEN":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test image gen only uses plugin system",
          );
        case "ADVANTAGE_PLUS_CREATIVE_ENHANCEMENTS":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test creative enhancements only uses plugin system",
          );
        case "CONSOLIDATED_ADVANTAGE_PLUS_AUDIENCE":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test consolidated advantage+ audience only uses plugin system",
          );
        case "L2_DUPLICATION_UPGRADE":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test L2 duplication upgrade only uses plugin system",
          );
        case "L3_DUPLICATION_UPGRADE":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test L3 duplication upgrade only uses plugin system",
          );
        case "VALUE_OPTIMIZATION_GOAL":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test value optimization goal only uses plugin system",
          );
        case "LEAD_GEN_FORM":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test lead gen form only uses plugin system",
          );
      }
    }
    l.default = e;
  },
  98,
);
