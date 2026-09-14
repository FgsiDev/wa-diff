__d(
  "BinaryIndexedTree",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t) {
        return Math.floor(t / 2);
      },
      u =
        t.Int32Array ||
        function (e) {
          for (var t = [], n = e - 1; n >= 0; --n) t[n] = 0;
          return t;
        };
    function c(e) {
      for (var t = 1; t < e; ) t *= 2;
      return t;
    }
    var d = (function () {
      function t(e) {
        ((this.$1 = e.length),
          (this.$2 = c(this.$1)),
          (this.$3 = new u(2 * this.$2)));
        var t;
        for (t = 0; t < this.$1; ++t) this.$3[this.$2 + t] = e[t];
        for (t = this.$2 - 1; t > 0; --t)
          this.$3[t] = this.$3[2 * t] + this.$3[2 * t + 1];
      }
      ((t.uniform = function (n, r) {
        for (var e = [], o = n - 1; o >= 0; --o) e[o] = r;
        return new t(e);
      }),
        (t.empty = function (n) {
          return t.uniform(n, 0);
        }));
      var n = t.prototype;
      return (
        (n.set = function (n, r) {
          (0 <= n && n < this.$1) || s(0, 5188, n);
          var t = this.$2 + n;
          for (this.$3[t] = r, t = e(t); t !== 0; t = e(t))
            this.$3[t] = this.$3[2 * t] + this.$3[2 * t + 1];
        }),
        (n.get = function (t) {
          (0 <= t && t < this.$1) || s(0, 5188, t);
          var e = this.$2 + t;
          return this.$3[e];
        }),
        (n.getSize = function () {
          return this.$1;
        }),
        (n.sumUntil = function (n) {
          if (((0 <= n && n < this.$1 + 1) || s(0, 5188, n), n === 0)) return 0;
          for (var t = this.$2 + n - 1, r = this.$3[t]; t !== 1; t = e(t))
            t % 2 === 1 && (r += this.$3[t - 1]);
          return r;
        }),
        (n.sumTo = function (t) {
          return (
            (0 <= t && t < this.$1) || s(0, 5188, t),
            this.sumUntil(t + 1)
          );
        }),
        (n.sum = function (t, n) {
          return (t <= n || s(0, 5189), this.sumUntil(n) - this.sumUntil(t));
        }),
        (n.greatestLowerBound = function (t) {
          if (t < 0) return -1;
          var e = 1;
          if (this.$3[e] <= t) return this.$1;
          for (var n = t; e < this.$2; ) {
            var r = this.$3[2 * e];
            n < r ? (e = 2 * e) : ((e = 2 * e + 1), (n -= r));
          }
          return e - this.$2;
        }),
        (n.greatestStrictLowerBound = function (t) {
          if (t <= 0) return -1;
          var e = 1;
          if (this.$3[e] < t) return this.$1;
          for (var n = t; e < this.$2; ) {
            var r = this.$3[2 * e];
            n <= r ? (e = 2 * e) : ((e = 2 * e + 1), (n -= r));
          }
          return e - this.$2;
        }),
        (n.leastUpperBound = function (t) {
          return this.greatestStrictLowerBound(t) + 1;
        }),
        (n.leastStrictUpperBound = function (t) {
          return this.greatestLowerBound(t) + 1;
        }),
        t
      );
    })();
    l.default = d;
  },
  98,
);
