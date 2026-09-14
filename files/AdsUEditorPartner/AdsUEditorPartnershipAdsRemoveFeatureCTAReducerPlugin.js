__d(
  "AdsUEditorPartnershipAdsRemoveFeatureCTAReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupPartnershipAdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorPartnershipAdsRemoveFeatureCTAActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = t.removeFeatureType,
                a = e;
              return (
                n ===
                o("AdsUEditorAdgroupPartnershipAdsMutators")
                  .PartnershipAdRemoveFeatureType.ADVANTAGE_PLUS_CREATIVE
                  ? (a = o(
                      "AdsUEditorAdgroupPartnershipAdsMutators",
                    ).removeUnsupportedAdvantagePlusCreativeFeatures(a))
                  : n ===
                      o("AdsUEditorAdgroupPartnershipAdsMutators")
                        .PartnershipAdRemoveFeatureType.PAC
                    ? (a = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.asset_feed_spec.delete(a))
                    : n ===
                        o("AdsUEditorAdgroupPartnershipAdsMutators")
                          .PartnershipAdRemoveFeatureType.TESTIMONIAL &&
                      (a = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.branded_content.testimonial.delete(a)),
                a
              );
            });
          },
          r("AdsUEditorPartnershipAdsRemoveFeatureCTAActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
