__d(
  "CastingController",
  [
    "CastingErrorUtils",
    "CastingState",
    "FBLogger",
    "Promise",
    "SubscriptionsHandler",
    "TV2CommsParseUtils",
    "err",
    "fetchCtvCastPayload",
    "fetchVideoCastPayload",
    "getErrorSafe",
    "performanceAbsoluteNow",
    "promiseDone",
    "removeFromArray",
    "uuidv4",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "PhotoAlbum",
      c = "ChannelVideo",
      d = "Photo",
      m = (function () {
        function t(e, t) {
          var n = this;
          ((this.$5 = []),
            (this.$6 = []),
            (this.$7 = []),
            (this.$9 = function () {
              var e = o("CastingState").initialCastingState();
              (n.$12(e), n.$13(null));
            }),
            (this.$10 = function (e) {
              switch (e.type) {
                case "status_update":
                  n.$16(e);
                  break;
                case "experience_status_update":
                  n.$17(e);
                  break;
                default:
                  break;
              }
            }),
            (this.$11 = function (e, t) {
              var a;
              if (o("CastingErrorUtils").isChromecastError(e, "cancel"))
                r("FBLogger")("fbtv").warn(
                  "ChromecastError while casting. Received ChromecastError with cancel code.",
                );
              else if (
                ((a = n.$2) == null ? void 0 : a.type) === "video_channel"
              ) {
                var i,
                  l = (i = n.$2) == null ? void 0 : i.currentVideoID,
                  s = o(
                    "CastingErrorUtils",
                  ).appendCastingMetadataToExpandedError(
                    o("CastingErrorUtils").getCastingErrorSafe(e),
                    babelHelpers.extends({}, l != null ? { videoID: l } : {}),
                  );
                (r("FBLogger")("comet_cast_sender")
                  .catching(s)
                  .mustfix(
                    "Receiver error at %s while playing video channel",
                    t,
                  ),
                  r("promiseDone")(n.$4.stopCasting()));
              } else {
                var u,
                  c = o(
                    "CastingErrorUtils",
                  ).appendCastingMetadataToExpandedError(
                    o("CastingErrorUtils").getCastingErrorSafe(e),
                    {},
                  ),
                  d = ((u = n.$2) == null ? void 0 : u.type) || "";
                (r("FBLogger")("comet_cast_sender")
                  .catching(c)
                  .mustfix(
                    "Receiver error at %s while playing in experience %s",
                    t,
                    d,
                  ),
                  r("promiseDone")(n.$4.stopCasting()));
              }
            }),
            (this.$1 = o("CastingState").initialCastingState()),
            (this.$2 = null),
            (this.$3 = t),
            (this.$4 = e),
            (this.$8 = new (r("SubscriptionsHandler"))()),
            this.$8.addSubscriptions(
              this.$4.onReceiverDisconnected(this.$9),
              this.$4.onSessionDisconnected(this.$9),
              this.$4.onSessionMessage(this.$10),
              this.$4.onError(this.$11),
            ));
        }
        var a = t.prototype;
        return (
          (a.destroy = function () {
            this.$8.release();
          }),
          (a.getCastingState = function () {
            return this.$1;
          }),
          (a.getCastingExperienceState = function () {
            return this.$2;
          }),
          (a.setCastingState = function (t) {
            this.$1 = t;
          }),
          (a.setCastingExperienceState = function (t) {
            this.$2 = t;
          }),
          (a.subscribeToCastingStateChange = function (t) {
            var e = this;
            return (
              this.$5.push(t),
              function () {
                r("removeFromArray")(e.$5, t);
              }
            );
          }),
          (a.subscribeToCastingExperienceStateChange = function (t) {
            var e = this;
            return (
              this.$6.push(t),
              function () {
                r("removeFromArray")(e.$6, t);
              }
            );
          }),
          (a.subscribeToCastingEvent = function (t) {
            var e = this;
            return (
              this.$7.push(t),
              function () {
                r("removeFromArray")(e.$7, t);
              }
            );
          }),
          (a.startPlayVideoNow = function (a) {
            var t = this,
              i = a.environment,
              l = a.origin,
              u = a.position,
              d = a.subOrigin,
              m = a.videoID;
            this.$1.isCastPending ||
              (this.$12(
                babelHelpers.extends({}, this.$1, { isCastPending: !0 }),
              ),
              this.$13(null),
              this.$14({
                data: { type: "cast_requested", videoID: m },
                timestamp: (s || (s = r("performanceAbsoluteNow")))(),
              }),
              r("promiseDone")(
                (e || (e = n("Promise")))
                  .all([
                    r("fetchVideoCastPayload")({
                      castSessionID: this.$3,
                      environment: i,
                      playerOrigin: l,
                      playerSubOrigin: d,
                      videoID: m,
                    }),
                    this.$4.getSession().then(function (e) {
                      return (
                        t.$12(
                          babelHelpers.extends({}, t.$1, {
                            receiverIsConnected: !0,
                          }),
                        ),
                        e
                      );
                    }),
                  ])
                  .then(function (a) {
                    var i = a[0],
                      l = a[1];
                    if (i.type === "video_cannot_be_casted")
                      return (
                        r("FBLogger")("comet_cast_sender")
                          .catching(
                            o(
                              "CastingErrorUtils",
                            ).appendCastingMetadataToExpandedError(
                              r("err")("video_cannot_be_casted"),
                              { videoID: m },
                            ),
                          )
                          .mustfix(
                            "The video is not eligible to be casted. The cast request is ignored.",
                          ),
                        (e || (e = n("Promise"))).resolve()
                      );
                    if (i.type === "error")
                      return (
                        r("FBLogger")("comet_cast_sender")
                          .catching(
                            o(
                              "CastingErrorUtils",
                            ).appendCastingMetadataToExpandedError(i.error, {
                              videoID: m,
                            }),
                          )
                          .mustfix(
                            "There was a failure retrieving video cast payload. Video failed to play.",
                          ),
                        (e || (e = n("Promise"))).resolve()
                      );
                    var s = t.$4.isCasting(c),
                      d = null;
                    return (
                      s
                        ? (d = t.$4.playVideoNow({ position: u }, i.payload))
                        : (d = t.$4.startCasting(
                            c,
                            { position: u },
                            i.payload,
                          )),
                      d.then(function () {
                        var e = babelHelpers.extends({}, t.$1, t.$15());
                        t.$12(e);
                        var n =
                          o(
                            "CastingState",
                          ).initialVideoChannelExperienceState();
                        t.$13(n);
                      })
                    );
                  })
                  .catch(function (e) {
                    (t.$14({
                      data: { type: "cast_failed", videoID: m },
                      timestamp: (s || (s = r("performanceAbsoluteNow")))(),
                    }),
                      o("CastingErrorUtils").isChromecastError(e, "cancel") ||
                        r("FBLogger")("comet_cast_sender")
                          .catching(
                            o(
                              "CastingErrorUtils",
                            ).appendCastingMetadataToExpandedError(
                              r("getErrorSafe")(e),
                              { videoID: m },
                            ),
                          )
                          .mustfix("Failed to cast video."));
                  })
                  .finally(function () {
                    var e = babelHelpers.extends({}, t.$1, {
                      isCastPending: !1,
                    });
                    t.$12(e);
                  }),
              ));
          }),
          (a.startPhotoCasting = function (a) {
            var t = this,
              i = a.environment;
            this.$1.isCastPending ||
              (this.$12(
                babelHelpers.extends({}, this.$1, { isCastPending: !0 }),
              ),
              this.$13(null),
              this.$14({
                data: { type: "photo_cast_requested" },
                timestamp: (s || (s = r("performanceAbsoluteNow")))(),
              }),
              r("promiseDone")(
                (e || (e = n("Promise")))
                  .all([
                    o("fetchCtvCastPayload").fetchPhotoCastPayload({
                      castSessionID: this.$3,
                      environment: i,
                    }),
                    this.$4.getSession().then(function (e) {
                      return (
                        t.$12(
                          babelHelpers.extends({}, t.$1, {
                            receiverIsConnected: !0,
                          }),
                        ),
                        e
                      );
                    }),
                  ])
                  .then(function (a) {
                    r("vulture")("qPXMZG0PSaH9Vn1iXFlpU3QuEMY=");
                    var i = a[0],
                      l = a[1];
                    if (i.type === "error")
                      return (
                        r("FBLogger")("comet_cast_sender")
                          .catching(
                            o(
                              "CastingErrorUtils",
                            ).appendCastingMetadataToExpandedError(i.error, {}),
                          )
                          .mustfix(
                            "There was a failure retrieving photo cast payload.",
                          ),
                        (e || (e = n("Promise"))).resolve()
                      );
                    var s = t.$4.startCasting(d, {}, i.payload);
                    return s.then(function () {
                      var e = babelHelpers.extends({}, t.$1, t.$15());
                      (t.$12(e),
                        t.$13(o("CastingState").initialPhotoExperienceState()));
                    });
                  })
                  .catch(function (e) {
                    o("CastingErrorUtils").isChromecastError(e, "cancel") ||
                      r("FBLogger")("comet_cast_sender")
                        .catching(
                          o(
                            "CastingErrorUtils",
                          ).appendCastingMetadataToExpandedError(
                            r("getErrorSafe")(e),
                            {},
                          ),
                        )
                        .mustfix("Failed to start photo casting session.");
                  })
                  .finally(function () {
                    var e = babelHelpers.extends({}, t.$1, {
                      isCastPending: !1,
                    });
                    t.$12(e);
                  }),
              ));
          }),
          (a.startAlbumSlideshow = function (a) {
            var t = this,
              i = a.albumID,
              l = a.environment;
            this.$1.isCastPending ||
              (this.$12(
                babelHelpers.extends({}, this.$1, { isCastPending: !0 }),
              ),
              this.$13(null),
              r("promiseDone")(
                (e || (e = n("Promise")))
                  .all([
                    o("fetchCtvCastPayload").fetchAlbumCastPayload({
                      albumID: i,
                      castSessionID: this.$3,
                      environment: l,
                    }),
                    this.$4.getSession().then(function (e) {
                      return (
                        t.$12(
                          babelHelpers.extends({}, t.$1, {
                            receiverIsConnected: !0,
                          }),
                        ),
                        e
                      );
                    }),
                  ])
                  .then(function (a) {
                    var i = a[0],
                      l = a[1];
                    if (i.type === "error")
                      return (
                        r("FBLogger")("comet_cast_sender")
                          .catching(
                            o(
                              "CastingErrorUtils",
                            ).appendCastingMetadataToExpandedError(i.error, {}),
                          )
                          .mustfix(
                            "There was a failure retrieving album cast payload.",
                          ),
                        (e || (e = n("Promise"))).resolve()
                      );
                    var s = t.$4.startCasting(u, {}, i.payload);
                    return s.then(function () {
                      var e = babelHelpers.extends({}, t.$1, t.$15());
                      t.$12(e);
                      var n =
                        o("CastingState").initialPhotoAlbumExperienceState();
                      t.$13(n);
                    });
                  })
                  .catch(function (e) {
                    o("CastingErrorUtils").isChromecastError(e, "cancel") ||
                      r("FBLogger")("comet_cast_sender")
                        .catching(
                          o(
                            "CastingErrorUtils",
                          ).appendCastingMetadataToExpandedError(
                            r("getErrorSafe")(e),
                            {},
                          ),
                        )
                        .mustfix("Failed to cast album.");
                  })
                  .finally(function () {
                    var e = babelHelpers.extends({}, t.$1, {
                      isCastPending: !1,
                    });
                    t.$12(e);
                  }),
              ));
          }),
          (a.disconnect = function () {
            r("promiseDone")(this.$4.stopCasting());
          }),
          (a.play = function () {
            r("promiseDone")(this.$4.playVideo());
          }),
          (a.pause = function () {
            r("promiseDone")(this.$4.pauseVideo());
          }),
          (a.setVolume = function (t) {
            r("promiseDone")(this.$4.setVolume(t));
          }),
          (a.mute = function () {
            r("promiseDone")(this.$4.mute());
          }),
          (a.unmute = function () {
            r("promiseDone")(this.$4.unmute());
          }),
          (a.seek = function (t) {
            r("promiseDone")(this.$4.seekVideo(t));
          }),
          (a.showSingleMedia = function (t) {
            var e = null;
            switch (t.type) {
              case "photo":
                e = { photo_id: t.photoID };
                break;
              case "video":
                e = { video_id: t.videoID };
                break;
              default:
                t.type;
                return;
            }
            r("promiseDone")(
              this.$4.showPhoto({
                media_parameters: e,
                request_id: r("uuidv4")(),
              }),
            );
          }),
          (a.playAlbumSlideshow = function () {
            r("promiseDone")(this.$4.playAlbumSlideshow());
          }),
          (a.pauseAlbumSlideshow = function () {
            r("promiseDone")(this.$4.pauseAlbumSlideshow());
          }),
          (a.nextPhotoAlbumSlideshow = function () {
            r("promiseDone")(this.$4.nextPhotoAlbumSlideshow());
          }),
          (a.previousPhotoAlbumSlideshow = function () {
            r("promiseDone")(this.$4.previousPhotoAlbumSlideshow());
          }),
          (a.$12 = function (t) {
            t !== this.$1 &&
              ((this.$1 = t),
              this.$5.slice().forEach(function (e) {
                e(t);
              }));
          }),
          (a.$13 = function (t) {
            t !== this.$2 &&
              ((this.$2 = t),
              this.$6.slice().forEach(function (e) {
                e(t);
              }));
          }),
          (a.$14 = function (t) {
            this.$7.slice().forEach(function (e) {
              e(t);
            });
          }),
          (a.$16 = function (t) {
            var e = this.$1,
              n = this.$2;
            if (n != null && n.type === "video_channel") {
              var o = t.data.video_id,
                a = this.$4.getVolume() || 0,
                i = this.$4.isMuted() || !1;
              o != null &&
                this.$14({
                  data: {
                    playbackState: t.data.state,
                    playerInfo: (t == null ? void 0 : t.player_info) || null,
                    receiverInfo:
                      (t == null ? void 0 : t.receiver_info) || null,
                    type: "video_status_update",
                    videoID: o,
                  },
                  timestamp: (s || (s = r("performanceAbsoluteNow")))(),
                });
              var l = {
                receiverIsConnected: !0,
                receiverIsMuted: i,
                receiverVolume: a,
              };
              if (o == null)
                (this.$12(babelHelpers.extends({}, e, l)),
                  this.$13(
                    babelHelpers.extends({}, n, {
                      currentDuration: null,
                      currentPlaybackState: null,
                      currentPosition: null,
                      currentVideoID: null,
                    }),
                  ));
              else {
                var u = babelHelpers.extends({}, e, l);
                (this.$12(u),
                  this.$13(
                    babelHelpers.extends({}, n, {
                      currentDuration:
                        t.data.duration != null
                          ? t.data.duration
                          : n.currentDuration,
                      currentPlaybackState: t.data.state,
                      currentPosition: t.data.position,
                      currentVideoID: o,
                    }),
                  ));
              }
            }
          }),
          (a.$17 = function (t) {
            var e = this.$2;
            if (
              e != null &&
              e.type === "photo_album" &&
              t.data.name === "PhotoAlbum"
            ) {
              var n,
                r,
                a,
                i = o(
                  "TV2CommsParseUtils",
                ).parseCastingReceiverPhotoAlbumReportedState(t.data.payload),
                l = i.media_state,
                s =
                  ((n = (r = l.photo_state) == null ? void 0 : r.photo_id) !=
                  null
                    ? n
                    : (a = l.video_state) == null
                      ? void 0
                      : a.video_id) || null,
                u = this.$18(l);
              this.$13(
                babelHelpers.extends({}, e, {
                  currentAssetID: s,
                  currentPlaybackState: u,
                }),
              );
            }
          }),
          (a.$15 = function () {
            return {
              receiverFriendlyName: this.$4.getFriendlyName() || null,
              receiverIsMuted: this.$4.isMuted() || null,
              receiverVolume: this.$4.getVolume() || 0,
            };
          }),
          (a.$18 = function (t) {
            return t.photo_state != null
              ? t.photo_state.photo_playback_state === "play"
                ? "play"
                : "paused"
              : t.video_state != null
                ? ["play", "seeking"].includes(
                    t.video_state.video_playback_state,
                  )
                  ? "play"
                  : "paused"
                : null;
          }),
          t
        );
      })();
    l.default = m;
  },
  98,
);
