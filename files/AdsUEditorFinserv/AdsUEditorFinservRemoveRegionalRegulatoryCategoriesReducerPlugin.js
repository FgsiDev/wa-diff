__d(
  "AdsUEditorFinservRemoveRegionalRegulatoryCategoriesReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsFinservRemoveRegionalRegulatoryCategoriesActionFlux",
    "AdsMutators",
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
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n;
              if (e.regional_regulated_categories == null) return e;
              var a = new Set(t.categories),
                i = o(
                  "adsFinservLocationUtils",
                ).getRegulationIdentitiesFieldsByRegulatedCategories(
                  Array.from(a),
                ),
                l = (
                  (n = e.regional_regulated_categories) != null ? n : []
                ).filter(function (e) {
                  return !a.has(e);
                }),
                s = i.reduce(function (e, t) {
                  return e == null ? void 0 : e.set(t, null);
                }, e.regional_regulation_identities);
              return l.size === 0
                ? o("AdsMutators").chain(
                    r(
                      "AdsCampaignRecordAccessors",
                    ).regional_regulated_categories.set(r("immutable").List()),
                    r(
                      "AdsCampaignRecordAccessors",
                    ).regional_regulation_identities.set(
                      r("immutable").fromJS({}),
                    ),
                  )(e)
                : o("AdsMutators").chain(
                    r(
                      "AdsCampaignRecordAccessors",
                    ).regional_regulated_categories.set(r("immutable").List(l)),
                    r(
                      "AdsCampaignRecordAccessors",
                    ).regional_regulation_identities.set(s),
                  )(e);
            });
          },
          o("AdsFinservRemoveRegionalRegulatoryCategoriesActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
