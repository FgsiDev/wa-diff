__d(
  "adsDraftGetErrorsByIDFromFragmentStatusData",
  [
    "errorCode",
    "AdAsyncRequestStatus",
    "FBLogger",
    "adsDraftGetFragmentErrorMessage",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = e.filter(function (e) {
          return e.status !== r("AdAsyncRequestStatus").SUCCESS;
        }),
        n = new Map();
      return (
        t.forEach(function (e) {
          var t = r("adsDraftGetFragmentErrorMessage")(e),
            o = u(e),
            a = e.fragment_id,
            i = e.ad_object_id,
            l = e.ad_object_type,
            s = e.async_request_id,
            c = e.action === "add";
          n.has(i)
            ? r("FBLogger")("ads").mustfix(
                "Got multiple errors for a single ad object on publish",
              )
            : n.set(i, {
                adObjectType: l,
                asyncRequestID: s,
                errorMessage: t,
                errorSubCode: o,
                fragmentID: a,
                isNew: c,
              });
        }),
        n
      );
    }
    function u(e) {
      var t = e.error_code,
        n = 0;
      if (!r("isStringNullOrEmpty")(t)) n = +t;
      else
        switch (e.status) {
          case r("AdAsyncRequestStatus").INITIAL:
          case r("AdAsyncRequestStatus").PROCESS_BY_EVENT_PROCESSOR:
            n = 1792074;
            break;
          case r("AdAsyncRequestStatus").CANCELED_DEPENDENCY:
          case r("AdAsyncRequestStatus").ERROR_DEPENDENCY:
          case r("AdAsyncRequestStatus").PENDING_DEPENDENCY:
          case r("AdAsyncRequestStatus").IN_PROGRESS:
            n = 1792149;
            break;
          case r("AdAsyncRequestStatus").CANCELED:
            n = 1792078;
            break;
          case r("AdAsyncRequestStatus").ERROR_CONFLICTS:
            n = 1792079;
            break;
          case r("AdAsyncRequestStatus").ERROR:
            n = 1792121;
            break;
          default:
            r("FBLogger")("ads").mustfix(
              "Unknown draft fragment status code: %s",
              e.status,
            );
            break;
        }
      return n;
    }
    l.default = e;
  },
  98,
);
