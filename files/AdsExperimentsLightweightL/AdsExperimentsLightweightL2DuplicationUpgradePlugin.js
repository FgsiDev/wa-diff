__d(
  "AdsExperimentsLightweightL2DuplicationUpgradePlugin",
  [
    "fbt",
    "AdsCopyDataManager",
    "BootloaderResource",
    "DuplicationUpgradeAbTestingExperimentUtils",
    "JSResource",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        getAdObjectLevel: function () {
          return "ad_set";
        },
        eligibilityConfig: r("immutable").Map({}),
        getConfirmationModalCustomComponent: function () {
          return r("JSResource")(
            "AdsExperimentsLightweightDuplicationUpgradeCheckboxes.react",
          ).__setRef("AdsExperimentsLightweightL2DuplicationUpgradePlugin");
        },
        getUnificationName: function () {
          return s._(/*BTDS*/ "Duplication Upgrade Placeholder");
        },
        getLoggingEntryPoint: function () {
          return "LightweightDuplicationUpgradeModal";
        },
        hasOptInUXSupportForAdObjectTestRecovery: !0,
        isVisibleForAdvertiser: function () {
          return o(
            "DuplicationUpgradeAbTestingExperimentUtils",
          ).isEligibleForDuAbTestingExperiment();
        },
        key: "L2_DUPLICATION_UPGRADE",
        mutationConfig: {
          getDuplicateCopyMutationOptions: function (t) {
            var e,
              n,
              a,
              i,
              l,
              s,
              u = t.confirmationInfo,
              c =
                (e =
                  u == null || (n = u.duplicationUpgradeOptions) == null
                    ? void 0
                    : n.duplicationSolutionsToUpgrade) != null
                  ? e
                  : [],
              d =
                (a =
                  u == null || (i = u.duplicationUpgradeOptions) == null
                    ? void 0
                    : i.solutionsToUpgradeByKey) != null
                  ? a
                  : new Map(),
              m =
                (l =
                  u == null || (s = u.duplicationUpgradeOptions) == null
                    ? void 0
                    : s.solutionTypeToExtraDataMap) != null
                  ? l
                  : new Map(),
              p = new Map(
                Array.from(d.entries()).filter(function (e) {
                  var t = e[0];
                  return c.includes(t);
                }),
              ),
              _ = o("BootloaderResource").read(
                r("JSResource")("AdsDuplicationUpgradeOnConfirmUtils").__setRef(
                  "AdsExperimentsLightweightL2DuplicationUpgradePlugin",
                ),
              );
            return {
              conversionOptions: o("AdsCopyDataManager").getConversionOptions(
                _.getHorizontalFullFragmentsRequestUpgradeExtraData(
                  "campaign",
                  !1,
                  p,
                  m,
                  null,
                ),
              ),
            };
          },
        },
        getName: function () {
          return s._(/*BTDS*/ "Guidance Label Placeholder");
        },
        shouldShowDetailThumbnails: !0,
        type: "lightweightABTest",
      },
      u = e;
    l.default = u;
  },
  226,
);
