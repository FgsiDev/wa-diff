__d(
  "WhatsAppBusinessPlatformMessageTemplateFbts",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "Headline"),
      u = function (t) {
        return s._(
          /*BTDS*/ "Add a title or short headline to your message in {language}. Add at least five words to get recommendations.",
          [s._param("language", t)],
        );
      },
      c = function (t) {
        return s._(
          /*BTDS*/ "Add a title or short headline to your message in {language}",
          [s._param("language", t)],
        );
      },
      d = function (t) {
        return s._(
          /*BTDS*/ "Enter the text or additional details of your message in {language}. Add at least five words to get recommendations.",
          [s._param("language", t)],
        );
      },
      m = function (t) {
        return s._(
          /*BTDS*/ "Enter the text or additional details of your message in {language}",
          [s._param("language", t)],
        );
      },
      p = function (t) {
        return s._(
          /*BTDS*/ "Add a short line of text to the bottom of your message in {language}",
          [s._param("language", t)],
        );
      },
      _ = s._(/*BTDS*/ "Add button"),
      f = s._(/*BTDS*/ "Add call to action"),
      g = s._(/*BTDS*/ "Button type"),
      h = s._(/*BTDS*/ "Button text"),
      y = s._(/*BTDS*/ "Phone number"),
      C = s._(/*BTDS*/ "Enter a valid phone number."),
      b = s._(/*BTDS*/ "Enter a valid website URL."),
      v = s._(
        /*BTDS*/ "You cannot edit message campaigns that are already published.",
      ),
      S = s._(
        /*BTDS*/ "Add text in all required fields to publish your message template.",
      ),
      R = s._(
        /*BTDS*/ "Verify your phone number before you publish this message campaign.",
      ),
      L = s._(/*BTDS*/ "Go to Message account settings"),
      E = s._(
        /*BTDS*/ "Your display name hasn't been approved. Make sure your business display name complies with WhatsApp Business policies before you publish a message campaign.",
      ),
      k = s._(/*BTDS*/ "Direct links to WhatsApp aren't allowed for buttons"),
      I = s._(/*BTDS*/ "This box must be checked to submit this template.");
    ((l.WHATSAPP_MARKETING_MESSAGE_TEMPLATE_HEADLINE_HEADING = e),
      (l.getWhatsAppMarketingMessageAdsManagerHeadlineWithTextRecommendationInstructionsPlaceholder =
        u),
      (l.getWhatsAppMarketingMessageAdsManagerHeadlinePlaceholder = c),
      (l.getWhatsAppMarketingMessageAdsManagerBodyWithTextRecommendationInstructionsPlaceholder =
        d),
      (l.getWhatsAppMarketingMessageAdsManagerBodyPlaceholder = m),
      (l.getWhatsAppMarketingMessageAdsManagerFooterPlaceholder = p),
      (l.MARKETING_MESSAGE_TEMPLATE_ADD_BUTTON = _),
      (l.MARKETING_MESSAGE_CALL_TO_ACTION_BUTTON = f),
      (l.MARKETING_MESSAGE_BUTTON_TYPE_PLACEHOLD = g),
      (l.WHATSAPP_MARKETING_MESSAGE_TEMPLATE_EDITOR_BUTTON_TEXT_INPUT_LABEL =
        h),
      (l.WHATSAPP_MARKETING_MESSAGE_TEMPLATE_EDITOR_PHONE_INPUT_LABEL = y),
      (l.WHATSAPP_MARKETING_MESSAGE_TEMPLATE_INVALID_PHONE_NUMBER_ERROR = C),
      (l.WHATSAPP_MARKETING_MESSAGE_TEMPLATE_INVALID_URL_ERROR = b),
      (l.WHATSAPP_MARKETING_MESSAGE_TEMPLATE_EDITTING_DISABLED_TOOLTIP = v),
      (l.WHATSAPP_MARKETING_MESSAGE_TEMPLATE_MISSING_REQUIRED_FIELD_ERROR = S),
      (l.WHATSAPP_MARKETING_MESSAGE_PHONE_NUMBER_UNVERIFIED_ERROR = R),
      (l.WHATSAPP_MARKETING_MESSAGE_GO_TO_MESSAGE_SETTINGS_LINK_TEXT = L),
      (l.WHATSAPP_MARKETING_MESSAGE_WHATSAPP_PHONE_NUMBER_UNVERIFIED_DISPLAY_NAME_ERROR =
        E),
      (l.HSM_EDITOR_WHATSAPP_URL_ERROR = k),
      (l.HSM_EDITOR_CODE_AUTOFILL_ZERO_TAP_AGREEMENT_ERROR_MESSAGE = I));
  },
  226,
);
