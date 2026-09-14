__d(
  "AdsInsightsFieldUtil",
  [
    "fbt",
    "invariant",
    "Ads3COCustomEventColumnsUtil",
    "AdsDDAStrings",
    "AdsInsightsAttributionWindows",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e) {
      return e.length === 0
        ? o("AdsInsightsAttributionWindows").getDefaultWindows()
        : e;
    }
    function c(e, t, n) {
      var r;
      switch (t) {
        case "actions":
          r = e.isArchived
            ? s._(/*BTDS*/ "{customConversionName} (Deleted)", [
                s._param("customConversionName", e.customConversionName),
              ])
            : e.customConversionName;
          break;
        case "action_values":
          r = e.isArchived
            ? s._(
                /*BTDS*/ "{customConversionName} Conversion Value (Deleted)",
                [s._param("customConversionName", e.customConversionName)],
              )
            : s._(/*BTDS*/ "{customConversionName} Conversion Value", [
                s._param("customConversionName", e.customConversionName),
              ]);
          break;
        case "cost_per_action_type":
          r = e.isArchived
            ? s._(/*BTDS*/ "Cost per {customConversionName} (Deleted)", [
                s._param("customConversionName", e.customConversionName),
              ])
            : s._(/*BTDS*/ "Cost per {customConversionName}", [
                s._param("customConversionName", e.customConversionName),
              ]);
          break;
        default:
          u(0, 82, t);
      }
      return (
        (n === "dda" && o("AdsDDAStrings").getIncrementalColumnLabel(r)) || r
      );
    }
    function d(e, t, n, r) {
      var a;
      if (r != null && r.startsWith("offsite_conversion.fb_pixel_custom_pltv"))
        return s._(/*BTDS*/ "{customEventName} pLTV", [
          s._param("customEventName", e),
        ]);
      var i;
      switch (t) {
        case "conversions":
          i = s._(/*BTDS*/ "{customEventName}", [
            s._param("customEventName", e),
          ]);
          break;
        case "cost_per_conversion":
          i = s._(/*BTDS*/ "Cost per {customEventName}", [
            s._param("customEventName", e),
          ]);
          break;
        case "conversion_values":
          i = s._(/*BTDS*/ "{customEventName} Conversion Value", [
            s._param("customEventName", e),
          ]);
          break;
        default:
          u(0, 82, t);
      }
      var l = (a = m(i, r)) != null ? a : i;
      return (
        (n === "dda" && o("AdsDDAStrings").getIncrementalColumnLabel(l)) || l
      );
    }
    function m(e, t) {
      if (t == null) return null;
      var n = t.startsWith("app_custom_event."),
        r = t.startsWith("offsite_conversion.fb_pixel_custom.");
      return (!n && !r) ||
        !o(
          "Ads3COCustomEventColumnsUtil",
        ).getIsAccountIn3COCustomEventColumnsSeparation()
        ? null
        : n
          ? s._(/*BTDS*/ "{appCustomEventColumnLabel} (app)", [
              s._param("appCustomEventColumnLabel", e),
            ])
          : s._(/*BTDS*/ "{webCustomEventColumnLabel} (web)", [
              s._param("webCustomEventColumnLabel", e),
            ]);
    }
    ((l.attributionWindowsToAPIParam = e),
      (l.getCustomConversionFieldLabel = c),
      (l.getCustomEventFieldLabel = d));
  },
  226,
);
