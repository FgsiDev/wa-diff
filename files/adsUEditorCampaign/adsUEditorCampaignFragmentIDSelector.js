__d(
  "adsUEditorCampaignFragmentIDSelector",
  [
    "AdsCampaignDraftFragmentStore",
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
              return e.id;
            }),
          ),
          r("AdsCampaignDraftFragmentStore").getRawSelector,
        ],
        function (t, n) {
          return t != null ? n(t).fragmentID : null;
        },
        { name: i.id + ".adsUEditorCampaignFragmentIDSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
