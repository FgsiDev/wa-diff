__d(
  "AdsDynamicAdCustomizationConstants",
  ["AdsAPIObjectives", "CatalogVertical"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [
        (e = r("CatalogVertical")).COMMERCE,
        e.DESTINATIONS,
        e.FLIGHTS,
        e.HOME_LISTINGS,
        e.HOTELS,
        e.MEDIA_TITLES,
        e.VEHICLES,
      ],
      c = 48,
      d = "customization_rules_spec",
      m = "2150227595279510",
      p = [
        (s = r("AdsAPIObjectives")).CONVERSIONS,
        s.LINK_CLICKS,
        s.PRODUCT_CATALOG_SALES,
      ],
      _ = [
        s.APP_INSTALLS,
        s.CONVERSIONS,
        s.LINK_CLICKS,
        s.PRODUCT_CATALOG_SALES,
        s.WEBSITE_CONVERSIONS,
      ];
    ((l.SUPPORTED_MULTI_LANGUAGE_CATALOG_VERTICALS = u),
      (l.MAX_ADDITIONAL_LANGUAGES = c),
      (l.CUSTOMIZATION_RULES_SPEC = d),
      (l.CMS_ID_MMDA = m),
      (l.SUPPORTED_MULTI_LANGUAGE_COLLECTION_OBJECTIVES = p),
      (l.SUPPORTED_OBJECTIVES = _));
  },
  98,
);
