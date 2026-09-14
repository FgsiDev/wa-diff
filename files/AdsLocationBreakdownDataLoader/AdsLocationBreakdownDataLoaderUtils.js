__d(
  "AdsLocationBreakdownDataLoaderUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e) {
        case "country":
          return "region";
        case "region":
          return "city";
        default:
          return e;
      }
    }
    i.getNextBreakdownLevel = e;
  },
  66,
);
