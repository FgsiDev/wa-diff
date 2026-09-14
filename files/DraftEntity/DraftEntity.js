__d(
  "DraftEntity",
  ["invariant", "DraftEntityInstance", "immutable", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    var e = n("immutable").OrderedMap,
      s = e(),
      u = n("uuidv4")(),
      c = {
        __getAll: function () {
          return s;
        },
        __loadWithEntities: function (t) {
          ((s = t), (u = n("uuidv4")()));
        },
        __getLastCreatedEntityKey: function () {
          return u;
        },
        __create: function (t, r, o) {
          return c.__add(
            new (n("DraftEntityInstance"))({
              type: t,
              mutability: r,
              data: o || {},
            }),
          );
        },
        __add: function (t) {
          return ((u = n("uuidv4")()), (s = s.set(u, t)), u);
        },
        __get: function (t) {
          var e = s.get(t);
          return (e || l(0, 2105, t), e);
        },
        get: function (t) {
          return c.__get(t);
        },
        set: function (t, n) {
          return ((s = s.set(t, n)), c);
        },
        last: function () {
          return s.last();
        },
        __mergeData: function (t, n) {
          var e = c.__get(t),
            r = babelHelpers.extends({}, e.getData(), n),
            o = e.set("data", r);
          return ((s = s.set(t, o)), o);
        },
        __replaceData: function (t, n) {
          var e = c.__get(t),
            r = e.set("data", n);
          return ((s = s.set(t, r)), r);
        },
      };
    a.exports = c;
  },
  null,
);
