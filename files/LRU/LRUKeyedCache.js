__d(
  "LRUKeyedCache",
  ["qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = typeof e;
      return (
        t === "function" || (t === "object" && e != null) || t === "symbol"
      );
    }
    var s = 1e3,
      u = function (t, n, r) {
        ((this.next = null),
          (this.prev = null),
          (this.key = t),
          (this.cacheVersion = n),
          (this.value = r));
      },
      c = (function () {
        function t(e, t) {
          (t === void 0 && (t = s),
            (this.cache = new Map()),
            (this.cacheVersion = 0),
            (this.capacity = t),
            (this.keyFunction = e),
            (this.weakCache =
              r("qex")._("5330") === !0 ? new WeakMap() : void 0),
            (this.head = new u("head", this.cacheVersion, null)),
            (this.tail = new u("tail", this.cacheVersion, null)),
            (this.head.next = this.tail),
            (this.tail.prev = this.head));
        }
        var n = t.prototype;
        return (
          (n.set = function (n, r) {
            var t = this.keyFunction(n);
            if (this.weakCache != null && e(t)) {
              this.weakCache.set(t, {
                cacheVersion: this.cacheVersion,
                value: r,
              });
              return;
            }
            var o = this.$1(t);
            (o == null
              ? ((o = new u(t, this.cacheVersion, r)), this.cache.set(t, o))
              : (o.value = r),
              this.$2(o),
              this.$3());
          }),
          (n.get = function (n) {
            var t = this.keyFunction(n);
            if (this.weakCache != null && e(t)) {
              var r = this.weakCache.get(t);
              if (r == null || r.cacheVersion !== this.cacheVersion) {
                this.weakCache.delete(t);
                return;
              }
              return r.value;
            }
            var o = this.$1(t);
            return o == null ? o : (this.$2(o), o.value);
          }),
          (n.clear = function () {
            this.cacheVersion++;
          }),
          (n.$1 = function (t) {
            var e = this.cache.get(t);
            if (e == null) return e;
            if (e.cacheVersion != this.cacheVersion) {
              this.$4(t);
              return;
            }
            return e;
          }),
          (n.$2 = function (t) {
            (this.$5(t), this.$6(t));
          }),
          (n.$6 = function (t) {
            ((t.prev = this.head),
              (t.next = this.head.next),
              this.head.next != null && (this.head.next.prev = t),
              (this.head.next = t));
          }),
          (n.$5 = function (t) {
            (t.prev != null && (t.prev.next = t.next),
              t.next != null && (t.next.prev = t.prev));
          }),
          (n.$4 = function (t) {
            var e = this.cache.get(t);
            e !== void 0 && (this.$5(e), this.cache.delete(t));
          }),
          (n.$3 = function () {
            this.cache.size > this.capacity &&
              this.tail.prev !== null &&
              this.$4(this.tail.prev.key);
          }),
          (n.getCacheSnapshot_DEBUG = function () {
            return new Map(this.cache);
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
