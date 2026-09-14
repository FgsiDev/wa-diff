__d(
  "AdsProfileVisitBudgetDefaultingAction",
  [
    "AdsProfileVisitBudgetDefaultingProvider",
    "AdsProfileVisitBudgetDefaultingReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsProfileVisitBudgetDefaultingReducerPlugin"),
            n("AdsProfileVisitBudgetDefaultingProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_PROFILE_VISIT_BUDGET_DEFAULTING_ACTION",
    );
    a.exports = e;
  },
  null,
);
