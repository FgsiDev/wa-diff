__d(
  "AdsAPlusCLevelViewReducerPlugins",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return n.levelView === "topLevel"
            ? babelHelpers.extends({}, t, {
                currentLevelView: "topLevel",
                navigationStack: [],
              })
            : babelHelpers.extends({}, t, {
                navigationStack: [].concat(t.navigationStack, [n.levelView]),
                currentLevelView: n.levelView,
              });
        },
      },
      l = {
        reduce: function (t) {
          var e,
            n = t.currentLevelView,
            r = t.navigationStack;
          return r.length === 0
            ? n === "topLevel"
              ? t
              : babelHelpers.extends({}, t, { currentLevelView: "topLevel" })
            : babelHelpers.extends({}, t, {
                navigationStack: r.slice(0, -1),
                currentLevelView:
                  (e = r[r.length - 2]) != null ? e : "topLevel",
              });
        },
      },
      s = {
        reduce: function () {
          return { currentLevelView: "topLevel", navigationStack: [] };
        },
      };
    ((i.changeLevelViewReducer = e),
      (i.navigateBackReducer = l),
      (i.closeCFPModalReducer = s));
  },
  66,
);
