__d(
  "AdsConnectedSourcesCloseNestedViewAction",
  [
    "AdsConnectedSourcesDataProvider",
    "AdsConnectedSourcesNestedViewLayoutReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsConnectedSourcesNestedViewLayoutReducerPlugins")
              .onNestedViewClose,
            n("AdsConnectedSourcesDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsConnectedSourcesCloseNestedViewActionPlugin",
    );
    a.exports = e;
  },
  null,
);
