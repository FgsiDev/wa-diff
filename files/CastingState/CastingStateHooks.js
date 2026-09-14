__d(
  "CastingStateHooks",
  ["CastingContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u() {
      var e = s(o("CastingContext").CastingStateContext);
      return (e == null ? void 0 : e.receiverIsConnected) || !1;
    }
    function c() {
      var e = L();
      return e == null ? null : e.currentVideoID;
    }
    function d() {
      var e = c();
      return e != null;
    }
    function m() {
      var e = L();
      return e == null ? 0 : e.currentPosition || 0;
    }
    function p() {
      var e = L();
      return e == null ? 0 : e.currentDuration || 0;
    }
    function _() {
      var e = L();
      if (e == null) return !1;
      var t = e.currentPlaybackState;
      return t === "play" || t === "seeking";
    }
    function f() {
      var e = L();
      if (e == null) return !1;
      var t = e.currentPlaybackState;
      return t === "paused";
    }
    function g() {
      var e = L();
      if (e == null) return !1;
      var t = e.currentPlaybackState;
      return t === "ended";
    }
    function h() {
      var e = s(o("CastingContext").CastingStateContext);
      return e == null || !e.receiverIsConnected
        ? !1
        : e.receiverIsMuted === !0;
    }
    function y() {
      var e = s(o("CastingContext").CastingStateContext);
      return e == null || !e.receiverIsConnected ? 0 : e.receiverVolume || 0;
    }
    function C() {
      var e = s(o("CastingContext").CastingStateContext);
      return e == null || !e.receiverIsConnected
        ? null
        : e.receiverFriendlyName;
    }
    function b() {
      var e = E();
      return e != null;
    }
    function v() {
      var e = k();
      return e == null ? !1 : e.currentPlaybackState === "paused";
    }
    function S() {
      var e = k();
      return e == null ? !1 : e.currentPlaybackState === "play";
    }
    function R() {
      var e = k();
      return e == null ? null : e.currentAssetID;
    }
    function L() {
      var e = s(o("CastingContext").CastingStateContext),
        t = s(o("CastingContext").CastingExperienceStateContext);
      return e == null ||
        !e.receiverIsConnected ||
        (t == null ? void 0 : t.type) !== "video_channel"
        ? null
        : t;
    }
    function E() {
      var e = s(o("CastingContext").CastingStateContext),
        t = s(o("CastingContext").CastingExperienceStateContext);
      return e == null ||
        !e.receiverIsConnected ||
        (t == null ? void 0 : t.type) !== "photo"
        ? null
        : t;
    }
    function k() {
      var e = s(o("CastingContext").CastingStateContext),
        t = s(o("CastingContext").CastingExperienceStateContext);
      return e == null ||
        !e.receiverIsConnected ||
        (t == null ? void 0 : t.type) !== "photo_album"
        ? null
        : t;
    }
    ((l.useIsCastingConnected = u),
      (l.useCastingVideoID = c),
      (l.useIsCastingAnyVideo = d),
      (l.useCastingCurrentTime = m),
      (l.useCastingDuration = p),
      (l.useCastingIsPlaying = _),
      (l.useCastingIsPaused = f),
      (l.useCastingIsEnded = g),
      (l.useCastingIsMuted = h),
      (l.useCastingVolume = y),
      (l.useCastingReceiverFriendlyName = C),
      (l.useIsCastingPhotoExperience = b),
      (l.useCastingIsAlbumPaused = v),
      (l.useCastingIsAlbumPlaying = S),
      (l.useCastingAlbumAssetID = R));
  },
  98,
);
