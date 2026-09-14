__d(
  "maybeUpdateTaiwanCategoriesAndIdentitiesMutator",
  [
    "AdsMutators",
    "AdsRegionalRegulatedCategory",
    "addRegionalRegulatedCategoryMutator",
    "duplicateTaiwanFinservBeneficiaryAndPayerFromTaiwanUniversalMutator",
    "removeRegionalRegulatedCategoryMutator",
    "removeTaiwanFinservBeneficiaryAndPayerMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t === r("AdsRegionalRegulatedCategory").TAIWAN_FINSERV
        ? o("AdsMutators").chain(
            function (e) {
              return o(
                "addRegionalRegulatedCategoryMutator",
              ).addRegionalRegulatedCategoryMutator(
                e,
                r("AdsRegionalRegulatedCategory").TAIWAN_UNIVERSAL,
              );
            },
            function (e) {
              return o(
                "addRegionalRegulatedCategoryMutator",
              ).addRegionalRegulatedCategoryMutator(
                e,
                r("AdsRegionalRegulatedCategory").TAIWAN_FINSERV,
              );
            },
            function (e) {
              return o(
                "duplicateTaiwanFinservBeneficiaryAndPayerFromTaiwanUniversalMutator",
              ).duplicateTaiwanFinservBeneficiaryAndPayerFromTaiwanUniversalMutator(
                e,
              );
            },
          )(e)
        : t === r("AdsRegionalRegulatedCategory").TAIWAN_UNIVERSAL
          ? o("AdsMutators").chain(
              function (e) {
                return o(
                  "addRegionalRegulatedCategoryMutator",
                ).addRegionalRegulatedCategoryMutator(
                  e,
                  r("AdsRegionalRegulatedCategory").TAIWAN_UNIVERSAL,
                );
              },
              function (e) {
                return o(
                  "removeRegionalRegulatedCategoryMutator",
                ).removeRegionalRegulatedCategoryMutator(
                  e,
                  r("AdsRegionalRegulatedCategory").TAIWAN_FINSERV,
                );
              },
              function (e) {
                return o(
                  "removeTaiwanFinservBeneficiaryAndPayerMutator",
                ).removeTaiwanFinservBeneficiaryAndPayerMutator(e);
              },
            )(e)
          : e;
    }
    l.maybeUpdateTaiwanCategoriesAndIdentitiesMutator = e;
  },
  98,
);
