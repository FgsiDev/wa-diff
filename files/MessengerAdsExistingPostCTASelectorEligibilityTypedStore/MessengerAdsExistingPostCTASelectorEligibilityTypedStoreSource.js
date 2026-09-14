__d(
  "MessengerAdsExistingPostCTASelectorEligibilityTypedStoreSource",
  [
    "MessengerAdsExistingPostCTASelectorEligibilityTypedStoreSourceFragment.graphql",
    "MessengerAdsExistingPostCTASelectorEligibilityTypedStoreSourceServerLoadedQuery.graphql",
    "MessengerAdsExistingPostCTASelectorEligibilityTypedStoreSourceServerQuery.graphql",
    "RelayHooks",
    "ReverseInteropStoreSourceWeakBase",
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
          : (e = n(
              "MessengerAdsExistingPostCTASelectorEligibilityTypedStoreSourceServerQuery.graphql",
            )),
      d =
        s !== void 0
          ? s
          : (s = n(
              "MessengerAdsExistingPostCTASelectorEligibilityTypedStoreSourceServerLoadedQuery.graphql",
            )),
      m =
        u !== void 0
          ? u
          : (u = n(
              "MessengerAdsExistingPostCTASelectorEligibilityTypedStoreSourceFragment.graphql",
            )),
      p = (function (e) {
        function t() {
          var t =
            "xfb_andromeda_XMessengerAdsExistingPostCTASelectorEligibilityTypedController";
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
            return {
              post_id: t.postID,
              current_adgroup_id: t.currentAdgroupID,
            };
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              a = "loaded_messenger_ads_existing_post_cta_eligibility_typed",
              i =
                "XFBXMessengerAdsExistingPostCTASelectorEligibilityTypedController",
              l = t[0],
              s = this.getRelayId(l);
            this.updateRecords([s], a, i);
            var u = this.__getGQLParams(l),
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
