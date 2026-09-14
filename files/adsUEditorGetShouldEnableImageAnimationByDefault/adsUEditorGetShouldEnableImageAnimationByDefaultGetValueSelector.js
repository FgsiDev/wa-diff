__d(
  "adsUEditorGetShouldEnableImageAnimationByDefaultGetValueSelector",
  [
    "adsCreateSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultSelector",
    "adsUEditorGetShouldEnableImageAnimationByDefaultSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorGetShouldEnableImageAnimationByDefaultSelector")],
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
            ".adsUEditorGetShouldEnableImageAnimationByDefaultGetValueSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
