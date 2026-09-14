__d(
  "AdsManagerEPAPShadowTransformer",
  [
    "AdsALFlowletManager",
    "AdsAPTransformAPIRequest",
    "AdsManagerEntryPointUtils",
    "IGraphAPICore",
    "QuickPerformanceLogger",
    "getErrorSafe",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new RegExp(/\d+/g),
      c = (function () {
        function t(t, n, o) {
          var a = this;
          (o === void 0 && (o = !1),
            (this.$1 = function (t, n, o, i, l) {
              var s = (e || (e = r("AdsALFlowletManager"))).top();
              s != null &&
                s
                  .getFullName()
                  .includes("api_prefetch(" + a.interaction + ")") &&
                a.$2({ method: "get", params: o, path: n, source: l });
            }),
            (this.runner = t),
            (this.interaction = n),
            (this.hasInteractionStarted = o),
            (this.preloadsToTransform = []),
            r("IGraphAPICore").promiseGet.onBeforeCallObserverAdd(this.$1));
        }
        var n = t.prototype;
        return (
          (n.$2 = function (t) {
            var e;
            if (!this.hasInteractionStarted) {
              this.preloadsToTransform.push(t);
              return;
            }
            var n = {
                string: {
                  interactionID:
                    (e = this.runner.interactionID) != null ? e : "unknown",
                },
              },
              a = o("AdsManagerEntryPointUtils").getAnnotations(
                this.runner.interaction,
                this.runner.loggingAnnotations,
              );
            try {
              var i,
                l = t.path,
                c = /^(\/v\d+\.\d+)\/(.*)/.exec(l);
              c != null
                ? (l = [c[1], c[2].replace(u, "FBID")].join("/"))
                : (l = l.replace(u, "FBID"));
              var d = [
                (i = t.source) != null ? i : "unknownSource",
                t.method,
                l,
              ].join("%%%");
              n.string.queryKey = d;
              var m = t.params,
                p =
                  m && !(m instanceof FormData)
                    ? o("AdsAPTransformAPIRequest").transformRequestParams(m)
                    : null;
              n.string.paramsTemplate = p != null ? p : "null";
              var _ = o("AdsAPTransformAPIRequest").transformRequestPath(
                t.path,
              );
              n.string.pathTemplate = _ != null ? _ : "null";
            } catch (e) {
              n.string.exceptionDuringTransform = r("getErrorSafe")(e).message;
            }
            (s || (s = r("QuickPerformanceLogger"))).markEvent(
              r("qpl")._(41485867, "1866"),
              "transformation",
              7,
              {
                annotations: o("AdsManagerEntryPointUtils").mergeAnnotations(
                  a,
                  n,
                ),
              },
            );
          }),
          (n.onRealInteractionStart = function () {
            this.hasInteractionStarted = !0;
            for (var e of this.preloadsToTransform) this.$2(e);
            this.preloadsToTransform = [];
          }),
          (n.onInteractionFinally = function () {
            ((this.hasInteractionStarted = !1),
              (this.preloadsToTransform = []),
              r("IGraphAPICore").promiseGet.onBeforeCallObserverRemove(
                this.$1,
              ));
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
