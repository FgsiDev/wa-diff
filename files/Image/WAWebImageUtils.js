__d(
  "WAWebImageUtils",
  [
    "WACustomError",
    "WAExponentialBackoff",
    "WALogger",
    "WAPromiseProps",
    "WAWebAddWebpMetadata",
    "WAWebCanvasUtils",
    "WAWebFileUtils",
    "WAWebImageGeometry",
    "WAWebMediaCacheCollection",
    "WAWebMediaCacheModel",
    "WAWebMediaJpeg",
    "WAWebMediaLoad",
    "WAWebMediaLoadErrors",
    "WAWebNoop",
    "WAWebPREGatingUtils",
    "WAWebStickerConstants",
    "WAWebThumbnailOutcomeLogger",
    "WAWebUA",
    "WAWebWebpMetadata",
    "err",
    "getErrorSafe",
    "justknobx",
    "once",
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
      g = (function (e) {
        function t() {
          var n;
          return (
            (n = e.call(this, t.message) || this),
            (n.name = "BlackVideoThumbnailError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError);
    g.message = "Generated video thumbnail is black";
    var h = function (t) {
      var e = t.fullHeight,
        n = t.fullWidth,
        r = t.maxDimension,
        a = t.video,
        i = document.createElement("canvas"),
        l = o("WAWebImageGeometry").boundHeightWidth(e, n, r),
        s = l.height,
        u = l.width;
      ((i.width = u), (i.height = s));
      var c = i.getContext("2d");
      c.drawImage(a, 0, 0, u, s);
      var d = c.getImageData(0, 0, u, s),
        m = i.toDataURL("image/jpeg"),
        p = { url: m, width: u, height: s, fullWidth: n, fullHeight: e };
      return { thumb: p, imageData: d };
    };
    async function y(e) {
      var t = o("WAWebUA").UA.isBuggyVideoLoad,
        n = b({ context: e.logContext, isBuggyVideoLoad: t });
      try {
        return await C({ isBuggyVideoLoad: t, opts: e, reporter: n });
      } catch (e) {
        throw (n.reportError(), e);
      }
    }
    async function C(t) {
      var n = t.isBuggyVideoLoad,
        a = t.opts,
        i = t.reporter,
        l = a.debugHint,
        m = a.file,
        p = a.maxDimensions,
        _ = a.throwOnBlack,
        f = _ === void 0 ? !1 : _,
        y = await o("WAWebMediaLoad").loadVideo(m),
        C = y.fullHeight,
        b = y.fullWidth,
        v = y.video;
      if (n) {
        var S = 50,
          R = 5e3 / S;
        return o("WAExponentialBackoff").exponentialBackoff(
          {
            minTimeout: S,
            maxTimeout: S,
            retries: R,
            signal: new AbortController().signal,
            factor: 1,
          },
          function (t, n) {
            var a = [],
              c,
              d = 0;
            for (c of p) {
              var m = h({
                  video: v,
                  fullHeight: C,
                  fullWidth: b,
                  maxDimension: c,
                }),
                _ = m.imageData,
                y = m.thumb;
              if (x(_)) {
                if (n < R)
                  return (
                    n === 0 &&
                      o("WALogger").LOG(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[generateVideoThumbsAndDuration] set currentTime=0",
                          ])),
                      ),
                    (v.currentTime = 0),
                    t(r("err")("retry"))
                  );
                if ((d++, f))
                  throw (
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[generateVideoThumbsAndDuration] thumb gen failed (",
                            ")",
                          ])),
                        l,
                      )
                      .sendLogs("thumbnail-generation-failed-" + l, {
                        sampling: 0.001,
                      }),
                    i.reportChecked(d, n),
                    new g()
                  );
              }
              a.push(y);
            }
            d > 0 &&
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[generateVideoThumbsAndDuration] ",
                      " thumb(s) failed (",
                      ")",
                    ])),
                  d,
                  l,
                )
                .sendLogs("thumbnail-generation-failed-" + l, {
                  sampling: 0.001,
                });
            var S = { duration: ~~v.seekable.end(0), thumbs: a };
            return (
              o("WAWebMediaLoad").disposeVideo(v),
              i.reportChecked(d, n),
              Promise.resolve(S)
            );
          },
        );
      }
      try {
        var L = 0,
          E = p.map(function (e) {
            var t = h({
                video: v,
                fullHeight: C,
                fullWidth: b,
                maxDimension: e,
              }),
              n = t.imageData,
              r = t.thumb;
            if (x(n) && (L++, f))
              throw (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[generateVideoThumbsAndDuration] thumb gen failed (",
                        ")",
                      ])),
                    l,
                  )
                  .sendLogs("thumbnail-generation-failed-" + l, {
                    sampling: 0.001,
                  }),
                i.reportChecked(L),
                new g()
              );
            return r;
          });
        L > 0 &&
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[generateVideoThumbsAndDuration] ",
                  " thumb(s) failed (",
                  ")",
                ])),
              L,
              l,
            )
            .sendLogs("thumbnail-generation-failed-" + l, { sampling: 0.001 });
        var k = ~~v.seekable.end(0);
        return (i.reportChecked(L), { duration: k, thumbs: E });
      } finally {
        o("WAWebMediaLoad").disposeVideo(v);
      }
    }
    function b(e) {
      var t = e.context,
        n = e.isBuggyVideoLoad,
        a = self.performance.now(),
        i = n ? "BUGGY_VIDEO_LOAD" : "NORMAL",
        l = r("once")(o("WAWebThumbnailOutcomeLogger").logThumbnailOutcome);
      return {
        reportChecked: function (n, r) {
          l({
            branch: i,
            checkPerformed: !0,
            context: t,
            generationDurationMs: self.performance.now() - a,
            isBlack: n > 0,
            retryCount: r,
          });
        },
        reportError: function () {
          l({
            branch: i,
            checkPerformed: !1,
            context: t,
            generationDurationMs: self.performance.now() - a,
            outcome: "ERROR",
          });
        },
      };
    }
    async function v(e) {
      var t = e.dHeight,
        n = e.dWidth,
        r = e.outputType,
        a =
          r === void 0
            ? o("WAWebMediaCacheModel").ImageOutputTypes.DATA_URL
            : r,
        i = e.sHeight,
        l = e.src,
        s = e.sWidth,
        u = e.sX,
        c = e.sY,
        d =
          l instanceof HTMLCanvasElement
            ? l
            : await o("WAWebMediaLoad").loadImage(l),
        m = document.createElement("canvas"),
        p = m.getContext("2d");
      n == null || t == null
        ? ((m.height = i), (m.width = s), p.drawImage(d, u, c, s, i))
        : ((m.height = t),
          (m.width = n),
          p.drawImage(d, u, c, s, i, 0, 0, n, t));
      var _ = {};
      T(_, m, a);
      var f = await o("WAPromiseProps").promiseProps(_);
      return { images: f, width: s, height: i };
    }
    var S = new (o(
      "WAWebMediaCacheCollection",
    ).WAWebMediaResizeRotateCacheCollection)();
    async function R(e, t, n, a) {
      var i =
        e instanceof File
          ? { file: e, maxDimension: t, outputType: n, opts: a }
          : null;
      if (i != null) {
        var l = S.getModelsArray().find(function (e) {
            return e.isKeyEqual(i);
          }),
          s = l == null ? void 0 : l.value;
        if (
          l &&
          s &&
          l.isKeyEqual(i) &&
          o("WAWebPREGatingUtils").isPREMediaUploadCacheEnabled()
        )
          return Promise.resolve(s);
      }
      var u = a != null ? a : {},
        c = u.fitToSquare,
        d = c === void 0 ? !1 : c,
        _ = u.minDimension,
        f = _ === void 0 ? 0 : _,
        g = u.transparency,
        h = g === void 0 ? !1 : g,
        y = new ArrayBuffer(0),
        C,
        b,
        v;
      e instanceof HTMLCanvasElement
        ? ((b = Promise.resolve(e)), (v = Promise.resolve(y)))
        : ((C = window.URL.createObjectURL(e)),
          (b = o("WAWebMediaLoad").loadImage(C)),
          (v = o("WAWebFileUtils")
            .blobToArrayBuffer(e)
            .catch(function (e) {
              return (
                o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "ImageUtils::rotateAndResize error: ",
                      "",
                    ])),
                  String(e),
                ),
                y
              );
            })));
      var R = o("WAPromiseProps")
          .promiseProps({ buffer: v, image: b })
          .then(function (e) {
            var a = e.buffer,
              i = e.image,
              l = document.createElement("canvas"),
              s = i.naturalWidth || i.width,
              u = i.naturalHeight || i.height,
              c = Math.max(s, u),
              m = l.getContext("2d"),
              _ = {},
              g = o("WAWebImageGeometry").boundHeightWidth(u, s, t),
              y,
              C,
              b = n & o("WAWebMediaCacheModel").ImageOutputTypes.BLOB;
            if (a && b && s === g.width && u === g.height)
              try {
                var v = o("WAWebMediaJpeg").cleanJPEG(a);
                ((_.blob = v), (b = !1), (y = s), (C = u));
              } catch (e) {
                var S = r("getErrorSafe")(e);
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "Could not parse JPEG: ",
                      "",
                    ])),
                  S.message,
                );
              }
            return (
              (b || n & ~o("WAWebMediaCacheModel").ImageOutputTypes.BLOB) &&
                ((l.width = g.width),
                (l.height = g.height),
                h || o("WAWebCanvasUtils").fillBackgroundWithGray(l),
                m.drawImage(i, 0, 0, l.width, l.height),
                d && (o("WAWebCanvasUtils").square(l), (_.blob = void 0)),
                c < f && (o("WAWebCanvasUtils").scale(l, f), (_.blob = void 0)),
                (y = l.width),
                (C = l.height),
                T(_, l, n, h)),
              o("WAPromiseProps")
                .promiseProps(_)
                .then(function (e) {
                  return { width: y, height: C, images: e };
                })
            );
          })
          .finally(r("WAWebNoop")),
        L = await R;
      if (
        i != null &&
        o("WAWebPREGatingUtils").isPREMediaUploadCacheEnabled()
      ) {
        var E = new (o("WAWebMediaCacheModel").ResizeRotateMediaCache)({
          id: o("WAWebMediaCacheModel").ResizeRotateMediaCacheImpl.getStringKey(
            i,
          ),
          key: i,
          value: L,
        });
        S.add(E);
      }
      return R;
    }
    async function L(e, t) {
      try {
        var n = await e.arrayBuffer(),
          r = o("WAWebAddWebpMetadata").addWebpMetadata(n, t),
          a = new Uint8Array(r),
          i = new Blob([a], { type: "image/webp" });
        return i;
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "addMetadataToSticker: Unable to add metadata to Sticker",
                ])),
            )
            .sendLogs("unable-to-add-sticker-metadata"),
          e
        );
      }
    }
    async function E(e) {
      try {
        var t = window.URL.createObjectURL(e),
          n = await o("WAWebMediaLoad").loadImage(t);
        window.URL.revokeObjectURL(t);
        var a = o("WAWebStickerConstants").STICKER_DIMENSION,
          i = o("WAWebCanvasUtils").createCanvas(a, a),
          l = i.getContext("2d"),
          s = o("WAWebImageGeometry").aspectRatioScaled(n.width / n.height, a),
          u = s.height,
          c = s.width,
          d = (a - c) / 2,
          m = (a - u) / 2;
        l.drawImage(n, d, m, c, u);
        var p = await o("WAWebCanvasUtils").canvasToWebp(i),
          _ = await L(p, {
            isFirstParty: !1,
            isFromStickerMaker: !0,
            emojis: [],
            stickerPackPublisher: "WhatsApp Sticker Maker",
            stickerMakerSourceType:
              o("WAWebWebpMetadata").StickerMakerSourceType.WebStickerMaker,
          });
        return _;
      } catch (e) {
        var g = r("getErrorSafe")(e);
        throw (
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "Webp sticker file generation failed: ",
              ])),
          ),
          g
        );
      }
    }
    async function k(e) {
      try {
        var t = await o("WAWebMediaLoad").loadImage(e),
          n = document.createElement("canvas");
        ((n.width = t.naturalWidth), (n.height = t.naturalHeight));
        var r = n.getContext("2d");
        return (
          o("WAWebCanvasUtils").fillBackgroundWithGray(n),
          r.drawImage(t, 0, 0),
          o("WAWebCanvasUtils").canvasToBlob(n)
        );
      } catch (t) {
        throw new (o("WAWebMediaLoadErrors").MediaDragDropError)(
          "unable to render image",
          e,
        );
      }
    }
    function I(e) {
      if (!e) return !1;
      var t = new Image();
      return (
        r("justknobx")._("1449") && (t.crossOrigin = "anonymous"),
        (t.src = e),
        !!t.complete
      );
    }
    function T(e, t, n, r) {
      r === void 0 && (r = !1);
      var a = r ? "image/png" : "image/jpeg";
      (!e.blob &&
        n & o("WAWebMediaCacheModel").ImageOutputTypes.BLOB &&
        (e.blob = o("WAWebCanvasUtils").canvasToBlob(t, a)),
        (e.dataUrl == null || e.dataUrl === "") &&
          n & o("WAWebMediaCacheModel").ImageOutputTypes.DATA_URL &&
          (e.dataUrl = Promise.resolve(t.toDataURL(a))),
        !e.canvas &&
          n & o("WAWebMediaCacheModel").ImageOutputTypes.CANVAS &&
          (e.canvas = Promise.resolve(t)));
    }
    async function D(e) {
      var t = await o("WAWebMediaLoad").loadImage(e),
        n = o("WAWebCanvasUtils").createCanvas(t.width, t.height),
        r = n.getContext("2d");
      return (r.drawImage(t, 0, 0), n);
    }
    function x(e) {
      for (var t = e.data, n = e.height, r = e.width, o = 0; o < n; o++) {
        var a = Math.round(o * (r / n)),
          i = o * r + a,
          l = i * 4,
          s = t[l];
        if (s !== 0) return !1;
        var u = t[l + 1];
        if (u !== 0) return !1;
        var c = e.data[l + 2];
        if (c !== 0) return !1;
        var d = e.data[l + 3];
        if (d !== 0 && d !== 255) return !1;
      }
      return !0;
    }
    ((l.DATA_URL = o("WAWebMediaCacheModel").ImageOutputTypes.DATA_URL),
      (l.BLOB = o("WAWebMediaCacheModel").ImageOutputTypes.BLOB),
      (l.CANVAS = o("WAWebMediaCacheModel").ImageOutputTypes.CANVAS),
      (l.BlackVideoThumbnailError = g),
      (l.generateVideoThumbsAndDuration = y),
      (l.crop = v),
      (l.rotateAndResize = R),
      (l.toWebpSticker = E),
      (l.urlToFile = k),
      (l.isCached = I),
      (l.base64ImageToCanvas = D));
  },
  98,
);
