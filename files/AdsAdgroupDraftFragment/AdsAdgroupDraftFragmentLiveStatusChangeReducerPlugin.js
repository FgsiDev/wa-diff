__d(
  "AdsAdgroupDraftFragmentLiveStatusChangeReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "adsAdgroupDraftFragmentCreateReducer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: r("adsAdgroupDraftFragmentCreateReducer")(
          function (e) {
            return e;
          },
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.ids, function (e) {
              return r("AdsAdgroupRecordAccessors").status.set(t.runStatus, e);
            });
          },
          function (e) {
            return e;
          },
          function (e) {
            return e;
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
