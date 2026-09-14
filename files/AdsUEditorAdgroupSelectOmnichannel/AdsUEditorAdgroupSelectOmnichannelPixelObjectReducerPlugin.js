__d(
  "AdsUEditorAdgroupSelectOmnichannelPixelObjectReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsOmnichannelTrackingSpecsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorCampaignDeliveryChangeOmnichannelPixelObjectActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                a = e;
              if (t.clear === !0) {
                var i,
                  l = o(
                    "AdsOmnichannelTrackingSpecsUtils",
                  ).removeOffsiteConversionPixelTrackingSpec(
                    (i = a.tracking_specs) == null ? void 0 : i.toJS(),
                  );
                return r("AdsAdgroupRecordAccessors").tracking_specs.set(
                  r("immutable").fromJS(l),
                  a,
                );
              }
              if (t.isCollabAdsASC === !0) return a;
              var s = (n = t.pixelData) == null ? void 0 : n.pixel_id;
              if (s != null) {
                var u,
                  c = o(
                    "AdsOmnichannelTrackingSpecsUtils",
                  ).addOffsiteConversionPixelTrackingSpec(
                    (u = a.tracking_specs) == null ? void 0 : u.toJS(),
                    s,
                  );
                a = r("AdsAdgroupRecordAccessors").tracking_specs.set(
                  r("immutable").fromJS(c),
                  a,
                );
              }
              return a;
            });
          },
          o("AdsUEditorCampaignDeliveryChangeOmnichannelPixelObjectActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
