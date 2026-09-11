__d(
  "AdsErrorCodeToActionableCTAMap",
  [
    "errorCode",
    "AdsAPIAdgroupPaths",
    "AdsAPICampaignPaths",
    "AdsErrorsCTAStrings",
    "AdsStackedErrorsCardUtils",
    "URI",
    "XAdsPEControllerRouteBuilder",
    "XSettingsControllerRouteBuilder",
    "getWhatsAppManagerLink",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = {
        cta: (c = r("AdsErrorsCTAStrings")).SELECT_IMAGE_CTA,
        customCTAType: (u = o("AdsStackedErrorsCardUtils"))
          .AdsErrorCustomCTAType.PATH,
        hidePathCTAInReviewMode: !0,
        path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH,
      },
      m = !0;
    function p(e, t, n) {
      if (e != null) return r("getWhatsAppManagerLink")(e, m);
      var o = n != null && n.length === 1 ? n[0] : null;
      return o != null
        ? r("XAdsPEControllerRouteBuilder").buildURL({
            act: t != null ? t : void 0,
            whatsapp_linking_page_id: o,
          })
        : r("XSettingsControllerRouteBuilder").buildURL({
            tab: "linked_whatsapp",
          });
    }
    var _ = {
        cta: c.RECONNECT_WHATSAPP_NUMBER_CTA,
        customCTA: function (n) {
          var t = n.accountID,
            o = n.businessID,
            a = n.pageIDs;
          (e || (e = r("URI"))).goURIOnNewWindow(new e(p(o, t, a)));
        },
        customCTAType: u.AdsErrorCustomCTAType.LINK,
        hidePathCTAInReviewMode: !0,
        path: r("AdsAPICampaignPaths").PROMOTED_OBJECT.PAGE_WHATSAPP_NUMBER_ID,
        secondaryCTA: c.CHOOSE_ANOTHER_WHATSAPP_NUMBER_CTA,
        secondaryCTAType: u.AdsErrorCustomCTAType.PATH,
      },
      f = {
        cta: c.EDIT_SCHEDULE_CTA,
        customCTAType: u.AdsErrorCustomCTAType.PATH,
        path: r("AdsAPICampaignPaths").START_TIME,
      },
      g = r("immutable").Map([
        [2446386, d],
        [2501318, d],
        [2501319, d],
        [2446880, _],
      ]),
      h = r("immutable").Map([[4834013, f]]);
    ((l.getReconnectWhatsAppDestination = p),
      (l.AdsErrorCodeToActionableCTA = g),
      (l.AdsErrorCodeToBudgetScheduleActionableCTA = h));
  },
  98,
);
