__d(
  "adsUEditorTextOptimizationsTextExtractionStickyOptInL0Selector",
  ["LoadObject", "adsCreateSelector", "userSettingsSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("userSettingsSelector")],
      function (t) {
        var e;
        return (e =
          t == null
            ? void 0
            : t.mapValue(function (e) {
                var t = e.text_optimizations_text_extraction_opt_in_status;
                return t === "OPTED_IN" ? !0 : t === "OPTED_OUT" ? !1 : null;
              })) != null
          ? e
          : r("LoadObject").withValue(null, { creatorModuleID: i.id });
      },
      {
        name:
          i.id +
          ".adsUEditorTextOptimizationsTextExtractionStickyOptInL0Selector",
      },
    );
    l.adsUEditorTextOptimizationsTextExtractionStickyOptInL0Selector = e;
  },
  98,
);
