__d(
  "shallowCompare",
  ["fbjs/lib/shallowEqual"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, r) {
      return (
        !n("fbjs/lib/shallowEqual")(e.props, t) ||
        !n("fbjs/lib/shallowEqual")(e.state, r)
      );
    }
    i.default = e;
  },
  66,
);
