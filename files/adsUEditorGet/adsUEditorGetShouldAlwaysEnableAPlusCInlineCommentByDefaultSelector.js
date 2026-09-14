__d(
  "adsUEditorGetShouldAlwaysEnableAPlusCInlineCommentByDefaultSelector",
  [
    "AdsAccountStore",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorGetIsOnGlobalishSensitiveListSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
      r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccount,
          o("adsUEditorGetIsOnGlobalishSensitiveListSelector")
            .adsUEditorGetIsOnGlobalishSensitiveListSelector,
        ],
        function (t, n) {
          return t.map(function (e) {
            var t = r("gkx")("3448"),
              a = r("gkx")("3449"),
              i = !t && !a && !n();
            return i
              ? { shouldOptIn: !0, optInSource: "DEFAULT" }
              : o("adsUEditorGetShouldEnableAutoflowByDefaultSelector")
                  .AUTOFLOW_OPT_OUT_DEFAULT_STATUS;
          });
        },
        { name: i.id },
      ),
    );
    l.adsUEditorGetShouldAlwaysEnableAPlusCInlineCommentByDefaultSelector = e;
  },
  98,
);
