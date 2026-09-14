__d(
  "AdsPromotedObjectTypeUISetObjectTypeForCampaignIDsReducerPlugins",
  [
    "AdsLeadGenDestinationType",
    "AdsPromotedObjectTypeUIReducerUtils",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").OFFLINE_EVENT_SET,
          );
        },
      },
      s = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            n.promotedObjectType,
          );
        },
      },
      u = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").MESSENGER,
          );
        },
      },
      c = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").MESSENGER,
          );
        },
      },
      d = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").OFFLINE_EVENT_SET,
          );
        },
      },
      m = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").PIXEL,
          );
        },
      },
      p = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").WEB_AND_APP,
          );
        },
      },
      _ = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").WEB_AND_SHOP,
          );
        },
      },
      f = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").WEBSITE,
          );
        },
      },
      g = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").WHATSAPP,
          );
        },
      },
      h = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").IN_STORE,
          );
        },
      },
      y = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE,
          );
        },
      },
      C = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE,
          );
        },
      },
      b = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").PLACE_PAGE_SET_ID,
          );
        },
      },
      v = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").PHONE_CALL,
          );
        },
      },
      S = {
        reduce: function (t, n) {
          return n.shouldSetOnAdDestination !== !0 ||
            n.leadGenDestination !== r("AdsLeadGenDestinationType").PHONE_CALL
            ? t
            : o(
                "AdsPromotedObjectTypeUIReducerUtils",
              ).setPromotedObjectTypeForCampaignIDs(
                t,
                n.hostID,
                n.campaignIDs,
                r("AdsPromotedObjectTypes").PHONE_CALL,
              );
        },
      },
      R = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").ON_AD,
          );
        },
      },
      L = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").PAGE,
          );
        },
      },
      E = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").VIDEO,
          );
        },
      },
      k = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").REMINDER,
          );
        },
      },
      I = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").POST,
          );
        },
      },
      T = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").EVENT,
          );
        },
      },
      D = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").GROUP,
          );
        },
      },
      x = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").PIXEL,
          );
        },
      },
      $ = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").MESSENGER,
          );
        },
      },
      P = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").WHATSAPP_CHANNEL,
          );
        },
      },
      N = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").DONATION,
          );
        },
      },
      M = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").LEAD_FORM_MESSENGER,
          );
        },
      },
      w = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").LEAD_FROM_IG_DIRECT,
          );
        },
      },
      A = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").INSTAGRAM_PROFILE,
          );
        },
      },
      F = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE,
          );
        },
      },
      O = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").WEBSITE_AND_MESSAGES,
          );
        },
      },
      B = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL,
          );
        },
      },
      W = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM,
          );
        },
      },
      q = {
        reduce: function (t, n) {
          return o(
            "AdsPromotedObjectTypeUIReducerUtils",
          ).setPromotedObjectTypeForCampaignIDs(
            t,
            n.hostID,
            n.campaignIDs,
            r("AdsPromotedObjectTypes").LIVE_VIDEO,
          );
        },
      };
    ((l.AdsUEditorCampaignSetOfflineFromPageSetPromotedObjectTypeDataReducerPlugin =
      e),
      (l.AdsUEditorCampaignSelectAppPromotedObjectTypeDataReducerPlugin = s),
      (l.AdsUEditorCampaignSelectMessengerPromotedObjectTypeDataReducerPlugin =
        u),
      (l.AdsUEditorCampaignEngagementSelectDefaultMessengerPromotedObjectTypeDataReducerPlugin =
        c),
      (l.AdsUEditorCampaignSelectOfflinePromotedObjectTypeDataReducerPlugin =
        d),
      (l.AdsUEditorCampaignSelectPixelPromotedObjectTypeDataReducerPlugin = m),
      (l.AdsUEditorCampaignSelectOmnichannelPromotedObjectTypeForWebsiteAndAppDataReducerPlugin =
        p),
      (l.AdsUEditorCampaignSelectOmnichannelPromotedObjectTypeForWebsiteAndShopDataReducerPlugin =
        _),
      (l.AdsUEditorCampaignSelectWebsitePromotedObjectTypeDataReducerPlugin =
        f),
      (l.AdsUEditorCampaignSelectWhatsAppPromotedObjectTypeDataReducerPlugin =
        g),
      (l.AdsUEditorCampaignSelectInStorePromotedObjectTypeDataReducerPlugin =
        h),
      (l.AdsUEditorCampaignSelectWebsiteAndInStorePromotedObjectTypeDataReducerPlugin =
        y),
      (l.AdsUEditorCampaignSelectWebsiteAppAndInStorePromotedObjectTypeDataReducerPlugin =
        C),
      (l.AdsUEditorCampaignSetPageSetFromOfflinePromotedObjectTypeDataReducerPlugin =
        b),
      (l.AdsUEditorCampaignSelectPhoneCallPromotedObjectTypeDataReducerPlugin =
        v),
      (l.AdsCampaignSelectPhoneCallPromotedObjectTypeDataReducerPlugin = S),
      (l.AdsCampaignSelectOnAdPromotedObjectTypeDataReducerPlugin = R),
      (l.AdsCampaignSelectPagePromotedObjectTypeDataReducerPlugin = L),
      (l.AdsCampaignSelectVideoPromotedObjectTypeDataReducerPlugin = E),
      (l.AdsCampaignSelectReminderPromotedObjectTypeDataReducerPlugin = k),
      (l.AdsCampaignSelectPostPromotedObjectTypeDataReducerPlugin = I),
      (l.AdsCampaignSelectEventPromotedObjectTypeDataReducerPlugin = T),
      (l.AdsCampaignSelectGroupPromotedObjectTypeDataReducerPlugin = D),
      (l.AdsCampaignSelectPixelPromotedObjectTypeDataReducerPlugin = x),
      (l.AdsCampaignSelectMessengerPromotedObjectTypeDataReducerPlugin = $),
      (l.AdsCampaignSelectPromoChannelPromotedObjectTypeDataReducerPlugin = P),
      (l.AdsUEditorCampaignSelectDonationPromotedObjectTypeDataReducerPlugin =
        N),
      (l.AdsUEditorCampaignSelectLeadFormMessengerPromotedObjectTypeDataReducerPlugin =
        M),
      (l.AdsUEditorCampaignSelectLeadFromIGDirectPromotedObjectTypeDataReducerPlugin =
        w),
      (l.AdsUEditorCampaignSelectInstagramProfilePromotedObjectTypeDataReducerPlugin =
        A),
      (l.AdsUEditorCampaignSelectIGProfileAndFBPagePromotedObjectTypeDataReducerPlugin =
        F),
      (l.AdsUEditorCampaignSelectWebsiteAndMessagesPromotedObjectTypeDataActionPlugin =
        O),
      (l.AdsUEditorCampaignSelectWebsiteAndPhoneCallPromotedObjectTypeDataActionPlugin =
        B),
      (l.AdsUEditorCampaignSelectWebsiteAndLeadFormPromotedObjectTypeDataActionPlugin =
        W),
      (l.AdsUEditorCampaignSelectLiveVideoPromotedObjectTypeDataActionPlugin =
        q));
  },
  98,
);
