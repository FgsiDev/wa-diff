__d(
  "AdsUEditorCampaignFBClickToWatchLiveUtils",
  [
    "AdCampaignDestination",
    "AdsAdgroupStoreUtils",
    "AdsBwIUtils",
    "AdsCampaignRecordAccessors",
    "AdsDataAtom",
    "AdsLiveVideoAdUtils",
    "AdsMutators",
    "AdsOptimizationMutationUtils",
    "AdsPlacementReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupFBClickToWatchLiveSetCTAAction",
    "immutable",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return (
        e === r("AdsPromotedObjectTypes").LIVE_VIDEO &&
        t === r("AdCampaignDestination").FACEBOOK_LIVE
      );
    }
    var u =
        "https://www.facebook.com/business/help/326071075057677?id=603833089963720",
      c = { cta: "WATCH_LIVE_VIDEO" },
      d = function (t) {
        return t === r("AdCampaignDestination").FACEBOOK_LIVE;
      };
    function m(t, n, a, l, s, u, c, d, m) {
      var p,
        _ = o("AdsMutators").chain(
          (p = r("AdsCampaignRecordAccessors")).promoted_object
            .custom_event_type.delete,
          p.promoted_object.custom_event_str.delete,
          p.promoted_object.pixel_id.delete,
          p.destination_type.set(r("AdCampaignDestination").FACEBOOK_LIVE),
          p.optimization_goal.set(l),
          function (e) {
            return o("AdsLiveVideoAdUtils").updateLiveVideoCampaignConfig({
              account: t,
              campaign: e,
              hostID: c,
              liveVideoAdType: "CURRENT_LIVE",
              updateAction: o("AdsLiveVideoAdUtils")
                .LiveVideoAdConfigUpdateAction.OPT_IN,
              isIGLiveVideoAd: !1,
              budgetPlugin: a,
              isCBOEnabled: u,
            });
          },
          function (e) {
            var a = o("AdsOptimizationMutationUtils").getDefaultAttributionSpec(
              t,
              n.objective,
              r("AdsPromotedObjectTypes").LIVE_VIDEO,
              l,
              null,
              r("AdCampaignDestination").FACEBOOK_LIVE,
              o("AdsBwIUtils").isBwICampaignGroup(n),
              n.objective,
            ).attribution_spec;
            return r("AdsCampaignRecordAccessors").attribution_spec.set(
              r("immutable").fromJS(a),
              e,
            );
          },
          function (e) {
            return o("AdsPlacementReducerUtils").resetPlacement(e, d);
          },
        )(s);
      return (
        (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
          r("promiseDone")(
            o("AdsAdgroupStoreUtils").loadAdgroupIDsInCampaigns([m]),
            function (e) {
              r("AdsUEditorAdgroupFBClickToWatchLiveSetCTAAction").dispatch(
                { adgroupIDs: e, hostID: c },
                {
                  line: "129",
                  module: "AdsUEditorCampaignFBClickToWatchLiveUtils.js",
                  moduleID: i.id,
                },
              );
            },
          );
        }),
        _
      );
    }
    ((l.isFBClickToWatchLiveAd = s),
      (l.LIVE_VIDEO_CLICK_TO_WATCH_FB_LIVE_DEFAULT_LINK = u),
      (l.LIVE_VIDEO_CLICK_TO_WATCH_FB_LIVE_EXISTING_POST_CTA_DEFAULTING = c),
      (l.getIsLiveVideoClickToWatchFBLiveAdByDestination = d),
      (l.updateCampaignForFacebookLiveDestination = m));
  },
  98,
);
