__d(
  "adsUEditorIsEligibleForCTMCatalogProductSelector",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMidFunnelExpansionProductExtensionUtils",
    "AdsPCAUnificationUtils",
    "CTMSMCCatalogAdAdoptionLogger",
    "CTWAAutogenCatalogGuidanceLifecycleSitevarConfig",
    "CatalogAdoptionExperimentationUtils",
    "ClickToWhatsAppFeatureGating",
    "LoadObject",
    "ProductSetAPIClientUtils",
    "ServerTime",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupAPlusCProductExtensionFirstEligibleProductSetSelector",
    "adsUEditorAdgroupConnectedSourcesProductSetSelector",
    "adsUEditorCTXSMCCatalogSelector",
    "adsUEditorIsEligibleForCTMCatalogProductSelectorUtils",
    "adsUEditorODAXTranslatedObjectivesForSelectedAdgroupsSelector",
    "adsUEditorSelectedCampaignGroupPlainObjectsSelector",
    "adsUEditorSelectedCampaignPlainObjectsSelector",
    "adsUEditorSelectedPageSelector",
    "cr:3707",
    "cr:7232",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("cr:7232") != null ? n("cr:7232") : n("cr:3707"),
      s = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return (
            t.length > 0 &&
            t.every(function (e) {
              var t,
                n = e.adgroup;
              return (
                ((t = n.creative) == null ||
                (t = t.degrees_of_freedom_spec) == null ||
                (t = t.creative_features_spec) == null ||
                (t = t.product_extensions) == null
                  ? void 0
                  : t.enroll_status) === "OPT_OUT"
              );
            })
          );
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupProductExtensionsExplicitlyOptedOutSelector",
        },
      ),
      u = 1e3;
    function c(e) {
      var t = e.guidanceDismissalCount,
        n = e.lastGuidanceDismissedTimeSeconds,
        o = e.nowMs;
      return t >=
        r("CTWAAutogenCatalogGuidanceLifecycleSitevarConfig").dismissal_limit
        ? "dismissed_max"
        : n != null &&
            o - n * u <
              r("CTWAAutogenCatalogGuidanceLifecycleSitevarConfig")
                .cooldown_seconds *
                u
          ? "cooldown_hidden"
          : "show";
    }
    function d(e) {
      var t = e.guidanceDismissalCount,
        n = e.lastGuidanceDismissedTimeSeconds;
      return (
        c({
          guidanceDismissalCount: t,
          lastGuidanceDismissedTimeSeconds: n,
          nowMs: o("ServerTime").getMillis(),
        }) !== "show"
      );
    }
    function m(e) {
      var t = e.filter(function (e) {
        return e === r("AdCampaignDestination").WHATSAPP;
      }).length;
      return t === 0 ? "none" : t === e.length ? "all" : "mixed";
    }
    function p(e) {
      return (
        e.length > 0 &&
        e.every(function (e) {
          return (
            e.objective != null &&
            o(
              "AdsMetadataConnectedSourcesUtils",
            ).CTWAPESupportedObjectives.includes(e.objective)
          );
        })
      );
    }
    function _(e, t) {
      if (e.hasError())
        return (
          e.getError() instanceof
          o("ProductSetAPIClientUtils").NoEligibleProductSetsError
        );
      var n = e.hasValueWithoutError() ? e.getValueEnforcing() : null;
      return (
        (n == null ? void 0 : n.catalogID) != null &&
        t != null &&
        String(n.catalogID) === String(t)
      );
    }
    var f = r("adsCreateStoreSelector")(
        [],
        function () {
          return function () {
            return r("LoadObject").withValue(null, { creatorModuleID: i.id });
          };
        },
        { name: i.id + ".adsCTMCatalogProductEmptySelector" },
      ),
      g =
        e != null
          ? r("adsCreateStoreSelector")(
              [e],
              function () {
                return function (t, o) {
                  var a = o === r("AdCampaignDestination").WHATSAPP,
                    l = a ? n("cr:3707") != null : n("cr:7232") != null;
                  return l
                    ? e.get(t)
                    : r("LoadObject").withValue(null, {
                        creatorModuleID: i.id,
                      });
                };
              },
              { name: i.id },
            )
          : f,
      h = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignGroupPlainObjectsSelector"),
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          r("adsUEditorSelectedPageSelector"),
          g,
          r(
            "adsUEditorAdgroupAPlusCProductExtensionFirstEligibleProductSetSelector",
          ),
          r("adsUEditorAdgroupConnectedSourcesProductSetSelector"),
          s,
        ],
        function (t, n, r, a, i, l, s) {
          var e, u, c;
          if (
            m(
              n.map(function (e) {
                return e.destination_type;
              }),
            ) !== "all" ||
            t.some(o("AdsPCAUnificationUtils").isPcaUnificationEnabled) ||
            !p(t)
          )
            return !1;
          var d = n[0],
            f =
              (e =
                d == null || (u = d.promoted_object) == null
                  ? void 0
                  : u.page_id) != null
                ? e
                : r == null || (c = r.getValue()) == null
                  ? void 0
                  : c.id;
          if (f == null) return !1;
          var g = l.getValue();
          if (
            g != null &&
            !s &&
            !o(
              "AdsMidFunnelExpansionProductExtensionUtils",
            ).isX2PCatalogCreationSource(g.catalogOriginalCreationSource)
          )
            return !1;
          var h = a(f, d == null ? void 0 : d.destination_type).getValue(),
            y =
              (h == null ? void 0 : h.is_x2p_catalog_selector_eligible) === !0;
          return y && (s || _(i, h == null ? void 0 : h.ad_catalog_id));
        },
        { name: i.id + ".adsUEditorAdgroupIsCTWAX2PExposureEligibleSelector" },
      ),
      y = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          r("adsUEditorSelectedPageSelector"),
          r("adsGetUniformValueSelector")(
            r("adsUEditorODAXTranslatedObjectivesForSelectedAdgroupsSelector"),
            r("AdsAPIObjectives").NONE,
          ),
          g,
        ],
        function (t, n, a, i) {
          var e,
            l,
            s,
            u = t[0],
            c =
              u == null || (e = u.promoted_object) == null ? void 0 : e.page_id,
            d = c;
          if (c == null) {
            var m;
            if (
              a === r("AdsAPIObjectives").VIDEO_VIEWS ||
              a === r("AdsAPIObjectives").POST_ENGAGEMENT
            ) {
              var p;
              d = n == null || (p = n.getValue()) == null ? void 0 : p.id;
            }
            ((c = n == null || (m = n.getValue()) == null ? void 0 : m.id),
              o("CTMSMCCatalogAdAdoptionLogger").logSMCProductSelectionAMEvents(
                o("CTMSMCCatalogAdAdoptionLogger")
                  .CtmSMCCatalogAdAdoptionMessage.ImprovedIsSMCELigibleCheck,
                c,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                JSON.stringify({
                  objective: a,
                  originalPageID: d,
                  newPageID: c,
                  hasSelectedPage: !!(n != null && n.getValue()),
                }),
              ));
          }
          return c == null
            ? !1
            : (l =
                  (s = i(
                    c,
                    u == null ? void 0 : u.destination_type,
                  ).getValue()) == null
                    ? void 0
                    : s.is_eligible) != null
              ? l
              : !1;
        },
        { name: i.id + ".adsUEditorAdgroupIsSMCEligibleSelector" },
      ),
      C = r("adsCreateSelector")(
        [
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
          g,
          r("adsUEditorSelectedPageSelector"),
        ],
        function (t, n, r) {
          return o(
            "adsUEditorIsEligibleForCTMCatalogProductSelectorUtils",
          ).adsUEditorAdgroupIsSMCEligibleSelectorInMapLogic(t, n, r);
        },
        { name: i.id + ".adsUEditorAdgroupIsSMCEligibleSelectorInMap" },
      ),
      b = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          r("adsUEditorSelectedPageSelector"),
          g,
        ],
        function (t, n, r) {
          var e = t[0];
          return o(
            "adsUEditorIsEligibleForCTMCatalogProductSelectorUtils",
          ).adsUEditorAdsCatalogIdForPage(t, n, function (t) {
            return r(t, e == null ? void 0 : e.destination_type);
          });
        },
        { name: i.id + ".adsUEditorAdsCatalogIdForPageSelector" },
      ),
      v = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignGroupPlainObjectsSelector"),
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          r("adsUEditorSelectedPageSelector"),
          g,
          y,
        ],
        function (t, n, r, a, i) {
          var e,
            l,
            s,
            u,
            c = n[0],
            d = m(
              n.map(function (e) {
                return e.destination_type;
              }),
            );
          if (
            d === "mixed" ||
            t.some(o("AdsPCAUnificationUtils").isPcaUnificationEnabled)
          )
            return !1;
          var _ = d === "all";
          if (_) {
            if (
              !p(t) ||
              !o(
                "ClickToWhatsAppFeatureGating",
              ).isCTWAAutogenCatalogTreatmentEnabled(
                c == null ? void 0 : c.destination_type,
              )
            )
              return !1;
          } else if (i) return !1;
          var f =
            (e =
              c == null || (l = c.promoted_object) == null
                ? void 0
                : l.page_id) != null
              ? e
              : r == null || (s = r.getValue()) == null
                ? void 0
                : s.id;
          return f == null
            ? !1
            : ((u = a(f, c == null ? void 0 : c.destination_type).getValue()) ==
              null
                ? void 0
                : u.is_auto_gen_catalog_eligible) === !0;
        },
        { name: i.id + ".adsUEditorAdgroupIsAutoGenCatalogEligibleSelector" },
      ),
      S = r("adsCreateSelector")(
        [
          o("adsUEditorCTXSMCCatalogSelector")
            .adsUEditorIsCampaignCTMAdSelector,
          r("adsUEditorSelectedCampaignGroupPlainObjectsSelector"),
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          r("adsUEditorSelectedPageSelector"),
          g,
          y,
        ],
        function (t, n, a, i, l, s) {
          var e,
            u,
            c,
            d,
            _ = a[0],
            f = m(
              a.map(function (e) {
                return e.destination_type;
              }),
            );
          if (
            f === "mixed" ||
            n.some(o("AdsPCAUnificationUtils").isPcaUnificationEnabled)
          )
            return !1;
          var g = f === "all";
          if (g) {
            if (
              !p(n) ||
              !o(
                "ClickToWhatsAppFeatureGating",
              ).isCTWAAutogenCatalogTreatmentEnabled(
                _ == null ? void 0 : _.destination_type,
              )
            )
              return !1;
          } else if (s) return !1;
          if (r("justknobx")._("3308") && !t && !g) return !1;
          var h =
            (e =
              _ == null || (u = _.promoted_object) == null
                ? void 0
                : u.page_id) != null
              ? e
              : i == null || (c = i.getValue()) == null
                ? void 0
                : c.id;
          return h == null
            ? !1
            : ((d = l(h, _ == null ? void 0 : _.destination_type).getValue()) ==
              null
                ? void 0
                : d.is_x2p_catalog_selector_eligible) === !0;
        },
        {
          name: i.id + ".adsUEditorAdgroupIsX2PCatalogSelectorEligibleSelector",
        },
      ),
      R = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          r("adsUEditorSelectedPageSelector"),
          g,
        ],
        function (t, n, r) {
          var e,
            o,
            a,
            i,
            l = t[0],
            s =
              (e =
                l == null || (o = l.promoted_object) == null
                  ? void 0
                  : o.page_id) != null
                ? e
                : n == null || (a = n.getValue()) == null
                  ? void 0
                  : a.id;
          return s == null
            ? !1
            : ((i = r(s, l == null ? void 0 : l.destination_type).getValue()) ==
              null
                ? void 0
                : i.is_x2p_catalog_selector_eligible_aa_test) === !0;
        },
        { name: i.id + ".adsUEditorAdgroupIsX2PEligibleAATestSelector" },
      ),
      L = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          r("adsUEditorSelectedPageSelector"),
          g,
          v,
        ],
        function (t, n, r, o) {
          var e, a, i, l;
          if (!o) return !1;
          var s = t[0],
            u =
              (e =
                s == null || (a = s.promoted_object) == null
                  ? void 0
                  : a.page_id) != null
                ? e
                : n == null || (i = n.getValue()) == null
                  ? void 0
                  : i.id;
          return u == null
            ? !1
            : ((l = r(u, s == null ? void 0 : s.destination_type).getValue()) ==
              null
                ? void 0
                : l.autogen_catalog_consent_status) === "CONSENTED";
        },
        { name: i.id + ".adsUEditorAdgroupIsAutogenCatalogConsentedSelector" },
      ),
      E = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          r("adsUEditorSelectedPageSelector"),
          g,
        ],
        function (t, n, r) {
          var e,
            o,
            a,
            i,
            l = t[0],
            s =
              (e =
                l == null || (o = l.promoted_object) == null
                  ? void 0
                  : o.page_id) != null
                ? e
                : n == null || (a = n.getValue()) == null
                  ? void 0
                  : a.id;
          return s == null
            ? null
            : (i = r(s, l == null ? void 0 : l.destination_type).getValue()) ==
                null
              ? void 0
              : i.catalog_info;
        },
        { name: i.id + ".adsUEditorAdsCatalogInfoForPageSelector" },
      ),
      k = r("adsCreateSelector")(
        [
          o("adsUEditorCTXSMCCatalogSelector")
            .adsUEditorIsCampaignCTMAdSelector,
          r("adsUEditorSelectedCampaignGroupPlainObjectsSelector"),
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          r("adsUEditorSelectedPageSelector"),
          g,
          y,
          r(
            "adsUEditorAdgroupAPlusCProductExtensionFirstEligibleProductSetSelector",
          ),
        ],
        function (t, n, r, a, i, l, s) {
          var e,
            u,
            c,
            d = r[0],
            f = m(
              r.map(function (e) {
                return e.destination_type;
              }),
            );
          if (
            f === "mixed" ||
            n.some(o("AdsPCAUnificationUtils").isPcaUnificationEnabled)
          )
            return !1;
          var g = f === "all";
          if (g) {
            if (
              !p(n) ||
              !o(
                "ClickToWhatsAppFeatureGating",
              ).isCTWAAutogenCatalogTreatmentEnabled(
                d == null ? void 0 : d.destination_type,
              )
            )
              return !1;
          } else if (!t || l) return !1;
          var h =
            (e =
              d == null || (u = d.promoted_object) == null
                ? void 0
                : u.page_id) != null
              ? e
              : a == null || (c = a.getValue()) == null
                ? void 0
                : c.id;
          if (h == null) return !1;
          var y = i(h, d == null ? void 0 : d.destination_type).getValue(),
            C =
              (y == null ? void 0 : y.is_x2p_catalog_selector_eligible) === !0;
          return C
            ? g
              ? _(s, y == null ? void 0 : y.ad_catalog_id)
              : o(
                  "CatalogAdoptionExperimentationUtils",
                ).checkExpForCatalogAdoptionExperimentation(
                  "cat_meta_product_growth_2026_h2_ibt",
                  "ctx_pe_with_x2p",
                  null,
                  null,
                  !0,
                ) ||
                o(
                  "CatalogAdoptionExperimentationUtils",
                ).checkExpForCatalogAdoptionExperimentation(
                  "mid_funnel_expansion_ctx_pe",
                  "ctx_pe_with_x2p",
                  null,
                  null,
                  !0,
                ) ||
                o(
                  "CatalogAdoptionExperimentationUtils",
                ).checkExpForCatalogAdoptionExperimentation(
                  "meta_product_growth_2026_h2_launch_round_1",
                  "ctx_pe_with_x2p",
                  null,
                  null,
                  !0,
                )
            : !1;
        },
        { name: i.id + ".adsUEditorAdgroupIsX2PDefaultOptInEligibleSelector" },
      ),
      I = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          r("adsUEditorSelectedPageSelector"),
          g,
        ],
        function (t, n, r) {
          var e,
            a,
            i,
            l,
            s = t[0];
          if (
            o(
              "ClickToWhatsAppFeatureGating",
            ).isCTWAAutogenCatalogTreatmentEnabled(
              s == null ? void 0 : s.destination_type,
            )
          )
            return !1;
          var u =
            (e =
              s == null || (a = s.promoted_object) == null
                ? void 0
                : a.page_id) != null
              ? e
              : n == null || (i = n.getValue()) == null
                ? void 0
                : i.id;
          return u == null
            ? !1
            : ((l = r(u, s == null ? void 0 : s.destination_type).getValue()) ==
              null
                ? void 0
                : l.autogen_catalog_default_opt_in_status) === "OPTED_OUT";
        },
        { name: i.id + ".adsUEditorAdgroupIsX2PStickyOptedOutSelector" },
      ),
      T = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          r("adsUEditorSelectedPageSelector"),
          g,
        ],
        function (t, n, r) {
          var e,
            o,
            a,
            i,
            l,
            s = t[0],
            u =
              (e =
                s == null || (o = s.promoted_object) == null
                  ? void 0
                  : o.page_id) != null
                ? e
                : n == null || (a = n.getValue()) == null
                  ? void 0
                  : a.id;
          return u == null
            ? 0
            : (i =
                  (l = r(
                    u,
                    s == null ? void 0 : s.destination_type,
                  ).getValue()) == null
                    ? void 0
                    : l.ctwa_guidance_dismissal_count) != null
              ? i
              : 0;
        },
        { name: i.id + ".adsUEditorAdgroupCTWAGuidanceDismissalCountSelector" },
      ),
      D = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          r("adsUEditorSelectedPageSelector"),
          g,
        ],
        function (t, n, r) {
          var e,
            o,
            a,
            i,
            l,
            s = t[0],
            u =
              (e =
                s == null || (o = s.promoted_object) == null
                  ? void 0
                  : o.page_id) != null
                ? e
                : n == null || (a = n.getValue()) == null
                  ? void 0
                  : a.id;
          return u == null
            ? 0
            : (i =
                  (l = r(
                    u,
                    s == null ? void 0 : s.destination_type,
                  ).getValue()) == null
                    ? void 0
                    : l.ctwa_last_guidance_dismissed_time) != null
              ? i
              : 0;
        },
        {
          name:
            i.id + ".adsUEditorAdgroupCTWALastGuidanceDismissedTimeSelector",
        },
      );
    ((l.getCTWAGuidanceLifecycleState = c),
      (l.isCTWAGuidanceLifecycleSuppressed = d),
      (l.adsCTMCatalogProductSelector = g),
      (l.adsUEditorAdgroupIsCTWAX2PExposureEligibleSelector = h),
      (l.adsUEditorAdgroupIsSMCEligibleSelector = y),
      (l.adsUEditorAdgroupIsSMCEligibleSelectorInMap = C),
      (l.adsUEditorAdsCatalogIdForPageSelector = b),
      (l.adsUEditorAdgroupIsAutoGenCatalogEligibleSelector = v),
      (l.adsUEditorAdgroupIsX2PCatalogSelectorEligibleSelector = S),
      (l.adsUEditorAdgroupIsX2PEligibleAATestSelector = R),
      (l.adsUEditorAdgroupIsAutogenCatalogConsentedSelector = L),
      (l.adsUEditorAdsCatalogInfoForPageSelector = E),
      (l.adsUEditorAdgroupIsX2PDefaultOptInEligibleSelector = k),
      (l.adsUEditorAdgroupIsX2PStickyOptedOutSelector = I),
      (l.adsUEditorAdgroupCTWAGuidanceDismissalCountSelector = T),
      (l.adsUEditorAdgroupCTWALastGuidanceDismissedTimeSelector = D));
  },
  98,
);
