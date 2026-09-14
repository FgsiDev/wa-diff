__d(
  "AdsUEditorDatasetSplitUtils",
  [
    "AdsAPIObjectives",
    "AdsPromotedObjectTypes",
    "AdsUEditorDatasetSplitLightweightUtils",
    "SignalsOptimizationSourceContainer",
    "SignalsStatusEnum",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      var n = new Map();
      try {
        e == null ||
          e.forEach(function (e) {
            var o = e.dataset;
            if (o != null && !(t != null && o.dataset_type !== t)) {
              var a = o.dataset_id,
                i = o.is_unavailable,
                l = o.last_fired_time,
                s = o.name;
              if (a != null && s != null) {
                var u,
                  c = new (r("SignalsOptimizationSourceContainer"))(
                    a,
                  ).fromPixelRawData({
                    id: a,
                    isUnavailable: !!i,
                    lastFiredTime:
                      (u = l == null ? void 0 : l.toString()) != null ? u : "",
                    name: s,
                    serverLastFiredTime: "",
                  });
                n.set(a, c);
              }
            }
          });
      } catch (e) {
        return new Map();
      }
      return n;
    }
    function u(e) {
      return (
        e === r("AdsPromotedObjectTypes").PIXEL ||
        e === r("AdsPromotedObjectTypes").WEB_AND_APP ||
        e === r("AdsPromotedObjectTypes").MOBILE_APP ||
        e === r("AdsPromotedObjectTypes").WEBSITE ||
        e === r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE
      );
    }
    function c(e, t) {
      return !(
        !o(
          "AdsUEditorDatasetSplitLightweightUtils",
        ).isDatasetSplitAccountEligible() ||
        !u(e) ||
        t == null ||
        t.length <= 0
      );
    }
    function d(e, t, n) {
      if (e == null) return null;
      var r = c(t, n);
      if (!r) return null;
      var o =
        n == null
          ? void 0
          : n.find(function (t) {
              var n = t.dataset;
              return (n == null ? void 0 : n.dataset_id) === e;
            });
      return o == null ? null : o;
    }
    function m(e, t, n) {
      if (
        !o(
          "AdsUEditorDatasetSplitLightweightUtils",
        ).isDatasetSplitAccountEligible() ||
        e == null
      )
        return null;
      if (
        t === o("AdsAPIObjectives").LINK_CLICKS ||
        t === o("AdsAPIObjectives").OUTCOME_AWARENESS
      ) {
        var r =
          n == null
            ? void 0
            : n.find(function (t) {
                var n = t.dataset;
                return (n == null ? void 0 : n.dataset_id) === e;
              });
        return r;
      }
      return null;
    }
    function p(e, t) {
      var n = e ? e.asMutable() : r("immutable").List().asMutable(),
        o = e
          ? new Set(
              e.map(function (e) {
                return e.id;
              }),
            )
          : new Set();
      for (var a of t.entries()) {
        var i,
          l = a[0],
          s = a[1];
        o.has(l) ||
          n.push({
            id: l,
            cluster: { app: null, dataSetID: l, pixelID: l },
            name: (i = s.name) != null ? i : "",
            displayID: s.id,
            status: r("SignalsStatusEnum").ACTIVE,
            isDatasetSplit: !0,
          });
      }
      return n.asImmutable();
    }
    function _(e, t, n, r) {
      if (
        !o(
          "AdsUEditorDatasetSplitLightweightUtils",
        ).isDatasetSplitAccountEligible()
      )
        return null;
      if (
        (t === o("AdsAPIObjectives").LINK_CLICKS ||
          t === o("AdsAPIObjectives").OUTCOME_AWARENESS) &&
        r !== "" &&
        e != null
      ) {
        var a = m(e, t, n);
        return a;
      }
      return null;
    }
    function f(e, t) {
      var n = o(
          "AdsUEditorDatasetSplitLightweightUtils",
        ).extractFilterPairsFromPixelSplits(e, t),
        r = o(
          "AdsUEditorDatasetSplitLightweightUtils",
        ).getMatchingAppDatasetSplitIdsByFilterPairs(n, t);
      return r.length > 0 ? r[0] : null;
    }
    function g(e, t) {
      var n = o(
          "AdsUEditorDatasetSplitLightweightUtils",
        ).extractFilterPairsFromPixelSplits(e, t),
        r = o(
          "AdsUEditorDatasetSplitLightweightUtils",
        ).getMatchingOfflineDatasetSplitIdsByFilterPairs(n, t);
      return r.length > 0 ? r[0] : null;
    }
    function h(e) {
      if (
        !o(
          "AdsUEditorDatasetSplitLightweightUtils",
        ).isDatasetSplitAccountEligible()
      )
        return {
          datasetSplitPixelMap: r("immutable").Map(),
          datasetSplitOfflineMap: r("immutable").Map(),
        };
      var t = e != null && e.hasValue() ? e.getValue() : [];
      return {
        datasetSplitPixelMap: r("immutable").Map(s(t, "PIXEL")),
        datasetSplitOfflineMap: r("immutable").Map(s(t, "OFFLINE")),
      };
    }
    function y(e, t, n) {
      return e === r("AdsAPIObjectives").LINK_CLICKS ||
        e === r("AdsAPIObjectives").OUTCOME_AWARENESS
        ? n
        : e === r("AdsAPIObjectives").OUTCOME_SALES
          ? o("AdsUEditorDatasetSplitLightweightUtils").getPixelDatasetSplitIds(
              t,
            )
          : null;
    }
    function C(e, t) {
      var n = new Map(),
        r = new Set(),
        o = new Set(e);
      t.forEach(function (e) {
        var t;
        (t = e.dataset_splits) == null ||
          t.forEach(function (e) {
            var t = e.filter_value,
              a = e.id;
            a != null && t != null && (n.set(a, t), o.has(a) && r.add(t));
          });
      });
      var a = new Map();
      return (
        e.forEach(function (e) {
          var t;
          a.set(e, (t = n.get(e)) != null ? t : "");
        }),
        t.forEach(function (e) {
          var t,
            n,
            o,
            i = (t = e.dataset) == null ? void 0 : t.dataset_id;
          if (i != null) {
            var l =
              (n =
                (o = e.dataset_splits) == null
                  ? void 0
                  : o.filter(function (e) {
                      return e.filter_value != null && r.has(e.filter_value);
                    })) != null
                ? n
                : [];
            if (l.length > 0) {
              var s = l
                .map(function (e) {
                  return e.filter_value;
                })
                .filter(Boolean);
              s.length > 0 && a.set(i, s.join(", "));
            }
          }
        }),
        a.size > 0 ? a : void 0
      );
    }
    function b(e, t, n) {
      return e == null || t == null || t.length === 0
        ? null
        : o(
            "AdsUEditorDatasetSplitLightweightUtils",
          ).getMatchingAppAndOfflineSplitIDs(t, n);
    }
    ((l.extractFilterPairsByDatasetId = (e = o(
      "AdsUEditorDatasetSplitLightweightUtils",
    )).extractFilterPairsByDatasetId),
      (l.extractFilterPairsFromPixelSplits =
        e.extractFilterPairsFromPixelSplits),
      (l.getMatchingAppAndOfflineSplitIDs = e.getMatchingAppAndOfflineSplitIDs),
      (l.getMatchingAppDatasetSplitIdsByFilterPairs =
        e.getMatchingAppDatasetSplitIdsByFilterPairs),
      (l.getMatchingOfflineDatasetSplitIdsByFilterPairs =
        e.getMatchingOfflineDatasetSplitIdsByFilterPairs),
      (l.getPixelDatasetSplitIds = e.getPixelDatasetSplitIds),
      (l.isDatasetSplitAccountEligible = e.isDatasetSplitAccountEligible),
      (l.getFilterPairKey = e.getFilterPairKey),
      (l.getDatasetSplitContainerMap = s),
      (l.isDatasetEligible = c),
      (l.getMatchingDatasetSplits = d),
      (l.getMatchingDatasetSplitsWithObjective = m),
      (l.updateSourcesWithDatasetsFor3PSO = p),
      (l.getMatchingDatasetSplit = _),
      (l.getMatchingAppDatasetSplitIdFromPixelSplits = f),
      (l.getMatchingOfflineDatasetSplitIdFromPixelSplits = g),
      (l.getDatasetSplitMaps = h),
      (l.getDatasetSplitIdsByObjective = y),
      (l.buildDatasetSplitLabelMap = C),
      (l.resolveMatchingSplitIDs = b));
  },
  98,
);
