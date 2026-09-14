__d(
  "AdsUEditorCampaignReachFrequencyFlowChangeAdFormatsCheckboxReducerPlugin",
  [
    "AdsAPITargetFields",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsUEditorCampaignReachFrequencyFlowChangeAdFormatsCheckboxActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return o("AdsMutators").chain(
                function (e) {
                  var n = e.targeting.publisher_platforms;
                  return n == null
                    ? e
                    : n.reduce(function (e, n) {
                        return o(
                          "AdsPlacementAPISpecWriterUtils",
                        ).recomputePublisherPlatform(
                          e,
                          n,
                          t.eligibilityInformation,
                        );
                      }, e);
                },
                function (e) {
                  return t.isChecked !== !0
                    ? e
                    : t.adFormatType === "spherical_image" ||
                        t.adFormatType === "spherical_video"
                      ? o("AdsPlacementAPISpecWriterUtils").addGroup(
                          e,
                          "facebook/feed",
                          t.eligibilityInformation,
                          r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                          "facebook",
                        )
                      : t.adFormatType === "stories_carousel"
                        ? o("AdsPlacementAPISpecWriterUtils").addGroup(
                            e,
                            "instagram/story",
                            t.eligibilityInformation,
                            r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                            "instagram",
                          )
                        : e;
                },
              )(e);
            });
          },
          o(
            "AdsUEditorCampaignReachFrequencyFlowChangeAdFormatsCheckboxActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
