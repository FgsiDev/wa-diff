__d(
  "ContentState",
  [
    "BlockMapBuilder",
    "CharacterMetadata",
    "ContentBlock",
    "ContentBlockNode",
    "DraftEntity",
    "SelectionState",
    "generateRandomKey",
    "getOwnObjectValues",
    "gkx",
    "immutable",
    "sanitizeDraftText",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("immutable")).List,
      s = e.Map,
      u = e.OrderedMap,
      c = e.Record,
      d = e.Repeat,
      m = {
        entityMap: null,
        blockMap: null,
        selectionBefore: null,
        selectionAfter: null,
      },
      p = c(m),
      _ = n("gkx")("20944") ? n("ContentBlockNode") : n("ContentBlock"),
      f = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var r = t.prototype;
        return (
          (r.getEntityMap = function () {
            return n("DraftEntity");
          }),
          (r.getBlockMap = function () {
            return this.get("blockMap");
          }),
          (r.getSelectionBefore = function () {
            return this.get("selectionBefore");
          }),
          (r.getSelectionAfter = function () {
            return this.get("selectionAfter");
          }),
          (r.getBlockForKey = function (t) {
            var e = this.getBlockMap().get(t);
            return e;
          }),
          (r.getKeyBefore = function (t) {
            return this.getBlockMap()
              .reverse()
              .keySeq()
              .skipUntil(function (e) {
                return e === t;
              })
              .skip(1)
              .first();
          }),
          (r.getKeyAfter = function (t) {
            return this.getBlockMap()
              .keySeq()
              .skipUntil(function (e) {
                return e === t;
              })
              .skip(1)
              .first();
          }),
          (r.getBlockAfter = function (t) {
            return this.getBlockMap()
              .skipUntil(function (e, n) {
                return n === t;
              })
              .skip(1)
              .first();
          }),
          (r.getBlockBefore = function (t) {
            return this.getBlockMap()
              .reverse()
              .skipUntil(function (e, n) {
                return n === t;
              })
              .skip(1)
              .first();
          }),
          (r.getBlocksAsArray = function () {
            return this.getBlockMap().toArray();
          }),
          (r.getFirstBlock = function () {
            return this.getBlockMap().first();
          }),
          (r.getLastBlock = function () {
            return this.getBlockMap().last();
          }),
          (r.getPlainText = function (t) {
            return this.getBlockMap()
              .map(function (e) {
                return e ? e.getText() : "";
              })
              .join(t != null && t !== "" ? t : "\n");
          }),
          (r.getLastCreatedEntityKey = function () {
            return n("DraftEntity").__getLastCreatedEntityKey();
          }),
          (r.hasText = function () {
            var e = this.getBlockMap();
            return (
              e.size > 1 ||
              escape(e.first().getText()).replace(/%u200B/g, "").length > 0
            );
          }),
          (r.createEntity = function (t, r, o) {
            return (n("DraftEntity").__create(t, r, o), this);
          }),
          (r.mergeEntityData = function (t, r) {
            return (n("DraftEntity").__mergeData(t, r), this);
          }),
          (r.replaceEntityData = function (t, r) {
            return (n("DraftEntity").__replaceData(t, r), this);
          }),
          (r.addEntity = function (t) {
            return (n("DraftEntity").__add(t), this);
          }),
          (r.getEntity = function (t) {
            return n("DraftEntity").__get(t);
          }),
          (r.getAllEntities = function () {
            return n("DraftEntity").__getAll();
          }),
          (r.setEntityMap = function (t) {
            return (n("DraftEntity").__loadWithEntities(t), this);
          }),
          (t.mergeEntityMaps = function (t, n) {
            return t.merge(n.__getAll());
          }),
          (r.replaceEntityMap = function (t) {
            return this.setEntityMap(t.__getAll());
          }),
          (r.setSelectionBefore = function (t) {
            return this.set("selectionBefore", t);
          }),
          (r.setSelectionAfter = function (t) {
            return this.set("selectionAfter", t);
          }),
          (r.setBlockMap = function (t) {
            return this.set("blockMap", t);
          }),
          (t.createFromBlockArray = function (r, o) {
            var e = Array.isArray(r) ? r : r.contentBlocks,
              a = n("BlockMapBuilder").createFromArray(e),
              i = a.isEmpty()
                ? new (n("SelectionState"))()
                : n("SelectionState").createEmpty(a.first().getKey());
            return new t({
              blockMap: a,
              entityMap: o || n("DraftEntity"),
              selectionBefore: i,
              selectionAfter: i,
            });
          }),
          (t.createFromText = function (r, o) {
            o === void 0 && (o = /\r\n?|\n/g);
            var e = r.split(o),
              a = e.map(function (e) {
                return (
                  (e = n("sanitizeDraftText")(e)),
                  new _({
                    key: n("generateRandomKey")(),
                    text: e,
                    type: "unstyled",
                    characterList: l(d(n("CharacterMetadata").EMPTY, e.length)),
                  })
                );
              });
            return t.createFromBlockArray(a);
          }),
          (t.fromJS = function (r) {
            return new t(
              babelHelpers.extends({}, r, {
                blockMap: u(r.blockMap).map(t.createContentBlockFromJS),
                selectionBefore: new (n("SelectionState"))(r.selectionBefore),
                selectionAfter: new (n("SelectionState"))(r.selectionAfter),
              }),
            );
          }),
          (t.createContentBlockFromJS = function (t) {
            var e = t.characterList;
            return new _(
              babelHelpers.extends({}, t, {
                data: s(t.data),
                characterList:
                  e != null
                    ? l(
                        (Array.isArray(e) ? e : n("getOwnObjectValues")(e)).map(
                          function (e) {
                            return n("CharacterMetadata").fromJS(e);
                          },
                        ),
                      )
                    : void 0,
              }),
            );
          }),
          t
        );
      })(p);
    a.exports = f;
  },
  null,
);
