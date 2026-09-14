__d(
  "WhatsAppBusinessAccountManagerHSMExampleRecordExt",
  ["WhatsAppBusinessAccountManagerHSMExampleRecord"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.isEqualTo = function (t) {
          var e, n;
          return (
            this.get("headerExample") === t.get("headerExample") &&
            this.get("headerMediaExample") === t.get("headerMediaExample") &&
            ((e = this.get("bodyExamples")) == null
              ? void 0
              : e.toArray().toString()) ===
              ((n = t.get("bodyExamples")) == null
                ? void 0
                : n.toArray().toString()) &&
            this.get("urlSuffixExample") === t.get("urlSuffixExample") &&
            this.get("copyCodeExample") === t.get("copyCodeExample")
          );
        }),
        t
      );
    })(r("WhatsAppBusinessAccountManagerHSMExampleRecord"));
    l.default = e;
  },
  98,
);
