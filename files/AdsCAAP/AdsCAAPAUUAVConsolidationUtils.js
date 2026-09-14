__d(
  "AdsCAAPAUUAVConsolidationUtils",
  ["errorCode", "AdsRegionalRegulatedCategory", "adsFinservLocationUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = 3858442,
      c = 3858443,
      d = new Set([u, c]),
      m = new Set([3858634, 3858636]),
      p = [
        (e = r("AdsRegionalRegulatedCategory")).AUSTRALIA_UNIVERSAL,
        e.BRAZIL_REGULATION,
        e.MALAYSIA_UNIVERSAL,
        e.THAILAND_UNIVERSAL,
      ];
    function _(e, t) {
      return Array.from(
        new Set(
          o("adsFinservLocationUtils")
            .getRegulatedCategoriesByLocationsWithExclusions(e, t)
            .filter(function (e) {
              return p.includes(e);
            }),
        ),
      );
    }
    function f(e, t, n) {
      return (
        n === void 0 && (n = !1),
        t
          ? e.filter(function (e) {
              return !m.has(e.key) && !(n && d.has(e.key));
            })
          : e
      );
    }
    function g(e, t) {
      return t
        ? e.filter(function (e) {
            return !d.has(e);
          })
        : e;
    }
    function h(e) {
      var t,
        n,
        o = e.beneficiaryID,
        a = e.excludedGeoLocations,
        i = e.geoLocations,
        l = e.isAUUAVInPrepOrEnforcement,
        s = e.payerID,
        u =
          ((t = {}),
          (t.australia_finserv_beneficiary = o),
          (t.australia_finserv_payer = s),
          t);
      if (!l) return u;
      var c = _(i, a);
      return c.length !== 1 ||
        c[0] !== r("AdsRegionalRegulatedCategory").AUSTRALIA_UNIVERSAL
        ? u
        : babelHelpers.extends(
            {},
            u,
            ((n = {}),
            (n.universal_beneficiary = o),
            (n.universal_payer = s),
            n),
          );
    }
    function y(e, t) {
      var n = new Set(t),
        o = e.filter(function (e) {
          return (
            e !== r("AdsRegionalRegulatedCategory").AUSTRALIA_UNIVERSAL &&
            n.has(e)
          );
        });
      return o.length === 0 ||
        (o.length === 1 &&
          o[0] === r("AdsRegionalRegulatedCategory").VOLUNTARY_VERIFICATION)
        ? null
        : o;
    }
    function C(e, t) {
      return (
        e.length > 0 &&
        e.every(function (e) {
          var n,
            o,
            a =
              (n = t[e.ad_object_id]) == null ||
              (n = n.find(function (e) {
                return e.name === "SAVE";
              })) == null
                ? void 0
                : n.regulation_type_list,
            i = (o = e.regional_regulated_categories) != null ? o : [];
          return (
            a != null &&
            a.some(function (e) {
              return (
                e === r("AdsRegionalRegulatedCategory").AUSTRALIA_UNIVERSAL
              );
            }) &&
            i.includes(r("AdsRegionalRegulatedCategory").AUSTRALIA_FINSERV) &&
            y(a, i) == null
          );
        })
      );
    }
    function b(e, t, n) {
      return !n ||
        !t.includes(r("AdsRegionalRegulatedCategory").AUSTRALIA_FINSERV)
        ? e
        : e.flatMap(function (e) {
            if (e.name !== "SAVE" || e.regulationTypeList == null) return [e];
            var n = y(e.regulationTypeList, t);
            return n == null
              ? []
              : [babelHelpers.extends({}, e, { regulationTypeList: n })];
          });
    }
    function v(e, t, n) {
      return !n ||
        !t.includes(r("AdsRegionalRegulatedCategory").AUSTRALIA_FINSERV)
        ? e.length
        : e.filter(function (e) {
            return e.name !== "SAVE" || e.regulationTypeList == null
              ? !0
              : y(e.regulationTypeList, t) != null;
          }).length;
    }
    function S(e, t, n) {
      return n
        ? e.filter(function (e) {
            return t.includes(e.regulationType);
          })
        : e;
    }
    function R(e, t, n) {
      return !n ||
        !t.includes(r("AdsRegionalRegulatedCategory").AUSTRALIA_FINSERV)
        ? e
        : e.flatMap(function (e) {
            if (e.name !== "SAVE" || e.regulationTypeList == null) return [e];
            var n = y(e.regulationTypeList, t);
            return n == null
              ? []
              : [
                  babelHelpers.extends({}, e, {
                    regulationTypeList: [].concat(n),
                  }),
                ];
          });
    }
    function L(e, t) {
      var n = e.flatMap(function (e) {
        var t;
        return e.verificationCategoryType === "VOLUNTARY"
          ? []
          : (t = e.regulationTypeList) != null
            ? t
            : [e.regulationType];
      });
      return t
        ? R(e, n, t)
            .filter(function (e) {
              return e.verificationCategoryType !== "VOLUNTARY";
            })
            .map(function (e) {
              return e.regulationType;
            })
        : n;
    }
    function E(e, t) {
      var n;
      return (n =
        e == null
          ? void 0
          : e.some(function (e) {
              var n, r, o;
              return (
                (((n = e.regulation_config_details) == null
                  ? void 0
                  : n.regulation_type) === t ||
                  ((r = e.regulation_config_details) == null ||
                  (r = r.regulation_type_list) == null
                    ? void 0
                    : r.includes(t))) &&
                ((o = e.verification_eligibility_status) == null
                  ? void 0
                  : o.phase) != null &&
                e.verification_eligibility_status.phase !== "NONE"
              );
            })) != null
        ? n
        : !1;
    }
    function k(e, t) {
      if (!t) return e;
      var n = e.flatMap(function (e) {
        var t;
        return [e.regulation_type].concat(
          ((t = e.regulation_type_list) != null ? t : []).filter(Boolean),
        );
      });
      return n.includes(r("AdsRegionalRegulatedCategory").AUSTRALIA_FINSERV)
        ? e.filter(function (e) {
            var t;
            return e.name !== "SAVE"
              ? !0
              : y(
                  ((t = e.regulation_type_list) != null ? t : []).filter(
                    Boolean,
                  ),
                  n,
                ) != null;
          })
        : e;
    }
    function I(e, t) {
      return t.size === 0
        ? e
        : e.filter(function (e) {
            return t.has(e);
          });
    }
    ((l.SAVE_UAV_CATEGORIES = p),
      (l.getTargetedSAVECategories = _),
      (l.filterErrorsForSAVERightRailConsolidation = f),
      (l.filterPreemptiveErrorCodesForAUFinservConsolidation = g),
      (l.getAUFinservFanoutIdentityInfo = h),
      (l.filterSAVECompositeForAUUAVConsolidation = y),
      (l.shouldFilterSAVEReviewPBInFavorOfFinserv = C),
      (l.applyAUUAVConsolidationToRegulations = b),
      (l.getVisibleExperienceRegulationsCount = v),
      (l.filterTasksForAUUAVConsolidation = S),
      (l.applyAUUAVConsolidationToDisplayedRegulations = R),
      (l.getRegulationTypesForCAAPWarningContainer = L),
      (l.getIsSAVEUAVInPrepOrEnforcement = E),
      (l.applyAUUAVConsolidationToLaunchpadRegulations = k),
      (l.intersectRegulationRegionNamesWithCampaignTargeting = I));
  },
  98,
);
