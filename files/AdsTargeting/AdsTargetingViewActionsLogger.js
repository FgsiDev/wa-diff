__d(
  "AdsTargetingViewActionsLogger",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return typeof t == "function";
      },
      s = "ads_targeting_flexible_targeting_";
    function u(e, t) {
      var n = e === s ? Math.random() > 0.1 : !1;
      n ||
        r("AdsInterfacesLogger").log(
          { eventName: e + t, eventCategory: "user_action" },
          r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
        );
    }
    function c(t, n) {
      var r = (n && n.prefix) || "";
      return Object.keys(t).reduce(function (n, o) {
        var a = t[o];
        return (
          e(a)
            ? (n[o] = function () {
                (a.apply(void 0, arguments), u(r, o));
              })
            : (n[o] = a),
          n
        );
      }, {});
    }
    ((l.log = u), (l.attachLog = c));
  },
  98,
);
