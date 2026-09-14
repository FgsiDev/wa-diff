__d(
  "adsCampaignGetDefaultStartTimeString",
  ["adsCampaignGetDefaultStartDate", "adsCampaignGetISODateTimeString"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.timezone_offset_hours_utc,
        n = r("adsCampaignGetDefaultStartDate")();
      return r("adsCampaignGetISODateTimeString")(n, t);
    }
    l.default = e;
  },
  98,
);
