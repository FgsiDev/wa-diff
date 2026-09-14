__d(
  "AdsCampaignPromotedObjectVariationMutators",
  [
    "AccountAttributionEvent",
    "AdCampaignDestination",
    "AdsAPIBidStrategies",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBwIUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsOptimizationMutationUtils",
    "AdsPlacementReducerUtils",
    "AdsPromotedObjectTypes",
    "adsUEditorCampaignCanUseEngagedVideoViewWindowSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i,
        l,
        s =
          (i = (l = e.bid_strategy) != null ? l : n.bid_strategy) != null
            ? i
            : r("AdsAPIBidStrategies").NONE,
        u = o("AdsOptimizationMutationUtils").getDefaultAttributionSpec(
          t,
          r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
          r("AdsPromotedObjectTypes").PRODUCT_SET,
          a,
          s,
          null,
          o("AdsBwIUtils").isBwICampaignGroup(n),
          r("AdsAPIObjectives").OUTCOME_SALES,
        ).attribution_spec;
      return r("AdsCampaignRecordAccessors").attribution_spec.set(
        r("immutable").fromJS(u),
        e,
      );
    }
    function s(e, t, n) {
      var a,
        i,
        l = o(
          "adsUEditorCampaignCanUseEngagedVideoViewWindowSelector",
        ).isEVCSupportedForL3CatalogOnFlow(
          r("AdsPromotedObjectTypes").PRODUCT_SET,
          t,
          e,
        ),
        s =
          (a = (i = n.attribution_spec) == null ? void 0 : i.toJS()) != null
            ? a
            : [],
        u = s.some(function (e) {
          return (
            e.event_type === r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW
          );
        });
      return u && !l
        ? ((s = s.filter(function (e) {
            return (
              e.event_type !== r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW
            );
          })),
          r("AdsCampaignRecordAccessors").attribution_spec.set(
            r("immutable").fromJS(s),
            n,
          ))
        : l && t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
          ? ((s = s
              .filter(function (e) {
                return (
                  e.event_type !==
                  r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW
                );
              })
              .concat({
                event_type: r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW,
                window_days: 1,
              })),
            r("AdsCampaignRecordAccessors").attribution_spec.set(
              r("immutable").fromJS(s),
              n,
            ))
          : n;
    }
    function u(t, n, a, i, l) {
      var u,
        c = "PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL",
        d = r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
      return o("AdsMutators").chain(
        (u = r("AdsCampaignRecordAccessors")).destination_type.set(
          r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL,
        ),
        u.promoted_object.omnichannel_object.delete,
        u.promoted_object.pixel_id.set(n),
        u.promoted_object.application_id.delete,
        u.promoted_object.variation.set(c),
        u.optimization_goal.set(d),
        u.promoted_object.custom_event_type.set("PURCHASE"),
        function (t) {
          return e(t, a, i, d);
        },
        function (e) {
          return s(c, d, e);
        },
        function (e) {
          return o("AdsPlacementReducerUtils").resetPlacement(e, l);
        },
      )(t);
    }
    ((l.setDefaultAttributionSpec = e),
      (l.modifyAttributionSpecOnVariationSwitch = s),
      (l.setProductSetAndWebsiteAndPhoneCallVariation = u));
  },
  98,
);
