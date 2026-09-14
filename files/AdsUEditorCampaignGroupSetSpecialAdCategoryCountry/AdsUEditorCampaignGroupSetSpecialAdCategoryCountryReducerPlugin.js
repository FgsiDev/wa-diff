__d(
  "AdsUEditorCampaignGroupSetSpecialAdCategoryCountryReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetSpecialAdCategoryCountryActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.selectedCountries;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                return r(
                  "AdsCampaignGroupRecordAccessors",
                ).special_ad_category_country.set(r("immutable").List(n), e);
              },
            );
          },
          o("AdsUEditorCampaignGroupSetSpecialAdCategoryCountryActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
