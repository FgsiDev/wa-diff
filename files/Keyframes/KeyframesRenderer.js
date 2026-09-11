__d(
  "KeyframesRenderer",
  [
    "invariant",
    "ErrorGuard",
    "KFLoaderUtils",
    "KeyframesCanvasPolyfills",
    "KeyframesCanvasPool",
    "KeyframesCanvasUtils",
    "KeyframesDimensions",
    "KeyframesLoop",
    "KeyframesTrackMattes",
    "KeyframesTween",
    "KeyframesVideoManager",
    "Promise",
    "asyncToGeneratorRuntime",
    "gkx",
    "nullthrows",
    "performanceNow",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = 1,
      p = { ERROR_FRAMEDROP: "ERROR_FRAMEDROP" },
      _ = 60,
      f = 1e3 / _,
      g = 1,
      h = "source-over";
    function y(e, t) {
      return r("gkx")("21037")
        ? (c || (c = r("ErrorGuard"))).guard(e, { name: t })
        : e;
    }
    var C = (function () {
      function e(e, t) {
        (t === void 0 && (t = 100),
          (this.$3 = !1),
          (this.$4 = 0),
          (this.$1 = e),
          (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.callOrIgnoreThrottled = function () {
          if ((d || (d = r("performanceNow")))() >= this.$4) {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            this.$5(t);
          } else this.$3 = !0;
        }),
        (t.callIfIgnored = function () {
          if (this.$3) {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            this.$5(t);
          }
        }),
        (t.callImmediately = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          this.$5(t);
        }),
        (t.resetThrottling = function () {
          this.$4 = 0;
        }),
        (t.$5 = function (t) {
          ((this.$3 = !1),
            (this.$4 = (d || (d = r("performanceNow")))() + this.$2),
            this.$1.apply(null, t));
        }),
        e
      );
    })();
    function b(e, t) {
      if (e.pluginsLoader) {
        e.pluginsLoader.instances.forEach(t);
        for (var n = e.subassets.length - 1; 0 <= n; n--) b(e.subassets[n], t);
      }
    }
    function v(e, t, n, r) {
      if (e.pluginsLoader) {
        for (var o = e.pluginsLoader.instances.length - 1; 0 <= o; o--)
          e.pluginsLoader.instances[o].animationWillRenderLayer(t, n, r);
        for (var a = e.subassets.length - 1; 0 <= a; a--)
          v(e.subassets[a], t, n, r);
      }
    }
    function S(e, t, n, r) {
      (e.save(),
        e.beginPath(),
        e.arc(t, n, r, 0, 2 * Math.PI, !0),
        e.closePath(),
        e.clip(),
        e.clearRect(t - r, n - r, r * 2, r * 2),
        e.restore());
    }
    function R(e, t, n, r) {
      var a,
        i = (u || (u = o("KeyframesTween"))).maybeTweenPoint2(e, t.rampStart()),
        l = u.maybeTweenPoint2(e, t.rampEnd()),
        s = t.colors(),
        c = t.positions();
      if (
        (s && c
          ? ((s = (u || (u = o("KeyframesTween"))).maybeTweenColorArray(e, s)),
            (c = u.maybeTweenScalarArray(e, c)))
          : ((s = [
              (u || (u = o("KeyframesTween"))).maybeTweenColor(
                e,
                t.colorStart(),
              ),
              u.maybeTweenColor(e, t.colorEnd()),
            ]),
            (c = [0, 1])),
        t.type() === m)
      ) {
        var d = t.highlightLength();
        d =
          d !== null
            ? (u || (u = o("KeyframesTween"))).maybeTweenScalar(e, d)
            : 0;
        var p = t.highlightAngle();
        p =
          p !== null
            ? (u || (u = o("KeyframesTween"))).maybeTweenScalar(
                e,
                t.highlightAngle(),
              )
            : 0;
        var _ = i.x,
          f = i.y,
          g = Math.sqrt(Math.pow(i.x - l.x, 2) + Math.pow(i.y - l.y, 2)),
          h = Math.acos((l.x - _) / g),
          y = _ + g * d * Math.cos(h - p),
          C = f - g * d * Math.sin(h - p),
          b = 0;
        (d !== 0 &&
          (n.clip(),
          (n.fillStyle = o("KeyframesCanvasUtils").getCanvasStyle(
            s[s.length - 1],
          )),
          n.fill(),
          S(n, _, f, g)),
          (a = n.createRadialGradient(y, C, b, _, f, g)));
      } else a = n.createLinearGradient(i.x, i.y, l.x, l.y);
      for (var v = 0, R = s.length; v < R; v++)
        a.addColorStop(c[v], o("KeyframesCanvasUtils").getCanvasStyle(s[v]));
      return a;
    }
    function L(e, t, n, a, i, l, s, c, d) {
      if (
        (d === void 0 && (d = g),
        !(s < Math.max(l.fromProgress(), 0) || s > Math.min(l.toProgress(), 1)))
      ) {
        try {
          c && c.maybeInstantiatePluginsForLayer(l);
        } catch (e) {}
        var m = e,
          p,
          _ = l.isTrackMatte(),
          f = l.trackMatteType();
        if (_ || f !== 0) {
          var y = m.getTransform();
          ((p = t.getCanvas()),
            p.ctx.setTransform(y.a, y.b, y.c, y.d, y.e, y.f),
            (p.isTrackMatte = _),
            (p.trackMatteType = f),
            (p.ctx.globalCompositeOperation = h),
            (m = p.ctx));
        }
        m.save();
        var C = l.position();
        if (C) {
          var b = (u || (u = o("KeyframesTween"))).tweenPointOnPath(s, C),
            v = b.x,
            S = b.y;
          m.translate(v, S);
        } else {
          var E = l.xPosition();
          E &&
            m.translate(
              (u || (u = o("KeyframesTween"))).maybeTweenScalar(s, E),
              0,
            );
          var k = l.yPosition();
          k &&
            m.translate(
              0,
              (u || (u = o("KeyframesTween"))).maybeTweenScalar(s, k),
            );
        }
        var I = l.rotation();
        I && m.rotate((u || (u = o("KeyframesTween"))).maybeTweenScalar(s, I));
        var T = l.scale();
        if (T) {
          var D = (u || (u = o("KeyframesTween"))).maybeTweenPoint2(s, T),
            x = D.x,
            $ = D.y;
          m.scale(x, $);
        }
        var P = l.anchorPoint();
        if (P) {
          var N = (u || (u = o("KeyframesTween"))).maybeTweenPoint2(s, P),
            M = N.x,
            w = N.y;
          m.translate(-M, -w);
        }
        var A = l.opacity();
        ((A =
          A != null
            ? (u || (u = o("KeyframesTween"))).maybeTweenScalar(s, A)
            : 1),
          (m.globalAlpha = A * d));
        var F = !1;
        if (c) {
          var O = c.getPluginsForLayer(l.id());
          if (O)
            for (var B = 0; B < O.length; B++)
              (O[B].render(m, s), (F = F || O[B].rendersLayer));
        }
        if (
          (l.clippingPath() &&
            (o("KeyframesCanvasUtils").drawPath(
              m,
              (u || (u = o("KeyframesTween"))).maybeTweenPath(
                s,
                l.clippingPath(),
              ),
            ),
            m.clip()),
          !F && l.path())
        ) {
          o("KeyframesCanvasUtils").drawPath(
            m,
            (u || (u = o("KeyframesTween"))).maybeTweenPath(s, l.path()),
          );
          var W = l.gradient(),
            q = l.fillColor(),
            U = !1,
            V = !1;
          if (
            (W
              ? ((m.fillStyle = R(s, W, m)), (U = !0))
              : q &&
                ((m.fillStyle = o("KeyframesCanvasUtils").getCanvasStyle(
                  (u || (u = o("KeyframesTween"))).maybeTweenColor(s, q),
                )),
                (U = !0)),
            l.strokeWidth())
          ) {
            var H = (u || (u = o("KeyframesTween"))).maybeTweenScalar(
              s,
              l.strokeWidth(),
            );
            H > 0 &&
              ((m.strokeStyle = o("KeyframesCanvasUtils").getCanvasStyle(
                (u || (u = o("KeyframesTween"))).maybeTweenColor(
                  s,
                  l.strokeColor(),
                ),
              )),
              (m.lineJoin = o("KeyframesCanvasUtils").LINE_JOINS[
                l.strokeLineJoin()
              ]),
              (m.lineCap = o("KeyframesCanvasUtils").getCanvasLineCap(
                l.strokeLineCap(),
              )),
              (m.lineWidth = H),
              (V = !0));
          }
          l.vectorCompositeOrder() === 0
            ? (U && m.fill(), V && m.stroke())
            : (V && m.stroke(), U && m.fill());
        }
        var G = l.bitmapIndex(),
          z = n[G];
        z && z.width !== 0 && z.height !== 0 && m.drawImage(z, 0, 0);
        var j = l.videoIndex(),
          K = a[j];
        K != null && m.drawImage(K, 0, 0, K.width, K.height);
        var Q = l.subdocumentIndex();
        if (i[Q]) {
          var X = i[Q].doc.size();
          (m.save(),
            m.beginPath(),
            m.rect(0, 0, X.width(), X.height()),
            m.clip(),
            L(
              m,
              t,
              i[Q].bitmaps,
              i[Q].videos,
              i[Q].subassets,
              i[Q].doc.rootLayer(),
              s - l.progressOffset(),
              i[Q].pluginsLoader,
              A * d,
            ),
            m.restore());
        }
        for (var Y, J, Z = 0; Z < l.sublayersLength(); Z++) {
          var ee = L(m, t, n, a, i, l.sublayers(Z), s, c, A * d);
          if (!Y && ee && ee.trackMatteType !== void 0) Y = ee;
          else if (Y && ee && ee.isTrackMatte !== void 0) {
            var te = m.getTransform();
            (m.setTransform(1, 0, 0, 1, 0, 0),
              Y.ctx.setTransform(1, 0, 0, 1, 0, 0),
              (J = ee),
              (Y.ctx.globalCompositeOperation = r("KeyframesTrackMattes")[
                Y.trackMatteType === void 0 ? 1 : Y.trackMatteType
              ]),
              Y.ctx.drawImage(J.canvas, 0, 0),
              m.drawImage(Y.canvas, 0, 0),
              m.setTransform(te.a, te.b, te.c, te.d, te.e, te.f),
              (Y = void 0),
              (J = void 0));
          } else
            Y && !ee
              ? (m.drawImage(Y.canvas, 0, 0), (Y = void 0), (J = void 0))
              : ee &&
                ee.isTrackMatte !== void 0 &&
                ((Y = void 0), (J = void 0));
        }
        return (m.restore(), p);
      }
    }
    var E = (function () {
      function t(t, a) {
        var i = this;
        ((this.$5 = 0),
          (this.$6 = 0),
          (this.$8 = !1),
          (this.$9 = !1),
          (this.$10 = !1),
          (this.$11 = 0),
          (this.$16 = !1),
          (this.$17 = 0),
          (this.$18 = 1),
          (this.$19 = 1),
          (this.$21 = 1),
          (this.$22 = 0),
          (this.$26 = function (e) {
            ((i.$12 || i.$15) && i.$34(e),
              i.$16
                ? (i.$10 && i.$32(),
                  i.$24.renderProgress(i.$11),
                  i.$33(i.$11),
                  (i.$11 += e / i.$5),
                  i.$14 && i.$14.callOrIgnoreThrottled(i.$17),
                  i.$11 >= i.$21 &&
                    ((i.$11 %= i.$21),
                    (i.$19 = Math.max(0, i.$19 - 1)),
                    i.$15 && i.$15.finish(),
                    i.$19 === 0
                      ? i.pause()
                      : (i.$24.seekToProgress(0),
                        i.$15 && i.$15.start(),
                        (i.$11 += i.$22)),
                    i.$13 && i.$13(i.$19),
                    i.$30()))
                : i.redrawIfNeeded());
          }),
          (this.$33 = y(function (e) {
            ((e >= 0 && e <= 1) || s(0, 750, e),
              this.$3.clearRect(
                0,
                0,
                this.$23.width.intrinsic,
                this.$23.height.intrinsic,
              ),
              this.$1.pluginsLoader && v(this.$1, e, this.$16, this.$8),
              this.$4.clearAllAllocated(),
              this.$4.freeAll(),
              L(
                this.$3,
                this.$4,
                this.$1.bitmaps,
                this.$1.videos,
                this.$1.subassets,
                this.$20,
                e,
                this.$1.pluginsLoader,
              ),
              (this.$17 = e),
              (this.$9 = !1),
              this.$15 && this.$15.addFrame());
          }, "KeyframesRenderer: _renderProgress()")),
          (this.$32 = y(function () {
            ((this.$2.width = this.$23.width.physical),
              (this.$2.height = this.$23.height.physical),
              (this.$2.style.width = this.$23.width.logical + "px"),
              (this.$2.style.height = this.$23.height.logical + "px"),
              this.$3.setTransform(1, 0, 0, 1, 0, 0),
              this.$3.scale(
                this.$23.width.getPhysicalChangeRatio(),
                this.$23.height.getPhysicalChangeRatio(),
              ),
              this.$4.resizeAll(),
              (this.$10 = !1),
              (this.$9 = !0));
          }, "KeyframesRenderer: _resize()")),
          (this.$23 = new (r("KeyframesDimensions"))(
            t.doc.size().width(),
            t.doc.size().height(),
          )),
          (this.$4 = new (r("KeyframesCanvasPool"))(this.$23)),
          (this.$2 = document.createElement("canvas")),
          (this.$3 = r("nullthrows")(this.$2.getContext("2d"))),
          o("KeyframesCanvasPolyfills").addGetTransformPolyfill(this.$3),
          (this.$7 = new (r("KeyframesLoop"))(this.$26)),
          (this.$15 = a),
          (this.$24 = new (r("KeyframesVideoManager"))(t)),
          this.setDecodedAsset(t),
          this.$27(),
          (this.$25 = (e || (e = n("Promise"))).resolve()));
      }
      var a = t.prototype;
      return (
        (a.play = function () {
          return (
            this.$16 ||
              ((this.$16 = !0),
              this.isFinished() &&
                ((this.$19 = this.$18), (this.$11 = this.$22)),
              this.$15 && this.$15.start(),
              this.$7.start()),
            this
          );
        }),
        (a.pause = function () {
          return (
            this.$16 &&
              ((this.$16 = !1),
              this.$15 && this.$15.pause(),
              this.$9
                ? this.$28()
                : (this.$7.cancel(),
                  this.$14 && this.$14.callIfIgnored(this.$17))),
            this.$24.pause(),
            this.$29(this.$24.seekToProgress(this.$17)),
            v(this.$1, this.$17, this.$16, this.$8),
            this
          );
        }),
        (a.isPlaying = function () {
          return this.$16;
        }),
        (a.isFinished = function () {
          return this.$19 === 0;
        }),
        (a.isMuted = function () {
          return this.$8;
        }),
        (a.mute = function () {
          ((this.$8 = !0), this.$24.mute());
        }),
        (a.unMute = function () {
          ((this.$8 = !1), this.$24.unMute());
        }),
        (a.repeatCount = function (t) {
          return ((this.$18 = this.$19 = Math.max(1, t)), this);
        }),
        (a.repeatForever = function () {
          return this.repeatCount(1 / 0);
        }),
        (a.getRepeatsRemaining = function () {
          return this.$19;
        }),
        (a.seekToProgress = function (t) {
          var e = this;
          return (
            (t >= 0 && t <= 1) || s(0, 749, t),
            this.$14 && this.$14.resetThrottling(),
            (this.$17 = this.$11 = t),
            this.$29(
              this.$24.seekToProgress(t).then(function () {
                return e.$28();
              }),
            ),
            t === 0 && this.$30(),
            this.$28(),
            this
          );
        }),
        (a.setStartAndEndAt = function (t, n) {
          if (t >= n) {
            var e = new Error("Cannot set the start time before the end time.");
            throw (e.stack, e);
          } else if (n <= t) {
            var r = new Error("Cannot set the end time before the start time.");
            throw (r.stack, r);
          }
          return ((this.$22 = t), (this.$21 = n), this);
        }),
        (a.setStartAt = function (t) {
          if (t >= this.$21) {
            var e = new Error("Cannot set the start time before the end time.");
            throw (e.stack, e);
          }
          return ((this.$22 = t), this);
        }),
        (a.setEndAt = function (t) {
          if (t <= this.$22) {
            var e = new Error("Cannot set the end time before the start time.");
            throw (e.stack, e);
          }
          return ((this.$21 = t), this);
        }),
        (a.getDuration = function () {
          return this.$5;
        }),
        (a.getFrameRate = function () {
          return this.$6;
        }),
        (a.getIntrinsicSize = function () {
          return [this.$23.width.intrinsic, this.$23.height.intrinsic];
        }),
        (a.getWidth = function () {
          return this.$23.width.logical;
        }),
        (a.getHeight = function () {
          return this.$23.height.logical;
        }),
        (a.setWidth = function (t) {
          return (this.$23.setWidth(t), this.$27(), this);
        }),
        (a.setHeight = function (t) {
          return (this.$23.setHeight(t), this.$27(), this);
        }),
        (a.getDecodedAsset = function () {
          return babelHelpers.extends({}, this.$1);
        }),
        (a.setDecodedAsset = function (t) {
          return (
            (this.$1 = t),
            (this.$5 = r("KFLoaderUtils").getDocumentDuration(t.doc)),
            (this.$6 = t.doc.frameRate()),
            (this.$20 = t.doc.rootLayer()),
            (this.$24 = new (r("KeyframesVideoManager"))(t)),
            this.$28(),
            this.$31(),
            this
          );
        }),
        (a.resetDimensions = function () {
          return (this.$23.reset(), this.$27(), this);
        }),
        (a.onError = function (t) {
          return ((this.$12 = t), this);
        }),
        (a.onRepeatEnd = function (t) {
          return ((this.$13 = t), this);
        }),
        (a.onProgress = function (t, n) {
          return ((this.$14 = t && new C(t, n)), this);
        }),
        (a.getProgress = function () {
          return this.$17;
        }),
        (a.getElement = function () {
          return this.$2;
        }),
        (a.hasPerformanceLogging = function () {
          return !!this.$15;
        }),
        (a.redrawIfNeeded = function () {
          return (
            (this.$10 || this.$9) &&
              (this.$10 && this.$32(),
              this.$9 && this.$33(this.$17),
              this.$14 && this.$14.callImmediately(this.$17)),
            this
          );
        }),
        (a.waitForVideoUpdate = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield this.$25;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$29 = function (t) {
          ((this.$25 = t), r("promiseDone")(t));
        }),
        (a.$27 = function () {
          ((this.$10 = !0), this.$28());
        }),
        (a.$28 = function () {
          ((this.$9 = !0), this.$7.isRunning() || this.$7.start(1));
        }),
        (a.$31 = function () {
          b(this.$1, function (e) {
            return e.animationDidLoad();
          });
        }),
        (a.$30 = function () {
          var e = this;
          b(this.$1, function (t) {
            return t.animationWillRepeat(e.$11, e.$19);
          });
        }),
        (a.$34 = function (t) {
          var e = Math.round(t / f - 1);
          e > 0 &&
            (this.$15 && this.$15.addFrameDrop(e),
            this.$12 && this.$12(p.ERROR_FRAMEDROP, e));
        }),
        t
      );
    })();
    i.exports = E;
  },
  34,
);
