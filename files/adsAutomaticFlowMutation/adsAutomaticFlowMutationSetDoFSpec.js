__d(
  "adsAutomaticFlowMutationSetDoFSpec",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAutomaticFlowUtils",
    "AdsCreativeFeaturesPlatformSubfeatureMutators",
    "AdsFlexibleFormatAdexUtils",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutators",
    "AdsSEConsentScopeRolloutUtils",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupPartnershipAdsMutators",
    "AdsUEditorMessagingDestinationUtils",
    "PEFunnelLogger",
    "adsConvertAdObjectRecordToPlainJS",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a) {
      var i,
        l = e,
        d = !!(
          (i = e.creative) != null &&
          (i = i.degrees_of_freedom_spec) != null &&
          i.creative_features_spec
        ),
        p = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.get(e);
      return (
        t ? (l = c(l, o, a)) : (l = m(l, n)),
        d &&
          (l = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.set(p, l)),
        (l = t ? s(l, o, a) : u(l, o, a)),
        l
      );
    }
    function s(e, t, n, a) {
      a === void 0 && (a = "update-subfeatures");
      var i = o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.degrees_of_freedom_type.set(
          "USER_ENROLLED_AUTOFLOW",
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.standard_enhancements.enroll_status.set(
          "OPT_IN",
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.standard_enhancements.action_metadata.type.set(
          t,
        ),
      )(e);
      return (
        (i = r(
          "AdsAdgroupRecordAccessors",
        ).metadata.ad_standard_enhancements_edit_source.set(n, i)),
        a === "update-subfeatures" &&
          (i = o(
            "AdsCreativeFeaturesPlatformSubfeatureMutators",
          ).setSESubfeatureEnrollStatus(i, !0, t)),
        i
      );
    }
    function u(e, t, n) {
      var a,
        i = e;
      return (
        ((a = e.creative) == null || (a = a.degrees_of_freedom_spec) == null
          ? void 0
          : a.degrees_of_freedom_type) === "USER_ENROLLED_AUTOFLOW" &&
          (i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.degrees_of_freedom_type.delete(i)),
        (i = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.standard_enhancements.enroll_status.set(
            "OPT_OUT",
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.standard_enhancements.action_metadata.type.set(
            t,
          ),
        )(i)),
        (i = r(
          "AdsAdgroupRecordAccessors",
        ).metadata.ad_standard_enhancements_edit_source.set(n, i)),
        (i = o(
          "AdsCreativeFeaturesPlatformSubfeatureMutators",
        ).setSESubfeatureEnrollStatus(i, !1, t)),
        i
      );
    }
    function c(e, t, n) {
      var o = e;
      return (
        (o = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.delete(o)),
        s(o, t, n)
      );
    }
    function d(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.degrees_of_freedom_spec.delete(e);
    }
    function m(e, t) {
      var n = e;
      if (t != null) {
        var a = o("AdsUEditorAdgroupCachedUtils").getNonAutomaticFlowDoFSpec(
          t,
          e.id,
        );
        if (a != null)
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.set(a, n);
      }
      return d(n);
    }
    function p(e) {
      var t,
        n,
        a,
        i = e;
      return (
        ((t = e.creative) == null || (t = t.degrees_of_freedom_spec) == null
          ? void 0
          : t.degrees_of_freedom_type) === "USER_ENROLLED_AUTOFLOW" &&
          (i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.degrees_of_freedom_type.delete(i)),
        (i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.standard_enhancements.delete(
          i,
        )),
        (i = o(
          "AdsCreativeFeaturesPlatformSubfeatureMutators",
        ).adsDeleteSESubfeaturesSpecMutator(i)),
        Object.keys(
          (n =
            (a = r("adsConvertAdObjectRecordToPlainJS")(i).creative) == null ||
            (a = a.degrees_of_freedom_spec) == null
              ? void 0
              : a.creative_features_spec) != null
            ? n
            : {},
        ).length === 0 &&
          (i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.delete(i)),
        i
      );
    }
    function _(e, t, n) {
      var r,
        a = o("AdsAutomaticFlowUtils").isEligibleForAutomaticFlowLite(e, t),
        i = !!(
          (r = t.adgroup.creative) != null &&
          (r = r.degrees_of_freedom_spec) != null &&
          (r = r.creative_features_spec) != null &&
          r.standard_enhancements
        ),
        l = t.adgroup;
      return a && !i ? g(l, n(), void 0) : !a && i ? p(l) : l;
    }
    function f(e, t, n, a, i, l, s) {
      var u,
        c = s != null && s.length > 1,
        d = c ? s : a != null ? [a] : null,
        m =
          d != null &&
          d.length > 0 &&
          d.every(function (n) {
            return o(
              "AdsAutomaticFlowUtils",
            ).isEligibleForAPlusCUseExistingPost(e, t, n, i);
          }),
        _ = !!(
          (u = t.adgroup.creative) != null &&
          (u = u.degrees_of_freedom_spec) != null &&
          (u = u.creative_features_spec) != null &&
          u.standard_enhancements
        ),
        f = t.adgroup;
      if (m)
        return (
          (f = g(f, n(), l)),
          n().shouldOptIn &&
            (f = o(
              "AdsCreativeFeaturesPlatformSubfeatureMutators",
            ).adsDebundledStandardEnhancementsExistingPostSpecMutator(
              e,
              f,
              t,
              d,
            )),
          f
        );
      _ && (f = p(f));
      var h =
        d != null &&
        d.length > 0 &&
        d.some(function (e) {
          var t,
            n =
              (t = e.partnership_ads_identities) == null
                ? void 0
                : t.secondary_identities;
          return r("isTruthy")(n) && n.length > 0;
        });
      return (
        h &&
          (f = o(
            "AdsUEditorAdgroupPartnershipAdsMutators",
          ).removeUnsupportedAdvantagePlusCreativeFeatures(f)),
        f
      );
    }
    function g(e, t, n) {
      return t.shouldOptIn ? c(e, t.optInSource, n) : u(e, t.optInSource, n);
    }
    function h(e, t, n, a, i) {
      var l, s, u;
      i === void 0 && (i = !1);
      var c = e,
        d =
          (l = e.creative) == null ||
          (l = l.creative_sourcing_spec) == null ||
          (l = l.catalog) == null
            ? void 0
            : l.enroll_status,
        m =
          (s = e.creative) == null ||
          (s = s.creative_sourcing_spec) == null ||
          (s = s.catalog) == null ||
          (s = s.action_metadata) == null
            ? void 0
            : s.type,
        p =
          (u = e.creative) == null ||
          (u = u.degrees_of_freedom_spec) == null ||
          (u = u.creative_features_spec) == null
            ? void 0
            : u.product_extensions;
      if (d != null && m != null && p == null) {
        var _ = i === !0 ? "OPT_OUT" : d,
          f =
            i === !0
              ? "STICKY"
              : o(
                  "AdsMetadataConnectedSourcesUtils",
                ).convertAdsConnectedSourcesCatalogActionSourceToPEActionSource(
                  m,
                );
        (o("PEFunnelLogger").logPEAutoToggledForExistingPost(
          { adgroup_id: e.id },
          {
            isPartnershipAd: t,
            isStickyOptOut: i === !0,
            enrollStatus: _,
            actionType: f,
          },
        ),
          (c = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
            _,
            c,
          )),
          (c = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
            f,
            c,
          )),
          n !== !0 &&
            a !== !0 &&
            !i &&
            ((c = r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.enroll_status.set(
              "OPT_IN",
              c,
            )),
            (c = r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.action_metadata.type.set(
              "DEFAULT",
              c,
            ))));
      }
      return c;
    }
    function y(e, t) {
      var n,
        a,
        i,
        l = t,
        s =
          (n = e.creative) == null ||
          (n = n.degrees_of_freedom_spec) == null ||
          (n = n.creative_features_spec) == null ||
          (n = n.site_extensions) == null
            ? void 0
            : n.enroll_status,
        u =
          (a = e.creative) == null ||
          (a = a.degrees_of_freedom_spec) == null ||
          (a = a.creative_features_spec) == null ||
          (a = a.site_extensions) == null ||
          (a = a.action_metadata) == null
            ? void 0
            : a.type,
        c =
          (i = e.creative) == null || (i = i.creative_sourcing_spec) == null
            ? void 0
            : i.site_links_spec;
      if (s != null && u != null && c != null) {
        var d,
          m = o("AdsFlexibleFormatAdexUtils").coerceFeatureActionToSourceAction(
            u,
          ),
          p = (d = c == null ? void 0 : c.size) != null ? d : 0,
          _ = p > 0 ? "OPT_IN" : "OPT_OUT";
        ((l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
          s,
          l,
        )),
          (l = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
            u,
            l,
          )),
          (l = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.site_links_data_consented.enroll_status.set(
            _,
            l,
          )),
          (l = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.site_links_data_consented.action_metadata.type.set(
            m != null ? m : "DEFAULT",
            l,
          )),
          o("AdsSEConsentScopeRolloutUtils").isInSEConsentScopeRollout() &&
            (l = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.site_links_data_consented.scope.set(
              "DATA_CONSENT_ELIGIBLE",
              l,
            )));
      }
      return l;
    }
    function C(e, t, n, a) {
      var i = t;
      if (
        o("AdsUEditorMessagingDestinationUtils").isCTM(n) &&
        e != null &&
        o("AdsAutomaticFlowUtils").isSupportedCTMPEExistingPost(e) &&
        a &&
        o(
          "AdsAPIAdgroupRecordUtils",
        ).isExistingPostMultiPhotoAdsOrPublishedStatus(t)
      ) {
        var l,
          s =
            (l = r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .creative_features_spec.multi_photo_to_video.enroll_status) !=
            null
              ? l
              : "OPT_IN",
          u = s !== "OPT_OUT";
        ((i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
          u ? "OPT_IN" : "OPT_OUT",
          i,
        )),
          (i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
            "MANUAL",
            i,
          )));
      } else
        o("AdsUEditorMessagingDestinationUtils").isCTM(n) &&
          e != null &&
          o("AdsAutomaticFlowUtils").isSupportedCTMPEExistingPost(e) &&
          a &&
          ((i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
            "OPT_IN",
            i,
          )),
          (i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
            "MANUAL",
            i,
          )));
      return i;
    }
    ((l.adsAutomaticFlowMutationSetDoFSpec = e),
      (l.adsOptInStandardEnhancementsMutator = s),
      (l.adsOptOutStandardEnhancementsMutator = u),
      (l.adsDeleteDoFSpecMutator = d),
      (l.adsDeleteStandardEnhancementSpecMutator = p),
      (l.adsAutomaticFlowLiteSpecMutator = _),
      (l.adsStandardEnhancementsExistingPostSpecMutator = f),
      (l.adsStandardEnhancementsMutator = g),
      (l.adsSetProductExtensionsExistingPostMutator = h),
      (l.adsSetSiteExtensionsExistingPostMutator = y),
      (l.adsUseSMCProductExtensionExistingPostSpecMutator = C));
  },
  98,
);
