__d(
  "AdsConnectedSourcesCloseNestedWithoutSaveViewAction",
  [
    "AdsConnectedSourcesDataProvider",
    "AdsConnectedSourcesNestedViewCloseWithoutSaveReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsConnectedSourcesNestedViewCloseWithoutSaveReducerPlugin"),
            n("AdsConnectedSourcesDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsConnectedSourcesCloseNestedWithoutSaveViewActionPlugin",
    );
    a.exports = e;
  },
  null,
);
