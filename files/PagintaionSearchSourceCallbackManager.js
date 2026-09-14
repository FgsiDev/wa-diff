__d(
  "PagintaionSearchSourceCallbackManager",
  ["SearchSourceQueryStatus", "immutable"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.$4 = e.parseFn), (this.$3 = e.matchFn), this.reset());
      }
      var t = e.prototype;
      return (
        (t.reset = function () {
          ((this.$1 = {}), (this.$2 = {}));
        }),
        (t.search = function (t, n, r) {
          var e = this,
            a = this.$5(t),
            i =
              r === !0
                ? o("SearchSourceQueryStatus").ACTIVE
                : o("SearchSourceQueryStatus").COMPLETE;
          if (a.size === 0) {
            n([], t, i);
            return;
          }
          var l = a
            .map(function (t) {
              return e.$1[t];
            })
            .toArray();
          n(l, t, i);
        }),
        (t.addQueryEntries = function (t, n, r) {
          var e = this;
          t.forEach(function (t) {
            var n = t.getUniqueID();
            e.$1[n] = t;
          });
          var o = this.$4(n).flatValue;
          ((this.$2[o] = this.$5(o).union(
            t.map(function (e) {
              return e.getUniqueID();
            }),
          )),
            this.search(n, r));
        }),
        (t.$5 = function (t) {
          var e = this.$4(t).flatValue;
          if (Object.prototype.hasOwnProperty.call(this.$2, e))
            return this.$2[e];
          var n = this.$6(e),
            r = this.$7(t, n);
          return ((this.$2[e] = r), r);
        }),
        (t.$6 = function (t) {
          var e = -1,
            n = null;
          return (
            Object.keys(this.$2).forEach(function (r) {
              t.startsWith(r) && r.length > e && ((e = r.length), (n = r));
            }),
            n != null && Object.prototype.hasOwnProperty.call(this.$2, n)
              ? this.$2[n]
              : r("immutable").OrderedSet([])
          );
        }),
        (t.$7 = function (t, n) {
          var e = this;
          return n.filter(function (n) {
            return e.$3(t, e.$1[n].getTitle());
          });
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
