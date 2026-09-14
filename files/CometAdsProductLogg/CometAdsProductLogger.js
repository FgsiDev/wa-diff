__d(
  "CometAdsProductLogger",
  [
    "AdsExtremeGapUtils",
    "CometAdsProductLoggingFalcoEvent",
    "CometFeedUnitStatusTrackingUtils",
    "WebSession",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "SPONSORED",
      s = "comet.home";
    function u(t) {
      var n = t.adId,
        o = t.csp,
        a = t.cts,
        i = t.endPoint,
        l = t.getFeedUnitStatusList,
        s = t.hba,
        u = t.isv,
        d = t.minGapRule,
        m = t.minGapType,
        p = t.sessionKey,
        _ = t.tracking,
        f = t.vp;
      m !== e ||
        d == null ||
        n == null ||
        (r("CometAdsProductLoggingFalcoEvent").logImmediately(function () {
          return {
            ad_id: n,
            csp: o,
            endpoint: i,
            event: "impression",
            hba: s,
            isv: u,
            min_gap_shape: { min_gap_rule: d.toString(), min_gap_type: m },
            session_key: p,
            timestamp: a,
            tracking: _,
            vp: f,
          };
        }),
        c({
          adId: n,
          csp: o,
          cts: a,
          endPoint: i,
          getFeedUnitStatusList: l,
          hba: s,
          isv: u,
          minGapRule: d,
          minGapType: m,
          sessionKey: p,
          tracking: _,
          vp: f,
        }));
    }
    function c(e) {
      var t = e.adId,
        n = e.csp,
        a = e.cts,
        i = e.endPoint,
        l = e.getFeedUnitStatusList,
        s = e.hba,
        u = e.isv,
        c = e.minGapRule,
        d = e.minGapType,
        m = e.sessionKey,
        p = e.tracking,
        _ = e.vp;
      if (!(l == null || n == null)) {
        var f = l(),
          g = o(
            "CometFeedUnitStatusTrackingUtils",
          ).getFeedUnitsWithOriginalPosition(
            f,
            o("CometFeedUnitStatusTrackingUtils").isCurrentlyVisible,
          ),
          h = parseInt(n, 10),
          y = g.slice(0, h - 1),
          C = o("AdsExtremeGapUtils").shouldApplyExtremeGapProtection(y, 5);
        if (C) {
          var b = h - o("AdsExtremeGapUtils").getLastSponsoredStoryPosition(y);
          r("CometAdsProductLoggingFalcoEvent").logImmediately(function () {
            return {
              ad_id: t,
              csp: n,
              endpoint: i,
              event: "extreme_experience",
              hba: s,
              isv: u,
              min_gap_shape: {
                min_gap_rule: c != null ? c.toString() : null,
                min_gap_type: d,
              },
              product_features:
                b <= o("AdsExtremeGapUtils").EXTREME_GAP_DISTANCE
                  ? "not protected"
                  : "protected",
              session_key: m,
              timestamp: a,
              tracking: p,
              vp: _,
            };
          });
        }
      }
    }
    function d(e) {
      var t = e.endPoint,
        n = t === void 0 ? s : t,
        a = e.minGapRule,
        i = e.minGapType,
        l = Date.now(),
        u = Math.floor(l / 1e3);
      r("CometAdsProductLoggingFalcoEvent").logImmediately(function () {
        return {
          ad_id: null,
          csp: "0",
          endpoint: n,
          event: "impression",
          hba: !1,
          isv: null,
          min_gap_shape: {
            min_gap_rule: a != null ? a.toString() : null,
            min_gap_type: i,
          },
          product_features: "highest_position_ad_from_multifeed",
          session_key: o("WebSession").getId(),
          timestamp: u.toString(),
          tracking: null,
          vp: null,
        };
      });
    }
    ((l.logCometAdsProductGapRule = u),
      (l.logCometAdsProductGapRuleExtremeExperience = c),
      (l.logCometFeedHighestPositionAd = d));
  },
  98,
);
