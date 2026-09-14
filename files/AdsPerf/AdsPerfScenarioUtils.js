__d(
  "AdsPerfScenarioUtils",
  ["AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = void 0,
        o = void 0,
        a = void 0,
        i = void 0;
      switch (e) {
        case r("AdsObjectTypes").CAMPAIGN_GROUP:
          ((n = "L3"), (i = [].concat(t)));
          break;
        case r("AdsObjectTypes").CAMPAIGN:
          ((n = "L2"), (a = [].concat(t)));
          break;
        case r("AdsObjectTypes").ADGROUP:
          ((n = "L1"), (o = [].concat(t)));
          break;
        case r("AdsObjectTypes").CREATION_PACKAGE:
          n = "CREATION_PACKAGE";
          break;
      }
      return {
        level: n,
        selected_adgroup_ids: o,
        selected_campaign_ids: a,
        selected_campaign_group_ids: i,
      };
    }
    l.adObjectsToInteractionContext = e;
  },
  98,
);
