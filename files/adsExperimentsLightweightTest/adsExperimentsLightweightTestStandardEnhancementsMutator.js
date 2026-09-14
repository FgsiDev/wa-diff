__d(
  "adsExperimentsLightweightTestStandardEnhancementsMutator",
  ["AdsMutators", "adsAutomaticFlowMutationSetDoFSpec"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
        var t,
          n =
            ((t = e.creative) == null ||
            (t = t.degrees_of_freedom_spec) == null ||
            (t = t.creative_features_spec) == null ||
            (t = t.standard_enhancements) == null
              ? void 0
              : t.enroll_status) === "OPT_IN";
        return n
          ? o(
              "adsAutomaticFlowMutationSetDoFSpec",
            ).adsOptOutStandardEnhancementsMutator(e, "MANUAL")
          : o(
              "adsAutomaticFlowMutationSetDoFSpec",
            ).adsOptInStandardEnhancementsMutator(e, "MANUAL");
      });
    }
    l.default = e;
  },
  98,
);
