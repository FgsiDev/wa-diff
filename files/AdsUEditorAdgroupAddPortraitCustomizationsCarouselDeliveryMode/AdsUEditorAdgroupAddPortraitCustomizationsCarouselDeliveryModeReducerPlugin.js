__d(
  "AdsUEditorAdgroupAddPortraitCustomizationsCarouselDeliveryModeReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupAddPortraitCustomizationsCarouselDeliveryModeDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.portrait_customizations.carousel_delivery_mode.set(
                t.carouselDeliveryMode,
                e,
              );
            });
          },
          o(
            "AdsUEditorAdgroupAddPortraitCustomizationsCarouselDeliveryModeDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
