__d(
  "AdsAdDestinationUrlUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t, n, r;
      return e == null
        ? null
        : (t = (n = e.link_data) == null ? void 0 : n.link) != null
          ? t
          : (r = e.template_data) == null
            ? void 0
            : r.link;
    }
    i.getAdDestinationUrl = e;
  },
  66,
);
