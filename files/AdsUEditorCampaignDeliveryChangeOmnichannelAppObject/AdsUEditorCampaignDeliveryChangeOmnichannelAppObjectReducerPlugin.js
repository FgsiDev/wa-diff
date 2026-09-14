__d(
  "AdsUEditorCampaignDeliveryChangeOmnichannelAppObjectReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsDeliveryOmnichannelUtils",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeOmnichannelAppObjectActionFlux",
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
              var n,
                a,
                i = e;
              if (t.clear === !0)
                return (
                  (i = o(
                    "AdsDeliveryOmnichannelUtils",
                  ).setEventTypeForOmnichannelPixelObject(i, null)),
                  r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.omnichannel_object.app.set(
                    r("immutable").List(),
                    i,
                  )
                );
              var l = t.appData;
              if (l == null) return i;
              var s =
                  ((n = i.promoted_object) == null ||
                  (n = n.omnichannel_object) == null
                    ? void 0
                    : n.app) || r("immutable").List(),
                u = (a = s.get(0)) != null ? a : r("immutable").Map(),
                c = u.merge(r("immutable").Map(l));
              return (
                Object.prototype.hasOwnProperty.call(l, "custom_event_type") &&
                  (i = o(
                    "AdsDeliveryOmnichannelUtils",
                  ).setEventTypeForOmnichannelPixelObject(
                    i,
                    l.custom_event_type,
                  )),
                r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.omnichannel_object.app.set(
                  r("immutable").List([c]),
                  i,
                )
              );
            });
          },
          o("AdsUEditorCampaignDeliveryChangeOmnichannelAppObjectActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
