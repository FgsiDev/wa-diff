__d(
  "AdsAdgroupTrackingSpecsPrefiller",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPICampaignRecordUtils",
    "AdsActionSpecUtils",
    "AdsAdgroupTrackingSpecsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      key: "tracking_specs",
      genPaths: function (t) {
        var e = t.original.adgroup.tracking_specs;
        return e
          ? []
              .concat(s(e), u(e, t.current.campaignGroup, t.current.campaign))
              .map(function (e) {
                return { current: c(e), original: c(e) };
              })
          : [];
      },
    };
    function s(e) {
      return o("AdsActionSpecUtils").getPixelTrackingSpecIndices(e.toJS());
    }
    function u(e, t, n) {
      var r = t.objective,
        a = o("AdsAPICampaignRecordUtils").getPromotedObjectType(r, n);
      return o("AdsAdgroupTrackingSpecsUtils").supportsMobileAppTracking(r, a)
        ? o("AdsActionSpecUtils").getMobileAppTrackingSpecIndices(e.toJS())
        : [];
    }
    function c(e) {
      return [].concat(r("AdsAPIAdgroupPaths").TRACKING_SPECS, ["" + e]);
    }
    var d = e;
    l.default = d;
  },
  98,
);
