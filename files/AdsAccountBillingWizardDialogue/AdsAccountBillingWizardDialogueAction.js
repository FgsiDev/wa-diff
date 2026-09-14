__d(
  "AdsAccountBillingWizardDialogueAction",
  [
    "AdsAccountBillingWizardDialogueProvider",
    "AdsAccountBillingWizardDialogueReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsAccountBillingWizardDialogueReducerPlugin"),
            n("AdsAccountBillingWizardDialogueProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsAccountBillingWizardDialogueActionPlugin",
    );
    a.exports = e;
  },
  null,
);
