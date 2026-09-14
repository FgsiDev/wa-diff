__d(
  "AdsUEditorAdgroupWebsiteDestinationOptimizationAlternateURLMutators",
  ["AdsAdgroupRecordAccessors", "immutable"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.destination_spec.website.optimization.alternative_urls.set(
        r("immutable").List(
          t
            .filter(function (e) {
              return e.default_url != null;
            })
            .map(function (e) {
              return r("immutable").Map({
                default_url: e.default_url,
                default_value_weight: e.default_value_weight,
                default_value_weight_direction:
                  e.default_value_weight_direction,
                url: e.default_url,
                value_weight: e.default_value_weight,
                value_weight_direction: e.default_value_weight_direction,
              });
            }),
        ),
        e,
      );
    }
    function s(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.destination_spec.website.optimization.alternative_urls.delete(
        e,
      );
    }
    function u(e, t, n) {
      var o,
        a =
          (o = e.creative) == null ||
          (o = o.destination_spec) == null ||
          (o = o.website) == null ||
          (o = o.optimization) == null
            ? void 0
            : o.alternative_urls;
      if (a != null && a.size > t) {
        var i,
          l,
          s =
            (i = e.creative) == null ||
            (i = i.destination_spec) == null ||
            (i = i.website) == null ||
            (i = i.optimization) == null ||
            (i = i.alternative_urls) == null
              ? void 0
              : i.update(t, function (e) {
                  return e.setIn(["url"], n);
                });
        return (l = r("AdsAdgroupRecordAccessors").creative) == null ||
          (l = l.destination_spec) == null ||
          (l = l.website) == null ||
          (l = l.optimization) == null
          ? void 0
          : l.alternative_urls.set(s, e);
      }
      return e;
    }
    function c(e, t) {
      var n,
        o =
          (n = e.creative) == null ||
          (n = n.destination_spec) == null ||
          (n = n.website) == null ||
          (n = n.optimization) == null ||
          (n = n.alternative_urls) == null
            ? void 0
            : n.get(t);
      if (o != null) {
        var a,
          i,
          l =
            (a = e.creative) == null ||
            (a = a.destination_spec) == null ||
            (a = a.website) == null ||
            (a = a.optimization) == null ||
            (a = a.alternative_urls) == null
              ? void 0
              : a.update(t, function (e) {
                  return e.deleteIn(["url"]);
                });
        return (i = r("AdsAdgroupRecordAccessors").creative) == null ||
          (i = i.destination_spec) == null ||
          (i = i.website) == null ||
          (i = i.optimization) == null
          ? void 0
          : i.alternative_urls.set(l, e);
      }
      return e;
    }
    function d(e, t) {
      var n,
        o =
          (n = e.creative) == null ||
          (n = n.destination_spec) == null ||
          (n = n.website) == null ||
          (n = n.optimization) == null ||
          (n = n.alternative_urls) == null
            ? void 0
            : n.get(t);
      if (o != null) {
        var a,
          i,
          l =
            (a = e.creative) == null ||
            (a = a.destination_spec) == null ||
            (a = a.website) == null ||
            (a = a.optimization) == null ||
            (a = a.alternative_urls) == null
              ? void 0
              : a.update(t, function (e) {
                  return e.deleteIn(["value_weight"]);
                });
        return (i = r("AdsAdgroupRecordAccessors").creative) == null ||
          (i = i.destination_spec) == null ||
          (i = i.website) == null ||
          (i = i.optimization) == null
          ? void 0
          : i.alternative_urls.set(l, e);
      }
      return e;
    }
    function m(e, t) {
      var n,
        o =
          (n = e.creative) == null ||
          (n = n.destination_spec) == null ||
          (n = n.website) == null ||
          (n = n.optimization) == null ||
          (n = n.alternative_urls) == null
            ? void 0
            : n.get(t);
      if (o != null) {
        var a,
          i,
          l =
            (a = e.creative) == null ||
            (a = a.destination_spec) == null ||
            (a = a.website) == null ||
            (a = a.optimization) == null ||
            (a = a.alternative_urls) == null
              ? void 0
              : a.update(t, function (e) {
                  return e.deleteIn(["value_weight_direction"]);
                });
        return (i = r("AdsAdgroupRecordAccessors").creative) == null ||
          (i = i.destination_spec) == null ||
          (i = i.website) == null ||
          (i = i.optimization) == null
          ? void 0
          : i.alternative_urls.set(l, e);
      }
      return e;
    }
    function p(e, t) {
      var n,
        o =
          (n = e.creative) == null ||
          (n = n.destination_spec) == null ||
          (n = n.website) == null ||
          (n = n.optimization) == null ||
          (n = n.alternative_urls) == null
            ? void 0
            : n.get(t);
      if (o != null) {
        var a,
          i,
          l =
            (a = e.creative) == null ||
            (a = a.destination_spec) == null ||
            (a = a.website) == null ||
            (a = a.optimization) == null ||
            (a = a.alternative_urls) == null
              ? void 0
              : a.delete(t);
        return (i = r("AdsAdgroupRecordAccessors").creative) == null ||
          (i = i.destination_spec) == null ||
          (i = i.website) == null ||
          (i = i.optimization) == null
          ? void 0
          : i.alternative_urls.set(l, e);
      }
      return e;
    }
    function _(e, t, n, o) {
      var a;
      (n === void 0 && (n = 0), o === void 0 && (o = "increase"));
      var i =
        (a = e.creative) == null ||
        (a = a.destination_spec) == null ||
        (a = a.website) == null ||
        (a = a.optimization) == null
          ? void 0
          : a.alternative_urls;
      return i != null
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.website.optimization.alternative_urls.set(
            r("immutable").List(
              [].concat(i.toArray(), [
                r("immutable").Map({
                  url: t,
                  value_weight: n,
                  value_weight_direction: o,
                }),
              ]),
            ),
            e,
          )
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.website.optimization.alternative_urls.set(
            r("immutable").List([
              r("immutable").Map({
                url: t,
                value_weight: n,
                value_weight_direction: o,
              }),
            ]),
            e,
          );
    }
    function f(e) {
      var t,
        n =
          (t = e.creative) == null ||
          (t = t.destination_spec) == null ||
          (t = t.website) == null ||
          (t = t.optimization) == null ||
          (t = t.alternative_urls) == null
            ? void 0
            : t.toArray();
      return n != null
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.website.optimization.alternative_urls.set(
            r("immutable").List(
              n
                .filter(function (e) {
                  return e.get("default_url") != null;
                })
                .map(function (e) {
                  return r("immutable").Map({
                    default_url: e.get("default_url"),
                    default_value_weight: e.get("default_value_weight"),
                    default_value_weight_direction: e.get(
                      "default_value_weight_direction",
                    ),
                    url: e.get("default_url"),
                    value_weight: e.get("default_value_weight"),
                    value_weight_direction: e.get(
                      "default_value_weight_direction",
                    ),
                  });
                }),
            ),
            e,
          )
        : e;
    }
    ((l.setWebsiteDestinationOptimizationAlternativeURLStatus = e),
      (l.clearWebsiteDestinationOptimizationAlternativeURLStatus = s),
      (l.updateWebsiteDestinationOptimizationAlternativeURLLinkValue = u),
      (l.deleteWebsiteDestinationOptimizationAlternativeURLLink = c),
      (l.deleteWebsiteDestinationOptimizationAlternativeURLValueWeight = d),
      (l.deleteWebsiteDestinationOptimizationAlternativeURLValueWeightDirection =
        m),
      (l.deleteWebsiteDestinationOptimizationAlternativeURLNewLink = p),
      (l.addWebsiteDestinationOptimizationAlternativeURLNewLink = _),
      (l.resetWebsiteDestinationOptimizationAlternativeURLStatus = f));
  },
  98,
);
