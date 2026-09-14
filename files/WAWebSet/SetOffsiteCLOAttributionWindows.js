__d(
  "SetOffsiteCLOAttributionWindows",
  [
    "AccountAttributionEvent",
    "AdsAdditionalOptionsConsts",
    "AdsAdditionalOptionsToggleF2Action",
    "AdsUEditorCampaignDeliveryChangeConversionWindowAction",
    "AdsUEditorCampaignMultiEventAttrWindowAction",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("gkx")("19012");
      (r("AdsUEditorCampaignDeliveryChangeConversionWindowAction").dispatch(
        babelHelpers.extends({}, e, {
          eventType: r("AccountAttributionEvent").CLICK_THROUGH,
          windowDays: 7,
        }),
        {
          line: "41",
          module: "SetOffsiteCLOAttributionWindows.js",
          moduleID: i.id,
        },
      ),
        r("AdsUEditorCampaignDeliveryChangeConversionWindowAction").dispatch(
          babelHelpers.extends({}, e, {
            eventType: r("AccountAttributionEvent").VIEW_THROUGH,
            windowDays: 0,
          }),
          {
            line: "47",
            module: "SetOffsiteCLOAttributionWindows.js",
            moduleID: i.id,
          },
        ),
        r("AdsUEditorCampaignDeliveryChangeConversionWindowAction").dispatch(
          babelHelpers.extends({}, e, {
            eventType: r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW,
            windowDays: 0,
          }),
          {
            line: "53",
            module: "SetOffsiteCLOAttributionWindows.js",
            moduleID: i.id,
          },
        ),
        t ||
          r("AdsAdditionalOptionsToggleF2Action").dispatch(
            {
              sectionKey: o("AdsAdditionalOptionsConsts")
                .AdditionalOptionsSections.delivery,
              visibility: "hidden",
            },
            {
              line: "60",
              module: "SetOffsiteCLOAttributionWindows.js",
              moduleID: i.id,
            },
          ),
        r("AdsUEditorCampaignMultiEventAttrWindowAction").dispatch(
          {
            campaignIDs: e.campaignIDs,
            hostID: e.hostID,
            windowSeconds: 604800,
          },
          {
            line: "67",
            module: "SetOffsiteCLOAttributionWindows.js",
            moduleID: i.id,
          },
        ));
    }
    l.default = e;
  },
  98,
);
