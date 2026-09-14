__d(
  "AdsUEditorCampaignGroupSetAdLabelsReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetAdLabelsActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adLabels,
              a = o("immutable").List();
            return (
              n != null &&
                (a = o("immutable").List(
                  n.map(function (e) {
                    var t;
                    return o("immutable").Map(((t = {}), (t.name = e), t));
                  }),
                )),
              o("AdsMutators").mutateEach(e, t.campaignGroupIDs, function (e) {
                return r("AdsCampaignGroupRecordAccessors").adlabels.set(a, e);
              })
            );
          },
          o("AdsUEditorCampaignGroupSetAdLabelsActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
