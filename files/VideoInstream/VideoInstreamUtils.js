__d(
  "VideoInstreamUtils",
  ["fbt", "DateConsts", "VideoInstreamAdsConstants.experimental", "vulture"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = 0,
        n = e.split(".");
      if (n.length > 2) return null;
      if (n.length === 2) {
        if (n[1].length === 0) return null;
        for (var r = n[1]; r.length < 3; ) r += "0";
        var a = Number(r);
        if (isNaN(a) || a < 0 || a >= o("DateConsts").MS_PER_SEC) return null;
        t += a / o("DateConsts").MS_PER_SEC;
      }
      var i = n[0].split(":");
      if (i.length > 3) return null;
      for (var l = 0; l < i.length; l++) {
        if (i[l].length === 0) return null;
        var s = Number(i[l]);
        if (isNaN(s) || s < 0 || s >= 60) return null;
        t += s * Math.pow(60, i.length - l - 1);
      }
      return t;
    }
    function u(e) {
      var t,
        n = Math.round(e * (t = o("DateConsts")).MS_PER_SEC) / t.MS_PER_SEC,
        r = Math.floor(n / t.SEC_PER_HOUR),
        a = n - r * t.SEC_PER_HOUR,
        i = Math.floor(a / t.SEC_PER_MIN),
        l = Math.floor(a - i * t.SEC_PER_MIN),
        s = Math.round(a * t.MS_PER_SEC),
        u = ("0" + r).slice(-2),
        c = ("0" + i).slice(-2),
        d = ("0" + l).slice(-2),
        m = ("00" + s).slice(-3),
        p = "";
      return (r > 0 && (p += u + ":"), (p += c + ":" + d + "." + m));
    }
    function c(e, t) {
      var n = Math.ceil(e) * o("DateConsts").MS_PER_SEC;
      if (
        n <
        r("VideoInstreamAdsConstants.experimental")
          .AD_INSERTION_MINIMUM_VIDEO_LENGTH_MS
      )
        return 0;
      if (!t)
        return r("VideoInstreamAdsConstants.experimental")
          .AD_INSERTION_MAXIMUM_NUMBER_OF_AD_BREAKS;
      var a =
        (n -
          r("VideoInstreamAdsConstants.experimental")
            .AD_INSERTION_END_TIME_OFFSET_MS -
          r("VideoInstreamAdsConstants.experimental")
            .AD_INSERTION_START_TIME_OFFSET_MS) /
        r("VideoInstreamAdsConstants.experimental").AD_INSERTION_INTERVAL_MS;
      return Math.max(0, Math.floor(a) + 1);
    }
    function d(e, t, n) {
      var a = c(t, n);
      if (a === 0 || (!n && e.length >= a)) return [];
      var i =
          r("VideoInstreamAdsConstants.experimental")
            .AD_INSERTION_START_TIME_OFFSET_MS / o("DateConsts").MS_PER_SEC,
        l =
          t -
          r("VideoInstreamAdsConstants.experimental")
            .AD_INSERTION_END_TIME_OFFSET_MS /
            o("DateConsts").MS_PER_SEC,
        s =
          r("VideoInstreamAdsConstants.experimental").AD_INSERTION_INTERVAL_MS /
          o("DateConsts").MS_PER_SEC;
      if (e.length === 0 || !n) return [{ start: i, end: l }];
      var u = [];
      return (
        e.forEach(function (t, n) {
          if ((r("vulture")("YN2u8D-El2flj-iyB6sI5D8XHaA="), n === 0)) {
            var o = t.timeOffset - s;
            o >= i && u.push({ start: i, end: o });
          }
          if (n - 1 >= 0) {
            var a = e[n - 1].timeOffset + s,
              c = t.timeOffset - s;
            a <= c && u.push({ start: a, end: c });
          }
          if (n === e.length - 1) {
            var d = t.timeOffset + s;
            d <= l && u.push({ start: d, end: l });
          }
        }),
        u
      );
    }
    function m(e, t, n, r) {
      if (e == null) return !1;
      for (var o = d(n, t, r), a = 0; a < o.length; a++)
        if (e >= o[a].start && e <= o[a].end) return !0;
      return !1;
    }
    function p(e, t, n, a) {
      var i = e[t];
      if (
        i.timeOffset * o("DateConsts").MS_PER_SEC <
          r("VideoInstreamAdsConstants.experimental")
            .AD_INSERTION_START_TIME_OFFSET_MS ||
        (n - i.timeOffset) * o("DateConsts").MS_PER_SEC <
          r("VideoInstreamAdsConstants.experimental")
            .AD_INSERTION_END_TIME_OFFSET_MS
      )
        return !0;
      if (a) {
        for (var l = 0; l < e.length; l++)
          if (
            !(l === t || e[l].timeOffset >= i.timeOffset) &&
            (i.timeOffset - e[l].timeOffset) * o("DateConsts").MS_PER_SEC <
              r("VideoInstreamAdsConstants.experimental")
                .AD_INSERTION_INTERVAL_MS
          )
            return !0;
      }
      return !1;
    }
    function _(e, t, n, r) {
      var o = new Set(e);
      return (
        c(n, r) === 0 && o.add("video_too_short"),
        t && o.add("branded_content"),
        f(o)
      );
    }
    function f(e) {
      return e.size === 0
        ? { disabled: !1, errorMessageHeader: null, errorMessageContent: null }
        : e.has("video_too_short")
          ? {
              disabled: !0,
              errorMessageHeader: s._(
                /*BTDS*/ '_j{"*":"Videos must be {insertion interval} seconds or longer"}',
                [
                  s._param(
                    "insertion interval",
                    r("VideoInstreamAdsConstants.experimental")
                      .AD_INSERTION_MINIMUM_VIDEO_LENGTH,
                    [0],
                  ),
                ],
              ),
              errorMessageContent: s._(
                /*BTDS*/ "Your video is too short to include in-stream ads.",
              ),
            }
          : e.has("not_organic_upload")
            ? {
                disabled: !0,
                errorMessageHeader: s._(/*BTDS*/ "In-stream ads not available"),
                errorMessageContent: s._(
                  /*BTDS*/ "In-stream ads can only be placed in original videos, not crossposted or reshared videos.",
                ),
              }
            : e.has("broadcast")
              ? {
                  disabled: !0,
                  errorMessageHeader: s._(
                    /*BTDS*/ "In-stream ads not available",
                  ),
                  errorMessageContent: s._(
                    /*BTDS*/ "Live videos are not eligible for in-stream ads, even if they are no longer live.",
                  ),
                }
              : e.has("branded_content")
                ? {
                    disabled: !0,
                    errorMessageHeader: s._(
                      /*BTDS*/ "In-stream ads not available",
                    ),
                    errorMessageContent: s._(
                      /*BTDS*/ "In-stream ads can't be used in this video because it contains tagged business partners.",
                    ),
                  }
                : e.has("asset_not_owned_by_page") ||
                    e.has("unowned_asset_crosspost")
                  ? {
                      disabled: !0,
                      errorMessageHeader: s._(
                        /*BTDS*/ "In-stream ads not available",
                      ),
                      errorMessageContent: s._(
                        /*BTDS*/ "You can only modify in-stream ads in videos that belong to Pages you manage.",
                      ),
                    }
                  : {
                      disabled: !0,
                      errorMessageHeader: s._(
                        /*BTDS*/ "In-stream ads not available",
                      ),
                      errorMessageContent: null,
                    };
    }
    ((l.convertFormattedTimeToSeconds = e),
      (l.convertTimestampToFormattedString = u),
      (l.getMaxPossibleAdBreaks = c),
      (l.getEligibleTimeSegments = d),
      (l.isInEligibleTimeSegments = m),
      (l.isAdBreakViolatingInsertionRules = p),
      (l.getAdBreakTabState = _),
      (l.getAdBreakTabStateFromDisabledReasons = f));
  },
  226,
);
