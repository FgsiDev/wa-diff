__d(
  "AdsUEditorAdgroupTrackingSpecMutators",
  ["AdsActionSpecUtils", "AdsAdgroupRecordAccessors", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsActionSpecUtils").customSpecs(
        (e.tracking_specs || r("immutable").List()).toJS(),
      );
    }
    function s(t, n, a) {
      var i = e(n),
        l = o("AdsActionSpecUtils").removeApplicationSpecs(i),
        s = o("AdsActionSpecUtils").removeDatasetSplitSpecs(l),
        u;
      return (
        a != null
          ? (u = s.concat(
              o(
                "AdsActionSpecUtils",
              ).makeDatasetSplitMobileAppInstallTrackingSpecs(a),
            ))
          : t != null
            ? (u = s.concat(
                o("AdsActionSpecUtils").makeMobileAppInstallTrackingSpecs(t),
              ))
            : (u = s),
        u.length
          ? r("AdsAdgroupRecordAccessors").tracking_specs.set(
              r("immutable").fromJS(u),
              n,
            )
          : r("AdsAdgroupRecordAccessors").tracking_specs.delete(n)
      );
    }
    function u(t, n) {
      var a = e(n),
        i = o("AdsActionSpecUtils").removeProductSetSpecs(a),
        l =
          t == null
            ? i
            : i.concat(o("AdsActionSpecUtils").buildProductSetTrackingSpecs(t));
      return l.length
        ? r("AdsAdgroupRecordAccessors").tracking_specs.set(
            r("immutable").fromJS(o("AdsActionSpecUtils").withoutDuplicates(l)),
            n,
          )
        : r("AdsAdgroupRecordAccessors").tracking_specs.delete(n);
    }
    function c(t, n, a) {
      var i = e(n),
        l = o("AdsActionSpecUtils").mergeConversionToTrackingSpec(i, t, a);
      return r("AdsAdgroupRecordAccessors").tracking_specs.set(
        r("immutable").fromJS(l),
        n,
      );
    }
    function d(t, n) {
      var a = e(t),
        i = o("AdsActionSpecUtils").removeOfflineConversionSpecs(a),
        l = o("AdsActionSpecUtils").removeDatasetSplitOfflineSpecs(i),
        s;
      return (
        n != null && n.length > 0
          ? (s = l.concat(
              o(
                "AdsActionSpecUtils",
              ).makeDatasetSplitOfflineConversionTrackingSpecs(n),
            ))
          : (s = l),
        s.length
          ? r("AdsAdgroupRecordAccessors").tracking_specs.set(
              r("immutable").fromJS(s),
              t,
            )
          : r("AdsAdgroupRecordAccessors").tracking_specs.delete(t)
      );
    }
    function m(t, n) {
      var a = e(t),
        i = o("AdsActionSpecUtils").removeDatasetSplitOffsiteSpecs(a),
        l;
      if (n != null && n.length > 0) {
        var s = o("AdsActionSpecUtils").removeFbPixelOffsiteSpecs(i);
        l = s.concat(
          o(
            "AdsActionSpecUtils",
          ).makeDatasetSplitOffsiteConversionTrackingSpecs(n),
        );
      } else l = i;
      return l.length
        ? r("AdsAdgroupRecordAccessors").tracking_specs.set(
            r("immutable").fromJS(l),
            t,
          )
        : r("AdsAdgroupRecordAccessors").tracking_specs.delete(t);
    }
    ((l.setMobileAppTracking = s),
      (l.setProductLevelReportingTracking = u),
      (l.setTrackingSpec = c),
      (l.setOfflineConversionTracking = d),
      (l.setOffsiteConversionTracking = m));
  },
  98,
);
