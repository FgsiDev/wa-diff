__d(
  "LexicalList.prod",
  [
    "Lexical",
    "LexicalExtensionNamedSignals",
    "LexicalExtensionSignals",
    "LexicalHtml",
    "LexicalUtils",
  ],
  function $module_LexicalList_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_Lexical;
    var _require_LexicalHtml;
    function s(e) {
      for (
        var _len = arguments.length,
          t = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        t[_key - 1] = arguments[_key];
      }
      throw function (e) {
        var n = new URL("https://lexical.dev/docs/error"),
          r = new URLSearchParams();
        r.append("code", e);
        for (
          var _len2 = arguments.length,
            t = new Array(_len2 > 1 ? _len2 - 1 : 0),
            _key2 = 1;
          _key2 < _len2;
          _key2++
        ) {
          t[_key2 - 1] = arguments[_key2];
        }
        for (var _e2 of t) r.append("v", _e2);
        return (
          (n.search = r.toString()),
          new Error(
            "Minified Lexical error #" +
              e +
              "; visit " +
              n.toString() +
              " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
          )
        );
      }.apply(void 0, [e].concat(Array.from(t)));
    }
    function o(e) {
      var t = 1,
        n = e.getParent();
      for (; null != n; ) {
        if (I(n)) {
          var _e3 = n.getParent();
          if (H(_e3)) {
            (t++, (n = _e3.getParent()));
            continue;
          }
          s(40);
        }
        return t;
      }
      return t;
    }
    function l(e) {
      var t = e.getParent();
      H(t) || s(40);
      var n = t,
        r = t;
      for (; null !== r; ) ((r = r.getParent()), H(r) && (n = r));
      return n;
    }
    function c(e) {
      var t = [];
      var n = e.getChildren().filter(I);
      for (var _e4 = 0; _e4 < n.length; _e4++) {
        var _r = n[_e4],
          _i = _r.getFirstChild();
        H(_i) ? (t = t.concat(c(_i))) : t.push(_r);
      }
      return t;
    }
    function a(e) {
      return I(e) && H(e.getFirstChild());
    }
    function u(e, t) {
      return t.getValue();
    }
    function d(e, t) {
      return (
        I(e) &&
        (0 === t.length ||
          (1 === t.length && e.is(t[0]) && 0 === e.getChildrenSize()))
      );
    }
    function g(e, n) {
      return H(e) ? require("Lexical").$copyNode(e).setListType(n) : K(n);
    }
    function h(e) {
      var n = require("Lexical").$getSelection();
      if (null !== n) {
        var _r2 = n.getNodes();
        if (require("Lexical").$isRangeSelection(n)) {
          var _n$getStartEndPoints = n.getStartEndPoints(),
            _i2 = _n$getStartEndPoints[0],
            _s = _i2.getNode(),
            _o = _s.getParent();
          if (require("Lexical").$isRootOrShadowRoot(_s)) {
            var _e5 = _s.getFirstChild();
            if (_e5) _r2 = _e5.selectStart().getNodes();
            else {
              var _e6 = require("Lexical").$createParagraphNode();
              (_s.append(_e6), (_r2 = _e6.select().getNodes()));
            }
          } else if (d(_s, _r2)) {
            if (require("Lexical").$isRootOrShadowRoot(_o)) {
              var _n = K(e);
              _s.replace(_n);
              var _r3 = F();
              (require("Lexical").$isElementNode(_s) &&
                (_r3.setFormat(_s.getFormatType()),
                _r3.setIndent(_s.getIndent())),
                _n.append(_r3));
            } else if (I(_s)) {
              var _n2 = _s.getParentOrThrow();
              if (null === require("Lexical").$getSlotHost(_n2)) {
                var _t = g(_n2, e);
                (f(_t, _n2.getChildren()), _n2.replace(_t));
              }
            }
            return;
          }
        }
        var _i3 = new Set();
        for (var _n3 = 0; _n3 < _r2.length; _n3++) {
          var _s2 = _r2[_n3];
          if (
            require("Lexical").$isElementNode(_s2) &&
            _s2.isEmpty() &&
            !I(_s2) &&
            null === require("Lexical").$getSlotHost(_s2) &&
            !_i3.has(_s2.getKey())
          ) {
            p(_s2, e);
            continue;
          }
          var _o2 = require("Lexical").$isLeafNode(_s2)
            ? _s2.getParent()
            : I(_s2) && _s2.isEmpty()
              ? _s2
              : null;
          for (; null != _o2; ) {
            var _n4 = _o2.getKey();
            if (H(_o2)) {
              if (
                !_i3.has(_n4) &&
                null === require("Lexical").$getSlotHost(_o2)
              ) {
                var _t2 = g(_o2, e);
                (f(_t2, _o2.getChildren()), _o2.replace(_t2), _i3.add(_n4));
              }
              break;
            }
            {
              var _r4 = _o2.getParent();
              if (
                require("Lexical").$isRootOrShadowRoot(_r4) &&
                !_i3.has(_n4)
              ) {
                (_i3.add(_n4), p(_o2, e));
                break;
              }
              _o2 = _r4;
            }
          }
        }
      }
    }
    function f(e, t) {
      e.splice(e.getChildrenSize(), 0, t);
    }
    function p(e, n) {
      if (H(e)) return e;
      var r = e.getPreviousSibling(),
        i = e.getNextSibling(),
        s = F();
      var o;
      if ((f(s, e.getChildren()), H(r) && n === r.getListType()))
        (r.append(s),
          H(i) && n === i.getListType() && (f(r, i.getChildren()), i.remove()),
          (o = r));
      else if (H(i) && n === i.getListType())
        (i.getFirstChildOrThrow().insertBefore(s), (o = i));
      else {
        var _t3 = K(n);
        (_t3.append(s), e.replace(_t3), (o = _t3));
      }
      (s.setFormat(e.getFormatType()), s.setIndent(e.getIndent()));
      var l = require("Lexical").$getSelection();
      return (
        require("Lexical").$isRangeSelection(l) &&
          (o.getKey() === l.anchor.key &&
            l.anchor.set(s.getKey(), l.anchor.offset, "element"),
          o.getKey() === l.focus.key &&
            l.focus.set(s.getKey(), l.focus.offset, "element")),
        e.remove(),
        o
      );
    }
    function m(e, t) {
      var n = e.getLastChild(),
        r = t.getFirstChild();
      n &&
        r &&
        a(n) &&
        a(r) &&
        n.getFirstChild().getListType() === r.getFirstChild().getListType() &&
        (m(n.getFirstChild(), r.getFirstChild()), r.remove());
      var i = t.getChildren();
      (i.length > 0 && e.append.apply(e, Array.from(i)), t.remove());
    }
    function _() {
      var n = require("Lexical").$getSelection();
      if (require("Lexical").$isRangeSelection(n)) {
        var _r5 = new Set(),
          _i4 = n.getNodes(),
          _s3 = n.anchor.getNode();
        if (d(_s3, _i4)) _r5.add(l(_s3));
        else
          for (var _n5 = 0; _n5 < _i4.length; _n5++) {
            var _s4 = _i4[_n5];
            if (require("Lexical").$isLeafNode(_s4)) {
              var _t4 = require("LexicalUtils").$getNearestNodeOfType(_s4, _M);
              null != _t4 && _r5.add(l(_t4));
            }
          }
        for (var _e7 of _r5) {
          if (null !== require("Lexical").$getSlotHost(_e7)) continue;
          var _r6 = _e7;
          var _i5 = c(_e7);
          for (var _e8 of _i5) {
            var _i6 = require("Lexical")
              .$createParagraphNode()
              .setTextStyle(n.style)
              .setTextFormat(n.format);
            (_i6
              .setFormat(_e8.getFormatType())
              .setIndent(_e8.getIndent())
              .setDirection(_e8.getDirection())
              .setStyle(_e8.getStyle()),
              f(_i6, _e8.getChildren()),
              _r6.insertAfter(_i6),
              (_r6 = _i6),
              _e8.__key === n.anchor.key &&
                require("Lexical").$setPointFromCaret(
                  n.anchor,
                  require("Lexical").$normalizeCaret(
                    require("Lexical").$getChildCaretAtIndex(
                      _i6,
                      n.anchor.offset,
                      "next",
                    ),
                  ),
                ),
              _e8.__key === n.focus.key &&
                require("Lexical").$setPointFromCaret(
                  n.focus,
                  require("Lexical").$normalizeCaret(
                    require("Lexical").$getChildCaretAtIndex(
                      _i6,
                      n.focus.offset,
                      "next",
                    ),
                  ),
                ),
              _e8.remove());
          }
          _e7.remove();
        }
      }
    }
    function y(e) {
      var t = "check" !== e.getListType();
      var n = e.getStart();
      for (var _r7 of e.getChildren())
        I(_r7) &&
          (_r7.getValue() !== n && _r7.setValue(n),
          t && null != _r7.getLatest().__checked && _r7.setChecked(void 0),
          H(_r7.getFirstChild()) || n++);
    }
    function C(e) {
      var n = new Set();
      if (a(e) || n.has(e.getKey())) return;
      var r = e.getParent(),
        i = e.getNextSibling(),
        s = e.getPreviousSibling();
      if (a(i) && a(s)) {
        var _t5 = s.getFirstChild();
        if (H(_t5)) {
          _t5.append(e);
          var _r8 = i.getFirstChild();
          H(_r8) &&
            _t5.getListType() === _r8.getListType() &&
            (f(_t5, _r8.getChildren()), i.remove(), n.add(i.getKey()));
        }
      } else if (a(i)) {
        var _t6 = i.getFirstChild();
        if (H(_t6)) {
          var _n6 = _t6.getFirstChild();
          null !== _n6 && _n6.insertBefore(e);
        }
      } else if (a(s)) {
        var _t7 = s.getFirstChild();
        H(_t7) && _t7.append(e);
      } else if (H(r)) {
        var _n7 = require("Lexical").$copyNode(e),
          _o3 = require("Lexical").$copyNode(r);
        (_n7.append(_o3),
          _o3.append(e),
          s ? s.insertAfter(_n7) : i ? i.insertBefore(_n7) : r.append(_n7));
      }
    }
    function S(e) {
      if (a(e)) return;
      var n = e.getParent(),
        r = n ? n.getParent() : void 0;
      if (H(r ? r.getParent() : void 0) && I(r) && H(n)) {
        var _i7 = n ? n.getFirstChild() : void 0,
          _s5 = n ? n.getLastChild() : void 0;
        if (e.is(_i7)) (r.insertBefore(e), n.isEmpty() && r.remove());
        else if (e.is(_s5)) (r.insertAfter(e), n.isEmpty() && r.remove());
        else {
          var _require_Lexical;
          var _i8 = (_require_Lexical = require("Lexical")).$copyNode(e),
            _s6 = _require_Lexical.$copyNode(n);
          (_i8.append(_s6),
            e.getPreviousSiblings().forEach(function (e) {
              return _s6.append(e);
            }));
          var _o4 = _require_Lexical.$copyNode(e),
            _l = _require_Lexical.$copyNode(n);
          (_o4.append(_l),
            f(_l, e.getNextSiblings()),
            r.insertBefore(_i8),
            r.insertAfter(_o4),
            r.replace(e));
        }
      }
    }
    function N(e) {
      if (e === void 0) {
        e = !1;
      }
      var n = require("Lexical").$getSelection();
      if (!require("Lexical").$isRangeSelection(n) || !n.isCollapsed())
        return !1;
      var r = n.anchor.getNode();
      var i = null;
      if (I(r) && 0 === r.getChildrenSize()) i = r;
      else if (require("Lexical").$isTextNode(r)) {
        var _e9 = r.getParent();
        I(_e9) &&
          _e9.getChildren().every(function (e) {
            return (
              require("Lexical").$isTextNode(e) &&
              "" === e.getTextContent().trim()
            );
          }) &&
          (i = _e9);
      }
      if (null === i) return !1;
      var o = l(i),
        c = i.getParent();
      H(c) || s(40);
      var a = c.getParent();
      var d;
      if (require("Lexical").$isRootOrShadowRoot(a))
        ((d = require("Lexical").$createParagraphNode()), o.insertAfter(d));
      else {
        if (!I(a)) return !1;
        ((d = require("Lexical").$copyNode(a)), a.insertAfter(d));
      }
      d.setTextStyle(n.style).setTextFormat(n.format).select();
      var g = i.getNextSiblings();
      if (g.length > 0) {
        var _n8 = e ? u(0, i) : 1,
          _r9 = require("Lexical").$copyNode(c).setStart(_n8);
        if (I(d)) {
          var _e0 = require("Lexical").$copyNode(d);
          (_e0.append(_r9), d.insertAfter(_e0));
        } else d.insertAfter(_r9);
        _r9.append.apply(_r9, Array.from(g));
      }
      return (
        (function (e) {
          var t = e;
          for (
            ;
            null == t.getNextSibling() && null == t.getPreviousSibling();
          ) {
            var _e1 = t.getParent();
            if (null == _e1 || (!I(_e1) && !H(_e1))) break;
            t = _e1;
          }
          t.remove();
        })(i),
        !0
      );
    }
    var T = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function x(e, t) {
      if ("number" == typeof e) return Number.isFinite(e) ? e : t;
      if ("string" != typeof e || !T.test(e)) return t;
      var n = Number(e);
      return Number.isFinite(n) ? n : t;
    }
    function L(e, t) {
      ((e.__listType = t.__listType),
        (e.__start = t.__start),
        (e.__tag = t.__tag));
    }
    var v = function v(e) {
      var _require_Lexical;
      var n = (_require_Lexical = require("Lexical")).getterTableOf(
          e,
          "format",
        ),
        r = _require_Lexical.setterTableOf(e, "format"),
        i = _require_Lexical.setterDefaultOf(e, "format"),
        s = _require_Lexical.aliasTableOf(e, "listType", 0);
      return {
        exportJSON: function exportJSON(e) {
          var t = e.__textFormat,
            r = e.__textStyle,
            i = (0 !== t || "" !== r) && e.shouldSerializeTextStyles();
          return {
            children: [],
            listType: e.__listType,
            start: e.__start,
            tag: e.__tag,
            direction: e.__dir,
            format: n[e.__format],
            indent: e.__indent,
            textFormat: 0 !== t && i ? t : void 0,
            textStyle: "" !== r && i ? r : void 0,
            type: e.__type,
            version: 1,
          };
        },
        exportCompactJSON: function exportCompactJSON(e) {
          var t = e.__textFormat,
            r = e.__textStyle,
            i = (0 !== t || "" !== r) && e.shouldSerializeTextStyles(),
            s = { type: e.__type, children: [] },
            o = e.__listType;
          void 0 !== o && "number" !== o && (s.listType = o);
          var l = e.__start;
          void 0 !== l && 1 !== l && (s.start = l);
          var c = e.__dir;
          null != c && (s.direction = c);
          var a = n[e.__format];
          void 0 !== a && "" !== a && (s.format = a);
          var u = e.__indent;
          return (
            void 0 !== u && 0 !== u && (s.indent = u),
            void 0 !== t && 0 !== t && i && (s.textFormat = t),
            void 0 !== r && "" !== r && i && (s.textStyle = r),
            s
          );
        },
        updateFromJSON: function updateFromJSON(e, t) {
          var n = t.direction;
          e.__dir = null === n || "ltr" === n || "rtl" === n ? n : null;
          var o = t.format;
          ((e.__format = "string" == typeof o && o in r ? r[o] : i),
            (e.__indent = (function (e) {
              var t = x(e, 0);
              return t >= 0 && t <= Infinity && Number.isInteger(t) ? t : 0;
            })(t.indent)),
            (e.__textFormat = x(t.textFormat, 0)));
          var l = t.textStyle;
          e.__textStyle = "string" == typeof l ? l : "";
          var c = t.listType;
          return (
            e.setListType(
              "string" == typeof c && c in s
                ? s[c]
                : "number" === c || "bullet" === c || "check" === c
                  ? c
                  : "number",
            ),
            (e.__start = x(t.start, 1)),
            e
          );
        },
        afterCloneFrom: L,
      };
    };
    function O(e, t) {
      ((e.__checked = t.__checked), (e.__value = t.__value));
    }
    var b = function b(e) {
        var n = require("Lexical").getterTableOf(e, "format"),
          r = require("Lexical").setterTableOf(e, "format"),
          i = require("Lexical").setterDefaultOf(e, "format");
        return {
          exportJSON: function exportJSON(e) {
            var t = e.__textFormat,
              r = e.__textStyle,
              i = (0 !== t || "" !== r) && e.shouldSerializeTextStyles();
            return {
              children: [],
              checked: e.getChecked(),
              indent: e.getIndent(),
              value: e.__value,
              direction: e.__dir,
              format: n[e.__format],
              textFormat: 0 !== t && i ? t : void 0,
              textStyle: "" !== r && i ? r : void 0,
              type: e.__type,
              version: 1,
            };
          },
          exportCompactJSON: function exportCompactJSON(e) {
            var t = e.__textFormat,
              r = e.__textStyle,
              i = (0 !== t || "" !== r) && e.shouldSerializeTextStyles(),
              s = { type: e.__type, children: [] },
              o = e.getChecked();
            void 0 !== o && (s.checked = o);
            var l = e.getIndent();
            void 0 !== l && 0 !== l && (s.indent = l);
            var c = e.__value;
            void 0 !== c && 1 !== c && (s.value = c);
            var a = e.__dir;
            null != a && (s.direction = a);
            var u = n[e.__format];
            return (
              void 0 !== u && "" !== u && (s.format = u),
              void 0 !== t && 0 !== t && i && (s.textFormat = t),
              void 0 !== r && "" !== r && i && (s.textStyle = r),
              s
            );
          },
          updateFromJSON: function updateFromJSON(e, t) {
            var n = t.direction;
            e.__dir = null === n || "ltr" === n || "rtl" === n ? n : null;
            var s = t.format;
            ((e.__format = "string" == typeof s && s in r ? r[s] : i),
              e.setIndent(
                (function (e) {
                  var t = x(e, NaN);
                  return Number.isFinite(t) && Number.isInteger(t)
                    ? t < 0
                      ? 0
                      : t > 128
                        ? 128
                        : t
                    : 0;
                })(t.indent),
              ),
              (e.__textFormat = x(t.textFormat, 0)));
            var o = t.textStyle;
            e.__textStyle = "string" == typeof o ? o : "";
            var l = t.checked;
            return (
              (e.__checked =
                void 0 === l ? void 0 : "boolean" == typeof l && l),
              (e.__value = x(t.value, 1)),
              e
            );
          },
          afterCloneFrom: O,
        };
      },
      $ = (_require_Lexical = require("Lexical")).nodeSchema()({
        checked: _require_Lexical.withAccessors(
          _require_Lexical.optional(_require_Lexical.booleanValue()),
          { setter: { field: "__checked" } },
        ),
        indent: _require_Lexical.numberValue(0, {
          clamp: !0,
          integer: !0,
          max: 128,
          min: 0,
        }),
        value: _require_Lexical.withField(_require_Lexical.numberValue(1), {
          field: "__value",
        }),
      });
    var _M = (function (_t$ElementNode) {
      function M(e, t, n) {
        var _this;
        if (e === void 0) {
          e = 1;
        }
        if (t === void 0) {
          t = void 0;
        }
        ((_this = _t$ElementNode.call(this, n) || this),
          (_this.__value = void 0 === e ? 1 : e),
          (_this.__checked = t));
        return _this;
      }
      babelHelpers.inheritsLoose(M, _t$ElementNode);
      var _proto = M.prototype;
      _proto.$config = function $config() {
        return this.config("listitem", {
          $transform: function $transform(e) {
            var n = e.getParent();
            if (H(n))
              "check" !== n.getListType() &&
                null != e.getChecked() &&
                e.setChecked(void 0);
            else if (n) {
              var _r0 = e.createParentElementNode();
              H(_r0) || s(340);
              var _i9 = [e];
              for (var _n9 of ["previous", "next"]) {
                _i9.reverse();
                for (var _ref2 of require("Lexical").$getSiblingCaret(e, _n9)) {
                  var _r1 = _ref2.origin;
                  if (!I(_r1)) break;
                  _i9.push(_r1);
                }
              }
              (e.insertBefore(_r0),
                _r0.splice(0, 0, _i9),
                require("Lexical").$isRootOrShadowRoot(n) ||
                  (require("Lexical").$insertNodeToNearestRootAtCaret(
                    _r0,
                    require("Lexical").$rewindSiblingCaret(
                      require("Lexical").$getSiblingCaret(_r0, "next"),
                    ),
                    {
                      $shouldSplit: function $shouldSplit() {
                        return !1;
                      },
                      removeEmptyDestination: !0,
                    },
                  ),
                  n.isEmpty() && n.isAttached() && n.remove()));
            }
          },
          extends: require("Lexical").ElementNode,
          generated: b,
          importDOM: require("Lexical").buildImportMap({
            li: function li() {
              return { conversion: k, priority: 0 };
            },
          }),
          json: $,
        });
      };
      _proto.createDOM = function createDOM(e) {
        var n = require("Lexical").$getDocument().createElement("li");
        return (this.updateListItemDOM(null, n, e), n);
      };
      _proto.updateListItemDOM = function updateListItemDOM(e, n, r) {
        (!(function (e, t) {
          var n = t.getParent();
          !H(n) || "check" !== n.getListType() || H(t.getFirstChild())
            ? (e.removeAttribute("role"),
              e.removeAttribute("tabIndex"),
              e.removeAttribute("aria-checked"))
            : (e.setAttribute("role", "checkbox"),
              e.setAttribute("tabIndex", "-1"),
              e.setAttribute(
                "aria-checked",
                t.getChecked() ? "true" : "false",
              ));
        })(n, this),
          (n.value = this.__value),
          (function (e, n, r) {
            var i = n.list;
            if (!i) return;
            var s = i.listitem,
              o = i.nested && i.nested.listitem,
              l = r.getParent(),
              c = H(l) && "check" === l.getListType(),
              a = r.getChecked(),
              u = r.getChildren().some(function (e) {
                return H(e);
              }),
              d = [];
            (void 0 !== i.listitemChecked && d.push(i.listitemChecked),
              void 0 !== i.listitemUnchecked && d.push(i.listitemUnchecked),
              void 0 !== o &&
                d.push.apply(
                  d,
                  Array.from(require("Lexical").normalizeClassNames(o)),
                ),
              d.length > 0 &&
                require("Lexical").removeClassNamesFromElement.apply(
                  require("Lexical"),
                  [e].concat(Array.from(d)),
                ));
            var g = [];
            if (
              (void 0 !== s &&
                g.push.apply(
                  g,
                  Array.from(require("Lexical").normalizeClassNames(s)),
                ),
              c)
            ) {
              var _e10 = a ? i.listitemChecked : i.listitemUnchecked;
              void 0 !== _e10 && g.push(_e10);
            }
            (void 0 !== o &&
              u &&
              g.push.apply(
                g,
                Array.from(require("Lexical").normalizeClassNames(o)),
              ),
              g.length > 0 &&
                require("Lexical").addClassNamesToElement.apply(
                  require("Lexical"),
                  [e].concat(Array.from(g)),
                ));
          })(n, r.theme, this));
        var i = e ? e.__style : "",
          s = this.__style;
        (i !== s && require("Lexical").setDOMStyleFromCSS(n.style, s, i),
          (function (e, n, r) {
            var i = n.__textStyle,
              s = r ? r.__textStyle : "";
            if (null !== r && s === i) return;
            var o = require("Lexical").getStyleObjectFromCSS(i);
            for (var _t8 in o)
              e.style.setProperty("--listitem-marker-" + _t8, o[_t8]);
            if ("" !== s)
              for (var _n0 in require("Lexical").getStyleObjectFromCSS(s))
                _n0 in o || e.style.removeProperty("--listitem-marker-" + _n0);
          })(n, this, e));
      };
      _proto.updateDOM = function updateDOM(e, t, n) {
        var r = t;
        return (this.updateListItemDOM(e, r, n), !1);
      };
      _proto.exportDOM = function exportDOM(e) {
        var n = this.createDOM(e._config),
          r = this.getFormatType();
        r && (n.style.textAlign = r);
        var i = this.getDirection();
        return (
          i && (n.dir = i),
          a(this)
            ? {
                after: function after(e) {
                  if (require("Lexical").isHTMLElement(e)) {
                    var _n1 = e.previousElementSibling;
                    if (
                      require("Lexical").isHTMLElement(_n1) &&
                      "LI" === _n1.nodeName
                    ) {
                      for (; e.firstChild; ) _n1.append(e.firstChild);
                      e.remove();
                    }
                  }
                  return e;
                },
                element: n,
              }
            : { element: n }
        );
      };
      _proto.append = function append() {
        for (var _n10 = 0; _n10 < arguments.length; _n10++) {
          var _r10 =
            _n10 < 0 || arguments.length <= _n10 ? undefined : arguments[_n10];
          if (
            require("Lexical").$isElementNode(_r10) &&
            this.canMergeWith(_r10)
          ) {
            var _e11 = _r10.getChildren();
            (this.append.apply(this, Array.from(_e11)), _r10.remove());
          } else _t$ElementNode.prototype.append.call(this, _r10);
        }
        return this;
      };
      _proto.replace = function replace(e, n) {
        if (I(e)) return _t$ElementNode.prototype.replace.call(this, e);
        this.setIndent(0);
        var r = this.getParentOrThrow();
        if (!H(r)) return e;
        if (r.__first === this.getKey()) r.insertBefore(e);
        else if (r.__last === this.getKey()) r.insertAfter(e);
        else {
          var _n11 = require("Lexical").$copyNode(r);
          var _i0 = this.getNextSibling();
          for (; _i0; ) {
            var _e12 = _i0;
            ((_i0 = _i0.getNextSibling()), _n11.append(_e12));
          }
          (r.insertAfter(e), e.insertAfter(_n11));
        }
        var i = this.__key;
        var o = 0;
        if (
          (n &&
            (require("Lexical").$isElementNode(e) || s(139),
            (o = e.getChildrenSize()),
            e.splice(o, 0, this.getChildren())),
          n && require("Lexical").$isElementNode(e))
        ) {
          var _n12 = require("Lexical").$getSelection();
          if (require("Lexical").$isRangeSelection(_n12))
            for (var _t9 of _n12.getStartEndPoints())
              _t9.key === i &&
                "element" === _t9.type &&
                _t9.set(e.getKey(), o + _t9.offset, "element");
        }
        return (this.remove(), 0 === r.getChildrenSize() && r.remove(), e);
      };
      _proto.insertAfter = function insertAfter(e, n) {
        if (n === void 0) {
          n = !0;
        }
        var r = this.getParentOrThrow();
        if ((H(r) || s(39), I(e)))
          return _t$ElementNode.prototype.insertAfter.call(this, e, n);
        var i = this.getNextSiblings();
        if ((r.insertAfter(e, n), 0 !== i.length)) {
          var _s7 = require("Lexical").$copyNode(r),
            _o5 = i[0];
          ("number" === _s7.getListType() && I(_o5) && _s7.setStart(u(0, _o5)),
            i.forEach(function (e) {
              return _s7.append(e);
            }),
            e.insertAfter(_s7, n));
        }
        return e;
      };
      _proto.remove = function remove(e) {
        var t = this.getPreviousSibling(),
          n = this.getNextSibling();
        (_t$ElementNode.prototype.remove.call(this, e),
          t &&
            n &&
            a(t) &&
            a(n) &&
            t.getFirstChild().getListType() ===
              n.getFirstChild().getListType() &&
            (m(t.getFirstChild(), n.getFirstChild()), n.remove()));
      };
      _proto.resetOnCopyNodeFrom = function resetOnCopyNodeFrom(e) {
        (_t$ElementNode.prototype.resetOnCopyNodeFrom.call(this, e),
          e.getChecked() && this.setChecked(!1));
      };
      _proto.insertNewAfter = function insertNewAfter(e, n) {
        if (n === void 0) {
          n = !0;
        }
        var r = require("Lexical").$copyNode(this);
        return (this.insertAfter(r, n), r);
      };
      _proto.collapseAtStart = function collapseAtStart(e) {
        var _t$$createParagraphNo;
        if (a(this)) return !1;
        var n = this.getParentOrThrow();
        if (I(n.getParentOrThrow())) return (S(this), !0);
        var r = (_t$$createParagraphNo =
            require("Lexical").$createParagraphNode()).append.apply(
            _t$$createParagraphNo,
            Array.from(this.getChildren()),
          ),
          i = this.getNextSiblings();
        if (i.length > 0) {
          var _e13 = require("Lexical").$copyNode(n);
          (_e13.append.apply(_e13, Array.from(i)), n.insertAfter(_e13));
        }
        return (
          n.insertAfter(r),
          this.remove(),
          0 === n.getChildrenSize() && n.remove(),
          r.selectStart(),
          !0
        );
      };
      _proto.getValue = function getValue() {
        return this.getLatest().__value;
      };
      _proto.setValue = function setValue(e) {
        var t = this.getWritable();
        return ((t.__value = e), t);
      };
      _proto.getChecked = function getChecked() {
        var e = this.getLatest();
        var t;
        var n = this.getParent();
        return (
          H(n) && (t = n.getListType()),
          "check" === t ? Boolean(e.__checked) : void 0
        );
      };
      _proto.setChecked = function setChecked(e) {
        var t = this.getWritable();
        return ((t.__checked = e), t);
      };
      _proto.toggleChecked = function toggleChecked() {
        var e = this.getWritable();
        return e.setChecked(!e.__checked);
      };
      _proto.getIndent = function getIndent() {
        var e = this.getParent();
        if (null === e || !this.isAttached()) return this.getLatest().__indent;
        var t = e.getParentOrThrow(),
          n = 0;
        for (; I(t); ) ((t = t.getParentOrThrow().getParentOrThrow()), n++);
        return n;
      };
      _proto.setIndent = function setIndent(e) {
        ("number" != typeof e && s(117), (e = Math.floor(e)) >= 0 || s(199));
        var t = e;
        var n = this.getIndent();
        for (; n !== t; ) n < t ? (C(this), n++) : (S(this), n--);
        return this;
      };
      _proto.canInsertAfter = function canInsertAfter(e) {
        return I(e);
      };
      _proto.canReplaceWith = function canReplaceWith(e) {
        return I(e);
      };
      _proto.canMergeWith = function canMergeWith(e) {
        return I(e) || require("Lexical").$isParagraphNode(e);
      };
      _proto.extractWithChild = function extractWithChild(e, n) {
        if (!require("Lexical").$isRangeSelection(n)) return !1;
        var r = n.anchor.getNode(),
          i = n.focus.getNode();
        return (
          this.isParentOf(r) &&
          this.isParentOf(i) &&
          this.getTextContent().length === n.getTextContent().length
        );
      };
      _proto.isParentRequired = function isParentRequired() {
        return !0;
      };
      _proto.createParentElementNode = function createParentElementNode() {
        return K("bullet");
      };
      _proto.canMergeWhenEmpty = function canMergeWhenEmpty() {
        return !0;
      };
      return M;
    })(_require_Lexical.ElementNode);
    function k(e) {
      if (e.classList.contains("task-list-item"))
        for (var _t0 of e.children) if ("INPUT" === _t0.tagName) return E(_t0);
      if (e.classList.contains("joplin-checkbox"))
        for (var _t1 of e.children)
          if (
            _t1.classList.contains("checkbox-wrapper") &&
            _t1.children.length > 0 &&
            "INPUT" === _t1.children[0].tagName
          )
            return E(_t1.children[0]);
      var n = e.getAttribute("aria-checked"),
        r = F("true" === n || ("false" !== n && void 0));
      return (
        require("Lexical").$setFormatFromDOM(r, e),
        {
          after: A.bind(null, r),
          node: require("Lexical").$setDirectionFromDOM(r, e),
        }
      );
    }
    function E(e) {
      if ("checkbox" !== e.getAttribute("type")) return { node: null };
      var t = F(e.hasAttribute("checked"));
      return { after: A.bind(null, t), node: t };
    }
    function A(e, n) {
      var r = n[0];
      return 1 === n.length &&
        require("Lexical").$isParagraphNode(r) &&
        !e.getFormatType() &&
        r.getFormatType()
        ? (e.setFormat(r.getFormatType()), r.getChildren())
        : n;
    }
    function F(e) {
      return require("Lexical").$applyNodeReplacement(new _M(void 0, e));
    }
    function I(e) {
      return e instanceof _M;
    }
    var P = { ol: "number", ul: "bullet" },
      D = _require_Lexical.nodeSchema()({
        listType: _require_Lexical.withAccessors(
          _require_Lexical.aliasedValue(
            _require_Lexical.enumValue(["number", "bullet", "check"]),
            P,
          ),
          { getter: { field: "__listType" } },
        ),
        start: _require_Lexical.withField(_require_Lexical.numberValue(1), {
          field: "__start",
        }),
        tag: _require_Lexical.withAccessors(
          _require_Lexical.enumValue(["ul", "ol"]),
          { getter: { field: "__tag" }, setter: null },
        ),
      });
    var _R = (function (_t$ElementNode2) {
      function R(e, t, n) {
        var _this2;
        if (e === void 0) {
          e = "number";
        }
        if (t === void 0) {
          t = 1;
        }
        _this2 = _t$ElementNode2.call(this, n) || this;
        var r = P[e] || e;
        ((_this2.__listType = r),
          (_this2.__tag = "number" === r ? "ol" : "ul"),
          (_this2.__start = t));
        return _this2;
      }
      babelHelpers.inheritsLoose(R, _t$ElementNode2);
      var _proto2 = R.prototype;
      _proto2.$config = function $config() {
        return this.config("list", {
          $transform: function $transform(e) {
            (!(function (e) {
              var t = e.getNextSibling();
              H(t) && e.getListType() === t.getListType() && m(e, t);
            })(e),
              y(e));
          },
          extends: require("Lexical").ElementNode,
          generated: v,
          importDOM: require("Lexical").buildImportMap({
            ol: function ol() {
              return { conversion: W, priority: 0 };
            },
            ul: function ul() {
              return { conversion: W, priority: 0 };
            },
          }),
          json: D,
        });
      };
      _proto2.getTag = function getTag() {
        return this.getLatest().__tag;
      };
      _proto2.setListType = function setListType(e) {
        var t = this.getWritable();
        return (
          (t.__listType = e),
          (t.__tag = "number" === e ? "ol" : "ul"),
          t
        );
      };
      _proto2.getListType = function getListType() {
        return this.getLatest().__listType;
      };
      _proto2.getStart = function getStart() {
        return this.getLatest().__start;
      };
      _proto2.setStart = function setStart(e) {
        var t = this.getWritable();
        return ((t.__start = e), t);
      };
      _proto2.createDOM = function createDOM(e, n) {
        var r = this.__tag,
          i = require("Lexical").$getDocument().createElement(r);
        return (
          1 !== this.__start && i.setAttribute("start", String(this.__start)),
          (i.__lexicalListType = this.__listType),
          w(i, e.theme, this),
          i
        );
      };
      _proto2.updateDOM = function updateDOM(e, t, n) {
        return (
          e.__tag !== this.__tag ||
          e.__listType !== this.__listType ||
          (w(t, n.theme, this),
          e.__start !== this.__start &&
            t.setAttribute("start", String(this.__start)),
          !1)
        );
      };
      _proto2.exportDOM = function exportDOM(e) {
        var n = this.createDOM(e._config, e);
        if (require("Lexical").isHTMLElement(n)) {
          (1 !== this.__start && n.setAttribute("start", String(this.__start)),
            "check" === this.__listType &&
              n.setAttribute("__lexicalListType", "check"));
          var _e14 = this.getDirection();
          _e14 && (n.dir = _e14);
        }
        return { element: n };
      };
      _proto2.canBeEmpty = function canBeEmpty() {
        return !1;
      };
      _proto2.canIndent = function canIndent() {
        return !1;
      };
      _proto2.splice = function splice(e, n, r) {
        var i = r;
        for (var _e15 = 0; _e15 < r.length; _e15++) {
          var _n13 = r[_e15];
          if (!I(_n13)) {
            i === r && (i = [].concat(Array.from(r)));
            var _s8 = this.createListItemNode();
            (!require("Lexical").$isElementNode(_n13) ||
            H(_n13) ||
            _n13.isInline()
              ? _s8.append(_n13)
              : _s8.append.apply(_s8, Array.from(_n13.getChildren())),
              (i[_e15] = _s8));
          }
        }
        return _t$ElementNode2.prototype.splice.call(this, e, n, i);
      };
      _proto2.extractWithChild = function extractWithChild(e) {
        return I(e);
      };
      _proto2.createListItemNode = function createListItemNode() {
        return F();
      };
      return R;
    })(_require_Lexical.ElementNode);
    function w(e, n, r) {
      var i = [],
        s = [],
        l = n.list;
      if (void 0 !== l) {
        var _e16 = l[r.__tag + "Depth"] || [],
          _n14 = o(r) - 1,
          _c = _n14 % _e16.length,
          _a = _e16[_c],
          _u = l[r.__tag];
        var _d;
        var _g = l.nested,
          _h = l.checklist;
        if (
          (void 0 !== _g && _g.list && (_d = _g.list),
          void 0 !== _u && i.push(_u),
          void 0 !== _h && "check" === r.__listType && i.push(_h),
          void 0 !== _a)
        ) {
          i.push.apply(
            i,
            Array.from(require("Lexical").normalizeClassNames(_a)),
          );
          for (var _n15 = 0; _n15 < _e16.length; _n15++)
            _n15 !== _c &&
              s.push.apply(
                s,
                Array.from(require("Lexical").normalizeClassNames(_e16[_n15])),
              );
        }
        if (void 0 !== _d) {
          var _e17 = require("Lexical").normalizeClassNames(_d);
          _n14 > 1
            ? i.push.apply(i, Array.from(_e17))
            : s.push.apply(s, Array.from(_e17));
        }
      }
      (s.length > 0 &&
        require("Lexical").removeClassNamesFromElement.apply(
          require("Lexical"),
          [e].concat(Array.from(s)),
        ),
        i.length > 0 &&
          require("Lexical").addClassNamesToElement.apply(
            require("Lexical"),
            [e].concat(Array.from(i)),
          ));
    }
    function W(e) {
      var n;
      if (
        (function (e) {
          return (
            require("Lexical").isHTMLElement(e) &&
            "ol" === e.nodeName.toLowerCase()
          );
        })(e)
      ) {
        var _t10 = e.start;
        n = K("number", _t10);
      } else
        n = (function (e) {
          if (
            "check" === e.getAttribute("__lexicallisttype") ||
            e.classList.contains("contains-task-list") ||
            "1" === e.getAttribute("data-is-checklist")
          )
            return !0;
          for (var _n16 of e.childNodes)
            if (
              require("Lexical").isHTMLElement(_n16) &&
              _n16.hasAttribute("aria-checked")
            )
              return !0;
          return !1;
        })(e)
          ? K("check")
          : K("bullet");
      return (
        require("Lexical").$setDirectionFromDOM(n, e),
        {
          after: function after(e) {
            return (function (e, t) {
              var n = t.createListItemNode.bind(t),
                r = [];
              for (var _t11 = 0; _t11 < e.length; _t11++) {
                var _i1 = e[_t11];
                if (I(_i1)) {
                  r.push(_i1);
                  var _e18 = _i1.getChildren();
                  _e18.length > 1 &&
                    _e18.forEach(function (e) {
                      H(e) && r.push(n().append(e));
                    });
                } else r.push(n().append(_i1));
              }
              return r;
            })(e, n);
          },
          node: n,
        }
      );
    }
    function K(e, n) {
      if (e === void 0) {
        e = "number";
      }
      if (n === void 0) {
        n = 1;
      }
      return require("Lexical").$applyNodeReplacement(new _R(e, n));
    }
    function H(e) {
      return e instanceof _R;
    }
    var z = new Set([
        " ",
        "Alt",
        "ArrowDown",
        "ArrowLeft",
        "ArrowUp",
        "CapsLock",
        "Control",
        "Escape",
        "Meta",
        "Shift",
      ]),
      B = _require_Lexical.createCommand("INSERT_CHECK_LIST_COMMAND");
    function U(e, n) {
      var r = (n && n.disableTakeFocusOnClick) || !1,
        i =
          "boolean" == typeof r
            ? function () {
                return r;
              }
            : r.peek.bind(r),
        s = function s(e) {
          var n = e.target;
          if (!require("Lexical").isHTMLElement(n)) return !1;
          var r = n.__lexicalCheckListLastHandled;
          return void 0 !== r && e.timeStamp - r < 500;
        };
      var o = "none";
      var l = function l(e) {
          o = (function (e, t) {
            var n = !1;
            return (
              Y(e, function () {
                ((n = !0), e.preventDefault(), t && e.stopPropagation());
              }),
              n
            );
          })(e, i())
            ? "checkMark"
            : "content";
        },
        c = function c() {
          ("content" === o && q(e), (o = "none"));
        };
      return require("Lexical").mergeRegister(
        e.registerCommand(
          B,
          function () {
            return (h("check"), !0);
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_ARROW_DOWN_COMMAND,
          function (t) {
            return G(t, e, !1);
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_ARROW_UP_COMMAND,
          function (t) {
            return G(t, e, !0);
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_ESCAPE_COMMAND,
          function () {
            if (null != J(e)) {
              var _t12 = e.getRootElement();
              return (null != _t12 && _t12.focus(), !0);
            }
            return !1;
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_SPACE_COMMAND,
          function (n) {
            var r = J(e);
            return !(
              null == r ||
              !e.isEditable() ||
              (e.update(function () {
                var e = require("Lexical").$getNearestNodeFromDOMNode(r);
                I(e) && (n.preventDefault(), e.toggleChecked());
              }),
              0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_ARROW_LEFT_COMMAND,
          function (n) {
            return null !== J(e)
              ? (q(e), !1)
              : e.read("latest", function () {
                  var r = require("Lexical").$getSelection();
                  if (
                    require("Lexical").$isRangeSelection(r) &&
                    r.isCollapsed()
                  ) {
                    var _i10 = r.anchor,
                      _s9 = "element" === _i10.type;
                    if (_s9 || 0 === _i10.offset) {
                      var _r11 = _i10.getNode(),
                        _o6 = require("Lexical").$findMatchingParent(
                          _r11,
                          function (e) {
                            return (
                              require("Lexical").$isElementNode(e) &&
                              !e.isInline()
                            );
                          },
                        );
                      if (I(_o6)) {
                        var _i11 = _o6.getParent();
                        if (
                          H(_i11) &&
                          "check" === _i11.getListType() &&
                          (_s9 || _o6.getFirstDescendant() === _r11)
                        ) {
                          var _r12 = e.getElementByKey(_o6.__key);
                          if (
                            null != _r12 &&
                            require("Lexical").getActiveElement(_r12) !== _r12
                          )
                            return (_r12.focus(), n.preventDefault(), !0);
                        }
                      }
                    }
                  }
                  return !1;
                });
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerRootListener(function (n) {
          if (null !== n)
            return require("Lexical").mergeRegister(
              require("Lexical").registerEventListeners(n, {
                click: function click(e) {
                  (c(),
                    (function (e) {
                      s(e) || V(e, i());
                    })(e));
                },
                pointerup: function pointerup(e) {
                  (c(),
                    (function (e) {
                      "touch" === e.pointerType &&
                        (s(e) ||
                          ((function (e) {
                            var n = e.target;
                            require("Lexical").isHTMLElement(n) &&
                              (n.__lexicalCheckListLastHandled = e.timeStamp);
                          })(e),
                          V(e, i())));
                    })(e));
                },
              }),
              require("Lexical").registerEventListeners(
                n,
                {
                  beforeinput: function beforeinput() {
                    return q(e);
                  },
                  focusin: function focusin() {
                    require("Lexical").IS_FIREFOX && "content" === o && q(e);
                  },
                  keydown: function keydown(t) {
                    z.has(t.key) || q(e);
                  },
                  mousedown: l,
                  pointerdown: l,
                },
                { capture: !0 },
              ),
              require("Lexical").registerEventListener(n, "touchstart", l, {
                capture: !0,
                passive: !1,
              }),
            );
        }),
      );
    }
    function Y(n, r) {
      var i = n.target;
      if (!require("Lexical").isHTMLElement(i)) return;
      var s = i.firstChild;
      if (
        require("Lexical").isHTMLElement(s) &&
        ("UL" === s.tagName || "OL" === s.tagName)
      )
        return;
      var o = i.parentNode;
      if (!o || "check" !== o.__lexicalListType) return;
      var l = null,
        c = null;
      if ("clientX" in n) l = n.clientX;
      else if ("touches" in n) {
        var _e19 = n.touches;
        _e19.length > 0 && ((l = _e19[0].clientX), (c = "touch"));
      }
      if (null == l) return;
      var a = i.getBoundingClientRect(),
        u = l / require("LexicalUtils").calculateZoomLevel(i),
        d = i.ownerDocument.defaultView,
        g = d ? d.getComputedStyle(i, "::before") : { width: "0px" },
        h = parseFloat(g.width),
        f =
          "touch" === c || ("pointerType" in n && "touch" === n.pointerType)
            ? 32
            : 0;
      ("rtl" === i.dir
        ? u < a.right + f && u > a.right - h - f
        : u > a.left - f && u < a.left + h + f) && r();
    }
    function V(e, n) {
      Y(e, function () {
        if (require("Lexical").isHTMLElement(e.target)) {
          var _r13 = e.target,
            _i12 = require("Lexical").getNearestEditorFromDOMNode(_r13);
          null != _i12 &&
            _i12.isEditable() &&
            _i12.update(function () {
              var e = require("Lexical").$getNearestNodeFromDOMNode(_r13);
              I(e) &&
                (n
                  ? (require("Lexical").$addUpdateTag(
                      require("Lexical").SKIP_SELECTION_FOCUS_TAG,
                    ),
                    require("Lexical").$addUpdateTag(
                      require("Lexical").SKIP_DOM_SELECTION_TAG,
                    ))
                  : _r13.focus(),
                e.toggleChecked());
            });
        }
      });
    }
    function q(e) {
      var n = e.getRootElement(),
        r = n ? require("Lexical").getActiveElement(n) : null;
      null !== n &&
        require("Lexical").isHTMLElement(r) &&
        j(r) &&
        n.focus({ preventScroll: !0 });
    }
    function j(e) {
      var t = e.parentNode;
      return "LI" === e.tagName && null != t && "check" === t.__lexicalListType;
    }
    function J(e) {
      var n = e.getRootElement(),
        r = n ? require("Lexical").getActiveElement(n) : null;
      return require("Lexical").isHTMLElement(r) && j(r) ? r : null;
    }
    function G(e, n, r) {
      var i = J(n);
      if (null != i) {
        var _s0 = null;
        n.update(
          function () {
            var o = require("Lexical").$getNearestNodeFromDOMNode(i);
            if (!I(o)) return;
            var l = (function (e, t) {
              var n = t ? e.getPreviousSibling() : e.getNextSibling(),
                r = e;
              for (; null == n && I(r); )
                ((r = r.getParentOrThrow().getParent()),
                  null != r &&
                    (n = t ? r.getPreviousSibling() : r.getNextSibling()));
              for (; I(n); ) {
                var _e20 = t ? n.getLastChild() : n.getFirstChild();
                if (!H(_e20)) return n;
                n = t ? _e20.getLastChild() : _e20.getFirstChild();
              }
              return null;
            })(o, r);
            null != l &&
              (l.selectStart(),
              null != n.getElementByKey(l.__key) &&
                (e.preventDefault(), (_s0 = l.__key)));
          },
          {
            onUpdate: function onUpdate() {
              var e = null === _s0 ? null : n.getElementByKey(_s0);
              null != e && e.focus();
            },
          },
        );
      }
      return !1;
    }
    function X(e, t) {
      var n = [];
      for (var _r14 of e)
        if (I(_r14)) {
          n.push(_r14);
          var _e21 = _r14.getChildren();
          if (_e21.length > 1)
            for (var _r15 of _e21)
              H(_r15) && n.push(t.createListItemNode().append(_r15));
        } else n.push(t.createListItemNode().append(_r14));
      return n;
    }
    var Z = {
      $import: function $import(e, n) {
        var r;
        var s;
        return (
          (r = require("LexicalHtml").isElementOfTag(n, "ol")
            ? K("number", n.start)
            : (s = n).matches(
                  '[__lexicallisttype="check"], .contains-task-list, [data-is-checklist="1"]',
                ) || null !== s.querySelector(":scope > [aria-checked]")
              ? K("check")
              : K("bullet")),
          require("Lexical").$setDirectionFromDOM(r, n),
          [
            r.splice(
              0,
              0,
              require("LexicalHtml").$propagateTextAlignToBlockChildren(
                X(e.$importChildren(n), r),
                n,
              ),
            ),
          ]
        );
      },
      match: (_require_LexicalHtml = require("LexicalHtml")).sel.tag(
        "ol",
        "ul",
      ),
      name: "@lexical/list/list",
    };
    function Q(e, n) {
      if (1 !== n.length) return n;
      var r = n[0];
      return require("Lexical").$isParagraphNode(r) &&
        !e.getFormatType() &&
        r.getFormatType()
        ? (e.setFormat(r.getFormatType()), r.getChildren())
        : n;
    }
    function ee(e) {
      var n = function n(e) {
        return require("LexicalHtml").$isBlockLevel(e) && !H(e);
      };
      if (!e.some(n)) return e;
      var r = [];
      var s = [];
      var o = function o() {
        s.length > 0 && (r.push(s), (s = []));
      };
      for (var _i13 of e)
        n(_i13)
          ? (o(),
            r.push(
              require("Lexical").$isElementNode(_i13)
                ? _i13.getChildren()
                : [_i13],
            ))
          : s.push(_i13);
      o();
      var l = [];
      for (var _e22 of r)
        (l.length > 0 && l.push(require("Lexical").$createLineBreakNode()),
          l.push.apply(l, Array.from(_e22)));
      return l;
    }
    var te = {
      $import: function $import(e, n) {
        var r = n.getAttribute("aria-checked"),
          i = F("true" === r || ("false" !== r && void 0));
        return (
          require("Lexical").$setFormatFromDOM(i, n),
          require("Lexical").$setDirectionFromDOM(i, n),
          [i.splice(0, 0, ee(Q(i, e.$importChildren(n))))]
        );
      },
      match: _require_LexicalHtml.sel.tag("li"),
      name: "@lexical/list/li",
    };
    function ne(e, n, r) {
      var s = require("LexicalHtml").isElementOfTag(r, "input")
        ? r
        : r.querySelector('input[type="checkbox"]');
      if (!s || "checkbox" !== s.getAttribute("type")) return [];
      var o = F(s.hasAttribute("checked"));
      return (
        require("Lexical").$setFormatFromDOM(o, n),
        require("Lexical").$setDirectionFromDOM(o, n),
        [o.splice(0, 0, ee(Q(o, e.$importChildren(n))))]
      );
    }
    var re = {
        $accepts: function $accepts(e) {
          return I(e) || H(e);
        },
        $packageRun: function $packageRun(e) {
          return [F().splice(0, 0, e)];
        },
        name: "ListSchema",
      },
      ie = [
        {
          $import: function $import(e, t, n) {
            var r = t.querySelector(':scope > input[type="checkbox"]');
            return r ? ne(e, t, r) : n();
          },
          match: _require_LexicalHtml.sel.tag("li").classAll("task-list-item"),
          name: "@lexical/list/li-task-list-item",
        },
        {
          $import: function $import(e, t, n) {
            var r = t.querySelector(":scope > .checkbox-wrapper");
            if (!r) return n();
            var i = r.querySelector(':scope > input[type="checkbox"]');
            return i ? ne(e, t, i) : n();
          },
          match: _require_LexicalHtml.sel.tag("li").classAll("joplin-checkbox"),
          name: "@lexical/list/li-joplin-checkbox",
        },
        Z,
        te,
      ],
      se = _require_Lexical.createCommand("UPDATE_LIST_START_COMMAND"),
      oe = _require_Lexical.createCommand("INSERT_UNORDERED_LIST_COMMAND"),
      le = _require_Lexical.createCommand("INSERT_ORDERED_LIST_COMMAND"),
      ce = _require_Lexical.createCommand("REMOVE_LIST_COMMAND");
    function ae(e, n) {
      var _require_Lexical;
      return (_require_Lexical = require("Lexical")).mergeRegister(
        e.registerCommand(
          le,
          function () {
            return (h("number"), !0);
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          se,
          function (e) {
            var n = e.listNodeKey,
              r = e.newStart,
              i = require("Lexical").$getNodeByKey(n);
            return (
              !!H(i) &&
              ("number" === i.getListType() && (i.setStart(r), y(i)), !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          oe,
          function () {
            return (h("bullet"), !0);
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          ce,
          function () {
            return (_(), !0);
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          _require_Lexical.INSERT_PARAGRAPH_COMMAND,
          function () {
            return N(!(!n || !n.restoreNumbering));
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          _require_Lexical.KEY_BACKSPACE_COMMAND,
          function (e) {
            var n = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(n) || !n.isCollapsed())
              return !1;
            var r = n.anchor;
            if (0 !== r.offset) return !1;
            var i = r.getNode();
            for (; !I(i); ) {
              if (null !== i.getPreviousSibling()) return !1;
              var _e23 = i.getParent();
              if (null === _e23) return !1;
              i = _e23;
            }
            return !(!I(i) || !i.collapseAtStart(n) || (e.preventDefault(), 0));
          },
          _require_Lexical.COMMAND_PRIORITY_BEFORE_EDITOR,
        ),
        e.registerNodeTransform(_M, function (e) {
          var n = e.getFirstChild();
          if (n) {
            if (require("Lexical").$isTextNode(n)) {
              var _t13 = n.getStyle(),
                _r16 = n.getFormat();
              (e.getTextStyle() !== _t13 && e.setTextStyle(_t13),
                e.getTextFormat() !== _r16 && e.setTextFormat(_r16));
            }
          } else {
            var _n17 = require("Lexical").$getSelection();
            require("Lexical").$isRangeSelection(_n17) &&
              (_n17.style !== e.getTextStyle() ||
                _n17.format !== e.getTextFormat()) &&
              _n17.isCollapsed() &&
              e.is(_n17.anchor.getNode()) &&
              e.setTextStyle(_n17.style).setTextFormat(_n17.format);
          }
        }),
        e.registerNodeTransform(_require_Lexical.TextNode, function (e) {
          var t = e.getParent();
          if (I(t) && e.is(t.getFirstChild())) {
            var _n18 = e.getStyle(),
              _r17 = e.getFormat();
            (_n18 === t.getTextStyle() && _r17 === t.getTextFormat()) ||
              t.setTextStyle(_n18).setTextFormat(_r17);
          }
        }),
      );
    }
    function ue(e) {
      var n = function n(e) {
        var n = e.getParent();
        if (H(e.getFirstChild()) || !H(n)) return;
        var r = require("Lexical").$findMatchingParent(e, function (e) {
          return I(e) && H(e.getParent()) && I(e.getPreviousSibling());
        });
        if (null === r && e.getIndent() > 0) e.setIndent(0);
        else if (I(r)) {
          var _t14 = r.getPreviousSibling();
          if (I(_t14)) {
            var _r18 = (function (e) {
                var t = e,
                  n = t.getFirstChild();
                for (; H(n); ) {
                  var _e24 = n.getLastChild();
                  if (!I(_e24)) break;
                  ((t = _e24), (n = t.getFirstChild()));
                }
                return t;
              })(_t14),
              _i14 = _r18.getParent();
            if (H(_i14)) {
              var _t15 = o(_i14);
              _t15 + 1 < o(n) && e.setIndent(_t15);
            }
          }
        }
      };
      return e.registerNodeTransform(_R, function (e) {
        var t = [e];
        for (; t.length > 0; ) {
          var _e25 = t.shift();
          if (H(_e25))
            for (var _r19 of _e25.getChildren())
              if (I(_r19)) {
                n(_r19);
                var _e26 = _r19.getFirstChild();
                H(_e26) && t.push(_e26);
              }
        }
      });
    }
    var de = {
        build: function build(e, t, n) {
          return require("LexicalExtensionNamedSignals").namedSignals(t);
        },
        config: { hasStrictIndent: !1, shouldPreserveNumbering: !1 },
        dependencies: [
          _require_LexicalHtml.CoreImportExtension,
          [_require_LexicalHtml.DOMImportExtension, { rules: ie }],
        ],
        name: "@lexical/list/List",
        nodes: function nodes() {
          return [_R, _M];
        },
        register: function register(e, r, i) {
          var s = i.getOutput();
          return require("Lexical").mergeRegister(
            require("LexicalExtensionSignals").effect(function () {
              return ae(e, {
                restoreNumbering: s.shouldPreserveNumbering.value,
              });
            }),
            require("LexicalExtensionSignals").effect(function () {
              return s.hasStrictIndent.value ? ue(e) : void 0;
            }),
          );
        },
      },
      ge = {
        build: function build(e, t) {
          return require("LexicalExtensionNamedSignals").namedSignals(t);
        },
        config: { disableTakeFocusOnClick: !1 },
        dependencies: [de],
        name: "@lexical/list/CheckList",
        register: function register(e, t, n) {
          return U(e, n.getOutput());
        },
      },
      he = /^MsoListParagraph(CxSp(First|Middle|Last))?$/,
      fe = /^[A-Za-z0-9]+[.)]/,
      pe = /Microsoft Word/i,
      me = "data-mso-list";
    function _e(e) {
      var t = (e.getAttribute(me) || "").match(/level(\d+)/);
      return t ? parseInt(t[1], 10) : 1;
    }
    function ye(e) {
      return e.querySelector("span[" + me + '="Ignore"]');
    }
    function Ce(e) {
      var t = ye(e);
      return t ? (t.textContent || "").trim() : "";
    }
    function Se(e) {
      return fe.test(e) ? "number" : "bullet";
    }
    function Ne(e) {
      var t = ye(e);
      if (!t) return;
      var n = t;
      for (
        ;
        n.parentElement &&
        n.parentElement !== e &&
        "SPAN" === n.parentElement.nodeName;
      )
        n = n.parentElement;
      n.remove();
    }
    function Te(e) {
      return require("Lexical").isHTMLElement(e) && he.test(e.className);
    }
    function xe(e, t) {
      var n = K(Se(t[0].marker)),
        r = [{ level: t[0].level, list: n }];
      for (var _n19 of t) {
        for (; r.length > 1 && r[r.length - 1].level > _n19.level; ) r.pop();
        if (_n19.level > r[r.length - 1].level) {
          var _e27 = K(Se(_n19.marker));
          (r[r.length - 1].list.append(F().append(_e27)),
            r.push({ level: _n19.level, list: _e27 }));
        }
        (Ne(_n19.el),
          r[r.length - 1].list.append(
            F().splice(
              0,
              0,
              e.$importChildren(_n19.el, {
                schema: require("LexicalHtml").InlineSchema,
              }),
            ),
          ));
      }
      return n;
    }
    var Le = _require_LexicalHtml.createImportState(
        "@lexical/list/word-consumed-list-items",
        function () {
          return null;
        },
      ),
      ve = {
        $import: function $import(e, t) {
          var n = e.session.get(Le);
          if (
            (null === n && ((n = new WeakSet()), e.session.set(Le, n)),
            n.has(t))
          )
            return [];
          var r = [];
          var i = t;
          for (
            ;
            i &&
            Te(i) &&
            (n.add(i),
            r.push({ el: i, level: _e(i), marker: Ce(i) }),
            !i.classList.contains("MsoListParagraphCxSpLast") &&
              "MsoListParagraph" !== i.className);
          )
            i = i.nextElementSibling;
          return [xe(e, r)];
        },
        match: _require_LexicalHtml.sel
          .tag("p")
          .classAny(
            "MsoListParagraph",
            "MsoListParagraphCxSpFirst",
            "MsoListParagraphCxSpMiddle",
            "MsoListParagraphCxSpLast",
          ),
        name: "@lexical/list/word-list-paragraph",
      },
      Oe = {
        $import: function $import() {
          return [];
        },
        match: _require_LexicalHtml.sel.tag("o:p"),
        name: "@lexical/list/word-o-p",
      },
      be = _require_LexicalHtml.defineOverlayRules([Oe, ve]),
      $e = {
        dependencies: [
          de,
          [
            _require_LexicalHtml.DOMImportExtension,
            {
              preprocess: [
                function (e, n, r) {
                  var s = e.querySelector('meta[name="Generator"]');
                  if (s && pe.test(s.getAttribute("content") || "")) {
                    for (var _n20 of Array.from(
                      e.querySelectorAll('[style*="mso-list"]'),
                    )) {
                      var _e28 = require("Lexical").getStyleObjectFromCSS(
                        _n20.getAttribute("style") || "",
                      )["mso-list"];
                      _e28 && _n20.setAttribute(me, _e28);
                    }
                    n.session.update(
                      require("LexicalHtml").ImportOverlays,
                      function (e) {
                        return [].concat(Array.from(e), [be]);
                      },
                    );
                  }
                  r();
                },
              ],
            },
          ],
        ],
        name: "@lexical/list/WordListImport",
      };
    ((exports.$createListItemNode = F),
      (exports.$createListNode = K),
      (exports.$getListDepth = o),
      (exports.$handleListInsertParagraph = N),
      (exports.$insertList = h),
      (exports.$isListItemNode = I),
      (exports.$isListNode = H),
      (exports.$removeList = _),
      (exports.CheckListExtension = ge),
      (exports.INSERT_CHECK_LIST_COMMAND = B),
      (exports.INSERT_ORDERED_LIST_COMMAND = le),
      (exports.INSERT_UNORDERED_LIST_COMMAND = oe),
      (exports.ListExtension = de),
      (exports.ListImportRules = ie),
      (exports.ListItemNode = _M),
      (exports.ListNode = _R),
      (exports.ListSchema = re),
      (exports.REMOVE_LIST_COMMAND = ce),
      (exports.UPDATE_LIST_START_COMMAND = se),
      (exports.WordListImportExtension = $e),
      (exports.registerCheckList = U),
      (exports.registerList = ae),
      (exports.registerListStrictIndentTransform = ue));
  },
  null,
);
