__d(
  "DGWRequestStreamDeferredClient",
  [
    "ConstUriUtils",
    "CurrentUser",
    "RequestStreamE2EClientSamplingConfig",
    "RtiRequestStreamE2eClientBatchFalcoEvent",
    "RtiRequestStreamE2eClientFalcoEvent",
    "RtiRequestStreamQosFalcoEvent",
    "RtiWebRequestStreamClient",
    "WebDriverConfig",
    "cr:3024",
    "gkx",
    "nullthrows",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = null;
      }
      var t = e.prototype;
      return (
        (t.refreshStreamGroup = async function (t) {
          var e = await this.$1;
          e == null || e.refreshStreamGroup(t);
        }),
        (t.createStream = function (t, n, o, a, i) {
          return (
            this.$2(),
            r("nullthrows")(this.$1).then(function (e) {
              return e.createStream(t, n, o, a, i);
            })
          );
        }),
        (t.$2 = function () {
          if (this.$1 == null) {
            var e = new Promise(function (e) {
                r("requireDeferred")("DGWRequestStreamClient")
                  .__setRef("DGWRequestStreamDeferredClient")
                  .onReady(e);
              }),
              t = new Promise(function (e) {
                r("requireDeferred")("DGWClient")
                  .__setRef("DGWRequestStreamDeferredClient")
                  .onReady(e);
              }),
              n = new Promise(function (e) {
                r("requireDeferred")("DGWEnvUtil")
                  .__setRef("DGWRequestStreamDeferredClient")
                  .onReady(e);
              });
            this.$1 = Promise.all([e, t, n]).then(function (e) {
              var t = e[0],
                n = e[1],
                r = e[2];
              return new t(s(n, r));
            });
          }
        }),
        e
      );
    })();
    function s(e, t) {
      var a;
      return {
        dgwStreamFactoryConfig: {
          get_log_dgw_streamgroup: function () {
            return r("gkx")("20920");
          },
          dgw_client_factory: e,
        },
        dgwRequestStreamRefConfig: {
          get_web_rs_unlimited_retries: function () {
            return r("gkx")("20916");
          },
          get_webdriver_test_request_id: function () {
            var e;
            return r("WebDriverConfig").isTestRunning &&
              (e = n("cr:3024") == null ? void 0 : n("cr:3024").get()) != null
              ? e
              : null;
          },
          get_overrideHeaders: function () {
            return r("RtiWebRequestStreamClient").overrideHeaders;
          },
          e2e_logger_config: {
            domain:
              (a = o("ConstUriUtils").getUri(window.location.href)) == null
                ? void 0
                : a.getDomain(),
            rs_e2e_client_event_logger: r(
              "RtiRequestStreamE2eClientFalcoEvent",
            ),
            rs_e2e_client_batch_event_logger: r(
              "RtiRequestStreamE2eClientBatchFalcoEvent",
            ),
          },
          e2e_logger_sampling_config: r("RequestStreamE2EClientSamplingConfig"),
        },
        sciIsolationConfig: {
          get_sci_dogfooding: function () {
            return r("gkx")("3193");
          },
          get_js_rs_client_route_entity_presence_to_sci: function () {
            return r("gkx")("18246");
          },
          get_js_rs_client_route_presence_unified_json_to_sci: function () {
            return r("gkx")("18259");
          },
        },
        enableQoSTelemetry: function () {
          return r("gkx")("25070");
        },
        qosLogger: r("RtiRequestStreamQosFalcoEvent"),
        qosNetworkProbeUrl:
          t
            .getDGWEndpoint()
            .replace(/^wss:\/\//, "https://")
            .replace(/\/ws$/, "") + "/proxygen/health",
        qosLoggingUserId: String(r("CurrentUser").getID()),
      };
    }
    var u = new e();
    l.default = u;
  },
  98,
);
