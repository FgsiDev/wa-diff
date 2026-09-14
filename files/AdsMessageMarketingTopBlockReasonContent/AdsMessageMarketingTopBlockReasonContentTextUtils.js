__d(
  "AdsMessageMarketingTopBlockReasonContentTextUtils",
  [
    "fbt",
    "GeoLink.react",
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
    function m(e) {
      switch ((e === void 0 && (e = "none"), e)) {
        case "no_longer_needed":
          return s._(
            /*BTDS*/ "Your marketing message delivery may be paused if this campaign is published. This is because you duplicated an existing marketing message that led to some people indicating they no longer needed the product or service. {=m1}",
            [
              s._implicitParam(
                "=m1",
                c.jsx(r("GeoLink.react"), {
                  href: d(),
                  target: "_blank",
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          );
        case "no_sign_up":
          return s._(
            /*BTDS*/ "Your marketing message delivery may be paused if this campaign is published. This is because you duplicated an existing marketing message that led to some people indicating they did not subscribe to messages from your business. {=m1}",
            [
              s._implicitParam(
                "=m1",
                c.jsx(r("GeoLink.react"), {
                  href: d(),
                  target: "_blank",
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          );
        case "age_inappropriate":
        case "offensive_messages":
          return s._(
            /*BTDS*/ "Your marketing message delivery may be paused if this campaign is published. This is because you duplicated an existing marketing message that some people indicated as offensive. {=m1}",
            [
              s._implicitParam(
                "=m1",
                c.jsx(r("GeoLink.react"), {
                  href: d(),
                  target: "_blank",
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          );
        case "otp_did_not_request":
        case "none":
        case "other":
        case "spam":
          return s._(
            /*BTDS*/ "Your marketing message delivery may be paused if this campaign is published. This is because you duplicated an existing marketing message that received negative feedback or low read-rates from some people. {=m1}",
            [
              s._implicitParam(
                "=m1",
                c.jsx(r("GeoLink.react"), {
                  href: d(),
                  target: "_blank",
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          );
      }
    }
    function p(e, t) {
      switch ((e === void 0 && (e = "none"), t === void 0 && (t = !1), e)) {
        case "no_longer_needed":
          return t
            ? s._(
                /*BTDS*/ "Some people who received your marketing message indicated they no longer needed the product or service. Your message will start delivering again within 6 hours.",
              )
            : s._(
                /*BTDS*/ "Some people who received your marketing message indicated they no longer needed the product or service. Your message will start delivering again within 6 hours. If this continues, your message may permanently stop delivering. {=m1}",
                [
                  s._implicitParam(
                    "=m1",
                    c.jsx(r("GeoLink.react"), {
                      href: d(),
                      target: "_blank",
                      children: s._(/*BTDS*/ "Learn more"),
                    }),
                  ),
                ],
              );
        case "no_sign_up":
          return t
            ? s._(
                /*BTDS*/ "Some people who received your marketing message indicated they did not subscribe to receiving messages. Your message will start delivering again within 6 hours.",
              )
            : s._(
                /*BTDS*/ "Some people who received your marketing message indicated they did not subscribe to receiving messages. Your message will start delivering again within 6 hours. If this continues, your message may permanently stop delivering. {=m1}",
                [
                  s._implicitParam(
                    "=m1",
                    c.jsx(r("GeoLink.react"), {
                      href: d(),
                      target: "_blank",
                      children: s._(/*BTDS*/ "Learn more"),
                    }),
                  ),
                ],
              );
        case "age_inappropriate":
        case "offensive_messages":
          return t
            ? s._(
                /*BTDS*/ "Some people who received your marketing message indicated that the content was offensive. Your message will start delivering again within 6 hours.",
              )
            : s._(
                /*BTDS*/ "Some people who received your marketing message indicated that the content was offensive. Your message will start delivering again within 6 hours. If this continues, your message may permanently stop delivering. {=m1}",
                [
                  s._implicitParam(
                    "=m1",
                    c.jsx(r("GeoLink.react"), {
                      href: d(),
                      target: "_blank",
                      children: s._(/*BTDS*/ "Learn more"),
                    }),
                  ),
                ],
              );
        case "otp_did_not_request":
        case "none":
        case "other":
        case "spam":
          return t
            ? s._(
                /*BTDS*/ "Your marketing message received negative feedback or low read-rates from some people. Your message will start delivering again within 6 hours.",
              )
            : s._(
                /*BTDS*/ "Your marketing message received negative feedback or low read-rates from some people. Your message will start delivering again within 6 hours. If this continues, your message may permanently stop delivering. {=m1}",
                [
                  s._implicitParam(
                    "=m1",
                    c.jsx(r("GeoLink.react"), {
                      href: d(),
                      target: "_blank",
                      children: s._(/*BTDS*/ "Learn more"),
                    }),
                  ),
                ],
              );
      }
    }
    function _(e, t) {
      if ((e === void 0 && (e = "none"), t === !0)) return m(e);
      switch (e) {
        case "no_longer_needed":
          return s._(
            /*BTDS*/ "People who received your marketing message have indicated they no longer needed the product or service. This means your message can't be edited anymore.",
          );
        case "no_sign_up":
          return s._(
            /*BTDS*/ "People who received your marketing message have indicated they did not subscribe to receiving them. This means your message can't be edited anymore.",
          );
        case "age_inappropriate":
        case "offensive_messages":
          return s._(
            /*BTDS*/ "People who received your marketing message have indicated that the content was offensive. This means your message can't be edited anymore.",
          );
        case "otp_did_not_request":
        case "none":
        case "other":
        case "spam":
          return s._(
            /*BTDS*/ "Your marketing message continuously received recurring negative feedback or low read-rates. This means your message can't be edited anymore.",
          );
      }
    }
    function f(e) {
      switch ((e === void 0 && (e = "none"), e)) {
        case "no_longer_needed":
          return s._(
            /*BTDS*/ "Some people who received your marketing message indicated they no longer needed the product or service. If this continues, your marketing message delivery may be paused. {=m1}",
            [
              s._implicitParam(
                "=m1",
                c.jsx(r("GeoLink.react"), {
                  href: d(),
                  target: "_blank",
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          );
        case "no_sign_up":
          return s._(
            /*BTDS*/ "Some people who received your marketing message have indicated they did not subscribe to messages from your business. If this continues, your marketing message delivery may be paused. {=m1}",
            [
              s._implicitParam(
                "=m1",
                c.jsx(r("GeoLink.react"), {
                  href: d(),
                  target: "_blank",
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          );
        case "age_inappropriate":
        case "offensive_messages":
          return s._(
            /*BTDS*/ "Some people who received your marketing message indicated the content was offensive. If this continues, your marketing message delivery may be paused. {=m1}",
            [
              s._implicitParam(
                "=m1",
                c.jsx(r("GeoLink.react"), {
                  href: d(),
                  target: "_blank",
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          );
        case "otp_did_not_request":
        case "none":
        case "other":
        case "spam":
          return s._(
            /*BTDS*/ "Your marketing message is receiving negative feedback or low-read rates from some people. If this continues, your marketing message delivery may be paused. {=m1}",
            [
              s._implicitParam(
                "=m1",
                c.jsx(r("GeoLink.react"), {
                  href: d(),
                  target: "_blank",
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          );
      }
    }
    function g(e) {
      switch ((e === void 0 && (e = "none"), e)) {
        case "no_longer_needed":
          return s._(
            /*BTDS*/ "Some people who received your marketing message indicated they no longer needed the product or service. If this continues, your marketing message delivery may be paused.",
          );
        case "no_sign_up":
          return s._(
            /*BTDS*/ "Some people who received your marketing message have indicated they did not subscribe to messages from your business. If this continues, your marketing message delivery may be paused.",
          );
        case "age_inappropriate":
        case "offensive_messages":
          return s._(
            /*BTDS*/ "Some people who received your marketing message indicated the content was offensive. If this continues, your marketing message delivery may be paused.",
          );
        case "otp_did_not_request":
        case "none":
        case "other":
        case "spam":
          return s._(
            /*BTDS*/ "Your marketing message is receiving negative feedback or low-read rates from some people. If this continues, your marketing message delivery may be paused.",
          );
      }
    }
    function h(e) {
      switch ((e === void 0 && (e = "none"), e)) {
        case "no_longer_needed":
          return s._(
            /*BTDS*/ "Some people who received your marketing message indicated they no longer needed the product or service. If this continues, your marketing message delivery may be paused.",
          );
        case "no_sign_up":
          return s._(
            /*BTDS*/ "Some people who received your marketing message have indicated they did not subscribe to messages from your business. If this continues, your marketing message delivery may be paused.",
          );
        case "age_inappropriate":
        case "offensive_messages":
          return s._(
            /*BTDS*/ "Some people who received your marketing message indicated the content was offensive. If this continues, your marketing message delivery may be paused.",
          );
        case "otp_did_not_request":
        case "none":
        case "other":
        case "spam":
          return s._(
            /*BTDS*/ "Your marketing message is receiving negative feedback or low-read rates from some people. If this continues, your marketing message delivery may be paused.",
          );
      }
    }
    function y(e, t) {
      return s._(
        /*BTDS*/ "{waba name} and its phone numbers have been identified as {restriction reason for WABA warning}. If it continues, we may restrict your account from messaging.",
        [
          s._param("waba name", e),
          s._param("restriction reason for WABA warning", t),
        ],
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.getTopBlockReasonPausedContentDraft = m),
      (l.getTopBlockReasonPausedContentPublished = p),
      (l.getTopBlockReasonDisabledContent = _),
      (l.getTopBlockReasonContentForTemplateQualityScore = f),
      (l.getInTableTopBlockReasonContentForTemplateQualityScore = g),
      (l.getTopBlockReasonInlineMessageForTemplateQualityScore = h),
      (l.getWABAPolicyWarningInlineMessage = y));
  },
  226,
);
