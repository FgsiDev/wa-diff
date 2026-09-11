__d(
  "refine/Refine_JSON",
  ["refine/Refine_API"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("refine/Refine_API").assertion;
    function l(e, t) {
      if (e == null) return null;
      try {
        return JSON.parse(e, t);
      } catch (e) {
        return null;
      }
    }
    function s(t, n) {
      var r = e(t, n != null ? n : "value is invalid");
      return function (e) {
        return r(l(e != null ? e : ""));
      };
    }
    function u(e) {
      return function (t) {
        var n = e(l(t));
        return n.type === "success" ? n.value : null;
      };
    }
    a.exports = { jsonParserEnforced: s, jsonParser: u };
  },
  null,
);
