__d(
  "AdsUnificationEngagementCampaignNUXModalUtils",
  [
    "fbt",
    "ix",
    "AdsUnificationCampaignNUXModalScenario",
    "AdsUnificationCampaignNUXModalUtils",
    "EngagementUnitificationGating",
    "IPB4BImage.react",
    "Image.react",
    "meta-business-illustrations-am-auxos-engagement-creation-b4b",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = s._(/*BTDS*/ "You're starting in the recommended setup"),
      m = s._(/*BTDS*/ "Advantage+ is on for some options"),
      p = s._(
        /*BTDS*/ "With a campaign score of 100 and Advantage+, you\u2019re set up to reach your performance potential.",
      ),
      _ = s._(/*BTDS*/ "Manual campaign settings are still available");
    function f() {
      return { heading: m, description: p };
    }
    function g() {
      return d;
    }
    function h() {
      return {
        automationDescription: f(),
        editDescription: { heading: _, description: s._(/*BTDS*/ "") },
      };
    }
    var y = s._(/*BTDS*/ "No changes to your settings"),
      C = s._(
        /*BTDS*/ "We kept the settings from your previous campaign for this duplication.",
      );
    function b(e) {
      return e
        ? {
            automationDescription: { heading: m, description: p },
            editDescription: { heading: _, description: s._(/*BTDS*/ "") },
          }
        : {
            automationDescription: {
              heading: y,
              description: s._(
                /*BTDS*/ "We've kept your settings the same in this campaign. You can still edit your campaign to reflect business needs.",
              ),
            },
            editDescription: {
              heading: o("AdsUnificationCampaignNUXModalUtils")
                .LOOK_FOR_OPPORTUNITIES_TO_TURN_ADVANTAGE_ON_SUBHEADING,
              description: s._(/*BTDS*/ ""),
            },
          };
    }
    function v(e) {
      return e
        ? { automationDescription: { heading: m, description: p } }
        : {
            automationDescription: { heading: y, description: C },
            editDescription: {
              heading: o("AdsUnificationCampaignNUXModalUtils")
                .LOOK_FOR_OPPORTUNITIES_TO_TURN_ADVANTAGE_ON_SUBHEADING,
              description: s._(/*BTDS*/ ""),
            },
          };
    }
    function S(e, t) {
      switch (e) {
        case o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.Editing:
          return u(t ? "1106956" : "1106954");
        case o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.Duplication:
        case o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.DuplicationUpgrade:
        case o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.E2EDuplicationUpgrade:
          return u(t ? "938235" : "938233");
        case o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.Creation:
        default:
          return u("938231");
      }
    }
    function R(e, t) {
      return o(
        "EngagementUnitificationGating",
      ).isEUCreateEditDuplicationNUXEnabled(!1)
        ? c.jsx(r("Image.react"), {
            height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
            src: S(e, t),
            width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
          })
        : c.jsx(r("IPB4BImage.react"), {
            height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
            src: o(
              "meta-business-illustrations-am-auxos-engagement-creation-b4b",
            ).metaBusinessIllustrationsAmAuxosEngagementCreationB4b,
            width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
          });
    }
    ((R.displayName = R.name + " [from " + i.id + "]"),
      (l.getEngagementAutomationHeaderForCreation = g),
      (l.getEngagementAutomationCreationFlowModalDescriptionContent = h),
      (l.getEngagementAutomationEditFlowModalDescriptionContent = b),
      (l.getEngagementAutomationDuplicationFlowModalDescriptionContent = v),
      (l.getModalImageForEngagementAutomation = R));
  },
  226,
);
