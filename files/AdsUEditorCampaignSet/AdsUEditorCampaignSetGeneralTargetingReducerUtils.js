__d(
  "AdsUEditorCampaignSetGeneralTargetingReducerUtils",
  ["AdsAPICampaignRecord", "AdsCampaignRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsAPICampaignRecord").getSpec().targeting;
    function s(t) {
      var n = t.campaign,
        a = t.newTargetingSpec,
        i = t.oldTargetingSpec;
      if (a == null) return n;
      if (a.geo_locations) a.geo_locations.location_types = ["home", "recent"];
      else if (a.geo_locations && a.geo_locations.location_types == null) {
        var l;
        a.geo_locations.location_types =
          (l = i.geo_locations) == null ? void 0 : l.location_types;
      }
      return o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").targeting.set(
          new e(babelHelpers.extends({}, i, a)),
        ),
        function (e) {
          return e;
        },
      )(n);
    }
    l.campaignSetGeneralTargeting = s;
  },
  98,
);
