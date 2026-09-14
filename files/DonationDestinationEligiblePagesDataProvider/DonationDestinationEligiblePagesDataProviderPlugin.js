__d(
  "DonationDestinationEligiblePagesDataProviderPlugin",
  [
    "AdsAccountDataLoader",
    "AsyncTypedRequest",
    "LoadObjectMap",
    "LoadObjectMapMutationUtil",
    "XDonationDestinationEligibilePagesAsyncController",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("XDonationDestinationEligibilePagesAsyncController")
        .getURIBuilder()
        .setInt("ad_account_id", e.account_id)
        .getURI();
      return new (r("AsyncTypedRequest"))(t).promisePayload();
    }
    var s = {
        initialState: function (n) {
          return r("LoadObjectMap").create(function (t) {
            (n(function (e) {
              return o("LoadObjectMapMutationUtil").setValueListToLoading(e, t);
            }),
              r("promiseDone")(
                r("promiseLoadObjectsFromKeys")(t, function (t) {
                  return o("AdsAccountDataLoader")
                    .fetchAccountAndGKs(t)
                    .then(function (t) {
                      return e(t);
                    });
                }),
                function (e) {
                  return n(function (t) {
                    return t.merge(e);
                  });
                },
              ));
          });
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
