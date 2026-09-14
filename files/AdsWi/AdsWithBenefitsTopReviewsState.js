__d(
  "AdsWithBenefitsTopReviewsState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "__ADS_WITH_BENEFITS_PENDING_TOP_REVIEWS__",
      l = "__ADS_WITH_BENEFITS_PENDING_TOP_REVIEWS_APPLIED__";
    function s(t) {
      ((window[e] = t), (window[l] = !1));
    }
    function u() {
      var t = window[e];
      return Array.isArray(t) ? t : null;
    }
    function c() {
      ((window[e] = null), (window[l] = !1));
    }
    ((i.setPendingTopReviews = s),
      (i.getPendingTopReviews = u),
      (i.clearPendingTopReviews = c));
  },
  66,
);
