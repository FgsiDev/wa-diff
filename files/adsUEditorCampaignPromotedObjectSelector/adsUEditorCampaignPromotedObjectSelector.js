__d(
  "adsUEditorCampaignPromotedObjectSelector",
  [
    "AdsUEditorCampaignSelectors",
    "adsCreateSelector",
    "adsUEditorCampaignPromotedObjectSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorCampaignSelectors").campaigns.mapPlainObject(
            function (e) {
              return e.promoted_object;
            },
          ),
        ],
        function (t) {
          return o(
            "adsUEditorCampaignPromotedObjectSelectorUtils",
          ).adsUEditorCampaignPromotedObject(t);
        },
        { name: i.id + ".adsUEditorCampaignPromotedObjectSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
