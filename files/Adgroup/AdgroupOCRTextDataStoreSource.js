__d(
  "AdgroupOCRTextDataStoreSource",
  [
    "AdgroupOCRTextDataStoreSourceFragment.graphql",
    "AdgroupOCRTextDataStoreSourceServerLoadedQuery.graphql",
    "AdgroupOCRTextDataStoreSourceServerQuery.graphql",
    "RelayHooks",
    "ReverseInteropStoreSourceBase",
    "promiseDone",
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
          : (e = n("AdgroupOCRTextDataStoreSourceServerQuery.graphql")),
      d =
        s !== void 0
          ? s
          : (s = n("AdgroupOCRTextDataStoreSourceServerLoadedQuery.graphql")),
      m =
        u !== void 0
          ? u
          : (u = n("AdgroupOCRTextDataStoreSourceFragment.graphql")),
      p = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
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
          (n.getGQLParams = function (t) {
            return { adgroup_ids: [t] };
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              a = "loaded_adgroups",
              i = "Adgroup",
              l = t[0],
              s = l;
            this.updateRecords([s], a, i);
            var u = this.getGQLParams(l),
              d = o("RelayHooks")
                .fetchQuery(this.__environment, c, u)
                .toPromise()
                .catch(function (r) {
                  return e.handleFetchQueryError(t, n, r);
                });
            r("promiseDone")(d);
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (t) {
                var n = t,
                  o = e.getGQLParams(t);
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
      })(r("ReverseInteropStoreSourceBase"));
    l.default = p;
  },
  98,
);
