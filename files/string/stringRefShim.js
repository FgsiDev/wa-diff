__d(
  "stringRefShim",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "__reactShimRefs";
    function s(t, n) {
      var o;
      if (typeof n == "string") o = n;
      else if (typeof n == "number" || typeof n == "boolean") o = "" + n;
      else return n;
      if (t == null || t === window)
        return (
          r("FBLogger")("react_www", "string_ref_missing_instance").warn(
            "stringRefShim called with invalid instance of window or null",
          ),
          n
        );
      var a = t[e];
      a == null && ((a = {}), (t[e] = a));
      var i = a[o];
      return (
        i == null &&
          ((i = function (n) {
            t.refs[o] = n;
          }),
          (a[o] = i)),
        i
      );
    }
    l.default = s;
  },
  98,
);
