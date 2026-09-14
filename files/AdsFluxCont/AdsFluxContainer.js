__d(
  "AdsFluxContainer",
  [
    "AdsFluxContextInstrumentation",
    "AdsInterfacesLoggerUtils",
    "FluxContainer",
    "getModuleNameFromFluxContainer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("FluxContainer").create(e, t),
        a = (function (n) {
          function a() {
            for (
              var e, t = arguments.length, r = new Array(t), o = 0;
              o < t;
              o++
            )
              r[o] = arguments[o];
            return (
              (e = n.call.apply(n, [this].concat(r)) || this),
              (e.suppressReactDefaultErrorLoggingIUnderstandThisWillMakeBugsHarderToFindAndFix =
                !0),
              babelHelpers.assertThisInitialized(e) ||
                babelHelpers.assertThisInitialized(e)
            );
          }
          babelHelpers.inheritsLoose(a, n);
          var i = a.prototype;
          return (
            (i.componentDidCatch = function (a) {
              if (!a.hasBeenLoggedForAdsInterfaces) {
                var n = {
                  action_type_on_error: o(
                    "AdsFluxContextInstrumentation",
                  ).getLastAction(),
                  error_type: "FLUX_CONTAINER",
                  module_name:
                    (t ? t.name : null) ||
                    r("getModuleNameFromFluxContainer")(
                      e.displayName || e.name,
                    ) ||
                    "AdsFluxContainer(unknown)",
                };
                (o("AdsInterfacesLoggerUtils").logCriticalException(a, n),
                  (a.hasBeenLoggedForAdsInterfaces = !0));
              }
              throw a;
            }),
            a
          );
        })(n);
      try {
        Object.defineProperty(a, "name", { value: n.name });
      } catch (e) {}
      return a;
    }
    var s = {
      create: e,
      createFunctional: r("FluxContainer").createFunctional,
    };
    l.default = s;
  },
  98,
);
