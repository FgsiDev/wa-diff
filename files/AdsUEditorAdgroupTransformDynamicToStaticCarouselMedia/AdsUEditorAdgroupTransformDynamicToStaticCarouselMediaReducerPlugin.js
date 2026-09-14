__d(
  "AdsUEditorAdgroupTransformDynamicToStaticCarouselMediaReducerPlugin",
  [
    "AdsMutators",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupDynamicCarouselMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupTransformDynamicToStaticCarouselMediaActionFlux",
    "nullthrows",
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
            getPage: r("AdsPageStore").getSelector,
          },
          function (e, t, n) {
            var a = n.getPage,
              i = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l = r("nullthrows")(i.get(n)),
                  s = l.campaign,
                  u = l.campaignGroup,
                  c = l.specPlugin;
                return o(
                  "AdsUEditorAdgroupDynamicCarouselMutators",
                ).transformDynamicToStaticCarouselMedia(
                  e,
                  t.account,
                  { campaignGroup: u, campaign: s },
                  t.isRFStoriesCarouselFormatSelected,
                  c,
                  a,
                );
              },
            );
          },
          o("AdsUEditorAdgroupTransformDynamicToStaticCarouselMediaActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
