__d(
  "AdsPathLink",
  [
    "AdsCardStatusContext",
    "AdsSimpleCreateSurfaceContext",
    "Alignment",
    "Animation",
    "FBLogger",
    "OnUseEffectUnmount.react",
    "Style",
    "clearTimeout",
    "cr:20036",
    "cr:20037",
    "cr:20038",
    "emptyFunction",
    "react",
    "react-compiler-runtime",
    "setImmediate",
    "setTimeout",
    "useVirtualizationContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useEffect,
      p = u.useInsertionEffect,
      _ = u.useMemo,
      f = u.useRef,
      g = 500,
      h = 5,
      y = 2;
    function C(e, t) {
      return [].concat(e, [t]).filter(Boolean).map(String).join(".");
    }
    function b(e, t) {
      return "adsPathScrollAnchor-" + C(e, t).replace(/\./g, "-");
    }
    var v = s.createContext({
        fieldExistsFor: function () {
          return !1;
        },
        activatePath: r("emptyFunction"),
        subscribeField: function () {
          return r("emptyFunction");
        },
        subscribeTrigger: function () {
          return r("emptyFunction");
        },
      }),
      S = (function (e) {
        function t() {
          for (var t, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
            a[i] = arguments[i];
          return (
            (t = e.call.apply(e, [this].concat(a)) || this),
            (t.$1 = new Map()),
            (t.$2 = new Set()),
            (t.$5 = function () {
              (t.$2.clear(), r("clearTimeout")(t.$4));
            }),
            (t.$6 = function (e, r) {
              n("cr:20037") == null ||
                n("cr:20038") == null ||
                n("cr:20036") == null ||
                (t.$3 === e && (t.$3 = null),
                t.$3 == null &&
                  (r == null
                    ? n("cr:20037").endSuccess(
                        n("cr:20038")._(270209456, "2902"),
                      )
                    : (n("cr:20037").addAnnotations(
                        n("cr:20038")._(270209456, "2902"),
                        { string: { error_message: r } },
                      ),
                      n("cr:20037").endFailure(
                        n("cr:20038")._(270209456, "2902"),
                        r,
                      ))));
            }),
            (t.$9 = function (e, n) {
              return e == null || !Array.isArray(e)
                ? (r("FBLogger")("ads").warn(
                    "Using AdsPathLink with a incorrect path (should be array)",
                    JSON.stringify(e),
                  ),
                  !1)
                : t.$10(e, n) != null;
            }),
            (t.$11 = function (e, n, r, o) {
              var a = e
                .map(function (e) {
                  return C(e, n);
                })
                .toSet();
              return (
                a.forEach(function (e) {
                  (t.$1.set(e, {
                    callback: r,
                    fallbackPath: o != null && C(o, n) !== e ? o : null,
                  }),
                    t.$3 != null && e === t.$3 && t.$8(r, e.split(".")));
                }),
                t.$12(),
                function () {
                  (a.forEach(function (e) {
                    var n;
                    (n = t.$1.get(e)) == null || delete n.callback;
                  }),
                    t.$12());
                }
              );
            }),
            (t.$13 = function (e) {
              return (
                t.$2.has(e) || t.$2.add(e),
                function () {
                  t.$2.delete(e);
                }
              );
            }),
            (t.$12 = function () {
              r("setImmediate")(function () {
                t.$2.forEach(function (e) {
                  return e();
                });
              });
            }),
            (t.$10 = function (e, n) {
              var r = C(e, n),
                o = t.$1.get(r);
              if (o != null) {
                var a = o.callback,
                  i = o.fallbackPath,
                  l = e;
                if (a == null && i != null) {
                  l = i;
                  var s = t.$1.get(C(i));
                  ((a = s == null ? void 0 : s.callback),
                    (i = s == null ? void 0 : s.fallbackPath));
                }
                return a != null ? { path: l, callback: a } : null;
              }
              return null;
            }),
            (t.$14 = function (e, r, o) {
              n("cr:20037") != null &&
                n("cr:20038") != null &&
                n("cr:20036") != null &&
                (n("cr:20037").start(n("cr:20038")._(270209456, "2902")),
                n("cr:20037").addAnnotations(
                  n("cr:20038")._(270209456, "2902"),
                  { string_array: { target_path: e } },
                ));
              var a = t.$10(e, r),
                i = !1,
                l = !1;
              if (a != null) {
                var s = a.callback,
                  u = a.path;
                (n("cr:20037") != null &&
                  n("cr:20038") != null &&
                  n("cr:20036") != null &&
                  (n("cr:20037").addPoint(
                    n("cr:20038")._(270209456, "2902"),
                    "path_activated",
                  ),
                  n("cr:20037").addAnnotations(
                    n("cr:20038")._(270209456, "2902"),
                    { string_array: { activated_path: u } },
                  )),
                  s && s(u, r, o, t.$6),
                  (i = u === e),
                  (l = s != null));
              }
              (!i &&
                !t.$3 &&
                ((t.$3 = C(e, r)),
                n("cr:20037") != null &&
                  n("cr:20038") != null &&
                  n("cr:20036") != null &&
                  (n("cr:20037").addPoint(
                    n("cr:20038")._(270209456, "2902"),
                    "pending_path_registered",
                  ),
                  n("cr:20037").addAnnotations(
                    n("cr:20038")._(270209456, "2902"),
                    { string_array: { pending_path: e } },
                  ))),
                n("cr:20037") != null &&
                  n("cr:20038") != null &&
                  n("cr:20036") != null &&
                  n("cr:20037").addAnnotations(
                    n("cr:20038")._(270209456, "2902"),
                    {
                      bool: {
                        is_target_path_activated: i,
                        has_valid_callback: l,
                      },
                    },
                  ));
            }),
            (t.$7 = {
              fieldExistsFor: t.$9,
              subscribeField: t.$11,
              subscribeTrigger: t.$13,
              activatePath: t.$14,
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var o = t.prototype;
        return (
          (o.render = function () {
            return s.jsxs(s.Fragment, {
              children: [
                s.jsx(r("OnUseEffectUnmount.react"), { callback: this.$5 }),
                s.jsx(v.Provider, {
                  value: this.$7,
                  children: this.props.children,
                }),
              ],
            });
          }),
          (o.$8 = function (t, o) {
            var e = this;
            (n("cr:20037") != null &&
              n("cr:20038") != null &&
              n("cr:20036") != null &&
              (n("cr:20037").addPoint(
                n("cr:20038")._(270209456, "2902"),
                "pending_path_activated",
              ),
              n("cr:20037").addAnnotations(n("cr:20038")._(270209456, "2902"), {
                string_array: { activated_pending_path: o },
              })),
              r("clearTimeout")(this.$4));
            var a = 0,
              i = function () {
                var l = t(o, null, null, e.$6);
                (!l &&
                  a < h &&
                  ((a += 1), (e.$4 = r("setTimeout")(i, 1e3 * Math.pow(2, a)))),
                  n("cr:20037") != null &&
                    n("cr:20038") != null &&
                    n("cr:20036") != null &&
                    (n("cr:20037").addPoint(
                      n("cr:20038")._(270209456, "2902"),
                      "pending_path_scroll_attempt",
                    ),
                    n("cr:20037").addAnnotations(
                      n("cr:20038")._(270209456, "2902"),
                      { int: { pending_path_scroll_attempts: a } },
                    )));
              };
            i();
          }),
          t
        );
      })(s.Component),
      R = s.createContext(null),
      L = s.createContext({
        subscribeToActivation: function (t) {
          return r("emptyFunction");
        },
        subscribeToBeforeActivation: function (t) {
          return r("emptyFunction");
        },
      });
    function E(e) {
      var t = e.children,
        o = e.disableActivationCallbacks,
        a = e.field,
        i = e.paths,
        l = e.scrollDuration,
        u = l === void 0 ? g : l,
        h = e.scrollOffsetY,
        S = h === void 0 ? -10 : h,
        R = e.addInputPathsFromCardContext,
        E = R === void 0 ? r("emptyFunction") : R,
        k = e.deleteInputPathsFromCardContext,
        I = k === void 0 ? r("emptyFunction") : k,
        T = d(v),
        D = T.subscribeField,
        x = d(r("AdsSimpleCreateSurfaceContext")),
        $ = r("useVirtualizationContext")(),
        P = $.contentWrapperRef,
        N = f(null),
        M = f(new Set()),
        w = f(new Set()),
        A = c(function (e, t, n, r) {
          e.forEach(function (e) {
            e(t, n, r);
          });
        }, []),
        F = c(
          function (e, t) {
            var n,
              o = (n = r("Alignment")).measure(
                new n.Anchor(e, n.Anchor.LEFT, n.Anchor.TOP),
                new n.Anchor(t, n.Anchor.LEFT, n.Anchor.TOP),
              );
            return o.y + S;
          },
          [S],
        ),
        O = c(
          function (e, t, n) {
            N.current = new (r("Animation"))(e)
              .by("scrollTop", t)
              .duration(u)
              .ease(r("Animation").ease.end)
              .ondone(n)
              .goAndStopOthers();
          },
          [u],
        ),
        B = c(
          function (e, t, o, a) {
            var i = C(e, t);
            n("cr:20037") != null &&
              n("cr:20038") != null &&
              n("cr:20036") != null &&
              n("cr:20037").addPoint(
                n("cr:20038")._(270209456, "2902"),
                "scroll_and_activate",
              );
            var l = P.current == null && x;
            if (P.current != null || l) {
              var s = document.querySelector("." + b(e, t)),
                u =
                  (s == null ? void 0 : s.offsetParent) == null ? P.current : s;
              if (u) {
                var c, d, m;
                A(w.current, e, t, o);
                var p = r("Style").getScrollParent(u);
                ((c = p) == null ? void 0 : c.scrollTop) === 0 &&
                  ((d = p) == null ? void 0 : d.clientHeight) >=
                    ((m = p) == null ? void 0 : m.scrollHeight) &&
                  (p = r("Style").getScrollParent(p.parentNode));
                var _ = 0,
                  f = function () {
                    var r = F(p, u);
                    if (
                      (n("cr:20037") != null &&
                        n("cr:20038") != null &&
                        n("cr:20036") != null &&
                        n("cr:20037").addPoint(
                          n("cr:20038")._(270209456, "2902"),
                          "scroll_animation_done",
                        ),
                      r !== 0 && _ < y)
                    ) {
                      (_++, O(p, r, f));
                      return;
                    }
                    (A(M.current, e, t, o), a != null && a(i));
                  },
                  g = F(p, u);
                return (O(p, g, f), g >= 0);
              }
              a != null && a(i, "Scroll target node not found");
            }
            return (a != null && a(i, "Scroll target not mounted"), !1);
          },
          [O, P, F, x, A],
        ),
        W = c(
          function (e) {
            return o
              ? r("emptyFunction")
              : (M.current.add(e),
                function () {
                  M.current.delete(e);
                });
          },
          [o],
        ),
        q = c(
          function (e) {
            return o
              ? r("emptyFunction")
              : (w.current.add(e),
                function () {
                  w.current.delete(e);
                });
          },
          [o],
        ),
        U = c(
          function (e, t) {
            E != null && E(e, t);
            var n = D(e, t, B);
            return function () {
              (n(), I != null && I(e, t));
            };
          },
          [E, D, I, B],
        );
      (m(function () {
        return function () {
          var e;
          (e = N.current) == null || e.stop();
        };
      }, []),
        p(
          function () {
            var e = U(i, a);
            return function () {
              e();
            };
          },
          [U],
        ));
      var V = _(
          function () {
            return { subscribeToActivation: W, subscribeToBeforeActivation: q };
          },
          [W, q],
        ),
        H = _(
          function () {
            return i
              .map(function (e) {
                return b(e, a);
              })
              .join(" ");
          },
          [a, i],
        );
      return t == null
        ? null
        : s.jsxs(L.Provider, {
            value: V,
            children: [
              s.jsx("span", { "aria-hidden": "true", className: H }),
              t,
            ],
          });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = o("react-compiler-runtime").c(3),
        n = d(R),
        r = e.fallbackPath,
        a = r != null ? r : n,
        i;
      return (
        t[0] !== e || t[1] !== a
          ? ((i = s.jsx(E, babelHelpers.extends({}, e, { fallbackPath: a }))),
            (t[0] = e),
            (t[1] = a),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = s.jsx(r("AdsCardStatusContext").Consumer, {
              children: function (n) {
                var t = n.addInputPaths,
                  r = n.deleteInputPaths;
                return s.jsx(
                  k,
                  babelHelpers.extends({}, e, {
                    addInputPathsFromCardContext: t,
                    deleteInputPathsFromCardContext: r,
                  }),
                );
              },
            })),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    var T = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.$2 = function () {
            return t.forceUpdate();
          }),
          (t.$3 = function (e) {
            (t.context.activatePath(t.props.path, t.props.field, t.props.index),
              t.props.logActivation && t.props.logActivation(e));
          }),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.componentDidMount = function () {
          this.$1 = this.context.subscribeTrigger(this.$2);
        }),
        (n.componentWillUnmount = function () {
          this.$1 && this.$1();
        }),
        (n.render = function () {
          return (
            this.props.renderTrigger(
              this.context.fieldExistsFor(this.props.path, this.props.field),
              this.$3,
            ) || null
          );
        }),
        t
      );
    })(s.Component);
    T.contextType = v;
    function D(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        r = e.onActivate,
        a = e.onBeforeActivate,
        i = d(L),
        l,
        s;
      return (
        t[0] !== i || t[1] !== r || t[2] !== a
          ? ((l = function () {
              if (
                i != null &&
                i.subscribeToActivation &&
                i != null &&
                i.subscribeToBeforeActivation
              ) {
                var e = [];
                return (
                  r && e.push(i.subscribeToActivation(r)),
                  a && e.push(i.subscribeToBeforeActivation(a)),
                  function () {
                    e.forEach(x);
                  }
                );
              }
            }),
            (s = [i, a, r]),
            (t[0] = i),
            (t[1] = r),
            (t[2] = a),
            (t[3] = l),
            (t[4] = s))
          : ((l = t[3]), (s = t[4])),
        m(l, s),
        n
      );
    }
    function x(e) {
      return e();
    }
    ((l.buildPathKey = C),
      (l.buildPathKeyForScrollAnchor = b),
      (l.AdsPathLinkContext = v),
      (l.Container = S),
      (l.AdsPathLinkFieldFallbackContext = R),
      (l.AdsPathLinkField = k),
      (l.Field = I),
      (l.Trigger = T),
      (l.Activatable = D));
  },
  98,
);
