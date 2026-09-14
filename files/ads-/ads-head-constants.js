__d(
  "ads-head-constants",
  ["AdsCMURLValuesMap", "AdsManagerURIUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = o("AdsManagerURIUtils")
        .getXAdsCMControllerURI(
          "ads_manager",
          null,
          ((e = {}),
          (e.page = (c = r("AdsCMURLValuesMap")).pixel),
          (e.tab = c.unified_pixel_tab),
          e),
        )
        .toString(),
      m = o("AdsManagerURIUtils")
        .getXAdsCMControllerURI(
          "ads_manager",
          null,
          ((s = {}),
          (s.page = c["custom-conversions"]),
          (s.tab = c.conversion_list),
          s),
        )
        .toString(),
      p = "/ads/manage/reporting.php",
      _ = "/ads/manage/settings.php",
      f = "/ads/manage",
      g = o("AdsManagerURIUtils")
        .getXAdsCMControllerURI(
          "ads_manager",
          null,
          ((u = {}), (u.page = c.rules), (u.tab = c.rules_management_tab), u),
        )
        .toString();
    ((l.PIXELS_LINK = d),
      (l.CUSTOM_CONVERSIONS_LINK = m),
      (l.REPORTING_LINK = p),
      (l.SETTINGS_LINK = _),
      (l.ADS_MANAGER = f),
      (l.RULES_LINK = g));
  },
  98,
);
