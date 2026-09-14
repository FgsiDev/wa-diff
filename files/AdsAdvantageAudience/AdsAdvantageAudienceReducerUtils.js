__d(
  "AdsAdvantageAudienceReducerUtils",
  [
    "AdsBuyingTypes",
    "AdsCampaignRecordAccessors",
    "AdsCustomAudienceType",
    "AdsHECAdvantageAudienceUtils",
    "AdsMutators",
    "AdsTargetAsSignal",
    "AdsTargetingAsSignalUtils",
    "AdsUEditorCampaignSetSavedAudienceReducerUtils",
    "AdsUEditorCampaignSetTargetingAutomationCreativeAudiencePairingReducerUtils",
    "AdsValidationConsts",
    "CapaUtils",
    "adsCommonTargetingGetDefaultCountry",
    "adsDeleteProductAudienceSpecsFromCampaignRecord",
    "adsTargetingGetDefaultTargetingSpec",
    "immutable",
    "mergeCampaignTargetingRelatationTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return C(t) ? f(t, 0) : t;
      },
      s = function (t) {
        return function (e) {
          return t ? f(e, 1) : e;
        };
      },
      u = function (t, n) {
        if (n === 1) {
          var e = t.getIn([
            "targeting",
            "targeting_automation",
            "creative_audience_pairing",
          ]);
          if (e != null)
            return r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_automation.creative_audience_pairing.delete(
              t,
            );
        }
        return t;
      },
      c = function (t, n, a, i, l) {
        return n === 0 &&
          (r("CapaUtils").shouldEnableCapaForCampaignWhenAdvantageTurnedOff(
            t,
            a,
            i,
          ) ||
            r("CapaUtils").shouldEnableCapaL0ForCampaignWhenAdvantageTurnedOff(
              t,
              a,
              i,
              l,
            ))
          ? o(
              "AdsUEditorCampaignSetTargetingAutomationCreativeAudiencePairingReducerUtils",
            ).updateCampaignCreativeAudiencePairing(t, 1)
          : t;
      },
      d = function (t) {
        var e = t.targeting_as_signal;
        return (
          e === r("AdsTargetAsSignal").DTAAS ||
          e === r("AdsTargetAsSignal").DTAAS_AND_LALAAS
        );
      },
      m = function (t) {
        var e = t.targeting_as_signal;
        return (
          e === r("AdsTargetAsSignal").LALAAS ||
          e === r("AdsTargetAsSignal").DTAAS_AND_LALAAS
        );
      },
      p = function (t, n, o) {
        return n !== 1 && o
          ? r("AdsCampaignRecordAccessors").targeting_as_signal.delete(t)
          : t;
      },
      _ = function (t, n) {
        return n === 1 && !d(t)
          ? r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_optimization.set("expansion_all", t)
          : r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_optimization.delete(t);
      },
      f = function (t, n) {
        return n === 1
          ? r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_automation.advantage_audience.set(1, t)
          : r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_automation.advantage_audience.set(0, t);
      },
      g = function (t) {
        var e;
        return (e = r(
          "AdsCampaignRecordAccessors",
        ).targeting.custom_audiences.get(t)) == null
          ? void 0
          : e.some(function (e) {
              return (
                e.get("subtype") !==
                r("AdsCustomAudienceType").SUBTYPES.LOOKALIKE
              );
            });
      },
      h = function (t) {
        var e;
        return (e = r(
          "AdsCampaignRecordAccessors",
        ).targeting.custom_audiences.get(t)) == null
          ? void 0
          : e.some(function (e) {
              return (
                e.get("subtype") ===
                r("AdsCustomAudienceType").SUBTYPES.LOOKALIKE
              );
            });
      },
      y = function (t, n, a) {
        if (n === 1) {
          var e = t;
          if (g(e)) {
            var i;
            e = r("mergeCampaignTargetingRelatationTypes")(
              e,
              ((i = {}), (i.custom_audience = 1), i),
            );
          }
          if (
            h(e) &&
            !m(e) &&
            !o("AdsTargetingAsSignalUtils").isCampaignGroupRegulated(a)
          ) {
            var l;
            e = r("mergeCampaignTargetingRelatationTypes")(
              e,
              ((l = {}), (l.lookalike = 1), l),
            );
          }
          return e;
        }
        return r(
          "AdsCampaignRecordAccessors",
        ).targeting.targeting_relaxation_types.delete(t);
      },
      C = function (t) {
        var e;
        return (
          ((e = t.targeting) == null || (e = e.targeting_automation) == null
            ? void 0
            : e.advantage_audience) === 1
        );
      },
      b = function (t, n, o) {
        var e = t,
          a = t.targeting.age_range,
          i = a == null ? void 0 : a.first();
        if (o) {
          if (i != null && i < n) {
            var l = a == null ? void 0 : a.last();
            e = r("AdsCampaignRecordAccessors").targeting.age_range.set(
              r("immutable").fromJS([n, l != null && l > n ? l : n]),
              t,
            );
          }
        } else
          !o &&
            a != null &&
            (e = r("AdsCampaignRecordAccessors").targeting.age_range.delete(t));
        return e;
      },
      v = function (t) {
        var e,
          n = t,
          o = (e = n.targeting) == null ? void 0 : e.age_range;
        if (o != null) {
          var a, i, l;
          if (
            ((a = n.targeting) == null ? void 0 : a.age_min) != null &&
            ((i = n.targeting) == null ? void 0 : i.age_min) < o.first()
          ) {
            var s;
            n =
              (s = r("AdsCampaignRecordAccessors").targeting) == null
                ? void 0
                : s.age_min.set(o.first(), n);
          }
          return (
            (n =
              (l = r("AdsCampaignRecordAccessors").targeting) == null
                ? void 0
                : l.age_max.set(o.last(), n)),
            r("AdsCampaignRecordAccessors").targeting.age_range.delete(n)
          );
        }
        return n;
      },
      S = function (t, n, a) {
        var e, i;
        if (
          r("CapaUtils").isCapaEnabledInCampaign(t) ||
          r("CapaUtils").isCapaL0EnabledInCampaign(t)
        )
          return t;
        var l = L(n, a);
        return o("AdsMutators").chain(
          (e = r("AdsCampaignRecordAccessors").targeting) == null
            ? void 0
            : e.age_min.set(l),
          (i = r("AdsCampaignRecordAccessors").targeting) == null
            ? void 0
            : i.age_max.set(a.age_max),
        )(t);
      },
      R = function (t, n, o) {
        var e,
          a,
          i,
          l,
          s,
          u = o != null ? S(t, n, o) : t,
          c = L(n, o),
          d =
            ((e = t.targeting) == null ? void 0 : e.age_min) != null
              ? (a = t.targeting) == null
                ? void 0
                : a.age_min
              : c,
          m = Math.max(c, d),
          p = Math.max(
            m,
            (i = (l = t.targeting) == null ? void 0 : l.age_max) != null
              ? i
              : m,
          );
        return (s = r("AdsCampaignRecordAccessors").targeting) == null
          ? void 0
          : s.age_range.set(r("immutable").fromJS([m, p]), u);
      },
      L = function (t, n) {
        return n == null
          ? t
          : Math.max(r("AdsValidationConsts").minAgeDefault, n.age_min || 0, t);
      },
      E = function (t, n, a) {
        return !a || n === 0
          ? t
          : o("AdsMutators").chain(
              r("adsDeleteProductAudienceSpecsFromCampaignRecord"),
              r("AdsCampaignRecordAccessors").targeting
                .excluded_product_audience_specs.delete,
            )(t);
      },
      k = function (t, n) {
        if (n === 1) {
          var e;
          return r(
            "AdsCampaignRecordAccessors",
          ).targeting.excluded_custom_audiences.set(
            (e = r(
              "AdsCampaignRecordAccessors",
            ).targeting.excluded_custom_audiences.get(t)) == null
              ? void 0
              : e.filter(function (e) {
                  return (
                    e.get("subtype") !==
                    r("AdsCustomAudienceType").SUBTYPES.LOOKALIKE
                  );
                }),
            t,
          );
        }
        return t;
      },
      I = function (t, n) {
        return (
          n === void 0 && (n = !0),
          n
            ? o("AdsMutators").chain(
                r("AdsCampaignRecordAccessors").saved_audience.set(null),
                r("AdsCampaignRecordAccessors").saved_audience_id.set(null),
              )(t)
            : t
        );
      },
      T = function (t, n, a) {
        return o(
          "AdsHECAdvantageAudienceUtils",
        ).isCampaignGroupRegulatedAndIneligibleForAdvantageAudience(n) ||
          a === r("AdsBuyingTypes").RESERVED
          ? !1
          : t;
      },
      D = function (t, n) {
        return n != null ? n : C(t) ? 0 : 1;
      },
      x = function (t) {
        var e;
        return ((e = r(
          "AdsCampaignRecordAccessors",
        ).targeting.targeting_automation.get(t)) == null
          ? void 0
          : e.isEmpty()) === !0
          ? r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_automation.delete(t)
          : t;
      },
      $ = function (t, n) {
        return n === 1
          ? r("AdsCampaignRecordAccessors").targeting.exclusions.delete(t)
          : t;
      },
      P = function (t) {
        var e,
          n = t.accountInfo,
          a = t.bulkPromotedPageID,
          i = t.buyingType,
          l = t.campaign,
          s = t.canUseAdvantageAudience,
          d = t.defaultMinAge,
          m = t.deleteAutomation,
          g = t.enableAutomationForPharmaAdvertiser,
          h = t.flatPageSetIDsLoadObject,
          C = t.isL3ProductCatalogPresent,
          b = t.objective,
          S = t.regulatedCategories,
          L = t.targetingAutomationFromAction,
          P = t.targetingSpec,
          N = t.targetingTypeIsRetargeting;
        if (m === !0) {
          var M;
          return o("AdsMutators").chain(
            (M = r("AdsCampaignRecordAccessors").targeting) == null ||
              (M = M.targeting_automation) == null ||
              (M = M.advantage_audience) == null
              ? void 0
              : M.delete,
            x,
            v,
          )(l);
        }
        if (!T(s, S, i)) {
          var w;
          return o("AdsMutators").chain(
            (w = r("AdsCampaignRecordAccessors").targeting) == null ||
              (w = w.targeting_automation) == null ||
              (w = w.advantage_audience) == null
              ? void 0
              : w.delete,
            x,
            v,
          )(l);
        }
        var A =
            (e = l.targeting) == null || (e = e.targeting_automation) == null
              ? void 0
              : e.advantage_audience,
          F = D(l, L == null ? void 0 : L.advantage_audience),
          O = F !== (A != null ? A : 0),
          B = r("adsCommonTargetingGetDefaultCountry")(n),
          W =
            l.targeting != null
              ? o(
                  "adsTargetingGetDefaultTargetingSpec",
                ).getMinLegallyViableAgeForTargetingCountries(l.targeting)
              : o("adsTargetingGetDefaultTargetingSpec").getCountryMinAge(B);
        return o("AdsMutators").chain(
          function (e) {
            return o(
              "AdsUEditorCampaignSetSavedAudienceReducerUtils",
            ).setFlatPageSetIfRequired(
              e,
              a,
              h,
              e.targeting.geo_locations != null,
            );
          },
          function (e) {
            return p(e, F, g);
          },
          function (e) {
            return _(e, F);
          },
          function (e) {
            return f(e, F);
          },
          function (e) {
            return y(e, F, S);
          },
          function (e) {
            return F === 0 ? v(e) : R(e, d != null ? d : W, P);
          },
          function (e) {
            return E(e, F, N);
          },
          function (e) {
            return k(e, F);
          },
          function (e) {
            return I(e, O);
          },
          function (e) {
            return $(e, F);
          },
          function (e) {
            return u(e, F);
          },
          function (e) {
            return c(e, F, S, b, C);
          },
        )(l);
      };
    ((l.maybeDisableAdvantageAudience = e),
      (l.maybeEnableAdvantageAudience = s),
      (l.maybeDeleteCreativeAudiencePairing = u),
      (l.campaignIsDTAAS = d),
      (l.campaignIsLALAAS = m),
      (l.setTargetingAsSignalFlag = p),
      (l.setTargetingOptimizationFlag = _),
      (l.setTargetingAutomationFlag = f),
      (l.setTargetingRelaxationFlags = y),
      (l.isAdvantageAudienceEnabled = C),
      (l.alignAgeRangeWithAgeMin = b),
      (l.turnAgeRangeIntoAgeMinMax = v),
      (l.resetAgeMinAndAgeMax = S),
      (l.turnAgeMinMaxIntoAgeRange = R),
      (l.maybeRemoveRetargetingOptions = E),
      (l.maybeRemoveLookalikeAudiences = k),
      (l.maybeRemoveSavedAudience = I),
      (l.maybeRemoveAutomationFromSpecIfEmpty = x),
      (l.maybeRemoveDetailedTargetingExclusions = $),
      (l.setAdvantageAudienceAndRelatedEffectsOnSpec = P));
  },
  98,
);
