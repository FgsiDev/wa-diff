__d(
  "WebToMessengerUtils",
  ["AdsWebsiteExtensionTypeUtils", "CTXChatBuilderFeatureGating"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("CTXChatBuilderFeatureGating").enableMessageTemplateForWTM(
        o("AdsWebsiteExtensionTypeUtils").getSelectedMessageExtensiontype(e),
        null,
        !1,
        t,
      );
    }
    l.isMessagingTemplateEnabledForWTM = e;
  },
  98,
);
