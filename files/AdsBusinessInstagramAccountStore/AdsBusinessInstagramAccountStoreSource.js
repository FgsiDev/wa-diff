__d(
  "AdsBusinessInstagramAccountStoreSource",
  [
    "AdsBusinessInstagramAccountStoreSourceServerLoadedQuery.graphql",
    "AdsBusinessInstagramAccountStoreSourceServerQuery.graphql",
    "AdsInstagramBackedThreadsAccountDataManager",
    "AdsLoadState_LEGACY",
    "IGShoppingReviewStatus",
    "RelayHooks",
    "ReverseInteropStoreSourceBase",
    "TypeCoercionUtils",
    "getJSEnumSafe",
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
              "AdsBusinessInstagramAccountStoreSourceServerQuery.graphql",
            )),
      c =
        s !== void 0
          ? s
          : (s = n(
              "AdsBusinessInstagramAccountStoreSourceServerLoadedQuery.graphql",
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
              skip_ibta: !1,
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
                  var n,
                    o,
                    a =
                      t == null || (n = t.ad_account) == null
                        ? void 0
                        : n.instagram_accounts.map(function (e) {
                            var t, n;
                            return [
                              {
                                threads_user_id:
                                  (t = e.instagram_backed_threads_user) == null
                                    ? void 0
                                    : t.threads_user_id,
                                threads_user_profile_pic:
                                  (n = e.instagram_backed_threads_user) == null
                                    ? void 0
                                    : n.threads_user_profile_pic,
                              },
                            ];
                          }),
                    i = e.$AdsBusinessInstagramAccountStoreSource$p_1(
                      t == null || (o = t.ad_account) == null
                        ? void 0
                        : o.instagram_accounts,
                    ).data,
                    l =
                      i == null
                        ? void 0
                        : i.map(function (e, t) {
                            return r(
                              "AdsInstagramBackedThreadsAccountDataManager",
                            ).mergeInstagramAccountDataWithIBTA(
                              e,
                              a == null ? void 0 : a[t],
                            );
                          });
                  return { data: l };
                })
                .catch(function (r) {
                  e.handleFetchQueryError(t, n, r);
                });
            r("promiseDone")(l, function () {
              e.notifyDataChange();
            });
          }),
          (n.$AdsBusinessInstagramAccountStoreSource$p_1 = function (t) {
            if (t == null) return { data: [] };
            var e = t.map(function (e) {
              var t, n, a, l, s, u, c;
              return {
                eimu_id: (c = o("TypeCoercionUtils")).coerceOptionalValue(
                  e.eimu_id,
                ),
                has_create_ads_access: c.coerceOptionalValue(
                  e.has_create_ads_access,
                ),
                has_profile_picture: c.coerceOptionalValue(e.has_profile_pic),
                id: c.coerceMaybeFBIDtoZeroOrFBID(e.legacy_instagram_user_id),
                id_v2: c.coerceOptionalValue(e.id),
                is_authorized_for_political_ads: c.coerceOptionalValue(
                  e.is_authorized_for_political,
                ),
                is_business: e.instagram_account_type === "BUSINESS",
                is_connected_to_ad_account:
                  c.coerceOptionalValue(e.is_connected_to_ad_account) === !0,
                is_ctd_leads_targeting_eligible: c.coerceOptionalValue(
                  e.is_ctd_leads_targeting_eligible,
                ),
                is_ctd_purchase_targeting_eligible: c.coerceOptionalValue(
                  e.is_ctd_purchase_targeting_eligible,
                ),
                is_private: c.coerceNonMaybeValue(
                  e.is_private,
                  "instagram_accounts[].is_private",
                  i.id,
                ),
                is_professional: c.coerceOptionalValue(
                  e.is_professional_account,
                ),
                is_published: c.coerceNonMaybeValue(
                  e.is_published,
                  "instagram_accounts[].is_published",
                  i.id,
                ),
                is_shopless_account_with_dynamic_product_tags_enabled:
                  (t = o("TypeCoercionUtils").coerceOptionalValue(
                    e.is_shopless_ig_account,
                  )) != null
                    ? t
                    : !0,
                is_shopless_account_with_static_product_tags_enabled:
                  (n = o("TypeCoercionUtils").coerceOptionalValue(
                    e.is_shopless_ig_account,
                  )) != null
                    ? n
                    : !0,
                is_shopping_onsite_checkout_enabled: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(e.is_shopping_onsite_checkout_enabled),
                loadState: o("TypeCoercionUtils").coerceNonMaybeValue(
                  r("getJSEnumSafe")(r("AdsLoadState_LEGACY"), "LOADED"),
                  "instagram_accounts[].loadState",
                  i.id,
                ),
                profile_pic: o("TypeCoercionUtils").coerceMaybeStringToIXValue(
                  e.profile_picture_url,
                ),
                shopping_review_status: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  r("getJSEnumSafe")(
                    r("IGShoppingReviewStatus"),
                    e.shopping_review_status,
                  ),
                ),
                threads_profile_pic:
                  ((a = e.instagram_connected_threads_user) == null
                    ? void 0
                    : a.threads_user_profile_pic) != null
                    ? o("TypeCoercionUtils").coerceMaybeStringToIXValue(
                        (l = e.instagram_connected_threads_user) == null
                          ? void 0
                          : l.threads_user_profile_pic,
                      )
                    : o("TypeCoercionUtils").coerceOptionalValue(
                        (s = e.instagram_connected_threads_user) == null
                          ? void 0
                          : s.threads_user_profile_pic,
                      ),
                threads_user_id: o("TypeCoercionUtils").coerceOptionalValue(
                  (u = e.instagram_connected_threads_user) == null
                    ? void 0
                    : u.threads_user_id,
                ),
                username: o("TypeCoercionUtils").coerceMaybeStringToFBT(
                  e.username,
                ),
              };
            });
            return { data: e };
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (t) {
                var n = r("readQueryToLoadObject")(
                  e.__environment,
                  u,
                  e.__getGQLParams(t),
                  function (t) {
                    var n,
                      o,
                      a =
                        t == null || (n = t.ad_account) == null
                          ? void 0
                          : n.instagram_accounts.map(function (e) {
                              var t, n;
                              return [
                                {
                                  threads_user_id:
                                    (t = e.instagram_backed_threads_user) ==
                                    null
                                      ? void 0
                                      : t.threads_user_id,
                                  threads_user_profile_pic:
                                    (n = e.instagram_backed_threads_user) ==
                                    null
                                      ? void 0
                                      : n.threads_user_profile_pic,
                                },
                              ];
                            }),
                      i = e.$AdsBusinessInstagramAccountStoreSource$p_1(
                        t == null || (o = t.ad_account) == null
                          ? void 0
                          : o.instagram_accounts,
                      ).data,
                      l =
                        i == null
                          ? void 0
                          : i.map(function (e, t) {
                              return r(
                                "AdsInstagramBackedThreadsAccountDataManager",
                              ).mergeInstagramAccountDataWithIBTA(
                                e,
                                a == null ? void 0 : a[t],
                              );
                            });
                    return { data: l };
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
