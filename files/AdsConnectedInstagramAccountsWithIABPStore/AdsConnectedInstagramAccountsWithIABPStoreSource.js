__d(
  "AdsConnectedInstagramAccountsWithIABPStoreSource",
  [
    "AdsConnectedInstagramAccountsWithIABPStoreSourceServerLoadedQuery.graphql",
    "AdsConnectedInstagramAccountsWithIABPStoreSourceServerQuery.graphql",
    "RelayHooks",
    "ReverseInteropStoreSourceBase",
    "TypeCoercionUtils",
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
          : (e = n(
              "AdsConnectedInstagramAccountsWithIABPStoreSourceServerQuery.graphql",
            )),
      c =
        s !== void 0
          ? s
          : (s = n(
              "AdsConnectedInstagramAccountsWithIABPStoreSourceServerLoadedQuery.graphql",
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
            return {
              business_id: t.business_id,
              legacy_account_id: t.legacy_account_id,
              limit: t.limit,
            };
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              a = t[0];
            r("updateLoadedAdAccountsClientSchema")(
              this.__environment,
              JSON.stringify(a),
            );
            var i = this.__getGQLParams(a),
              l = o("RelayHooks")
                .fetchQuery(this.__environment, u, i)
                .toPromise()
                .then(function (t) {
                  var n;
                  return e.$AdsConnectedInstagramAccountsWithIABPStoreSource$p_1(
                    t == null || (n = t.ad_account) == null
                      ? void 0
                      : n.connected_instagram_accounts_with_iabp,
                  );
                })
                .catch(function (r) {
                  return e.handleFetchQueryError(t, n, r);
                });
            r("promiseDone")(l, function () {
              e.notifyDataChange();
            });
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (t) {
                var n = r("readQueryToLoadObject")(
                  e.__environment,
                  u,
                  e.__getGQLParams(t),
                  function (t) {
                    var n;
                    return e.$AdsConnectedInstagramAccountsWithIABPStoreSource$p_1(
                      t == null || (n = t.ad_account) == null
                        ? void 0
                        : n.connected_instagram_accounts_with_iabp,
                    );
                  },
                );
                return { key: t, value: n };
              });
            return o;
          }),
          (n.$AdsConnectedInstagramAccountsWithIABPStoreSource$p_1 = function (
            t,
          ) {
            var e;
            return {
              data:
                (e =
                  t == null
                    ? void 0
                    : t.map(function (e) {
                        var t, n, r, a, l, s, u, c, d, m;
                        return {
                          eimu_id: o("TypeCoercionUtils").coerceOptionalValue(
                            (t = e.ig_user) == null ? void 0 : t.eimu_id,
                          ),
                          has_profile_picture: o(
                            "TypeCoercionUtils",
                          ).coerceOptionalValue(
                            (n = e.ig_user) == null
                              ? void 0
                              : n.has_profile_pic,
                          ),
                          iabp_id: o("TypeCoercionUtils").coerceOptionalValue(
                            e.iabp_id,
                          ),
                          id: o("TypeCoercionUtils").coerceNonMaybeValue(
                            (r = e.ig_user) == null
                              ? void 0
                              : r.legacy_instagram_user_id,
                            "ig_account.ig_user?.legacy_instagram_user_id",
                            i.id,
                          ),
                          id_v2: o("TypeCoercionUtils").coerceOptionalValue(
                            (a = e.ig_user) == null ? void 0 : a.id,
                          ),
                          is_authorized_for_political_ads: o(
                            "TypeCoercionUtils",
                          ).coerceOptionalValue(
                            (l = e.ig_user) == null
                              ? void 0
                              : l.is_authorized_for_political,
                          ),
                          is_private: o(
                            "TypeCoercionUtils",
                          ).coerceNonMaybeValue(
                            (s = e.ig_user) == null ? void 0 : s.is_private,
                            "ig_account.ig_user?.is_private",
                            i.id,
                          ),
                          is_professional: o(
                            "TypeCoercionUtils",
                          ).coerceOptionalValue(
                            (u = e.ig_user) == null
                              ? void 0
                              : u.is_professional_account,
                          ),
                          is_published: o(
                            "TypeCoercionUtils",
                          ).coerceNonMaybeValue(
                            (c = e.ig_user) == null ? void 0 : c.is_published,
                            "ig_account.ig_user?.is_published",
                            i.id,
                          ),
                          profile_pic: o(
                            "TypeCoercionUtils",
                          ).coerceNonMaybeValue(
                            (d = e.ig_user) == null
                              ? void 0
                              : d.profile_picture_url,
                            "ig_account.ig_user?.profile_picture_url",
                            i.id,
                          ),
                          username: o("TypeCoercionUtils").coerceNonMaybeValue(
                            (m = e.ig_user) == null ? void 0 : m.username,
                            "ig_account.ig_user?.username",
                            i.id,
                          ),
                        };
                      })) != null
                  ? e
                  : [],
            };
          }),
          t
        );
      })(r("ReverseInteropStoreSourceBase"));
    l.default = d;
  },
  98,
);
