__d(
  "WAWebSettingsFBT",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBizAiStrings",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebUsernameWorkerCompatibleGatingUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "Chat wallpaper");
    }
    function u() {
      return s._(/*BTDS*/ "Default chat theme");
    }
    function c() {
      return s._(/*BTDS*/ "Request account info");
    }
    function d() {
      return s._(/*BTDS*/ "Channels reports");
    }
    function m() {
      return s._(/*BTDS*/ "Business tools");
    }
    function p() {
      return s._(/*BTDS*/ "Quick replies, labels, catalog");
    }
    function _() {
      return s._(/*BTDS*/ "Payments");
    }
    function f() {
      return s._(/*BTDS*/ "Transactions, payment info");
    }
    function g() {
      return o("WAWebBizAiStrings").getBizAiHubTitle();
    }
    function h() {
      return s._(/*BTDS*/ "Your Meta Business Agent");
    }
    function y() {
      return s._(/*BTDS*/ "Business profile");
    }
    function C() {
      return s._(/*BTDS*/ "Catalog");
    }
    function b() {
      return s._(/*BTDS*/ "Orders");
    }
    function v() {
      return s._(/*BTDS*/ "Advertise");
    }
    function S() {
      return s._(/*BTDS*/ "Quick replies");
    }
    function R() {
      return s._(/*BTDS*/ "Labels");
    }
    function L() {
      return s._(/*BTDS*/ "Business Help Center");
    }
    function E() {
      return s._(/*BTDS*/ "Notifications");
    }
    function k() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_granular_notifications",
      );
      return e
        ? s._(/*BTDS*/ "Messages, groups, sounds")
        : s._(/*BTDS*/ "Message notifications");
    }
    function I() {
      return s._(
        /*BTDS*/ "Use this setting to override the language from your phone",
      );
    }
    function T() {
      return s._(/*BTDS*/ "Language");
    }
    function D() {
      return s._(/*BTDS*/ "Media auto-download");
    }
    function x() {
      return s._(/*BTDS*/ "Media upload quality");
    }
    function $() {
      return s._(/*BTDS*/ "Auto-download quality");
    }
    function P() {
      return s._(
        /*BTDS*/ "Photos will be automatically downloaded in HD quality, but videos will not.",
      );
    }
    function N() {
      return s._(/*BTDS*/ "Auto");
    }
    function M() {
      return s._(
        /*BTDS*/ "Photos and videos will be automatically downloaded in HD quality.",
      );
    }
    function w() {
      return s._(
        /*BTDS*/ "Photos will be automatically downloaded in HD quality.",
      );
    }
    function A() {
      return s._(
        /*BTDS*/ "You can choose which photos or videos to download in HD quality.",
      );
    }
    function F() {
      return s._(
        /*BTDS*/ "You can choose which photos to download in HD quality.",
      );
    }
    function O() {
      return s._(/*BTDS*/ "HD quality");
    }
    function B() {
      return s._(/*BTDS*/ "Standard quality");
    }
    function W() {
      return s._(/*BTDS*/ "Spell check");
    }
    function q() {
      return s._(/*BTDS*/ "Check spelling while typing");
    }
    function U() {
      return s._(/*BTDS*/ "Replace text with emoji");
    }
    function V() {
      return s._(/*BTDS*/ "Emoji will replace specific text as you type");
    }
    function H() {
      return s._(/*BTDS*/ "Enter is send");
    }
    function G() {
      return s._(/*BTDS*/ "Enter key will send your message");
    }
    function z() {
      return s._(/*BTDS*/ "Security");
    }
    function j() {
      return s._(/*BTDS*/ "Privacy");
    }
    function K() {
      return s._(/*BTDS*/ "Blocked contacts, disappearing messages");
    }
    function Q() {
      return s._(/*BTDS*/ "Help and feedback");
    }
    function X() {
      return s._(/*BTDS*/ "Help center, contact us, privacy policy");
    }
    function Y() {
      return s._(/*BTDS*/ "Keyboard shortcuts");
    }
    function J() {
      return s._(/*BTDS*/ "Quick actions");
    }
    function Z() {
      return s._(/*BTDS*/ "Developer");
    }
    function ee() {
      return s._(/*BTDS*/ "Internal tools, feature flags, debug options");
    }
    function te() {
      return s._(/*BTDS*/ "AB Props");
    }
    function ne() {
      return s._(/*BTDS*/ "Group AB Props");
    }
    function re() {
      return s._(/*BTDS*/ "Infra Settings");
    }
    function oe() {
      return s._(/*BTDS*/ "Canonical");
    }
    function ae() {
      return s._(/*BTDS*/ "Labyrinth debug");
    }
    function ie() {
      return s._(/*BTDS*/ "Message notifications");
    }
    function le() {
      return s._(/*BTDS*/ "Show notifications for new messages");
    }
    function se() {
      return s._(/*BTDS*/ "Show previews");
    }
    function ue() {
      return s._(/*BTDS*/ "Preview message text inside message notifications.");
    }
    function ce() {
      return s._(
        /*BTDS*/ "Get faster performance by syncing messages in the background.",
      );
    }
    function de() {
      return s._(/*BTDS*/ "Play sounds for outgoing messages");
    }
    function me() {
      return s._(/*BTDS*/ "Show reaction notifications");
    }
    function pe() {
      return s._(/*BTDS*/ "Call notifications");
    }
    function _e() {
      return s._(/*BTDS*/ "Show notifications for incoming calls");
    }
    function fe() {
      return s._(/*BTDS*/ "Incoming calls");
    }
    function ge() {
      return s._(/*BTDS*/ "Play sounds for incoming calls");
    }
    function he() {
      return s._(/*BTDS*/ "Incoming sounds");
    }
    function ye() {
      return s._(/*BTDS*/ "Play sounds for incoming messages");
    }
    function Ce() {
      return s._(/*BTDS*/ "Last seen and online");
    }
    function be() {
      return s._(/*BTDS*/ "Profile picture");
    }
    function ve() {
      return s._(/*BTDS*/ "About");
    }
    function Se() {
      return s._(/*BTDS*/ "Read receipts");
    }
    function Re() {
      return s._(/*BTDS*/ "Turn off link previews");
    }
    function Le() {
      return s._(/*BTDS*/ "Block unknown account messages");
    }
    function Ee() {
      return s._(/*BTDS*/ "Disappearing messages");
    }
    function ke() {
      return s._(/*BTDS*/ "Status");
    }
    function Ie() {
      return s._(/*BTDS*/ "Default message timer");
    }
    function Te() {
      return s._(/*BTDS*/ "Groups");
    }
    function De() {
      return s._(/*BTDS*/ "Blocked contacts");
    }
    function xe() {
      return s._(/*BTDS*/ "App lock");
    }
    function $e() {
      return s._(/*BTDS*/ "Theme");
    }
    function Pe() {
      return s._(/*BTDS*/ "Light");
    }
    function Ne() {
      return s._(/*BTDS*/ "Dark");
    }
    function Me() {
      return s._(/*BTDS*/ "System default");
    }
    function we() {
      return s._(/*BTDS*/ "Help Center");
    }
    function Ae() {
      return s._(/*BTDS*/ "Frequently asked questions");
    }
    function Fe() {
      return s._(/*BTDS*/ "Contact us");
    }
    function Oe() {
      return s._(/*BTDS*/ "Chat with support to get answers");
    }
    function Be() {
      return s._(/*BTDS*/ "Rate the app");
    }
    function We() {
      return s._(/*BTDS*/ "Send feedback");
    }
    function qe() {
      return s._(/*BTDS*/ "Technical issues, suggestions");
    }
    function Ue() {
      return o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)
        ? s._(/*BTDS*/ "Terms")
        : s._(/*BTDS*/ "Terms and Privacy Policy");
    }
    function Ve() {
      var e = s._(/*BTDS*/ "Your customers' activity");
      return e;
    }
    function He() {
      return s._(/*BTDS*/ "Lists");
    }
    function Ge() {
      return s._(/*BTDS*/ "Agents");
    }
    function ze() {
      return s._(/*BTDS*/ "Agents connected to this account");
    }
    function je() {
      return s._(/*BTDS*/ "Manage people and groups");
    }
    function Ke() {
      return s._(/*BTDS*/ "Log out");
    }
    function Qe() {
      return s._(/*BTDS*/ "Account");
    }
    function Xe() {
      return s._(/*BTDS*/ "Security notifications, account info");
    }
    function Ye() {
      return s._(/*BTDS*/ "Profile");
    }
    function Je() {
      return o(
        "WAWebUsernameWorkerCompatibleGatingUtils",
      ).usernameCreationOrReservationEnabled()
        ? s._(/*BTDS*/ "Name, profile picture, username")
        : s._(/*BTDS*/ "Name, profile picture");
    }
    function Ze() {
      return s._(/*BTDS*/ "Chats");
    }
    function et() {
      return s._(/*BTDS*/ "Theme, wallpaper, chat settings");
    }
    function tt() {
      return s._(/*BTDS*/ "How to delete my account");
    }
    function nt() {
      return s._(
        /*BTDS*/ "To protect your account and improve device performance, WhatsApp will block messages from unknown accounts if they exceed a certain volume.",
      );
    }
    function rt() {
      return s._(/*BTDS*/ "Protect IP address in calls");
    }
    function ot() {
      return s._(
        /*BTDS*/ "To make it harder for people to infer your location, calls on this device will be securely relayed through WhatsApp servers. This will reduce call quality.",
      );
    }
    function at() {
      return s._(/*BTDS*/ "Status ad");
    }
    function it() {
      return s._(/*BTDS*/ "View details on your phone");
    }
    ((l.wallpaperTitle = e),
      (l.chatThemeTitle = u),
      (l.requestAccountInfoTitle = c),
      (l.newsletterReportsTitle = d),
      (l.businessToolsTitle = m),
      (l.businessToolsSecondaryTitle = p),
      (l.paymentsTitle = _),
      (l.paymentsSecondaryTitle = f),
      (l.businessToolsBusinessAITitle = g),
      (l.businessToolsBusinessAIOnboardedTitle = h),
      (l.businessToolsBusinessProfileTitle = y),
      (l.businessToolsCatalogTitle = C),
      (l.businessToolsOrdersTitle = b),
      (l.businessToolsAdvertiseTitle = v),
      (l.businessToolsQuickRepliesTitle = S),
      (l.businessToolsLabelsTitle = R),
      (l.businessToolsHelpCenterTitle = L),
      (l.notificationsTitle = E),
      (l.notificationsSecondaryTitle = k),
      (l.languageHeaderTitle = I),
      (l.languageTitle = T),
      (l.mediaAutoDownloadTitle = D),
      (l.mediaUploadQualityTitle = x),
      (l.mediaAutoDownloadQualityTitle = $),
      (l.mediaAutoDownloadQualityAutoDescription = P),
      (l.mediaAutoDownloadQualityAutoLabel = N),
      (l.mediaAutoDownloadQualityHdDescription = M),
      (l.mediaAutoDownloadQualityHdPhotosOnlyDescription = w),
      (l.mediaAutoDownloadQualityStandardDescription = A),
      (l.mediaAutoDownloadQualityStandardPhotosOnlyDescription = F),
      (l.mediaAutoDownloadQualityHdLabel = O),
      (l.mediaAutoDownloadQualityStandardLabel = B),
      (l.spellCheckTitle = W),
      (l.spellCheckSubtitle = q),
      (l.emojiReplacementTitle = U),
      (l.emojiReplacementSubtitle = V),
      (l.enterIsSendTitle = H),
      (l.enterIsSendSubtitle = G),
      (l.securityTitle = z),
      (l.privacyTitle = j),
      (l.privacySecondaryTitle = K),
      (l.helpTitle = Q),
      (l.helpSecondaryTitle = X),
      (l.keyboardShortcutsTitle = Y),
      (l.keyboardShortcutsSecondaryTitle = J),
      (l.developerTitle = Z),
      (l.developerSecondaryTitle = ee),
      (l.developerABPropsTitle = te),
      (l.developerGroupABPropsTitle = ne),
      (l.developerInfraSettingsTitle = re),
      (l.developerWWWSettingsTitle = oe),
      (l.developerLabyrinthDebugTitle = ae),
      (l.messageNotificationsTitle = ie),
      (l.messageNotificationsSubtitle = le),
      (l.showPreviewsTitle = se),
      (l.showPreviewsSubtitle = ue),
      (l.offlineSyncSubtitle = ce),
      (l.outgoingAudioToneSubtitle = de),
      (l.showReactionsTitle = me),
      (l.showCallsTitle = pe),
      (l.showCallsSubtitle = _e),
      (l.playCallRingtoneTitle = fe),
      (l.playCallRingtoneSubtitle = ge),
      (l.soundsTitle = he),
      (l.soundsSubtitle = ye),
      (l.privacyLastSeenOnlineEnabledTitle = Ce),
      (l.privacyProfilePhotoTitle = be),
      (l.privacyAboutTitle = ve),
      (l.privacyReadReceiptsTitle = Se),
      (l.privacyLinkPreviewsTitle = Re),
      (l.antiBrigadingTitle = Le),
      (l.privacyDMTitle = Ee),
      (l.privacyStatusPostingTitle = ke),
      (l.privacyDDMTitle = Ie),
      (l.privacyGroupsTitle = Te),
      (l.privacyBlockedTitle = De),
      (l.privacyScreenlockTitle = xe),
      (l.themeTitle = $e),
      (l.themeLightLabel = Pe),
      (l.themeDarkLabel = Ne),
      (l.themeSystemLabel = Me),
      (l.helpCenterTitle = we),
      (l.helpCenterSubtitle = Ae),
      (l.contactUsTitle = Fe),
      (l.contactUsSubtitle = Oe),
      (l.rateTheApp = Be),
      (l.sendFeedbackTitle = We),
      (l.sendFeedbackSubtitle = qe),
      (l.termsTitle = Ue),
      (l.dataSharingTitle = Ve),
      (l.listsTitle = He),
      (l.agentsTitle = Ge),
      (l.agentsSecondaryTitle = ze),
      (l.listsSecondaryTitle = je),
      (l.logoutTitle = Ke),
      (l.accountTitle = Qe),
      (l.accountSecondaryTitle = Xe),
      (l.profileTitle = Ye),
      (l.profileSecondaryTitle = Je),
      (l.chatsTitle = Ze),
      (l.chatsSecondaryTitle = et),
      (l.deleteAccountTitle = tt),
      (l.antiBrigadingDescription = nt),
      (l.protectIpInCallsTitle = rt),
      (l.protectIpInCallsDescription = ot),
      (l.wamoNonAGMMessagePreviewTitle = at),
      (l.wamoNonAGMMessagePreviewDescription = it));
  },
  226,
);
