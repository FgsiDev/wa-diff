__d(
  "AdsUEditorAdgroupCampaignSetVersionReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorCampaignSetVersionActionFlux",
    "adsUEditorAdgroupCampaignGroupSetVersionMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adgroupIDs,
              a = t.version;
            return o("AdsMutators").mutateEach(e, n, function (e, t) {
              return r("adsUEditorAdgroupCampaignGroupSetVersionMutator")(e, a);
            });
          },
          o("AdsUEditorCampaignSetVersionActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
