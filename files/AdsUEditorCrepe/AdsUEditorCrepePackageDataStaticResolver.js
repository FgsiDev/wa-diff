__d(
  "AdsUEditorCrepePackageDataStaticResolver",
  ["AdsCrepePackageConfigPlugins", "mergeDeepInto", "mergeHelpers"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n =
          (e != null &&
            r("AdsCrepePackageConfigPlugins")
              .withShape({ package_id: e })
              .getArray()) ||
          [];
      return ((t = n[0]) == null ? void 0 : t.config) || {};
    }
    function s(e, t) {
      var n = babelHelpers.extends({}, e);
      return (
        r("mergeDeepInto")(n, t, r("mergeHelpers").ArrayStrategies.Clobber),
        n
      );
    }
    ((l.getStaticPackageData = e), (l.mergePackageData = s));
  },
  98,
);
