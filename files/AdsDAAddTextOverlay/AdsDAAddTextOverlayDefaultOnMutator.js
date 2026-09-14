__d(
  "AdsDAAddTextOverlayDefaultOnMutator",
  [
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "DAAddTextOverlayLayerUtils",
    "adsUEditorGetShouldEnableDAAddOverlaysByDefaultGetValueSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.degrees_of_freedom_spec.creative_features_spec.add_text_overlay.delete(
        e,
      );
    }
    function s(e) {
      var t =
        o("DAAddTextOverlayLayerUtils").getTextOverlayLayerFromAdgroup(e) !=
        null;
      if (t) return e;
      var n =
          r(
            "adsUEditorGetShouldEnableDAAddOverlaysByDefaultGetValueSelector",
          )()().shouldOptIn === !0,
        a = r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
          .creative_features_spec.add_text_overlay;
      return n === !0 &&
        !o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
          "add_text_overlay",
        )
        ? o("AdsMutators").chain(
            a.enroll_status.set("OPT_IN"),
            a.action_metadata.type.set("DEFAULT"),
          )(e)
        : e;
    }
    ((l.adsDeleteDAAddTextOverlayDefaultOnMutator = e),
      (l.adsDAAddTextOverlayDefaultOnMutator = s));
  },
  98,
);
