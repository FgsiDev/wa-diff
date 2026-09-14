__d(
  "AdsLocalVideoSelectors",
  [
    "AdsLocalVideoProvider",
    "adsCreateSelector",
    "adsUEditorInjectEditingAdgroupContext",
    "adsUEditorSelectedAdgroupIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (e = r("adsCreateSelector"))(
        [
          (s = r("AdsLocalVideoProvider")).toFluxSelector(),
          (u = r("adsUEditorSelectedAdgroupIDsSelector")),
        ],
        function (t, n) {
          var e;
          return n.length !== 1
            ? null
            : (e = t.get(n[0])) == null
              ? void 0
              : e.videoURL;
        },
        { name: i.id + ".selectLocalVideoURL" },
      ),
      d = e(
        [s.toFluxSelector(), u],
        function (t, n) {
          return n.length !== 1 ? null : t.get(n[0]);
        },
        { name: i.id + ".selectLocalVideoState" },
      ),
      m = e(
        [d],
        function (t) {
          return t != null;
        },
        { name: i.id + ".selectHasLocalVideo" },
      ),
      p = e(
        [s.toFluxSelector(), u],
        function (t, n) {
          var e;
          return n.length !== 1
            ? !1
            : ((e = t.get(n[0])) == null ? void 0 : e.encodingReady) === !0;
        },
        { name: i.id + ".isEncodingFinished" },
      ),
      _ = e(
        [m, p],
        function (t, n) {
          return t && !n;
        },
        { name: i.id + ".isLocalVideoUploading" },
      ),
      f = e(
        [m, p],
        function (t, n) {
          return t && !n;
        },
        { name: i.id + ".shouldUseProxyVideo" },
      ),
      g = e(
        [s.toFluxSelector(), u],
        function (t, n) {
          var e;
          return n.length !== 1
            ? null
            : (e = t.get(n[0])) == null
              ? void 0
              : e.thumbnailURL;
        },
        { name: i.id + ".selectLocalVideoThumbnailURL" },
      ),
      h = e(
        [s.toFluxSelector(), r("adsUEditorInjectEditingAdgroupContext")(u)],
        function (t, n) {
          return n.length === 1 ? t.get(n[0]) : null;
        },
        { name: i.id + ".selectLocalVideoStateSelector" },
      ),
      y = e(
        [h],
        function (t) {
          return {
            hasLocalVideo: t != null,
            localVideoURL: t == null ? void 0 : t.videoURL,
            localVideoHeight: t == null ? void 0 : t.videoHeight,
            localVideoWidth: t == null ? void 0 : t.videoWidth,
            localThumbnailURL: t == null ? void 0 : t.thumbnailURL,
          };
        },
        { name: i.id + ".localVideoUploadSelector" },
      );
    ((l.selectLocalVideoURL = c),
      (l.selectLocalVideoState = d),
      (l.selectHasLocalVideo = m),
      (l.isEncodingFinished = p),
      (l.isLocalVideoUploading = _),
      (l.shouldUseProxyVideo = f),
      (l.selectLocalVideoThumbnailURL = g),
      (l.localVideoUploadSelector = y));
  },
  98,
);
