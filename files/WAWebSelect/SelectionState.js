__d(
  "SelectionState",
  ["immutable"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("immutable").Record,
      l = {
        anchorKey: "",
        anchorOffset: 0,
        focusKey: "",
        focusOffset: 0,
        isBackward: !1,
        hasFocus: !1,
      },
      s = e(l),
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.serialize = function () {
            return (
              "Anchor: " +
              this.getAnchorKey() +
              ":" +
              this.getAnchorOffset() +
              ", Focus: " +
              this.getFocusKey() +
              ":" +
              this.getFocusOffset() +
              ", Is Backward: " +
              String(this.getIsBackward()) +
              ", Has Focus: " +
              String(this.getHasFocus())
            );
          }),
          (n.getAnchorKey = function () {
            return this.get("anchorKey");
          }),
          (n.getAnchorOffset = function () {
            return this.get("anchorOffset");
          }),
          (n.getFocusKey = function () {
            return this.get("focusKey");
          }),
          (n.getFocusOffset = function () {
            return this.get("focusOffset");
          }),
          (n.getIsBackward = function () {
            return this.get("isBackward");
          }),
          (n.getHasFocus = function () {
            return this.get("hasFocus");
          }),
          (n.hasEdgeWithin = function (t, n, r) {
            var e = this.getAnchorKey(),
              o = this.getFocusKey();
            if (e === o && e === t) {
              var a = this.getStartOffset(),
                i = this.getEndOffset();
              return (n <= a && a <= r) || (n <= i && i <= r);
            }
            if (t !== e && t !== o) return !1;
            var l = t === e ? this.getAnchorOffset() : this.getFocusOffset();
            return n <= l && r >= l;
          }),
          (n.isCollapsed = function () {
            return (
              this.getAnchorKey() === this.getFocusKey() &&
              this.getAnchorOffset() === this.getFocusOffset()
            );
          }),
          (n.getStartKey = function () {
            return this.getIsBackward()
              ? this.getFocusKey()
              : this.getAnchorKey();
          }),
          (n.getStartOffset = function () {
            return this.getIsBackward()
              ? this.getFocusOffset()
              : this.getAnchorOffset();
          }),
          (n.getEndKey = function () {
            return this.getIsBackward()
              ? this.getAnchorKey()
              : this.getFocusKey();
          }),
          (n.getEndOffset = function () {
            return this.getIsBackward()
              ? this.getAnchorOffset()
              : this.getFocusOffset();
          }),
          (t.createEmpty = function (n) {
            return new t({
              anchorKey: n,
              anchorOffset: 0,
              focusKey: n,
              focusOffset: 0,
              isBackward: !1,
              hasFocus: !1,
            });
          }),
          t
        );
      })(s);
    a.exports = u;
  },
  null,
);
