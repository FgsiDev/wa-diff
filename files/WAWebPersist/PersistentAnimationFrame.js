__d(
  "PersistentAnimationFrame",
  [
    "SimpleObjectsPool",
    "Visibility",
    "cancelAnimationFrame",
    "requestAnimationFrame",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 16,
      s,
      u = {},
      c = !0;
    function d() {
      return (s || (s = new (r("SimpleObjectsPool"))(m)), s);
    }
    var m = (function () {
      function t() {
        var e = this;
        this.$1 = function () {
          (e.callback == null || e.callback(), e.$2(), d().put(e));
        };
      }
      ((t.request = function (t) {
        return t ? d().get().request(t) : 0;
      }),
        (t.cancel = function (t) {
          if (t !== 0) {
            var e = u[String(t)];
            e && e.cancel();
          }
        }));
      var n = t.prototype;
      return (
        (n.request = function (n) {
          return (
            c && p(),
            (this.callback = n),
            (this.hidden = r("Visibility").isHidden()),
            this.hidden
              ? (this.intID = setTimeout(this.$1, e))
              : (this.intID = r("requestAnimationFrame")(this.$1)),
            (this.strID = String(this.intID)),
            (u[this.strID] = this),
            this.intID
          );
        }),
        (n.cancel = function () {
          this.strID != null &&
            (this.hidden === !0
              ? clearTimeout(this.intID)
              : r("cancelAnimationFrame")(this.intID),
            this.$2(),
            d().put(this));
        }),
        (n.$2 = function () {
          (delete u[this.strID],
            delete this.intID,
            delete this.strID,
            delete this.callback,
            delete this.hidden);
        }),
        t
      );
    })();
    function p() {
      var e;
      ((c = !1),
        (e = r("Visibility")).addListener(e.HIDDEN, _),
        e.addListener(e.VISIBLE, _));
    }
    function _() {
      Object.keys(u).forEach(function (e) {
        var t = u[e],
          n = t.callback;
        (t.cancel(), n());
      });
    }
    l.default = m;
  },
  98,
);
