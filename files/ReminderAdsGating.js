__d(
  "ReminderAdsGating",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignAdObjectsUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        return (
          t === r("AdsAPIObjectives").OUTCOME_SALES &&
          n === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
        );
      },
      s = function (t, n) {
        return (
          t === r("AdsAPIObjectives").OUTCOME_SALES &&
          n === r("AdsAPIOptimizationGoals").LINK_CLICKS
        );
      },
      u = function (n, r) {
        return e(n, r) || s(n, r);
      },
      c = function (n, o) {
        var t =
            n === r("AdsAPIObjectives").OUTCOME_AWARENESS &&
            o === r("AdsAPIOptimizationGoals").REACH,
          a =
            n === r("AdsAPIObjectives").OUTCOME_AWARENESS &&
            o === r("AdsAPIOptimizationGoals").THRUPLAY,
          i =
            n === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
            o === r("AdsAPIOptimizationGoals").THRUPLAY,
          l = e(n, o),
          u = s(n, o),
          c = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return t.some(function (e) {
              return e;
            });
          },
          d = c(t, a, i, l, u);
        return d;
      },
      d = function (t) {
        var e,
          n,
          r,
          o = t.campaign.toJS().targeting,
          a =
            (e =
              o == null || (n = o.publisher_platforms) == null
                ? void 0
                : n.includes("instagram")) != null
              ? e
              : !1,
          i = o == null ? void 0 : o.instagram_positions,
          l =
            (r =
              i == null
                ? void 0
                : i.some(function (e) {
                    return e === "story" || e === "stream" || e === "reels";
                  })) != null
              ? r
              : !1,
          s = a && i == null;
        return l || s;
      },
      m = function (t) {
        return t.every(function (e) {
          var t = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType(
              e,
            ),
            n = t === r("AdsPromotedObjectTypes").REMINDER;
          return n
            ? !0
            : c(e.campaignGroup.objective, e.campaign.optimization_goal) &&
                d(e);
        });
      };
    function p(t, n) {
      if (!e(t, n)) return !1;
      var o = r("gkx")("8002");
      return o;
    }
    function _() {
      return r("gkx")("12244");
    }
    function f() {
      return !0;
    }
    ((l.isEventDetectionSupportedForObjectiveAndOptimization = u),
      (l.isSupportedAdsWithReminderObjectiveAndOptimization = c),
      (l.getSelectedCampaignsSupportReminders = m),
      (l.isAutoDetectEnabled = p),
      (l.isAutoDetectEndDateEnabled = _),
      (l.isAutoDetectOCRDateEnabled = f));
  },
  98,
);
