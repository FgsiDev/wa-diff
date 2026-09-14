__d(
  "adsUEditorCampaignDestinationTypeSelector",
  ["AdsUEditorSelectors", "adsGetUniformValueSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsGetUniformValueSelector")(
      o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
        return e.destination_type;
      }),
      null,
    );
    l.adsUEditorCampaignDestinationTypeSelector = e;
  },
  98,
);
