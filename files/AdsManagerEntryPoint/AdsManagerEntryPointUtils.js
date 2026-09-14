__d(
  "AdsManagerEntryPointUtils",
  ["AdsManagerAppConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r = babelHelpers.extends({}, t),
        a = (n = r.string) != null ? n : {};
      return (
        (r.string = babelHelpers.extends({}, a, {
          interaction: e,
          hostname: window.location.hostname,
          pathname: window.location.pathname,
          sessionId: o("AdsManagerAppConfig").sessionID,
        })),
        r
      );
    }
    function s(e, t) {
      return (
        t.string != null &&
          (e.string = babelHelpers.extends({}, t.string, e.string)),
        t.int != null && (e.int = babelHelpers.extends({}, t.int, e.int)),
        t.double != null &&
          (e.double = babelHelpers.extends({}, t.double, e.double)),
        t.bool != null && (e.bool = babelHelpers.extends({}, t.bool, e.bool)),
        t.string_array != null &&
          (e.string_array = babelHelpers.extends(
            {},
            t.string_array,
            e.string_array,
          )),
        t.int_array != null &&
          (e.int_array = babelHelpers.extends({}, t.int_array, e.int_array)),
        t.double_array != null &&
          (e.double_array = babelHelpers.extends(
            {},
            t.double_array,
            e.double_array,
          )),
        t.bool_array != null &&
          (e.bool_array = babelHelpers.extends({}, t.bool_array, e.bool_array)),
        e
      );
    }
    ((l.getAnnotations = e), (l.mergeAnnotations = s));
  },
  98,
);
