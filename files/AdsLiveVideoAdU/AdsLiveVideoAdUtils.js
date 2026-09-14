__d(
  "AdsLiveVideoAdUtils",
  [
    "$InternalEnum",
    "AdCampaignDestination",
    "AdsAdgroupStoreUtils",
    "AdsAssetFeedUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsDataAtom",
    "AdsMutators",
    "AdsPagePostListStoreUtils",
    "AdsPageStoreUtils",
    "AdsUEditorAdgroupCurrentLiveVideoSelectPostAction",
    "AdsUEditorAdgroupCurrentLiveVideoSetDefaultAction",
    "AdsUEditorAdgroupSetShopDefaultOptInStatusAction",
    "AdsUEditorLiveVideoAdsConstants",
    "AdsUEditorLiveVideoAdsOptimizedSettingsUtils",
    "AdsUEditorMessagingDestinationUtils",
    "DateTime",
    "adsCampaignGetISODateTimeString",
    "cr:38143",
    "gkx",
    "promiseDone",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s = n("$InternalEnum")).Mirrored(["OPT_IN", "OPT_OUT"]),
      c = s.Mirrored(["SET", "UNSET"]),
      d = s.Mirrored(["IS_EXISTING", "IS_NEW"]),
      m = s.Mirrored(["CTX_MISMATCH", "CLEAR_VIDEO_SELECTION"]);
    function p(e) {
      if (r("gkx")("25206")) {
        var t = r("AdsCampaignRecordAccessors").promoted_object.page_id.get(e),
          n =
            t != null
              ? o("AdsPageStoreUtils").getPageIGLVADefaultDurationS(t)
              : null;
        if (n != null && n > 0)
          return Math.min(
            o("AdsUEditorLiveVideoAdsConstants").IG_LVA_MAX_DURATION_HOUR,
            Math.max(
              o("AdsUEditorLiveVideoAdsConstants").IG_LVA_MIN_DURATION_HOUR,
              Math.round(
                n / o("AdsUEditorLiveVideoAdsConstants").SECONDS_PER_HOUR,
              ),
            ),
          );
      }
      return o("AdsUEditorLiveVideoAdsConstants")
        .IG_LVA_OPTIMIZED_SETTINGS_DURATION_HOUR;
    }
    function _(e, t, n) {
      var a = t,
        i = r("DateTime").now(e.timezone_id),
        l = i.addHours(
          n
            ? p(t)
            : o("AdsUEditorLiveVideoAdsConstants")
                .FB_LVA_OPTIMIZED_SETTINGS_DURATION_HOUR,
        );
      return (
        (a = o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").start_time.set(
            r("adsCampaignGetISODateTimeString")(
              i.toDate(),
              e.timezone_offset_hours_utc,
            ),
          ),
          r("AdsCampaignRecordAccessors").end_time.set(
            r("adsCampaignGetISODateTimeString")(
              l.toDate(),
              e.timezone_offset_hours_utc,
            ),
          ),
        )(t)),
        a
      );
    }
    function f(e, t, n) {
      var a = t,
        i = r("DateTime").now(e.timezone_id).addHours(3).startOfHour(),
        l = i.addHours(
          n
            ? p(t)
            : o("AdsUEditorLiveVideoAdsConstants")
                .FB_LVA_OPTIMIZED_SETTINGS_DURATION_HOUR,
        );
      return (
        (a = o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").start_time.set(
            r("adsCampaignGetISODateTimeString")(
              i.toDate(),
              e.timezone_offset_hours_utc,
            ),
          ),
          r("AdsCampaignRecordAccessors").end_time.set(
            r("adsCampaignGetISODateTimeString")(
              l.toDate(),
              e.timezone_offset_hours_utc,
            ),
          ),
        )(t)),
        a
      );
    }
    var g = function (n) {
      var t = n.account,
        a = n.budgetPlugin,
        l = n.campaign,
        s = n.hostID,
        c = n.isCBOEnabled,
        d = n.isIGLiveVideoAd,
        m = n.isTransitionToFB,
        p = n.liveVideoAdType,
        _ = n.updateAction,
        f = l;
      if (_ === u.OPT_OUT)
        ((f = r(
          "AdsCampaignRecordAccessors",
        ).live_video_ad_campaign_config.delete(f)),
          r("AdsCampaignRecordAccessors").destination_type.get(f) ===
            r("AdCampaignDestination").INSTAGRAM_LIVE &&
            (f = o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").destination_type.delete,
              r("AdsCampaignRecordAccessors").promoted_object.delete,
            )(f)),
          (f = o(
            "AdsUEditorLiveVideoAdsOptimizedSettingsUtils",
          ).clearLVACampaignSettingsOptimization(t, f, a, c)));
      else if (_ === u.OPT_IN) {
        var g;
        (r("qex")._("1702"),
          m === !0 &&
            r("AdsCampaignRecordAccessors").destination_type.get(f) ===
              r("AdCampaignDestination").INSTAGRAM_LIVE &&
            (f = o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").destination_type.delete,
              r("AdsCampaignRecordAccessors").promoted_object.delete,
            )(f)),
          (f = r(
            "AdsCampaignRecordAccessors",
          ).live_video_ad_campaign_config.live_video_ad_type.set(p, f)),
          (f = h(
            t,
            f,
            p,
            (g = l.live_video_ad_campaign_config) == null
              ? void 0
              : g.live_video_ad_type,
            d,
            c,
            a,
          )));
      }
      if (!d) {
        var C;
        y(
          l,
          s,
          p,
          (C = l.live_video_ad_campaign_config) == null
            ? void 0
            : C.live_video_ad_type,
        );
      }
      var b = l.id;
      return (
        (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
          r("promiseDone")(
            o("AdsAdgroupStoreUtils").loadAdgroupIDsInCampaigns([b]),
            function (e) {
              r("AdsUEditorAdgroupSetShopDefaultOptInStatusAction").dispatch(
                { adgroupIDs: e, hostID: s },
                {
                  line: "253",
                  module: "AdsLiveVideoAdUtils.js",
                  moduleID: i.id,
                },
              );
            },
          );
        }),
        f
      );
    };
    function h(e, t, n, r, a, i, l) {
      var s = t;
      return (
        (r == null || n !== r) &&
          (s = o(
            "AdsUEditorLiveVideoAdsOptimizedSettingsUtils",
          ).applyLVACampaignSettingsOptimization(e, t, l, a, i)),
        (n === "SCHEDULED_LIVE" || n === "IG_SCHEDULED_LIVE") && n !== r
          ? f(e, s, a)
          : a && n === "IG_CURRENT_LIVE" && n !== r
            ? _(e, s, a)
            : s
      );
    }
    function y(t, a, l, s) {
      var u = t.id,
        d = r("AdsCampaignRecordAccessors").promoted_object.page_id.get(t);
      (l === "SCHEDULED_LIVE" && s !== "SCHEDULED_LIVE"
        ? (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
            r("promiseDone")(
              o("AdsAdgroupStoreUtils").loadAdgroupIDsInCampaigns([u]),
              function (e) {
                n("cr:38143").dispatch(
                  { adgroupIDs: e, hostID: a, updateAction: c.SET },
                  {
                    line: "330",
                    module: "AdsLiveVideoAdUtils.js",
                    moduleID: i.id,
                  },
                );
              },
            );
          })
        : s === "SCHEDULED_LIVE" &&
          l !== "SCHEDULED_LIVE" &&
          (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
            r("promiseDone")(
              o("AdsAdgroupStoreUtils").loadAdgroupIDsInCampaigns([u]),
              function (e) {
                n("cr:38143").dispatch(
                  { adgroupIDs: e, hostID: a, updateAction: c.UNSET },
                  {
                    line: "346",
                    module: "AdsLiveVideoAdUtils.js",
                    moduleID: i.id,
                  },
                );
              },
            );
          }),
        l === "CURRENT_LIVE" &&
          (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
            r("promiseDone")(
              o("AdsAdgroupStoreUtils").loadAdgroupIDsInCampaigns([u]),
              function (e) {
                (r(
                  "AdsUEditorAdgroupCurrentLiveVideoSetDefaultAction",
                ).dispatch(
                  { adgroupIDs: e, hostID: a },
                  {
                    line: "361",
                    module: "AdsLiveVideoAdUtils.js",
                    moduleID: i.id,
                  },
                ),
                  d != null &&
                    r("promiseDone")(
                      o("AdsPagePostListStoreUtils")
                        .loadPagePosts(d)
                        .then(function () {
                          r(
                            "AdsUEditorAdgroupCurrentLiveVideoSelectPostAction",
                          ).dispatch(
                            { adgroupIDs: e, hostID: a, pageID: d },
                            {
                              line: "368",
                              module: "AdsLiveVideoAdUtils.js",
                              moduleID: i.id,
                            },
                          );
                        }),
                    ));
              },
            );
          }));
    }
    var C = function (t, n) {
        return (
          n != null &&
          o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
            n.destination_type,
          ) &&
          !o(
            "AdsAssetFeedUtils",
          ).isPACAdgroupFromRecordOrDofMessagingDestinationAdgroupFromSpec(t)
        );
      },
      b = function (t, n, o, a) {
        var e,
          i = r("AdsCampaignOptimizationPluginResolver").resolve({
            objective: o,
            promotedObjectType: a,
            destinationType: n,
          }),
          l =
            ((e = t.promoted_object) == null ? void 0 : e.application_id) !=
            null;
        return i.getDefaultOptimizationGoal({ hasBackingApplication: l });
      };
    ((l.LiveVideoAdConfigUpdateAction = u),
      (l.ScheduledLiveVideoDefaultUpdateAction = c),
      (l.ScheduledLiveVideoSource = d),
      (l.ScheduledLiveVideoMismatchCase = m),
      (l.getIGLVADurationHours = p),
      (l.updateScheduledLiveVideoAdOptmisedTime = f),
      (l.updateLiveVideoCampaignConfig = g),
      (l.updateFBLiveVideoDefault = y),
      (l.isCTXMDSpecMismatchedInScheduledLiveVideoAd = C),
      (l.getDefaultOptimizationGoalFromPlugin = b));
  },
  98,
);
