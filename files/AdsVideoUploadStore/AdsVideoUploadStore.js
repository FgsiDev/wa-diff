__d(
  "AdsVideoUploadStore",
  [
    "invariant",
    "AdsCancelBulkVideosUploadActionFlux",
    "AdsDLOAssetFeedDismissDialogDataActionFlux",
    "AdsDataAtom",
    "AdsDraftDraftDeleteBatchDataActionFlux",
    "AdsDraftDraftPublishDataActionFlux",
    "AdsUEditorAdgroupCancelVideoUploadActionFlux",
    "AdsUEditorAdgroupSetChildVideoIDDataActionFlux",
    "AdsUEditorAdgroupSetVideoIDDataActionFlux",
    "AdsVideoBackgroundUploadUtils",
    "AdsVideoEncodingSuccessDataActionFlux",
    "AdsVideoErrorUtils",
    "AdsVideoItemClickedDataActionFlux",
    "AdsVideoUploadCancelDataActionFlux",
    "AdsVideoUploadConsts",
    "AdsVideoUploadErrorDataActionFlux",
    "AdsVideoUploadFinishDataActionFlux",
    "AdsVideoUploadProgressDataActionFlux",
    "AdsVideoUploadStartDataAction",
    "AdsVideoUploadStartDataActionFlux",
    "AdsVideoUploadStatus",
    "AdsVideoUploadStoreState",
    "AdsVideoUploadSuccessDataActionFlux",
    "AdsVideoUploadUtil",
    "FBLogger",
    "FluxMapStore",
    "JSResource",
    "VideoUploadFile",
    "VideoUploadStartEntryPoint",
    "ifRequired",
    "immutable",
    "isTruthy",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(e) {
      for (var t of e) {
        var n = t[0],
          r = t[1];
        r.__internalUploader && r.__internalUploader.abort();
      }
      return e.clear();
    }
    function c(e, t, n, r, o, a) {
      return e !== !0
        ? {
            isOriginallySphericalVideo: r,
            sphericalSiblingVideoID: o,
            nonSphericalSiblingVideoID: a,
          }
        : t === !0
          ? {
              isOriginallySphericalVideo: !0,
              sphericalSiblingVideoID: n,
              nonSphericalSiblingVideoID: null,
            }
          : r === !0
            ? {
                isOriginallySphericalVideo: r,
                sphericalSiblingVideoID: o,
                nonSphericalSiblingVideoID: n,
              }
            : {
                isOriginallySphericalVideo: r,
                sphericalSiblingVideoID: o,
                nonSphericalSiblingVideoID: a,
              };
    }
    function d(e) {
      return e.videoUploadDLOInfo
        ? (e.__internalUploader && e.__internalUploader.abort(), !1)
        : !0;
    }
    var m = (function (t) {
      function n() {
        return t.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.getInitialState = function () {
          return r("immutable").Map();
        }),
        (a.__getActionTypes = function () {
          return [
            o("AdsUEditorAdgroupSetVideoIDDataActionFlux").actionType,
            o("AdsUEditorAdgroupSetChildVideoIDDataActionFlux").actionType,
            o("AdsVideoUploadStartDataActionFlux").actionType,
            o("AdsVideoEncodingSuccessDataActionFlux").actionType,
            o("AdsVideoItemClickedDataActionFlux").actionType,
            o("AdsVideoUploadErrorDataActionFlux").actionType,
            o("AdsVideoUploadProgressDataActionFlux").actionType,
            o("AdsVideoUploadSuccessDataActionFlux").actionType,
            o("AdsVideoUploadCancelDataActionFlux").actionType,
            o("AdsDraftDraftPublishDataActionFlux").actionType,
            o("AdsDraftDraftDeleteBatchDataActionFlux").actionType,
            o("AdsVideoUploadFinishDataActionFlux").actionType,
            o("AdsDLOAssetFeedDismissDialogDataActionFlux").actionType,
            o("AdsUEditorAdgroupCancelVideoUploadActionFlux").actionType,
            o("AdsCancelBulkVideosUploadActionFlux").actionType,
          ];
        }),
        (a.reduce = function (t, n) {
          var e = this,
            a = n.action,
            i =
              a.uploaderKey != null && a.uploaderKey !== ""
                ? String(a.uploaderKey)
                : a.type === o("AdsVideoUploadStartDataActionFlux").actionType
                  ? o("AdsVideoUploadUtil").generateUploaderKey(t.size)
                  : o("AdsVideoUploadConsts").DEFAULT_UPLOADER_KEY,
            l = t.get(i),
            s = l != null ? l : new (r("AdsVideoUploadStoreState"))(),
            m = t;
          switch ((l == null && (m = m.set(i, s)), a.type)) {
            case o("AdsUEditorAdgroupSetVideoIDDataActionFlux").actionType:
            case o("AdsUEditorAdgroupSetChildVideoIDDataActionFlux").actionType:
              var p = s.videoBackgroundUploadInfo || {},
                _ = p.videoUploadingTabID;
              return a.adgroupIDs &&
                o(
                  "AdsVideoBackgroundUploadUtils",
                ).areCurrentAdgroupsUploadingVideo(a.adgroupIDs, s) &&
                (a.index == null || a.index === 0 || a.index === _)
                ? m.set(
                    i,
                    s.withMutations(function (e) {
                      e.set("errorMessage", null).set(
                        "newlyUploadedVideoErrors",
                        null,
                      );
                    }),
                  )
                : m;
            case o("AdsVideoUploadStartDataActionFlux").actionType:
              return (
                r("ifRequired")(
                  "AdsVideoUploaderWrapper",
                  function (t) {
                    s = e.$AdsVideoUploadStore$p_1(s, a, i);
                  },
                  function () {
                    s = e.$AdsVideoUploadStore$p_2(s, a, i);
                  },
                ),
                t.set(i, s)
              );
            case o("AdsVideoEncodingSuccessDataActionFlux").actionType:
              var f;
              if (s.videoBackgroundUploadInfo) {
                var g = s.videoBackgroundUploadInfo,
                  h = g.bulkBuyingType,
                  y = g.bulkOptimizationGoal,
                  C = g.isMPA,
                  b = g.objective,
                  v = g.placementSpecs,
                  S =
                    s.videoUploadPACInfo && s.videoUploadPACInfo.placementList;
                f = o("AdsVideoErrorUtils").getNewlyUploadedVideoWarnErrors(
                  C,
                  a.video,
                  h,
                  y,
                  b,
                  S,
                  v,
                );
              }
              var R = c(
                a.isVideoFileUploaded,
                a.video.spherical,
                a.video.id,
                s.isOriginallySphericalVideo,
                s.sphericalSiblingVideoID,
                s.nonSphericalSiblingVideoID,
              );
              return t.set(
                i,
                s.withMutations(function (e) {
                  e.set("errorMessage", null)
                    .set("newlyUploadedVideoErrors", f)
                    .set("videoBackgroundUploadInfo", null)
                    .set("videoUploadPACInfo", null)
                    .set("videoUploadDLOInfo", null)
                    .set(
                      "isOriginallySphericalVideo",
                      R.isOriginallySphericalVideo,
                    )
                    .set(
                      "nonSphericalSiblingVideoID",
                      R.nonSphericalSiblingVideoID,
                    )
                    .set("sphericalSiblingVideoID", R.sphericalSiblingVideoID)
                    .merge({
                      encodingTime:
                        e.__internalUploader &&
                        e.__internalUploader.getEncodingTime(),
                      recentUploadedVideoID_DO_NOT_USE: a.video.id,
                      status: r("AdsVideoUploadStatus").NONE,
                    });
                }),
              );
            case o("AdsVideoItemClickedDataActionFlux").actionType:
              return t.set(
                i,
                s.merge({ recentUploadedVideoID_DO_NOT_USE: null }),
              );
            case o("AdsVideoUploadErrorDataActionFlux").actionType:
              return t.set(
                i,
                s.withMutations(function (e) {
                  e.set("errorMessage", a.errorMessage)
                    .set("newlyUploadedVideoErrors", null)
                    .set("status", r("AdsVideoUploadStatus").ERROR)
                    .set(
                      "uploadTime",
                      e.__internalUploader &&
                        e.__internalUploader.getUploadTime(),
                    )
                    .set("videoBackgroundUploadInfo", null)
                    .set("videoUploadPACInfo", null)
                    .set("videoUploadDLOInfo", null);
                }),
              );
            case o("AdsVideoUploadProgressDataActionFlux").actionType:
              return t.set(
                i,
                s.merge(
                  a.isBytesFinished === !0
                    ? {
                        progress: 1,
                        status: r("AdsVideoUploadStatus").ENCODING,
                      }
                    : { progress: a.progress },
                ),
              );
            case o("AdsVideoUploadSuccessDataActionFlux").actionType:
              if (s.__internalUploader) {
                var L = s.__internalUploader;
                s = s.merge({
                  progress: 1,
                  status: r("AdsVideoUploadStatus").ENCODING,
                  title: L.getVideoTitle() || s.title,
                  uploadTime: L.getUploadTime(),
                });
              }
              return t.set(i, s);
            case o("AdsUEditorAdgroupCancelVideoUploadActionFlux").actionType:
            case o("AdsVideoUploadCancelDataActionFlux").actionType:
            case o("AdsCancelBulkVideosUploadActionFlux").actionType:
              return r("isTruthy")(a.uploaderKey)
                ? (s.__internalUploader && s.__internalUploader.abort(),
                  t.delete(i))
                : u(t);
            case o("AdsDraftDraftPublishDataActionFlux").actionType:
            case o("AdsDraftDraftDeleteBatchDataActionFlux").actionType:
              return u(t);
            case o("AdsVideoUploadFinishDataActionFlux").actionType:
              return t.clear();
            case o("AdsDLOAssetFeedDismissDialogDataActionFlux").actionType:
              return t.filter(d);
            default:
              return t;
          }
        }),
        (a.$AdsVideoUploadStore$p_1 = function (t, n, o) {
          var e, a, i, l, u, c, d, m, p, _, f;
          (r("requireWeak")("AdsVideoUploaderWrapper", function (e) {
            f = e;
          }),
            f || s(0, 4434));
          var g =
              (e = n.context) == null ? void 0 : e.videoBackgroundUploadInfo,
            h = (a = n.context) == null ? void 0 : a.videoUploadPACInfo,
            y = (i = n.context) == null ? void 0 : i.videoUploadDLOInfo,
            C = (l = n.context) == null ? void 0 : l.assetKey,
            b =
              n.isLocalVideoUpload === !0
                ? (u = n.context) == null
                  ? void 0
                  : u.videoUploadInfo
                : void 0,
            v = new f(
              o,
              g,
              h,
              y,
              C,
              n.hostID,
              n.waterfallID,
              n.reEncodingFormat,
              n.originalSphericalVideoID,
              (c = n.isIGMediaPickerSource) != null ? c : !1,
              (d = n.isLocalVideoUpload) != null ? d : !1,
              b,
              (m = n.isMultiUploadEligible) != null ? m : !1,
              (p = n.isBaseAsset) != null ? p : !1,
              (_ = n.isBulkUpload) != null ? _ : !1,
            ),
            S = t.get("fileHandle"),
            R = t.get("uploadedUrl"),
            L = n.isSphericalReupload
              ? t.get("isOriginallySphericalVideo")
              : !1,
            E = n.isSphericalReupload ? 0 : t.get("progress"),
            k = t.merge({ __internalUploader: v });
          if (
            k.status !== r("AdsVideoUploadStatus").NONE &&
            k.status !== r("AdsVideoUploadStatus").BOOTLOADING &&
            k.status !== r("AdsVideoUploadStatus").ERROR
          )
            return (
              r("FBLogger")("ads")
                .blameToPreviousFile()
                .warn(
                  "Trying to upload more than one video with a single uploader: %s",
                  k.status,
                ),
              t
            );
          if (n.file)
            ((S = n.file),
              (R = null),
              v.upload(
                r("VideoUploadFile").fromFile(S),
                n.accountID,
                n.businessFolderToken,
                n.adgroupIDs,
              ));
          else if (n.instagramStoryID != null && n.instagramStoryID !== "") {
            var I;
            v.uploadInstagramVideo(
              n.instagramStoryID,
              (I = n.title) != null ? I : "",
              n.accountID,
            );
          } else if (
            n.sourceInstagramMediaID != null &&
            n.sourceInstagramMediaID !== ""
          )
            if (
              n.childVideoSourceInstagramMediaID != null &&
              n.childVideoSourceInstagramMediaID !== ""
            ) {
              var T;
              v.uploadSourceInstagramMediaVideo(
                n.childVideoSourceInstagramMediaID,
                (T = n.title) != null ? T : "",
                n.accountID,
                n.adgroupIDs,
                n.isPartnershipAd,
                n.sponsorInstagramID,
                n.partnershipAdAdCode,
                n.selectedAudioSpec,
              );
            } else {
              var D;
              v.uploadSourceInstagramMediaVideo(
                n.sourceInstagramMediaID,
                (D = n.title) != null ? D : "",
                n.accountID,
                n.adgroupIDs,
                n.isPartnershipAd,
                n.sponsorInstagramID,
                n.partnershipAdAdCode,
                n.selectedAudioSpec,
              );
            }
          else if (
            n.editingVideo === !0 &&
            n.videoID != null &&
            n.videoID !== ""
          ) {
            var x;
            v.uploadEditedVideo(
              (x = n.title) != null ? x : "",
              n.accountID,
              n.videoID,
            );
          } else if (n.assetUploadSpec != null)
            v.remoteUploadWithAssetSpec(n.assetUploadSpec, n.accountID);
          else {
            var $;
            (n.url != null || s(0, 4436),
              (R = n.url),
              (S = null),
              v.remoteUpload(
                n.url,
                ($ = n.title) != null ? $ : "",
                n.accountID,
              ));
          }
          return k.withMutations(function (e) {
            var t;
            e.set("videoBackgroundUploadInfo", g)
              .set("videoUploadPACInfo", h)
              .set("videoUploadDLOInfo", y)
              .set(
                "entryPoint",
                n.isIGMediaPickerSource === !0
                  ? r("VideoUploadStartEntryPoint").INSTAGRAM_VIDEO
                  : n.entryPoint,
              )
              .set("progress", E)
              .set("fileHandle", S)
              .set("uploadedUrl", R)
              .set("isOriginallySphericalVideo", L)
              .merge({
                status: r("AdsVideoUploadStatus").UPLOADING,
                title: (t = v.getVideoTitle()) != null ? t : void 0,
                uploaderKey: o,
              });
          });
        }),
        (a.$AdsVideoUploadStore$p_2 = function (n, o, a) {
          return (
            r("JSResource").loadAll(
              [
                r("JSResource")("AdsVideoUploaderWrapper").__setRef(
                  "AdsVideoUploadStore",
                ),
              ],
              function () {
                (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                  function () {
                    r("AdsVideoUploadStartDataAction").dispatch(
                      babelHelpers.extends({}, o, { uploaderKey: a }),
                      {
                        line: "586",
                        module: "AdsVideoUploadStore.js",
                        moduleID: i.id,
                      },
                    );
                  },
                );
              },
            ),
            n.set("status", r("AdsVideoUploadStatus").BOOTLOADING)
          );
        }),
        n
      );
    })(r("FluxMapStore"));
    m.__moduleID = i.id;
    var p = new m(e || (e = r("AdsDataAtom")));
    l.default = p;
  },
  98,
);
