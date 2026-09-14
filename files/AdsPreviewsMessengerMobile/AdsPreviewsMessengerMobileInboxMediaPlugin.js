__d(
  "AdsPreviewsMessengerMobileInboxMediaPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/messenger_mobile_inbox_media",
        apiFormat: "MESSENGER_MOBILE_INBOX_MEDIA",
        customizationGroup: "MESSENGER_INBOX",
        loadingPlaceholderSize: { width: 360, height: 321 },
        name: s._(/*BTDS*/ "Messenger inbox"),
        positionName: s._(/*BTDS*/ "Inbox"),
        positionDetails: null,
        icon: u("22179"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
