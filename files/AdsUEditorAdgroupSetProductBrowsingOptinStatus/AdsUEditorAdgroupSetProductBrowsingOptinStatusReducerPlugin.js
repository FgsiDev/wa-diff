__d(
  "AdsUEditorAdgroupSetProductBrowsingOptinStatusReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetProductBrowsingOptinStatusActionFlux",
    "ProductBrowsingAdsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var r = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var a = r.get(n);
                return o(
                  "ProductBrowsingAdsUtils",
                ).maybeUpdateProductBrowsingSpec(
                  e,
                  t.isManual,
                  t.optinStatus,
                  a == null ? void 0 : a.campaignGroup,
                  a == null ? void 0 : a.campaign,
                );
              },
            );
          },
          r("AdsUEditorAdgroupSetProductBrowsingOptinStatusActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
