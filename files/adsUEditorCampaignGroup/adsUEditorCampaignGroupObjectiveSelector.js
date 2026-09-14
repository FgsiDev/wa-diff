__d(
  "adsUEditorCampaignGroupObjectiveSelector",
  ["AdsUEditorSelectors", "adsGetUniformValueSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsGetUniformValueSelector")(
        o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(function (e) {
          return e.objective;
        }),
      ),
      s = e;
    l.default = s;
  },
  98,
);
