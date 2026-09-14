__d(
  "ContentBlock",
  ["CharacterMetadata", "findRangesImmutable", "immutable"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("immutable")).List,
      s = e.Map,
      u = e.OrderedSet,
      c = e.Record,
      d = e.Repeat,
      m = u(),
      p = {
        key: "",
        type: "unstyled",
        text: "",
        characterList: l(),
        depth: 0,
        data: s(),
      },
      _ = c(p),
      f = function (t) {
        if (!t) return t;
        var e = t.characterList,
          r = t.text;
        return (
          r != null &&
            r !== "" &&
            !e &&
            (t.characterList = l(d(n("CharacterMetadata").EMPTY, r.length))),
          t
        );
      },
      g = (function (e) {
        function t(t) {
          return e.call(this, f(t)) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var r = t.prototype;
        return (
          (r.getKey = function () {
            return this.get("key");
          }),
          (r.getType = function () {
            return this.get("type");
          }),
          (r.getText = function () {
            return this.get("text");
          }),
          (r.getCharacterList = function () {
            return this.get("characterList");
          }),
          (r.getLength = function () {
            return this.getText().length;
          }),
          (r.getDepth = function () {
            return this.get("depth");
          }),
          (r.getData = function () {
            return this.get("data");
          }),
          (r.getInlineStyleAt = function (t) {
            var e = this.getCharacterList().get(t);
            return e ? e.getStyle() : m;
          }),
          (r.getEntityAt = function (t) {
            var e = this.getCharacterList().get(t);
            return e ? e.getEntity() : null;
          }),
          (r.findStyleRanges = function (t, r) {
            n("findRangesImmutable")(this.getCharacterList(), h, t, r);
          }),
          (r.findEntityRanges = function (t, r) {
            n("findRangesImmutable")(this.getCharacterList(), y, t, r);
          }),
          t
        );
      })(_);
    function h(e, t) {
      return e.getStyle() === t.getStyle();
    }
    function y(e, t) {
      return e.getEntity() === t.getEntity();
    }
    a.exports = g;
  },
  null,
);
