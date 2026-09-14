__d(
  "getVendorPrefixedEventName",
  ["fbjs/lib/ExecutionEnvironment"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        (n["ms" + e] = "MS" + t),
        (n["O" + e] = "o" + t.toLowerCase()),
        n
      );
    }
    var l = {
        animationend: e("Animation", "AnimationEnd"),
        animationiteration: e("Animation", "AnimationIteration"),
        animationstart: e("Animation", "AnimationStart"),
        transitionend: e("Transition", "TransitionEnd"),
      },
      s = {},
      u = {};
    n("fbjs/lib/ExecutionEnvironment").canUseDOM &&
      ((u = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete l.animationend.animation,
        delete l.animationiteration.animation,
        delete l.animationstart.animation),
      "TransitionEvent" in window || delete l.transitionend.transition);
    function c(e) {
      if (s[e]) return s[e];
      if (!l[e]) return e;
      var t = l[e];
      for (var n in t)
        if (Object.prototype.hasOwnProperty.call(t, n) && n in u)
          return (s[e] = t[n]);
      return "";
    }
    a.exports = c;
  },
  null,
);
