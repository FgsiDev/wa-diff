__d(
  "AdsUEditorWebsiteMediaEligibilityQueryProvider",
  [
    "AdsUEditorWebsiteMediaEligibilityQueryPlugin",
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
            n("AdsUEditorWebsiteMediaEligibilityQueryPlugin").graphQL,
          );
        },
      },
      function (e, t) {
        return e(function (e) {
          return e.setKeyStale(t);
        });
      },
      "AdsUEditorWebsiteMediaEligibilityQueryPlugin",
    );
  },
  null,
);
