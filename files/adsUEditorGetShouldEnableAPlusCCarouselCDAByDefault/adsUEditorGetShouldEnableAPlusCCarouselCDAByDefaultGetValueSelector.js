__d(
  "adsUEditorGetShouldEnableAPlusCCarouselCDAByDefaultGetValueSelector",
  [
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorGetShouldEnableAPlusCCarouselCDAByDefaultSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
        r("adsCreateSelector")(
          [
            o("adsUEditorGetShouldEnableAPlusCCarouselCDAByDefaultSelector")
              .adsUEditorGetShouldEnableAPlusCCarouselCDAByDefaultSelector,
          ],
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
