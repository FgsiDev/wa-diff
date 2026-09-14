__d(
  "adsCampaignGetTimeCompletePercent",
  ["DateTime", "isStringNullOrEmpty", "unixTimestampFromDate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("DateTime").now(t).getUnixTimestampSeconds(),
        o = e.start_time;
      if (r("isStringNullOrEmpty")(e.end_time)) return null;
      var a = e.end_time;
      return (
        (o = r("unixTimestampFromDate")(o)),
        (a = r("unixTimestampFromDate")(a)),
        n < o ? 0 : n > a ? 1 : (n - o) / (a - o)
      );
    }
    l.default = e;
  },
  98,
);
