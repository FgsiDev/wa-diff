__d(
  "adsUEditorGetShouldEnableAPlusCCarouselInlineCommentByDefaultGetValueSelector",
  [
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorGetShouldAlwaysEnableAPlusCInlineCommentByDefaultSelector",
    "adsUEditorGetShouldEnableAPlusCCarouselInlineCommentByDefaultSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
        r("adsCreateSelector")(
          [
            o(
              "adsUEditorGetShouldEnableAPlusCCarouselInlineCommentByDefaultSelector",
            )
              .adsUEditorGetShouldEnableAPlusCCarouselInlineCommentByDefaultSelector,
            o(
              "adsUEditorGetShouldAlwaysEnableAPlusCInlineCommentByDefaultSelector",
            )
              .adsUEditorGetShouldAlwaysEnableAPlusCInlineCommentByDefaultSelector,
          ],
          function (t, n) {
            var e,
              r,
              a,
              i,
              l = t(),
              s = n(),
              u =
                (e = (r = s.getValue()) == null ? void 0 : r.shouldOptIn) !=
                null
                  ? e
                  : !1;
            return u
              ? (a = s.getValue()) != null
                ? a
                : o("adsUEditorGetShouldEnableAutoflowByDefaultSelector")
                    .AUTOFLOW_OPT_OUT_DEFAULT_STATUS
              : (i = l.getValue()) != null
                ? i
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
