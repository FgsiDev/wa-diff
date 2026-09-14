__d(
  "AdsMgmtColumnCategoriesConversionUtils",
  [
    "AdsInsightsFields",
    "AdsReportActionSupportedEventChannelType.experimental",
    "adsMemoizeWithArgs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e.indexOf("offsite_conversion") > -1 ||
        e.indexOf("landing_page_view") > -1
      );
    }
    function s(e) {
      return (
        e.indexOf("app_custom_event") > -1 ||
        e.indexOf("mobile_app_install") > -1 ||
        e.indexOf("app_site_visit") > -1 ||
        m().includes(e)
      );
    }
    function u(e) {
      return e.indexOf("offline_conversion") > -1;
    }
    function c(e) {
      return (
        e.indexOf("onsite_conversion") > -1 ||
        e.indexOf("donate_on_facebook") > -1
      );
    }
    function d(e) {
      return [
        "conversions",
        "cost_per_conversion",
        "conversion_values",
        "unique_conversions",
        "cost_per_unique_conversion",
      ].some(function (t) {
        return e.startsWith(t + ":");
      });
    }
    function m() {
      return [
        o("AdsInsightsFields").makeActionID("actions", "credit_spent"),
        o("AdsInsightsFields").makeActionID("action_values", "credit_spent"),
        o("AdsInsightsFields").makeActionID("actions", "app_install"),
      ];
    }
    var p = r("adsMemoizeWithArgs")(
      function (t) {
        var n = null;
        return (
          d(t) &&
            (n = Object.keys(
              r("AdsReportActionSupportedEventChannelType.experimental")
                .channels,
            )
              .filter(function (e) {
                return t.endsWith("_" + e);
              })
              .shift()),
          (n != null &&
            n ===
              r("AdsReportActionSupportedEventChannelType.experimental")
                .channels.website) ||
          e(t)
            ? "FB_PIXEL"
            : (n != null &&
                  n ===
                    r("AdsReportActionSupportedEventChannelType.experimental")
                      .channels.mobile_app) ||
                s(t)
              ? "APPLICATION"
              : (n != null &&
                    n ===
                      r("AdsReportActionSupportedEventChannelType.experimental")
                        .channels.offline) ||
                  u(t)
                ? "OFFLINE_DATASET"
                : n ===
                      r("AdsReportActionSupportedEventChannelType.experimental")
                        .channels.on_facebook || c(t)
                  ? "ON_FACEBOOK"
                  : "UNKNOWN_CHANNEL"
        );
      },
      function (e) {
        return e;
      },
      i.id,
    );
    ((l.isConversionColumn = d),
      (l.getDesktopAppConversions = m),
      (l.channelOfColumnID = p));
  },
  98,
);
