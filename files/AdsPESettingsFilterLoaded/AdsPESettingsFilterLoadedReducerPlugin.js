__d(
  "AdsPESettingsFilterLoadedReducerPlugin",
  ["AdsAccountStore", "AdsDataAtom", "AdsPEFilterUIStateUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: function (n, a) {
          return (
            (e || (e = r("AdsDataAtom"))).waitFor([
              r("AdsAccountStore").getDispatchToken(),
            ]),
            n.withMutations(function (e) {
              (o("AdsPEFilterUIStateUtils").updateSelectedAccount(e),
                o("AdsPEFilterUIStateUtils").handleFiltersLoaded(
                  a.accountID,
                  a.filters,
                  e,
                ));
            })
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
