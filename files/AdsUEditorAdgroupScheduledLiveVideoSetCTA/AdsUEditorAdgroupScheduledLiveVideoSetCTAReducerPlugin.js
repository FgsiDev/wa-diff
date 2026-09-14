__d(
  "AdsUEditorAdgroupScheduledLiveVideoSetCTAReducerPlugin",
  [
    "AdsAdgroupCallToActionMutatorsAdapter",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupScheduledLiveVideoSetCTAActionFlux",
    "CallToActionTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e,
                a = Object.keys(r("CallToActionTypes")).find(function (e) {
                  var n;
                  return (
                    e === ((n = t.callToAction) == null ? void 0 : n.cta_type)
                  );
                });
              return (
                (n = o("AdsAdgroupCallToActionMutatorsAdapter").setCallToAction(
                  a,
                  n,
                )),
                n
              );
            });
          },
          r("AdsUEditorAdgroupScheduledLiveVideoSetCTAActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
