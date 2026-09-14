__d(
  "CallAdsWithWhatsAppCallUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsClickToCallFeatureGating",
    "AdsInterfacesLogger",
    "AdsWhatsAppUtils",
    "CallAdsConfigurationUtils",
    "WebToWhatsappUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        (e = r("AdsAPIObjectives")).OUTCOME_SALES,
        e.LINK_CLICKS,
        e.OUTCOME_LEADS,
        e.OUTCOME_ENGAGEMENT,
      ]);
    function u(e) {
      return (
        o("CallAdsConfigurationUtils").getCallDestinationType(e) === "WHATSAPP"
      );
    }
    var c = function (t, n, r) {
      r === void 0 && (r = null);
      var e = n || (t ? o("AdsWhatsAppUtils").getPageWhatsAppData(t) : null),
        a = !0,
        i = function () {
          var n = e == null ? void 0 : e.whatsAppNumbersInfo;
          if (!(n != null && n.length))
            return {
              whatsAppNumberID: null,
              whatsAppNumber: null,
              hasValidWhatsAppBusinessNumber: !1,
            };
          var r = e == null ? void 0 : e.pageWhatsAppNumberID;
          if (r != null) {
            var o = n.find(function (e) {
              return (
                e.page_whatsapp_number_id === r &&
                e.is_business_number === !0 &&
                e.whatsapp_smb_device !== "CAPI"
              );
            });
            if (o)
              return (
                p(t == null ? void 0 : t.id, !0, !0),
                {
                  whatsAppNumberID: o.page_whatsapp_number_id,
                  whatsAppNumber: o.whatsapp_number,
                  hasValidWhatsAppBusinessNumber: !0,
                }
              );
          }
          var a = n.find(function (e) {
            return (
              e.is_business_number === !0 && e.whatsapp_smb_device !== "CAPI"
            );
          });
          return a
            ? (p(t == null ? void 0 : t.id, !1, !0),
              {
                whatsAppNumberID: a.page_whatsapp_number_id,
                whatsAppNumber: a.whatsapp_number,
                hasValidWhatsAppBusinessNumber: !0,
              })
            : (p(t == null ? void 0 : t.id, !1, !1),
              {
                whatsAppNumberID: null,
                whatsAppNumber: null,
                hasValidWhatsAppBusinessNumber: !1,
              });
        },
        l = i(),
        s = l.hasValidWhatsAppBusinessNumber,
        u = l.whatsAppNumber,
        c = l.whatsAppNumberID;
      return {
        isBusinessNumberRequired: a,
        pageHasValidWAAccount: s,
        validPageWhatsAppNumber: u,
        whatsAppAccountConnectionType: d(t, s, r),
        pageWhatsAppNumberID: c,
      };
    };
    function d(e, t, n) {
      return (
        n === void 0 && (n = null),
        t === !0
          ? o("WebToWhatsappUtils").SXWAAccountConnectionType.AccountNotice
          : o("WebToWhatsappUtils").SXWAAccountConnectionType.NoConnection
      );
    }
    function m(e, t, n, a, i) {
      if (
        (i === void 0 && (i = !0),
        t == null ||
          n == null ||
          !s.has(t) ||
          n !== r("AdCampaignDestination").PHONE_CALL)
      )
        return !1;
      var l = a.facebook_positions;
      return l == null
        ? !1
        : o("AdsClickToCallFeatureGating").isCallAdsWithWhatsAppCallEnabled(i);
    }
    function p(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "cawc_default_whatsapp_number_retrieved",
        data:
          ((o = {}),
          (o.page_id = e),
          (o.metadata = JSON.stringify({
            isPagePrimaryNumberWABA: t,
            pageHasWABA: n,
          })),
          o),
      });
    }
    ((l.isCallDestinationTypeWhatsAppSelected = u),
      (l.getPageInfoForCallAdsWithWhatsAppCall = c),
      (l.isCallAdsWithWhatsAppCallEligible = m));
  },
  98,
);
