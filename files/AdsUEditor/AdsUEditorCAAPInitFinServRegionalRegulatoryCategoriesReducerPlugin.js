__d(
  "AdsUEditorCAAPInitFinServRegionalRegulatoryCategoriesReducerPlugin",
  [
    "AdsCAAPInitFinServRegionalRegulatoryCategoriesActionFlux",
    "AdsCampaignRecordAccessors",
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
            var n = t.campaignCAAPRegulationsSeparated,
              a = t.campaignIDs,
              i = t.defaultBeneficiaryPayerIDs;
            return o("AdsMutators").mutateEach(e, a, function (e) {
              var t,
                a,
                l,
                s,
                u,
                c,
                d =
                  (t =
                    (a = n.find(function (t) {
                      var n = t.campaignID;
                      return n === e.id;
                    })) == null
                      ? void 0
                      : a.regulations) != null
                    ? t
                    : [],
                m = d
                  .filter(function (e) {
                    return e.isFinServDeclarationRequired;
                  })
                  .map(function (e) {
                    return e.regulationType;
                  }),
                p = new Set(e.regional_regulated_categories),
                _ = d.every(function (e) {
                  return p.has(e.regulationType);
                });
              if (_) return e;
              var f =
                  (l =
                    (s = e.regional_regulated_categories) == null
                      ? void 0
                      : s.toArray()) != null
                    ? l
                    : [],
                g = new Set([].concat(f, m)),
                h =
                  (u =
                    (c = e.regional_regulation_identities) == null
                      ? void 0
                      : c.toObject()) != null
                    ? u
                    : {};
              if (
                m.includes(r("AdsRegionalRegulatedCategory").AUSTRALIA_FINSERV)
              ) {
                var y = Object.fromEntries(
                  Object.entries(i).filter(function (e) {
                    var t = e[0],
                      n = e[1];
                    return [
                      "australia_finserv_beneficiary",
                      "australia_finserv_payer",
                    ].includes(t);
                  }),
                );
                h = babelHelpers.extends({}, h, y);
              }
              return o("AdsMutators").chain(
                r(
                  "AdsCampaignRecordAccessors",
                ).regional_regulated_categories.set(r("immutable").List(g)),
                r(
                  "AdsCampaignRecordAccessors",
                ).regional_regulation_identities.set(r("immutable").fromJS(h)),
                function (e) {
                  return o(
                    "duplicateTaiwanFinservBeneficiaryAndPayerFromTaiwanUniversalMutator",
                  ).duplicateTaiwanFinservBeneficiaryAndPayerFromTaiwanUniversalMutator(
                    e,
                  );
                },
              )(e);
            });
          },
          o("AdsCAAPInitFinServRegionalRegulatoryCategoriesActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
