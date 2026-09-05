__d(
  "WebBloksCDSModalContainerConfig",
  ["WebBloksContainerConfig", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r) {
        var o;
        return (
          (o = e.call(this) || this),
          (o.backgroundOverlayColor = t),
          (o.mode = n),
          (o.navbar = r),
          o
        );
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.fromBloksModel = function (n) {
          var e = n.get("background_overlay_color"),
            r = n.get("mode"),
            o = n.get("navbar");
          return new t(e, r, o);
        }));
      var n = t.prototype;
      return (
        (n.mergeWith = function (n) {
          var e,
            r,
            a,
            i = o("WebBloksUtils").cast(n);
          return new t(
            (e = i.backgroundOverlayColor) != null
              ? e
              : this.backgroundOverlayColor,
            (r = i.mode) != null ? r : this.mode,
            (a = i.navbar) != null ? a : this.navbar,
          );
        }),
        (n.getIsOverlay = function () {
          return this.mode == null
            ? !0
            : [
                "auto_sheet",
                "flexible_sheet",
                "full_sheet",
                "half_sheet",
              ].includes(this.mode);
        }),
        t
      );
    })(o("WebBloksContainerConfig").WebBloksContainerConfig);
    l.default = e;
  },
  98,
);
