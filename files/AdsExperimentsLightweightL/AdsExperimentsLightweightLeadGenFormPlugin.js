__d(
  "AdsExperimentsLightweightLeadGenFormPlugin",
  ["fbt", "FBLogger", "JSResource", "gkx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("JSResource")(
      "adsExperimentsLightweightLeadGenFormMutator",
    ).__setRef("AdsExperimentsLightweightLeadGenFormPlugin");
    e.preload();
    var u = {
        getAdObjectLevel: function () {
          return "ad";
        },
        getEntryDescriptionContent: function () {
          return s._(
            /*BTDS*/ "Run an A\/B test with your existing budget to see how different forms impact lead quality and conversion rates.",
          );
        },
        getLoggingEntryPoint: function () {
          return "LightweightCheckboxLeadGenForm";
        },
        getName: function () {
          return s._(/*BTDS*/ "Lead Gen Form");
        },
        hasOptInUXSupportForAdObjectTestRecovery: !1,
        isVisibleForAdvertiser: function () {
          return r("gkx")("18253");
        },
        key: "LEAD_GEN_FORM",
        inputOptionsConfig: {
          getComponent: function () {
            return r("JSResource")(
              "AdsExperimentsLightweightLeadGenFormCustomInput.react",
            ).__setRef("AdsExperimentsLightweightLeadGenFormPlugin");
          },
        },
        mutationConfig: {
          getAdgroupMutator: function (n, o) {
            var t = e.getModuleIfRequireable();
            return t == null
              ? (r("FBLogger")(
                  "ads_experiments",
                  "AdsExperimentsLightweightLeadGenFormPlugin",
                ).mustfix(
                  "expected adsExperimentsLightweightLeadGenFormMutator to be available for mutation but was not",
                ),
                n)
              : t(n, o);
          },
          hasClientSideMutation: function () {
            return !0;
          },
        },
        type: "lightweightABTest",
      },
      c = u;
    l.default = c;
  },
  226,
);
