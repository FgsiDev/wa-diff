__d(
  "CharacterMetadata",
  ["immutable"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("immutable")).OrderedSet,
      s = e.Record,
      u = l(),
      c = { style: u, entity: null },
      d = s(c),
      m = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var r = t.prototype;
        return (
          (r.getStyle = function () {
            return this.get("style");
          }),
          (r.getEntity = function () {
            return this.get("entity");
          }),
          (r.hasStyle = function (t) {
            return this.getStyle().includes(t);
          }),
          (t.applyStyle = function (n, r) {
            var e = n.set("style", n.getStyle().add(r));
            return t.create(e);
          }),
          (t.removeStyle = function (n, r) {
            var e = n.set("style", n.getStyle().remove(r));
            return t.create(e);
          }),
          (t.applyEntity = function (n, r) {
            var e = n.getEntity() === r ? n : n.set("entity", r);
            return t.create(e);
          }),
          (t.create = function (r) {
            if (!r) return p;
            var e = { style: u, entity: null },
              o = n("immutable").Map(e).merge(r),
              a = _.get(o);
            if (a) return a;
            var i = new t(o);
            return ((_ = _.set(o, i)), i);
          }),
          (t.fromJS = function (n) {
            var e = n.entity,
              r = n.style;
            return new t({
              style: Array.isArray(r) ? l(r) : r,
              entity: Array.isArray(e) ? l(e) : e,
            });
          }),
          t
        );
      })(d),
      p = new m(),
      _ = e.Map([[e.Map(c), p]]);
    ((m.EMPTY = p), (a.exports = m));
  },
  null,
);
