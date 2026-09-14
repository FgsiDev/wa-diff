__d(
  "WhatsAppBusinessAccountManagerHSMComponentRecord",
  ["immutable"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("immutable").Record({
        type: null,
        format: null,
        text: null,
        buttons: null,
        limited_time_offer: null,
        cards: null,
        example: null,
        add_security_recommendation: null,
        code_expiration_minutes: null,
      }),
      l = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      s = l;
    i.default = s;
  },
  66,
);
