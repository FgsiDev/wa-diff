__d(
  "adsUeditorAdgroupDestinationUrlSelectorUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t, n, r;
      if (e == null) return "";
      var o = e == null || (t = e.link_data) == null ? void 0 : t.link,
        a = e == null || (n = e.template_data) == null ? void 0 : n.link;
      return (r = o != null ? o : a) != null ? r : "";
    }
    i.adDestinationUrl = e;
  },
  66,
);
