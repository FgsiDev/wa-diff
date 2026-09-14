__d(
  "AdsEventsManagerTimeUtils",
  [
    "fbt",
    "DateConsts",
    "DateTime",
    "GeoText.react",
    "LocalDate",
    "Timezone",
    "formatDate",
    "react",
    "signalsNow",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "_",
      d = "M j, Y",
      m = "M j",
      p = "g:i A";
    function _(e) {
      return "" + e.start.toISOString() + c + e.end.addDays(-1).toISOString();
    }
    function f(e) {
      if (e == null) return null;
      var t = e.split(c),
        n = t[0],
        o = t[1];
      if (n == null || o == null) return null;
      var a = 0,
        i = 0;
      try {
        ((a = r("LocalDate")
          .fromISOString(n)
          .toInstant(r("signalsNow").LOCAL_TIMEZONE_ID)),
          (i = r("LocalDate")
            .fromISOString(o)
            .addDays(1)
            .toInstant(r("signalsNow").LOCAL_TIMEZONE_ID)));
      } catch (e) {
        return null;
      }
      return i <= a ? null : { end: i, start: a };
    }
    function g(e) {
      return r("LocalDate").fromInstant(
        e,
        o("Timezone").getEnvironmentTimezoneID(),
      );
    }
    function h(e) {
      return r("DateTime").localCreate(e).format("m/d").toString();
    }
    function y(e, t, n) {
      var r = Math.floor((t - e) / o("DateConsts").SEC_PER_DAY);
      if (r >= 1)
        return s._(/*BTDS*/ '_j{"*":"{number} days","_1":"1 day"}', [
          s._plural(r, "number"),
        ]);
      if (n === "day") return s._(/*BTDS*/ "In the last day");
      var a = Math.floor((t - e) / o("DateConsts").SEC_PER_HOUR);
      if (a >= 1)
        return s._(/*BTDS*/ '_j{"*":"{number} hours","_1":"1 hour"}', [
          s._plural(a, "number"),
        ]);
      if (n === "hour") return s._(/*BTDS*/ "In the last hour");
      var i = Math.floor((t - e) / o("DateConsts").SEC_PER_MIN);
      return i >= 1
        ? s._(/*BTDS*/ '_j{"*":"{number} minute","_1":"1 minute"}', [
            s._plural(i, "number"),
          ])
        : s._(/*BTDS*/ "In the last minute");
    }
    function C(e, t) {
      return u.jsxs("div", {
        children: [
          u.jsx(r("GeoText.react"), {
            display: "block",
            children: s._(/*BTDS*/ "First shared: {date}", [
              s._param("date", b(e)),
            ]),
          }),
          u.jsx(r("GeoText.react"), {
            display: "block",
            children: s._(/*BTDS*/ "Last shared: {date}", [
              s._param("date", b(t)),
            ]),
          }),
        ],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e, t) {
      var n = o("Timezone").getEnvironmentTimezoneID(),
        a = r("LocalDate").today(n),
        i = a.daysBetween(r("LocalDate").fromInstant(e, n));
      if (i >= a.getDayOfYear())
        return (
          r("formatDate")(e, d).toString() +
          " at " +
          r("formatDate")(e, p).toString()
        );
      switch (i) {
        case 0:
          return "Today at " + r("formatDate")(e, p).toString();
        case 1:
          return "Yesterday at " + r("formatDate")(e, p).toString();
        default:
          return (
            r("formatDate")(e, t === !0 ? d : m).toString() +
            " at " +
            r("formatDate")(e, p).toString()
          );
      }
    }
    function v(e) {
      return s._(/*BTDS*/ "Data from: {date}", [
        s._param("date", e.startDateTime + " - " + e.endDateTime),
      ]);
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e, t) {
      var n = { endDateTime: b(t), startDateTime: b(e) };
      return v(n);
    }
    function R(e, t) {
      return t === 0 || e < t ? e : t;
    }
    function L(e, t) {
      return s._(/*BTDS*/ "Affected Events: {affectedEvents}", [
        s._param("affectedEvents", t != null ? Math.min(e, t) : e),
      ]);
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      return s._(/*BTDS*/ "Total Events: {totalEvents}", [
        s._param("totalEvents", e),
      ]);
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      return s._(/*BTDS*/ "First Detected: {firstDetectedTime}", [
        s._param("firstDetectedTime", h(e)),
      ]);
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      return s._(/*BTDS*/ "Last Detected: {lastDetectedTime}", [
        s._param("lastDetectedTime", h(e)),
      ]);
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      var t = r("LocalDate").today(r("signalsNow").LOCAL_TIMEZONE_ID),
        n = t.subtractDays(e);
      return e > 0 ? [n, t] : [t, n];
    }
    ((l.encodeDateRange = _),
      (l.decodeDateRange = f),
      (l.getLocalDateFromInstant = g),
      (l.getFormattedDateStringFromTimestamp = h),
      (l.getTimeRangeFbt = y),
      (l.getFormattedFirstAndLastDate = C),
      (l.getFormattedStandardDate = b),
      (l.getDataTimeframe = S),
      (l.getEventDataEndTime = R),
      (l.getEffectedEventCount = L),
      (l.getTotalEventCount = E),
      (l.getFirstDetectedTime = k),
      (l.getLastDetectedTime = I),
      (l.getDateRangeFromToday = T));
  },
  226,
);
