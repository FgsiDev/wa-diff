__d(
  "SignalsConversionTypeaheadLogger",
  ["AdsInterfacesLogger", "FBJSON"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      r("AdsInterfacesLogger").log(
        {
          data:
            ((n = {}), (n.signals_ui_event_data = o("FBJSON").stringify(t)), n),
          eventName: e,
        },
        r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
      );
    }
    function s(e) {
      r("AdsInterfacesLogger").log(
        { eventName: e },
        r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
      );
    }
    function u(e, t) {
      var n;
      r("AdsInterfacesLogger").log(
        {
          data:
            ((n = {}), (n.signals_ui_event_data = o("FBJSON").stringify(t)), n),
          eventName: e,
        },
        r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
      );
    }
    ((l.logApiFetchingError = e),
      (l.logApiFetchingSuccess = s),
      (l.logUsage = u));
  },
  98,
);
