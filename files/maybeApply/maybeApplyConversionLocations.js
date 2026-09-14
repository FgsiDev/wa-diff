__d(
  "maybeApplyConversionLocations",
  ["AdsCampaignRecordAccessors", "AdsMutators", "isPCALoggingAndUIFix"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      return o("isPCALoggingAndUIFix").isPCALoggingAndUIFix()
        ? o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").conversion_locations.set(n),
          )(t)
        : t;
    };
    l.maybeApplyConversionLocations = e;
  },
  98,
);
