__d(
  "IGAccessUsability26H1ClientExperimentUtils",
  ["ODS", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set();
    function u(t, n) {
      (e || (e = o("ODS"))).bumpEntityKey(
        68,
        "ig_access_usability_26h1_client",
        t + "." + n,
      );
    }
    function c(e, t) {
      var n = e + "." + t;
      s.has(n) || (s.add(n), u(e, t + ".once_per_session"));
    }
    function d(e) {
      switch (e) {
        case "frontend":
          return r("qex")._("4995") === !0;
        case "deny_rule":
          return r("qex")._("4998") === !0;
        case "spec_logic":
          return r("qex")._("5000") === !0;
      }
    }
    function m(e, t) {
      (u(e, "qex.evaluated"), c(e, "qex.evaluated"));
      var n = d(t);
      return (
        u(e, n ? "qex.test" : "qex.control_or_unset"),
        c(e, n ? "qex.test" : "qex.control_or_unset"),
        n
      );
    }
    function p() {
      s.clear();
    }
    ((l.isIGAccessUsability26H1EnabledClient = m),
      (l.resetIGAccessUsability26H1ClientExperimentUtilsForTest = p));
  },
  98,
);
