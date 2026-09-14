__d(
  "AdsInsights3COCustomEventResults",
  [
    "AdsInsightsFieldDescriptor",
    "AdsInsightsFields",
    "gkx",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("5914") && r("gkx")("6565");
    }
    function s(e, t) {
      return o("AdsInsightsFields").makeCustomEventField(
        "conversions",
        "offsite_conversion.fb_pixel_custom",
        e,
        t,
      );
    }
    function u(e, t) {
      return o("AdsInsightsFields").makeCustomEventField(
        "conversions",
        "app_custom_event",
        e,
        t,
      );
    }
    function c(e, t) {
      return [s(e, t), u(e, t)];
    }
    function d(e, t) {
      if (r("isStringNullOrEmpty")(e)) return null;
      var n = o("AdsInsightsFieldDescriptor").get(e),
        a = n.actionType,
        i = n.customEventName;
      if (r("isStringNullOrEmpty")(i) || a == null) return null;
      var l = a.startsWith("app_custom_event.");
      return l ? s(i, t) : u(i, t);
    }
    function m(e) {
      var t =
        typeof e == "number" ? e : typeof e == "string" ? parseFloat(e) : NaN;
      return Number.isFinite(t) ? t : null;
    }
    function p(t, n, r, o, a, i) {
      if (!i) return t;
      var l = d(n.getValue(), a);
      if (l == null || !e()) return t;
      var s = m(r.get(o, l).getValue());
      return s == null
        ? t
        : t.map(function (e) {
            return e == null ? s : e + s;
          });
    }
    ((l.make3COCustomEventFields = c),
      (l.get3COComplementaryCustomEventField = d),
      (l.getResultsWith3COAppWebSum = p));
  },
  98,
);
