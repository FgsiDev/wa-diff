__d(
  "AdsCampaignSchema",
  [
    "AdsAPICampaignPaths",
    "AdsAggregateTargetingSpecsSchema",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsUniformMixedNullableBulkValueTypes",
    "objectFromPaths",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("objectFromPaths")(
      r("AdsAPICampaignPaths"),
      r("AdsEmptyUniformMixedBulkValueTypes"),
    );
    ((e.targeting = r("AdsAggregateTargetingSpecsSchema")),
      (e.promoted_object.dataset_split_ids = r(
        "AdsUniformMixedNullableBulkValueTypes",
      )));
    var s = e;
    l.default = s;
  },
  98,
);
