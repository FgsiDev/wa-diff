__d(
  "adsUEditorGetShouldEnableTextOptimizationsByDefaultGetValueSelector",
  [
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultSelector",
    "adsUEditorGetShouldEnableTextOptimizationsByDefaultSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
        r("adsCreateSelector")(
          [r("adsUEditorGetShouldEnableTextOptimizationsByDefaultSelector")],
          function (t) {
            var e,
              n = t();
            return (e = n.getValue()) != null
              ? e
              : o("adsUEditorGetShouldEnableAutoflowByDefaultSelector")
                  .AUTOFLOW_OPT_OUT_DEFAULT_STATUS;
          },
          { name: i.id },
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
