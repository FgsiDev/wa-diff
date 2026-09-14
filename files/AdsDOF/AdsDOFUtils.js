__d(
  "AdsDOFUtils",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Set(["body_label", "title_label"]);
    function s(t, n) {
      return e.contains(n);
    }
    l.isLabelFieldDOFEligible = s;
  },
  98,
);
