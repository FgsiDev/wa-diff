__d(
  "AdsPageInstagramAccountStore_RELAY",
  [
    "AdsLoadStateUtils_LEGACY",
    "AdsManagerBasePageSpecUtils",
    "AdsManagerRelayEnvironment",
    "AdsPageInstagramAccountStoreSource",
    "AdsPageInstagramAccountStoreSourceServerQuery.graphql",
    "AdsUEditorAdgroupSetBackedThreadsAccountAction",
    "Promise",
    "ReverseInteropStoreBase",
    "adsCreateStoreThunkSelector",
    "asyncToGeneratorRuntime",
    "createAndUsePBTA",
    "isTruthy",
    "memoize",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "AdsPageInstagramAccountStore.DATA_UPDATED",
      u = {
        id: null,
        id_v2: null,
        has_profile_pic: null,
        legacy_instagram_user_id: null,
        is_authorized_for_political: null,
        is_professional_account: null,
        is_private: null,
        is_business: !0,
        is_published: null,
        profile_picture_url: null,
        user_id: null,
        username: null,
        is_shopping_onsite_checkout_enabled: null,
        shopping_review_status: null,
        date_joined: null,
        eimu_id: null,
        has_create_ads_access: null,
        threads_user_id: null,
        threads_user_profile_pic: null,
        mini_shop_storefront: null,
      },
      c = {
        id: null,
        id_v2: null,
        has_profile_pic: null,
        legacy_instagram_user_id: null,
        is_authorized_for_political: null,
        is_professional_account: null,
        is_private: null,
        is_business: !0,
        is_published: null,
        profile_picture_url: null,
        user_id: null,
        username: null,
        is_shopping_onsite_checkout_enabled: null,
        shopping_review_status: null,
        eimu_id: null,
        has_create_ads_access: null,
      },
      d = {
        id: null,
        instagram_accounts: { data: [u] },
        loadState: "LOADED",
        page_backed_instagram_accounts: { data: [c] },
        page_backed_threads_accounts: {
          data: { threads_user_id: null, threads_user_profile_pic: null },
        },
      },
      m = (function (t) {
        function a() {
          var e,
            n = new (r("AdsPageInstagramAccountStoreSource"))();
          return (
            (e =
              t.call(this, n, s, {
                batchSize: o("AdsManagerBasePageSpecUtils")
                  .PAGES_QUERY_BIG_BATCH_SIZE,
              }) || this),
            (e.$AdsPageInstagramAccountStore_RELAY$p_1 = new Map()),
            (e.fluxGetSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(p, function (e) {
                return p.get(e);
              });
            })),
            (e.fluxGetAllSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(p, function (e) {
                return p.getAll(e);
              });
            })),
            (e.$AdsPageInstagramAccountStore_RELAY$p_2 = n),
            e
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var l = a.prototype;
        return (
          (l.refetchPageInstagramAccount = function (o) {
            var r = this,
              a = this.__reverseInteropHandler.getLoadedKeysAndFields().get(o),
              i = this.$AdsPageInstagramAccountStore_RELAY$p_1.get(o),
              l = a != null ? Array.from(a) : i == null ? void 0 : i.fields;
            if (l == null)
              return (e || (e = n("Promise"))).resolve({
                status: "not_started",
              });
            var s =
                this.$AdsPageInstagramAccountStore_RELAY$p_2.registerPageRefetchOutcomeWaiter(
                  o,
                ),
              u = s.generation,
              c = s.promise;
            this.$AdsPageInstagramAccountStore_RELAY$p_1.set(o, {
              fields: l,
              generation: u,
            });
            try {
              a != null
                ? t.prototype.refetchKeys.call(this, [o])
                : (this.$AdsPageInstagramAccountStore_RELAY$p_2.refetch([o]),
                  this.$AdsPageInstagramAccountStore_RELAY$p_2.createLoadingRecordsInRelayStore(
                    [o],
                  ),
                  this.$AdsPageInstagramAccountStore_RELAY$p_2.load([o], l, {
                    isRefetch: !0,
                  }));
            } catch (e) {
              (a != null &&
                this.__reverseInteropHandler.addKeysAndFieldsToLoadedKeysAndFields(
                  [o],
                  Array.from(a),
                ),
                this.$AdsPageInstagramAccountStore_RELAY$p_2.failPageRefetchOutcomeWaiter(
                  o,
                  u,
                ));
            }
            return c.then(function (e) {
              var t;
              return (
                ((t = r.$AdsPageInstagramAccountStore_RELAY$p_1.get(o)) == null
                  ? void 0
                  : t.generation) === u &&
                  r.$AdsPageInstagramAccountStore_RELAY$p_1.delete(o),
                e
              );
            });
          }),
          (l.get = function (t) {
            var e = this.getSingleValue(t, d);
            return o("AdsLoadStateUtils_LEGACY").fromLoadObject(e);
          }),
          (l.getAsync = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this.getSingleValue(e, d);
                if (t.isDone() && t.hasValueWithoutError()) {
                  var n = t.getValueEnforcing();
                  if (n != null) return n;
                }
                var a = { ids: [e], skip_ibta: !1 };
                yield o("relay-runtime")
                  .fetchQuery(
                    r("AdsManagerRelayEnvironment"),
                    r("AdsPageInstagramAccountStoreSourceServerQuery.graphql"),
                    a,
                  )
                  .toPromise();
                var i = this.getSingleValue(e, d);
                if (i.isDone() && i.hasValueWithoutError()) {
                  var l = i.getValueEnforcing();
                  if (l != null) return l;
                }
                return null;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (l.getAll = function (t) {
            var e = this.getAllImpl(t),
              n = new Map();
            return (
              e.forEach(function (e, t) {
                n.set(t, o("AdsLoadStateUtils_LEGACY").fromLoadObject(e));
              }),
              n
            );
          }),
          (l.createAndUsePBTAActionDispatch = function (t, n, a) {
            var e = this.getSingleValue(t, d);
            if (
              !(!e.isDone() || e.isUpdating()) &&
              e.isDone() &&
              e.hasValueWithoutError()
            ) {
              var l,
                s =
                  (l = e.getValue()) == null ||
                  (l = l.page_backed_threads_accounts) == null
                    ? void 0
                    : l.data.threads_user_id;
              if (r("isTruthy")(s)) {
                r("AdsUEditorAdgroupSetBackedThreadsAccountAction").dispatch(
                  {
                    hostID: n,
                    threadsUserID: s,
                    adgroupIDs: a,
                    instagramAccountV2ID: "",
                  },
                  {
                    line: "259",
                    module: "AdsPageInstagramAccountStore_RELAY.js",
                    moduleID: i.id,
                  },
                );
                return;
              }
              (this.setCachedValue(t, e.updating(), d),
                o("createAndUsePBTA").createAndUsePBTA(t, n, a));
            }
          }),
          a
        );
      })(r("ReverseInteropStoreBase"));
    m.__moduleID = i.id;
    var p = new m(),
      _ = p;
    l.default = _;
  },
  98,
);
