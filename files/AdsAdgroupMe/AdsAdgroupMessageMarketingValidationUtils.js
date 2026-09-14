__d(
  "AdsAdgroupMessageMarketingValidationUtils",
  [
    "errorCode",
    "AdsAPIAdgroupPaths",
    "AdsChildAttachmentsUtils",
    "AdsError",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupHeadlineMutators",
    "AdsUEditorAdgroupMessageMarketingCTAStrings",
    "AdsUEditorAdgroupMessageMarketingErrorStrings",
    "AdsUEditorAdgroupMessageMarketingPACUtils",
    "ApiDynamicCreativeOptimizationTypes",
    "CommonCampaignLimitsConfig.experimental",
    "areAnySelectedCampaignsMarketingMessagesOnlySelectorImplLogic",
    "immutable",
    "isBodyTextAssemblyEnabled",
    "isStringNotNullAndNotWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t,
        n,
        a,
        i = e.adgroup,
        l =
          (t =
            (n = i.creative) == null || (n = n.asset_feed_spec) == null
              ? void 0
              : n.asset_customization_rules) != null
            ? t
            : [],
        s = l.map(function (e) {
          return r("immutable").fromJS(e);
        });
      return (a = o(
        "AdsUEditorAdgroupMessageMarketingPACUtils",
      ).getTargetingRuleForMarketingMessage(l)) != null
        ? a
        : o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).getDefaultRuleOrRuleWithMostPlacements(r("immutable").List(s));
    }
    function u(t, n, a) {
      var i,
        l = t.adgroup,
        s = t.campaign;
      (n === void 0 && (n = !1), a === void 0 && (a = !0));
      var u = [],
        _ = b(s),
        f = e({ adgroup: l }),
        g = m(l, f),
        h = p(l, f),
        y = c(
          h,
          r("AdsAPIAdgroupPaths").CREATIVE.MARKETING_MESSAGE_STRUCTURED_SPEC
            .path,
          o("AdsUEditorAdgroupMessageMarketingErrorStrings")
            .HEADLINE_TEXT_EXCEEDS_LIMIT_WARNING_MESSAGE,
          r("CommonCampaignLimitsConfig.experimental")
            .header_character_max_limit,
          _,
        );
      y != null && u.push(y);
      var C =
          (i = l.creative) == null ||
          (i = i.marketing_message_structured_spec) == null
            ? void 0
            : i.footer,
        v = c(
          C,
          r("AdsAPIAdgroupPaths").CREATIVE.MARKETING_MESSAGE_STRUCTURED_SPEC
            .FOOTER,
          o("AdsUEditorAdgroupMessageMarketingErrorStrings")
            .FOOTER_TEXT_EXCEEDS_LIMIT_WARNING_MESSAGE,
          r("CommonCampaignLimitsConfig.experimental")
            .footer_character_max_limit,
          _,
        );
      v != null && u.push(v);
      var S = [y, v];
      return S.filter(Boolean).length > 1 && a
        ? [
            new (r("AdsError"))(
              4017027,
              o("AdsUEditorAdgroupMessageMarketingErrorStrings")
                .SOME_TEXT_EXCEEDS_LIMIT_WARNING_MESSAGE,
              {
                level: _,
                path: r("AdsAPIAdgroupPaths").CREATIVE
                  .MARKETING_MESSAGE_STRUCTURED_SPEC.path,
                cta: o("AdsUEditorAdgroupMessageMarketingCTAStrings")
                  .MARKETING_MESSAGE_SETUP_SECTION_EDIT_MARKETING_MESSAGE_BUTTON_LABEL,
              },
            ),
          ]
        : (n &&
            !r("isStringNotNullAndNotWhitespaceOnly")(g) &&
            !r("isBodyTextAssemblyEnabled")() &&
            u.push(
              d(
                r("AdsAPIAdgroupPaths").CREATIVE
                  .MARKETING_MESSAGE_STRUCTURED_SPEC.path,
                o("AdsUEditorAdgroupMessageMarketingErrorStrings")
                  .BODY_TEXT_REQUIRED_MESSAGE,
                _,
              ),
            ),
          u);
    }
    function c(e, t, n, a, i) {
      if (e == null) return null;
      if (e.length > a)
        return new (r("AdsError"))(4017027, n, {
          level: i,
          path: t,
          cta: o("AdsUEditorAdgroupMessageMarketingCTAStrings")
            .MARKETING_MESSAGE_SETUP_SECTION_EDIT_MARKETING_MESSAGE_BUTTON_LABEL,
        });
    }
    function d(e, t, n) {
      return new (r("AdsError"))(4017027, t, {
        level: n,
        path: e,
        cta: o("AdsUEditorAdgroupMessageMarketingCTAStrings")
          .MARKETING_MESSAGE_SETUP_SECTION_EDIT_MARKETING_MESSAGE_BUTTON_LABEL,
      });
    }
    function m(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c,
        d =
          e == null ||
          (n = e.creative) == null ||
          (n = n.marketing_message_structured_spec) == null ||
          (n = n.asset_customization) == null
            ? void 0
            : n.body;
      if (d != null) return d;
      var m =
        (a =
          e == null ||
          (i = e.creative) == null ||
          (i = i.object_story_spec) == null ||
          (i = i.link_data) == null
            ? void 0
            : i.message) != null
          ? a
          : e == null ||
              (l = e.creative) == null ||
              (l = l.object_story_spec) == null ||
              (l = l.video_data) == null
            ? void 0
            : l.message;
      if (m != null) return m;
      if (
        (e == null ||
        (s = e.creative) == null ||
        (s = s.asset_feed_spec) == null
          ? void 0
          : s.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM
      ) {
        var p;
        return e == null ||
          (p = e.creative) == null ||
          (p = p.asset_feed_spec) == null ||
          (p = p.bodies) == null ||
          (p = p.at(0)) == null
          ? void 0
          : p.text;
      }
      if (
        (e == null ||
        (u = e.creative) == null ||
        (u = u.asset_feed_spec) == null
          ? void 0
          : u.optimization_type) ===
          r("ApiDynamicCreativeOptimizationTypes").PLACEMENT &&
        t != null
      ) {
        var _,
          f = o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).getLabelNameFromTargetingRuleNullable(t, "body_label"),
          g = o("AdsUEditorAdgroupBodyMutators").getBodyAssetsFromLabel(e, f);
        return String(
          g == null || (_ = g.get(0)) == null ? void 0 : _.get("text"),
        );
      }
      if ((e == null || (c = e.creative) == null ? void 0 : c.body) != null)
        return e.creative.body;
    }
    function p(e, t) {
      var n;
      if (t == null) {
        var r;
        return e == null ||
          (r = e.creative) == null ||
          (r = r.object_story_spec) == null ||
          (r = r.link_data) == null
          ? void 0
          : r.name;
      }
      var a = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getLabelNameFromTargetingRuleNullable(t, "title_label"),
        i = o("AdsUEditorAdgroupHeadlineMutators").getHeadlineAssetsFromLabel(
          e,
          a,
        );
      return String(
        i == null || (n = i.get(0)) == null ? void 0 : n.get("text"),
      );
    }
    function _(e, t, n) {
      var a,
        i,
        l,
        s,
        u,
        c,
        p,
        _,
        y = e.adgroup,
        C = e.campaign;
      (t === void 0 && (t = !1), n === void 0 && (n = !0));
      var v = [],
        S = b(C),
        R =
          (a =
            (i = y.creative) == null || (i = i.asset_feed_spec) == null
              ? void 0
              : i.asset_customization_rules) != null
            ? a
            : [],
        L = R.map(function (e) {
          return r("immutable").fromJS(e);
        }),
        E = o(
          "AdsUEditorAdgroupMessageMarketingPACUtils",
        ).getTargetingRuleForMarketingMessage(
          (l =
            (s = y.creative) == null || (s = s.asset_feed_spec) == null
              ? void 0
              : s.asset_customization_rules) != null
            ? l
            : [],
        ),
        k = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getDefaultRuleOrRuleWithMostPlacements(r("immutable").List(L)),
        I =
          ((u = y.creative) == null ||
          (u = u.marketing_message_structured_spec) == null ||
          (u = u.asset_customization) == null
            ? void 0
            : u.body) != null
            ? (c = y.creative) == null ||
              (c = c.marketing_message_structured_spec) == null ||
              (c = c.asset_customization) == null
              ? void 0
              : c.body
            : E
              ? (p = y.creative) == null ||
                (p = p.marketing_message_structured_spec) == null
                ? void 0
                : p.greeting
              : k
                ? m(y, k)
                : (_ = y.creative) == null ||
                    (_ = _.object_story_spec) == null ||
                    (_ = _.link_data) == null
                  ? void 0
                  : _.message,
        T = g(
          I,
          r("AdsAPIAdgroupPaths").CREATIVE.MARKETING_MESSAGE_STRUCTURED_SPEC
            .GREETING,
          S,
        );
      T != null && v.push(T);
      var D = h(y, E != null ? E : k),
        x = f(
          D,
          r("AdsAPIAdgroupPaths").CREATIVE.MARKETING_MESSAGE_STRUCTURED_SPEC
            .path,
          S,
        );
      return (
        (x == null ? void 0 : x.error) != null &&
          v.push(x == null ? void 0 : x.error),
        T != null && x != null && x.error != null && n
          ? x.numberOfCardsWithErrors === (D == null ? void 0 : D.length)
            ? [
                new (r("AdsError"))(
                  4017027,
                  o("AdsUEditorAdgroupMessageMarketingErrorStrings")
                    .ALL_TEXT_EXCEEDS_LIMIT_WARNING_MESSAGE,
                  {
                    level: S,
                    path: r("AdsAPIAdgroupPaths").CREATIVE
                      .MARKETING_MESSAGE_STRUCTURED_SPEC.path,
                    cta: o("AdsUEditorAdgroupMessageMarketingCTAStrings")
                      .MARKETING_MESSAGE_SETUP_SECTION_EDIT_MARKETING_MESSAGE_BUTTON_LABEL,
                  },
                ),
              ]
            : [
                new (r("AdsError"))(
                  4017027,
                  o("AdsUEditorAdgroupMessageMarketingErrorStrings")
                    .SOME_TEXT_EXCEEDS_LIMIT_WARNING_MESSAGE,
                  {
                    level: S,
                    path: r("AdsAPIAdgroupPaths").CREATIVE
                      .MARKETING_MESSAGE_STRUCTURED_SPEC.path,
                    cta: o("AdsUEditorAdgroupMessageMarketingCTAStrings")
                      .MARKETING_MESSAGE_SETUP_SECTION_EDIT_MARKETING_MESSAGE_BUTTON_LABEL,
                  },
                ),
              ]
          : (t &&
              !r("isStringNotNullAndNotWhitespaceOnly")(I) &&
              !r("isBodyTextAssemblyEnabled")() &&
              v.push(
                d(
                  r("AdsAPIAdgroupPaths").CREATIVE
                    .MARKETING_MESSAGE_STRUCTURED_SPEC.path,
                  o("AdsUEditorAdgroupMessageMarketingErrorStrings")
                    .GREETING_TEXT_REQUIRED_MESSAGE,
                  S,
                ),
              ),
            v)
      );
    }
    function f(e, t, n) {
      if (e == null) return null;
      var a = e.filter(function (e) {
        return (
          e != null &&
          e.length >
            r("CommonCampaignLimitsConfig.experimental")
              .carousel_card_body_character_max_limit
        );
      }).length;
      if (a > 0) {
        var i = new (r("AdsError"))(
          4017027,
          o(
            "AdsUEditorAdgroupMessageMarketingErrorStrings",
          ).getCarouselCardsBodyTextError(a),
          {
            level: n,
            path: t,
            cta: o("AdsUEditorAdgroupMessageMarketingCTAStrings")
              .MARKETING_MESSAGE_SETUP_SECTION_EDIT_MARKETING_MESSAGE_BUTTON_LABEL,
          },
        );
        return { numberOfCardsWithErrors: a, error: i };
      }
      return { numberOfCardsWithErrors: a, error: null };
    }
    function g(e, t, n) {
      if (e == null) return null;
      if (
        e.length >
        r("CommonCampaignLimitsConfig.experimental")
          .carousel_greeting_character_max_limit
      )
        return new (r("AdsError"))(
          4017027,
          o("AdsUEditorAdgroupMessageMarketingErrorStrings")
            .GREETING_TEXT_EXCEEDS_LIMIT_WARNING_MESSAGE,
          {
            level: n,
            path: t,
            cta: o("AdsUEditorAdgroupMessageMarketingCTAStrings")
              .MARKETING_MESSAGE_SETUP_SECTION_EDIT_MARKETING_MESSAGE_BUTTON_LABEL,
          },
        );
    }
    function h(e, t) {
      var n, r, a;
      if (t == null) {
        var i,
          l =
            (i = e.creative) == null ||
            (i = i.object_story_spec) == null ||
            (i = i.link_data) == null
              ? void 0
              : i.child_attachments;
        return l == null
          ? void 0
          : l.map(function (e) {
              var t,
                n,
                r = (t = e.name) != null ? t : "",
                o = (n = e.description) != null ? n : "";
              return (r + "\n" + o).trim();
            });
      }
      var s = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getLabelNameFromTargetingRuleNullable(t, "carousel_label"),
        u =
          (n = e.creative) == null ||
          (n = n.asset_feed_spec) == null ||
          (n = n.carousels) == null
            ? void 0
            : n.find(function (e) {
                var t;
                return (t = e.adlabels) == null
                  ? void 0
                  : t.some(function (e) {
                      return e.name === s;
                    });
              }),
        c =
          u == null || (r = u.child_attachments) == null
            ? void 0
            : r.map(function (e) {
                return e.description_label;
              }),
        d =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.descriptions;
      return c == null
        ? void 0
        : c.flatMap(function (e) {
            var t =
              d == null
                ? void 0
                : d.filter(function (t) {
                    var n;
                    return (n = t.adlabels) == null
                      ? void 0
                      : n.some(function (t) {
                          return t.name === (e == null ? void 0 : e.name);
                        });
                  });
            return t == null
              ? void 0
              : t.map(function (e) {
                  return e.text;
                });
          });
    }
    function y(e, t) {
      var n = e.adgroup,
        a = e.campaign;
      t === void 0 && (t = !1);
      var i = [],
        l = C({ adgroup: n }),
        s = o("AdsChildAttachmentsUtils").isCarouselAd(n),
        u = b(a),
        m = r("isStringNotNullAndNotWhitespaceOnly")(l)
          ? s
            ? c(
                l,
                r("AdsAPIAdgroupPaths").CREATIVE
                  .MARKETING_MESSAGE_STRUCTURED_SPEC.path,
                o("AdsUEditorAdgroupMessageMarketingErrorStrings")
                  .GREETING_TEXT_EXCEEDS_LIMIT_WARNING_MESSAGE,
                r("CommonCampaignLimitsConfig.experimental")
                  .carousel_greeting_character_max_limit,
                u,
              )
            : null
          : t && !r("isBodyTextAssemblyEnabled")()
            ? d(
                r("AdsAPIAdgroupPaths").CREATIVE
                  .MARKETING_MESSAGE_STRUCTURED_SPEC.path,
                s
                  ? o("AdsUEditorAdgroupMessageMarketingErrorStrings")
                      .GREETING_TEXT_REQUIRED_MESSAGE
                  : o("AdsUEditorAdgroupMessageMarketingErrorStrings")
                      .BODY_TEXT_REQUIRED_MESSAGE,
                u,
              )
            : null;
      return (m != null && i.push(m), i);
    }
    function C(e) {
      var t,
        n,
        o,
        a,
        i,
        l,
        s = e.adgroup,
        u =
          r("isStringNotNullAndNotWhitespaceOnly")(
            (t = s.creative) == null ||
              (t = t.marketing_message_structured_spec) == null ||
              (t = t.dynamic_product_message_spec) == null
              ? void 0
              : t.headline,
          ) &&
          r("isStringNotNullAndNotWhitespaceOnly")(
            (n = s.creative) == null ||
              (n = n.marketing_message_structured_spec) == null ||
              (n = n.dynamic_product_message_spec) == null
              ? void 0
              : n.description,
          ),
        c = r("isStringNotNullAndNotWhitespaceOnly")(
          (o = s.creative) == null ||
            (o = o.marketing_message_structured_spec) == null ||
            (o = o.asset_customization) == null
            ? void 0
            : o.body,
        );
      return c
        ? (a = s.creative) == null ||
          (a = a.marketing_message_structured_spec) == null ||
          (a = a.asset_customization) == null
          ? void 0
          : a.body
        : u
          ? (i = s.creative) == null ||
            (i = i.marketing_message_structured_spec) == null ||
            (i = i.dynamic_product_message_spec) == null
            ? void 0
            : i.text
          : (l = s.creative) == null ||
              (l = l.object_story_spec) == null ||
              (l = l.template_data) == null
            ? void 0
            : l.message;
    }
    function b(e) {
      var t,
        n = (t = e == null ? void 0 : e.placement) != null ? t : {},
        a = o(
          "areAnySelectedCampaignsMarketingMessagesOnlySelectorImplLogic",
        ).areAnySelectedCampaignsMarketingMessagesOnlySelectorImplLogic([n]);
      return a ? r("AdsError").Level.WARN : r("AdsError").Level.RECOMMEND;
    }
    function v(e, t) {
      return e == null
        ? null
        : new (r("AdsError"))(4017027, e, {
            level: "warn",
            path: t,
            cta: o("AdsUEditorAdgroupMessageMarketingCTAStrings")
              .MARKETING_MESSAGE_SETUP_SECTION_EDIT_MARKETING_MESSAGE_BUTTON_LABEL,
          });
    }
    function S(e, t, n) {
      var r = [];
      return (
        t
          ? (r = y({ adgroup: e }, !0))
          : n
            ? (r = _({ adgroup: e }, !0, !1))
            : (r = u({ adgroup: e }, !0, !1)),
        r.map(function (e) {
          return e.message;
        })
      );
    }
    ((l.validateSingleMediaFormatMessage = u),
      (l.validateCarouselFormatMessage = _),
      (l.validateDynamicProductMessage = y),
      (l.getMarketingMessageButtonAdsErrorFromMessage = v),
      (l.getMarketingMessageTextErrors = S));
  },
  98,
);
