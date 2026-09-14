__d(
  "AdsSAFRSelectors",
  [
    "AdsAccountStore",
    "AdsSpecialAdFrameworkConfigProvider",
    "AdsUEditorCampaignGroupSACSelectedCountriesSelector",
    "adsCreateSelector",
    "adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsSpecialAdFrameworkConfigProvider").toFluxSelector(),
      u = (e = r("adsCreateSelector"))(
        [
          o("adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector")
            .adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector,
          o("AdsUEditorCampaignGroupSACSelectedCountriesSelector")
            .selectedSACCountriesSelector,
          s,
          r("AdsAccountStore").getSelectedAccountID,
        ],
        function (t, n, r, o) {
          if (t.length === 0) return null;
          var e = r.get({
            accountID: o,
            regulatedCategories: t,
            regulatedCategoryCountries: n,
          });
          return e.match({
            loaded: function (t) {
              return t;
            },
            loading: function () {
              return null;
            },
            error: function () {
              return null;
            },
          });
        },
        { name: i.id + ".adsSAFRSelector" },
      ),
      c = e(
        [u],
        function (t) {
          return t == null ? void 0 : t.has_restrictions;
        },
        { name: i.id + ".adsHasRestrictionConfigSelector" },
      ),
      d = e(
        [u],
        function (t) {
          return t == null ? void 0 : t.lead_generation;
        },
        { name: i.id + ".adsLeadGenConfigSelector" },
      ),
      m = e(
        [u],
        function (t) {
          return t == null ? void 0 : t.objective;
        },
        { name: i.id + ".adsObjectiveConfigSelector" },
      ),
      p = e(
        [u],
        function (t) {
          return t == null ? void 0 : t.conversion;
        },
        { name: i.id + ".adsConversionConfigSelector" },
      ),
      _ = e(
        [u],
        function (t) {
          return t == null ? void 0 : t.disclaimer;
        },
        { name: i.id + ".adsDisclaimerConfigSelector" },
      ),
      f = e(
        [u],
        function (t) {
          return t == null ? void 0 : t.format;
        },
        { name: i.id + ".adsFormatConfigSelector" },
      ),
      g = e(
        [u],
        function (t) {
          return t == null ? void 0 : t.product_catalog;
        },
        { name: i.id + ".adsProductCatalogConfigSelector" },
      ),
      h = e(
        [u],
        function (t) {
          return t == null ? void 0 : t.placements;
        },
        { name: i.id + ".adsPlacementConfigSelector" },
      ),
      y = e(
        [u],
        function (t) {
          return t == null ? void 0 : t.age;
        },
        { name: i.id + ".adsAgeConfigSelector" },
      );
    ((l.adsSAFRSelector = u),
      (l.adsHasRestrictionConfigSelector = c),
      (l.adsLeadGenConfigSelector = d),
      (l.adsObjectiveConfigSelector = m),
      (l.adsConversionConfigSelector = p),
      (l.adsDisclaimerConfigSelector = _),
      (l.adsFormatConfigSelector = f),
      (l.adsProductCatalogConfigSelector = g),
      (l.adsPlacementConfigSelector = h),
      (l.adsAgeConfigSelector = y));
  },
  98,
);
