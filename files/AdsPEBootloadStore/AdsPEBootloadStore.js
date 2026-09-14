__d(
  "AdsPEBootloadStore",
  [
    "AdsDataAtom",
    "AdsInteractionTriggerUtils",
    "AdsMgmtStartupLogger",
    "AdsPEBootloadRouteHelper",
    "AdsPEBootloadStoreHelper",
    "AdsPEBootloadStoreHelperAP",
    "AdsPEBootloadStoreImportantHelper",
    "AdsPEBootloadStoreLazyComponentBaseDeferred",
    "AdsPELoggerUtils",
    "AdsPERouteName",
    "AdsPERouterHelper",
    "AdsPerfInteractionsController",
    "AdsRoutePreloader",
    "Bootloader",
    "DateConsts",
    "ExecutionEnvironment",
    "FluxStore",
    "QuickPerformanceLogger",
    "clearTimeout",
    "emptyFunction",
    "gkx",
    "justknobx",
    "requestIdleCallback",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("DateConsts").MS_PER_SEC * 11,
      d = ["am.syd.route_initial_load", "am.route.initial_load"],
      m = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.$AdsPEBootloadStoreClass$p_1 = !1),
            (s || (s = r("ExecutionEnvironment"))).isInBrowser &&
              (n.$AdsPEBootloadStoreClass$p_2 = r("setTimeout")(function () {
                return n.$AdsPEBootloadStoreClass$p_3();
              }, c)),
            n.$AdsPEBootloadStoreClass$p_4(),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$AdsPEBootloadStoreClass$p_4 = function () {
            var e = this,
              t = function () {
                e.$AdsPEBootloadStoreClass$p_1 ||
                  ((e.$AdsPEBootloadStoreClass$p_1 = !0),
                  e.$AdsPEBootloadStoreClass$p_5());
              };
            o("AdsInteractionTriggerUtils").addPageLoadInteractionsListener(
              "start",
              t,
              d,
            );
            for (var n of d)
              r("AdsPerfInteractionsController").addEventListener(n, "end", t);
          }),
          (a.$AdsPEBootloadStoreClass$p_6 = function () {
            return (
              r("AdsPERouterHelper").getRouter() != null &&
              !r("AdsPERouterHelper")
                .getRouter()
                .hasActiveRoute(r("AdsPERouteName").CREATION)
            );
          }),
          (a.$AdsPEBootloadStoreClass$p_7 = function () {
            var e = r("AdsPERouterHelper").getRouter();
            return (
              e != null &&
              e.hasActiveRoute(r("AdsPERouteName").SIMPLE_CREATE) &&
              r("justknobx")._("959")
            );
          }),
          (a.$AdsPEBootloadStoreClass$p_8 = function () {
            this.$AdsPEBootloadStoreClass$p_7() && r("Bootloader").forceFlush();
          }),
          (a.$AdsPEBootloadStoreClass$p_9 = function () {
            var e;
            if (this.$AdsPEBootloadStoreClass$p_6()) {
              if (r("gkx")("18605")) {
                o("AdsPEBootloadRouteHelper").preloadTableRoutes();
                return;
              }
              var t =
                  (e = o("AdsPELoggerUtils").getCurrentRouteName()) != null
                    ? e
                    : "",
                n = (u || (u = r("QuickPerformanceLogger"))).currentTimestamp();
              (o("AdsMgmtStartupLogger").addClientSideData(
                "AdsPEBootloadStore_loadAllBootloads_" + t,
                "start",
                n,
              ),
                this.$AdsPEBootloadStoreClass$p_3(),
                this.$AdsPEBootloadStoreClass$p_10());
            }
          }),
          (a.$AdsPEBootloadStoreClass$p_10 = function () {
            (o("AdsPEBootloadStoreHelper").bootloadModules(),
              this.$AdsPEBootloadStoreClass$p_8(),
              o("AdsPEBootloadStoreHelperAP").bootloadAPModules(),
              this.$AdsPEBootloadStoreClass$p_8(),
              o("AdsPEBootloadRouteHelper").preloadRoutes(),
              this.$AdsPEBootloadStoreClass$p_8(),
              o("AdsRoutePreloader").preloadBillingWizardName(),
              this.$AdsPEBootloadStoreClass$p_8());
          }),
          (a.$AdsPEBootloadStoreClass$p_3 = function () {
            var e;
            if (this.$AdsPEBootloadStoreClass$p_6()) {
              var t =
                  (e = o("AdsPELoggerUtils").getCurrentRouteName()) != null
                    ? e
                    : "",
                n = (u || (u = r("QuickPerformanceLogger"))).currentTimestamp();
              (o("AdsMgmtStartupLogger").addClientSideData(
                "AdsPEBootloadStore_importantBootloadModules_" + t,
                "start",
                n,
              ),
                r("Bootloader").loadModules(
                  ["AdsCampaignGroupCrossValidationStore"],
                  r("emptyFunction"),
                  "AdsPEBootloadStore",
                ),
                this.$AdsPEBootloadStoreClass$p_8(),
                o(
                  "AdsPEBootloadStoreImportantHelper",
                ).loadImportantBootloadModules(),
                this.$AdsPEBootloadStoreClass$p_8(),
                o(
                  "AdsPEBootloadStoreLazyComponentBaseDeferred",
                ).loadImportantBootloadModules(),
                this.$AdsPEBootloadStoreClass$p_8());
            }
          }),
          (a.__getActionTypes = function () {
            return [];
          }),
          (a.__onDispatch = function (t) {
            var e = t.$AdsPEBootloadStoreClass11;
          }),
          (a.$AdsPEBootloadStoreClass$p_5 = function () {
            var t = this;
            (r("requestIdleCallback")(function () {
              return t.$AdsPEBootloadStoreClass$p_9();
            }),
              this.$AdsPEBootloadStoreClass$p_2 != null &&
                (r("clearTimeout")(this.$AdsPEBootloadStoreClass$p_2),
                (this.$AdsPEBootloadStoreClass$p_2 = null)),
              (e || (e = r("AdsDataAtom"))).unregister(
                this.getDispatchToken(),
              ));
          }),
          n
        );
      })(r("FluxStore"));
    m.__moduleID = i.id;
    var p = new m();
    l.default = p;
  },
  98,
);
