__d(
  "AdsPixelStatusBase",
  [
    "fbt",
    "invariant",
    "AdsPixelStatusEnum",
    "AdsPixelStatusUtils",
    "DateConsts",
    "DateTime",
    "isFalsey",
    "isTruthy",
    "react",
    "signalsNow",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = 7,
      m = 24,
      p = 60,
      _ = 60,
      f = m * p * _,
      g = (function () {
        function e(t, n) {
          ((this.$1 = t),
            (this.$3 = n != null ? n : d),
            (this.$2 = e.getStatusFromLastFiredTime(t, this.$3)));
        }
        var t = e.prototype;
        return (
          (t.getUserFacingStatus = function () {
            return o("AdsPixelStatusUtils").getUserFacingStatus(this.$2);
          }),
          (t.getIcon = function () {
            return o("AdsPixelStatusUtils").getIcon(this.$2);
          }),
          (t.getDetail = function () {
            var e;
            return (
              this.$2 === r("AdsPixelStatusEnum").ACTIVE ||
              this.$2 === r("AdsPixelStatusEnum").INACTIVE
                ? (e = this.$4())
                : this.$2 !== r("AdsPixelStatusEnum").NEVER_ACTIVE &&
                  u(0, 5507, this.$2),
              e
            );
          }),
          (t.getWarning = function () {
            return this.$2 === r("AdsPixelStatusEnum").NEVER_ACTIVE ||
              this.$2 === r("AdsPixelStatusEnum").INACTIVE
              ? this.__getHelpLink()
              : null;
          }),
          (t.getStatus = function () {
            return this.$2;
          }),
          (t.getSUIStatusIndicatorStatus = function () {
            var e = "error";
            switch (this.$2) {
              case r("AdsPixelStatusEnum").ACTIVE: {
                e = "active";
                break;
              }
              case r("AdsPixelStatusEnum").INACTIVE: {
                e = "warning";
                break;
              }
              case r("AdsPixelStatusEnum").NEVER_ACTIVE: {
                e = "inactive";
                break;
              }
              default:
                u(0, 1319, this.$2);
            }
            return e;
          }),
          (t.getLastReceivedSentence = function (n) {
            if (this.$2 !== r("AdsPixelStatusEnum").NEVER_ACTIVE) {
              var t = e.getDaysAfterLastFired(this.$1),
                a = t * m;
              if (a < 1) {
                var i = a * p;
                if (i <= 1) return s._(/*BTDS*/ "in the last minute");
                var l = Math.floor(i);
                return l === 1
                  ? s._(/*BTDS*/ "1 minute ago")
                  : s._(/*BTDS*/ "{number} minutes ago", [
                      s._param("number", l),
                    ]);
              }
              if (a < m) {
                var u = Math.floor(a);
                return u === 1
                  ? s._(/*BTDS*/ "1 hour ago")
                  : s._(/*BTDS*/ "{number} hours ago", [s._param("number", u)]);
              }
              if (n != null && n) {
                var c = Math.floor(t / o("DateConsts").AVG_DAYS_PER_YEAR);
                if (c >= 1) return c === 1 ? s._(/*BTDS*/ "1 year ago") : null;
              }
              return (
                (t = Math.floor(t)),
                t === 1
                  ? s._(/*BTDS*/ "1 day ago")
                  : s._(/*BTDS*/ "{number} days ago", [s._param("number", t)])
              );
            }
          }),
          (e.getStatusFromLastFiredTime = function (n, o) {
            if (r("isFalsey")(n)) return r("AdsPixelStatusEnum").NEVER_ACTIVE;
            var t = o != null ? o : d,
              a = e.getDaysAfterLastFired(n);
            return a > t
              ? r("AdsPixelStatusEnum").INACTIVE
              : r("AdsPixelStatusEnum").ACTIVE;
          }),
          (e.getDaysAfterLastFired = function (t) {
            var e = r("isTruthy")(t)
                ? r("DateTime").fromISOString(
                    t,
                    r("signalsNow").LOCAL_TIMEZONE_ID,
                  )
                : r("signalsNow").asLocalDateTime(),
              n = r("signalsNow").asLocalDateTime();
            return (
              (n.getUnixTimestampSeconds() - e.getUnixTimestampSeconds()) / f
            );
          }),
          (t.__getHelpLink = function () {
            return c.jsx("div", {});
          }),
          (t.$4 = function () {
            var t = e.getDaysAfterLastFired(this.$1),
              n = Math.round(t * m);
            return n <= 1
              ? s._(/*BTDS*/ "Last received in the last hour")
              : n < m
                ? s._(/*BTDS*/ "last received {number} hours ago", [
                    s._param("number", n),
                  ])
                : ((t = Math.round(t)),
                  t <= 1
                    ? s._(/*BTDS*/ "Last received 1 day ago")
                    : t <= this.$3
                      ? s._(/*BTDS*/ "Last received {number} days ago", [
                          s._param("number", t),
                        ])
                      : s._(/*BTDS*/ "No activity for {number} days", [
                          s._param("number", t),
                        ]));
          }),
          (e.getInactiveThresholdDays = function () {
            return d;
          }),
          e
        );
      })();
    l.default = g;
  },
  226,
);
