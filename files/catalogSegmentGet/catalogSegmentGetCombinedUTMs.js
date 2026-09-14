__d(
  "catalogSegmentGetCombinedUTMs",
  ["PHPQuerySerializer", "immutable", "parseParameters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("immutable").OrderedMap([
        ["utm_source", 0],
        ["utm_medium", 1],
        ["utm_campaign", 2],
      ]);
    function u(t, n) {
      var r = o("parseParameters").parseParameters(
          (e || (e = o("PHPQuerySerializer"))).deserialize(t),
        ),
        a = o("parseParameters").parseParameters(e.deserialize(n)),
        i = [];
      return (
        s.forEach(function (e, t) {
          var n,
            o,
            l,
            s,
            u =
              (n =
                (o = a.fixedFormParameters.get(e)) == null
                  ? void 0
                  : o.value) != null
                ? n
                : "",
            c =
              (l =
                (s = r.fixedFormParameters.get(e)) == null
                  ? void 0
                  : s.value) != null
                ? l
                : "";
          u !== "" && c === "" && i.push(t + "=" + u);
        }),
        i.length === 0 ? t : t === "" ? i.join("&") : t + "&" + i.join("&")
      );
    }
    l.default = u;
  },
  98,
);
