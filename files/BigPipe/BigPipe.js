__d(
  "BigPipe",
  [
    "$",
    "Arbiter",
    "BigPipeExperiments",
    "BigPipeInstance",
    "BigPipePlugins",
    "Bootloader",
    "ErrorUtils",
    "FBLogger",
    "HasteResponse",
    "PageEvents",
    "PageletEventConstsJS",
    "PageletSet",
    "ServerJS",
    "TimeSlice",
    "UserTimingUtils",
    "captureUsageSnapshot",
    "clearTimeout",
    "cr:135",
    "err",
    "fastDeepCopy",
    "ge",
    "getErrorSafe",
    "performanceAbsoluteNow",
    "performanceNow",
    "setTimeout",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    t.__bigPipeFactory = (e || (e = r("performanceAbsoluteNow")))();
    var c =
      console.timeStamp && window.location.search.indexOf("pagelet_ts=1") > 0;
    function d(e, t) {
      o("UserTimingUtils").measureStart(e + " " + t);
    }
    function m(e, t, n) {
      o("UserTimingUtils").measureEnd(
        "\u26CF " + e + " [" + t + "][phase " + n + "]",
        e + " " + t,
      );
    }
    function p(e, t) {
      if (e)
        for (var n = 0; n < e.length; n++) {
          var o = null,
            a = e[n],
            i = a.match(/^\"caller:([^\"]+?)\";(.*)/);
          (i != null && ((o = i[1]), (a = i[2])),
            (s || (s = r("ErrorUtils"))).applyWithGuard(new Function(a), t),
            r("FBLogger")("comet_infra").info("BigPipe eval call", o));
        }
    }
    var _ = 1,
      f = (function () {
        function t(e) {
          var o = this;
          ((this.$1 = 0),
            (this.$2 = !1),
            (this.$4 = !1),
            (this.$5 = []),
            (this.onDisplayDone = function (e) {
              o.arbiter.registerCallback(e, ["display_done"]);
            }),
            Object.assign(
              this,
              {
                arbiter: r("Arbiter"),
                rootNodeID: "content",
                lid: null,
                isAjax: !1,
                domContentCallback: n("cr:135").__domContentCallback,
                onloadCallback: n("cr:135").__onloadCallback,
                domContentEvt: r("PageEvents").BIGPIPE_DOMREADY,
                onloadEvt: r("PageEvents").BIGPIPE_ONLOAD,
                forceFinish: !1,
                config: {},
                lastPhaseOfLastResponse: -1,
                lastPhaseBeforeLastResponse: -1,
                livePagelets: {},
                phases: {},
                maxPhase: 0,
                awaitingLIDEventQueue: [],
              },
              e,
            ),
            this.config || (this.config = {}),
            this.automatic != null
              ? (this.$6 = r("BigPipeInstance").getCurrentInstance())
              : r("BigPipeInstance").setCurrentInstance_DO_NOT_USE(this),
            (this.serverJS = new (r("ServerJS"))()),
            this.$7(t.Events.init, { arbiter: this.arbiter }, r("Arbiter")),
            (this.$3 = this.arbiter.registerCallback(
              function () {
                var e = r("captureUsageSnapshot")();
                o.$7(t.Events.displayed, {
                  rid: o.rid,
                  ajax: o.isAjax,
                  usageSnapshot: e,
                });
              },
              ["display_done"],
            )));
          var a = ["pagelet_displayed_all"];
          if (
            this.config.extra_dom_content_event != null &&
            (a.push(this.config.extra_dom_content_event),
            r("BigPipeExperiments").am_page_load_promise_timeout)
          ) {
            var i = r("setTimeoutAcrossTransitions")(function () {
              r("Arbiter").inform(
                o.config.extra_dom_content_event,
                {
                  pageType: "normal",
                  start: 0,
                  tti: 0,
                  extras: {
                    all_pagelets_displayed: (u || (u = r("performanceNow")))(),
                  },
                },
                "state",
              );
            }, 3e4);
            this.arbiter.registerCallback(function () {
              i != null && (r("clearTimeout")(i), (i = null));
            }, a);
          }
          (this.arbiter.registerCallback(this.domContentCallback, a),
            this.$8(0),
            this.arbiter.registerCallback(this.onloadCallback, [
              "bigpipe_e2e_reported",
            ]),
            (this.loadedCallback = this.arbiter.registerCallback(
              function () {
                (o.$7(t.Events.loaded, { rid: o.rid, ajax: o.isAjax }),
                  o.arbiter.inform("bigpipe_e2e_reported", !0));
              },
              ["pagelet_displayed_all"],
            )),
            this.arbiter.registerCallback(
              function () {
                return o.serverJS.cleanup(r("TimeSlice"));
              },
              [this.onloadEvt, "bigpipe_e2e_reported"],
            ));
        }
        var a = t.prototype;
        return (
          (a.$8 = function (t) {
            var e = this.getOrCreatePhase(t);
            ((e.begun = !0),
              this.$7("phase_begin", { phase: t }),
              this.arbiter.inform("phase_begin_" + t, !0, "state"));
          }),
          (a.getOrCreatePhase = function (t) {
            if (this.phases[t]) return this.phases[t];
            var e = { pagelets: [], begun: !1, complete: !1 };
            this.phases[t] = e;
            for (var n = 0; n < this.$5.length && !(t < this.$5[n]); ) n++;
            return (this.$5.splice(n, 0, t), e);
          }),
          (a.$9 = function () {
            var e = this.phases[this.$1];
            if (!(e && e.begun && !e.complete))
              for (var t of this.$5) {
                var n = this.phases[t];
                if (n.begun) {
                  if (n.complete) continue;
                  return;
                } else {
                  ((this.$1 = t), this.$8(t));
                  return;
                }
              }
          }),
          (a.displayPageletHandler = function (t) {
            var e = this;
            this.displayCallback
              ? this.displayCallback(function () {
                  return e.$10(t);
                })
              : this.$10(t);
          }),
          (a.$10 = function (t) {
            (d(t.id, "display"),
              (t.displayStarted = !0),
              this.informPageletEvent(
                r("PageletEventConstsJS").DISPLAY_START,
                t,
              ));
            var e = this.$11(t),
              n = [],
              o = {};
            for (var a in t.content) {
              var i = t.content[a];
              t.append && (a = this.getPageletRootID(t));
              var l = r("ge")(a);
              if (!l || a == null) {
                var s = "Root element %s is missing for pagelet %s";
                r("FBLogger")("BigPipe").mustfix(s, a, t.id);
                continue;
              }
              if ((a === e.id && e.setRoot(l), i)) {
                if (t.append) y(l, i, n);
                else if (i.nodeType) ((l.innerHTML = ""), y(l, i, n));
                else {
                  var u = g(i);
                  ((l.innerHTML = u), (o[a] = u), n.push(l));
                }
                r("BigPipeExperiments").enable_bigpipe_plugins === !0 &&
                  r("BigPipePlugins").runPluginOnPagelet(l);
              }
              var c = l.getAttribute("data-referrer");
              c || l.setAttribute("data-referrer", a);
            }
            var p = null;
            if (t.static_templates) {
              var _ = r("ge")("static_templates");
              _
                ? ((p = g(t.static_templates)),
                  t.replace_static_templates_if_exists && (p = C(_, p, n)),
                  y(_, p, n))
                : r("FBLogger")("BigPipe").mustfix(
                    "Static template container missing for pagelet %s although it has static templates",
                    t.id,
                  );
            }
            if (
              (this.informPageletDisplayDetails(t.id, t.jsmods, o, p),
              (t.displayed = !0),
              t.jsmods)
            ) {
              var f = this.serverJS.handlePartial(t.jsmods, {
                pagelet: t.id,
                bigPipeContext: { onDisplayDone: this.onDisplayDone },
              });
              e.addDestructor(f.cancel.bind(f));
            }
            var h = [];
            if (
              (n.forEach(function (e) {
                if (typeof e.getElementsByTagName == "function")
                  for (
                    var t = e.getElementsByTagName("img"), n = 0;
                    n < t.length;
                    n++
                  )
                    h.push(t[n].src);
              }),
              h.length > 0)
            ) {
              var b = r("TimeSlice").getContext();
              this.$7("images_displayed", {
                pagelet: t.id,
                timeslice: b ? b.contextID : null,
                images: h,
              });
            }
            (this.informPageletEvent(r("PageletEventConstsJS").DISPLAY_END, t),
              m(t.id, "display", t.phase),
              this.arbiter.inform(t.id + "_displayed", !0, "state"));
          }),
          (a.onPhaseDisplayEnd = function (n) {
            var e = this.getOrCreatePhase(n);
            if (((e.complete = !0), n === this.ttiPhase)) {
              var o = {},
                a = r("captureUsageSnapshot")();
              (this.$7(t.Events.tti, {
                phase: this.ttiPhase,
                rid: this.rid,
                ajax: this.isAjax,
                metrics: o,
                usageSnapshot: a,
              }),
                this.arbiter.inform("tti_pagelet_displayed", !0, "state"));
            }
            (this.$12() &&
              (n === this.lastPhaseBeforeLastResponse &&
                this.$13(function () {}),
              n === this.lastPhaseOfLastResponse &&
                (this.$4 || this.$13(function () {}),
                this.arbiter.inform("pagelet_displayed_all", !0, "state"))),
              n !== this.lastPhaseOfLastResponse && this.$14());
          }),
          (a.$14 = function () {
            this.config.flush_pagelets_asap
              ? this.$9()
              : (this.$1++, this.$8(this.$1));
          }),
          (a.$13 = function (t) {
            ((this.$4 = !0),
              this.arbiter.inform("display_done", !0),
              (this.$2 = !0),
              t(),
              this.lid != null && m("display_done", this.lid, "all"));
          }),
          (a.downloadJsForPagelet = function (t) {
            var e = this;
            (this.informPageletEvent(r("PageletEventConstsJS").JS_START, t),
              r("Bootloader").loadResources(t.allResources || [], {
                onAll: function () {
                  e.informPageletEvent(r("PageletEventConstsJS").JS_END, t);
                  var n = t.requires || [];
                  ((t.requires = n),
                    (!e.isAjax || t.phase >= 1) &&
                      t.requires.push("uipage_onload"));
                  var o = function () {
                      (e.informPageletEvent(
                        r("PageletEventConstsJS").ONLOAD_START,
                        t,
                      ),
                        e.$15(t) && p(t.onload),
                        e.informPageletEvent(
                          r("PageletEventConstsJS").ONLOAD_END,
                          t,
                        ),
                        e.arbiter.inform("pagelet_onload", !0),
                        t.provides &&
                          e.arbiter.inform(t.provides, !0, "state"));
                    },
                    a = function () {
                      e.$15(t) && p(t.onafterload);
                    };
                  (e.arbiter.registerCallback(o, n),
                    e.arbiter.registerCallback(a, [e.onloadEvt]));
                },
              }));
          }),
          (a.$11 = function (t) {
            var e = this.getPageletRootID(t);
            return o("PageletSet").getPagelet(e);
          }),
          (a.getPageletRootID = function (t) {
            return t.append || Object.keys(t.content)[0] || null;
          }),
          (a.$12 = function () {
            var e = r("BigPipeInstance").getCurrentInstance();
            return (
              this == e ||
              (this.automatic != null && this.$6 == e) ||
              this.jsNonBlock != null ||
              this.forceFinish ||
              (e && e.allowIrrelevantRequests)
            );
          }),
          (a.$15 = function (t) {
            if (!this.$12()) return !1;
            var e = this.getPageletRootID(t);
            return !!this.livePagelets[e];
          }),
          (a.$7 = function (n, o, a) {
            var t = o || {},
              i = a || this.arbiter;
            (t.ts || (t.ts = (e || (e = r("performanceAbsoluteNow")))()),
              c &&
                console.timeStamp &&
                console.timeStamp(
                  n +
                    " " +
                    (Object.prototype.hasOwnProperty.call(t, "arbiter")
                      ? JSON.stringify(
                          babelHelpers.extends({}, t, { arbiter: null }),
                        )
                      : JSON.stringify(t)),
                ),
              this.lid === null
                ? this.awaitingLIDEventQueue.push([i, n, t])
                : ((t.lid = this.lid), i.inform(n, t, "persistent")));
          }),
          (a.informPageletEvent = function (t, n, r) {
            var e = { event: t, id: n.id, ts: r };
            (n.phase && (e.phase = n.phase),
              n.categories && (e.categories = n.categories),
              n.allResources && (e.allResources = n.allResources),
              n.displayResources && (e.displayResources = n.displayResources),
              this.$7("pagelet_event", e));
          }),
          (a.informPageletDisplayDetails = function (t, n, o, a) {
            if (this.config.dispatch_pagelet_replayable_actions)
              try {
                this.$7("pagelet_performing_replayable_actions", {
                  id: t,
                  jsmods: r("fastDeepCopy")(n),
                  contentMap: o,
                  staticTemplates: a,
                });
              } catch (t) {
                var e = r("getErrorSafe")(t);
                (r("FBLogger")("bigpipe_pagelet_replay")
                  .catching(e)
                  .warn("failed at _informPageletDisplayDetails"),
                  this.$7("pagelet_performing_replayable_actions_failed", {}));
              }
          }),
          (t.getCurrentInstance = function () {
            return r("BigPipeInstance").getCurrentInstance();
          }),
          t
        );
      })();
    (Object.assign(f.prototype, {
      beforePageletArrive: function (t, n) {
        var e = this;
        r("TimeSlice").guard(
          function () {
            return e.informPageletEvent(
              r("PageletEventConstsJS").ARRIVE_START,
              { id: t },
              n,
            );
          },
          "beforePageletArrive " + t,
          { root: !0 },
        )();
      },
      setPageID: function (t) {
        ((this.lid = t),
          this.awaitingLIDEventQueue.forEach(function (e) {
            var n = e[0],
              r = e[1],
              o = e[2];
            ((o.lid = t), n.inform(r, o, "persistent"));
          }),
          (this.awaitingLIDEventQueue = []),
          this.lid && d("display_done", this.lid));
      },
      onPageletArrive: (s || (s = r("ErrorUtils"))).guard(function (e) {
        var t,
          n = this;
        (this.informPageletEvent(r("PageletEventConstsJS").ARRIVE_END, e),
          o("HasteResponse").handleSRPayload((t = e.hsrp) != null ? t : {}),
          (e.content = e.content || {}));
        var a = e.phase;
        if (e.all_phases) for (var i of e.all_phases) this.getOrCreatePhase(i);
        var l = this.getOrCreatePhase(a);
        (l.pagelets.push(e.id),
          (this.maxPhase = Math.max(a, this.maxPhase)),
          e.last_in_phase &&
            this.arbiter.registerCallback(
              function () {
                return n.onPhaseDisplayEnd(a);
              },
              l.pagelets
                .map(function (e) {
                  return e + "_displayed";
                })
                .concat(["phase_begin_" + a]),
            ));
        var s = this.getPageletRootID(e),
          u = o("PageletSet").getOrCreatePagelet(s);
        (e.last_pagelet && (this.lastPhaseBeforeLastResponse = this.maxPhase),
          e.the_end && (this.lastPhaseOfLastResponse = a),
          e.tti_phase !== void 0 && (this.ttiPhase = e.tti_phase),
          (this.livePagelets[u.id] = !0),
          u.addDestructor(function () {
            delete n.livePagelets[u.id];
          }));
        var c,
          d = [];
        if (e.jsmods) {
          var m = e.jsmods.define,
            p = e.jsmods.instances,
            f = e.jsmods.markup,
            g = e.jsmods.pre_display_requires;
          (delete e.jsmods.define,
            delete e.jsmods.instances,
            delete e.jsmods.markup,
            delete e.jsmods.pre_display_requires);
          var h = 19e3,
            y = function () {
              if (e.displayStarted === !0)
                return (
                  r("FBLogger")("BigPipe").warn(
                    "registerToBlockDisplayUntilDone_DONOTUSE called after pagelet %s was displayed. This is a no-op.",
                    e.id,
                  ),
                  function () {}
                );
              var t,
                o,
                a = _ + "_preDisplayEvent";
              return (
                _++,
                c ? n.arbiter.registerCallback(c, [a]) : d.push(a),
                r("TimeSlice").guard(
                  function () {
                    ((o = !0),
                      r("clearTimeout")(t),
                      n.arbiter.inform(a, !0, "state"));
                  },
                  "BigPipeDisplayBlockingEvent " + a,
                  { propagationType: r("TimeSlice").PropagationType.EXECUTION },
                )
              );
            };
          (this.informPageletDisplayDetails(
            e.id,
            { define: m, instances: p, markup: f, pre_display_requires: g },
            {},
          ),
            this.serverJS.handlePartial(
              { define: m, instances: p, markup: f, pre_display_requires: g },
              {
                pagelet: e.id,
                bigPipeContext: {
                  onDisplayDone: this.onDisplayDone,
                  registerToBlockDisplayUntilDone_DONOTUSE: y,
                },
              },
            ));
        }
        if (
          (this.arbiter.registerCallback(this.loadedCallback, [
            "pagelet_onload",
          ]),
          this.informPageletEvent(r("PageletEventConstsJS").SETUP, e),
          e.display_out_of_phase === "asap")
        )
          d = d.concat(["first_response_displayed", e.id + "_css_end"]);
        else if (e.display_out_of_phase === "after_tti") {
          var C = e.id + "_greedy_render";
          d = d.concat(["first_response_displayed", e.id + "_css_end", C]);
          var b = !1,
            v = function () {
              b || ((b = !0), n.arbiter.inform(C, !0, "state"));
            };
          (this.arbiter.registerCallback(v, ["tti_pagelet_displayed"]),
            this.arbiter.registerCallback(v, ["phase_begin_" + a]));
        } else d = d.concat(["phase_begin_" + e.phase, e.id + "_css_end"]);
        if (
          ((e.display_dependency || []).forEach(function (e) {
            return d.push(e + "_displayed");
          }),
          e.display_group)
        )
          for (
            var S = document.body.getElementsByClassName("pagelet-group"),
              R = 0;
            R < S.length;
            R++
          ) {
            var L = S[R];
            if (L.id === e.id) break;
            L.getAttribute("data-display-group") === e.display_group &&
              d.push(L.id + "_displayed");
          }
        c = this.arbiter.registerCallback(function () {
          e.display_delay_ms === void 0
            ? n.displayPageletHandler(e)
            : r("setTimeout")(function () {
                return n.displayPageletHandler(e);
              }, e.display_delay_ms);
        }, d);
        var E = !1,
          k = function () {
            if (!E) {
              ((E = !0),
                n.informPageletEvent(r("PageletEventConstsJS").CSS_START, e));
              var t = e.displayResources || [];
              r("Bootloader").loadResources(t, {
                onAll: function () {
                  (n.informPageletEvent(r("PageletEventConstsJS").CSS_END, e),
                    n.arbiter.inform(e.id + "_css_end", !0, "state"));
                },
              });
            }
          };
        this.config.flush_pagelets_asap
          ? k()
          : this.arbiter.registerCallback(k, ["phase_begin_" + a]);
        var I = [e.id + "_displayed"];
        (this.jsNonBlock || I.push(this.domContentEvt),
          this.arbiter.registerCallback(
            this.downloadJsForPagelet.bind(this, e),
            I,
          ));
      }, "BigPipe#onPageletArrive"),
    }),
      (f.Events = r("BigPipeInstance").Events));
    function g(e) {
      if (!e || typeof e == "string") return e;
      if (e.container_id) {
        var t,
          n = r("$")(e.container_id),
          o = h(n) || "";
        return ((t = n.parentNode) == null || t.removeChild(n), o);
      }
      return (
        e.nodeType && r("FBLogger")("BigPipe").mustfix("Content is a node."),
        null
      );
    }
    function h(e) {
      if (!e.firstChild)
        return (
          r("FBLogger")("BigPipe").mustfix(
            "Pagelet markup container is empty.",
          ),
          null
        );
      if (e.firstChild.nodeType !== 8)
        return (
          r("FBLogger")("BigPipe").mustfix(
            "Child of pagelet markup container is not a comment.",
          ),
          null
        );
      var t = e.firstChild.nodeValue;
      return (
        (t = t.substring(1, t.length - 1)),
        t.replace(/\\([\s\S]|$)/g, "$1")
      );
    }
    function y(e, t, n) {
      for (var r = b(t), o = 0; o < r.childNodes.length; o++)
        n.push(r.childNodes[o]);
      e.appendChild(r);
    }
    function C(e, t, n) {
      for (
        var r = b(t),
          o = document.createDocumentFragment(),
          a = r.childNodes.length,
          i = 0;
        i < a;
        i++
      ) {
        var l = r.firstChild,
          s = l.id,
          u = s != null && s !== "" ? document.getElementById(s) : null,
          c = u != null ? u.parentNode : null;
        c === e ? (c.replaceChild(l, u), n.push(l)) : o.appendChild(l);
      }
      return o;
    }
    function b(e) {
      if (e.nodeType) return e;
      var t = document.createDocumentFragment(),
        n = g(e);
      if (n) {
        var r = document.createElement("div");
        for (r.innerHTML = n; r.firstChild; ) t.appendChild(r.firstChild);
      }
      return t;
    }
    var v = f;
    l.default = v;
  },
  98,
);
