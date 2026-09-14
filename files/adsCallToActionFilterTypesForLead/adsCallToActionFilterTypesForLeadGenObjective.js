__d(
  "adsCallToActionFilterTypesForLeadGenObjective",
  ["AdCampaignDestination", "AdsCallToActionTypesUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e;
      return (
        t === r("AdCampaignDestination").PHONE_CALL
          ? (n = e.filter(function (e) {
              return e.name === "CALL_NOW";
            }))
          : (n = e.filter(function (e) {
              return e.name !== "CALL_NOW";
            })),
        t !== r("AdCampaignDestination").LEAD_FROM_IG_DIRECT &&
          (n = n.filter(function (e) {
            return e.name !== "INSTAGRAM_MESSAGE";
          })),
        t !== r("AdCampaignDestination").WHATSAPP &&
          (n = n.filter(function (e) {
            return e.name !== "WHATSAPP_MESSAGE";
          })),
        (n = o("AdsCallToActionTypesUtils").handleLeadgenCtaReplacementTypes(
          n,
        )),
        n
      );
    }
    l.default = e;
  },
  98,
);
