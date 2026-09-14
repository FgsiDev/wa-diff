__d(
  "AdsMetadataConnectedSourcesSetSiteLinksOpportunityScoreApplySpecReducerPlugin",
  [
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsFlexibleFormatAdexUtils",
    "AdsMetadataConnectedSourcesSetSiteLinksOpportunityScoreApplySpecActionFlux",
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
    function e(e, t, n, r) {
      if (!t.siteLinksSpec) return e;
      var o = d(t.siteLinksSpec, r),
        a = s(e, o, t, n);
      return t.defaultOnType === "MANUAL" ? a : e;
    }
    function s(e, t, n, o) {
      var a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.site_links_spec.get(e),
        i = m(a, t),
        l = p(i),
        s = l.concat(t),
        c = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.site_links_spec.set(s)(e);
      return (t.size > 0 && (c = u(c, n, o)), c);
    }
    function u(e, t, n) {
      var r = _(e);
      if (t.shouldApplyFormatTransformation === !0) {
        var a = n.get(r.id);
        a != null && (r = f(r, a.campaign, a.campaignGroup));
      }
      return (
        (r = o("AdsAdgroupFormatTransformationMutators").syncFTSFromCFS(r)),
        r
      );
    }
    var c = {
      reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
        {
          parentData: o(
            "AdsUEditorAdgroupSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
          ),
        },
        function (t, n, r) {
          var a = r.parentData,
            i = n.applyToAnyRecommendationType === !0;
          return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t) {
            return e(t, n, a, i);
          });
        },
        [
          r(
            "AdsMetadataConnectedSourcesSetSiteLinksOpportunityScoreApplySpecActionFlux",
          ).actionType,
        ],
      ),
    };
    function d(e, t) {
      return e
        .filter(function (e) {
          return (
            e.site_link_id != null &&
            (t || o("AdsMetadataSiteExtensionUtils").isSiteLinkManual(e))
          );
        })
        .map(function (e) {
          return r("immutable").Map({
            site_link_id: e.site_link_id,
            site_link_title: e.site_link_title,
            site_link_url: e.site_link_url,
            site_link_image_hash: e.site_link_image_hash,
            site_link_image_url: e.site_link_image_url,
            site_link_recommendation_type: e.site_link_recommendation_type,
            site_link_hash: e.site_link_hash,
            is_site_link_sticky: e.is_site_link_sticky,
            site_link_language: e.site_link_language,
            site_link_extra_metadata: e.site_link_extra_metadata,
            site_link_url_recommender_type: e.site_link_url_recommender_type,
            site_link_website_data_source: e.site_link_website_data_source,
            is_defaulting_eligible: e.is_defaulting_eligible,
          });
        });
    }
    function m(e, t) {
      return (e || r("immutable").List()).filter(function (e) {
        return !t.some(function (t) {
          return t.get("site_link_url") === e.get("site_link_url");
        });
      });
    }
    function p(e) {
      return (e || r("immutable").List()).filter(function (e) {
        return (
          e.get("site_link_recommendation_type") === "MANUAL" ||
          e.get("site_link_recommendation_type") === "MANUAL_CAMPAIGN"
        );
      });
    }
    function _(e) {
      var t,
        n = e;
      return (
        (n = (t = r(
          "AdsAdgroupRecordAccessors",
        )).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
          "OPT_IN",
          n,
        )),
        (n =
          t.creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
            "DEFAULT",
            n,
          )),
        (n = o(
          "AdsAdgroupFormatTransformationMutators",
        ).dualWriteEPAFormatTransformationOptIn(n, "site_links")),
        (n =
          t.creative.creative_sourcing_spec.site_links_data_consented.enroll_status.set(
            "OPT_IN",
            n,
          )),
        (n =
          t.creative.creative_sourcing_spec.site_links_data_consented.action_metadata.type.set(
            "DEFAULT",
            n,
          )),
        o("AdsSEConsentScopeRolloutUtils").isInSEConsentScopeRollout() &&
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.site_links_data_consented.scope.set(
            "DATA_CONSENT_ELIGIBLE",
            n,
          )),
        n
      );
    }
    function f(e, t, n) {
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
    var g = c;
    l.default = g;
  },
  98,
);
