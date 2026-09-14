__d(
  "ContextualLayerHideOnScroll",
  ["Event", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.$2 = []), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.enable = function () {
          var e = this;
          this.$2 = [
            this.$1.subscribe("contextchange", function () {
              return e.$4();
            }),
            this.$1.subscribe("show", function () {
              return e.attach();
            }),
            this.$1.subscribe("hide", function () {
              return e.detach();
            }),
          ];
        }),
        (t.disable = function () {
          for (; this.$2.length; ) {
            var e;
            (e = this.$2.pop()) == null || e.unsubscribe();
          }
          this.detach();
        }),
        (t.attach = function () {
          var e = this;
          if (!this.$3) {
            var t = this.$1.getContextScrollParent();
            t !== window &&
              r("setTimeout")(function () {
                e.$3 = r("Event").listen(t, "scroll", function () {
                  e.$1.hide();
                });
              });
          }
        }),
        (t.detach = function () {
          (this.$3 && this.$3.remove(), (this.$3 = null));
        }),
        (t.$4 = function () {
          (this.detach(), this.$1.isShown() && this.attach());
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
