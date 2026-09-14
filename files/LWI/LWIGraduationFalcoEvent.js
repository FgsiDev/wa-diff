__d(
  "LWIGraduationFalcoEvent",
  ["LWICometLogger", "SbaGraduationFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      r("SbaGraduationFalcoEvent").logCritical(function () {
        return babelHelpers.extends({}, e);
      });
    }
    function u() {
      return (e == null && (e = new (r("LWICometLogger"))(s)), e);
    }
    function c(e) {
      u().log(e);
    }
    ((l.logLWIGraduationFalcoEvent = s), (l.getLogger = u), (l.log = c));
  },
  98,
);
