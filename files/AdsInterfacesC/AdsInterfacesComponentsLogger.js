__d(
  "AdsInterfacesComponentsLogger",
  ["AdsInterfacesLogger", "AdsLogger", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "unified_logging",
      s = "components",
      u = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, s, void 0, void 0, e) || this),
            (n.logBIGComponentError = function (e, t) {
              var r = e.componentStack
                ? "Component Stack:\n" +
                  e.componentStack +
                  "\n" +
                  ("Error Stack:\n" + e.stack)
                : e.stack;
              n.logForAnalytics("errors", "big_component_error", {
                caller: t,
                message: e.message,
                stack_trace: r,
              });
            }),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.getInterfaceID = function () {
            return this.__interface_id;
          }),
          (o.setInterfaceID = function (t) {
            (r("vulture")("Qw1rMM77m_Vwjd7Pv-6ZTFjMto4="),
              (this.__interface_id = t));
          }),
          (o.logForAnalytics = function (n, o, a) {
            var e = a || {};
            if (!e.interface_id) {
              var i = this.getInterfaceID();
              if (!i) {
                var l = r("AdsInterfacesLogger").get();
                l && (i = l.getInterfaceID());
              }
              i && (e.interface_id = i);
            }
            t.prototype.logForAnalytics.call(this, n, o, e);
          }),
          (o.logSUIThemeError = function (t, n) {
            this.logForAnalytics("errors", "sui_theme_error", {
              caller: n,
              message: t.message,
              stack_trace: t.stack,
            });
          }),
          (o.__shouldSilenceError = function (t) {
            return !0;
          }),
          n
        );
      })(r("AdsLogger")),
      c = new u();
    l.default = c;
  },
  98,
);
