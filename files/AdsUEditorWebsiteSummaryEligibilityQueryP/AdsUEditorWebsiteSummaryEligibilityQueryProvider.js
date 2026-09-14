__d(
  "AdsUEditorWebsiteSummaryEligibilityQueryProvider",
  [
    "AdsUEditorWebsiteSummaryEligibilityQueryPlugin",
    "Laminar",
    "laminarQueryProviderInitialState",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    a.exports = n("Laminar").__createRefetchProvider(
      {
        initialState: function (t) {
          return n("laminarQueryProviderInitialState").graphQL(
            t,
            n("AdsUEditorWebsiteSummaryEligibilityQueryPlugin").graphQL,
          );
        },
      },
      function (e, t) {
        return e(function (e) {
          return e.setKeyStale(t);
        });
      },
      "AdsUEditorWebsiteSummaryEligibilityQueryPlugin",
    );
  },
  null,
);
