__d(
  "AdsUEditorAdgroupUpdateCallForwardingReducerPlugin",
  [
    "AdsCallAddonUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupUpdateCallForwardingActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.callForwarding;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                return o("AdsCallAddonUtils").setCallForwarding(e, n);
              },
            );
          },
          r("AdsUEditorAdgroupUpdateCallForwardingActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
