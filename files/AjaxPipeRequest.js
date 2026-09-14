__d(
  "AjaxPipeRequest",
  [
    "invariant",
    "Arbiter",
    "AsyncRequest",
    "BigPipe",
    "CSS",
    "ContextualComponent",
    "DOM",
    "Env",
    "PageEvents",
    "PageletGK",
    "PageletSet",
    "ScriptPathState",
    "URI",
    "containsNode",
    "ge",
    "goOrReplace",
    "performance",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = 0;
    function _(e, t) {
      var n = r("ge")(e);
      if (!n) return;
      t || (n.style.minHeight = "100px");
      for (var a = o("PageletSet").getPageletIDs(), i = 0; i < a.length; i++) {
        var l = a[i];
        if (o("PageletSet").hasPagelet(l)) {
          var s = o("PageletSet").getPagelet(l);
          r("containsNode")(n, s.getRoot()) && o("PageletSet").removePagelet(l);
        }
      }
      r("Arbiter").inform(r("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS, {
        canvasID: e,
      });
      function u(e) {
        var t = r("ContextualComponent").forNode(e);
        (t && t.unmount(), r("DOM").empty(e));
      }
      r("PageletGK").destroyDomAfterEventHandler
        ? (r("Arbiter").inform("pagelet/destroy", { id: null, root: n }), u(n))
        : (u(n), r("Arbiter").inform("pagelet/destroy", { id: null, root: n }));
    }
    function f(e, t) {
      var n = r("ge")(e);
      n && !t && (n.style.minHeight = "100px");
    }
    var g = (function () {
      function n(e, t, n) {
        var a = this;
        ((this.$17 = !1),
          (this.$27 = function (e) {
            a.$6.inform(r("PageEvents").AJAXPIPE_FIRST_RESPONSE, {
              lid: a.pipe.lid,
              quickling: !!a.$9,
            });
            var t = e.getPayload(),
              n = r("ge")(a.$4),
              i = t.canvas_class;
            n != null && i != null && o("CSS").setClass(n, i);
          }),
          (this.$4 = e),
          (this.$1 = t),
          (this.$2 = n));
        var i = new (r("AsyncRequest"))();
        (i.setReplaceTransportMarkers(!1),
          (this.$3 = i),
          (this.$5 = !0),
          (this.$6 = new (r("Arbiter"))()),
          (this.$7 = p++));
      }
      var a = n.prototype;
      return (
        (a.getArbiter = function () {
          return this.$6;
        }),
        (a.setData = function (t) {
          return ((this.$2 = t), this);
        }),
        (a.getData = function () {
          return this.$2;
        }),
        (a.setAllowCrossPageTransition = function (t) {
          return ((this.$5 = t), this);
        }),
        (a.setAppend = function (t) {
          return ((this.$8 = t), this);
        }),
        (a.send = function () {
          var t = this;
          this.$6.inform(
            r("PageEvents").AJAXPIPE_SEND,
            {
              rid: this.$7,
              quickling: !!this.$9,
              ts: (e || (e = r("performanceAbsoluteNow")))(),
            },
            "persistent",
          );
          var n = {
            ajaxpipe: 1,
            ajaxpipe_token: (u || (u = r("Env"))).ajaxpipe_token,
          };
          (Object.assign(n, r("ScriptPathState").getParams()),
            r("ScriptPathState").reset());
          var o = this.$3;
          if (o == null) return this;
          if (
            (o
              .setOption("useFetchTransport", !0)
              .delayPreDisplayJS()
              .setURI(this.$1)
              .setData(Object.assign(n, this.$2))
              .setPreBootloadHandler(function (e) {
                return t.$18(e);
              })
              .setInitialHandler(function (e) {
                return t.$19(e);
              })
              .setHandler(function (e) {
                return t.$20(e);
              })
              .setMethod("GET")
              .setReadOnly(!0)
              .setAllowCrossPageTransition(this.$5)
              .setAllowIrrelevantRequests(this.$17),
            this.$11 ? (this.$10 = m) : (m = this.$3),
            this.$9)
          ) {
            var a =
              (c || (c = r("performance"))).clearResourceTimings ||
              (c || (c = r("performance"))).webkitClearResourceTimings;
            a && a.call(c || (c = r("performance")));
          }
          return (o.send(), this);
        }),
        (a.$21 = function (t) {
          return !1;
        }),
        (a.$22 = function () {
          this.$6.inform(r("PageEvents").AJAXPIPE_DOMREADY, !0, "state");
        }),
        (a.$23 = function () {
          (window.console &&
            console.timeStamp &&
            console.timeStamp(
              'perf_trace {"name": "e2e", "parent": "PageEvents.AJAXPIPE_ONLOAD"}',
            ),
            this.$6.inform(
              r("PageEvents").AJAXPIPE_ONLOAD,
              {
                lid: this.pipe.lid,
                rid: this.$7,
                ts: (e || (e = r("performanceAbsoluteNow")))(),
              },
              "state",
            ));
        }),
        (a.$24 = function (t) {
          return (
            this.$3 === m ||
            (this.$11 && this.$10 === m) ||
            this.$12 ||
            (m != null && m.getAllowIrrelevantRequests())
          );
        }),
        (a.$18 = function (t) {
          var e = this,
            n = this.$3,
            o = t.getPayload();
          if (!o || o.redirect || !this.$24(t)) return !1;
          var a = !1;
          return (
            t.is_first &&
              (!this.$8 &&
                !this.$15 &&
                !o.isCometResponse &&
                _(this.$4, this.$14),
              (a = this.$21(t)),
              n != null || s(0, 36),
              (this.pipe = new (r("BigPipe"))({
                config: o.bigPipeConfig,
                arbiter: this.$6,
                rootNodeID: this.$4,
                lid: n.lid,
                rid: this.$7,
                isAjax: !0,
                domContentCallback: function () {
                  return e.$22();
                },
                onloadCallback: function () {
                  return e.$23();
                },
                domContentEvt: r("PageEvents").AJAXPIPE_DOMREADY,
                onloadEvt: r("PageEvents").AJAXPIPE_ONLOAD,
                jsNonBlock: this.$12,
                automatic: this.$11,
                displayCallback: this.$15,
                allowIrrelevantRequests: this.$17,
              })),
              this.pipe.setPageID(n.lid)),
            a
          );
        }),
        (a.$25 = function (n) {
          if (n.redirect) {
            if (n.force || !this.isPageActive(n.redirect)) {
              var e = ["ajaxpipe", "ajaxpipe_token"].concat(
                this.getSanitizedParameters(),
              );
              r("goOrReplace")(
                window.location,
                new (d || (d = r("URI")))(n.redirect).removeQueryData(e),
                !0,
              );
            } else {
              var o = t.PageTransitions;
              o.go(n.redirect, !0);
            }
            return !0;
          } else return !1;
        }),
        (a.isPageActive = function (t) {
          return !0;
        }),
        (a.getSanitizedParameters = function () {
          return [];
        }),
        (a.$26 = function (t) {
          return !0;
        }),
        (a.$19 = function (t) {
          var e = t.getPayload();
          return this.$24(t) ? (e ? !(this.$25(e) || !this.$26(e)) : !0) : !1;
        }),
        (a.setFirstResponseCallback = function (t) {
          return ((this.$13 = t), this);
        }),
        (a.setFirstResponseHandler = function (t) {
          return ((this.$27 = t), this);
        }),
        (a.$20 = function (t) {
          var e = t.payload;
          if (!this.$24(t)) return r("AsyncRequest").suppressOnloadToken;
          if (
            (t.is_first &&
              (this.$27(t),
              this.$13 && this.$13(),
              (e.provides = e.provides || []),
              e.provides.push("uipage_onload")),
            e)
          ) {
            if ("content" in e.content) {
              this.$8 && (e.append = this.$4);
              var n = e.content.content;
              (delete e.content.content, (e.content[this.$4] = n));
            }
            this.pipe.onPageletArrive(e);
          }
          return (
            t.is_last && f(this.$4, this.$14),
            r("AsyncRequest").suppressOnloadToken
          );
        }),
        (a.setNectarModuleDataSafe = function (t) {
          return (this.$3 != null && this.$3.setNectarModuleDataSafe(t), this);
        }),
        (a.setFinallyHandler = function (t) {
          return (this.$3 != null && this.$3.setFinallyHandler(t), this);
        }),
        (a.setErrorHandler = function (t) {
          return (this.$3 != null && this.$3.setErrorHandler(t), this);
        }),
        (a.setTransportErrorHandler = function (t) {
          return (this.$3 != null && this.$3.setTransportErrorHandler(t), this);
        }),
        (a.setResetHandler = function (t) {
          return ((this.$16 = t), this);
        }),
        (a.abort = function () {
          return (this.$3 != null && this.$3.abort(), this.$28(), this);
        }),
        (a.abandon = function () {
          return (this.$3 != null && this.$3.abandon(), this.$28(), this);
        }),
        (a.$28 = function () {
          (m == this.$3 && (m = null),
            (this.$3 = null),
            this.$16 && this.$16());
        }),
        (a.setJSNonBlock = function (t) {
          return ((this.$12 = t), this);
        }),
        (a.setAutomatic = function (t) {
          return ((this.$11 = t), this);
        }),
        (a.setDisplayCallback = function (t) {
          return ((this.$15 = t), this);
        }),
        (a.setConstHeight = function (t) {
          return ((this.$14 = t), this);
        }),
        (a.setAllowIrrelevantRequests = function (t) {
          return ((this.$17 = t), this);
        }),
        (a.getAsyncRequest = function () {
          return this.$3;
        }),
        (n.getCurrentRequest = function () {
          return m;
        }),
        (n.setCurrentRequest = function (t) {
          m = t;
        }),
        n
      );
    })();
    ((g.clearCanvas = _), (l.default = g));
  },
  98,
);
