__d(
  "AdsLocationBreakdownDataLoader",
  [
    "AdsGenericFilter",
    "AdsGenericFilterField",
    "AdsGenericFilterFieldType",
    "AdsGenericFilterSet",
    "AdsGraphAPI",
    "AdsLocationBreakdownDataLoaderUtils",
    "GraphAPIPaging",
    "cachedGraphAPI",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = 5,
      u = new (r("AdsGenericFilterField"))(
        "location",
        r("AdsGenericFilterFieldType").STRING_SET,
      );
    function c(e, t) {
      var n = [];
      return (
        e && n.push(new (r("AdsGenericFilter"))(u, "IN", e)),
        t && t.length && n.push.apply(n, t),
        n.length > 0
          ? { filtering: new (r("AdsGenericFilterSet"))(n).toAPI() }
          : Object.freeze({})
      );
    }
    function d(t, n, a, l, u) {
      return r("cachedGraphAPI")(
        o("AdsGraphAPI")
          .get(i.id)
          .object(n, t)
          .edge("locations_breakdown")
          .batched(),
      )
        .cacheFor(s)
        .get(
          babelHelpers.extends({}, a ? { type: a } : {}, c(l, u), { limit: e }),
        )
        .then(o("GraphAPIPaging").allPages())
        .then(function (e) {
          if (
            e.data.some(function (e) {
              return e.location_id === "0";
            })
          ) {
            var i = o(
              "AdsLocationBreakdownDataLoaderUtils",
            ).getNextBreakdownLevel(a);
            return d(t, n, i || void 0, l);
          }
          var s = new Map();
          return (
            e.data.forEach(function (e) {
              var t = e.location_id;
              if (t)
                if (s.has(t)) {
                  var n = r("nullthrows")(s.get(t));
                  s.set(
                    t,
                    babelHelpers.extends({}, e, {
                      num_pages: n.num_pages + e.num_pages,
                      num_pages_eligible_for_store_visit_reporting:
                        n.num_pages_eligible_for_store_visit_reporting +
                        e.num_pages_eligible_for_store_visit_reporting,
                    }),
                  );
                } else s.set(t, e);
            }),
            Array.from(s.values())
          );
        })
        .then(function (e) {
          return e.filter(function (e) {
            return e.num_pages > 0;
          });
        });
    }
    l.getBreakdown = d;
  },
  98,
);
