__d(
  "AdsUEditorCAAPSetDefaultRegionalRegulatoryIdentitiesReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCAAPSetDefaultRegionalRegulatoryIdentitiesActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "adsFinservLocationUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a = t.defaultBeneficiaryPayerIDs,
              i = t.regulationCategories,
              l = t.skipRegulatedCategoryCrossCheck;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var t,
                n,
                s,
                u,
                c =
                  (t =
                    (n = e.regional_regulated_categories) == null
                      ? void 0
                      : n.toArray()) != null
                    ? t
                    : [],
                d =
                  (s =
                    (u = e.regional_regulation_identities) == null
                      ? void 0
                      : u.toObject()) != null
                    ? s
                    : {},
                m = o(
                  "adsFinservLocationUtils",
                ).getRegulationIdentitiesFieldsByRegulatedCategories(i),
                p = o(
                  "adsFinservLocationUtils",
                ).getRegulationIdentitiesFieldsByRegulatedCategories(c),
                _ = m.reduce(function (e, t) {
                  if (
                    (l === !0 || p.includes(t)) &&
                    (d == null ? void 0 : d[t]) == null &&
                    a[t] != null
                  ) {
                    var n;
                    return babelHelpers.extends(
                      {},
                      e,
                      ((n = {}), (n[t] = a[t]), n),
                    );
                  }
                  return e;
                }, {}),
                f = babelHelpers.extends({}, d, _);
              return o("AdsMutators").chain(
                r(
                  "AdsCampaignRecordAccessors",
                ).regional_regulation_identities.set(r("immutable").fromJS(f)),
              )(e);
            });
          },
          r("AdsUEditorCAAPSetDefaultRegionalRegulatoryIdentitiesActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
