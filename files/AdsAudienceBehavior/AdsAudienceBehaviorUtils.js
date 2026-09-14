__d(
  "AdsAudienceBehaviorUtils",
  [
    "AdsBulkValueUtils",
    "AdsPixelConversionEventsEnum",
    "DateConsts",
    "expectationViolation",
    "getByPath",
    "gkx",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["event", "eq"],
      s = 1,
      u = 180,
      c = r("gkx")("22308")
        ? r("objectValues")(r("AdsPixelConversionEventsEnum")).filter(
            function (e) {
              return (
                e !== "CustomConversion" && e !== "AggregateCustomConversion"
              );
            },
          )
        : ["ViewContent", "AddToCart", "Purchase"];
    function d(e, t) {
      var n = E * o("DateConsts").SEC_PER_DAY;
      for (var r of t)
        if (
          !e.find(function (e) {
            return y(e) === r;
          })
        )
          return { retention_seconds: n, rule: { event: { eq: r } } };
      return null;
    }
    function m(e) {
      return d(e, c);
    }
    function p(e) {
      return d(e, c.slice().reverse());
    }
    function _(e, t) {
      var n = t[0],
        r = Number(e) * o("DateConsts").SEC_PER_DAY,
        a = [],
        i = [];
      for (var l of n.inclusions.slice())
        a.push({ retention_seconds: r, rule: l.rule });
      if (n.exclusions)
        for (var s of n.exclusions.slice())
          i.push({ retention_seconds: r, rule: s.rule });
      return { inclusions: a, exclusions: i };
    }
    function f(e) {
      var t;
      return (t = e.getValueForIndex(0)) != null ? t : [];
    }
    function g(e, t) {
      var n = o("AdsBulkValueUtils").getUniformValue(t),
        r = e;
      return (
        n && n.length > 0 && (r = babelHelpers.extends({}, n[0], e)),
        [r]
      );
    }
    function h(e) {
      return typeof e.rule == "string" ? JSON.parse(e.rule) : e.rule;
    }
    function y(t) {
      return r("getByPath")(h(t), e);
    }
    function C(e) {
      var t = e.inclusions;
      if (!t || t.length === 0) return !1;
      var n = e.exclusions;
      return !v(t.concat(n || []));
    }
    function b(e) {
      for (var t of e) {
        var n = t.exclusions;
        if ((Array.isArray(n) && n.length !== 0) || v(t.inclusions)) return !1;
      }
      return !0;
    }
    function v(e) {
      return e.some(function (e) {
        return !c.includes(y(e));
      });
    }
    function S(e) {
      for (var t of c)
        if (
          e.filter(function (e) {
            return y(e) === t;
          }).length > 1
        )
          return !0;
      return !1;
    }
    function R(e, t) {
      for (var n of e) {
        var r = y(n);
        for (var o of t) {
          var a = y(o),
            i = Number(o.retention_seconds),
            l = Number(n.retention_seconds);
          if (r === a && i >= l) return !0;
        }
      }
      return !1;
    }
    function L(e) {
      var t = Number(e.retention_seconds) / o("DateConsts").SEC_PER_DAY;
      return (
        t < s &&
          r("expectationViolation")(
            'since D19632248 which added "min" prop to the numeric input, retention days in spec should never be too low',
          ),
        !(t >= s && t <= u)
      );
    }
    var E = 10,
      k = 14,
      I = 28,
      T = 14,
      D = 14,
      x = 14,
      $ = 28;
    ((l.MINIMUM_RETENTION_DAYS = s),
      (l.MAXIMUM_RETENTION_DAYS = u),
      (l.SUPPORTED_EVENTS = c),
      (l.getNextInclusion = m),
      (l.getNextExclusion = p),
      (l.getProductAudienceFieldsFromInput = _),
      (l.getSpecFromBulkProductAudienceSpecs = f),
      (l.getProductAudienceSpecs = g),
      (l.parseBehaviorRule = h),
      (l.getEventFromBehavior = y),
      (l.isAudienceSpecEditableInUI = C),
      (l.isExcludedAudienceSpecEditableInUI = b),
      (l.hasAnyRedundantBehaviorForSupportedEvents = S),
      (l.hasAnyInvalidOverlapForSupportedEvents = R),
      (l.hasInvalidRetention = L),
      (l.DEFAULT_RETENTION_DAYS = E),
      (l.DEFAULT_RETENTION_DAYS_VIEWED_ADDED_TO_CART_NOT_PURCHASED = k),
      (l.DEFAULT_RETENTION_DAYS_ADDED_TO_CART_NOT_PURCHASED = I),
      (l.DEFAULT_RETENTION_DAYS_UP_SELL = T),
      (l.DEFAULT_RETENTION_DAYS_CROSS_SELL = D),
      (l.DEFAULT_RETENTION_DAYS_COLLABORATIVE_ADS = x),
      (l.ALTERNATIVE_RETENTION_DAYS_COLLABORATIVE_ADS = $));
  },
  98,
);
