__d(
  "AdsAdgroupDraftFragmentsBulkEditApplyChangesReducerPlugin",
  [
    "AdsAPIAdgroupRecord",
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
            var n = t.changedAdgroupsMap,
              a = t.ids;
            return o("AdsMutators").mutateEach(e, a, function (e) {
              var t = new (r("AdsAPIAdgroupRecord"))({});
              return ((t = t.mergeDeep(n.get(e.id))), t);
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
