__d(
  "AdsUEditorAdgroupLeadNurtureChannelsMutator",
  [
    "AdsAPIAdAssetFeedLeadNurtureChannelsFields",
    "AdsAdgroupRecordAccessors",
    "AdsClientAdAssetFeedSpecFields",
    "AdsLeadGenB2PMesssagingUtil",
    "adsConvertAdObjectRecordToPlainJS",
    "immutable",
    "isEmptyObject",
    "isTruthy",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o,
        a = r("adsConvertAdObjectRecordToPlainJS")(e);
      return ((t = a.creative) == null ? void 0 : t.asset_feed_spec) == null ||
        r("isEmptyObject")(
          (n = a.creative) == null ? void 0 : n.asset_feed_spec,
        )
        ? !1
        : ((o = a.creative) == null || (o = o.asset_feed_spec) == null
              ? void 0
              : o.lead_nurture_channels) != null
          ? r("AdsClientAdAssetFeedSpecFields").every(function (e) {
              var t,
                n =
                  (t = a.creative) == null || (t = t.asset_feed_spec) == null
                    ? void 0
                    : t[e];
              return e === "lead_nurture_channels"
                ? !0
                : n instanceof Array
                  ? n.length === 0
                  : n instanceof Object && r("isEmptyObject")(n)
                    ? !0
                    : n == null;
            })
          : !1;
    }
    function s(e) {
      return y(e, "in_app_call");
    }
    function u(e, t) {
      if (!r("isTruthy")(t)) return e;
      var n = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec,
        o = n.lead_nurture_channels.get(e);
      if (o == null) return e;
      var a = o.findIndex(function (e) {
        return (
          e.get(r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").CHANNEL) ===
          "b2p_messaging"
        );
      });
      if (a === -1) return e;
      var i = o.get(a);
      if (i == null) return e;
      var l = i.set(
          r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
            .PARTNER_APP_WELCOME_MESSAGE_FLOW_ID,
          t,
        ),
        s = o.set(a, l);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.lead_nurture_channels.set(s, e);
    }
    function c(e) {
      var t = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec,
        n = t.lead_nurture_channels.get(e);
      if (n == null) return e;
      var o = n.findIndex(function (e) {
        return (
          e.get(r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").CHANNEL) ===
          "b2p_messaging"
        );
      });
      if (o === -1) return e;
      var a = n.get(o);
      if (
        a == null ||
        !a.has(
          r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
            .PARTNER_APP_WELCOME_MESSAGE_FLOW_ID,
        )
      )
        return e;
      var i = a.delete(
          r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
            .PARTNER_APP_WELCOME_MESSAGE_FLOW_ID,
        ),
        l = n.set(o, i);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.lead_nurture_channels.set(l, e);
    }
    function d(e) {
      return y(e, "b2p_messaging");
    }
    function m(e) {
      var t,
        n = o("AdsLeadGenB2PMesssagingUtil").isChatOnWhatsAppCheckOn(e);
      if (n) return e;
      var a = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec,
        i = a.lead_nurture_channels.get(e) || r("immutable").List(),
        l = i.push(
          r("immutable").Map(
            ((t = {}),
            (t[r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").CHANNEL] =
              "chat_on_whatsapp"),
            t),
          ),
        );
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.lead_nurture_channels.set(l, e);
    }
    function p(e) {
      return y(e, "chat_on_instagram");
    }
    function _(e) {
      return C(e, "b2p_messaging");
    }
    function f(e) {
      return C(e, "chat_on_whatsapp");
    }
    function g(e) {
      return C(e, "chat_on_instagram");
    }
    function h(t) {
      var n = r("adsConvertAdObjectRecordToPlainJS")(t);
      return e(n)
        ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(t)
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.lead_nurture_channels.delete(t);
    }
    function y(e, t) {
      var n,
        a =
          t === "in_app_call" &&
          o("AdsLeadGenB2PMesssagingUtil").isInAppCallToggledEnabled(e),
        i =
          t === "b2p_messaging" &&
          o("AdsLeadGenB2PMesssagingUtil").isB2PMessagingCheckOn(e),
        l =
          t === "chat_on_whatsapp" &&
          o("AdsLeadGenB2PMesssagingUtil").isChatOnWhatsAppCheckOn(e),
        s =
          t === "chat_on_instagram" &&
          o("AdsLeadGenB2PMesssagingUtil").isChatOnInstagramCheckOn(e);
      if (a || i || l || s) return e;
      var u = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec,
        c = u.lead_nurture_channels.get(e) || r("immutable").List(),
        d = c.push(
          r("immutable").Map(
            ((n = {}),
            (n[r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").CHANNEL] = t),
            n),
          ),
        );
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.lead_nurture_channels.set(d, e);
    }
    function C(e, t) {
      var n = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.lead_nurture_channels.get(e);
      if (n == null) return e;
      var a =
          t === "in_app_call" &&
          o("AdsLeadGenB2PMesssagingUtil").isInAppCallToggledEnabled(e),
        i =
          t === "b2p_messaging" &&
          o("AdsLeadGenB2PMesssagingUtil").isB2PMessagingCheckOn(e),
        l =
          t === "chat_on_whatsapp" &&
          o("AdsLeadGenB2PMesssagingUtil").isChatOnWhatsAppCheckOn(e),
        s =
          t === "chat_on_instagram" &&
          o("AdsLeadGenB2PMesssagingUtil").isChatOnInstagramCheckOn(e);
      if (a !== !0 && i !== !0 && l !== !0 && s !== !0) return e;
      var u = n.delete(
        n.findIndex(function (e) {
          return e.includes(t);
        }),
      );
      return u.size === 0
        ? h(e)
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.lead_nurture_channels.set(u, e);
    }
    function b(e, t) {
      if ((r("vulture")("o7EBzw4LV8CIwXwJyFlnaYvVTsg="), t == null)) return e;
      var n = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec,
        o = n.lead_nurture_channels.get(e) || r("immutable").List(),
        a = o.findIndex(function (e) {
          return (
            e.get(r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").CHANNEL) ===
            "chat_on_whatsapp"
          );
        });
      if (a === -1) return e;
      var i = o.get(a);
      if (i == null) return e;
      var l = i.set(
          r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").DESTINATION_ID,
          t,
        ),
        s = o.set(a, l);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.lead_nurture_channels.set(s, e);
    }
    function v(e, t, n, o) {
      var a,
        i = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec,
        l = i.lead_nurture_channels.get(e) || r("immutable").List(),
        s = l.findIndex(function (e) {
          return (
            e.get(r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").CHANNEL) ===
            "shared_messages"
          );
        });
      if (s !== -1)
        return t == null && o == null && n != null ? S(e, t, n, o) : e;
      var u =
        ((a = {}),
        (a[r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").CHANNEL] =
          "shared_messages"),
        a);
      (t != null &&
        (u[r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").GREETING_MESSAGE] =
          t),
        n != null &&
          (u[r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").CALL_TO_ACTION] =
            n),
        (u[r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").ICE_BREAKERS] = o));
      var c = l.push(r("immutable").Map(u));
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.lead_nurture_channels.set(c, e);
    }
    function S(e, t, n, o) {
      var a = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.lead_nurture_channels.get(e);
      if (a == null) return e;
      var i = a.findIndex(function (e) {
        return (
          e.get(r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").CHANNEL) ===
          "shared_messages"
        );
      });
      if (i === -1) return e;
      var l = a.get(i);
      if (l == null) return e;
      var s = [
        t != null
          ? [
              r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").GREETING_MESSAGE,
              t,
            ]
          : null,
        n != null
          ? [r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").CALL_TO_ACTION, n]
          : null,
        o != null
          ? [r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").ICE_BREAKERS, o]
          : null,
      ].reduce(function (e, t) {
        return t ? e.set(t[0], t[1]) : e;
      }, l);
      if (s === l) return e;
      var u = a.set(i, s);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.lead_nurture_channels.set(u, e);
    }
    function R(e, t) {
      var n,
        o = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec,
        a = o.lead_nurture_channels.get(e) || r("immutable").List(),
        i = t ? "enabled" : "disabled",
        l = a.findIndex(function (e) {
          return (
            e.get(r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").CHANNEL) ===
            "shared_messages"
          );
        });
      if (l !== -1) {
        var s = a.get(l);
        if (s == null) return e;
        var u = s.set(
            r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
              .LEAD_NURTURING_AGENT_STATE,
            i,
          ),
          c = a.set(l, u);
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.lead_nurture_channels.set(c, e);
      }
      var d = r("immutable").Map(
          ((n = {}),
          (n[r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").CHANNEL] =
            "shared_messages"),
          (n[
            r(
              "AdsAPIAdAssetFeedLeadNurtureChannelsFields",
            ).LEAD_NURTURING_AGENT_STATE
          ] = i),
          n),
        ),
        m = a.push(d);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.lead_nurture_channels.set(m, e);
    }
    function L(e, t) {
      return e == null && t == null
        ? !0
        : e == null || t == null
          ? !1
          : String(e) === String(t);
    }
    function E(e, t, n, o) {
      if (t == null && n == null) return e;
      var a = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec,
        i = a.lead_nurture_channels.get(e) || r("immutable").List(),
        l = i.findIndex(function (e) {
          return (
            e.get(r("AdsAPIAdAssetFeedLeadNurtureChannelsFields").CHANNEL) ===
            "chat_on_whatsapp"
          );
        });
      if (l === -1) return e;
      var s = i.get(l);
      if (s == null) return e;
      var u =
        t != null
          ? s
              .set(
                r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
                  .PAGE_WHATSAPP_NUMBER_ID,
                t,
              )
              .delete(
                r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
                  .WHATSAPP_BUSINESS_PHONE_NUMBER_ID,
              )
              .delete(
                r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
                  .WHATSAPP_BUSINESS_ASSET_ID,
              )
          : o != null && n != null
            ? s
                .set(
                  r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
                    .WHATSAPP_BUSINESS_ASSET_ID,
                  o,
                )
                .set(
                  r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
                    .WHATSAPP_BUSINESS_PHONE_NUMBER_ID,
                  n,
                )
                .delete(
                  r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
                    .PAGE_WHATSAPP_NUMBER_ID,
                )
            : s
                .set(
                  r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
                    .WHATSAPP_BUSINESS_PHONE_NUMBER_ID,
                  n,
                )
                .delete(
                  r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
                    .PAGE_WHATSAPP_NUMBER_ID,
                );
      if (
        L(
          s.get(
            r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
              .PAGE_WHATSAPP_NUMBER_ID,
          ),
          u.get(
            r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
              .PAGE_WHATSAPP_NUMBER_ID,
          ),
        ) &&
        L(
          s.get(
            r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
              .WHATSAPP_BUSINESS_PHONE_NUMBER_ID,
          ),
          u.get(
            r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
              .WHATSAPP_BUSINESS_PHONE_NUMBER_ID,
          ),
        ) &&
        L(
          s.get(
            r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
              .WHATSAPP_BUSINESS_ASSET_ID,
          ),
          u.get(
            r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")
              .WHATSAPP_BUSINESS_ASSET_ID,
          ),
        )
      )
        return e;
      var c = i.set(l, u);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.lead_nurture_channels.set(c, e);
    }
    ((l.isAdgroupUsingOnlyLeadNurtureChannelsAssetFeedFromRecord = e),
      (l.addInAppCallLeadNurtureChannelField = s),
      (l.setB2PMessagingPartnerFlowField = u),
      (l.unsetB2PMessagingPartnerFlowField = c),
      (l.addB2PMessagingLeadNurtureChannelField = d),
      (l.addChatOnWhatsAppLeadNurtureChannelField = m),
      (l.addChatOnInstagramLeadNurtureChannelField = p),
      (l.deleteB2PMessagingLeadNurtureChannelsField = _),
      (l.deleteChatOnWhatsAppLeadNurtureChannelsField = f),
      (l.deleteChatOnInstagramLeadNurtureChannelsField = g),
      (l.cleanLeadNurtureChannelsField = h),
      (l.updateLeadNurtureDestinationIdField = b),
      (l.setSharedMessageChannelFields = v),
      (l.updateSharedMessageChannelFields = S),
      (l.setLeadNurturingAgentStateField = R),
      (l.updateLeadNurtureWhatsAppIdField = E));
  },
  98,
);
