__d(
  "classWithMixins",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n = function () {
        e.apply(this, arguments);
      };
      return (
        (n.prototype = Object.assign(Object.create(e.prototype), t.prototype)),
        n
      );
    }
    i.default = e;
  },
  66,
);
