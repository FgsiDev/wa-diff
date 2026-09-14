__d(
  "AdsScheduleDataDispatcher",
  ["AdsScheduleDataLoader", "AdsScheduleEndDateLoadedAction", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      r("promiseDone")(
        o("AdsScheduleDataLoader").fetchEventEndDate(e),
        function (e) {
          r("AdsScheduleEndDateLoadedAction").dispatch(
            { data: e },
            {
              line: "19",
              module: "AdsScheduleDataDispatcher.js",
              moduleID: i.id,
            },
          );
        },
      );
    }
    l.getEventEndDate = e;
  },
  98,
);
