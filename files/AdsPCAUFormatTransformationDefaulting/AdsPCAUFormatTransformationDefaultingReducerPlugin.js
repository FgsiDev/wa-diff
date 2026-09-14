__d(
  "AdsPCAUFormatTransformationDefaultingReducerPlugin",
  [
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsFormatTransformationUtils",
    "AdsMutators",
    "AdsPCAUFormatTransformationDefaultingActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n;
              if (t.isOptOut === !0) {
                var a,
                  i = e;
                return (
                  (i = o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).adsAdgroupFormatTransformationFormatOptOutMutator(
                    e,
                    "single_media",
                  )),
                  (i = o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).adsAdgroupFormatTransformationFormatOptOutMutator(
                    i,
                    "sa_collection",
                  )),
                  (i = o("AdsMutators").chain.apply(
                    o("AdsMutators"),
                    [
                      (a = r(
                        "AdsAdgroupRecordAccessors",
                      )).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
                        "OPT_OUT",
                      ),
                      a.creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
                        "MANUAL",
                      ),
                      a.creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.enroll_status.set(
                        "OPT_OUT",
                      ),
                      a.creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.action_metadata.type.set(
                        "MANUAL",
                      ),
                      a.creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
                        "MANUAL",
                      ),
                      a.creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
                        "OPT_OUT",
                      ),
                    ].concat(
                      r("justknobx")._("1566")
                        ? [
                            r(
                              "AdsAdgroupRecordAccessors",
                            ).creative.creative_sourcing_spec.site_links_data_consented.enroll_status.set(
                              "OPT_OUT",
                            ),
                            r(
                              "AdsAdgroupRecordAccessors",
                            ).creative.creative_sourcing_spec.site_links_data_consented.action_metadata.type.set(
                              "MANUAL",
                            ),
                          ]
                        : [],
                    ),
                  )(i)),
                  (i = o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).adsAdgroupReactiveControlOptionOptOutWithBoundleMutationMutator(
                    i,
                    "carousel",
                    "manual_uploads",
                    [],
                    "MANUAL",
                  )),
                  (i = o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                    i,
                    "carousel",
                    "site_links",
                  )),
                  i
                );
              }
              var l = o(
                "AdsFormatTransformationUtils",
              ).getPcaUnificationUploadedMediaPresent(e);
              if (!l) return e;
              var s = e;
              s = o(
                "AdsAdgroupFormatTransformationMutators",
              ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                e,
                "single_media",
                "manual_uploads",
              );
              var u =
                (n = s) == null ||
                (n = n.creative) == null ||
                (n = n.creative_sourcing_spec) == null
                  ? void 0
                  : n.associated_product_set_id;
              return (
                u != null
                  ? ((s = o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                      s,
                      "carousel",
                      "manual_uploads",
                    )),
                    (s = o("AdsMutators").chain(
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.enroll_status.set(
                        "OPT_IN",
                      ),
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.action_metadata.type.set(
                        "MANUAL",
                      ),
                    )(s)),
                    o(
                      "AdsFormatTransformationUtils",
                    ).getIsFormatEligiblePlacementsAvailable(
                      null,
                      "sa_collection",
                      "catalog",
                      t.campaign,
                      !0,
                    ) &&
                      (s = o(
                        "AdsAdgroupFormatTransformationMutators",
                      ).adsAdgroupReactiveControlOptionOptInWithBoundleMutationMutator(
                        s,
                        "sa_collection",
                        "catalog",
                        "MANUAL",
                      )))
                  : (s = o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                      s,
                      "carousel",
                      "catalog",
                    )),
                s
              );
            });
          },
          [r("AdsPCAUFormatTransformationDefaultingActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
