__d(
  "ContentBlockNode",
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
        parent: null,
        characterList: l(),
        data: s(),
        depth: 0,
        key: "",
        text: "",
        type: "unstyled",
        children: l(),
        prevSibling: null,
        nextSibling: null,
      },
      _ = function (t, n) {
        return t.getStyle() === n.getStyle();
      },
      f = function (t, n) {
        return t.getEntity() === n.getEntity();
      },
      g = function (t) {
        if (!t) return t;
        var e = t.characterList,
          r = t.text;
        return (
          r &&
            !e &&
            (t.characterList = l(d(n("CharacterMetadata").EMPTY, r.length))),
          t
        );
      },
      h = (function (e) {
        function t(t) {
          return (t === void 0 && (t = p), e.call(this, g(t)) || this);
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
          (r.getChildKeys = function () {
            return this.get("children");
          }),
          (r.getParentKey = function () {
            return this.get("parent");
          }),
          (r.getPrevSiblingKey = function () {
            return this.get("prevSibling");
          }),
          (r.getNextSiblingKey = function () {
            return this.get("nextSibling");
          }),
          (r.findStyleRanges = function (t, r) {
            n("findRangesImmutable")(this.getCharacterList(), _, t, r);
          }),
          (r.findEntityRanges = function (t, r) {
            n("findRangesImmutable")(this.getCharacterList(), f, t, r);
          }),
          t
        );
      })(c(p));
    a.exports = h;
  },
  null,
);
