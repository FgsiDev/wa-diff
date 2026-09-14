__d(
  "AdsPEAdObjectDataFetchingUtils",
  ["AdsObjectColumnConfigV2", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.reduce(function (e, n) {
        if (r("AdsObjectColumnConfigV2").fields[n] == null) return e;
        var o = r("nullthrows")(r("AdsObjectColumnConfigV2").fields[n]),
          a = o.level_props.campaign,
          i =
            a != null
              ? a.reduce(function (e, n) {
                  return c(o == null ? void 0 : o.optimizations, n, t)
                    ? [].concat(e, [n])
                    : e;
                }, [])
              : [];
        return [].concat(e, i);
      }, []);
    }
    function s(e, t) {
      return e.reduce(function (e, n) {
        if (r("AdsObjectColumnConfigV2").fields[n] == null) return e;
        var o = r("nullthrows")(r("AdsObjectColumnConfigV2").fields[n]),
          a = o.level_props.ad_set,
          i =
            a != null
              ? a.reduce(function (e, n) {
                  return c(o == null ? void 0 : o.optimizations, n, t)
                    ? [].concat(e, [n])
                    : e;
                }, [])
              : [];
        return [].concat(e, i);
      }, []);
    }
    function u(e, t) {
      return e.reduce(function (e, n) {
        if (r("AdsObjectColumnConfigV2").fields[n] == null) return e;
        var o = r("nullthrows")(r("AdsObjectColumnConfigV2").fields[n]),
          a = o.level_props.ad,
          i =
            a != null
              ? a.reduce(function (e, n) {
                  return c(o == null ? void 0 : o.optimizations, n, t)
                    ? [].concat(e, [n])
                    : e;
                }, [])
              : [];
        return [].concat(e, i);
      }, []);
    }
    function c(e, t, n) {
      if (e == null || e.get(t) == null) return !0;
      var o = r("nullthrows")(e.get(t));
      if (o.date_preset != null) {
        var a = n.timeRange;
        return o.date_preset === "lifetime" ? a.isLifetime() : !0;
      }
      return !0;
    }
    ((l.getAdCampaignGroupFields = e),
      (l.getAdCampaignFields = s),
      (l.getAdgroupFields = u));
  },
  98,
);
