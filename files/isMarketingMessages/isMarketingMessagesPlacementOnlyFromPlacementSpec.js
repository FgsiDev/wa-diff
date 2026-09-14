__d(
  "isMarketingMessagesPlacementOnlyFromPlacementSpec",
  ["AdsPlacementAPISpecReaderUtils", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? !1
        : o("AdsPlacementAPISpecReaderUtils").isOnlyActiveSelectedPlacements(
            e,
            r("immutable").List([
              { platform: "whatsapp", position: "marketing_messages" },
              { platform: "messenger", position: "marketing_messages" },
            ]),
          );
    }
    l.isMarketingMessagesPlacementOnlyFromPlacementSpec = e;
  },
  98,
);
