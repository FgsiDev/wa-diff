__d(
  "WAWebBizAiSmartComposerImpressionContext",
  ["react", "react-compiler-runtime", "useWAWebOnUnmount"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useRef,
      p = { current: new Set() },
      _ = new WeakMap(),
      f = s.createContext(p),
      g = new WeakMap();
    function h(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.children,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = new Set()), (t[0] = a))
        : (a = t[0]);
      var i = m(a),
        l;
      (t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            var e = _.get(i);
            e != null && (_.delete(i), e.onExit(e.card));
          }),
          (t[1] = l))
        : (l = t[1]),
        r("useWAWebOnUnmount")(l));
      var u;
      return (
        t[2] !== n
          ? ((u = s.jsx(f.Provider, { value: i, children: n })),
            (t[2] = n),
            (t[3] = u))
          : (u = t[3]),
        u
      );
    }
    function y() {
      return d(f);
    }
    function C(e) {
      var t, n;
      return (t = (n = _.get(e)) == null ? void 0 : n.card) != null ? t : null;
    }
    function b(e, t, n) {
      var r;
      if (e === p) return t;
      var o = (r = _.get(e)) == null ? void 0 : r.card,
        a = t;
      if (
        (o == null ? void 0 : o.stanzaId) != null &&
        o.stanzaId === t.stanzaId
      ) {
        var i,
          l = (i = o.trigger) != null ? i : t.trigger;
        (t.status === "quota_handoff" && (l = null),
          (a = babelHelpers.extends({}, t, { trigger: l })));
      }
      return (_.set(e, { card: a, onExit: n }), a);
    }
    function v(e, t) {
      var n;
      ((n = _.get(e)) == null ? void 0 : n.card) === t && _.delete(e);
    }
    function S(e) {
      _.delete(e);
    }
    function R(e, t) {
      return e === p || e.current.has(t) ? !1 : (e.current.add(t), !0);
    }
    function L(e, t) {
      if (e !== p) {
        e.current.delete(t);
        var n = g.get(e);
        n != null && (n.delete(t), n.size === 0 && g.delete(e));
      }
    }
    function E(e, t) {
      if (e !== p)
        for (var n of e.current) n.startsWith(t) && e.current.delete(n);
    }
    function k(e, t, n) {
      return e === p || !e.current.delete(t) ? !1 : (e.current.add(n), !0);
    }
    function I(e, t, n) {
      if (e === p) return n;
      var r = g.get(e);
      r == null && ((r = new Map()), g.set(e, r));
      var o = r.get(t);
      return o != null ? o : (r.set(t, n), n);
    }
    ((l.WAWebBizAiSmartComposerImpressionProvider = h),
      (l.useWAWebBizAiSmartComposerImpressions = y),
      (l.getSmartComposerShownCard = C),
      (l.registerSmartComposerShownCard = b),
      (l.forgetSmartComposerShownCard = v),
      (l.discardSmartComposerShownCardWithoutExit = S),
      (l.markSmartComposerImpression = R),
      (l.forgetSmartComposerImpression = L),
      (l.forgetSmartComposerImpressionsWithPrefix = E),
      (l.moveSmartComposerImpression = k),
      (l.rememberSmartComposerSuggestionAttribution = I));
  },
  98,
);
