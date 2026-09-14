__d(
  "AdsUEditorAdgroupUpdatePromoFromPageReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupUpdatePromoFromPageActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsUEditorAdgroupPromoAdMutators",
              ).mutateUpdatePromoAdsDataFromPageId(
                {
                  adgroup: e,
                  campaign: t.campaign,
                  campaignGroup: t.campaignGroup,
                },
                t.specPlugin,
                t.account,
              );
            });
          },
          r("AdsUEditorAdgroupUpdatePromoFromPageActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
