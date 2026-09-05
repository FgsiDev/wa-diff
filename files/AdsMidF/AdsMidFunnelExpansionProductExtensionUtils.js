__d(
  "AdsMidFunnelExpansionProductExtensionUtils",
  [
    "CatalogBusinessEventsLoggerHelper",
    "CurrentAdAccount",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "unstructured_data_to_product";
    }
    function s(t, n, r) {
      return (
        e(t) ||
        (n == null
          ? void 0
          : n.some(function (e) {
              return e.account_id === r;
            })) === !0
      );
    }
    function u(e) {
      if ((e === void 0 && (e = !1), e)) {
        r("gkx")("22771");
        return;
      }
      r("gkx")("22772");
    }
    function c(e) {
      if ((e === void 0 && (e = !1), e)) {
        r("gkx")("23715");
        return;
      }
      r("gkx")("23716");
    }
    function d(e) {
      if ((e === void 0 && (e = !1), e)) {
        r("gkx")("1779");
        return;
      }
      r("gkx")("1984");
    }
    function m(e) {
      if ((e === void 0 && (e = !1), e)) {
        r("gkx")("1987");
        return;
      }
      r("gkx")("2038");
    }
    function p(e) {
      return e === !0
        ? "test"
        : e === !1
          ? "control"
          : e == null
            ? "not_in_universe"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function _(e) {
      if ((e === void 0 && (e = !0), e)) return r("qex")._("3498") === !0;
      var t = r("qex")._("2064"),
        n = t === !0;
      return (
        r("CatalogBusinessEventsLoggerHelper")
          .getAdsCreationLogger()
          .setEvent("ads_manager_x2p_offsite_leadgen_pe_qe_exposure")
          .setAdAccountID(r("CurrentAdAccount").getID())
          .setActionData({
            experimentGroupValue: p(t),
            is_enabled: String(n),
            universe: "x2p_offsite_leadgen_pe_universe",
          })
          .log(),
        n
      );
    }
    function f() {
      return r("qex")._("3498");
    }
    function g(e) {
      var t,
        n = p(y(!e.shouldLogExposure));
      if (!r("justknobx")._("5734")) {
        var o = p(f());
        r("CatalogBusinessEventsLoggerHelper")
          .getAdsCreationLogger()
          .setEvent("ads_manager_x2p_offsite_leadgen_pe_eligibility")
          .setAdAccountID(r("CurrentAdAccount").getID())
          .setCatalogID(e.catalogID)
          .setActionData({
            aa_experiment_group: n,
            adgroup_id: e.adgroupID == null ? "" : String(e.adgroupID),
            catalog_id: e.catalogID == null ? "" : String(e.catalogID),
            experiment_group: o,
            is_eligible_surface: String(e.isEligibleSurface),
            is_x2p_catalog: String(e.isX2PCatalog),
            page_id: e.pageID == null ? "" : String(e.pageID),
            product_set_id:
              e.productSetID == null ? "" : String(e.productSetID),
            should_log_exposure: String(e.shouldLogExposure),
            x2p_onboarding_status:
              (t = e.x2pOnboardingStatus) != null ? t : "null",
          })
          .log();
      }
    }
    function h(e) {
      (e === void 0 && (e = !0), y(e));
    }
    function y(e) {
      return e ? r("qex")._("4222") : r("qex")._("4234");
    }
    function C(e) {
      (e === void 0 && (e = !0), b(e));
    }
    function b(e) {
      return e ? r("qex")._("5097") : r("qex")._("5102");
    }
    ((l.isX2PCatalogCreationSource = e),
      (l.shouldIncludeSelectedCatalogForAdAccount = s),
      (l.isLeadsxWebsitePEEnabledAATest = u),
      (l.isLeadsxWebsitePEEnabledV2AATest = c),
      (l.isMidFunnelExpansionPEGuidanceAdoptionAATest = d),
      (l.isMidFunnelExpansionPEGuidanceNoHarmAATest = m),
      (l.isX2POffsiteLeadGenPEEnabled = _),
      (l.logX2POffsiteLeadGenPEEligibility = g),
      (l.isX2POffsiteLeadGenPEEnabledAATest = h),
      (l.isX2POffsiteLeadGenPEAAL1Test = C));
  },
  98,
);
