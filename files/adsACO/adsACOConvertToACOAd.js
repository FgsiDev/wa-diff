__d(
  "adsACOConvertToACOAd",
  [
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsFlexibleFormatDAUtils",
    "AdsMutators",
    "AdsUEditorAdgroupDynamicLocalAdsUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("AdsFlexibleFormatDAUtils").isReactiveControlCardVisibleForDA(
          e,
        ),
        a = [
          o("AdsAdgroupFormatTransformationMutators")
            .adsDACollectionAssetFeedSpecOptInMutator,
        ];
      a.push(
        r("AdsAdgroupRecordAccessors").creative.media_type.set("CAROUSEL"),
      );
      var i = [];
      return (
        (t === "aPlusc" && n) || (i = a),
        o("AdsMutators").chain.apply(
          o("AdsMutators"),
          [
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.multi_share_end_card.set(
              !1,
            ),
            r("AdsAdgroupRecordAccessors").creative.object_story_spec
              .template_data.format_option.delete,
            r("AdsAdgroupRecordAccessors").creative.object_story_spec
              .template_data.force_single_link.delete,
            r("AdsAdgroupRecordAccessors").creative.object_story_spec
              .template_data.description.delete,
            r("AdsAdgroupRecordAccessors").creative.object_story_spec
              .template_data.image_overlay_spec.delete,
            function (e) {
              return e;
            },
            function (e) {
              return o(
                "AdsUEditorAdgroupDynamicLocalAdsUtils",
              ).isDynamicLocalAdgroup(e) && !r("gkx")("21409")
                ? o(
                    "AdsUEditorAdgroupDynamicLocalAdsUtils",
                  ).removeDynamicLocalAdFieldsWithoutPlaceData(e)
                : e;
            },
          ].concat(i, [
            function (e) {
              return o(
                "AdsAdgroupFormatTransformationMutators",
              ).adsAdgroupFormatTransformationDAOptInMutator(e, t);
            },
          ]),
        )(e)
      );
    }
    l.adsACOConvertToACOAd = e;
  },
  98,
);
