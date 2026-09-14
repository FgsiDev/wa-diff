__d(
  "SignalsUILogger",
  [
    "AdsInterfacesLogger",
    "AsyncRequest",
    "FBLogger",
    "SignalsUploaderUtils",
    "XSignalsUploaderLoggerControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = (function () {
        function t(e, t, n) {
          ((this.$1 = e),
            (this.$3 = t || Date.now()),
            (this.$2 = n),
            (this.$5 = 0),
            (this.$4 = {}));
        }
        var n = t.prototype;
        return (
          (n.$6 = function (t) {
            (this.$5++, (this.$4[t] = this.$4[t] || 0), this.$4[t]++);
          }),
          (n.log = function (t, n, o) {
            var e;
            ((n = n || {}), this.$6(t));
            var a = this.$2,
              i = babelHelpers.extends({}, o);
            (a != null && (i.containerContext = a),
              (i.eventIndex = this.$5),
              (i.eventCounts = this.$4),
              (i.details = n),
              r("AdsInterfacesLogger").log(
                {
                  data:
                    ((e = {}),
                    (e.event_source = this.$1),
                    (e.actual_event_time = Date.now()),
                    (e.signals_ui_event_data = JSON.stringify(i)),
                    (e.signals_ui_logger_session_id = this.$3),
                    (e.at_section = n.atSection),
                    (e.to_section = n.toSection),
                    (e.error_type = n.errorType),
                    (e.error_code = n.errorCode),
                    (e.message = n.errorMessage),
                    e),
                  eventCategory: "user_action",
                  eventName: t,
                },
                r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
              ));
          }),
          (n.logEvent = function (t, n) {
            this.log(t, null, n);
          }),
          (n.logError = function (t, n, r, a) {
            var e = {
                errorCode: n.code,
                errorFBTraceID: n.fbtrace_id,
                errorMessage: o(
                  "SignalsUploaderUtils",
                ).getHumanFriendlyAPIErrorMessage(n),
                errorStackTrace: n.stack,
                errorSubCode: n.error_subcode,
                errorType: n.type,
              },
              i = babelHelpers.extends({}, e, a);
            this.log(t, i, r);
          }),
          (n.getContainerContext = function () {
            return this.$2;
          }),
          (n.setContainerContext = function (t) {
            this.$2 = t;
          }),
          (n.getLoggerSessionID = function () {
            return this.$3;
          }),
          (t.logToCounter = function (t) {
            new (r("AsyncRequest"))()
              .setAllowCrossOrigin(!0)
              .setURI(
                r("XSignalsUploaderLoggerControllerRouteBuilder").buildUri({
                  key: t,
                }),
              )
              .setErrorHandler(function (e) {
                r("FBLogger")("ads")
                  .catching(e.toError())
                  .mustfix("Failed to log to counter");
              })
              .send();
          }),
          (t.getAppLogger = function (r) {
            return (e[r] == null && (e[r] = new t(r)), e[r]);
          }),
          (t.getDefaultLogger = function () {
            return t.getAppLogger("_default_");
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
