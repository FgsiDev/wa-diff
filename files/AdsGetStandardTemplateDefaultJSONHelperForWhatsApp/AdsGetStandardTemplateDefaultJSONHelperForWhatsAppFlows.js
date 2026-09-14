__d(
  "AdsGetStandardTemplateDefaultJSONHelperForWhatsAppFlows",
  [
    "fbt",
    "AdsGetDefaultGreetingText",
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONTemplateType",
    "AdsMessengerVisualEditorCustomerActionType",
    "AdsMessengerVisualEditorLandingScreenType",
    "CTXChatBuilderWAFlowsConstants",
    "ClickToMessageCTWAFeatureGating",
    "ClickToWhatsAppFeatureGating",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      var a, i, l, u, c, d, m, p, _, f, g, h, y, C, b;
      n === void 0 && (n = !1);
      var v = o(
          "ClickToMessageCTWAFeatureGating",
        ).shouldUpdateDefaultCTWAFlowsWelcomeMessageAndCTA(),
        S = o("AdsGetDefaultGreetingText").getFlowsDefaultGreetingMessage(v),
        R = [
          ((a = {}),
          (a.title = s._(/*BTDS*/ "I'd like to learn more").toString()),
          (a.content_type = "text"),
          (a.response_type = null),
          a),
        ],
        L = babelHelpers.extends(
          ((i = {}),
          (i.title = "Default Flow Title"),
          (i.cta = o("AdsGetDefaultGreetingText").getFlowsDefaultCTAText(v)),
          (i.flow_data = {
            flow_id: o(
              "ClickToMessageCTWAFeatureGating",
            ).shouldUseNullDefaultCTWAFlowId()
              ? null
              : "2299347806918374",
            last_update_time: 0,
            waba_id: t,
          }),
          i),
          o("ClickToWhatsAppFeatureGating").enableCTWAFlowsAutomatedResponse(n)
            ? ((l = {}),
              (l.automated_response_data = {
                text: o("CTXChatBuilderWAFlowsConstants")
                  .DEFAULT_CTWA_AUTOMATED_RESPONSE_TEXT,
                cta_info: null,
              }),
              l)
            : null,
        );
      return (
        (b = {}),
        (b.type = "VISUAL_EDITOR"),
        (b.version = 2),
        (b.landing_screen_type = r(
          "AdsMessengerVisualEditorLandingScreenType",
        ).CTWA_FLOWS),
        (b.media_type = r("AdsMessengerJSONMediaFormatType").TEXT),
        (b.text_format =
          ((c = {}),
          (c.customer_action_type = r(
            "AdsMessengerVisualEditorCustomerActionType",
          ).WHATSAPP_FLOW),
          (c.message =
            ((u = {}),
            (u.text = S),
            (u.automated_greeting_message_cta = { wa_flow: L, type: "flow" }),
            u)),
          c)),
        (b.image_format =
          ((f = {}),
          (f.customer_action_type = r(
            "AdsMessengerVisualEditorCustomerActionType",
          ).QUICK_REPLIES),
          (f.message =
            ((_ = {}),
            (_.attachment =
              ((p = {}),
              (p.type = "template"),
              (p.payload =
                ((m = {}),
                (m.template_type = r("AdsMessengerJSONTemplateType").GENERIC),
                (m.elements = [
                  ((d = {}),
                  (d.title = ""),
                  (d.buttons = []),
                  (d.image_hash = ""),
                  d),
                ]),
                m)),
              p)),
            (_.quick_replies = R),
            (_.text = S),
            _)),
          f)),
        (b.video_format =
          ((C = {}),
          (C.customer_action_type = r(
            "AdsMessengerVisualEditorCustomerActionType",
          ).QUICK_REPLIES),
          (C.message =
            ((y = {}),
            (y.attachment =
              ((h = {}),
              (h.type = r("AdsMessengerJSONMediaFormatType").VIDEO),
              (h.payload = ((g = {}), (g.attachment_id = ""), g)),
              h)),
            (y.quick_replies = R),
            (y.text = S),
            y)),
          C)),
        (b.user_edit = !1),
        (b.surface = "visual_editor_new"),
        b
      );
    }
    l.default = e;
  },
  226,
);
