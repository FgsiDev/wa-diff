__d(
  "adsCallToActionFilterTypesForClickToMessagingAds",
  [
    "AdsAccountUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPromotedObjectTypes",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Set([
        "MESSAGE_PAGE",
        "WHATSAPP_MESSAGE",
        "INSTAGRAM_MESSAGE",
      ]),
      s = r("immutable").Map([
        [r("AdsPromotedObjectTypes").MESSENGER, "MESSAGE_PAGE"],
        [r("AdsPromotedObjectTypes").WHATSAPP, "WHATSAPP_MESSAGE"],
        [r("AdsPromotedObjectTypes").INSTAGRAM, "INSTAGRAM_MESSAGE"],
      ]);
    function u(t, n) {
      var r = s.get(t),
        o = e.remove(r);
      return n.filter(function (e) {
        return !o.has(e.name);
      });
    }
    function c(e, t, n, a) {
      var i = e;
      return n === r("AdsPromotedObjectTypes").INSTAGRAM &&
        o("AdsPlacementAPISpecReaderUtils").isOnlyActiveInstagramStoryPlacement(
          o(
            "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
          ).convertCampaignRecordToPlacementSpec(a),
        )
        ? i.filter(function (e) {
            return e.name === "INSTAGRAM_MESSAGE";
          })
        : (r("AdsAccountUtils").hasCapabilityFromList(
            t,
            "CTM_ADS_PARTIAL_AUTOMATED_CREATION_BETA",
          ) ||
            (i = i.filter(function (e) {
              return e.name !== "GET_OFFER";
            })),
          (i = i.filter(function (e) {
            return e.name !== "PRE_REGISTER";
          })),
          u(n, i));
    }
    l.default = c;
  },
  98,
);
