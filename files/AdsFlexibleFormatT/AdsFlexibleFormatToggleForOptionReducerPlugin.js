__d(
  "AdsFlexibleFormatToggleForOptionReducerPlugin",
  [
    "AdsAdgroupConnectedSourcesMutators",
    "AdsAdgroupFormatTransformationMutators",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatToggleForOptionActionFlux",
    "AdsMetadataConnectedSourcesUtils",
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
              var n, r;
              if (
                t.targetFormat === "da_collection" &&
                !t.context.isPCAUnifiedOldFlow &&
                !t.context.isPCAUnifiedScaledAlpha
              )
                return t.hasOptedIn
                  ? o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsDACollectionOptOutMutator(e)
                  : o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsDACollectionOptInMutator(e);
              if (t.dataSources != null && t.targetFormat === "collage")
                return t.hasOptedIn
                  ? o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsAdgroupMixedCollageOptOutMutator(e)
                  : o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsAdgroupMixedCollageOptInMutator(e);
              if (
                t.targetFormat === "single_media" &&
                t.dataSource === "catalog" &&
                t.context.originalFormat === "da_carousel" &&
                !t.context.isPCAUnifiedOldFlow &&
                !t.context.isPCAUnifiedScaledAlpha
              )
                return t.hasOptedIn
                  ? o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                      e,
                      t.targetFormat,
                      t.dataSource,
                      "catalog_single_media",
                    )
                  : o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                      e,
                      t.targetFormat,
                      t.dataSource,
                      "catalog_single_media",
                    );
              var a = (n = t.dataSources) != null ? n : [t.dataSource],
                i = t.context.existingPostPhotoCount;
              if (t.hasOptedIn) {
                var l,
                  s,
                  u =
                    (l =
                      (s = t.context.eligibleFormatDataSourceMap) == null
                        ? void 0
                        : s.get(t.targetFormat)) != null
                      ? l
                      : [],
                  c = e;
                for (var d of a)
                  c = o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).adsAdgroupReactiveControlOptionOptOutWithBoundleMutationMutator(
                    c,
                    t.targetFormat,
                    d,
                    u,
                    "MANUAL",
                    i,
                  );
                return c;
              }
              var m = e;
              if (
                t.dataSource === "catalog" &&
                t.context.firstEligibleProductSetId != null &&
                ((r = e.creative) == null ||
                (r = r.creative_sourcing_spec) == null
                  ? void 0
                  : r.associated_product_set_id) == null &&
                o("AdsFlexibleFormatAdexUtils").passGKForPEClawback()
              ) {
                var p = t.context.adObjectsList.some(function (t) {
                  return (
                    t.adgroup.id === e.id &&
                    o(
                      "AdsMetadataConnectedSourcesUtils",
                    ).isEngagementOnYourAdSetup(t.campaign, t.campaignGroup)
                  );
                });
                m = o(
                  "AdsAdgroupConnectedSourcesMutators",
                ).setConnectedSourcesCatalogEnrollStatusMutator(
                  m,
                  t.context.firstEligibleProductSetId,
                  !0,
                  "MANUAL",
                  null,
                  null,
                  null,
                  null,
                  !0,
                  null,
                  null,
                  null,
                  p,
                );
              }
              for (var _ of a)
                m = o(
                  "AdsAdgroupFormatTransformationMutators",
                ).adsAdgroupReactiveControlOptionOptInWithBoundleMutationMutator(
                  m,
                  t.targetFormat,
                  _,
                  "MANUAL",
                  i,
                );
              return m;
            });
          },
          [r("AdsFlexibleFormatToggleForOptionActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
