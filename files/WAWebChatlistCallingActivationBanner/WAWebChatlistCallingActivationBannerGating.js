__d(
  "WAWebChatlistCallingActivationBannerGating",
  ["WAWebNux", "WAWebUserPrefsNuxPreferences", "WAWebVoipGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebVoipGatingUtils").isChatlistCallingBannerEnabled()
        ? !o("WAWebUserPrefsNuxPreferences").nuxExistsInNuxSync(
            o("WAWebNux").NuxSyncKey.WEB_CALLING_ACTIVATION_BANNER,
          )
        : !1;
    }
    l.shouldShowChatlistCallingActivationBanner = e;
  },
  98,
);
