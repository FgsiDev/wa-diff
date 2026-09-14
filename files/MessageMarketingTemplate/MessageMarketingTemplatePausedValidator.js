__d(
  "MessageMarketingTemplatePausedValidator",
  [
    "fbt",
    "AdsError",
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
              .MessageMarketingIntegrityErrorEnum.TEMPLATE_PAUSED;
          }),
          (t.validate = function (t, n) {
            var e;
            if (!r("gkx")("13496") || t.waTemplateStatus !== "PAUSED")
              return null;
            var a =
                ((e = t.adgroupPublishStatus) == null ? void 0 : e.isNew) ===
                  !0 && t.sourceAdgroupID != null,
              i = r("EnhancedBlockReason").cast(t.topBlockReason),
              l = this.getErrorEnum(),
              c = o(
                "AdsMessageMarketingTopBlockReasonContentUtils",
              ).getTopBlockReasonPausedTemplateInlineMessage(i, a),
              d = o(
                "AdsMessageMarketingTopBlockReasonContentUtils",
              ).getWhatYouCanDo(i),
              m = o(
                "AdsMessageMarketingTopBlockReasonContentUtils",
              ).getErrorCTALabelForInlineMessage(i),
              p = s._(/*BTDS*/ "{description}{action header}{=m2}", [
                s._param(
                  "description",
                  u.jsx(r("GeoText.react"), {
                    display: "block",
                    xstyle: r("geoMargin").bottom8,
                    children: o(
                      "AdsMessageMarketingTopBlockReasonContentUtils",
                    ).getTopBlockReasonPausedContent(i, a),
                  }),
                ),
                s._param(
                  "action header",
                  o(
                    "AdsMessageMarketingTopBlockReasonContentUtils",
                  ).getContentForSuggestedAction(d),
                ),
                s._implicitParam(
                  "=m2",
                  u.jsx(r("GeoText.react"), {
                    display: "block",
                    xstyle: r("geoMargin").top8,
                    children: s._(
                      /*BTDS*/ "If you make any changes to your marketing message and republish, your ad will be paused and go through another review.",
                    ),
                  }),
                ),
              ]),
              _ = new (o(
                "MessageMarketingIntegrityError",
              ).MessageMarketingAdsError)(
                o(
                  "AdsMessageMarketingTopBlockReasonErrorCodeUtils",
                ).getTemplatePausedNFRErrorCodeForL1EditorPreviewSection(i, a),
                p,
                { cta: m, level: r("AdsError").Level.RECOMMEND },
              );
            return { errorEnum: l, error: _, inlineMessage: c };
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
