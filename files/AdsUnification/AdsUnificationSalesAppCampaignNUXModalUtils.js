__d(
  "AdsUnificationSalesAppCampaignNUXModalUtils",
  [
    "fbt",
    "ix",
    "AdsAPIObjectives",
    "AdsLeadGenAutomationQEUtils",
    "AdsOSAUExperimentUtils",
    "AdsUnificationCampaignNUXModalScenario",
    "AdsUnificationCampaignNUXModalUtils",
    "GeoIcon.react",
    "IPB4BImage.react",
    "geoMargin",
    "meta-brand-gear-filled-16",
    "meta-brand-two-stars-filled-16",
    "meta-business-illustrations-am-auxos-app-creation-modal-b4b",
    "meta-business-illustrations-am-auxos-sales-creation-modal-b4b",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = s._(/*BTDS*/ "Now called Advantage+ sales campaign"),
      m = s._(
        /*BTDS*/ "You're duplicating as an Advantage+ sales campaign, formerly called Advantage+ shopping campaign, continuing to maximize performance with AI.",
      ),
      p = s._(
        /*BTDS*/ "You're duplicating as an Advantage+ sales campaign, maximizing performance with AI. With a campaign score of 100 and Advantage+, you're set up to reach your performance potential.",
      ),
      _ = s._(
        /*BTDS*/ "You're duplicating as an Advantage+ app campaign, continuing to maximize performance with AI.",
      ),
      f = s._(
        /*BTDS*/ "You're duplicating as an Advantage+ app campaign, continuing to maximize performance with AI. With a campaign score of 100 and Advantage+ on, you're set up to reach your performance potential.",
      ),
      g = s._(/*BTDS*/ "You're starting with Advantage+ app campaign"),
      h = s._(
        /*BTDS*/ "This setup is on by default, maximizing performance with AI.",
      ),
      y = {
        edit: {
          osautest: {
            published: {
              sales: "edit_sales_advantage_state_on_published_au_os.png",
              app: "edit_app_advantage_state_on_published_au_os.png",
            },
            draft: {
              sales: "edit_sales_advantage_state_on_draft_au_os.png",
              app: "edit_app_advantage_state_on_draft_au_os.png",
            },
          },
          advantageOn: {
            sales: "edit_sales_advantage_state_on.png",
            app: "edit_app_advantage_state_on.png",
          },
          off: {
            sales: "edit_sales_advantage_plus_state_off.png",
            app: "edit_app_advantage_state_off.png",
          },
        },
        duplicate: {
          osautest: {
            published: {
              sales: "duplicate_sales_advantage_state_published_au_os.png",
              app: "duplicate_app_advantage_state_published_au_os.png",
            },
            draft: {
              sales: "duplicate_sales_advantage_state_draft_au_os.png",
              app: "duplicate_app_advantage_state_draft_au_os.png",
            },
          },
          advantageOn: {
            sales: "duplicate_sales_advantage_state_on.png",
            app: "duplicate_app_advantage_state_on.png",
          },
          off: {
            sales: "duplicate_sales_advantage_state_off.png",
            app: "duplicate_app_advantage_state_off.png",
          },
        },
      };
    function C() {
      return {
        heading: d,
        description: s._(
          /*BTDS*/ "Formerly called Advantage+ shopping campaign, this setup is on by default, maximizing performance with AI.",
        ),
      };
    }
    function b(e) {
      var t = o("AdsOSAUExperimentUtils").isOSAndAUTest({
        logExposure: !1,
        checkLGAEnabled: o(
          "AdsLeadGenAutomationQEUtils",
        ).isLeadsObjectiveAndHasLGAEnabledKS(e),
      });
      return e === r("AdsAPIObjectives").OUTCOME_SALES
        ? t
          ? c.jsx(r("IPB4BImage.react"), {
              height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
              src: u("854315"),
              width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
            })
          : c.jsx(r("IPB4BImage.react"), {
              height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
              src: o(
                "meta-business-illustrations-am-auxos-sales-creation-modal-b4b",
              ).metaBusinessIllustrationsAmAuxosSalesCreationModalB4b,
              width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
            })
        : t
          ? c.jsx(r("IPB4BImage.react"), {
              height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
              src: u("854314"),
              width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
            })
          : c.jsx(r("IPB4BImage.react"), {
              height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
              src: o(
                "meta-business-illustrations-am-auxos-app-creation-modal-b4b",
              ).metaBusinessIllustrationsAmAuxosAppCreationModalB4b,
              width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
            });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      return e === r("AdsAPIObjectives").OUTCOME_SALES ? "sales" : "app";
    }
    function S(e, t, n, r) {
      var a = "/images/ads/ads_manager/advantage_state/",
        i = v(t),
        l = o("AdsOSAUExperimentUtils").isOSAndAUTest({
          logExposure: !1,
          checkLGAEnabled: o(
            "AdsLeadGenAutomationQEUtils",
          ).isLeadsObjectiveAndHasLGAEnabledKS(t),
        });
      return l
        ? r
          ? a + y[e].osautest.draft[i]
          : a + y[e].osautest.published[i]
        : n
          ? a + y[e].advantageOn[i]
          : a + y[e].off[i];
    }
    function R(e, t, n) {
      var a = S("edit", e, t, n);
      return c.jsx(r("IPB4BImage.react"), {
        height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
        src: a,
        width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e, t, n) {
      var a = S("duplicate", e, t, n);
      return c.jsx(r("IPB4BImage.react"), {
        height: o("AdsUnificationCampaignNUXModalUtils").IMAGE_HEIGHT,
        src: a,
        width: o("AdsUnificationCampaignNUXModalUtils").IMAGE_WIDTH,
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e, t, n, r) {
      return t ===
        o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.Editing
        ? R(e, n, r)
        : t ===
            o("AdsUnificationCampaignNUXModalScenario")
              .UnificationCamapignNuxScenario.Creation
          ? b(e)
          : L(e, n, r);
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
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
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e, t) {
      return e ===
        o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.E2ECampaignUpgrade ||
        e ===
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
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e, t) {
      return e ===
        o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.Editing
        ? k(t)
        : e ===
            o("AdsUnificationCampaignNUXModalScenario")
              .UnificationCamapignNuxScenario.Creation
          ? c.jsx(r("GeoIcon.react"), {
              icon: o("meta-brand-two-stars-filled-16")
                .metaBrandTwoStarsFilled16,
              xstyle: [r("geoMargin").top4, r("geoMargin").end8],
            })
          : I(e, t);
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
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
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e, t) {
      return c.jsx(r("GeoIcon.react"), {
        icon: o("meta-brand-two-stars-filled-16").metaBrandTwoStarsFilled16,
        xstyle: [r("geoMargin").top4, r("geoMargin").end8],
      });
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $(e, t) {
      return e ===
        o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.Editing
        ? D(t)
        : e ===
            o("AdsUnificationCampaignNUXModalScenario")
              .UnificationCamapignNuxScenario.Creation
          ? c.jsx(r("GeoIcon.react"), {
              icon: o("meta-brand-gear-filled-16")
                .metaBrandGearSettingsFilled16,
              xstyle: [r("geoMargin").top4, r("geoMargin").end8],
            })
          : x(e, t);
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      var t = o("AdsOSAUExperimentUtils").isOSAndAUTest({
        logExposure: !1,
        checkLGAEnabled: o(
          "AdsLeadGenAutomationQEUtils",
        ).isLeadsObjectiveAndHasLGAEnabledKS(e),
      });
      return e === r("AdsAPIObjectives").OUTCOME_SALES
        ? o("AdsOSAUExperimentUtils").isOSAndAUTest({
            logExposure: !1,
            checkLGAEnabled: o(
              "AdsLeadGenAutomationQEUtils",
            ).isLeadsObjectiveAndHasLGAEnabledKS(e),
          })
          ? {
              heading: d,
              description: s._(
                /*BTDS*/ "Formerly called Advantage+ shopping campaign, this setup is on by default. With a campaign score of 100 and Advantage+ on, you\u2019re set up to reach your performance potential.",
              ),
            }
          : C()
        : t
          ? { heading: g, description: h }
          : {
              heading: s._(
                /*BTDS*/ "You're starting with Advantage+ app campaign",
              ),
              description: s._(
                /*BTDS*/ "This setup is on by default, maximizing performance with AI.",
              ),
            };
    }
    function N(e) {
      return e === r("AdsAPIObjectives").OUTCOME_SALES
        ? {
            heading: d,
            description: s._(
              /*BTDS*/ "You're editing an Advantage+ sales campaign, formerly called Advantage+ shopping campaign, continuing to maximize performance with AI.",
            ),
          }
        : {
            heading: o("AdsUnificationCampaignNUXModalUtils")
              .MAXIMIZING_PERFORMANCE_WITH_AI_SUBHEADING,
            description: s._(
              /*BTDS*/ "You're editing as an Advantage+ app campaign, continuing to maximize performance with AI.",
            ),
          };
    }
    function M(e, t) {
      return e === r("AdsAPIObjectives").OUTCOME_SALES
        ? o("AdsOSAUExperimentUtils").isOSAndAUTest({
            logExposure: !1,
            checkLGAEnabled: o(
              "AdsLeadGenAutomationQEUtils",
            ).isLeadsObjectiveAndHasLGAEnabledKS(e),
          })
          ? t
            ? {
                heading: d,
                description: s._(
                  /*BTDS*/ "Advantage+ is on for audience, budget and placements, creating an Advantage+ sales campaign. With a campaign score of 100 and Advantage+, you\u2019re set up to reach your performance potential.",
                ),
              }
            : {
                heading: d,
                description: s._(
                  /*BTDS*/ "Your campaign already has Advantage+ on for audience, budget and placements, which means it's now an Advantage+ sales campaign (formerly called Advantage+ shopping campaign).",
                ),
              }
          : {
              heading: d,
              description: s._(
                /*BTDS*/ "Your campaign already has Advantage+ on for audience, budget and placements, which means it's now an Advantage+ sales campaign (formerly Advantage+ shopping campaign).",
              ),
            }
        : o("AdsOSAUExperimentUtils").isOSAndAUTest({
              logExposure: !1,
              checkLGAEnabled: o(
                "AdsLeadGenAutomationQEUtils",
              ).isLeadsObjectiveAndHasLGAEnabledKS(e),
            }) && t
          ? {
              heading: o("AdsUnificationCampaignNUXModalUtils")
                .MAXIMIZING_PERFORMANCE_WITH_AI_SUBHEADING,
              description: s._(
                /*BTDS*/ "Your campaign already has Advantage+ enabled for audience, budget, and placements, making it an Advantage+ app campaign. With a campaign score of 100 and Advantage+ enabled, you're set up to reach your performance potential.",
              ),
            }
          : {
              heading: o("AdsUnificationCampaignNUXModalUtils")
                .MAXIMIZING_PERFORMANCE_WITH_AI_SUBHEADING,
              description: s._(
                /*BTDS*/ "Your campaign already has Advantage+ on for audience, budget and placements, which means it's now an Advantage+ app campaign.",
              ),
            };
    }
    function w(e, t, n, r) {
      var a = o("AdsOSAUExperimentUtils").isOSAndAUTest({
          logExposure: !1,
          checkLGAEnabled: o(
            "AdsLeadGenAutomationQEUtils",
          ).isLeadsObjectiveAndHasLGAEnabledKS(e),
        }),
        i =
          a && r
            ? o(
                "AdsUnificationCampaignNUXModalUtils",
              ).LOOK_FOR_OPPORTUNITIES_TO_TURN_ADVANTAGE_ON_SUBHEADING_DESCRIPTION_WITH_OS(
                e,
              )
            : o(
                "AdsUnificationCampaignNUXModalUtils",
              ).LOOK_FOR_OPPORTUNITIES_TO_TURN_ADVANTAGE_ON_SUBHEADING_DESCRIPTION(
                e,
              );
      return n
        ? { automationDescription: N(e) }
        : t
          ? {
              automationDescription: M(e, r),
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
                description: i,
              },
            };
    }
    function A(e, t, n) {
      var a = o("AdsOSAUExperimentUtils").isOSAndAUTest({
          logExposure: !1,
          checkLGAEnabled: o(
            "AdsLeadGenAutomationQEUtils",
          ).isLeadsObjectiveAndHasLGAEnabledKS(e),
        }),
        i = a ? p : m,
        l = a ? f : _,
        s = a
          ? o(
              "AdsUnificationCampaignNUXModalUtils",
            ).LOOK_FOR_OPPORTUNITIES_TO_TURN_ADVANTAGE_ON_SUBHEADING_DESCRIPTION_WITH_OS(
              e,
            )
          : o(
              "AdsUnificationCampaignNUXModalUtils",
            ).LOOK_FOR_OPPORTUNITIES_TO_TURN_ADVANTAGE_ON_SUBHEADING_DESCRIPTION(
              e,
            );
      return n ===
        o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.E2ECampaignUpgrade ||
        n ===
          o("AdsUnificationCampaignNUXModalScenario")
            .UnificationCamapignNuxScenario.E2EDuplicationUpgrade
        ? {
            automationDescription:
              e === r("AdsAPIObjectives").OUTCOME_SALES
                ? { heading: d, description: i }
                : {
                    heading: o("AdsUnificationCampaignNUXModalUtils")
                      .MAXIMIZING_PERFORMANCE_WITH_AI_SUBHEADING,
                    description: l,
                  },
          }
        : n ===
            o("AdsUnificationCampaignNUXModalScenario")
              .UnificationCamapignNuxScenario.Duplication
          ? t
            ? {
                automationDescription:
                  e === r("AdsAPIObjectives").OUTCOME_SALES
                    ? { heading: d, description: i }
                    : {
                        heading: o("AdsUnificationCampaignNUXModalUtils")
                          .MAXIMIZING_PERFORMANCE_WITH_AI_SUBHEADING,
                        description: l,
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
                  description: s,
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
                editDescription:
                  e === r("AdsAPIObjectives").OUTCOME_SALES
                    ? { heading: d, description: i }
                    : {
                        heading: o("AdsUnificationCampaignNUXModalUtils")
                          .MAXIMIZING_PERFORMANCE_WITH_AI_SUBHEADING,
                        description: l,
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
                  description: s,
                },
              };
    }
    ((l.getModalImageSalesAppAutomationUnificationUsingNuxScenarioAndAdvantagePlusState =
      E),
      (l.getPrimaryDescriptionIconSalesAppAutomationUnificationUsingNuxScenarioAndAdvantagePlusState =
        T),
      (l.getSecondaryDescriptionIconSalesAppAutomationUnificationUsingNuxScenarioAndAdvantagePlusState =
        $),
      (l.getSalesAppAutomationUnificationPrimaryDescriptionForCreation = P),
      (l.getSalesAppAutomationUnificationEditFlowModalDescriptionContent = w),
      (l.getSalesAppAutomationUnificationDuplicationFlowModalDescriptionContent =
        A));
  },
  226,
);
