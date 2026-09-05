__d(
  "AdsManagerRelayEntrypointController",
  ["AdsManagerRelayEnvironment", "RelayHooks", "stableStringify"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        var o, a;
        (t === void 0 && (t = r("AdsManagerRelayEnvironment")),
          (this.$3 = null),
          (this.$4 = null),
          (this.$5 = !1),
          (this.$6 = new Set()),
          (this.$7 = !1),
          (this.$8 = 0),
          (this.$9 = new Map()),
          (this.$2 = t),
          (this.$1 = e),
          (this.$7 =
            (o = n == null ? void 0 : n.shouldRetainPreviousEntrypoints) != null
              ? o
              : !1),
          (this.$8 =
            (a = n == null ? void 0 : n.maxRetainedEntrypoints) != null
              ? a
              : 10));
      }
      var t = e.prototype;
      return (
        (t.$10 = function () {
          var e;
          ((e = this.$3) == null || e.dispose(),
            this.$4 != null && this.$6.delete(this.$4),
            (this.$3 = null),
            (this.$4 = null));
        }),
        (t.$11 = function (t) {
          var e = this,
            n = r("stableStringify")(t);
          if (this.$4 !== n) {
            if (this.$7) {
              var a = this.$9.get(n);
              if (a != null) {
                (this.$3 != null &&
                  this.$4 != null &&
                  this.$9.set(this.$4, this.$3),
                  this.$9.delete(n),
                  (this.$3 = a),
                  (this.$4 = n));
                return;
              }
              for (
                this.$3 != null &&
                this.$4 != null &&
                this.$9.set(this.$4, this.$3);
                this.$9.size > this.$8;
              ) {
                var i = !1;
                for (var l of this.$9.keys())
                  if (l !== this.$4) {
                    var s;
                    ((s = this.$9.get(l)) == null || s.dispose(),
                      this.$9.delete(l),
                      this.$6.delete(l),
                      (i = !0));
                    break;
                  }
                if (!i) break;
              }
            } else this.$3 != null && this.$10();
            ((this.$3 = o("RelayHooks").loadEntryPoint(
              {
                getEnvironment: function () {
                  return e.$2;
                },
              },
              this.$1,
              t,
            )),
              (this.$4 = n));
          }
        }),
        (t.preloadEntrypoint = function (t) {
          this.$11(t);
        }),
        (t.loadEntrypointForDisplay = function (t) {
          (this.$11(t),
            (this.$5 = !0),
            this.$4 != null && this.$6.add(this.$4));
        }),
        (t.cancelPendingPreload = function () {
          this.$3 == null ||
            (this.$4 != null && this.$6.has(this.$4)) ||
            this.$10();
        }),
        (t.dispose = function (t) {
          if ((t === void 0 && (t = !1), t)) {
            this.$10();
            for (var e of this.$9) {
              var n = e[1];
              n.dispose();
            }
            (this.$9.clear(), this.$6.clear());
          }
          this.$5 = !1;
        }),
        (t.getEntrypointReferenceForDisplay = function () {
          return this.$5 ? this.$3 : null;
        }),
        (t.getEntrypointReference__DO_NOT_USE = function () {
          return this.$3;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
