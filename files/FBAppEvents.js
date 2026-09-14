__d(
  "FBAppEvents",
  ["ApiClient", "FBPixelEndpoint"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      var i = {};
      (r != null && (i.vts = r.toString()),
        a != null && (i.at = a),
        o("FBPixelEndpoint").sendEvent(e.toString(), t, n, i));
    }
    function s(e, t, n, o) {
      var a = "/" + t + "/user_properties",
        i = { data: [{ user_unique_id: e, custom_data: n }] };
      r("ApiClient").graph(a, "post", i, o);
    }
    ((l.logEvent = e), (l.updateUserProperties = s));
  },
  98,
);
