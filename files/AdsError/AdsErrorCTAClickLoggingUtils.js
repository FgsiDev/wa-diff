__d(
  "AdsErrorCTAClickLoggingUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o = Number(e.key),
        a = Number.isFinite(o) ? o : 0;
      r("AdsInterfacesLogger").log(
        {
          eventName: "am_error_custom_call_to_action_clicked",
          eventCategory: "errors",
          data:
            ((n = {}),
            (n.button_type = [t]),
            (n.error_cell_details = "custom_cta"),
            (n.error_code = a),
            (n.error_type = e.level),
            (n.fragment_id = e.fragmentID),
            (n.message = e.message),
            n),
        },
        r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
      );
    }
    l.logErrorCTAClicked = e;
  },
  98,
);
