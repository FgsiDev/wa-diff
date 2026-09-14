__d(
  "AdsPixelStoreUtil",
  [
    "AdsLoadState_LEGACY",
    "AdsPixelPickerStore",
    "AdsPixelProvider",
    "AdsPixelStoreSetPixelListLoadingAction",
    "LoadObject",
    "setImmediate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = f(e),
        r = n.filter(function (e, n) {
          var r,
            o = (r = e.getValue()) == null ? void 0 : r.adAccountOwnerID;
          return o != null && o === t;
        });
      return Array.from(r.keys());
    }
    function s(e, t) {
      var n;
      return t == null || !e.pixels.has(t)
        ? ""
        : ((n = m(e, t).getValue()) == null ? void 0 : n.name) || "";
    }
    function u(e, t) {
      var n;
      return ((n = m(e, t).getValue()) == null ? void 0 : n.code) || "";
    }
    function c(e) {
      return Array.from(f(e).keys());
    }
    function d() {
      var e = c(r("AdsPixelProvider").toFluxStore().getState());
      return r("AdsPixelPickerStore").getCurrentPixelID() || e[0];
    }
    function m(e, t) {
      var n = e.pixels.get(t);
      return n.isEmpty()
        ? r("LoadObject").loading({ creatorModuleID: i.id })
        : n;
    }
    function p(e, t) {
      var n;
      return (
        ((n = m(e, t).getValue()) == null ? void 0 : n.isUnavailable) || !1
      );
    }
    function _(e, t) {
      var n;
      return t == null
        ? ""
        : ((n = m(e, t).getValue()) == null ? void 0 : n.lastFiredTime) || "";
    }
    function f(e) {
      return (
        e.pixelListLoadState === r("AdsLoadState_LEGACY").NOT_LOADED &&
          r("setImmediate")(function () {
            r("AdsPixelStoreSetPixelListLoadingAction").dispatch(
              {},
              { line: "92", module: "AdsPixelStoreUtil.js", moduleID: i.id },
            );
          }),
        e.pixels.getData()
      );
    }
    function g(e, t) {
      e.pixels.getAll(t);
      var n = C(e.pixels, t);
      return n.getData().filter(function (e, n) {
        return t.includes(n);
      });
    }
    function h(e) {
      return f(e).size > 0;
    }
    function y(e) {
      return e.pixelListLoadState === r("AdsLoadState_LEGACY").LOADED;
    }
    function C(e, t) {
      return e.withMutations(function (e) {
        t.forEach(function (t) {
          e.has(t) ||
            e.set(t, r("LoadObject").loading({ creatorModuleID: i.id }));
        });
      });
    }
    ((l.getAdAccountOwnPixelIDs = e),
      (l.getName = s),
      (l.getPixelCode = u),
      (l.getPixelIDs = c),
      (l.getCurrentSelectedPixelID = d),
      (l.getPixelInfo = m),
      (l.getPixelIsDisabled = p),
      (l.getPixelLastFiringTime = _),
      (l.getPixels = f),
      (l.getPixelsByID = g),
      (l.hasPixels = h),
      (l.isListLoaded = y),
      (l.setPixelsToLoadingIfEmpty = C));
  },
  98,
);
