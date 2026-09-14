__d(
  "AdsPromotableBusinessInstagramAccountsWithIABPProviderPlugin",
  [
    "AdsAccountStore",
    "AdsDataAtom",
    "AdsPromotableBusinessInstagramAccountsWithIABPDataManager",
    "LoadObjectMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        initialState: function (n) {
          return r("LoadObjectMap").create(function (t) {
            (n(function (e) {
              return e.setLoading(t);
            }),
              (e || (e = r("AdsDataAtom"))).isDispatching() &&
                (e || (e = r("AdsDataAtom"))).waitFor([
                  r("AdsAccountStore").getDispatchToken(),
                ]));
            var o = r("AdsAccountStore").getSelectedBusinessID();
            t.forEach(function (e) {
              e != null &&
                e !== "" &&
                o != null &&
                o !== "" &&
                r(
                  "AdsPromotableBusinessInstagramAccountsWithIABPDataManager",
                ).loadFor(e, o);
            });
          });
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
