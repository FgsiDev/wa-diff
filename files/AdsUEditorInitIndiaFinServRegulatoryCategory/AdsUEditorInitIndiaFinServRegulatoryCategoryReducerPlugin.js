__d(
  "AdsUEditorInitIndiaFinServRegulatoryCategoryReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsRegionalRegulatedCategory",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorInitIndiaFinServRegulatoryCategoryActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n,
                a,
                i,
                l,
                s,
                u,
                c = (
                  (n =
                    (a = t.campaignCAAPRegulationsSeparated.find(function (t) {
                      var n = t.campaignID;
                      return n === e.id;
                    })) == null
                      ? void 0
                      : a.regulations) != null
                    ? n
                    : []
                ).map(function (e) {
                  return e.regulationType;
                }),
                d = c.filter(function (e) {
                  return e === r("AdsRegionalRegulatedCategory").INDIA_FINSERV;
                }),
                m = new Set(e.regional_regulated_categories),
                p = c.every(function (e) {
                  return m.has(e);
                });
              if (p) return e;
              var _ =
                  (i =
                    (l = e.regional_regulated_categories) == null
                      ? void 0
                      : l.toArray()) != null
                    ? i
                    : [],
                f = new Set([].concat(_, d)),
                g =
                  (s =
                    (u = e.regional_regulation_identities) == null
                      ? void 0
                      : u.toObject()) != null
                    ? s
                    : {};
              if (d.includes(r("AdsRegionalRegulatedCategory").INDIA_FINSERV)) {
                var h = Object.fromEntries(
                  Object.entries(t.defaultBeneficiaryPayerIDs).filter(
                    function (e) {
                      var t = e[0],
                        n = e[1];
                      return [
                        "india_finserv_beneficiary",
                        "india_finserv_payer",
                      ].includes(t);
                    },
                  ),
                );
                g = babelHelpers.extends({}, g, h);
              }
              return o("AdsMutators").chain(
                r(
                  "AdsCampaignRecordAccessors",
                ).regional_regulated_categories.set(r("immutable").List(f)),
                r(
                  "AdsCampaignRecordAccessors",
                ).regional_regulation_identities.set(r("immutable").fromJS(g)),
              )(e);
            });
          },
          r("AdsUEditorInitIndiaFinServRegulatoryCategoryActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
