__d(
  "targetingBulkSpecGetNewSpecOnAddingDetailedTargetingEntries",
  ["invariant", "adsTargetingIsFlexibleSpecDescriptorType"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, o) {
      var a = { type: t },
        i = [];
      return (
        e &&
          e[n] &&
          e[n].type === a.type &&
          ((i = Object.keys(e[n]).filter(function (e) {
            return e !== "type";
          })),
          Object.entries(e[n]).forEach(function (e) {
            var t = e[0],
              n = e[1];
            t !== "type" && n instanceof Array && (a[t] = n.slice(0));
          })),
        o.forEach(function (t) {
          if (!(e && e[n] && u(t, e[n], i))) {
            a[t.type] || (a[t.type] = []);
            var o = r("adsTargetingIsFlexibleSpecDescriptorType")(t.type)
              ? { id: t.id, name: t.name }
              : parseInt(t.id, 10);
            a[t.type].push(o);
          }
        }),
        a
      );
    }
    function u(e, t, n) {
      if (!n.includes(e.type)) return !1;
      var r = t[e.type];
      return (
        (r != null && r instanceof Array) || s(0, 3664),
        r
          .map(function (e) {
            return e.id;
          })
          .includes(e.id) || r.includes(parseInt(e.id, 10))
      );
    }
    l.default = e;
  },
  98,
);
