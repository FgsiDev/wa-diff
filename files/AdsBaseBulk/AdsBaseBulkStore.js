__d(
  "AdsBaseBulkStore",
  [
    "FluxDerivedStore",
    "ReverseInteropUtil",
    "abstractMethod",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t) || this),
          (n.$AdsBaseBulkStore$p_1 = r("immutable").Map(n.__getConfigs())),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.__getConfigs = function () {
          return r("abstractMethod")("AdsBaseBulkStore", "__getConfigs");
        }),
        (n.__getIDs = function () {
          return r("abstractMethod")("AdsBaseBulkStore", "__getIDs");
        }),
        (n.__getStores = function () {
          return r("abstractMethod")("AdsBaseBulkStore", "__getStores");
        }),
        (n.__getData = function (t, n) {
          var e = r("nullthrows")(this.$AdsBaseBulkStore$p_1.get(t)),
            o = e.getOne,
            a = this.__getIDs(),
            i = n ? n.data : r("immutable").Map();
          return (
            (i = i.withMutations(function (e) {
              for (var t of a) e.set(t, o(t));
            })),
            { ids: a, data: i }
          );
        }),
        (n.__computeResult = function (t, n) {
          var e = n.data,
            a = n.ids,
            i = r("nullthrows")(this.$AdsBaseBulkStore$p_1.get(t)),
            l = i.aggregate,
            s = i.filter,
            u = [],
            c = [];
          for (var d of a) {
            var m = e.get(d);
            (!s || s(m)) && (u.push(d), c.push(m));
          }
          var p = o("ReverseInteropUtil").ignore(function () {
            return l(c, u);
          }, "bulk store aggregation needs to be typed first");
          return { bulkSpec: p, filteredValues: c };
        }),
        (n.__areEqual = function (t, n) {
          return t.ids === n.ids && t.data === n.data;
        }),
        t
      );
    })(r("FluxDerivedStore"));
    ((e.__moduleID = i.id), (l.default = e));
  },
  98,
);
