__d(
  "AdsScheduleDataLoader",
  ["AdsGraphAPI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("promotable_event", e)
        .batched()
        .get({ fields: ["end_time"] });
    }
    l.fetchEventEndDate = e;
  },
  98,
);
