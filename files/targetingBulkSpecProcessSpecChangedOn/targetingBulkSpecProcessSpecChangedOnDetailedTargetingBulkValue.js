__d(
  "targetingBulkSpecProcessSpecChangedOnDetailedTargetingBulkValue",
  [
    "invariant",
    "AdsBulkValueUtils",
    "AdsEmptyValue",
    "AdsFlexibleTargetingConstants",
    "AdsFlexibleTargetingMutationMode",
    "AdsUniformValue",
    "targetingBulkSpecGetNewSpecOnAddingDetailedTargetingEntries",
    "targetingBulkSpecSerializeFlexibleSpecEntry",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, o, a) {
      if (
        !e ||
        e instanceof r("AdsEmptyValue") ||
        e instanceof r("AdsUniformValue")
      )
        return new (r("AdsUniformValue"))(t);
      if (!n) return e;
      switch (n) {
        case r("AdsFlexibleTargetingMutationMode").DELETE_INCLUDED_ENTRIES:
        case r("AdsFlexibleTargetingMutationMode").DELETE_EXCLUDED_ENTRIES:
          return (
            (o != null && o !== void 0 && o >= 0) || s(0, 3660),
            m(e, o, a, n)
          );
        case r("AdsFlexibleTargetingMutationMode").DELETE_INCLUSION_BOX:
        case r("AdsFlexibleTargetingMutationMode").DELETE_EXCLUSION_BOX:
          return (
            (o != null && o !== void 0 && o > 0) || s(0, 3661),
            p(e, o, n)
          );
        case r("AdsFlexibleTargetingMutationMode").ADD_EXCLUSION_BOX:
          return _(e);
        case r("AdsFlexibleTargetingMutationMode").ADD_EXCLUDED_ENTRIES:
          return u(e, a);
        case r("AdsFlexibleTargetingMutationMode").ADD_INCLUDED_ENTRIES:
          return (
            (o != null && o !== void 0 && o >= 0) || s(0, 3662),
            c(e, o, a)
          );
      }
      return e;
    }
    function u(e, t) {
      return o("AdsBulkValueUtils").mapBulkValue(e, function (e) {
        var n = e ? e.slice(0) : [],
          o = r("targetingBulkSpecGetNewSpecOnAddingDetailedTargetingEntries")(
            e,
            r("AdsFlexibleTargetingConstants").ITEM_TYPE.EXCLUDE_ANY,
            n.length - 1,
            t,
          );
        return (
          n.length === 0 ||
          n[n.length - 1].type ===
            r("AdsFlexibleTargetingConstants").ITEM_TYPE.INCLUDE_ANY
            ? n.push(o)
            : (n[n.length - 1] = o),
          n
        );
      });
    }
    function c(e, t, n) {
      return o("AdsBulkValueUtils").mapBulkValue(e, function (e) {
        if (!d(e, t)) return e;
        var o = e ? e.slice(0) : [],
          a = r("targetingBulkSpecGetNewSpecOnAddingDetailedTargetingEntries")(
            e,
            r("AdsFlexibleTargetingConstants").ITEM_TYPE.INCLUDE_ANY,
            t,
            n,
          );
        return (
          o.length === 0 ||
          o[t].type === r("AdsFlexibleTargetingConstants").ITEM_TYPE.EXCLUDE_ANY
            ? (t === 0 || s(0, 3663), o.splice(t, 0, a))
            : (o[t] = a),
          o
        );
      });
    }
    function d(e, t) {
      return t === 0
        ? !0
        : !!e &&
            !!e[t] &&
            e[t].type ===
              r("AdsFlexibleTargetingConstants").ITEM_TYPE.INCLUDE_ANY;
    }
    function m(e, t, n, a) {
      a === r("AdsFlexibleTargetingMutationMode").DELETE_EXCLUDED_ENTRIES ||
        a === r("AdsFlexibleTargetingMutationMode").DELETE_INCLUDED_ENTRIES ||
        s(0, 3665);
      var i = n.map(function (e) {
          return e.type + "." + e.id;
        }),
        l = a === r("AdsFlexibleTargetingMutationMode").DELETE_EXCLUDED_ENTRIES;
      return o("AdsBulkValueUtils").mapBulkValue(e, function (e) {
        var n = l && e != null ? e.length - 1 : t;
        if (
          !e ||
          (l &&
            e[n].type !==
              r("AdsFlexibleTargetingConstants").ITEM_TYPE.EXCLUDE_ANY) ||
          (!l &&
            (!e[n] ||
              e[n].type ===
                r("AdsFlexibleTargetingConstants").ITEM_TYPE.EXCLUDE_ANY))
        )
          return e;
        var o = { type: e[n].type };
        Object.entries(e[n]).forEach(function (t) {
          var a = t[0],
            l = t[1];
          if (l instanceof Array) {
            var u = l.filter(function (e) {
              var t = r("targetingBulkSpecSerializeFlexibleSpecEntry")(e);
              return !i.includes(a + "." + t);
            });
            u.length !== 0 && (o[a] = u);
          } else (a === "type" || s(0, 3666), (o.type = e[n][a]));
        });
        var a = e.slice(0);
        return ((a[n] = o), a);
      });
    }
    function p(e, t, n) {
      return n === r("AdsFlexibleTargetingMutationMode").DELETE_EXCLUSION_BOX
        ? o("AdsBulkValueUtils").mapBulkValue(e, function (e) {
            if (
              !e ||
              e[e.length - 1].type !==
                r("AdsFlexibleTargetingConstants").ITEM_TYPE.EXCLUDE_ANY
            )
              return e;
            var t = e.slice(0, e.length - 1);
            return t;
          })
        : o("AdsBulkValueUtils").mapBulkValue(e, function (e) {
            if (
              !e ||
              !e[t] ||
              e[t].type ===
                r("AdsFlexibleTargetingConstants").ITEM_TYPE.EXCLUDE_ANY
            )
              return e;
            var n = e.slice(0);
            return (n.splice(t, 1), n);
          });
    }
    function _(e) {
      return o("AdsBulkValueUtils").mapBulkValue(e, function (e) {
        var t = e ? e.slice(0) : [];
        return (
          (t[t.length] = {
            type: r("AdsFlexibleTargetingConstants").ITEM_TYPE.EXCLUDE_ANY,
          }),
          t
        );
      });
    }
    l.default = e;
  },
  98,
);
