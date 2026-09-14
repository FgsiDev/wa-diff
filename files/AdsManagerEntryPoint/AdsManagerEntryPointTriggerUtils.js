__d(
  "AdsManagerEntryPointTriggerUtils",
  ["AdsInteractionTriggerEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === r("AdsInteractionTriggerEvent").MOUSEOVER ||
        e === r("AdsInteractionTriggerEvent").CLICK ||
        e === r("AdsInteractionTriggerEvent").CODE
      );
    }
    l.isUserInitiatedTrigger = e;
  },
  98,
);
