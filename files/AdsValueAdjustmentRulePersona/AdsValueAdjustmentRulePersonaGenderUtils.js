__d(
  "AdsValueAdjustmentRulePersonaGenderUtils",
  ["AdsCampaignRecordAccessors", "AdsTargetingConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === o("AdsTargetingConstants").GENDERS.All
        ? null
        : e === o("AdsTargetingConstants").GENDERS.Men
          ? "male"
          : "female";
    }
    function s(e) {
      return e === o("AdsTargetingConstants").GENDERS.All
        ? null
        : e === o("AdsTargetingConstants").GENDERS.Men
          ? "female"
          : "male";
    }
    var u = function (t) {
      var e;
      return (e = r("AdsCampaignRecordAccessors").targeting) == null
        ? void 0
        : e.genders.delete(t);
    };
    ((l.getPreferredTargetingGenderPredicate = e),
      (l.getTargetingGenderPredicateToExclude = s),
      (l.setGenderToBeBroad = u));
  },
  98,
);
