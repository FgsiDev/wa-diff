__d(
  "AdsInstagramAccountStoreUtils",
  [
    "AdsBusinessInstagramAccountStore",
    "AdsLoadStateUtils_LEGACY",
    "AdsPageInstagramAccountStore_RELAY",
    "AdsPageStore",
    "Promise",
    "adsStorePromiseAsyncGetForSyncStore",
    "asyncToGeneratorRuntime",
    "getByPath",
    "isEmpty",
    "isTruthy",
    "pickDefaultInstagramAccount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (t, n) {
        return r("AdsBusinessInstagramAccountStore").get({
          legacy_account_id: t,
          business_id: n,
        });
      };
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("adsStorePromiseAsyncGetForSyncStore")(
            r("AdsBusinessInstagramAccountStore"),
            function () {
              return o(
                "AdsLoadStateUtils_LEGACY",
              ).fromLoadObjectTreatEmptyAsLoading(u(e));
            },
          );
          return r("getByPath")(t, ["data"]);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, o, a) {
          if (!o || (s || (s = r("isEmpty")))(Object.values(a)))
            return (e || (e = n("Promise"))).resolve(Object.keys(a));
          var i = yield c(t),
            l = new Set(
              i.map(function (e) {
                return e.id;
              }),
            );
          return Object.entries(a)
            .filter(function (e) {
              var t = e[0],
                n = e[1];
              return !l.has(n);
            })
            .map(function (e) {
              var t = e[0],
                n = e[1];
              return t;
            });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return r("adsStorePromiseAsyncGetForSyncStore")(
            r("AdsPageStore"),
            function () {
              return r("AdsPageStore").get(e);
            },
          ).then(function (e) {
            return e.access_token;
          });
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return yield r("adsStorePromiseAsyncGetForSyncStore")(
            r("AdsPageInstagramAccountStore_RELAY"),
            function () {
              return r("AdsPageInstagramAccountStore_RELAY").getAll(e);
            },
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, o, a, i) {
            var l = yield (e || (e = n("Promise"))).all([m(t, o, a), _(i)]),
              u = l[0],
              c = l[1];
            if ((s || (s = r("isEmpty")))(u))
              return {
                instagramAccountID: void 0,
                adgroupIDs: [],
                pageAccessToken: c,
              };
            var d = yield b(i, c);
            return d
              ? {
                  adgroupIDs: u,
                  instagramAccountID: d.instagramAccountID,
                  pageAccessToken: c,
                }
              : {
                  adgroupIDs: [],
                  instagramAccountID: void 0,
                  pageAccessToken: c,
                };
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, o) {
          var a = yield (e || (e = n("Promise"))).all([
              g([t]),
              o != null ? o : _(t),
            ]),
            i = a[0],
            l = a[1],
            s = i.get(t),
            u = r("pickDefaultInstagramAccount")(s);
          return {
            hasConnectedInstagramAccount: u.hasConnectedInstagramAccount,
            instagramAccountID: u.id,
            instagramAccountV2ID: u.id_v2,
            pageAccessToken: l,
            threadsUserID: u.threads_user_id,
          };
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return r("adsStorePromiseAsyncGetForSyncStore")(
            r("AdsPageInstagramAccountStore_RELAY"),
            function () {
              return r("AdsPageInstagramAccountStore_RELAY").getAll(e);
            },
          ).then(function (e) {
            var t = new Map();
            return (
              e.forEach(function (e, n) {
                var o,
                  a = r("getByPath")(
                    e,
                    ["page_backed_instagram_accounts", "data"],
                    [],
                  ),
                  i = (o = a[0]) != null ? o : null;
                n && i && t.set(n, i);
              }),
              t
            );
          });
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return r("adsStorePromiseAsyncGetForSyncStore")(
            r("AdsPageInstagramAccountStore_RELAY"),
            function () {
              return r("AdsPageInstagramAccountStore_RELAY").getAll(e);
            },
          ).then(function (e) {
            var t = new Map();
            return (
              e.forEach(function (e, n) {
                var o = r("getByPath")(
                  e,
                  ["page_backed_threads_accounts", "data"],
                  null,
                );
                n && o && t.set(n, o);
              }),
              t
            );
          });
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n, r) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, o) {
            if (t && r("isTruthy")(o)) {
              var a = yield c(e);
              if (
                a.some(function (e) {
                  return e.id === o;
                })
              )
                return { needsInstagramAccount: !1 };
            }
            var i = yield b(n),
              l = i.instagramAccountID,
              s = i.instagramAccountV2ID,
              u = i.pageAccessToken;
            return r("isTruthy")(l)
              ? {
                  instagramAccountID: l,
                  instagramAccountV2ID: s,
                  needsInstagramAccount: !0,
                  pageAccessToken: u,
                }
              : {
                  instagramAccountID: void 0,
                  instagramAccountV2ID: void 0,
                  needsInstagramAccount: !0,
                  pageAccessToken: u,
                };
          },
        )),
        I.apply(this, arguments)
      );
    }
    var T = {
        genDefaultInstagramAccountForPageAndAdgroups: y,
        genLoadedPageBackedInstagramAccountForPages: S,
        genDefaultInstagramAccountForReachFrequency: k,
        pickDefaultInstagramAccount: r("pickDefaultInstagramAccount"),
        genDefaultInstagramAccountForPage: b,
        genAdgroupsThatNeedNewInstagramAccount: m,
        genLoadedPageBackedThreadsAccountForPages: L,
        getAdsBusinessInstagramAccount: u,
      },
      D = T;
    l.default = D;
  },
  98,
);
