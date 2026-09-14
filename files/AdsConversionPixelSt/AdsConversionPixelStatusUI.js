__d(
  "AdsConversionPixelStatusUI",
  ["fbt", "invariant", "ix", "AdsPixelConstants", "formatDate", "parseISODate"],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e = 36e5,
      d = e * 24,
      m = d * 7,
      p = new Date();
    function _(e) {
      var t,
        n,
        r =
          (t = (n = e.last_firing_time) != null ? n : e.lastFiringTime) != null
            ? t
            : null;
      return typeof r == "string" ? r : null;
    }
    function f(e) {
      if (e.is_deleted === !0 || e.isDeleted === !0)
        return o("AdsPixelConstants").statuses.DELETED;
      var t = _(e) || null,
        n = null;
      return (
        t != null &&
          (typeof t == "string" ? (n = r("parseISODate")(t)) : (n = t)),
        n == null
          ? o("AdsPixelConstants").statuses.UNVERIFIED
          : n.getTime() < p.getTime() - m
            ? o("AdsPixelConstants").statuses.INACTIVE
            : o("AdsPixelConstants").statuses.ACTIVE
      );
    }
    function g(e) {
      return {
        iconImage: c("22205"),
        text: s._(/*BTDS*/ "No recent activity"),
        subtitle: s._(/*BTDS*/ "Last event: {date}", [
          s._param("date", r("formatDate")(e, "n/j/y")),
        ]),
        desc: s._(
          /*BTDS*/ "We haven't received any events from this pixel in the last week.",
        ),
      };
    }
    function h(t) {
      var n = p.getTime() - t.getTime(),
        o = null;
      return (
        n < e
          ? (o = s._(/*BTDS*/ "Last event: within an hour"))
          : n < d
            ? (o = s._(/*BTDS*/ "Last event: within 24 hours"))
            : (n < m || u(0, 1756),
              (o = s._(/*BTDS*/ "Last event: {date}", [
                s._param("date", r("formatDate")(t, "F j")),
              ]))),
        {
          iconImage: c("22204"),
          text: s._(/*BTDS*/ "Active"),
          subtitle: o,
          desc: s._(
            /*BTDS*/ "We have received events from this pixel in the last week.",
          ),
        }
      );
    }
    function y() {
      return {
        iconImage: c("22206"),
        text: s._(/*BTDS*/ "No activity yet"),
        desc: s._(
          /*BTDS*/ "We haven't received any events from this pixel. Make sure the pixel code is properly installed or configured on your website.",
        ),
      };
    }
    function C() {
      return { iconImage: c("22206"), text: s._(/*BTDS*/ "Deleted") };
    }
    l.getStatus = f;
  },
  226,
);
