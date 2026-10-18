__d(
  "WAWebMediaAutoDownloadQueue",
  [
    "$InternalEnum",
    "WAConcurrentPriorityPromiseQueue",
    "WALogger",
    "WAWebDownloadProgressiveJpegThumbnail",
    "WAWebDownloadStatusThumbnail",
    "WAWebDualUploadsAutoDownloadPolicy",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebStickerMimeUtils",
    "WAWebStickerModel",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumWebcRmrReasonCode",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C = n("$InternalEnum")({
        MEDIA: "media",
        MMS_THUMBNAIL: "mms_thumbnail",
        PJPEG_THUMBNAIL: "pjpeg_thumbnail",
      }),
      b = 32 * 1024 * 1024,
      v = 512 * 1024,
      S = 5,
      R = 512,
      L = 500 * 1024;
    function E(e) {
      var t =
        e.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
        e.mimetype ===
          o("WAWebStickerMimeUtils").WhatsAppLottieStickerMimeType &&
        e.isLottie === !0 &&
        e.isAnimated === !0;
      return t || o("WAWebMsgModelPropUtils").isTrusted(e.unsafe());
    }
    function k(e) {
      if (
        !o(
          "WAWebDualUploadsAutoDownloadPolicy",
        ).shouldAutoDownloadAssociatedChild(e)
      )
        return !1;
      switch (e.type) {
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return o("WAWebUserPrefsGeneral").getAutoDownloadAudio();
        case o("WAWebMsgType").MSG_TYPE.STICKER:
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          return o("WAWebUserPrefsGeneral").getAutoDownloadPhotos();
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
        case o("WAWebMsgType").MSG_TYPE.PTV:
          return e.isGif && e.size < L
            ? o("WAWebUserPrefsGeneral").getAutoDownloadPhotos()
            : o("WAWebUserPrefsGeneral").getAutoDownloadVideos();
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return o("WAWebUserPrefsGeneral").getAutoDownloadDocuments();
      }
      return !1;
    }
    function I(e) {
      switch (e.type) {
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
        case o("WAWebMsgType").MSG_TYPE.PTV:
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return e.size <= b;
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return e.size < v;
        case o("WAWebMsgType").MSG_TYPE.STICKER:
          return !0;
      }
      return !1;
    }
    var T = (function () {
        function t() {
          this.$1 = new (r("WAConcurrentPriorityPromiseQueue"))(S, {
            photos: 2,
            videos: 1,
            audio: 1,
            documents: 1,
            mms_thumbnail: 4,
          });
        }
        var n = t.prototype;
        return (
          (n.getEnqueuedTasksCount = function () {
            return this.$1.getEnqueuedTasksCount();
          }),
          (n.clearQueue = function () {
            this.$1.clearQueue();
          }),
          (n.$2 = function () {
            return (
              o("WAWebUserPrefsGeneral").getAutoDownloadPhotos() &&
              this.getEnqueuedTasksCount() < R
            );
          }),
          (n.enqueue = function (n, r, a) {
            if (n instanceof o("WAWebStickerModel").StickerModel)
              return this.$2() ? (this.$3({ sticker: n }), !0) : !1;
            var t = n,
              i =
                r === C.MEDIA &&
                !o("WAWebMsgGetters").getIsNewsletterMsg(t.unsafe()) &&
                E(t) &&
                t.isNewMsg &&
                k(t) &&
                I(t) &&
                this.getEnqueuedTasksCount() < R;
            if (i)
              switch (t.type) {
                case o("WAWebMsgType").MSG_TYPE.AUDIO:
                case o("WAWebMsgType").MSG_TYPE.PTT:
                  return (
                    this.$4({ message: t, group: "audio", chat: a }).catch(
                      function (t) {
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "auto-download media enqueue failed ",
                                "",
                              ])),
                            t,
                          )
                          .sendLogs("auto-download media enqueue failed");
                      },
                    ),
                    !0
                  );
                case o("WAWebMsgType").MSG_TYPE.IMAGE:
                case o("WAWebMsgType").MSG_TYPE.STICKER:
                  return (
                    this.$4({ message: t, group: "photos", chat: a }).catch(
                      function (e) {
                        o("WALogger")
                          .ERROR(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "auto-download media enqueue failed ",
                                "",
                              ])),
                            e,
                          )
                          .sendLogs("auto-download media enqueue failed");
                      },
                    ),
                    !0
                  );
                case o("WAWebMsgType").MSG_TYPE.VIDEO:
                case o("WAWebMsgType").MSG_TYPE.PTV:
                  return t.isGif && t.size < L
                    ? (this.$4({ message: t, group: "photos", chat: a }).catch(
                        function (e) {
                          o("WALogger")
                            .ERROR(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
                                  "auto-download media enqueue failed ",
                                  "",
                                ])),
                              e,
                            )
                            .sendLogs("auto-download media enqueue failed");
                        },
                      ),
                      !0)
                    : (this.$4({ message: t, group: "videos", chat: a }).catch(
                        function (e) {
                          o("WALogger")
                            .ERROR(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
                                  "auto-download media enqueue failed ",
                                  "",
                                ])),
                              e,
                            )
                            .sendLogs("auto-download media enqueue failed");
                        },
                      ),
                      !0);
                case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                  return (
                    this.$4({ message: t, group: "documents", chat: a }).catch(
                      function (e) {
                        o("WALogger")
                          .ERROR(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "auto-download media enqueue failed ",
                                "",
                              ])),
                            e,
                          )
                          .sendLogs("auto-download media enqueue failed");
                      },
                    ),
                    !0
                  );
              }
            if (r === C.MMS_THUMBNAIL) {
              if (
                t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ||
                o("WAWebMsgModelUtils").typeIsUrl(t)
              )
                return (
                  this.$5({
                    message: t,
                    group: "mms_thumbnail",
                    chat: a,
                  }).catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "auto-download mms thumbnail enqueue failed ",
                            "",
                          ])),
                        e,
                      )
                      .sendLogs("auto-download mms thumbnail enqueue failed");
                  }),
                  !0
                );
              if (
                (t.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
                  t.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
                  t.type === o("WAWebMsgType").MSG_TYPE.PTV) &&
                !o("WAWebDualUploadsAutoDownloadPolicy").isDualUploadHdChildMsg(
                  t,
                )
              )
                return (
                  this.$6({ message: t, group: "mms_thumbnail" }).catch(
                    function (e) {
                      o("WALogger")
                        .ERROR(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "auto-download status thumbnail enqueue failed ",
                              "",
                            ])),
                          e,
                        )
                        .sendLogs(
                          "auto-download status thumbnail enqueue failed",
                        );
                    },
                  ),
                  !0
                );
            }
            return r === C.PJPEG_THUMBNAIL &&
              t.type === o("WAWebMsgType").MSG_TYPE.IMAGE &&
              !o("WAWebDualUploadsAutoDownloadPolicy").isDualUploadHdChildMsg(t)
              ? (this.$7({ message: t, group: "mms_thumbnail" }).catch(
                  function (e) {
                    o("WALogger")
                      .ERROR(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "auto-download pjpeg thumbnail enqueue failed ",
                            "",
                          ])),
                        e,
                      )
                      .sendLogs("auto-download pjpeg thumbnail enqueue failed");
                  },
                ),
                !0)
              : !1;
          }),
          (n.$3 = async function (t) {
            var e = t.sticker;
            if (!e.mediaObject) {
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "Sticker mediaObject missing at enqueue ",
                      "",
                    ])),
                  r("gkx")("26258") ? "" : e.id,
                )
                .sendLogs(
                  "Sticker mediaObject does not exist for media at enqueue time",
                );
              return;
            }
            await this.$1.enqueue(
              async function () {
                if (!e.mediaObject) {
                  o("WALogger")
                    .ERROR(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "Sticker mediaObject missing at download ",
                          "",
                        ])),
                      r("gkx")("26258") ? "" : e.id,
                    )
                    .sendLogs(
                      "Sticker mediaObject does not exist for media at download time",
                    );
                  return;
                }
                await e.downloadMedia();
              },
              { group: "photos", priority: 1 },
            );
          }),
          (n.$4 = async function (t) {
            var e = t.group,
              n = t.message;
            if (!n.mediaObject) {
              o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "mediaObject does not exist for media at enqueue time ",
                      "",
                    ])),
                  r("gkx")("26258") ? "" : n.id,
                )
                .sendLogs(
                  "mediaObject does not exist for media at enqueue time",
                );
              return;
            }
            await this.$1.enqueue(
              async function () {
                if (!n.mediaObject) {
                  o("WALogger")
                    .ERROR(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "mediaObject does not exist for media at download time ",
                          "",
                        ])),
                      r("gkx")("26258") ? "" : n.id,
                    )
                    .sendLogs(
                      "mediaObject does not exist for media at download time",
                      { sampling: 0 },
                    );
                  return;
                }
                k(n) &&
                  (await n.downloadMedia({
                    downloadEvenIfExpensive: !1,
                    rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                      .WEBC_RMR_REASON_CODE.OTHER,
                    isUserInitiated: !1,
                    isAutoDownload: !0,
                  }));
              },
              { group: e, priority: -n.t },
            );
          }),
          (n.$5 = async function (t) {
            var e = t.chat,
              n = t.group,
              o = t.message;
            await this.$1.enqueue(
              async function () {
                await r("WAWebMediaDownloadMmsThumbnail")({ msg: o, chat: e });
              },
              { group: n, priority: -o.t },
            );
          }),
          (n.$6 = async function (t) {
            var e = t.group,
              n = t.message;
            await this.$1.enqueue(
              async function () {
                await o("WAWebDownloadStatusThumbnail").downloadStatusThumbnail(
                  { msg: n },
                );
              },
              { group: e, priority: -n.t },
            );
          }),
          (n.$7 = async function (t) {
            var e = t.group,
              n = t.message;
            await this.$1.enqueue(
              async function () {
                await o(
                  "WAWebDownloadProgressiveJpegThumbnail",
                ).downloadProgressiveJpegThumbnail({
                  msg: n,
                  scanCount: o(
                    "WAWebMediaGatingUtils",
                  ).getHQImageThumbnailInChatScans(),
                });
              },
              { group: e, priority: -n.t },
            );
          }),
          t
        );
      })(),
      D = new T();
    ((l.AutoDownloadTypes = C),
      (l.MAX_AUTO_DOWNLOAD_SIZE = b),
      (l.AUDIO_AUTO_DOWNLOAD_SIZE_LIMIT = v),
      (l.shouldTrustMedia = E),
      (l.shouldAutoDownloadMedia = k),
      (l.validateMediaSize = I),
      (l.AutoDownloadQueue = D));
  },
  98,
);
