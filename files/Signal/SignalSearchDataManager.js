__d(
  "SignalSearchDataManager",
  ["AdsGraphAPI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["id", "name"],
      s = [].concat(e),
      u = [].concat(e),
      c = "NAME",
      d = 300;
    function m(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(e)
        .edge("adspixels")
        .batched()
        .get({ fields: s, sort_by: c })
        .then(function (e) {
          var t = e.data;
          return t.map(function (e) {
            var t = e.id,
              n = e.name,
              r = n === void 0 ? "" : n;
            return { hasPermission: !0, id: t, name: r, type: "PIXEL" };
          });
        });
    }
    function p(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("business", e)
        .edge("adspixels")
        .batched()
        .get({ fields: s, limit: d, sort_by: c })
        .then(function (e) {
          var t = e.data;
          return t.map(function (e) {
            var t = e.id,
              n = e.name,
              r = n === void 0 ? "" : n;
            return { hasPermission: !0, id: t, name: r, type: "PIXEL" };
          });
        });
    }
    function _(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("business", e)
        .edge("offline_conversion_data_sets")
        .batched()
        .get({ fields: u, limit: d, sort_by: c })
        .then(function (e) {
          var t = e.data;
          return t.map(function (e) {
            var t = e.id,
              n = e.name,
              r = n === void 0 ? "" : n;
            return { hasPermission: !0, id: t, name: r, type: "DATA_SET" };
          });
        });
    }
    ((l.loadAdAccountPixels = m),
      (l.loadBusinessAccountPixels = p),
      (l.loadBusinessAccountDataSets = _));
  },
  98,
);
