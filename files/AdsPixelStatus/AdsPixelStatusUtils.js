__d(
  "AdsPixelStatusUtils",
  [
    "fbt",
    "invariant",
    "ix",
    "AdsPixelConstants",
    "AdsPixelStatusEnum",
    "Image.react",
    "SignalsStatusEnum",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e,
      d = e || (e = o("react")),
      m = "-15 days",
      p = "-30 days";
    function _(e) {
      switch (e) {
        case o("AdsPixelConstants").statuses.ACTIVE:
          return r("AdsPixelStatusEnum").ACTIVE;
        case o("AdsPixelConstants").statuses.INACTIVE:
          return r("AdsPixelStatusEnum").INACTIVE;
        case o("AdsPixelConstants").statuses.UNVERIFIED:
        case o("AdsPixelConstants").statuses.DELETED:
          return r("AdsPixelStatusEnum").NEVER_ACTIVE;
        default:
          throw r("err")("Invalid legacy pixel status %s", e);
      }
    }
    function f(e) {
      switch (e) {
        case r("AdsPixelStatusEnum").ACTIVE:
          return r("SignalsStatusEnum").ACTIVE;
        case r("AdsPixelStatusEnum").INACTIVE:
          return r("SignalsStatusEnum").INACTIVE;
        case r("AdsPixelStatusEnum").NEVER_ACTIVE:
          return r("SignalsStatusEnum").NEVER_ACTIVE;
        default:
          throw r("err")("Invalid pixel status %s", e);
      }
    }
    function g(e) {
      switch (e) {
        case r("AdsPixelStatusEnum").ACTIVE:
          return c("23293");
        case r("AdsPixelStatusEnum").INACTIVE:
          return c("23292");
        case r("AdsPixelStatusEnum").NEVER_ACTIVE:
          return c("23294");
        default:
          u(0, 1319, e);
      }
    }
    function h(e) {
      return d.jsx(r("Image.react"), { className: "xl010v5", src: g(e) });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return p;
    }
    function C() {
      return m;
    }
    function b(e) {
      switch (e) {
        case r("AdsPixelStatusEnum").ACTIVE:
          return s._(/*BTDS*/ "Active");
        case r("AdsPixelStatusEnum").INACTIVE:
          return s._(/*BTDS*/ "No Recent Activity");
        case r("AdsPixelStatusEnum").NEVER_ACTIVE:
          return s._(/*BTDS*/ "No Activity Yet");
        default:
          u(0, 1319, e);
      }
    }
    ((l.convertLegacyPixelStatus = _),
      (l.convertToSignalsStatus = f),
      (l.getIconIx = g),
      (l.getIcon = h),
      (l.getStatsMaximumStartTimeForPixel = y),
      (l.getStatsStartTime = C),
      (l.getUserFacingStatus = b));
  },
  226,
);
