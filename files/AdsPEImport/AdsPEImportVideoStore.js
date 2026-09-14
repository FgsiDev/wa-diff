__d(
  "AdsPEImportVideoStore",
  [
    "errorCode",
    "fbt",
    "AdsDataAtom",
    "AdsManagerErrorUtils",
    "AdsPEImportCriticalError",
    "AdsPEServerImportActions",
    "AdsVideoActions",
    "AdsVideoEncodingSuccessDataActionFlux",
    "AdsVideoUploadErrorDataActionFlux",
    "AdsVideoUploadProgressDataActionFlux",
    "AdsVideoUploadStore",
    "AdsVideoUploadUtil",
    "ExecutionEnvironment",
    "FluxStore",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = "import_export_video_upload",
      m = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.videoUploadIndex = 1),
            (n.token = ""),
            (n.intervalID = null),
            (n.fileMap = new Map()),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__getActionTypes = function () {
            return [
              o("AdsVideoEncodingSuccessDataActionFlux").actionType,
              o("AdsVideoUploadErrorDataActionFlux").actionType,
              o("AdsVideoUploadProgressDataActionFlux").actionType,
            ];
          }),
          (a.__getDependencyStores = function () {
            return [r("AdsVideoUploadStore")];
          }),
          (a.__onDispatch = function (t) {
            var e,
              n = t.action;
            if (
              (this.getDispatcher().waitFor(this.getDependencyDispatchTokens()),
              !!this.fileMap.has((e = n.uploaderKey) != null ? e : ""))
            ) {
              var a = r("AdsVideoUploadStore").getState();
              e: {
                var i = n;
                if (
                  ((typeof i == "object" && i !== null) ||
                    typeof i == "function") &&
                  "actionType" in i &&
                  i.actionType ===
                    o("AdsVideoUploadProgressDataActionFlux").actionType
                ) {
                  this.$AdsPEImportVideoStore$p_1(a);
                  break e;
                }
                if (
                  ((typeof i == "object" && i !== null) ||
                    typeof i == "function") &&
                  "actionType" in i &&
                  i.actionType ===
                    o("AdsVideoEncodingSuccessDataActionFlux").actionType
                ) {
                  var l = i;
                  this.$AdsPEImportVideoStore$p_2(l, a);
                  break e;
                }
                if (
                  ((typeof i == "object" && i !== null) ||
                    typeof i == "function") &&
                  "actionType" in i &&
                  i.actionType ===
                    o("AdsVideoUploadErrorDataActionFlux").actionType
                ) {
                  var s = i;
                  this.$AdsPEImportVideoStore$p_3(s, a);
                  break e;
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    i,
                );
              }
            }
          }),
          (a.startBulkVideoUpload = function (n, a, i) {
            var t = this;
            ((this.token = i),
              (this.fileMap = o("AdsVideoUploadUtil").generateFileMap(
                this.videoUploadIndex,
                d,
                a,
              )),
              (this.videoUploadIndex += this.fileMap.size),
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  o("AdsVideoActions").startUploadWithFileMap(t.fileMap, n);
                },
              ));
          }),
          (a.cancelBulkVideoUpload = function () {
            var t = this;
            this.fileMap.size > 0 &&
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  o("AdsVideoActions").cancelUploadWithFileMap(t.fileMap);
                },
              );
          }),
          (a.$AdsPEImportVideoStore$p_1 = function (t) {
            var e = o("AdsVideoUploadUtil").calculateBulkVideoUploadProgress(
              t,
              this.fileMap,
            );
            o("AdsPEServerImportActions").dispatchAfterCurrentCycle(
              new (o("AdsPEServerImportActions").VideoUploadProgressed)(e / 2),
            );
          }),
          (a.$AdsPEImportVideoStore$p_2 = function (t, n) {
            var e;
            o("AdsPEServerImportActions").dispatchAfterCurrentCycle(
              new (o("AdsPEServerImportActions").VideoUploaded)(
                r("nullthrows")(n.get((e = t.uploaderKey) != null ? e : ""))
                  .title,
                t.video.id,
                o("AdsVideoUploadUtil").isBulkVideoUploadComplete(
                  n,
                  this.fileMap,
                ),
              ),
            );
          }),
          (a.$AdsPEImportVideoStore$p_3 = function (t, n) {
            var e, a;
            o("AdsPEServerImportActions").dispatchAfterCurrentCycle(
              new (o("AdsPEServerImportActions").VideoUploadErrored)(
                this.token,
                new (r("AdsPEImportCriticalError"))(
                  1792112,
                  u._(/*BTDS*/ "'{filename}' failed to upload", [
                    u._param(
                      "filename",
                      r("nullthrows")(
                        n.get((e = t.uploaderKey) != null ? e : ""),
                      ).title,
                    ),
                  ]),
                  (a = t.errorMessage) != null ? a : "",
                  !1,
                  "",
                  o("AdsManagerErrorUtils").getOpesMIDs(t.error),
                ),
                o("AdsVideoUploadUtil").isBulkVideoUploadComplete(
                  n,
                  this.fileMap,
                ),
              ),
            );
          }),
          (a.updateVideoProgressBar = function () {
            if ((c || (c = r("ExecutionEnvironment"))).canUseDOM) {
              var e = 0,
                t = function (t, n, r, o) {
                  return n + (r - n) * (1 - Math.exp(-o * t));
                };
              this.intervalID = window.setInterval(function () {
                (e++,
                  o("AdsPEServerImportActions").dispatch(
                    new (o("AdsPEServerImportActions").VideoUploadProgressed)(
                      t(e, 0.55, 0.95, 0.05),
                    ),
                  ));
              }, 2e3);
            }
          }),
          (a.clearVideoProgressInterval = function () {
            (c || (c = r("ExecutionEnvironment"))).canUseDOM &&
              this.intervalID != null &&
              (window.clearInterval(this.intervalID), (this.intervalID = null));
          }),
          n
        );
      })(r("FluxStore"));
    m.__moduleID = i.id;
    var p = new m();
    l.default = p;
  },
  226,
);
