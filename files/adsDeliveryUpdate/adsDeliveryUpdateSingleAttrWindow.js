__d(
  "adsDeliveryUpdateSingleAttrWindow",
  [
    "AccountAttributionEvent",
    "AdvertiserSiloedValueOptimizationGoalGating",
    "adsDeliveryUpdateClickThroughAttributionWindow",
    "adsDeliveryUpdateEngagedVideoViewAttributionWindow",
    "adsDeliveryUpdateViewThroughAttributionWindow",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return o(
        "AdvertiserSiloedValueOptimizationGoalGating",
      ).isAdvertiserSiloedValueOptimizationGoalEnabled()
        ? r("immutable").fromJS([])
        : t === r("AccountAttributionEvent").CLICK_THROUGH
          ? r("immutable").fromJS(
              r("adsDeliveryUpdateClickThroughAttributionWindow")(e, n),
            )
          : t === r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW
            ? r("immutable").fromJS(
                r("adsDeliveryUpdateEngagedVideoViewAttributionWindow")(e, n),
              )
            : r("immutable").fromJS(
                r("adsDeliveryUpdateViewThroughAttributionWindow")(e, n),
              );
    }
    l.default = e;
  },
  98,
);
