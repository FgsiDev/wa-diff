__d(
  "adsDraftGetFragmentErrorMessage",
  ["AdAsyncRequestStatus", "AdFLEXConfig", "AdsDraftErrorConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = function (t) {
          var e,
            n =
              r("AdFLEXConfig") == null ||
              (e = r("AdFLEXConfig").get()) == null ||
              e.getFragmentErrorForObjectWithFailedDependency == null
                ? void 0
                : e.getFragmentErrorForObjectWithFailedDependency(t);
          if (n != null) return n;
          switch (t) {
            case "ad":
              return o("AdsDraftErrorConstants").ADGROUP_PARENT_CAMPAIGN;
            case "ad_set":
              return o("AdsDraftErrorConstants").CAMPAIGN_PARENT_CAMPAIGN_GROUP;
            default:
              return o("AdsDraftErrorConstants").OBJECT_GENERIC_PARENT;
          }
        },
        n = e.status;
      switch (n) {
        case r("AdAsyncRequestStatus").SUCCESS:
          return "";
        case r("AdAsyncRequestStatus").CANCELED:
          return o("AdsDraftErrorConstants").CANCELLED;
        case r("AdAsyncRequestStatus").ERROR:
          var a = "";
          return (
            e.error_message != null && (a = e.error_message),
            e.error_code != null && (a += " (#" + e.error_code + ")"),
            a
          );
        case r("AdAsyncRequestStatus").ERROR_DEPENDENCY:
        case r("AdAsyncRequestStatus").CANCELED_DEPENDENCY:
          var i = e.ad_object_type;
          return t(i);
        case r("AdAsyncRequestStatus").INITIAL:
          return o("AdsDraftErrorConstants").CANNOT_UPLOAD;
        default:
          return o("AdsDraftErrorConstants").UNKNOWN;
      }
    }
    l.default = e;
  },
  98,
);
