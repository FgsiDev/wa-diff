__d(
  "AdsAdgroupTrackingSpecUpdateUtils",
  ["AdsActionSpecUtils", "AdsAdgroupRecordAccessors", "areEqual", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = e.tracking_specs && e.tracking_specs.toJS();
      if (t == null) return e;
      var n =
        t.filter(function (e) {
          return !Object.prototype.hasOwnProperty.call(e, "custom_conversion");
        }) || [];
      return c(n, e);
    }
    function u(t, n) {
      if (t.length === 0) return s(n);
      var a = t.filter(function (e) {
          return (
            !(e.fb_pixel == null || e.fb_pixel === "") ||
            !(e.offsite_pixel == null || e.offsite_pixel === "") ||
            !!e.custom_conversion
          );
        }),
        i = n.tracking_specs && n.tracking_specs.toJS();
      if (!i) return c(a, n);
      var l = i.some(function (t) {
        var n = t["action.type"],
          o =
            n === "offsite_conversion" ||
            (e || (e = r("areEqual")))(n, ["offsite_conversion"]);
        return o && t.dataset_split != null;
      });
      if (l) return c(o("AdsActionSpecUtils").removeFbPixelOffsiteSpecs(i), n);
      var u = i.filter(function (t) {
        return !(e || (e = r("areEqual")))(t["action.type"], [
          "offsite_conversion",
        ]);
      });
      return c(a.concat(u), n);
    }
    function c(e, t) {
      return e.length
        ? r("AdsAdgroupRecordAccessors").tracking_specs.set(
            r("immutable").fromJS(e),
            t,
          )
        : r("AdsAdgroupRecordAccessors").tracking_specs.delete(t);
    }
    l.mergeWithNewPixelTrackingSpec = u;
  },
  98,
);
