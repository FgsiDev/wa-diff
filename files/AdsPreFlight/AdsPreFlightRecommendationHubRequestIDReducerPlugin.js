__d(
  "AdsPreFlightRecommendationHubRequestIDReducerPlugin",
  ["uuidv4"],
  function (t, n, r, o, a, i, l) {
    var e = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, { requestID: r("uuidv4")() });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
