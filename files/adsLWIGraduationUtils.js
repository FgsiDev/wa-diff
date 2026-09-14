__d(
  "adsLWIGraduationUtils",
  [
    "AdDraftFragmentSource",
    "AdsPERouterHelper",
    "SBAGraduationEntryPointEnums",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t = r("AdsPERouterHelper").getRouter().getQueryParams(),
        n =
          (e = t == null ? void 0 : t.package_deep_link_source) != null
            ? e
            : null;
      return n != null && r("SBAGraduationEntryPointEnums").isValid(n);
    }
    function s() {
      var e,
        t = r("AdsPERouterHelper").getRouter().getQueryParams(),
        n =
          (e = t == null ? void 0 : t.package_deep_link_source) != null
            ? e
            : null;
      return n === "ig_web_boost_post_upsell";
    }
    function u() {
      var e,
        t = r("AdsPERouterHelper").getRouter().getQueryParams(),
        n =
          (e = t == null ? void 0 : t.package_deep_link_source) != null
            ? e
            : null;
      return n === "igfa_ads_sliders";
    }
    function c(e) {
      return s()
        ? r("AdDraftFragmentSource").IGFA_GRADUATION_CREATION_PACKAGE
        : u()
          ? r("AdDraftFragmentSource").IGFA_ADS_SLIDERS
          : (e == null ? void 0 : e.lwi_values) != null
            ? r("AdDraftFragmentSource")
                .LWI_GRADUATION_ITERATION_CREATION_PACKAGE
            : null;
    }
    ((l.isLWIGraduationCreationPackage = e), (l.getCreationSource = c));
  },
  98,
);
