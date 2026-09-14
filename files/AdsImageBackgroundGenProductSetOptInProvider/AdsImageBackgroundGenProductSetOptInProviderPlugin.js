__d(
  "AdsImageBackgroundGenProductSetOptInProviderPlugin",
  [
    "AdsImageBackgroundGenProductSetOptInProviderPluginQuery.graphql",
    "AdsManagerRelayEnvironment",
    "LoadObjectMap",
    "RelayHooks",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var a =
        e !== void 0
          ? e
          : (e = n(
              "AdsImageBackgroundGenProductSetOptInProviderPluginQuery.graphql",
            ));
      return o("RelayHooks")
        .fetchQuery(r("AdsManagerRelayEnvironment"), a, { product_set_id: t })
        .toPromise()
        .then(function (e) {
          return (
            (e == null
              ? void 0
              : e.xfb_ads_image_background_gen_product_set_opt_in) === !0
          );
        });
    }
    var u = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            (t(function (t) {
              return t.setLoading(e);
            }),
              r("promiseDone")(
                r("promiseLoadObjectsFromKeys")(e, s),
                function (e) {
                  return t(function (t) {
                    return t.merge(e);
                  });
                },
              ));
          });
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
