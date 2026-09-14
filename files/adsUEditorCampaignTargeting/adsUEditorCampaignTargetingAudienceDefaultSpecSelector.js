__d(
  "adsUEditorCampaignTargetingAudienceDefaultSpecSelector",
  [
    "AdsUEditorSelectors",
    "adsCommonTargetingGetDefaultTargetingBulk",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "shouldShowUnknownAgeSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
            function (e) {
              return e.objective;
            },
          ),
          o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
            function (e) {
              var t;
              return (t = e.promoted_object) == null ? void 0 : t.page_id;
            },
          ),
          o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
            return e.targeting;
          }),
          r("shouldShowUnknownAgeSelector"),
        ],
        function (t, n, o, a, i) {
          var e =
            a == null
              ? void 0
              : a
                  .getValues()
                  .map(function (e) {
                    return e.geo_locations;
                  })
                  .filter(Boolean);
          return r("adsCommonTargetingGetDefaultTargetingBulk")(
            t,
            n,
            o,
            !0,
            e,
            i,
          );
        },
        {
          name:
            i.id + ".adsUEditorCampaignTargetingAudienceDefaultSpecSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
