__d(
  "WAWebLoggedOutBootstrap",
  [
    "CurrentUser",
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebDebugSetup",
    "WAWebHandlePreviousLogout",
    "WAWebIndexedDBPurge",
    "WAWebLocalStorage",
    "WAWebLocalStorageUtils",
    "WAWebLoggedOutIsRegisteredCheck",
    "WAWebLoginBounceGuard",
    "WAWebLoginLaunchSocketUtils",
    "WAWebPonyfillsIdleCallback",
    "WAWebStartupResourcesPrefetch",
    "WAWebURLUtils",
    "WAWebUim",
    "WAWebUserPrefsMultiDevice",
    "WAWebWAWCInit",
    "cr:5203",
    "getErrorSafe",
    "justknobx",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = r("requireDeferred")("WAWebLoginLaunchSocket").__setRef(
        "WAWebLoggedOutBootstrap",
      ),
      _ = r("requireDeferred")("WAWebWam").__setRef("WAWebLoggedOutBootstrap"),
      f = r("requireDeferred")("WAWebWamPageLoadReporter").__setRef(
        "WAWebLoggedOutBootstrap",
      );
    async function g() {
      var t = o("WAWebLocalStorageUtils").isLogoutDirtyBitSet(),
        n =
          !r("CurrentUser").isLoggedIn() &&
          o("WAWebLoggedOutIsRegisteredCheck").isRegisteredLightweight();
      if (!(!t && !o("WAWebLocalStorageUtils").isUserLoggedOut() && !n)) {
        try {
          (await o("WAWebIndexedDBPurge").deleteAllIdb(),
            await o("WAWebWAWCInit").initWAWC());
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[login] preemptive db delete failed ",
                  "",
                ])),
              t,
            )
            .tags("logged-out-bootstrap");
        }
        t
          ? r("WAWebLocalStorage") == null || r("WAWebLocalStorage").clear()
          : n && (await o("WAWebUserPrefsMultiDevice").clearRegistrationInfo());
      }
    }
    function h() {
      return o("WAWebLoginBounceGuard").getLoginBounceCount() >=
        o("WAWebLoginBounceGuard").MAX_LOGIN_BOUNCES
        ? (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[login] redirect bounce cap reached; staying on /login",
                ])),
            )
            .tags("logged-out-bootstrap"),
          !1)
        : (o("WAWebLoginBounceGuard").bumpLoginBounceCount(),
          (window.location.href = r("WAWebURLUtils").consumeLoginNextParam(
            window.location.search,
          )),
          !0);
    }
    async function y(e) {
      var t;
      (o("WAWebDebugSetup").setupDebugGlobal(),
        n("cr:5203") == null || n("cr:5203")(),
        _.load()
          .then(function (e) {
            return e.initWamRuntime();
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[login] WAM init failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("login-wam-init-fail");
          }));
      var a =
        (t = e == null ? void 0 : e.mountEpochMs) != null ? t : Date.now();
      if (
        (f
          .load()
          .then(function (t) {
            return t.reportLoggedOutPageLoadStage("qr_mount", {
              mountEpochMs: a,
              renderEpochMs: e == null ? void 0 : e.renderEpochMs,
            });
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[login] QR mount report failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("login-qr-mount-report-fail");
          }),
        await g(),
        o("WAWebHandlePreviousLogout").processLogoutReasonAndCleanupUrl(),
        r("justknobx")._("4755") ||
          o("WAWebBackendEventBus").BackendEventBus.onRefreshQR(
            o("WAWebLoginLaunchSocketUtils").refreshLoginQR,
          ),
        !(
          o("WAWebLoggedOutIsRegisteredCheck").isRegisteredLightweight() &&
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[login] User is already registered, redirecting to main app",
              ])),
          ),
          h())
        ))
      ) {
        var i = await p.load(),
          l = i.launchSocketForLogin;
        if (
          (await l(),
          r("justknobx")._("4755") &&
            o("WAWebBackendEventBus").BackendEventBus.onRefreshQR(
              o("WAWebLoginLaunchSocketUtils").refreshLoginQR,
            ),
          !(
            o("WAWebLoggedOutIsRegisteredCheck").isRegisteredLightweight() &&
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[login] registered after launchSocketForLogin, redirect",
                ])),
            ),
            h())
          ))
        ) {
          o("WAWebUim").setupUimListeners();
          var s = document.getElementById("wa_web_initial_startup");
          (s != null && s.parentNode && s.parentNode.removeChild(s),
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
              o("WAWebStartupResourcesPrefetch").prefetchStartupResources(null);
            }));
        }
      }
    }
    l.bootstrapLogin = y;
  },
  98,
);
