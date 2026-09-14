__d(
  "CustomAudienceTosUtils",
  ["BusinessRequestStatus", "keyMirror"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.getTosRequirements = function () {
            return {
              custom_audience: 0xc3f324fff9d0,
              website_custom_audience: 0xbc0c48f2f759,
              mobile_app_custom_audience: 0xbc0c48f2f759,
              value_based_custom_audience: 0x8e4a4d734056,
            };
          }),
          (t.isWcaTosAccepted = function (t) {
            if (t == null) return !1;
            var e = t.web_custom_audience_tos;
            return t != null && e != null && e > 0;
          }),
          (t.isWeightedTosAccepted = function (t) {
            if (t == null) return !1;
            var e = t.value_based_custom_audience_tos;
            return t != null && e != null && e > 0;
          }),
          (t.isDataFileUserLevelTosAccepted = function (t) {
            return (
              t != null &&
              t.custom_audience_tos != null &&
              t.custom_audience_tos > 0
            );
          }),
          (t.getBusinessNameToAcceptTOSFor = function (t) {
            var e,
              n = "",
              o = r("keyMirror")(r("BusinessRequestStatus"));
            if (
              (t == null ||
              (e = t.onbehalf_requests) == null ||
              (e = e.data) == null ||
              (e = e[0]) == null
                ? void 0
                : e.status) === o.APPROVE
            ) {
              var a;
              n =
                t == null ||
                (a = t.onbehalf_requests) == null ||
                (a = a.data) == null ||
                (a = a[0].receiving_business) == null
                  ? void 0
                  : a.name;
            } else {
              var i;
              if (
                (t == null || (i = t.business) == null ? void 0 : i.name) !=
                null
              ) {
                var l;
                n = t == null || (l = t.business) == null ? void 0 : l.name;
              }
            }
            return n;
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
