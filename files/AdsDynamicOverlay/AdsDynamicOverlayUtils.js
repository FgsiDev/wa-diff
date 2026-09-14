__d(
  "AdsDynamicOverlayUtils",
  [
    "AdsAPIAdgroupImageLayerRecords",
    "AdsDynamicOverlayOptionsConfig",
    "CatalogVertical",
    "DAAddTextOverlaySpecUtils",
    "FBLogger",
    "immutable",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = [(s = r("CatalogVertical")).HOME_LISTINGS],
      d = (u = r("immutable")).Map(
        ((e = {}),
        (e[s.NONE] = u.Set()),
        (e[s.AUTOMOTIVE_MODELS] = u.Set(["price", "from_price", "disclaimer"])),
        (e[s.COMMERCE] = u.Set([
          "price",
          "strikethrough_price",
          "percentage_off",
          "free_shipping",
        ])),
        (e[s.DESTINATIONS] = u.Set(["price", "from_price"])),
        (e[s.FLIGHTS] = u.Set(["price", "from_price"])),
        (e[s.HOTELS] = u.Set([
          "price",
          "from_price",
          "strikethrough_price",
          "percentage_off",
        ])),
        (e[s.HOME_LISTINGS] = u.Set(["price"])),
        (e[s.MEDIA_TITLES] = u.Set(["price"])),
        (e[s.VEHICLES] = u.Set([
          "price",
          "strikethrough_price",
          "percentage_off",
        ])),
        (e[s.VEHICLE_OFFERS] = u.Set(["disclaimer"])),
        (e[s.LOCAL_SERVICE_BUSINESSES] = u.Set([
          "price",
          "from_price",
          "strikethrough_price",
          "percentage_off",
        ])),
        e),
      );
    function m(e) {
      return d.has(e);
    }
    function p(e) {
      var t = d.get(e);
      if (t == null)
        throw r("FBLogger")("dpa").mustfixThrow("unsupported vertical");
      return t;
    }
    function _(e) {
      var t = e.get("text_overlay");
      return t instanceof
        o("AdsAPIAdgroupImageLayerRecords").makeTextOverlayLayerRecord
        ? t
        : null;
    }
    function f(e) {
      var t = e.get("frame_overlay");
      return t instanceof
        o("AdsAPIAdgroupImageLayerRecords").makeFrameOverlayLayerRecord
        ? t
        : null;
    }
    function g(e) {
      var t = e.get("image");
      return t instanceof
        o("AdsAPIAdgroupImageLayerRecords").makeImageLayerRecord
        ? t
        : null;
    }
    function h() {
      return r("immutable").List(["image", "frame_overlay", "text_overlay"]);
    }
    function y(e, t, n) {
      var r = h();
      return e.set(t, n).sortBy(
        function (e, t) {
          return t;
        },
        function (e, t) {
          var n = r.indexOf(e),
            o = r.indexOf(t);
          return n < o ? -1 : n > o ? 1 : 0;
        },
      );
    }
    function C(e) {
      return function (t, n) {
        r("vulture")("rIy9N6596rnCffybFRpRWxdj2No=");
        var o = _(t.draftLayerRecordsMap);
        return o == null
          ? (r("FBLogger")("dpa").mustfix("text overlay layer is missing"), t)
          : babelHelpers.extends({}, t, {
              draftLayerRecordsMap: t.draftLayerRecordsMap.set(
                "text_overlay",
                e(o, n),
              ),
            });
      };
    }
    function b(e) {
      return function (t, n) {
        var o = f(t.draftLayerRecordsMap);
        return o == null
          ? (r("FBLogger")("dpa").mustfix("frame overlay layer is missing"), t)
          : babelHelpers.extends({}, t, {
              draftLayerRecordsMap: t.draftLayerRecordsMap.set(
                "frame_overlay",
                e(o, n),
              ),
            });
      };
    }
    function v(e) {
      return function (t, n) {
        var o = g(t.draftLayerRecordsMap);
        return o == null
          ? (r("FBLogger")("dpa").mustfix("image layer is missing"), t)
          : babelHelpers.extends({}, t, {
              draftLayerRecordsMap: t.draftLayerRecordsMap.set(
                "image",
                e(o, n),
              ),
            });
      };
    }
    function S(e) {
      if (e.count() === 0) return !0;
      var t = g(e);
      return e.count() === 1 && t != null
        ? o("DAAddTextOverlaySpecUtils").imageLayerHasNoCustomizations(t)
        : !1;
    }
    function R(e) {
      var t =
        (e == null
          ? void 0
          : e.some(function (e) {
              return e.get("layer_type") === "text_overlay";
            })) === !0;
      return t
        ? e == null
          ? void 0
          : e.filter(function (e) {
              var t = e.get("layer_type");
              return t === "image" || t === "text_overlay";
            })
        : null;
    }
    function L(e) {
      return e == null
        ? void 0
        : e.find(function (e) {
            var t = e.get("layer_type");
            return t === "text_overlay";
          });
    }
    function E(e, t) {
      var n;
      return (n = r("AdsDynamicOverlayOptionsConfig").get(t)) == null
        ? void 0
        : n[e];
    }
    function k(e, t) {
      return t.length === 1
        ? e.set("price", t[0].templateTag)
        : t.length === 2
          ? e
              .set("high_price", t[0].templateTag)
              .set("low_price", t[1].templateTag)
          : e;
    }
    var I = [
      "price",
      "from_price",
      "percentage_off",
      "strikethrough_price",
      "free_shipping",
    ];
    function T(e) {
      return e != null && I.includes(e);
    }
    ((l.APLUSC_DYNAMIC_OVERLAYS_UNSUPPORTED_VERTICALS = c),
      (l.isVerticalSupported = m),
      (l.getValidContents = p),
      (l.getTextOverlayLayer = _),
      (l.getFrameOverlayLayer = f),
      (l.getImageLayer = g),
      (l.getLayers = h),
      (l.createLayer = y),
      (l.createTextOverlayReducer = C),
      (l.createFrameOverlayReducer = b),
      (l.createImageLayerReducer = v),
      (l.overlayHasNoCustomLayer = S),
      (l.deleteImageSpecLayersExceptTextOverlay = R),
      (l.getTextOverlaySpec = L),
      (l.getPriceOptions = E),
      (l.setTextOverlayContentPriceFields = k),
      (l.isContentTypeValidForAutoShowEnrollStatus = T));
  },
  98,
);
