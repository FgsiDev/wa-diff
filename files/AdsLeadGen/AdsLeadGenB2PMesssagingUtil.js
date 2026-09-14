__d(
  "AdsLeadGenB2PMesssagingUtil",
  [
    "fbt",
    "AdsAdgroupRecordAccessors",
    "AdsInterfacesLogger",
    "AdsLeadGenMessagingChatBuilderEnums",
    "AdsMessengerConstants",
    "AdsPageStore",
    "AdsUEditorAdgroupChatOnWhatsAppCheckboxAction",
    "AdsUEditorAdgroupLeadAdsPartnerFlowUpdateAction",
    "AdsUEditorAdgroupLeadNurturingSetWhatsAppAccountAction",
    "AdsUEditorAdgroupSharedMessageChannelUpdateAction",
    "immutable",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec,
        n = t.lead_nurture_channels.get(e) || r("immutable").List();
      return n.some(function (e) {
        return e.includes("b2p_messaging");
      });
    }
    function u(e) {
      var t = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec,
        n = t.lead_nurture_channels.get(e) || r("immutable").List();
      return n.some(function (e) {
        return e.includes("in_app_call");
      });
    }
    function c(e) {
      return e != null
        ? o("AdsLeadGenMessagingChatBuilderEnums").convertButtonTypeToCTAValue(
            e,
          )
        : null;
    }
    function d(e) {
      var t = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec,
        n = t.lead_nurture_channels.get(e) || r("immutable").List();
      return n.some(function (e) {
        return e.includes("chat_on_whatsapp");
      });
    }
    function m(e, t) {
      var n;
      (r("AdsUEditorAdgroupLeadAdsPartnerFlowUpdateAction").dispatch(
        { hostID: e, adgroupIDs: t, partnerFlowID: null },
        {
          line: "76",
          module: "AdsLeadGenB2PMesssagingUtil.js",
          moduleID: i.id,
        },
      ),
        r("AdsInterfacesLogger").log({
          eventName: "lead_gen_messenger_partner_flow",
          data: ((n = {}), (n.message = "remove_flow"), n),
        }));
    }
    function p(e, t, n, o, a) {
      if (n != null && o != null) {
        var l;
        (r("AdsUEditorAdgroupLeadAdsPartnerFlowUpdateAction").dispatch(
          { hostID: t, adgroupIDs: e, partnerFlowID: o.id },
          {
            line: "97",
            module: "AdsLeadGenB2PMesssagingUtil.js",
            moduleID: i.id,
          },
        ),
          r("AdsInterfacesLogger").log({
            eventName: "lead_gen_messenger_partner_flow",
            data:
              ((l = {}),
              (l.message = a != null ? "change_flow" : "select_flow"),
              l),
          }));
      }
    }
    function _(e) {
      var t = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec,
        n = t.lead_nurture_channels.get(e) || r("immutable").List();
      return n.some(function (e) {
        return e.includes("shared_messages");
      });
    }
    function f(e) {
      var t = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec,
        n = t.lead_nurture_channels.get(e) || r("immutable").List();
      return n.some(function (e) {
        return e.includes("chat_on_instagram");
      });
    }
    function g(e, t, n, o, a, l) {
      r("AdsUEditorAdgroupSharedMessageChannelUpdateAction").dispatch(
        {
          adgroupIDs: e,
          greetingMessage: t,
          callToAction: { type: n, value: o },
          hostID: a,
          iceBreakers: l != null ? l : [],
        },
        {
          line: "141",
          module: "AdsLeadGenB2PMesssagingUtil.js",
          moduleID: i.id,
        },
      );
    }
    function h(e, t, n) {
      r("AdsUEditorAdgroupChatOnWhatsAppCheckboxAction").dispatch(
        { adgroupIDs: e, hostID: t, isOptIn: n },
        {
          line: "158",
          module: "AdsLeadGenB2PMesssagingUtil.js",
          moduleID: i.id,
        },
      );
    }
    function y(e, t, n, o, a) {
      r("AdsUEditorAdgroupLeadNurturingSetWhatsAppAccountAction").dispatch(
        {
          adgroupIDs: e,
          hostID: t,
          pageWhatsAppNumberId: n,
          whatsAppBusinessPhoneNumberId: o,
          whatsAppAssetId: a,
        },
        {
          line: "172",
          module: "AdsLeadGenB2PMesssagingUtil.js",
          moduleID: i.id,
        },
      );
    }
    function C(e, t, n, r, o, a) {
      e != null &&
        (h(e, t, n), n && (r != null || o != null) && y(e, t, r, o, a));
    }
    function b(e) {
      return e === "VIEW_WEBSITE"
        ? "VIEW_WEBSITE"
        : e === "CALL_BUSINESS"
          ? "CALL_BUSINESS"
          : e === "NONE"
            ? "NONE"
            : e === "CURRENT_CTA" ||
                e === "MESSAGE_BUSINESS" ||
                e === "DOWNLOAD" ||
                e === "SCHEDULE_APPOINTMENT" ||
                e === "VIEW_ON_FACEBOOK" ||
                e === "PROMO_CODE" ||
                e === "WHATSAPP" ||
                e === "P2B_MESSENGER" ||
                e === "BOOK_ON_WEBSITE"
              ? null
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function v(e, t, n) {
      switch (e) {
        case "VIEW_WEBSITE":
          return t;
        case "CALL_BUSINESS":
          return n != null
            ? n.countryCode + " " + n.countryNumber + n.nationalNumber
            : null;
        case "NONE":
        default:
          return null;
      }
    }
    function S(e) {
      if (e == null || e.length === 0) return null;
      var t = e
        .filter(function (e) {
          return e.title != null && e.title !== "";
        })
        .map(function (e) {
          var t;
          return {
            question: (t = e.title) != null ? t : "",
            response: e.response,
          };
        });
      return t.length > 0 ? t : null;
    }
    function R(e) {
      var t,
        n,
        a = o("AdsMessengerConstants").DEFAULT_ICEBREAKERS.map(function (e) {
          return { question: e.toString() };
        }),
        i = r("isStringNullOrEmpty")(e)
          ? null
          : r("AdsPageStore").getLoadObject(e);
      if (!i || i.isLoading()) return a;
      var l =
        (t = i.getValue()) == null || (t = t.inbox_faq_automation) == null
          ? void 0
          : t.eligible_faq_response_pairs;
      if (l && l.length > 0)
        return l.slice(0, 3).map(function (e) {
          var t;
          return {
            question: e.custom_question,
            response: (t = e.saved_response) != null ? t : "",
          };
        });
      var s =
        (n = i.getValue()) == null
          ? void 0
          : n.messenger_ads_default_icebreakers;
      return !s || s.length === 0
        ? a
        : s.slice(0, 3).map(function (e) {
            return { question: e };
          });
    }
    var L = s._(
      /*BTDS*/ "This WhatsApp number is already linked to your current instant form.",
    );
    ((l.isB2PMessagingCheckOn = e),
      (l.isInAppCallToggledEnabled = u),
      (l.getCTADropDownType = c),
      (l.isChatOnWhatsAppCheckOn = d),
      (l.removePartnerFlowinL1 = m),
      (l.saveLeadAdsPartnerFlowinL1 = p),
      (l.isSharedMessageChannelExist = _),
      (l.isChatOnInstagramCheckOn = f),
      (l.saveGreetingMessageInL1 = g),
      (l.dispatchWhatsAppChannelUpdate = C),
      (l.getCTAType = b),
      (l.getCTAValue = v),
      (l.convertIcebreakersToSpec = S),
      (l.fetchPrefillIceBreaker = R),
      (l.READ_ONLY_TOOLTIP_LEAD_NURTURING = L));
  },
  226,
);
