__d(
  "PerfUtils",
  ["FBLogger", "PerfHelperUtils", "performanceNow", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.Component;
    function m(e, t, n) {
      var r = (function (r) {
        function o() {
          return r.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(o, r);
        var a = o.prototype;
        return (
          (a.componentDidMount = function () {
            t();
          }),
          (a.render = function () {
            return n
              ? c.jsx(e, babelHelpers.extends({}, this.props, { ref: n }))
              : c.jsx(e, babelHelpers.extends({}, this.props));
          }),
          o
        );
      })(d);
      return r;
    }
    function p(t, n, a) {
      var i = 1e4,
        l = (s || (s = r("performanceNow")))() - a;
      if (l < i) return t;
      var u = i / 1e3,
        m = Math.round(l) / 1e3,
        p = (function (a) {
          function i() {
            return a.apply(this, arguments) || this;
          }
          babelHelpers.inheritsLoose(i, a);
          var l = i.prototype;
          return (
            (l.componentDidMount = function () {
              r("FBLogger")("web_speed").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Bootloading ",
                    "\n        took more than ",
                    " seconds (",
                    "s).",
                  ])),
                n,
                u,
                m,
              );
            }),
            (l.render = function () {
              return c.jsx(o("PerfHelperUtils").SlowBootloadBorder, {
                moduleId: n,
                timeLimitSecs: u,
                timeSpentSecs: m,
                children: c.jsx(t, babelHelpers.extends({}, this.props)),
              });
            }),
            i
          );
        })(d);
      return p;
    }
    ((l.appendListener = m), (l.markRedInDev = p));
  },
  98,
);
