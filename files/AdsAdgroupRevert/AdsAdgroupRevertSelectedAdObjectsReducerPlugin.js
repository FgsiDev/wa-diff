__d(
  "AdsAdgroupRevertSelectedAdObjectsReducerPlugin",
  [
    "AdsAPIAdgroupPaths",
    "AdsDataAtom",
    "AdsDraftFragmentStoreStateDeleteRevertMutators",
    "AdsSelectorUtils",
    "adsAdgroupDraftFragmentCreateReducer",
    "adsMgmtAdgroupSelectedIdsByLevelSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        reduce: r("adsAdgroupDraftFragmentCreateReducer")(
          function (e) {
            return e;
          },
          null,
          null,
          function (t, n) {
            (s || (s = r("AdsDataAtom"))).waitFor(
              (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
                r("adsMgmtAdgroupSelectedIdsByLevelSelector"),
              ]),
            );
            var a = r("adsMgmtAdgroupSelectedIdsByLevelSelector")();
            return a && a.length > 0
              ? o("AdsDraftFragmentStoreStateDeleteRevertMutators").revert(
                  t,
                  a,
                  r("AdsAPIAdgroupPaths").STATUS,
                )
              : t;
          },
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
