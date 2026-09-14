__d(
  "AdsAdgroupDraftFragmentInstantPublishNameFieldReducerPlugin",
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
              return r("AdsAdgroupRecordAccessors").name.set(t.name, e);
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
