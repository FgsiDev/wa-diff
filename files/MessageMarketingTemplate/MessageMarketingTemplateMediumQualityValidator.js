__d(
  "MessageMarketingTemplateMediumQualityValidator",
  [
    "fbt",
    "AdsError",
    "AdsMessageMarketingTopBlockReasonContentTextUtils",
    "AdsMessageMarketingTopBlockReasonContentUtils",
    "AdsMessageMarketingTopBlockReasonErrorCodeUtils",
    "EnhancedBlockReason",
    "GeoText.react",
    "MessageMarketingIntegrityError",
    "geoMargin",
    "getMessageMarketingIntegrityValidationResults",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.getErrorEnum = function () {
            return o("getMessageMarketingIntegrityValidationResults")
              .MessageMarketingIntegrityErrorEnum.TEMPLATE_MEDIUM_QUALITY;
          }),
          (t.validate = function (t, n) {
            if (!r("gkx")("13496") || t.waTemplateQualityScore !== "YELLOW")
              return null;
            var e = r("EnhancedBlockReason").cast(t.topBlockReason),
              a = o(
                "AdsMessageMarketingTopBlockReasonContentUtils",
              ).getWhatYouCanDo(e),
              i = s._(/*BTDS*/ "{description}{action header}{=m2}", [
                s._param(
                  "description",
                  u.jsx(r("GeoText.react"), {
                    display: "block",
                    xstyle: r("geoMargin").bottom8,
                    children: o(
                      "AdsMessageMarketingTopBlockReasonContentTextUtils",
                    ).getTopBlockReasonContentForTemplateQualityScore(e),
                  }),
                ),
                s._param(
                  "action header",
                  o(
                    "AdsMessageMarketingTopBlockReasonContentUtils",
                  ).getContentForSuggestedAction(a),
                ),
                s._implicitParam(
                  "=m2",
                  u.jsx(r("GeoText.react"), {
                    display: "block",
                    xstyle: r("geoMargin").top8,
                    children: s._(
                      /*BTDS*/ "If you make any changes to this campaign and republish, your ad will be paused and go through another review.",
                    ),
                  }),
                ),
              ]),
              l = o(
                "AdsMessageMarketingTopBlockReasonContentUtils",
              ).getErrorCTALabelForInlineMessage(e),
              c = new (o(
                "MessageMarketingIntegrityError",
              ).MessageMarketingAdsError)(
                o(
                  "AdsMessageMarketingTopBlockReasonErrorCodeUtils",
                ).getTemplateQualityScoreNFRErrorCodeForL1EditorPreviewSection(
                  e,
                ),
                i,
                { cta: l, level: r("AdsError").Level.RECOMMEND },
              ),
              d = o(
                "AdsMessageMarketingTopBlockReasonContentTextUtils",
              ).getTopBlockReasonInlineMessageForTemplateQualityScore(e),
              m = this.getErrorEnum();
            return { errorEnum: m, error: c, inlineMessage: d };
          }),
          e
        );
      })(),
      d = new c(),
      m = d;
    l.default = m;
  },
  226,
);
