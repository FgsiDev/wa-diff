__d(
  "AdsUEditorFinservAddRegionalRegulatoryCategoriesReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsFinservAddRegionalRegulatoryCategoriesActionFlux",
    "AdsMutators",
    "AdsRegionalRegulatedCategory",
    "AdsUEditorCampaignReducerUtils",
    "duplicateTaiwanFinservBeneficiaryAndPayerFromTaiwanUniversalMutator",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n, a;
              if (e.regional_regulated_categories == null)
                return r(
                  "AdsCampaignRecordAccessors",
                ).regional_regulated_categories.set(
                  r("immutable").List(t.categories),
                  e,
                );
              var i = new Set(e.regional_regulated_categories),
                l = t.categories.every(function (e) {
                  return i.has(e);
                });
              if (l) return e;
              var s =
                  (n =
                    (a = e.regional_regulated_categories) == null
                      ? void 0
                      : a.toArray()) != null
                    ? n
                    : [],
                u = Array.from(new Set([].concat(s, t.categories))),
                c = r(
                  "AdsCampaignRecordAccessors",
                ).regional_regulated_categories.set(r("immutable").List(u), e);
              return t.categories.includes(
                r("AdsRegionalRegulatedCategory").TAIWAN_FINSERV,
              )
                ? o(
                    "duplicateTaiwanFinservBeneficiaryAndPayerFromTaiwanUniversalMutator",
                  ).duplicateTaiwanFinservBeneficiaryAndPayerFromTaiwanUniversalMutator(
                    c,
                  )
                : c;
            });
          },
          o("AdsFinservAddRegionalRegulatoryCategoriesActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
