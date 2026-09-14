__d(
  "AdsMetadataConnectedSourcesSetSiteLinksBulkApplySpecReducerPlugin",
  [
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsFlexibleFormatAdexUtils",
    "AdsMetadataConnectedSourcesSetSiteLinksBulkApplySpecActionFlux",
    "AdsMetadataSiteExtensionUtils",
    "AdsMutators",
    "AdsSEConsentScopeRolloutUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
        {
          parentData: o(
            "AdsUEditorAdgroupSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
          ),
        },
        function (e, t, n) {
          var a = n.parentData,
            i = t.applyToAnyRecommendationType === !0;
          return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
            var n = e;
            if (t.siteLinksSpec) {
              var l = r("immutable").List(
                  t.siteLinksSpec
                    .filter(function (e) {
                      return (
                        e.site_link_id != null &&
                        (i ||
                          o("AdsMetadataSiteExtensionUtils").isSiteLinkManual(
                            e,
                          ))
                      );
                    })
                    .map(function (e) {
                      return r("immutable").Map({
                        site_link_id: e.site_link_id,
                        site_link_title: e.site_link_title,
                        site_link_url: e.site_link_url,
                        site_link_image_hash: e.site_link_image_hash,
                        site_link_image_url: e.site_link_image_url,
                        site_link_recommendation_type:
                          e.site_link_recommendation_type,
                        site_link_url_recommender_type:
                          e.site_link_url_recommender_type,
                        site_link_website_data_source:
                          e.site_link_website_data_source,
                        is_defaulting_eligible: e.is_defaulting_eligible,
                        site_link_hash: e.site_link_hash,
                        is_site_link_sticky: e.is_site_link_sticky,
                        site_link_language: e.site_link_language,
                        site_link_extra_metadata: e.site_link_extra_metadata,
                      });
                    }),
                ),
                u = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.site_links_spec.get(e),
                c = (u || r("immutable").List()).filter(function (e) {
                  return (
                    e.get("site_link_recommendation_type") !== "MANUAL" &&
                    e.get("site_link_recommendation_type") !== "MANUAL_CAMPAIGN"
                  );
                }),
                d = c.concat(l);
              if (
                ((n = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.site_links_spec.set(d)(n)),
                l.size > 0)
              ) {
                var m;
                if (
                  ((n = (m = r(
                    "AdsAdgroupRecordAccessors",
                  )).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
                    "OPT_IN",
                    n,
                  )),
                  (n =
                    m.creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
                      "DEFAULT",
                      n,
                    )),
                  (n = o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).dualWriteEPAFormatTransformationOptIn(n, "site_links")),
                  (n =
                    m.creative.creative_sourcing_spec.site_links_data_consented.enroll_status.set(
                      "OPT_IN",
                      n,
                    )),
                  (n =
                    m.creative.creative_sourcing_spec.site_links_data_consented.action_metadata.type.set(
                      "DEFAULT",
                      n,
                    )),
                  o(
                    "AdsSEConsentScopeRolloutUtils",
                  ).isInSEConsentScopeRollout() &&
                    (n = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.site_links_data_consented.scope.set(
                      "DATA_CONSENT_ELIGIBLE",
                      n,
                    )),
                  t.shouldApplyFormatTransformation === !0)
                ) {
                  var p = a.get(n.id);
                  p != null && (n = s(n, p.campaign, p.campaignGroup));
                }
                n = o("AdsAdgroupFormatTransformationMutators").syncFTSFromCFS(
                  n,
                );
              }
              return t.defaultOnType === "MANUAL" ? n : e;
            }
            return e;
          });
        },
        [
          r("AdsMetadataConnectedSourcesSetSiteLinksBulkApplySpecActionFlux")
            .actionType,
        ],
      ),
    };
    function s(e, t, n) {
      var r = e;
      return (
        o(
          "AdsFlexibleFormatAdexUtils",
        ).isEligibleForReactiveControlPESEOrAppInfo(t, n, r, !0) &&
          (r = o(
            "AdsAdgroupFormatTransformationMutators",
          ).adsAdgroupFormatTransformationDataSourceOptInMutator(
            r,
            "sa_collection",
            "site_links",
          )),
        r
      );
    }
    var u = e;
    l.default = u;
  },
  98,
);
