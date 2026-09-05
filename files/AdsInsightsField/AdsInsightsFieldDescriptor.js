__d(
  "AdsInsightsFieldDescriptor",
  [
    "AdsInsightsActionFieldTypes",
    "AdsInsightsAttributionWindow",
    "AdsInsightsColumn",
    "AdsMgmtCustomMetricsStringOperations",
    "AdsReportStoreVisitsFields",
    "FBLogger",
    "err",
    "getObjectValues",
    "memoizeStringOnly",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new RegExp(
      "^([\\w\\.]+?)(?:_(" +
        r("getObjectValues")(r("AdsInsightsAttributionWindow")).join("|") +
        "))?$",
    );
    function s(t) {
      if (t == null)
        return (
          r("FBLogger")("insights_field").warn(
            "null received as insights field.",
          ),
          {}
        );
      if (t.length === 0)
        return (
          r("FBLogger")("insights_field").warn(
            "Empty string received as insights field.",
          ),
          {}
        );
      var n = u(t);
      switch (n.length) {
        case 1:
          var a = r("nullthrows")(
              t.match(e),
              "Failed to match field string pattern for action field " + t,
            ),
            i = a[0],
            l = a[1],
            s = a[2];
          return s && o("AdsInsightsActionFieldTypes").isResultsType(l)
            ? {
                actionType: l,
                actionFieldType: l,
                attributionWindow: r("getObjectValues")(
                  r("AdsInsightsAttributionWindow"),
                ).find(function (e) {
                  return e === s;
                }),
                resultsType: l,
              }
            : o("AdsInsightsActionFieldTypes").isResultsType(t)
              ? { resultsType: t, simpleField: t }
              : { simpleField: t };
        case 2:
          if (n[0] === r("AdsInsightsColumn").RELEVANCE_SCORE)
            return { relevanceScoreSubfield: n[1] };
          if (n[0] === r("AdsInsightsColumn").STORE_VISITS) {
            var d = r("getObjectValues")(r("AdsReportStoreVisitsFields")).find(
              function (e) {
                return e === n[1];
              },
            );
            return d != null ? { storeVisitsSubfield: d } : { simpleField: t };
          } else {
            if (o("AdsMgmtCustomMetricsStringOperations").isCMColumnID(t))
              return {
                actionFieldType: "custom_derived_metrics",
                attributionWindow: o(
                  "AdsMgmtCustomMetricsStringOperations",
                ).getAttbWdwFromColumnID(t),
                customMetricID: n[1],
              };
            if (n[0] === "conversion_annotations") {
              var m = n[1],
                p = m.lastIndexOf(":"),
                _;
              return (
                p > -1 && ((m = n[1].slice(0, p)), (_ = n[1].slice(p + 1))),
                {
                  actionFieldType: "conversion_annotations",
                  annotatedField: m,
                  attributionWindow: r("getObjectValues")(
                    r("AdsInsightsAttributionWindow"),
                  ).find(function (e) {
                    return e === _;
                  }),
                }
              );
            } else {
              var f = c(n);
              if (f != null) return f;
              var g = n[0].match(e),
                h = g[0],
                y = g[1],
                C = g[2],
                b = n[1],
                v = [
                  "app_custom_event.custom",
                  "offline_conversion.custom",
                  "offsite_conversion.custom",
                ].some(function (e) {
                  return b.startsWith(e);
                }),
                S = b.split("."),
                R = v ? S[2] : void 0;
              return {
                actionFieldType: y,
                actionType: b,
                attributionWindow: r("getObjectValues")(
                  r("AdsInsightsAttributionWindow"),
                ).find(function (e) {
                  return e === C;
                }),
                conversionID: R,
              };
            }
          }
        default:
          throw r("err")("Invalid field ID: " + t);
      }
    }
    function u(e) {
      var t = e.split(":");
      if (e === "" || t.length === 0) return [];
      var n = t[0],
        r = t.slice(1).join(":");
      return r !== "" ? [n, r] : [n];
    }
    function c(t) {
      var n = r("nullthrows")(t[0].match(e)),
        o = n[0],
        a = n[1],
        i = n[2];
      if (
        (a === "conversions" ||
          a === "cost_per_conversion" ||
          a === "conversion_values") &&
        t[1] != null
      ) {
        var l = t[1].split(".");
        if (l[0] === "app_custom_event" && l[1] != null && l[1].length > 0)
          return {
            actionFieldType: a,
            actionType: t[1],
            attributionWindow: r("getObjectValues")(
              r("AdsInsightsAttributionWindow"),
            ).find(function (e) {
              return e === i;
            }),
            customEventName: l.slice(1).join("."),
          };
        var s = l.slice(0, 2).join(".");
        if (
          [
            "offsite_conversion.fb_pixel_custom",
            "onsite_conversion.lead_custom_event",
            "offsite_conversion.fb_pixel_custom_pltv",
          ].includes(s)
        )
          return {
            actionFieldType: a,
            actionType: t[1],
            attributionWindow: r("getObjectValues")(
              r("AdsInsightsAttributionWindow"),
            ).find(function (e) {
              return e === i;
            }),
            customEventName: l.slice(2).join("."),
          };
      }
      return null;
    }
    var d = r("memoizeStringOnly")(s),
      m = c;
    ((l.get = d), (l.tryGetCustomEvent = m));
  },
  98,
);
