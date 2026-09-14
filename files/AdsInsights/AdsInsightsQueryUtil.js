__d(
  "AdsInsightsQueryUtil",
  [
    "AdsInsightsAttributionSettingBreakdownUtils",
    "AdsInsightsAttributionWindows",
    "AdsInsightsBreakdowns",
    "AdsInsightsBreakdownsSpec",
    "AdsInsightsField",
    "AdsInsightsFieldDescriptor",
    "AdsInsightsFields",
    "AdsInsightsViewSpecUtil",
    "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
    "LocalDate",
    "StrSet",
    "areEqual",
    "isTruthy",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1,
      u = function (n, a) {
        var t,
          i = new (r("StrSet"))(n),
          l = a.breakdowns,
          s = r("AdsInsightsBreakdowns").groupByType(l),
          u = !!s.action,
          c = s.impression && s.impression.includes("frequency_value"),
          d = (t = a.columns.attributionWindows) != null ? t : [];
        if (
          (u && i.add("actions"),
          c && i.add(r("AdsInsightsField").REACH),
          d.length > 0 &&
            !(e || (e = r("areEqual")))(
              d,
              o("AdsInsightsAttributionWindows").getDefaultWindows(),
            ))
        ) {
          var m = o("AdsInsightsViewSpecUtil").getInsightsFields(a);
          (m.forEach(function (e) {
            var t = o("AdsInsightsFieldDescriptor").get(e),
              n = t.actionFieldType,
              a = t.resultsType;
            (r("isTruthy")(n) || r("isTruthy")(a)) &&
              i.addAll(o("AdsInsightsFields").getAPIFields(e));
          }),
            a.breakdowns.includes(
              o("AdsInsightsBreakdownsSpec").AttributionSettingBreakdowns
                .ATTRIBUTION_SETTING,
            ) &&
              o(
                "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
              ).shouldAccountSeeAttributionSettingBreakdownWithoutExposure() &&
              i.add(r("AdsInsightsField").ATTRIBUTION_SETTING));
        }
        return i.toArray();
      },
      c = function (n, a) {
        var t,
          i = new Set(n),
          l = Array.from((t = a.columns.attributionWindows) != null ? t : []);
        return (
          r("justknobx")._("5021") &&
            a.breakdowns.some(function (e) {
              return r("AdsInsightsBreakdowns").isAttributionSettingBreakdown(
                e,
              );
            }) &&
            ((e || (e = r("areEqual")))(a.breakdowns, [
              o("AdsInsightsBreakdownsSpec").AttributionSettingBreakdowns
                .ATTRIBUTION_SETTING,
            ]) &&
            o(
              "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
            ).shouldAccountSeeAttributionSettingBreakdownWithoutExposure()
              ? o(
                  "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
                ).shouldEnableMCOSupportForAttributionBreakdown()
                ? (l = l.concat(
                    o("AdsInsightsAttributionSettingBreakdownUtils")
                      .ATTRIBUTION_WINDOW_BREAKDOWN_SUPPORTED_ATTRIBUTION_WINDOWS_MCO,
                  ))
                : (l = l.concat(
                    o("AdsInsightsAttributionSettingBreakdownUtils")
                      .ATTRIBUTION_WINDOW_BREAKDOWN_SUPPORTED_ATTRIBUTION_WINDOWS,
                  ))
              : (e || (e = r("areEqual")))(a.breakdowns, [
                  o("AdsInsightsBreakdownsSpec").AttributionSettingBreakdowns
                    .CONVERSION_COUNT,
                ]) &&
                o(
                  "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
                ).shouldAccountSeeAttributionSettingBreakdownWithoutExposure() &&
                (l = l.concat(
                  o("AdsInsightsAttributionSettingBreakdownUtils")
                    .CONVERSION_COUNT_BREAKDOWN_SUPPORTED_ATTRIBUTION_WINDOWS,
                ))),
          n.concat(
            l.filter(function (e) {
              return !i.has(e);
            }),
          )
        );
      };
    function d(e, t) {
      return babelHelpers.extends({}, e, {
        apiFields: u(e.apiFields, t),
        attributionWindows: c(e.attributionWindows, t),
      });
    }
    function m(e) {
      var t = r("LocalDate").today(s).addDays(1);
      return !!e && e.start.isAfter(t);
    }
    ((l.augmentInsightsQueryByCurrentView = d), (l.isQueryingFutureDate = m));
  },
  98,
);
