__d(
  "AdsDuplicatinUpgradeASCStateUtils",
  [
    "fbt",
    "AHGHelpTrayLink2.react",
    "AdsAPIObjectives",
    "AdsLeadGenAutomationBrandingQEUtils",
    "AdsProgressiveDisclosureUtils",
    "AdsUniqueMetricsID",
    "EngagementUnitificationGating",
    "GeoBaseText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return [
        "advantage_campaign_budget_duplication",
        "advantage_plus_audience_duplication",
        "advantage_plus_placements_duplication",
      ].every(function (t) {
        return e.includes(t);
      });
    }
    function d(e, t, n) {
      var a = (n == null ? void 0 : n.length) === 1 ? n[0] : null;
      switch (a) {
        case r("AdsAPIObjectives").OUTCOME_SALES:
        case r("AdsAPIObjectives").APP_INSTALLS:
          return (
            o(
              "AdsProgressiveDisclosureUtils",
            ).getIsProgressiveDisclosureTestVariation(
              o(
                "AdsProgressiveDisclosureUtils",
              ).getProgressiveDisclosureUnifiedAppSalesVariationWithoutLog(),
            ) &&
            !e &&
            c(t)
          );
        case r("AdsAPIObjectives").OUTCOME_LEADS:
        case r("AdsAPIObjectives").LEAD_GENERATION:
          return (
            o(
              "AdsLeadGenAutomationBrandingQEUtils",
            ).getIsPGDVariationEligibleForLeadGenAutomationBrandingExp(
              o(
                "AdsLeadGenAutomationBrandingQEUtils",
              ).getProgressiveDisclosureLeadGenAutomationBrandingExpVariationWithoutLog(),
            ) &&
            !e &&
            c(t)
          );
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return (
            o(
              "AdsProgressiveDisclosureUtils",
            ).getIsProgressiveDisclosureTestVariation(
              o(
                "EngagementUnitificationGating",
              ).getEUCreateEditDuplicationNUXProgressiveDisclosureVariation(),
            ) &&
            !e &&
            c(t)
          );
        default:
          return !1;
      }
    }
    function m(e) {
      switch (e) {
        case r("AdsAPIObjectives").APP_INSTALLS:
          return u.jsx(r("AHGHelpTrayLink2.react"), {
            helpCenterID:
              o("AdsUniqueMetricsID")
                .ADVANTAGE_PRODUCTS_GENERIC_HELP_CMS_ID_NEW,
            label: s._(/*BTDS*/ "{=m0}", [
              s._implicitParam(
                "=m0",
                u.jsx(r("GeoBaseText.react"), {
                  color: "link",
                  size: "accent",
                  children: s._(/*BTDS*/ "About Advantage+ app campaigns"),
                }),
              ),
            ]),
          });
        case r("AdsAPIObjectives").OUTCOME_SALES:
          return u.jsx(r("AHGHelpTrayLink2.react"), {
            helpCenterID:
              o("AdsUniqueMetricsID")
                .ADVANTAGE_PRODUCTS_GENERIC_HELP_CMS_ID_NEW,
            label: s._(/*BTDS*/ "{=m0}", [
              s._implicitParam(
                "=m0",
                u.jsx(r("GeoBaseText.react"), {
                  color: "link",
                  size: "accent",
                  children: s._(/*BTDS*/ "About Advantage+ sales campaigns"),
                }),
              ),
            ]),
          });
        case r("AdsAPIObjectives").OUTCOME_LEADS:
        case r("AdsAPIObjectives").LEAD_GENERATION:
          return u.jsx(r("AHGHelpTrayLink2.react"), {
            helpCenterID:
              o("AdsUniqueMetricsID")
                .ADVANTAGE_PLUS_LEAD_PRODUCT_HELP_CMS_ID_NEW,
            label: s._(/*BTDS*/ "{=m0}", [
              s._implicitParam(
                "=m0",
                u.jsx(r("GeoBaseText.react"), {
                  color: "link",
                  size: "accent",
                  children: s._(/*BTDS*/ "About Advantage+ leads campaigns"),
                }),
              ),
            ]),
          });
        default:
          return null;
      }
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      return e === r("AdsAPIObjectives").OUTCOME_SALES
        ? s._(
            /*BTDS*/ "Formerly called Advantage+ shopping campaign, this setup maximizes performance with AI by turning Advantage+ sales campaign on.",
          )
        : s._(/*BTDS*/ "Set up your campaign to maximize performance with AI.");
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.isAdvantagePlusStateUpgradeEligible = d),
      (l.getHelpCenterLink = m),
      (l.getDuplicationUpgradeSubtextContent = p));
  },
  226,
);
