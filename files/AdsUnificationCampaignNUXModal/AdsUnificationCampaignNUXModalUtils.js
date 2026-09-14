__d(
  "AdsUnificationCampaignNUXModalUtils",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsLeadGenAutomationCampaignNUXModalUtils",
    "AdsODAXObjectiveStrings",
    "AdsUnificationCampaignNUXModalScenario",
    "AdsUnificationCampaignNUXModalUtils_useImpressionData.graphql",
    "AdsUnificationCampaignNUXModalUtils_useImpressionDataQuery.graphql",
    "AdsUnificationEngagementCampaignNUXModalUtils",
    "AdsUnificationSalesAppCampaignNUXModalUtils",
    "AdsUnificationUpperFunnelCampaignNUXModalUtils",
    "AutomationUnificationAdvantageStateOnboarding.experimental",
    "CurrentUser",
    "GeoTextPairing.react",
    "RelayHooks",
    "gkx",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m =
        r("AutomationUnificationAdvantageStateOnboarding.experimental")
          .nux_modal_max_impression_count || 3,
      p = [
        "UNIFICATION_CAMPAIGN_NUX_MODAL_SALES_IMPRESSION",
        "UNIFICATION_CAMPAIGN_NUX_MODAL_APP_IMPRESSION",
        "LEAD_GEN_AUTOMATION_BRANDING_CAMPAIGN_NUX_MODAL_IMPRESSION",
        "UNIFICATION_CAMPAIGN_NUX_MODAL_ENGAGEMENT_IMPRESSION",
        "UNIFICATION_CAMPAIGN_NUX_MODAL_AWARENESS_IMPRESSION",
        "UNIFICATION_CAMPAIGN_NUX_MODAL_TRAFFIC_IMPRESSION",
        "HAS_SEEN_UNIFICATION_CAMPAIGN_NUX_MODAL_FROM_SALES_AUTOMATIC_UPGRADE",
        "HAS_SEEN_UNIFICATION_CAMPAIGN_NUX_MODAL_FROM_APP_AUTOMATIC_UPGRADE",
        "HAS_SEEN_LEAD_GEN_AUTOMATION_BRANDING_CAMPAIGN_NUX_MODAL_FROM_AUTOMATIC_UPGRADE",
        "HAS_SEEN_UNIFICATION_CAMPAIGN_NUX_MODAL_FROM_ENGAGEMENT_AUTOMATIC_UPGRADE",
        "HAS_SEEN_UNIFICATION_CAMPAIGN_NUX_MODAL_FROM_AWARENESS_AUTOMATIC_UPGRADE",
        "HAS_SEEN_UNIFICATION_CAMPAIGN_NUX_MODAL_FROM_TRAFFIC_AUTOMATIC_UPGRADE",
      ];
    function _(t) {
      var a = o("RelayHooks").useLazyLoadQuery(
        e !== void 0
          ? e
          : (e = n(
              "AdsUnificationCampaignNUXModalUtils_useImpressionDataQuery.graphql",
            )),
        { attribute_types: p, scope_ids: { user: r("CurrentUser").getID() } },
      );
      return f(a, t);
    }
    function f(e, t) {
      var a,
        i,
        l = o("react-compiler-runtime").c(3),
        s = o("RelayHooks").useFragment(
          u !== void 0
            ? u
            : (u = n(
                "AdsUnificationCampaignNUXModalUtils_useImpressionData.graphql",
              )),
          e,
        );
      if (s == null) return null;
      var c = s.xfb_advertiser_profile_editable_attributes,
        d = c[0],
        m = c[1],
        p = c[2],
        _ = c[3],
        f = c[4],
        g = c[5],
        h = c[6],
        y = c[7],
        C = c[8],
        b = c[9],
        v = c[10],
        S = c[11],
        R,
        L;
      e: switch (t) {
        case r("AdsAPIObjectives").APP_INSTALLS: {
          ((R = m), (L = y));
          break e;
        }
        case r("AdsAPIObjectives").OUTCOME_SALES: {
          ((R = d), (L = h));
          break e;
        }
        case r("AdsAPIObjectives").OUTCOME_LEADS:
        case r("AdsAPIObjectives").LEAD_GENERATION: {
          ((R = p), (L = C));
          break e;
        }
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT: {
          ((R = _), (L = b));
          break e;
        }
        case r("AdsAPIObjectives").OUTCOME_AWARENESS: {
          ((R = f), (L = v));
          break e;
        }
        case r("AdsAPIObjectives").LINK_CLICKS: {
          ((R = g), (L = S));
          break e;
        }
        default:
          return null;
      }
      var E = (a = R) == null || (a = a.value) == null ? void 0 : a.as_integer,
        k = (i = L) == null || (i = i.value) == null ? void 0 : i.as_boolean;
      if (E == null || k == null) return null;
      var I;
      return (
        l[0] !== k || l[1] !== E
          ? ((I = { impressionCount: E, hasSeenAutomaticUpgrade: k }),
            (l[0] = k),
            (l[1] = E),
            (l[2] = I))
          : (I = l[2]),
        I
      );
    }
    function g(e, t, n) {
      return r("gkx")("16640") ||
        e == null ||
        n == null ||
        r("AutomationUnificationAdvantageStateOnboarding.experimental")
          .hide_nux_modal
        ? !1
        : e < m || (t && !n);
    }
    function h(e, t, n, r) {
      var o = {
        integer_based_attributes: [
          { attribute_type: W(r), value: n ? m : e + 1 },
        ],
      };
      return t
        ? babelHelpers.extends({}, o, {
            boolean_based_attributes: [{ attribute_type: q(r), value: !0 }],
          })
        : o;
    }
    var y = 440,
      C = 220;
    function b(e, t, n, a) {
      return e === r("AdsAPIObjectives").OUTCOME_LEADS ||
        e === r("AdsAPIObjectives").LEAD_GENERATION
        ? o(
            "AdsLeadGenAutomationCampaignNUXModalUtils",
          ).getModalImageForLeadGenAutomationUsingNuxScenarioAndAdvantagePlusState(
            e,
            t,
            n,
            a,
          )
        : e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
          ? o(
              "AdsUnificationEngagementCampaignNUXModalUtils",
            ).getModalImageForEngagementAutomation(t, a)
          : e === r("AdsAPIObjectives").OUTCOME_AWARENESS ||
              e === r("AdsAPIObjectives").LINK_CLICKS
            ? o(
                "AdsUnificationUpperFunnelCampaignNUXModalUtils",
              ).getModalImageForUpperFunnelAutomation()
            : o(
                "AdsUnificationSalesAppCampaignNUXModalUtils",
              ).getModalImageSalesAppAutomationUnificationUsingNuxScenarioAndAdvantagePlusState(
                e,
                t,
                n,
                a,
              );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e, t, n) {
      switch (e) {
        case r("AdsAPIObjectives").OUTCOME_LEADS:
        case r("AdsAPIObjectives").LEAD_GENERATION:
          return o(
            "AdsLeadGenAutomationCampaignNUXModalUtils",
          ).getPrimaryDescriptionIconLeadGenAutomationUsingNuxScenarioAndAdvantagePlusState(
            t,
            n,
          );
        default:
          return o(
            "AdsUnificationSalesAppCampaignNUXModalUtils",
          ).getPrimaryDescriptionIconSalesAppAutomationUnificationUsingNuxScenarioAndAdvantagePlusState(
            t,
            n,
          );
      }
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e, t, n, o) {
      return d.jsxs(d.Fragment, {
        children: [
          v(e, n, o),
          d.jsx(r("GeoTextPairing.react"), {
            description: t.automationDescription.description,
            heading: t.automationDescription.heading,
            size: "header3",
          }),
        ],
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e, t, n) {
      switch (e) {
        case r("AdsAPIObjectives").OUTCOME_LEADS:
        case r("AdsAPIObjectives").LEAD_GENERATION:
          return o(
            "AdsLeadGenAutomationCampaignNUXModalUtils",
          ).getSecondaryDescriptionIconLeadGenAutomationUsingNuxScenarioAndAdvantagePlusState(
            t,
            n,
          );
        default:
          return o(
            "AdsUnificationSalesAppCampaignNUXModalUtils",
          ).getSecondaryDescriptionIconSalesAppAutomationUnificationUsingNuxScenarioAndAdvantagePlusState(
            t,
            n,
          );
      }
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e, t, n, o) {
      return d.jsxs(d.Fragment, {
        children: [
          R(e, n, o),
          d.jsx(r("GeoTextPairing.react"), {
            description: t.description,
            heading: t.heading,
            size: "header3",
          }),
        ],
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e, t) {
      return (function (t) {
        if (
          Array.isArray(t) &&
          t.length === 2 &&
          t[0] ===
            o("AdsUnificationCampaignNUXModalScenario")
              .UnificationCamapignNuxScenario.Creation &&
          t[1] === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
        )
          return o(
            "AdsUnificationEngagementCampaignNUXModalUtils",
          ).getEngagementAutomationHeaderForCreation();
        if (
          (Array.isArray(t) &&
            t.length === 2 &&
            t[0] ===
              o("AdsUnificationCampaignNUXModalScenario")
                .UnificationCamapignNuxScenario.Creation &&
            t[1] === r("AdsAPIObjectives").OUTCOME_AWARENESS) ||
          (Array.isArray(t) &&
            t.length === 2 &&
            t[0] ===
              o("AdsUnificationCampaignNUXModalScenario")
                .UnificationCamapignNuxScenario.Creation &&
            t[1] === r("AdsAPIObjectives").LINK_CLICKS)
        )
          return o(
            "AdsUnificationUpperFunnelCampaignNUXModalUtils",
          ).getUpperFunnelAutomationHeaderForCreation();
        if (
          Array.isArray(t) &&
          t.length === 2 &&
          t[0] ===
            o("AdsUnificationCampaignNUXModalScenario")
              .UnificationCamapignNuxScenario.Creation
        )
          return s._(/*BTDS*/ "You no longer need to choose a campaign setup");
        if (Array.isArray(t) && t.length === 2)
          return s._(/*BTDS*/ "New way to edit {objective} campaigns", [
            s._param("objective", N(e)),
          ]);
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })([t, e]);
    }
    var k = s._(/*BTDS*/ "You're maximizing performance with AI"),
      I = s._(/*BTDS*/ "Look for opportunities to turn Advantage+ on"),
      T = function (t) {
        return s._(
          /*BTDS*/ "Maximize your performance with AI and set up your campaign as an Advantage+ {objective} campaign.",
          [s._param("objective", N(t))],
        );
      },
      D = s._(/*BTDS*/ "No changes to your current settings"),
      x = s._(
        /*BTDS*/ "We kept the settings from your previous campaign for this duplication.",
      ),
      $ = s._(/*BTDS*/ "Manual options are still available"),
      P = function (t) {
        return s._(
          /*BTDS*/ "To reach your performance potential, turn Advantage+ {objective} campaign on and apply other recommendations to improve your campaign score.",
          [s._param("objective", N(t))],
        );
      };
    function N(e) {
      switch (e) {
        case r("AdsAPIObjectives").OUTCOME_SALES:
        case r("AdsAPIObjectives").LEAD_GENERATION:
        case r("AdsAPIObjectives").OUTCOME_LEADS:
        case r("AdsAPIObjectives").APP_INSTALLS:
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return o("AdsODAXObjectiveStrings").getObjectiveNameLowerCase(e);
        default:
          return null;
      }
    }
    function M(e) {
      switch (e) {
        case r("AdsAPIObjectives").LEAD_GENERATION:
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          return o(
            "AdsLeadGenAutomationCampaignNUXModalUtils",
          ).getLeadGenAutomationPrimaryDescriptionForCreation(e);
        default:
          return o(
            "AdsUnificationSalesAppCampaignNUXModalUtils",
          ).getSalesAppAutomationUnificationPrimaryDescriptionForCreation(e);
      }
    }
    function w() {
      return s._(/*BTDS*/ "You can still access manual campaign settings.");
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A(e) {
      return e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
        ? o(
            "AdsUnificationEngagementCampaignNUXModalUtils",
          ).getEngagementAutomationCreationFlowModalDescriptionContent()
        : e === r("AdsAPIObjectives").OUTCOME_AWARENESS ||
            e === r("AdsAPIObjectives").LINK_CLICKS
          ? o(
              "AdsUnificationUpperFunnelCampaignNUXModalUtils",
            ).getUpperFunnelAutomationCreationFlowModalDescriptionContent()
          : {
              automationDescription: M(e),
              editDescription: { heading: $, description: w() },
            };
    }
    function F(e, t, n, a) {
      switch (e) {
        case r("AdsAPIObjectives").LEAD_GENERATION:
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          return o(
            "AdsLeadGenAutomationCampaignNUXModalUtils",
          ).getLeadGenAutomationEditFlowModalDescriptionContent(e, t, a);
        case r("AdsAPIObjectives").OUTCOME_AWARENESS:
        case r("AdsAPIObjectives").LINK_CLICKS:
          return o(
            "AdsUnificationUpperFunnelCampaignNUXModalUtils",
          ).getUpperFunnelAutomationEditFlowModalDescriptionContent(t);
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return o(
            "AdsUnificationEngagementCampaignNUXModalUtils",
          ).getEngagementAutomationEditFlowModalDescriptionContent(t);
        default:
          return o(
            "AdsUnificationSalesAppCampaignNUXModalUtils",
          ).getSalesAppAutomationUnificationEditFlowModalDescriptionContent(
            e,
            t,
            n,
            a,
          );
      }
    }
    function O(e, t, n) {
      switch (e) {
        case r("AdsAPIObjectives").LEAD_GENERATION:
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          return o(
            "AdsLeadGenAutomationCampaignNUXModalUtils",
          ).getLeadGenAutomationDuplicationFlowModalDescriptionContent(e, t, n);
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return o(
            "AdsUnificationEngagementCampaignNUXModalUtils",
          ).getEngagementAutomationDuplicationFlowModalDescriptionContent(t);
        default:
          return o(
            "AdsUnificationSalesAppCampaignNUXModalUtils",
          ).getSalesAppAutomationUnificationDuplicationFlowModalDescriptionContent(
            e,
            t,
            n,
          );
      }
    }
    function B(e, t, n, r, a) {
      return e ===
        o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.Creation
        ? A(t)
        : e ===
            o("AdsUnificationCampaignNUXModalScenario")
              .UnificationCamapignNuxScenario.Editing
          ? F(t, n, r, a)
          : O(t, n, e);
    }
    function W(e) {
      switch (e) {
        case r("AdsAPIObjectives").OUTCOME_SALES:
          return "UNIFICATION_CAMPAIGN_NUX_MODAL_SALES_IMPRESSION";
        case r("AdsAPIObjectives").LEAD_GENERATION:
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          return "LEAD_GEN_AUTOMATION_BRANDING_CAMPAIGN_NUX_MODAL_IMPRESSION";
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return "UNIFICATION_CAMPAIGN_NUX_MODAL_ENGAGEMENT_IMPRESSION";
        case r("AdsAPIObjectives").OUTCOME_AWARENESS:
          return "UNIFICATION_CAMPAIGN_NUX_MODAL_AWARENESS_IMPRESSION";
        case r("AdsAPIObjectives").LINK_CLICKS:
          return "UNIFICATION_CAMPAIGN_NUX_MODAL_TRAFFIC_IMPRESSION";
        default:
          return "UNIFICATION_CAMPAIGN_NUX_MODAL_APP_IMPRESSION";
      }
    }
    function q(e) {
      switch (e) {
        case r("AdsAPIObjectives").OUTCOME_SALES:
          return "HAS_SEEN_UNIFICATION_CAMPAIGN_NUX_MODAL_FROM_SALES_AUTOMATIC_UPGRADE";
        case r("AdsAPIObjectives").LEAD_GENERATION:
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          return "HAS_SEEN_LEAD_GEN_AUTOMATION_BRANDING_CAMPAIGN_NUX_MODAL_FROM_AUTOMATIC_UPGRADE";
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return "HAS_SEEN_UNIFICATION_CAMPAIGN_NUX_MODAL_FROM_ENGAGEMENT_AUTOMATIC_UPGRADE";
        case r("AdsAPIObjectives").OUTCOME_AWARENESS:
          return "HAS_SEEN_UNIFICATION_CAMPAIGN_NUX_MODAL_FROM_AWARENESS_AUTOMATIC_UPGRADE";
        case r("AdsAPIObjectives").LINK_CLICKS:
          return "HAS_SEEN_UNIFICATION_CAMPAIGN_NUX_MODAL_FROM_TRAFFIC_AUTOMATIC_UPGRADE";
        default:
          return "HAS_SEEN_UNIFICATION_CAMPAIGN_NUX_MODAL_FROM_APP_AUTOMATIC_UPGRADE";
      }
    }
    ((l.useImpressionDataQuery = _),
      (l.isModalVisibleToAdvertiser = g),
      (l.getUpdatedAttributesData = h),
      (l.IMAGE_WIDTH = y),
      (l.IMAGE_HEIGHT = C),
      (l.getModalImage = b),
      (l.getAutomationUnificationNuxPrimaryDescription = S),
      (l.getAutomationUnificationNuxSecondaryDescription = L),
      (l.getNUXModalHeader = E),
      (l.MAXIMIZING_PERFORMANCE_WITH_AI_SUBHEADING = k),
      (l.LOOK_FOR_OPPORTUNITIES_TO_TURN_ADVANTAGE_ON_SUBHEADING = I),
      (l.LOOK_FOR_OPPORTUNITIES_TO_TURN_ADVANTAGE_ON_SUBHEADING_DESCRIPTION =
        T),
      (l.NO_CHANGES_TO_CURRENT_SETTINGS_SUBHEADING = D),
      (l.NO_CHANGES_TO_CURRENT_SETTINGS_SUBHEADING_DESCRIPTION_FOR_DUPLICATION =
        x),
      (l.MANUAL_OPTIONS_STILL_AVAILABLE_SUBHEADING = $),
      (l.LOOK_FOR_OPPORTUNITIES_TO_TURN_ADVANTAGE_ON_SUBHEADING_DESCRIPTION_WITH_OS =
        P),
      (l.getManualOptionsStillAvailableDescription = w),
      (l.getModalContent = B));
  },
  226,
);
