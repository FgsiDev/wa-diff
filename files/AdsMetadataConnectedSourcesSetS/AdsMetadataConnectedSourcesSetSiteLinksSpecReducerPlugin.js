__d(
  "AdsMetadataConnectedSourcesSetSiteLinksSpecReducerPlugin",
  [
    "AdsAPIOptimizationGoals",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsConnectedSourcesCatalogEnrollStatusUtils",
    "AdsConnectedSourcesDataProvider",
    "AdsMetadataConnectedSourcesSetSiteLinksSpecActionFlux",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMetadataSiteExtensionUtils",
    "AdsMutators",
    "AdsSEConsentScopeRolloutUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetFeaturedOfferingSpecMutator",
    "SEFunnelLogger",
    "adsUEditorAccountIDSelector",
    "gkx",
    "immutable",
    "isStringNullOrEmpty",
    "justknobx",
    "userSettingsSelector",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS,
        r("AdsAPIOptimizationGoals").LINK_CLICKS,
      ],
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            userSettings: r("userSettingsSelector"),
            accountID: r("adsUEditorAccountIDSelector"),
          },
          function (t, n, a) {
            var i = a.accountID,
              l = a.userSettings,
              s =
                r("justknobx")._("850") &&
                o(
                  "AdsConnectedSourcesCatalogEnrollStatusUtils",
                ).isCatalogDefaultedOn(
                  r("AdsConnectedSourcesDataProvider")().pluginState,
                );
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t) {
              var a,
                u = { adgroup_id: t.get("id"), object_level: "ad_level" },
                c = o("SEFunnelLogger").getSEGKBlocklistFields(),
                d = {
                  is_defaulting_eligible:
                    ((a = n.siteLinksSpec) == null || (a = a.first()) == null
                      ? void 0
                      : a.is_defaulting_eligible) === !0,
                  recommendation_type: n.defaultOnType,
                };
              if (r("gkx")("356"))
                return (
                  o("SEFunnelLogger").logL1SiteLinkDefaultOff(
                    u,
                    babelHelpers.extends(
                      { se_default_enabled: !1, sticky_opt_out: !1 },
                      c,
                      d,
                    ),
                  ),
                  t
                );
              if (s) return t;
              if (
                !o("AdsMetadataSiteExtensionUtils").shouldDefaultOn(
                  n.siteLinksSpec,
                )
              )
                return (
                  o("SEFunnelLogger").logL1SiteLinkDefaultOff(
                    u,
                    babelHelpers.extends(
                      { se_default_enabled: !1, sticky_opt_out: !1 },
                      c,
                      d,
                    ),
                  ),
                  t
                );
              var m = n.siteLinksSpec,
                p = o(
                  "AdsMetadataConnectedSourcesUtils",
                ).sitelinkShouldStickyOptOut(
                  i,
                  l == null ? void 0 : l.getValue(),
                ),
                _ = o(
                  "AdsMetadataConnectedSourcesUtils",
                ).dynamicSEShouldStickyOptOutByGK(
                  i,
                  l == null ? void 0 : l.getValue(),
                );
              if (p && m && m.size > 0)
                return (
                  o("SEFunnelLogger").logL1SiteLinkDefaultOff(
                    u,
                    babelHelpers.extends(
                      { se_default_enabled: !1, sticky_opt_out: !0 },
                      c,
                      d,
                    ),
                  ),
                  t
                );
              var f = t;
              if (
                (r("isStringNullOrEmpty")(n == null ? void 0 : n.sourceURL) ||
                  (f = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.source_url.set(
                    n.sourceURL,
                    f,
                  )),
                m)
              ) {
                var g = r("immutable").List(
                  m.map(function (e) {
                    return r("immutable").Map({
                      site_link_title: e.site_link_title,
                      site_link_url: e.site_link_url,
                      site_link_image_hash: e.site_link_image_hash,
                      site_link_image_url: e.site_link_image_url,
                      site_link_recommendation_type:
                        e.site_link_recommendation_type,
                      site_link_hash: e.site_link_hash,
                      is_site_link_sticky: e.is_site_link_sticky,
                      site_link_language: e.site_link_language,
                      site_link_extra_metadata: e.site_link_extra_metadata,
                      site_link_url_anchor: e.site_link_url_anchor,
                      site_link_url_recommender_type:
                        e.site_link_url_recommender_type,
                      site_link_website_data_source:
                        e.site_link_website_data_source,
                      is_defaulting_eligible: e.is_defaulting_eligible,
                    });
                  }),
                );
                if (
                  ((f = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.site_links_spec.set(g)(f)),
                  !_ &&
                    o(
                      "AdsMetadataConnectedSourcesUtils",
                    ).isDynamicSEDefaultOptInEnabled() &&
                    ((f = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.dynamic_site_links_spec.enroll_status.set(
                      "OPT_IN",
                      f,
                    )),
                    (f = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
                      "OPT_IN",
                      f,
                    )),
                    (f = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
                      "DEFAULT",
                      f,
                    )),
                    (f = o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).dualWriteEPAFormatTransformationOptIn(f, "site_links"))),
                  g.size > 0)
                ) {
                  var h;
                  ((f = (h = r(
                    "AdsAdgroupRecordAccessors",
                  )).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
                    "OPT_IN",
                    f,
                  )),
                    (f =
                      h.creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
                        "DEFAULT",
                        f,
                      )),
                    (f =
                      h.creative.creative_sourcing_spec.site_links_data_consented.enroll_status.set(
                        "OPT_IN",
                        f,
                      )),
                    (f =
                      h.creative.creative_sourcing_spec.site_links_data_consented.action_metadata.type.set(
                        "DEFAULT",
                        f,
                      )),
                    (f = o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).dualWriteEPAFormatTransformationOptIn(f, "site_links")),
                    o(
                      "AdsSEConsentScopeRolloutUtils",
                    ).isInSEConsentScopeRollout() &&
                      (f = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.creative_sourcing_spec.site_links_data_consented.scope.set(
                        "DATA_CONSENT_ELIGIBLE",
                        f,
                      )),
                    (f = o(
                      "AdsUEditorAdgroupSetFeaturedOfferingSpecMutator",
                    ).removeDefaultFeaturedOfferingWhenSiteLinksOptedIn(f)));
                }
                if (n.defaultOnType === "BING_API") {
                  if (
                    n.optimizationGoal ===
                      r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
                    r("gkx")("1025")
                  )
                    return (
                      o("SEFunnelLogger").logL1SiteLinkDefaultOn(
                        u,
                        babelHelpers.extends({ se_default_enabled: !0 }, c, d),
                      ),
                      f
                    );
                  if (
                    n.optimizationGoal != null &&
                    e.includes(n.optimizationGoal) &&
                    r("gkx")("8267")
                  )
                    return (
                      o("SEFunnelLogger").logL1SiteLinkDefaultOn(
                        u,
                        babelHelpers.extends({ se_default_enabled: !0 }, c, d),
                      ),
                      f
                    );
                } else if (n.defaultOnType === "CRAWLED_HIGH_QUALITY") {
                  if (r("gkx")("8505") || r("gkx")("8506"))
                    return (
                      o("SEFunnelLogger").logL1SiteLinkDefaultOn(
                        u,
                        babelHelpers.extends({ se_default_enabled: !0 }, c, d),
                      ),
                      f
                    );
                } else {
                  if (
                    n.defaultOnType === "GEN_AI" ||
                    n.defaultOnType === "SHOP" ||
                    n.defaultOnType === "STICKY" ||
                    n.defaultOnType === "MANUAL" ||
                    n.defaultOnType === "MANUAL_CAMPAIGN" ||
                    n.defaultOnType === "SITE_LINK_RECOMMENDATION_V2" ||
                    n.defaultOnType === "LLM_JUDGE_DEFAULTING"
                  )
                    return (
                      o("SEFunnelLogger").logL1SiteLinkDefaultOn(
                        u,
                        babelHelpers.extends({ se_default_enabled: !0 }, c, d),
                      ),
                      f
                    );
                  if (
                    n.defaultOnType === "DSL_ELIGIBLE" &&
                    o(
                      "AdsMetadataConnectedSourcesUtils",
                    ).isDynamicSEDefaultOptInEnabled()
                  )
                    return (
                      o("SEFunnelLogger").logL1SiteLinkDefaultOn(
                        u,
                        babelHelpers.extends({ se_default_enabled: !0 }, c, d),
                      ),
                      f
                    );
                }
                return (
                  o("SEFunnelLogger").logL1SiteLinkDefaultOff(
                    u,
                    babelHelpers.extends({ se_default_enabled: !1 }, c, d),
                  ),
                  t
                );
              } else
                return (
                  (f = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.site_links_spec.delete(t)),
                  r("vulture")("CmUimqSbpxIU72mmlTG-tZY_YjE="),
                  f
                );
            });
          },
          [
            r("AdsMetadataConnectedSourcesSetSiteLinksSpecActionFlux")
              .actionType,
          ],
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
