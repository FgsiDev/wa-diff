__d(
  "AdsUEditorCampaignReplaceInReducerPlugin",
  [
    "AdsMutators",
    "AdsRegexp",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignReplaceInActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return e.updateIn(t.path, function (e) {
                return (
                  e &&
                  o("AdsRegexp").getReplacedText(
                    e,
                    t.toFind,
                    t.replaceWith,
                    "ig",
                  )
                );
              });
            });
          },
          o("AdsUEditorCampaignReplaceInActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
