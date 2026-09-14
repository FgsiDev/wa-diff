__d(
  "SUIInternalMouseUpListener",
  ["DOMEventListener"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null;
    function u(t) {
      (s || (s = o("DOMEventListener").add(window, "mouseup", d)), (e = t));
    }
    function c(t) {
      e === t && (e = null);
    }
    function d(t) {
      e && (e(t), (e = null));
    }
    ((l.set = u), (l.unset = c));
  },
  98,
);
