__d(
  "adsUEditorCampaignMessagesUnifiedCreationDefaultPageSelectorUtils",
  ["AdsMessagesDefaultDestinationUtils", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = r("isTruthy")(t)
        ? t
        : r("isTruthy")(e == null ? void 0 : e.pageID)
          ? e.pageID
          : a;
      return i == null
        ? null
        : (o("AdsMessagesDefaultDestinationUtils").pageHasIGAccountConnected(
            i,
            n(i),
          ),
          i);
    }
    l.adsUEditorCampaignMessagesUnifiedCreationDefaultPage = e;
  },
  98,
);
