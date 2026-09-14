__d(
  "AdsAdgroupDraftFragmentsDeleteAdObjectsReducerPlugin",
  [
    "AdsAPIAdgroupPaths",
    "AdsDraftFragmentStoreStateDeleteRevertMutators",
    "adsAdgroupDraftFragmentCreateReducer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: r("adsAdgroupDraftFragmentCreateReducer")(
          function (e) {
            return e;
          },
          null,
          null,
          function (e, t) {
            return t.adgroupIDs && t.adgroupIDs.length > 0
              ? o("AdsDraftFragmentStoreStateDeleteRevertMutators").delete_(
                  e,
                  t.adgroupIDs,
                  r("AdsAPIAdgroupPaths").STATUS,
                  t.adgroupSyncBypass === !0,
                )
              : e;
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
