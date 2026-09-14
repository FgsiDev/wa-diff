__d(
  "AdsUEditorAdgroupSetUseStaticCardReducerPlugin",
  [
    "AdsAdgroupFormatTransformationMutators",
    "AdsMutators",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetUseStaticCardDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "DAFlexibleFormatUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var r = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var a = t.useStaticCard
                  ? o(
                      "AdsUEditorAdgroupChildAttachmentsMutators",
                    ).addLeadingStaticCard(e, !1)
                  : o(
                      "AdsUEditorAdgroupChildAttachmentsMutators",
                    ).removeLeadingStaticCard(e);
                return (
                  !t.useStaticCard &&
                    o(
                      "DAFlexibleFormatUtils",
                    ).isAdgroupEligibleForDACarouselIntroCardRevamp(a) &&
                    ((a = o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                      a,
                      "carousel",
                      "catalog",
                    )),
                    (a = o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                      a,
                      "da_collection",
                      "manual_uploads",
                    )),
                    o(
                      "DAFlexibleFormatUtils",
                    ).passFlexibleFormatAndRelatedMediaAdexGK("silent") &&
                      (a = o(
                        "AdsAdgroupFormatTransformationMutators",
                      ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                        a,
                        "single_media",
                        "manual_uploads",
                      )),
                    (a = o(
                      "AdsUEditorAdgroupMediaSourcingSpecMutators",
                    ).maybeAddDAInferredIntroCard(a, r))),
                  a
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetUseStaticCardDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
