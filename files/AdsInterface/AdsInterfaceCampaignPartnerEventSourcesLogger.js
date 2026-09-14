__d(
  "AdsInterfaceCampaignPartnerEventSourcesLogger",
  ["AdsInterfacesLogger", "FBJSON"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {}
    function s(e) {}
    function u(e, t, n) {
      var a,
        i = {
          parent_catalog_id: t.parentCatalogID,
          selected_biz_id: t.selectedPartnerID,
          selected_cs_id: t.selectedCatalogSegmentID,
        };
      r("AdsInterfacesLogger").log(
        {
          data:
            ((a = {}),
            (a.signals_ui_event_data = o("FBJSON").stringify(
              babelHelpers.extends({}, i, n),
            )),
            a),
          eventCategory: "errors",
          eventName: e,
        },
        r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
      );
    }
    ((l.logErrorFetchingPartnerEventSources = e),
      (l.logSuccessFetchingPartnerEventSources = s),
      (l.logErrorSettingPromotedObject = u));
  },
  98,
);
