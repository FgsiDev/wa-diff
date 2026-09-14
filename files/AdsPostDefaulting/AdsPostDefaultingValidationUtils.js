__d(
  "AdsPostDefaultingValidationUtils",
  ["AdsInstagramPostErrorUtils", "AdsPagePostUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i, l) {
      var s;
      return e
        ? o("AdsInstagramPostErrorUtils").getErrorsForSinglePost(
            n,
            t,
            [i],
            [l],
            [r.optimization_goal],
            !1,
            !1,
            r.destination_type,
          )
        : o("AdsPagePostUtils").getFilterErrors(
            t,
            i,
            r.optimization_goal,
            n,
            a.buying_type,
            r.destination_type,
            !0,
            !1,
            l,
            (s = r.promoted_object) == null ? void 0 : s.object_store_url,
            !1,
          );
    }
    l.validatePost = e;
  },
  98,
);
