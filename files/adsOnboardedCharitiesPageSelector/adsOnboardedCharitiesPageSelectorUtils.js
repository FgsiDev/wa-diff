__d(
  "adsOnboardedCharitiesPageSelectorUtils",
  ["AdsAPIObjectives", "LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return t !== r("AdsAPIObjectives").CONVERSIONS &&
        t !== r("AdsAPIObjectives").OUTCOME_SALES
        ? r("LoadObject").withValue([], { creatorModuleID: i.id })
        : n.get(e.account_id).mapValue(function (e) {
            var t = e.eligible_page_ids;
            return t;
          });
    }
    l.adsOnboardedCharitiesPageLogic = e;
  },
  98,
);
