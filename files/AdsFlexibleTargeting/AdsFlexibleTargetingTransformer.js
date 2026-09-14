__d(
  "AdsFlexibleTargetingTransformer",
  [
    "AdsCommonTargetingApiTransformer",
    "AdsEmptyValue",
    "AdsFlexibleTargetingConstants",
    "AdsUniformValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = { flexible_spec: e != null ? e : [] };
      return r("AdsCommonTargetingApiTransformer").fromApi(
        t,
        r("AdsFlexibleTargetingConstants").FLEXIBLE_API_BEHAVIORS,
        !0,
      ).flexibleSpec;
    }
    function s(t) {
      return t == null || t instanceof r("AdsEmptyValue")
        ? { flexibleTargeting: new (r("AdsUniformValue"))(e()) }
        : {
            flexibleTargeting: t.map(function (t) {
              return e(t);
            }),
          };
    }
    function u(e) {
      var t = r("AdsCommonTargetingApiTransformer").targetingSpecToApi({
        flexibleSpec: e,
      });
      return t.flexible_spec;
    }
    ((l.transformFlexibleTargetingFromLaminar = s),
      (l.transformFlexibleTargetingSpecToLaminar = u));
  },
  98,
);
