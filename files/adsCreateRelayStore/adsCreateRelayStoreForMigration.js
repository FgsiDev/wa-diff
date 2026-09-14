__d(
  "adsCreateRelayStoreForMigration",
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
        function n(n, o, a) {
          var l;
          return (
            (l = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (l.$RelaySelectorInternalStore$p_1 = r(
              "AdsManagerRelayEnvironment",
            )),
            (l.$RelaySelectorInternalStore$p_3 = new Map()),
            (l.$RelaySelectorInternalStore$p_4 = new Map()),
            (l.$RelaySelectorInternalStore$p_7 = l),
            (l.get = function (e) {
              var t = l.$RelaySelectorInternalStore$p_11(e),
                n = l.$RelaySelectorInternalStore$p_3.get(t);
              return n != null
                ? n
                : (l.$RelaySelectorInternalStore$p_3.set(
                    t,
                    r("LoadObject").loading({ creatorModuleID: i.id }),
                  ),
                  l.$RelaySelectorInternalStore$p_12(e),
                  r("LoadObject").loading({ creatorModuleID: i.id }));
            }),
            (l.fluxGetSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(
                l.$RelaySelectorInternalStore$p_7,
                function (e) {
                  return l.$RelaySelectorInternalStore$p_7.get(e);
                },
              );
            })),
            (l.$RelaySelectorInternalStore$p_2 = n),
            (l.$RelaySelectorInternalStore$p_5 =
              l.$RelaySelectorInternalStore$p_10()),
            (l.$RelaySelectorInternalStore$p_8 = o),
            (l.$RelaySelectorInternalStore$p_9 = a),
            l
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$RelaySelectorInternalStore$p_12 = function (t) {
            var e = this,
              n = this.$RelaySelectorInternalStore$p_11(t),
              a = this.$RelaySelectorInternalStore$p_8(t),
              l = o("relay-runtime").createOperationDescriptor(
                o("relay-runtime").getRequest(
                  this.$RelaySelectorInternalStore$p_2,
                ),
                a,
              ),
              u = l.request.identifier;
            (this.$RelaySelectorInternalStore$p_4.has(u) ||
              this.$RelaySelectorInternalStore$p_4.set(
                u,
                this.$RelaySelectorInternalStore$p_1.retain(l),
              ),
              o("RelayHooks")
                .fetchQuery(
                  this.$RelaySelectorInternalStore$p_1,
                  this.$RelaySelectorInternalStore$p_2,
                  a,
                  { fetchPolicy: "store-or-network" },
                )
                .subscribe({
                  error: function (o) {
                    s() &&
                      (r("FBLogger")("relay_ads_manager")
                        .catching(o)
                        .warn(
                          "adsCreateRelayStoreForMigration query %s failed",
                          e.$RelaySelectorInternalStore$p_2.params.name,
                        ),
                      e.$RelaySelectorInternalStore$p_13(n, o),
                      e.$RelaySelectorInternalStore$p_14());
                  },
                }),
              o("relay-runtime/experimental")
                .observeQuery(
                  this.$RelaySelectorInternalStore$p_1,
                  this.$RelaySelectorInternalStore$p_2,
                  a,
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
                        e.$RelaySelectorInternalStore$p_15(n, a.value);
                        break e;
                      }
                      if (
                        ((typeof t == "object" && t !== null) ||
                          typeof t == "function") &&
                        t.state === "error"
                      ) {
                        var l = t;
                        e.$RelaySelectorInternalStore$p_13(n, l.error);
                        break e;
                      }
                      {
                        (!s() || !e.$RelaySelectorInternalStore$p_16(n)) &&
                          e.$RelaySelectorInternalStore$p_3.set(
                            n,
                            r("LoadObject").loading({ creatorModuleID: i.id }),
                          );
                        break e;
                      }
                    }
                    e.$RelaySelectorInternalStore$p_14();
                  },
                  error: function (r) {
                    (e.$RelaySelectorInternalStore$p_13(n, r),
                      e.$RelaySelectorInternalStore$p_14());
                  },
                }));
          }),
          (a.$RelaySelectorInternalStore$p_14 = function () {
            var e = this;
            r("gkx")("8888")
              ? this.$RelaySelectorInternalStore$p_6 == null &&
                (this.$RelaySelectorInternalStore$p_6 = r("setTimeout")(
                  function () {
                    (e.$RelaySelectorInternalStore$p_17(),
                      e.$RelaySelectorInternalStore$p_18());
                  },
                  0,
                ))
              : this.$RelaySelectorInternalStore$p_18();
          }),
          (a.$RelaySelectorInternalStore$p_18 = function () {
            var t = this;
            (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
              t.$RelaySelectorInternalStore$p_19();
            });
          }),
          (a.$RelaySelectorInternalStore$p_19 = function () {
            this.$RelaySelectorInternalStore$p_5.dispatch({});
          }),
          (a.$RelaySelectorInternalStore$p_17 = function () {
            (r("clearTimeout")(this.$RelaySelectorInternalStore$p_6),
              (this.$RelaySelectorInternalStore$p_6 = null));
          }),
          (a.$RelaySelectorInternalStore$p_10 = function () {
            return o("Laminar").__createAction(
              function () {
                return [];
              },
              function () {
                return [];
              },
              "RelaySelectorStoreForMigration_" +
                this.$RelaySelectorInternalStore$p_2.params.name +
                "_" +
                u++,
            );
          }),
          (a.$RelaySelectorInternalStore$p_11 = function (t) {
            return JSON.stringify(t);
          }),
          (a.$RelaySelectorInternalStore$p_16 = function (t) {
            var e;
            return (
              ((e = this.$RelaySelectorInternalStore$p_3.get(t)) == null
                ? void 0
                : e.hasError()) === !0
            );
          }),
          (a.$RelaySelectorInternalStore$p_15 = function (t, n) {
            var e = this.$RelaySelectorInternalStore$p_9(n);
            this.$RelaySelectorInternalStore$p_3.set(
              t,
              r("LoadObject").withValue(e, { creatorModuleID: i.id }),
            );
          }),
          (a.$RelaySelectorInternalStore$p_13 = function (t, n) {
            this.$RelaySelectorInternalStore$p_3.set(
              t,
              r("LoadObject").withError(n, { creatorModuleID: i.id }),
            );
          }),
          (a.getDataUpdatedActionType = function () {
            return this.$RelaySelectorInternalStore$p_5.actionType;
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
    var d = function (t, n, r) {
        var e = new c(t, n, r);
        return e;
      },
      m = d;
    l.default = m;
  },
  98,
);
