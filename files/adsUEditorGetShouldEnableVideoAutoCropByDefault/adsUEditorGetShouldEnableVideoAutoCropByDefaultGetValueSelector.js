__d(
  "adsUEditorGetShouldEnableVideoAutoCropByDefaultGetValueSelector",
  [
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorGetIsOnGlobalishSensitiveListSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultSelector",
    "adsUEditorGetShouldEnableVideoAutoCropByDefaultSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
        r("adsCreateSelector")(
          [
            r("adsUEditorGetShouldEnableVideoAutoCropByDefaultSelector"),
            o("adsUEditorGetIsOnGlobalishSensitiveListSelector")
              .adsUEditorGetIsOnGlobalishSensitiveListSelector,
          ],
          function (t, n) {
            var e;
            if (n())
              return o("adsUEditorGetShouldEnableAutoflowByDefaultSelector")
                .AUTOFLOW_OPT_OUT_DEFAULT_STATUS;
            var r = t();
            return (e = r.getValue()) != null
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
