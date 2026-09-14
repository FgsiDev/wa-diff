__d(
  "AdsUEditorCampaignSetSearchThemesReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetSearchThemesActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = r("immutable").List(t.searchThemes);
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r("AdsCampaignRecordAccessors").search_themes.set(n, e);
            });
          },
          r("AdsUEditorCampaignSetSearchThemesActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
