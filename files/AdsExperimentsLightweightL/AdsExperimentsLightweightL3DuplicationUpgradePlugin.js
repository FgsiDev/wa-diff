__d(
  "AdsExperimentsLightweightL3DuplicationUpgradePlugin",
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
          return "campaign";
        },
        eligibilityConfig: r("immutable").Map({}),
        getConfirmationModalCustomComponent: function () {
          return r("JSResource")(
            "AdsExperimentsLightweightDuplicationUpgradeCheckboxes.react",
          ).__setRef("AdsExperimentsLightweightL3DuplicationUpgradePlugin");
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
        key: "L3_DUPLICATION_UPGRADE",
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
                  "AdsExperimentsLightweightL3DuplicationUpgradePlugin",
                ),
              );
            return {
              conversionOptions: o("AdsCopyDataManager").getConversionOptions(
                _.getHorizontalFullFragmentsRequestUpgradeExtraData(
                  "ad_set",
                  !1,
                  p,
                  m,
                  null,
                ),
              ),
            };
          },
          hasClientSideMutation: function () {
            return !1;
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
