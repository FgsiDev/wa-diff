__d(
  "AdsReminderAdsAdAccountDataStore",
  [
    "AdsDataAtom",
    "AdsReminderAdsAdAccountDataLoaderQuery.graphql",
    "AdsReminderAdsAdAccountDataStoreLoadedQuery.graphql",
    "FluxLoadObjectStore_RELAY",
    "react-relay",
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
          : (e = n("AdsReminderAdsAdAccountDataStoreLoadedQuery.graphql")),
      c = (function (e) {
        function t() {
          return e.call(this, s || (s = r("AdsDataAtom"))) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.reduce = function (t, n) {
            return t;
          }),
          (n.__addIDToClientSchema = function (t) {
            r("updateLoadedAdAccountsClientSchema")(
              this.getRelayEnvironment(),
              t,
            );
          }),
          (n.__load = function (t) {
            var e = this,
              n = this.getRelayEnvironment();
            (this.__addIDToClientSchema(t),
              o("react-relay")
                .fetchQuery(
                  n,
                  r("AdsReminderAdsAdAccountDataLoaderQuery.graphql"),
                  { adAccountID: t },
                )
                .subscribe({
                  error: function (r) {
                    return e.__handleErrors([t], r);
                  },
                }));
          }),
          (n.__getQuery = function () {
            return u;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__getCachedFromRelayStore = function (t) {
            return r("readQueryToLoadObject")(
              this.getRelayEnvironment(),
              r("AdsReminderAdsAdAccountDataLoaderQuery.graphql"),
              { adAccountID: t },
              function (e) {
                var t;
                return e == null || (t = e.ad_account) == null
                  ? void 0
                  : t.reminder_ads_data;
              },
            );
          }),
          t
        );
      })(r("FluxLoadObjectStore_RELAY"));
    c.__moduleID = i.id;
    var d = new c();
    l.default = d;
  },
  98,
);
