__d(
  "AdsExperimentsScenarioTestStrings",
  ["fbt", "AdsObjectUtils", "FBLogger"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t) {
        switch (t) {
          case "CREATIVE_VARIABLE":
            return { label: s._(/*BTDS*/ "Creative") };
          case "AUDIENCE_VARIABLE":
            return { label: s._(/*BTDS*/ "Audience") };
          case "PLACEMENT_VARIABLE":
            return { label: s._(/*BTDS*/ "Placement") };
          case "FREEFORM_DUPLICATE":
            return { label: s._(/*BTDS*/ "Custom") };
          case "RECOMMENDED_SETTING_VARIABLE":
            return { label: s._(/*BTDS*/ "Recommended settings") };
          default:
            return (
              r("FBLogger")(
                "ads_experiments",
                "getScenarioTestTypeStrings",
              ).mustfix(
                "getScenarioTestTypeStrings called with an unsupported usecase %s",
                t,
              ),
              { label: "" }
            );
        }
      },
      u = s._(/*BTDS*/ "Conversion location"),
      c = s._(/*BTDS*/ "Shops-assisted purchases"),
      d = s._(/*BTDS*/ "Direct website purchases"),
      m = s._(/*BTDS*/ "Shops-assisted purchases conversion value"),
      p = s._(/*BTDS*/ "Direct website purchases conversion value"),
      _ = function (t) {
        return s._(/*BTDS*/ "Duplicate {ad object}", [
          s._param(
            "ad object",
            r("AdsObjectUtils").getNameFromAdObjectLevelsType(t, 1),
          ),
        ]);
      },
      f = s._(/*BTDS*/ "Please select a variable to continue test setup"),
      g = s._(/*BTDS*/ "You can edit and review your test before publishing");
    ((l.getScenarioTestTypeStrings = e),
      (l.CONVERSION_LOCATION_LABEL = u),
      (l.SHOPS_ASSISTED_PURCHASES_LABEL = c),
      (l.DIRECT_WEBSITE_PURCHASES_LABEL = d),
      (l.SHOPS_ASSISTED_PURCHASES_CONVERSION_VALUE_LABEL = m),
      (l.DIRECT_WEBSITE_PURCHASES_CONVERSION_VALUE_LABEL = p),
      (l.getDuplicateButtonText = _),
      (l.TOOLTIP_FOR_DISABLED_CTA_TO_TAL_TEST_CREATION = f),
      (l.TOOLTIP_FOR_ENABLED_CTA_TO_TAL_TEST_CREATION = g));
  },
  226,
);
