__d(
  "AdsPreFlightRecommendationHubRequestIDProviderPlugin",
  ["AdsUEditorPreflightRecommendationHubUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: {
          requestID: o(
            "AdsUEditorPreflightRecommendationHubUtils",
          ).getPFRHubRequestUUID(),
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
