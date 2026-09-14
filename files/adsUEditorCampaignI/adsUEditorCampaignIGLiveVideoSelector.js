__d(
  "adsUEditorCampaignIGLiveVideoSelector",
  [
    "AdCampaignDestination",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
              return e.destination_type;
            }),
            r("AdCampaignDestination").UNDEFINED,
          ),
        ],
        function (t) {
          return t === r("AdCampaignDestination").INSTAGRAM_LIVE;
        },
        { name: i.id + ".adsUEditorCampaignIGLiveVideoSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
