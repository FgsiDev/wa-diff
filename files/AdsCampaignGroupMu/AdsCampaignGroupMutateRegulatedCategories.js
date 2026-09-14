__d(
  "AdsCampaignGroupMutateRegulatedCategories",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsRegulatedCategory",
    "AdsUEditorHostIDs",
    "FPSExpansionPhase2GKCheck",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s) {
      var u = a.some(function (e) {
          return e === r("AdsRegulatedCategory").ISSUES_ELECTIONS_POLITICS;
        }),
        c = [];
      u && l != null && l.length > 0
        ? (c = [l[0]])
        : i.length === 0
          ? (c = s)
          : (c = i);
      var d =
          a.includes(r("AdsRegulatedCategory").CREDIT) &&
          a.includes(r("AdsRegulatedCategory").FINANCIAL_PRODUCTS_SERVICES),
        m = a;
      if (d) {
        var p = o(
          "FPSExpansionPhase2GKCheck",
        ).getIsPassingFPSExpansionSpecialAdCategoryGK()
          ? r("AdsRegulatedCategory").CREDIT
          : r("AdsRegulatedCategory").FINANCIAL_PRODUCTS_SERVICES;
        m = a.filter(function (e) {
          return e !== p;
        });
      }
      return o("AdsMutators").mutateEach(e, t, function (e) {
        return o("AdsMutators").chain(
          r("AdsCampaignGroupRecordAccessors").special_ad_categories.set(
            r("immutable").List(m),
          ),
          r("AdsCampaignGroupRecordAccessors").special_ad_category_country.set(
            r("immutable").List(c),
          ),
          function (e) {
            return n === r("AdsUEditorHostIDs").CREATION
              ? o("AdsMutators").chain(
                  r("AdsCampaignGroupRecordAccessors").promoted_object.set(
                    null,
                  ),
                )(e)
              : e;
          },
          function (e) {
            return u && e.is_pca_unified !== !0
              ? o("AdsMutators").chain(
                  r("AdsCampaignGroupRecordAccessors").promoted_object.set(
                    null,
                  ),
                )(e)
              : e;
          },
        )(e);
      });
    }
    l.default = e;
  },
  98,
);
