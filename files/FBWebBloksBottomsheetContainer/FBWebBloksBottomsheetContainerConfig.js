__d(
  "FBWebBloksBottomsheetContainerConfig",
  ["WebBloksContainerConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return ((n = e.call(this) || this), (n.navbar = t), n);
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.fromBloksModel = function (n) {
          var e = n.get("navbar");
          return new t(e);
        }));
      var n = t.prototype;
      return (
        (n.getIsOverlay = function () {
          return !0;
        }),
        t
      );
    })(o("WebBloksContainerConfig").WebBloksContainerConfig);
    l.default = e;
  },
  98,
);
