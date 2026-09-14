__d(
  "AdsLeadGenAutomationCampaignNUXModalUtils",
  [
    "fbt",
    "ix",
    "AdsLeadGenAutomationQEUtils",
    "AdsOSAUExperimentUtils",
    "AdsUnificationCampaignNUXModalScenario",
    "AdsUnificationCampaignNUXModalUtils",
    "GeoIcon.react",
    "IPB4BImage.react",
    "geoMargin",
    "meta-brand-gear-filled-16",
    "meta-brand-two-stars-filled-16",
    "meta-business-illustrations-am-auxos-leads-creation-modal-b4b",
    "meta-business-illustrations-am-auxos-leads-duplicate-active-modal-b4b",
    "meta-business-illustrations-am-auxos-leads-edit-active-modal-b4b",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = s._(/*BTDS*/ "You're starting with Advantage+ leads campaign"),
      m = s._(
        /*BTDS*/ "This setup is on by default, maximizing performance with AI.",
      ),
      p = s._(
        /*BTDS*/ "With a campaign score of 100 and Advantage+ on, you're set up to reach your performance potential.",
      ),
      _ = s._(
        /*BTDS*/ "You're duplicating as an Advantage+ leads campaign, continuing to maximize performance with AI.",
      ),
      f = s._(
        /*BTDS*/ "You're duplicating as an Advantage+ leads campaign, which maximizes performance with AI. With a campaign score of 100 and Advantage+ on, you're set up to reach your performance potential.",
      ),
      g = s._(
        /*BTDS*/ "To reach your performance potential, turn Advantage+ leads campaign on and apply other recommendations to improve your campaign score.",
      );
    function h(e, t, n) {
      var a = o("AdsOSAUExperimentUtils").isOSAndAUTest({
        logExposure: !1,
        checkLGAEnabled: o(
          "AdsLeadGenAutomationQEUtils",
        ).isLeadsObjectiveAndHasLGAEnabledKS(e),
      });
      return a
        ? n
          ? c.jsx(r("IPB4BImage.react"), {
              height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
              src: u("851481"),
              width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
            })
          : c.jsx(r("IPB4BImage.react"), {
              height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
              src: u("851480"),
              width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
            })
        : t
          ? c.jsx(r("IPB4BImage.react"), {
              height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
              src: o(
                "meta-business-illustrations-am-auxos-leads-edit-active-modal-b4b",
              ).metaBusinessIllustrationsAmAuxosLeadsEditActiveModalB4b,
              width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
            })
          : c.jsx(r("IPB4BImage.react"), {
              height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
              src: u("842655"),
              width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
            });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e, t) {
      var n = o("AdsOSAUExperimentUtils").isOSAndAUTest({
        logExposure: !1,
        checkLGAEnabled: o(
          "AdsLeadGenAutomationQEUtils",
        ).isLeadsObjectiveAndHasLGAEnabledKS(e),
      });
      return n
        ? c.jsx(r("IPB4BImage.react"), {
            height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
            src: u("851520"),
            width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
          })
        : t
          ? c.jsx(r("IPB4BImage.react"), {
              height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
              src: o(
                "meta-business-illustrations-am-auxos-leads-duplicate-active-modal-b4b",
              ).metaBusinessIllustrationsAmAuxosLeadsDuplicateActiveModalB4b,
              width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
            })
          : c.jsx(r("IPB4BImage.react"), {
              height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
              src: u("97596"),
              width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
            });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e, t, n, a) {
      switch (t) {
        case o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.Editing:
          return h(e, n, a);
        case o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.Creation:
          return o("AdsOSAUExperimentUtils").isOSAndAUTest({
            logExposure: !1,
            checkLGAEnabled: o(
              "AdsLeadGenAutomationQEUtils",
            ).isLeadsObjectiveAndHasLGAEnabledKS(e),
          })
            ? c.jsx(r("IPB4BImage.react"), {
                height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
                src: u("851204"),
                width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
              })
            : c.jsx(r("IPB4BImage.react"), {
                height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
                src: o(
                  "meta-business-illustrations-am-auxos-leads-creation-modal-b4b",
                ).metaBusinessIllustrationsAmAuxosLeadsCreationModalB4b,
                width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
              });
        default:
          return y(e, n);
      }
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      return e
        ? c.jsx(r("GeoIcon.react"), {
            icon: o("meta-brand-two-stars-filled-16").metaBrandTwoStarsFilled16,
            xstyle: [r("geoMargin").top4, r("geoMargin").end8],
          })
        : c.jsx(r("GeoIcon.react"), {
            icon: o("meta-brand-gear-filled-16").metaBrandGearSettingsFilled16,
            xstyle: [r("geoMargin").top4, r("geoMargin").end8],
          });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e, t) {
      return e ===
        o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.E2EDuplicationUpgrade
        ? c.jsx(r("GeoIcon.react"), {
            icon: o("meta-brand-two-stars-filled-16").metaBrandTwoStarsFilled16,
            xstyle: [r("geoMargin").top4, r("geoMargin").end8],
          })
        : e ===
            o("AdsUnificationCampaignNUXModalScenario")
              .UnificationCamapignNuxScenario.Duplication
          ? t
            ? c.jsx(r("GeoIcon.react"), {
                icon: o("meta-brand-two-stars-filled-16")
                  .metaBrandTwoStarsFilled16,
                xstyle: [r("geoMargin").top4, r("geoMargin").end8],
              })
            : c.jsx(r("GeoIcon.react"), {
                icon: o("meta-brand-gear-filled-16")
                  .metaBrandGearSettingsFilled16,
                xstyle: [r("geoMargin").top4, r("geoMargin").end8],
              })
          : c.jsx(r("GeoIcon.react"), {
              icon: o("meta-brand-gear-filled-16")
                .metaBrandGearSettingsFilled16,
              xstyle: [r("geoMargin").top4, r("geoMargin").end8],
            });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e, t) {
      return e ===
        o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.Editing
        ? b(t)
        : e ===
            o("AdsUnificationCampaignNUXModalScenario")
              .UnificationCamapignNuxScenario.Creation
          ? c.jsx(r("GeoIcon.react"), {
              icon: o("meta-brand-two-stars-filled-16")
                .metaBrandTwoStarsFilled16,
              xstyle: [r("geoMargin").top4, r("geoMargin").end8],
            })
          : v(e, t);
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      return e
        ? c.jsx(r("GeoIcon.react"), {
            icon: o("meta-brand-gear-filled-16").metaBrandGearSettingsFilled16,
            xstyle: [r("geoMargin").top4, r("geoMargin").end8],
          })
        : c.jsx(r("GeoIcon.react"), {
            icon: o("meta-brand-two-stars-filled-16").metaBrandTwoStarsFilled16,
            xstyle: [r("geoMargin").top4, r("geoMargin").end8],
          });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return c.jsx(r("GeoIcon.react"), {
        icon: o("meta-brand-two-stars-filled-16").metaBrandTwoStarsFilled16,
        xstyle: [r("geoMargin").top4, r("geoMargin").end8],
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e, t) {
      return e ===
        o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.Editing
        ? R(t)
        : e ===
            o("AdsUnificationCampaignNUXModalScenario")
              .UnificationCamapignNuxScenario.Creation
          ? c.jsx(r("GeoIcon.react"), {
              icon: o("meta-brand-gear-filled-16")
                .metaBrandGearSettingsFilled16,
              xstyle: [r("geoMargin").top4, r("geoMargin").end8],
            })
          : L();
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      return o("AdsOSAUExperimentUtils").isOSAndAUTest({
        logExposure: !1,
        checkLGAEnabled: o(
          "AdsLeadGenAutomationQEUtils",
        ).isLeadsObjectiveAndHasLGAEnabledKS(e),
      })
        ? { heading: d, description: p }
        : { heading: d, description: m };
    }
    function I(e, t, n) {
      return n &&
        o("AdsOSAUExperimentUtils").isOSAndAUTest({
          logExposure: !1,
          checkLGAEnabled: o(
            "AdsLeadGenAutomationQEUtils",
          ).isLeadsObjectiveAndHasLGAEnabledKS(e),
        })
        ? t
          ? {
              automationDescription: {
                heading: o("AdsUnificationCampaignNUXModalUtils")
                  .MAXIMIZING_PERFORMANCE_WITH_AI_SUBHEADING,
                description: s._(
                  /*BTDS*/ "Your campaign already has Advantage+ on for audience, budget and placements, which means it\u2019s now an Advantage+ leads campaign. With a campaign score of 100 and Advantage+ on, you\u2019re set up to reach your performance potential.",
                ),
              },
              editDescription: {
                heading: o("AdsUnificationCampaignNUXModalUtils")
                  .MANUAL_OPTIONS_STILL_AVAILABLE_SUBHEADING,
                description: o(
                  "AdsUnificationCampaignNUXModalUtils",
                ).getManualOptionsStillAvailableDescription(),
              },
            }
          : {
              automationDescription: {
                heading: o("AdsUnificationCampaignNUXModalUtils")
                  .NO_CHANGES_TO_CURRENT_SETTINGS_SUBHEADING,
                description: s._(
                  /*BTDS*/ "We've kept your settings the same in this campaign. You can still edit your campaign to reflect business needs.",
                ),
              },
              editDescription: {
                heading: o("AdsUnificationCampaignNUXModalUtils")
                  .LOOK_FOR_OPPORTUNITIES_TO_TURN_ADVANTAGE_ON_SUBHEADING,
                description: g,
              },
            }
        : t
          ? {
              automationDescription: {
                heading: o("AdsUnificationCampaignNUXModalUtils")
                  .MAXIMIZING_PERFORMANCE_WITH_AI_SUBHEADING,
                description: s._(
                  /*BTDS*/ "Your campaign already has Advantage+ on for audience, budget and placements, which means it's now an Advantage+ leads campaign.",
                ),
              },
              editDescription: {
                heading: o("AdsUnificationCampaignNUXModalUtils")
                  .MANUAL_OPTIONS_STILL_AVAILABLE_SUBHEADING,
                description: o(
                  "AdsUnificationCampaignNUXModalUtils",
                ).getManualOptionsStillAvailableDescription(),
              },
            }
          : {
              automationDescription: {
                heading: o("AdsUnificationCampaignNUXModalUtils")
                  .NO_CHANGES_TO_CURRENT_SETTINGS_SUBHEADING,
                description: s._(
                  /*BTDS*/ "We've kept your settings the same in this campaign. You can still edit your campaign to reflect business needs.",
                ),
              },
              editDescription: {
                heading: o("AdsUnificationCampaignNUXModalUtils")
                  .LOOK_FOR_OPPORTUNITIES_TO_TURN_ADVANTAGE_ON_SUBHEADING,
                description: o(
                  "AdsUnificationCampaignNUXModalUtils",
                ).LOOK_FOR_OPPORTUNITIES_TO_TURN_ADVANTAGE_ON_SUBHEADING_DESCRIPTION(
                  e,
                ),
              },
            };
    }
    function T(e, t, n) {
      var r = o("AdsOSAUExperimentUtils").isOSAndAUTest({
          logExposure: !1,
          checkLGAEnabled: o(
            "AdsLeadGenAutomationQEUtils",
          ).isLeadsObjectiveAndHasLGAEnabledKS(e),
        }),
        a = r ? f : _,
        i = r
          ? g
          : o(
              "AdsUnificationCampaignNUXModalUtils",
            ).LOOK_FOR_OPPORTUNITIES_TO_TURN_ADVANTAGE_ON_SUBHEADING_DESCRIPTION(
              e,
            );
      return n ===
        o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.Duplication
        ? t
          ? {
              automationDescription: {
                heading: o("AdsUnificationCampaignNUXModalUtils")
                  .MAXIMIZING_PERFORMANCE_WITH_AI_SUBHEADING,
                description: a,
              },
            }
          : {
              automationDescription: {
                heading: o("AdsUnificationCampaignNUXModalUtils")
                  .NO_CHANGES_TO_CURRENT_SETTINGS_SUBHEADING,
                description: o("AdsUnificationCampaignNUXModalUtils")
                  .NO_CHANGES_TO_CURRENT_SETTINGS_SUBHEADING_DESCRIPTION_FOR_DUPLICATION,
              },
              editDescription: {
                heading: o("AdsUnificationCampaignNUXModalUtils")
                  .LOOK_FOR_OPPORTUNITIES_TO_TURN_ADVANTAGE_ON_SUBHEADING,
                description: i,
              },
            }
        : t
          ? {
              automationDescription: {
                heading: o("AdsUnificationCampaignNUXModalUtils")
                  .NO_CHANGES_TO_CURRENT_SETTINGS_SUBHEADING,
                description: o("AdsUnificationCampaignNUXModalUtils")
                  .NO_CHANGES_TO_CURRENT_SETTINGS_SUBHEADING_DESCRIPTION_FOR_DUPLICATION,
              },
              editDescription: {
                heading: o("AdsUnificationCampaignNUXModalUtils")
                  .MAXIMIZING_PERFORMANCE_WITH_AI_SUBHEADING,
                description: a,
              },
            }
          : {
              automationDescription: {
                heading: o("AdsUnificationCampaignNUXModalUtils")
                  .NO_CHANGES_TO_CURRENT_SETTINGS_SUBHEADING,
                description: o("AdsUnificationCampaignNUXModalUtils")
                  .NO_CHANGES_TO_CURRENT_SETTINGS_SUBHEADING_DESCRIPTION_FOR_DUPLICATION,
              },
              editDescription: {
                heading: o("AdsUnificationCampaignNUXModalUtils")
                  .LOOK_FOR_OPPORTUNITIES_TO_TURN_ADVANTAGE_ON_SUBHEADING,
                description: i,
              },
            };
    }
    ((l.getModalImageForLeadGenAutomationUsingNuxScenarioAndAdvantagePlusState =
      C),
      (l.getPrimaryDescriptionIconLeadGenAutomationUsingNuxScenarioAndAdvantagePlusState =
        S),
      (l.getSecondaryDescriptionIconLeadGenAutomationUsingNuxScenarioAndAdvantagePlusState =
        E),
      (l.getLeadGenAutomationPrimaryDescriptionForCreation = k),
      (l.getLeadGenAutomationEditFlowModalDescriptionContent = I),
      (l.getLeadGenAutomationDuplicationFlowModalDescriptionContent = T));
  },
  226,
);
