__d(
  "AdsUEditorAdgroupExistingPostDerivedCTAValues",
  ["AdsMessengerConstants", "AdsUEditorInstagramUtils", "AdsWhatsAppUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "MESSAGE_PAGE":
          return {
            appDestination: "MESSENGER",
            link: o("AdsMessengerConstants").EMPTY_MESSENGER_LINK,
          };
        case "WHATSAPP_MESSAGE":
          return {
            appDestination: "WHATSAPP",
            link: o("AdsWhatsAppUtils").getDefaultCTALink(),
          };
        case "INSTAGRAM_MESSAGE":
          return {
            appDestination: "INSTAGRAM_DIRECT",
            link: o("AdsUEditorInstagramUtils").DEFAULT_INSTAGRAM_LINK,
          };
        case "NO_BUTTON":
          return { link: "" };
      }
      return null;
    }
    l.getDerivedCTAValues = e;
  },
  98,
);
