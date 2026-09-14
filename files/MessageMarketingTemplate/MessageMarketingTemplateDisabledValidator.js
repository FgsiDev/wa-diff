__d(
  "MessageMarketingTemplateDisabledValidator",
  [
    "fbt",
    "AdsError",
    "AdsMessageMarketingTopBlockReasonContentTextUtils",
    "AdsMessageMarketingTopBlockReasonContentUtils",
    "AdsMessageMarketingTopBlockReasonErrorCodeUtils",
    "EnhancedBlockReason",
    "GeoLink.react",
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
              .MessageMarketingIntegrityErrorEnum.TEMPLATE_DISABLED;
          }),
          (t.validate = function (t, n) {
            var e;
            if (!r("gkx")("13496") || t.waTemplateStatus !== "DISABLED")
              return null;
            var a =
                ((e = t.adgroupPublishStatus) == null ? void 0 : e.isNew) ===
                  !0 && t.sourceAdgroupID != null,
              i = r("EnhancedBlockReason").cast(t.topBlockReason),
              l = o(
                "AdsMessageMarketingTopBlockReasonContentUtils",
              ).getWhatYouCanDo(i),
              c = s._(
                /*BTDS*/ "{description}{=m1}{newline} Review the {=m4} for best practices.",
                [
                  s._param(
                    "description",
                    u.jsx(r("GeoText.react"), {
                      display: "block",
                      xstyle: r("geoMargin").bottom8,
                      children: o(
                        "AdsMessageMarketingTopBlockReasonContentTextUtils",
                      ).getTopBlockReasonDisabledContent(i, a),
                    }),
                  ),
                  s._param("newline", u.jsx("br", {})),
                  s._implicitParam(
                    "=m1",
                    u.jsx("strong", {
                      children: s._(/*BTDS*/ "What you can do"),
                    }),
                  ),
                  s._implicitParam(
                    "=m4",
                    u.jsx(r("GeoLink.react"), {
                      href: "https://business.whatsapp.com/policy",
                      target: "_blank",
                      xstyle: r("geoMargin").bottom8,
                      children: s._(
                        /*BTDS*/ "WhatsApp Business Messaging policy",
                      ),
                    }),
                  ),
                ],
              ),
              d = s._(/*BTDS*/ "{description}{action description}", [
                s._param(
                  "description",
                  u.jsx(r("GeoText.react"), {
                    display: "block",
                    xstyle: r("geoMargin").bottom8,
                    children: o(
                      "AdsMessageMarketingTopBlockReasonContentTextUtils",
                    ).getTopBlockReasonDisabledContent(i, a),
                  }),
                ),
                s._param(
                  "action description",
                  o(
                    "AdsMessageMarketingTopBlockReasonContentUtils",
                  ).getContentForSuggestedAction(l),
                ),
              ]),
              m = a ? d : c,
              p = o(
                "AdsMessageMarketingTopBlockReasonContentUtils",
              ).getErrorCTALabelForInlineMessage(i),
              _ = new (o(
                "MessageMarketingIntegrityError",
              ).MessageMarketingAdsError)(
                o(
                  "AdsMessageMarketingTopBlockReasonErrorCodeUtils",
                ).getTemplateDisabledNFRErrorCodeForL1EditorPreviewSection(
                  i,
                  a,
                ),
                m,
                { cta: a ? p : null, level: r("AdsError").Level.WARN },
              ),
              f = o(
                "AdsMessageMarketingTopBlockReasonContentUtils",
              ).getTopBlockReasonDisabledTemplateInlineMessage(i, a),
              g = this.getErrorEnum();
            return { errorEnum: g, error: _, inlineMessage: f };
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
