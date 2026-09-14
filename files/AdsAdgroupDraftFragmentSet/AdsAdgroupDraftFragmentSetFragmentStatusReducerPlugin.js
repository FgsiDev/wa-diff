__d(
  "AdsAdgroupDraftFragmentSetFragmentStatusReducerPlugin",
  [
    "AdsAPIDraftFragmentPaths",
    "AdsDraftFragmentStoreStateApplyChangesMutators",
    "adsAdgroupDraftFragmentCreateReducer",
    "identityFunction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: r("adsAdgroupDraftFragmentCreateReducer")(
          function (e, t) {
            return o(
              "AdsDraftFragmentStoreStateApplyChangesMutators",
            ).mutateFragments(e, t.ids, function (e, n) {
              var o = t.idToStatusMap.get(n);
              return o == null
                ? e
                : e.setIn(r("AdsAPIDraftFragmentPaths").STATUS, o);
            });
          },
          null,
          null,
          r("identityFunction"),
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
