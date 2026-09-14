__d(
  "AdsInstagramUsernameDataManager",
  [
    "AdsBaseDataManager",
    "AdsGraphAPI",
    "AdsInstagramAccountUsernameLoadErrorDataAction",
    "AdsInstagramAccountUsernameLoadedDataAction",
    "AdsInstagramBackedThreadsAccountDataManager",
    "AdsInstagramUsernameDataManagerQuery.graphql",
    "AdsLoadState_LEGACY",
    "AdsManagerRelayEnvironment",
    "IGShoppingReviewStatus",
    "Promise",
    "RelayHooks",
    "TypeCoercionUtils",
    "err",
    "getJSEnumSafe",
    "promiseDone",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("AdsInstagramUsernameDataManagerQuery.graphql")),
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.loadAll = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.load(t);
            });
          }),
          (a.loadAllForAdgroup = function (t, n) {
            var e = this;
            t.forEach(function (t) {
              return e.loadForAdgroup(t, n);
            });
          }),
          (a.load = function (t) {
            this.loadForAdgroup(t);
          }),
          (a.buildInstagramUsernameRequest = function (t, n) {
            return o("AdsGraphAPI")
              .get(i.id)
              .object("instagram_object", t)
              .batched()
              .declareOnly()
              .get({
                adgroup_id: n || void 0,
                fields: [
                  "id",
                  "id_v2",
                  "is_authorized_for_political_ads",
                  "is_private",
                  "is_professional",
                  "is_published",
                  "profile_pic",
                  "username",
                  "user_id",
                  "shopping_review_status",
                  "is_shopping_onsite_checkout_enabled",
                  "is_shopless_account_with_static_product_tags_enabled",
                  "is_shopless_account_with_dynamic_product_tags_enabled",
                  "eimu_id",
                  "has_create_ads_access",
                  "name",
                  "threads_user_id",
                  "threads_profile_pic",
                ],
              });
          }),
          (a.loadForAdgroup = function (t, o) {
            var e = this;
            r("promiseDone")(
              this.buildInstagramUsernameRequest(t, o)
                .go()
                .then(function (e) {
                  return (s || (s = n("Promise")))
                    .resolve(
                      r("AdsInstagramBackedThreadsAccountDataManager").loadFor(
                        e.id_v2,
                        o,
                      ),
                    )
                    .then(function (t) {
                      return r(
                        "AdsInstagramBackedThreadsAccountDataManager",
                      ).mergeInstagramAccountDataWithIBTA(e, t);
                    });
                }),
              function (n) {
                return e.__handleSuccess(["load"], t, null, n);
              },
              function (n) {
                return e.__handleError(["load"], t, null, n);
              },
            );
          }),
          (a.loadAllByV2 = function (t, n) {
            var e = this;
            t.forEach(function (t) {
              return e.loadByV2(t, n);
            });
          }),
          (a.loadByV2 = function (t, n) {
            var e = this,
              a = !1,
              i = t.toString(),
              l = {
                id: i,
                skip_ibta: a,
                webp_profile_pic: r("qex")._("3147") === !0,
              };
            r("promiseDone")(
              o("RelayHooks")
                .fetchQuery(r("AdsManagerRelayEnvironment"), u, l, {
                  fetchPolicy: "store-or-network",
                })
                .toPromise()
                .then(function (t) {
                  var n = t == null ? void 0 : t.fetch__InstagramUserV2;
                  if (n == null) throw r("err")("IG user not found");
                  return e.$AdsInstagramUsernameDataManager$p_1(n);
                }),
              function (t) {
                return e.__handleSuccess(["load"], i, null, t);
              },
              function (t) {
                return e.__handleError(["load"], i, null, t);
              },
            );
          }),
          (a.$AdsInstagramUsernameDataManager$p_1 = function (t) {
            var e,
              n,
              a,
              l,
              s,
              u,
              c,
              d,
              m,
              p,
              _ =
                ((e = t.instagram_connected_threads_user) == null
                  ? void 0
                  : e.threads_user_id) != null,
              f =
                (n =
                  (a = t.instagram_connected_threads_user) == null
                    ? void 0
                    : a.threads_user_id) != null
                  ? n
                  : (l = t.instagram_backed_threads_user) == null
                    ? void 0
                    : l.threads_user_id,
              g =
                (s =
                  (u = t.instagram_connected_threads_user) == null
                    ? void 0
                    : u.threads_user_profile_pic) != null
                  ? s
                  : (c = t.instagram_backed_threads_user) == null
                    ? void 0
                    : c.threads_user_profile_pic;
            return {
              date_joined: (d = t.date_joined) != null ? d : void 0,
              eimu_id: o("TypeCoercionUtils").coerceOptionalValue(t.eimu_id),
              has_create_ads_access: o("TypeCoercionUtils").coerceOptionalValue(
                t.has_create_ads_access,
              ),
              has_profile_picture: o("TypeCoercionUtils").coerceOptionalValue(
                t.has_profile_pic,
              ),
              id: o("TypeCoercionUtils").coerceMaybeFBIDtoZeroOrFBID(
                t.legacy_instagram_user_id,
              ),
              id_v2: o("TypeCoercionUtils").coerceOptionalValue(t.id),
              is_authorized_for_political_ads: o(
                "TypeCoercionUtils",
              ).coerceOptionalValue(t.is_authorized_for_political),
              is_business: t.instagram_account_type === "BUSINESS",
              is_private: o("TypeCoercionUtils").coerceNonMaybeValue(
                t.is_private,
                "data.is_private",
                i.id,
              ),
              is_professional: o("TypeCoercionUtils").coerceOptionalValue(
                t.is_professional_account,
              ),
              is_published: o("TypeCoercionUtils").coerceNonMaybeValue(
                t.is_published,
                "data.is_published",
                i.id,
              ),
              is_shopless_ig_account: o(
                "TypeCoercionUtils",
              ).coerceOptionalValue(t.is_shopless_ig_account),
              is_shopping_onsite_checkout_enabled: o(
                "TypeCoercionUtils",
              ).coerceOptionalValue(t.is_shopping_onsite_checkout_enabled),
              is_text_post_app_onboarded: _,
              loadState: o("TypeCoercionUtils").coerceNonMaybeValue(
                r("getJSEnumSafe")(r("AdsLoadState_LEGACY"), "LOADED"),
                "getJSEnumSafe(AdsLoadStateType, 'LOADED')",
                i.id,
              ),
              name: o("TypeCoercionUtils").coerceMaybeStringToFBT(t.full_name),
              profile_pic: o("TypeCoercionUtils").coerceOptionalValue(
                (m = (p = t.profile_picture) == null ? void 0 : p.uri) != null
                  ? m
                  : t.profile_picture_url,
              ),
              shopping_review_status: o(
                "TypeCoercionUtils",
              ).coerceOptionalValue(
                r("getJSEnumSafe")(
                  r("IGShoppingReviewStatus"),
                  t.shopping_review_status,
                ),
              ),
              threads_profile_pic: _
                ? o("TypeCoercionUtils").coerceOptionalValue(g)
                : void 0,
              threads_user_id: o("TypeCoercionUtils").coerceOptionalValue(f),
              user_id: o("TypeCoercionUtils").coerceOptionalValue(
                t.instagram_user_id,
              ),
              username: o("TypeCoercionUtils").coerceMaybeStringToFBT(
                t.username,
              ),
            };
          }),
          (a.__onBatchLoaded = function (t) {
            r("AdsInstagramAccountUsernameLoadedDataAction").dispatch(
              { specs: t },
              {
                line: "274",
                module: "AdsInstagramUsernameDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoadError = function (t) {
            r("AdsInstagramAccountUsernameLoadErrorDataAction").dispatch(
              { errors: t },
              {
                line: "278",
                module: "AdsInstagramUsernameDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          t
        );
      })(r("AdsBaseDataManager")),
      d = new c();
    l.default = d;
  },
  98,
);
