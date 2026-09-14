__d(
  "AdsDuplicationUpgradeChangesSummaryModalAction",
  [
    "AdsDuplicationUpgradeChangesSummaryModalProvider",
    "AdsDuplicationUpgradeChangesSummaryModalReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDuplicationUpgradeChangesSummaryModalReducerPlugin"),
            n("AdsDuplicationUpgradeChangesSummaryModalProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsDuplicationUpgradeChangesSummaryModalActionPlugin",
    );
    a.exports = e;
  },
  null,
);
