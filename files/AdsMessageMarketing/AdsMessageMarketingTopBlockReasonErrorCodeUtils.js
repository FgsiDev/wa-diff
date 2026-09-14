__d(
  "AdsMessageMarketingTopBlockReasonErrorCodeUtils",
  ["MessageMarketingIntegrityError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      switch ((e === void 0 && (e = "none"), e)) {
        case "no_sign_up":
          return t === !0
            ? o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "ADS_MANAGER_MARKETING_MESSAGE__DUPLICATE_TEMPLATE_PAUSED_WITH_TARGETING_ISSUE",
              )
            : o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__TEMPLATE_DISABLED_WITH_TARGETING_ISSUE",
              );
        case "age_inappropriate":
        case "offensive_messages":
          return t === !0
            ? o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "ADS_MANAGER_MARKETING_MESSAGE__DUPLICATE_TEMPLATE_PAUSED_WITH_CONTENT_ISSUE",
              )
            : o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__TEMPLATE_DISABLED_WITH_CONTENT_ISSUE",
              );
        case "none":
          return t === !0
            ? o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__DUPLICATE_TEMPLATE_PAUSED_DUE_TO_UNKNOWN_REASON",
              )
            : o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__TEMPLATE_DISABLED_DUE_TO_UNKNOWN_REASON",
              );
        case "other":
          return t === !0
            ? o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__DUPLICATE_TEMPLATE_PAUSED_DUE_TO_OTHER_AS_BLOCK_REASON",
              )
            : o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__TEMPLATE_DISABLED_DUE_TO_OTHER_AS_BLOCK_REASON",
              );
        case "no_longer_needed":
          return t === !0
            ? o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__DUPLICATE_TEMPLATE_PAUSED_DUE_TO_NO_LONGER_NEEDED_REASON",
              )
            : o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__TEMPLATE_DISABLED_DUE_TO_NO_LONGER_NEEDED_REASON",
              );
        case "otp_did_not_request":
        case "spam":
          return t === !0
            ? o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__DUPLICATE_TEMPLATE_PAUSED",
              )
            : o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__TEMPLATE_DISABLED",
              );
      }
    }
    function s(e, t) {
      switch ((e === void 0 && (e = "none"), e)) {
        case "no_sign_up":
          return t === !0
            ? o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "ADS_MANAGER_MARKETING_MESSAGE__DUPLICATE_TEMPLATE_PAUSED_WITH_TARGETING_ISSUE",
              )
            : o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "ADS_MANAGER_MARKETING_MESSAGE__TEMPLATE_PAUSED_WITH_TARGETING_ISSUE",
              );
        case "age_inappropriate":
        case "offensive_messages":
          return t === !0
            ? o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "ADS_MANAGER_MARKETING_MESSAGE__DUPLICATE_TEMPLATE_PAUSED_WITH_CONTENT_ISSUE",
              )
            : o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__TEMPLATE_PAUSED_WITH_CONTENT_ISSUE",
              );
        case "none":
          return t === !0
            ? o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__DUPLICATE_TEMPLATE_PAUSED_DUE_TO_UNKNOWN_REASON",
              )
            : o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__TEMPLATE_PAUSED_DUE_TO_UNKNOWN_REASON",
              );
        case "other":
          return t === !0
            ? o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__DUPLICATE_TEMPLATE_PAUSED_DUE_TO_OTHER_AS_BLOCK_REASON",
              )
            : o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__TEMPLATE_PAUSED_DUE_TO_OTHER_AS_BLOCK_REASON",
              );
        case "no_longer_needed":
          return t === !0
            ? o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__DUPLICATE_TEMPLATE_PAUSED_DUE_TO_NO_LONGER_NEEDED_REASON",
              )
            : o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__TEMPLATE_PAUSED_DUE_TO_NO_LONGER_NEEDED_REASON",
              );
        case "otp_did_not_request":
        case "spam":
          return t === !0
            ? o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__DUPLICATE_TEMPLATE_PAUSED",
              )
            : o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__TEMPLATE_PAUSED",
              );
      }
    }
    function u(e) {
      switch ((e === void 0 && (e = "none"), e)) {
        case "no_sign_up":
          return o("MessageMarketingIntegrityError").messageMarketingErrorCode(
            "MARKETING_MESSAGES__TEMPLATE_MEDIUM_QUALITY_SCORE_WITH_TARGETING_ISSUE",
          );
        case "age_inappropriate":
        case "offensive_messages":
          return o("MessageMarketingIntegrityError").messageMarketingErrorCode(
            "MARKETING_MESSAGES__TEMPLATE_MEDIUM_QUALITY_SCORE_WITH_CONTENT_ISSUE",
          );
        case "none":
          return o("MessageMarketingIntegrityError").messageMarketingErrorCode(
            "MARKETING_MESSAGES__TEMPLATE_MEDIUM_QUALITY_DUE_TO_UNKNOWN_REASON",
          );
        case "other":
          return o("MessageMarketingIntegrityError").messageMarketingErrorCode(
            "MARKETING_MESSAGES__TEMPLATE_MEDIUM_QUALITY_DUE_TO_OTHER_AS_BLOCK_REASON",
          );
        case "no_longer_needed":
          return o("MessageMarketingIntegrityError").messageMarketingErrorCode(
            "MARKETING_MESSAGES__TEMPLATE_MEDIUM_QUALITY_DUE_TO_NO_LONGER_NEEDED_REASON",
          );
        case "otp_did_not_request":
        case "spam":
          return o("MessageMarketingIntegrityError").messageMarketingErrorCode(
            "MARKETING_MESSAGES__TEMPLATE_MEDIUM_QUALITY",
          );
      }
    }
    function c(e, t) {
      return e
        ? o("MessageMarketingIntegrityError").messageMarketingErrorCode(
            "MARKETING_MESSAGES__TEMPLATE_REVIEW_ISSUE",
          )
        : t
          ? o("MessageMarketingIntegrityError").messageMarketingErrorCode(
              "MARKETING_MESSAGES__TEMPLATE_IN_REVIEW_APPEAL_STATUS",
            )
          : o("MessageMarketingIntegrityError").messageMarketingErrorCode(
              "MARKETING_MESSAGES__TEMPLATE_REVIEW_ISSUE_WITH_NOT_ELIGIBLE_FOR_REVIEW",
            );
    }
    function d(e, t) {
      return e
        ? o("MessageMarketingIntegrityError").messageMarketingErrorCode(
            "MARKETING_MESSAGES__PROMOTED_WABA_RESTRICTED_APPEAL_REVIEW_STATUS",
          )
        : t
          ? o("MessageMarketingIntegrityError").messageMarketingErrorCode(
              "MARKETING_MESSAGES__PROMOTED_WABA_RESTRICTED_AND_ELIGIBLE_FOR_APPEAL",
            )
          : o("MessageMarketingIntegrityError").messageMarketingErrorCode(
              "MARKETING_MESSAGES__PROMOTED_WABA_RESTRICTED",
            );
    }
    ((l.getTemplateDisabledNFRErrorCodeForL1EditorPreviewSection = e),
      (l.getTemplatePausedNFRErrorCodeForL1EditorPreviewSection = s),
      (l.getTemplateQualityScoreNFRErrorCodeForL1EditorPreviewSection = u),
      (l.getTemplateRejectedErrorCodeForL1EditorPreviewSection = c),
      (l.getWABARestrictedErrorCodeForL1EditorPreviewSection = d));
  },
  98,
);
