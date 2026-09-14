__d(
  "UIPagelet",
  [
    "ActorURI",
    "AjaxPipeRequest",
    "AsyncRequest",
    "DOM",
    "HTML",
    "ScriptPathState",
    "UIPageletContentCache",
    "URI",
    "emptyFunction",
    "ge",
    "isElementNode",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t(e, t, n) {
          if (typeof e == "function") ((this.$1 = null), (this.$2 = e));
          else {
            var o = e && r("isElementNode")(e) ? e.id : e;
            ((this.$1 = o || null),
              (this.$2 = r("ge")(e || r("DOM").create("div"))));
          }
          ((this.$3 = t || null),
            (this.$5 = n || {}),
            (this.$4 = {}),
            (this.$6 = r("emptyFunction")),
            this.$25(null),
            (this.$10 = !1),
            (this.$12 = !1),
            (this.$11 = !0),
            (this.$13 = !1),
            (this.$14 = !1),
            (this.$15 = !1),
            (this.$16 = ""),
            (this.$17 = null),
            (this.$18 = !1));
        }
        var n = t.prototype;
        return (
          (n.getElement = function () {
            return typeof this.$2 == "function" ? this.$2() : this.$2;
          }),
          (n.setHandler = function (t) {
            return ((this.$6 = t), this);
          }),
          (n.go = function (t, n) {
            return (
              arguments.length >= 2 || typeof t == "string"
                ? ((this.$3 = t), (this.$4 = n || {}))
                : arguments.length === 1 && (this.$4 = t),
              this.refresh(),
              this
            );
          }),
          (n.setAllowCrossPageTransition = function (t) {
            return ((this.$13 = t), this);
          }),
          (n.setBundleOption = function (t) {
            return ((this.$11 = t), this);
          }),
          (n.setErrorHandler = function (t) {
            return ((this.$7 = t), this);
          }),
          (n.setTransportErrorHandler = function (t) {
            return ((this.transportErrorHandler = t), this);
          }),
          (n.refresh = function () {
            var e = this;
            if (this.$10)
              (r("ScriptPathState").setIsUIPageletRequest(!0),
                this.$25(new (r("AjaxPipeRequest"))(this.$1, this.$3)),
                this.$8
                  .setAppend(this.$14)
                  .setConstHeight(this.$18)
                  .setJSNonBlock(this.$19)
                  .setAutomatic(this.$20)
                  .setDisplayCallback(this.$21)
                  .setFinallyHandler(this.$22),
                this.$7 && this.$8.setErrorHandler(this.$7),
                this.transportErrorHandler &&
                  this.$8.setTransportErrorHandler(this.transportErrorHandler),
                this.$23 != null &&
                  this.$8.setAllowIrrelevantRequests(this.$23));
            else {
              if (this.$15) {
                var t = o("UIPageletContentCache").getContent(this.$16);
                if (t !== null) return (this.handleContent(t, !0), this);
              }
              var n = function (n) {
                  e.$25(null);
                  var t = r("HTML")(n.getPayload());
                  e.handleContent(t);
                  var a = t.getContent().contains("<iframe");
                  !a &&
                    e.$15 &&
                    o("UIPageletContentCache").setContent(e.$16, t);
                },
                a = this.$21,
                i = this.$22;
              (this.$25(
                new (r("AsyncRequest"))(this.$3)
                  .setMethod("GET")
                  .setReadOnly(!0)
                  .setOption("bundle", this.$11)
                  .setHandler(function (e) {
                    (a ? a(n.bind(null, e), e) : n(e), i && i(e));
                  }),
              ),
                this.$7 && this.$8.setErrorHandler(this.$7),
                this.transportErrorHandler &&
                  this.$8.setTransportErrorHandler(this.transportErrorHandler),
                this.$12 && this.$8.setMethod("POST"));
            }
            var l = babelHelpers.extends({}, this.$5, this.$4);
            return (
              this.$24 && (l[o("ActorURI").PARAMETER_ACTOR] = this.$24),
              this.$8
                .setAllowCrossPageTransition(this.$13)
                .setData({ data: JSON.stringify(l) })
                .send(),
              this
            );
          }),
          (n.handleContent = function (t, n) {
            var e = this.getElement();
            (e != null &&
              (this.$14
                ? r("DOM").appendContent(e, t)
                : r("DOM").setContent(e, t)),
              n
                ? ((this.$17 = !0), this.$21(r("emptyFunction")))
                : (this.$17 = !1),
              this.$6 != null && this.$6());
          }),
          (n.cancel = function () {
            this.$8 && this.$8.abort();
          }),
          (n.abandon = function () {
            this.$8 &&
              (this.$8.abandon(),
              this.$8 instanceof r("AsyncRequest") &&
                this.$8.setInitialHandler(function () {
                  return !1;
                }));
          }),
          (n.setUseAjaxPipe = function (t) {
            return ((this.$10 = !!t), this);
          }),
          (n.setUsePostRequest = function (t) {
            return ((this.$12 = !!t), this);
          }),
          (n.setAppend = function (t) {
            return ((this.$14 = !!t), this);
          }),
          (n.setJSNonBlock = function (t) {
            return ((this.$19 = !!t), this);
          }),
          (n.setAutomatic = function (t) {
            return ((this.$20 = !!t), this);
          }),
          (n.setDisplayCallback = function (t) {
            return ((this.$21 = t), this);
          }),
          (n.setConstHeight = function (t) {
            return ((this.$18 = !!t), this);
          }),
          (n.setFinallyHandler = function (t) {
            return ((this.$22 = t), this);
          }),
          (n.setAllowIrrelevantRequests = function (t) {
            return ((this.$23 = t), this);
          }),
          (n.setActorID = function (t) {
            return ((this.$24 = t), this);
          }),
          (n.setCacheContent = function (t) {
            return ((this.$15 = t), this);
          }),
          (n.setContentCacheKey = function (t) {
            return ((this.$16 = t), this);
          }),
          (n.isContentCached = function () {
            return this.$17;
          }),
          (n.$25 = function (t) {
            ((this.$8 = t), (this.$9 = t));
          }),
          (t.appendToInline = function (t, n) {
            var e = r("ge")(t),
              o = r("ge")(n);
            if (e && o) {
              for (; o.firstChild; ) r("DOM").appendContent(e, o.firstChild);
              r("DOM").remove(o);
            }
          }),
          (t.loadFromEndpoint = function (o, a, i, l) {
            l = l || {};
            var n = "/ajax/pagelet/generic.php/" + o;
            (l.intern && (n = "/intern" + n),
              l.query && (n = n + "?" + l.query));
            var s = new (e || (e = r("URI")))(n.replace(/\/+/g, "/"));
            l.subdomain && s.setSubdomain(l.subdomain);
            var u = !1,
              c = "";
            l.contentCacheKey &&
              ((u = !0), (c = o + "," + String(l.contentCacheKey)));
            var d = new t(a, s, i)
              .setUseAjaxPipe(l.usePipe)
              .setBundleOption(l.bundle !== !1)
              .setAppend(l.append)
              .setJSNonBlock(l.jsNonblock)
              .setAutomatic(l.automatic)
              .setDisplayCallback(l.displayCallback)
              .setConstHeight(l.constHeight)
              .setAllowCrossPageTransition(l.crossPage)
              .setFinallyHandler(l.finallyHandler || r("emptyFunction"))
              .setErrorHandler(l.errorHandler)
              .setTransportErrorHandler(l.transportErrorHandler)
              .setAllowIrrelevantRequests(l.allowIrrelevantRequests)
              .setActorID(l.actorID)
              .setCacheContent(u)
              .setContentCacheKey(c)
              .setUsePostRequest(l.usePostRequest);
            return (l.handler && d.setHandler(l.handler), d.go(), d);
          }),
          (t.loadFromEndpointBatched = function (n, o, a) {
            var e = n.slice(0, a),
              i = n.slice(a);
            if (i.length > 0) {
              var l = e[e.length - 1],
                s = r("emptyFunction");
              (l.options &&
                l.options.finallyHandler &&
                (s = l.options.finallyHandler),
                (l.options = babelHelpers.extends({}, l.options, {
                  finallyHandler: function () {
                    (s(),
                      window.setTimeout(function () {
                        t.loadFromEndpointBatched(i, o, a);
                      }, 1));
                  },
                })));
            }
            e.forEach(function (e) {
              t.loadFromEndpoint(
                e.controller,
                e.target_element,
                e.data,
                babelHelpers.extends({}, e.options, o, { bundle: !0 }),
              );
            });
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
