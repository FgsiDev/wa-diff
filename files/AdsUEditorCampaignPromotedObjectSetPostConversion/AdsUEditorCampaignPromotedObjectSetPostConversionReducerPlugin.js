__d(
  "AdsUEditorCampaignPromotedObjectSetPostConversionReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignPromotedObjectSetPostConversionDataActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              if (t.clear === !0)
                return r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.post_conversions.delete(e);
              if (
                t.customEventType !== void 0 ||
                t.pixelRule !== void 0 ||
                t.postConversionAttribute !== void 0
              ) {
                var n;
                return r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.post_conversions.set(
                  r("immutable").List([
                    r("immutable").Map(
                      ((n = {}),
                      (n.custom_event_type = t.customEventType),
                      (n.pixel_rule = t.pixelRule),
                      (n.post_conversion_attribute = t.postConversionAttribute),
                      n),
                    ),
                  ]),
                  e,
                );
              }
              return r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.post_conversions.delete(e);
            });
          },
          o("AdsUEditorCampaignPromotedObjectSetPostConversionDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
