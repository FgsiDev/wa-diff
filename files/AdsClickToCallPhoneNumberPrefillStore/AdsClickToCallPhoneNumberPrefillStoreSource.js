__d(
  "AdsClickToCallPhoneNumberPrefillStoreSource",
  [
    "AdsClickToCallPhoneNumberPrefillStoreSourceServerLoadedQuery.graphql",
    "AdsClickToCallPhoneNumberPrefillStoreSourceServerQuery.graphql",
    "RelayHooks",
    "ReverseInteropStoreSourceWeakBase",
    "promiseDone",
    "readQueryToLoadObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n(
              "AdsClickToCallPhoneNumberPrefillStoreSourceServerQuery.graphql",
            )),
      c =
        s !== void 0
          ? s
          : (s = n(
              "AdsClickToCallPhoneNumberPrefillStoreSourceServerLoadedQuery.graphql",
            )),
      d = (function (e) {
        function t() {
          var t = "_ignored_";
          return e.call(this, t) || this;
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
            return { ad_account_id: t.adAccountID, page_id: t.pageID };
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this;
            t.forEach(function (a) {
              var i = e.__getGQLParams(a),
                l = o("RelayHooks")
                  .fetchQuery(e.__environment, u, i)
                  .toPromise()
                  .catch(function (r) {
                    return e.handleFetchQueryError(t, n, r);
                  })
                  .finally(function () {
                    e.notifyDataChange();
                  });
              r("promiseDone")(l);
            });
          }),
          (n.__toReturnType = function (t) {
            var e;
            return {
              phone_number:
                t == null || (e = t.ad_account) == null
                  ? void 0
                  : e.get_prefill_phone_number_from_page,
            };
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (t) {
                var n = e.__getGQLParams(t);
                return {
                  key: t,
                  value: r("readQueryToLoadObject")(
                    e.__environment,
                    u,
                    n,
                    function (t) {
                      return e.__toReturnType(t);
                    },
                  ),
                };
              });
            return o;
          }),
          t
        );
      })(r("ReverseInteropStoreSourceWeakBase"));
    l.default = d;
  },
  98,
);
