__d(
  "adsUEditorIsPoliticalCategoryAvailableSelector",
  [
    "AdsAccountStore",
    "AdsRegulatedCategoryConvertAdproRegulatedCategory",
    "AdsSpecialAdCategoryVisibilityProvider",
    "adsCreateSelector",
    "adsRegulatedCategoryIsPoliticalCategorySelected",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsSpecialAdCategoryVisibilityProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e, r("AdsAccountStore").getSelectedAccountID],
        function (t, n) {
          if (n == null) return !1;
          var e = t.get(n),
            a = o(
              "AdsRegulatedCategoryConvertAdproRegulatedCategory",
            ).adsRegulatedCategoryConvertAdproRegulatedCategory(
              e.getValue() || [],
            );
          return r("adsRegulatedCategoryIsPoliticalCategorySelected")(a);
        },
        { name: i.id + ".adsUEditorIsPoliticalCategoryAvailableSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
