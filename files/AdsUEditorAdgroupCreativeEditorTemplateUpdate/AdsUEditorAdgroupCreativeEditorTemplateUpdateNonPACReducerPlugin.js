__d(
  "AdsUEditorAdgroupCreativeEditorTemplateUpdateNonPACReducerPlugin",
  [
    "AdsAdgroupMMTMutators",
    "AdsAdgroupMediaMutators",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedUtils",
    "AdsCreativeEditorTemplateRenderNonPACSucceededActionFlux",
    "AdsMediaFormatMutators",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupVideoMutators",
    "AdsUEditorCampaignSelectors",
    "FBLogger",
    "adsCreateSelector",
    "adsPlacementAssetMutationChangeFormatToAutomatic",
    "adsPlacementAssetMutationCopyDefaultCustomizations",
    "adsUEditorAccountSelector",
    "adsUEditorPlacementCustomizationCanUseMixedFormatsSelector",
    "emptyFunction",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorPlacementCustomizationCanUseMixedFormatsSelector")],
        function (t) {
          return t
            ? r("adsPlacementAssetMutationChangeFormatToAutomatic")
            : r("emptyFunction").thatReturnsArgument;
        },
        { name: i.id + ".maybeMutateMixedFormatSelector" },
      ),
      s = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").eligibilityInformationSelector],
        function (t) {
          return function (e) {
            return o("AdsPlacementAPISpecReaderUtils").isActivePosition(
              t.spec,
              e.platform,
              e.position,
            );
          };
        },
        { name: i.id + ".isAvailablePlacementSelector" },
      ),
      u = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            isAvailablePlacement: s,
            maybeMutateMixedFormat: e,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.isAvailablePlacement,
              l = n.maybeMutateMixedFormat,
              s = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var u = r("nullthrows")(s.get(n));
                return o("AdsMutators").chain.apply(
                  o("AdsMutators"),
                  [d(u), m(t.videoID, t.thumbnailURL, u)].concat(
                    t.customizations.map(function (e) {
                      var t = e.placements,
                        n = e.thumbnailURL,
                        r = e.videoID;
                      return p(r, n, t.filter(i), a, u);
                    }),
                    [l, c(r("isTruthy")(t.isMMT))],
                  ),
                )(e);
              },
            );
          },
          r("AdsCreativeEditorTemplateRenderNonPACSucceededActionFlux")
            .actionType,
        ),
      };
    function c(e) {
      return function (t) {
        return o("AdsAdgroupMMTMutators").adsMMTImageToVideoMutationSetDoFSpec(
          t,
          e,
        );
      };
    }
    function d(e) {
      var t = e.campaignGroup,
        n = e.specPlugin;
      return function (e) {
        var r = o("AdsAdgroupTypeUtils").isVideoAd(e),
          a = o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e);
        return !r && !a
          ? o("AdsMediaFormatMutators").setMediaFormat(
              "VIDEO",
              e,
              n,
              t.objective,
            )
          : e;
      };
    }
    function m(e, t, n) {
      var r = n.specPlugin;
      return function (n) {
        return o("AdsAdgroupMediaMutators").setVideo(
          n,
          r,
          e,
          t,
          "0",
          "generated_default",
          null,
        );
      };
    }
    function p(e, t, n, a, i) {
      var l = i.campaign,
        s = i.specPlugin;
      return (
        t == null &&
          r("FBLogger")("Showreel").mustfix(
            "Could not find a thumbnail URI for video",
          ),
        n == null || n.size === 0
          ? function (e) {
              return e;
            }
          : function (i) {
              var u = o(
                  "AdsUEditorAdgroupVideoMutators",
                ).addPlacementCustomizationVideo(
                  i,
                  l,
                  s,
                  a,
                  null,
                  !1,
                  e,
                  t,
                  "0",
                  null,
                  "generated_default",
                  n,
                  "VCK_TEMPLATE_SET_DATA",
                  !0,
                  !0,
                ),
                c =
                  o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(
                    u,
                  );
              return c
                ? u
                : r("adsPlacementAssetMutationCopyDefaultCustomizations")(
                    a,
                    u,
                    s,
                    n,
                  );
            }
      );
    }
    var _ = u;
    l.default = _;
  },
  98,
);
