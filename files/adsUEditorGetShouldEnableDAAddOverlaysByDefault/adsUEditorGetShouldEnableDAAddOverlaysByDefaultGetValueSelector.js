__d(
  "adsUEditorGetShouldEnableDAAddOverlaysByDefaultGetValueSelector",
  [
    "adsCreateSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultSelector",
    "adsUEditorGetShouldEnableDAAddOverlaysByDefaultSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorGetShouldEnableDAAddOverlaysByDefaultSelector")],
        function (t) {
          return function () {
            var e,
              n = t();
            return (e = n.getValue()) != null
              ? e
              : o("adsUEditorGetShouldEnableAutoflowByDefaultSelector")
                  .AUTOFLOW_OPT_OUT_DEFAULT_STATUS;
          };
        },
        {
          name:
            i.id +
            ".adsUEditorGetShouldEnableDAAddOverlaysByDefaultGetValueSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
