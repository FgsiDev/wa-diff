__d(
  "adsUEditorGetIsOnGlobalishSensitiveListSelector",
  [
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorCreativeFeaturesEligibilitySelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
      r("adsCreateSelector")(
        [r("adsUEditorCreativeFeaturesEligibilitySelector")],
        function (t) {
          var e,
            n,
            o = r("gkx")("1824"),
            a = t.getValue(),
            i =
              (e =
                a == null
                  ? void 0
                  : a.features_eligibility_map.is_aco_sensitive_vertical) !=
              null
                ? e
                : !1,
            l =
              (n =
                a == null
                  ? void 0
                  : a.features_eligibility_map.is_luxury_vertical) != null
                ? n
                : !1;
          return o || i || l;
        },
        { name: i.id },
      ),
    );
    l.adsUEditorGetIsOnGlobalishSensitiveListSelector = e;
  },
  98,
);
