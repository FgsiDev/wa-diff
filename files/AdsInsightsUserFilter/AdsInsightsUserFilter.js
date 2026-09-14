__d(
  "AdsInsightsUserFilter",
  ["AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e + "_NAME";
    }
    function s(e) {
      return e.toLowerCase() + ".navigationID";
    }
    function u(e) {
      return e.toLowerCase() + ".searchID";
    }
    function c(e) {
      var t,
        n = new Set([
          "navigationID",
          "searchID",
          "billing_event",
          "optimization_goal",
          "placement.page_types",
        ]);
      return (
        (t = /^(\w+).(\S+)$/.exec(e)),
        t &&
        Object.prototype.hasOwnProperty.call(
          r("AdsObjectTypes"),
          t[1].toUpperCase(),
        ) &&
        n.has(t[2])
          ? { baseField: t[2], level: r("AdsObjectTypes")[t[1].toUpperCase()] }
          : ((t = /^(\w+)_NAME$/.exec(e)),
            t && Object.prototype.hasOwnProperty.call(r("AdsObjectTypes"), t[1])
              ? { baseField: "name", level: r("AdsObjectTypes")[t[1]] }
              : { baseField: e })
      );
    }
    ((l.nameField = e),
      (l.navigationIDField = s),
      (l.searchIDField = u),
      (l.splitField = c));
  },
  98,
);
