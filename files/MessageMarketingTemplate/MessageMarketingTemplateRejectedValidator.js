__d(
  "MessageMarketingTemplateRejectedValidator",
  [
    "fbt",
    "AdsCommonCampaignMessageMarketingRejectionReasonTextPluginUtils",
    "AdsError",
    "AdsMessageMarketingTopBlockReasonErrorCodeUtils",
    "AdsUEditorAdgroupMessageMarketingCTAStrings",
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
              .MessageMarketingIntegrityErrorEnum.TEMPLATE_REJECTED;
          }),
          (t.validate = function (t, n) {
            var e;
            if (
              !r("gkx")("13496") ||
              (t.waTemplateStatus !== "REJECTED" &&
                t.waTemplateStatus !== "IN_APPEAL")
            )
              return null;
            var a = o(
                "AdsCommonCampaignMessageMarketingRejectionReasonTextPluginUtils",
              ).getWhatsAppTemplateRejectionReasonText(
                t.waTemplateRejectionReason,
              ),
              i =
                t.waTemplateStatus === "IN_APPEAL" ||
                (t.waTemplatePreviousStatus === "IN_APPEAL" &&
                  t.waTemplateStatus === "REJECTED"),
              l = s._(
                /*BTDS*/ "You requested a review of your marketing message. Whilst your marketing message is under review, please do not make edits or delete your marketing message.",
              ),
              c = s._(
                /*BTDS*/ "{=m0}{=m1}{=m2}{newline} Edit your marketing message or request a review if you believe it was incorrectly rejected.",
                [
                  s._param("newline", u.jsx("br", {})),
                  s._implicitParam(
                    "=m0",
                    u.jsx(r("GeoText.react"), {
                      display: "block",
                      xstyle: r("geoMargin").bottom8,
                      children: s._(
                        /*BTDS*/ "It looks like your marketing message goes against our WhatsApp Business Policies {policy rejection reason for marketing message rejection}. This means your message won't be sent to subscribers. This issue doesn't affect the delivery status of your ad.",
                        [
                          s._param(
                            "policy rejection reason for marketing message rejection",
                            a,
                          ),
                        ],
                      ),
                    }),
                  ),
                  s._implicitParam(
                    "=m1",
                    u.jsx(r("GeoText.react"), {
                      display: "block",
                      xstyle: r("geoMargin").bottom8,
                      children: s._(
                        /*BTDS*/ "If you make any changes to your marketing message and republish, your ad will be paused and go through another review.",
                      ),
                    }),
                  ),
                  s._implicitParam(
                    "=m2",
                    u.jsx("strong", {
                      children: s._(/*BTDS*/ "What you can do"),
                    }),
                  ),
                ],
              ),
              d = new (o(
                "MessageMarketingIntegrityError",
              ).MessageMarketingAdsError)(
                o(
                  "AdsMessageMarketingTopBlockReasonErrorCodeUtils",
                ).getTemplateRejectedErrorCodeForL1EditorPreviewSection(
                  (e = t.shouldShowRequestReviewCTA) != null ? e : !1,
                  i,
                ),
                t.waTemplateStatus === "IN_APPEAL" ? l : c,
                {
                  level: r("AdsError").Level.WARN,
                  cta: o("AdsUEditorAdgroupMessageMarketingCTAStrings")
                    .MARKETING_MESSAGE_SETUP_SECTION_EDIT_MARKETING_MESSAGE_BUTTON_LABEL,
                  secondaryCTA: i
                    ? o("AdsUEditorAdgroupMessageMarketingCTAStrings")
                        .MARKETING_MESSAGE_REQUEST_REVIEW_APPEAL_STATUS_BUTTON_LABEL
                    : o("AdsUEditorAdgroupMessageMarketingCTAStrings")
                        .MARKETING_MESSAGE_REQUEST_REVIEW_BUTTON_LABEL,
                },
              ),
              m =
                t.waTemplateStatus === "IN_APPEAL"
                  ? l
                  : s._(
                      /*BTDS*/ "Review all parts of your marketing message. If you make any changes to your marketing message and republish, your ad will be paused and go through another review.",
                    ),
              p = this.getErrorEnum();
            return { errorEnum: p, error: d, inlineMessage: m };
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
