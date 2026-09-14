__d(
  "AdsMessageMarketingTopBlockReasonContentUtils",
  [
    "fbt",
    "AdsAPIAdgroupPaths",
    "AdsAPICampaignPaths",
    "AdsErrorsCTAStrings",
    "AdsMessageMarketingTopBlockReasonContentTextUtils",
    "AdsUEditorAdgroupMessageMarketingCTAStrings",
    "GeoGuidanceCardContentList.react",
    "GeoGuidanceCardContentListItem.react",
    "GeoLink.react",
    "GeoText.react",
    "MessageMarketingIntegrityError",
    "URI",
    "XDeveloperDocumentationControllerRouteBuilder",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = function () {
        var t, n;
        return new (e || (e = r("URI")))(
          (t =
            (n = r("XDeveloperDocumentationControllerRouteBuilder")
              .buildUri({
                path1: "whatsapp",
                path2: "message-templates",
                path3: "guidelines",
              })
              .getQualifiedUri()) == null ||
            (n = n.setSubDomain("developers")) == null
              ? void 0
              : n.toString()) != null
            ? t
            : "",
        );
      };
    function m(e, t) {
      return t === !0
        ? o(
            "AdsMessageMarketingTopBlockReasonContentTextUtils",
          ).getTopBlockReasonPausedContentDraft(e)
        : o(
            "AdsMessageMarketingTopBlockReasonContentTextUtils",
          ).getTopBlockReasonPausedContentPublished(e);
    }
    function p(e) {
      switch ((e === void 0 && (e = "none"), e)) {
        case "no_longer_needed":
          return s._(
            /*BTDS*/ "Your marketing message delivery may be paused if this campaign is published. This is because you duplicated an existing marketing message that led to some people indicating they no longer needed the product or service.",
          );
        case "no_sign_up":
          return s._(
            /*BTDS*/ "Your marketing message delivery may be paused if this campaign is published. This is because you duplicated an existing marketing message that led to some people indicating they did not subscribe to messages from your business.",
          );
        case "age_inappropriate":
        case "offensive_messages":
          return s._(
            /*BTDS*/ "Your marketing message delivery may be paused if this campaign is published. This is because you duplicated an existing marketing message that some people indicated as offensive.",
          );
        case "otp_did_not_request":
        case "none":
        case "other":
        case "spam":
          return s._(
            /*BTDS*/ "Your marketing message delivery may be paused if this campaign is published. This is because you duplicated an existing marketing message that received negative feedback or low read-rates from some people.",
          );
      }
    }
    function _(e, t) {
      if ((e === void 0 && (e = "none"), t === void 0 && (t = !1), t === !0))
        return p(e);
      switch (e) {
        case "no_longer_needed":
          return s._(
            /*BTDS*/ "We paused delivery of your marketing message because some people who received it indicated they no longer needed the product or service. Your message will start delivering again within 6 hours.",
          );
        case "no_sign_up":
          return s._(
            /*BTDS*/ "We paused delivery of your marketing message because some people who received it indicated they did not subscribe to receiving messages. Your message will start delivering again within 6 hours.",
          );
        case "age_inappropriate":
        case "offensive_messages":
          return s._(
            /*BTDS*/ "We paused delivery of your marketing message because some people who received it indicated that the content was offensive. Your message will start delivering again within 6 hours.",
          );
        case "otp_did_not_request":
        case "none":
        case "other":
        case "spam":
          return s._(
            /*BTDS*/ "We paused delivery of your marketing message because it received negative feedback or low read-rates from some people. Your message will start delivering again within 6 hours.",
          );
      }
    }
    function f(e, t) {
      if ((e === void 0 && (e = "none"), t === !0)) return p(e);
      switch (e) {
        case "no_longer_needed":
          return s._(
            /*BTDS*/ "Your marketing message can no longer be delivered because people who received it have indicated they no longer needed the product or service.",
          );
        case "no_sign_up":
          return s._(
            /*BTDS*/ "Your marketing message can no longer be delivered because people who received it have indicated they did not subscribe to receiving messages. This means your message can't be edited anymore.",
          );
        case "age_inappropriate":
        case "offensive_messages":
          return s._(
            /*BTDS*/ "Your marketing message can no longer be delivered because people who received it have indicated that the content was offensive. This means your message can't be edited anymore.",
          );
        case "otp_did_not_request":
        case "none":
        case "other":
        case "spam":
          return s._(
            /*BTDS*/ "Your marketing message can no longer be delivered because it continuously received recurring negative feedback or low read-rates. This means your message can't be edited anymore.",
          );
      }
    }
    function g(e) {
      switch ((e === void 0 && (e = "none"), e)) {
        case "no_sign_up":
          return [
            s._(
              /*BTDS*/ "Unsubscribe people who no longer want to receive your marketing messages.",
            ),
          ];
        case "age_inappropriate":
        case "offensive_messages":
          return [
            s._(
              /*BTDS*/ "Review your creative to make sure it doesn't contain rude, foul or harassing language, adult content, or prohibited or illegal activity.",
            ),
          ];
        case "no_longer_needed":
        case "otp_did_not_request":
        case "none":
        case "other":
        case "spam":
          return [
            s._(/*BTDS*/ "Edit your marketing message creative."),
            s._(
              /*BTDS*/ "Unsubscribe people who no longer want to receive your messages or keep your customer lists up to date.",
            ),
          ];
      }
    }
    function h(e) {
      if (e == null) return null;
      switch (e) {
        case "no_longer_needed":
        case "no_sign_up":
          return {
            label: r("AdsErrorsCTAStrings").EDIT_AUDIENCE,
            path: r("AdsAPICampaignPaths").TARGETING.CUSTOM_AUDIENCES,
          };
        case "age_inappropriate":
        case "offensive_messages":
          return {
            label: s._(/*BTDS*/ "Edit marketing message"),
            path: r("AdsAPIAdgroupPaths").CREATIVE.BODY,
          };
        default:
          return null;
      }
    }
    function y(e) {
      switch ((e === void 0 && (e = "none"), e)) {
        case "no_sign_up":
          return o("AdsUEditorAdgroupMessageMarketingCTAStrings")
            .MARKETING_MESSAGE_UNSUBSCRIBE_PEOPLE_CTA_BUTTON_LABEL;
        case "age_inappropriate":
        case "offensive_messages":
          return o("AdsUEditorAdgroupMessageMarketingCTAStrings")
            .MARKETING_MESSAGE_SETUP_SECTION_EDIT_MARKETING_MESSAGE_BUTTON_LABEL;
        default:
          return null;
      }
    }
    function C(e, t, n) {
      return t !== ""
        ? s._(
            /*BTDS*/ "{waba name} and its phone numbers are restricted until {restriction date} because it has been identified as {restriction reason with date}. This activity goes against the WhatsApp Business Messaging policy or WhatsApp Business Terms of Service. You can\u2019t send marketing messages until the restriction is lifted. {=m9}",
            [
              s._param("waba name", n),
              s._param("restriction date", t),
              s._param("restriction reason with date", e),
              s._implicitParam(
                "=m9",
                c.jsx(r("GeoLink.react"), {
                  href: "https://business.whatsapp.com/policy",
                  target: "_blank",
                  children: s._(/*BTDS*/ "See policy"),
                }),
              ),
            ],
          )
        : s._(
            /*BTDS*/ "{waba name} and its phone numbers are restricted because it has been identified as {restriction reason without date}. This activity goes against the WhatsApp Business Messaging policy or WhatsApp Business Terms of Service. You can\u2019t use this account to send marketing messages anymore. {=m6}",
            [
              s._param("waba name", n),
              s._param("restriction reason without date", e),
              s._implicitParam(
                "=m6",
                c.jsx(r("GeoLink.react"), {
                  href: "https://business.whatsapp.com/policy",
                  target: "_blank",
                  children: s._(/*BTDS*/ "See policy"),
                }),
              ),
            ],
          );
    }
    function b(e, t) {
      return s._(
        /*BTDS*/ "{waba name} and its phone numbers have been identified as {restriction reason for WABA warning}. This activity goes against the WhatsApp Business Messaging policy or WhatsApp Business Terms of Service. If it continues, we may restrict your account from messaging. {=m6}",
        [
          s._param("waba name", t),
          s._param("restriction reason for WABA warning", e),
          s._implicitParam(
            "=m6",
            c.jsx(r("GeoLink.react"), {
              href: "https://business.whatsapp.com/policy",
              target: "_blank",
              children: s._(/*BTDS*/ "See policy"),
            }),
          ),
        ],
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e, t) {
      return s._(
        /*BTDS*/ "{waba name} and its phone numbers have been identified as {restriction reason for WABA warning}. You can't send marketing messages until the restriction is lifted.",
        [
          s._param("waba name", e),
          s._param("restriction reason for WABA warning", t),
        ],
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      return s._(/*BTDS*/ "{=m0}{action description}", [
        s._param(
          "action description",
          e != null &&
            (e.length === 1
              ? c.jsx(r("GeoText.react"), { display: "block", children: e[0] })
              : c.jsx(r("GeoGuidanceCardContentList.react"), {
                  children: e.map(function (e, t) {
                    return c.jsx(
                      r("GeoGuidanceCardContentListItem.react"),
                      { children: e },
                      t,
                    );
                  }),
                })),
        ),
        s._implicitParam(
          "=m0",
          c.jsx("strong", { children: s._(/*BTDS*/ "What you can do") }),
        ),
      ]);
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return s._(
        /*BTDS*/ "The top reason people indicated when they blocked your phone number or reported your message. This is only shown when a significant number of people do so. {=m1}{newline1}{newline2} This metric is {=m6}",
        [
          s._param("newline1", c.jsx("br", {})),
          s._param("newline2", c.jsx("br", {})),
          s._implicitParam(
            "=m1",
            c.jsx(r("GeoLink.react"), {
              href: d(),
              target: "_blank",
              children: s._(/*BTDS*/ "Learn more"),
            }),
          ),
          s._implicitParam(
            "=m6",
            c.jsx(r("GeoLink.react"), {
              href: "https://www.facebook.com/business/help/metrics-labeling",
              target: "_blank",
              children: s._(/*BTDS*/ "in development"),
            }),
          ),
        ],
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.filter(function (e) {
        return e.positionKeys.includes("whatsapp/marketing_messages");
      });
      if (t.length === 0) return null;
      var n = t[0].code;
      switch (n) {
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_PAUSED",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_MEDIUM_QUALITY",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__DUPLICATE_TEMPLATE_PAUSED",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_DISABLED",
        ):
          return s._(/*BTDS*/ "Top reason: Spam");
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "ADS_MANAGER_MARKETING_MESSAGE__TEMPLATE_PAUSED_WITH_TARGETING_ISSUE",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_MEDIUM_QUALITY_SCORE_WITH_TARGETING_ISSUE",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "ADS_MANAGER_MARKETING_MESSAGE__DUPLICATE_TEMPLATE_PAUSED_WITH_TARGETING_ISSUE",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_DISABLED_WITH_TARGETING_ISSUE",
        ):
          return s._(/*BTDS*/ "Top reason: Didn\u2019t sign up");
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_PAUSED_WITH_CONTENT_ISSUE",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_MEDIUM_QUALITY_SCORE_WITH_CONTENT_ISSUE",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "ADS_MANAGER_MARKETING_MESSAGE__DUPLICATE_TEMPLATE_PAUSED_WITH_CONTENT_ISSUE",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_DISABLED_WITH_CONTENT_ISSUE",
        ):
          return s._(/*BTDS*/ "Top reason: Offensive message");
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_PAUSED_DUE_TO_UNKNOWN_REASON",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_MEDIUM_QUALITY_DUE_TO_UNKNOWN_REASON",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__DUPLICATE_TEMPLATE_PAUSED_DUE_TO_UNKNOWN_REASON",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_DISABLED_DUE_TO_UNKNOWN_REASON",
        ):
          return s._(/*BTDS*/ "Top reason: Unknown");
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_PAUSED_DUE_TO_OTHER_AS_BLOCK_REASON",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_MEDIUM_QUALITY_DUE_TO_OTHER_AS_BLOCK_REASON",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__DUPLICATE_TEMPLATE_PAUSED_DUE_TO_OTHER_AS_BLOCK_REASON",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_DISABLED_DUE_TO_OTHER_AS_BLOCK_REASON",
        ):
          return s._(/*BTDS*/ "Top reason: No reason selected");
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_PAUSED_DUE_TO_NO_LONGER_NEEDED_REASON",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_MEDIUM_QUALITY_DUE_TO_NO_LONGER_NEEDED_REASON",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__DUPLICATE_TEMPLATE_PAUSED_DUE_TO_NO_LONGER_NEEDED_REASON",
        ):
        case o("MessageMarketingIntegrityError").messageMarketingErrorCode(
          "MARKETING_MESSAGES__TEMPLATE_DISABLED_DUE_TO_NO_LONGER_NEEDED_REASON",
        ):
          return s._(/*BTDS*/ "Top reason: No longer needed");
        default:
          return null;
      }
    }
    ((l.getTopBlockReasonPausedContent = m),
      (l.getTopBlockReasonPausedTemplateInlineMessage = _),
      (l.getTopBlockReasonDisabledTemplateInlineMessage = f),
      (l.getWhatYouCanDo = g),
      (l.getCTAConfig = h),
      (l.getErrorCTALabelForInlineMessage = y),
      (l.getContentForWABARestrictedWithRestrictionReason = C),
      (l.getContentForWABAWarningWithRestrictionReason = b),
      (l.getWABARestrictedInlineMessage = v),
      (l.getContentForSuggestedAction = S),
      (l.getTooltip = R),
      (l.getHeaderContentForTooltip = L));
  },
  226,
);
