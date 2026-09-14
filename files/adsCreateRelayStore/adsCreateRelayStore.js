__d(
  "adsCreateRelayStore",
  [
    "AdsDataAtom",
    "AdsManagerRelayEnvironment",
    "FBLogger",
    "FluxReduceStore",
    "Laminar",
    "LoadObject",
    "RelayHooks",
    "adsCreateStoreThunkSelector",
    "clearTimeout",
    "gkx",
    "memoize",
    "memoizeByReference",
    "relay-runtime",
    "relay-runtime/experimental",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return r("gkx")("24609");
    }
    var u = 0,
      c = (function (t) {
        function n(n) {
          var o;
          return (
            (o = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (o.$RelaySelectorInternalStore$p_1 = r(
              "AdsManagerRelayEnvironment",
            )),
            (o.$RelaySelectorInternalStore$p_3 = new Map()),
            (o.$RelaySelectorInternalStore$p_4 = new Map()),
            (o.$RelaySelectorInternalStore$p_7 = o),
            (o.get = function (e) {
              var t = o.$RelaySelectorInternalStore$p_9(e),
                n = o.$RelaySelectorInternalStore$p_3.get(t);
              return n != null
                ? n
                : (o.$RelaySelectorInternalStore$p_3.set(
                    t,
                    r("LoadObject").loading({ creatorModuleID: i.id }),
                  ),
                  o.$RelaySelectorInternalStore$p_10(e),
                  r("LoadObject").loading({ creatorModuleID: i.id }));
            }),
            (o.fluxGetSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(
                o.$RelaySelectorInternalStore$p_7,
                function (e) {
                  return o.$RelaySelectorInternalStore$p_7.get(e);
                },
              );
            })),
            (o.$RelaySelectorInternalStore$p_2 = n),
            (o.$RelaySelectorInternalStore$p_5 =
              o.$RelaySelectorInternalStore$p_8()),
            o
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$RelaySelectorInternalStore$p_10 = function (t) {
            var e = this,
              n = this.$RelaySelectorInternalStore$p_9(t),
              a = o("relay-runtime").createOperationDescriptor(
                o("relay-runtime").getRequest(
                  this.$RelaySelectorInternalStore$p_2,
                ),
                t,
              ),
              l = a.request.identifier;
            (this.$RelaySelectorInternalStore$p_4.has(l) ||
              this.$RelaySelectorInternalStore$p_4.set(
                l,
                this.$RelaySelectorInternalStore$p_1.retain(a),
              ),
              o("RelayHooks")
                .fetchQuery(
                  this.$RelaySelectorInternalStore$p_1,
                  this.$RelaySelectorInternalStore$p_2,
                  t,
                  { fetchPolicy: "store-or-network" },
                )
                .subscribe({
                  error: function (o) {
                    s() &&
                      (r("FBLogger")("relay_ads_manager")
                        .catching(o)
                        .warn(
                          "adsCreateRelayStore query %s failed",
                          e.$RelaySelectorInternalStore$p_2.params.name,
                        ),
                      e.$RelaySelectorInternalStore$p_11(n, o),
                      e.$RelaySelectorInternalStore$p_12());
                  },
                }),
              o("relay-runtime/experimental")
                .observeQuery(
                  this.$RelaySelectorInternalStore$p_1,
                  this.$RelaySelectorInternalStore$p_2,
                  t,
                )
                .subscribe({
                  next: function (o) {
                    e: {
                      var t = o;
                      if (
                        ((typeof t == "object" && t !== null) ||
                          typeof t == "function") &&
                        t.state === "ok"
                      ) {
                        var a = t;
                        e.$RelaySelectorInternalStore$p_13(n, a.value);
                        break e;
                      }
                      if (
                        ((typeof t == "object" && t !== null) ||
                          typeof t == "function") &&
                        t.state === "error"
                      ) {
                        var l = t;
                        e.$RelaySelectorInternalStore$p_11(n, l.error);
                        break e;
                      }
                      {
                        (!s() || !e.$RelaySelectorInternalStore$p_14(n)) &&
                          e.$RelaySelectorInternalStore$p_3.set(
                            n,
                            r("LoadObject").loading({ creatorModuleID: i.id }),
                          );
                        break e;
                      }
                    }
                    e.$RelaySelectorInternalStore$p_12();
                  },
                  error: function (r) {
                    (e.$RelaySelectorInternalStore$p_11(n, r),
                      e.$RelaySelectorInternalStore$p_12());
                  },
                }));
          }),
          (a.$RelaySelectorInternalStore$p_12 = function () {
            var e = this;
            r("gkx")("8888")
              ? this.$RelaySelectorInternalStore$p_6 == null &&
                (this.$RelaySelectorInternalStore$p_6 = r("setTimeout")(
                  function () {
                    (e.$RelaySelectorInternalStore$p_15(),
                      e.$RelaySelectorInternalStore$p_16());
                  },
                  0,
                ))
              : this.$RelaySelectorInternalStore$p_16();
          }),
          (a.$RelaySelectorInternalStore$p_16 = function () {
            var t = this;
            (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
              t.$RelaySelectorInternalStore$p_17();
            });
          }),
          (a.$RelaySelectorInternalStore$p_17 = function () {
            this.$RelaySelectorInternalStore$p_5.dispatch({});
          }),
          (a.$RelaySelectorInternalStore$p_15 = function () {
            (r("clearTimeout")(this.$RelaySelectorInternalStore$p_6),
              (this.$RelaySelectorInternalStore$p_6 = null));
          }),
          (a.$RelaySelectorInternalStore$p_8 = function () {
            return o("Laminar").__createAction(
              function () {
                return [];
              },
              function () {
                return [];
              },
              "RelaySelectorStore_" +
                this.$RelaySelectorInternalStore$p_2.params.name +
                "_" +
                u++,
            );
          }),
          (a.$RelaySelectorInternalStore$p_9 = function (t) {
            return JSON.stringify(t);
          }),
          (a.$RelaySelectorInternalStore$p_14 = function (t) {
            var e;
            return (
              ((e = this.$RelaySelectorInternalStore$p_3.get(t)) == null
                ? void 0
                : e.hasError()) === !0
            );
          }),
          (a.$RelaySelectorInternalStore$p_13 = function (t, n) {
            this.$RelaySelectorInternalStore$p_3.set(
              t,
              r("LoadObject").withValue(n, { creatorModuleID: i.id }),
            );
          }),
          (a.$RelaySelectorInternalStore$p_11 = function (t, n) {
            this.$RelaySelectorInternalStore$p_3.set(
              t,
              r("LoadObject").withError(n, { creatorModuleID: i.id }),
            );
          }),
          (a.getInitialState = function () {
            return {};
          }),
          (a.reduce = function (t, n) {
            var e;
            return ((e = n.action) == null ? void 0 : e.type) ===
              this.$RelaySelectorInternalStore$p_5.actionType
              ? {}
              : t;
          }),
          n
        );
      })(r("FluxReduceStore"));
    c.__moduleID = i.id;
    var d = function (t) {
        var e = new c(t);
        return e;
      },
      m = r("memoizeByReference")(d);
    l.default = m;
  },
  98,
);
