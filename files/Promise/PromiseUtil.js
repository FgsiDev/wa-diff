__d(
  "PromiseUtil",
  ["Promise", "nullthrows", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var r = (e || (e = n("Promise"))).all(t);
      return e
        .all(
          t.map(function (t) {
            return (e || (e = n("Promise")))
              .resolve(t)
              .then(void 0, function (e) {});
          }),
        )
        .then(function () {
          return r;
        });
    }
    function u(t) {
      var r = [];
      return t
        .reduce(
          function (e, t) {
            return e.then(t).then(
              function () {},
              function (e) {
                r.push(e);
              },
            );
          },
          (e || (e = n("Promise"))).resolve(),
        )
        .then(function () {
          if (r.length) throw r[0];
        });
    }
    function c(e, t, n) {
      (t === void 0 && (t = Math.sqrt(2)), n === void 0 && (n = 1));
      var r = n,
        o = function () {
          var e = r;
          return ((r *= t), e);
        };
      return g(e, o);
    }
    function d(t, r) {
      return t.then(function (t) {
        return (e || (e = n("Promise"))).resolve(r(t)).then(function () {
          return t;
        });
      });
    }
    function m(t, r) {
      return t.then(void 0, function (t) {
        return (e || (e = n("Promise"))).resolve(r(t)).then(function () {
          throw t;
        });
      });
    }
    function p(t, r) {
      var o = function (i) {
        return r(i)
          ? (e || (e = n("Promise"))).resolve(i)
          : (e || (e = n("Promise"))).resolve(t(i)).then(o);
      };
      return o;
    }
    function _(t, o) {
      var a,
        i = new (e || (e = n("Promise")))(function (e, n) {
          var r = function () {
            try {
              var r = t();
              r && e(r.value);
            } catch (e) {
              n(e);
            }
          };
          a = setInterval(r, 1e3 * o);
        });
      return i.finally(function () {
        return clearInterval(r("nullthrows")(a));
      });
    }
    function f(e, t) {
      return (
        t === void 0 && (t = 1),
        _(function () {
          var t = e();
          return t ? { value: t } : void 0;
        }, t)
      );
    }
    function g(e, t) {
      var n = [],
        r = void 0,
        o = 0;
      return function () {
        for (
          var a = t(), i = arguments.length, l = new Array(i), s = 0;
          s < i;
          s++
        )
          l[s] = arguments[s];
        return (
          (n = l),
          r ||
            (r = v(o + a - Date.now() / 1e3).then(function () {
              return ((o = Date.now() / 1e3), (r = void 0), e.apply(void 0, n));
            })),
          r
        );
      };
    }
    function h(e, t) {
      var n = !1,
        o;
      return function () {
        return (
          n ||
            (r("promiseDone")(v(t()), function () {
              return (n = !1);
            }),
            (o = e.apply(void 0, arguments)),
            (n = !0)),
          o
        );
      };
    }
    function y(t, r) {
      var o = function () {
        return (e || (e = n("Promise"))).resolve(t()).then(function (t) {
          return r(t) ? (e || (e = n("Promise"))).resolve(t) : o();
        });
      };
      return o;
    }
    function C(t, r, o) {
      var a = function () {
        return (e || (e = n("Promise"))).resolve(t()).then(
          function (t) {
            return (r(t), (e || (e = n("Promise"))).resolve(t));
          },
          function (t) {
            return o(t) ? a() : (e || (e = n("Promise"))).reject(t);
          },
        );
      };
      return a;
    }
    function b(t, r) {
      return t.reduce(
        function (e, t) {
          return e.then(t);
        },
        (e || (e = n("Promise"))).resolve(r),
      );
    }
    function v(t) {
      return 0 < t
        ? new (e || (e = n("Promise")))(function (e, n) {
            return setTimeout(e, 1e3 * t);
          })
        : (e || (e = n("Promise"))).resolve();
    }
    function S(e, t) {
      return R(e, t, function () {
        var e = new Error("Promise timed out");
        throw (e.stack, e);
      });
    }
    function R(t, r, o) {
      var a = !1;
      return (e || (e = n("Promise"))).race([
        t.then(
          function (e) {
            return ((a = !0), e);
          },
          function (e) {
            throw ((a = !0), e);
          },
        ),
        v(r).then(function () {
          return a ? void 0 : o();
        }),
      ]);
    }
    ((l.allSettled = s),
      (l.allSettledInSeries = u),
      (l.exponentialBackoff = c),
      (l.forEach = d),
      (l.forEachError = m),
      (l.iterateUntil = p),
      (l.pollUntilImpl = _),
      (l.pollUntil = f),
      (l.rateLimit = g),
      (l.rateLimitWithLastResult = h),
      (l.repeatUntil = y),
      (l.repeatWhileErrorUntil = C),
      (l.series = b),
      (l.wait = v),
      (l.waitAtMost = S),
      (l.waitOrElse = R));
  },
  98,
);
