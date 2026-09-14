__d(
  "AdsUEditorPromotedObjectSetDatasetSplitIDsReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorPromotedObjectSetDatasetSplitIDsDataActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
        {},
        function (e, t) {
          return t.promotedObjectType === r("AdsPromotedObjectTypes").PIXEL
            ? s(e, t.campaignIDs, t)
            : t.promotedObjectType ===
                r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE
              ? u(e, t.campaignIDs, t)
              : e;
        },
        o("AdsUEditorPromotedObjectSetDatasetSplitIDsDataActionFlux")
          .actionType,
      ),
    };
    function s(e, t, n) {
      var a = n.pixelDatasetSplitIDs,
        i = n.pixelID;
      return o("AdsMutators").mutateEach(
        e,
        t,
        o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").promoted_object.dataset_split_ids
            .delete,
          function (e) {
            return a != null
              ? r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.dataset_split_ids.set(r("immutable").List(a))(
                  e,
                )
              : e;
          },
          function (e) {
            return i !== void 0
              ? r("AdsCampaignRecordAccessors").promoted_object.pixel_id.set(i)(
                  e,
                )
              : e;
          },
        ),
      );
    }
    function u(e, t, n) {
      var a = n.offlineDatasetSplitIDs,
        i = n.pixelDatasetSplitIDs,
        l = n.pixelID;
      return o("AdsMutators").mutateEach(
        e,
        t,
        o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").promoted_object.dataset_split_ids
            .delete,
          function (e) {
            var t,
              n,
              o =
                (t =
                  (n = e.promoted_object) == null ||
                  (n = n.omnichannel_object) == null
                    ? void 0
                    : n.pixel) != null
                  ? t
                  : r("immutable").List(),
              a = o.get(0);
            return a == null
              ? e
              : r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.omnichannel_object.pixel.set(
                  r("immutable").List([a.delete("dataset_split_ids")]),
                  e,
                );
          },
          function (e) {
            var t,
              n,
              o =
                (t =
                  (n = e.promoted_object) == null ||
                  (n = n.omnichannel_object) == null
                    ? void 0
                    : n.offline) != null
                  ? t
                  : r("immutable").List(),
              a = o.get(0);
            return a == null
              ? e
              : r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.omnichannel_object.offline.set(
                  r("immutable").List([a.delete("dataset_split_ids")]),
                  e,
                );
          },
          function (e) {
            var t, n, o;
            if (i == null && l == null) return e;
            var a =
                (t =
                  (n = e.promoted_object) == null ||
                  (n = n.omnichannel_object) == null
                    ? void 0
                    : n.pixel) != null
                  ? t
                  : r("immutable").List(),
              s = (o = a.get(0)) != null ? o : r("immutable").Map();
            return (
              i != null && (s = s.set("dataset_split_ids", i)),
              l != null && (s = s.set("pixel_id", l)),
              r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.omnichannel_object.pixel.set(
                r("immutable").List([s]),
                e,
              )
            );
          },
          function (e) {
            var t, n, o;
            if (a == null) return e;
            var i =
                (t =
                  (n = e.promoted_object) == null ||
                  (n = n.omnichannel_object) == null
                    ? void 0
                    : n.offline) != null
                  ? t
                  : r("immutable").List(),
              l = (o = i.get(0)) != null ? o : r("immutable").Map();
            return r(
              "AdsCampaignRecordAccessors",
            ).promoted_object.omnichannel_object.offline.set(
              r("immutable").List([l.set("dataset_split_ids", a)]),
              e,
            );
          },
        ),
      );
    }
    var c = e;
    l.default = c;
  },
  98,
);
