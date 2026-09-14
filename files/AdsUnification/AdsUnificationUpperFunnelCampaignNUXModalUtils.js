__d(
  "AdsUnificationUpperFunnelCampaignNUXModalUtils",
  [
    "fbt",
    "ix",
    "AdsUnificationCampaignNUXModalUtils",
    "IPB4BImage.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = s._(/*BTDS*/ "You're starting in the recommended setup"),
      m = s._(/*BTDS*/ "Advantage+ is on for some options"),
      p = s._(
        /*BTDS*/ "With a campaign score of 100 and Advantage+, you're set up to reach your performance potential.",
      );
    function _() {
      return { heading: m, description: p };
    }
    function f() {
      return d;
    }
    function g() {
      return {
        automationDescription: _(),
        editDescription: {
          heading: o("AdsUnificationCampaignNUXModalUtils")
            .MANUAL_OPTIONS_STILL_AVAILABLE_SUBHEADING,
          description: s._(/*BTDS*/ ""),
        },
      };
    }
    function h() {
      return c.jsx(r("IPB4BImage.react"), {
        height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
        src: u("935254"),
        width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return e
        ? {
            automationDescription: {
              heading: o("AdsUnificationCampaignNUXModalUtils")
                .MAXIMIZING_PERFORMANCE_WITH_AI_SUBHEADING,
              description: s._(
                /*BTDS*/ "Your campaign already has Advantage+ on for some options, maximizing performance with AI.",
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
              heading: s._(/*BTDS*/ "No changes to current settings"),
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
    ((l.getUpperFunnelAutomationHeaderForCreation = f),
      (l.getUpperFunnelAutomationCreationFlowModalDescriptionContent = g),
      (l.getModalImageForUpperFunnelAutomation = h),
      (l.getUpperFunnelAutomationEditFlowModalDescriptionContent = y));
  },
  226,
);
