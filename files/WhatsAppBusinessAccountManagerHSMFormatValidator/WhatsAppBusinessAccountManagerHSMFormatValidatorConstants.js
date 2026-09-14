__d(
  "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
  [
    "fbt",
    "$InternalEnum",
    "AdUEditorAdGroupMessageMarketingQuickReplyWithCustomPayloadComponentFbt",
    "AdsUEditorAdgroupMessageMarketingFbt",
    "WhatsAppBusinessPlatformMessageTemplateFbts",
    "WhatsAppHSMAuthContentRestrictionsConstants",
    "XFBWhatsAppHSMComponentType.facebook",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (e = n("$InternalEnum"))({
        INVALID_PARAMETER: "Invalid Parameter",
        INVALID_NAMED_PARAMETER: "Invalid Named Parameter",
        DUPLICATED_NAMED_PARAMETER: "Duplicated Named Parameter",
        NAMED_PARAMETER_TOO_LONG: "Named Parameter Too Long",
        SHORTENED_URL: "Shortened URL",
        TEST_TEMPLATE: "Test Template",
        FLOATING_PARAMETER_RATIO: "Floating Parameter - Ratio",
        FLOATING_PARAMETER_ADJ: "Floating Parameter - Adjacent",
        FLOATING_PARAMETER_DANGLE: "Floating Parameter - Dangled",
        CHANGES_LIMIT: "Changes Exceed Limit",
        FORMATTING_STYLE: "Formatting Style",
        NEWLINE: "Newline",
        MULTIPLE_NEWLINES: "Multiple Newlines",
        ASTERISK_CHARACTERS: "Asterisk Characters",
        EMOJI: "Emoji",
        EMOJI_LIMIT: "Emoji Count Exceeds Limit",
        UTILITY_EMOJI_LIMIT: "Utility Template Emoji Count Exceeds Limit",
        PARAMETER_IN_FOOTER: "Parameter in Footer",
        INVALID_PARAMETER_UNSUPPORTED_ALIAS:
          "Invalid Parameter Unsupported Alias",
        MORE_THAN_ONE_PARAMETER: "More Than One Parameter",
        TOO_MANY_CHARACTERS: "Too Many Characters",
        PARAMETER_IN_BUTTON_TEXT: "Parameter in Button Text",
        URL_PRESENT: "URL Present",
        INVALID_PHONE_NUMBER: "Invalid Phone Number",
        INVALID_URL: "Invalid URL",
        MISSING_REQUIRED_FIELD: "Missing Required Field",
        BUTTONS_DIRECT_LINK_TO_WHATSAPP: "Buttons Direct Link to WhatsApp",
        FLAG_NOT_CHECKED: "Flag Not Checked",
        UNSUPPORTED_PARAMETER: "Unsupported Parameter",
        EMPTY_PRECONFIGURED_RESPONSE: "Response cannot be empty",
        EMPTY_QUICK_REPLY_CUSTOM_PAYLOAD: "Quick Reply Payload cannot be empty",
        DUPLICATE_BUTTON_LABEL: "Duplicate Button Label",
        ONLY_ONE_BUTTON_PRESENT: "Only One Button Present",
        INVALID_SIGNATURE_HASH: "Invalid Signature Hash",
        INVALID_PACKAGE_NAME: "Invalid Package Name",
        INVALID_SIGNATURE_HASH_LENGTH: "Invalid Signature Hash Length",
        DUPLICATE_SUPPORTED_APP: "Duplicate Supported App",
        ELIGIBILITY_CHECK_TERMS_NOT_ACCEPTED:
          "Eligibility Check Terms Not Accepted",
        LEADING_TRAILING_PARAMETER: "Leading Or Trailing Parameter",
      }),
      c = e.Mirrored([
        "BUTTON_LABEL",
        "PHONE_NUMBER",
        "URL",
        "AUTOFILL_BUTTON_LABEL",
        "ZERO_TAP_FLAG",
        "COPY_CODE",
        "PRECONFIGURED_RESPONSE",
        "AUTOFILL_PACKAGE_NAME",
        "AUTOFILL_SIGNATURE_HASH",
        "QUICK_REPLY_PAYLOAD",
      ]),
      d = e.Mirrored(["WHATSAPP_MANAGER", "ADS_MANAGER"]),
      m = e.Mirrored(["PARAMETER_NUMBERS", "PARAMETER_ALIASES"]),
      p = e.Mirrored(["WARN", "BLOCK"]),
      _ = function (t) {
        switch (t) {
          case u.INVALID_PARAMETER:
          case u.INVALID_NAMED_PARAMETER:
          case u.DUPLICATED_NAMED_PARAMETER:
          case u.NAMED_PARAMETER_TOO_LONG:
            return 1;
          case u.SHORTENED_URL:
            return 2;
          case u.TEST_TEMPLATE:
            return 3;
          case u.FLOATING_PARAMETER_RATIO:
            return 4;
          case u.FLOATING_PARAMETER_ADJ:
            return 5;
          case u.FLOATING_PARAMETER_DANGLE:
            return 6;
          case u.CHANGES_LIMIT:
            return 7;
          case u.FORMATTING_STYLE:
            return 8;
          case u.NEWLINE:
            return 9;
          case u.MULTIPLE_NEWLINES:
            return 10;
          case u.ASTERISK_CHARACTERS:
            return 11;
          case u.EMOJI:
            return 12;
          case u.PARAMETER_IN_FOOTER:
            return 13;
          case u.INVALID_PARAMETER_UNSUPPORTED_ALIAS:
            return 14;
          case u.MORE_THAN_ONE_PARAMETER:
            return 15;
          case u.TOO_MANY_CHARACTERS:
            return 16;
          case u.PARAMETER_IN_BUTTON_TEXT:
            return 17;
          case u.URL_PRESENT:
            return 18;
          case u.INVALID_PHONE_NUMBER:
            return 19;
          case u.INVALID_URL:
            return 20;
          case u.MISSING_REQUIRED_FIELD:
            return 21;
          case u.BUTTONS_DIRECT_LINK_TO_WHATSAPP:
            return 22;
          case u.FLAG_NOT_CHECKED:
            return 23;
          case u.UNSUPPORTED_PARAMETER:
            return 24;
          case u.EMPTY_PRECONFIGURED_RESPONSE:
            return 25;
          case u.EMPTY_QUICK_REPLY_CUSTOM_PAYLOAD:
            return 34;
          case u.DUPLICATE_BUTTON_LABEL:
            return 26;
          case u.ONLY_ONE_BUTTON_PRESENT:
            return 27;
          case u.INVALID_SIGNATURE_HASH:
            return 28;
          case u.INVALID_PACKAGE_NAME:
            return 29;
          case u.INVALID_SIGNATURE_HASH_LENGTH:
            return 30;
          case u.DUPLICATE_SUPPORTED_APP:
            return 31;
          case u.ELIGIBILITY_CHECK_TERMS_NOT_ACCEPTED:
            return 32;
          case u.EMOJI_LIMIT:
            return 33;
          case u.UTILITY_EMOJI_LIMIT:
            return 35;
          case u.LEADING_TRAILING_PARAMETER:
            return 36;
        }
      },
      f = function (t, n, a, i, l) {
        var e = g(t);
        t === "BUTTONS" && i != null && (e = h(i));
        var c = "{{1}}, {{2}}",
          d = "{{1}}",
          m = "{{customer_name}}, {{order_id}}";
        switch (n) {
          case u.INVALID_NAMED_PARAMETER:
            return s._(
              /*BTDS*/ "This template contains variable parameters with incorrect formatting. Variable parameters must be lowercase characters, underscores and numbers with two sets of curly brackets (for example, {valid named example}).",
              [s._param("valid named example", m)],
            );
          case u.NAMED_PARAMETER_TOO_LONG:
            return s._(
              /*BTDS*/ "This template contains variable parameters that exceed the maximum length of 32 characters.",
            );
          case u.DUPLICATED_NAMED_PARAMETER:
            return s._(
              /*BTDS*/ "This template contains duplicate variable parameters.",
            );
          case u.INVALID_PARAMETER:
            return a
              ? s._(
                  /*BTDS*/ "This template contains variable parameters with incorrect formatting. Variable parameters must be whole numbers with two sets of curly brackets (for example, {example}).",
                  [s._param("example", c)],
                )
              : s._(
                  /*BTDS*/ "The {template section} text contains formatting errors. Variable parameters must be whole numbers with two sets of curly brackets (for example, {example}).",
                  [s._param("template section", e), s._param("example", c)],
                );
          case u.SHORTENED_URL:
            return s._(
              /*BTDS*/ "The {template section} text contains formatting errors. URL shorteners (for example, bit.ly, tinyurl, goo.gl) are not allowed.",
              [s._param("template section", e)],
            );
          case u.TEST_TEMPLATE:
            return s._(
              /*BTDS*/ 'The {template section} text must be "Hello {template param}" because this message template\'s name is "test". If you want to change the body text, go to the previous screen and rename this template.',
              [s._param("template section", e), s._param("template param", d)],
            );
          case u.FLOATING_PARAMETER_RATIO:
            return a
              ? s._(
                  /*BTDS*/ "This template has too many variables for its length. Reduce the number of variables or increase the message length.",
                )
              : s._(
                  /*BTDS*/ "The {template section} text contains too many variable parameters relative to the length of the message. Check to make sure this is the correct format.",
                  [s._param("template section", e)],
                );
          case u.FLOATING_PARAMETER_ADJ:
            return a
              ? l != null && l.isConsecutiveParamEnforcementEnabled
                ? s._(/*BTDS*/ "Variables must be separated by text.")
                : s._(
                    /*BTDS*/ "The {template section} text contains variable parameters that are next to each other. You need to either change this format or add a sample.",
                    [s._param("template section", e)],
                  )
              : s._(
                  /*BTDS*/ "The {template section} text contains variable parameters next to each other. Check to make sure this is the correct format.",
                  [s._param("template section", e)],
                );
          case u.FLOATING_PARAMETER_DANGLE:
            return a
              ? s._(
                  /*BTDS*/ "The {template section} text contains variable parameters at the beginning or end. You need to either change this format or add a sample.",
                  [s._param("template section", e)],
                )
              : s._(
                  /*BTDS*/ "The {template section} text contains variable parameters at the beginning or end. Check to make sure this is the correct format.",
                  [s._param("template section", e)],
                );
          case u.CHANGES_LIMIT:
            return s._(
              /*BTDS*/ "Based on the changes you\u2019ve made to the body, your template may need to go through a review.",
            );
          case u.FORMATTING_STYLE:
            return s._(
              /*BTDS*/ "Special characters (*, _, ~, ```) are not supported in the {template section}.",
              [s._param("template section", e)],
            );
          case u.NEWLINE:
            return s._(
              /*BTDS*/ "Paragraphs are not supported in the {template section}.",
              [s._param("template section", e)],
            );
          case u.MULTIPLE_NEWLINES:
            return s._(
              /*BTDS*/ "Paragraphs are not supported in the {template section}.",
              [s._param("template section", e)],
            );
          case u.ASTERISK_CHARACTERS:
            return s._(
              /*BTDS*/ "The {template section} text contains formatting errors. Asterisks are not allowed.",
              [s._param("template section", e)],
            );
          case u.EMOJI:
            return s._(
              /*BTDS*/ "Emojis are not supported in the {template section}.",
              [s._param("template section", e)],
            );
          case u.PARAMETER_IN_FOOTER:
            return s._(
              /*BTDS*/ "Variables are not supported in the {template section}.",
              [s._param("template section", e)],
            );
          case u.INVALID_PARAMETER_UNSUPPORTED_ALIAS:
            return a
              ? s._(
                  /*BTDS*/ "The {template section} text contains variable parameters with incorrect formatting. Variable parameters must be tokens (for example, {example}).",
                  [
                    s._param("template section", e),
                    s._param("example", "{{first_name}}"),
                  ],
                )
              : s._(
                  /*BTDS*/ "The {template section} text contains formatting errors. Variable parameters must be tokens (for example, {example}).",
                  [
                    s._param("template section", e),
                    s._param("example", "{{first_name}}"),
                  ],
                );
          case u.MORE_THAN_ONE_PARAMETER:
            return s._(
              /*BTDS*/ "The {template section} can't include more than one variable parameter.",
              [s._param("template section", e)],
            );
          case u.TOO_MANY_CHARACTERS:
            return s._(
              /*BTDS*/ "Your {template section} exceeds the maximum number of characters.",
              [s._param("template section", e)],
            );
          case u.PARAMETER_IN_BUTTON_TEXT:
            return s._(
              /*BTDS*/ "Variables are not supported in the {template section}.",
              [s._param("template section", e)],
            );
          case u.URL_PRESENT:
            return s._(
              /*BTDS*/ "Links are not supported in the {template section}.",
              [s._param("template section", e)],
            );
          case u.UNSUPPORTED_PARAMETER:
            return s._(
              /*BTDS*/ "The {template section} text contains an unsupported variable parameter. You can only add parameters that are supported for the message setup selections.",
              [s._param("template section", e)],
            );
          case u.INVALID_PHONE_NUMBER:
            return o("WhatsAppBusinessPlatformMessageTemplateFbts")
              .WHATSAPP_MARKETING_MESSAGE_TEMPLATE_INVALID_PHONE_NUMBER_ERROR;
          case u.INVALID_URL:
            return o("WhatsAppBusinessPlatformMessageTemplateFbts")
              .WHATSAPP_MARKETING_MESSAGE_TEMPLATE_INVALID_URL_ERROR;
          case u.MISSING_REQUIRED_FIELD:
            return o("WhatsAppBusinessPlatformMessageTemplateFbts")
              .WHATSAPP_MARKETING_MESSAGE_TEMPLATE_MISSING_REQUIRED_FIELD_ERROR;
          case u.BUTTONS_DIRECT_LINK_TO_WHATSAPP:
            return o("WhatsAppBusinessPlatformMessageTemplateFbts")
              .HSM_EDITOR_WHATSAPP_URL_ERROR;
          case u.FLAG_NOT_CHECKED:
            return o("WhatsAppBusinessPlatformMessageTemplateFbts")
              .HSM_EDITOR_CODE_AUTOFILL_ZERO_TAP_AGREEMENT_ERROR_MESSAGE;
          case u.EMPTY_PRECONFIGURED_RESPONSE:
            return o("WhatsAppBusinessPlatformMessageTemplateFbts")
              .WHATSAPP_MARKETING_MESSAGE_TEMPLATE_MISSING_REQUIRED_FIELD_ERROR;
          case u.EMPTY_QUICK_REPLY_CUSTOM_PAYLOAD:
            return o(
              "AdUEditorAdGroupMessageMarketingQuickReplyWithCustomPayloadComponentFbt",
            ).UNIQUE_IDENTIFIER_INPUT_FIELD_WARNING_MESSAGE;
          case u.DUPLICATE_BUTTON_LABEL:
            return s._(
              /*BTDS*/ "You can't enter the same text for multiple buttons",
            );
          case u.ONLY_ONE_BUTTON_PRESENT:
            return o("AdsUEditorAdgroupMessageMarketingFbt")
              .BUTTON_SECTION_AT_LEAST_ONE_BUTTON_PRESENT;
          case u.INVALID_SIGNATURE_HASH:
            return s._(
              /*BTDS*/ "Your {template section} contains invalid characters. You can only use alpha numeric characters, '\/', '+', and '='",
              [s._param("template section", e)],
            );
          case u.INVALID_PACKAGE_NAME:
            return s._(
              /*BTDS*/ "Your {template section} is not a valid Android application ID. Per Android guidelines, an application ID must have at least two segments, separated by dots. Each segment should begin with a letter, and all characters in a segment should be alphanumeric or underscore.",
              [s._param("template section", e)],
            );
          case u.INVALID_SIGNATURE_HASH_LENGTH:
            return s._(
              /*BTDS*/ '_j{"*":"Your {template section} must be {number} characters long.","_1":"Your {template section} must be 1 character long."}',
              [
                s._plural(
                  r("WhatsAppHSMAuthContentRestrictionsConstants")
                    .SIGNATURE_HASH_REQUIRED_LENGTH,
                  "number",
                ),
                s._param("template section", e),
              ],
            );
          case u.DUPLICATE_SUPPORTED_APP:
            return s._(
              /*BTDS*/ "Your apps must contain unique package name and signature hash pairs.",
            );
          case u.ELIGIBILITY_CHECK_TERMS_NOT_ACCEPTED:
            return s._(
              /*BTDS*/ "You must accept the terms for the eligibility check API before enabling the feature.",
            );
          case u.EMOJI_LIMIT:
            return s._(
              /*BTDS*/ "Marketing template should not have more than 10 emojis.",
            );
          case u.UTILITY_EMOJI_LIMIT:
            return s._(
              /*BTDS*/ "Utility template should not have more than 6 emojis.",
            );
          case u.LEADING_TRAILING_PARAMETER:
            return s._(
              /*BTDS*/ "Variables can\u2019t be at the start or end of the template.",
            );
        }
      },
      g = function (t) {
        var e = r("XFBWhatsAppHSMComponentType.facebook").cast(t);
        if (e == null)
          throw r("err")("Section is not valid component type: " + t);
        switch (e) {
          case "BODY":
            return s._(/*BTDS*/ "body");
          case "GREETING":
            return s._(/*BTDS*/ "greeting");
          case "HEADER":
            return s._(/*BTDS*/ "header");
          case "FOOTER":
            return s._(/*BTDS*/ "footer");
          case "BUTTONS":
            return s._(/*BTDS*/ "buttons");
          case "LIMITED_TIME_OFFER":
            return s._(/*BTDS*/ "offer");
          case "CAROUSEL":
            return s._(/*BTDS*/ "carousel");
          default:
            return s._(/*BTDS*/ "body");
        }
      },
      h = function (t) {
        switch (t) {
          case c.BUTTON_LABEL:
          case c.AUTOFILL_BUTTON_LABEL:
            return s._(/*BTDS*/ "button text");
          case c.PHONE_NUMBER:
            return s._(/*BTDS*/ "phone number");
          case c.URL:
            return s._(/*BTDS*/ "website URL");
          case c.ZERO_TAP_FLAG:
            return s._(/*BTDS*/ "agreement flag");
          case c.COPY_CODE:
            return s._(/*BTDS*/ "offer code");
          case c.PRECONFIGURED_RESPONSE:
            return s._(/*BTDS*/ "Pre-configured response");
          case c.AUTOFILL_PACKAGE_NAME:
            return s._(/*BTDS*/ "package name");
          case c.AUTOFILL_SIGNATURE_HASH:
            return s._(/*BTDS*/ "signature hash");
          case c.QUICK_REPLY_PAYLOAD:
            return s._(/*BTDS*/ "quick reply payload");
        }
      };
    ((l.HSMFormatViolation = u),
      (l.HSMButtonInputType = c),
      (l.TemplateCreationSurface = d),
      (l.TemplateParameterStyle = m),
      (l.HSMFormatViolationType = p),
      (l.getHSMFormatViolationCode = _),
      (l.getHSMFormatViolationFbt = f));
  },
  226,
);
