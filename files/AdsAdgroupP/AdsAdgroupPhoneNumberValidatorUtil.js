__d(
  "AdsAdgroupPhoneNumberValidatorUtil",
  ["AdsAPIObjectives"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === r("AdsAPIObjectives").LEAD_GENERATION ||
        e === r("AdsAPIObjectives").CONVERSIONS ||
        e === r("AdsAPIObjectives").LINK_CLICKS
      );
    }
    l.isSupportedObjectiveForPhoneCall = e;
  },
  98,
);
