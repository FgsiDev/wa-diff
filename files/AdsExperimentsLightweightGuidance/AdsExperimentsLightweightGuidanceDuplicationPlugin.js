__d(
  "AdsExperimentsLightweightGuidanceDuplicationPlugin",
  [
    "fbt",
    "AdsDataAtom",
    "AdsDuplicationUpgradeConstants",
    "AdsUEditorHostIDs",
    "JSResource",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = {
        getAdObjectLevel: function () {
          return "campaign";
        },
        getLoggingEntryPoint: function (t) {
          return t === "AM_CONVERGENCE_GUIDANCE_CARD_CLICK"
            ? "LightweightRadioGuidanceDuplicationConvergence"
            : "LightweightCheckboxGuidanceDuplicationModal";
        },
        hasOptInUXSupportForAdObjectTestRecovery: !0,
        isVisibleForAdvertiser: function () {
          return !1;
        },
        key: "GUIDANCE_DUPLICATION",
        mutationConfig: {
          getDuplicateCopyMutationOptions: function (t) {
            var e, n;
            return {
              conversionOptions:
                (e =
                  (n = t.confirmationInfo) == null
                    ? void 0
                    : n.conversionOptions) != null
                  ? e
                  : void 0,
            };
          },
          clientSideMutationCallback: function (t, n) {
            var e;
            return c({
              adgroups: (e = t == null ? void 0 : t.adgroups) != null ? e : [],
              lightweightOptions: n,
            });
          },
          hasClientSideMutation: function () {
            return !0;
          },
        },
        getName: function () {
          return s._(/*BTDS*/ "Recommended adjustments");
        },
        type: "lightweightABTest",
      };
    function c(t) {
      var n,
        a = t.adgroups,
        l = t.lightweightOptions;
      l != null &&
        (n = l.upgrade_solution_ids) != null &&
        n.includes(
          o("AdsDuplicationUpgradeConstants")
            .ADVANTAGE_PLUS_CREATIVE_STATIC_AUTOFLOW_SOLUTION_ID,
        ) &&
        r("JSResource").loadAll(
          [
            r("JSResource")(
              "AdsUEditorAdgroupSetAutomaticFlowOptimizationAction",
            ).__setRef("AdsExperimentsLightweightGuidanceDuplicationPlugin"),
          ],
          function (t) {
            (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
              t.dispatch(
                {
                  actionMetadataType: "UNKOWN",
                  adgroupIDs: a.map(function (e) {
                    var t = e.id;
                    return t;
                  }),
                  editSource: 3,
                  enableAutomaticFlow: !0,
                  hostID: r("AdsUEditorHostIDs").EDITING,
                },
                {
                  line: "93",
                  module:
                    "AdsExperimentsLightweightGuidanceDuplicationPlugin.js",
                  moduleID: i.id,
                },
              );
            });
          },
        );
    }
    var d = u;
    l.default = d;
  },
  226,
);
