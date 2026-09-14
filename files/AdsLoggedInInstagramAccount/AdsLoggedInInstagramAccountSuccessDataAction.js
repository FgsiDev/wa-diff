__d(
  "AdsLoggedInInstagramAccountSuccessDataAction",
  [
    "AdsLoggedInInstagramAccountProvider",
    "AdsLoggedInInstagramAccountReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsLoggedInInstagramAccountReducerPlugin"),
            n("AdsLoggedInInstagramAccountProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsLoggedInInstagramAccountSuccessDataActionPlugin",
    );
    a.exports = e;
  },
  null,
);
