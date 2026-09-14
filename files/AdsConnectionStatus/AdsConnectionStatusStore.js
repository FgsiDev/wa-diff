__d(
  "AdsConnectionStatusStore",
  [
    "fbt",
    "AdsConnectionStatusDataManager",
    "AdsConnectionStatusGraphErrorActionFlux",
    "AdsConnectionStatusGraphRetryScheduledAction",
    "AdsConnectionStatusGraphRetryScheduledActionFlux",
    "AdsConnectionStatusGraphSuccessAction",
    "AdsConnectionStatusGraphSuccessActionFlux",
    "AdsConnectionStatusNetworkConnectedAction",
    "AdsConnectionStatusNetworkConnectedActionFlux",
    "AdsConnectionStatusNetworkDisconnectedAction",
    "AdsConnectionStatusNetworkDisconnectedActionFlux",
    "AdsDataAtom",
    "ApiClient",
    "DateConsts",
    "FluxStore",
    "Network",
    "SubscriptionsHandler",
    "adsCreateStoreThunkSelector",
    "debounce",
    "ghlTestUBT",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = 8,
      c = 30,
      d = r("debounce")(
        o("AdsConnectionStatusDataManager").check,
        c * o("DateConsts").MS_PER_SEC,
      ),
      m = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.getGraphErrorSelector = r("adsCreateStoreThunkSelector")(
              n,
              n.getGraphError.bind(n),
            )),
            (n.getMessageSelector = r("adsCreateStoreThunkSelector")(
              n,
              n.getMessage.bind(n),
            )),
            (n.$AdsConnectionStatusStore$p_4 = !0),
            (n.$AdsConnectionStatusStore$p_5 = !0),
            (n.$AdsConnectionStatusStore$p_6 = !1),
            r("ghlTestUBT")(function (e) {
              n.$AdsConnectionStatusStore$p_6 = e;
            }),
            n.$AdsConnectionStatusStore$p_8(),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__getActionTypes = function () {
            return [
              o("AdsConnectionStatusGraphErrorActionFlux").actionType,
              o("AdsConnectionStatusGraphRetryScheduledActionFlux").actionType,
              o("AdsConnectionStatusGraphSuccessActionFlux").actionType,
              o("AdsConnectionStatusNetworkConnectedActionFlux").actionType,
              o("AdsConnectionStatusNetworkDisconnectedActionFlux").actionType,
            ];
          }),
          (a.$AdsConnectionStatusStore$p_8 = function () {
            var e = this;
            ((this.$AdsConnectionStatusStore$p_7 = new (r(
              "SubscriptionsHandler",
            ))()),
              this.$AdsConnectionStatusStore$p_7.addSubscriptions(
                r("Network").addListener("online", function () {
                  return e.$AdsConnectionStatusStore$p_9();
                }),
                r("Network").addListener(
                  "offline",
                  this.$AdsConnectionStatusStore$p_10,
                ),
              ),
              r("ApiClient").subscribe(
                "request.complete",
                this.$AdsConnectionStatusStore$p_11.bind(this),
              ));
          }),
          (a.__onDispatch = function (t) {
            var e = t.action;
            switch (e.type) {
              case o("AdsConnectionStatusGraphErrorActionFlux").actionType:
                this.$AdsConnectionStatusStore$p_12(e.error);
                break;
              case o("AdsConnectionStatusGraphRetryScheduledActionFlux")
                .actionType:
                ((this.$AdsConnectionStatusStore$p_2 = e.delay),
                  this.__emitChange());
                break;
              case o("AdsConnectionStatusGraphSuccessActionFlux").actionType:
                this.$AdsConnectionStatusStore$p_13();
                break;
              case o("AdsConnectionStatusNetworkConnectedActionFlux")
                .actionType:
                this.$AdsConnectionStatusStore$p_14();
                break;
              case o("AdsConnectionStatusNetworkDisconnectedActionFlux")
                .actionType:
                this.$AdsConnectionStatusStore$p_15();
                break;
            }
          }),
          (a.isConnected = function () {
            return (
              this.$AdsConnectionStatusStore$p_5 &&
              this.$AdsConnectionStatusStore$p_4
            );
          }),
          (a.isGraphAccessible = function () {
            return this.$AdsConnectionStatusStore$p_4;
          }),
          (a.isNetworkConnected = function () {
            return this.$AdsConnectionStatusStore$p_5;
          }),
          (a.isAdblockEnabled = function () {
            return this.$AdsConnectionStatusStore$p_6;
          }),
          (a.getGraphError = function () {
            return this.$AdsConnectionStatusStore$p_1;
          }),
          (a.getGraphRetryDelay = function () {
            return this.$AdsConnectionStatusStore$p_2;
          }),
          (a.getMessage = function () {
            if (!this.$AdsConnectionStatusStore$p_5)
              return s._(/*BTDS*/ "Please check your internet connection");
            if (!this.$AdsConnectionStatusStore$p_4)
              return this.$AdsConnectionStatusStore$p_2
                ? s._(
                    /*BTDS*/ '_j{"*":{"second":"Your connection was lost. Reconnecting in {count} second","seconds":"Your connection was lost. Reconnecting in {count} seconds"}}',
                    [
                      s._param(
                        "count",
                        this.$AdsConnectionStatusStore$p_2,
                        [0],
                      ),
                      s._enum(
                        this.$AdsConnectionStatusStore$p_2 === 1
                          ? "second"
                          : "seconds",
                        { second: "second", seconds: "seconds" },
                      ),
                    ],
                  )
                : s._(
                    /*BTDS*/ "Your internet connection was lost. Trying to reconnect...",
                  );
          }),
          (a.$AdsConnectionStatusStore$p_15 = function () {
            ((this.$AdsConnectionStatusStore$p_5 = !1),
              (this.$AdsConnectionStatusStore$p_4 = !1),
              this.__emitChange());
          }),
          (a.$AdsConnectionStatusStore$p_14 = function () {
            ((this.$AdsConnectionStatusStore$p_5 = !0),
              o("AdsConnectionStatusDataManager").check(),
              this.__emitChange());
          }),
          (a.$AdsConnectionStatusStore$p_13 = function () {
            ((this.$AdsConnectionStatusStore$p_4 = !0),
              this.$AdsConnectionStatusStore$p_16(),
              this.__emitChange());
          }),
          (a.$AdsConnectionStatusStore$p_12 = function (t) {
            var e = this;
            ((this.$AdsConnectionStatusStore$p_4 = !1),
              (this.$AdsConnectionStatusStore$p_1 = t),
              (this.$AdsConnectionStatusStore$p_2 = u),
              this.$AdsConnectionStatusStore$p_3 ||
                (this.$AdsConnectionStatusStore$p_3 = window.setInterval(
                  function () {
                    return e.$AdsConnectionStatusStore$p_17();
                  },
                  o("DateConsts").MS_PER_SEC,
                )));
          }),
          (a.$AdsConnectionStatusStore$p_17 = function () {
            var t = (this.$AdsConnectionStatusStore$p_2 || 0) - 1;
            t > 0
              ? (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                  function () {
                    r("AdsConnectionStatusGraphRetryScheduledAction").dispatch(
                      { delay: t },
                      {
                        line: "304",
                        module: "AdsConnectionStatusStore.js",
                        moduleID: i.id,
                      },
                    );
                  },
                )
              : (this.$AdsConnectionStatusStore$p_16(),
                (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                  function () {
                    r("AdsConnectionStatusGraphRetryScheduledAction").dispatch(
                      { delay: null },
                      {
                        line: "311",
                        module: "AdsConnectionStatusStore.js",
                        moduleID: i.id,
                      },
                    );
                  },
                ),
                o("AdsConnectionStatusDataManager").check());
          }),
          (a.$AdsConnectionStatusStore$p_16 = function () {
            (this.$AdsConnectionStatusStore$p_3 &&
              (window.clearInterval(this.$AdsConnectionStatusStore$p_3),
              (this.$AdsConnectionStatusStore$p_3 = null)),
              d.reset());
          }),
          (a.$AdsConnectionStatusStore$p_11 = function (t, n, o, a) {
            var e = !!(
              o &&
              o.execution_options &&
              o.execution_options.includes("validate_only")
            );
            !a || (!e && (a.error || a.error_msg))
              ? d()
              : this.$AdsConnectionStatusStore$p_4 ||
                r("AdsConnectionStatusGraphSuccessAction").dispatch(
                  {},
                  {
                    line: "357",
                    module: "AdsConnectionStatusStore.js",
                    moduleID: i.id,
                  },
                );
          }),
          (a.$AdsConnectionStatusStore$p_9 = function () {
            r("AdsConnectionStatusNetworkConnectedAction").dispatch(
              {},
              {
                line: "362",
                module: "AdsConnectionStatusStore.js",
                moduleID: i.id,
              },
            );
          }),
          (a.$AdsConnectionStatusStore$p_10 = function () {
            r("AdsConnectionStatusNetworkDisconnectedAction").dispatch(
              {},
              {
                line: "366",
                module: "AdsConnectionStatusStore.js",
                moduleID: i.id,
              },
            );
          }),
          n
        );
      })(r("FluxStore"));
    m.__moduleID = i.id;
    var p = new m();
    l.default = p;
  },
  226,
);
