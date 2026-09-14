__d(
  "AdsAMAdvertiserDeliveryIssueFriendlyErrors",
  [
    "AdsAMAdvertiserDeliveryIssueFriendlyErrorMap",
    "AdsAdvertiserFriendlyErrorsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.map(s);
    }
    function s(e) {
      var t = o("AdsAdvertiserFriendlyErrorsUtils").getFriendlyError(
        e,
        r("AdsAMAdvertiserDeliveryIssueFriendlyErrorMap"),
      );
      return t !== e ? t : e;
    }
    ((l.getFriendlyDeliveryIssueErrors = e),
      (l.getFriendlyDeliveryIssueError = s));
  },
  98,
);
