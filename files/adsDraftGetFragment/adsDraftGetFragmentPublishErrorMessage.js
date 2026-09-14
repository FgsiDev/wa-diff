__d(
  "adsDraftGetFragmentPublishErrorMessage",
  [
    "fbt",
    "AdAsyncRequestStatus",
    "AdsDraftErrorConstants",
    "adsDraftGetFragmentErrorMessage",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      var a = e.status,
        i = r("adsDraftGetFragmentErrorMessage")(e),
        l = o("AdsDraftErrorConstants").COMPLETE;
      switch (a) {
        case r("AdAsyncRequestStatus").SUCCESS:
          n === !0
            ? (l = o("AdsDraftErrorConstants").DELETED)
            : (l = o("AdsDraftErrorConstants").COMPLETE);
          break;
        case r("AdAsyncRequestStatus").CANCELED:
        case r("AdAsyncRequestStatus").ERROR:
          l = i;
          break;
        case r("AdAsyncRequestStatus").ERROR_DEPENDENCY:
        case r("AdAsyncRequestStatus").CANCELED_DEPENDENCY:
          l = i;
          break;
        case r("AdAsyncRequestStatus").INITIAL:
          t != null && t !== ""
            ? (l = s._(
                /*BTDS*/ "This item could not be published because {errorObject} caused an error when publishing.",
                [s._param("errorObject", t)],
              ))
            : (l = o("AdsDraftErrorConstants").CANNOT_UPLOAD);
          break;
      }
      return (l || (l = o("AdsDraftErrorConstants").CANNOT_UPLOAD), l);
    }
    l.default = e;
  },
  226,
);
