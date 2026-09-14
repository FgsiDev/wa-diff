__d(
  "ContextualLayer",
  [
    "ARIA",
    "Arbiter",
    "Bootloader",
    "CSS",
    "CometVisualCompletionAttributes",
    "ContextualLayerOrientation",
    "ContextualThing",
    "DOM",
    "DataStore",
    "Event",
    "Layer",
    "Locale",
    "Parent",
    "Rect",
    "SVGChecker",
    "Scroll",
    "Style",
    "Vector",
    "containsNode",
    "cr:971473",
    "debounce",
    "getOffsetParent",
    "getOrCreateDOMID",
    "getOverlayZIndex",
    "getOwnObjectValues",
    "gkx",
    "isElementNode",
    "removeFromArray",
    "throttle",
  ],
  function (t, n, r, o, a, i) {
    function e(e) {
      return (
        e.getPosition() === "left" ||
        (e.isVertical() && e.getAlignment() === "right")
      );
    }
    var l = (function (t) {
        "use strict";
        function r() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        var o = r.prototype;
        return (
          (o._configure = function (n, r) {
            (n.dialogRole !== "dialog" && (this._dialogRole = n.dialogRole),
              n.shouldSetARIAProperties === !1 &&
                (this._shouldSetARIAProperties = n.shouldSetARIAProperties),
              n.isZIndexOverrideIgnored === !0 &&
                (this._isZIndexOverrideIgnored = n.isZIndexOverrideIgnored),
              n.label && (this._label = n.label),
              n.labelledBy && (this._labelledBy = n.labelledBy),
              t.prototype._configure.call(this, n, r),
              n.context
                ? this.setContext(n.context)
                : n.contextID
                  ? this._setContextID(n.contextID)
                  : n.contextSelector &&
                    (this._setContextSelector(n.contextSelector),
                    this._setARIAProperties()),
              this.setPosition(n.position),
              this.setAlignment(n.alignment),
              this.setOffsetX(n.offsetX),
              this.setOffsetY(n.offsetY),
              this.setArrowDimensions(n.arrowDimensions),
              (this._content = r));
          }),
          (o._getDefaultBehaviors = function () {
            var e = r.getDefaultBehaviorsAsObject();
            return t.prototype._getDefaultBehaviors
              .call(this)
              .concat(n("getOwnObjectValues")(e));
          }),
          (o._buildWrapper = function (t, r) {
            return (
              (this._contentWrapper = n("DOM").create(
                "div",
                { className: "uiContextualLayer" },
                r,
              )),
              this._dialogRole &&
                this._contentWrapper.setAttribute("role", this._dialogRole),
              this._labelledBy
                ? this._contentWrapper.setAttribute(
                    "aria-labelledby",
                    this._labelledBy,
                  )
                : this._label &&
                  this._contentWrapper.setAttribute("aria-label", this._label),
              this._dialogRole === "alert" &&
                this._contentWrapper.setAttribute("aria-atomic", "true"),
              n("DOM").create(
                "div",
                babelHelpers.extends(
                  {
                    className: "uiContextualLayerPositioner",
                    "data-testid": t["data-testid"],
                  },
                  t.excludeFromHeroVC
                    ? n("CometVisualCompletionAttributes").IGNORE
                    : {},
                ),
                this._contentWrapper,
              )
            );
          }),
          (o.getInsertParent = function () {
            var e = this._insertParent;
            if (!e) {
              var r = this.getContext();
              r && (e = n("Parent").byClass(r, "uiContextualLayerParent"));
            }
            return e || t.prototype.getInsertParent.call(this);
          }),
          (o.setContent = function (t) {
            return (
              (this._content = t),
              n("DOM").setContent(this._contentWrapper, this._content),
              this._shown && this._updatePosition(),
              this
            );
          }),
          (o.setContext = function (t) {
            return this.setContextWithBounds(t, null);
          }),
          (o.setContextWithBounds = function (t, r) {
            if (
              this._contextNode === t &&
              r &&
              this._contextBounds &&
              r.isEqualTo(this._contextBounds)
            )
              return this;
            this._contextNode = t;
            var e =
              r &&
              this._contextBounds &&
              r.t === this._contextBounds.t &&
              r.r === this._contextBounds.r &&
              r.b === this._contextBounds.b &&
              r.l === this._contextBounds.l;
            return e
              ? this
              : ((this._contextBounds = r || null),
                (this._contextSelector = "#" + n("getOrCreateDOMID")(t)),
                (this._contextScrollParent = null),
                this._shown &&
                  (n("ContextualThing").register(
                    this.getRoot(),
                    this._contextNode,
                  ),
                  this._updatePosition()),
                this._setParentSubscription(),
                this._setARIAProperties(),
                this);
          }),
          (o.shouldSetARIAProperties = function (t) {
            return ((this._shouldSetARIAProperties = t), this);
          }),
          (o._setARIAProperties = function () {
            var e = this;
            return this._shouldSetARIAProperties
              ? (this._dialogRole === "dialog"
                  ? n("ARIA").setPopup(this.getCausalElement(), this.getRoot())
                  : this._dialogRole === "region" &&
                    n("Bootloader").loadModules(
                      ["ContextualLayerInlineTabOrder"],
                      function (t) {
                        e.hasBehavior(t) || e.enableBehavior(t);
                      },
                      "ContextualLayer",
                    ),
                this)
              : this;
          }),
          (o._setContextID = function (t) {
            ((this._contextSelector = "#" + t), (this._contextNode = null));
          }),
          (o._setContextSelector = function (t) {
            ((this._contextSelector = t), (this._contextNode = null));
          }),
          (o.getCausalElement = function () {
            return t.prototype.getCausalElement.call(this) || this.getContext();
          }),
          (o._setParentSubscription = function () {
            for (
              var e = this.getContext(), t = null;
              e != null &&
              ((t = n("DataStore").get(e, "layer")),
              !(t && typeof t == "object"));
            )
              e = e.parentNode;
            t !== this._parentLayer &&
              (this._parentLayer &&
                this._parentSubscription &&
                (this._parentLayer.unsubscribe(this._parentSubscription),
                (this._parentSubscription = null)),
              t &&
                (this._parentSubscription = t.subscribe(
                  "hide",
                  this.hide.bind(this),
                )),
              (this._parentLayer = t));
          }),
          (o.setPosition = function (t) {
            return (
              this.getOrientation().setDefaultPosition(t) &&
                this._shown &&
                this._updatePosition(),
              this
            );
          }),
          (o.setAlignment = function (t) {
            return (
              this.getOrientation().setDefaultAlignment(t) &&
                this._shown &&
                this._updatePosition(),
              this
            );
          }),
          (o.setOffsetX = function (t) {
            return (
              this.getOrientation().setDefaultOffsetX(t) &&
                this._shown &&
                this._updatePosition(),
              this
            );
          }),
          (o.setArrowDimensions = function (t) {
            return (
              t &&
                this.getOrientation().setArrowOffset(t.offset) &&
                this._shown &&
                this._updatePosition(),
              this
            );
          }),
          (o.setOffsetY = function (t) {
            return (
              this.getOrientation().setDefaultOffsetY(t) &&
                this._shown &&
                this._updatePosition(),
              this
            );
          }),
          (o.getPosition = function () {
            return this.getOrientation().getPosition();
          }),
          (o.getOrientation = function () {
            return (
              this._orientation ||
                (this._orientation = new (n("ContextualLayerOrientation"))()),
              this._orientation
            );
          }),
          (o.getContentRoot = function () {
            return this._contentWrapper;
          }),
          (o.getContent = function () {
            return this._content;
          }),
          (o.getContext = function () {
            var e;
            return (
              !this._contextNode &&
                this._contextSelector &&
                (this._contextNode = n("DOM").find(
                  document,
                  this._contextSelector,
                )),
              (e = this._contextNode) != null ? e : null
            );
          }),
          (o.getContextBounds = function (t) {
            if (this._contextBounds) return this._contextBounds.convertTo(t);
            var e = this.getContext();
            return n("Rect").newFromVectors(
              n("Vector").getElementPosition(e, t),
              n("Vector").getElementDimensions(e),
            );
          }),
          (o.getContextScrollParent = function () {
            return (
              this._contextScrollParent
                ? n("isElementNode")(this._contextScrollParent) &&
                  !n("containsNode")(
                    document.documentElement,
                    this._contextScrollParent,
                  ) &&
                  (this._contextScrollParent = n("Style").getScrollParent(
                    this.getContext(),
                  ))
                : (this._contextScrollParent = n("Style").getScrollParent(
                    this.getContext(),
                  )),
              this._contextScrollParent
            );
          }),
          (o.setInsertParent = function (n) {
            return (
              (this._insertScrollParent = null),
              t.prototype.setInsertParent.call(this, n)
            );
          }),
          (o.getInsertScrollParent = function () {
            return (
              this._insertScrollParent ||
                (this._insertScrollParent = n("Style").getScrollParent(
                  this.getInsertParent(),
                )),
              this._insertScrollParent
            );
          }),
          (o.show = function () {
            var e = this;
            if (this._shown) return this;
            if (
              (t.prototype.show.call(this),
              n("Arbiter").inform("contextualLayer/toggle", {
                show: !0,
                contentRoot: this.getRoot(),
              }),
              this._shown)
            ) {
              if (!this.getContext()) return this;
              (n("ContextualThing").register(this.getRoot(), this.getContext()),
                s.push(this),
                (this._resizeListener =
                  this._resizeListener ||
                  n("Event").listen(
                    window,
                    "resize",
                    n("throttle")(function () {
                      e._shown && e.updatePosition();
                    }),
                  )));
            }
            return this;
          }),
          (o.finishHide = function () {
            return (
              n("removeFromArray")(s, this),
              this._resizeListener && this._resizeListener.remove(),
              (this._resizeListener = null),
              (this._insertScrollParent = null),
              n("Arbiter").inform("contextualLayer/toggle", {
                show: !1,
                contentRoot: this.getRoot(),
              }),
              t.prototype.finishHide.call(this)
            );
          }),
          (o.isFixed = function () {
            return (
              n("Style").isFixed(this.getContext()) &&
              !n("Style").isFixed(this.getInsertParent())
            );
          }),
          (o.updatePosition = function () {
            var t = this.getContext();
            if (!t) return !1;
            var r = this.isFixed();
            if (
              !r &&
              !(
                t.offsetParent ||
                (n("SVGChecker").isSVG(t) && n("SVGChecker").isDisplayed(t))
              )
            )
              return !1;
            var o = this.getRoot();
            if (o == null || this._contentWrapper == null) return !1;
            var a = n("Vector").getLayoutViewportDimensions().x;
            n("Style").set(o, "width", a + "px");
            var i = this.getOrientation();
            if ((this.inform("adjust", i.reset()), !i.isValid())) return !1;
            var l = n("Locale").isRTL();
            (n("gkx")("25981") &&
              (n("Style").set(o, l ? "right" : "left", "-9999px"),
              n("Style").set(o, "top", "-9999px")),
              this._updateWrapperPosition(i),
              this._updateWrapperClass(i),
              n("CSS").conditionClass(
                o,
                "uiContextualLayerPositionerFixed",
                r,
              ));
            var s,
              u,
              c = r ? "viewport" : "document",
              d = r ? document.documentElement : n("getOffsetParent")(o);
            if (r) ((s = new (n("Vector"))(0, 0)), (u = a));
            else if (d === document.documentElement)
              ((s = new (n("Vector"))(0, 0)),
                (u = document.documentElement.clientWidth));
            else if (o.offsetParent)
              ((s = n("Vector").getElementPosition(d, c)),
                (u = d.offsetWidth),
                d !== document.body &&
                  (s = s.sub(
                    new (n("Vector"))(
                      n("Scroll").getLeft(d),
                      n("Scroll").getTop(d),
                    ),
                  )));
            else return !1;
            var m = this.getContextBounds(c),
              p = m.l - s.x,
              _ = m.t - s.y,
              f = m.h(),
              g = m.w();
            (i.getPosition() === "below" && (_ += f),
              (i.getPosition() === "right" ||
                (i.isVertical() && i.getAlignment() === "right")) != l &&
                (p += g),
              !i.isVertical() &&
                i.getAlignment() === "center" &&
                (_ += m.h() / 2 - this.getContentRoot().offsetHeight / 2));
            var h = i.getOffsetX();
            (i.isVertical() &&
              i.getAlignment() === "center" &&
              (h += (g - this.getContentRoot().offsetWidth) / 2),
              l && (h *= -1));
            var y = "left",
              C = Math.floor(p + h);
            (e(i) !== l && ((y = "right"), (C = u - C)),
              n("Style").set(o, y, C + "px"),
              n("Style").set(o, y === "left" ? "right" : "left", ""));
            var b = this.getInsertScrollParent(),
              v,
              S = 0;
            b !== window
              ? ((v = b.clientWidth), (S = n("Vector").getElementPosition(b).x))
              : (v = document.documentElement.clientWidth);
            var R = n("Vector").getElementPosition(o).x - S,
              L = 0,
              E =
                window.devicePixelRatio !== Math.round(window.devicePixelRatio);
            ((L = E ? 1 : 0),
              n("gkx")("25983") && (L = 1),
              y === "left" && v - R > 0
                ? n("Style").set(o, "width", v - R - L + "px")
                : y === "right" && R + o.offsetWidth > 0
                  ? n("Style").set(o, "width", R + o.offsetWidth - L + "px")
                  : n("Style").set(o, "width", ""),
              n("Style").set(o, "top", _ + i.getOffsetY() + "px"));
            var k =
              t instanceof Element && !this._isZIndexOverrideIgnored
                ? t.closest("[data-contextual-layer-z-index-override]")
                : null;
            if (k != null) {
              var I;
              n("Style").set(
                o,
                "z-index",
                (I = k.getAttribute(
                  "data-contextual-layer-z-index-override",
                )) != null
                  ? I
                  : "",
              );
            } else {
              var T = n("getOverlayZIndex")(t, this.getInsertParent());
              n("Style").set(o, "z-index", T > 200 ? T : "");
            }
            return (this.inform("reposition", i), !0);
          }),
          (o._updatePosition = function () {
            var e = this;
            if (this._debouncedUpdatePosition) {
              this._debouncedUpdatePosition();
              return;
            }
            return (
              (this._debouncedUpdatePosition = n("debounce")(function () {
                (e._shown && e.updatePosition(),
                  delete e._debouncedUpdatePosition);
              })),
              this.updatePosition()
            );
          }),
          (o._updateWrapperPosition = function (r) {
            var t = r.getPosition() === "above";
            n("Style").set(this._contentWrapper, "bottom", t ? "0" : null);
            var o = n("Locale").isRTL() ? "left" : "right",
              a = e(r);
            n("Style").set(this._contentWrapper, o, a ? "0" : null);
          }),
          (o._updateWrapperClass = function (t) {
            var e = t.getClassName();
            e !== this._orientationClass &&
              (this._orientationClass &&
                n("CSS").removeClass(
                  this._contentWrapper,
                  this._orientationClass,
                ),
              (this._orientationClass = e),
              n("CSS").addClass(this._contentWrapper, e));
          }),
          (o.simulateOrientation = function (t, r) {
            var e = t.getClassName();
            if (e === this._orientationClass) return r();
            (this._orientationClass &&
              n("CSS").removeClass(
                this._contentWrapper,
                this._orientationClass,
              ),
              n("CSS").addClass(this._contentWrapper, e));
            var o = r();
            return (
              n("CSS").removeClass(this._contentWrapper, e),
              this._orientationClass &&
                n("CSS").addClass(this._contentWrapper, this._orientationClass),
              o
            );
          }),
          (o.destroy = function () {
            return (
              t.prototype.destroy.call(this),
              (this._contentWrapper = null),
              (this._content = null),
              this
            );
          }),
          (o.getArrowDimensions = function () {
            return this._config.arrowDimensions || { offset: 0, length: 0 };
          }),
          (r.getDefaultBehaviorsAsObject = function () {
            return n("cr:971473") == null
              ? {}
              : { LayerHideOnTransition: n("cr:971473") };
          }),
          r
        );
      })(n("Layer")),
      s = [];
    (n("Arbiter").subscribe("reflow", function () {
      s.forEach(function (e) {
        e.updatePosition() === !1 && e.hide();
      });
    }),
      Object.assign(l.prototype, {
        _contentWrapper: null,
        _content: null,
        _contextNode: null,
        _contextBounds: null,
        _contextSelector: null,
        _dialogRole: "dialog",
        _isZIndexOverrideIgnored: !1,
        _label: null,
        _labelledBy: [],
        _parentLayer: null,
        _parentSubscription: null,
        _orientation: null,
        _orientationClass: null,
        _shouldSetARIAProperties: !0,
      }),
      (a.exports = l));
  },
  null,
);
