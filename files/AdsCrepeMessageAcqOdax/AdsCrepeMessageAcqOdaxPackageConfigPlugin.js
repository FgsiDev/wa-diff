__d(
  "AdsCrepeMessageAcqOdaxPackageConfigPlugin",
  [
    "fbt",
    "AdsCrepeEditableAttributesMutation",
    "AdsCrepeSBSMessageAcqAllSettingsConstants",
    "AdsCrepeSBSMessagePackageEditorStructurePackageConfig",
    "AdsPECrepePackages",
    "GeoLink.react",
    "RelayModern",
    "adsCreateSelector",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = function () {
        return s._(
          /*BTDS*/ "Based on your engagement campaign objective, the Tailored messages campaign setup can help you get more messages at the best value. {=m2}.",
          [
            s._implicitParam(
              "=m2",
              u.jsx(r("GeoLink.react"), {
                href: "https://www.facebook.com/business/m/ads-that-click-to-message-guidance",
                target: "_blank",
                children: s._(/*BTDS*/ "Learn more about tailored campaigns"),
              }),
            ),
          ],
        );
      };
    function d() {
      return {
        campaignGroupVisibility: {
          keysToAdd: ["campaignGroupSplitTestConvergenceMessageSection"],
          keysToRemove: [
            "campaignGroupDetailsSection",
            "campaignGroupBudgetSection",
            "campaignGroupNameSection",
          ],
        },
        campaignVisibility: {
          keysToRemove: [
            "campaignFreeformABTestSection",
            "campaignABTestSummarySection",
            "campaignOptimizationSection",
            "campaignPlacementSection",
            "campaignNameSection",
          ],
        },
        adgroupVisibility: {
          keysToAdd: ["sbsMessageTemplateComponent"],
          keysToRemove: [
            "draftABTestSummarySection",
            "adgroupMessageTemplateEditorComponent",
          ],
        },
        creativeVisibility: {
          keysToRemove: [
            "callToActionField",
            "destinationPageField",
            "textLiquidityToggleField",
          ],
        },
      };
    }
    var m = {
        type: "crepePackageConfig",
        key: "messageAcqOdaxPackageConfig",
        config: {
          editorStructure: r(
            "AdsCrepeSBSMessagePackageEditorStructurePackageConfig",
          ),
          editorModifications: { useDeprecatedStyles: !0 },
          visibility: d(),
          content: {
            presetSettings: o("AdsCrepeSBSMessageAcqAllSettingsConstants")
              .SBS_MESSAGE_ACQ_CREATION_PACKAGE_CAMPAIGN_SETTINGS,
          },
        },
        doiHeaderContent: {
          packageTitle: s._(
            /*BTDS*/ "You're creating a tailored messages campaign",
          ),
          packageDescription: c(),
          optOutAction: function (t, n, r) {
            r === void 0 && (r = !1);
            var e = {
              boolean_based_attributes: [
                { attribute_type: "IS_DEFAULT_OPTED_IN_TO_CTX", value: r },
              ],
            };
            o("RelayModern").commitMutation(t, {
              mutation: o("AdsCrepeEditableAttributesMutation")
                .AdsCrepeOptOutOfDOIMutation,
              variables: {
                input: { scope_ids: { ad_account: n }, updated_attributes: e },
              },
            });
          },
          optOutDescription: s._(
            /*BTDS*/ "Prefer creating an engagement campaign without preset settings?",
          ),
          optOutLinkDescription: s._(
            /*BTDS*/ "Switch to a manual engagement campaign",
          ),
          optOutModalText: function (t) {
            return s._(
              /*BTDS*/ "This campaign includes the following preset settings. If you need to change these settings, you can switch to {=m1}.",
              [
                s._implicitParam(
                  "=m1",
                  u.jsx(r("GeoLink.react"), {
                    onClick: t,
                    children: s._(/*BTDS*/ "edit this campaign manually"),
                  }),
                ),
              ],
            );
          },
        },
        isDOIEligible: function (t) {
          return r("adsCreateSelector")(
            [],
            function () {
              return t ? r("gkx")("21773") : r("gkx")("3465");
            },
            { name: i.id },
          );
        },
        package_id:
          o("AdsPECrepePackages").MESSAGE_ACQUISITION_POST_ODAX_PACKAGE_ID,
        eligibleCrepeForPitchReinforcement: !0,
        visibilitySelector: function () {
          return r("adsCreateSelector")(
            [],
            function () {
              return r("gkx")("21774");
            },
            { name: i.id },
          );
        },
      },
      p = m;
    l.default = p;
  },
  226,
);
