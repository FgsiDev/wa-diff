__d(
  "PageletSet",
  ["Arbiter"],
  function (t, n, r, o, a, i, l) {
    var e = {};
    function s(t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function u(t) {
      return e[t];
    }
    function c(t) {
      if (!s(t)) {
        var n = new _(t);
        e[t] = n;
      }
      return u(t);
    }
    function d() {
      return Object.keys(e);
    }
    function m(t) {
      if (s(t)) {
        var n = u(t);
        (delete e[t], n.destroy());
      }
    }
    function p(e, t) {
      return "contains" in e
        ? e.contains(t)
        : !!(e.compareDocumentPosition(t) & 16);
    }
    var _ = (function () {
      function t(e) {
        var t = this;
        ((this.id = e),
          (this.$1 = null),
          (this.$2 = []),
          this.addDestructor(function () {
            r("Arbiter").inform("pagelet/destroy", { id: t.id, root: t.$1 });
          }));
      }
      var n = t.prototype;
      return (
        (n.getRoot = function () {
          return this.$1;
        }),
        (n.setRoot = function (t) {
          this.$1 = t;
        }),
        (n.$3 = function () {
          var t = [],
            n = this.$1;
          if (!n) return t;
          for (var r = d(), o = 0; o < r.length; o++) {
            var a = r[o];
            if (a !== this.id) {
              var i = e[a],
                l = i.getRoot();
              l && p(n, l) && t.push(i);
            }
          }
          return t;
        }),
        (n.addDestructor = function (t) {
          this.$2.push(t);
        }),
        (n.destroy = function () {
          for (var e = this.$3(), t = 0; t < e.length; t++) {
            var n = e[t];
            s(n.id) && m(n.id);
          }
          for (var r = 0; r < this.$2.length; r++) {
            var o = this.$2[r]();
            o && o();
          }
        }),
        t
      );
    })();
    ((l.hasPagelet = s),
      (l.getPagelet = u),
      (l.getOrCreatePagelet = c),
      (l.getPageletIDs = d),
      (l.removePagelet = m));
  },
  98,
);
