__d(
  "AdsPageSetProviderPlugin",
  ["AdsPlacePageSetDataManager", "LoadObjectMap", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            (t(function (t) {
              return t.setLoading(e);
            }),
              e.forEach(function (e) {
                var t = e.accountID,
                  n = e.dlaParentPageID;
                r("promiseDone")(
                  r("AdsPlacePageSetDataManager").getOrCreateFlatPageSetID(
                    t,
                    n,
                  ),
                );
              }));
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
