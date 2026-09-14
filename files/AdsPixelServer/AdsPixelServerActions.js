__d(
  "AdsPixelServerActions",
  [
    "AdsInterfacesLogger",
    "AdsPixelLoggingPrefix",
    "AdsPixelServerPixelAttachedDataAction",
    "AdsPixelServerPixelCreatedDataAction",
    "AdsPixelServerReceiveAccountBusinessDataAction",
    "AdsPixelServerReceiveAudienceDataAction",
    "AdsPixelServerReceiveDefaultPixelDataAction",
    "AdsPixelServerReceiveDefaultPromotedObjectDataAction",
    "AdsPixelServerReceiveErrorDataAction",
    "AdsPixelServerReceivePixelAccountsAction",
    "AdsPixelServerReceivePixelAudienceDataAction",
    "AdsPixelServerReceivePixelParametersDataAction",
    "AdsPixelServerReceivePixelSourceStatsByEventDataAction",
    "AdsPixelServerReceivePixelStatsByEventDataAction",
    "AdsPixelServerReceivePixelStatsDataAction",
    "AdsPixelServerReceivePixelsDataAction",
    "AdsPixelServerReceiveRawFiresByEventDataAction",
    "AdsPixelServerWaitForServerResponseDataAction",
    "AdsPixelStatsTypes",
    "AdsTargetingViewActionsLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsTargetingViewActionsLogger").attachLog(
        {
          attachPixel: function () {
            r("AdsPixelServerPixelAttachedDataAction").dispatch(
              {},
              {
                line: "127",
                module: "AdsPixelServerActions.js",
                moduleID: i.id,
              },
            );
          },
          createPixel: function (t) {
            r("AdsPixelServerPixelCreatedDataAction").dispatch(
              { pixel: t },
              {
                line: "130",
                module: "AdsPixelServerActions.js",
                moduleID: i.id,
              },
            );
          },
          receiveError: function (t, n) {
            var e;
            (r("AdsPixelServerReceiveErrorDataAction").dispatch(
              { feedback: { error: t } },
              {
                line: "135",
                module: "AdsPixelServerActions.js",
                moduleID: i.id,
              },
            ),
              r("AdsInterfacesLogger").log(
                {
                  data:
                    ((e = {}),
                    (e.signals_ui_event_data = JSON.stringify({
                      error: t,
                      source: n,
                    })),
                    e),
                  eventName: "pixel_interface_error",
                },
                r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
              ));
          },
          updateAccountBusiness: function (t) {
            r("AdsPixelServerReceiveAccountBusinessDataAction").dispatch(
              { feedback: { business: t } },
              {
                line: "153",
                module: "AdsPixelServerActions.js",
                moduleID: i.id,
              },
            );
          },
          updateAudiences: function (t, n) {
            r("AdsPixelServerReceiveAudienceDataAction").dispatch(
              { feedback: { audience: n, audienceID: t } },
              {
                line: "158",
                module: "AdsPixelServerActions.js",
                moduleID: i.id,
              },
            );
          },
          updateDefaultPixelID: function (t) {
            r("AdsPixelServerReceiveDefaultPixelDataAction").dispatch(
              { data: t },
              {
                line: "163",
                module: "AdsPixelServerActions.js",
                moduleID: i.id,
              },
            );
          },
          updateDefaultPromotedObject: function (t) {
            r("AdsPixelServerReceiveDefaultPromotedObjectDataAction").dispatch(
              { data: t },
              {
                line: "168",
                module: "AdsPixelServerActions.js",
                moduleID: i.id,
              },
            );
          },
          updatePixelAccounts: function (t, n) {
            r("AdsPixelServerReceivePixelAccountsAction").dispatch(
              { feedback: { accounts: n, pixelID: t } },
              {
                line: "176",
                module: "AdsPixelServerActions.js",
                moduleID: i.id,
              },
            );
          },
          updatePixelAudiences: function (t, n, o) {
            r("AdsPixelServerReceivePixelAudienceDataAction").dispatch(
              { feedback: { audiences: n, hasLoadAll: o, pixelID: t } },
              {
                line: "185",
                module: "AdsPixelServerActions.js",
                moduleID: i.id,
              },
            );
          },
          updatePixelParameters: function (t, n, o) {
            r("AdsPixelServerReceivePixelParametersDataAction").dispatch(
              { feedback: { event: n, pixelID: t, stats: o } },
              {
                line: "194",
                module: "AdsPixelServerActions.js",
                moduleID: i.id,
              },
            );
          },
          updatePixels: function (t) {
            r("AdsPixelServerReceivePixelsDataAction").dispatch(
              { feedback: { pixelList: t } },
              {
                line: "202",
                module: "AdsPixelServerActions.js",
                moduleID: i.id,
              },
            );
          },
          updatePixelStats: function (t) {
            var e = t.event,
              n = t.eventsSourceFilter,
              o = t.isUnixTime,
              a = t.pixelID;
            switch (t.statsType) {
              case "pii_lift": {
                r("AdsPixelServerReceivePixelStatsDataAction").dispatch(
                  {
                    event: e,
                    eventsSourceFilter: n,
                    feedback: { isUnixTime: o, pixelID: a, stats: t.stats },
                    statsType: "pii_lift",
                    type: "RECEIVE_PIXEL_STATS",
                  },
                  {
                    line: "212",
                    module: "AdsPixelServerActions.js",
                    moduleID: i.id,
                  },
                );
                break;
              }
              case "pii_keys": {
                r("AdsPixelServerReceivePixelStatsDataAction").dispatch(
                  {
                    event: e,
                    eventsSourceFilter: n,
                    feedback: { isUnixTime: o, pixelID: a, stats: t.stats },
                    statsType: "pii_keys",
                    type: "RECEIVE_PIXEL_STATS",
                  },
                  {
                    line: "226",
                    module: "AdsPixelServerActions.js",
                    moduleID: i.id,
                  },
                );
                break;
              }
              case "had_pii": {
                r("AdsPixelServerReceivePixelStatsDataAction").dispatch(
                  {
                    event: e,
                    eventsSourceFilter: n,
                    feedback: { isUnixTime: o, pixelID: a, stats: t.stats },
                    statsType: "had_pii",
                    type: "RECEIVE_PIXEL_STATS",
                  },
                  {
                    line: "240",
                    module: "AdsPixelServerActions.js",
                    moduleID: i.id,
                  },
                );
                break;
              }
              case "match_keys": {
                r("AdsPixelServerReceivePixelStatsDataAction").dispatch(
                  {
                    event: e,
                    eventsSourceFilter: n,
                    feedback: { isUnixTime: o, pixelID: a, stats: t.stats },
                    statsType: "match_keys",
                    type: "RECEIVE_PIXEL_STATS",
                  },
                  {
                    line: "254",
                    module: "AdsPixelServerActions.js",
                    moduleID: i.id,
                  },
                );
                break;
              }
              default: {
                r("AdsPixelServerReceivePixelStatsDataAction").dispatch(
                  {
                    event: e,
                    eventsSourceFilter: n,
                    feedback: { isUnixTime: o, pixelID: a, stats: t.stats },
                    statsType: t.statsType,
                    type: "RECEIVE_PIXEL_STATS",
                  },
                  {
                    line: "268",
                    module: "AdsPixelServerActions.js",
                    moduleID: i.id,
                  },
                );
                break;
              }
            }
          },
          updatePixelStatsByEvent: function (t) {
            var e = t.event,
              n = t.isUnixTime,
              o = t.pixelID,
              a = t.stats,
              l = t.statsType;
            l === r("AdsPixelStatsTypes").DETECTION_METHOD
              ? r(
                  "AdsPixelServerReceivePixelSourceStatsByEventDataAction",
                ).dispatch(
                  { event: e, isUnixTime: n, pixelID: o, stats: a },
                  {
                    line: "297",
                    module: "AdsPixelServerActions.js",
                    moduleID: i.id,
                  },
                )
              : r("AdsPixelServerReceivePixelStatsByEventDataAction").dispatch(
                  {
                    event: e,
                    feedback: { pixelID: o, stats: a },
                    isUnixTime: n,
                    statsType: l,
                  },
                  {
                    line: "304",
                    module: "AdsPixelServerActions.js",
                    moduleID: i.id,
                  },
                );
          },
          updateRawFiresByEvent: function (t, n, o) {
            r("AdsPixelServerReceiveRawFiresByEventDataAction").dispatch(
              { event: n, feedback: { pixelID: t, raw_fires: o } },
              {
                line: "317",
                module: "AdsPixelServerActions.js",
                moduleID: i.id,
              },
            );
          },
          waitForServerResponse: function () {
            r("AdsPixelServerWaitForServerResponseDataAction").dispatch(
              {},
              {
                line: "326",
                module: "AdsPixelServerActions.js",
                moduleID: i.id,
              },
            );
          },
        },
        {
          prefix: o("AdsPixelLoggingPrefix").AdsPixelLoggingPrefix
            .PIXEL_SERVER_ACTION_,
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
