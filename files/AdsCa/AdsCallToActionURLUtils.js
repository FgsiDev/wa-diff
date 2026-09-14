__d(
  "AdsCallToActionURLUtils",
  ["AdsMobileAppObjectivesUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r,
        a,
        i = o("AdsMobileAppObjectivesUtils").isMobileAppObjective(t, n);
      return i &&
        (r = (a = e.promoted_object) == null ? void 0 : a.object_store_url) !=
          null
        ? r
        : "";
    }
    l.getDefaultURL = e;
  },
  98,
);
