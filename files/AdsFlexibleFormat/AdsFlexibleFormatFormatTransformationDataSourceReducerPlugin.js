__d(
  "AdsFlexibleFormatFormatTransformationDataSourceReducerPlugin",
  [
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatFormatTransformationDataSourceActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              if (t.hasOptedIn != null && !t.hasOptedIn) {
                if (t.format === "da_collection" && !t.skipAssetFeedSpecChanges)
                  return o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).adsDACollectionOptInMutator(e);
                var n = o(
                  "AdsAdgroupFormatTransformationMutators",
                ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                  e,
                  t.format,
                  t.dataSource,
                  t.formatTransformationSpecFormat,
                );
                return (
                  t.format === "video_slideshow" &&
                    t.dataSource === "manual_uploads" &&
                    o("AdsFlexibleFormatAdexUtils").passGKForC2V() &&
                    !o(
                      "AdsAPlusCStickyOptOutUtils",
                    ).isAPlusCFeatureStickyOptedOut("carousel_to_video") &&
                    (n = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.degrees_of_freedom_spec.creative_features_spec.carousel_to_video.enroll_status.set(
                      "OPT_IN",
                    )(n)),
                  n
                );
              } else {
                if (t.format === "da_collection" && !t.skipAssetFeedSpecChanges)
                  return o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).adsDACollectionOptOutMutator(e);
                var a =
                  t.useReactiveControlOptOut === !0
                    ? o(
                        "AdsAdgroupFormatTransformationMutators",
                      ).adsAdgroupReactiveControlOptionOptOutMutator(
                        e,
                        t.format,
                        t.dataSource,
                        t.eligibleDataSources,
                        t.formatTransformationSpecFormat,
                      )
                    : o(
                        "AdsAdgroupFormatTransformationMutators",
                      ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                        e,
                        t.format,
                        t.dataSource,
                        t.formatTransformationSpecFormat,
                      );
                return (
                  t.format === "video_slideshow" &&
                    t.dataSource === "manual_uploads" &&
                    o("AdsFlexibleFormatAdexUtils").passGKForC2V() &&
                    (a = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.degrees_of_freedom_spec.creative_features_spec.carousel_to_video.enroll_status.set(
                      "OPT_OUT",
                    )(a)),
                  a
                );
              }
            });
          },
          [
            r("AdsFlexibleFormatFormatTransformationDataSourceActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
