__d(
  "ShopsAdsInstagramAccountsStoreSource",
  [
    "RelayHooks",
    "ReverseInteropStoreSourceBase",
    "ShopsAdsInstagramAccountsStoreSourceServerLoadedQuery.graphql",
    "ShopsAdsInstagramAccountsStoreSourceServerQuery.graphql",
    "promiseDone",
    "readQueryToLoadObject",
    "updateLoadedAdAccountsClientSchema",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("ShopsAdsInstagramAccountsStoreSourceServerQuery.graphql")),
      c =
        s !== void 0
          ? s
          : (s = n(
              "ShopsAdsInstagramAccountsStoreSourceServerLoadedQuery.graphql",
            )),
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getQuery = function () {
            return c;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__getGQLParams = function (t) {
            return { ad_account_id: t };
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              a = t[0];
            r("updateLoadedAdAccountsClientSchema")(this.__environment, a);
            var i = this.__getGQLParams(a),
              l = o("RelayHooks")
                .fetchQuery(this.__environment, u, i)
                .toPromise()
                .catch(function (r) {
                  return e.handleFetchQueryError(t, n, r);
                });
            r("promiseDone")(l);
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (t) {
                var n = r("readQueryToLoadObject")(
                  e.__environment,
                  u,
                  { ad_account_id: t },
                  function (e) {
                    var t;
                    return e == null || (t = e.ad_account) == null
                      ? void 0
                      : t.shops_ads_instagram_accounts;
                  },
                );
                return { key: t, value: n };
              });
            return o;
          }),
          t
        );
      })(r("ReverseInteropStoreSourceBase"));
    l.default = d;
  },
  98,
);
