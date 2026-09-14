__d(
  "AdsPEImportCriticalError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r, o, a, i) {
        var l;
        return (
          o === void 0 && (o = !1),
          a === void 0 && (a = ""),
          i === void 0 && (i = null),
          (l = e.call(this, n) || this),
          (l.code = t),
          (l.summary = n),
          (l.description = r),
          (l.isTransportError = o),
          (l.stackTrace = a),
          (l.mids = i),
          l
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    i.default = e;
  },
  66,
);
