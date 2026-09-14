__d(
  "AdsDataManagerApiUtils",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = new Map();
      return (
        t
          .filter(function (t) {
            return e[t] == null;
          })
          .forEach(function (e) {
            o.set(e, n || r("err")("Object missing"));
          }),
        o
      );
    }
    function s(e, t) {
      return [
        e,
        t.limit != null ? "limit(" + t.limit + ")" : null,
        t.adgroupID != null ? "adgroup_id(" + t.adgroupID + ")" : null,
        "fields(" + t.pageFields + ")",
      ]
        .filter(Boolean)
        .join(".");
    }
    ((l.extractErrors = e), (l.buildParamsForEdge = s));
  },
  98,
);
