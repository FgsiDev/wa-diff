__d(
  "AdsUEditorCampaignSetCatalogAndProductSetReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsDataAtom",
    "AdsManagerCatalogDataProvider",
    "AdsMutators",
    "AdsUEditorCampaignGroupSetCatalogAndProductSetActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignWAMOStatusFromUpstreamChangeAction",
    "cr:11298",
    "normalizeCatalogVertical",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (t, a) {
            (e || (e = r("AdsDataAtom"))).waitFor([
              r("AdsManagerCatalogDataProvider")
                .toFluxStore()
                .getDispatchToken(),
            ]);
            var l = null,
              s = a.catalogID;
            if (s != null) {
              var u =
                n("cr:11298") != null
                  ? n("cr:11298").get(s)
                  : r("AdsManagerCatalogDataProvider")().get(s);
              if (u.hasValue()) {
                var c, d;
                l =
                  (c =
                    (d = u.getValueEnforcing()) == null
                      ? void 0
                      : d.vertical) != null
                    ? c
                    : null;
              }
            }
            var m = r("normalizeCatalogVertical")(l),
              p = o("AdsMutators").mutateEach(t, a.campaignIDs, function (e) {
                var t =
                  a.productSetID != null
                    ? r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.product_set_id.set(a.productSetID, e)
                    : r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.product_set_id.delete(e);
                return (
                  (t =
                    a.productSetID != null && m != null
                      ? r("AdsCampaignRecordAccessors").catalog_vertical.set(
                          m,
                          t,
                        )
                      : r("AdsCampaignRecordAccessors").catalog_vertical.delete(
                          t,
                        )),
                  t
                );
              });
            return (
              e.addPostDispatchCallback(function () {
                r(
                  "AdsUEditorCampaignWAMOStatusFromUpstreamChangeAction",
                ).dispatch(
                  { campaignIDs: a.campaignIDs, hostID: a.hostID },
                  {
                    line: "84",
                    module:
                      "AdsUEditorCampaignSetCatalogAndProductSetReducerPlugin.js",
                    moduleID: i.id,
                  },
                );
              }),
              p
            );
          },
          o("AdsUEditorCampaignGroupSetCatalogAndProductSetActionFlux")
            .actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
