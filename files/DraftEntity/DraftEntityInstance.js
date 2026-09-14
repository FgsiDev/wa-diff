__d(
  "DraftEntityInstance",
  ["immutable"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("immutable").Record,
      l = e({ type: "TOKEN", mutability: "IMMUTABLE", data: Object }),
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getType = function () {
            return this.get("type");
          }),
          (n.getMutability = function () {
            return this.get("mutability");
          }),
          (n.getData = function () {
            return this.get("data");
          }),
          t
        );
      })(l);
    a.exports = s;
  },
  null,
);
