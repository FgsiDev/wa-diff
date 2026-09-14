__d(
  "AdsUEditorCampaignSetPromotedObjectTypeOmnichannelVariationReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetPromotedObjectTypeOmnichannelVariationDataActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a = t.isSelected,
              i = t.isShopsAdsAutomatedTransformation;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var t = o("AdsMutators").chain(
                r("AdsCampaignRecordAccessors").promoted_object.variation
                  .delete,
              )(e);
              return (
                a || (t = s(t, i != null ? i : !1)),
                r("AdsCampaignRecordAccessors").destination_type.set(
                  r("AdCampaignDestination").WEBSITE,
                  t,
                )
              );
            });
          },
          r(
            "AdsUEditorCampaignSetPromotedObjectTypeOmnichannelVariationDataActionFlux",
          ).actionType,
        ),
      },
      s = function (t, n) {
        var e,
          o,
          a =
            (e = t.promoted_object) == null ||
            (e = e.omnichannel_object) == null ||
            (e = e.onsite) == null ||
            (e = e.get(0)) == null
              ? void 0
              : e.get("onboarding_state"),
          i = r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.omnichannel_object.delete(t);
        return a == null || !n
          ? i
          : r(
              "AdsCampaignRecordAccessors",
            ).promoted_object.omnichannel_object.onsite.set(
              r("immutable").List([
                r("immutable").Map(((o = {}), (o.onboarding_state = a), o)),
              ]),
              i,
            );
      },
      u = e;
    l.default = u;
  },
  98,
);
