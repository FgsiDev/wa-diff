__d(
  "AdsCPASCatalogProviderPlugin",
  [
    "CatalogDataLoader",
    "LoadObjectMap",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e(function (e) {
        return e.setLoading(t.adsCPASCatalogKeys);
      });
    }
    function s(e, t) {
      e(function (e) {
        return e.merge(t.adsCPASCatalog);
      });
    }
    function u(e) {
      return [
        "ad_account_to_collaborative_ads_share_settings.ad_account_id(" +
          e +
          "){utm_source,utm_medium,utm_campaign}",
      ];
    }
    var c = {
        initialState: function (n) {
          return r("LoadObjectMap").createKeyed(
            function (t) {
              (e(n, { adsCPASCatalogKeys: t }),
                r("promiseDone")(
                  r("promiseLoadObjectsFromKeys")(t, function (e) {
                    var t = e.adAccountID,
                      n = e.catalogID,
                      o = [];
                    return (
                      t != null && (o = o.concat(u(t))),
                      r(
                        "CatalogDataLoader",
                      ).loadCPASCatalogWithFieldsInAdsManager(n, o)
                    );
                  }),
                  function (e) {
                    s(n, { adsCPASCatalog: e });
                  },
                ));
            },
            function (e) {
              var t;
              return e.catalogID + ":" + ((t = e.adAccountID) != null ? t : "");
            },
          );
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
