__d(
  "AdsMessengerJSONPaths",
  [
    "AdsMessengerJSONFields",
    "AdsMessengerWelcomeMessageFields",
    "generatePaths",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        { pathKeys: [], expandsTo: r("AdsMessengerWelcomeMessageFields") },
        {
          pathKeys: ["MESSAGE"],
          expandsTo: {
            ATTACHMENT: "attachment",
            QUICK_REPLIES: "quick_replies",
            TEXT: "text",
          },
        },
        {
          pathKeys: ["TEXT_FORMAT"],
          expandsTo: {
            CUSTOMER_ACTION_TYPE: "customer_action_type",
            MESSAGE: "message",
            IN_THREAD_MULTIPHOTO_CAROUSEL: "in_thread_multiphoto_carousel",
            IN_THREAD_CAROUSEL: "in_thread_carousel",
          },
        },
        {
          pathKeys: ["IMAGE_FORMAT"],
          expandsTo: {
            CUSTOMER_ACTION_TYPE: "customer_action_type",
            MESSAGE: "message",
          },
        },
        {
          pathKeys: ["VIDEO_FORMAT"],
          expandsTo: {
            CUSTOMER_ACTION_TYPE: "customer_action_type",
            MESSAGE: "message",
          },
        },
        {
          pathKeys: ["MESSAGE", "ATTACHMENT"],
          expandsTo: { PAYLOAD: "payload", TYPE: "type" },
        },
        {
          pathKeys: ["TEXT_FORMAT", "MESSAGE"],
          expandsTo: {
            ATTACHMENT: "attachment",
            QUICK_REPLIES: "quick_replies",
            TEXT: "text",
            SECOND_TEXT: "second_text",
            ICE_BREAKERS: "ice_breakers",
            AUTOFILL_MESSAGE: "autofill_message",
            CALL_PROMPT_DATA: "call_prompt_data",
            AUTOMATED_GREETING_MESSAGE_CTA: "automated_greeting_message_cta",
          },
        },
        {
          pathKeys: ["IMAGE_FORMAT", "MESSAGE"],
          expandsTo: {
            ATTACHMENT: "attachment",
            QUICK_REPLIES: "quick_replies",
            TEXT: "text",
            ICE_BREAKERS: "ice_breakers",
            CALL_PROMPT_DATA: "call_prompt_data",
          },
        },
        {
          pathKeys: ["VIDEO_FORMAT", "MESSAGE"],
          expandsTo: {
            ATTACHMENT: "attachment",
            QUICK_REPLIES: "quick_replies",
            TEXT: "text",
            ICE_BREAKERS: "ice_breakers",
            CALL_PROMPT_DATA: "call_prompt_data",
          },
        },
        {
          pathKeys: ["MESSAGE", "ATTACHMENT", "PAYLOAD"],
          expandsTo: (e = r("AdsMessengerJSONFields")),
        },
        {
          pathKeys: ["TEXT_FORMAT", "MESSAGE", "ATTACHMENT"],
          expandsTo: { PAYLOAD: "payload", TYPE: "type" },
        },
        {
          pathKeys: ["IMAGE_FORMAT", "MESSAGE", "ATTACHMENT"],
          expandsTo: { PAYLOAD: "payload", TYPE: "type" },
        },
        {
          pathKeys: ["VIDEO_FORMAT", "MESSAGE", "ATTACHMENT"],
          expandsTo: { PAYLOAD: "payload", TYPE: "type" },
        },
        {
          pathKeys: ["TEXT_FORMAT", "MESSAGE", "ATTACHMENT", "PAYLOAD"],
          expandsTo: e,
        },
        {
          pathKeys: ["IMAGE_FORMAT", "MESSAGE", "ATTACHMENT", "PAYLOAD"],
          expandsTo: e,
        },
        {
          pathKeys: ["VIDEO_FORMAT", "MESSAGE", "ATTACHMENT", "PAYLOAD"],
          expandsTo: e,
        },
        {
          pathKeys: ["TEXT_FORMAT", "IN_THREAD_MULTIPHOTO_CAROUSEL"],
          expandsTo: { BUTTON: "button", IS_ENABLED: "is_enabled" },
        },
        {
          pathKeys: ["TEXT_FORMAT", "IN_THREAD_CAROUSEL"],
          expandsTo: {
            IS_ENABLED: "is_enabled",
            PRODUCTS: "products",
            USE_DYNAMIC: "use_dynamic",
          },
        },
        {
          pathKeys: ["TEXT_FORMAT", "IN_THREAD_MULTIPHOTO_CAROUSEL", "BUTTON"],
          expandsTo: { RESPONSE: "response", TITLE: "title", TYPE: "type" },
        },
        {
          pathKeys: ["PRODUCT_INFO"],
          expandsTo: {
            NAME: "name",
            PRICE: "price",
            DESCRIPTION: "description",
            IMAGE_HASH: "image_hash",
          },
        },
        {
          pathKeys: ["TEXT_FORMAT", "MESSAGE", "CALL_PROMPT_DATA"],
          expandsTo: {
            IS_WELCOME_MESSAGE_CALL_PROMPT: "is_welcome_message_call_prompt",
            ICEBREAKER_INDEX_FOR_CALL_PROMPT:
              "icebreaker_index_for_call_prompt",
            CALL_PROMPT_MESSAGE: "call_prompt_message",
          },
        },
        {
          pathKeys: ["IMAGE_FORMAT", "MESSAGE", "CALL_PROMPT_DATA"],
          expandsTo: {
            IS_WELCOME_MESSAGE_CALL_PROMPT: "is_welcome_message_call_prompt",
            ICEBREAKER_INDEX_FOR_CALL_PROMPT:
              "icebreaker_index_for_call_prompt",
            CALL_PROMPT_MESSAGE: "call_prompt_message",
          },
        },
        {
          pathKeys: ["VIDEO_FORMAT", "MESSAGE", "CALL_PROMPT_DATA"],
          expandsTo: {
            IS_WELCOME_MESSAGE_CALL_PROMPT: "is_welcome_message_call_prompt",
            ICEBREAKER_INDEX_FOR_CALL_PROMPT:
              "icebreaker_index_for_call_prompt",
            CALL_PROMPT_MESSAGE: "call_prompt_message",
          },
        },
      ],
      u = r("generatePaths")(s),
      c = u;
    l.default = c;
  },
  98,
);
