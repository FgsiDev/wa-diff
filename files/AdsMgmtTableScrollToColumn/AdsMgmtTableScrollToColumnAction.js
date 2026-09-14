__d(
  "AdsMgmtTableScrollToColumnAction",
  [
    "AdsMgmtTableScrollToColumnProvider",
    "AdsMgmtTableScrollToColumnReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsMgmtTableScrollToColumnReducerPlugin"),
            n("AdsMgmtTableScrollToColumnProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsMgmtTableScrollToColumnActionPlugin",
    );
    a.exports = e;
  },
  null,
);
