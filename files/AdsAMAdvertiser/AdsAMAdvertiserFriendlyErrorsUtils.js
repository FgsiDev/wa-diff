__d(
  "AdsAMAdvertiserFriendlyErrorsUtils",
  [
    "AdsAMAdvertiserClearContextualFriendlyErrorMap",
    "AdsAMAdvertiserPreemptiveFriendlyErrorMap",
    "AdsAdvertiserFriendlyErrorsUtils",
    "AdsError",
    "AdsManagerSpecificError",
    "AdsPreemptiveErrorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.level === r("AdsError").Level.QUIET
        ? r("AdsAMAdvertiserPreemptiveFriendlyErrorMap")
        : r("AdsAMAdvertiserClearContextualFriendlyErrorMap");
    }
    function s(e, t) {
      var n = t
        ? o("AdsPreemptiveErrorUtils").setPreemptiveErrorsToQuietErrors(e)
        : e;
      return n.map(u);
    }
    function u(t) {
      var n = o("AdsAdvertiserFriendlyErrorsUtils").getFriendlyError(t, e(t));
      return n !== t ? n : t;
    }
    function c(e) {
      var t = r("AdsManagerSpecificError").ERROR_WITH_PARAMS;
      return t.includes(e.key);
    }
    function d(t) {
      var n = e(t);
      return (
        o("AdsAdvertiserFriendlyErrorsUtils").hasFriendlyError(t, n) || c(t)
      );
    }
    ((l.getFriendlyErrors = s),
      (l.getFriendlyError = u),
      (l.hasFriendlyError = d));
  },
  98,
);
