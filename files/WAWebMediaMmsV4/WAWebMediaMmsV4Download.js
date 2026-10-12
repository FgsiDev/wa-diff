__d(
  "WAWebMediaMmsV4Download",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAAbortError",
    "WABlobToArrayBuffer",
    "WACustomError",
    "WAFilteredCatch",
    "WALogger",
    "WARaceSignal",
    "WAThrottle",
    "WAWebABProps",
    "WAWebCryptoImageStreamer",
    "WAWebDownloadManager",
    "WAWebDownloadManagerErrors",
    "WAWebEnvironment",
    "WAWebFileUtils",
    "WAWebHttpErrors",
    "WAWebInMemoryLottieStickerCache",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaDataUtils",
    "WAWebMediaEntry",
    "WAWebMediaFileErrors",
    "WAWebMediaGatherAndSetMetadataNoOpaque",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaLoad",
    "WAWebMediaLoadErrors",
    "WAWebMediaOpaqueData",
    "WAWebMediaSetSuspiciousContent",
    "WAWebMediaTypes",
    "WAWebMimeTypes",
    "WAWebMmsClientErrors",
    "WAWebMmsConst",
    "WAWebMmsMediaTypes",
    "WAWebODS",
    "WAWebStartMediaDownloadQpl",
    "WAWebStickerErrorWamEvent",
    "WAWebStickerLatencyWamEvent",
    "WAWebStickerMimeUtils",
    "WAWebStickerUtils",
    "WAWebVcardParsingUtils",
    "WAWebWamEnumStickerErrorType",
    "WAWebWamEnumStickerLatencyAction",
    "WAWebWebcProgressiveImageWamEvent",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "justknobx",
    "nullthrows",
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
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "NoEntryAfterRMR"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      T = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MissingEncFilehash"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      D = { THUMBNAIL: 1, LOW: 2, MID: 3, FULL: 4 },
      x = new WeakMap();
    function $(e) {
      e.getDownloadPromises().forEach(function (e) {
        var t;
        if (e != null) {
          var n = (t = x.get(e)) == null ? void 0 : t.abort;
          n != null && (x.delete(e), n());
        }
      });
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatWid,
            n = e.downloadOrigin,
            r = e.mediaBlob,
            a = e.mediaObject,
            i = e.mediaType,
            l = e.mimetype,
            s = e.rmrReason;
          if (!a.mediaBlob) {
            var u = yield M({
              downloadOrigin: n,
              mediaBlob: r,
              mediaObject: a,
              mediaType: i,
              mimetype: l,
            });
            !u ||
              a.mediaBlob ||
              (yield o("WAWebMediaDataUtils").attachBlobAndGatherAndSetMetadata(
                a,
                r,
              ),
              yield O({
                mimetype: l,
                mediaObject: a,
                downloadEvenIfExpensive: !1,
                mediaType: i,
                rmrReason: s,
                downloadOrigin: n,
                chatWid: t,
              }));
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.downloadOrigin,
            a = t.mediaBlob,
            i = t.mediaObject,
            l = t.mediaType,
            s = t.mimetype,
            u = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "ManuallySetMedia",
            });
          try {
            return (
              yield o("WAWebDownloadManager").screenDecryptedMedia({
                input: yield o("WABlobToArrayBuffer").blobToArrayBuffer(
                  a.forceToBlob(),
                ),
                type: l,
                mimetype: s,
                downloadOrigin: n,
                downloadQpl: u,
                onSuspiciousContent: function (t) {
                  return o(
                    "WAWebMediaSetSuspiciousContent",
                  ).setSuspiciousContentOnMediaObject(i, t);
                },
              }),
              u.endSuccess(),
              !0
            );
          } catch (t) {
            var c = r("getErrorSafe")(t);
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[media-download] manually set media rejected: ",
                      " type=",
                      "",
                    ])),
                  c.name,
                  l,
                )
                .tags("media", "security"),
              W(u, c),
              !1
            );
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r = e.downloadQpl,
            a = e.mimetype,
            i = o("WAThrottle").throttle(function (t) {
              e.mediaObject.consolidate({ loadedSize: t.loaded });
            }, o("WAWebMmsConst").FILE_PROGRESS_THROTTLE_WAIT_MS),
            l = yield o(
              "WAWebDownloadManager",
            ).downloadManager.downloadAndMaybeDecrypt({
              shouldSequenceDownload: e.shouldSequenceDownload,
              directPath: e.directPath,
              encFilehash: e.encFilehash,
              filehash: e.objFilehash,
              isFinalRmrRetry: e.isFinalRmrRetry,
              mediaKey: e.mediaKey,
              mediaKeyTimestamp: e.mediaKeyTimestamp,
              signal: e.signal,
              staticUrl: e.staticUrl,
              type: e.mediaType,
              mimetype: a,
              onDecryptStart: function () {
                e.mediaObject.consolidate({
                  downloadStage: o("WAWebMediaTypes").DownloadStage.PROCESSING,
                });
              },
              onProgress: i,
              onSuspiciousContent: function (n) {
                return o(
                  "WAWebMediaSetSuspiciousContent",
                ).setSuspiciousContentOnMediaObject(e.mediaObject, n);
              },
              userDownloadAttemptCount: e.mediaObject.userDownloadAttemptCount,
              downloadOrigin: e.downloadOrigin,
              mode: e.mode,
              progressiveJpegOpts: Y({
                scanLengths: e.scanLengths,
                scansSidecar: e.scansSidecar,
                mimetype: a,
                mediaObject: e.mediaObject,
                signal: e.signal,
              }),
              isViewOnce: e.isViewOnce,
              imageDimensions:
                e.mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE
                  ? {
                      fileHeight:
                        (t = e.mediaObject.contentInfo.fullHeight) != null
                          ? t
                          : 0,
                      fileWidth:
                        (n = e.mediaObject.contentInfo.fullWidth) != null
                          ? n
                          : 0,
                    }
                  : void 0,
              chatWid: e.chatWid,
              downloadQpl: r,
              experienceIds: e.experienceIds,
            }),
            s =
              a != null && a !== ""
                ? a
                : o("WAWebMimeTypes").getMediaMimeType(
                    e.mediaType,
                    new Uint8Array(l),
                  );
          return new Blob([l], { type: s });
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatWid,
            a = e.downloadEvenIfExpensive,
            i = e.downloadOrigin,
            l = e.downloadQplContext,
            L = e.experienceIds,
            E = e.isAutoDownload,
            k = e.isFinalRmrRetry,
            D = e.isVcardOverMmsDocument,
            $ = e.isViewOnce,
            P = e.mediaObject,
            N = e.mediaType,
            M = e.mimetype,
            w = e.mode,
            F = e.rmrData,
            B = e.rmrReason,
            q = e.shouldSequenceDownload,
            U = q === void 0 ? !1 : q,
            V = e.shouldThrow,
            H = e.signal,
            G = V === !0,
            z =
              l != null
                ? l
                : {
                    qpl: o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                      entryPoint: "MediaDownload",
                    }),
                    rmrRetryCount: 0,
                  },
            j = z.qpl,
            K = z.rmrRetryCount;
          if (
            (K > 0 && j.addAnnotations({ bool: { hasRetry: !0 } }), P == null)
          ) {
            j.endFail("missing_media_object", {
              string: { earlyExitReason: "missing_media_object" },
            });
            return;
          }
          var Q = P.filehash;
          if (r("isStringNullOrEmpty")(Q)) {
            j.endFail("missing_filehash", {
              string: { earlyExitReason: "missing_filehash" },
            });
            return;
          }
          if (
            P.downloadStage === o("WAWebMediaTypes").DownloadStage.ERROR_MISSING
          ) {
            j.endFail("error_missing_download_stage", {
              string: { earlyExitReason: "error_missing_download_stage" },
            });
            return;
          }
          var X = E !== !0 || r("WAWebEnvironment").isWindows,
            Y = P.getDownloadPromise(N);
          if (Y) {
            j.addPoint("existing_download_promise");
            var J = x.get(Y);
            return (
              J && X && (J.shouldStoreInMemory = !0),
              Y.then(
                function () {
                  P.downloadStage ===
                  o("WAWebMediaTypes").DownloadStage.RESOLVED
                    ? j.endSuccess({
                        string: { downloadResult: "existing_download_promise" },
                      })
                    : j.endFail("existing_download_not_resolved", {
                        string: {
                          downloadResult: "existing_download_promise",
                          downloadStage: String(P.downloadStage),
                        },
                      });
                },
                function (e) {
                  throw (W(j, e), e);
                },
              )
            );
          }
          var Z = P.mediaBlob;
          if (Z) {
            j.addPoint("legacy_media_blob_validation_start");
            var ne = yield Z.validate().catch(function (e) {
              throw (W(j, e), e);
            });
            if (
              (j.addPoint("legacy_media_blob_validation_end", {
                bool: { isValid: ne },
              }),
              ne)
            ) {
              (P.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.RESOLVED,
              }),
                j.endSuccess({
                  string: { downloadResult: "legacy_media_blob_hit" },
                }));
              return;
            }
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[media-download] blob invalid, clearing fh=",
                  " msgs=",
                  "",
                ])),
              Q != null ? Q : "none",
              P.msgs.length,
            ),
              P.clearBlob(),
              P.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
              }),
              P.notifyMsgsAsync(),
              j.endFail("invalid_legacy_media_blob", {
                string: { earlyExitReason: "invalid_legacy_media_blob" },
              }));
            return;
          }
          var re = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
            Q,
          );
          j.addPoint(
            re == null
              ? "in_memory_media_blob_cache_miss"
              : "in_memory_media_blob_cache_hit",
          );
          var oe,
            ae,
            ie = new AbortController(),
            le = {
              abort: function () {
                ie.abort();
              },
              shouldStoreInMemory: X,
            };
          return r("WARaceSignal")(
            [ie.signal, H].filter(Boolean),
            function (e) {
              var l,
                s = (function () {
                  var l = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      if (re) ae = re;
                      else {
                        var n, l, s;
                        if (
                          ((oe = P.entries.getDownloadEntry(
                            o(
                              "WAWebMediaCryptoEligibilityUtils",
                            ).isMediaCryptoExpectedForMediaType(N),
                          )),
                          j.addPoint("download_entry_lookup", {
                            bool: { found: oe != null },
                          }),
                          !oe)
                        )
                          if (
                            (o("WALogger").LOG(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
                                  "[media-download] no blob/cache/entry fh=",
                                  " msgs=",
                                  " exp=",
                                  " rmr=",
                                  "",
                                ])),
                              Q != null ? Q : "none",
                              P.msgs.length,
                              a,
                              B,
                            ),
                            a &&
                              o(
                                "WAWebMediaCryptoEligibilityUtils",
                              ).isRmrSupportedForMediaType(N))
                          ) {
                            if (
                              (j.addPoint("missing_entry_rmr_start"),
                              yield o(
                                "WAWebDownloadManager",
                              ).downloadManager.rmr({
                                mediaObject: P,
                                signal: e,
                                rmrReason: B,
                                rmrData: F,
                              }),
                              j.addPoint("missing_entry_rmr_end"),
                              (oe = P.entries.getDownloadEntry(
                                o(
                                  "WAWebMediaCryptoEligibilityUtils",
                                ).isMediaCryptoExpectedForMediaType(N),
                              )),
                              !oe)
                            ) {
                              if (
                                N !==
                                o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER
                              )
                                throw new I();
                              j.endFail("sticker_entry_missing_after_rmr", {
                                string: {
                                  earlyExitReason:
                                    "sticker_entry_missing_after_rmr",
                                },
                              });
                              return;
                            }
                          } else {
                            if (
                              !o(
                                "WAWebMediaCryptoEligibilityUtils",
                              ).isRmrSupportedForMediaType(N)
                            )
                              throw new (o(
                                "WAWebDownloadManagerErrors",
                              ).MediaNotOnPhone)();
                            (P.consolidate({
                              downloadStage:
                                o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                            }),
                              j.endFail("download_entry_missing", {
                                string: {
                                  earlyExitReason: "download_entry_missing",
                                },
                              }));
                            return;
                          }
                        (P.consolidate({
                          downloadStage:
                            o("WAWebMediaTypes").DownloadStage.FETCHING,
                        }),
                          (oe = r("nullthrows")(oe)));
                        var m = oe,
                          p = m.directPath,
                          _ = m.scanLengths,
                          f = m.scansSidecar,
                          g = m.staticUrl;
                        if (
                          oe instanceof
                            o("WAWebMediaEntry").EncryptedMediaEntry &&
                          oe.getEncfilehash() == null &&
                          r("isStringNullOrEmpty")(p) &&
                          r("isStringNullOrEmpty")(g)
                        ) {
                          var h;
                          throw (
                            (h = oe) == null || h.markWhetherOnServer(!1),
                            new T()
                          );
                        }
                        if (r("justknobx")._("533")) {
                          var y;
                          if (
                            N ===
                              o("WAWebMmsMediaTypes").MEDIA_TYPES
                                .NEWSLETTER_IMAGE &&
                            M != null &&
                            (y = M.toLowerCase()) != null &&
                            y.includes("svg")
                          )
                            throw r("err")(
                              "Newsletter svg mimetype is not supported",
                            );
                        }
                        var C = yield A({
                          directPath: p,
                          encFilehash:
                            (n = oe) == null ? void 0 : n.getEncfilehash(),
                          objFilehash: Q,
                          isFinalRmrRetry: k,
                          mediaKey: (l = oe) == null ? void 0 : l.getMediaKey(),
                          mediaKeyTimestamp:
                            (s = oe) == null
                              ? void 0
                              : s.getMediaKeyTimestamp(),
                          signal: e,
                          staticUrl: g,
                          mediaType: N,
                          mediaObject: P,
                          downloadOrigin: i,
                          mode: w,
                          scanLengths: _,
                          mimetype: M,
                          scansSidecar: f,
                          isViewOnce: $,
                          chatWid: t,
                          shouldSequenceDownload: U,
                          experienceIds: L,
                          downloadQpl: j,
                        });
                        ee(N)
                          ? (ae = yield o("WAWebMediaLoad").transcode(C))
                          : (ae = C);
                      }
                      if (
                        (ae.type ===
                          o("WAWebStickerMimeUtils")
                            .WhatsAppLottieStickerMimeType &&
                          (yield o(
                            "WAWebInMemoryLottieStickerCache",
                          ).extractAndSetBothLottieJSONInMemoryCache(Q, ae),
                          P.consolidate({ isLottie: !0 })),
                        ae.type === "text/vcard" && D === !0)
                      )
                        try {
                          var b = yield o("WAWebFileUtils").blobToText(ae);
                          if (b) {
                            var v = o("WAWebVcardParsingUtils").parseMultiVcard(
                              b,
                            );
                            v.length > 0
                              ? P.consolidate({ parsedVcards: v })
                              : o("WALogger")
                                  .ERROR(
                                    c ||
                                      (c =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          ["Assertion failed!"],
                                        )),
                                  )
                                  .tags("non-sad")
                                  .sendLogs(
                                    "vcard_over_mms:Failed to parse vcard over mms contents",
                                  );
                          }
                        } catch (e) {
                          o("WALogger")
                            .ERROR(
                              d ||
                                (d = babelHelpers.taggedTemplateLiteralLoose([
                                  "Failed to retrieve blob text contents",
                                ])),
                            )
                            .catching(r("getErrorSafe")(e))
                            .tags("non-sad")
                            .sendLogs(
                              "vcard_over_mms:blobToText failed with error",
                            );
                        }
                      if (
                        o("WAWebMediaDataUtils").shouldUseMediaCache(N) &&
                        o(
                          "WAWebMediaInMemoryBlobCache",
                        ).InMemoryMediaBlobCache.canFitFile(ae.size)
                      )
                        le.shouldStoreInMemory &&
                          (o(
                            "WAWebMediaInMemoryBlobCache",
                          ).InMemoryMediaBlobCache.put(Q, ae),
                          yield o(
                            "WAWebMediaGatherAndSetMetadataNoOpaque",
                          ).gatherAndSetMetadataNoOpaque(P, ae));
                      else {
                        var S = yield r("WAWebMediaOpaqueData").createFromData(
                          ae,
                          ae.type,
                        );
                        yield o(
                          "WAWebMediaDataUtils",
                        ).attachBlobAndGatherAndSetMetadata(P, S);
                      }
                      return (
                        P.consolidate({
                          downloadStage:
                            o("WAWebMediaTypes").DownloadStage.RESOLVED,
                        }),
                        P.clearDownloadPromise(N),
                        P.resolveWhenConsolidated()
                      );
                    },
                  );
                  return function () {
                    return l.apply(this, arguments);
                  };
                })(),
                q = s()
                  .catch(
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          if (
                            oe == null ||
                            !a ||
                            k === !0 ||
                            !o(
                              "WAWebMediaCryptoEligibilityUtils",
                            ).isRmrSupportedForMediaType(N) ||
                            !te(e) ||
                            !o("WAWebABProps").getABPropConfigValue(
                              "wa_web_media_download_rmr_on_hash_mismatch_enabled",
                            )
                          )
                            throw e;
                          return (
                            o("WALogger").WARN(
                              m ||
                                (m = babelHelpers.taggedTemplateLiteralLoose([
                                  "[media-download] hash mismatch, requesting re-upload, type: ",
                                  "",
                                ])),
                              N,
                            ),
                            oe.markWhetherOnServer(!1),
                            j.addPoint("hash_mismatch_rmr_start"),
                            yield o("WAWebDownloadManager").downloadManager.rmr(
                              {
                                mediaObject: P,
                                signal: new AbortController().signal,
                                rmrReason: B,
                                rmrData: F,
                              },
                            ),
                            j.addPoint("hash_mismatch_rmr_end"),
                            P.clearDownloadPromise(N),
                            O({
                              mimetype: M,
                              mediaObject: P,
                              downloadEvenIfExpensive: !1,
                              mediaType: N,
                              rmrReason: B,
                              rmrData: F,
                              downloadOrigin: i,
                              isFinalRmrRetry: !0,
                              isVcardOverMmsDocument: D,
                              mode: w,
                              isAutoDownload: E,
                              chatWid: t,
                              experienceIds: L,
                              downloadQplContext: {
                                qpl: j,
                                rmrRetryCount: K + 1,
                              },
                            })
                          );
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  )
                  .catch(
                    (l = o("WAFilteredCatch")).filteredCatch(
                      o("WAWebMmsClientErrors").MediaNotFoundError,
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            if (!oe || (oe.markWhetherOnServer(!1), !a))
                              throw e;
                            return (
                              j.addPoint("media_not_found_rmr_start"),
                              yield o(
                                "WAWebDownloadManager",
                              ).downloadManager.rmr({
                                mediaObject: P,
                                signal: new AbortController().signal,
                                rmrReason: B,
                                rmrData: F,
                              }),
                              j.addPoint("media_not_found_rmr_end"),
                              P.clearDownloadPromise(N),
                              O({
                                mimetype: M,
                                mediaObject: P,
                                downloadEvenIfExpensive: !1,
                                mediaType: N,
                                rmrReason: B,
                                rmrData: F,
                                downloadOrigin: i,
                                isFinalRmrRetry: !0,
                                isVcardOverMmsDocument: D,
                                mode: w,
                                isAutoDownload: E,
                                chatWid: t,
                                experienceIds: L,
                                downloadQplContext: {
                                  qpl: j,
                                  rmrRetryCount: K + 1,
                                },
                              })
                            );
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  )
                  .catch(
                    l.filteredCatch(
                      o("WAWebMediaLoadErrors").MediaUnsupportedError,
                      function (e) {
                        if (
                          (W(j, e),
                          P.consolidate({
                            downloadStage:
                              o("WAWebMediaTypes").DownloadStage
                                .ERROR_UNSUPPORTED,
                          }),
                          o("WALogger").WARN(
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
                                "downloadMedia: media unsupported error: ",
                                ", ",
                                ", ",
                                "",
                              ])),
                            e.name,
                            e.message,
                            M || "",
                          ),
                          o("WALogger")
                            .ERROR(
                              _ ||
                                (_ = babelHelpers.taggedTemplateLiteralLoose([
                                  "Assertion failed!",
                                ])),
                            )
                            .catching(e)
                            .tags("non-sad")
                            .sendLogs(
                              "downloadMedia: media unsupported error:",
                            ),
                          G)
                        )
                          throw e;
                      },
                    ),
                  )
                  .catch(
                    l.filteredCatch(
                      o("WAWebDownloadManagerErrors").MediaNotOnPhone,
                      function (e) {
                        if (
                          (W(j, e),
                          P.consolidate({
                            downloadStage:
                              o("WAWebMediaTypes").DownloadStage.ERROR_MISSING,
                          }),
                          G)
                        )
                          throw e;
                      },
                    ),
                  )
                  .catch(
                    l.filteredCatch([I, T], function (e) {
                      if (
                        (W(j, e),
                        P.consolidate({
                          downloadStage:
                            o("WAWebMediaTypes").DownloadStage.ERROR_MISSING,
                        }),
                        !(
                          e === I &&
                          N === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER
                        ) &&
                          (o("WALogger").WARN(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "Unexpected download error: ",
                                "",
                              ])),
                            e.name,
                          ),
                          o("WALogger")
                            .ERROR(
                              g ||
                                (g = babelHelpers.taggedTemplateLiteralLoose([
                                  "Assertion failed!",
                                ])),
                            )
                            .tags("non-sad")
                            .sendLogs("unexpected download error: " + e.name),
                          G))
                      )
                        throw e;
                    }),
                  )
                  .catch(
                    l.filteredCatch(
                      [
                        o("WAWebMediaFileErrors").MediaDecryptionError,
                        o("WAWebMediaFileErrors").MediaHashMismatch,
                      ],
                      function (e) {
                        W(j, e);
                        var t = P.progressiveStage;
                        if (
                          (ie.abort(),
                          P.consolidate({
                            downloadStage:
                              o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                            progressiveStage: null,
                          }),
                          P.notifyMsgsAsync(),
                          P.delete(),
                          o(
                            "WAWebCryptoImageStreamer",
                          ).deleteFromInMemoryMediaBlobCache(Q, t),
                          G)
                        )
                          throw e;
                      },
                    ),
                  )
                  .catch(
                    l.filteredCatch(
                      [o("WAWebHttpErrors").MmsDownloadFilehashMismatchError],
                      function (e) {
                        W(j, e);
                        var t = P.progressiveStage;
                        (ie.abort(), P.hashMismatchRetryCount++);
                        var n = 10,
                          r = P.hashMismatchRetryCount >= n;
                        if (
                          (P.consolidate({
                            downloadStage: r
                              ? o("WAWebMediaTypes").DownloadStage.ERROR_MISSING
                              : o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                            progressiveStage: null,
                          }),
                          P.notifyMsgsAsync(),
                          P.delete(),
                          o(
                            "WAWebCryptoImageStreamer",
                          ).deleteFromInMemoryMediaBlobCache(Q, t),
                          G)
                        )
                          throw e;
                      },
                    ),
                  )
                  .catch(function (e) {
                    if (
                      (W(j, e),
                      P.consolidate({
                        downloadStage:
                          o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                      }),
                      e instanceof o("WAWebMediaLoadErrors").MediaLoadError)
                    ) {
                      if (
                        (o("WALogger").WARN(
                          h ||
                            (h = babelHelpers.taggedTemplateLiteralLoose([
                              "downloadMedia: media unsupported error: ",
                              ", ",
                              ", ",
                              "",
                            ])),
                          e.name,
                          e.message,
                          M || "",
                        ),
                        o("WALogger")
                          .ERROR(
                            y ||
                              (y = babelHelpers.taggedTemplateLiteralLoose([
                                "Assertion failed!",
                              ])),
                          )
                          .catching(e)
                          .tags("non-sad")
                          .sendLogs("downloadMedia: media load error:", {
                            sampling: 0,
                          }),
                        G)
                      )
                        throw e;
                      return;
                    }
                    if (
                      e instanceof
                      o("WAWebMediaLoadErrors").TranscodeBlobTooLargeError
                    ) {
                      if (
                        (o("WALogger").WARN(
                          C ||
                            (C = babelHelpers.taggedTemplateLiteralLoose([
                              "downloadMedia: error: ",
                              ", ",
                              "",
                            ])),
                          e.message,
                          M || "",
                        ),
                        o("WALogger")
                          .ERROR(
                            b ||
                              (b = babelHelpers.taggedTemplateLiteralLoose([
                                "Assertion failed!",
                              ])),
                          )
                          .catching(e)
                          .tags("non-sad")
                          .sendLogs("downloadMedia: transcode blob too large", {
                            sampling: 0,
                          }),
                        G)
                      )
                        throw e;
                      return;
                    }
                    if (
                      e instanceof
                      o("WAWebMediaLoadErrors").UnableToPlayVideoError
                    ) {
                      if (
                        (o("WALogger").WARN(
                          v ||
                            (v = babelHelpers.taggedTemplateLiteralLoose([
                              "downloadMedia: error: ",
                              ", ",
                              "",
                            ])),
                          e.message,
                          M || "",
                        ),
                        o("WALogger")
                          .ERROR(
                            S ||
                              (S = babelHelpers.taggedTemplateLiteralLoose([
                                "Assertion failed!",
                              ])),
                          )
                          .catching(e)
                          .tags("non-sad")
                          .sendLogs("downloadMedia: unable to play video", {
                            sampling: 0,
                          }),
                        G)
                      )
                        throw e;
                      return;
                    }
                    if (e.name === o("WAAbortError").ABORT_ERROR) {
                      if (G) throw e;
                      return;
                    }
                    if (
                      (o("WALogger").LOG(
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose([
                            "downloadMedia: error",
                          ])),
                      ),
                      G)
                    )
                      throw e;
                  })
                  .then(function () {
                    j.isActive() && j.endSuccess();
                  })
                  .finally(function () {
                    P.clearDownloadPromise(N);
                  });
              return (x.set(q, le), P.setDownloadPromise(q, N), q);
            },
          ).catch(function (e) {
            throw (W(j, e), e);
          });
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      if (e.isActive()) {
        var n = r("getErrorSafe")(t);
        if (n.name === o("WAAbortError").ABORT_ERROR) {
          e.endCancel(void 0, { string: { earlyExitReason: "aborted" } });
          return;
        }
        e.endFailWithError("download_failed", n.message);
      }
    }
    function q(e) {
      return V(e, /animation\/animation.json$/);
    }
    function U(e) {
      return V(e, /animation\/animation_secondary.json$/);
    }
    function V(e, t) {
      var n = Object.keys(e).find(function (e) {
        return t.test(e);
      });
      return n != null ? e[n] : void 0;
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (k || (k = n("Promise"))).all([
              o("WABlobToArrayBuffer").blobToArrayBuffer(e),
              r("JSResourceForInteraction")("fflate")
                .__setRef("WAWebMediaMmsV4Download")
                .load(),
            ]),
            a = t[0],
            i = t[1];
          return i.unzipSync(new Uint8Array(a));
        })),
        G.apply(this, arguments)
      );
    }
    function z(e, t) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = new (o(
                "WAWebStickerLatencyWamEvent",
              ).StickerLatencyWamEvent)({
                size: e.size,
                stickerLatencyAction: o("WAWebWamEnumStickerLatencyAction")
                  .STICKER_LATENCY_ACTION.DECOMPRESSION,
              }),
              a = self.performance.now(),
              i = yield H(e),
              l = q(i);
            if (!l) throw r("err")("animationContents missing");
            var s = new TextDecoder("utf-8").decode(l),
              u = yield o("WAWebStickerUtils").isLottieStickerFirstParty(i, s);
            if (!u)
              throw (
                r("WAWebODS") == null ||
                  r("WAWebODS").incr(
                    "web.stickers.lottie_sticker_not_first_party",
                  ),
                r("err")(
                  "Primary Lottie animation failed first-party verification",
                )
              );
            ((n.stickerLatencyTtAction = Math.ceil(self.performance.now() - a)),
              n.commit());
            var c = null;
            try {
              var d = U(i);
              if (d) {
                var m = new TextDecoder("utf-8").decode(d),
                  p = yield o(
                    "WAWebStickerUtils",
                  ).isSecondaryLottieStickerFirstParty(i, m);
                p && (c = m);
              }
            } catch (e) {}
            return { primary: s, secondary: c };
          } catch (e) {
            return (
              new (o("WAWebStickerErrorWamEvent").StickerErrorWamEvent)({
                stickerErrorType: o("WAWebWamEnumStickerErrorType")
                  .STICKER_ERROR_TYPE.DECOMPRESSION,
              }).commit(),
              o("WALogger")
                .ERROR(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to extract Lottie Sticker zip file",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .tags("non-sad")
                .sendLogs(
                  "lottie_sticker:Failed to extract Lottie Sticker zip file",
                ),
              { primary: null, secondary: null }
            );
          }
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.mediaObject,
            n = e.mediaType,
            a = e.mimetype,
            i = t.filehash;
          if (
            !r("isStringNullOrEmpty")(i) &&
            t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
            !(yield J(t))
          ) {
            var l = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
                i,
              ),
              s = new AbortController();
            if (l) {
              t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
                t.consolidate({
                  downloadStage: o("WAWebMediaTypes").DownloadStage.EXISTS,
                });
              return;
            }
            var u = t.entries.getDownloadEntry(
              o(
                "WAWebMediaCryptoEligibilityUtils",
              ).isMediaCryptoExpectedForMediaType(n),
            );
            if (!u) {
              t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
                t.consolidate({
                  downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                });
              return;
            }
            if (!(u instanceof o("WAWebMediaEntry").UnencryptedMediaEntry)) {
              var c = u.getEncfilehash();
              if (
                r("isStringNullOrEmpty")(c) &&
                r("isStringNullOrEmpty")(u.directPath) &&
                r("isStringNullOrEmpty")(u.staticUrl)
              ) {
                (u.markWhetherOnServer(!1),
                  t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
                    t.consolidate({
                      downloadStage:
                        o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                    }));
                return;
              }
              try {
                (r("isStringNullOrEmpty")(u.staticUrl) &&
                  !r("isStringNullOrEmpty")(c) &&
                  (yield o(
                    "WAWebDownloadManager",
                  ).downloadManager.checkExistence({
                    directPath: u.directPath,
                    encFilehash: c,
                    signal: s.signal,
                    type: n,
                  })),
                  t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
                    t.consolidate({
                      downloadStage: o("WAWebMediaTypes").DownloadStage.EXISTS,
                    }));
              } catch (e) {
                t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
                  t.consolidate({
                    downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                  });
                var d = r("getErrorSafe")(e);
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "checkExistence: error",
                    ])),
                );
              }
            }
          }
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e, t) {
      return !!(e && t && e.length >= 2 && e.length * 10 === t.byteLength);
    }
    function Y(e) {
      var t = e.mediaObject,
        n = e.mimetype,
        a = e.scanLengths,
        i = e.scansSidecar,
        l = e.signal;
      if (!X(a, i)) return null;
      var s = new (o(
        "WAWebWebcProgressiveImageWamEvent",
      ).WebcProgressiveImageWamEvent)({ webcFirstRenderScans: 0 });
      return {
        mimetype: n,
        scansSidecar: r("nullthrows")(i),
        scanLengths: r("nullthrows")(a),
        onProgressiveUpdate: function (n) {
          l.aborted ||
            (t.downloadStage !== o("WAWebMediaTypes").DownloadStage.RESOLVED &&
              (t.consolidate({
                downloadStage:
                  o("WAWebMediaTypes").DownloadStage.PROGRESSIVE_READY,
                progressiveStage: n,
              }),
              s.webcFirstRenderScans ||
                ((s.webcFirstRenderScans = n), s.markWebcFirstRenderT()),
              n >= D.MID && !s.webcMidQualityT && s.markWebcMidQualityT(),
              n === D.FULL &&
                !s.webcFullQualityT &&
                (s.markWebcFullQualityT(), s.commit())));
        },
      };
    }
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!e.mediaBlob) return !1;
          var t = yield e.mediaBlob.validate();
          return t
            ? (e.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.RESOLVED,
              }),
              !0)
            : (e.clearBlob(),
              e.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
              }),
              e.notifyMsgsAsync(),
              !1);
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return (
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTT ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_AUDIO
      );
    }
    function te(e) {
      return e instanceof
        o("WAWebHttpErrors").MmsDownloadFilehashMismatchError ||
        e instanceof o("WAWebMediaFileErrors").MediaHashMismatch
        ? !0
        : e instanceof o("WAWebMediaFileErrors").MediaDecryptionError &&
            (e.message.includes(
              o("WAWebMediaFileErrors").HMAC_MISMATCH_ERROR,
            ) ||
              e.message.includes(
                o("WAWebMediaFileErrors").PLAINTEXT_HASH_MISMATCH_ERROR,
              ));
    }
    ((l.NoEntryAfterRMR = I),
      (l.MissingEncFilehash = T),
      (l.cancelDownloadMedia = $),
      (l.manuallySetMedia = P),
      (l.downloadMedia = O),
      (l.getContentsOfLottieJSONFile = q),
      (l.extractBothLottieJSON = z),
      (l.checkExistence = K));
  },
  98,
);
