__d(
  "BizAIStickySettingStoreSource",
  [
    "BizAIStickySettingStoreSourceFragment.graphql",
    "BizAIStickySettingStoreSourceLoadedQuery.graphql",
    "BizAIStickySettingStoreSourceServerQuery.graphql",
    "RelayHooks",
    "ReverseInteropStoreBase",
    "ReverseInteropStoreSourceBase",
    "adsCreateStoreThunkSelector",
    "err",
    "memoize",
    "promiseDone",
    "readClientFragment",
    "relay-runtime/store/RelayStoreUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      return { ad_account_id: e };
    }
    function d(e) {
      var t = "client:root:xfb_biz_ai_ad_account_sticky_setting_query",
        n = c(e),
        r = o("relay-runtime/store/RelayStoreUtils").formatStorageKey(t, n);
      return r;
    }
    var m =
        e !== void 0
          ? e
          : (e = n("BizAIStickySettingStoreSourceServerQuery.graphql")),
      p =
        s !== void 0
          ? s
          : (s = n("BizAIStickySettingStoreSourceLoadedQuery.graphql")),
      _ =
        u !== void 0
          ? u
          : (u = n("BizAIStickySettingStoreSourceFragment.graphql")),
      f = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getQuery = function () {
            return p;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              a = "loaded_biz_ai_sticky_data",
              i = "XFBBizAIAdgroupStickySettingData",
              l = t.map(d);
            this.updateRecords(l, a, i);
            var s = t[0],
              u = c(s),
              p = o("RelayHooks")
                .fetchQuery(this.__environment, m, u, {
                  fetchPolicy: "store-or-network",
                })
                .toPromise()
                .catch(function (o) {
                  e.handleFetchQueryError(
                    t,
                    n,
                    o instanceof Error ? o : r("err")(String(o)),
                  );
                });
            r("promiseDone")(p);
          }),
          (n.__serializeKey = function (t) {
            return JSON.stringify(c(t));
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (t) {
                var n = d(t),
                  o = c(t);
                return {
                  key: t,
                  value: r("readClientFragment")(
                    e.__environment,
                    m,
                    _,
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
      })(r("ReverseInteropStoreSourceBase")),
      g = "BizAIStickySettingStore.DATA_UPDATED.",
      h = { turn_off_prompts: null },
      y = (function (e) {
        function t() {
          var t,
            n = new f();
          return (
            (t = e.call(this, n, g) || this),
            (t.fluxGetSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(C, function (e) {
                return C.get(e);
              });
            })),
            t
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.get = function (t) {
            var e = this.getSingleValue(t, h);
            return e;
          }),
          t
        );
      })(r("ReverseInteropStoreBase"));
    y.__moduleID = i.id;
    var C = new y(),
      b = C;
    ((l.getRelayId = d), (l.bizAIStickySettingStore = b));
  },
  98,
);
