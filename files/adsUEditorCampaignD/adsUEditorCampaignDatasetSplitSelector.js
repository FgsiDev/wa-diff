__d(
  "adsUEditorCampaignDatasetSplitSelector",
  [
    "AdsAPICampaignPaths",
    "AdsAccountStore",
    "AdsUEditorCampaignBulkSelectors",
    "AdsUEditorDatasetSplitUtils",
    "LoadObject",
    "adsCreateRelayStore",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsSignalsConversionTypeaheadSelectedPixelIDSelector",
    "adsUEditorCampaignPromotedObjectSelector",
    "adsUEditorCampaignUniformSelectedPixelIDSelector",
    "useGetDatasetSplitByAdAccountQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("adsCreateRelayStore")(
        r("useGetDatasetSplitByAdAccountQuery.graphql"),
      ).fluxGetSelector(),
      u = (e = r("adsCreateSelector"))(
        [r("AdsAccountStore").getSelectedAccountID, s],
        function (t, n) {
          if (
            !t ||
            !o("AdsUEditorDatasetSplitUtils").isDatasetSplitAccountEligible()
          )
            return r("LoadObject").withValue(
              { dataset_split_maps: [] },
              { creatorModuleID: i.id },
            );
          var e = n({ adAccountID: t, shouldSkip: !1 });
          return e.hasValue()
            ? e.mapValue(function (e) {
                var t,
                  n,
                  r =
                    (t =
                      e == null || (n = e.ad_account) == null
                        ? void 0
                        : n.dataset_splits) != null
                      ? t
                      : [];
                return { dataset_split_maps: r };
              })
            : r("LoadObject").withValue(
                { dataset_split_maps: [] },
                { creatorModuleID: i.id },
              );
        },
        { name: i.id + ".adsUEditorCampaignDatasetSplitDataSelector" },
      ),
      c = e(
        [u],
        function (t) {
          return t.mapValue(function (e) {
            var t,
              n =
                (t = e == null ? void 0 : e.dataset_split_maps) != null
                  ? t
                  : [];
            return n
              .map(function (e) {
                var t,
                  n,
                  r =
                    (t =
                      (n = e.dataset_splits) == null
                        ? void 0
                        : n.filter(function (e) {
                            var t = e.filter_key;
                            return t != null && t.toLowerCase() === "brand";
                          })) != null
                      ? t
                      : [];
                return babelHelpers.extends({}, e, { dataset_splits: r });
              })
              .filter(function (e) {
                return e.dataset_splits != null && e.dataset_splits.length > 0;
              });
          });
        },
        { name: i.id + ".adsUEditorCampaignDatasetWithSplitsSelector" },
      ),
      d = e(
        [c],
        function (t) {
          var e = t.hasValue() ? t.getValue() : [];
          return o("AdsUEditorDatasetSplitUtils").getDatasetSplitContainerMap(
            e,
            "PIXEL",
          );
        },
        { name: i.id + ".adsUEditorCampaignDatasetSplitPixelsMapSelector" },
      ),
      m = e(
        [
          r("adsSignalsConversionTypeaheadSelectedPixelIDSelector"),
          r("AdsAccountStore").getSelectedAccountID,
          s,
        ],
        function (t, n, r) {
          var e, a;
          if (
            t == null ||
            n == null ||
            !o("AdsUEditorDatasetSplitUtils").isDatasetSplitAccountEligible()
          )
            return !1;
          var i = r({
            adAccountID: n,
            datasetTypes: ["PIXEL"],
            shouldSkip: !1,
          });
          if (!i.hasValue()) return !1;
          var l =
              (e =
                (a = i.getValue()) == null || (a = a.ad_account) == null
                  ? void 0
                  : a.dataset_splits) != null
                ? e
                : [],
            s = o("AdsUEditorDatasetSplitUtils").getDatasetSplitContainerMap(
              l,
              "PIXEL",
            );
          return s.size > 0 && s.has(t);
        },
        { name: i.id + ".adsUEditorCampaignShouldUseDatasetSplitsSelector" },
      ),
      p = e(
        [u, c, d, m, r("AdsAccountStore").getSelectedAccountID],
        function (t, n, r, a, i) {
          return {
            datasetSplitData: t,
            datasetSplitInfoLO: n,
            datasetSplitPixelsMap: r,
            isEligible: o(
              "AdsUEditorDatasetSplitUtils",
            ).isDatasetSplitAccountEligible(),
            isLoading: t.isLoading(),
            hasError: t.hasError(),
            error: t.hasError() ? t.getError() : null,
            shouldUseDatasetSplits: a,
            selectedAccountID: i,
          };
        },
        { name: i.id + ".adsUEditorCampaignDatasetSplitStateSelector" },
      ),
      _ = p,
      f = new Map(),
      g = new Map(),
      h = e(
        [c],
        function (t) {
          if (!t.hasValue()) return f;
          var e = t.getValue(),
            n = new Map();
          if (e != null) {
            for (var r of e)
              if (r.dataset_splits != null)
                for (var o of r.dataset_splits)
                  o.id != null &&
                    n.set(o.id, {
                      filter_key: o.filter_key,
                      filter_value: o.filter_value,
                      id: o.id,
                    });
          }
          return n;
        },
        { name: i.id + ".adsUEditorCampaignDatasetSplitMapSelector" },
      ),
      y = e(
        [c],
        function (t) {
          if (!t.hasValue()) return g;
          var e = t.getValue(),
            n = new Map();
          if (e != null)
            for (var r of e) {
              var o,
                a = (o = r.dataset) == null ? void 0 : o.dataset_id;
              if (a != null && r.dataset_splits != null)
                for (var i of r.dataset_splits) i.id != null && n.set(i.id, a);
            }
          return n;
        },
        { name: i.id + ".adsUEditorSplitIdToDatasetIdMapSelector" },
      ),
      C = e(
        [
          o("adsUEditorCampaignUniformSelectedPixelIDSelector")
            .uniformSelectedPixelIDSelector,
          r("adsUEditorCampaignPromotedObjectSelector"),
          h,
        ],
        function (t, n, r) {
          if (t == null) return [];
          var e = o("AdsUEditorDatasetSplitUtils").getPixelDatasetSplitIds(n);
          if (e == null || e.length === 0 || r.size === 0) return [];
          var a = [];
          for (var i of e) {
            var l = r.get(i);
            l != null && a.push(l);
          }
          return a;
        },
        {
          name:
            i.id + ".adsUEditorCampaignDatasetAttributesTypeaheadStateSelector",
        },
      ),
      b = r("adsGetUniformValueSelector")(
        o("AdsUEditorCampaignBulkSelectors").errorSelectorByPath(
          r("AdsAPICampaignPaths").PROMOTED_OBJECT.DATASET_SPLIT_IDS,
        ),
        null,
      );
    ((l.adsUEditorCampaignDatasetSplitDataSelector = u),
      (l.adsUEditorCampaignDatasetWithSplitsSelector = c),
      (l.adsUEditorCampaignDatasetSplitPixelsMapSelector = d),
      (l.adsUEditorCampaignShouldUseDatasetSplitsSelector = m),
      (l.adsUEditorCampaignDatasetSplitStateSelector = p),
      (l.adsUEditorCampaignDatasetSplitSelector = _),
      (l.adsUEditorCampaignDatasetSplitMapSelector = h),
      (l.adsUEditorSplitIdToDatasetIdMapSelector = y),
      (l.adsUEditorCampaignDatasetAttributesTypeaheadStateSelector = C),
      (l.errorDatasetAttributesSelector = b));
  },
  98,
);
