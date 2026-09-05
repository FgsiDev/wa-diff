__d(
  "AdsPCAUnificationUtils",
  [
    "AdsAPIObjectives",
    "AdsCampaignGroupPromotedObject.flow",
    "AdsPCAUnificationDuplicationContentUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsPECreationMode",
    "gkx",
    "isFalsey",
    "isTruthy",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("15937");
    }
    function s(e) {
      e === void 0 && (e = !1);
      var t = !1;
      return (
        e === !0 ? (t = r("gkx")("19321")) : (t = r("gkx")("1192")),
        t ||
          o(
            "AdsPCAUnifiedFormatEligibilityUtils",
          ).isGKEnabledForPCAUWS2ScaledAlphaTestCell1(e, !0)
      );
    }
    function u(e) {
      return (
        e === void 0 && (e = !0),
        e === !0 ? r("gkx")("10960") : r("gkx")("10965")
      );
    }
    function c(e) {
      return (
        e === void 0 && (e = !1),
        e === !0 ? r("gkx")("25514") : r("gkx")("25515")
      );
    }
    function d() {
      return r("gkx")("20014");
    }
    function m(e) {
      return (
        e === void 0 && (e = !1),
        e === !0
          ? r("qex")._("151") === "test_creation_only"
          : r("qex")._("352") === "test_creation_only"
      );
    }
    function p(e) {
      return (
        e === void 0 && (e = !1),
        e === !0
          ? r("qex")._("151") === "test_creation_and_duplication"
          : r("qex")._("352") === "test_creation_and_duplication"
      );
    }
    function _(e) {
      return (e === void 0 && (e = !1), m(e) || p(e));
    }
    function f() {
      return u(!0) && r("gkx")("1905");
    }
    function g() {
      return u();
    }
    function h(t) {
      return C(t) && e();
    }
    function y(e, t) {
      return (t === void 0 && (t = !1), C(e) && u(t));
    }
    function C(e) {
      switch (e) {
        case r("AdsAPIObjectives").OUTCOME_SALES:
          return !0;
        default:
          return !1;
      }
    }
    function b(e) {
      return r("isTruthy")(e == null ? void 0 : e.is_pca_unified);
    }
    function v(e) {
      var t, n;
      return e == null
        ? null
        : b(e.campaignGroup)
          ? (t = e.adgroup.creative) == null
            ? void 0
            : t.product_set_id
          : (n = e.campaign.promoted_object) == null
            ? void 0
            : n.product_set_id;
    }
    function S(e) {
      var t;
      return (
        r("isTruthy")(e == null ? void 0 : e.is_pca_unified) &&
        r("isTruthy")(
          e == null || (t = e.promoted_object) == null
            ? void 0
            : t.product_catalog_id,
        )
      );
    }
    function R(e) {
      var t;
      return (
        r("isTruthy")(e == null ? void 0 : e.is_pca_unified) &&
        r("isFalsey")(
          (t = e.promoted_object) == null ? void 0 : t.product_catalog_id,
        )
      );
    }
    function L(e) {
      var t;
      return (
        r("isFalsey")(e == null ? void 0 : e.is_pca_unified) &&
        r("isFalsey")(
          e == null || (t = e.promoted_object) == null
            ? void 0
            : t.product_catalog_id,
        )
      );
    }
    function E(e) {
      var t;
      return (
        r("isTruthy")(e == null ? void 0 : e.collaborative_ads_partner_info) &&
        r("isTruthy")(
          e == null || (t = e.promoted_object) == null
            ? void 0
            : t.product_catalog_id,
        )
      );
    }
    function k(e) {
      var t;
      return (
        r("isTruthy")(e == null ? void 0 : e.is_pca_unified) &&
        r("isTruthy")(e == null ? void 0 : e.collaborative_ads_partner_info) &&
        r("isTruthy")(
          e == null || (t = e.promoted_object) == null
            ? void 0
            : t.product_catalog_id,
        )
      );
    }
    function I(e, t, n, a) {
      var i = a === r("AdsPECreationMode").DuplicateCampaigns;
      if (u()) {
        if (n != null) {
          if (n.isOriginCampaignGroupPcaUnified === !0 && e === !1)
            return o(
              "AdsPCAUnificationDuplicationContentUtils",
            ).adsPCAUnificationDisableNonUnifiedToUnifiedReparentingTooltip(i);
          if (n.isOriginCampaignGroupPcaUnified === !1 && e === !0) {
            var l = a === r("AdsPECreationMode").DuplicateCampaigns,
              s = a === r("AdsPECreationMode").DuplicateAdgroups,
              c = !1;
            if (l) {
              var d = r("isTruthy")(n.isL2PcaUnifiableWithCatalog),
                m = t === n.isL2PcaUnifiableWithCatalog;
              c = u() && r("justknobx")._("4808") && d && m;
            } else if (s) {
              var p = r("isTruthy")(n.l1CatalogId),
                _ = t === n.l1CatalogId;
              c = u() && r("justknobx")._("4808") && p && _;
            }
            if (!c)
              return o(
                "AdsPCAUnificationDuplicationContentUtils",
              ).adsPCAUnificationDisableNonUnifiedToUnifiedReparentingTooltip(
                i,
              );
          } else if (
            n.isOriginCampaignGroupPcaUnified &&
            e === !0 &&
            t !== n.originCampaignGroupCatalogId
          )
            return o(
              "AdsPCAUnificationDuplicationContentUtils",
            ).adsPCAUnificationDisableUnifiedToDifferentCatalogReparentingTooltip();
        }
      } else if (e === !0)
        return o(
          "AdsPCAUnificationDuplicationContentUtils",
        ).adsPCAUnificationDisableNonUnifiedToUnifiedReparentingLegacyTooltip();
    }
    function T(e, t) {
      return babelHelpers.extends(
        {},
        e != null
          ? e
          : o("AdsCampaignGroupPromotedObject.flow")
              .DEFAULT_CAMPAIGN_GROUP_PROMOTED_OBJECT,
        { product_catalog_id: t },
      );
    }
    function D(e, t) {
      return (
        r("isFalsey")(e) && r("AdsAPIObjectives").OUTCOME_SALES === t && u(!0)
      );
    }
    function x(e, t, n, o, a) {
      var i = e === "ad_set",
        l = e === "ad";
      if (!i && !l) return !1;
      var s = i ? r("isTruthy")(t) : r("isTruthy")(a);
      return s && D(n, o);
    }
    function $(e, t, n) {
      return e === "ad_set" ? t : e === "ad" ? n : null;
    }
    function P(e, t, n, o) {
      return e !== "ad" ? !1 : r("isTruthy")(o) && D(t, n);
    }
    function N(e) {
      if (e.promoted_object == null || !r("justknobx")._("196")) return e;
      var t = babelHelpers.extends({}, e.promoted_object);
      return (
        r("isTruthy")(t.boosted_product_set_id) &&
          delete t.boosted_product_set_id,
        r("isTruthy")(t.product_set_id) && delete t.product_set_id,
        r("isTruthy")(t.variation) && delete t.variation,
        babelHelpers.extends({}, e, { promoted_object: t })
      );
    }
    ((l.AdsIsPcaUnificationWs1GKEnabled = e),
      (l.AdsIsPcaUnificationWs1ScaledAlphaGKEnabled = s),
      (l.AdsIsPcaUnificationWs1BetaGKEnabled = u),
      (l.AdsIsPcaUnificationWs1BetaWithMandatoryCatalogGKEnabled = c),
      (l.AdsIsPcaUnificationWs1BetaMandatoryCatalogOverrideGKEnabled = d),
      (l.AdsIsPcaUnificationWs1ScaledAlphaV2CreationOnlyQEEnabled = m),
      (l.AdsIsPcaUnificationWs1ScaledAlphaV2CreationAndDuplicationQEEnabled =
        p),
      (l.AdsIsPcaUnificationWs1ScaledAlphaV2QEEnabled = _),
      (l.AdsIsPCAUWs1BetaL3DAHeavy = f),
      (l.AdsIsCollaborativeAdsGKEnabledForPCAUnification = g),
      (l.getIsEligibleForPCAUnificationAlphaRT = h),
      (l.getIsEligibleForPCAUnificationBeta = y),
      (l.isObjectiveEligibleForPCAUnification = C),
      (l.isPcaUnificationEnabled = b),
      (l.getProductSetIDForAdObject = v),
      (l.isPcaUnificationEnabledAndL3CatalogSelected = S),
      (l.isPcaUnificationEnabledAndL3CatalogNotSelected = R),
      (l.isPcaUnificationDisabledAndL3CatalogNotSelected = L),
      (l.isCpasEnabledAndL3CatalogSegmentSelected = E),
      (l.isPcaUnifiedCollaborativeAd = k),
      (l.getDisableDuplicationReparentingForPcaUnificationText = I),
      (l.addProductCatalogToPromotedObject = T),
      (l.shouldTransformNewL3ToPCAUnified = x),
      (l.getCatalogForPCAUTransformation = $),
      (l.shouldTransformNewL2ToPCAUnified = P),
      (l.cleanL2SpecForPCAUnification = N));
  },
  98,
);
