__d(
  "WamoAvailableIdentitiesStoreSource",
  [
    "RelayHooks",
    "ReverseInteropStoreSourceWeakBase",
    "WamoAvailableIdentitiesStoreSourceFragment.graphql",
    "WamoAvailableIdentitiesStoreSourceServerLoadedQuery.graphql",
    "WamoAvailableIdentitiesStoreSourceServerQuery.graphql",
    "readClientFragment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("WamoAvailableIdentitiesStoreSourceServerQuery.graphql")),
      d =
        s !== void 0
          ? s
          : (s = n(
              "WamoAvailableIdentitiesStoreSourceServerLoadedQuery.graphql",
            )),
      m =
        u !== void 0
          ? u
          : (u = n("WamoAvailableIdentitiesStoreSourceFragment.graphql")),
      p = (function (e) {
        function t() {
          var t = "wamo_available_identities";
          return e.call(this, t) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getQuery = function () {
            return d;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__getGQLParams = function (t) {
            var e;
            return {
              ad_account_id: t.adAccountID,
              page_id: (e = t.pageID) != null ? e : null,
            };
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              r = "loaded_wamo_available_identities",
              a = "XFBWAMOAvailableIdentitiesResponse",
              i = t[0],
              l = this.getRelayId(i);
            this.updateRecords([l], r, a);
            var s = this.__getGQLParams(i);
            o("RelayHooks")
              .fetchQuery(this.__environment, c, s)
              .toPromise()
              .catch(function (r) {
                return e.handleFetchQueryError(t, n, r);
              });
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (t) {
                var n = e.getRelayId(t),
                  o = e.__getGQLParams(t);
                return {
                  key: t,
                  value: r("readClientFragment")(
                    e.__environment,
                    c,
                    m,
                    o,
                    {},
                    n,
                    function (e) {
                      return e;
                    },
                  ),
                };
              });
            return o;
          }),
          t
        );
      })(r("ReverseInteropStoreSourceWeakBase"));
    l.default = p;
  },
  98,
);
